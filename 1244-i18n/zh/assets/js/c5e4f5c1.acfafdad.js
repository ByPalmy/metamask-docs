"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4687],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(o,".").concat(d)]||f[d]||u[d]||s;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[f]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<s;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(58168),a=(n(96540),n(15680));const s={description:"Include and retrieve static files in the Snap bundle.",sidebar_position:5},r="Static files",l={unversionedId:"features/static-files",id:"features/static-files",title:"Static files",description:"Include and retrieve static files in the Snap bundle.",source:"@site/snaps/features/static-files.md",sourceDirName:"features",slug:"/features/static-files",permalink:"/1244-i18n/zh/snaps/features/static-files",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/static-files.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Include and retrieve static files in the Snap bundle.",sidebar_position:5},sidebar:"snapsSidebar",previous:{title:"Security guidelines",permalink:"/1244-i18n/zh/snaps/features/custom-evm-accounts/security"},next:{title:"Custom name resolution",permalink:"/1244-i18n/zh/snaps/features/custom-name-resolution"}},o={},c=[{value:"Steps",id:"steps",level:2},{value:"1. Specify static files in the Snap&#39;s manifest file",id:"1-specify-static-files-in-the-snaps-manifest-file",level:3},{value:"2. Load static files using <code>snap_getFile</code>",id:"2-load-static-files-using-snap_getfile",level:3}],p={toc:c},f="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(f,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"static-files"},"Static files"),(0,a.yg)("p",null,"You can handle static files in your Snap bundle using the\n",(0,a.yg)("a",{parentName:"p",href:"/1244-i18n/zh/snaps/reference/snaps-api#snap_getfile"},(0,a.yg)("inlineCode",{parentName:"a"},"snap_getFile"))," API method.\nThis is useful to load Wasm modules, ZK circuits, or any other files that must be lazily loaded."),(0,a.yg)("h2",{id:"steps"},"Steps"),(0,a.yg)("h3",{id:"1-specify-static-files-in-the-snaps-manifest-file"},"1. Specify static files in the Snap's manifest file"),(0,a.yg)("p",null,"Specify static files as an array in the ",(0,a.yg)("inlineCode",{parentName:"p"},"source.files")," field of your Snap's\n",(0,a.yg)("a",{parentName:"p",href:"/1244-i18n/zh/snaps/learn/about-snaps/files#manifest-file"},"manifest file"),".\nFile paths are relative to the Snap package root, that is, one level above the ",(0,a.yg)("inlineCode",{parentName:"p"},"src")," directory.\nFor example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'{\n    "source": {\n        "shasum": "xxx",\n        "location": {\n            // ...\n        },\n        "files": [\n            "./files/myfile.bin"\n        ]\n    }\n}\n')),(0,a.yg)("h3",{id:"2-load-static-files-using-snap_getfile"},"2. Load static files using ",(0,a.yg)("inlineCode",{parentName:"h3"},"snap_getFile")),(0,a.yg)("p",null,"In your Snap code, load static files using ",(0,a.yg)("a",{parentName:"p",href:"/1244-i18n/zh/snaps/reference/snaps-api#snap_getfile"},(0,a.yg)("inlineCode",{parentName:"a"},"snap_getFile")),".\nThis method returns a string in the encoding specified, with a default of Base64 if no encoding is specified.\nFor example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'const contents = await snap.request({\n    method: "snap_getFile",\n    params: {\n        path: "./files/myfile.bin",\n        encoding: "hex",\n    },\n});\n\n// "0x..."\nconsole.log(contents);\n')))}u.isMDXComponent=!0}}]);