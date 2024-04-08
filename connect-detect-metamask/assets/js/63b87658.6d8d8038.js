"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:2,description:"Learn about the Android SDK architecture.",tags:["Android SDK"]},o="Android SDK architecture",c={unversionedId:"concepts/sdk/android",id:"concepts/sdk/android",title:"Android SDK architecture",description:"Learn about the Android SDK architecture.",source:"@site/wallet/concepts/sdk/android.md",sourceDirName:"concepts/sdk",slug:"/concepts/sdk/android",permalink:"/connect-detect-metamask/wallet/concepts/sdk/android",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/sdk/android.md",tags:[{label:"Android SDK",permalink:"/connect-detect-metamask/wallet/tags/android-sdk"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Learn about the Android SDK architecture.",tags:["Android SDK"]},sidebar:"walletSidebar",previous:{title:"SDK connections",permalink:"/connect-detect-metamask/wallet/concepts/sdk/connections"},next:{title:"Convenience libraries",permalink:"/connect-detect-metamask/wallet/concepts/convenience-libraries"}},l={},d=[{value:"Architecture",id:"architecture",level:2},{value:"Connection flow",id:"connection-flow",level:2}],s={toc:d},p="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"android-sdk-architecture"},"Android SDK architecture"),(0,r.kt)("p",null,"The Android version of ",(0,r.kt)("a",{parentName:"p",href:"/connect-detect-metamask/wallet/concepts/sdk/"},"MetaMask SDK")," enables your users to easily connect with their\nMetaMask Mobile wallet.\nThe ",(0,r.kt)("a",{parentName:"p",href:"#architecture"},"architecture")," and ",(0,r.kt)("a",{parentName:"p",href:"#connection-flow"},"connection flow")," of\nthe Android SDK differs from the other SDK platforms."),(0,r.kt)("admonition",{title:"Get started",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Get started by ",(0,r.kt)("a",{parentName:"li",href:"/connect-detect-metamask/wallet/how-to/use-sdk/mobile/android"},"setting up the SDK in your Android dapp"),"."),(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-android-sdk/tree/main/app"},"example Android dapp")," in\nthe Android SDK GitHub repository for advanced use cases."))),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"The following diagram outlines the high-level architecture of the Android SDK:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android SDK architecture diagram",src:n(58913).Z,width:"1512",height:"1122"})),(0,r.kt)("p",null,"The MetaMask Android SDK consists of two components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The client SDK"),", imported in the dapp"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The server SDK"),", an Android Native Module embedded in the MetaMask React Native wallet")),(0,r.kt)("p",null,"The client SDK communicates with the server SDK using\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/components/processes-and-threads#IPC"},"Interprocess communication (IPC)"),".\nThe JSON-RPC calls are implemented using the\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/components/aidl"},"Android Interface Definition Language (AIDL)"),".\nCommunication over IPC is encrypted using elliptic curve integrated encryption scheme (ECIES)."),(0,r.kt)("p",null,"Within MetaMask, the wallet (written in React Native) communicates with the Native Module (written\nin Kotlin) using different mechanisms depending on the direction of communication:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Native Module ","\u2192"," React Native")," - The Native Module broadcasts messages as events that the wallet\nlistens to and handles upon receipt."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"React Native ","\u2192"," Native Module")," - The wallet calls the Native Module using the ",(0,r.kt)("inlineCode",{parentName:"li"},"NativeModules")," API,\nwhich enables React Native code to call native Kotlin primitives.")),(0,r.kt)("h2",{id:"connection-flow"},"Connection flow"),(0,r.kt)("p",null,"The following diagram outlines the communication flow between the Android client SDK and server SDK:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android SDK communication diagram",src:n(6117).Z,width:"1512",height:"1334"})),(0,r.kt)("p",null,"The flow is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The dapp, with the SDK installed, initiates communication when a user connects to MetaMask.\nThe dapp deeplinks to MetaMask, and MetaMask sets up the Android Native Module to receive client requests."),(0,r.kt)("li",{parentName:"ol"},"The dapp generates an ECIES public/private key pair.\nThe dapp and MetaMask exchange public keys over IPC."),(0,r.kt)("li",{parentName:"ol"},"The dapp and MetaMask perform end-to-end encrypted JSON-RPC calls.")))}u.isMDXComponent=!0},58913:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sdk-android-architecture-37023c4faf4a70fbda21e5a463252d65.png"},6117:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sdk-android-communication-10dcd9c63acfecb8a3274a0641499424.png"}}]);