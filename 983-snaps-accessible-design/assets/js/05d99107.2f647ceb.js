"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),i=n(25108);const s={description:"Get the estimated gas prices for a chain."},o="Get EIP-1559 gas prices",p={unversionedId:"gas-api/api-reference/gasprices-type2",id:"gas-api/api-reference/gasprices-type2",title:"Get EIP-1559 gas prices",description:"Get the estimated gas prices for a chain.",source:"@site/web3-services/gas-api/api-reference/gasprices-type2.md",sourceDirName:"gas-api/api-reference",slug:"/gas-api/api-reference/gasprices-type2",permalink:"/983-snaps-accessible-design/web3-services/gas-api/api-reference/gasprices-type2",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/web3-services/gas-api/api-reference/gasprices-type2.md",tags:[],version:"current",frontMatter:{description:"Get the estimated gas prices for a chain."},sidebar:"web3ServicesSidebar",previous:{title:"Get the busy threshold",permalink:"/983-snaps-accessible-design/web3-services/gas-api/api-reference/busythreshold"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}],m=e=>function(t){return i.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=m("Tabs"),d=m("TabItem"),g={toc:c},k="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-eip-1559-gas-prices"},"Get EIP-1559 gas prices"),(0,r.kt)("p",null,"Returns the estimated ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1559"},"EIP-1559")," gas fees for the specified\nblockchain network."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GET")," ",(0,r.kt)("inlineCode",{parentName:"p"},"https://gas.api.infura.io/networks/${chainId}/suggestedGasFees")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Path"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chainId"),": ",(0,r.kt)("em",{parentName:"li"},"string")," - ID of the chain to query.")),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,"Recommended gas price details based of the level of urgency:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"low"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"medium"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"high"),": ",(0,r.kt)("em",{parentName:"li"},"Object")," containing recommended values for transactions by level of urgency:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"suggestedMaxPriorityFeePerGas"),": ",(0,r.kt)("em",{parentName:"li"},"string")," - The maximum suggested priority fee per gas to pay\nto have transactions included in a block."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"suggestedMaxFeePerGas"),": ",(0,r.kt)("em",{parentName:"li"},"string")," - The maximum suggested total fee per gas to pay, including\nboth the base fee and the priority fee."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"minWaitTimeEstimate"),": ",(0,r.kt)("em",{parentName:"li"},"number")," - The minimum estimated wait time (in milliseconds) for a\ntransaction to be included in a block at the suggested gas price."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxWaitTimeEstimate"),": ",(0,r.kt)("em",{parentName:"li"},"number")," - The maximum estimated wait time (in milliseconds) for a\ntransaction to be included in a block at the suggested gas price."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"estimatedBaseFee"),": ",(0,r.kt)("em",{parentName:"li"},"string")," - The current estimated base fee per gas on the network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"networkCongestion"),": ",(0,r.kt)("em",{parentName:"li"},"number")," - The current congestion on the network, represented as a number\nbetween ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),".\nA lower network congestion score (for example ",(0,r.kt)("inlineCode",{parentName:"li"},"0.1"),"), indicates that fewer transactions are being\nsubmitted, so it's cheaper to validate transactions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"latestPriorityFeeRange"),": ",(0,r.kt)("em",{parentName:"li"},"array")," - The range of priority fees per gas for recent transactions on\nthe network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"historicalPriorityFeeRange"),": ",(0,r.kt)("em",{parentName:"li"},"array")," - The range of priority fees per gas for transactions on the\nnetwork over a historical period."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"historicalBaseFeeRange"),": ",(0,r.kt)("em",{parentName:"li"},"array")," - The range of base fees per gas on the network over a\nhistorical period."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"priorityFeeTrend"),": ",(0,r.kt)("em",{parentName:"li"},"string")," - The current trend in priority fees on the network, either ",(0,r.kt)("inlineCode",{parentName:"li"},"up")," or\n",(0,r.kt)("inlineCode",{parentName:"li"},"down")," (whether it's getting more expensive or cheaper)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"baseFeeTrend"),": ",(0,r.kt)("em",{parentName:"li"},"string")," - The current trend in base fees on the network, either ",(0,r.kt)("inlineCode",{parentName:"li"},"up")," or\n",(0,r.kt)("inlineCode",{parentName:"li"},"down")," (whether it's getting more expensive or cheaper).")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("p",null,"Include your ",(0,r.kt)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-id"},"API key"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-secret"},"API key secret"),"\nto authorize your account to use the APIs."),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(d,{value:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n   -u <API-KEY>:<API-KEY-SECRET> \\\n    'https://gas.api.infura.io/networks/1/suggestedGasFees'\n"))),(0,r.kt)(d,{value:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const axios = require("axios");\n\nconst apiKey = \'<API-KEY>\'; // replace with your API key\nconst apiKeySecret = \'<API-KEY-SECRET>\'; // replace with your API key secret\n\nconst Auth = Buffer.from(\n  apiKey + ":" + apiKeySecret,\n).toString("base64");\n\n// The chain ID of the supported network\nconst chainId = 1;\n\n(async () => {\n  try {\n    const { data } = await axios.get(\n      `https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`,\n      {\n        headers: {\n          Authorization: `Basic ${Auth}`,\n        },\n      },\n    );\n    console.log("Suggested gas fees:", data);\n  } catch (error) {\n    console.log("Server responded with:", error);\n  }\n})();\n')))),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{\n  low: {\n    suggestedMaxPriorityFeePerGas: '0.05',\n    suggestedMaxFeePerGas: '16.334026964',\n    minWaitTimeEstimate: 15000,\n    maxWaitTimeEstimate: 30000\n  },\n  medium: {\n    suggestedMaxPriorityFeePerGas: '0.1',\n    suggestedMaxFeePerGas: '22.083436402',\n    minWaitTimeEstimate: 15000,\n    maxWaitTimeEstimate: 45000\n  },\n  high: {\n    suggestedMaxPriorityFeePerGas: '0.3',\n    suggestedMaxFeePerGas: '27.982845839',\n    minWaitTimeEstimate: 15000,\n    maxWaitTimeEstimate: 60000\n  },\n  estimatedBaseFee: '16.284026964',\n  networkCongestion: 0.5125,\n  latestPriorityFeeRange: [ '0', '3' ],\n  historicalPriorityFeeRange: [ '0.000000001', '89' ],\n  historicalBaseFeeRange: [ '13.773088584', '29.912845463' ],\n  priorityFeeTrend: 'down',\n  baseFeeTrend: 'up'\n}\n")))}h.isMDXComponent=!0}}]);