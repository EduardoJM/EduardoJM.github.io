"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[9448],{9049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(4848),s=n(8453);const a={tags:["React","Testes","testing-library","accessibility","forms"]},o="Testando formul\xe1rios com acessibilidade",r={id:"desenvolvimento/front-end/react-testing/testing-forms-with-accessibility",title:"Testando formul\xe1rios com acessibilidade",description:"Existem algumas t\xe9cnicas que podem ser utilizadas para testar formul\xe1rios com acessibiliade utilizando React e a testing-library.",source:"@site/docs/desenvolvimento/front-end/react-testing/testing-forms-with-accessibility.md",sourceDirName:"desenvolvimento/front-end/react-testing",slug:"/desenvolvimento/front-end/react-testing/testing-forms-with-accessibility",permalink:"/docs/desenvolvimento/front-end/react-testing/testing-forms-with-accessibility",draft:!1,unlisted:!1,editUrl:"https://github.com/EduardoJM/EduardoJM.github.io/tree/main/docs/desenvolvimento/front-end/react-testing/testing-forms-with-accessibility.md",tags:[{inline:!0,label:"React",permalink:"/docs/tags/react"},{inline:!0,label:"Testes",permalink:"/docs/tags/testes"},{inline:!0,label:"testing-library",permalink:"/docs/tags/testing-library"},{inline:!0,label:"accessibility",permalink:"/docs/tags/accessibility"},{inline:!0,label:"forms",permalink:"/docs/tags/forms"}],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1726519447e3,frontMatter:{tags:["React","Testes","testing-library","accessibility","forms"]},sidebar:"tutorialSidebar",previous:{title:"Usar findBy ao inv\xe9s waitFor",permalink:"/docs/desenvolvimento/front-end/react-testing/findby-instead-waitfor"},next:{title:"Acessibilidade e font-size",permalink:"/docs/desenvolvimento/front-end/accessibility-font-size"}},l={},c=[{value:"Input&#39;s",id:"inputs",level:2},{value:"Componente",id:"componente",level:3},{value:"Querying",id:"querying",level:3},{value:"Submit Button",id:"submit-button",level:2},{value:"Componente",id:"componente-1",level:3},{value:"Querying",id:"querying-1",level:3},{value:"Refer\xeancias",id:"refer\xeancias",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"testando-formul\xe1rios-com-acessibilidade",children:"Testando formul\xe1rios com acessibilidade"}),"\n",(0,i.jsx)(t.p,{children:"Existem algumas t\xe9cnicas que podem ser utilizadas para testar formul\xe1rios com acessibiliade utilizando React e a testing-library."}),"\n",(0,i.jsx)(t.h2,{id:"inputs",children:"Input's"}),"\n",(0,i.jsx)(t.h3,{id:"componente",children:"Componente"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'<label htmlFor="name">Name</label>\n<input\n  id="name"\n  onChange={onFieldChange}\n  placeholder="Enter your name"\n/>\n'})}),"\n",(0,i.jsx)(t.h3,{id:"querying",children:"Querying"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"user.type(screen.getByRole('textbox', { name: 'Name' }), 'Test');\n"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:'{ name: "Name" }'})," query for acessible name and not for the input name property."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"submit-button",children:"Submit Button"}),"\n",(0,i.jsxs)(t.p,{children:["Use the ",(0,i.jsx)(t.code,{children:"*ByRole"})," methods:"]}),"\n",(0,i.jsx)(t.h3,{id:"componente-1",children:"Componente"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"<button type='submit'>Sign up</button>\n"})}),"\n",(0,i.jsx)(t.h3,{id:"querying-1",children:"Querying"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"screen.getByRole('button', { name: 'Sign up' });\n"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["The accessible name this time is the actual text content of the button. Note that if we add an ",(0,i.jsx)(t.code,{children:"aria-label"})," to the button, the accessible name will be the text content of that ",(0,i.jsx)(t.code,{children:"aria-label"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"refer\xeancias",children:"Refer\xeancias"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://claritydev.net/blog/improving-react-testing-library-tests",children:"Best Practices for Writing Tests with React Testing Library"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);