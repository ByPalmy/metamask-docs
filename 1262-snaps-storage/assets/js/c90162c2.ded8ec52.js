"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3349],{15680:(e,a,t)=>{t.d(a,{xA:()=>l,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),c=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=c(e.components);return n.createElement(p.Provider,{value:a},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(p,".").concat(m)]||u[m]||f[m]||i;return t?n.createElement(g,s(s({ref:a},l),{},{components:t})):n.createElement(g,s({ref:a},l))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16658:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(58168),r=(t(96540),t(15680));const i={description:"Display and update interactive user interfaces.",sidebar_position:1,sidebar_custom_props:{flask_only:!0}},s="Interactive UI",o={unversionedId:"features/custom-ui/interactive-ui",id:"features/custom-ui/interactive-ui",title:"Interactive UI",description:"Display and update interactive user interfaces.",source:"@site/snaps/features/custom-ui/interactive-ui.md",sourceDirName:"features/custom-ui",slug:"/features/custom-ui/interactive-ui",permalink:"/1262-snaps-storage/snaps/features/custom-ui/interactive-ui",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-ui/interactive-ui.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Display and update interactive user interfaces.",sidebar_position:1,sidebar_custom_props:{flask_only:!0}},sidebar:"snapsSidebar",previous:{title:"Custom UI",permalink:"/1262-snaps-storage/snaps/features/custom-ui/"},next:{title:"Data storage",permalink:"/1262-snaps-storage/snaps/features/data-storage"}},p={},c=[{value:"Create an interactive interface",id:"create-an-interactive-interface",level:2},{value:"Update an interactive interface",id:"update-an-interactive-interface",level:2},{value:"Get an interactive interface&#39;s state",id:"get-an-interactive-interfaces-state",level:2},{value:"Example",id:"example",level:2}],l={toc:c},u="wrapper";function f(e){let{components:a,...t}=e;return(0,r.yg)(u,(0,n.A)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"interactive-ui"},"Interactive UI"),(0,r.yg)("admonition",{type:"flaskOnly"}),(0,r.yg)("p",null,"You can display interactive user interface (UI) components.\nInteractive UI is an extension of ",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/features/custom-ui/"},"custom UI"),".\nIt allows interfaces returned from ",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/snaps-api#snap_dialog"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_dialog")),",\n",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/entry-points#ontransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"onTransaction")),", and\n",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/entry-points#onhomepage"},(0,r.yg)("inlineCode",{parentName:"a"},"onHomePage"))," to respond to user input."),(0,r.yg)("p",null,"The following interactive UI components are available:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1262-snaps-storage/snaps/features/custom-ui/#button"},(0,r.yg)("inlineCode",{parentName:"a"},"button"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1262-snaps-storage/snaps/features/custom-ui/#form"},(0,r.yg)("inlineCode",{parentName:"a"},"form"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1262-snaps-storage/snaps/features/custom-ui/#input"},(0,r.yg)("inlineCode",{parentName:"a"},"input")))),(0,r.yg)("h2",{id:"create-an-interactive-interface"},"Create an interactive interface"),(0,r.yg)("p",null,"Create an interactive interface using the\n",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/snaps-api#snap_createinterface"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_createInterface"))," method.\nThis method returns the ID of the created interface.\nYou can pass this ID to ",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/snaps-api#snap_dialog"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_dialog")),", returned from\n",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/entry-points#ontransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"onTransaction")),", or from\n",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/entry-points#onhomepage"},(0,r.yg)("inlineCode",{parentName:"a"},"onHomePage")),"."),(0,r.yg)("p",null,"If you need to ",(0,r.yg)("a",{parentName:"p",href:"#update-an-interactive-interface"},"update the interface")," or\n",(0,r.yg)("a",{parentName:"p",href:"#get-an-interactive-interfaces-state"},"get its state")," at a future time, you should store its ID in\nthe Snap's storage."),(0,r.yg)("h2",{id:"update-an-interactive-interface"},"Update an interactive interface"),(0,r.yg)("p",null,"To update an interactive interface that is still active, use the\n",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/snaps-api#snap_updateinterface"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_updateInterface"))," method.\nPass the ID of the interface to be updated, and the new UI."),(0,r.yg)("p",null,"Updating an interface can be done as part of the\n",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/entry-points#onuserinput"},(0,r.yg)("inlineCode",{parentName:"a"},"onUserInput"))," entry point or as part of an\nasynchronous process."),(0,r.yg)("p",null,"The following is an example flow:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The user activates an interactive interface to send Bitcoin funds to an address.\nThe initial interface contains an address input, an amount input, and a ",(0,r.yg)("strong",{parentName:"li"},"Send funds")," button."),(0,r.yg)("li",{parentName:"ol"},"The user fills the fields, and selects the ",(0,r.yg)("strong",{parentName:"li"},"Send funds")," button."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"onUserInput")," is called, and the logic detects that the ",(0,r.yg)("strong",{parentName:"li"},"Send funds")," button was selected."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"snap_updateInterface")," is called, replacing the ",(0,r.yg)("strong",{parentName:"li"},"Send funds")," button with a ",(0,r.yg)("a",{parentName:"li",href:"/1262-snaps-storage/snaps/features/custom-ui/#spinner"},(0,r.yg)("inlineCode",{parentName:"a"},"spinner")),"."),(0,r.yg)("li",{parentName:"ol"},"Custom logic sends the funds."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"snap_updateInterface")," is called again, replacing the whole UI with a success message.")),(0,r.yg)("h2",{id:"get-an-interactive-interfaces-state"},"Get an interactive interface's state"),(0,r.yg)("p",null,"At any point you can retrieve an interactive interface's state.\nTo do this, call the ",(0,r.yg)("a",{parentName:"p",href:"/1262-snaps-storage/snaps/reference/snaps-api#snap_getinterfacestate"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_getInterfaceState")),"\nmethod with the ID of the interface."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/interactive-ui"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/interactive-ui-example-snap")),"\npackage for a full example of implementing interactive UI."))}f.isMDXComponent=!0}}]);