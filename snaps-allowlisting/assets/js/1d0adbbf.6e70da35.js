"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4332],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(t),u=s,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function k(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},87870:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(87462),s=(t(67294),t(3905));const r={description:"Display custom user interface components.",sidebar_position:1},o="Custom UI",i={unversionedId:"features/custom-ui",id:"features/custom-ui",title:"Custom UI",description:"Display custom user interface components.",source:"@site/snaps/features/custom-ui.md",sourceDirName:"features",slug:"/features/custom-ui",permalink:"/snaps-allowlisting/snaps/features/custom-ui",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-ui.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Display custom user interface components.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Features",permalink:"/snaps-allowlisting/snaps/features"},next:{title:"Localization",permalink:"/snaps-allowlisting/snaps/features/localization"}},l={},p=[{value:"Components",id:"components",level:2},{value:"<code>address</code>",id:"address",level:3},{value:"<code>copyable</code>",id:"copyable",level:3},{value:"<code>divider</code>",id:"divider",level:3},{value:"<code>heading</code>",id:"heading",level:3},{value:"<code>image</code>",id:"image",level:3},{value:"<code>panel</code>",id:"panel",level:3},{value:"<code>row</code>",id:"row",level:3},{value:"<code>spinner</code>",id:"spinner",level:3},{value:"<code>text</code>",id:"text",level:3},{value:"Markdown",id:"markdown",level:2},{value:"Links",id:"links",level:2},{value:"Emoji",id:"emoji",level:2}],d={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,s.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"custom-ui"},"Custom UI"),(0,s.kt)("p",null,"You can display custom user interface (UI) components using the\n",(0,s.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-sdk")," module with the\n",(0,s.kt)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/snaps-api#snap_dialog"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_dialog"))," method or the\n",(0,s.kt)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/entry-points#ontransaction"},(0,s.kt)("inlineCode",{parentName:"a"},"onTransaction"))," and\n",(0,s.kt)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/entry-points#onhomepage"},(0,s.kt)("inlineCode",{parentName:"a"},"onHomePage"))," entry points."),(0,s.kt)("p",null,"To use custom UI, first install ",(0,s.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-sdk")," using the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/snaps-sdk\n")),(0,s.kt)("p",null,"Then, whenever you're required to return a custom UI component, import the components from the\nSDK and build your UI with them.\nFor example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, text } from '@metamask/snaps-sdk';\n\n// ...\n\nconst content = panel([\n  heading('Alert heading'),\n  text('Something happened in the system.'),\n]);\n\nreturn content;\n")),(0,s.kt)("h2",{id:"components"},"Components"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"NodeType")," enum exported by ",(0,s.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-sdk")," details the available components."),(0,s.kt)("h3",{id:"address"},(0,s.kt)("inlineCode",{parentName:"h3"},"address")),(0,s.kt)("p",null,"Outputs a formatted text field for an Ethereum address.\nThe address is automatically displayed with a jazzicon and truncated value.\nHovering the address shows the full value in a tooltip. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, address } from '@metamask/snaps-sdk';\n\n// ...\n\nconst content = panel([\n  heading('Are you sure you want to send tokens to this address?'),\n  address('0x000000000000000000000000000000000000dEaD'),\n]);\n\nreturn content;\n")),(0,s.kt)("h3",{id:"copyable"},(0,s.kt)("inlineCode",{parentName:"h3"},"copyable")),(0,s.kt)("p",null,"Outputs a read-only text field with a copy-to-clipboard shortcut."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { copyable } from '@metamask/snaps-sdk';\n\n// ...\n\nconst content = copyable('Text to be copied');\n")),(0,s.kt)("h3",{id:"divider"},(0,s.kt)("inlineCode",{parentName:"h3"},"divider")),(0,s.kt)("p",null,"Outputs a horizontal divider."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, divider, text } from '@metamask/snaps-sdk';\n\n// ...\n\nconst content = panel([\n  text('Text before the divider'),\n  divider(),\n  text('Text after the divider'),\n]);\n")),(0,s.kt)("h3",{id:"heading"},(0,s.kt)("inlineCode",{parentName:"h3"},"heading")),(0,s.kt)("p",null,"Outputs a heading.\nThis is useful for ",(0,s.kt)("a",{parentName:"p",href:"#panel"},"panel")," titles."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, text } from '@metamask/snaps-sdk';\n\n// ...\n\nconst content = panel([\n  heading('Title of the panel'),\n  text('Text of the panel'),\n]);\n")),(0,s.kt)("h3",{id:"image"},(0,s.kt)("inlineCode",{parentName:"h3"},"image")),(0,s.kt)("p",null,"Outputs an image.\nThis component takes an inline SVG.\nIt does not support remote URLs.\nYou can embed JPG or PNG in SVG using data URIs.\nThe SVG is rendered within an \\<img",">"," tag, which prevents JavaScript or interaction events from being supported."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'import { image } from \'@metamask/snaps-sdk\';\n\n// ...\n\nconst content = image(\'<svg width="400" height="400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.514 17.874 9 5c.021.011.043.016.064.026s.051.021.078.031a.892.892 0 0 0 .688 0c.027-.01.052-.019.078-.031s.043-.015.064-.026l9-5A1 1 0 0 0 22 16.9L21 7V2a1 1 0 0 0-1.625-.781L14.649 5h-5.3L4.625 1.219A1 1 0 0 0 3 2v4.9l-1 10a1 1 0 0 0 .514.974ZM5 7V4.081l3.375 2.7A1 1 0 0 0 9 7h6a1 1 0 0 0 .625-.219L19 4.079V7.1l.934 9.345L13 20.3v-2.967l1.42-.946A1.3 1.3 0 0 0 15 15.3a1.3 1.3 0 0 0-1.3-1.3h-3.4A1.3 1.3 0 0 0 9 15.3a1.3 1.3 0 0 0 .58 1.084l1.42.946v2.97l-6.94-3.855Zm3.5 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm5-2a2 2 0 1 1 2 2 2 2 0 0 1-2-2Z"/></svg>\');\n')),(0,s.kt)("h3",{id:"panel"},(0,s.kt)("inlineCode",{parentName:"h3"},"panel")),(0,s.kt)("p",null,"Outputs a panel, which can be used as a container for other components.\nThis component takes an array of custom UI components."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, text } from '@metamask/snaps-sdk';\n\n// ...\n\nconst insights = [\n  /*...*/\n];\nconst content = panel([\n  heading('Here are the transaction insights'),\n  ...insights.map((insight) => text(insight.description)),\n]);\n")),(0,s.kt)("h3",{id:"row"},(0,s.kt)("inlineCode",{parentName:"h3"},"row")),(0,s.kt)("p",null,"Outputs a row with a label and value, which can be used for key-value data.\nThe label must be a string. The value can be a child component of type\n",(0,s.kt)("inlineCode",{parentName:"p"},"text")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"address"),". "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'import { panel, row, text, address } from \'@metamask/snaps-sdk\'; \n\n// ...\nconst content = panel([\n  row("Address",address("0x000000000000000000000000000000000000dEaD")),\n  row("Balance",text("1.78 ETH")),\n]);\n')),(0,s.kt)("h3",{id:"spinner"},(0,s.kt)("inlineCode",{parentName:"h3"},"spinner")),(0,s.kt)("p",null,"Outputs a loading indicator."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, spinner } from '@metamask/snaps-sdk';\n\n// ...\n\nconst content = panel([\n  heading('Please wait...'),\n  spinner()\n]);\n")),(0,s.kt)("h3",{id:"text"},(0,s.kt)("inlineCode",{parentName:"h3"},"text")),(0,s.kt)("p",null,"Outputs text. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { text } from '@metamask/snaps-sdk';\n\n// ...\n\nconst content = text('This is a simple text UI');\n")),(0,s.kt)("h2",{id:"markdown"},"Markdown"),(0,s.kt)("p",null,"Text-based components accept a very small subset of inline Markdown: ",(0,s.kt)("inlineCode",{parentName:"p"},"**bold**")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"_italic_"),"."),(0,s.kt)("h2",{id:"links"},"Links"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"text()")," components accept inline links.\nTo make a link, use the following Markdown: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { text } from '@metamask/snaps-sdk';\n\n// ...\n\nconst contentWithLink = text('Download [MetaMask](https://metamask.io)');\n")),(0,s.kt)("p",null,"You can also make a link with just the URL with the following Markdown: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { text } from '@metamask/snaps-sdk';\n\n// ...\n\nconst contentWithLink = text('Visit our site: [](https://metamask.io)');\n")),(0,s.kt)("h2",{id:"emoji"},"Emoji"),(0,s.kt)("p",null,"Text-based components accept emoji."))}m.isMDXComponent=!0}}]);