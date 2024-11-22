"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[4437],{8416:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=o(4848),t=o(8453);const a={tags:["Seguran\xe7a"]},s="Insecure Direct Object Reference",i={id:"desenvolvimento/seguranca/idor",title:"Insecure Direct Object Reference",description:"Insecure Direct Object Reference (IDOR) \xe9 uma vulnerabilidade que permite que acessem ou modifiquem objetos manupulando ID's usados nas URL's ou par\xe2metros. Acontece por falta de controle de acesso.",source:"@site/docs/desenvolvimento/seguranca/idor.md",sourceDirName:"desenvolvimento/seguranca",slug:"/desenvolvimento/seguranca/idor",permalink:"/docs/desenvolvimento/seguranca/idor",draft:!1,unlisted:!1,editUrl:"https://github.com/EduardoJM/EduardoJM.github.io/tree/main/docs/desenvolvimento/seguranca/idor.md",tags:[{inline:!0,label:"Seguran\xe7a",permalink:"/docs/tags/seguranca"}],version:"current",lastUpdatedBy:"Eduardo Oliveira",lastUpdatedAt:1732296545e3,frontMatter:{tags:["Seguran\xe7a"]},sidebar:"tutorialSidebar",previous:{title:"Seguran\xe7a",permalink:"/docs/category/seguran\xe7a"},next:{title:"Django",permalink:"/docs/category/django"}},c={},d=[{value:"Apenas URL&#39;s?",id:"apenas-urls",level:2}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"insecure-direct-object-reference",children:"Insecure Direct Object Reference"}),"\n",(0,r.jsx)(n.p,{children:"Insecure Direct Object Reference (IDOR) \xe9 uma vulnerabilidade que permite que acessem ou modifiquem objetos manupulando ID's usados nas URL's ou par\xe2metros. Acontece por falta de controle de acesso."}),"\n",(0,r.jsx)(n.admonition,{title:"Exemplo",type:"info",children:(0,r.jsxs)(n.p,{children:["Quando um usu\xe1rio acessa o perfil, a aplica\xe7\xe3o gera uma URL do tipo: ",(0,r.jsx)(n.code,{children:"https://example.org/users/123"}),". O ",(0,r.jsx)(n.code,{children:"123"})," \xe9 um ID de usu\xe1rio. Se algu\xe9m mudar o valor para ",(0,r.jsx)(n.code,{children:"124"})," ganhar acesso aos dados de outro usu\xe1rio, isso se configura uma vulnerabilidade de ",(0,r.jsx)(n.code,{children:"Insecure Direct Object Reference"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"apenas-urls",children:"Apenas URL's?"}),"\n",(0,r.jsx)(n.p,{children:"N\xe3o necessariamente precisa acontecer via URL, pode-se configurar, tamb\xe9m, por meio de par\xe2metros no corpo da requisi\xe7\xe3o:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<form action="/update_profile" method="post">\n  \x3c!-- Other fields for updating name, email, etc. --\x3e\n  <input type="hidden" name="user_id" value="12345" />\n  <button type="submit">Update Profile</button>\n</form>\n'})})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>i});var r=o(6540);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);