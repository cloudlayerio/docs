"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[903],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6978:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],l={sidebar_position:1,title:".NET SDK C#"},s=void 0,u={unversionedId:"net-sdk-csharp",id:"net-sdk-csharp",title:".NET SDK C#",description:"cloudlayerio-dotnet is a .NET 5 library. It gets used to automate and manipulate content such as PDF files and images. Using this library and cloudlayer.io service, you can convert HTML to PDF, HTML to Images, URLs to PDFs, URLs to images, and more.",source:"@site/docs/sdks/net-sdk-csharp.mdx",sourceDirName:".",slug:"/net-sdk-csharp",permalink:"/sdks/net-sdk-csharp",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:".NET SDK C#"},sidebar:"tutorialSidebar",previous:{title:"SDKs",permalink:"/sdks/"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"Visual Studio",id:"visual-studio",level:3},{value:"JetBrains Rider",id:"jetbrains-rider",level:3},{value:"Other",id:"other",level:3},{value:"Setup",id:"setup",level:2},{value:"Get your API Key",id:"get-your-api-key",level:3},{value:"Usage",id:"usage",level:2},{value:"Initialize the Manager",id:"initialize-the-manager",level:3},{value:"Convert URL to PDF",id:"convert-url-to-pdf",level:3},{value:"Save PDF to Local Storage",id:"save-pdf-to-local-storage",level:3},{value:"Passing in more options",id:"passing-in-more-options",level:3},{value:"Url to Image With Options",id:"url-to-image-with-options",level:3},{value:"Advanced Options",id:"advanced-options",level:3},{value:"Source Code",id:"source-code",level:2}],d={toc:c};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{href:"https://www.nuget.org/packages/cloudlayerio-dotnet/"},(0,r.kt)("img",{src:"https://buildstats.info/nuget/cloudlayerio-dotnet"})),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cloudlayerio-dotnet")," is a ",(0,r.kt)("strong",{parentName:"p"},".NET 5")," library. It gets used to automate and manipulate content such as PDF files and images. Using this library and cloudlayer.io service, you can convert HTML to PDF, HTML to Images, URLs to PDFs, URLs to images, and more."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cloudlayerio-dotnet")," library is bundled in a NuGet Package."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/cloudlayerio-dotnet/"},"NuGet Package"))),(0,r.kt)("h3",{id:"visual-studio"},"Visual Studio"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-powershell"},"console")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"Install-Package cloudlayerio-dotnet")," in the console."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio"},"NuGet Package Manager")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Search this package ",(0,r.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/cloudlayerio-dotnet"},"NuGet Package")," and install it.")))),(0,r.kt)("h3",{id:"jetbrains-rider"},"JetBrains Rider"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/help/rider/Using_NuGet.html#"},"https://www.jetbrains.com/help/rider/Using_NuGet.html#"))),(0,r.kt)("h3",{id:"other"},"Other"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/nuget/consume-packages/overview-and-workflow#ways-to-install-a-nuget-package"},"https://docs.microsoft.com/en-us/nuget/consume-packages/overview-and-workflow#ways-to-install-a-nuget-package"))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"get-your-api-key"},"Get your API Key"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To begin, you will need an API Key."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://cloudlayer.io/auth/register"},"Create a free account")," at cloudlayer.io, giving you a chunk of free API credits to use for testing.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"initialize-the-manager"},"Initialize the Manager"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var manager = new CloudlayerioManager("<YOUR-API-KEY>");\n')),(0,r.kt)("h3",{id:"convert-url-to-pdf"},"Convert URL to PDF"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var rsp = await manager.UrlToPdf(new UrlToPdf\n{\n    Url = "http://google.com"\n});\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rsp")," is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cloudlayerio/cloudlayerio-dotnet/blob/main/cloudlayerio-dotnet/responses/ReturnResponse.cs"},"ReturnResponse")," type and will contain the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream")," and several other properties, along with a helper method ",(0,r.kt)("inlineCode",{parentName:"p"},"SaveToFilesystem"),". This method is a convenient method to make it easier to save the stream results to local storage."),(0,r.kt)("h3",{id:"save-pdf-to-local-storage"},"Save PDF to Local Storage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'await rsp.SaveToFileSystem("C:\\myfile.pdf");\n')),(0,r.kt)("p",null,"You, of course, can access the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream")," property yourself and write your storage code that suits your needs."),(0,r.kt)("h3",{id:"passing-in-more-options"},"Passing in more options"),(0,r.kt)("p",null,"In the previous example, we didn't pass in any optional parameters and left all the defaults. Take a look at all the options by looking at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cloudlayerio/cloudlayerio-dotnet/tree/main/cloudlayerio-dotnet/requests"},"requests folder"),", which gives you a good idea of the available options for each endpoint."),(0,r.kt)("h3",{id:"url-to-image-with-options"},"Url to Image With Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var rsp = await manager.UrlToImage(new UrlToImage {\n    Url = "http://google.com",\n    AutoScroll = true,\n    ViewPort = new ViewPort {\n        Height = 2560,\n        Width = 1440,\n        DeviceScaleFactor = 2\n    }\n});\n\nawait rsp.SaveToFilesystem("c:\\google.png");\n')),(0,r.kt)("h3",{id:"advanced-options"},"Advanced Options"),(0,r.kt)("p",null,"We have made it easy to pass in the more advanced options by creating types that correctly serialize, making it significantly easier for you to write the code and not worry about anything else."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var rsp = new manager.UrlToPdf(new UrlToPdf {\n    Url = "https://google.com",\n    Margin = new Margin\n    {\n        Bottom = new LayoutDimension(UnitTypes.Pixels, 100),\n        Top = new LayoutDimension(UnitTypes.Pixels, 100),\n        Left = new LayoutDimension(UnitTypes.Pixels, 100),\n        Right = new LayoutDimension(UnitTypes.Pixels, 100)\n    },\n    FooterTemplate = new HeaderFooterTemplate {\n        Selector = "#myDiv",\n        Style = new Dictionary<string, string>\n        {\n            ["padding-bottom"] = "10px",\n            ["height"] = "40px"\n        },\n        ImageStyle = new Dictionary<string, string>\n        {\n            ["padding"] = "20px",\n            ["border"] = "thick double red"\n        }\n    }\n});\n')),(0,r.kt)("p",null,"That's just an example of adding a bunch of options. For more information on what each option does, you can look at our ",(0,r.kt)("a",{parentName:"p",href:"https://cloudlayer.io/docs"},"docs")," or look at the source code as it's heavily commented on what each property does and how to use it. It will also show up as IntelliSense info as you use the properties."),(0,r.kt)("h2",{id:"source-code"},"Source Code"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cloudlayerio/cloudlayerio-dotnet"},"source code")," for the SDK is available on GitHub."))}m.isMDXComponent=!0}}]);