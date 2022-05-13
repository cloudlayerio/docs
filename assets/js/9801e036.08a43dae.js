"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2334],{244:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=n(512),s=["components"],l={sidebar_position:1,slug:"/api"},d="Introduction",u={unversionedId:"intro",id:"intro",title:"Introduction",description:"cloudlayer.io is a service that lets you generate PDFs and Images from a Url or Html. In addition, we offer conversion and manipulation services to convert a document to another format, such as a Word Document to Html.",source:"@site/docs/api-reference/intro.mdx",sourceDirName:".",slug:"/api",permalink:"/api",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/api"},sidebar:"tutorialSidebar",next:{title:"Introduction",permalink:"/image"}},p={},c=[{value:"Authentication",id:"authentication",level:2},{value:"Using Your API Key",id:"using-your-api-key",level:2},{value:"Make a Test Request",id:"make-a-test-request",level:2},{value:"HTTP Status Codes",id:"http-status-codes",level:2},{value:"Webhooks",id:"webhooks",level:2},{value:"Testing Webhooks",id:"testing-webhooks",level:3},{value:"Async &amp; Sync",id:"async--sync",level:2},{value:"v1 Endpoints",id:"v1-endpoints",level:3},{value:"v2 Endpoints",id:"v2-endpoints",level:3}],m={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"cloudlayer.io is a service that lets you generate PDFs and Images from a Url or Html. In addition, we offer conversion and manipulation services to convert a document to another format, such as a Word Document to Html."),(0,i.kt)("p",null,"In simple steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://app.cloudlayer.io/auth/sign-up"},"Create")," an account, or ",(0,i.kt)("a",{parentName:"li",href:"https://app.cloudlayer.io/auth/sign-in"},"login"),"."),(0,i.kt)("li",{parentName:"ol"},"Get your API Key from the Dashboard."),(0,i.kt)("li",{parentName:"ol"},"Find the API Endpoint you want to use."),(0,i.kt)("li",{parentName:"ol"},"Call the API using your API Key.")),(0,i.kt)(r.y8,{title:"API Base URL - v2",mdxType:"BaseUrlCodeBlock"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There are some important but slight differences between v1 and v2. In addition, some default behaviors have changed. If you are currently using v1, please read about the changes in the changelog before switching to v2."))),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"cloudlayer.io authenticates your API requests using your account's API keys. If you don't include your key when making an API request or use an incorrect one, a 401 Unauthorized response gets returned."),(0,i.kt)("p",null,"To obtain your API Key, you will need to log into your account. Go to the API Management tab, and by default, a single API Key gets generated for you. Up to 5 API Keys are allowed at any given time."),(0,i.kt)("p",null,"Each API request will record the API Key used for that request, which can help you secure your keys and track their usage if you're using them from multiple locations."),(0,i.kt)("h2",{id:"using-your-api-key"},"Using Your API Key"),(0,i.kt)("p",null,"The API Key needs to get added to the header of each request. The name of the header is ",(0,i.kt)("inlineCode",{parentName:"p"},"X-API-Key")," and the value will be the key which begins with ",(0,i.kt)("inlineCode",{parentName:"p"},"cl-"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="API Key Example"',title:'"API',Key:!0,'Example"':!0},"X-API-Key: <YOUR-API-KEY>\n")),(0,i.kt)("h2",{id:"make-a-test-request"},"Make a Test Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl --request GET \\\n  --url https://api.cloudlayer.io/v1/getStatus \\\n  --header 'x-api-key: <YOUR-API-KEY>'\n")),(0,i.kt)("p",null,"If everything worked correctly, you should get the following JSON response back."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "status": "ok" }\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Requests against informational endpoints such as this one do not count against your API Credits, but they follow the API Key rules with credit remaining and rate limits, so they act as a good test."))),(0,i.kt)("h2",{id:"http-status-codes"},"HTTP Status Codes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Code"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"200")),(0,i.kt)("td",{parentName:"tr",align:"left"},"OK")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"201")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Received when using the synchronous API call and successfully getting back a result.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"202")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Received when using the asynchronous API call and successfully getting back a result.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"400")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Bad request. Such as malformed JSON in the request, missing parameters, etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"401")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unauthorized. Incorrect or revoked API Key or your account is delinquent and requires payment.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"404")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Not found. The endpoint path you are using is incorrect.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"429")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Too many requests. You have exceeded your request rate and need to slow your requests down.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"500")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Internal Server Error. An exception occurred while processing the request. Try it again or adjust the parameters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"503")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Service Unavailable. Our service is down or experiencing trouble. Contact support if you continue to receive this status code.")))),(0,i.kt)("h2",{id:"webhooks"},"Webhooks"),(0,i.kt)("p",null,"A webhook is an external URL endpoint that can be sent data when a jobs status has changed to ",(0,i.kt)("inlineCode",{parentName:"p"},"success")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"error"),"."),(0,i.kt)("p",null,"Webhooks are especially useful when using async calls, you can send many async calls and then have your external service receive the webhook calls. To keep it simple all webhook calls follow the exact same format of the ",(0,i.kt)("a",{parentName:"p",href:"/jobs#job-response"},"job response"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"Webhook",Webhook:!0},'{\n  "webhook": "https://<your_webhook_url>"\n}\n')),(0,i.kt)("h3",{id:"testing-webhooks"},"Testing Webhooks"),(0,i.kt)("p",null,"An easy way to test a webhook is to use a service like ",(0,i.kt)("a",{parentName:"p",href:"https://webhook.site"},"Webook.Site")," (not affiliated)."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create an endpoint on Webhook.Site by visiting, you will get a unique workspace generated."),(0,i.kt)("li",{parentName:"ol"},"Copy the ",(0,i.kt)("inlineCode",{parentName:"li"},"Your unique URL")," using the ",(0,i.kt)("inlineCode",{parentName:"li"},"Copy to clipboard")," button."),(0,i.kt)("li",{parentName:"ol"},"In your request add the ",(0,i.kt)("inlineCode",{parentName:"li"},"webhook")," parameter with this url as the value."),(0,i.kt)("li",{parentName:"ol"},"Submit the job."),(0,i.kt)("li",{parentName:"ol"},"When the job status changes to either ",(0,i.kt)("inlineCode",{parentName:"li"},"success")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"error")," the webhook will receive a response.")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Webhooks must be https endpoints."))),(0,i.kt)("h2",{id:"async--sync"},"Async & Sync"),(0,i.kt)("p",null,"All calls made to the ",(0,i.kt)("inlineCode",{parentName:"p"},"v1")," API are synchronous by default. In ",(0,i.kt)("inlineCode",{parentName:"p"},"v2")," endpoints, all calls are asynchronous by default."),(0,i.kt)("h3",{id:"v1-endpoints"},"v1 Endpoints"),(0,i.kt)("p",null,"If you're using the ",(0,i.kt)("inlineCode",{parentName:"p"},"v1")," endpoint and want to use asynchronous calls, you can pass the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"async: true"),", which will force asynchronous calls."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Use Asynchronous Calls in v1 Endpoint"',title:'"Use',Asynchronous:!0,Calls:!0,in:!0,v1:!0,'Endpoint"':!0},'{\n  "async": true\n}\n')),(0,i.kt)("h3",{id:"v2-endpoints"},"v2 Endpoints"),(0,i.kt)("p",null,"If your using the ",(0,i.kt)("inlineCode",{parentName:"p"},"v2")," endpoint and want to use synchronous calls you can pass in ",(0,i.kt)("inlineCode",{parentName:"p"},"async: false")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Use Synchrounous Calls in v2 Endpoints"',title:'"Use',Synchrounous:!0,Calls:!0,in:!0,v2:!0,'Endpoints"':!0},'{\n  "async": false\n}\n')))}h.isMDXComponent=!0},512:function(e,t,n){n.d(t,{y8:function(){return r}});n(7462),n(3366),n(7294);var a=n(3905),o=n(5710),i="https://api.cloudlayer.io/v2",r=function(e){return(0,a.kt)(o.Z,{className:"language-html",title:e.title,mdxType:"CodeBlock"},""+i+(e.path||""))}}}]);