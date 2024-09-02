"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[4853],{1308:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=s(4848),o=s(8453);const r={sidebar_position:3},a="Teste de Estresse",i={id:"desenvolvimento/testes-carga/teste-de-estresse",title:"Teste de Estresse",description:"representa\xe7\xe3o gr\xe1fica do teste de estresse",source:"@site/docs/desenvolvimento/testes-carga/teste-de-estresse.md",sourceDirName:"desenvolvimento/testes-carga",slug:"/desenvolvimento/testes-carga/teste-de-estresse",permalink:"/docs/desenvolvimento/testes-carga/teste-de-estresse",draft:!1,unlisted:!1,editUrl:"https://github.com/EduardoJM/EduardoJM.github.io/tree/main/docs/desenvolvimento/testes-carga/teste-de-estresse.md",tags:[],version:"current",lastUpdatedBy:"Eduardo Oliveira",lastUpdatedAt:1725284609e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Teste de Carga",permalink:"/docs/desenvolvimento/testes-carga/teste-de-carga"},next:{title:"Teste de Pico",permalink:"/docs/desenvolvimento/testes-carga/teste-de-pico"}},d={},c=[{value:"Objetivos",id:"objetivos",level:2},{value:"Testando com o k6",id:"testando-com-o-k6",level:2},{value:"Refer\xeancias",id:"refer\xeancias",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"teste-de-estresse",children:"Teste de Estresse"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"representa\xe7\xe3o gr\xe1fica do teste de estresse",src:s(9636).A+"",width:"1852",height:"1062"})}),"\n",(0,n.jsx)(t.h2,{id:"objetivos",children:"Objetivos"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Adicionar mais carga do que o normal."}),"\n",(0,n.jsx)(t.li,{children:"Testa como o sistema se comporta sobre press\xe3o."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"testando-com-o-k6",children:"Testando com o k6"}),"\n",(0,n.jsx)(t.p,{children:"Fundamentalmente, o teste de estresse e o teste de carga, em termos de implementa\xe7\xe3o para o k6 s\xe3o iguais, o que diferencia eles \xe9 a determina\xe7\xe3o do que \xe9 considerado a carga esperada pelo seu sistema:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import http from 'k6/http';\nimport { sleep } from 'k6';\n\nexport const options = {\n  stages: [\n    {\n      duration: '10s',\n      target: 200,\n    },\n    {\n      duration: '30s',\n      target: 200,\n    },\n    {\n      duration: '10s',\n      target: 0,\n    },\n  ],\n};\n\nexport default function () {\n  http.get('http://192.168.68.108:3000');\n  sleep(1);\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"refer\xeancias",children:"Refer\xeancias"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://eltonminetto.dev/post/2024-01-05-load-test-types/",children:"Tipos de teste de carga"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://eltonminetto.dev/post/2024-01-11-load-test-k6/",children:"Teste de carga usando o k6"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},9636:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/teste-estresse-1e2a1bed2041613a0f880fd30867ef54.png"},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var n=s(6540);const o={},r=n.createContext(o);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);