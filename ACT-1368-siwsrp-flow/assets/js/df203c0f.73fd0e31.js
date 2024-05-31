"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4279],{27293:(e,t,n)=>{n.d(t,{A:()=>M});var a=n(96540),o=n(74848);function l(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),l=t.filter((e=>e!==n)),s=n?.props.children;return{mdxAdmonitionTitle:s,rest:l.length>0?(0,o.jsx)(o.Fragment,{children:l}):null}}(e.children),l=e.title??t;return{...e,...l&&{title:l},children:n}}var s=n(18215),r=n(21312),i=n(17559);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:n,children:a}=e;return(0,o.jsx)("div",{className:(0,s.A)(i.G.common.admonition,i.G.common.admonitionType(t),c.admonition,n),children:a})}function p(e){let{icon:t,title:n}=e;return(0,o.jsxs)("div",{className:c.admonitionHeading,children:[(0,o.jsx)("span",{className:c.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,o.jsx)("div",{className:c.admonitionContent,children:t}):null}function f(e){const{type:t,icon:n,title:a,children:l,className:s}=e;return(0,o.jsxs)(d,{type:t,className:s,children:[a||n?(0,o.jsx)(p,{title:a,icon:n}):null,(0,o.jsx)(m,{children:l})]})}function u(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const h={icon:(0,o.jsx)(u,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function y(e){return(0,o.jsx)(f,{...h,...e,className:(0,s.A)("alert alert--secondary",e.className),children:e.children})}function x(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const g={icon:(0,o.jsx)(x,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function E(e){return(0,o.jsx)(f,{...g,...e,className:(0,s.A)("alert alert--success",e.className),children:e.children})}function O(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const j={icon:(0,o.jsx)(O,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function C(e){return(0,o.jsx)(f,{...j,...e,className:(0,s.A)("alert alert--info",e.className),children:e.children})}function z(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const b={icon:(0,o.jsx)(z,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function v(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const k={icon:(0,o.jsx)(v,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const T={icon:(0,o.jsx)(z,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const A={...{note:y,tip:E,info:C,warning:function(e){return(0,o.jsx)(f,{...b,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(f,{...k,...e,className:(0,s.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(y,{title:"secondary",...e}),important:e=>(0,o.jsx)(C,{title:"important",...e}),success:e=>(0,o.jsx)(E,{title:"success",...e}),caution:function(e){return(0,o.jsx)(f,{...T,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})}}};var w=n(96763);function M(e){const t=l(e),n=(a=t.type,A[a]||(w.warn(`No admonition component found for admonition type "${a}". Using Info as fallback.`),A.info));var a;return(0,o.jsx)(n,{...t})}},2405:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});n(96540);var a=n(18215),o=n(28774),l=n(53465),s=n(69024),r=n(17559),i=n(21312),c=n(41463),d=n(5260),p=n(74848);function m(){return(0,p.jsx)(i.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function f(){return(0,p.jsx)(i.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function u(){return(0,p.jsx)(d.A,{children:(0,p.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var h=n(79614);function y(e){let{className:t}=e;return(0,p.jsx)(h.A,{type:"caution",title:(0,p.jsx)(m,{}),className:(0,a.A)(t,r.G.common.unlistedBanner),children:(0,p.jsx)(f,{})})}function x(e){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u,{}),(0,p.jsx)(y,{...e})]})}var g=n(51107);function E(e){const t=function(){const{selectMessage:e}=(0,l.W)();return t=>e(t,(0,i.T)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:t}))}();return(0,i.T)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:t(e.tag.count),tagName:e.tag.label})}function O(e){let{doc:t}=e;return(0,p.jsxs)("article",{className:"margin-vert--lg",children:[(0,p.jsx)(o.A,{to:t.permalink,children:(0,p.jsx)(g.A,{as:"h2",children:t.title})}),t.description&&(0,p.jsx)("p",{children:t.description})]})}function j(e){let{title:t}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.be,{title:t}),(0,p.jsx)(c.A,{tag:"doc_tag_doc_list"})]})}function C(e){let{tag:t,title:n}=e;return(0,p.jsx)(s.e3,{className:(0,a.A)(r.G.page.docsTagDocListPage),children:(0,p.jsx)("div",{className:"container margin-vert--lg",children:(0,p.jsx)("div",{className:"row",children:(0,p.jsxs)("main",{className:"col col--8 col--offset-2",children:[t.unlisted&&(0,p.jsx)(x,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(g.A,{as:"h1",children:n}),(0,p.jsx)(o.A,{href:t.allTagsPath,children:(0,p.jsx)(i.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)("section",{className:"margin-vert--lg",children:t.items.map((e=>(0,p.jsx)(O,{doc:e},e.id)))})]})})})})}function z(e){const t=E(e);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(j,{...e,title:t}),(0,p.jsx)(C,{...e,title:t})]})}},53465:(e,t,n)=>{n.d(t,{W:()=>d});var a=n(96540),o=n(44586),l=n(96763);const s=["zero","one","two","few","many","other"];function r(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:r(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:r(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return l.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function d(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&l.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return a[Math.min(s,a.length-1)]}(n,t,e)}}},79614:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),o=n(27293);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(null,arguments)}const s=e=>{let{title:t,titleId:n,...o}=e;return a.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:272.927,height:258.717,viewBox:"0 0 272.927 258.717","aria-labelledby":n},o),t?a.createElement("title",{id:n},t):null,a.createElement("defs",null,a.createElement("linearGradient",{id:"a",x1:0,x2:1,y1:0,y2:0,gradientTransform:"translate(111.542 146.13)scale(59.97082)",gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},a.createElement("stop",{offset:0,style:{stopOpacity:1,stopColor:"#c06caa"}}),a.createElement("stop",{offset:.23,style:{stopOpacity:1,stopColor:"#c06caa"}}),a.createElement("stop",{offset:.9,style:{stopOpacity:1,stopColor:"#9d6cad"}}),a.createElement("stop",{offset:1,style:{stopOpacity:1,stopColor:"#9d6cad"}})),a.createElement("linearGradient",{id:"b",x1:0,x2:1,y1:0,y2:0,gradientTransform:"matrix(59.4357 0 0 59.4357 33.183 145.92)",gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},a.createElement("stop",{offset:0,style:{stopOpacity:1,stopColor:"#9d6cad"}}),a.createElement("stop",{offset:.19,style:{stopOpacity:1,stopColor:"#9d6cad"}}),a.createElement("stop",{offset:.24,style:{stopOpacity:1,stopColor:"#a06cad"}}),a.createElement("stop",{offset:.82,style:{stopOpacity:1,stopColor:"#c06caa"}}),a.createElement("stop",{offset:1,style:{stopOpacity:1,stopColor:"#c06caa"}})),a.createElement("linearGradient",{id:"c",x1:0,x2:1,y1:0,y2:0,gradientTransform:"scale(-28.98832)rotate(-63.182 -3.833 4)",gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},a.createElement("stop",{offset:0,style:{stopOpacity:1,stopColor:"#5a60aa"}}),a.createElement("stop",{offset:1,style:{stopOpacity:1,stopColor:"#7a6db0"}})),a.createElement("linearGradient",{id:"d",x1:0,x2:1,y1:0,y2:0,gradientTransform:"scale(31.189)rotate(63.254 -.251 1.571)",gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},a.createElement("stop",{offset:0,style:{stopOpacity:1,stopColor:"#5a60aa"}}),a.createElement("stop",{offset:.99,style:{stopOpacity:1,stopColor:"#7a6db0"}}),a.createElement("stop",{offset:1,style:{stopOpacity:1,stopColor:"#7a6db0"}})),a.createElement("linearGradient",{id:"e",x1:0,x2:1,y1:0,y2:0,gradientTransform:"rotate(-89.252 100.003 22.863)scale(33.81185)",gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},a.createElement("stop",{offset:0,style:{stopOpacity:1,stopColor:"#9566aa"}}),a.createElement("stop",{offset:.11,style:{stopOpacity:1,stopColor:"#9566aa"}}),a.createElement("stop",{offset:.43,style:{stopOpacity:1,stopColor:"#a07eb8"}}),a.createElement("stop",{offset:.93,style:{stopOpacity:1,stopColor:"#ae9ecc"}}),a.createElement("stop",{offset:1,style:{stopOpacity:1,stopColor:"#ae9ecc"}})),a.createElement("linearGradient",{id:"f",x1:0,x2:1,y1:0,y2:0,gradientTransform:"scale(33.8137)rotate(-89.841 3.733 -.074)",gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},a.createElement("stop",{offset:0,style:{stopOpacity:1,stopColor:"#9566aa"}}),a.createElement("stop",{offset:.16,style:{stopOpacity:1,stopColor:"#9566aa"}}),a.createElement("stop",{offset:.49,style:{stopOpacity:1,stopColor:"#a07eb8"}}),a.createElement("stop",{offset:.99,style:{stopOpacity:1,stopColor:"#ae9ecc"}}),a.createElement("stop",{offset:1,style:{stopOpacity:1,stopColor:"#ae9ecc"}})),a.createElement("linearGradient",{id:"g",x1:0,x2:1,y1:0,y2:0,gradientTransform:"matrix(5.6145 0 0 5.6145 65.504 78.06)",gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},a.createElement("stop",{offset:0,style:{stopOpacity:1,stopColor:"#a081bb"}}),a.createElement("stop",{offset:.02,style:{stopOpacity:1,stopColor:"#a081bb"}}),a.createElement("stop",{offset:1,style:{stopOpacity:1,stopColor:"#8c79ab"}})),a.createElement("linearGradient",{id:"h",x1:0,x2:1,y1:0,y2:0,gradientTransform:"matrix(-7.55784 -.07063 .07063 -7.55784 141.91 78.095)",gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},a.createElement("stop",{offset:0,style:{stopOpacity:1,stopColor:"#a081bb"}}),a.createElement("stop",{offset:.42,style:{stopOpacity:1,stopColor:"#a081bb"}}),a.createElement("stop",{offset:1,style:{stopOpacity:1,stopColor:"#8c79ab"}})),a.createElement("linearGradient",{id:"i",x1:0,x2:1,y1:0,y2:0,gradientTransform:"scale(-65.54745)rotate(65.862 .689 -3.237)",gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},a.createElement("stop",{offset:0,style:{stopOpacity:1,stopColor:"#834e9e"}}),a.createElement("stop",{offset:.13,style:{stopOpacity:1,stopColor:"#834e9e"}}),a.createElement("stop",{offset:.61,style:{stopOpacity:1,stopColor:"#6a2978"}}),a.createElement("stop",{offset:1,style:{stopOpacity:1,stopColor:"#3e225f"}})),a.createElement("linearGradient",{id:"j",x1:0,x2:1,y1:0,y2:0,gradientTransform:"rotate(-50.872 176.655 46.473)scale(59.24424)",gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},a.createElement("stop",{offset:0,style:{stopOpacity:1,stopColor:"#834e9e"}}),a.createElement("stop",{offset:.64,style:{stopOpacity:1,stopColor:"#6a2978"}}),a.createElement("stop",{offset:1,style:{stopOpacity:1,stopColor:"#3e225f"}})),a.createElement("linearGradient",{id:"k",x1:0,x2:1,y1:0,y2:0,gradientTransform:"rotate(-88.193 126.903 -30.625)scale(31.26125)",gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},a.createElement("stop",{offset:0,style:{stopOpacity:1,stopColor:"#9566aa"}}),a.createElement("stop",{offset:.4,style:{stopOpacity:1,stopColor:"#a07eb8"}}),a.createElement("stop",{offset:1,style:{stopOpacity:1,stopColor:"#ae9ecc"}})),a.createElement("linearGradient",{id:"l",x1:0,x2:1,y1:0,y2:0,gradientTransform:"rotate(-92.5 73.89 25.39)scale(35.18982)",gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},a.createElement("stop",{offset:0,style:{stopOpacity:1,stopColor:"#9566aa"}}),a.createElement("stop",{offset:.4,style:{stopOpacity:1,stopColor:"#a07eb8"}}),a.createElement("stop",{offset:1,style:{stopOpacity:1,stopColor:"#ae9ecc"}})),a.createElement("linearGradient",{id:"m",x1:0,x2:1,y1:0,y2:0,gradientTransform:"rotate(-90 121.819 19.471)scale(83.73876)",gradientUnits:"userSpaceOnUse",spreadMethod:"pad"},a.createElement("stop",{offset:0,style:{stopOpacity:1,stopColor:"#d986b8"}}),a.createElement("stop",{offset:1,style:{stopOpacity:1,stopColor:"#b7a9d2"}}))),a.createElement("path",{d:"m0 0-3.023 2.202 4.802 4.403-3.675 2.859 4.807 3.69-3.145 2.441L4.807 40.24l-7.596 22.918-48.816-18.336h-40.696l-48.817 18.336-7.596-22.918 5.103-24.645-3.263-2.441 4.864-3.69-3.676-2.859 4.802-4.403L-143.912 0l6.944-8.154-10.502-32.744 9.732-33.452 34.109 9.464 6.643-5.474 13.463-9.346h23.078l13.525 9.346 6.586 5.474 34.166-9.464 9.787 33.452L-6.938-8.154z",style:{fill:"#9d76b4",fillOpacity:1,fillRule:"nonzero",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 232.401 118.326)"}),a.createElement("path",{d:"m171.513 168.452-59.971-44.644 11.153 26.307z",style:{fill:"url(#a)",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 0 258.717)"}),a.createElement("path",{d:"m33.183 168.452 59.435-45.062L82 150.115Z",style:{fill:"url(#b)",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 0 258.717)"}),a.createElement("path",{d:"m149.923 64.935-15.956-24.528 34.166-9.464 9.787 33.452z",style:{fill:"url(#c)",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 0 258.717)"}),a.createElement("path",{d:"m26.831 64.395 9.732-33.452 34.109 9.464-15.9 24.528z",style:{fill:"url(#d)",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 0 258.717)"}),a.createElement("path",{d:"M68.832 106.363 59.34 91.961l33.814-1.549-1.127 36.607Z",style:{fill:"url(#e)",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 0 258.717)"}),a.createElement("path",{d:"m135.863 106.363-23.552 21.074-.769-37.025 33.814 1.549z",style:{fill:"url(#f)",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 0 258.717)"}),a.createElement("path",{d:"m0 0 20.463 9.943L2.845 23.754Z",style:{fill:"#8d82bd",fillOpacity:1,fillRule:"nonzero",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 94.23 204.84)"}),a.createElement("path",{d:"m0 0 20.407-9.943-2.789 23.754Z",style:{fill:"#8d82bd",fillOpacity:1,fillRule:"nonzero",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 151.413 191.584)"}),a.createElement("path",{d:"m0 0-20.407 9.943 1.662-13.337-.178-5.652z",style:{fill:"#f79d5c",fillOpacity:1,fillRule:"nonzero",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 178.622 204.84)"}),a.createElement("path",{d:"m0 0 18.979-9.046-.117 5.652 1.601 13.337z",style:{fill:"#f79d5c",fillOpacity:1,fillRule:"nonzero",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 94.23 204.84)"}),a.createElement("path",{d:"m0 0-16.966 5.004 11.985 5.535z",style:{fill:"#233447",fillOpacity:1,fillRule:"nonzero",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 120.011 161.427)"}),a.createElement("path",{d:"m0 0 4.981 10.539 12.041-5.535Z",style:{fill:"#233447",fillOpacity:1,fillRule:"nonzero",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 152.916 161.427)"}),a.createElement("path",{d:"m0 0 2.962 24.528-18.862-.54Z",style:{fill:"#6455a3",fillOpacity:1,fillRule:"nonzero",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 94.23 204.84)"}),a.createElement("path",{d:"m0 0 2.911-24.528L18.867-.54Z",style:{fill:"#6454a2",fillOpacity:1,fillRule:"nonzero",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 174.741 172.137)"}),a.createElement("path",{d:"m0 0-33.814-1.549 3.145-17.444 4.981 10.539 12.041-5.535z",style:{fill:"#8561a8",fillOpacity:1,fillRule:"nonzero",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 193.807 136.103)"}),a.createElement("path",{d:"m0 0 11.985 5.535 4.981-10.539 3.145 17.444-33.814 1.549z",style:{fill:"#8561a8",fillOpacity:1,fillRule:"nonzero",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 97.39 154.755)"}),a.createElement("path",{d:"m59.34 91.961 14.177-27.8-.474 13.811z",style:{fill:"url(#g)",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 0 258.717)"}),a.createElement("path",{d:"m131.709 77.972-.531-13.811 14.178 27.8z",style:{fill:"url(#h)",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 0 258.717)"}),a.createElement("path",{d:"m0 0-3.145-17.445L.831-38.039l.887 27.143z",style:{fill:"#9e86be",fillOpacity:1,fillRule:"nonzero",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 124.205 138.168)"}),a.createElement("path",{d:"m0 0-1.662-10.835.831-27.204 3.976 20.594z",style:{fill:"#9e86be",fillOpacity:1,fillRule:"nonzero",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 148.722 138.168)"}),a.createElement("path",{d:"m0 0-3.976-20.594 2.849-2.024L16.492-8.807l.53 13.811z",style:{fill:"#b9a7d0",fillOpacity:1,fillRule:"nonzero",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 152.916 161.427)"}),a.createElement("path",{d:"m0 0 .474-13.811 17.618-13.811 2.85 2.023-3.976 20.595z",style:{fill:"#b9a7d0",fillOpacity:1,fillRule:"nonzero",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 97.39 154.755)"}),a.createElement("path",{d:"m0 0 .178 5.652-1.544 1.31h-22.66l-1.483-1.31.117-5.652-18.98 9.046 6.643-5.473 13.463-9.347h23.078l13.525 9.347 6.586 5.473z",style:{fill:"#de7554",fillOpacity:1,fillRule:"nonzero",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 153.392 216.903)"}),a.createElement("path",{d:"m0 0-2.849 2.023h-16.727L-22.425 0l-1.601-13.337 1.483 1.31H.118l1.544-1.31z",style:{fill:"#161616",fillOpacity:1,fillRule:"nonzero",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 151.413 191.584)"}),a.createElement("path",{d:"m174.066 120.888 5.042 24.646-7.595 22.918-57.953-43.156 22.303-18.933 31.5-9.224 6.938 8.154-3.023 2.202 4.802 4.403-3.675 2.859 4.806 3.69z",style:{fill:"url(#i)",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 0 258.717)"}),a.createElement("path",{d:"m25.587 145.534 5.103-24.646-3.263-2.441 4.864-3.69-3.676-2.859 4.802-4.403-3.028-2.202 6.943-8.154 31.5 9.224 22.303 18.933-57.952 43.156z",style:{fill:"url(#j)",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 0 258.717)"}),a.createElement("path",{d:"m167.363 97.139-31.5 9.224 9.493-14.402-14.178-27.8 18.745.234h27.997z",style:{fill:"url(#k)",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 0 258.717)"}),a.createElement("path",{d:"m68.832 106.363-31.499-9.224-10.502-32.744h27.941l18.745-.234-14.177 27.8z",style:{fill:"url(#l)",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 0 258.717)"}),a.createElement("path",{d:"m111.542 90.412 2.018 34.884 9.136 24.819H82l9.135-24.819 2.019-34.884.77-10.952.06-27.087h16.727l.061 27.087z",style:{fill:"url(#m)",stroke:"none"},transform:"matrix(1.33333 0 0 -1.33333 0 258.717)"}))};var r=n(74848);function i(e){return"flaskOnly"===e.type?(0,r.jsxs)(o.A,{...e,icon:(0,r.jsx)(s,{}),title:"Flask Only",children:["This feature is experimental and only available in ",(0,r.jsx)("a",{href:"https://docs.metamask.io/snaps/get-started/install-flask/",children:"MetaMask Flask"}),", the canary distribution of MetaMask."]}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.A,{...e})})}}}]);