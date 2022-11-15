"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5559],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>s});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),u=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=u(a),s=n,f=d["".concat(p,".").concat(s)]||d[s]||c[s]||r;return a?l.createElement(f,o(o({ref:t},m),{},{components:a})):l.createElement(f,o({ref:t},m))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7583:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var l=a(7462),n=(a(7294),a(3905));const r={sidebar_position:1,slug:"/templating"},o="Templating",i={unversionedId:"templating",id:"templating",title:"Templating",description:"Templating | Docs - Document Generation Service",source:"@site/docs/api-reference/templating.mdx",sourceDirName:".",slug:"/templating",permalink:"/templating",draft:!1,editUrl:"https://github.com/cloudlayerio/docs/edit/main/docs/api-reference/templating.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/templating"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/api"},next:{title:"Introduction",permalink:"/image"}},p={},u=[{value:"Auto Calculation",id:"auto-calculation",level:2},{value:"Enabled/Disable",id:"enableddisable",level:3},{value:"Auto Calculated fields",id:"auto-calculated-fields",level:3},{value:"Template Types",id:"template-types",level:2},{value:"Predefined Templates",id:"predefined-templates",level:3},{value:"Custom Templates",id:"custom-templates",level:3},{value:"Functions",id:"functions",level:2},{value:"<code>formatCurrency</code>",id:"formatcurrency",level:3},{value:"locale",id:"formatCurrency-locale",level:4},{value:"currency",id:"formatCurrency-currency",level:4},{value:"amount",id:"formatCurrency-amount",level:4},{value:"<code>formatDateTime</code>",id:"formatdatetime",level:3},{value:"<code>locale</code>",id:"formatDateTime-locale",level:4},{value:"<code>dateTime</code>",id:"formatDateTime-dateTime",level:4}],m={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"templating"},"Templating"),(0,n.kt)("head",null,(0,n.kt)("title",null,"Templating | Docs - Document Generation Service"),(0,n.kt)("meta",{name:"description",content:"cloudlayer.io lets you use predefined or custom-built PDF Templates and Image Templates for our PDF Generation and Image Generation services."})),(0,n.kt)("p",null,"We have a powerful templating system which allows you to use pre-defined templates that you can browse in our ",(0,n.kt)("a",{href:"https://cloudlayer.io/templates/pdf",target:"_blank",rel:"noopener"},"PDF template gallery")," or the ",(0,n.kt)("a",{href:"https://cloudlayer.io/templates/image"},"Image template gallery"),". Once you have found a template to use, you can pass in the ",(0,n.kt)("a",{parentName:"p",href:"/template-to-pdf#templateid"},(0,n.kt)("inlineCode",{parentName:"a"},"templateId"))," and your ",(0,n.kt)("a",{parentName:"p",href:"/template-to-pdf#data"},(0,n.kt)("inlineCode",{parentName:"a"},"data")),", and we handle the rest."),(0,n.kt)("p",null,"In addition, we also support custom templating where you can create your own templates."),(0,n.kt)("p",null,"All templates have the following features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Powerful Nunjucks Templating"),(0,n.kt)("li",{parentName:"ul"},"Fast and Accurate Generation"),(0,n.kt)("li",{parentName:"ul"},"Stored in our global edge-based CDN"),(0,n.kt)("li",{parentName:"ul"},"Thumbnail Generation (optional)"),(0,n.kt)("li",{parentName:"ul"},"Multicultural Support such as currency, time, full UTF-8"),(0,n.kt)("li",{parentName:"ul"},"Auto calculations, if available in the template"),(0,n.kt)("li",{parentName:"ul"},"Local caching for high-speed rendering"),(0,n.kt)("li",{parentName:"ul"},"Built-in Tailwind CSS support"),(0,n.kt)("li",{parentName:"ul"},"All PDF Templates support smart page breaking for printing")),(0,n.kt)("h2",{id:"auto-calculation"},"Auto Calculation"),(0,n.kt)("p",null,"If you use a predefined template from the gallery that supports auto calculations, you have a couple of options to control the behavior."),(0,n.kt)("h3",{id:"enableddisable"},"Enabled/Disable"),(0,n.kt)("p",null,"To enable or disable, you need to set the ",(0,n.kt)("inlineCode",{parentName:"p"},"__auto_calculate")," field in the data provided to either ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Disabling auto-calculation can be helpful if you do the calculations on your end and do not want the template to do them.")),(0,n.kt)("h3",{id:"auto-calculated-fields"},"Auto Calculated fields"),(0,n.kt)("p",null,"The values for auto-calculated fields will be any field marked as ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," in the sample data provided. If you set the field ",(0,n.kt)("inlineCode",{parentName:"p"},"__auto_calculate: false")," in the data, it will simply pass the data supplied to it."),(0,n.kt)("h2",{id:"template-types"},"Template Types"),(0,n.kt)("p",null,"Two types of templates are available: predefined templates you choose from the template gallery or custom templates which are templates that you create yourself using the templating system."),(0,n.kt)("h3",{id:"predefined-templates"},"Predefined Templates"),(0,n.kt)("p",null,"The most accessible and convenient approach is to use one of our professional and beautiful-looking predefined templates. Expertly created and curated to offer the best solution."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Choose a ",(0,n.kt)("a",{href:"https://cloudlayer.io/templates/pdf",target:"_blank",rel:"noopener"}," PDF Template")," or ",(0,n.kt)("a",{href:"https://cloudlayer.io/templates/image",target:"_blank",rel:"noopener"},"Image Template")," from the template gallery."),(0,n.kt)("li",{parentName:"ol"},"Use the JSON example code offered to you in the template gallery or copy the ",(0,n.kt)("inlineCode",{parentName:"li"},"templateId")," out of it and craft your request."),(0,n.kt)("li",{parentName:"ol"},"In the JSON example code, sample data is used as an example to understand what data elements are supported by the template.")),(0,n.kt)("p",null,"Read ",(0,n.kt)("a",{parentName:"p",href:"/template-to-pdf#predefined-template"},"more about Predefined Templates")," in the API documentation."),(0,n.kt)("h3",{id:"custom-templates"},"Custom Templates"),(0,n.kt)("p",null,"If you need more flexibility than Predefined template, you can create your own templates using the Nunjucks syntax and pass in your data."),(0,n.kt)("p",null,"Read ",(0,n.kt)("a",{parentName:"p",href:"/template-to-pdf#custom-template"},"more about Custom Templates")," in the API documentation."),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("p",null,"We offer several functions that we have extended Nunjucks with to offer greater flexibility around multicultural support currencies, times, etc."),(0,n.kt)("h3",{id:"formatcurrency"},(0,n.kt)("inlineCode",{parentName:"h3"},"formatCurrency")),(0,n.kt)("p",null,"Formats the Currency string into the cultural variant."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"formatCurrency(locale, currency, amount);\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#formatCurrency-locale"},(0,n.kt)("inlineCode",{parentName:"a"},"locale"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#formatCurrency-currency"},(0,n.kt)("inlineCode",{parentName:"a"},"currency"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#formatCurrency-amount"},(0,n.kt)("inlineCode",{parentName:"a"},"amount")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Example - Template"',title:'"Example',"-":!0,'Template"':!0},"<html>\n  <body>\n    {{formatCurrency(locale, currency, amount)}}\n  </body>\n</html>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example - Data"',title:'"Example',"-":!0,'Data"':!0},'{\n  "locale": "en-GB",\n  "currency": "EUR",\n  "amount": 150.1\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Result"',title:'"Result"'},"\u20ac150.10\n")),(0,n.kt)("h4",{id:"formatCurrency-locale"},"locale"),(0,n.kt)("p",null,"Unicode locale identifier. For ",(0,n.kt)("a",{href:"https://www.w3.org/International/articles/language-tags/#region",target:"_blank",rel:"noopener"},"more info on locale identifiers.")),(0,n.kt)("h4",{id:"formatCurrency-currency"},"currency"),(0,n.kt)("p",null,"The currency format identifier. For ",(0,n.kt)("a",{href:"https://source.chromium.org/chromium/chromium/deps/icu.git/+/faee8bc70570192d82d2978a71e2a615788597d1:source/data/misc/currencyNumericCodes.txt",target:"_blank",rel:"noopener"},"a list of support currencies"),"."),(0,n.kt)("h4",{id:"formatCurrency-amount"},"amount"),(0,n.kt)("p",null,"The amount in whole numbers or decimal notation."),(0,n.kt)("h3",{id:"formatdatetime"},(0,n.kt)("inlineCode",{parentName:"h3"},"formatDateTime")),(0,n.kt)("p",null,"Formats the DateTime string into the cultural variant."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"formatDateTime(locale, dateTime);\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#formatDateTime-locale"},(0,n.kt)("inlineCode",{parentName:"a"},"locale"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#formatDateTime-dateTime"},(0,n.kt)("inlineCode",{parentName:"a"},"dateTime")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Example - Template"',title:'"Example',"-":!0,'Template"':!0},"<html>\n  <body>\n    {{formatDateTime(locale, invoice_date)}}\n  </body>\n</html>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example - Data"',title:'"Example',"-":!0,'Data"':!0},'{\n  "locale": "fr_FR",\n  "invoice_date": "27 March, 2020"\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Result"',title:'"Result"'},"27 mars 2020\n")),(0,n.kt)("h4",{id:"formatDateTime-locale"},(0,n.kt)("inlineCode",{parentName:"h4"},"locale")),(0,n.kt)("p",null,"Unicode locale identifier. For ",(0,n.kt)("a",{href:"https://www.w3.org/International/articles/language-tags/#region",target:"_blank",rel:"noopener"},"more info on locale identifiers.")),(0,n.kt)("h4",{id:"formatDateTime-dateTime"},(0,n.kt)("inlineCode",{parentName:"h4"},"dateTime")),(0,n.kt)("p",null,"The string representation of the date."))}c.isMDXComponent=!0}}]);