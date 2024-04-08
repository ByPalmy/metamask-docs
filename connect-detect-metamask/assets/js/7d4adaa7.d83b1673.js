"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5412],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},75143:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),i=a(85162);const s={sidebar_label:"Options",sidebar_position:1,toc_max_heading_level:4,description:"See the Snaps CLI options reference."},o="Snaps configuration options",p={unversionedId:"reference/cli/options",id:"reference/cli/options",title:"Snaps configuration options",description:"See the Snaps CLI options reference.",source:"@site/snaps/reference/cli/options.md",sourceDirName:"reference/cli",slug:"/reference/cli/options",permalink:"/connect-detect-metamask/snaps/reference/cli/options",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/cli/options.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Options",sidebar_position:1,toc_max_heading_level:4,description:"See the Snaps CLI options reference."},sidebar:"snapsSidebar",previous:{title:"Snaps command line",permalink:"/connect-detect-metamask/snaps/reference/cli"},next:{title:"Subcommands",permalink:"/connect-detect-metamask/snaps/reference/cli/subcommands"}},u={},c=[{value:"<code>bundler</code>",id:"bundler",level:3},{value:"<code>customizeWebpackConfig</code>",id:"customizewebpackconfig",level:3},{value:"<code>environment</code>",id:"environment",level:3},{value:"<code>evaluate</code>",id:"evaluate",level:3},{value:"<code>experimental</code>",id:"experimental",level:3},{value:"<code>experimental.wasm</code>",id:"experimentalwasm",level:4},{value:"<code>features</code>",id:"features",level:3},{value:"<code>features.images</code>",id:"featuresimages",level:4},{value:"<code>input</code>",id:"input",level:3},{value:"<code>manifest</code>",id:"manifest",level:3},{value:"<code>manifest.path</code>",id:"manifestpath",level:4},{value:"<code>manifest.update</code>",id:"manifestupdate",level:4},{value:"<code>output</code>",id:"output",level:3},{value:"<code>output.clean</code>",id:"outputclean",level:4},{value:"<code>output.filename</code>",id:"outputfilename",level:4},{value:"<code>output.minimize</code>",id:"outputminimize",level:4},{value:"<code>output.path</code>",id:"outputpath",level:4},{value:"<code>polyfills</code>",id:"polyfills",level:3},{value:"<code>server</code>",id:"server",level:3},{value:"<code>server.enabled</code>",id:"serverenabled",level:4},{value:"<code>server.port</code>",id:"serverport",level:4},{value:"<code>server.root</code>",id:"serverroot",level:4},{value:"<code>sourceMap</code>",id:"sourcemap",level:3},{value:"<code>stats</code>",id:"stats",level:3},{value:"<code>stats.buffer</code>",id:"statsbuffer",level:4},{value:"<code>stats.builtIns</code>",id:"statsbuiltins",level:4},{value:"<code>stats.verbose</code>",id:"statsverbose",level:4}],m={toc:c},d="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snaps-configuration-options"},"Snaps configuration options"),(0,r.kt)("p",null,"This reference describes the syntax of the Snaps command line interface (CLI) configuration options.\nYou can specify these options in the\n",(0,r.kt)("a",{parentName:"p",href:"/connect-detect-metamask/snaps/learn/about-snaps/files#configuration-file"},"configuration file"),"."),(0,r.kt)("h3",{id:"bundler"},(0,r.kt)("inlineCode",{parentName:"h3"},"bundler")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bundler: <BUNDLER>,\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bundler: "webpack",\n')))),(0,r.kt)("p",null,"The bundler to use.\nThe options are ",(0,r.kt)("inlineCode",{parentName:"p"},'"webpack"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'"browserify"'),".\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},'"webpack"'),"."),(0,r.kt)("admonition",{title:"important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We recommend using the Webpack bundler.\nThe Browserify-based configuration is deprecated and will be removed in the future.\nThis reference describes the configuration options for Webpack.\nFor Browserify, see the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/455366f19281801ed4220431100e45237dd5cf1e/packages/snaps-cli#legacy-options"},"legacy options"),".")),(0,r.kt)("h3",{id:"customizewebpackconfig"},(0,r.kt)("inlineCode",{parentName:"h3"},"customizeWebpackConfig")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"customizeWebpackConfig: <FUNCTION>,\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"customizeWebpackConfig: (config) =>\n    merge(config, {\n        plugins: [\n            // Add a plugin.\n        ],\n        module: {\n            rules: [\n                // Add a loader.\n            ],\n        },\n    }),\n")))),(0,r.kt)("p",null,"A function that customizes the Webpack configuration.\nFor example, you can use this option to add a Webpack plugin, provide a polyfill, or add a loader."),(0,r.kt)("p",null,"The function should receive the Webpack configuration object and return the modified configuration object.\nFor convenience, the Snaps CLI exports a ",(0,r.kt)("inlineCode",{parentName:"p"},"merge")," function that you can use to merge the\nconfiguration object with the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/blob/main/packages/snaps-cli/src/webpack/config.ts"},"default Webpack configuration"),"."),(0,r.kt)("h3",{id:"environment"},(0,r.kt)("inlineCode",{parentName:"h3"},"environment")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"environment: <ENVIRONMENT>,\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"environment: {\n    SNAP_ENV: process.env.SNAP_ENV,\n    PUBLIC_KEY: process.env.PUBLIC_KEY,\n},\n")))),(0,r.kt)("p",null,"The environment configuration.\nYou can use this to ",(0,r.kt)("a",{parentName:"p",href:"/connect-detect-metamask/snaps/how-to/use-environment-variables"},"set environment variables for the Snap"),",\nwhich can be accessed using ",(0,r.kt)("inlineCode",{parentName:"p"},"process.env"),"."),(0,r.kt)("h3",{id:"evaluate"},(0,r.kt)("inlineCode",{parentName:"h3"},"evaluate")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"evaluate: <BOOLEAN>,\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"evaluate: true,\n")))),(0,r.kt)("p",null,"Enables or disables evaluating the bundle.\nWhen set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the bundle is checked for compatibility issues with the Snaps runtime.\nIf there are any issues, the CLI exits with an error."),(0,r.kt)("h3",{id:"experimental"},(0,r.kt)("inlineCode",{parentName:"h3"},"experimental")),(0,r.kt)("p",null,"Experimental features."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"These features are not stable, and might change in the future.")),(0,r.kt)("h4",{id:"experimentalwasm"},(0,r.kt)("inlineCode",{parentName:"h4"},"experimental.wasm")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"experimental: {\n    wasm: <BOOLEAN>,\n},\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"experimental: {\n    wasm: true,\n},\n")))),(0,r.kt)("p",null,"Enables or disables WebAssembly support.\nWhen set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", WebAssembly files can be imported in the Snap.\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import program from "./program.wasm";\n\n// Program is initialized synchronously.\n// ...\n')),(0,r.kt)("h3",{id:"features"},(0,r.kt)("inlineCode",{parentName:"h3"},"features")),(0,r.kt)("h4",{id:"featuresimages"},(0,r.kt)("inlineCode",{parentName:"h4"},"features.images")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"features: {\n    images: <BOOLEAN>,\n},\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"features: {\n    images: false,\n},\n")))),(0,r.kt)("p",null,"Enables or disables ",(0,r.kt)("a",{parentName:"p",href:"/connect-detect-metamask/snaps/features/custom-ui/#image"},"image support"),".\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"input"},(0,r.kt)("inlineCode",{parentName:"h3"},"input")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"input: <FILE>,\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'input: "src/index.js",\n')))),(0,r.kt)("p",null,"The entry point of the Snap.\nThis is the file that will be bundled.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},'"src/index.js"'),"."),(0,r.kt)("h3",{id:"manifest"},(0,r.kt)("inlineCode",{parentName:"h3"},"manifest")),(0,r.kt)("p",null,"The Snap ",(0,r.kt)("a",{parentName:"p",href:"/connect-detect-metamask/snaps/learn/about-snaps/files#manifest-file"},"manifest file")," configuration."),(0,r.kt)("h4",{id:"manifestpath"},(0,r.kt)("inlineCode",{parentName:"h4"},"manifest.path")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"manifest: {\n    path: <FILE>,\n},\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'manifest: {\n    path: "snap.manifest.json",\n},\n')))),(0,r.kt)("p",null,"Path to the Snap manifest file.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},'"snap.manifest.json"'),"."),(0,r.kt)("h4",{id:"manifestupdate"},(0,r.kt)("inlineCode",{parentName:"h4"},"manifest.update")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"manifest: {\n    update: <BOOLEAN>,\n},\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"manifest: {\n    update: false,\n},\n")))),(0,r.kt)("p",null,"Enables or disables updating the manifest file with the bundle shasum, and making any other possible updates.\nIf set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the manifest is not updated, and an error is thrown if the manifest is not up-to-date.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"output"},(0,r.kt)("inlineCode",{parentName:"h3"},"output")),(0,r.kt)("p",null,"The output configuration."),(0,r.kt)("h4",{id:"outputclean"},(0,r.kt)("inlineCode",{parentName:"h4"},"output.clean")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"output: {\n    clean: <BOOLEAN>,\n},\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"output: {\n    clean: true,\n},\n")))),(0,r.kt)("p",null,"Enables or disables cleaning the output directory before building.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h4",{id:"outputfilename"},(0,r.kt)("inlineCode",{parentName:"h4"},"output.filename")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"output: {\n    filename: <FILE>,\n},\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'output: {\n    filename: "bundle.js",\n},\n')))),(0,r.kt)("p",null,"The output filename.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},'"bundle.js"'),"."),(0,r.kt)("h4",{id:"outputminimize"},(0,r.kt)("inlineCode",{parentName:"h4"},"output.minimize")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"output: {\n    minimize: <BOOLEAN>,\n},\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"output: {\n    minimize: false,\n},\n")))),(0,r.kt)("p",null,"Enables or disables minimizing the bundle.\nMinimizing the bundle removes comments and whitespace, mangles variable names, and performs other optimizations.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h4",{id:"outputpath"},(0,r.kt)("inlineCode",{parentName:"h4"},"output.path")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"output: {\n    path: <DIRECTORY>,\n},\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'output: {\n    path: "dist",\n},\n')))),(0,r.kt)("p",null,"Path to the output directory.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},'"dist"'),"."),(0,r.kt)("h3",{id:"polyfills"},(0,r.kt)("inlineCode",{parentName:"h3"},"polyfills")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"polyfills: <BOOLEAN|OBJECT>\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"polyfills: {\n    buffer: true,\n    crypto: true,\n    path: true,\n}\n")))),(0,r.kt)("p",null,"Enables or disables providing polyfills for Node.js built-in modules.\nIf set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", all available polyfills are provided.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"You can also set this option to an object with specific polyfills set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/blob/51a1d04ea50c5c286262df1959ef0b1ced84b6e2/packages/snaps-cli/src/config.ts#L383-L416"},"the list of available polyfills"),"."),(0,r.kt)("h3",{id:"server"},(0,r.kt)("inlineCode",{parentName:"h3"},"server")),(0,r.kt)("p",null,"The development server configuration.\nThe development server is used to test the Snap during development, using the\n",(0,r.kt)("a",{parentName:"p",href:"/connect-detect-metamask/snaps/reference/cli/subcommands#w-watch"},(0,r.kt)("inlineCode",{parentName:"a"},"watch"))," and ",(0,r.kt)("a",{parentName:"p",href:"/connect-detect-metamask/snaps/reference/cli/subcommands#s-serve"},(0,r.kt)("inlineCode",{parentName:"a"},"serve"))," subcommands."),(0,r.kt)("h4",{id:"serverenabled"},(0,r.kt)("inlineCode",{parentName:"h4"},"server.enabled")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"server: {\n    enabled: <BOOLEAN>,\n},\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"server: {\n    enabled: false,\n},\n")))),(0,r.kt)("p",null,"Enables or disables the development server."),(0,r.kt)("h4",{id:"serverport"},(0,r.kt)("inlineCode",{parentName:"h4"},"server.port")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"server: {\n    port: <PORT>,\n},\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"server: {\n    port: 9000,\n},\n")))),(0,r.kt)("p",null,"The port to run the development server on.\nIf set to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", a random port is used.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"8081"),"."),(0,r.kt)("h4",{id:"serverroot"},(0,r.kt)("inlineCode",{parentName:"h4"},"server.root")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"server: {\n    root: <DIRECTORY>,\n},\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'server: {\n    root: "snap",\n},\n')))),(0,r.kt)("p",null,"The root directory of the development server.\nThis is the directory that is served by the development server.\nThe default is the current working directory."),(0,r.kt)("h3",{id:"sourcemap"},(0,r.kt)("inlineCode",{parentName:"h3"},"sourceMap")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'sourceMap: <BOOLEAN|"inline">,\n'))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'sourceMap: "inline",\n')))),(0,r.kt)("p",null,"Enables or disables generating a source map.\nIf set to ",(0,r.kt)("inlineCode",{parentName:"p"},'"inline"'),", the source map is inlined in the bundle.\nIf set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or not specified, it is written to a separate file.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"stats"},(0,r.kt)("inlineCode",{parentName:"h3"},"stats")),(0,r.kt)("p",null,"The stats configuration, which controls the log output of the CLI."),(0,r.kt)("h4",{id:"statsbuffer"},(0,r.kt)("inlineCode",{parentName:"h4"},"stats.buffer")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"stats: {\n    buffer: <BOOLEAN>,\n},\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"stats: {\n    buffer: false,\n},\n")))),(0,r.kt)("p",null,"Enables or disables showing a warning if the ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")," global is used but not provided.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")," global is not available in the Snaps runtime by default.\nTo use ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer"),", set ",(0,r.kt)("a",{parentName:"p",href:"#polyfills"},(0,r.kt)("inlineCode",{parentName:"a"},"polyfills"))," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h4",{id:"statsbuiltins"},(0,r.kt)("inlineCode",{parentName:"h4"},"stats.builtIns")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"stats: {\n    builtIns: <false|IGNORE_LIST>,\n},\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"stats: {\n    builtIns: {\n        ignore: [\n            // Built-in modules to ignore.\n        ],\n    },\n},\n")))),(0,r.kt)("p",null,"Enables or disables checking for missing built-in modules."),(0,r.kt)("p",null,"Not specifying this option, or specifying an ignore list, enables checking for missing built-in modules.\nWhen enabled, the CLI shows a warning if a built-in is used but not provided.\nThe Snaps CLI does not support Node.js built-ins out of the box.\nTo use built-ins, set ",(0,r.kt)("a",{parentName:"p",href:"#polyfills"},(0,r.kt)("inlineCode",{parentName:"a"},"polyfills"))," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"You can specify a list of built-ins to ignore when checking for missing built-ins.\nThis is useful if the built-in is not actually used in the Snap, but is added by a dependency."),(0,r.kt)("p",null,"The default is an empty ignore list."),(0,r.kt)("h4",{id:"statsverbose"},(0,r.kt)("inlineCode",{parentName:"h4"},"stats.verbose")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Syntax",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"stats: {\n    verbose: <BOOLEAN>,\n},\n"))),(0,r.kt)(i.Z,{value:"Example",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"stats: {\n    verbose: true,\n},\n")))),(0,r.kt)("p",null,"Enables or disables verbose logging.\nIf set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the CLI logs more information.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."))}k.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),s=a(70989),o=a(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(m(t),o(n))},k=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:k,onClick:d},i,{className:(0,l.Z)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function c(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function m(e){const t=(0,s.Y)(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",p.tabList)},r.createElement(u,(0,n.Z)({},e,t)),r.createElement(c,(0,n.Z)({},e,t)))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},70989:(e,t,a)=>{a.d(t,{Y:()=>m});var n=a(67294),r=a(16550),l=a(91980),i=a(67392),s=a(50012);function o(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??o(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:a}=e;const i=(0,r.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=p(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[m,d]=c({queryString:a,groupId:r}),[k,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,s.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=m??k;return u({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,l]),tabValues:l}}}}]);