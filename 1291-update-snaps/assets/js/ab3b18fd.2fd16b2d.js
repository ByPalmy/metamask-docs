"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8760],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>u});var t=n(96540);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),d=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),g=i,u=c["".concat(s,".").concat(g)]||c[g]||m[g]||r;return n?t.createElement(u,l(l({ref:a},p),{},{components:n})):t.createElement(u,l({ref:a},p))}));function u(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=g;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},84249:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=n(58168),i=(n(96540),n(15680)),r=n(4865),l=n(19365);const o={sidebar_position:2,tags:["Keyring API"]},s="Chain Methods API",d={unversionedId:"reference/keyring-api/chain-methods",id:"reference/keyring-api/chain-methods",title:"Chain Methods API",description:"Account management Snaps can choose to implement the",source:"@site/snaps/reference/keyring-api/chain-methods.md",sourceDirName:"reference/keyring-api",slug:"/reference/keyring-api/chain-methods",permalink:"/1291-update-snaps/snaps/reference/keyring-api/chain-methods",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/chain-methods.md",tags:[{label:"Keyring API",permalink:"/1291-update-snaps/snaps/tags/keyring-api"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Events",permalink:"/1291-update-snaps/snaps/reference/keyring-api/account-management/events"},next:{title:"Jest API and options",permalink:"/1291-update-snaps/snaps/reference/jest"}},p={},c=[{value:"EOA methods",id:"eoa-methods",level:2},{value:"<code>personal_sign</code>",id:"personal_sign",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4},{value:"<code>eth_signTransaction</code>",id:"eth_signtransaction",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>eth_signTypedData_v4</code>",id:"eth_signtypeddata_v4",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-2",level:4},{value:"Deprecated methods",id:"deprecated-methods",level:3},{value:"ERC-4337 methods",id:"erc-4337-methods",level:2},{value:"<code>eth_prepareUserOperation</code>",id:"eth_prepareuseroperation",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Example",id:"example-3",level:4},{value:"<code>eth_patchUserOperation</code>",id:"eth_patchuseroperation",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Example",id:"example-4",level:4},{value:"<code>eth_signUserOperation</code>",id:"eth_signuseroperation",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Example",id:"example-5",level:4}],m={toc:c},g="wrapper";function u(e){let{components:a,...n}=e;return(0,i.yg)(g,(0,t.A)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"chain-methods-api"},"Chain Methods API"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/1291-update-snaps/snaps/features/custom-evm-accounts/"},"Account management Snaps")," can choose to implement the\nfollowing EVM methods to support dapp requests from custom accounts."),(0,i.yg)("h2",{id:"eoa-methods"},"EOA methods"),(0,i.yg)("p",null,"The following methods are used by externally owned accounts (EOAs)."),(0,i.yg)("h3",{id:"personal_sign"},(0,i.yg)("inlineCode",{parentName:"h3"},"personal_sign")),(0,i.yg)("p",null,"Presents a plain text signature challenge to the user and returns the signed response.\nEquivalent to ",(0,i.yg)("inlineCode",{parentName:"p"},"eth_sign")," on some other wallets, and prepends a safe prefix to the signed message to\nprevent the challenge tricking users into signing a financial transaction."),(0,i.yg)("h4",{id:"parameters"},"Parameters"),(0,i.yg)("p",null,"An array containing:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Message to sign: ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Hex-encoded UTF-8 string to present to the user."),(0,i.yg)("li",{parentName:"ol"},"Address: ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Address of the requested signing account.")),(0,i.yg)("h4",{id:"returns"},"Returns"),(0,i.yg)("p",null,"Signature: ",(0,i.yg)("inlineCode",{parentName:"p"},"string")," - Hex-encoded signature."),(0,i.yg)("h4",{id:"example"},"Example"),(0,i.yg)(r.A,{mdxType:"Tabs"},(0,i.yg)(l.A,{value:"Request",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "personal_sign",\n  "params": [\n    "0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765",\n    "0x5874174dcf1ab6F7Efd8496f4f09404CD1c5bA84"\n  ]\n}\n'))),(0,i.yg)(l.A,{value:"Response",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'"0x262d12322b75228d09bbe3c104b91c1df32794126ce6a851e5c2721deb42d60e20b6eff3a1e2b5d29c2680edfb42e8497dbd7e75d0591a390a9385861b40f73d1c"\n')))),(0,i.yg)("h3",{id:"eth_signtransaction"},(0,i.yg)("inlineCode",{parentName:"h3"},"eth_signTransaction")),(0,i.yg)("p",null,"Signs a transaction that can be submitted to the network later using\n",(0,i.yg)("a",{parentName:"p",href:"https://ethereum.org/developers/docs/apis/json-rpc#eth_sendrawtransaction"},(0,i.yg)("inlineCode",{parentName:"a"},"eth_sendRawTransaction")),"."),(0,i.yg)("h4",{id:"parameters-1"},"Parameters"),(0,i.yg)("p",null,"An array containing:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Transaction object to sign, which contains:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"type"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - ",(0,i.yg)("a",{parentName:"li",href:"https://docs.infura.io/api/networks/ethereum/concepts/transaction-types"},"Transaction type.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"nonce"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Anti-replay parameter."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"to"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Recipient address, or ",(0,i.yg)("inlineCode",{parentName:"li"},"null")," if this is a contract creation transaction."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"from"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Sender address."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"value"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Value to be transferred, in wei."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"data"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Compiled code of a contract OR hash of the invoked method signature and\nencoded parameters."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"gasLimit"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Gas provided by the sender."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"gasPrice"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - (Optional) Gas price, in wei, provided by the sender."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"maxPriorityFeePerGas"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - (Optional) Maximum fee, in wei, the sender is willing to\npay per gas above the base fee."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"maxFeePerGas"),":",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - (Optional) Maximum total fee (base fee + priority fee), in wei, the\nsender is willing to pay per gas."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"accessList"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"object[]")," - (Optional) List of addresses and storage keys the transaction plans to access."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"chainId"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Chain ID.")))),(0,i.yg)("h4",{id:"returns-1"},"Returns"),(0,i.yg)("p",null,"A signature object containing:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"v"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - ECDSA Recovery ID."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"r"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - ECDSA signature r."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"s"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - ECDSA signature s.")),(0,i.yg)("h4",{id:"example-1"},"Example"),(0,i.yg)(r.A,{mdxType:"Tabs"},(0,i.yg)(l.A,{value:"EIP-1559 request",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "eth_signTransaction",\n  "params": [\n    {\n      "type": "0x2",\n      "nonce": "0x1",\n      "to": "0x0c54fccd2e384b4bb6f2e405bf5cbc15a017aafb",\n      "from": "0x660265edc169bab511a40c0e049cc1e33774443d",\n      "value": "0x0",\n      "data": "0x",\n      "gasLimit": "0x5208",\n      "maxPriorityFeePerGas": "0x3b9aca00",\n      "maxFeePerGas": "0x2540be400",\n      "accessList": [],\n      "chainId": "0xaa36a7"\n    }\n  ]\n}\n'))),(0,i.yg)(l.A,{value:"Legacy request",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "eth_signTransaction",\n  "params": [\n    {\n      "type": "0x0",\n      "nonce": "0x0",\n      "to": "0x0c54fccd2e384b4bb6f2e405bf5cbc15a017aafb",\n      "from": "0x660265edc169bab511a40c0e049cc1e33774443d",\n      "value": "0x0",\n      "data": "0x",\n      "gasLimit": "0x5208",\n      "gasPrice": "0x2540be400",\n      "chainId": "0xaa36a7"\n    }\n  ]\n}\n'))),(0,i.yg)(l.A,{value:"Response",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "v": "0x1",\n  "r": "0x51991c5099327d3c7eaa745de60c52a93555e5cbc418eb9b405fe92d986dee08",\n  "s": "0x65b1d20a39360c31de69f872244e23a3549b702e11bc7d8eb3586812ac62be8d"\n}\n')))),(0,i.yg)("h3",{id:"eth_signtypeddata_v4"},(0,i.yg)("inlineCode",{parentName:"h3"},"eth_signTypedData_v4")),(0,i.yg)("p",null,"Presents a data message for the user to sign in a structured and readable format, and returns the\nsigned response.\nIntroduced by ",(0,i.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP-712"),"."),(0,i.yg)("h4",{id:"parameters-2"},"Parameters"),(0,i.yg)("p",null,"An array containing:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Address: ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Address of the requested signing account."),(0,i.yg)("li",{parentName:"ol"},"Typed data: ",(0,i.yg)("inlineCode",{parentName:"li"},"object")," - Typed data object containing:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"types"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"object")," - Types object containing:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"EIP712Domain"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"array")," - Array specifying one or more of the following domain separator values:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"name")," - User-readable name of the signing domain, i.e., name of the dapp or the protocol."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"version")," - Current major version of the signing domain."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"chainId")," - Chain ID of the network."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"verifyingContract")," - Address of the contract that will verify the signature."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"salt")," - Disambiguating salt for the protocol."))))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"primaryType"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Primary type."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"domain"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"object")," - Domain separator values specified in the ",(0,i.yg)("inlineCode",{parentName:"li"},"EIP712Domain")," type."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"message"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"object")," - Message to present to the user.")))),(0,i.yg)("h4",{id:"returns-2"},"Returns"),(0,i.yg)("p",null,"Signature: ",(0,i.yg)("inlineCode",{parentName:"p"},"string")," - Hex-encoded signature."),(0,i.yg)("h4",{id:"example-2"},"Example"),(0,i.yg)(r.A,{mdxType:"Tabs"},(0,i.yg)(l.A,{value:"Request",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "eth_signTypedData_v4",\n  "params": [\n    "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",\n    {\n      "types": {\n        "EIP712Domain": [\n          { "name": "name", "type": "string" },\n          { "name": "version", "type": "string" },\n          { "name": "chainId", "type": "uint256" },\n          { "name": "verifyingContract", "type": "address" }\n        ],\n        "Person": [\n          { "name": "name", "type": "string" },\n          { "name": "wallet", "type": "address" }\n        ],\n        "Mail": [\n          { "name": "from", "type": "Person" },\n          { "name": "to", "type": "Person" },\n          { "name": "contents", "type": "string" }\n        ]\n      },\n      "primaryType": "Mail",\n      "domain": {\n        "name": "Ether Mail",\n        "version": "1",\n        "chainId": 1,\n        "verifyingContract": "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC"\n      },\n      "message": {\n        "from": {\n          "name": "Cow",\n          "wallet": "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826"\n        },\n        "to": {\n          "name": "Bob",\n          "wallet": "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB"\n        },\n        "contents": "Hello, Bob!"\n      }\n    }\n  ]\n}\n'))),(0,i.yg)(l.A,{value:"Response",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'"0x4355c47d63924e8a72e509b65029052eb6c299d53a04e167c5775fd466751c9d07299936d304c153f6443dfa05f40ff007d72911b6f72307f996231605b915621c"\n')))),(0,i.yg)("h3",{id:"deprecated-methods"},"Deprecated methods"),(0,i.yg)("p",null,"Snaps can also implement ",(0,i.yg)("a",{parentName:"p",href:"/wallet/concepts/signing-methods/#deprecated-signing-methods"},"deprecated signing\nmethods")," that some dapps might use."),(0,i.yg)("h2",{id:"erc-4337-methods"},"ERC-4337 methods"),(0,i.yg)("admonition",{type:"flaskOnly"}),(0,i.yg)("p",null,"The following methods are used by ",(0,i.yg)("a",{parentName:"p",href:"/1291-update-snaps/snaps/features/custom-evm-accounts/#account-abstraction-erc-4337"},"ERC-4337 accounts"),"."),(0,i.yg)("h3",{id:"eth_prepareuseroperation"},(0,i.yg)("inlineCode",{parentName:"h3"},"eth_prepareUserOperation")),(0,i.yg)("p",null,"Prepares a new user operation from transaction data."),(0,i.yg)("h4",{id:"parameters-3"},"Parameters"),(0,i.yg)("p",null,"An array containing:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Transaction intents object, which contains:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"to"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Recipient address, or ",(0,i.yg)("inlineCode",{parentName:"li"},"null")," if this is a contract creation transaction."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"value"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Value to be transferred, in wei."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"data"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Compiled code of a contract OR hash of the invoked method signature and\nencoded parameters.")))),(0,i.yg)("h4",{id:"returns-3"},"Returns"),(0,i.yg)("p",null,"A user operation details object containing:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"callData"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Data to pass to the sender during the main execution call."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"initCode"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Account bytecode (needed if and only if the account is not yet on-chain and\nneeds to be created)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"nonce"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Anti-replay parameter."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"gasLimits")," - (Optional) Gas limits object containing:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"callGasLimit"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Amount of gas to allocate to the main execution call."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"verificationGasLimit"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Amount of gas to allocate to the verification step."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"preVerificationGas"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Amount of gas to compensate the bundler for pre-verification\nexecution, to pay for ",(0,i.yg)("inlineCode",{parentName:"li"},"callData"),", and to account for overhead that can't be tracked on-chain."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"dummySignature"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Dummy ",(0,i.yg)("inlineCode",{parentName:"li"},"signature"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"dummyPaymasterAndData"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Dummy ",(0,i.yg)("inlineCode",{parentName:"li"},"paymasterAndData"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"bundlerUrl"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Bundler URL.")),(0,i.yg)("h4",{id:"example-3"},"Example"),(0,i.yg)(r.A,{mdxType:"Tabs"},(0,i.yg)(l.A,{value:"Request",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "eth_prepareUserOperation",\n  "params": [\n    {\n      "to": "0x0c54fccd2e384b4bb6f2e405bf5cbc15a017aafb",\n      "value": "0x0",\n      "data": "0x"\n    },\n    {\n      "to": "0x660265edc169bab511a40c0e049cc1e33774443d",\n      "value": "0x0",\n      "data": "0x619a309f"\n    }\n  ]\n}\n'))),(0,i.yg)(l.A,{value:"Response",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "callData": "0x70641a22000000000000000000000000f3de3c0d654fda23dad170f0f320a921725091270000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000e49871efa4000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec700000000000000000000000000000000000000000000000000000000067fd192000000000000000000000000000000000000000001411a0c3b763237f484fdd70000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000280000000000000003b6d03400d4a11d5eeaac28ec3f61d100daf4d40471f185280000000000000003b6d03408f1b19622a888c53c8ee4f7d7b4dc8f574ff906800000000000000000000000000000000000000000000000000000000",\n  "initCode": "0x22ff1dc5998258faa1ea45a776b57484f8ab80a2296601cd0000000000000000000000005147ce3947a407c95687131be01a2b8d55fd0a400000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000007d91ea6a0bc4a4238cd72386d935e35e3d8c318400000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000",\n  "nonce": "0x1",\n  "gasLimits": {\n    "callGasLimit": "0x58a83",\n    "verificationGasLimit": "0xe8c4",\n    "preVerificationGas": "0xc57c"\n  },\n  "dummySignature": "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n  "dummyPaymasterAndData": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n  "bundlerUrl": "https://bundler.example.com/rpc"\n}\n')))),(0,i.yg)("h3",{id:"eth_patchuseroperation"},(0,i.yg)("inlineCode",{parentName:"h3"},"eth_patchUserOperation")),(0,i.yg)("p",null,"Patches some allowed properties of a user operation."),(0,i.yg)("h4",{id:"parameters-4"},"Parameters"),(0,i.yg)("p",null,"An array containing:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"User operation object, which contains:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"sender"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Account making the operation."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"callData"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Data to pass to the sender during the main execution call."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"initCode"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Account bytecode (needed if and only if the account is not yet on-chain\nand needs to be created)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"nonce"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Anti-replay parameter."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"callGasLimit"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Amount of gas to allocate to the main execution call."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"verificationGasLimit"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Amount of gas to allocate to the verification step."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"preVerificationGas"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Amount of gas to compensate the bundler for pre-verification\nexecution, to pay for callData, and to account for overhead that can't be tracked on-chain."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"maxFeePerGas"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Maximum total fee the sender is willing to pay per gas."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"maxPriorityFeePerGas"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Maximum fee the sender is willing to pay per gas above the\nbase fee."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"paymasterAndData"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Address of the paymaster sponsoring the transaction, followed\nby extra data to send to the paymaster (empty for self-sponsored transactions)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"signature"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Data passed into the account along with the nonce during the\nverification step.")))),(0,i.yg)("h4",{id:"returns-4"},"Returns"),(0,i.yg)("p",null,"A partial user operation object containing:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"paymasterAndData"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Address of the paymaster sponsoring the transaction, followed\nby extra data to send to the paymaster (empty for self-sponsored transactions)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"callGasLimit"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - (Optional) Amount of gas to allocate to the main execution call."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"verificationGasLimit"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - (Optional) Amount of gas to allocate to the verification step."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"preVerificationGas"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - (Optional) Amount of gas to compensate the bundler for\npre-verification execution, to pay for callData, and to account for overhead that can't be tracked on-chain.")),(0,i.yg)("h4",{id:"example-4"},"Example"),(0,i.yg)(r.A,{mdxType:"Tabs"},(0,i.yg)(l.A,{value:"Request",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "eth_patchUserOperation",\n  "params": [\n    {\n      "sender": "0x4584d2B4905087A100420AFfCe1b2d73fC69B8E4",\n      "nonce": "0x1",\n      "initCode": "0x",\n      "callData": "0x70641a22000000000000000000000000f3de3c0d654fda23dad170f0f320a921725091270000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000e49871efa4000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec700000000000000000000000000000000000000000000000000000000067fd192000000000000000000000000000000000000000001411a0c3b763237f484fdd70000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000280000000000000003b6d03400d4a11d5eeaac28ec3f61d100daf4d40471f185280000000000000003b6d03408f1b19622a888c53c8ee4f7d7b4dc8f574ff906800000000000000000000000000000000000000000000000000000000",\n      "callGasLimit": "0x58a83",\n      "verificationGasLimit": "0xe8c4",\n      "preVerificationGas": "0xc57c",\n      "maxFeePerGas": "0x87f0878c0",\n      "maxPriorityFeePerGas": "0x1dcd6500",\n      "paymasterAndData": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n      "signature": "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"\n    }\n  ]\n}\n'))),(0,i.yg)(l.A,{value:"Response",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "paymasterAndData": "0x952514d7cBCB495EACeB86e02154921401dB0Cd9dac17f958d2ee523a2206206994597c13d831ec700000000000000000000000000000000000000000000000000000000779b3fbb00000000000000006565b267000000000000000000000000000000000000000029195b31a9b1c6ccdeff53e359ebbcd5f075a93c1aaed93302e5fde5faf8047028b296b8a3fa4e22b063af5069ae9f656736ffda0ee090c0311155722b905f781b",\n  "callGasLimit": "0x58a83",\n  "verificationGasLimit": "0xe8c4",\n  "preVerificationGas": "0xc57c"\n}\n')))),(0,i.yg)("h3",{id:"eth_signuseroperation"},(0,i.yg)("inlineCode",{parentName:"h3"},"eth_signUserOperation")),(0,i.yg)("p",null,"Signs a user operation."),(0,i.yg)("h4",{id:"parameters-5"},"Parameters"),(0,i.yg)("p",null,"An array containing:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"User operation object, which contains:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"sender"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Account making the operation."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"callData"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Data to pass to the sender during the main execution call."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"initCode"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Account bytecode (needed if and only if the account is not yet on-chain\nand needs to be created)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"nonce"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Anti-replay parameter."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"callGasLimit"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Amount of gas to allocate to the main execution call."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"verificationGasLimit"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Amount of gas to allocate to the verification step."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"preVerificationGas"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Amount of gas to compensate the bundler for pre-verification\nexecution, to pay for callData, and to account for overhead that can't be tracked on-chain."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"maxFeePerGas"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Maximum total fee the sender is willing to pay per gas."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"maxPriorityFeePerGas"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Maximum fee the sender is willing to pay per gas above the\nbase fee."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"paymasterAndData"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Address of the paymaster sponsoring the transaction, followed\nby extra data to send to the paymaster (empty for self-sponsored transactions)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"signature"),": ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Data passed into the account along with the nonce during the\nverification step."))),(0,i.yg)("li",{parentName:"ol"},"Entry point: ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," - Hash of the entry point contract.")),(0,i.yg)("h4",{id:"returns-5"},"Returns"),(0,i.yg)("p",null,"Signature: ",(0,i.yg)("inlineCode",{parentName:"p"},"string")," - Hex-encoded signature."),(0,i.yg)("h4",{id:"example-5"},"Example"),(0,i.yg)(r.A,{mdxType:"Tabs"},(0,i.yg)(l.A,{value:"Request",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "eth_signUserOperation",\n  "params": [\n    {\n      "sender": "0x4584d2B4905087A100420AFfCe1b2d73fC69B8E4",\n      "nonce": "0x1",\n      "initCode": "0x",\n      "callData": "0x70641a22000000000000000000000000f3de3c0d654fda23dad170f0f320a921725091270000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000e49871efa4000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec700000000000000000000000000000000000000000000000000000000067fd192000000000000000000000000000000000000000001411a0c3b763237f484fdd70000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000280000000000000003b6d03400d4a11d5eeaac28ec3f61d100daf4d40471f185280000000000000003b6d03408f1b19622a888c53c8ee4f7d7b4dc8f574ff906800000000000000000000000000000000000000000000000000000000",\n      "callGasLimit": "0x58a83",\n      "verificationGasLimit": "0xe8c4",\n      "preVerificationGas": "0xc57c",\n      "maxFeePerGas": "0x87f0878c0",\n      "maxPriorityFeePerGas": "0x1dcd6500",\n      "paymasterAndData": "0x952514d7cBCB495EACeB86e02154921401dB0Cd9dac17f958d2ee523a2206206994597c13d831ec700000000000000000000000000000000000000000000000000000000779b3fbb00000000000000006565b267000000000000000000000000000000000000000029195b31a9b1c6ccdeff53e359ebbcd5f075a93c1aaed93302e5fde5faf8047028b296b8a3fa4e22b063af5069ae9f656736ffda0ee090c0311155722b905f781b",\n      "signature": "0x"\n    },\n    "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"\n  ]\n}\n'))),(0,i.yg)(l.A,{value:"Response",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'"0x6565acc7efd3c85e4c0c221c2958ff6c3ae68401b23b33fdcd1a2d49034c30d97b1cfa17487b90253a5dfd54ef5188688592c2fd56ba44ee4d948ea259d636cd550f6dd21b"\n')))))}u.isMDXComponent=!0},19365:(e,a,n)=>{n.d(a,{A:()=>l});var t=n(96540),i=n(20053);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:a,hidden:n,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,l),hidden:n},a)}},4865:(e,a,n)=>{n.d(a,{A:()=>g});var t=n(58168),i=n(96540),r=n(20053),l=n(23104),o=n(47751),s=n(92303);const d={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){let{className:a,block:n,selectedValue:o,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.a_)(),g=e=>{const a=e.currentTarget,n=c.indexOf(a),t=p[n].value;t!==o&&(m(a),s(t))},u=e=>{let a=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;a=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;a=c[n]??c[c.length-1];break}}a?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a)},p.map((e=>{let{value:a,label:n,attributes:l}=e;return i.createElement("li",(0,t.A)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>c.push(e),onKeyDown:u,onClick:g},l,{className:(0,r.A)("tabs__item",d.tabItem,l?.className,{"tabs__item--active":o===a})}),n??a)})))}function c(e){let{lazy:a,children:n,selectedValue:t}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,i.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function m(e){const a=(0,o.u)(e);return i.createElement("div",{className:(0,r.A)("tabs-container",d.tabList)},i.createElement(p,(0,t.A)({},e,a)),i.createElement(c,(0,t.A)({},e,a)))}function g(e){const a=(0,s.A)();return i.createElement(m,(0,t.A)({key:String(a)},e))}},47751:(e,a,n)=>{n.d(a,{u:()=>m});var t=n(96540),i=n(56347),r=n(57485),l=n(31682),o=n(89466);function s(e){return function(e){return t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:i}}=e;return{value:a,label:n,attributes:t,default:i}}))}function d(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??s(n);return function(e){const a=(0,l.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function p(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function c(e){let{queryString:a=!1,groupId:n}=e;const l=(0,i.W6)(),o=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,r.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(l.location.search);a.set(o,e),l.replace({...l.location,search:a.toString()})}),[o,l])]}function m(e){const{defaultValue:a,queryString:n=!1,groupId:i}=e,r=d(e),[l,s]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[m,g]=c({queryString:n,groupId:i}),[u,y]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[i,r]=(0,o.Dv)(n);return[i,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),f=(()=>{const e=m??u;return p({value:e,tabValues:r})?e:null})();(0,t.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),g(e),y(e)}),[g,y,r]),tabValues:r}}}}]);