"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[3541],{63141:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"desenvolvimento/testes-carga/teste-de-ponto-de-interrupcao","title":"Teste de ponto de interrup\xe7\xe3o","description":"Mostra um gr\xe1fico em duas dimens\xf5es, sem n\xfameros, com o eixo x nomeado de Time e eixo y nomeado de Throughout. O gr\xe1fico sobe em linha reta, de 0 at\xe9 um valor no meio do fim do eixo y (sem n\xfamero, por\xe9m definido como sendo muito maior que o n\xfamero t\xedpico de usu\xe1rios para determinar onde a aplica\xe7\xe3o quebra). Parece o gr\xe1fico de uma fun\xe7\xe3o de primeiro grau crescente.","source":"@site/docs/desenvolvimento/testes-carga/teste-de-ponto-de-interrupcao.md","sourceDirName":"desenvolvimento/testes-carga","slug":"/desenvolvimento/testes-carga/teste-de-ponto-de-interrupcao","permalink":"/docs/desenvolvimento/testes-carga/teste-de-ponto-de-interrupcao","draft":false,"unlisted":false,"editUrl":"https://github.com/EduardoJM/EduardoJM.github.io/tree/main/docs/desenvolvimento/testes-carga/teste-de-ponto-de-interrupcao.md","tags":[],"version":"current","lastUpdatedBy":"Eduardo Oliveira","lastUpdatedAt":1736208844000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Teste de Pico","permalink":"/docs/desenvolvimento/testes-carga/teste-de-pico"},"next":{"title":"Teste de imers\xe3o","permalink":"/docs/desenvolvimento/testes-carga/teste-de-imersao"}}');var s=t(74848),r=t(28453);const a={sidebar_position:5},i="Teste de ponto de interrup\xe7\xe3o",d={},c=[{value:"Objetivos",id:"objetivos",level:2},{value:"Testando com o k6",id:"testando-com-o-k6",level:2},{value:"Analisando",id:"analisando",level:2},{value:"Refer\xeancias",id:"refer\xeancias",level:2}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"teste-de-ponto-de-interrup\xe7\xe3o",children:"Teste de ponto de interrup\xe7\xe3o"})}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Mostra um gr\xe1fico em duas dimens\xf5es, sem n\xfameros, com o eixo x nomeado de Time e eixo y nomeado de Throughout. O gr\xe1fico sobe em linha reta, de 0 at\xe9 um valor no meio do fim do eixo y (sem n\xfamero, por\xe9m definido como sendo muito maior que o n\xfamero t\xedpico de usu\xe1rios para determinar onde a aplica\xe7\xe3o quebra). Parece o gr\xe1fico de uma fun\xe7\xe3o de primeiro grau crescente.",src:t(26831).A+"",width:"1786",height:"1042"})}),"\n",(0,s.jsx)(o.h2,{id:"objetivos",children:"Objetivos"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"For\xe7ar uma carga no sistema at\xe9 ele quebrar."}),"\n",(0,s.jsx)(o.li,{children:"Identificar qual \xe9 o ponto de ruptura do ambiente."}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"testando-com-o-k6",children:"Testando com o k6"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-javascript",children:"import http from 'k6/http';\nimport { sleep } from 'k6';\n\nexport const options = {\n  stages: [\n    {\n      duration: '2h',\n      target: 100000,\n    },\n  ],\n};\n\nexport default function () {\n  http.get('http://192.168.68.108:3000');\n  sleep(1);\n}\n"})}),"\n",(0,s.jsx)(o.h2,{id:"analisando",children:"Analisando"}),"\n",(0,s.jsx)(o.p,{children:"Para analisar, de melhor forma poss\xedvel, \xe9 necess\xe1rio fazer o uso de observabilidade. Somente com os dados dos testes do k6 ficar\xe1 dif\xedcil encontrar os problemas."}),"\n",(0,s.jsx)(o.p,{children:"\xc9 preciso analisar como o servidor e aplica\xe7\xe3o se comportam para entender quando ela para de responder. Isso permite identificar gargalos e pontos de ruptura do sistema."}),"\n",(0,s.jsx)(o.h2,{id:"refer\xeancias",children:"Refer\xeancias"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://eltonminetto.dev/post/2024-01-05-load-test-types/",children:"Tipos de teste de carga"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://eltonminetto.dev/post/2024-01-11-load-test-k6/",children:"Teste de carga usando o k6"})}),"\n"]})]})}function m(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},26831:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/teste-ponto-interrupcao-e65dbafdd513ba80ca5bbf35faf7ce0f.png"},28453:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>i});var n=t(96540);const s={},r=n.createContext(s);function a(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);