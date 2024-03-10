"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2350],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67828:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={description:"Integrate your React dapp with MetaMask.",sidebar_position:2},c="React quickstart",i={unversionedId:"quickstart/react",id:"quickstart/react",title:"React quickstart",description:"Integrate your React dapp with MetaMask.",source:"@site/wallet/quickstart/react.md",sourceDirName:"quickstart",slug:"/quickstart/react",permalink:"/add-resources/wallet/quickstart/react",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/quickstart/react.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Integrate your React dapp with MetaMask.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"JavaScript quickstart",permalink:"/add-resources/wallet/quickstart/javascript"},next:{title:"How to",permalink:"/add-resources/wallet/how-to"}},s={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-quickstart"},"React quickstart"),(0,a.kt)("p",null,"This page provides a code sample to quickly connect to your users' MetaMask accounts from a\nReact dapp."),(0,a.kt)("p",null,"Connect to the MetaMask browser extension directly using the ",(0,a.kt)("a",{parentName:"p",href:"/add-resources/wallet/concepts/wallet-api"},"Wallet API"),".\nThis example uses the ",(0,a.kt)("a",{parentName:"p",href:"https://v3.vitejs.dev/guide/"},"Vite")," build tool with React and Typescript, so\nyou can get started quickly with an optimized dapp."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow Step 1 in the ",(0,a.kt)("a",{parentName:"p",href:"/add-resources/wallet/tutorials/react-dapp-local-state"},"React dapp tutorial")," to set up a\nVite project.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the following code to your project file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="App.tsx"',title:'"App.tsx"'},"import './App.css'\nimport { useState, useEffect } from 'react'\nimport detectEthereumProvider from '@metamask/detect-provider'\n\n// Detect the MetaMask Ethereum provider\n\nconst App = () => {\n  const [hasProvider, setHasProvider] = useState<boolean | null>(null)\n  const initialState = { accounts: [] } \n  const [wallet, setWallet] = useState(initialState) \n\n  useEffect(() => {\n    const getProvider = async () => {\n      const provider = await detectEthereumProvider({ silent: true })\n      setHasProvider(Boolean(provider))\n    }\n    getProvider()\n  }, [])\n\n// Prompt users to connect to MetaMask\n\n  const updateWallet = async (accounts:any) => {\n    setWallet({ accounts })\n  }  \n\n  const handleConnect = async () => {  \n    let accounts = await window.ethereum.request({  method: \"eth_requestAccounts\" })  \n    updateWallet(accounts)   \n  }  \n\n  return (\n    <div className=\"App\">\n      <div>Injected Provider {hasProvider ? 'DOES' : 'DOES NOT'} Exist</div>\n      { hasProvider && \n        <button onClick={handleConnect}>Connect MetaMask</button>\n      }\n      { wallet.accounts.length > 0 &&  \n        <div>Wallet Accounts: { wallet.accounts[0] }</div>\n      }\n    </div>\n  )\n}\nexport default App\n")))))}d.isMDXComponent=!0}}]);