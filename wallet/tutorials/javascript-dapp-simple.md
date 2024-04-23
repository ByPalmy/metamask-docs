---
description: Create a simple dapp to integrate with MetaMask.
toc_max_heading_level: 4
sidebar_position: 3
---

# Create a simple dapp 

This tutorial walks you through creating a simple JavaScript dapp and integrating it with MetaMask. It demonstrates the basics of connecting to MetaMask: detecting the MetaMask provider, detecting the user's network, and accessing the user's accounts.

:::caution Learning tutorial
This tutorial is for educational purposes and connects to MetaMask using the legacy provider object, `window.ethereum`, for the sake of simplicity.
For deployment in a production environment, we recommend [connecting to MetaMask using EIP-6963](../how-to/connect/index.md) instead. 

[EIP-6963](https://eips.ethereum.org/EIPS/eip-6963) introduces an alternative wallet detection mechanism to the `window.ethereum` provider, and enables dapps to support [wallet interoperability](../concepts/wallet-interoperability.md).

For a full end-to-end tutorial that can be used in production, see the
[Create a simple React dapp](../tutorials/react-dapp-local-state.md) tutorial.
:::

## Prerequisites

- [MetaMask](https://metamask.io/) installed in the browser of your choice on your development machine.

- A text editor of your choice, such as [VS Code](https://code.visualstudio.com/).
 You can install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
extension for VS Code to easily launch a local development server for your dapp.

- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Steps

### 1. Set up a new project

Set up a new project with the following structure:

```text
simple-dapp/
├─ src/
│  ├─ index.js
├─ dist/
│  ├─ index.html
```

This tutorial will use the [`@metamask/detect-provider`](https://github.com/MetaMask/detect-provider) module and a bundler, [Webpack](https://github.com/webpack/webpack), to compile the module and create an output script `dist/main.js`.

Add the following code to `dist/index.html`:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Simple dapp</title>
</head>
<body>
  <script src="../dist/index.js"></script>  <!-- Links to the JavaScript bundle created by Webpack -->
</body>
</html>
```

### 2. Install and configure Webpack

Navigate to the root of your `simple-dapp` directory and run the following commands to initialize npm and install Webpack.

```bash 
npm init -y && npm install --save-dev webpack webpack-cli
```

Create a `webpack.config.js` in the root of your project with the following configuration:

```js title="webpack.config.js"
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development",
};
```

Then, edit `package.json` to include a build script:

```json title="package.json"
"scripts": {
  "build": "webpack"
}
```

When you run `npm run build` from your terminal, Webpack bundles the content in `src/index.js` into `dist/main.js`, which is linked in `index.html`.

### 3. Detect MetaMask

Install the `@metamask/detect-provider` module in your project directory:

```bash
npm i @metamask/detect-provider
```

Add the following code to `src/index.js` to detect the MetaMask provider using `@metamask/detect-provider`:

```js title="index.js"
import detectEthereumProvider from "@metamask/detect-provider";

async function setup() {
  const provider = await detectEthereumProvider();

  if (provider && provider === window.ethereum) {
    console.log("MetaMask is available!");
    startApp(provider); // Initialize your dapp with MetaMask.
  } else {
    console.log("Please install MetaMask!");
  }
}

function startApp(provider) {
  if (provider !== window.ethereum) {
    console.error("Do you have multiple wallets installed?");
  }
}

window.addEventListener("load", setup);
```

#### Serve the project

To test and verify your project works with MetaMask, serve your project through a local server. 
If using VS Code and [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), right-click the `index.html` file, and select **Open with Live Server**. 

Alternatively, you can install `http-server` using the following command:

```bash
npm install -g http-server
```

Then navigate to the project directory, and run `http-server`. 

Open your browser and go to the provided local server URL (typically http://127.0.0.1:8080).

### 4. Determine a user's connected network

[Detect the user's network](../how-to/connect/detect-metamask.md) to ensure all RPC requests are submitted to the currently connected network.
Add the following code to `src/index.js`, which uses the [`eth_chainId`](/wallet/reference/eth_chainId)
RPC method to detect the chain ID of the user's current network, and listens to the [`chainChanged`](/wallet/reference/provider-api/#chainchanged) provider event to detect when the user changes networks:

```js title="index.js"
const chainId = await window.ethereum 
  .request({ method: "eth_chainId" });

window.ethereum
  .on("chainChanged", handleChainChanged);

function handleChainChanged(chainId) {
  // We recommend reloading the page, unless you must do otherwise.
  window.location.reload();
}
```
For more information on Chain IDs, see [Detect a user's network](/wallet/how-to/manage-networks/detect-network/#chain-ids)

### 5. Access an account

To interact with Ethereum on the user's behalf, such as sending transactions or requesting balances, your dapp needs to [access the user's accounts](../how-to/connect/access-accounts) by calling [`eth_requestAccounts`](/wallet/reference/eth_requestaccounts).

Add the following code to `src/index.js`, which creates a button to allow users to connect to MetaMask from your dapp.
Selecting the button activates the call to `eth_requestAccounts`, allowing you to access the user's accounts.

```jsx title="index.js"
// You should only attempt to request the user's account in response to user interaction, such as
// selecting a button. Otherwise, you risk spamming the user. If you fail to retrieve
// the user's account, you should encourage the user to initiate the attempt.
const ethereumButton = document.querySelector(".enableEthereumButton");
const showAccount = document.querySelector(".showAccount");

ethereumButton.addEventListener("click", () => {
  getAccount();
});

// While awaiting the call to eth_requestAccounts, you should disable any buttons the user can
// select to initiate the request. MetaMask rejects any additional requests while the first is still
// pending.
async function getAccount() {
  const accounts = await window.ethereum
    .request({ method: "eth_requestAccounts" })
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error.
          // If this happens, the user rejected the connection request.
          console.log("Please connect to MetaMask.");
        } else {
          console.error(err);
        }
      });
  const account = accounts[0];
  showAccount.innerHTML = account;
}
```

Add the following HTML code to the body of `dist/index.html`, which displays the button and the current account:

```html title="index.html"
<!-- Display a connect button and the current account -->
<button class="enableEthereumButton">Enable Ethereum</button>
<h2>Account: <span class="showAccount"></span></h2>
```

## Example simple dapp 

The following code samples contain the full simple dapp JavaScript and HTML code that this tutorial walks through. You can copy these full examples to get started quickly!

### JavaScript

```jsx title="index.js"
/*****************************************/
/* Detect the MetaMask Ethereum provider */
/*****************************************/

