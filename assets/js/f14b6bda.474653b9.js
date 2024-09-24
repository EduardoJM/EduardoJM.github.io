"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[739],{5824:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>r});var l=a(4848),n=a(8453);const i={tags:["Regress\xe3o Linear","Regress\xe3o","Intercepto"]},t="Regress\xe3o Linear Simples",m={id:"matematica/estatistica/regressao-linear-simples",title:"Regress\xe3o Linear Simples",description:"Visual",source:"@site/docs/matematica/estatistica/regressao-linear-simples.md",sourceDirName:"matematica/estatistica",slug:"/matematica/estatistica/regressao-linear-simples",permalink:"/docs/matematica/estatistica/regressao-linear-simples",draft:!1,unlisted:!1,editUrl:"https://github.com/EduardoJM/EduardoJM.github.io/tree/main/docs/matematica/estatistica/regressao-linear-simples.md",tags:[{inline:!0,label:"Regress\xe3o Linear",permalink:"/docs/tags/regressao-linear"},{inline:!0,label:"Regress\xe3o",permalink:"/docs/tags/regressao"},{inline:!0,label:"Intercepto",permalink:"/docs/tags/intercepto"}],version:"current",lastUpdatedBy:"Eduardo Oliveira",lastUpdatedAt:1727136223e3,frontMatter:{tags:["Regress\xe3o Linear","Regress\xe3o","Intercepto"]},sidebar:"tutorialSidebar",previous:{title:"Estat\xedstica Descritiva vs Infer\xeancia Estat\xedstica",permalink:"/docs/matematica/estatistica/inferencia-vs-descritiva"},next:{title:"Desenvolvimento",permalink:"/docs/category/desenvolvimento"}},c={},r=[{value:"Visual",id:"visual",level:2},{value:"F\xf3rmula",id:"f\xf3rmula",level:2},{value:"Determina\xe7\xe3o dos Par\xe2metros",id:"determina\xe7\xe3o-dos-par\xe2metros",level:2},{value:"Inclina\xe7\xe3o",id:"inclina\xe7\xe3o",level:3},{value:"Intercepto",id:"intercepto",level:3}];function h(s){const e={admonition:"admonition",annotation:"annotation",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mover:"mover",mrow:"mrow",mstyle:"mstyle",msub:"msub",msubsup:"msubsup",msup:"msup",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,n.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"regress\xe3o-linear-simples",children:"Regress\xe3o Linear Simples"}),"\n",(0,l.jsx)(e.h2,{id:"visual",children:"Visual"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"Representa\xe7\xe3o de uma regress\xe3o linear. O eixo x apresenta os n\xfameros 0, 1, 2, 3 e 4. O eixo y apresenta os n\xfameros de 0 at\xe9 10. A reta \xe9 crescente e corta o eixo y no ponto y=2. Existem diversos pontos marcados em torno da reta, espalhados com alguma aleat\xf3riedade.",src:a(2546).A+"",width:"494",height:"406"})}),"\n",(0,l.jsx)(e.h2,{id:"f\xf3rmula",children:"F\xf3rmula"}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"\u03b2"}),(0,l.jsx)(e.mn,{children:"0"})]}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"\u03b2"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.mi,{children:"x"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"y = \\beta_0 + \\beta_1 x"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0528em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"0"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0528em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})]})]})}),"\n",(0,l.jsxs)(e.p,{children:["O objetivo \xe9 calcular ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"\u03b2"}),(0,l.jsx)(e.mn,{children:"0"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\beta_0"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0528em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"0"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]})," e ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"\u03b2"}),(0,l.jsx)(e.mn,{children:"1"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\beta_1"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0528em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]}),"."]}),"\n",(0,l.jsx)(e.admonition,{title:"Coeficientes",type:"note",children:(0,l.jsxs)(e.p,{children:[(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"\u03b2"}),(0,l.jsx)(e.mn,{children:"0"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\beta_0"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0528em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"0"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]})," \xe9 chamado de intercepto (coeficiente linear da reta). ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"\u03b2"}),(0,l.jsx)(e.mn,{children:"1"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\beta_1"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0528em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]})," \xe9 chamado de inclina\xe7\xe3o (coeficiente angular da reta).reta."]})}),"\n",(0,l.jsx)(e.admonition,{title:"Vari\xe1veis",type:"note",children:(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["A vari\xe1vel ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"y"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"y"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})})]})," \xe9 chamada de vari\xe1vel dependente, ou resposta."]}),"\n",(0,l.jsxs)(e.li,{children:["A vari\xe1vel ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"x"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})})]})," \xe9 chamda de vari\xe1vel independente ou explicativa."]}),"\n"]})}),"\n",(0,l.jsx)(e.h2,{id:"determina\xe7\xe3o-dos-par\xe2metros",children:"Determina\xe7\xe3o dos Par\xe2metros"}),"\n",(0,l.jsx)(e.h3,{id:"inclina\xe7\xe3o",children:"Inclina\xe7\xe3o"}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"\u03b2"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsxs)(e.mfrac,{children:[(0,l.jsxs)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:[(0,l.jsx)(e.mo,{children:"\u2211"}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mi,{children:"i"})]}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mi,{children:"i"})]}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsxs)(e.mfrac,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{fence:"false",stretchy:"true",minsize:"1.2em",maxsize:"1.2em",children:"("}),(0,l.jsxs)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:[(0,l.jsx)(e.mo,{children:"\u2211"}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mi,{children:"i"})]}),(0,l.jsx)(e.mo,{fence:"false",stretchy:"true",minsize:"1.2em",maxsize:"1.2em",children:")"}),(0,l.jsx)(e.mo,{children:"\u22c5"}),(0,l.jsx)(e.mo,{fence:"false",stretchy:"true",minsize:"1.2em",maxsize:"1.2em",children:"("}),(0,l.jsxs)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:[(0,l.jsx)(e.mo,{children:"\u2211"}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mi,{children:"i"})]}),(0,l.jsx)(e.mo,{fence:"false",stretchy:"true",minsize:"1.2em",maxsize:"1.2em",children:")"})]})]})]}),(0,l.jsx)(e.mi,{children:"n"})]})]}),(0,l.jsxs)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:[(0,l.jsx)(e.mo,{children:"\u2211"}),(0,l.jsxs)(e.msubsup,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsxs)(e.mfrac,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{fence:"false",stretchy:"true",minsize:"1.2em",maxsize:"1.2em",children:"("}),(0,l.jsx)(e.mo,{children:"\u2211"}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mi,{children:"i"})]}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mo,{fence:"false",stretchy:"true",minsize:"1.2em",maxsize:"1.2em",children:")"}),(0,l.jsx)(e.mn,{children:"2"})]})]}),(0,l.jsx)(e.mi,{children:"n"})]})]})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\beta_1 = \\dfrac{\n    \\displaystyle\\sum x_i y_i - \\dfrac{\n        \\big(\n            \\displaystyle\\sum x_i\n        \\big) \\cdot \\big(\n            \\displaystyle\\sum y_i\n        \\big)\n    }{n}\n}{\n    \\displaystyle\\sum x_i^2 - \\dfrac{\n        \\big(\n            \\sum x_i\n        \\big)^2\n    }{n}\n}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0528em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"5.436em",verticalAlign:"-2.37em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(e.span,{className:"mfrac",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"3.066em"},children:[(0,l.jsxs)(e.span,{style:{top:"-2.306em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.99em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mop op-symbol large-op",style:{position:"relative",top:"0em"},children:"\u2211"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.8641em"},children:[(0,l.jsxs)(e.span,{style:{top:"-2.453em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.247em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(e.span,{className:"mfrac",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"1.794em"},children:[(0,l.jsxs)(e.span,{style:{top:"-2.368em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.054em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.284em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.054em"}}),(0,l.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(e.span,{style:{top:"-3.794em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.054em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"delimsizing size1",children:"("})}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mop op-symbol small-op",style:{position:"relative",top:"0em"},children:"\u2211"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"delimsizing size1",children:")"})}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"1.054em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.3029em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.686em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]}),(0,l.jsxs)(e.span,{style:{top:"-4.22em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.99em"}}),(0,l.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(e.span,{style:{top:"-5.066em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.99em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mop op-symbol large-op",style:{position:"relative",top:"0em"},children:"\u2211"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(e.span,{className:"mfrac",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"1.99em"},children:[(0,l.jsxs)(e.span,{style:{top:"-2.364em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.28em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,l.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(e.span,{style:{top:"-3.99em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"delimsizing size1",children:"("})}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mop op-symbol large-op",style:{position:"relative",top:"0em"},children:"\u2211"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"delimsizing size1",children:")"})}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"delimsizing size1",children:"("})}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mop op-symbol large-op",style:{position:"relative",top:"0em"},children:"\u2211"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"delimsizing size1",children:")"})})]})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.686em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"2.37em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]})]})}),"\n",(0,l.jsx)(e.h3,{id:"intercepto",children:"Intercepto"}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"\u03b2"}),(0,l.jsx)(e.mn,{children:"0"})]}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsxs)(e.mover,{accent:"true",children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{children:"\u02c9"})]}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"\u03b2"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsxs)(e.mover,{accent:"true",children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{children:"\u02c9"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\beta_0 = \\bar{y} - \\beta_1\\bar{x}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0528em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"0"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord accent",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.5678em"},children:[(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]}),(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"accent-body",style:{left:"-0.1944em"},children:(0,l.jsx)(e.span,{className:"mord",children:"\u02c9"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.1944em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0528em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mord accent",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.5678em"},children:[(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"})]}),(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"accent-body",style:{left:"-0.2222em"},children:(0,l.jsx)(e.span,{className:"mord",children:"\u02c9"})})]})]})})})})]})]})]})})]})}function d(s={}){const{wrapper:e}={...(0,n.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},2546:(s,e,a)=>{a.d(e,{A:()=>l});const l=a.p+"assets/images/regressao_linear_simples-ab5c609a7c6ac07cae3177daa7968155.jpg"},8453:(s,e,a)=>{a.d(e,{R:()=>t,x:()=>m});var l=a(6540);const n={},i=l.createContext(n);function t(s){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:t(s.components),l.createElement(i.Provider,{value:e},s.children)}}}]);