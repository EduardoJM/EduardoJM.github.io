"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7835],{1132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var s=n(5893),r=n(1151);const i={},a=void 0,o={id:"front-end/setup-user-event",title:"setup-user-event",description:"Refer\xeancias",source:"@site/docs/front-end/setup-user-event.md",sourceDirName:"front-end",slug:"/front-end/setup-user-event",permalink:"/docs/front-end/setup-user-event",draft:!1,unlisted:!1,editUrl:"https://github.com/EduardoJM/EduardoJM.github.io/tree/main/docs/front-end/setup-user-event.md",tags:[],version:"current",lastUpdatedBy:"Eduardo Oliveira",lastUpdatedAt:172157859e4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"findby-instead-waitfor",permalink:"/docs/front-end/findby-instead-waitfor"},next:{title:"testing-forms-with-accessibility",permalink:"/docs/front-end/testing-forms-with-accessibility"}},c={},u=[{value:"Refer\xeancias",id:"refer\xeancias",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'// setup userEvent\nfunction setup(jsx) {\n  return {\n    user: userEvent.setup(),\n    ...render(jsx),\n  };\n}\n \ndescribe("Form", () => {\n  it("should save correct data on submit", async () => {\n    const mockSave = jest.fn();\n    const { user } = setup(<Form saveData={mockSave} />);\n \n    await user.type(screen.getByRole("textbox", { name: "Name" }), "Test");\n    await user.click(screen.getByRole("button", { name: "Sign up" }));\n \n    expect(mockSave).toHaveBeenLastCalledWith({ ...defaultData, name: "Test" });\n  });\n});\n'})}),"\n",(0,s.jsx)(t.h2,{id:"refer\xeancias",children:"Refer\xeancias"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://claritydev.net/blog/improving-react-testing-library-tests",children:"Best Practices for Writing Tests with React Testing Library"})}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(7294);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);