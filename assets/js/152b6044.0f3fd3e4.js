"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),g=m(n),p=l,u=g["".concat(s,".").concat(p)]||g[p]||c[p]||i;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var a=n(7462),l=(n(7294),n(3905));const i={},o="Html Examples",r={unversionedId:"html",id:"html",title:"Html Examples",description:"HTML Examples | Docs - Document Generation Service",source:"@site/docs/examples/html.mdx",sourceDirName:".",slug:"/html",permalink:"/examples/html",draft:!1,editUrl:"https://github.com/cloudlayerio/docs/edit/main/docs/examples/html.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authentication Examples",permalink:"/examples/authentication"},next:{title:"Url Examples",permalink:"/examples/url"}},s={},m=[{value:"Html Encoding",id:"html-encoding",level:2},{value:"Json Request",id:"json-request",level:2},{value:"Pdf Example",id:"pdf-example",level:2},{value:"Image Example",id:"image-example",level:2},{value:"Embedding Images",id:"embedding-images",level:2}],d={toc:m};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"html-examples"},"Html Examples"),(0,l.kt)("head",null,(0,l.kt)("title",null,"HTML Examples | Docs - Document Generation Service"),(0,l.kt)("meta",{name:"description",content:"Here are some examples that use our HTML to Image, and HTML to PDF services which can help you automate your document generation process."})),(0,l.kt)("p",null,"Passing in HTML is the easiest, most flexible, and fastest method for generating a document. But, unfortunately, it can be the most confusing and technically challenging. In this section we provide some examples to make it easier to begin using this powerful feature."),(0,l.kt)("p",null,"By using HTML, you have complete control of the content. For example, you can embed images, CSS styles, fonts, and more. In addition, publicly accessible resources, such as images, and fonts from CDNs, can be used and get fetched on rendering."),(0,l.kt)("h2",{id:"html-encoding"},"Html Encoding"),(0,l.kt)("p",null,"Html must get encoded as a base64 string before being passed into the JSON request. By doing this, it ensures that there are no encoding issues with the JSON. For example, in many cases passing in raw HTML into a JSON string, you will encounter problems such as double quotes getting used. By base64 encoding, all of these issues get resolved, which ensures no issues with parsing the JSON payload and the HTML you pass into the service getting corrupted."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},"<html>\n  <body>\n    <h1>Hello world!</h1>\n  </body>\n</html>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON Payload"',title:'"JSON','Payload"':!0},'{ "html": "PGh0bWw+PGJvZHk+PGgxPkhlbGxvIHdvcmxkITwvaDE+PC9ib2R5PjwvaHRtbD4=" }\n')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you are using ",(0,l.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VSCode")," you can download the ",(0,l.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=adamhartford.vscode-base64"},"vscode-base64")," extension to help you encode/decode your HTML while you develop.")),(0,l.kt)("h2",{id:"json-request"},"Json Request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Viewport Example"',title:'"Viewport','Example"':!0},'{\n  "html": "PGh0bWw+PGJvZHk+PGgxPkhlbGxvIHdvcmxkITwvaDE+PC9ib2R5PjwvaHRtbD4="\n}\n')),(0,l.kt)("h2",{id:"pdf-example"},"Pdf Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="cURL Example"',title:'"cURL','Example"':!0},"curl --request POST \\\n  --url https://api.cloudlayer.io/v2/html/pdf \\\n  --header 'Content-Type: application/json' \\\n  --header 'x-api-key: <YOUR-API-KEY>' \\\n  --data '{\n    \"html\": \"PGh0bWw+PGJvZHk+PGgxPkhlbGxvIHdvcmxkITwvaDE+PC9ib2R5PjwvaHRtbD4=\"\n}' \\\n--output \"response.json\"\n")),(0,l.kt)("h2",{id:"image-example"},"Image Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="cURL Example"',title:'"cURL','Example"':!0},"curl --request POST \\\n  --url https://api.cloudlayer.io/v2/html/image \\\n  --header 'Content-Type: application/json' \\\n  --header 'x-api-key: <YOUR-API-KEY>' \\\n  --data '{\n    \"html\": \"PGh0bWw+PGJvZHk+PGgxPkhlbGxvIHdvcmxkITwvaDE+PC9ib2R5PjwvaHRtbD4=\"\n}' \\\n--output \"response.png\"\n")),(0,l.kt)("h2",{id:"embedding-images"},"Embedding Images"),(0,l.kt)("p",null,"In some cases, you may want to embed images into your HTML so that your HTML page is fully self-contained and does not require any external resources. Fortunately, this is easily achievable since the HTML spec supports embedding images as base64 strings in the ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," parameter of the ",(0,l.kt)("inlineCode",{parentName:"p"},"img")," element tag."),(0,l.kt)("p",null,"The following image will be embedded into the html."),(0,l.kt)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAlCAYAAAAqXEs9AAAFFklEQVR42s3Yf0zUZRzAcchVqy2TgnQeTuXiBH8giEiiUAxyMCwKO8xTvEvw6PAUDkQPEf16h8CRDmFDcCSSCgo4L1EY4oaKq6ZttZb2Y0tnq7Sl/dAUf/Nup8G+fO/QO4Ti+fPu8zz32u3zPJ/n+bi59XPghnuRktlFCZg3x9NREsePZTHcKI/mamUk338YQUv1LAwfzUDhNrgD9w2LmGdewJcFiWBJgE3xUBIHZTFQHg2VkVAVAdVhUBNK1+5gPq6dRvCAU4SFDM9T0ygkgXkBOAliVzDUBdJVP4miBjeGDQgmR4tfbjJn8zTgAHSjJI6TZTE0lb9OS2UkZ6oi6JKAqJ8M+ybSemACzz0WJktHsPF9fstNhl4gJV8Uv41SeINnpXMqwnhpRxiZNaFc6AXyB6svp/b78WL/MOlEZKfxlzEVRKAu87sUCQJPPGr+7lCG7wqmXgKiSc43LTK8XcJkZBCXuYLO7DQQgW4Ji3nH1R1ZF4ilF8gHmsdyvs0bX6cW0a9ElW7gduYKEIGurVUzx1F8WSxPF89HvjmeMX39c/VTWL3Pny4RiFYZv7bJCHwoJs1Imj6be+kGEIH+yF1KmDR2dSpT8zRYTSpuFCof7LjSWC6XR1FaHY6XNL5xIqlWX+6JQBwZyZ9HvZjtEJO6ltU6I+izQQS6uEZHgF1+LUNt1HLTllcmFYhAbI26v/V/rn6FadJ5VgVvNflwswc0Cto9uX7Mg9hegckC+dq1IAGdNerwkS6abkCfpeeeUfsg0R2Cwu9v+79rg4iWzm+SE9s8lusiEB0enOgJUJvQJq8HCeiMwYBMupguB/OKTMjSgwj0e1EiJZvi2Vkayx0RiNogOhsnM1e6zsHxzGiVcdkGOupJxxEPnr//xeKNBGhM3JWAPjMYeKH3dsE9ZT0ltu8loHPm+ci7w0rjiNwaxVURiIZJ3LX6opGibAl9ZCTbPvXmmZ4Pkwpo05hABDqjM+IhnqhsYJg6nx0p6x6ARaDTwhJGS3+oPIqQqnAuiUBYFXQdGkfGQ3fUwkJCkgpABLq1LMe+QqssbFbnQy/Qck4IGkb0tfa2CKbYTmoRiEPj4PBojH2DiikUg5bmUuEoTlnMKHU+X3WD0g20CFr7kiEdNWHIa4M4JwFx1Iv5DieoijklBqXkEd7X4qpCPFLW8Ykuhz1aLU86e1LvCWJ0wyROi0HtnvzksPKrLFwQgwwGUXI5GDaIMzVMOuoUeFoVXBCBODacEEegWz0ggWuDebWzKqgTgzpGEO8I9MtQ+4dO/ic5NJmvncqhBRYKBnOXVYfgUxvIWekua/ci0dlz6LZuFRP+t3PINhYVcHjInNTdtUxt4o60lklRg1HLWmVMtatltqHZwNLHrfaFSrZ88Ca7+lPt2z053lPtu0fKejY6uA/9sFLP+IG+Dx2QEyO9Dx33oGNo3xgfdafOWcJMaeyaFALy3mO/SUWnCHSpIoot217DUxq/zw+11Zc7Tt+p+/vqEJQ8VTgPH0sC3gP+6ujJk0zmDtS7bE8QRY7eZc0yF7sjhuW8mp3GFcnL9a5ZheDsy3XndPbavVx9+PawnDH9qtKr9Ew3pnLJlbd9VRQjt4eRVRPKRbu3/ct8flBhn1+uodLwz03mXB/dj5v/dj8OPKr70ehP22N3P4Zkf0jcQROSSHC1g7Y3wP48GliWG+4FicyyJGDaFM/xkjjOl8XQWR7NlcpIvquKoHn7TDJc7TH+A9HgAM7jYxmJAAAAAElFTkSuQmCC"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <body style="margin: 10; background-color: #4E279C;">\n    <div style="display: flex; align-items: center">\n      <img\n        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAlCAYAAAAqXEs9AAAFFklEQVR42s3Yf0zUZRzAcchVqy2TgnQeTuXiBH8giEiiUAxyMCwKO8xTvEvw6PAUDkQPEf16h8CRDmFDcCSSCgo4L1EY4oaKq6ZttZb2Y0tnq7Sl/dAUf/Nup8G+fO/QO4Ti+fPu8zz32u3zPJ/n+bi59XPghnuRktlFCZg3x9NREsePZTHcKI/mamUk338YQUv1LAwfzUDhNrgD9w2LmGdewJcFiWBJgE3xUBIHZTFQHg2VkVAVAdVhUBNK1+5gPq6dRvCAU4SFDM9T0ygkgXkBOAliVzDUBdJVP4miBjeGDQgmR4tfbjJn8zTgAHSjJI6TZTE0lb9OS2UkZ6oi6JKAqJ8M+ybSemACzz0WJktHsPF9fstNhl4gJV8Uv41SeINnpXMqwnhpRxiZNaFc6AXyB6svp/b78WL/MOlEZKfxlzEVRKAu87sUCQJPPGr+7lCG7wqmXgKiSc43LTK8XcJkZBCXuYLO7DQQgW4Ji3nH1R1ZF4ilF8gHmsdyvs0bX6cW0a9ElW7gduYKEIGurVUzx1F8WSxPF89HvjmeMX39c/VTWL3Pny4RiFYZv7bJCHwoJs1Imj6be+kGEIH+yF1KmDR2dSpT8zRYTSpuFCof7LjSWC6XR1FaHY6XNL5xIqlWX+6JQBwZyZ9HvZjtEJO6ltU6I+izQQS6uEZHgF1+LUNt1HLTllcmFYhAbI26v/V/rn6FadJ5VgVvNflwswc0Cto9uX7Mg9hegckC+dq1IAGdNerwkS6abkCfpeeeUfsg0R2Cwu9v+79rg4iWzm+SE9s8lusiEB0enOgJUJvQJq8HCeiMwYBMupguB/OKTMjSgwj0e1EiJZvi2Vkayx0RiNogOhsnM1e6zsHxzGiVcdkGOupJxxEPnr//xeKNBGhM3JWAPjMYeKH3dsE9ZT0ltu8loHPm+ci7w0rjiNwaxVURiIZJ3LX6opGibAl9ZCTbPvXmmZ4Pkwpo05hABDqjM+IhnqhsYJg6nx0p6x6ARaDTwhJGS3+oPIqQqnAuiUBYFXQdGkfGQ3fUwkJCkgpABLq1LMe+QqssbFbnQy/Qck4IGkb0tfa2CKbYTmoRiEPj4PBojH2DiikUg5bmUuEoTlnMKHU+X3WD0g20CFr7kiEdNWHIa4M4JwFx1Iv5DieoijklBqXkEd7X4qpCPFLW8Ykuhz1aLU86e1LvCWJ0wyROi0HtnvzksPKrLFwQgwwGUXI5GDaIMzVMOuoUeFoVXBCBODacEEegWz0ggWuDebWzKqgTgzpGEO8I9MtQ+4dO/ic5NJmvncqhBRYKBnOXVYfgUxvIWekua/ci0dlz6LZuFRP+t3PINhYVcHjInNTdtUxt4o60lklRg1HLWmVMtatltqHZwNLHrfaFSrZ88Ca7+lPt2z053lPtu0fKejY6uA/9sFLP+IG+Dx2QEyO9Dx33oGNo3xgfdafOWcJMaeyaFALy3mO/SUWnCHSpIoot217DUxq/zw+11Zc7Tt+p+/vqEJQ8VTgPH0sC3gP+6ujJk0zmDtS7bE8QRY7eZc0yF7sjhuW8mp3GFcnL9a5ZheDsy3XndPbavVx9+PawnDH9qtKr9Ew3pnLJlbd9VRQjt4eRVRPKRbu3/ct8flBhn1+uodLwz03mXB/dj5v/dj8OPKr70ehP22N3P4Zkf0jcQROSSHC1g7Y3wP48GliWG+4FicyyJGDaFM/xkjjOl8XQWR7NlcpIvquKoHn7TDJc7TH+A9HgAM7jYxmJAAAAAElFTkSuQmCC"\n      />\n      <div\n        style="\n          margin-left: 10px;\n          margin-top: -6px;\n          font-size: 24px;\n          color: #fff;\n          font-weight: 500;\n          font-family: sans-serif;\n        "\n      >\n        cloudlayer.io\n      </div>\n    </div>\n  </body>\n</html>\n')),(0,l.kt)("p",null,"Once you have a working set of HTML, you will follow the same procedures, as usual, to pass a base64 encoded HTML string into the request object. Having a base64 string within another base64 string is perfectly acceptable."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "html": "PGh0bWw+CiAgPGJvZHkgc3R5bGU9Im1hcmdpbjogMTA7IGJhY2tncm91bmQtY29sb3I6ICM0RTI3OUM7Ij4KICAgIDxkaXYgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXIiPgogICAgICA8aW1nCiAgICAgICAgc3JjPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNRQUFBQWxDQVlBQUFBcVhFczlBQUFGRmtsRVFWUjQyczNZZjB6VVpSekFjY2hWcXkyVGduUWVUdVhpQkg4Z2lFaWlVQXh5TUN3S084eFR2RXZ3NlBBVURrUVBFZjE2aDhDUkRtRkRjQ1NTQ2dvNEwxRVk0b2FLcTZadHRaYjJZMHRucTdTbC9kQVVmL051cDhHK2ZPL1FPNFRpK2ZQdTh6ejMydTN6UEovbitiaTU5WFBnaG51Umt0bEZDWmczeDlOUkVzZVBaVEhjS0kvbWFtVWszMzhZUVV2MUxBd2Z6VURoTnJnRDl3MkxtR2Rld0pjRmlXQkpnRTN4VUJJSFpURlFIZzJWa1ZBVkFkVmhVQk5LMSs1Z1BxNmRSdkNBVTRTRkRNOVQweWdrZ1hrQk9BbGlWekRVQmRKVlA0bWlCamVHRFFnbVI0dGZiakpuOHpUZ0FIU2pKSTZUWlRFMGxiOU9TMlVrWjZvaTZKS0FxSjhNK3liU2VtQUN6ejBXSmt0SHNQRjlmc3ROaGw0Z0pWOFV2NDFTZUlObnBYTXF3bmhwUnhpWk5hRmM2QVh5QjZzdnAvYjc4V0wvTU9sRVpLZnhsekVWUktBdTg3c1VDUUpQUEdyKzdsQ0c3d3FtWGdLaVNjNDNMVEs4WGNKa1pCQ1h1WUxPN0RRUWdXNEppM25IMVIxWkY0aWxGOGdIbXNkeXZzMGJYNmNXMGE5RWxXN2dkdVlLRUlHdXJWVXp4MUY4V1N4UEY4OUh2am1lTVgzOWMvVlRXTDNQbnk0UmlGWVp2N2JKQ0h3b0pzMUltajZiZStrR0VJSCt5RjFLbURSMmRTcFQ4elJZVFNwdUZDb2Y3TGpTV0M2WFIxRmFIWTZYTkw1eElxbFdYKzZKUUJ3WnlaOUh2Wmp0RUpPNmx0VTZJK2l6UVFTNnVFWkhnRjErTFVOdDFITFRsbGNtRlloQWJJMjZ2L1Yvcm42RmFkSjVWZ1Z2TmZsd3N3YzBDdG85dVg3TWc5aGVnY2tDK2RxMUlBR2ROZXJ3a1M2YWJrQ2ZwZWVlVWZzZzBSMkN3dTl2Kzc5cmc0aVd6bStTRTlzOGx1c2lFQjBlbk9nSlVKdlFKcThIQ2VpTXdZQk11cGd1Qi9PS1RNalNnd2owZTFFaUpadmkyVmtheXgwUmlOb2dPaHNuTTFlNnpzSHh6R2lWY2RrR091cEp4eEVQbnIvL3hlS05CR2hNM0pXQVBqTVllS0gzZHNFOVpUMGx0dThsb0hQbStjaTd3MHJqaU53YXhWVVJpSVpKM0xYNm9wR2liQWw5WkNUYlB2WG1tWjRQa3dwbzA1aEFCRHFqTStJaG5xaHNZSmc2bngwcDZ4NkFSYURUd2hKR1MzK29QSXFRcW5BdWlVQllGWFFkR2tmR1EzZlV3a0pDa2dwQUJMcTFMTWUrUXFzc2JGYm5ReS9RY2s0SUdrYjB0ZmEyQ0tiWVRtb1JpRVBqNFBCb2pIMkRpaWtVZzVibVV1RW9UbG5NS0hVK1gzV0QwZzIwQ0ZyN2tpRWROV0hJYTRNNEp3RngxSXY1RGllb2lqa2xCcVhrRWQ3WDRxcENQRkxXOFlrdWh6MWFMVTg2ZTFMdkNXSjB3eVJPaTBIdG52emtzUEtyTEZ3UWd3d0dVWEk1R0RhSU16Vk1PdW9VZUZvVlhCQ0JPRGFjRUVlZ1d6MGdnV3VEZWJXektxZ1RnenBHRU84STlNdFErNGRPL2ljNU5KbXZuY3FoQlJZS0JuT1hWWWZnVXh2SVdla3VhL2NpMGRsejZMWnVGUlArdDNQSU5oWVZjSGpJbk5UZHRVeHQ0bzYwbGtsUmcxSExXbVZNdGF0bHRxSFp3TkxIcmZhRlNyWjg4Q2E3K2xQdDJ6MDUzbFB0dTBmS2VqWTZ1QS85c0ZMUCtJRytEeDJRRXlPOUR4MzNvR05vM3hnZmRhZk9XY0pNYWV5YUZBTHkzbU8vU1VXbkNIU3BJb290MjE3RFV4cS96dysxMVpjN1R0K3ArL3ZxRUpROFZUZ1BIMHNDM2dQKzZ1akprMHptRHRTN2JFOFFSWTdlWmMweUY3c2podVc4bXAzR0Zjbkw5YTVaaGVEc3kzWG5kUGJhdlZ4OStQYXduREg5cXRLcjlFdzNwbkxKbGJkOVZSUWp0NGVSVlJQS1JidTMvY3Q4ZmxCaG4xK3VvZEx3ejAzbVhCL2RqNXYvZGo4T1BLcjcwZWhQMjJOM1A0WmtmMGpjUVJPU1NIQzFnN1kzd1A0OEdsaVdHKzRGaWN5eUpHRGFGTS94a2pqT2w4WFFXUjdObGNwSXZxdUtvSG43VERKYzdUSCtBOUhnQU03all4bUpBQUFBQUVsRlRrU3VRbUNDIgogICAgICAvPgogICAgICA8ZGl2CiAgICAgICAgc3R5bGU9IgogICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7CiAgICAgICAgICBtYXJnaW4tdG9wOiAtNnB4OwogICAgICAgICAgZm9udC1zaXplOiAyNHB4OwogICAgICAgICAgY29sb3I6ICNmZmY7CiAgICAgICAgICBmb250LXdlaWdodDogNTAwOwogICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7CiAgICAgICAgIgogICAgICA+CiAgICAgICAgY2xvdWRsYXllci5pbwogICAgICA8L2Rpdj4KICAgIDwvZGl2PgogIDwvYm9keT4KPC9odG1sPg==",\n  "viewPort": {\n    "height": 32,\n    "width": 200\n  }\n}\n')),(0,l.kt)("p",null,"The output looks like the following."),(0,l.kt)("img",{src:"/img/examples/html/embedded-image-result.jpeg"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"You can tweak the parameter options to achieve transparency, add text, etc."))}c.isMDXComponent=!0}}]);