import B from"./DuLyIHcu.js";import{a as I,u as M,_ as N}from"./5HuUbD2C.js";import{f as _,c as $,U as V,J as n,O as o,u as t,E as u,Q as E,D as g,P as p,V as P,W as R,l as T,F as w,R as b,X as d,Y as A,B as i,C as D,Z as L,_ as j,$ as F,a0 as H,a1 as O}from"./B_HYY72J.js";import{_ as U}from"./UDVkDwBe.js";import{u as J,a as Q}from"./D50s2xRx.js";import{u as W}from"./CJOGuBF7.js";import"./5BpEoMwT.js";const X={class:"py-4"},Y={class:"container"},Z={class:"mb-4 flex items-center justify-end"},q={class:"flex gap-4 mb-8 flex-col md:flex-row"},G={class:"md:w-1/2 w-full"},K={class:"font-bold text-3xl mb-8 uppercase"},ee={class:"font-bold text-3xl mb-8 block"},te={key:0},se=["value"],ae=["innerHTML"],me={__name:"[id]",setup(oe){const x=I(),m=M(),f=J(),y=Q(),e=_(()=>x.getItemsByCategory(f.params.category)[f.params.id]),r=$(null),v=_(()=>{var s;return e.value.sizes?(s=e.value.sizes.find(a=>a.size===r.value))==null?void 0:s.price.replace(/\B(?=(\d{3})+(?!\d))/g," "):e.value.price.replace(/\B(?=(\d{3})+(?!\d))/g," ")}),S=()=>{const s={title:e.value.sizes?`${e.value.title} ${r.value}`:e.value.title,price:String(v.value).replace(/[^0-9]/g,"")};m.showModal(s)};return V(()=>{r.value=e.value.sizes?e.value.sizes[0].size:null}),W({title:e.value.title,ogTitle:e.value.title}),(s,a)=>{const k=B,h=N,z=O,C=A;return i(),n("div",X,[o("div",Y,[o("div",Z,[o("button",{onClick:a[0]||(a[0]=l=>t(y).go(-1)),class:"cursor-pointer text-xs font-bold uppercase flex items-center hover:text-gray-600 duration-300"},[u(k,{name:"material-symbols:arrow-back-ios"}),a[2]||(a[2]=E(" Назад в каталог "))])]),o("div",q,[u(C,{modules:["SwiperAutoplay"in s?s.SwiperAutoplay:t(L),"SwiperEffectCreative"in s?s.SwiperEffectCreative:t(j),"SwiperPagination"in s?s.SwiperPagination:t(F),"SwiperNavigation"in s?s.SwiperNavigation:t(H)],"slides-per-view":1,"space-between":30,loop:!0,pagination:"",navigation:"",class:"md:w-1/2 w-full basis-full md:basis-1/2 max-h-[450px]",autoplay:{delay:3e3,disableOnInteraction:!1},"creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}}},{default:g(()=>[(i(!0),n(w,null,b(t(e).image,(l,c)=>(i(),D(z,{key:c},{default:g(()=>[u(h,{src:`/catalog-items/${l}`,class:"w-full h-full object-cover cursor-pointer",onClick:ie=>t(m).showBigImage("/catalog-items/",c,t(e).image)},null,8,["src","onClick"])]),_:2},1024))),128))]),_:1},8,["modules"]),o("div",G,[o("h1",K,p(t(e).title),1),o("span",ee,p(t(v)),1),t(e).sizes?(i(),n("div",te,[a[3]||(a[3]=o("span",{class:"block text-sm text-gray-500 mb-4"},"Вариант товара:",-1)),t(e).sizes?P((i(),n("select",{key:0,class:"mb-8 py-2 px-4 block w-3/5","onUpdate:modelValue":a[1]||(a[1]=l=>T(r)?r.value=l:null)},[(i(!0),n(w,null,b(t(e).sizes,(l,c)=>(i(),n("option",{key:c,value:l.size},p(l.size),9,se))),128))],512)),[[R,t(r)]]):d("",!0)])):d("",!0),u(U,{onClick:S,class:"w-3/5"})])]),t(e).desc?(i(),n("div",{key:0,class:"border p-4 text-xl text-[#757576] leading-[190%] flex flex-col gap-4",innerHTML:t(e).desc},null,8,ae)):d("",!0)])])}}};export{me as default};