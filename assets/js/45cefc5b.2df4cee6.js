"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[610],{3905:(e,o,a)=>{a.d(o,{Zo:()=>l,kt:()=>c});var t=a(7294);function s(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function n(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?n(Object(a),!0).forEach((function(o){s(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function r(e,o){if(null==e)return{};var a,t,s=function(e,o){if(null==e)return{};var a,t,s={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||(s[a]=e[a]);return s}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var m=t.createContext({}),d=function(e){var o=t.useContext(m),a=o;return e&&(a="function"==typeof e?e(o):i(i({},o),e)),a},l=function(e){var o=d(e.components);return t.createElement(m.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},p=t.forwardRef((function(e,o){var a=e.components,s=e.mdxType,n=e.originalType,m=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),p=d(a),c=s,v=p["".concat(m,".").concat(c)]||p[c]||u[c]||n;return a?t.createElement(v,i(i({ref:o},l),{},{components:a})):t.createElement(v,i({ref:o},l))}));function c(e,o){var a=arguments,s=o&&o.mdxType;if("string"==typeof e||s){var n=a.length,i=new Array(n);i[0]=p;var r={};for(var m in o)hasOwnProperty.call(o,m)&&(r[m]=o[m]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var d=2;d<n;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7707:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var t=a(7462),s=(a(7294),a(3905));const n={sidebar_position:1},i="Nomes Significativos",r={unversionedId:"livros/clean-code/signative-names",id:"livros/clean-code/signative-names",title:"Nomes Significativos",description:"Use nomes que revelem seu prop\xf3sito",source:"@site/docs/livros/clean-code/01-signative-names.md",sourceDirName:"livros/clean-code",slug:"/livros/clean-code/signative-names",permalink:"/notes/docs/livros/clean-code/signative-names",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/livros/clean-code/01-signative-names.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Clean Code",permalink:"/notes/docs/category/clean-code"},next:{title:"intro",permalink:"/notes/docs/intro"}},m={},d=[{value:"Use nomes que revelem seu prop\xf3sito",id:"use-nomes-que-revelem-seu-prop\xf3sito",level:2},{value:"Evite informa\xe7\xf5es erradas",id:"evite-informa\xe7\xf5es-erradas",level:2},{value:"Fa\xe7a Distin\xe7\xf5es Significativas",id:"fa\xe7a-distin\xe7\xf5es-significativas",level:2},{value:"Use Nomes Pronunci\xe1veis",id:"use-nomes-pronunci\xe1veis",level:2},{value:"Use Nomes pass\xedveis de Busca",id:"use-nomes-pass\xedveis-de-busca",level:2},{value:"Evite Codifica\xe7\xf5es",id:"evite-codifica\xe7\xf5es",level:2},{value:"Evite o Mapeamento Mental",id:"evite-o-mapeamento-mental",level:2},{value:"Nomes de Classes",id:"nomes-de-classes",level:2},{value:"Nomes de M\xe9todos",id:"nomes-de-m\xe9todos",level:2},{value:"Selecione uma Palavra por Contexto",id:"selecione-uma-palavra-por-contexto",level:2},{value:"Evite usar a mesma Palavra para dois Prop\xf3sitos",id:"evite-usar-a-mesma-palavra-para-dois-prop\xf3sitos",level:2},{value:"Prefira nomes a partir do Dom\xednio da Solu\xe7\xe3o que do Dom\xednio do Problema",id:"prefira-nomes-a-partir-do-dom\xednio-da-solu\xe7\xe3o-que-do-dom\xednio-do-problema",level:2},{value:"Adicione um Contexto Significativo",id:"adicione-um-contexto-significativo",level:2},{value:"N\xe3o Adicione Contextos Desnecess\xe1rios",id:"n\xe3o-adicione-contextos-desnecess\xe1rios",level:2}],l={toc:d};function u(e){let{components:o,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},l,a,{components:o,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"nomes-significativos"},"Nomes Significativos"),(0,s.kt)("h2",{id:"use-nomes-que-revelem-seu-prop\xf3sito"},"Use nomes que revelem seu prop\xf3sito"),(0,s.kt)("p",null,"O nome de uma vari\xe1vel, fun\xe7\xe3o ou classe deve responder a todas as grandes quest\xf5es. Ele deve lhe dizer porque existe, o que faz e como \xe9 usado."),(0,s.kt)("h2",{id:"evite-informa\xe7\xf5es-erradas"},"Evite informa\xe7\xf5es erradas"),(0,s.kt)("p",null,"Os programadores devem evitar passar dicas falsas que confundam o sentido do c\xf3digo. Devem evitar palavras cujos significados podem se desviar daqueles que desejamos."),(0,s.kt)("admonition",{title:"Exemplo",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"N\xe3o se refira a um grupo de contas como accountList, a menos que realmente seja uma List. A palavra list significa algo espec\xedfico para programadores.")),(0,s.kt)("p",null,"\xc9 preciso evitar, tamb\xe9m, nomes muitos parecidos."),(0,s.kt)("p",null,"Evite gracinhas, piadas, etc. Diga o que voc\xea quer expressar. Expresse o que voc\xea quer dizer."),(0,s.kt)("h2",{id:"fa\xe7a-distin\xe7\xf5es-significativas"},"Fa\xe7a Distin\xe7\xf5es Significativas"),(0,s.kt)("p",null,"Se os nomes precisam ser diferentes, ent\xe3o tamb\xe9m devem ter significados distintos. Fa\xe7a distin\xe7\xe3o das palavras de forma que o leitor compreenda as diferen\xe7as."),(0,s.kt)("p",null,"N\xe3o usar n\xfameros sequ\xeanciais em nomes (",(0,s.kt)("inlineCode",{parentName:"p"},"a1"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"a2"),", ..., ",(0,s.kt)("inlineCode",{parentName:"p"},"aN"),"). Eles n\xe3o oferecem nenhuma informa\xe7\xe3o alguma ou dica sobre a inten\xe7\xe3o de seu criador."),(0,s.kt)("p",null,"Palavras muito comuns s\xe3o forma de distin\xe7\xe3o que nada expressam. Se voc\xea tem duas classes ",(0,s.kt)("inlineCode",{parentName:"p"},"ProductInfo")," e ",(0,s.kt)("inlineCode",{parentName:"p"},"ProductData"),", os seus nomes nada descrevem sobre suas diferen\xe7as."),(0,s.kt)("p",null,"Palavras muito comuns s\xe3o redundantes. O nome de uma vari\xe1vel jamais deve conter a palavra vari\xe1vel. O nome de uma tabela jamais deve conter a palavra tabela."),(0,s.kt)("h2",{id:"use-nomes-pronunci\xe1veis"},"Use Nomes Pronunci\xe1veis"),(0,s.kt)("p",null,"Se n\xe3o puder pronunci\xe1-lo, n\xe3o ter\xe1 como discutir sobre tal nome sem parecer um idiota. Isso importa porque a programa\xe7\xe3o \xe9 uma atividade social."),(0,s.kt)("h2",{id:"use-nomes-pass\xedveis-de-busca"},"Use Nomes pass\xedveis de Busca"),(0,s.kt)("p",null,"Nomes de uma s\xf3 letra ou n\xfameros possuem um problema em particular por n\xe3o ser f\xe1cil localiz\xe1-los ao longo de um texto."),(0,s.kt)("admonition",{title:"Exemplo",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Pior ainda quando uma constante \xe9 um n\xfamero grande e algu\xe9m talvez tenha trocado os d\xedgitos, criando assim um bug e ao mesmo tempo n\xe3o sendo captada pela busca efetuada.")),(0,s.kt)("p",null,"Nomes longos se sobressaem aos curtos, e qualquer nome pass\xedvel se sobressai a uma constante no c\xf3digo."),(0,s.kt)("p",null,"O tamanho de um nome deve ser proporcional ao tamanho do escopo."),(0,s.kt)("h2",{id:"evite-codifica\xe7\xf5es"},"Evite Codifica\xe7\xf5es"),(0,s.kt)("p",null,"Evitar adicionar informa\xe7\xf5es do escopo ou do tipo no nome das vari\xe1veis. \xc9 uma sobrecarga mental desnecess\xe1ria para quem ir\xe1 ler."),(0,s.kt)("h2",{id:"evite-o-mapeamento-mental"},"Evite o Mapeamento Mental"),(0,s.kt)("p",null,"Os leitores n\xe3o devem ter de traduzir mentalmente os nomes que voc\xea escolheu por outros que eles conhe\xe7am."),(0,s.kt)("p",null,"Esse \xe9 um problema com nome de vari\xe1veis de uma s\xf3 letra."),(0,s.kt)("p",null,"Na maioria dos contextos, um nome de uma s\xf3 letra \xe9 uma escolha ruim; \xe9 apenas um armazenador que o leitor dever\xe1 mentalmente mapear de acordo com o conceito em uso. N\xe3o h\xe1 raz\xe3o pior do que usar o nome c s\xf3 porque a e b j\xe1 est\xe3o sendo usados."),(0,s.kt)("h2",{id:"nomes-de-classes"},"Nomes de Classes"),(0,s.kt)("p",null,"Classes e objetos devem ter nomes com substantivo(s)."),(0,s.kt)("h2",{id:"nomes-de-m\xe9todos"},"Nomes de M\xe9todos"),(0,s.kt)("p",null,"Nomes de m\xe9todos devem ter verbo(s)."),(0,s.kt)("p",null,"Usar m\xe9todos de f\xe1brica (factory methody) com nomes que descrevam os par\xe2metros \xe9 prefer\xedvel que v\xe1rios construtores:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"const fulcrumPoint = Complex.FromRealNumber(23.0);\n")),(0,s.kt)("p",null,"\xe9 melhor que"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"const fulcrumPoint = new Complex(23.0);\n")),(0,s.kt)("h2",{id:"selecione-uma-palavra-por-contexto"},"Selecione uma Palavra por Contexto"),(0,s.kt)("admonition",{title:"Exemplo",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\xc9 confuso ter ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"retrieve")," e ",(0,s.kt)("inlineCode",{parentName:"p"},"get")," como m\xe9todos equivalentes de classes diferentes.")),(0,s.kt)("h2",{id:"evite-usar-a-mesma-palavra-para-dois-prop\xf3sitos"},"Evite usar a mesma Palavra para dois Prop\xf3sitos"),(0,s.kt)("admonition",{title:"Exemplo",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Imagine, por exemplo, que v\xe1rias classes tenham um m\xe9todo ",(0,s.kt)("inlineCode",{parentName:"p"},"add")," que criar\xe1 um novo valor por meio da adi\xe7\xe3o de dois valores existentes. Agora digamos que estejamos criando uma nova classe que possua um m\xe9todo ",(0,s.kt)("inlineCode",{parentName:"p"},"add")," que coloque seu \xfanico par\xe2metro em uma cole\xe7\xe3o.")),(0,s.kt)("p",null,"Perceba, do exemplo acima, que a sem\xe2ntica dos m\xe9todos \xe9 diferentes e que, portanto, o segundo m\xe9todo n\xe3o deveria se chamar ",(0,s.kt)("inlineCode",{parentName:"p"},"add"),"."),(0,s.kt)("h2",{id:"prefira-nomes-a-partir-do-dom\xednio-da-solu\xe7\xe3o-que-do-dom\xednio-do-problema"},"Prefira nomes a partir do Dom\xednio da Solu\xe7\xe3o que do Dom\xednio do Problema"),(0,s.kt)("p",null,"\xc9 prefer\xedvel que sejam usados nomes a partir do dom\xednio da solu\xe7\xe3o (programa\xe7\xe3o) do que do dom\xednio do problema (\xe1rea de neg\xf3cio da aplica\xe7\xe3o, por exemplo). Nomes relacionados a programa\xe7\xe3o s\xe3o mais claros e simples de serem entendidos por programadores."),(0,s.kt)("h2",{id:"adicione-um-contexto-significativo"},"Adicione um Contexto Significativo"),(0,s.kt)("p",null,"Voc\xea precisa usar nomes que fa\xe7am parte do contexto para o leitor. Para isso voc\xea os coloca em classes, fun\xe7\xf5es e namespaces bem nomeados. Se nada disso funcionar, ent\xe3o talvez como \xfaltimo recurso seja necess\xe1rio adicionar prefixos ao nome."),(0,s.kt)("admonition",{title:"Exemplo",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Imagine que voc\xea tenha vari\xe1veis chamadas ",(0,s.kt)("inlineCode",{parentName:"p"},"firstName"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"lastName"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"street"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"houseNumber"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"city"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"state")," e ",(0,s.kt)("inlineCode",{parentName:"p"},"zipcode"),". Vistas juntas, fica bem claro que elas formam um endere\xe7o. Mas e se voc\xea s\xf3 visse a vari\xe1vel ",(0,s.kt)("inlineCode",{parentName:"p"},"state")," sozinha num m\xe9todo? Automaticamente voc\xea assumiria ser parte de um endere\xe7o?")),(0,s.kt)("h2",{id:"n\xe3o-adicione-contextos-desnecess\xe1rios"},"N\xe3o Adicione Contextos Desnecess\xe1rios"),(0,s.kt)("admonition",{title:"Exemplo",type:"note"},(0,s.kt)("p",{parentName:"admonition"},'Em um aplicativo fict\xedcio chamado "Gas Station Deluxe" (GSD), seria uma p\xe9ssima ideia adicionar prefixos a toda classe com GSD.')))}u.isMDXComponent=!0}}]);