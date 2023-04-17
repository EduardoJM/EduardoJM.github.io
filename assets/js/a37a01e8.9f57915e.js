"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[949],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),m=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=m(r),u=a,g=p["".concat(s,".").concat(u)]||p[u]||l[u]||n;return r?o.createElement(g,i(i({ref:t},c),{},{components:r})):o.createElement(g,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var m=2;m<n;m++)i[m]=r[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},786:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>v,default:()=>j,frontMatter:()=>f,metadata:()=>h,toc:()=>y});var o=r(7462),a=r(7294),n=r(3905),i=r(9960),d=r(6010);const s="cardContainer_MgaF",m="cardTitle_Ebwh",c="cardDescription_RoYk",l="cardThumb_M2jQ",p=e=>{let{href:t,children:r}=e;return a.createElement(i.Z,{href:t,target:"_blank",className:(0,d.Z)("card",s)},r)},u=e=>{let{image:t}=e;return a.createElement("img",{className:l,src:t,loading:"lazy"})},g=e=>{let{title:t,host:r,image:o,date:n,link:i}=e;return a.createElement(p,{href:i},o&&a.createElement(u,{image:o}),a.createElement("div",{className:"padding--lg"},a.createElement("h2",{className:m},t),a.createElement("p",{className:c},"Pubicado no ",r," em ",n)))},f={title:"Artigos"},v="Artigos",h={type:"mdx",permalink:"/articles",source:"@site/src/pages/articles.mdx",title:"Artigos",description:"<ArticleItem",frontMatter:{title:"Artigos"}},y=[],b={toc:y};function j(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"artigos"},"Artigos"),(0,n.kt)(g,{title:"Full-Text Search: Implementando com Postgres e Django",host:"dev.to",date:"10 de abr. de 2023",link:"https://dev.to/eduardojm/full-text-search-implementando-com-postgres-e-django-kmf",image:"https://res.cloudinary.com/practicaldev/image/fetch/s--MmbYDBlG--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3ylm7frrqzpbj8an1s61.jpg",mdxType:"ArticleItem"}),(0,n.kt)(g,{title:"Redesign do Revisa\xea: definindo a arquitetura de informa\xe7\xe3o do dashboard",host:"dev.to",date:"2 de abr. de 2023",link:"https://dev.to/inventare/redesign-do-revisae-definindo-a-arquitetura-de-informacao-do-dashboard-je9",mdxType:"ArticleItem"}),(0,n.kt)(g,{title:"How to Hide Features from Production Environment in React",host:"dev.to",date:"31 de mar. de 2023",link:"https://dev.to/eduardojm/how-to-hide-features-from-production-environment-in-react-1mcn",mdxType:"ArticleItem"}),(0,n.kt)(g,{title:"Redesign do Revisa\xea: testando em produ\xe7\xe3o",host:"dev.to",date:"28 de mar. de 2023",link:"https://dev.to/inventare/redesign-do-revisae-testando-em-producao-15op",mdxType:"ArticleItem"}),(0,n.kt)(g,{title:"Redesign do Revisa\xea: as premissas",host:"dev.to",date:"18 de mar. de 2023",link:"https://dev.to/inventare/redesign-do-revisae-as-premissas-45b4",mdxType:"ArticleItem"}),(0,n.kt)(g,{title:"Django-Rest-Framework e Code Coverage: uma m\xe9trica complexa e que n\xe3o diz muita coisa",host:"dev.to",date:"30 de dez. de 2022",link:"https://dev.to/eduardojm/django-rest-framework-e-code-coverage-uma-metrica-complexa-e-que-nao-diz-muita-coisa-4phn",mdxType:"ArticleItem"}),(0,n.kt)(g,{title:"django-storages + S3: lidando com arquivos de mesmo nome",host:"dev.to",date:"10 de dez. de 2022",link:"https://dev.to/eduardojm/django-storages-s3-lidando-com-arquivos-de-mesmo-nome-4eo1",mdxType:"ArticleItem"}),(0,n.kt)(g,{title:"django-admin: criando um AdminSite customizado sem perder o registro autom\xe1tico dos Models",host:"dev.to",date:"11 de nov. de 2022",image:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/73xbevo4unzfz24frecw.png",link:"https://dev.to/eduardojm/django-admin-criando-um-adminsite-customizado-sem-perder-o-registro-automatico-dos-models-3f3k",mdxType:"ArticleItem"}),(0,n.kt)(g,{title:"Django + Celery: testando sistemas com filas",host:"dev.to",date:"26 de set. de 2022",image:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q64ed8ycv8mpgq5rhvdt.png",link:"https://dev.to/eduardojm/django-celery-testando-sistemas-com-filas-3e1n",mdxType:"ArticleItem"}),(0,n.kt)(g,{title:"Test Collision With Separating Axis Theorem in JavaScript",host:"Medium",date:"11 de jul. de 2020",link:"https://medium.com/@edu-js-o/test-collision-with-separating-axis-theorem-in-javascript-8456d1c92b6c",mdxType:"ArticleItem"}))}j.isMDXComponent=!0}}]);