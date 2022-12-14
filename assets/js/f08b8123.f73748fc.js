"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,slug:"/",title:"Introduction"},i=void 0,s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Examples | Docs - Document Generation Service",source:"@site/docs/examples/intro.md",sourceDirName:".",slug:"/",permalink:"/examples/",draft:!1,editUrl:"https://github.com/cloudlayerio/docs/edit/main/docs/examples/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/",title:"Introduction"},sidebar:"tutorialSidebar",next:{title:"Authentication Examples",permalink:"/examples/authentication"}},l={},c=[{value:"Authentication",id:"authentication",level:2},{value:"HTML Examples",id:"html-examples",level:2},{value:"Url Examples",id:"url-examples",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Examples | Docs - Document Generation Service"),(0,a.kt)("meta",{name:"description",content:"Here are some examples to get you started using the cloudlayer.io document generation service."})),(0,a.kt)("h1",{id:"examples"},"Examples"),(0,a.kt)("p",null,"To help you understand and make it easier to start integrating with our service, we have compiled a set of examples to get you going."),(0,a.kt)("p",null,"Take a look at each section to get an idea of where you would like to start."),(0,a.kt)("h2",{id:"authentication"},(0,a.kt)("a",{parentName:"h2",href:"examples/authentication/"},"Authentication")),(0,a.kt)("p",null,"We support two methods of authenticating your site, basic HTTP authentication with username/password and cookies. In this section, we cover examples of using both of these methods."),(0,a.kt)("h2",{id:"html-examples"},(0,a.kt)("a",{parentName:"h2",href:"examples/html"},"HTML Examples")),(0,a.kt)("p",null,"Passing in HTML is the easiest, most flexible, and fastest method for generating a document. But, unfortunately, it can be the most confusing and technically challenging. In this section we provide some examples to make it easier to begin using this powerful feature."),(0,a.kt)("h2",{id:"url-examples"},(0,a.kt)("a",{parentName:"h2",href:"examples/url"},"Url Examples")),(0,a.kt)("p",null,"Using a URL, you can convert a website that is accessible on the internet. In this section, we demonstrate how to use a URL to generate a pdf and an image. If you require authentication to access your URL, see the ",(0,a.kt)("a",{parentName:"p",href:"examples/authentication/"},"Authentication")," section for examples."))}p.isMDXComponent=!0}}]);