"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9703],{15680:(e,a,r)=>{r.d(a,{xA:()=>d,yg:()=>g});var t=r(96540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=t.createContext({}),c=function(e){var a=t.useContext(o),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},d=function(e){var a=c(e.components);return t.createElement(o.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),y=n,g=p["".concat(o,".").concat(y)]||p[y]||u[y]||i;return r?t.createElement(g,l(l({ref:a},d),{},{components:r})):t.createElement(g,l({ref:a},d))}));function g(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=y;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<i;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},2552:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(58168),n=(r(96540),r(15680));const i={sidebar_position:7,description:"Use the SDK in your dapp.",tags:["JavaScript SDK","iOS SDK","Android SDK","Unity SDK"]},l="Use MetaMask SDK",s={unversionedId:"how-to/use-sdk/index",id:"how-to/use-sdk/index",title:"Use MetaMask SDK",description:"Use the SDK in your dapp.",source:"@site/wallet/how-to/use-sdk/index.md",sourceDirName:"how-to/use-sdk",slug:"/how-to/use-sdk/",permalink:"/1291-update-snaps/wallet/how-to/use-sdk/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/index.md",tags:[{label:"JavaScript SDK",permalink:"/1291-update-snaps/wallet/tags/java-script-sdk"},{label:"iOS SDK",permalink:"/1291-update-snaps/wallet/tags/i-os-sdk"},{label:"Android SDK",permalink:"/1291-update-snaps/wallet/tags/android-sdk"},{label:"Unity SDK",permalink:"/1291-update-snaps/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Use the SDK in your dapp.",tags:["JavaScript SDK","iOS SDK","Android SDK","Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Manage permissions",permalink:"/1291-update-snaps/wallet/how-to/manage-permissions"},next:{title:"JavaScript",permalink:"/1291-update-snaps/wallet/how-to/use-sdk/javascript/"}},o={},c=[],d={toc:c},p="wrapper";function u(e){let{components:a,...r}=e;return(0,n.yg)(p,(0,t.A)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"use-metamask-sdk"},"Use MetaMask SDK"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/1291-update-snaps/wallet/concepts/sdk/"},"MetaMask SDK")," is a library that provides a reliable, secure, and seamless\nconnection from your dapp to the MetaMask browser extension and MetaMask Mobile.\nBy integrating your dapp using the SDK, millions of MetaMask Mobile users can connect to their\npreferred MetaMask client.\nThe SDK supports the following dapp platforms:"),(0,n.yg)("div",{class:"cards"},(0,n.yg)("div",{class:"card"},(0,n.yg)("div",{class:"card__header"},(0,n.yg)("h3",null,"\ud83d\udcbb ",(0,n.yg)("a",{href:"javascript"},"JavaScript"))),(0,n.yg)("div",{class:"card__body"},(0,n.yg)("ul",null,(0,n.yg)("li",null,(0,n.yg)("a",{href:"javascript/react"},"React")),(0,n.yg)("li",null,(0,n.yg)("a",{href:"javascript/pure-js"},"Pure JavaScript")),(0,n.yg)("li",null,(0,n.yg)("a",{href:"javascript/other-web-frameworks"},"Other web frameworks")),(0,n.yg)("li",null,(0,n.yg)("a",{href:"javascript/react-native"},"React Native")),(0,n.yg)("li",null,(0,n.yg)("a",{href:"javascript/nodejs"},"Node.js")),(0,n.yg)("li",null,(0,n.yg)("a",{href:"javascript/electron"},"Electron"))))),(0,n.yg)("div",{class:"card"},(0,n.yg)("div",{class:"card__header"},(0,n.yg)("h3",null,"\ud83d\udcf1 ",(0,n.yg)("a",{href:"mobile"},"Mobile"))),(0,n.yg)("div",{class:"card__body"},(0,n.yg)("ul",null,(0,n.yg)("li",null,(0,n.yg)("a",{href:"javascript/react-native"},"React Native")),(0,n.yg)("li",null,(0,n.yg)("a",{href:"mobile/ios"},"iOS")),(0,n.yg)("li",null,(0,n.yg)("a",{href:"mobile/android"},"Android"))))),(0,n.yg)("div",{class:"card"},(0,n.yg)("div",{class:"card__header"},(0,n.yg)("h3",null,"\ud83c\udfae ",(0,n.yg)("a",{href:"gaming"},"Gaming"))),(0,n.yg)("div",{class:"card__body"},(0,n.yg)("ul",null,(0,n.yg)("li",null,(0,n.yg)("a",{href:"gaming/unity"},"Unity")),(0,n.yg)("li",null,(0,n.yg)("a",{href:"gaming/unreal-engine"},"Unreal Engine")," (coming soon)"))))),(0,n.yg)("div",{class:"card margin-bottom--lg"},(0,n.yg)("div",{class:"card__header"},(0,n.yg)("h3",null,"\u2194\ufe0f ",(0,n.yg)("a",{href:"3rd-party-libraries"},"Third-party libraries"))),(0,n.yg)("div",{class:"card__body"},(0,n.yg)("ul",null,(0,n.yg)("li",null,(0,n.yg)("a",{href:"3rd-party-libraries/web3-onboard"},"Web3-Onboard")),(0,n.yg)("li",null,(0,n.yg)("a",{href:"3rd-party-libraries/wagmi"},"Wagmi"))))))}u.isMDXComponent=!0}}]);