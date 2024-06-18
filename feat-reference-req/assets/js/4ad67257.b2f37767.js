"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9071],{6826:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var s=a(74848),l=a(28453),r=a(11470),t=a(19365);const i={description:"See the JavaScript SDK options reference.",sidebar_position:1,tags:["JavaScript SDK"]},c="JavaScript SDK options",o={id:"reference/sdk-js-options",title:"JavaScript SDK options",description:"See the JavaScript SDK options reference.",source:"@site/wallet/reference/sdk-js-options.md",sourceDirName:"reference",slug:"/reference/sdk-js-options",permalink:"/feat-reference-req/wallet/reference/sdk-js-options",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/reference/sdk-js-options.md",tags:[{inline:!0,label:"JavaScript SDK",permalink:"/feat-reference-req/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:1,frontMatter:{description:"See the JavaScript SDK options reference.",sidebar_position:1,tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Reference",permalink:"/feat-reference-req/wallet/reference"},next:{title:"Unity SDK API",permalink:"/feat-reference-req/wallet/reference/sdk-unity-api"}},d={},u=[{value:"<code>checkInstallationImmediately</code>",id:"checkinstallationimmediately",level:3},{value:"<code>checkInstallationOnAllCalls</code>",id:"checkinstallationonallcalls",level:3},{value:"<code>communicationLayerPreference</code>",id:"communicationlayerpreference",level:3},{value:"<code>communicationServerUrl</code>",id:"communicationserverurl",level:3},{value:"<code>dappMetadata</code>",id:"dappmetadata",level:3},{value:"<code>defaultReadOnlyChainId</code>",id:"defaultreadonlychainid",level:3},{value:"<code>enableDebug</code>",id:"enabledebug",level:3},{value:"<code>extensionOnly</code>",id:"extensiononly",level:3},{value:"<code>infuraAPIKey</code>",id:"infuraapikey",level:3},{value:"<code>modals</code>",id:"modals",level:3},{value:"<code>openDeeplink</code>",id:"opendeeplink",level:3},{value:"<code>preferDesktop</code>",id:"preferdesktop",level:3},{value:"<code>readonlyRPCMap</code>",id:"readonlyrpcmap",level:3},{value:"<code>shouldShimWeb3</code>",id:"shouldshimweb3",level:3},{value:"<code>timer</code>",id:"timer",level:3},{value:"<code>transports</code>",id:"transports",level:3},{value:"<code>ui</code>",id:"ui",level:3},{value:"<code>useDeeplink</code>",id:"usedeeplink",level:3},{value:"<code>wakeLockType</code>",id:"wakelocktype",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"javascript-sdk-options",children:"JavaScript SDK options"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/feat-reference-req/wallet/how-to/use-sdk/javascript/",children:"JavaScript version of MetaMask SDK"})," takes the\nfollowing options."]}),"\n",(0,s.jsx)(n.h3,{id:"checkinstallationimmediately",children:(0,s.jsx)(n.code,{children:"checkInstallationImmediately"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{value:"Syntax",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"checkInstallationImmediately: <boolean>\n"})})}),(0,s.jsx)(t.A,{value:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"checkInstallationImmediately: true\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Enables or disables immediately checking if MetaMask is installed on the user's browser.\nIf ",(0,s.jsx)(n.code,{children:"true"}),", the SDK checks for installation upon page load and sends a connection request, prompting\nthe user to install MetaMask if it's not already installed.\nIf ",(0,s.jsx)(n.code,{children:"false"}),", the SDK waits for the connect method to be called to check for installation."]}),"\n",(0,s.jsxs)(n.p,{children:["The default is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"checkinstallationonallcalls",children:(0,s.jsx)(n.code,{children:"checkInstallationOnAllCalls"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{value:"Syntax",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"checkInstallationOnAllCalls: <boolean>\n"})})}),(0,s.jsx)(t.A,{value:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"checkInstallationOnAllCalls: true\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Enables or disables checking if MetaMask is installed on the user's browser before each RPC request.\nThe default is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"communicationlayerpreference",children:(0,s.jsx)(n.code,{children:"communicationLayerPreference"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{value:"Syntax",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"communicationLayerPreference: <type>\n"})})}),(0,s.jsx)(t.A,{value:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"communicationLayerPreference: SOCKET\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["The preferred communication layer to use.\nThe default and only option is ",(0,s.jsx)(n.code,{children:"SOCKET"})," for ",(0,s.jsx)(n.a,{href:"https://socket.io/docs/v4/",children:"Socket.IO"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"communicationserverurl",children:(0,s.jsx)(n.code,{children:"communicationServerUrl"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{value:"Syntax",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"communicationServerUrl: <string>\n"})})}),(0,s.jsx)(t.A,{value:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'communicationServerUrl: "https://metamask-sdk-socket.metafi.codefi.network/"\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"The URL of the communication server to use.\nThis option is mainly used for debugging and testing the SDK."}),"\n",(0,s.jsx)(n.h3,{id:"dappmetadata",children:(0,s.jsx)(n.code,{children:"dappMetadata"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{value:"Syntax",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"dappMetadata: {\n  name: <string>,\n  url: <string>,\n  base64Icon: <string>,\n}\n"})})}),(0,s.jsx)(t.A,{value:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'dappMetadata: {\n  name: "My Dapp",\n  url: "https://mydapp.com",\n  base64Icon: "data:image/png;base64,...",\n}\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"Metadata about the dapp using the SDK.\nThe metadata options are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," - Name of the dapp"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"url"})," - URL of the dapp"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"base64Icon"})," - A base64-encoded icon"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"important",type:"tip",children:(0,s.jsxs)(n.p,{children:["Setting ",(0,s.jsx)(n.code,{children:"dappMetaData"})," creates a clear and trustworthy user experience when connecting your dapp to\nMetaMask Mobile.\nMetaMask Mobile displays this metadata in the connection modal to help users identify and verify the\nconnection request."]})}),"\n",(0,s.jsx)(n.h3,{id:"defaultreadonlychainid",children:(0,s.jsx)(n.code,{children:"defaultReadOnlyChainId"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{value:"Syntax",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"defaultReadOnlyChainId: <number or hexadecimal string>\n"})})}),(0,s.jsx)(t.A,{value:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'defaultReadOnlyChainId: "0x1"\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Enables sending ",(0,s.jsx)(n.a,{href:"/feat-reference-req/wallet/how-to/use-sdk/javascript/make-read-only-requests",children:"read-only RPC requests"})," to\nthis chain ID before the user connects to MetaMask.\nThe value is automatically updated to the chain ID used in MetaMask once connected."]}),"\n",(0,s.jsx)(n.h3,{id:"enabledebug",children:(0,s.jsx)(n.code,{children:"enableDebug"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{value:"Syntax",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"enableDebug: <boolean>\n"})})}),(0,s.jsx)(t.A,{value:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"enableDebug: false\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Enables or disables sending anonymous analytics to MetaMask to help improve the SDK.\nThe default is ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"extensiononly",children:(0,s.jsx)(n.code,{children:"extensionOnly"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{value:"Syntax",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"extensionOnly: <boolean>\n"})})}),(0,s.jsx)(t.A,{value:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"extensionOnly: true\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Enables or disables automatically using the MetaMask browser extension if it's detected.\nThe default is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"infuraapikey",children:(0,s.jsx)(n.code,{children:"infuraAPIKey"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{value:"Syntax",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"infuraAPIKey: <string>\n"})})}),(0,s.jsx)(t.A,{value:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"infuraAPIKey: process.env.INFURA_API_KEY\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-id",children:"Infura API key"})," to\nuse for RPC requests.\nConfigure this option to ",(0,s.jsx)(n.a,{href:"/feat-reference-req/wallet/how-to/use-sdk/javascript/make-read-only-requests",children:"make read-only RPC requests from your dapp"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"important",type:"caution",children:(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/use-an-allowlist",children:"Infura allowlists"}),"\nto protect against other people submitting requests to your API key.\nYou can restrict interactions to specific addresses, origins, user agents, and request methods.\nWe recommend using all allowlist options to maximize the security of your API key and dapp."]})}),"\n",(0,s.jsx)(n.h3,{id:"modals",children:(0,s.jsx)(n.code,{children:"modals"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{value:"Syntax",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"modals: <object>\n"})})}),(0,s.jsx)(t.A,{value:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"modals: {\n  onPendingModalDisconnect: () => {\n    // Custom logic for pending modal disconnect.\n  },\n  install: (params) => {\n    // Custom install modal logic.\n    const { link, debug, installer, terminate, connectWithExtension } = params;\n    return {\n      mount: (link) => { /* Custom mount logic */ },\n      unmount: (shouldTerminate) => { /* Custom unmount logic */ },\n    };\n  },\n  otp: ({ debug, onDisconnect }) => {\n    // Custom OTP modal logic.\n    return {\n      mount: () => { /* Custom mount logic */ },\n      updateOTPValue: (otpValue) => { /* Custom OTP value update logic */ },\n      unmount: () => { /* Custom unmount logic */ },\n    };\n  },\n}\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["An object that allows you to ",(0,s.jsx)(n.a,{href:"/feat-reference-req/wallet/how-to/use-sdk/javascript/display-custom-modals",children:"customize the logic and UI of the displayed modals"}),".\nThis is useful if your dapp requires a custom way to handle connection and reconnection scenarios."]}),"\n",(0,s.jsx)(n.h3,{id:"opendeeplink",children:(0,s.jsx)(n.code,{children:"openDeeplink"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{value:"Syntax",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"openDeeplink: <function>\n"})})}),(0,s.jsx)(t.A,{value:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"openDeeplink: (link: string) => {\n  if (canOpenLink) {\n    Linking.openURL(link);\n  }\n}\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"A function that is called to open a deeplink to the MetaMask Mobile app."}),"\n",(0,s.jsx)(n.h3,{id:"preferdesktop",children:(0,s.jsx)(n.code,{children:"preferDesktop"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{value:"Syntax",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"preferDesktop: <boolean>\n"})})}),(0,s.jsx)(t.A,{value:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"preferDesktop: true\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Enables or disables preferring the MetaMask browser extension over MetaMask Mobile.\nThe default is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"readonlyrpcmap",children:(0,s.jsx)(n.code,{children:"readonlyRPCMap"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{value:"Syntax",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"readonlyRPCMap: <map>\n"})})}),(0,s.jsx)(t.A,{value:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'readonlyRPCMap: {\n  "0x539": "http://localhost:8545",\n}\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:["A map of RPC URLs to use for ",(0,s.jsx)(n.a,{href:"/feat-reference-req/wallet/how-to/use-sdk/javascript/make-read-only-requests",children:"read-only RPC requests"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"shouldshimweb3",children:(0,s.jsx)(n.code,{children:"shouldShimWeb3"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{value:"Syntax",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"shouldShimWeb3: <boolean>\n"})})}),(0,s.jsx)(t.A,{value:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"shouldShimWeb3: false\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Enables or disables shimming the ",(0,s.jsx)(n.code,{children:"window.web3"})," object with the Ethereum provider returned by the SDK\n(useful for compatibility with older browsers).\nThe default is ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"timer",children:(0,s.jsx)(n.code,{children:"timer"})}),"\n",(0,s.jsx)(r.A,{children:(0,s.jsx)(t.A,{value:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"timer: BackgroundTimer\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["Used by React Native dapps to keep the dapp alive while using\n",(0,s.jsx)(n.a,{href:"https://github.com/ocetnik/react-native-background-timer",children:(0,s.jsx)(n.code,{children:"react-native-background-timer"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"transports",children:(0,s.jsx)(n.code,{children:"transports"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{value:"Syntax",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"transports: <array of strings>\n"})})}),(0,s.jsx)(t.A,{value:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'transports: ["websocket", "polling"]\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Sets the preference on ",(0,s.jsx)(n.a,{href:"https://socket.io/docs/v4/",children:"Socket.IO"})," transports."]}),"\n",(0,s.jsx)(n.h3,{id:"ui",children:(0,s.jsx)(n.code,{children:"ui"})}),"\n",(0,s.jsx)(r.A,{children:(0,s.jsx)(t.A,{value:"Syntax",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"ui: {\n  installer: <function>,\n  confirm: <function>,\n}\n"})})})}),"\n",(0,s.jsx)(n.p,{children:"Options for customizing the SDK UI."}),"\n",(0,s.jsx)(n.h3,{id:"usedeeplink",children:(0,s.jsx)(n.code,{children:"useDeeplink"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{value:"Syntax",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"useDeeplink: <boolean>\n"})})}),(0,s.jsx)(t.A,{value:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"useDeeplink: true\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Enables or disables using deeplinks to connect with MetaMask Mobile.\nIf ",(0,s.jsx)(n.code,{children:"false"}),", the SDK uses universal links instead.\nThe default is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"wakelocktype",children:(0,s.jsx)(n.code,{children:"wakeLockType"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(t.A,{value:"Syntax",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"wakeLockType: <type>\n"})})}),(0,s.jsx)(t.A,{value:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"wakeLockType: Temporary\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["The type of wake lock to use when the SDK is running in the background.\nOptions are ",(0,s.jsx)(n.code,{children:"Disabled"}),", ",(0,s.jsx)(n.code,{children:"Temporary"}),", and ",(0,s.jsx)(n.code,{children:"UntilResponse"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>t});a(96540);var s=a(18215);const l={tabItem:"tabItem_Ymn6"};var r=a(74848);function t(e){let{children:n,hidden:a,className:t}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(l.tabItem,t),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>y});var s=a(96540),l=a(18215),r=a(23104),t=a(56347),i=a(205),c=a(57485),o=a(31682),d=a(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:s,default:l}}=e;return{value:n,label:a,attributes:s,default:l}}))}(a);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:a}=e;const l=(0,t.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function j(e){const{defaultValue:n,queryString:a=!1,groupId:l}=e,r=h(e),[t,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[o,u]=x({queryString:a,groupId:l}),[j,m]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,d.Dv)(a);return[l,(0,s.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:l}),f=(()=>{const e=o??j;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{f&&c(f)}),[f]);return{selectedValue:t,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var m=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function g(e){let{className:n,block:a,selectedValue:s,selectValue:t,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),d=e=>{const n=e.currentTarget,a=c.indexOf(n),l=i[a].value;l!==s&&(o(n),t(l))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,l.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":s===n}),children:a??n},n)}))})}function b(e){let{lazy:n,children:a,selectedValue:l}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function k(e){const n=j(e);return(0,v.jsxs)("div",{className:(0,l.A)("tabs-container",f.tabList),children:[(0,v.jsx)(g,{...n,...e}),(0,v.jsx)(b,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,v.jsx)(k,{...e,children:u(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>i});var s=a(96540);const l={},r=s.createContext(l);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);