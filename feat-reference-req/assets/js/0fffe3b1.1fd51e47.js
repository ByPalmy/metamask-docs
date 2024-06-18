"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7170],{33390:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>h});var t=s(74848),r=s(28453);const c={description:"Access the internet using the fetch function.",sidebar_position:8},o="Network access",i={id:"features/network-access",title:"Network access",description:"Access the internet using the fetch function.",source:"@site/snaps/features/network-access.md",sourceDirName:"features",slug:"/features/network-access",permalink:"/feat-reference-req/snaps/features/network-access",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/network-access.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Access the internet using the fetch function.",sidebar_position:8},sidebar:"snapsSidebar",previous:{title:"Localization",permalink:"/feat-reference-req/snaps/features/localization"},next:{title:"Non-EVM networks",permalink:"/feat-reference-req/snaps/features/non-evm-networks"}},a={},h=[{value:"Steps",id:"steps",level:2},{value:"1. Request permission to access the internet",id:"1-request-permission-to-access-the-internet",level:3},{value:"2. Use the <code>fetch</code> function",id:"2-use-the-fetch-function",level:3},{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"network-access",children:"Network access"}),"\n",(0,t.jsxs)(n.p,{children:["You can access the internet from a Snap using the global ",(0,t.jsx)(n.code,{children:"fetch"})," API."]}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(n.h3,{id:"1-request-permission-to-access-the-internet",children:"1. Request permission to access the internet"}),"\n",(0,t.jsxs)(n.p,{children:["Request the ",(0,t.jsx)(n.a,{href:"/feat-reference-req/snaps/reference/permissions#endowmentnetwork-access",children:(0,t.jsx)(n.code,{children:"endowment:network-access"})})," permission,\nwhich exposes the global ",(0,t.jsx)(n.code,{children:"fetch"})," API to the Snaps execution environment.\nAdd the following to your Snap's manifest file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:network-access": {}\n}\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"2-use-the-fetch-function",children:["2. Use the ",(0,t.jsx)(n.code,{children:"fetch"})," function"]}),"\n",(0,t.jsxs)(n.p,{children:["You can now use the ",(0,t.jsx)(n.code,{children:"fetch"})," function to access the internet.\nThe following example fetches a JSON file from the provided URL."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="index.ts"',children:"async function getJson(url: string) {\n  const response = await fetch(url);\n  return await response.json();\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Same-origin policy and CORS",type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"fetch"})," requests in a Snap are bound by the browser's\n",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#cross-origin_network_access",children:"same-origin policy"}),".\nSince Snap code is executed in an iframe with the ",(0,t.jsx)(n.code,{children:"sandbox"})," property, the browser sends an ",(0,t.jsx)(n.code,{children:"Origin"}),"\nheader with the value ",(0,t.jsx)(n.code,{children:"null"})," with outgoing requests.\nFor the Snap to be able to read the response, the server must send an\n",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",children:(0,t.jsx)(n.code,{children:"Access-Control-Allow-Origin"})})," CORS header\nwith the value ",(0,t.jsx)(n.code,{children:"*"})," or ",(0,t.jsx)(n.code,{children:"null"})," in the response.\nOtherwise, you might need to\n",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141",children:"set up a proxy"}),"."]})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"XMLHttpRequest"})," isn't available in Snaps, and you should replace it with ",(0,t.jsx)(n.code,{children:"fetch"}),".\nIf your dependencies use ",(0,t.jsx)(n.code,{children:"XMLHttpRequest"}),", you can\n",(0,t.jsx)(n.a,{href:"/feat-reference-req/snaps/how-to/debug-a-snap/common-issues#patch-the-use-of-xmlhttprequest",children:"patch it away"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/network-access",children:(0,t.jsx)(n.code,{children:"@metamask/network-access-example-snap"})}),"\npackage for a full example of accessing the internet from a Snap.\nThis example exposes a ",(0,t.jsx)(n.a,{href:"/feat-reference-req/snaps/learn/about-snaps/apis#custom-json-rpc-apis",children:"custom JSON-RPC API"})," for\ndapps to call the ",(0,t.jsx)(n.code,{children:"fetch"})," function from a Snap."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var t=s(96540);const r={},c=t.createContext(r);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);