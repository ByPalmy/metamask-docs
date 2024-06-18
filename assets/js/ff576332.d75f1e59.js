"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1733],{73346:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(74848),t=n(28453);const a={description:"Request permissions in a manifest file.",sidebar_position:1},r="Request permissions",o={id:"how-to/request-permissions",title:"Request permissions",description:"Request permissions in a manifest file.",source:"@site/snaps/how-to/request-permissions.md",sourceDirName:"how-to",slug:"/how-to/request-permissions",permalink:"/snaps/how-to/request-permissions",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/request-permissions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Request permissions in a manifest file.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"How to",permalink:"/snaps/how-to"},next:{title:"Communicate errors",permalink:"/snaps/how-to/communicate-errors"}},l={},p=[{value:"Request permissions from a Snap",id:"request-permissions-from-a-snap",level:2},{value:"Snaps API methods",id:"snaps-api-methods",level:3},{value:"Endowments",id:"endowments",level:3},{value:"Dynamic permissions",id:"dynamic-permissions",level:3},{value:"Request permissions from a dapp",id:"request-permissions-from-a-dapp",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"request-permissions",children:"Request permissions"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"#request-permissions-from-a-snap",children:"Snaps must request permission"})," to access certain powerful\nJavaScript globals or API methods.\n",(0,i.jsx)(s.a,{href:"#request-permissions-from-a-dapp",children:"Dapps must also request permission"})," to access certain API methods\nto communicate with Snaps."]}),"\n",(0,i.jsxs)(s.p,{children:["Snaps and dapps follow the ",(0,i.jsx)(s.a,{href:"https://eips.ethereum.org/EIPS/eip-2255",children:"EIP-2255 wallet permissions specification"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"request-permissions-from-a-snap",children:"Request permissions from a Snap"}),"\n",(0,i.jsx)(s.h3,{id:"snaps-api-methods",children:"Snaps API methods"}),"\n",(0,i.jsxs)(s.p,{children:["Request permission to call ",(0,i.jsx)(s.a,{href:"/snaps/reference/snaps-api",children:"Snaps API methods"})," in the\n",(0,i.jsx)(s.code,{children:"initialPermissions"})," field of the Snap ",(0,i.jsx)(s.a,{href:"/snaps/learn/about-snaps/files#manifest-file",children:"manifest file"}),".\nFor example, to request to call ",(0,i.jsx)(s.a,{href:"/snaps/reference/snaps-api#snap_dialog",children:(0,i.jsx)(s.code,{children:"snap_dialog"})}),", add the\nfollowing to the manifest file:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "snap_dialog": {}\n}\n'})}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsx)(s.p,{children:"All Snaps API methods except the following interactive UI methods require requesting permission in\nthe manifest file:"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/snaps/reference/snaps-api#snap_createinterface",children:(0,i.jsx)(s.code,{children:"snap_createInterface"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/snaps/reference/snaps-api#snap_getinterfacestate",children:(0,i.jsx)(s.code,{children:"snap_getInterfaceState"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/snaps/reference/snaps-api#snap_updateInterface",children:(0,i.jsx)(s.code,{children:"snap_updateInterface"})})}),"\n"]})]}),"\n",(0,i.jsx)(s.h3,{id:"endowments",children:"Endowments"}),"\n",(0,i.jsxs)(s.p,{children:["Endowments are a type of permission.\nRequest endowments in the ",(0,i.jsx)(s.code,{children:"initialPermissions"})," field of the Snap\n",(0,i.jsx)(s.a,{href:"/snaps/learn/about-snaps/files#manifest-file",children:"manifest file"}),".\nSee the ",(0,i.jsx)(s.a,{href:"/snaps/reference/permissions",children:"Snaps permissions reference"})," for the full list of endowments."]}),"\n",(0,i.jsxs)(s.p,{children:["For example, to request the ",(0,i.jsx)(s.a,{href:"/snaps/reference/permissions#endowmentnetwork-access",children:(0,i.jsx)(s.code,{children:"endowment:network-access"})}),"\npermission, add the following to the manifest file:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:network-access": {}\n}\n'})}),"\n",(0,i.jsx)(s.h3,{id:"dynamic-permissions",children:"Dynamic permissions"}),"\n",(0,i.jsx)(s.p,{children:"Dynamic permissions are not requested in the manifest file.\nInstead, your Snap can acquire dynamic permissions during its lifecycle."}),"\n",(0,i.jsxs)(s.p,{children:["For example, request permission to call the ",(0,i.jsx)(s.a,{href:"/wallet/reference/eth_accounts",children:(0,i.jsx)(s.code,{children:"eth_accounts"})}),"\nMetaMask JSON-RPC API method by calling ",(0,i.jsx)(s.a,{href:"/wallet/reference/eth_requestaccounts",children:(0,i.jsx)(s.code,{children:"eth_requestAccounts"})}),".\nSee the ",(0,i.jsxs)(s.a,{href:"/snaps/reference/permissions#eth_accounts",children:[(0,i.jsx)(s.code,{children:"eth_accounts"})," dynamic permission"]})," for more information."]}),"\n",(0,i.jsx)(s.h2,{id:"request-permissions-from-a-dapp",children:"Request permissions from a dapp"}),"\n",(0,i.jsxs)(s.p,{children:["Dapps that communicate with Snaps using ",(0,i.jsx)(s.a,{href:"/snaps/reference/wallet-api-for-snaps#wallet_snap",children:(0,i.jsx)(s.code,{children:"wallet_snap"})}),"\nor ",(0,i.jsx)(s.a,{href:"/snaps/reference/wallet-api-for-snaps#wallet_invokesnap",children:(0,i.jsx)(s.code,{children:"wallet_invokeSnap"})})," must request\npermission to do so by calling\n",(0,i.jsx)(s.a,{href:"/snaps/reference/wallet-api-for-snaps#wallet_requestsnaps",children:(0,i.jsx)(s.code,{children:"wallet_requestSnaps"})})," first."]}),"\n",(0,i.jsxs)(s.p,{children:["The following example calls ",(0,i.jsx)(s.code,{children:"wallet_requestSnaps"})," to request permission to connect to the\n",(0,i.jsx)(s.code,{children:"hello-snap"})," Snap, then calls ",(0,i.jsx)(s.code,{children:"wallet_invokeSnap"})," to invoke the ",(0,i.jsx)(s.code,{children:"hello"})," JSON-RPC method exposed by the Snap:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:'title="index.js"',children:'// If the Snap is not already installed, the user will be prompted to install it.\nawait window.ethereum.request({\n  method: "wallet_requestSnaps",\n  params: {\n    // Assuming the Snap is published to npm using the package name "hello-snap".\n    "npm:hello-snap": {},\n  },\n});\n\n// Invoke the "hello" JSON-RPC method exposed by the Snap.\nconst response = await window.ethereum.request({\n  method: "wallet_invokeSnap",\n  params: { snapId: "npm:hello-snap", request: { method: "hello" } },\n});\n\nconsole.log(response); // "world!"\n'})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Learn more about implementing ",(0,i.jsx)(s.a,{href:"/snaps/learn/about-snaps/apis#custom-json-rpc-apis",children:"custom JSON-RPC APIs"})," in a Snap."]})})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>o});var i=n(96540);const t={},a=i.createContext(t);function r(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);