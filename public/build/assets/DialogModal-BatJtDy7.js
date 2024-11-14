import{S as _}from"./SectionTitle-Bwant7KX.js";import{o as u,e as x,b as m,w as c,r as n,a as e,d as p,G as b,s as k,z as $,k as B,l as h,B as w,C as v,n as S,f as C,c as E}from"./app-DA-mYySs.js";const W={class:"md:grid md:grid-cols-3 md:gap-6"},z={class:"mt-5 md:mt-0 md:col-span-2"},M={class:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg dark:bg-gray-800 sm:dark:text-gray-200"},O={__name:"ActionSection",setup(t){return(a,s)=>(u(),x("div",W,[m(_,null,{title:c(()=>[n(a.$slots,"title")]),description:c(()=>[n(a.$slots,"description")]),_:3}),e("div",z,[e("div",M,[n(a.$slots,"content")])])]))}},D={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},N={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:a}){const s=t,d=a,o=p(),r=p(s.show);b(()=>s.show,()=>{var l;s.show?(document.body.style.overflow="hidden",r.value=!0,(l=o.value)==null||l.showModal()):(document.body.style.overflow=null,setTimeout(()=>{var i;(i=o.value)==null||i.close(),r.value=!1},200))});const f=()=>{s.closeable&&d("close")},y=l=>{l.key==="Escape"&&(l.preventDefault(),s.show&&f())};k(()=>document.addEventListener("keydown",y)),$(()=>{document.removeEventListener("keydown",y),document.body.style.overflow=null});const g=B(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[s.maxWidth]);return(l,i)=>(u(),x("dialog",{class:"z-50 m-0 min-h-full min-w-full overflow-y-auto bg-transparent backdrop:bg-transparent",ref_key:"dialog",ref:o},[e("div",D,[m(v,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:c(()=>[h(e("div",{class:"fixed inset-0 transform transition-all",onClick:f},i[0]||(i[0]=[e("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1)]),512),[[w,t.show]])]),_:1}),m(v,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:c(()=>[h(e("div",{class:S(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",g.value])},[r.value?n(l.$slots,"default",{key:0}):C("",!0)],2),[[w,t.show]])]),_:3})])],512))}},T={class:"px-6 py-4"},V={class:"text-lg font-medium text-gray-900"},L={class:"mt-4 text-sm text-gray-600"},j={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-end"},U={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:a}){const s=a,d=()=>{s("close")};return(o,r)=>(u(),E(N,{show:t.show,"max-width":t.maxWidth,closeable:t.closeable,onClose:d},{default:c(()=>[e("div",T,[e("div",V,[n(o.$slots,"title")]),e("div",L,[n(o.$slots,"content")])]),e("div",j,[n(o.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}};export{N as _,O as a,U as b};
