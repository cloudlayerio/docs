"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3915],{4519:(e,t,n)=>{n.d(t,{ZP:()=>r,d$:()=>l});var a=n(7462),i=(n(7294),n(3905));const l=[{value:"Base Parameters",id:"base-parameters",level:2},{value:"<code>autoScroll</code>",id:"autoscroll",level:3},{value:"<code>delay</code>",id:"delay",level:3},{value:"<code>filename</code>",id:"filename",level:3},{value:"<code>generatePreview</code>",id:"generatepreview",level:3},{value:"<code>height</code>",id:"generatePreview-height",level:4},{value:"<code>width</code>",id:"generatePreview-width",level:4},{value:"<code>type</code>",id:"generatePreview-type",level:3},{value:"<code>maintainAspectRatio</code>",id:"generatePreview-maintainAspectRatio",level:3},{value:"<code>quality</code>",id:"generatePreview-quality",level:3},{value:"<code>height / width</code>",id:"height--width",level:3},{value:"<code>height</code>",id:"height",level:4},{value:"<code>width</code>",id:"width",level:4},{value:"<code>inline</code>",id:"inline",level:3},{value:"<code>landscape</code>",id:"landscape",level:3},{value:"<code>preferCSSPageSize</code>",id:"prefercsspagesize",level:3},{value:"<code>projectId</code>",id:"projectid",level:3},{value:"<code>height</code>",id:"viewport-height",level:4},{value:"<code>deviceScaleFactor</code>",id:"devicescalefactor",level:4},{value:"<code>isMobile</code>",id:"ismobile",level:4},{value:"<code>hasTouch</code>",id:"hastouch",level:4},{value:"<code>isLandscape</code>",id:"islandscape",level:4},{value:"<code>scale</code>",id:"scale",level:3},{value:"<code>timeout</code>",id:"timeout",level:3},{value:"<code>timeZone</code>",id:"timezone",level:3},{value:"<code>viewPort</code>",id:"viewport",level:3},{value:"<code>width</code>",id:"viewport-width",level:4},{value:"<code>waitForSelector</code>",id:"waitforselector",level:3},{value:"<code>selector</code>",id:"selector",level:4},{value:"<code>options</code>",id:"options",level:4},{value:"<code>visible</code>",id:"visible",level:4},{value:"<code>hidden</code>",id:"hidden",level:4},{value:"<code>timeout</code>",id:"timeout-1",level:4},{value:"<code>waitUntil</code>",id:"waituntil",level:3},{value:"Accepted Values",id:"accepted-values",level:4}],o={toc:l};function r(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"base-parameters"},"Base Parameters"),(0,i.kt)("p",null,"Parameters that exist on ",(0,i.kt)("strong",{parentName:"p"},"all")," services."),(0,i.kt)("h3",{id:"autoscroll"},(0,i.kt)("inlineCode",{parentName:"h3"},"autoScroll")),(0,i.kt)("p",null,"Will auto-scroll the page down to the very end. Helpful in forcing lazy-loaded content to load."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"Default: false"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "autoScroll": true }\n')),(0,i.kt)("h3",{id:"delay"},(0,i.kt)("inlineCode",{parentName:"h3"},"delay")),(0,i.kt)("p",null,"The amount of time in milliseconds to wait for the page to complete rendering before conversion."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"Default: 0ms"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "delay": 1000 }\n')),(0,i.kt)("h3",{id:"filename"},(0,i.kt)("inlineCode",{parentName:"h3"},"filename")),(0,i.kt)("p",null,"If used with the ",(0,i.kt)("inlineCode",{parentName:"p"},"inline: false"),", will set the ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Disposition")," filename so that the downloaded file will assign to this value in the user's browser. For ",(0,i.kt)("inlineCode",{parentName:"p"},"inline: true"),", it has no effect."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},'Default: ""'))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "filename": "filename.ext" }\n')),(0,i.kt)("h3",{id:"generatepreview"},(0,i.kt)("inlineCode",{parentName:"h3"},"generatePreview")),(0,i.kt)("p",null,"Generates an image preview (thumbnail) of the image or first page of the PDF document. Storage must be enabled."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"All parameters are optional, if you pass in ",(0,i.kt)("inlineCode",{parentName:"em"},"true")," to generatePreview instead of options it will use defaults.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "width": "600",\n  "height": "776",\n  "type": "webp",\n  "quality": "high"\n}\n')),(0,i.kt)("h4",{id:"generatePreview-height"},(0,i.kt)("inlineCode",{parentName:"h4"},"height")),(0,i.kt)("p",null,"Height of the image to generate for the preview"),(0,i.kt)("p",null,"number ",(0,i.kt)("em",{parentName:"p"},"Optional - Either width or height must be provided. If maintainAspectRatio is being used, you may specify either one or the other.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},' "height": "600"\n')),(0,i.kt)("h4",{id:"generatePreview-width"},(0,i.kt)("inlineCode",{parentName:"h4"},"width")),(0,i.kt)("p",null,"Width of the image to generate for the preview"),(0,i.kt)("p",null,"number ",(0,i.kt)("em",{parentName:"p"},"Optional - Either width or height must be provided. If maintainAspectRatio is being used, you may specify either one or the other.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "width": "300"\n}\n')),(0,i.kt)("h3",{id:"generatePreview-type"},(0,i.kt)("inlineCode",{parentName:"h3"},"type")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Optional")),(0,i.kt)("p",null,"string ",(0,i.kt)("em",{parentName:"p"},'Default: "webp"')),(0,i.kt)("p",null,"Type of image to generate for the preview."),(0,i.kt)("p",null,"Must be one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"png")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jpg")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"webp"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "webp"\n}\n')),(0,i.kt)("h3",{id:"generatePreview-maintainAspectRatio"},(0,i.kt)("inlineCode",{parentName:"h3"},"maintainAspectRatio")),(0,i.kt)("p",null,"boolean ",(0,i.kt)("em",{parentName:"p"},"Default: true")),(0,i.kt)("p",null,"Either ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," to indicate if the image generated should maintain aspect ratio based on width/height."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Can result in a blurry and skewed image if the aspect ratio is not maintained")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "maintainAspectRatio": true\n}\n')),(0,i.kt)("h3",{id:"generatePreview-quality"},(0,i.kt)("inlineCode",{parentName:"h3"},"quality")),(0,i.kt)("p",null,"string ",(0,i.kt)("em",{parentName:"p"},'Default: ""')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Required")),(0,i.kt)("p",null,"Specifies the quality of the generated preview, has no default and must be specified if defining custom generatePreview options."),(0,i.kt)("p",null,"Must be one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"low")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"medium")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"high"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "quality": "medium"\n}\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Generating a preview can add significant processing time depending on the quality and size of the preview image and PDF document. It's important to balance quality and rendering time.")),(0,i.kt)("h3",{id:"height--width"},(0,i.kt)("inlineCode",{parentName:"h3"},"height / width")),(0,i.kt)("h4",{id:"height"},(0,i.kt)("inlineCode",{parentName:"h4"},"height")),(0,i.kt)("p",null,"Paper height. Must be supported type of ",(0,i.kt)("a",{parentName:"p",href:"#units"},"units")," or number."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string|number"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"Default: <null>"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "height": 100 }\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "height": "1.25in" }\n')),(0,i.kt)("h4",{id:"width"},(0,i.kt)("inlineCode",{parentName:"h4"},"width")),(0,i.kt)("p",null,"Paper width. Must be supported type of ",(0,i.kt)("a",{parentName:"p",href:"#units"},"units")," or number."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string|number"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"Default: <null>"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "width": 100 }\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "width": "1.25in" }\n')),(0,i.kt)("h3",{id:"inline"},(0,i.kt)("inlineCode",{parentName:"h3"},"inline")),(0,i.kt)("p",null,"If set to true, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Disposition")," gets set to ",(0,i.kt)("inlineCode",{parentName:"p"},"inline"),". If set to false, it gets set to ",(0,i.kt)("inlineCode",{parentName:"p"},"attachment"),". See ",(0,i.kt)("a",{parentName:"p",href:"#filename"},"filename")," property if you want to set the filename value for the attachment."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"Default: false"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "inline": true }\n')),(0,i.kt)("h3",{id:"landscape"},(0,i.kt)("inlineCode",{parentName:"h3"},"landscape")),(0,i.kt)("p",null,"Paper orientation, false sets it to portrait and true to landscape."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\n",(0,i.kt)("em",{parentName:"p"},"`Default: false")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "landscape": true }\n')),(0,i.kt)("h3",{id:"prefercsspagesize"},(0,i.kt)("inlineCode",{parentName:"h3"},"preferCSSPageSize")),(0,i.kt)("p",null,"Give any CSS ",(0,i.kt)("inlineCode",{parentName:"p"},"@page")," size declared in the page priority over what is declared in ",(0,i.kt)("a",{parentName:"p",href:"#width"},"width")," and ",(0,i.kt)("a",{parentName:"p",href:"#height"},"height")," or ",(0,i.kt)("a",{parentName:"p",href:"#format"},"format")," options."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"Default: false"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "preferCSSPageSize": true }\n')),(0,i.kt)("h3",{id:"projectid"},(0,i.kt)("inlineCode",{parentName:"h3"},"projectId")),(0,i.kt)("p",null,"The project's id you would like the job and any assets the job generates to be a member."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},'Default: ""'))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "projectId": "N77VCoAVTHHwgmUfCYlD" }\n')),(0,i.kt)("h4",{id:"viewport-height"},(0,i.kt)("inlineCode",{parentName:"h4"},"height")),(0,i.kt)("p",null,"Page height in pixels only.\n",(0,i.kt)("strong",{parentName:"p"},"Required")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"Default: <null>"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewPort": {\n    "height": 768\n  }\n}\n')),(0,i.kt)("h4",{id:"devicescalefactor"},(0,i.kt)("inlineCode",{parentName:"h4"},"deviceScaleFactor")),(0,i.kt)("p",null,"Specify device scale factor (DPR). ",(0,i.kt)("a",{parentName:"p",href:"#viewport-height"},"Height")," and ",(0,i.kt)("a",{parentName:"p",href:"#viewport-width"},"Width")," are always required."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"Default: 1"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewPort": {\n    "width": 640,\n    "height": 480,\n    "deviceScaleFactor": 1\n  }\n}\n')),(0,i.kt)("h4",{id:"ismobile"},(0,i.kt)("inlineCode",{parentName:"h4"},"isMobile")),(0,i.kt)("p",null,"Whether the ",(0,i.kt)("inlineCode",{parentName:"p"},"meta viewport")," tag is taken into account. ",(0,i.kt)("a",{parentName:"p",href:"#viewport-height"},"Height")," and ",(0,i.kt)("a",{parentName:"p",href:"#viewport-width"},"Width")," are always required."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"Default: false"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewPort": {\n    "width": 640,\n    "height": 480,\n    "isMobile": true\n  }\n}\n')),(0,i.kt)("h4",{id:"hastouch"},(0,i.kt)("inlineCode",{parentName:"h4"},"hasTouch")),(0,i.kt)("p",null,"Specifies if viewport supports touch events. ",(0,i.kt)("a",{parentName:"p",href:"#viewport-height"},"Height")," and ",(0,i.kt)("a",{parentName:"p",href:"#viewport-width"},"Width")," are always required."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"Default: false"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewPort": {\n    "width": 640,\n    "height": 480,\n    "hasTouch": true\n  }\n}\n')),(0,i.kt)("h4",{id:"islandscape"},(0,i.kt)("inlineCode",{parentName:"h4"},"isLandscape")),(0,i.kt)("p",null,"Specifies if viewport is in landscape mode. ",(0,i.kt)("a",{parentName:"p",href:"#viewport-height"},"Height")," and ",(0,i.kt)("a",{parentName:"p",href:"#viewport-width"},"Width")," are always required."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"Default: false"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewPort": {\n    "width": 640,\n    "height": 480,\n    "isLandscape": true\n  }\n}\n')),(0,i.kt)("h3",{id:"scale"},(0,i.kt)("inlineCode",{parentName:"h3"},"scale")),(0,i.kt)("p",null,"Scale of the webpage rendering. Must be between 0.1 and 2."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"Default: 0"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "scale": 0.5 }\n')),(0,i.kt)("h3",{id:"timeout"},(0,i.kt)("inlineCode",{parentName:"h3"},"timeout")),(0,i.kt)("p",null,"Amount of time that Chrome is allowed to run. If exceeded, your job will terminate."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"Default: 30000ms"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "timeout": 30000 }\n')),(0,i.kt)("h3",{id:"timezone"},(0,i.kt)("inlineCode",{parentName:"h3"},"timeZone")),(0,i.kt)("p",null,"Changes the timezone of the page. See ",(0,i.kt)("a",{parentName:"p",href:"https://source.chromium.org/chromium/chromium/deps/icu.git/+/faee8bc70570192d82d2978a71e2a615788597d1:source/data/misc/metaZones.txt"},"ICU's metaZones.txt")," for a list of supported timezone IDs."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"Default: <null>"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "timeZone": "Europe/Rome" }\n')),(0,i.kt)("h3",{id:"viewport"},(0,i.kt)("inlineCode",{parentName:"h3"},"viewPort")),(0,i.kt)("p",null,"Set the Viewport of the page before navigation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewPort": {\n    "width": 1024,\n    "height": 768,\n    "deviceScaleFactor": 2\n  }\n}\n')),(0,i.kt)("h4",{id:"viewport-width"},(0,i.kt)("inlineCode",{parentName:"h4"},"width")),(0,i.kt)("p",null,"Page width in pixels only.\n",(0,i.kt)("strong",{parentName:"p"},"Required")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"Default: <null>"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewPort": {\n    "width": 1024\n  }\n}\n')),(0,i.kt)("h3",{id:"waitforselector"},(0,i.kt)("inlineCode",{parentName:"h3"},"waitForSelector")),(0,i.kt)("p",null,"Allows for more complex wait behavior to control when the Chrome rendering engine decides when a page has finished before the conversion."),(0,i.kt)("h4",{id:"selector"},(0,i.kt)("inlineCode",{parentName:"h4"},"selector")),(0,i.kt)("p",null,"The selector of an element to wait for before performing the conversion."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"Default: <null>"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "waitForSelector": {\n    "selector": "img"\n  }\n}\n')),(0,i.kt)("h4",{id:"options"},(0,i.kt)("inlineCode",{parentName:"h4"},"options")),(0,i.kt)("p",null,"The selector of an element to wait for before performing the conversion."),(0,i.kt)("h4",{id:"visible"},(0,i.kt)("inlineCode",{parentName:"h4"},"visible")),(0,i.kt)("p",null,"Wait for the ",(0,i.kt)("a",{parentName:"p",href:"#selector"},"selector")," element to be present in the DOM and to be visible, i.e. to not have ",(0,i.kt)("inlineCode",{parentName:"p"},"display:none")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"visibility:hidden")," CSS properties. Not to be combined with the ",(0,i.kt)("a",{parentName:"p",href:"#hidden"},"hidden")," property."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"Default: false"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "waitForSelector": {\n    "selector": "img",\n    "options": {\n      "visible": true\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"hidden"},(0,i.kt)("inlineCode",{parentName:"h4"},"hidden")),(0,i.kt)("p",null,"Wait for the ",(0,i.kt)("a",{parentName:"p",href:"#selector"},"selector")," element to be present in the DOM and to be hidden, i.e. to have ",(0,i.kt)("inlineCode",{parentName:"p"},"display: none")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Not to be combined with the ",(0,i.kt)("a",{parentName:"p",href:"#visible"},"visible")," property."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"Default: false"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "waitForSelector": {\n    "selector": "img",\n    "options": {\n      "hidden": true\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"timeout-1"},(0,i.kt)("inlineCode",{parentName:"h4"},"timeout")),(0,i.kt)("p",null,"Maximum amount of time to wait in milliseconds for the selector to meet the ",(0,i.kt)("a",{parentName:"p",href:"#visible"},"visible")," or ",(0,i.kt)("a",{parentName:"p",href:"#hidden"},"hidden")," criteria."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"Default: 30000"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="visible"',title:'"visible"'},'{\n  "waitForSelector": {\n    "selector": "img",\n    "options": {\n      "visible": true,\n      "timeout": 30000\n    }\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="hidden"',title:'"hidden"'},'{\n  "waitForSelector": {\n    "selector": "img",\n    "options": {\n      "hidden": true,\n      "timeout": 30000\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"waituntil"},(0,i.kt)("inlineCode",{parentName:"h3"},"waitUntil")),(0,i.kt)("p",null,"When to consider the navigation has been completed and begin the conversion."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},'Default: "networkidle2"'))),(0,i.kt)("h4",{id:"accepted-values"},"Accepted Values"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"load")," - consider navigation to be finished when the ",(0,i.kt)("inlineCode",{parentName:"li"},"load")," event is fired."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"domcontentloaded")," - consider navigation to be finsihed when the ",(0,i.kt)("inlineCode",{parentName:"li"},"DOMContentLoaded")," event is fired."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"networkidle0")," - consider navigation to be finished when there are no more than 0 network connections for at least ",(0,i.kt)("inlineCode",{parentName:"li"},"500")," ms."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"networkidle2")," - consider navigation to be finished when there are no more than 2 network connections for at least `500' ms.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "waitUntil": "load" }\n')))}r.isMDXComponent=!0},512:(e,t,n)=>{n.d(t,{y8:()=>o});n(7462),n(7294);var a=n(3905),i=n(814);const l="https://api.cloudlayer.io/v2",o=e=>(0,a.kt)(i.Z,{className:"language-html",title:e.title,mdxType:"CodeBlock"},`${l}${e.path||""}`)},9133:(e,t,n)=>{n.d(t,{ZP:()=>r,d$:()=>l});var a=n(7462),i=(n(7294),n(3905));const l=[{value:"Html Parameters",id:"html-parameters",level:2},{value:"<code>html</code>",id:"html",level:3}],o={toc:l};function r(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"html-parameters"},"Html Parameters"),(0,i.kt)("p",null,"Parameters that exist on ",(0,i.kt)("strong",{parentName:"p"},"HTML")," services."),(0,i.kt)("h3",{id:"html"},(0,i.kt)("inlineCode",{parentName:"h3"},"html")),(0,i.kt)("p",null,"The base64 encoded HTML string of your HTML. Must be a base64 encoded string."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Required")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},'Default: ""'))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Raw HTML"',title:'"Raw','HTML"':!0},"<html>\n  <body>\n    <h1>Hello world!</h1>\n  </body>\n</html>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Base64 Encoded"',title:'"Base64','Encoded"':!0},'{ "html": "PGh0bWw+PGJvZHk+PGgxPkhlbGxvIHdvcmxkITwvaDE+PC9ib2R5PjwvaHRtbD4=" }\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are using ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VSCode")," you can download the ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=adamhartford.vscode-base64"},"vscode-base64")," extension to help you encode/decode your HTML while you develop.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For more examples and more complex scenarios, check out the ",(0,i.kt)("a",{parentName:"p",href:"examples/"},"Examples")," section.")))}r.isMDXComponent=!0},2349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>k,default:()=>w,frontMatter:()=>u,metadata:()=>h,toc:()=>g});var a=n(7462),i=(n(7294),n(3905)),l=n(512);const o=[{value:"Endpoints",id:"endpoints",level:2},{value:"POST /html/image",id:"post-htmlimage",level:3},{value:"Examples",id:"examples",level:3}],r={toc:o};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Convert any HTML to an Image using any valid HTML, CSS, Javascript, SASS, etc. As long as the base64 encoded JSON payload is below 10MB in size, we will accept it and convert it."),(0,i.kt)("h2",{id:"endpoints"},"Endpoints"),(0,i.kt)("h3",{id:"post-htmlimage"},"POST /html/image"),(0,i.kt)("p",null,"Supports all parameters being passed into request as JSON. The following parameter types are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#html-parameters"},"Html Parameters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#base-parameters"},"Base Parameters"))),(0,i.kt)(l.y8,{path:"/html/image",title:"POST /html/image",mdxType:"BaseUrlCodeBlock"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON Payload"',title:'"JSON','Payload"':!0},'{ "html": "PGh0bWw+PGJvZHk+PGgxPkhlbGxvIHdvcmxkITwvaDE+PC9ib2R5PjwvaHRtbD4=" }\n')),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Viewport Example"',title:'"Viewport','Example"':!0},'{\n  "html": "PGh0bWw+PGJvZHk+PGgxPkhlbGxvIHdvcmxkITwvaDE+PC9ib2R5PjwvaHRtbD4=",\n  "viewPort": {\n    "width": 800,\n    "height": 400\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="cURL Example"',title:'"cURL','Example"':!0},"curl --request POST \\\n  --url https://api.cloudlayer.io/v2/html/image \\\n  --header 'Content-Type: application/json' \\\n  --header 'x-api-key: <YOUR-API-KEY>' \\\n  --data '{\n    \"html\": \"PGh0bWw+PGJvZHk+PGgxPkhlbGxvIHdvcmxkITwvaDE+PC9ib2R5PjwvaHRtbD4=\"\n}' \\\n--output \"response.json\"\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Wget Example"',title:'"Wget','Example"':!0},"wget --method POST \\\n  --header 'Content-Type: application/json' \\\n  --header 'x-api-key: <YOUR-API-KEY>' \\\n  --body-data '{\"html\": \"PGh0bWw+PGJvZHk+PGgxPkhlbGxvIHdvcmxkITwvaDE+PC9ib2R5PjwvaHRtbD4=\"}' \\\n  - https://api.cloudlayer.io/v2/html/image \\\n  -O \"response.json\"\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Make sure your ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type")," gets set to ",(0,i.kt)("inlineCode",{parentName:"p"},"application/json"),", and that you have placed your ",(0,i.kt)("inlineCode",{parentName:"p"},"X-API-Key")," header with your API Key from your account.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For more examples, checkout the ",(0,i.kt)("a",{parentName:"p",href:"examples/"},"Examples")," section.")))}p.isMDXComponent=!0;var m=n(9133),d=n(4519),s=n(9783);const u={sidebar_position:3,slug:"/html-to-image",title:"Html to Image"},k=void 0,h={unversionedId:"services/image-services/html-to-image",id:"services/image-services/html-to-image",title:"Html to Image",description:"Html to Image | Docs - Image Generation Service",source:"@site/docs/api-reference/services/image-services/html-to-image.mdx",sourceDirName:"services/image-services",slug:"/html-to-image",permalink:"/html-to-image",draft:!1,editUrl:"https://github.com/cloudlayerio/docs/edit/main/docs/api-reference/services/image-services/html-to-image.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/html-to-image",title:"Html to Image"},sidebar:"tutorialSidebar",previous:{title:"Url to Image",permalink:"/url-to-image"},next:{title:"Introduction",permalink:"/pdf"}},c={},g=[...o,...m.d$,...d.d$,...s.d$],N=(v="UrlToImage",function(e){return console.warn("Component "+v+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var v;const f={toc:g};function w(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"Html to Image | Docs - Image Generation Service"),(0,i.kt)("meta",{name:"description",content:"cloudlayer.io is a Image generation service that helps you automate your Image generation process. Use our HTML to Image API or no-code integration."})),(0,i.kt)(p,{mdxType:"HtmlToImage"}),(0,i.kt)(m.ZP,{mdxType:"HtmlParams"}),(0,i.kt)(d.ZP,{mdxType:"BaseParams"}),(0,i.kt)(N,{mdxType:"UrlToImage"}),(0,i.kt)(s.ZP,{mdxType:"ImageParams"}),(0,i.kt)("p",null,";"))}w.isMDXComponent=!0},9783:(e,t,n)=>{n.d(t,{ZP:()=>r,d$:()=>l});var a=n(7462),i=(n(7294),n(3905));const l=[{value:"Image Parameters",id:"image-parameters",level:2},{value:"<code>imageType</code>",id:"imagetype",level:3},{value:"<code>transparent</code>",id:"transparent",level:3},{value:"<code>trim</code>",id:"trim",level:3}],o={toc:l};function r(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"image-parameters"},"Image Parameters"),(0,i.kt)("p",null,"Parameters that exist on all image service endpoints."),(0,i.kt)("h3",{id:"imagetype"},(0,i.kt)("inlineCode",{parentName:"h3"},"imageType")),(0,i.kt)("p",null,"string ",(0,i.kt)("em",{parentName:"p"},'Default: "png"')),(0,i.kt)("p",null,"Type of image to generate for the preview."),(0,i.kt)("p",null,"Must be one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"png")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jpg")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"webp"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "imageType": "webp"\n}\n')),(0,i.kt)("h3",{id:"transparent"},(0,i.kt)("inlineCode",{parentName:"h3"},"transparent")),(0,i.kt)("p",null,"boolean ",(0,i.kt)("em",{parentName:"p"},"Default: false")),(0,i.kt)("p",null,"Either ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," to indicate if the background should be transparent."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: Has no effect if the image type does not support transparency.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "transparent": true\n}\n')),(0,i.kt)("h3",{id:"trim"},(0,i.kt)("inlineCode",{parentName:"h3"},"trim")),(0,i.kt)("p",null,"boolean ",(0,i.kt)("em",{parentName:"p"},"Default: false")),(0,i.kt)("p",null,"Either ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," to indicate if whitespace around the image should be trimmed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "trim": true\n}\n')))}r.isMDXComponent=!0}}]);