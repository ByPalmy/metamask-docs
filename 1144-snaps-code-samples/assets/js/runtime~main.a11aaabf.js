(()=>{"use strict";var e,a,c,f,d,b={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var c=r[e]={id:e,loaded:!1,exports:{}};return b[e].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}t.m=b,e=[],t.O=(a,c,f,d)=>{if(!c){var b=1/0;for(n=0;n<e.length;n++){c=e[n][0],f=e[n][1],d=e[n][2];for(var r=!0,o=0;o<c.length;o++)(!1&d||b>=d)&&Object.keys(t.O).every((e=>t.O[e](c[o])))?c.splice(o--,1):(r=!1,d<b&&(b=d));if(r){e.splice(n--,1);var l=f();void 0!==l&&(a=l)}}return a}d=d||0;for(var n=e.length;n>0&&e[n-1][2]>d;n--)e[n]=e[n-1];e[n]=[c,f,d]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var d=Object.create(null);t.r(d);var b={};a=a||[null,c({}),c([]),c(c)];for(var r=2&f&&e;"object"==typeof r&&!~a.indexOf(r);r=c(r))Object.getOwnPropertyNames(r).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,t.d(d,b),d},t.d=(e,a)=>{for(var c in a)t.o(a,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,c)=>(t.f[c](e,a),a)),[])),t.u=e=>"assets/js/"+({40:"8145e54e",48:"b22afc82",53:"935f2afb",59:"e1aa5429",157:"652081cc",167:"486ba757",260:"3e112a3e",261:"reactPlayerKaltura",291:"ab3b18fd",368:"41f5386a",479:"82c9c8ff",582:"ef8d09aa",690:"47fa8f02",795:"63b87658",825:"03c51261",1145:"40d431ee",1362:"5ecf8742",1402:"3ee3d2fe",1511:"682638a2",1624:"eb2b80f1",1764:"17a18c8c",1835:"bdecca60",2044:"aee6d0cb",2121:"reactPlayerFacebook",2164:"c66e041d",2176:"b6db0fd4",2224:"ca912b8d",2250:"4ecdda4a",2257:"95c87532",2274:"4efa9f2e",2291:"e8973b68",2305:"14bc7481",2325:"6e004e16",2330:"52198f09",2376:"664e45cc",2419:"7c5954e6",2472:"ce634f1e",2546:"reactPlayerStreamable",2583:"2a5de1af",2660:"37285b91",2741:"c3be8443",2744:"f4fa537f",2794:"577b8b2a",2797:"a2353af7",2928:"d2011f4f",3054:"68c12626",3109:"54f1853a",3115:"97c42b41",3140:"d3bb2b22",3205:"3e367afd",3237:"1df93b7f",3264:"8329f30e",3316:"d5f74ffe",3371:"55d0cf22",3381:"030193d7",3512:"ae6e9ecd",3634:"f6d13bb3",3660:"df3ffe2a",3696:"015fe5e8",3743:"reactPlayerVimeo",3751:"3720c009",3791:"b223888a",4121:"55960ee5",4140:"501c7dd0",4151:"ff576332",4192:"037997aa",4257:"9cea254b",4283:"c66adc2f",4332:"1d0adbbf",4378:"f60fed4d",4439:"reactPlayerYouTube",4442:"ba7d2542",4467:"177a052f",4514:"0db58064",4638:"d4abcad3",4657:"b099eb42",4667:"reactPlayerMixcloud",4717:"46fd0c0a",4750:"3e786943",4832:"f8a3ce18",4849:"46c3da1f",4957:"2150471b",5084:"011b5d76",5176:"f9fecb86",5216:"66ba7e9e",5412:"7d4adaa7",5473:"f5000f06",5576:"3d86cae6",5580:"fd49626c",5643:"19fab523",5712:"66d369c7",5730:"a767f895",5835:"54713468",5891:"c23d85eb",5965:"2e39c2b3",6002:"6380b8b5",6011:"reactPlayerFilePlayer",6125:"reactPlayerSoundCloud",6147:"c455d87c",6216:"reactPlayerTwitch",6275:"f186a5d0",6297:"5fdd78da",6336:"9947d6d2",6343:"ab4cafa2",6423:"77a46a80",6439:"c5e4f5c1",6452:"76d3ef76",6453:"4a530d18",6556:"2c1888ff",6595:"ab85252c",6655:"70334ba8",6659:"6830d3a2",6718:"6721d267",6753:"ee067fe3",6754:"cfc76383",6813:"a015cb1d",6885:"202a51b9",6955:"9fb62b98",7050:"11b7fc92",7066:"decc316d",7124:"26f4e834",7266:"5e56b9d4",7318:"5625bc05",7340:"ce260bbc",7382:"d70a1ef5",7502:"57e75615",7523:"f8f7b6b2",7531:"cb2c0fed",7596:"reactPlayerDailyMotion",7664:"reactPlayerPreview",7698:"31bfc0a5",7714:"839511b6",7918:"17896441",7920:"1a4e3797",8055:"reactPlayerWistia",8301:"4ad67257",8313:"286d8836",8371:"5a6432d3",8423:"aa5c46a8",8447:"d4b4a7ff",8467:"0b387740",8522:"fa540bb9",8669:"56aa118c",8742:"6ebf937c",8756:"3925c87d",8778:"b91521d0",8819:"ba4cac81",8888:"reactPlayerVidyard",8930:"debbc54f",8931:"cf946124",8993:"78eb1577",9048:"95fa971a",9057:"94590018",9134:"e4b21b58",9304:"49f67c63",9329:"ab8b636d",9360:"453c9f5d",9390:"b3a3f3b1",9432:"ec0e7283",9486:"61e1445b",9514:"1be78505",9548:"fe7415f5",9681:"7dd3f6c4",9817:"14eb3368",9924:"df203c0f",9962:"52900d40",9965:"a32cdaeb",9980:"284a1a9e"}[e]||e)+"."+{40:"c30c22f8",48:"233decda",53:"b5a9f0e6",59:"939e08d5",157:"a20c3fca",167:"f47b0bd5",260:"0af44591",261:"091ed2a3",291:"edf1d2df",368:"e70d1ee0",479:"d1435714",582:"7985bcdc",690:"3e50e3cf",795:"7e830d7c",825:"c9009662",1145:"9ee234b7",1362:"066d2cc9",1402:"c32f265f",1426:"be64a7dc",1511:"0c621bed",1624:"e1475a0d",1764:"2042e9e0",1835:"0b979173",2044:"a7a8d73c",2121:"697cc207",2164:"5f37e3e2",2176:"dad64aa2",2224:"f9bc9298",2250:"68935779",2257:"9914a7ff",2274:"f97c17f4",2291:"5d6d6fb1",2305:"ee2473ed",2325:"91b2e04e",2330:"76385b5d",2376:"9165069e",2419:"3d110d80",2472:"3fbd46c4",2546:"4582143a",2583:"2ad4e602",2660:"5738bad2",2741:"b512cc31",2744:"ff66d703",2794:"c9840aef",2797:"c38eb6cc",2928:"46cea74e",3054:"c35a4ca2",3109:"d0b2ea65",3115:"1c947c89",3140:"cee5026f",3205:"7ccb6c62",3237:"e21798b1",3264:"65c20d29",3316:"cab4f5fb",3371:"934dcdd7",3381:"4cfcb86e",3512:"f3878869",3634:"ef3413be",3660:"476e158e",3696:"6f5b0ab6",3743:"42a0d9c0",3751:"df3385d2",3791:"05831a9c",4121:"e80b9cf0",4140:"ee1482ba",4151:"056d0533",4192:"ed8997aa",4257:"25bd899f",4283:"0d428494",4332:"d8ff1ebb",4378:"b18ea07b",4439:"a9b14741",4442:"cf53c43d",4467:"103dab1b",4514:"b6a7302b",4638:"f699ca4c",4657:"5455053c",4667:"3aafbc0c",4717:"50f2d1e8",4750:"6caf589a",4832:"5cdea299",4849:"1f012558",4957:"63f92c90",4972:"e49176b8",5084:"56bd882c",5176:"ab0b8933",5216:"e6092a42",5412:"c6bbbd21",5473:"26a55fd2",5576:"c48c3752",5580:"78a63c5b",5643:"759ae7ff",5712:"eb1b7d06",5730:"fa27b890",5835:"171f8645",5891:"d239d79c",5965:"6cc28258",6002:"0f3f128d",6011:"98545a61",6125:"bacff259",6147:"f24c04a9",6216:"d718da62",6275:"ef72939b",6297:"a3bc76a2",6316:"d9003c37",6336:"d1bf514c",6343:"f5f7e7e3",6423:"bbdc658b",6439:"6351bb90",6452:"1f9d9413",6453:"87bdf8e7",6556:"0130d8cc",6595:"1cac42c7",6655:"520b7e49",6659:"8ee0f880",6718:"d26b0dd5",6753:"749a86b9",6754:"82abde1a",6760:"8363329a",6813:"e288f435",6885:"0ff95034",6945:"07888cb2",6955:"f048a71b",7050:"49e41468",7066:"198fb47e",7124:"bda23f5c",7266:"254dd128",7318:"99bd052f",7340:"078fef5e",7382:"1ca1b7f1",7502:"940048b7",7523:"bf7d6a40",7531:"48be5817",7596:"a49c1936",7664:"9db1cd05",7698:"b925c28b",7714:"2e3b8b4a",7724:"df7eb109",7918:"b15050d7",7920:"3b179cfe",8055:"508ea7c7",8301:"3bf674da",8313:"1a6beebb",8371:"631f5504",8423:"9dba2224",8447:"c71fa5e0",8467:"27f2c0af",8522:"f7526069",8669:"d657d635",8685:"19ce8911",8742:"fe3930a5",8756:"01f28f5f",8778:"df6712ce",8819:"cb6636c0",8888:"1189c126",8894:"814fc599",8930:"1b118520",8931:"52192a37",8939:"eb87e055",8993:"48cf2b94",9048:"e067a805",9057:"31dc2a18",9134:"55e40cfd",9304:"ff619481",9329:"12448543",9360:"38f7dd89",9390:"3cd049ba",9432:"be745888",9486:"f7201b87",9487:"e0727ae8",9514:"bf7c0fe3",9548:"26c00770",9681:"eba68ce0",9701:"3bfec2d8",9817:"e0d24799",9924:"8cde9cdd",9962:"e96013be",9965:"becebbca",9980:"1ba7589f",9984:"3a49a851"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},d="metamask-docs:",t.l=(e,a,c,b)=>{if(f[e])f[e].push(a);else{var r,o;if(void 0!==c)for(var l=document.getElementsByTagName("script"),n=0;n<l.length;n++){var i=l[n];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==d+c){r=i;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",d+c),r.src=e),f[e]=[a];var u=(a,c)=>{r.onerror=r.onload=null,clearTimeout(s);var d=f[e];if(delete f[e],r.parentNode&&r.parentNode.removeChild(r),d&&d.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t.p="/1144-snaps-code-samples/",t.gca=function(e){return e={17896441:"7918",54713468:"5835",94590018:"9057","8145e54e":"40",b22afc82:"48","935f2afb":"53",e1aa5429:"59","652081cc":"157","486ba757":"167","3e112a3e":"260",reactPlayerKaltura:"261",ab3b18fd:"291","41f5386a":"368","82c9c8ff":"479",ef8d09aa:"582","47fa8f02":"690","63b87658":"795","03c51261":"825","40d431ee":"1145","5ecf8742":"1362","3ee3d2fe":"1402","682638a2":"1511",eb2b80f1:"1624","17a18c8c":"1764",bdecca60:"1835",aee6d0cb:"2044",reactPlayerFacebook:"2121",c66e041d:"2164",b6db0fd4:"2176",ca912b8d:"2224","4ecdda4a":"2250","95c87532":"2257","4efa9f2e":"2274",e8973b68:"2291","14bc7481":"2305","6e004e16":"2325","52198f09":"2330","664e45cc":"2376","7c5954e6":"2419",ce634f1e:"2472",reactPlayerStreamable:"2546","2a5de1af":"2583","37285b91":"2660",c3be8443:"2741",f4fa537f:"2744","577b8b2a":"2794",a2353af7:"2797",d2011f4f:"2928","68c12626":"3054","54f1853a":"3109","97c42b41":"3115",d3bb2b22:"3140","3e367afd":"3205","1df93b7f":"3237","8329f30e":"3264",d5f74ffe:"3316","55d0cf22":"3371","030193d7":"3381",ae6e9ecd:"3512",f6d13bb3:"3634",df3ffe2a:"3660","015fe5e8":"3696",reactPlayerVimeo:"3743","3720c009":"3751",b223888a:"3791","55960ee5":"4121","501c7dd0":"4140",ff576332:"4151","037997aa":"4192","9cea254b":"4257",c66adc2f:"4283","1d0adbbf":"4332",f60fed4d:"4378",reactPlayerYouTube:"4439",ba7d2542:"4442","177a052f":"4467","0db58064":"4514",d4abcad3:"4638",b099eb42:"4657",reactPlayerMixcloud:"4667","46fd0c0a":"4717","3e786943":"4750",f8a3ce18:"4832","46c3da1f":"4849","2150471b":"4957","011b5d76":"5084",f9fecb86:"5176","66ba7e9e":"5216","7d4adaa7":"5412",f5000f06:"5473","3d86cae6":"5576",fd49626c:"5580","19fab523":"5643","66d369c7":"5712",a767f895:"5730",c23d85eb:"5891","2e39c2b3":"5965","6380b8b5":"6002",reactPlayerFilePlayer:"6011",reactPlayerSoundCloud:"6125",c455d87c:"6147",reactPlayerTwitch:"6216",f186a5d0:"6275","5fdd78da":"6297","9947d6d2":"6336",ab4cafa2:"6343","77a46a80":"6423",c5e4f5c1:"6439","76d3ef76":"6452","4a530d18":"6453","2c1888ff":"6556",ab85252c:"6595","70334ba8":"6655","6830d3a2":"6659","6721d267":"6718",ee067fe3:"6753",cfc76383:"6754",a015cb1d:"6813","202a51b9":"6885","9fb62b98":"6955","11b7fc92":"7050",decc316d:"7066","26f4e834":"7124","5e56b9d4":"7266","5625bc05":"7318",ce260bbc:"7340",d70a1ef5:"7382","57e75615":"7502",f8f7b6b2:"7523",cb2c0fed:"7531",reactPlayerDailyMotion:"7596",reactPlayerPreview:"7664","31bfc0a5":"7698","839511b6":"7714","1a4e3797":"7920",reactPlayerWistia:"8055","4ad67257":"8301","286d8836":"8313","5a6432d3":"8371",aa5c46a8:"8423",d4b4a7ff:"8447","0b387740":"8467",fa540bb9:"8522","56aa118c":"8669","6ebf937c":"8742","3925c87d":"8756",b91521d0:"8778",ba4cac81:"8819",reactPlayerVidyard:"8888",debbc54f:"8930",cf946124:"8931","78eb1577":"8993","95fa971a":"9048",e4b21b58:"9134","49f67c63":"9304",ab8b636d:"9329","453c9f5d":"9360",b3a3f3b1:"9390",ec0e7283:"9432","61e1445b":"9486","1be78505":"9514",fe7415f5:"9548","7dd3f6c4":"9681","14eb3368":"9817",df203c0f:"9924","52900d40":"9962",a32cdaeb:"9965","284a1a9e":"9980"}[e]||e,t.p+t.u(e)},(()=>{var e={1303:0,532:0};t.f.j=(a,c)=>{var f=t.o(e,a)?e[a]:void 0;if(0!==f)if(f)c.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise(((c,d)=>f=e[a]=[c,d]));c.push(f[2]=d);var b=t.p+t.u(a),r=new Error;t.l(b,(c=>{if(t.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var d=c&&("load"===c.type?"missing":c.type),b=c&&c.target&&c.target.src;r.message="Loading chunk "+a+" failed.\n("+d+": "+b+")",r.name="ChunkLoadError",r.type=d,r.request=b,f[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,c)=>{var f,d,b=c[0],r=c[1],o=c[2],l=0;if(b.some((a=>0!==e[a]))){for(f in r)t.o(r,f)&&(t.m[f]=r[f]);if(o)var n=o(t)}for(a&&a(c);l<b.length;l++)d=b[l],t.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return t.O(n)},c=self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();