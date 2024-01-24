"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=s,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:s,r[1]=p;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(87462),s=(n(67294),n(3905));const o={description:"Learn about the Snaps APIs.",sidebar_position:2},r="About the Snaps APIs",p={unversionedId:"concepts/apis",id:"concepts/apis",title:"About the Snaps APIs",description:"Learn about the Snaps APIs.",source:"@site/snaps/concepts/apis.md",sourceDirName:"concepts",slug:"/concepts/apis",permalink:"/805-snaps-concepts/snaps/concepts/apis",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/concepts/apis.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about the Snaps APIs.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Snaps overview",permalink:"/805-snaps-concepts/snaps/concepts/overview"},next:{title:"Snaps files",permalink:"/805-snaps-concepts/snaps/concepts/files"}},i={},l=[{value:"Snaps API",id:"snaps-api",level:2},{value:"MetaMask JSON-RPC API",id:"metamask-json-rpc-api",level:2},{value:"Custom JSON-RPC APIs",id:"custom-json-rpc-apis",level:2}],c={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"about-the-snaps-apis"},"About the Snaps APIs"),(0,s.kt)("h2",{id:"snaps-api"},"Snaps API"),(0,s.kt)("p",null,"Snaps can access the global object ",(0,s.kt)("inlineCode",{parentName:"p"},"snap"),", which has one method: ",(0,s.kt)("inlineCode",{parentName:"p"},"request"),".\nYou can use this object to make ",(0,s.kt)("a",{parentName:"p",href:"/805-snaps-concepts/snaps/reference/snaps-api"},"Snaps API")," requests.\nThese API methods allow Snaps to extend or modify the functionality of MetaMask."),(0,s.kt)("p",null,"For example, to call ",(0,s.kt)("a",{parentName:"p",href:"/805-snaps-concepts/snaps/reference/snaps-api#snap_notify"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_notify")),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await snap.request({\n  method: 'snap_notify',\n  params: {\n    type: 'inApp',\n    message: 'Hello, world!',\n  },\n});\n")),(0,s.kt)("h2",{id:"metamask-json-rpc-api"},"MetaMask JSON-RPC API"),(0,s.kt)("p",null,"Dapps can install and communicate with Snaps using the following\n",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"MetaMask JSON-RPC API")," methods:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_getSnap")," - Gets the dapp's permitted Snaps."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_requestSnaps")," - Requests permission to communicate with the specified Snaps."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_snap")," - Calls the specified custom JSON-RPC API method of the specified Snap."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_invokeSnap")," - Synonymous with ",(0,s.kt)("inlineCode",{parentName:"li"},"wallet_snap"),".")),(0,s.kt)("p",null,"Snaps can also call some MetaMask JSON-RPC API methods using the ",(0,s.kt)("inlineCode",{parentName:"p"},"ethereum")," global.\nTo expose ",(0,s.kt)("inlineCode",{parentName:"p"},"ethereum")," to the Snap execution environment, a Snap must first request the\n",(0,s.kt)("a",{parentName:"p",href:"/805-snaps-concepts/snaps/reference/permissions#endowmentethereum-provider"},(0,s.kt)("inlineCode",{parentName:"a"},"endowment:ethereum-provider"))," permission."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"ethereum")," global available to Snaps has fewer capabilities than ",(0,s.kt)("inlineCode",{parentName:"p"},"window.ethereum")," for dapps.\nSnaps can only use it to make read requests, not to write to the blockchain or initiate transactions.\nSnaps can call all MetaMask API methods ",(0,s.kt)("strong",{parentName:"p"},"except")," the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_requestSnaps")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_requestPermissions")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_revokePermissions")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_addEthereumChain")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_switchEthereumChain")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_watchAsset")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_registerOnboarding")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_scanQRCode")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"eth_sendRawTransaction")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"eth_sendTransaction")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"eth_signTypedData_v4")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"eth_decrypt")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"eth_getEncryptionPublicKey"))),(0,s.kt)("h2",{id:"custom-json-rpc-apis"},"Custom JSON-RPC APIs"),(0,s.kt)("p",null,"Snaps can implement their own custom JSON-RPC APIs to communicate with dapps and other Snaps.\nTo do so, a Snap must export the ",(0,s.kt)("a",{parentName:"p",href:"/805-snaps-concepts/snaps/reference/exports#onrpcrequest"},(0,s.kt)("inlineCode",{parentName:"a"},"onRpcRequest"))," function."),(0,s.kt)("p",null,"The Snap's custom API is completely up to you, as long as it's a valid\n",(0,s.kt)("a",{parentName:"p",href:"https://www.jsonrpc.org/specification"},"JSON-RPC")," API."),(0,s.kt)("admonition",{title:"Does my Snap need a custom API?",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If your Snap can do something useful without receiving and responding to JSON-RPC requests, such as\nproviding ",(0,s.kt)("a",{parentName:"p",href:"/805-snaps-concepts/snaps/reference/exports#ontransaction"},"transaction insights"),", you do not need to\nimplement a custom API.\nHowever, if you want to do something such as manage the user's keys for a particular protocol and\ncreate a dapp that sends transactions for that protocol via your Snap, you must implement a custom API.")),(0,s.kt)("p",null,"For example, the following is a simple Snap, ",(0,s.kt)("inlineCode",{parentName:"p"},"Hello World"),", with a JSON-RPC method ",(0,s.kt)("inlineCode",{parentName:"p"},"hello"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"module.exports.onRpcRequest = async ({ origin, request }) => {\n  switch (request.method) {\n    // Expose a 'hello' JSON-RPC method to dapps.\n    case 'hello':\n      return 'world!';\n\n    default:\n      throw new Error('Method not found.');\n  }\n};\n")),(0,s.kt)("p",null,"A dapp can implement something like the following to install ",(0,s.kt)("inlineCode",{parentName:"p"},"Hello World")," and invoke its ",(0,s.kt)("inlineCode",{parentName:"p"},"hello")," method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"// Connect to the Snap, enabling its usage inside the dapp.\n// If the Snap is not already installed, the MetaMask user will be prompted to\n// install it.\nawait window.ethereum.request({\n  method: 'wallet_requestSnaps',\n  params: {\n    // Assuming the Snap is published to npm using the package name 'hello-snap'.\n    'npm:hello-snap': {},\n  },\n});\n\n// Invoke the 'hello' JSON-RPC method exposed by the Snap.\nconst response = await window.ethereum.request({\n  method: 'wallet_invokeSnap',\n  params: { snapId: 'npm:hello-snap', request: { method: 'hello' } },\n});\n\nconsole.log(response); // 'world!'\n")))}u.isMDXComponent=!0}}]);