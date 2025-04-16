"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[1202],{51741:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"desenvolvimento/front-end/micro-front-end/implementations-of-micro-front-end","title":"Formas de Implementa\xe7\xe3o de Micro Front-End\'s","description":"Implementa\xe7\xe3o em tempo de build","source":"@site/docs/desenvolvimento/front-end/micro-front-end/002-implementations.md","sourceDirName":"desenvolvimento/front-end/micro-front-end","slug":"/desenvolvimento/front-end/micro-front-end/implementations-of-micro-front-end","permalink":"/docs/desenvolvimento/front-end/micro-front-end/implementations-of-micro-front-end","draft":false,"unlisted":false,"editUrl":"https://github.com/EduardoJM/EduardoJM.github.io/tree/main/docs/desenvolvimento/front-end/micro-front-end/002-implementations.md","tags":[{"inline":true,"label":"Micro Front-End","permalink":"/docs/tags/micro-front-end"}],"version":"current","lastUpdatedBy":"Eduardo Oliveira","lastUpdatedAt":1744842484000,"sidebarPosition":2,"frontMatter":{"id":"implementations-of-micro-front-end","title":"Formas de Implementa\xe7\xe3o de Micro Front-End\'s","tags":["Micro Front-End"]},"sidebar":"tutorialSidebar","previous":{"title":"Introdu\xe7\xe3o aos Micro Front-End\'s","permalink":"/docs/desenvolvimento/front-end/micro-front-end/introduction-to-micro-front-end"},"next":{"title":"React","permalink":"/docs/category/react"}}');var t=o(74848),i=o(28453);const s={id:"implementations-of-micro-front-end",title:"Formas de Implementa\xe7\xe3o de Micro Front-End's",tags:["Micro Front-End"]},d=void 0,a={},c=[{value:"Implementa\xe7\xe3o em tempo de build",id:"implementa\xe7\xe3o-em-tempo-de-build",level:2},{value:"Integra\xe7\xe3o por meio de fun\xe7\xf5es javascript",id:"integra\xe7\xe3o-por-meio-de-fun\xe7\xf5es-javascript",level:2},{value:"Integra\xe7\xe3o atrav\xe9s de web components",id:"integra\xe7\xe3o-atrav\xe9s-de-web-components",level:2},{value:"Integra\xe7\xe3o via iframes",id:"integra\xe7\xe3o-via-iframes",level:2},{value:"Refer\xeancias",id:"refer\xeancias",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"implementa\xe7\xe3o-em-tempo-de-build",children:"Implementa\xe7\xe3o em tempo de build"}),"\n",(0,t.jsxs)(n.p,{children:["Usar diversos projetos, por exemplo no ",(0,t.jsx)(n.code,{children:"npm"}),", integrados por um projeto maior. Por exemplo, no ",(0,t.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": "@my-project/main",\n  // ...\n  "dependencies": {\n    "@my-project/frontend-1": "1.0.0",\n    "@my-project/frontend-2": "1.0.0",\n    "@my-project/frontend-3": "1.0.0"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Um problema disso \xe9 que as pipelines de build, test e deploy n\xe3o s\xe3o separados e independentes."}),"\n",(0,t.jsx)(n.h2,{id:"integra\xe7\xe3o-por-meio-de-fun\xe7\xf5es-javascript",children:"Integra\xe7\xe3o por meio de fun\xe7\xf5es javascript"}),"\n",(0,t.jsx)(n.p,{children:"A ideia, dentro dessa forma de trabalho, \xe9 ter v\xe1rios scripts (bundles) que disponibilizam fun\xe7\xf5es para renderizar aquele micro front-end e, ter um script principal que gerencia chamada para essas fun\xe7\xf5es. Um exemplo disso \xe9:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<script src="https://browse.example.com/bundle.js"><\/script>\n<script src="https://order.example.com/bundle.js"><\/script>\n<script src="https://profile.example.com/bundle.js"><\/script>\n\n<div id="micro-frontend-root"></div>\n\n<script type="text/javascript">\n  const microFrontEndsByRoute = {\n    \'/\': window.renderBrowseRestaurants,\n    \'/order-food\': window.renderOrderFood,\n    \'/user-profile\': window.renderUserProfile,\n  };\n\n  const renderFunction = microFrontendsByRoute[window.location.pathname];\n\n  renderFunction(\'micro-frontend-root\');\n<\/script>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"integra\xe7\xe3o-atrav\xe9s-de-web-components",children:"Integra\xe7\xe3o atrav\xe9s de web components"}),"\n",(0,t.jsxs)(n.p,{children:["A estrat\xe9gia para essa abordagem \xe9 definir ",(0,t.jsx)(n.code,{children:"web components"})," nativos do browser para os micro front-ends:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'\x3c!-- /about --\x3e\n<div id="container">\n  <about-micro-frontend></about-micro-frontend>\n</div>\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'\x3c!-- /products --\x3e\n<div id="container">\n  <products-micro-frontend></products-micro-frontend>\n</div>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Ao utilizar web components para criar micro front-ends, \xe9 poss\xedvel utilizar qualquer uma das duas abordagens anteriores para executar os componentes."}),"\n",(0,t.jsx)(n.h2,{id:"integra\xe7\xe3o-via-iframes",children:"Integra\xe7\xe3o via iframes"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'\x3c!-- /about --\x3e\n<div id="container">\n  <iframe src="https://about.example.com"></iframe>\n</div>\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'\x3c!-- /products --\x3e\n<div id="container">\n  <iframe src="https://products.example.com"></iframe>\n</div>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"refer\xeancias",children:"Refer\xeancias"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://martinfowler.com/articles/micro-frontends.html",children:"Micro Frontends"})}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>d});var r=o(96540);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);