"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5188],{56544:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var s=r(74848),a=r(28453),c=r(11470),t=r(19365);const i={sidebar_position:1,tags:["Keyring API"]},l="Account Management API",d={id:"reference/keyring-api/account-management/index",title:"Account Management API",description:"Dapps can communicate with account management Snaps",source:"@site/snaps/reference/keyring-api/account-management/index.md",sourceDirName:"reference/keyring-api/account-management",slug:"/reference/keyring-api/account-management/",permalink:"/feat-reference-req/snaps/reference/keyring-api/account-management/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/account-management/index.md",tags:[{inline:!0,label:"Keyring API",permalink:"/feat-reference-req/snaps/tags/keyring-api"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Keyring API",permalink:"/feat-reference-req/snaps/reference/keyring-api/"},next:{title:"Objects",permalink:"/feat-reference-req/snaps/reference/keyring-api/account-management/objects"}},o={},u=[{value:"Account methods",id:"account-methods",level:2},{value:"<code>keyring_createAccount</code>",id:"keyring_createaccount",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4},{value:"<code>keyring_deleteAccount</code>",id:"keyring_deleteaccount",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>keyring_exportAccount</code>",id:"keyring_exportaccount",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-2",level:4},{value:"<code>keyring_filterAccountChains</code>",id:"keyring_filteraccountchains",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Example",id:"example-3",level:4},{value:"<code>keyring_getAccount</code>",id:"keyring_getaccount",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Example",id:"example-4",level:4},{value:"<code>keyring_listAccounts</code>",id:"keyring_listaccounts",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Example",id:"example-5",level:4},{value:"<code>keyring_updateAccount</code>",id:"keyring_updateaccount",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Example",id:"example-6",level:4},{value:"Request methods",id:"request-methods",level:2},{value:"<code>keyring_approveRequest</code>",id:"keyring_approverequest",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Example",id:"example-7",level:4},{value:"<code>keyring_getRequest</code>",id:"keyring_getrequest",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Example",id:"example-8",level:4},{value:"<code>keyring_listRequests</code>",id:"keyring_listrequests",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Example",id:"example-9",level:4},{value:"<code>keyring_rejectRequest</code>",id:"keyring_rejectrequest",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Example",id:"example-10",level:4},{value:"<code>keyring_submitRequest</code>",id:"keyring_submitrequest",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Example",id:"example-11",level:4}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"account-management-api",children:"Account Management API"}),"\n",(0,s.jsxs)(n.p,{children:["Dapps can communicate with ",(0,s.jsx)(n.a,{href:"/feat-reference-req/snaps/features/custom-evm-accounts/",children:"account management Snaps"}),"\nusing the Account Management API.\nThe dapp must be ",(0,s.jsx)(n.a,{href:"/feat-reference-req/snaps/features/custom-evm-accounts/security#limit-the-methods-exposed-to-dapps",children:"allowed to call each\nmethod"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"account-methods",children:"Account methods"}),"\n",(0,s.jsx)(n.p,{children:"The following methods are exposed by the Snap for account management."}),"\n",(0,s.jsx)(n.h3,{id:"keyring_createaccount",children:(0,s.jsx)(n.code,{children:"keyring_createAccount"})}),"\n",(0,s.jsx)(n.p,{children:"Creates a new account."}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"An object containing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"}),": ",(0,s.jsx)(n.code,{children:"Record<string, Json>"})," - Snap-defined account options."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/feat-reference-req/snaps/reference/keyring-api/account-management/objects#keyringaccount",children:"An account object."})}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(c.A,{children:[(0,s.jsx)(t.A,{value:"Request",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "method": "keyring_createAccount",\n  "params": {\n    "options": {\n      "signerCount": 5,\n      "threshold": 3\n    }\n  }\n}\n'})})}),(0,s.jsx)(t.A,{value:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n  "id": "091bbc2e-6625-44d0-ac5c-658670ca649a",\n  "methods": [\n    "eth_sign",\n    "eth_signTransaction",\n    "eth_signTypedData_v4",\n    "personal_sign"\n  ],\n  "options": {\n    "signerCount": 5,\n    "threshold": 3\n  },\n  "type": "eip155:eoa"\n}\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"keyring_deleteaccount",children:(0,s.jsx)(n.code,{children:"keyring_deleteAccount"})}),"\n",(0,s.jsx)(n.p,{children:"Deletes an existing account."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"An object containing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"}),": ",(0,s.jsx)(n.code,{children:"string"})," - ID of the account to be deleted (UUIDv4)."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"null"})}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,s.jsxs)(c.A,{children:[(0,s.jsx)(t.A,{value:"Request",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "method": "keyring_deleteAccount",\n  "params": {\n    "id": "091bbc2e-6625-44d0-ac5c-658670ca649a"\n  }\n}\n'})})}),(0,s.jsx)(t.A,{value:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"null\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"keyring_exportaccount",children:(0,s.jsx)(n.code,{children:"keyring_exportAccount"})}),"\n",(0,s.jsx)(n.p,{children:"Exports the private key of an account managed by the Snap.\nA Snap might choose to not support this method."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"An object containing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"}),": ",(0,s.jsx)(n.code,{children:"string"})," - ID of the account to be exported (UUIDv4)."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"An object containing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"privateKey"}),": ",(0,s.jsx)(n.code,{children:"string"})," - The account's private key."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,s.jsxs)(c.A,{children:[(0,s.jsx)(t.A,{value:"Request",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "method": "keyring_exportAccount",\n  "params": {\n    "id": "091bbc2e-6625-44d0-ac5c-658670ca649a"\n  }\n}\n'})})}),(0,s.jsx)(t.A,{value:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "privateKey": "66a41d66be6483f1fdfd01fdb66173d449594bbd286149b019504dd72b58bc51"\n}\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"keyring_filteraccountchains",children:(0,s.jsx)(n.code,{children:"keyring_filterAccountChains"})}),"\n",(0,s.jsx)(n.p,{children:"Filters for blockchain networks that an account can be used on."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"An object containing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Account ID (UUIDv4)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chains"}),": ",(0,s.jsx)(n.code,{children:"string[]"})," - List of ",(0,s.jsx)(n.a,{href:"https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-2.md",children:"CAIP-2"}),"\nchain IDs of blockchain networks to filter."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"An object containing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chains"}),": ",(0,s.jsx)(n.code,{children:"string[]"})," - List of ",(0,s.jsx)(n.a,{href:"https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-2.md",children:"CAIP-2"}),"\nchain IDs of blockchain networks that the account can be used on."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,s.jsxs)(c.A,{children:[(0,s.jsx)(t.A,{value:"Request",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "method": "keyring_filterAccountChains",\n  "params": {\n    "id": "091bbc2e-6625-44d0-ac5c-658670ca649a",\n    "chains": [\n      "eip155:W", \n      "eip155:X",\n      "eip155:Y",\n      "eip155:Z"\n    ]\n  }\n}\n'})})}),(0,s.jsx)(t.A,{value:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "chains": [\n    "eip155:X",\n    "eip155:Y"\n  ]\n}\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"keyring_getaccount",children:(0,s.jsx)(n.code,{children:"keyring_getAccount"})}),"\n",(0,s.jsx)(n.p,{children:"Gets an account from an ID."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"An object containing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Account ID (UUIDv4)."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/feat-reference-req/snaps/reference/keyring-api/account-management/objects#keyringaccount",children:"An account object."})}),"\n",(0,s.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,s.jsxs)(c.A,{children:[(0,s.jsx)(t.A,{value:"Request",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "method": "keyring_getAccount",\n  "params": {\n    "id": "091bbc2e-6625-44d0-ac5c-658670ca649a"\n  }\n}\n'})})}),(0,s.jsx)(t.A,{value:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n  "id": "091bbc2e-6625-44d0-ac5c-658670ca649a",\n  "methods": [\n    "eth_sign",\n    "eth_signTransaction",\n    "eth_signTypedData_v4",\n    "personal_sign"\n  ],\n  "options": {\n    "signerCount": 5,\n    "threshold": 3\n  },\n  "type": "eip155:eoa"\n}\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"keyring_listaccounts",children:(0,s.jsx)(n.code,{children:"keyring_listAccounts"})}),"\n",(0,s.jsx)(n.p,{children:"Lists all accounts handled by the Snap."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:["An array of ",(0,s.jsx)(n.a,{href:"/feat-reference-req/snaps/reference/keyring-api/account-management/objects#keyringaccount",children:"account objects"})," handled by the Snap."]}),"\n",(0,s.jsx)(n.h4,{id:"example-5",children:"Example"}),"\n",(0,s.jsxs)(c.A,{children:[(0,s.jsx)(t.A,{value:"Request",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "method": "keyring_listAccounts"\n}\n'})})}),(0,s.jsx)(t.A,{value:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n    "id": "091bbc2e-6625-44d0-ac5c-658670ca649a",\n    "methods": [\n      "eth_sign",\n      "eth_signTransaction",\n      "eth_signTypedData_v4",\n      "personal_sign"\n    ],\n    "options": {\n      "signerCount": 5,\n      "threshold": 3\n    },\n    "type": "eip155:eoa"\n  },\n  {\n    "address": "0x84674cffb6146d19b986fc88ec70a441b570a45b",\n    "id": "17a87b4a-286c-444d-aebb-1fed89021419",\n    "methods": [\n      "eth_prepareUserOperation",\n      "eth_patchUserOperation",\n      "eth_signUserOperation"\n    ],\n    "type": "eip155:erc4337"\n  }\n]\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"keyring_updateaccount",children:(0,s.jsx)(n.code,{children:"keyring_updateAccount"})}),"\n",(0,s.jsx)(n.p,{children:"Updates an account."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/feat-reference-req/snaps/reference/keyring-api/account-management/objects#keyringaccount",children:"An account object."})}),"\n",(0,s.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"null"})}),"\n",(0,s.jsx)(n.h4,{id:"example-6",children:"Example"}),"\n",(0,s.jsxs)(c.A,{children:[(0,s.jsx)(t.A,{value:"Request",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "method": "keyring_updateAccount",\n  "params": {\n    "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n    "id": "091bbc2e-6625-44d0-ac5c-658670ca649a",\n    "methods": [\n      "eth_sign",\n      "eth_signTransaction",\n      "eth_signTypedData_v4",\n      "personal_sign"\n    ],\n    "options": {\n      "signerCount": 7,\n      "threshold": 4\n    },\n    "type": "eip155:eoa"\n  }\n}\n'})})}),(0,s.jsx)(t.A,{value:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"null\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"request-methods",children:"Request methods"}),"\n",(0,s.jsx)(n.p,{children:"The following methods are exposed by the Snap for managing signature requests."}),"\n",(0,s.jsx)(n.h3,{id:"keyring_approverequest",children:(0,s.jsx)(n.code,{children:"keyring_approveRequest"})}),"\n",(0,s.jsx)(n.p,{children:"Approves a pending request."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"An object containing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Request ID."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"}),": ",(0,s.jsx)(n.code,{children:"Record<string, Json>"})," - Optional Snap-defined arguments."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-7",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"null"})}),"\n",(0,s.jsx)(n.h4,{id:"example-7",children:"Example"}),"\n",(0,s.jsxs)(c.A,{children:[(0,s.jsx)(t.A,{value:"Request",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "method": "keyring_approveRequest",\n  "params": {\n    "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4"\n  }\n}\n'})})}),(0,s.jsx)(t.A,{value:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"null\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"keyring_getrequest",children:(0,s.jsx)(n.code,{children:"keyring_getRequest"})}),"\n",(0,s.jsx)(n.p,{children:"Gets a request from an ID."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"An object containing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Request ID."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-8",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/feat-reference-req/snaps/reference/keyring-api/account-management/objects#keyringrequest",children:"A request object."})}),"\n",(0,s.jsx)(n.h4,{id:"example-8",children:"Example"}),"\n",(0,s.jsxs)(c.A,{children:[(0,s.jsx)(t.A,{value:"Request",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "method": "keyring_getRequest",\n  "params": {\n    "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4"\n  }\n}\n'})})}),(0,s.jsx)(t.A,{value:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n  "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4",\n  "request": {\n    "method": "personal_sign",\n    "params": [\n      "0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765",\n      "0xe887f3b50232722e6eb4c1d3a03b34c9b345acd1"\n    ]\n  },\n  "scope": "eip155:1"\n}\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"keyring_listrequests",children:(0,s.jsx)(n.code,{children:"keyring_listRequests"})}),"\n",(0,s.jsx)(n.p,{children:"Lists all pending requests."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-9",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h4,{id:"returns-9",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:["An array of pending ",(0,s.jsx)(n.a,{href:"/feat-reference-req/snaps/reference/keyring-api/account-management/objects#keyringrequest",children:"request objects"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"example-9",children:"Example"}),"\n",(0,s.jsxs)(c.A,{children:[(0,s.jsx)(t.A,{value:"Request",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "method": "keyring_listRequests"\n}\n'})})}),(0,s.jsx)(t.A,{value:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "account": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n    "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4",\n    "request": {\n      "method": "personal_sign",\n      "params": [\n        "0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765",\n        "0xe887f3b50232722e6eb4c1d3a03b34c9b345acd1"\n      ]\n    },\n    "scope": "eip155:1"\n  },\n  {\n    "account": "0xe887f3b50232722e6eb4c1d3a03b34c9b345acd1",\n    "id": "f6f302ae-38d7-4b95-ae88-bf2fb7fbee87",\n    "request": {\n      "method": "eth_sendTransaction",\n      "params": [\n        {\n          "from": "0xe887f3b50232722e6eb4c1d3a03b34c9b345acd1",\n          "nonce": "0x1",\n          "gasPrice": "0x10",\n          "gasLimit": "0x5208",\n          "to": "0x84674cffb6146d19b986fc88ec70a441b570a45b",\n          "value": "0x10000",\n          "data": "0x"\n        }\n      ]\n    },\n    "scope": "eip155:1"\n  }\n]\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"keyring_rejectrequest",children:(0,s.jsx)(n.code,{children:"keyring_rejectRequest"})}),"\n",(0,s.jsx)(n.p,{children:"Rejects a pending request and removes it from the list of pending requests."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-10",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"An object containing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Request ID."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-10",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"null"})}),"\n",(0,s.jsx)(n.h4,{id:"example-10",children:"Example"}),"\n",(0,s.jsxs)(c.A,{children:[(0,s.jsx)(t.A,{value:"Request",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "method": "keyring_rejectRequest",\n  "params": {\n    "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4"\n  }\n}\n'})})}),(0,s.jsx)(t.A,{value:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"null\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"keyring_submitrequest",children:(0,s.jsx)(n.code,{children:"keyring_submitRequest"})}),"\n",(0,s.jsx)(n.p,{children:"Submits a new request."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-11",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/feat-reference-req/snaps/reference/keyring-api/account-management/objects#keyringrequest",children:"A request object."})}),"\n",(0,s.jsx)(n.h4,{id:"returns-11",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:["If the request is ",(0,s.jsx)(n.a,{href:"/feat-reference-req/snaps/features/custom-evm-accounts/#synchronous-transaction-flow",children:"synchronous"}),",\n",(0,s.jsx)(n.code,{children:"keyring_submitRequest"})," returns an object containing:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pending"})," - ",(0,s.jsx)(n.code,{children:"false"})," to indicate a synchronous request."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"result"}),": ",(0,s.jsx)(n.code,{children:"Json"})," - Request result."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If the request is ",(0,s.jsx)(n.a,{href:"/feat-reference-req/snaps/features/custom-evm-accounts/#asynchronous-transaction-flow",children:"asynchronous"}),",\n",(0,s.jsx)(n.code,{children:"keyring_submitRequest"})," returns an object containing:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pending"})," - ",(0,s.jsx)(n.code,{children:"true"})," to indicate that the request will be handled asynchronously."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"redirect"})," - An optional redirect object containing:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"message"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Redirect message."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"url"}),": ",(0,s.jsx)(n.code,{children:"string"})," - Redirect URL."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-11",children:"Example"}),"\n",(0,s.jsxs)(c.A,{children:[(0,s.jsx)(t.A,{value:"Request",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "method": "keyring_submitRequest",\n  "params": {\n    "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n    "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4",\n    "request": {\n      "method": "personal_sign",\n      "params": [\n        "0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765",\n        "0xe887f3b50232722e6eb4c1d3a03b34c9b345acd1"\n      ]\n    },\n    "scope": "eip155:1"\n  }\n}\n'})})}),(0,s.jsx)(t.A,{value:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "pending": false,\n  "result": "0x9aef363b17bc18dfbdcb9ed3ce5f9f96788ce84b353d262099e90c4fa0b513a4e21ee47bafa04c0630750e901b62bd4839b45219c191ec6076d6549637cb1beb4c"\n}\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>t});r(96540);var s=r(18215);const a={tabItem:"tabItem_Ymn6"};var c=r(74848);function t(e){let{children:n,hidden:r,className:t}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,t),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>k});var s=r(96540),a=r(18215),c=r(23104),t=r(56347),i=r(205),l=r(57485),d=r(31682),o=r(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:a}}=e;return{value:n,label:r,attributes:s,default:a}}))}(r);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const a=(0,t.W6)(),c=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(c),(0,s.useCallback)((e=>{if(!c)return;const n=new URLSearchParams(a.location.search);n.set(c,e),a.replace({...a.location,search:n.toString()})}),[c,a])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,c=h(e),[t,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:c}))),[d,u]=x({queryString:r,groupId:a}),[j,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,c]=(0,o.Dv)(r);return[a,(0,s.useCallback)((e=>{r&&c.set(e)}),[r,c])]}({groupId:a}),g=(()=>{const e=d??j;return p({value:e,tabValues:c})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:t,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,c]),tabValues:c}}var m=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function f(e){let{className:n,block:r,selectedValue:s,selectValue:t,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,c.a_)(),o=e=>{const n=e.currentTarget,r=l.indexOf(n),a=i[r].value;a!==s&&(d(n),t(a))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:c}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:o,...c,className:(0,a.A)("tabs__item",g.tabItem,c?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:a}=e;const c=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=c.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:c.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>i});var s=r(96540);const a={},c=s.createContext(a);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);