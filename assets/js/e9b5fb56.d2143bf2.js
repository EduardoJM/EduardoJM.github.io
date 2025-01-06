"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[1115],{5598:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=t(4848),o=t(8453);const n={sidebar_position:2},r="Teste de Carga",i={id:"desenvolvimento/testes-carga/teste-de-carga",title:"Teste de Carga",description:"Objetivos",source:"@site/docs/desenvolvimento/testes-carga/teste-de-carga.md",sourceDirName:"desenvolvimento/testes-carga",slug:"/desenvolvimento/testes-carga/teste-de-carga",permalink:"/docs/desenvolvimento/testes-carga/teste-de-carga",draft:!1,unlisted:!1,editUrl:"https://github.com/EduardoJM/EduardoJM.github.io/tree/main/docs/desenvolvimento/testes-carga/teste-de-carga.md",tags:[],version:"current",lastUpdatedBy:"Eduardo Oliveira",lastUpdatedAt:1736161272e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Teste de fuma\xe7a",permalink:"/docs/desenvolvimento/testes-carga/teste-de-fumaca"},next:{title:"Teste de Estresse",permalink:"/docs/desenvolvimento/testes-carga/teste-de-estresse"}},d={},c=[{value:"Objetivos",id:"objetivos",level:2},{value:"Informa\xe7\xf5es",id:"informa\xe7\xf5es",level:2},{value:"Testando com o k6",id:"testando-com-o-k6",level:2},{value:"Refer\xeancias",id:"refer\xeancias",level:2}];function m(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"teste-de-carga",children:"Teste de Carga"}),"\n",(0,a.jsx)(s.h2,{id:"objetivos",children:"Objetivos"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Testar a carga esperada do sistema."}),"\n",(0,a.jsx)(s.li,{children:"Garantir que a performance m\xednima \xe9 sempre a esperada."}),"\n"]}),"\n",(0,a.jsx)(s.admonition,{title:"Exemplo",type:"info",children:(0,a.jsx)(s.p,{children:"Se \xe9 esperado que a API seja acessada por 1000 usu\xe1rios esse \xe9 o valor que vamos usar nos testes."})}),"\n",(0,a.jsx)(s.h2,{id:"informa\xe7\xf5es",children:"Informa\xe7\xf5es"}),"\n",(0,a.jsxs)(s.p,{children:["Como estamos simulando o comportamento normal de um usu\xe1rio, a carga deve aumentar gradualmente e n\xe3o de uma vez s\xf3. Os testes devem ter uma fase de ",(0,a.jsx)(s.em,{children:"ramp-up"}),", onde a carga aumenta gradualmente, e outra fase de ",(0,a.jsx)(s.em,{children:"ramp-down"}),", onde a carga vai diminuindo gradualmente at\xe9 acabar."]}),"\n",(0,a.jsx)(s.admonition,{title:"Observa\xe7\xf5es",type:"info",children:(0,a.jsx)(s.p,{children:"Esse tipo de teste pode ser utilizado, tamb\xe9m, para ver como o sistema se comporta com rela\xe7\xe3o a elasticidade."})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Mostra um gr\xe1fico em duas dimens\xf5es, sem n\xfameros, com o eixo x nomeado de Time e eixo y nomeado de Throughout. O eixo x do gr\xe1fico \xe9 dividido em 3 partes: um per\xedodo de ramp-up onde o gr\xe1fico sobe, em linha reta, de 0 at\xe9 um valor no meio do eixo y (sem n\xfameros, definido como o n\xfamero t\xedpico de usu\xe1rios), logo ap\xf3s ele se mantem constante nesse valor e no final ele decresce, em reta, at\xe9 0. A imagem se assemelha a um trap\xe9zio.",src:t(9090).A+"",width:"1727",height:"1022"})}),"\n",(0,a.jsx)(s.h2,{id:"testando-com-o-k6",children:"Testando com o k6"}),"\n",(0,a.jsxs)(s.p,{children:["Para realizar esse tipo de teste com o k6, utilizamos a funcionalidade ",(0,a.jsx)(s.code,{children:"stages"})," dentro das ",(0,a.jsx)(s.code,{children:"options"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"import http from 'k6/http';\nimport { sleep } from 'k6';\n\nexport const options = {\n  stages: [\n    {\n      duration: '10s',\n      target: 100,\n    },\n    {\n      duration: '30s',\n      target: 100,\n    },\n    {\n      duration: '10s',\n      target: 0,\n    },\n  ],\n};\n\nexport default function () {\n  http.get('http://192.168.68.108:3000');\n  sleep(1);\n}\n"})}),"\n",(0,a.jsxs)(s.p,{children:["O per\xedodo de ",(0,a.jsx)(s.em,{children:"ramp-up"})," ir\xe1 durar 10 segundos e ir\xe1 de 0 at\xe9 100 usu\xe1rios. O per\xedodo est\xe1vel do gr\xe1fico ir\xe1 se manter em 100 usu\xe1rios e depois, no ",(0,a.jsx)(s.em,{children:"ramp-down"})," ir\xe1 reduzir de 100 para 0 usu\xe1rios simult\xe2neos."]}),"\n",(0,a.jsx)(s.h2,{id:"refer\xeancias",children:"Refer\xeancias"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://eltonminetto.dev/post/2024-01-05-load-test-types/",children:"Tipos de teste de carga"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://eltonminetto.dev/post/2024-01-11-load-test-k6/",children:"Teste de carga usando o k6"})}),"\n"]})]})}function l(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},9090:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/teste-carga-5748303b04db40793d20aa2fe247b67c.png"},8453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>i});var a=t(6540);const o={},n=a.createContext(o);function r(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);