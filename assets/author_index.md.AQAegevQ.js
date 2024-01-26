import{a5 as D,a6 as J,a7 as K,a8 as R,a9 as H,aa as M,O as Q,h as O,k as I,p as o,d as f,o as i,c as m,r as v,N as W,n as u,a as k,t as T,e as y,m as p,R as L,$ as X,a4 as Y,b as w,w as S,K as Z,G as x,J as F,F as ee,V as te}from"./chunks/framework.S72curNx.js";function se(t){for(var s=-1,e=t==null?0:t.length,r={};++s<e;){var a=t[s];r[a[0]]=a[1]}return r}const ae=t=>t===void 0,ne=t=>typeof t=="number",oe=t=>D(t)?!Number.isNaN(Number(t)):!1;function re(t,s="px"){if(!t)return"";if(ne(t)||oe(t))return`${t}${s}`;if(D(t))return t}const U="__epPropKey",E=t=>t,le=t=>J(t)&&!!t[U],ie=(t,s)=>{if(!J(t)||le(t))return t;const{values:e,required:r,default:a,type:c,validator:$}=t,V={type:c,required:!!r,validator:e||$?N=>{let _=!1,g=[];if(e&&(g=Array.from(e),K(t,"default")&&g.push(a),_||(_=g.includes(N))),$&&(_||(_=$(N))),!_&&g.length>0){const j=[...new Set(g)].map(A=>JSON.stringify(A)).join(", ");R(`Invalid prop: validation failed${s?` for prop "${s}"`:""}. Expected one of [${j}], got value ${JSON.stringify(N)}.`)}return _}:void 0,[U]:!0};return K(t,"default")&&(V.default=a),V},q=t=>se(Object.entries(t).map(([s,e])=>[s,ie(e,s)])),ce=E([String,Object,Function]),z=(t,s)=>{if(t.install=e=>{for(const r of[t,...Object.values(s??{})])e.component(r.name,r)},s)for(const[e,r]of Object.entries(s))t[e]=r;return t},ue=t=>(t.install=H,t),C="el",de="is-",h=(t,s,e,r,a)=>{let c=`${t}-${s}`;return e&&(c+=`-${e}`),r&&(c+=`__${r}`),a&&(c+=`--${a}`),c},me=Symbol("namespaceContextKey"),pe=t=>{const s=t||(M()?Q(me,O(C)):O(C));return I(()=>o(s)||C)},P=(t,s)=>{const e=pe(s);return{namespace:e,b:(n="")=>h(e.value,t,n,"",""),e:n=>n?h(e.value,t,"",n,""):"",m:n=>n?h(e.value,t,"","",n):"",be:(n,l)=>n&&l?h(e.value,t,n,l,""):"",em:(n,l)=>n&&l?h(e.value,t,"",n,l):"",bm:(n,l)=>n&&l?h(e.value,t,n,"",l):"",bem:(n,l,d)=>n&&l&&d?h(e.value,t,n,l,d):"",is:(n,...l)=>{const d=l.length>=1?l[0]:!0;return n&&d?`${de}${n}`:""},cssVar:n=>{const l={};for(const d in n)n[d]&&(l[`--${e.value}-${d}`]=n[d]);return l},cssVarName:n=>`--${e.value}-${n}`,cssVarBlock:n=>{const l={};for(const d in n)n[d]&&(l[`--${e.value}-${t}-${d}`]=n[d]);return l},cssVarBlockName:n=>`--${e.value}-${t}-${n}`}};var B=(t,s)=>{const e=t.__vccOpts||t;for(const[r,a]of s)e[r]=a;return e};const fe=q({size:{type:E([Number,String])},color:{type:String}}),_e=f({name:"ElIcon",inheritAttrs:!1}),he=f({..._e,props:fe,setup(t){const s=t,e=P("icon"),r=I(()=>{const{size:a,color:c}=s;return!a&&!c?{}:{fontSize:ae(a)?void 0:re(a),"--color":c}});return(a,c)=>(i(),m("i",W({class:o(e).b(),style:o(r)},a.$attrs),[v(a.$slots,"default")],16))}});var ye=B(he,[["__file","icon.vue"]]);const ve=z(ye),$e=q({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:E([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),be=f({name:"ElCard"}),ge=f({...be,props:$e,setup(t){const s=P("card");return(e,r)=>(i(),m("div",{class:u([o(s).b(),o(s).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(i(),m("div",{key:0,class:u(o(s).e("header"))},[v(e.$slots,"header",{},()=>[k(T(e.header),1)])],2)):y("v-if",!0),p("div",{class:u([o(s).e("body"),e.bodyClass]),style:L(e.bodyStyle)},[v(e.$slots,"default")],6),e.$slots.footer||e.footer?(i(),m("div",{key:1,class:u(o(s).e("footer"))},[v(e.$slots,"footer",{},()=>[k(T(e.footer),1)])],2)):y("v-if",!0)],2))}});var Te=B(ge,[["__file","card.vue"]]);const Ne=z(Te),Se=f({name:"ElTimeline",setup(t,{slots:s}){const e=P("timeline");return X("timeline",s),()=>Y("ul",{class:[e.b()]},[v(s,"default")])}}),we=q({timestamp:{type:String,default:""},hideTimestamp:{type:Boolean,default:!1},center:{type:Boolean,default:!1},placement:{type:String,values:["top","bottom"],default:"bottom"},type:{type:String,values:["primary","success","warning","danger","info"],default:""},color:{type:String,default:""},size:{type:String,values:["normal","large"],default:"normal"},icon:{type:ce},hollow:{type:Boolean,default:!1}}),Pe=f({name:"ElTimelineItem"}),Ve=f({...Pe,props:we,setup(t){const s=t,e=P("timeline-item"),r=I(()=>[e.e("node"),e.em("node",s.size||""),e.em("node",s.type||""),e.is("hollow",s.hollow)]);return(a,c)=>(i(),m("li",{class:u([o(e).b(),{[o(e).e("center")]:a.center}])},[p("div",{class:u(o(e).e("tail"))},null,2),a.$slots.dot?y("v-if",!0):(i(),m("div",{key:0,class:u(o(r)),style:L({backgroundColor:a.color})},[a.icon?(i(),w(o(ve),{key:0,class:u(o(e).e("icon"))},{default:S(()=>[(i(),w(Z(a.icon)))]),_:1},8,["class"])):y("v-if",!0)],6)),a.$slots.dot?(i(),m("div",{key:1,class:u(o(e).e("dot"))},[v(a.$slots,"dot")],2)):y("v-if",!0),p("div",{class:u(o(e).e("wrapper"))},[!a.hideTimestamp&&a.placement==="top"?(i(),m("div",{key:0,class:u([o(e).e("timestamp"),o(e).is("top")])},T(a.timestamp),3)):y("v-if",!0),p("div",{class:u(o(e).e("content"))},[v(a.$slots,"default")],2),!a.hideTimestamp&&a.placement==="bottom"?(i(),m("div",{key:1,class:u([o(e).e("timestamp"),o(e).is("bottom")])},T(a.timestamp),3)):y("v-if",!0)],2)],2))}});var G=B(Ve,[["__file","timeline-item.vue"]]);const Ce=z(Se,{TimelineItem:G}),Oe=ue(G),ke={class:"sub-title"},Ie=f({__name:"TimeLine",setup(t){const s=O([{startTime:"2022-08",endTime:"now",title:"web 开发",organize:"上海地听信息科技有限公司"},{startTime:"2022-08",endTime:"2023-07",title:"前端开发工程师",organize:"青岛拓宇数智科技有限公司"},{startTime:"2018-09",endTime:"2022-06",title:"数字媒体技术（学士学位）",organize:"潍坊学院"}]);return(e,r)=>{const a=Ne,c=Oe,$=Ce;return i(),w($,null,{default:S(()=>[(i(!0),m(ee,null,x(o(s),b=>(i(),w(c,{timestamp:`${b.startTime} - ${b.endTime}`,placement:"top"},{default:S(()=>[F(a,{class:"timeLine__card"},{default:S(()=>[p("span",null,T(b.title),1),p("span",ke,T(b.organize),1)]),_:2},1024)]),_:2},1032,["timestamp"]))),256))]),_:1})}}}),Ee=p("h2",{id:"经历",tabindex:"-1"},[k("经历 "),p("a",{class:"header-anchor",href:"#经历","aria-label":'Permalink to "经历"'},"​")],-1),qe=te('<h2 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;技术栈&quot;">​</a></h2><h3 id="前端技术栈" tabindex="-1">前端技术栈 <a class="header-anchor" href="#前端技术栈" aria-label="Permalink to &quot;前端技术栈&quot;">​</a></h3><ul><li>vue3</li><li>typescript</li><li>微信小程序</li><li>scss、less、tailwindcss</li><li>webpack、vite</li></ul><h3 id="后端技术栈" tabindex="-1">后端技术栈 <a class="header-anchor" href="#后端技术栈" aria-label="Permalink to &quot;后端技术栈&quot;">​</a></h3><ul><li>nestjs</li><li>redis</li><li>mysql</li><li>docker</li><li>nginx</li></ul><h3 id="其他技术栈" tabindex="-1">其他技术栈 <a class="header-anchor" href="#其他技术栈" aria-label="Permalink to &quot;其他技术栈&quot;">​</a></h3><ul><li>rust</li></ul>',7),Ae=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"author/index.md","filePath":"author/index.md","lastUpdated":1706256230000}'),ze={name:"author/index.md"},Ke=Object.assign(ze,{setup(t){return(s,e)=>(i(),m("div",null,[Ee,F(Ie),qe]))}});export{Ae as __pageData,Ke as default};
