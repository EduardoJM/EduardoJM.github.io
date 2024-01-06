"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7292],{1931:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var l=a(5893),n=a(1151);const i={tags:["Estat\xedstica","Correla\xe7\xe3o","Coreela\xe7\xe3o Linear","Coeficiente de Correla\xe7\xe3o"]},t="Correla\xe7\xe3o Linear",m={id:"estatistica/regress\xe3o-linear/correlacao-linear",title:"Correla\xe7\xe3o Linear",description:"\xc9 uma medida adimensional que est\xe1 entre $-1$ e $1$ e mede a rela\xe7\xe3o entre duas vari\xe1veis;",source:"@site/docs/estatistica/regress\xe3o-linear/correlacao-linear.md",sourceDirName:"estatistica/regress\xe3o-linear",slug:"/estatistica/regress\xe3o-linear/correlacao-linear",permalink:"/docs/estatistica/regress\xe3o-linear/correlacao-linear",draft:!1,unlisted:!1,editUrl:"https://github.com/EduardoJM/EduardoJM.github.io/tree/main/docs/estatistica/regress\xe3o-linear/correlacao-linear.md",tags:[{label:"Estat\xedstica",permalink:"/docs/tags/estatistica"},{label:"Correla\xe7\xe3o",permalink:"/docs/tags/correlacao"},{label:"Coreela\xe7\xe3o Linear",permalink:"/docs/tags/coreelacao-linear"},{label:"Coeficiente de Correla\xe7\xe3o",permalink:"/docs/tags/coeficiente-de-correlacao"}],version:"current",lastUpdatedBy:"Eduardo Oliveira",lastUpdatedAt:1704567875,formattedLastUpdatedAt:"6 de jan. de 2024",frontMatter:{tags:["Estat\xedstica","Correla\xe7\xe3o","Coreela\xe7\xe3o Linear","Coeficiente de Correla\xe7\xe3o"]},sidebar:"tutorialSidebar",previous:{title:"An\xe1lise de Vari\xe2ncia (ANOVA)",permalink:"/docs/estatistica/regress\xe3o-linear/anova"},next:{title:"Regress\xe3o Linear Simples",permalink:"/docs/estatistica/regress\xe3o-linear/regressao-linear-simples"}},r={},c=[{value:"Coeficiente de Correla\xe7\xe3o",id:"coeficiente-de-correla\xe7\xe3o",level:2}];function h(s){const e={admonition:"admonition",annotation:"annotation",h1:"h1",h2:"h2",img:"img",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mover:"mover",mrow:"mrow",msqrt:"msqrt",mstyle:"mstyle",msub:"msub",msubsup:"msubsup",msup:"msup",mtext:"mtext",p:"p",path:"path",semantics:"semantics",span:"span",svg:"svg",...(0,n.a)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"correla\xe7\xe3o-linear",children:"Correla\xe7\xe3o Linear"}),"\n",(0,l.jsxs)(e.p,{children:["\xc9 uma medida adimensional que est\xe1 entre ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"-1"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mord",children:"1"})]})})]})," e ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mn,{children:"1"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"})]})})]})," e mede a rela\xe7\xe3o entre duas vari\xe1veis;"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"Gr\xe1ficos de Correla\xe7\xe3o",src:a(323).Z+"",width:"906",height:"319"})}),"\n",(0,l.jsx)(e.admonition,{title:"Correla\xe7\xe3o Positiva",type:"info",children:(0,l.jsx)(e.p,{children:"Uma correla\xe7\xe3o positiva indica relacionamento diretamente proporcional, ou seja: quando o valor de uma vari\xe1vel aumenta, o da outra tamb\xe9m."})}),"\n",(0,l.jsx)(e.admonition,{title:"Correla\xe7\xe3o Negativa",type:"info",children:(0,l.jsx)(e.p,{children:"Uma correla\xe7\xe3o positiva indica relacionamento inversamente proporcional, ou seja: quando o valor de uma vari\xe1vel aumenta, o da outra diminui."})}),"\n",(0,l.jsx)(e.h2,{id:"coeficiente-de-correla\xe7\xe3o",children:"Coeficiente de Correla\xe7\xe3o"}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mtext,{children:"Corr"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsxs)(e.mfrac,{children:[(0,l.jsxs)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:[(0,l.jsx)(e.mo,{children:"\u2211"}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mi,{children:"i"})]}),(0,l.jsx)(e.mo,{children:"\u22c5"}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mi,{children:"i"})]}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsxs)(e.mover,{accent:"true",children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{children:"\u02c9"})]}),(0,l.jsxs)(e.mover,{accent:"true",children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{children:"\u02c9"})]})]}),(0,l.jsx)(e.msqrt,{children:(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{fence:"false",stretchy:"true",minsize:"2.4em",maxsize:"2.4em",children:"["}),(0,l.jsxs)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:[(0,l.jsx)(e.mo,{children:"\u2211"}),(0,l.jsxs)(e.msubsup,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsxs)(e.mover,{accent:"true",children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{children:"\u02c9"})]}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{fence:"false",stretchy:"true",minsize:"2.4em",maxsize:"2.4em",children:"]"}),(0,l.jsx)(e.mo,{children:"\u22c5"}),(0,l.jsx)(e.mo,{fence:"false",stretchy:"true",minsize:"2.4em",maxsize:"2.4em",children:"["}),(0,l.jsxs)(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:[(0,l.jsx)(e.mo,{children:"\u2211"}),(0,l.jsxs)(e.msubsup,{children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsxs)(e.mover,{accent:"true",children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{children:"\u02c9"})]}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{fence:"false",stretchy:"true",minsize:"2.4em",maxsize:"2.4em",children:"]"})]})]})]})})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\text{Corr}(x, y) = \\dfrac{\n  \\displaystyle\\sum x_i \\cdot y_i - n\\bar{x}\\bar{y}\n}{\n  \\sqrt{\n    \\bigg[\n      \\displaystyle\\sum x_i^2 - n\\bar{x}^2 \\bigg\n    ]\n    \\cdot\n    \\bigg[\n      \\displaystyle\\sum y_i^2 - n\\bar{y}^2 \\bigg\n    ]\n  }\n}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"Corr"})}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"4.92em",verticalAlign:"-2.93em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(e.span,{className:"mfrac",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"1.99em"},children:[(0,l.jsxs)(e.span,{style:{top:"-2.11em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.835em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord sqrt",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"1.835em"},children:[(0,l.jsxs)(e.span,{className:"svg-align",style:{top:"-5em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"5em"}}),(0,l.jsxs)(e.span,{className:"mord",style:{paddingLeft:"1em"},children:[(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"delimsizing size3",children:"["})}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mop op-symbol large-op",style:{position:"relative",top:"0em"},children:"\u2211"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.8641em"},children:[(0,l.jsxs)(e.span,{style:{top:"-2.453em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.247em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord accent",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.5678em"},children:[(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"})]}),(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"accent-body",style:{left:"-0.2222em"},children:(0,l.jsx)(e.span,{className:"mord",children:"\u02c9"})})]})]})})})}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"delimsizing size3",children:"]"})}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"delimsizing size3",children:"["})}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mop op-symbol large-op",style:{position:"relative",top:"0em"},children:"\u2211"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.8641em"},children:[(0,l.jsxs)(e.span,{style:{top:"-2.453em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.247em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord accent",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.5678em"},children:[(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]}),(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"accent-body",style:{left:"-0.1944em"},children:(0,l.jsx)(e.span,{className:"mord",children:"\u02c9"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.1944em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"delimsizing size3",children:"]"})})]})]}),(0,l.jsxs)(e.span,{style:{top:"-3.795em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"5em"}}),(0,l.jsx)(e.span,{className:"hide-tail",style:{minWidth:"1.02em",height:"3.08em"},children:(0,l.jsx)(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"3.08em",viewBox:"0 0 400000 3240",preserveAspectRatio:"xMinYMin slice",children:(0,l.jsx)(e.path,{d:"M473,2793\nc339.3,-1799.3,509.3,-2700,510,-2702 l0 -0\nc3.3,-7.3,9.3,-11,18,-11 H400000v40H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM1001 80h400000v40H1017.7z"})})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"1.205em"},children:(0,l.jsx)(e.span,{})})})]})})})]}),(0,l.jsxs)(e.span,{style:{top:"-4.065em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.835em"}}),(0,l.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(e.span,{style:{top:"-4.775em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.835em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mop op-symbol large-op",style:{position:"relative",top:"0em"},children:"\u2211"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mord accent",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.5678em"},children:[(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"})]}),(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"accent-body",style:{left:"-0.2222em"},children:(0,l.jsx)(e.span,{className:"mord",children:"\u02c9"})})]})]})})})}),(0,l.jsx)(e.span,{className:"mord accent",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.5678em"},children:[(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]}),(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"accent-body",style:{left:"-0.1944em"},children:(0,l.jsx)(e.span,{className:"mord",children:"\u02c9"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.1944em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"2.93em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]})]})})]})}function d(s={}){const{wrapper:e}={...(0,n.a)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},323:(s,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/correlacao-ff17a19ff447e9bf461d341fe464eb7a.jpg"},1151:(s,e,a)=>{a.d(e,{Z:()=>m,a:()=>t});var l=a(7294);const n={},i=l.createContext(n);function t(s){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:t(s.components),l.createElement(i.Provider,{value:e},s.children)}}}]);