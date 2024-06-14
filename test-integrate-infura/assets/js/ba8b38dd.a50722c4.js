"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[20091],{23477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(74848),i=n(28453),a=n(47220);const s={description:"Mantle network documentation."},o="Mantle",c={id:"reference/mantle/index",title:"Mantle",description:"Mantle network documentation.",source:"@site/services/reference/mantle/index.md",sourceDirName:"reference/mantle",slug:"/reference/mantle/",permalink:"/test-integrate-infura/services/reference/mantle/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/mantle/index.md",tags:[],version:"current",frontMatter:{description:"Mantle network documentation."},sidebar:"servicesSidebar",previous:{title:"web3_clientVersion",permalink:"/test-integrate-infura/services/reference/linea/json-rpc-methods/web3_clientversion"},next:{title:"Quickstart",permalink:"/test-integrate-infura/services/reference/mantle/quickstart"}},l={},d=[{value:"Partners and privacy policies",id:"partners-and-privacy-policies",level:2}];function h(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"mantle",children:"Mantle"}),"\n",(0,r.jsx)(t.admonition,{title:"Decentralized Infrastructure Network (DIN)",type:"note",children:(0,r.jsxs)(t.p,{children:["Mantle is supported through the ",(0,r.jsx)(t.a,{href:"https://www.infura.io/solutions/decentralized-infrastructure-service",children:"DIN"})," service,\nmeaning calls to the network are routed to ",(0,r.jsx)(t.a,{href:"#partners-and-privacy-policies",children:"partner infrastructure providers"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:"Mantle is an Ethereum layer 2 (L2) scaling solution that leverages an optimistic rollup architecture\nto offer a seamless experience for both users and developers within the Ethereum ecosystem.\nBy integrating a modular design, the Mantle network enhances this architecture with innovative data\navailability solutions."}),"\n",(0,r.jsx)(t.p,{children:"This approach not only ensures cheaper and more accessible data but also maintains the robust security\ninherent to Ethereum, making it an efficient and secure choice for scaling Ethereum applications."}),"\n",(0,r.jsx)(t.admonition,{title:"See also",type:"info",children:(0,r.jsxs)(t.p,{children:["See also the ",(0,r.jsx)(t.a,{href:"https://docs-v2.mantle.xyz/",children:"official Mantle documentation"})," for more information."]})}),"\n",(0,r.jsx)(t.p,{children:"Select one of the following options to get started with the Mantle network:"}),"\n",(0,r.jsx)(a.A,{items:[{href:"quickstart",title:"Quickstart",description:"Learn how to quickly connect and make calls to the Mantle network."},{href:"json-rpc-methods",title:"JSON-RPC APIs",description:"View the APIs available for communicating with the Mantle network."},{href:"../../../developer-tools/dashboard/get-started/create-api/",title:"Create an API key",description:"Learn how to create an API key and secure and share it with your team."}]}),"\n",(0,r.jsx)(t.h2,{id:"partners-and-privacy-policies",children:"Partners and privacy policies"}),"\n",(0,r.jsx)(t.p,{children:"The following partner provides access to Mantle network:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["0xFury (",(0,r.jsx)(t.a,{href:"https://0xfury.com/privacy.php",children:"Privacy policy"}),")"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},47220:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var r=n(20053),i=n(28774),a=n(49259),s=n(74848);function o(e){let{item:t}=e;const n=(0,s.jsxs)(s.Fragment,{children:[t.title&&(0,s.jsxs)("h2",{className:(0,r.A)(a.A.cardTitle),children:[t.icon&&(0,s.jsx)("img",{src:t.icon,className:a.A.cardIcon}),(0,s.jsx)("span",{children:t.title})]}),t.description&&(0,s.jsx)("p",{children:t.description})]}),o=(0,r.A)("card","padding--lg",a.A.cardContainer,{[a.A.flaskOnly]:t.flaskOnly});return t.href?(0,s.jsx)(i.A,{className:o,href:t.href,children:n}):(0,s.jsx)("div",{className:o,children:n})}function c(e){const{items:t}=e;return(0,s.jsx)("section",{className:"row",children:t.map(((e,t)=>(0,s.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,s.jsx)(o,{item:e})},t)))})}},20053:(e,t,n)=>{function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}n.d(t,{A:()=>i});const i=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},49259:(e,t,n)=>{n.d(t,{A:()=>r});const r={cardContainer:"cardContainer_C0Dw",flaskOnly:"flaskOnly_ADUl",cardTitle:"cardTitle_ZNcV",cardIcon:"cardIcon_naep"}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);