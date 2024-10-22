"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[9591],{1041:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=s(4848),n=s(8453);const a={sidebar_position:1},i="Teste de fuma\xe7a",r={id:"desenvolvimento/testes-carga/teste-de-fumaca",title:"Teste de fuma\xe7a",description:'Tamb\xe9m \xe9 conhecida com "Build Verification testing" ou "Build Acceptance Testing".',source:"@site/docs/desenvolvimento/testes-carga/teste-de-fumaca.md",sourceDirName:"desenvolvimento/testes-carga",slug:"/desenvolvimento/testes-carga/teste-de-fumaca",permalink:"/docs/desenvolvimento/testes-carga/teste-de-fumaca",draft:!1,unlisted:!1,editUrl:"https://github.com/EduardoJM/EduardoJM.github.io/tree/main/docs/desenvolvimento/testes-carga/teste-de-fumaca.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1729621314e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Testes de Carga",permalink:"/docs/category/testes-de-carga"},next:{title:"Teste de Carga",permalink:"/docs/desenvolvimento/testes-carga/teste-de-carga"}},d={},c=[{value:"Objetivos",id:"objetivos",level:2},{value:"Testando com o k6",id:"testando-com-o-k6",level:2},{value:"Refer\xeancias",id:"refer\xeancias",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"teste-de-fuma\xe7a",children:"Teste de fuma\xe7a"}),"\n",(0,o.jsx)(t.admonition,{title:"Outros nomes",type:"info",children:(0,o.jsxs)(t.p,{children:["Tamb\xe9m \xe9 conhecida com ",(0,o.jsx)(t.strong,{children:'"Build Verification testing"'})," ou ",(0,o.jsx)(t.strong,{children:'"Build Acceptance Testing"'}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"objetivos",children:"Objetivos"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Testar a funcionalidade b\xe1sica da aplica\xe7\xe3o e garantir que ela vai agir corretamente com um ou poucos usu\xe1rios."}),"\n",(0,o.jsx)(t.li,{children:"Serve como baseline para os pr\xf3ximos testes."}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{title:"Exemplo",type:"info",children:(0,o.jsx)(t.p,{children:"Se a aplica\xe7\xe3o executa em X milissegundos para 1 usu\xe1rio podemos usar esse valor para comparar com 100 ou 1000 usu\xe1rios simult\xe2neos."})}),"\n",(0,o.jsx)(t.h2,{id:"testando-com-o-k6",children:"Testando com o k6"}),"\n",(0,o.jsxs)(t.p,{children:["O teste \xe9 feito configurando poucos usu\xe1rios (",(0,o.jsx)(t.em,{children:"virtual user"}),", ",(0,o.jsx)(t.code,{children:"vus"}),", nas configura\xe7\xf5es do k6). A fun\xe7\xe3o exportada como ",(0,o.jsx)(t.code,{children:"default"})," deve simular o comportamento do usu\xe1rio, inclusive usando ",(0,o.jsx)(t.code,{children:"sleep()"})," para que o comportamento esteja mais pr\xf3ximo poss\xedvel do usu\xe1rio final."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"import http from 'k6/http';\nimport { sleep } from 'k6';\n\nexport const options = {\n  vus: 1,\n  duration: '5s',\n};\n\nexport default function () {\n  http.get('http://192.168.68.108:3000');\n  sleep(1);\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"refer\xeancias",children:"Refer\xeancias"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://eltonminetto.dev/post/2024-01-05-load-test-types/",children:"Tipos de teste de carga"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://eltonminetto.dev/post/2024-01-11-load-test-k6/",children:"Teste de carga usando o k6"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>r});var o=s(6540);const n={},a=o.createContext(n);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);