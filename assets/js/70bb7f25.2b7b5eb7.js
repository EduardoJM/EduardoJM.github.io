"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[610],{2908:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>t,metadata:()=>d,toc:()=>i});var s=r(4848),n=r(8453);const t={},a="QuerySet",d={id:"desenvolvimento/django/queryset",title:"QuerySet",description:"Um QuerySet representa uma cole\xe7\xe3o de objetos do banco de dados. Em compara\xe7\xe3o com SQL, um QuerySet equivale a um SELECT. Quando utilizamos o m\xe9todo filter() de um queryset, adicionamos cl\xe1usulas limitantes como WHERE ou LIMIT.",source:"@site/docs/desenvolvimento/django/queryset.md",sourceDirName:"desenvolvimento/django",slug:"/desenvolvimento/django/queryset",permalink:"/docs/desenvolvimento/django/queryset",draft:!1,unlisted:!1,editUrl:"https://github.com/EduardoJM/EduardoJM.github.io/tree/main/docs/desenvolvimento/django/queryset.md",tags:[],version:"current",lastUpdatedBy:"Eduardo Oliveira",lastUpdatedAt:1732296545e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Django",permalink:"/docs/category/django"},next:{title:"Django-Rest-Framework e a API de models do Django",permalink:"/docs/desenvolvimento/django/rest-framework-e-api-models-django"}},c={},i=[];function u(e){const o={a:"a",code:"code",h1:"h1",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"queryset",children:"QuerySet"}),"\n",(0,s.jsxs)(o.p,{children:["Um ",(0,s.jsx)(o.code,{children:"QuerySet"})," representa uma cole\xe7\xe3o de objetos do banco de dados. Em compara\xe7\xe3o com ",(0,s.jsx)(o.strong,{children:"SQL"}),", um ",(0,s.jsx)(o.code,{children:"QuerySet"})," equivale a um ",(0,s.jsx)(o.code,{children:"SELECT"}),". Quando utilizamos o m\xe9todo ",(0,s.jsx)(o.code,{children:"filter()"})," de um queryset, adicionamos cl\xe1usulas limitantes como ",(0,s.jsx)(o.code,{children:"WHERE"})," ou ",(0,s.jsx)(o.code,{children:"LIMIT"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Ao usar o QuerySet, fazer diversas opera\xe7\xf5es tipo ",(0,s.jsx)(o.code,{children:"filter()"})," n\xe3o ir\xe1 acessar o banco de dados. Por exemplo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:"users = User.objects.filter(email__icontains='...').filter(is_active=True).filter(...)\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Mesmo adicionando v\xe1rios filtros, o ",(0,s.jsx)(o.code,{children:"QuerySet"})," n\xe3o ser\xe1 computado e, portanto, n\xe3o ir\xe1 consultar o banco de dados. Para computar um ",(0,s.jsx)(o.code,{children:"QuerySet"}),", \xe9 necess\xe1rio utilizar algum dos m\xe9todos: ",(0,s.jsx)(o.code,{children:".get()"}),", ",(0,s.jsx)(o.code,{children:".first()"}),", etc. conforme ",(0,s.jsx)(o.a,{href:"https://docs.djangoproject.com/en/5.0/ref/models/querysets/#methods-that-do-not-return-querysets",children:"QuerySet API reference"})," ou usando algum dos m\xe9todos para for\xe7ar que o ",(0,s.jsx)(o.code,{children:"QuerySet"})," seja computado: ",(0,s.jsx)(o.a,{href:"https://docs.djangoproject.com/en/5.0/ref/models/querysets/#when-querysets-are-evaluated",children:"QuerySet API reference"}),"."]}),"\n",(0,s.jsx)(o.hr,{}),"\n",(0,s.jsxs)(o.p,{children:["Conhecer esses aspectos do ",(0,s.jsx)(o.code,{children:"QuerySet"})," \xe9 importante para evitar escrever c\xf3digos problem\xe1ticos como, por exemplo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:"ids = [...]\nqueryset = User.objects.filter(is_active=True)\nfor id in ids:\n    user = queryset.get(id=id)\n"})}),"\n",(0,s.jsxs)(o.p,{children:["O uso do ",(0,s.jsx)(o.code,{children:"QuerySet"})," como no exemplo acima ir\xe1 executar uma query no banco de dados para cada ID, enquanto que alterando a l\xf3gica para que o m\xe9todo ",(0,s.jsx)(o.code,{children:".get()"})," n\xe3o seja chamado, apenas uma consulta ao banco de dados ser\xe1 realizada:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:"ids = [...]\nqueryset = User.objects.filter(is_active=True, id__in=ids)\nfor user in queryset:\n    print(user)\n"})})]})}function l(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,o,r)=>{r.d(o,{R:()=>a,x:()=>d});var s=r(6540);const n={},t=s.createContext(n);function a(e){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);