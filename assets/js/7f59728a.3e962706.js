"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7924],{9019:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(5893),t=r(1151);const o={tags:["Seguran\xe7a"]},s="Insecure Direct Object Reference",c={id:"seguranca/idor",title:"Insecure Direct Object Reference",description:"Insecure Direct Object Reference (IDOR) \xe9 uma vulnerabilidade que permite que acessem ou modifiquem objetos manupulando ID's usados nas URL's ou par\xe2metros. Acontece por falta de controle de acesso.",source:"@site/docs/seguranca/idor.md",sourceDirName:"seguranca",slug:"/seguranca/idor",permalink:"/docs/seguranca/idor",draft:!1,unlisted:!1,editUrl:"https://github.com/EduardoJM/EduardoJM.github.io/tree/main/docs/seguranca/idor.md",tags:[{label:"Seguran\xe7a",permalink:"/docs/tags/seguranca"}],version:"current",lastUpdatedBy:"Eduardo Oliveira",lastUpdatedAt:1709552458,formattedLastUpdatedAt:"4 de mar. de 2024",frontMatter:{tags:["Seguran\xe7a"]},sidebar:"tutorialSidebar",previous:{title:"Seguran\xe7a",permalink:"/docs/category/seguran\xe7a"},next:{title:"DataOps",permalink:"/docs/dados/DataOps"}},i={},d=[{value:"Apenas URL&#39;s?",id:"apenas-urls",level:2}];function u(e){const a={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"insecure-direct-object-reference",children:"Insecure Direct Object Reference"}),"\n",(0,n.jsx)(a.p,{children:"Insecure Direct Object Reference (IDOR) \xe9 uma vulnerabilidade que permite que acessem ou modifiquem objetos manupulando ID's usados nas URL's ou par\xe2metros. Acontece por falta de controle de acesso."}),"\n",(0,n.jsx)(a.admonition,{title:"Exemplo",type:"info",children:(0,n.jsxs)(a.p,{children:["Quando um usu\xe1rio acessa o perfil, a aplica\xe7\xe3o gera uma URL do tipo: ",(0,n.jsx)(a.code,{children:"https://example.org/users/123"}),". O ",(0,n.jsx)(a.code,{children:"123"})," \xe9 um ID de usu\xe1rio. Se algu\xe9m mudar o valor para ",(0,n.jsx)(a.code,{children:"124"})," ganhar acesso aos dados de outro usu\xe1rio, isso se configura uma vulnerabilidade de ",(0,n.jsx)(a.code,{children:"Insecure Direct Object Reference"}),"."]})}),"\n",(0,n.jsx)(a.h2,{id:"apenas-urls",children:"Apenas URL's?"}),"\n",(0,n.jsx)(a.p,{children:"N\xe3o necessariamente precisa acontecer via URL, pode-se configurar, tamb\xe9m, por meio de par\xe2metros no corpo da requisi\xe7\xe3o:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-html",children:'<form action="/update_profile" method="post">\n  \x3c!-- Other fields for updating name, email, etc. --\x3e\n  <input type="hidden" name="user_id" value="12345" />\n  <button type="submit">Update Profile</button>\n</form>\n'})})]})}function l(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,a,r)=>{r.d(a,{Z:()=>c,a:()=>s});var n=r(7294);const t={},o=n.createContext(t);function s(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);