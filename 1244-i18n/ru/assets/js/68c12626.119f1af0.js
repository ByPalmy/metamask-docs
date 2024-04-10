"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7785],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>y});var t=a(96540);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=t.createContext({}),l=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(a),m=s,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return a?t.createElement(y,i(i({ref:n},c),{},{components:a})):t.createElement(y,i({ref:n},c))}));function y(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=a[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70785:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=a(58168),s=(a(96540),a(15680));const r={description:"Learn about the Snaps system at a high level.",sidebar_position:1},i="About Snaps",o={unversionedId:"learn/about-snaps/index",id:"learn/about-snaps/index",title:"About Snaps",description:"Learn about the Snaps system at a high level.",source:"@site/snaps/learn/about-snaps/index.md",sourceDirName:"learn/about-snaps",slug:"/learn/about-snaps/",permalink:"/1244-i18n/ru/snaps/learn/about-snaps/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/about-snaps/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn about the Snaps system at a high level.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Learn",permalink:"/1244-i18n/ru/snaps/learn"},next:{title:"Snaps APIs",permalink:"/1244-i18n/ru/snaps/learn/about-snaps/apis"}},p={},l=[{value:"Technical overview",id:"technical-overview",level:2},{value:"Permissions",id:"permissions",level:3},{value:"APIs",id:"apis",level:3},{value:"User interface",id:"user-interface",level:3},{value:"Lifecycle",id:"lifecycle",level:3}],c={toc:l},u="wrapper";function d(e){let{components:n,...r}=e;return(0,s.yg)(u,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"about-snaps"},"About Snaps"),(0,s.yg)("p",null,"MetaMask Snaps is an open source system that allows anyone to safely extend the functionality of\nMetaMask, creating new web3 end user experiences.\nFor example, a Snap can add support for different blockchain networks, add custom account types, or\nprovide additional functionality using its own APIs.\nThis allows MetaMask to be used with a far more diverse set of protocols, dapps, and services."),(0,s.yg)("p",null,"The following diagram outlines the high-level architecture of the Snaps system:"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"Snaps architecture diagram",src:a(76133).A,width:"1512",height:"722"})),(0,s.yg)("p",null,"The following diagram illustrates how Snaps can ",(0,s.yg)("a",{parentName:"p",href:"/1244-i18n/ru/snaps/features/non-evm-networks"},"derive non-EVM keys")," using\n",(0,s.yg)("a",{parentName:"p",href:"/1244-i18n/ru/snaps/reference/snaps-api#snap_getbip32entropy"},(0,s.yg)("inlineCode",{parentName:"a"},"snap_getBip32Entropy")),",\n",(0,s.yg)("a",{parentName:"p",href:"/1244-i18n/ru/snaps/reference/snaps-api#snap_getbip44entropy"},(0,s.yg)("inlineCode",{parentName:"a"},"snap_getBip44Entropy")),", and\n",(0,s.yg)("a",{parentName:"p",href:"/1244-i18n/ru/snaps/reference/snaps-api#snap_getentropy"},(0,s.yg)("inlineCode",{parentName:"a"},"snap_getEntropy")),":"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"Snaps get entropy diagram",src:a(25711).A,width:"1512",height:"444"})),(0,s.yg)("admonition",{title:"important",type:"caution"},(0,s.yg)("p",{parentName:"admonition"},"Snaps cannot access the user's Secret Recovery Phrase.\nSnaps can only derive non-EVM keys using the provided methods.\nFurthermore, any Snap that derives keys must undergo a security audit before it can be made\navailable to MetaMask users.")),(0,s.yg)("h2",{id:"technical-overview"},"Technical overview"),(0,s.yg)("p",null,"A Snap is a JavaScript program run in an isolated and secure ",(0,s.yg)("a",{parentName:"p",href:"/1244-i18n/ru/snaps/learn/about-snaps/execution-environment"},"execution environment"),"."),(0,s.yg)("h3",{id:"permissions"},"Permissions"),(0,s.yg)("p",null,"By default, a Snap has no capabilities.\nIt must ",(0,s.yg)("a",{parentName:"p",href:"/1244-i18n/ru/snaps/how-to/request-permissions"},"request permissions")," for various capabilities to be\ngranted by the user at installation, such as accessing the network, storing data in MetaMask, or\ndisplaying dialogs.\nData stored by a Snap is only visible to that Snap, and a Snap cannot access data of other Snaps or\nof MetaMask core unless given permission to do so."),(0,s.yg)("h3",{id:"apis"},"APIs"),(0,s.yg)("p",null,"A Snap can communicate with MetaMask using the ",(0,s.yg)("a",{parentName:"p",href:"/1244-i18n/ru/snaps/reference/snaps-api"},"Snaps API")," and some\n",(0,s.yg)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"MetaMask JSON-RPC API")," methods.\nThe Snaps API allows Snaps to extend or modify the functionality of MetaMask, and communicate with\nother Snaps."),(0,s.yg)("p",null,"Dapps can also use certain MetaMask JSON-RPC API methods to install and communicate with Snaps."),(0,s.yg)("p",null,"A Snap can implement its own custom JSON-RPC API to communicate with dapps and other Snaps."),(0,s.yg)("p",null,"Learn more ",(0,s.yg)("a",{parentName:"p",href:"/1244-i18n/ru/snaps/learn/about-snaps/apis"},"about the Snaps APIs"),"."),(0,s.yg)("h3",{id:"user-interface"},"User interface"),(0,s.yg)("p",null,"A Snap must represent itself and what it does to the end user.\nThe user can see their installed Snaps in the MetaMask settings page.\nFor each Snap, the user can:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"See most of its manifest file data."),(0,s.yg)("li",{parentName:"ul"},"See its execution status (running, stopped, or crashed)."),(0,s.yg)("li",{parentName:"ul"},"Enable and disable the Snap.")),(0,s.yg)("p",null,"Other than the settings page, a Snap can ",(0,s.yg)("a",{parentName:"p",href:"/1244-i18n/ru/snaps/features/custom-ui/"},"modify the MetaMask UI")," only\nby ",(0,s.yg)("a",{parentName:"p",href:"/1244-i18n/ru/snaps/reference/snaps-api#snap_dialog"},"displaying a dialog")," or\n",(0,s.yg)("a",{parentName:"p",href:"/1244-i18n/ru/snaps/reference/entry-points#ontransaction"},"displaying transaction insights"),"."),(0,s.yg)("p",null,"This means that most Snaps must rely on companion dapps and their custom JSON-RPC API methods to\npresent their data to the user."),(0,s.yg)("admonition",{type:"note"},(0,s.yg)("p",{parentName:"admonition"},"Providing more ways for Snaps to modify the MetaMask UI is an important goal of the Snaps system,\nand over time more and more Snaps will be able to contain their user interfaces entirely within\nMetaMask itself.")),(0,s.yg)("h3",{id:"lifecycle"},"Lifecycle"),(0,s.yg)("p",null,"A Snap wakes up in response to messages or events, and shuts down when idle.\nAlso, if MetaMask detects that a Snap becomes unresponsive, it shuts the Snap down."),(0,s.yg)("p",null,"A Snap is considered unresponsive if one of the following occurs:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"It hasn't received a JSON-RPC request for 30 seconds."),(0,s.yg)("li",{parentName:"ul"},"It takes more than 60 seconds to process a JSON-RPC request.")),(0,s.yg)("p",null,"Stopped Snaps start whenever they receive a JSON-RPC request, unless they're disabled.\nIf a Snap is disabled, the user must re-enable it before it can start again."))}d.isMDXComponent=!0},76133:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/snaps-architecture-de7180cbb5327cca7ed91f3cad2b40c7.png"},25711:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/snaps-getentropy-6cccbe90c571038546e84cc3826b506b.png"}}]);