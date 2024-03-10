"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2660],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),o=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=o(t),m=r,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(k,s(s({ref:n},c),{},{components:t})):a.createElement(k,s({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=t[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},43388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(87462),r=(t(67294),t(3905)),l=t(65488),s=t(85162);const i={sidebar_position:1,tags:["Keyring API"]},u="Account Management API",o={unversionedId:"reference/keyring-api/account-management/index",id:"reference/keyring-api/account-management/index",title:"Account Management API",description:"Dapps can communicate with account management Snaps",source:"@site/snaps/reference/keyring-api/account-management/index.md",sourceDirName:"reference/keyring-api/account-management",slug:"/reference/keyring-api/account-management/",permalink:"/add-resources/snaps/reference/keyring-api/account-management/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/account-management/index.md",tags:[{label:"Keyring API",permalink:"/add-resources/snaps/tags/keyring-api"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Keyring API",permalink:"/add-resources/snaps/reference/keyring-api/"},next:{title:"Objects",permalink:"/add-resources/snaps/reference/keyring-api/account-management/objects"}},c={},d=[{value:"Account methods",id:"account-methods",level:2},{value:"<code>keyring_createAccount</code>",id:"keyring_createaccount",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4},{value:"<code>keyring_deleteAccount</code>",id:"keyring_deleteaccount",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>keyring_exportAccount</code>",id:"keyring_exportaccount",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-2",level:4},{value:"<code>keyring_filterAccountChains</code>",id:"keyring_filteraccountchains",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Example",id:"example-3",level:4},{value:"<code>keyring_getAccount</code>",id:"keyring_getaccount",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Example",id:"example-4",level:4},{value:"<code>keyring_listAccounts</code>",id:"keyring_listaccounts",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Example",id:"example-5",level:4},{value:"<code>keyring_updateAccount</code>",id:"keyring_updateaccount",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Example",id:"example-6",level:4},{value:"Request methods",id:"request-methods",level:2},{value:"<code>keyring_approveRequest</code>",id:"keyring_approverequest",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Example",id:"example-7",level:4},{value:"<code>keyring_getRequest</code>",id:"keyring_getrequest",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Example",id:"example-8",level:4},{value:"<code>keyring_listRequests</code>",id:"keyring_listrequests",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Example",id:"example-9",level:4},{value:"<code>keyring_rejectRequest</code>",id:"keyring_rejectrequest",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Example",id:"example-10",level:4},{value:"<code>keyring_submitRequest</code>",id:"keyring_submitrequest",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Example",id:"example-11",level:4}],p={toc:d},m="wrapper";function k(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"account-management-api"},"Account Management API"),(0,r.kt)("p",null,"Dapps can communicate with ",(0,r.kt)("a",{parentName:"p",href:"/add-resources/snaps/features/custom-evm-accounts/"},"account management Snaps"),"\nusing the Account Management API.\nThe dapp must be ",(0,r.kt)("a",{parentName:"p",href:"/add-resources/snaps/features/custom-evm-accounts/security#limit-the-methods-exposed-to-dapps"},"allowed to call each\nmethod"),"."),(0,r.kt)("h2",{id:"account-methods"},"Account methods"),(0,r.kt)("p",null,"The following methods are exposed by the Snap for account management."),(0,r.kt)("h3",{id:"keyring_createaccount"},(0,r.kt)("inlineCode",{parentName:"h3"},"keyring_createAccount")),(0,r.kt)("p",null,"Creates a new account."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"An object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Record<string, Json>")," - Snap-defined account options.")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/add-resources/snaps/reference/keyring-api/account-management/objects#keyringaccount"},"An account object.")),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_createAccount",\n    "params": {\n        "options": {\n            "signerCount": 5,\n            "threshold": 3\n        }\n    }\n}\n'))),(0,r.kt)(s.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n    "id": "091bbc2e-6625-44d0-ac5c-658670ca649a",\n    "methods": [\n        "eth_sign",\n        "eth_signTransaction",\n        "eth_signTypedData_v4",\n        "personal_sign"\n    ],\n    "options": {\n        "signerCount": 5,\n        "threshold": 3\n    },\n    "type": "eip155:eoa"\n}\n')))),(0,r.kt)("h3",{id:"keyring_deleteaccount"},(0,r.kt)("inlineCode",{parentName:"h3"},"keyring_deleteAccount")),(0,r.kt)("p",null,"Deletes an existing account."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("p",null,"An object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - ID of the account to be deleted (UUIDv4).")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_deleteAccount",\n    "params": {\n        "id": "091bbc2e-6625-44d0-ac5c-658670ca649a"\n    }\n}\n'))),(0,r.kt)(s.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"null\n")))),(0,r.kt)("h3",{id:"keyring_exportaccount"},(0,r.kt)("inlineCode",{parentName:"h3"},"keyring_exportAccount")),(0,r.kt)("p",null,"Exports the private key of an account managed by the Snap.\nA Snap might choose to not support this method."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("p",null,"An object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - ID of the account to be exported (UUIDv4).")),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,"An object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"privateKey"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - The account's private key.")),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_exportAccount",\n    "params": {\n        "id": "091bbc2e-6625-44d0-ac5c-658670ca649a"\n    }\n}\n'))),(0,r.kt)(s.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "privateKey": "66a41d66be6483f1fdfd01fdb66173d449594bbd286149b019504dd72b58bc51"\n}\n')))),(0,r.kt)("h3",{id:"keyring_filteraccountchains"},(0,r.kt)("inlineCode",{parentName:"h3"},"keyring_filterAccountChains")),(0,r.kt)("p",null,"Filters for blockchain networks that an account can be used on."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("p",null,"An object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - Account ID (UUIDv4)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chains"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string[]")," - List of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-2.md"},"CAIP-2"),"\nchain IDs of blockchain networks to filter.")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,"An object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chains"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string[]")," - List of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-2.md"},"CAIP-2"),"\nchain IDs of blockchain networks that the account can be used on.")),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_filterAccountChains",\n    "params": {\n        "id": "091bbc2e-6625-44d0-ac5c-658670ca649a",\n        "chains": [\n            "eip155:W", \n            "eip155:X",\n            "eip155:Y",\n            "eip155:Z"\n        ]\n    }\n}\n'))),(0,r.kt)(s.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "chains": [\n        "eip155:X",\n        "eip155:Y"\n    ]\n}\n')))),(0,r.kt)("h3",{id:"keyring_getaccount"},(0,r.kt)("inlineCode",{parentName:"h3"},"keyring_getAccount")),(0,r.kt)("p",null,"Gets an account from an ID."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("p",null,"An object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - Account ID (UUIDv4).")),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/add-resources/snaps/reference/keyring-api/account-management/objects#keyringaccount"},"An account object.")),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_getAccount",\n    "params": {\n        "id": "091bbc2e-6625-44d0-ac5c-658670ca649a"\n    }\n}\n'))),(0,r.kt)(s.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n    "id": "091bbc2e-6625-44d0-ac5c-658670ca649a",\n    "methods": [\n        "eth_sign",\n        "eth_signTransaction",\n        "eth_signTypedData_v4",\n        "personal_sign"\n    ],\n    "options": {\n        "signerCount": 5,\n        "threshold": 3\n    },\n    "type": "eip155:eoa"\n}\n')))),(0,r.kt)("h3",{id:"keyring_listaccounts"},(0,r.kt)("inlineCode",{parentName:"h3"},"keyring_listAccounts")),(0,r.kt)("p",null,"Lists all accounts handled by the Snap."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("p",null,"None"),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,"An array of ",(0,r.kt)("a",{parentName:"p",href:"/add-resources/snaps/reference/keyring-api/account-management/objects#keyringaccount"},"account objects")," handled by the Snap."),(0,r.kt)("h4",{id:"example-5"},"Example"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_listAccounts"\n}\n'))),(0,r.kt)(s.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n        "id": "091bbc2e-6625-44d0-ac5c-658670ca649a",\n        "methods": [\n            "eth_sign",\n            "eth_signTransaction",\n            "eth_signTypedData_v4",\n            "personal_sign"\n        ],\n        "options": {\n            "signerCount": 5,\n            "threshold": 3\n        },\n        "type": "eip155:eoa"\n    },\n    {\n        "address": "0x84674cffb6146d19b986fc88ec70a441b570a45b",\n        "id": "17a87b4a-286c-444d-aebb-1fed89021419",\n        "methods": [\n            "eth_prepareUserOperation",\n            "eth_patchUserOperation",\n            "eth_signUserOperation"\n        ],\n        "type": "eip155:erc4337"\n    }\n]\n')))),(0,r.kt)("h3",{id:"keyring_updateaccount"},(0,r.kt)("inlineCode",{parentName:"h3"},"keyring_updateAccount")),(0,r.kt)("p",null,"Updates an account."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/add-resources/snaps/reference/keyring-api/account-management/objects#keyringaccount"},"An account object.")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)("h4",{id:"example-6"},"Example"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_updateAccount",\n    "params": {\n        "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n        "id": "091bbc2e-6625-44d0-ac5c-658670ca649a",\n        "methods": [\n            "eth_sign",\n            "eth_signTransaction",\n            "eth_signTypedData_v4",\n            "personal_sign"\n        ],\n        "options": {\n            "signerCount": 7,\n            "threshold": 4\n        },\n        "type": "eip155:eoa"\n    }\n}\n'))),(0,r.kt)(s.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"null\n")))),(0,r.kt)("h2",{id:"request-methods"},"Request methods"),(0,r.kt)("p",null,"The following methods are exposed by the Snap for managing signature requests."),(0,r.kt)("h3",{id:"keyring_approverequest"},(0,r.kt)("inlineCode",{parentName:"h3"},"keyring_approveRequest")),(0,r.kt)("p",null,"Approves a pending request."),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("p",null,"An object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - Request ID."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Record<string, Json>")," - Optional Snap-defined arguments.")),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)("h4",{id:"example-7"},"Example"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_approveRequest",\n    "params": {\n        "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4"\n    }\n}\n'))),(0,r.kt)(s.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"null\n")))),(0,r.kt)("h3",{id:"keyring_getrequest"},(0,r.kt)("inlineCode",{parentName:"h3"},"keyring_getRequest")),(0,r.kt)("p",null,"Gets a request from an ID."),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("p",null,"An object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - Request ID.")),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/add-resources/snaps/reference/keyring-api/account-management/objects#keyringrequest"},"A request object.")),(0,r.kt)("h4",{id:"example-8"},"Example"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_getRequest",\n    "params": {\n        "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4"\n    }\n}\n'))),(0,r.kt)(s.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n    "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4",\n    "request": {\n        "method": "personal_sign",\n        "params": [\n            "0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765",\n            "0xe887f3b50232722e6eb4c1d3a03b34c9b345acd1"\n        ]\n    },\n    "scope": "eip155:1"\n}\n')))),(0,r.kt)("h3",{id:"keyring_listrequests"},(0,r.kt)("inlineCode",{parentName:"h3"},"keyring_listRequests")),(0,r.kt)("p",null,"Lists all pending requests."),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("p",null,"None"),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,"An array of pending ",(0,r.kt)("a",{parentName:"p",href:"/add-resources/snaps/reference/keyring-api/account-management/objects#keyringrequest"},"request objects"),"."),(0,r.kt)("h4",{id:"example-9"},"Example"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_listRequests"\n}\n'))),(0,r.kt)(s.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "account": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n        "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4",\n        "request": {\n            "method": "personal_sign",\n            "params": [\n                "0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765",\n                "0xe887f3b50232722e6eb4c1d3a03b34c9b345acd1"\n            ]\n        },\n        "scope": "eip155:1"\n    },\n    {\n        "account": "0xe887f3b50232722e6eb4c1d3a03b34c9b345acd1",\n        "id": "f6f302ae-38d7-4b95-ae88-bf2fb7fbee87",\n        "request": {\n            "method": "eth_sendTransaction",\n            "params": [\n                {\n                    "from": "0xe887f3b50232722e6eb4c1d3a03b34c9b345acd1",\n                    "nonce": "0x1",\n                    "gasPrice": "0x10",\n                    "gasLimit": "0x5208",\n                    "to": "0x84674cffb6146d19b986fc88ec70a441b570a45b",\n                    "value": "0x10000",\n                    "data": "0x"\n                }\n            ]\n        },\n        "scope": "eip155:1"\n    }\n]\n')))),(0,r.kt)("h3",{id:"keyring_rejectrequest"},(0,r.kt)("inlineCode",{parentName:"h3"},"keyring_rejectRequest")),(0,r.kt)("p",null,"Rejects a pending request and removes it from the list of pending requests."),(0,r.kt)("h4",{id:"parameters-10"},"Parameters"),(0,r.kt)("p",null,"An object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - Request ID.")),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)("h4",{id:"example-10"},"Example"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_rejectRequest",\n    "params": {\n        "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4"\n    }\n}\n'))),(0,r.kt)(s.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"null\n")))),(0,r.kt)("h3",{id:"keyring_submitrequest"},(0,r.kt)("inlineCode",{parentName:"h3"},"keyring_submitRequest")),(0,r.kt)("p",null,"Submits a new request."),(0,r.kt)("h4",{id:"parameters-11"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/add-resources/snaps/reference/keyring-api/account-management/objects#keyringrequest"},"A request object.")),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,"If the request is ",(0,r.kt)("a",{parentName:"p",href:"/add-resources/snaps/features/custom-evm-accounts/#synchronous-transaction-flow"},"synchronous"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"keyring_submitRequest")," returns an object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pending")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," to indicate a synchronous request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"result"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Json")," - Request result.")),(0,r.kt)("p",null,"If the request is ",(0,r.kt)("a",{parentName:"p",href:"/add-resources/snaps/features/custom-evm-accounts/#asynchronous-transaction-flow"},"asynchronous"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"keyring_submitRequest")," returns an object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pending")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," to indicate that the request will be handled asynchronously."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"redirect")," - An optional redirect object containing:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - Redirect message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - Redirect URL.")))),(0,r.kt)("h4",{id:"example-11"},"Example"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_submitRequest",\n    "params": {\n        "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n        "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4",\n        "request": {\n            "method": "personal_sign",\n            "params": [\n                "0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765",\n                "0xe887f3b50232722e6eb4c1d3a03b34c9b345acd1"\n            ]\n        },\n        "scope": "eip155:1"\n    }\n}\n'))),(0,r.kt)(s.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "pending": false,\n    "result": "0x9aef363b17bc18dfbdcb9ed3ce5f9f96788ce84b353d262099e90c4fa0b513a4e21ee47bafa04c0630750e901b62bd4839b45219c191ec6076d6549637cb1beb4c"\n}\n')))))}k.isMDXComponent=!0},85162:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(67294),r=t(86010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),r=t(67294),l=t(86010),s=t(12466),i=t(70989),u=t(72389);const o={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:n,block:t,selectedValue:i,selectValue:u,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),m=e=>{const n=e.currentTarget,t=d.indexOf(n),a=c[t].value;a!==i&&(p(n),u(a))},k=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>d.push(e),onKeyDown:k,onClick:m},s,{className:(0,l.Z)("tabs__item",o.tabItem,s?.className,{"tabs__item--active":i===n})}),t??n)})))}function d(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function p(e){const n=(0,i.Y)(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",o.tabList)},r.createElement(c,(0,a.Z)({},e,n)),r.createElement(d,(0,a.Z)({},e,n)))}function m(e){const n=(0,u.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},70989:(e,n,t)=>{t.d(n,{Y:()=>p});var a=t(67294),r=t(16550),l=t(91980),s=t(67392),i=t(50012);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function o(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function c(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function d(e){let{queryString:n=!1,groupId:t}=e;const s=(0,r.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=o(e),[s,u]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[p,m]=d({queryString:t,groupId:r}),[k,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,i.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),g=(()=>{const e=p??k;return c({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),m(e),b(e)}),[m,b,l]),tabValues:l}}}}]);