import detectEthereumProvider from '@metamask/detect-provider';

const provider = await detectEthereumProvider();

if (!provider) {
  console.log('Please install MetaMask!');
} else {
  if (provider !== window.ethereum) {
    console.error('Do you have multiple wallets installed?');
  }
}

/**********************************************************/
/* Handle chain (network) and chainChanged (per EIP-1193) */
/**********************************************************/

const handleChainChanged = () => {
  window.location.reload();
}; //Reload the page to reflect the new chain.

window.ethereum.on('chainChanged', handleChainChanged);

/***********************************************************/
/* Handle user accounts and accountsChanged (per EIP-1193) */
/***********************************************************/

let currentAccount = null;

const handleAccountsChanged = (accounts) => {
  if (accounts.length === 0) {
    console.log('Please connect to MetaMask.');
  } else if (accounts[0] !== currentAccount) {
    currentAccount = accounts[0];
    showAccount.innerHTML = currentAccount;
  }
};

window.ethereum.request({ method: 'eth_accounts' })
  .then(handleAccountsChanged)
  .catch((err) => {
    console.error(err);
  });

window.ethereum.on('accountsChanged', handleAccountsChanged);

/*********************************************/
/* Access the user's accounts (per EIP-1102) */
/*********************************************/

const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');

ethereumButton.addEventListener('click', async () => {
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    showAccount.innerHTML = account;
  } catch (err) {
    if (err.code === 4001) {
      console.log('Please connect to MetaMask.');
    } else {
      console.error(err);
    }
  }
});
```

### HTML

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Simple dapp</title>
  <script type="module" src="index.js"></script>
</head>
<body>
  <!-- Display a connect button and the current account -->
  <button class="enableEthereumButton">Enable Ethereum</button>
  <h2>Account: <span class="showAccount"></span></h2>
</body>
</html>
```

## Conclusion

You've successfully created a simple dapp and connected it to MetaMask using JavaScript and the `window.ethereum` provider.
With this setup, your dapp can interact with MetaMask and allow users to securely access accounts and perform transactions on the Ethereum blockchain.