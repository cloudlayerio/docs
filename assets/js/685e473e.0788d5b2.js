"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[128],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(h,a(a({ref:t},s),{},{components:n})):o.createElement(h,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3842:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],c={sidebar_position:1.5,slug:"/account"},l="Account",u={unversionedId:"account",id:"account",isDocsHomePage:!1,title:"Account",description:"Get information about your account, such as usage, credits, number of documents created, etc.",source:"@site/docs/api-reference/account.md",sourceDirName:".",slug:"/account",permalink:"/account",editUrl:"https://github.com/cloudlayerio/docs/edit/main/docs/api-reference/account.md",tags:[],version:"current",sidebarPosition:1.5,frontMatter:{sidebar_position:1.5,slug:"/account"},sidebar:"tutorialSidebar",previous:{title:"Html to PDF",permalink:"/html-to-pdf"},next:{title:"Assets",permalink:"/assets"}},s=[{value:"Endpoint",id:"endpoint",children:[{value:"GET /account",id:"get-account",children:[],level:3}],level:2},{value:"Account Response",id:"account-response",children:[{value:"<code>calls</code>",id:"calls",children:[],level:3},{value:"<code>subscription</code>",id:"subscription",children:[],level:3},{value:"<code>bytesTotal</code>",id:"bytestotal",children:[],level:3},{value:"<code>bytesLimit</code>",id:"byteslimit",children:[],level:3},{value:"<code>computeTimeTotal</code>",id:"computetimetotal",children:[],level:3},{value:"<code>computeTimeLimit</code>",id:"computetimelimit",children:[],level:3},{value:"<code>subType</code>",id:"subtype",children:[],level:3},{value:"<code>uid</code>",id:"uid",children:[],level:3},{value:"<code>credit</code>",id:"credit",children:[],level:3},{value:"<code>subActive</code>",id:"subactive",children:[],level:3},{value:"<code>successJobs</code>",id:"successjobs",children:[],level:3},{value:"<code>errorJobs</code>",id:"errorjobs",children:[],level:3},{value:"<code>totalJobs</code>",id:"totaljobs",children:[],level:3}],level:2}],d={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"account"},"Account"),(0,r.kt)("p",null,"Get information about your account, such as usage, credits, number of documents created, etc."),(0,r.kt)("h2",{id:"endpoint"},"Endpoint"),(0,r.kt)("h3",{id:"get-account"},"GET /account"),(0,r.kt)("p",null,"Returns a JSON object containing the information about your account. Uses any API Key on your account for authentication."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="GET /account"',title:'"GET','/account"':!0},"https://api.cloudlayer.io/v1/account\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure your ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type")," gets set to ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json"),", and that you have placed your ",(0,r.kt)("inlineCode",{parentName:"p"},"X-API-Key")," header with your API Key from your account."))),(0,r.kt)("h2",{id:"account-response"},"Account Response"),(0,r.kt)("p",null,"The account values for each account response. If an error occurs the appropriate ",(0,r.kt)("a",{parentName:"p",href:"/#http-status-codes"},"HTTP Status Code")," will be returned."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"An account usage threshold email gets sent to you if your nearing one of your limits or credit is low."))),(0,r.kt)("h3",{id:"calls"},(0,r.kt)("inlineCode",{parentName:"h3"},"calls")),(0,r.kt)("p",null,"The total number of api calls used."),(0,r.kt)("h3",{id:"subscription"},(0,r.kt)("inlineCode",{parentName:"h3"},"subscription")),(0,r.kt)("p",null,"The name of the current subscription."),(0,r.kt)("h3",{id:"bytestotal"},(0,r.kt)("inlineCode",{parentName:"h3"},"bytesTotal")),(0,r.kt)("p",null,"The total number of bytes processed."),(0,r.kt)("h3",{id:"byteslimit"},(0,r.kt)("inlineCode",{parentName:"h3"},"bytesLimit")),(0,r.kt)("p",null,"Current accounts byte limit, if exceeded you will get errors. If empty, the account does not have a limit."),(0,r.kt)("h3",{id:"computetimetotal"},(0,r.kt)("inlineCode",{parentName:"h3"},"computeTimeTotal")),(0,r.kt)("p",null,"The total number of seconds spent on compute cycles."),(0,r.kt)("h3",{id:"computetimelimit"},(0,r.kt)("inlineCode",{parentName:"h3"},"computeTimeLimit")),(0,r.kt)("p",null,"Current accounts compute time limit, if exceeded you will get errors. If empty, the account does not have a limit."),(0,r.kt)("h3",{id:"subtype"},(0,r.kt)("inlineCode",{parentName:"h3"},"subType")),(0,r.kt)("p",null,"The current type of subscription. Either ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"usage"),"."),(0,r.kt)("h3",{id:"uid"},(0,r.kt)("inlineCode",{parentName:"h3"},"uid")),(0,r.kt)("p",null,"The account owners user id."),(0,r.kt)("h3",{id:"credit"},(0,r.kt)("inlineCode",{parentName:"h3"},"credit")),(0,r.kt)("p",null,"If account type is ",(0,r.kt)("inlineCode",{parentName:"p"},"usage")," this is the amount of ",(0,r.kt)("inlineCode",{parentName:"p"},"credit")," remaining."),(0,r.kt)("h3",{id:"subactive"},(0,r.kt)("inlineCode",{parentName:"h3"},"subActive")),(0,r.kt)("p",null,"If the account is ",(0,r.kt)("inlineCode",{parentName:"p"},"active")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"inactive"),".  If your account is inactive, you will need to contact support or update billing."),(0,r.kt)("h3",{id:"successjobs"},(0,r.kt)("inlineCode",{parentName:"h3"},"successJobs")),(0,r.kt)("p",null,"Number of successful jobs for the lifetime of the account."),(0,r.kt)("h3",{id:"errorjobs"},(0,r.kt)("inlineCode",{parentName:"h3"},"errorJobs")),(0,r.kt)("p",null,"Number of jobs in error for the lifetime of the account."),(0,r.kt)("h3",{id:"totaljobs"},(0,r.kt)("inlineCode",{parentName:"h3"},"totalJobs")),(0,r.kt)("p",null,"Total number of jobs for the lifetime of the account."))}p.isMDXComponent=!0}}]);