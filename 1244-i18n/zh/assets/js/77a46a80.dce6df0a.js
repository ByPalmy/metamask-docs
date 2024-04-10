"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9545],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,d=u["".concat(p,".").concat(g)]||u[g]||m[g]||s;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},24184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(58168),r=(n(96540),n(15680)),s=n(47174);const o={description:"Get started quickly using the create-snap starter kit.",sidebar_position:2},i="Snaps quickstart",p={unversionedId:"get-started/quickstart",id:"get-started/quickstart",title:"Snaps quickstart",description:"Get started quickly using the create-snap starter kit.",source:"@site/snaps/get-started/quickstart.md",sourceDirName:"get-started",slug:"/get-started/quickstart",permalink:"/1244-i18n/zh/snaps/get-started/quickstart",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/get-started/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Get started quickly using the create-snap starter kit.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Install MetaMask Flask",permalink:"/1244-i18n/zh/snaps/get-started/install-flask"},next:{title:"Learn",permalink:"/1244-i18n/zh/snaps/learn"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create the project",id:"create-the-project",level:2},{value:"Start the Snap",id:"start-the-snap",level:2},{value:"Connect to the Snap",id:"connect-to-the-snap",level:2},{value:"Customize the Snap",id:"customize-the-snap",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:c},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"snaps-quickstart"},"Snaps quickstart"),(0,r.yg)("p",null,"Get started creating your own Snap.\nUse the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/create-snap")),"\nstarter kit to initialize a Snap monorepo project built with TypeScript and React.\nSee the following video demo:"),(0,r.yg)(s.A,{url:"https://www.youtube.com/embed/qZRAryYwgdg?si=CeImIULgH3iD-FF0",mdxType:"YoutubeEmbed"}),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1244-i18n/zh/snaps/get-started/install-flask"},"MetaMask Flask installed")),(0,r.yg)("li",{parentName:"ul"},"A text editor (for example, ",(0,r.yg)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VS Code"),")"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Node")," version 20.11 or later"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn"))),(0,r.yg)("h2",{id:"create-the-project"},"Create the project"),(0,r.yg)("p",null,"Create a new Snap project using the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/create-snap")),"\nstarter kit by running:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"yarn create @metamask/snap your-snap-name\n")),(0,r.yg)("p",null,"or"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npx @metamask/create-snap your-snap-name\n")),(0,r.yg)("p",null,"or"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm create @metamask/snap your-snap-name\n")),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"/1244-i18n/zh/snaps/learn/about-snaps/files"},"Snaps files")," to learn about your Snap project files."),(0,r.yg)("h2",{id:"start-the-snap"},"Start the Snap"),(0,r.yg)("p",null,"From the root of the newly created project, install the project dependencies using Yarn:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"yarn install\n")),(0,r.yg)("p",null,"You may get a warning like the following: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'@lavamoat/allow-scripts has detected dependencies without configuration. explicit configuration required.\nrun "allow-scripts auto" to automatically populate the configuration.\n')),(0,r.yg)("p",null,"You can fix this by running the following command: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"yarn run allow-scripts auto\n")),(0,r.yg)("p",null,"Start the development server:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"yarn start\n")),(0,r.yg)("p",null,"You are now serving the Snap at ",(0,r.yg)("a",{parentName:"p",href:"http://localhost:8080/"},(0,r.yg)("inlineCode",{parentName:"a"},"http://localhost:8080"))," and its front-end dapp at ",(0,r.yg)("a",{parentName:"p",href:"http://localhost:8000/"},(0,r.yg)("inlineCode",{parentName:"a"},"http://localhost:8000")),"."),(0,r.yg)("h2",{id:"connect-to-the-snap"},"Connect to the Snap"),(0,r.yg)("p",null,"On the front-end dapp, select the ",(0,r.yg)("strong",{parentName:"p"},"Connect")," button and the MetaMask Flask extension pops up and\nrequires you to approve the Snap's permissions."),(0,r.yg)("p",null,"Once connected, select the ",(0,r.yg)("strong",{parentName:"p"},"Send message")," button to display a custom message within a confirmation\ndialog in MetaMask Flask."),(0,r.yg)("h2",{id:"customize-the-snap"},"Customize the Snap"),(0,r.yg)("p",null,"Open the project in a text editor.\nYou can customize your Snap by editing ",(0,r.yg)("inlineCode",{parentName:"p"},"index.ts")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"packages/snap/src")," folder."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"index.ts")," contains an example request that uses the\n",(0,r.yg)("a",{parentName:"p",href:"/1244-i18n/zh/snaps/reference/snaps-api#snapdialog"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_dialog"))," method to display a custom confirmation screen:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnRpcRequestHandler } from "@metamask/snaps-sdk";\nimport { panel, text } from "@metamask/snaps-sdk";\n\n/**\n * Handle incoming JSON-RPC requests, sent through wallet_invokeSnap.\n *\n * @param args - The request handler arguments as an object.\n * @param args.origin - The origin of the request, e.g., the website that invoked the Snap.\n * @param args.request - A validated JSON-RPC request object.\n * @returns The result of snap_dialog.\n * @throws If the request method is not valid for this Snap.\n */\nexport const onRpcRequest: OnRpcRequestHandler = async ({\n    origin,\n    request,\n}) => {\n    switch (request.method) {\n        case "hello":\n            return snap.request({\n                method: "snap_dialog",\n                params: {\n                    type: "confirmation",\n                    content: panel([\n                        text(`Hello, **${origin}**!`),\n                        text("This custom confirmation is just for display purposes."),\n                        text(\n                            "But you can edit the Snap source code to make it do something, if you want to!",\n                        ),\n                    ]),\n                },\n            });\n        default:\n            throw new Error("Method not found.");\n    }\n};\n')),(0,r.yg)("p",null,"Edit the text in any ",(0,r.yg)("inlineCode",{parentName:"p"},"text()")," component and select the ",(0,r.yg)("strong",{parentName:"p"},"Reconnect")," button\non the front-end to re-install the Snap."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"MetaMask Flask automatically re-installs locally hosted Snaps whenever it receives a connection request for them.")),(0,r.yg)("p",null,"The next time you select the ",(0,r.yg)("strong",{parentName:"p"},"Send message")," button, you see the updated text in the confirmation dialog."),(0,r.yg)("p",null,"You've now successfully connected, installed, interacted with, and customized your Snap!"),(0,r.yg)("h2",{id:"next-steps"},"Next steps"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"To learn more about the Snaps system, review ",(0,r.yg)("a",{parentName:"li",href:"/snaps/learn/about-snaps"},"fundamental Snaps concepts"),"\nand try the ",(0,r.yg)("a",{parentName:"li",href:"/snaps/learn/tutorials"},"Snaps tutorials"),"."),(0,r.yg)("li",{parentName:"ul"},"To implement specific features and use cases, see the ",(0,r.yg)("a",{parentName:"li",href:"/snaps/features"},"Snaps feature guides"),"."),(0,r.yg)("li",{parentName:"ul"},"To follow best practices for developing a Snap, see the ",(0,r.yg)("a",{parentName:"li",href:"/snaps/how-to"},"Snaps how-to guides"),".")))}g.isMDXComponent=!0},47174:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(96540);const r={wrapper:"wrapper_iojS"};function s(e){return a.createElement("div",{className:r.wrapper},a.createElement("iframe",{src:e.url,allowFullScreen:!0}))}}}]);