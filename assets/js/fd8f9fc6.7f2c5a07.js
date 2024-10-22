"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[3541],{6605:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=t(4848),s=t(8453);const r={sidebar_position:5},a="Teste de ponto de interrup\xe7\xe3o",i={id:"desenvolvimento/testes-carga/teste-de-ponto-de-interrupcao",title:"Teste de ponto de interrup\xe7\xe3o",description:"Mostra um gr\xe1fico em duas dimens\xf5es, sem n\xfameros, com o eixo x nomeado de Time e eixo y nomeado de Throughout. O gr\xe1fico sobe em linha reta, de 0 at\xe9 um valor no meio do fim do eixo y (sem n\xfamero, por\xe9m definido como sendo muito maior que o n\xfamero t\xedpico de usu\xe1rios para determinar onde a aplica\xe7\xe3o quebra). Parece o gr\xe1fico de uma fun\xe7\xe3o de primeiro grau crescente.",source:"@site/docs/desenvolvimento/testes-carga/teste-de-ponto-de-interrupcao.md",sourceDirName:"desenvolvimento/testes-carga",slug:"/desenvolvimento/testes-carga/teste-de-ponto-de-interrupcao",permalink:"/docs/desenvolvimento/testes-carga/teste-de-ponto-de-interrupcao",draft:!1,unlisted:!1,editUrl:"https://github.com/EduardoJM/EduardoJM.github.io/tree/main/docs/desenvolvimento/testes-carga/teste-de-ponto-de-interrupcao.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1729621314e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Teste de Pico",permalink:"/docs/desenvolvimento/testes-carga/teste-de-pico"},next:{title:"Teste de imers\xe3o",permalink:"/docs/desenvolvimento/testes-carga/teste-de-imersao"}},d={},c=[{value:"Objetivos",id:"objetivos",level:2},{value:"Testando com o k6",id:"testando-com-o-k6",level:2},{value:"Analisando",id:"analisando",level:2},{value:"Refer\xeancias",id:"refer\xeancias",level:2}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"teste-de-ponto-de-interrup\xe7\xe3o",children:"Teste de ponto de interrup\xe7\xe3o"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Mostra um gr\xe1fico em duas dimens\xf5es, sem n\xfameros, com o eixo x nomeado de Time e eixo y nomeado de Throughout. O gr\xe1fico sobe em linha reta, de 0 at\xe9 um valor no meio do fim do eixo y (sem n\xfamero, por\xe9m definido como sendo muito maior que o n\xfamero t\xedpico de usu\xe1rios para determinar onde a aplica\xe7\xe3o quebra). Parece o gr\xe1fico de uma fun\xe7\xe3o de primeiro grau crescente.",src:t(1233).A+"",width:"1786",height:"1042"})}),"\n",(0,n.jsx)(o.h2,{id:"objetivos",children:"Objetivos"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"For\xe7ar uma carga no sistema at\xe9 ele quebrar."}),"\n",(0,n.jsx)(o.li,{children:"Identificar qual \xe9 o ponto de ruptura do ambiente."}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"testando-com-o-k6",children:"Testando com o k6"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-javascript",children:"import http from 'k6/http';\nimport { sleep } from 'k6';\n\nexport const options = {\n  stages: [\n    {\n      duration: '2h',\n      target: 100000,\n    },\n  ],\n};\n\nexport default function () {\n  http.get('http://192.168.68.108:3000');\n  sleep(1);\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"analisando",children:"Analisando"}),"\n",(0,n.jsx)(o.p,{children:"Para analisar, de melhor forma poss\xedvel, \xe9 necess\xe1rio fazer o uso de observabilidade. Somente com os dados dos testes do k6 ficar\xe1 dif\xedcil encontrar os problemas."}),"\n",(0,n.jsx)(o.p,{children:"\xc9 preciso analisar como o servidor e aplica\xe7\xe3o se comportam para entender quando ela para de responder. Isso permite identificar gargalos e pontos de ruptura do sistema."}),"\n",(0,n.jsx)(o.h2,{id:"refer\xeancias",children:"Refer\xeancias"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://eltonminetto.dev/post/2024-01-05-load-test-types/",children:"Tipos de teste de carga"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://eltonminetto.dev/post/2024-01-11-load-test-k6/",children:"Teste de carga usando o k6"})}),"\n"]})]})}function m(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1233:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/teste-ponto-interrupcao-e65dbafdd513ba80ca5bbf35faf7ce0f.png"},8453:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>i});var n=t(6540);const s={},r=n.createContext(s);function a(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);