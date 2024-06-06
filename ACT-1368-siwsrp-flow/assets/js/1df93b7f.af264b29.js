"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4583],{87130:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(96540);var a=n(20053),s=n(28774),r=n(44586),o=n(74894);const i={root:"root_GECW"};var l=n(74848);function c(e){let{title:t,link:n,description:r}=e;return(0,l.jsx)("div",{className:"col col--4 margin-top--sm margin-bottom--md",children:(0,l.jsxs)(s.A,{className:(0,a.A)(i.root,"card"),href:n,children:[(0,l.jsx)("div",{className:"card__header",children:(0,l.jsx)("h3",{children:t})}),(0,l.jsx)("div",{className:"card__body",children:r})]})})}const d=[{title:"\ud83c\udfc1 Wallet quickstart",link:"/wallet/how-to/connect",description:(0,l.jsx)(l.Fragment,{children:"Get started quickly by connecting your React dapp to MetaMask and other wallets in your users' browsers."})},{title:"\u2699\ufe0f Wallet tutorials",link:"/wallet/tutorials",description:(0,l.jsx)(l.Fragment,{children:"Follow the step-by-step tutorials to create a simple React dapp and integrate it with MetaMask."})},{title:"\ud83c\udf10 Wallet API",link:"/wallet/reference/json-rpc-api",description:(0,l.jsx)(l.Fragment,{children:"Use the JSON-RPC methods of MetaMask's Wallet API to interact with your users' Ethereum accounts."})}];function h(){return(0,l.jsxs)("section",{className:"container margin-top--md",children:[(0,l.jsx)("h1",{children:"Integrate your dapp with the MetaMask wallet"}),(0,l.jsx)("p",{children:"Your dapp can use the Wallet API to request users' Ethereum accounts, read data from connected blockchains, suggest that the user sign messages and transactions, and perform other functions on MetaMask from multiple dapp platforms."}),(0,l.jsx)("div",{className:"row",children:d.map(((e,t)=>(0,l.jsx)(c,{...e},t)))})]})}const u=[{title:"\ud83c\udfc1 Snaps quickstart",link:"/snaps/get-started/quickstart",description:(0,l.jsx)(l.Fragment,{children:"Get started quickly by creating and customizing a simple Snap, using the Snaps template built with React and TypeScript."})},{title:"\u2699\ufe0f Snaps tutorials",link:"/snaps/learn/tutorials",description:(0,l.jsx)(l.Fragment,{children:"Follow the step-by-step tutorials to create Snaps that estimate gas fees, provide transaction insights with custom UI, and more."})},{title:"\ud83c\udf10 Snaps API",link:"/snaps/reference/snaps-api",description:(0,l.jsx)(l.Fragment,{children:"Use the Snaps API to modify the functionality of MetaMask and communicate between dapps and Snaps."})}];function m(){return(0,l.jsxs)("section",{className:"container margin-top--lg margin-bottom--lg",children:[(0,l.jsx)("h1",{children:"Extend the functionality of MetaMask using Snaps"}),(0,l.jsx)("p",{children:"A Snap is a JavaScript program run in an isolated environment that customizes the MetaMask wallet experience. You can create a Snap that adds new API methods, adds support for different blockchain protocols, or modifies existing functionalities."}),(0,l.jsx)("div",{className:"row",children:u.map(((e,t)=>(0,l.jsx)(c,{...e},t)))})]})}const p={introductionBlock:"introductionBlock_wUVz",forceColor:"forceColor_eaqK",title:"title_GqtP",subtitle:"subtitle_RlPM",homepageButton:"homepageButton_seJj",devBannerButton:"devBannerButton_Ipz_",devBannerTitle:"devBannerTitle_NEAq",devBannerSubtitle:"devBannerSubtitle_rHuc",devBannerBlock:"devBannerBlock_rL6j",devBannerForceColor:"devBannerForceColor_TXNj"};function f(){const{siteConfig:e}=(0,r.A)();return(0,l.jsx)("header",{className:(0,a.A)(p.introductionBlock,"margin-bottom--lg"),children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("h1",{className:(0,a.A)("hero__title",p.title,p.forceColor),children:e.title}),(0,l.jsx)("p",{className:(0,a.A)("hero__subtitle",p.subtitle,p.forceColor),children:"Integrate with and extend upon the world's leading self-custodial crypto wallet."}),(0,l.jsx)(s.A,{className:(0,a.A)(p.homepageButton,"button button--lg"),to:"/wallet",children:"Get started"})]})})}function x(){return(0,l.jsx)("header",{className:(0,a.A)(p.devBannerBlock),children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("h1",{className:(0,a.A)("hero__title",p.devBannerTitle,p.devBannerForceColor),children:"Contribute to MetaMask"}),(0,l.jsx)("p",{className:(0,a.A)("hero__subtitle",p.devBannerSubtitle,p.devBannerForceColor),children:"Join the MetaMask developer community and learn how to contribute to the MetaMask project itself."}),(0,l.jsxs)(s.A,{className:(0,a.A)(p.devBannerButton,"button button--outline button--secondary button--md"),href:"https://github.com/MetaMask/metamask-extension/blob/develop/docs/README.md",children:["Contribute\xa0",(0,l.jsx)("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module",children:(0,l.jsx)("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})})]})]})})}function j(){return(0,l.jsxs)(o.default,{title:"Home",children:[(0,l.jsx)(f,{}),(0,l.jsxs)("main",{children:[(0,l.jsx)(h,{}),(0,l.jsx)(m,{}),(0,l.jsx)(x,{})]})]})}},20053:(e,t,n)=>{function a(e){var t,n,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}n.d(t,{A:()=>s});const s=function(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(s&&(s+=" "),s+=t);return s}}}]);