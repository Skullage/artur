import A from"./DuLyIHcu.js";import{B as r,J as p,O as e,E as i,Q as I,P as O,c as _,D as o,u as l,F as f,R as b,a2 as j,a3 as q,V as x,a4 as w,l as h,Y as F,Z as y,_ as S,a0 as M,C as E,a1 as T}from"./B_HYY72J.js";import{_ as N}from"./D50s2xRx.js";import{_ as U}from"./CWAK-H-c.js";import{_ as G}from"./CF2flmfz.js";import{_ as L}from"./DRfJUcp9.js";import{u as R}from"./CJOGuBF7.js";import{a as J}from"./5HuUbD2C.js";import"./UDVkDwBe.js";import"./5BpEoMwT.js";const Q={class:"card-advantage"},Y={class:"lg:py-12 py-2 px-8 flex justify-center flex-col items-center h-full text-white font-bold text-md lg:text-lg text-center"},Z={__name:"adv-card",props:{title:{type:String,required:!0},icon:{type:String,required:!0}},setup(k){const c=k;return(u,m)=>{const n=A;return r(),p("div",Q,[e("div",Y,[i(n,{name:c.icon,size:"4rem",class:"!text-[2em]"},null,8,["name"]),I(" "+O(c.title),1)])])}}},H=N(Z,[["__scopeId","data-v-d02129f7"]]),K={href:"#",class:"rounded-full flex justify-center items-center hover:scale-105 duration-300 right-16 top-2 absolute border-2 p-2 bg-black"},W={href:"#",class:"rounded-full flex justify-center items-center hover:scale-105 duration-300 right-2 top-2 absolute border-2 p-2 bg-black"},X={class:"md:block hidden"},ee={class:"container"},te={class:"grid md:grid-cols-5 grid-cols-3 gap-4 lg:-mt-24 -mt-12 relative z-20 mb-20"},ae={class:"mb-10"},se={class:"container"},le={class:"mb-10"},ie={class:"container"},oe={class:"bg-primary py-20 lg:py-40"},re={class:"container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4"},ne={__name:"index",setup(k){R({title:"Главная",ogTitle:"Главная",description:"Главная страница сайта",ogDescription:"Главная страница сайта"});const c=[{title:"Высокое качество",icon:"proicons:checkmark-starburst"},{title:"Лидер цен",icon:"hugeicons:discount"},{title:"Широкий выбор",icon:"solar:buildings-outline"},{title:"Любая форма оплаты",icon:"mynaui:credit-card"},{title:"Гарантия от 12 месяцев",icon:"material-symbols:google-guarantee"}],u=_(null),m=_(null),n=_(null),z=()=>{},V=J();return(s,a)=>{const C=A,v=T,g=F,P=H,$=U,B=G,D=L;return r(),p(f,null,[e("div",null,[i(g,{class:"lg:h-[480px] md:h-[240px] h-[120px] m-auto",modules:["SwiperAutoplay"in s?s.SwiperAutoplay:l(y),"SwiperEffectCreative"in s?s.SwiperEffectCreative:l(S),"SwiperNavigation"in s?s.SwiperNavigation:l(M)],navigation:"","slides-per-view":1,"space-between":50,loop:!0,effect:"creative",autoplay:{delay:8e3,disableOnInteraction:!0},"creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}}},{default:o(()=>[i(v,{class:"slide first-slide relative"},{default:o(()=>[e("a",K,[i(C,{name:"bx:bxl-vk",size:"1.6rem",class:"text-white"})]),e("a",W,[i(C,{name:"mdi:instagram",size:"1.6rem",class:"text-white"})])]),_:1})]),_:1},8,["modules"])]),e("div",X,[e("div",ee,[e("div",te,[(r(),p(f,null,b(c,(t,d)=>i(P,{key:d,icon:t.icon,title:t.title},null,8,["icon","title"])),64))])])]),e("div",ae,[e("div",se,[a[3]||(a[3]=e("h2",{class:"uppercase font-bold text-3xl mb-4"},"Каталог продукции",-1)),i(g,{modules:["SwiperAutoplay"in s?s.SwiperAutoplay:l(y),"SwiperEffectCreative"in s?s.SwiperEffectCreative:l(S)],"slides-per-view":5,"space-between":30,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},"creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:3},1024:{slidesPerView:5}}},{default:o(()=>[(r(!0),p(f,null,b(l(V).catalog.filter(t=>t.items.length>0),(t,d)=>(r(),E(v,{key:d},{default:o(()=>[i(B,{to:"/catalog/"+t.category},{default:o(()=>[i($,{title:t.title,image:t.image},null,8,["title","image"])]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1},8,["modules"])])]),e("div",le,[e("div",ie,[a[4]||(a[4]=e("h2",{class:"uppercase font-bold text-3xl mb-4"},"Хиты продаж",-1)),i(g,{modules:["SwiperAutoplay"in s?s.SwiperAutoplay:l(y),"SwiperEffectCreative"in s?s.SwiperEffectCreative:l(S)],"slides-per-view":5,"space-between":30,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},"creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:3},1024:{slidesPerView:5}}},{default:o(()=>[(r(!0),p(f,null,b(l(V).getAllItems.filter(t=>t.hit),(t,d)=>(r(),E(v,{key:d},{default:o(()=>[i(D,{link:`/catalog/${t.id.split("-")[0]}/${t.id.split("-")[1]}`,title:t.title,image:t.image[0],price:t.price,sizes:t.sizes},null,8,["link","title","image","price","sizes"])]),_:2},1024))),128))]),_:1},8,["modules"])])]),e("div",oe,[e("div",re,[a[8]||(a[8]=j('<div class="text-white" data-v-06227d87><h2 class="text-4xl uppercase font-bold mb-8" data-v-06227d87>О компании</h2><div class="text-xl flex flex-col gap-4 mb-6" data-v-06227d87><p data-v-06227d87> Наша деятельность – это обеспечение строительной отрасли комфортным, удобным и недорогим временным жильем. Также мы осуществляем поставки продукции для обустройства дачных и приусадебных участков. </p><p data-v-06227d87> Компания «МОДУЛЬ ПЛЮС» рада предложить каждому своему клиенту полный спектр услуг в области монтажа бытовок, блок-контейнеров, модульных зданий, торговых павильонов, постов охраны, хозблоков и бань. К слову стоит сказать, что такие бани – прекрасный элемент дачного участка, который пользуется огромной популярностью среди наших соотечественников. </p><p data-v-06227d87> Мы располагаем собственной производственно-монтажной и сырьевой базой, что позволяет нашим специалистам полноценно выполнять любые проекты, как индивидуальные, так и типовые. Каждый наш проект – это отличное качество, которое Вы получите в самые короткие сроки. </p><p data-v-06227d87> Если Вас интересуют бытовки, блок-контейнеры, или другие быстровозводимые конструкции, тогда Вы обратились по адресу. Мы с удовольствием будем работать с Вами и готовы предложить весь спектр наших услуг. </p><p data-v-06227d87> Компания «МОДУЛЬ ПЛЮС» заинтересована в сотрудничестве с Вами, поэтому мы контролируем оказание услуг на каждой отдельно взятой стадии, начиная с оформления заказа и до поставки изделия в указанное место. </p><p data-v-06227d87> Мы будем рады видеть Вас нашим клиентом и надеемся на плодотворное, взаимовыгодное сотрудничество! </p></div><div class="flex gap-8" data-v-06227d87><div class="flex flex-col basis-1/2" data-v-06227d87><h3 class="md:text-5xl text-3xl font-bold mb-2" data-v-06227d87>&gt; 1000</h3><span class="h-1 mb-1 w-1/2 bg-gray-300 progress" data-v-06227d87></span><p class="leading-none" data-v-06227d87>единиц выпущенной продукции в год</p></div><div class="flex flex-col basis-1/2" data-v-06227d87><h3 class="md:text-5xl text-3xl font-bold mb-2" data-v-06227d87>&gt; 10</h3><span class="h-1 mb-1 w-1/2 bg-gray-300 progress" data-v-06227d87></span><p class="leading-none" data-v-06227d87>лет на рынке</p></div></div></div>',1)),e("div",null,[e("form",{class:"p-8 grid grid-cols-2 gap-4 text-center bg-secondary text-white",onSubmit:q(z,["prevent"])},[a[5]||(a[5]=e("h3",{class:"text-3xl uppercase font-bold col-span-2 mb-4"}," Напишите нам ",-1)),x(e("input",{type:"text",placeholder:"Ваше имя *","onUpdate:modelValue":a[0]||(a[0]=t=>h(u)?u.value=t:null),class:"border p-2 text-black"},null,512),[[w,l(u)]]),x(e("input",{type:"email",placeholder:"Ваш E-mail *","onUpdate:modelValue":a[1]||(a[1]=t=>h(m)?m.value=t:null),class:"border p-2 text-black"},null,512),[[w,l(m)]]),x(e("textarea",{cols:"20",rows:"5",placeholder:"Ваш вопрос *","onUpdate:modelValue":a[2]||(a[2]=t=>h(n)?n.value=t:null),class:"col-span-2 border p-2 text-black"},null,512),[[w,l(n)]]),a[6]||(a[6]=e("p",{class:"col-span-2"},[I(" Отправляя форму, вы соглашаетесь c "),e("a",{href:"#",class:"underline text-lightGray hover:text-lightGray/90 duration-300"},"политикой конфиденциальности")],-1)),a[7]||(a[7]=e("input",{type:"submit",value:"Отправить",class:"uppercase col-span-2 border-2 px-2 py-4 cursor-pointer hover:bg-[#5aa3d1] duration-500 font-bold hover:border-transparent"},null,-1))],32)])])])],64)}}},xe=N(ne,[["__scopeId","data-v-06227d87"]]);export{xe as default};
