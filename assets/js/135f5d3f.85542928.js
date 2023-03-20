"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[342],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>u});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),d=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=d(e.components);return r.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(t),u=n,f=c["".concat(s,".").concat(u)]||c[u]||p[u]||o;return t?r.createElement(f,i(i({ref:a},m),{},{components:t})):r.createElement(f,i({ref:a},m))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3921:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(7462),n=(t(7294),t(3905));const o={sidebar_position:2},i="Rotas",l={unversionedId:"dfes/mdfe/rotas",id:"dfes/mdfe/rotas",title:"Rotas",description:"No caso de modal rodovi\xe1rio, em que existir pelo menos um estado (UF) entre a UF de carregamento e a UF de descarregamento (por exemplo, manifesto com carregamento em GO e descarregamento em MA), o percurso deve ser informado, conforme a regra abaixo.",source:"@site/docs/dfes/mdfe/03-rotas.md",sourceDirName:"dfes/mdfe",slug:"/dfes/mdfe/rotas",permalink:"/docs/dfes/mdfe/rotas",draft:!1,editUrl:"https://github.com/EduardoJM/EduardoJM.github.io/tree/main/docs/dfes/mdfe/03-rotas.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"V\xe1rias Descargas em Diferentes Localidades",permalink:"/docs/dfes/mdfe/varios-carregamentos-descargas"},next:{title:"Experi\xeancia do Usu\xe1rio",permalink:"/docs/category/experi\xeancia-do-usu\xe1rio"}},s={},d=[{value:"Regra de Neg\xf3cio",id:"regra-de-neg\xf3cio",level:2},{value:"Valida\xe7\xe3o",id:"valida\xe7\xe3o",level:2},{value:"Refer\xeancias",id:"refer\xeancias",level:2}],m={toc:d};function p(e){let{components:a,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rotas"},"Rotas"),(0,n.kt)("p",null,"No caso de modal rodovi\xe1rio, em que existir pelo menos um estado (UF) entre a UF de carregamento e a UF de descarregamento (por exemplo, manifesto com carregamento em GO e descarregamento em MA), o percurso deve ser informado, conforme a regra abaixo."),(0,n.kt)("h2",{id:"regra-de-neg\xf3cio"},"Regra de Neg\xf3cio"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"#"),(0,n.kt)("th",{parentName:"tr",align:null},"Regra de Valida\xe7\xe3o"),(0,n.kt)("th",{parentName:"tr",align:null},"Cr\xedtica"),(0,n.kt)("th",{parentName:"tr",align:null},"Msg"),(0,n.kt)("th",{parentName:"tr",align:null},"Efeito"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"G076"),(0,n.kt)("td",{parentName:"tr",align:null},"Se modal Rodovi\xe1rio, o grupo de informa\xe7\xf5es de UF de percurso dever\xe1 ser preenchido na ordem Origem - Destino sempre que existir pelo menos uma UF entre a UF de carregamento e UF de descarregamento. ",(0,n.kt)("br",null),(0,n.kt)("br",null)," ",(0,n.kt)("strong",{parentName:"td"},"Observa\xe7\xe3o: ")," A regra ser\xe1 aplicada considerando as divisas poss\xedveis na ordem definida para o percurso."),(0,n.kt)("td",{parentName:"tr",align:null},"Obrig."),(0,n.kt)("td",{parentName:"tr",align:null},"663"),(0,n.kt)("td",{parentName:"tr",align:null},"Rej.")))),(0,n.kt)("p",null,"Sendo assim, no caso exemplificado acima, seria necess\xe1rio preencher os campos ",(0,n.kt)("inlineCode",{parentName:"p"},"<infPercurso>"),", como o leiaute os define:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"#"),(0,n.kt)("th",{parentName:"tr",align:null},"Campo"),(0,n.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"),(0,n.kt)("th",{parentName:"tr",align:null},"Ocorr."),(0,n.kt)("th",{parentName:"tr",align:null},"Tamanho"),(0,n.kt)("th",{parentName:"tr",align:null},"Observa\xe7\xf5es"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"24"),(0,n.kt)("td",{parentName:"tr",align:null},"infPercurso"),(0,n.kt)("td",{parentName:"tr",align:null},"Informa\xe7\xf5es do Percurso do MDF-e"),(0,n.kt)("td",{parentName:"tr",align:null},"0 - 25"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"25"),(0,n.kt)("td",{parentName:"tr",align:null},"\xa0","\xa0","\xa0","\xa0","\xa0","UFPer"),(0,n.kt)("td",{parentName:"tr",align:null},"Sigla das Unidades da Federa\xe7\xe3o do percurso do ve\xedculo."),(0,n.kt)("td",{parentName:"tr",align:null},"1 - 1"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"N\xe3o \xe9 necess\xe1rio repetir as UF de In\xedcio e Fim")))),(0,n.kt)("admonition",{title:"Observa\xe7\xe3o",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Os campos do Leiaute que n\xe3o s\xe3o importantes para essas anota\xe7\xf5es foram removidos da tabela acima.")),(0,n.kt)("p",null,"Existe, como observa\xe7\xe3o, a informa\xe7\xe3o de que n\xe3o \xe9 necess\xe1rio repetir as UF de In\xedcio e Fim e repetir as mesmas pode, inclusive, gerar mesma rejei\xe7\xe3o. Por exemplo, no caso de um manifesto saindo de GO at\xe9 PI passando por TO e BA teriam os dados do XML preenchidos parecido com:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<MDFe xmlns="http://www.portalfiscal.inf.br/mdfe">\n    <infMDFe versao="3.00" id="MDFe...">\n        <ide>\n            \x3c!-- ... --\x3e\n            <UFIni>GO</UFIni>\n            <UFFim>PI</UFFim>\n            <infPercurso>\n                <UFPer>TO</UFPer>\n            </infPercurso>\n            <infPercurso>\n                <UFPer>BA</UFPer>\n            </infPercurso>\n            \x3c!-- ... --\x3e\n        </ide>\n        \x3c!-- ... --\x3e\n    </infMDFe>\n</MDFe>\n')),(0,n.kt)("h2",{id:"valida\xe7\xe3o"},"Valida\xe7\xe3o"),(0,n.kt)("p",null,"Assim, a rota para o transporte seria ",(0,n.kt)("inlineCode",{parentName:"p"},"GO -> TO -> BA -> PI"),". Dentro desse contexto, faz sentido, por exemplo, se antecipar a SEFAZ e validar a rota inserida. Vejamos um exemplo (com auxilio do mapa abaixo):"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Validar as UF's que fazem divisa com GO (",(0,n.kt)("inlineCode",{parentName:"li"},"['MS', 'MT', 'TO', 'BA', 'DF', 'MG']"),"). TO est\xe1 devidamente na lista."),(0,n.kt)("li",{parentName:"ol"},"Validar as UF's que fazem divisa com TO (",(0,n.kt)("inlineCode",{parentName:"li"},"['MT', 'PA', 'MA', 'PI', 'BA', 'GO']"),"). BA est\xe1 devidamente na lista."),(0,n.kt)("li",{parentName:"ol"},"Validar as UF's que fazem divisa com BA (",(0,n.kt)("inlineCode",{parentName:"li"},"['TO', 'PI', 'PE', 'AL', 'SE', 'ES', 'MG', 'GO']"),"). PI est\xe1 devidamente na lista."),(0,n.kt)("li",{parentName:"ol"},"Vejamos que PI n\xe3o \xe9 necess\xe1rio nenhuma valida\xe7\xe3o pois \xe9 o fim do percurso.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"mapa do Brasil com as UF&#39;s",src:t(9407).Z,width:"2000",height:"2000"})),(0,n.kt)("p",null,"Um algoritmo pode ser, de forma simples, implementado para executar essa valida\xe7\xe3o antes do envio, de fato, do documento para a SEFAZ."),(0,n.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dfe-portal.svrs.rs.gov.br/Mdfe/Documentos#"},"Leiaute - Portal do Manifesto Eletr\xf4nico de Documentos Fiscais - SVRS"))))}p.isMDXComponent=!0},9407:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/brasil-63a281bc12972e55fff5ad765d7abe52.jpg"}}]);