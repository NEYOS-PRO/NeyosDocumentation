import{d as C,b6 as w,an as B,ao as I,r as v,B as S,be as D,c as s,e as n,f as u,n as l,C as e,F as f,af as y,ai as N,ag as g,h as T,t as U,as as j,at as z,ba as A,a9 as F}from"./CB4_3eIY.js";const O=["onClick"],V=C({inheritAttrs:!1,__name:"Tabs",props:{selectedIndex:{type:Number,default:0},class:{type:[String,Object,Array],default:void 0}},setup(_){const h={wrapper:"relative my-5 space-y-6",header:"flex items-center relative overflow-x-auto",border:"absolute bottom-0 inset-x-0 w-full h-px bg-gray-200 dark:bg-gray-800",tab:{base:"px-4 py-2.5 font-semibold text-sm/6 flex items-center gap-1.5 border-b z-[1] focus-visible:outline-primary",active:"text-primary border-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-300 dark:hover:border-gray-700",icon:{base:"w-5 h-5 flex-shrink-0"}}},d=_,i=w(),{ui:r,attrs:x}=B("content.tabs",void 0,h,I(d,"class"),!0),p=v(d.selectedIndex||0),k=v(1),m=S(()=>{var b;return((b=i.default)==null?void 0:b.call(i).map((o,c)=>{var t,a;return{index:c,label:((t=o.props)==null?void 0:t.label)||`${c}`,icon:(a=o.props)==null?void 0:a.icon,component:o}}))||[]});return D(()=>{k.value+=1}),(b,o)=>{const c=F;return s(),n("div",N({class:e(r).wrapper},e(x)),[u("div",{class:l(e(r).header)},[u("div",{class:l(e(r).border)},null,2),(s(!0),n(f,null,y(e(m),(t,a)=>(s(),n("button",{key:a,class:l([e(r).tab.base,e(p)===a?e(r).tab.active:e(r).tab.inactive]),onClick:$=>p.value=a},[t.icon?(s(),g(c,{key:0,name:t.icon,class:l(e(r).tab.icon.base)},null,8,["name","class"])):T("",!0),u("span",null,U(t.label),1)],10,O))),128))],2),(s(!0),n(f,null,y(e(m),(t,a)=>j((s(),n("div",{key:a},[(s(),g(A(t.component)))])),[[z,e(p)===a]])),128))],16)}}}),L=Object.assign(V,{__name:"Tabs"});export{L as default};
