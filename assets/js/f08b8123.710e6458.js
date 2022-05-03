"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[821],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6901:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:1,slug:"/",title:"Introduction"},l="Examples",u={unversionedId:"intro",id:"intro",title:"Introduction",description:"To help you understand and make it easier to start integrating with our service, we have compiled a set of examples to get you going.",source:"@site/docs/examples/intro.md",sourceDirName:".",slug:"/",permalink:"/examples/",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/",title:"Introduction"},sidebar:"tutorialSidebar",next:{title:"Authentication Examples",permalink:"/examples/authentication"}},c={},p=[{value:"Authentication",id:"authentication",level:2},{value:"HTML Examples",id:"html-examples",level:2},{value:"Url Examples",id:"url-examples",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"examples"},"Examples"),(0,a.kt)("p",null,"To help you understand and make it easier to start integrating with our service, we have compiled a set of examples to get you going."),(0,a.kt)("p",null,"Take a look at each section to get an idea of where you would like to start."),(0,a.kt)("h2",{id:"authentication"},(0,a.kt)("a",{parentName:"h2",href:"examples/authentication/"},"Authentication")),(0,a.kt)("p",null,"We support two methods of authenticating your site, basic HTTP authentication with username/password and cookies. In this section, we cover examples of using both of these methods."),(0,a.kt)("h2",{id:"html-examples"},(0,a.kt)("a",{parentName:"h2",href:"examples/html"},"HTML Examples")),(0,a.kt)("p",null,"Passing in HTML is the easiest, most flexible, and fastest method for generating a document. But, unfortunately, it can be the most confusing and technically challenging. In this section we provide some examples to make it easier to begin using this powerful feature."),(0,a.kt)("h2",{id:"url-examples"},(0,a.kt)("a",{parentName:"h2",href:"examples/url"},"Url Examples")),(0,a.kt)("p",null,"Using a URL, you can convert a website that is accessible on the internet. In this section, we demonstrate how to use a URL to generate a pdf and an image. If you require authentication to access your URL, see the ",(0,a.kt)("a",{parentName:"p",href:"examples/authentication/"},"Authentication")," section for examples."))}f.isMDXComponent=!0}}]);