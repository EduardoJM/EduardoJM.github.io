"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[5277],{91971:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"desenvolvimento/front-end/react/testando-formularios-com-acessibilidade","title":"Testando formul\xe1rios com acessibilidade","description":"Existem algumas t\xe9cnicas que podem ser utilizadas para testar formul\xe1rios com acessibiliade utilizando React e a testing-library. Abaixo, veja sobre input\'s e sobre bot\xf5es de envio.","source":"@site/docs/desenvolvimento/front-end/react/testando-formularios-com-acessibilidade.md","sourceDirName":"desenvolvimento/front-end/react","slug":"/desenvolvimento/front-end/react/testando-formularios-com-acessibilidade","permalink":"/docs/desenvolvimento/front-end/react/testando-formularios-com-acessibilidade","draft":false,"unlisted":false,"editUrl":"https://github.com/EduardoJM/EduardoJM.github.io/tree/main/docs/desenvolvimento/front-end/react/testando-formularios-com-acessibilidade.md","tags":[{"inline":true,"label":"React","permalink":"/docs/tags/react"},{"inline":true,"label":"Testes","permalink":"/docs/tags/testes"},{"inline":true,"label":"testing-library","permalink":"/docs/tags/testing-library"},{"inline":true,"label":"Acessibilidade","permalink":"/docs/tags/acessibilidade"},{"inline":true,"label":"Forms","permalink":"/docs/tags/forms"}],"version":"current","lastUpdatedBy":"Eduardo Oliveira","lastUpdatedAt":1736208844000,"frontMatter":{"tags":["React","Testes","testing-library","Acessibilidade","Forms"]},"sidebar":"tutorialSidebar","previous":{"title":"Usar findBy ao inv\xe9s de waitFor","permalink":"/docs/desenvolvimento/front-end/react/findby-ao-inves-de-waitfor"},"next":{"title":"Acessibilidade e font-size","permalink":"/docs/desenvolvimento/front-end/acessibilidade-e-font-size"}}');var t=s(74848),i=s(28453);const a={tags:["React","Testes","testing-library","Acessibilidade","Forms"]},r="Testando formul\xe1rios com acessibilidade",l={},d=[{value:"Input&#39;s",id:"inputs",level:2},{value:"Componente",id:"componente",level:3},{value:"Procurando pelos elementos",id:"procurando-pelos-elementos",level:3},{value:"Submit Buttons",id:"submit-buttons",level:2},{value:"Componente",id:"componente-1",level:3},{value:"Procurando pelos elementos",id:"procurando-pelos-elementos-1",level:3},{value:"Refer\xeancias",id:"refer\xeancias",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"testando-formul\xe1rios-com-acessibilidade",children:"Testando formul\xe1rios com acessibilidade"})}),"\n",(0,t.jsx)(n.p,{children:"Existem algumas t\xe9cnicas que podem ser utilizadas para testar formul\xe1rios com acessibiliade utilizando React e a testing-library. Abaixo, veja sobre input's e sobre bot\xf5es de envio."}),"\n",(0,t.jsx)(n.h2,{id:"inputs",children:"Input's"}),"\n",(0,t.jsx)(n.h3,{id:"componente",children:"Componente"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'<label htmlFor="name">Name</label>\n<input\n  id="name"\n  onChange={onFieldChange}\n  placeholder="Enter your name"\n/>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"procurando-pelos-elementos",children:"Procurando pelos elementos"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"user.type(screen.getByRole('textbox', { name: 'Name' }), 'Test');\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Nome acess\xedvel",type:"info",children:(0,t.jsxs)(n.p,{children:["O ",(0,t.jsx)(n.code,{children:'{ name: "Name" }'})," procura pelo nome acess\xedvel (label, por exemplo) e n\xe3o pelo atributo ",(0,t.jsx)(n.code,{children:"name"})," do input."]})}),"\n",(0,t.jsx)(n.h2,{id:"submit-buttons",children:"Submit Buttons"}),"\n",(0,t.jsxs)(n.p,{children:["Use os m\xe9todos do tipo ",(0,t.jsx)(n.code,{children:"*ByRole"}),":"]}),"\n",(0,t.jsx)(n.h3,{id:"componente-1",children:"Componente"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"<button type='submit'>Sign up</button>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"procurando-pelos-elementos-1",children:"Procurando pelos elementos"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"screen.getByRole('button', { name: 'Sign up' });\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Nome acess\xedvel",type:"info",children:(0,t.jsxs)(n.p,{children:["O nome acess\xedvel dessa vez \xe9 o texto atual do bot\xe3o. Perceba que se adicionarmos um atributo ",(0,t.jsx)(n.code,{children:"aria-label"})," no bot\xe3o, o nome acess\xedvel passa a ser o conte\xfado do atributo ",(0,t.jsx)(n.code,{children:"aria-label"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"refer\xeancias",children:"Refer\xeancias"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://claritydev.net/blog/improving-react-testing-library-tests",children:"Best Practices for Writing Tests with React Testing Library"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var o=s(96540);const t={},i=o.createContext(t);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);