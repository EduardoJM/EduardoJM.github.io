"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[1235],{32612:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"desenvolvimento/testes-carga/percentis","title":"Percentis (p90, p95)","description":"Quando temos um n\xfamero de percentil p90, queremos dizer que 90% das requisi\xe7\xf5es levaram p90 ou menos tempo. O mesmo vale para p95 com 95% das requisi\xe7\xf5es levando p95 ou menos tempo.","source":"@site/docs/desenvolvimento/testes-carga/percentis.md","sourceDirName":"desenvolvimento/testes-carga","slug":"/desenvolvimento/testes-carga/percentis","permalink":"/docs/desenvolvimento/testes-carga/percentis","draft":false,"unlisted":false,"editUrl":"https://github.com/EduardoJM/EduardoJM.github.io/tree/main/docs/desenvolvimento/testes-carga/percentis.md","tags":[],"version":"current","lastUpdatedBy":"Eduardo Oliveira","lastUpdatedAt":1736208844000,"sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"Teste de imers\xe3o","permalink":"/docs/desenvolvimento/testes-carga/teste-de-imersao"},"next":{"title":"Experi\xeancia do Usu\xe1rio","permalink":"/docs/category/experi\xeancia-do-usu\xe1rio"}}');var n=o(74848),t=o(28453);const i={sidebar_position:7},a="Percentis (p90, p95)",d={},c=[];function m(e){const s={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"percentis-p90-p95",children:"Percentis (p90, p95)"})}),"\n",(0,n.jsxs)(s.p,{children:["Quando temos um n\xfamero de percentil ",(0,n.jsx)(s.strong,{children:"p90"}),", queremos dizer que 90% das requisi\xe7\xf5es levaram ",(0,n.jsx)(s.strong,{children:"p90"})," ou menos tempo. O mesmo vale para ",(0,n.jsx)(s.strong,{children:"p95"})," com 95% das requisi\xe7\xf5es levando ",(0,n.jsx)(s.strong,{children:"p95"})," ou menos tempo."]}),"\n",(0,n.jsx)(s.p,{children:"Por exemplo, com os resultados de testes com k6:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"http_req_duration..............: avg=7.63s    min=191.2ms med=579.61ms max=41.24s   p(90)=37.23s   p(95)=39.31s\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Temos que a m\xe9dia de dura\xe7\xe3o das requisi\xe7\xf5es foi de ",(0,n.jsx)(s.code,{children:"7.63s"}),", a menor dura\xe7\xe3o foi de ",(0,n.jsx)(s.code,{children:"191.2ms"}),", a mediana ",(0,n.jsx)(s.code,{children:"579.61ms"}),", a m\xe1xima ",(0,n.jsx)(s.code,{children:"41.24s"}),". 90% das requisi\xe7\xf5es levaram at\xe9 ",(0,n.jsx)(s.code,{children:"37.23s"}),". 95% das requisi\xe7\xf5es levaram at\xe9 ",(0,n.jsx)(s.code,{children:"39.31s"}),"."]}),"\n",(0,n.jsx)(s.admonition,{title:"Observa\xe7\xe3o",type:"info",children:(0,n.jsxs)(s.p,{children:["No caso, considerando um c\xe1lculo manual, ordenar as requisi\xe7\xf5es por tempo (do menor para o maior) e pegar o n\xfamero de requisi\xe7\xf5es que corresponde a 90% e, posteriormente, pegar o maior tempo, obtemos o ",(0,n.jsx)(s.strong,{children:"p90"}),"."]})})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},28453:(e,s,o)=>{o.d(s,{R:()=>i,x:()=>a});var r=o(96540);const n={},t=r.createContext(n);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);