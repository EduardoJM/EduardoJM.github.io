"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[2674],{5516:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=t(5893),s=t(1151);const r={},o=void 0,c={id:"front-end/testing-forms-with-accessibility",title:"testing-forms-with-accessibility",description:"Input's",source:"@site/docs/front-end/testing-forms-with-accessibility.md",sourceDirName:"front-end",slug:"/front-end/testing-forms-with-accessibility",permalink:"/docs/front-end/testing-forms-with-accessibility",draft:!1,unlisted:!1,editUrl:"https://github.com/EduardoJM/EduardoJM.github.io/tree/main/docs/front-end/testing-forms-with-accessibility.md",tags:[],version:"current",lastUpdatedBy:"Eduardo Oliveira",lastUpdatedAt:1721579092e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"setup-user-event",permalink:"/docs/front-end/setup-user-event"},next:{title:"Micro Front-End",permalink:"/docs/category/micro-front-end"}},l={},a=[{value:"Input&#39;s",id:"inputs",level:2},{value:"Componente",id:"componente",level:3},{value:"Querying",id:"querying",level:3},{value:"Submit Button",id:"submit-button",level:2},{value:"Componente",id:"componente-1",level:3},{value:"Querying",id:"querying-1",level:3},{value:"Refer\xeancias",id:"refer\xeancias",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"inputs",children:"Input's"}),"\n",(0,i.jsx)(n.h3,{id:"componente",children:"Componente"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'<label htmlFor="name">Name</label>\n<input\n  id="name"\n  onChange={onFieldChange}\n  placeholder="Enter your name"\n/>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"querying",children:"Querying"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'user.type(screen.getByRole("textbox", { name: "Name" }), "Test");\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:'{ name: "Name" }'})," query for acessible name and not for the input name property."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"submit-button",children:"Submit Button"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"*ByRole"})," methods:"]}),"\n",(0,i.jsx)(n.h3,{id:"componente-1",children:"Componente"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'<button type="submit">Sign up</button>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"querying-1",children:"Querying"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'screen.getByRole("button", { name: "Sign up" });\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The accessible name this time is the actual text content of the button. Note that if we add an ",(0,i.jsx)(n.code,{children:"aria-label"})," to the button, the accessible name will be the text content of that ",(0,i.jsx)(n.code,{children:"aria-label"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"refer\xeancias",children:"Refer\xeancias"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://claritydev.net/blog/improving-react-testing-library-tests",children:"Best Practices for Writing Tests with React Testing Library"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);