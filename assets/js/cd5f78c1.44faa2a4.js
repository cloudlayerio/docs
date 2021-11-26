"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[661],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2457:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},c="Url Examples",p={unversionedId:"url",id:"url",isDocsHomePage:!1,title:"Url Examples",description:"Using a URL, you can convert a website that is accessible on the internet. In this section, we demonstrate how to use a URL to generate a pdf and an image. If you require authentication to access your URL, see the Authentication section for examples.",source:"@site/docs/examples/url.mdx",sourceDirName:".",slug:"/url",permalink:"/examples/url",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Html Examples",permalink:"/examples/html"}},u=[{value:"Json Request",id:"json-request",children:[],level:2},{value:"Pdf Example",id:"pdf-example",children:[],level:2},{value:"Image Example",id:"image-example",children:[],level:2},{value:"Autoscroll",id:"autoscroll",children:[],level:2}],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"url-examples"},"Url Examples"),(0,o.kt)("p",null,"Using a URL, you can convert a website that is accessible on the internet. In this section, we demonstrate how to use a URL to generate a pdf and an image. If you require authentication to access your URL, see the ",(0,o.kt)("a",{parentName:"p",href:"authentication/"},"Authentication")," section for examples."),(0,o.kt)("h2",{id:"json-request"},"Json Request"),(0,o.kt)("p",null,"At its most basic, a URL is the only required parameter to generate a PDF or Image."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "url": "https://google.com"\n}\n')),(0,o.kt)("h2",{id:"pdf-example"},"Pdf Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="cURL - Google Pdf"',title:'"cURL',"-":!0,Google:!0,'Pdf"':!0},"curl --request POST \\\n  --url https://api.cloudlayer.io/v1/url/pdf \\\n  --header 'Content-Type: application/json' \\\n  --header 'x-api-key: <YOUR-API-KEY>' \\\n  --data '{\n    \"url\": \"https://google.com\"\n}' \\\n--output \"google.pdf\"\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Wget - Google Pdf"',title:'"Wget',"-":!0,Google:!0,'Pdf"':!0},"wget --method POST \\\n  --header 'Content-Type: application/json' \\\n  --header 'x-api-key: <YOUR-API-KEY>' \\\n  --body-data '{\"url\": \"https://google.com\"}' \\\n  - https://api.cloudlayer.io/v1/url/pdf \\\n  -O \"google.pdf\"\n")),(0,o.kt)("h2",{id:"image-example"},"Image Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="cURL - Google PNG"',title:'"cURL',"-":!0,Google:!0,'PNG"':!0},"curl --request POST \\\n  --url https://api.cloudlayer.io/v1/url/image \\\n  --header 'Content-Type: application/json' \\\n  --header 'x-api-key: <YOUR-API-KEY>' \\\n  --data '{\n    \"url\": \"https://google.com\"\n}' \\\n--output \"google.png\"\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Wget - Google PNG"',title:'"Wget',"-":!0,Google:!0,'PNG"':!0},"wget --method POST \\\n  --header 'Content-Type: application/json' \\\n  --header 'x-api-key: <YOUR-API-KEY>' \\\n  --body-data '{\"url\": \"https://google.com\"}' \\\n  - https://api.cloudlayer.io/v1/url/image \\\n  -O \"google.png\"\n")),(0,o.kt)("h2",{id:"autoscroll"},"Autoscroll"),(0,o.kt)("p",null,"Some sites have lazy loaded images and other content that is not loaded until the page scrolls past a certain point. Using autoscroll, will scroll down the page forcing the content to be loaded before performing the conversion."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Autoscroll Example"',title:'"Autoscroll','Example"':!0},"curl --request POST \\\n  --url https://api.cloudlayer.io/v1/url/image \\\n  --header 'Content-Type: application/json' \\\n  --header 'x-api-key: <YOUR-API-KEY>' \\\n  --data '{\n    \"url\": \"https://apple.com\",\n    \"autoScroll\": true\n}'\n")))}m.isMDXComponent=!0}}]);