"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1180],{15680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>g});var t=n(96540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=t.createContext({}),p=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=p(e.components);return t.createElement(o.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=l,g=m["".concat(o,".").concat(c)]||m[c]||d[c]||r;return n?t.createElement(g,s(s({ref:a},u),{},{components:n})):t.createElement(g,s({ref:a},u))}));function g(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=c;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[m]="string"==typeof e?e:l,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},78296:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var t=n(58168),l=(n(96540),n(15680)),r=n(4865),s=n(19365);const i={description:"See the Wallet API for Snaps reference.",sidebar_position:2,toc_max_heading_level:2},o="Wallet API for Snaps",p={unversionedId:"reference/wallet-api-for-snaps",id:"reference/wallet-api-for-snaps",title:"Wallet API for Snaps",description:"See the Wallet API for Snaps reference.",source:"@site/snaps/reference/wallet-api-for-snaps.md",sourceDirName:"reference",slug:"/reference/wallet-api-for-snaps",permalink:"/1311-update-display-tokens/snaps/reference/wallet-api-for-snaps",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/wallet-api-for-snaps.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"See the Wallet API for Snaps reference.",sidebar_position:2,toc_max_heading_level:2},sidebar:"snapsSidebar",previous:{title:"Snaps API",permalink:"/1311-update-display-tokens/snaps/reference/snaps-api"},next:{title:"Snaps command line",permalink:"/1311-update-display-tokens/snaps/reference/cli"}},u={},m=[{value:"<code>wallet_getSnaps</code>",id:"wallet_getsnaps",level:2},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"<code>wallet_requestSnaps</code>",id:"wallet_requestsnaps",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"<code>wallet_snap</code>",id:"wallet_snap",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Example",id:"example-2",level:3},{value:"<code>wallet_invokeSnap</code>",id:"wallet_invokesnap",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-3",level:3},{value:"Example",id:"example-3",level:3}],d={toc:m},c="wrapper";function g(e){let{components:a,...n}=e;return(0,l.yg)(c,(0,t.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"wallet-api-for-snaps"},"Wallet API for Snaps"),(0,l.yg)("p",null,"Dapps can install and communicate with Snaps using a subset of the\n",(0,l.yg)("a",{parentName:"p",href:"/wallet/concepts/wallet-api/#json-rpc-api"},"Wallet JSON-RPC API"),".\nThis page is a reference for those Snaps-specific methods."),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"See the ",(0,l.yg)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"Wallet JSON-RPC API interactive reference")," for the other\nmethods dapps can call.")),(0,l.yg)("h2",{id:"wallet_getsnaps"},(0,l.yg)("inlineCode",{parentName:"h2"},"wallet_getSnaps")),(0,l.yg)("p",null,"Returns the IDs of the dapp's permitted Snaps and some relevant metadata."),(0,l.yg)("h3",{id:"returns"},"Returns"),(0,l.yg)("p",null,"An object mapping the IDs of permitted Snaps to their metadata:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"id"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"string")," - The ID of the Snap."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"initialPermissions"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"string")," - The initial permissions of the Snap, which will be requested when\nthe Snap is installed."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"version"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"string")," - The version of the Snap."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"enabled"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"boolean")," - Indicates whether the Snap is enabled."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"blocked"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"boolean")," - Indicates whether the Snap is blocked.")),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(s.A,{value:"Request",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'await window.ethereum.request({\n  "method": "wallet_getSnaps",\n  "params": []\n});\n'))),(0,l.yg)(s.A,{value:"Result",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "npm:@metamask/example-snap": {\n    "version": "1.0.0",\n    "id": "npm:@metamask/example-snap",\n    "enabled": true,\n    "blocked": false\n  }\n}\n')))),(0,l.yg)("h2",{id:"wallet_requestsnaps"},(0,l.yg)("inlineCode",{parentName:"h2"},"wallet_requestSnaps")),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/1311-update-display-tokens/snaps/how-to/request-permissions#request-permissions-from-a-dapp"},"Requests permission")," for a dapp\nto communicate with the specified Snaps and attempts to install them if they're not already installed."),(0,l.yg)("p",null,"If the Snap version range is specified, MetaMask attempts to install a version of the Snap that\nsatisfies the range.\nIf a compatible version of the Snap is already installed, the request succeeds.\nIf an incompatible version is installed, MetaMask attempts to update the Snap to the latest version\nthat satisfies the range.\nThe request succeeds if the Snap is successfully installed."),(0,l.yg)("p",null,"If the installation of any Snap fails, this method returns the error that caused the failure."),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"A dapp must call this method on Snap before calling ",(0,l.yg)("a",{parentName:"p",href:"#wallet_snap"},(0,l.yg)("inlineCode",{parentName:"a"},"wallet_snap"))," or\n",(0,l.yg)("a",{parentName:"p",href:"#wallet_invokesnap"},(0,l.yg)("inlineCode",{parentName:"a"},"wallet_invokeSnap"))," on the Snap.")),(0,l.yg)("h3",{id:"parameters"},"Parameters"),(0,l.yg)("p",null,"An object mapping the IDs of the requested Snaps to optional SemVer version ranges.\nThe SemVer version ranges use the same semantics as npm ",(0,l.yg)("inlineCode",{parentName:"p"},"package.json")," ranges."),(0,l.yg)("h3",{id:"returns-1"},"Returns"),(0,l.yg)("p",null,"An object mapping the IDs of permitted Snaps to their metadata:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"id"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"string")," - The ID of the Snap."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"initialPermissions"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"string")," - The initial permissions of the Snap, which will be request when\nthe Snap is installed."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"version"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"string")," - The version of the Snap."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"enabled"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"boolean")," - Indicates whether the Snap is enabled."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"blocked"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"boolean")," - Indicates whether the Snap is blocked.")),(0,l.yg)("h3",{id:"example-1"},"Example"),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(s.A,{value:"Request",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'await window.ethereum.request({\n  "method": "wallet_requestSnaps",\n  "params": [\n    {\n      "npm:@metamask/example-snap": {},\n      "npm:fooSnap": {\n        "version": "^1.0.2"\n      }\n    }\n  ]\n});\n'))),(0,l.yg)(s.A,{value:"Result",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "npm:@metamask/example-snap": {\n    "version": "1.0.0",\n    "id": "npm:@metamask/example-snap",\n    "enabled": true,\n    "blocked": false\n  },\n  "npm:fooSnap": {\n    "version": "1.0.5",\n    "id": "npm:fooSnap",\n    "enabled": true,\n    "blocked": false\n  }\n}\n')))),(0,l.yg)("h2",{id:"wallet_snap"},(0,l.yg)("inlineCode",{parentName:"h2"},"wallet_snap")),(0,l.yg)("p",null,"Calls the specified JSON-RPC API method of the specified Snap.\nThe Snap must be installed and the dapp must have permission to communicate with the Snap, or the\nrequest is rejected.\nThe dapp can install the Snap and request permission to communicate with it using\n",(0,l.yg)("a",{parentName:"p",href:"#wallet_requestsnaps"},(0,l.yg)("inlineCode",{parentName:"a"},"wallet_requestSnaps")),"."),(0,l.yg)("p",null,"This method is synonymous to ",(0,l.yg)("a",{parentName:"p",href:"#wallet_invokesnap"},(0,l.yg)("inlineCode",{parentName:"a"},"wallet_invokeSnap")),"."),(0,l.yg)("h3",{id:"parameters-1"},"Parameters"),(0,l.yg)("p",null,"An object containing:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"snapId"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"string")," - The ID of the Snap to invoke."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"request"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"object")," - The JSON-RPC request object to send to the invoked Snap.")),(0,l.yg)("h3",{id:"returns-2"},"Returns"),(0,l.yg)("p",null,"The result of the Snap method call."),(0,l.yg)("h3",{id:"example-2"},"Example"),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(s.A,{value:"Request",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'await window.ethereum.request({\n  "method": "wallet_snap",\n  "params": [\n    {\n      "snapId": "npm:@metamask/example-snap",\n      "request": {\n        "method": "hello"\n      }\n    }\n  ]\n});\n'))),(0,l.yg)(s.A,{value:"Result",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},"{}\n")))),(0,l.yg)("h2",{id:"wallet_invokesnap"},(0,l.yg)("inlineCode",{parentName:"h2"},"wallet_invokeSnap")),(0,l.yg)("p",null,"Calls the specified JSON-RPC API method of the specified Snap.\nThe Snap must be installed and the dapp must have permission to communicate with the Snap, or the\nrequest is rejected.\nThe dapp can install the Snap and request permission to communicate with it using\n",(0,l.yg)("a",{parentName:"p",href:"#wallet_requestsnaps"},(0,l.yg)("inlineCode",{parentName:"a"},"wallet_requestSnaps")),"."),(0,l.yg)("p",null,"This method is synonymous to ",(0,l.yg)("a",{parentName:"p",href:"#wallet_snap"},(0,l.yg)("inlineCode",{parentName:"a"},"wallet_snap")),"."),(0,l.yg)("h3",{id:"parameters-2"},"Parameters"),(0,l.yg)("p",null,"An object containing:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"snapId"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"string")," - The ID of the Snap to invoke."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"request"),": ",(0,l.yg)("inlineCode",{parentName:"li"},"object")," - The JSON-RPC request object to send to the invoked Snap.")),(0,l.yg)("h3",{id:"returns-3"},"Returns"),(0,l.yg)("p",null,"The result of the Snap method call."),(0,l.yg)("h3",{id:"example-3"},"Example"),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(s.A,{value:"Request",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'await window.ethereum.request({\n  "method": "wallet_invokeSnap",\n  "params": [\n    {\n      "snapId": "npm:@metamask/example-snap",\n      "request": {\n        "method": "hello"\n      }\n    }\n  ]\n});\n'))),(0,l.yg)(s.A,{value:"Result",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},"{}\n")))))}g.isMDXComponent=!0},19365:(e,a,n)=>{n.d(a,{A:()=>s});var t=n(96540),l=n(20053);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:n,className:s}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,s),hidden:n},a)}},4865:(e,a,n)=>{n.d(a,{A:()=>c});var t=n(58168),l=n(96540),r=n(20053),s=n(23104),i=n(47751),o=n(92303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:a,block:n,selectedValue:i,selectValue:o,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const a=e.currentTarget,n=m.indexOf(a),t=u[n].value;t!==i&&(d(a),o(t))},g=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;a=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;a=m[n]??m[m.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a)},u.map((e=>{let{value:a,label:n,attributes:s}=e;return l.createElement("li",(0,t.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>m.push(e),onKeyDown:g,onClick:c},s,{className:(0,r.A)("tabs__item",p.tabItem,s?.className,{"tabs__item--active":i===a})}),n??a)})))}function m(e){let{lazy:a,children:n,selectedValue:t}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function d(e){const a=(0,i.u)(e);return l.createElement("div",{className:(0,r.A)("tabs-container",p.tabList)},l.createElement(u,(0,t.A)({},e,a)),l.createElement(m,(0,t.A)({},e,a)))}function c(e){const a=(0,o.A)();return l.createElement(d,(0,t.A)({key:String(a)},e))}},47751:(e,a,n)=>{n.d(a,{u:()=>d});var t=n(96540),l=n(56347),r=n(57485),s=n(31682),i=n(89466);function o(e){return function(e){return t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:l}}=e;return{value:a,label:n,attributes:t,default:l}}))}function p(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??o(n);return function(e){const a=(0,s.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function u(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const s=(0,l.W6)(),i=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,r.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(s.location.search);a.set(i,e),s.replace({...s.location,search:a.toString()})}),[i,s])]}function d(e){const{defaultValue:a,queryString:n=!1,groupId:l}=e,r=p(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[d,c]=m({queryString:n,groupId:l}),[g,h]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[l,r]=(0,i.Dv)(n);return[l,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:l}),y=(()=>{const e=d??g;return u({value:e,tabValues:r})?e:null})();(0,t.useLayoutEffect)((()=>{y&&o(y)}),[y]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),h(e)}),[c,h,r]),tabValues:r}}}}]);