"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5892],{9609:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=r(74848),s=r(28453);const i={description:"See the MetaMask Ethereum provider API reference.",sidebar_position:3},o="Ethereum provider API",d={id:"reference/provider-api",title:"Ethereum provider API",description:"See the MetaMask Ethereum provider API reference.",source:"@site/wallet/reference/provider-api.md",sourceDirName:"reference",slug:"/reference/provider-api",permalink:"/feat-reference-req/wallet/reference/provider-api",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/reference/provider-api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"See the MetaMask Ethereum provider API reference.",sidebar_position:3},sidebar:"walletSidebar",previous:{title:"Unity SDK API",permalink:"/feat-reference-req/wallet/reference/sdk-unity-api"}},c={},a=[{value:"Properties",id:"properties",level:2},{value:"<code>isMetaMask</code>",id:"ismetamask",level:3},{value:"Example",id:"example",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>isConnected()</code>",id:"isconnected",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>request()</code>",id:"request",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-2",level:4},{value:"<code>_metamask.isUnlocked()</code>",id:"_metamaskisunlocked",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-3",level:4},{value:"Events",id:"events",level:2},{value:"<code>accountsChanged</code>",id:"accountschanged",level:3},{value:"<code>chainChanged</code>",id:"chainchanged",level:3},{value:"<code>connect</code>",id:"connect",level:3},{value:"<code>disconnect</code>",id:"disconnect",level:3},{value:"<code>message</code>",id:"message",level:3},{value:"Remove event listeners",id:"remove-event-listeners",level:3},{value:"<code>removeListener</code>",id:"removelistener",level:4},{value:"<code>removeAllListeners</code>",id:"removealllisteners",level:4},{value:"Errors",id:"errors",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"ethereum-provider-api",children:"Ethereum provider API"}),"\n",(0,t.jsxs)(n.p,{children:["This page is a reference for the Ethereum provider API of MetaMask's ",(0,t.jsx)(n.a,{href:"/feat-reference-req/wallet/concepts/wallet-api",children:"Wallet API"}),".\nMetaMask injects the provider API into websites visited by its users using the ",(0,t.jsx)(n.code,{children:"window.ethereum"})," provider object.\nYou can use the provider ",(0,t.jsx)(n.a,{href:"#properties",children:"properties"}),", ",(0,t.jsx)(n.a,{href:"#methods",children:"methods"}),", and ",(0,t.jsx)(n.a,{href:"#events",children:"events"})," in your dapp."]}),"\n",(0,t.jsxs)(n.admonition,{title:"Note",type:"info",children:[(0,t.jsxs)(n.p,{children:["MetaMask supports ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-6963",children:"EIP-6963"}),", which introduces an\nalternative wallet detection mechanism to the ",(0,t.jsx)(n.code,{children:"window.ethereum"})," injected provider.\nThis alternative mechanism enables dapps to support ",(0,t.jsx)(n.a,{href:"/feat-reference-req/wallet/concepts/wallet-interoperability",children:"wallet interoperability"}),"\nby discovering multiple injected wallet providers in a user's browser.\nWe recommend ",(0,t.jsx)(n.a,{href:"/feat-reference-req/wallet/how-to/connect/",children:"using this mechanism to connect to MetaMask"}),"."]}),(0,t.jsxs)(n.p,{children:["You can access the provider API using the selected EIP-6963 provider object.\nThroughout this documentation, we refer to the selected provider using ",(0,t.jsx)(n.code,{children:"provider"}),"."]})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"ismetamask",children:(0,t.jsx)(n.code,{children:"isMetaMask"})}),"\n",(0,t.jsxs)(n.p,{children:["This property is ",(0,t.jsx)(n.code,{children:"true"})," if the user has MetaMask installed, and ",(0,t.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["This property is non-standard.\nNon-MetaMask providers may also set this property to ",(0,t.jsx)(n.code,{children:"true"}),"."]})}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"provider.isMetaMask; // Or window.ethereum.isMetaMask if you don't support EIP-6963.\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"isconnected",children:(0,t.jsx)(n.code,{children:"isConnected()"})}),"\n",(0,t.jsxs)(n.p,{children:["Indicates whether the provider is connected to the current chain.\nIf the provider isn't connected, the page must be reloaded to re-establish the connection.\nSee the ",(0,t.jsx)(n.a,{href:"#connect",children:(0,t.jsx)(n.code,{children:"connect"})})," and ",(0,t.jsx)(n.a,{href:"#disconnect",children:(0,t.jsx)(n.code,{children:"disconnect"})})," events for more information."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["This method is unrelated to ",(0,t.jsx)(n.a,{href:"/feat-reference-req/wallet/how-to/connect/access-accounts",children:"accessing a user's accounts"}),'.\nIn the provider interface, "connected" and "disconnected" refer to whether the provider can make RPC\nrequests to the current chain.']})}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"None."}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"true"})," if the provider is connected to the current chain, ",(0,t.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"provider.isConnected(); // Or window.ethereum.isConnected() if you don't support EIP-6963.\n"})}),"\n",(0,t.jsx)(n.h3,{id:"request",children:(0,t.jsx)(n.code,{children:"request()"})}),"\n",(0,t.jsxs)(n.p,{children:["This method is used to submit ",(0,t.jsx)(n.a,{href:"/wallet/reference/json-rpc-api",children:"JSON-RPC API requests"})," to Ethereum using MetaMask."]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"An object containing:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"method"}),": ",(0,t.jsx)(n.code,{children:"string"})," - The JSON-RPC API method name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"params"}),": ",(0,t.jsx)(n.code,{children:"array"})," or ",(0,t.jsx)(n.code,{children:"object"})," - (Optional) Parameters of the RPC method.\nIn practice, if a method has parameters, they're almost always of type ",(0,t.jsx)(n.code,{children:"array"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:["A promise that resolves to the result of the RPC method call.\nIf the request fails, the promise rejects with an ",(0,t.jsx)(n.a,{href:"#errors",children:"error"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["The following is an example of using ",(0,t.jsx)(n.code,{children:"request()"})," to call\n",(0,t.jsx)(n.a,{href:"/wallet/reference/eth_sendTransaction",children:(0,t.jsx)(n.code,{children:"eth_sendTransaction"})}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'provider // Or window.ethereum if you don\'t support EIP-6963.\n  .request({\n    method: "eth_sendTransaction",\n    params: [\n      {\n        from: "0xb60e8dd61c5d32be8058bb8eb970870f07233155",\n        to: "0xd46e8dd67c5d32be8058bb8eb970870f07244567",\n        gas: "0x76c0", // 30400\n        gasPrice: "0x9184e72a000", // 10000000000000\n        value: "0x9184e72a", // 2441406250\n        data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",\n      },\n    ]\n  })\n  .then((result) => {\n    // The result varies by RPC method.\n    // For example, this method returns a transaction hash hexadecimal string upon success.\n  })\n  .catch((error) => {\n    // If the request fails, the Promise rejects with an error.\n  });\n'})}),"\n",(0,t.jsx)(n.h3,{id:"_metamaskisunlocked",children:(0,t.jsx)(n.code,{children:"_metamask.isUnlocked()"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"This method is experimental.\nUse it at your own risk."})}),"\n",(0,t.jsx)(n.p,{children:"Indicates if MetaMask is unlocked by the user.\nMetaMask must be unlocked to perform any operation involving user accounts.\nNote that this method doesn't indicate if the user has exposed any accounts to the caller."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"None."}),"\n",(0,t.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:["A promise that resolves to ",(0,t.jsx)(n.code,{children:"true"})," if MetaMask is unlocked by the user, and ",(0,t.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,t.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"provider._metamask.isUnlocked(); // Or window.ethereum._metamask.isUnlocked() if you don't support EIP-6963.\n"})}),"\n",(0,t.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,t.jsxs)(n.p,{children:["The MetaMask provider emits events using the Node.js\n",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/events.html",children:(0,t.jsx)(n.code,{children:"EventEmitter"})})," API.\nThe following is an example of listening to the ",(0,t.jsx)(n.a,{href:"#accountschanged",children:(0,t.jsx)(n.code,{children:"accountsChanged"})})," event."]}),"\n",(0,t.jsxs)(n.p,{children:["You should ",(0,t.jsx)(n.a,{href:"#remove-event-listeners",children:"remove listeners"})," after you're done listening to an event (for example, on component\n",(0,t.jsx)(n.code,{children:"unmount"})," in React)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'function handleAccountsChanged(accounts) {\n  // Handle new accounts, or lack thereof.\n}\n\nprovider // Or window.ethereum if you don\'t support EIP-6963.\n  .on("accountsChanged", handleAccountsChanged);\n\n// Later\n\nprovider // Or window.ethereum if you don\'t support EIP-6963.\n  .removeListener("accountsChanged", handleAccountsChanged);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"accountschanged",children:(0,t.jsx)(n.code,{children:"accountsChanged"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'provider // Or window.ethereum if you don\'t support EIP-6963.\n  .on("accountsChanged", handler: (accounts: Array<string>) => void);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The provider emits this event when the return value of the\n",(0,t.jsx)(n.a,{href:"/wallet/reference/eth_accounts",children:(0,t.jsx)(n.code,{children:"eth_accounts"})})," RPC\nmethod changes.\n",(0,t.jsx)(n.code,{children:"eth_accounts"})," returns either an empty array, or an array that contains the addresses of the accounts\nthe caller is permitted to access with the most recently used account first.\nCallers are identified by their URL origin, which means that all sites with the same origin share\nthe same permissions."]}),"\n",(0,t.jsxs)(n.p,{children:["This means that the provider emits ",(0,t.jsx)(n.code,{children:"accountsChanged"})," when the user's exposed account address changes.\nListen to this event to ",(0,t.jsx)(n.a,{href:"/feat-reference-req/wallet/how-to/connect/access-accounts#handle-accounts",children:"handle accounts"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"chainchanged",children:(0,t.jsx)(n.code,{children:"chainChanged"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'provider // Or window.ethereum if you don\'t support EIP-6963.\n  .on("chainChanged", handler: (chainId: string) => void);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The provider emits this event when the currently connected chain changes.\nListen to this event to ",(0,t.jsx)(n.a,{href:"/feat-reference-req/wallet/how-to/manage-networks/detect-network",children:"detect a user's network"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{title:"Important",type:"caution",children:[(0,t.jsx)(n.p,{children:"We strongly recommend reloading the page upon chain changes, unless you have a good reason not to:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'provider // Or window.ethereum if you don\'t support EIP-6963.\n  .on("chainChanged", (chainId) => window.location.reload());\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"connect",children:(0,t.jsx)(n.code,{children:"connect"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'interface ConnectInfo {\n  chainId: string;\n}\n\nprovider // Or window.ethereum if you don\'t support EIP-6963.\n  .on("connect", handler: (connectInfo: ConnectInfo) => void);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The provider emits this event when it's first able to submit RPC requests to a chain.\nWe recommend listening to this event and using the\n",(0,t.jsx)(n.a,{href:"#isconnected",children:(0,t.jsx)(n.code,{children:"isConnected()"})})," provider method to determine when\nthe provider is connected."]}),"\n",(0,t.jsx)(n.h3,{id:"disconnect",children:(0,t.jsx)(n.code,{children:"disconnect"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'provider // Or window.ethereum if you don\'t support EIP-6963.\n  .on("disconnect", handler: (error: ProviderRpcError) => void);\n'})}),"\n",(0,t.jsx)(n.p,{children:"The provider emits this event if it becomes unable to submit RPC requests to a chain.\nIn general, this only happens due to network connectivity issues or some unforeseen error."}),"\n",(0,t.jsxs)(n.p,{children:["When the provider emits this event, it doesn't accept new requests until the connection to the chain\nis re-established, which requires reloading the page.\nYou can also use the ",(0,t.jsx)(n.a,{href:"#isconnected",children:(0,t.jsx)(n.code,{children:"isConnected()"})})," provider method\nto determine if the provider is disconnected."]}),"\n",(0,t.jsx)(n.h3,{id:"message",children:(0,t.jsx)(n.code,{children:"message"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'interface ProviderMessage {\n  type: string;\n  data: unknown;\n}\n\nprovider // Or window.ethereum if you don\'t support EIP-6963.\n  .on("message", handler: (message: ProviderMessage) => void);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The provider emits this event when it receives a message that the user should be notified of.\nThe ",(0,t.jsx)(n.code,{children:"type"})," property identifies the kind of message."]}),"\n",(0,t.jsxs)(n.p,{children:["RPC subscription updates are a common use case for this event.\nFor example, if you create a subscription using\n",(0,t.jsx)(n.a,{href:"/wallet/reference/eth_subscribe",children:(0,t.jsx)(n.code,{children:"eth_subscribe"})}),", each\nsubscription update is emitted as a ",(0,t.jsx)(n.code,{children:"message"})," event with a ",(0,t.jsx)(n.code,{children:"type"})," of ",(0,t.jsx)(n.code,{children:"eth_subscription"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"remove-event-listeners",children:"Remove event listeners"}),"\n",(0,t.jsx)(n.h4,{id:"removelistener",children:(0,t.jsx)(n.code,{children:"removeListener"})}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"removeListener"})," method to remove specific event listeners from an ",(0,t.jsx)(n.code,{children:"EventEmitter"})," object.\nIn the following example ",(0,t.jsx)(n.code,{children:"removeListener"})," is used to remove the ",(0,t.jsx)(n.code,{children:"connect"})," and ",(0,t.jsx)(n.code,{children:"accountsChanged"})," events:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'// Use window.ethereum instead of provider if EIP-6963 is not supported.\n\n// Add listeners\nprovider.on("_initialized", updateWalletAndAccounts);\nprovider.on("connect", updateWalletAndAccounts);\nprovider.on("accountsChanged", updateWallet);\nprovider.on("chainChanged", updateWalletAndAccounts);\nprovider.on("disconnect", disconnectWallet);\n\n// Remove individual listeners\nprovider.removeListener("connect", updateWalletAndAccounts);\nprovider.removeListener("accountsChanged", updateWallet);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The first argument of ",(0,t.jsx)(n.code,{children:"removeListener"})," is the event name, and the second argument is\na reference to the function passed to ",(0,t.jsx)(n.code,{children:"on"})," for the event."]}),"\n",(0,t.jsx)(n.h4,{id:"removealllisteners",children:(0,t.jsx)(n.code,{children:"removeAllListeners"})}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.code,{children:"removeAllListeners"})," to remove all listeners from the event emitter at once. This method is helpful when you need to clean up all listeners simultaneously."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"removeAllListeners"})," with caution.\nThis method clears all event listeners associated with the emitter, not only the listeners set up by the application code.\nUsing this method can unexpectedly clear important event handlers, interfere with scripts, and make debugging more complex.\nYou can use the ",(0,t.jsx)(n.code,{children:"removeListener"})," method to safely remove specific listeners."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'// Use window.ethereum instead of provider if EIP-6963 is not supported.\n\n// Add listeners\nprovider.on("_initialized", updateWalletAndAccounts);\nprovider.on("connect", updateWalletAndAccounts);\nprovider.on("accountsChanged", updateWallet);\nprovider.on("chainChanged", updateWalletAndAccounts);\nprovider.on("disconnect", disconnectWallet);\n\n// Remove all listeners\nprovider.removeAllListeners()\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In the provided code example, ",(0,t.jsx)(n.code,{children:"removeAllListeners"})," is called to remove all event listeners attached to the ",(0,t.jsx)(n.code,{children:"provider"})," object. This cleanup function deletes any event listeners that are no longer needed."]}),"\n",(0,t.jsx)(n.h2,{id:"errors",children:"Errors"}),"\n",(0,t.jsx)(n.p,{children:"All errors returned by the MetaMask provider follow this interface:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"interface ProviderRpcError extends Error {\n  message: string;\n  code: number;\n  data?: unknown;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"#request",children:(0,t.jsx)(n.code,{children:"request()"})})," provider method throws errors eagerly.\nYou can use the error ",(0,t.jsx)(n.code,{children:"code"})," property to determine why the request failed.\nCommon codes and their meaning include:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"4001"})," - The request is rejected by the user."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-32602"})," - The parameters are invalid."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-32603"})," - Internal error."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For the complete list of errors, see ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1193#provider-errors",children:"EIP-1193"}),"\nand ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1474#error-codes",children:"EIP-1474"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://npmjs.com/package/eth-rpc-errors",children:(0,t.jsx)(n.code,{children:"eth-rpc-errors"})})," package implements all RPC errors\nreturned by the MetaMask provider, and can help you identify their meaning."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var t=r(96540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);