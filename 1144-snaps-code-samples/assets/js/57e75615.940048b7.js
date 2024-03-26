"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7502],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>h});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return t?n.createElement(h,s(s({ref:r},l),{},{components:t})):n.createElement(h,s({ref:r},l))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},94129:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={description:"Communicate errors from your Snap without crashing it.",sidebar_position:2},s="Communicate errors",i={unversionedId:"how-to/communicate-errors",id:"how-to/communicate-errors",title:"Communicate errors",description:"Communicate errors from your Snap without crashing it.",source:"@site/snaps/how-to/communicate-errors.md",sourceDirName:"how-to",slug:"/how-to/communicate-errors",permalink:"/1144-snaps-code-samples/snaps/how-to/communicate-errors",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/communicate-errors.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Communicate errors from your Snap without crashing it.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Request permissions",permalink:"/1144-snaps-code-samples/snaps/how-to/request-permissions"},next:{title:"Use environment variables",permalink:"/1144-snaps-code-samples/snaps/how-to/use-environment-variables"}},p={},c=[{value:"Import and throw errors",id:"import-and-throw-errors",level:2},{value:"Pass data with the error",id:"pass-data-with-the-error",level:3},{value:"Detect known errors in dapps",id:"detect-known-errors-in-dapps",level:2}],l={toc:c},m="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(m,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"communicate-errors"},"Communicate errors"),(0,o.kt)("p",null,"The Snaps SDK exposes a set of known errors that can be thrown from your Snap code without crashing\nthe Snap.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"/1144-snaps-code-samples/snaps/reference/known-errors"},"Snaps known errors reference")," for the full list of errors."),(0,o.kt)("h2",{id:"import-and-throw-errors"},"Import and throw errors"),(0,o.kt)("p",null,"To throw these known errors, first import them from the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/snaps-sdk"},(0,o.kt)("inlineCode",{parentName:"a"},"@metamask/snaps-sdk"))," package,\nthen throw them where needed.\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnRpcRequestHandler } from "@metamask/snaps-sdk";\nimport { MethodNotFoundError } from "@metamask/snaps-sdk";\n\nexport const onRpcRequest: OnRpcRequestHandler = async ({ request }) => {\n    switch (request.method) {\n        case "hello":\n            return "Hello World!";\n    default:\n        // Throw a known error to avoid crashing the Snap.\n        throw new MethodNotFoundError();\n    }\n};\n')),(0,o.kt)("h3",{id:"pass-data-with-the-error"},"Pass data with the error"),(0,o.kt)("p",null,"The error class constructors exported by ",(0,o.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-sdk")," have the following signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class SnapJsonRpcError extends SnapError {\n    new (message?: string, data?: Record<string, Json>)\n}\n")),(0,o.kt)("p",null,"Both parameters are optional.\nIf you don't pass ",(0,o.kt)("inlineCode",{parentName:"p"},"message"),", then a pre-determined message is used.\nIf you don't pass ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),", then an empty object is passed."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"data")," can be any JSON-serializable object."),(0,o.kt)("h2",{id:"detect-known-errors-in-dapps"},"Detect known errors in dapps"),(0,o.kt)("p",null,"Known errors are thrown back to the caller as JSON-RPC errors.\nThey have a numeric ",(0,o.kt)("inlineCode",{parentName:"p"},"code"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," string, and a ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," object."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/1144-snaps-code-samples/snaps/reference/known-errors"},"Snaps known errors reference")," lists all the known errors with\ntheir codes and intended usage."))}d.isMDXComponent=!0}}]);