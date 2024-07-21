"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[8582],{6806:(e,a,d)=>{d.r(a),d.d(a,{assets:()=>t,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=d(5893),s=d(1151);const o={},n="Domain Driven Design",r={id:"arquitetura/ddd/ddd",title:"Domain Driven Design",description:"As anota\xe7\xf5es abaixo foram feitas a partir das aulas da p\xf3s-gradua\xe7\xe3o da PUC-Minas e ser\xe3o complementadas no futuro.",source:"@site/docs/arquitetura/ddd/ddd.md",sourceDirName:"arquitetura/ddd",slug:"/arquitetura/ddd/",permalink:"/docs/arquitetura/ddd/",draft:!1,unlisted:!1,editUrl:"https://github.com/EduardoJM/EduardoJM.github.io/tree/main/docs/arquitetura/ddd/ddd.md",tags:[],version:"current",lastUpdatedBy:"Eduardo Oliveira",lastUpdatedAt:172157859e4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DDD",permalink:"/docs/category/ddd"},next:{title:"Estilo Arquitetural",permalink:"/docs/arquitetura/estilo-arquitetural"}},t={},l=[{value:"Camadas",id:"camadas",level:2},{value:"Camada de aplica\xe7\xe3o",id:"camada-de-aplica\xe7\xe3o",level:3},{value:"Camada de Servi\xe7o",id:"camada-de-servi\xe7o",level:3},{value:"Camada de Infraestrutura",id:"camada-de-infraestrutura",level:3},{value:"Camada de dom\xednio",id:"camada-de-dom\xednio",level:3},{value:"Padr\xf5es essenciais do DDD",id:"padr\xf5es-essenciais-do-ddd",level:2}];function c(e){const a={blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"domain-driven-design",children:"Domain Driven Design"}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"As anota\xe7\xf5es abaixo foram feitas a partir das aulas da p\xf3s-gradua\xe7\xe3o da PUC-Minas e ser\xe3o complementadas no futuro."}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"ddd-diagram",src:d(202).Z+"",width:"1300",height:"817"})}),"\n",(0,i.jsx)(a.h2,{id:"camadas",children:"Camadas"}),"\n",(0,i.jsx)(a.h3,{id:"camada-de-aplica\xe7\xe3o",children:"Camada de aplica\xe7\xe3o"}),"\n",(0,i.jsx)(a.p,{children:"Respons\xe1vel pelo projeto principal. Aqui ser\xe3o implementados os controladores e a exposi\xe7\xe3o de APIs. Tem a fun\xe7\xe3o de receber todas as requisi\xe7\xf5es e direcion\xe1-las a algum Service para executar uma determinada a\xe7\xe3o."}),"\n",(0,i.jsx)(a.h3,{id:"camada-de-servi\xe7o",children:"Camada de Servi\xe7o"}),"\n",(0,i.jsx)(a.p,{children:"Nela s\xe3o implementados fluxos de trabalho e regras globais ao sistema. Essa camada tamb\xe9m usa o dom\xednio para persistir informa\xe7\xf5es contra o banco de dados."}),"\n",(0,i.jsx)(a.h3,{id:"camada-de-infraestrutura",children:"Camada de Infraestrutura"}),"\n",(0,i.jsx)(a.p,{children:"\xc9 dividida em duas subcamadas:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Data"}),": realiza a persist\xeancia com o banco de dados, utilizando, ou n\xe3o, algum ORM."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Cross-Cutting"}),": uma camada 'separada' que n\xe3o obedece a hierarquia de camada. Como o pr\xf3prio nome diz, essa camada cruza toda a a hierarquia. Cont\xe9m as funcionalidades que pode ser utilizadas em qualquer parte do c\xf3digo, como, por exemplo, valida\xe7\xe3o de CPF/CNPJ, consumo de API externa e utiliza\xe7\xe3o de alguma biblioteca de seguran\xe7a. POssui refer\xeancias da camada Domain."]}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"camada-de-dom\xednio",children:"Camada de dom\xednio"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Ele \xe9 respons\xe1vel por representar conceitos, informa\xe7\xf5es e situa\xe7\xf5es referentes ao neg\xf3cios."}),"\n",(0,i.jsx)(a.li,{children:"O estado que reflete a situa\xe7\xe3o de neg\xf3cios \xe9 controlado e usado aqui, embora os detalhes t\xe9cnicos sobre como armazen\xe1-lo sejam delegados \xe0 infraestrutura. Essa camada \xe9 a ess\xeancia de neg\xf3cio do software sendo constru\xeddo."}),"\n",(0,i.jsx)(a.li,{children:"A camada de modelo de dom\xednio \xe9 a implementa\xe7\xe3o do neg\xf3cio. Quando voc\xea implementa uma camada de modelo de dom\xednio de microsservi\xe7o em alguma linguagem, essa camada \xe9 codificada como uma biblioteca de classes reus\xe1vel (DLL ou JAR), com as entidades de dom\xednio que modelam os dados e realizam opera\xe7\xf5es sobre ele."}),"\n",(0,i.jsxs)(a.li,{children:["Seguindo os princ\xedpios de ",(0,i.jsx)(a.strong,{children:"Ignor\xe2ncia de Persist\xeancia"})," e a ",(0,i.jsx)(a.strong,{children:"Ignor\xe2ncia da Infraestutura"}),", essa camada deve ignorar totalmente os detalhes tecnol\xf3gicos. Essas tarefas de persist\xeancia devem ser executadas pela camada de infraestrutura."]}),"\n",(0,i.jsx)(a.li,{children:"Entidades de dom\xednio n\xe3o devem ter nenhuma depend\xeancia direta (como derivar de uma classe base) da infraestrutura ou acesso a dados, como Entity Framework, Hibrnate ou JPA."}),"\n",(0,i.jsx)(a.li,{children:"Idealmente, suas entidades de dom\xednio n\xe3o devem derivar nem implementar nenhum tipo definido na infraestrutura."}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"padr\xf5es-essenciais-do-ddd",children:"Padr\xf5es essenciais do DDD"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Objeto de Valor"}),"\n",(0,i.jsx)(a.li,{children:"Entidade"}),"\n",(0,i.jsx)(a.li,{children:"Raiz agregada"}),"\n",(0,i.jsx)(a.li,{children:"Reposit\xf3rio"}),"\n",(0,i.jsx)(a.li,{children:"Caso de Uso"}),"\n",(0,i.jsx)(a.li,{children:"Contexto Limitado"}),"\n",(0,i.jsx)(a.li,{children:"F\xe1brica de Entidades"}),"\n",(0,i.jsx)(a.li,{children:"Servi\xe7o de Dom\xednio"}),"\n"]})]})}function u(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},202:(e,a,d)=>{d.d(a,{Z:()=>i});const i=d.p+"assets/images/ddd-diagram-05e62e038e6fb1be989eba1afb1a7c8e.png"},1151:(e,a,d)=>{d.d(a,{Z:()=>r,a:()=>n});var i=d(7294);const s={},o=i.createContext(s);function n(e){const a=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(o.Provider,{value:a},e.children)}}}]);