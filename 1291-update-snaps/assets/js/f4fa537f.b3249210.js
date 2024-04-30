"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6325],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),y=r,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},60503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(58168),r=(n(96540),n(15680));const o={description:"Set an icon on MetaMask for your dapp.",sidebar_position:3},i="Display a dapp icon",p={unversionedId:"how-to/display/icon",id:"how-to/display/icon",title:"Display a dapp icon",description:"Set an icon on MetaMask for your dapp.",source:"@site/wallet/how-to/display/icon.md",sourceDirName:"how-to/display",slug:"/how-to/display/icon",permalink:"/1291-update-snaps/wallet/how-to/display/icon",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/display/icon.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Set an icon on MetaMask for your dapp.",sidebar_position:3},sidebar:"walletSidebar",previous:{title:"Display a contract's method names",permalink:"/1291-update-snaps/wallet/how-to/display/method-names"},next:{title:"Manage permissions",permalink:"/1291-update-snaps/wallet/how-to/manage-permissions"}},s={},l=[],c={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"display-a-dapp-icon"},"Display a dapp icon"),(0,r.yg)("p",null,"When your dapp makes a login request to a MetaMask user, MetaMask may render a modal that displays\nyour dapp icon."),(0,r.yg)("p",null,"MetaMask retrieves this icon using the HTML selector ",(0,r.yg)("inlineCode",{parentName:"p"},'<head> link[rel="shortcut icon"]'),", so you can\nfollow the ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Favicon"},"favicon standard")," to customize your dapp icon.\nMake sure to have a ",(0,r.yg)("inlineCode",{parentName:"p"},"link")," tag within your dapp's ",(0,r.yg)("inlineCode",{parentName:"p"},"head")," with ",(0,r.yg)("inlineCode",{parentName:"p"},'rel = "shortcut icon"'),", as in the\nfollowing example.\nThe tag's ",(0,r.yg)("inlineCode",{parentName:"p"},"href")," attribute is used for assigning the dapp icon."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<head>\n  <link rel="shortcut icon" href="https://your-dapp.com/your-icon.png" />\n</head>\n')))}u.isMDXComponent=!0}}]);