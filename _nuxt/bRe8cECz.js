import{d as S,an as U,ao as f,c as i,e as u,n as c,C as e,ah as x,h as m,f as b,ai as _,g as P,t as $,i as C,F as H,af as E,ag as h,a9 as j,am as le,w as A,aJ as ce,ak as ue,al as ee,k as de,aa as M,B as O,aK as R,ar as q,x as D,aL as pe,aM as ge,r as T,E as me,aN as ye,aO as be,a as fe,u as ve,aP as he,s as ke,aQ as te,aR as xe,aS as _e,au as ne,aT as ae,aU as we,aV as $e,q as se,aW as Ce}from"./CB4_3eIY.js";import Se from"./BHAUdWSN.js";import"./BBW3bIcw.js";import"./B-0SR3Fh.js";import"./hbOoBq-x.js";const Ue={wrapper:{base:"flex items-center align-center text-center",horizontal:"w-full flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs",type:"solid"}},Oe={class:"flex flex-col lg:flex-row items-start gap-6"},Ae={class:"flex-1"},je=S({inheritAttrs:!1,__name:"PageHeader",props:{headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const r={wrapper:"relative border-b border-gray-200 dark:border-gray-800 py-8",container:"flex flex-col lg:flex-row lg:items-center lg:justify-between",headline:"mb-3 text-sm/6 font-semibold text-primary flex items-center gap-1.5",title:"text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",icon:{wrapper:"flex",base:"w-10 h-10 flex-shrink-0 text-primary"},links:"flex flex-wrap items-center gap-1.5 mt-4 lg:mt-0"},l=t,{ui:s,attrs:n}=U("page.header",f(l,"ui"),r,f(l,"class"),!0);return(o,a)=>{var p;const g=j,y=le;return i(),u("div",_({class:e(s).wrapper},e(n)),[t.headline||o.$slots.headline?(i(),u("div",{key:0,class:c(e(s).headline)},[x(o.$slots,"headline",{},()=>[P($(t.headline),1)])],2)):m("",!0),b("div",Oe,[t.icon||o.$slots.icon?(i(),u("div",{key:0,class:c(e(s).icon.wrapper)},[x(o.$slots,"icon",{},()=>[C(g,{name:t.icon,class:c(e(s).icon.base)},null,8,["name","class"])])],2)):m("",!0),b("div",Ae,[b("div",{class:c(e(s).container)},[b("h1",{class:c(e(s).title)},[x(o.$slots,"title",{},()=>[P($(t.title),1)])],2),(p=t.links)!=null&&p.length||o.$slots.links?(i(),u("div",{key:0,class:c(e(s).links)},[x(o.$slots,"links",{},()=>[(i(!0),u(H,null,E(t.links,(v,d)=>(i(),h(y,_({key:d,ref_for:!0},{...v,target:v.target||"_blank",color:v.color||"white"},{onClick:v.click}),null,16,["onClick"]))),128))])],2)):m("",!0)],2),t.description||o.$slots.description?(i(),u("div",{key:0,class:c(e(s).description)},[x(o.$slots,"description",{},()=>[P($(t.description),1)])],2)):m("",!0),x(o.$slots,"default")])])],16)}}}),ze=Object.assign(je,{__name:"UPageHeader"}),Ie=S({inheritAttrs:!1,__name:"ContentSurroundLink",props:{link:{type:Object,required:!0},icon:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const r={wrapper:"block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group",icon:{wrapper:"inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50",base:"w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary"},title:"font-medium text-gray-900 dark:text-white text-[15px] mb-1",description:"text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"},l=t,{ui:s,attrs:n}=U("content.surround.link",f(l,"ui"),r,f(l,"class"),!0);return(o,a)=>{const g=j,y=ce;return i(),h(y,_({to:t.link._path,class:e(s).wrapper},e(n)),{default:A(()=>[t.icon||t.link.icon?(i(),u("div",{key:0,class:c(e(s).icon.wrapper)},[C(g,{name:t.icon||t.link.icon,class:c(e(s).icon.base)},null,8,["name","class"])],2)):m("",!0),b("p",{class:c(e(s).title)},$(t.link.title),3),b("p",{class:c(e(s).description)},$(t.link.description),3)]),_:1},16,["to","class"])}}}),Le=Object.assign(Ie,{__name:"UContentSurroundLink"}),Pe={key:1,class:"hidden sm:block"},Be=S({inheritAttrs:!1,__name:"ContentSurround",props:{surround:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const r={wrapper:"grid gap-8 sm:grid-cols-2",icon:{prev:"i-heroicons-arrow-left-20-solid",next:"i-heroicons-arrow-right-20-solid"},link:{}},l=t,{ui:s,attrs:n}=U("content.surround",f(l,"ui"),r,f(l,"class"),!0),[o,a]=l.surround||[];return(g,y)=>{const p=Le;return i(),u("div",_({class:e(s).wrapper},e(n)),[e(o)?(i(),h(p,{key:0,link:e(o),ui:e(s).link,icon:e(s).icon.prev},null,8,["link","ui","icon"])):(i(),u("span",Pe," ")),e(a)?(i(),h(p,{key:2,link:e(a),ui:e(s).link,icon:e(s).icon.next,class:"text-right"},null,8,["link","ui","icon"])):m("",!0)],16)}}}),Te=Object.assign(Be,{__name:"UContentSurround"}),He=S({inheritAttrs:!1,__name:"PageBody",props:{prose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const r={wrapper:"mt-8 pb-24",prose:"prose prose-primary dark:prose-invert max-w-none"},l=t,{ui:s,attrs:n}=U("page.body",f(l,"ui"),r,f(l,"class"),!0);return(o,a)=>(i(),u("div",_({class:[e(s).wrapper,t.prose&&e(s).prose]},e(n)),[x(o.$slots,"default")],16))}}),Ne=Object.assign(He,{__name:"UPageBody"}),L=ue(ee.ui.strategy,ee.ui.divider,Ue),qe=S({components:{UIcon:j,UAvatar:M},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>L.default.size,validator(t){return Object.keys(L.border.size.horizontal).includes(t)||Object.keys(L.border.size.vertical).includes(t)}},orientation:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},type:{type:String,default:()=>L.default.type,validator:t=>["solid","dotted","dashed"].includes(t)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t){const{ui:r,attrs:l}=U("divider",f(t,"ui"),L),s=O(()=>R(q(r.value.wrapper.base,r.value.wrapper[t.orientation]),t.class)),n=O(()=>q(r.value.container.base,r.value.container[t.orientation])),o=O(()=>q(r.value.border.base,r.value.border[t.orientation],r.value.border.size[t.orientation][t.size],r.value.border.type[t.type]));return{ui:r,attrs:l,wrapperClass:s,containerClass:n,borderClass:o}}});function Re(t,r,l,s,n,o){const a=j,g=M;return i(),u("div",_({class:t.wrapperClass},t.attrs),[b("div",{class:c(t.borderClass)},null,2),t.label||t.icon||t.avatar||t.$slots.default?(i(),u(H,{key:0},[b("div",{class:c(t.containerClass)},[x(t.$slots,"default",{},()=>[t.label?(i(),u("span",{key:0,class:c(t.ui.label)},$(t.label),3)):t.icon?(i(),h(a,{key:1,name:t.icon,class:c(t.ui.icon.base)},null,8,["name","class"])):t.avatar?(i(),h(g,_({key:2},{size:t.ui.avatar.size,...t.avatar},{class:t.ui.avatar.base}),null,16,["class"])):m("",!0)])],2),b("div",{class:c(t.borderClass)},null,2)],64)):m("",!0)],16)}const Ee=Object.assign(de(qe,[["render",Re]]),{__name:"UDivider"}),Me=S({inheritAttrs:!1,__name:"PageLinks",props:{title:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const r=D(),l=O(()=>({wrapper:"space-y-3",title:"text-sm/6 font-semibold flex items-center gap-1.5",container:"space-y-3 lg:space-y-1.5",base:"flex items-center gap-1.5",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{base:"w-5 h-5 flex-shrink-0"},avatar:{base:"self-center",size:"2xs"},externalIcon:{name:r.ui.icons.external,base:"w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"},label:"text-sm/6 font-medium relative"})),s=t,{ui:n,attrs:o}=U("page.links",f(s,"ui"),l,f(s,"class"),!0);return(a,g)=>{const y=j,p=M,v=ge;return i(),u("div",_({class:e(n).wrapper},e(o)),[t.title||a.$slots.title?(i(),u("p",{key:0,class:c(e(n).title)},[x(a.$slots,"title",{},()=>[P($(t.title),1)])],2)):m("",!0),b("div",{class:c(e(n).container)},[x(a.$slots,"default",{},()=>[(i(!0),u(H,null,E(t.links,(d,k)=>(i(),h(v,_({key:k,ref_for:!0},e(pe)(d),{class:e(n).base,"active-class":e(n).active,"inactive-class":e(n).inactive,onClick:d.click}),{default:A(()=>[d.icon?(i(),h(y,{key:0,name:d.icon,class:c(e(R)(e(n).icon.base,d.iconClass))},null,8,["name","class"])):m("",!0),d.avatar?(i(),h(p,_({key:1,ref_for:!0},{size:e(n).avatar.size,...d.avatar},{class:e(R)(e(n).avatar.base,d.avatarClass)}),null,16,["class"])):m("",!0),b("span",{class:c(e(n).label)},[P($(d.label)+" ",1),d.target==="_blank"?(i(),h(y,{key:0,name:e(n).externalIcon.name,class:c(e(n).externalIcon.base)},null,8,["name","class"])):m("",!0)],2)]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))])],2)],16)}}}),De=Object.assign(Me,{__name:"UPageLinks"}),Ve=()=>{const t=T(),r=T([]),l=T([]),s=o=>{o.forEach(a=>{const g=a.target.id;a.isIntersecting?r.value=[...r.value,g]:r.value=r.value.filter(y=>y!==g)})},n=o=>{o.forEach(a=>{t.value&&t.value.observe(a)})};return me(r,(o,a)=>{o.length===0?l.value=a:l.value=o}),ye(()=>t.value=new IntersectionObserver(s)),be(()=>{var o;return(o=t.value)==null?void 0:o.disconnect()}),{visibleHeadings:r,activeHeadings:l,updateHeadings:n}},Fe=["href","onClick"],Je=S({inheritAttrs:!1,__name:"ContentTocLinks",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["move"],setup(t,{emit:r}){const l={wrapper:"space-y-1",base:"block text-sm/6 truncate",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",depth:"ml-3"},s=t,n=r,o=fe(),a=ve(),{activeHeadings:g,updateHeadings:y}=Ve(),{ui:p,attrs:v}=U("content.toc.links",f(s,"ui"),l,f(s,"class"),!0);a.hooks.hookOnce("page:finish",()=>{y([...document.querySelectorAll("h2"),...document.querySelectorAll("h3")])});const d=k=>{const z=encodeURIComponent(k);o.push(`#${z}`),n("move",k)};return(k,z)=>{var B;const N=re;return(B=t.links)!=null&&B.length?(i(),u("ul",_({key:0,class:e(p).wrapper},e(v)),[(i(!0),u(H,null,E(t.links,w=>(i(),u("li",{key:w.text,class:c([e(p).wrapper,w.depth===3&&e(p).depth])},[b("a",{href:`#${w.id}`,class:c([e(p).base,e(g).includes(w.id)?e(p).active:e(p).inactive]),onClick:he(V=>d(w.id),["prevent"])},$(w.text),11,Fe),w.children?(i(),h(N,{key:0,links:w.children,ui:e(p)},null,8,["links","ui"])):m("",!0)],2))),128))],16)):m("",!0)}}}),re=Object.assign(Je,{__name:"UContentTocLinks"}),Ke=S({inheritAttrs:!1,__name:"ContentToc",props:{title:{type:String,default:"Table of Contents"},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const r=D(),l=O(()=>({wrapper:"sticky top-[--header-height] bg-background/75 backdrop-blur -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))]",container:{base:"py-3 lg:py-8 border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3",empty:"lg:py-8 space-y-3"},button:{base:"flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group",label:"font-semibold text-sm/6 truncate",trailingIcon:{name:r.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90"}},links:{}})),s=t,{ui:n,attrs:o}=U("content.toc",f(s,"ui"),l,f(s,"class"),!0),a=T(!1);return(g,y)=>{var d,k;const p=j,v=re;return i(),u("nav",_({class:e(n).wrapper},e(o)),[b("div",{class:c([(d=t.links)!=null&&d.length?e(n).container.base:e(n).container.empty])},[x(g.$slots,"top"),(k=t.links)!=null&&k.length?(i(),u("button",{key:0,class:c(e(n).button.base),tabindex:"-1",onClick:y[0]||(y[0]=z=>a.value=!e(a))},[b("span",{class:c(e(n).button.label)},$(t.title),3),C(p,{name:e(n).button.trailingIcon.name,class:c(["lg:!hidden",[e(n).button.trailingIcon.base,e(a)?e(n).button.trailingIcon.active:e(n).button.trailingIcon.inactive]])},null,8,["name","class"])],2)):m("",!0),C(v,{links:t.links,ui:e(n).links,class:c([e(a)?"lg:block":"hidden lg:block"])},null,8,["links","ui","class"]),x(g.$slots,"bottom")],2)],16)}}}),Qe=Object.assign(Ke,{__name:"UContentToc"}),We={key:1},tt=S({__name:"[...slug]",async setup(t){let r,l;const s=ke(),{toc:n,seo:o}=D(),{data:a}=([r,l]=te(()=>ae(s.path,()=>se(s.path).findOne(),"$vHqkxevve1")),r=await r,l(),r);if(!a.value)throw xe({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:g}=([r,l]=te(()=>ae(`${s.path}-surround`,()=>se().where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(Ce(s.path)))),r=await r,l(),r);_e({title:a.value.title,ogTitle:`${a.value.title} - ${o==null?void 0:o.siteName}`,description:a.value.description,ogDescription:a.value.description});const y=O(()=>we(a.value)),p=O(()=>{var v,d,k;return[((v=n==null?void 0:n.bottom)==null?void 0:v.edit)&&{icon:"i-heroicons-pencil-square",label:"Edit this page",to:`${n.bottom.edit}/${(d=a==null?void 0:a.value)==null?void 0:d._file}`,target:"_blank"},...((k=n==null?void 0:n.bottom)==null?void 0:k.links)||[]].filter(Boolean)});return(v,d)=>{const k=ze,z=Se,N=Te,B=Ne,w=Ee,V=De,oe=Qe,ie=$e;return i(),h(ie,null,ne({default:A(()=>[C(k,{title:e(a).title,description:e(a).description,links:e(a).links,headline:e(y)},null,8,["title","description","links","headline"]),C(B,{prose:""},{default:A(()=>{var I;return[e(a).body?(i(),h(z,{key:0,value:e(a)},null,8,["value"])):m("",!0),(I=e(g))!=null&&I.length?(i(),u("hr",We)):m("",!0),C(N,{surround:e(g)},null,8,["surround"])]}),_:1})]),_:2},[e(a).toc!==!1?{name:"right",fn:A(()=>{var I,F,J,K;return[C(oe,{title:(I=e(n))==null?void 0:I.title,links:(J=(F=e(a).body)==null?void 0:F.toc)==null?void 0:J.links},ne({_:2},[(K=e(n))!=null&&K.bottom?{name:"bottom",fn:A(()=>{var Q,W,G,X,Y,Z;return[b("div",{class:c(["hidden lg:block space-y-6",{"!mt-6":(G=(W=(Q=e(a).body)==null?void 0:Q.toc)==null?void 0:W.links)==null?void 0:G.length}])},[(Z=(Y=(X=e(a).body)==null?void 0:X.toc)==null?void 0:Y.links)!=null&&Z.length?(i(),h(w,{key:0,type:"dashed"})):m("",!0),C(V,{title:e(n).bottom.title,links:e(p)},null,8,["title","links"])],2)]}),key:"0"}:void 0]),1032,["title","links"])]}),key:"0"}:void 0]),1024)}}});export{tt as default};
