import{d as c,T as w,c as y,w as o,o as _,g as t,a as d,b as r,u as a,D as v,n as g}from"./app-DA-mYySs.js";import{a as k,b as x}from"./DialogModal-BatJtDy7.js";import{_ as m}from"./DangerButton-DasJSwfi.js";import{_ as D,a as b}from"./TextInput-CEOB0oOw.js";import{_ as C}from"./SecondaryButton-H2bc4px_.js";import"./SectionTitle-Bwant7KX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const V={class:"mt-5"},$={class:"mt-4"},O={__name:"DeleteUserForm",setup(A){const l=c(!1),n=c(null),s=w({password:""}),p=()=>{l.value=!0,setTimeout(()=>n.value.focus(),250)},i=()=>{s.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>u(),onError:()=>n.value.focus(),onFinish:()=>s.reset()})},u=()=>{l.value=!1,s.reset()};return(U,e)=>(_(),y(k,null,{title:o(()=>e[1]||(e[1]=[t(" Delete Account ")])),description:o(()=>e[2]||(e[2]=[t(" Permanently delete your account. ")])),content:o(()=>[e[8]||(e[8]=d("div",{class:"max-w-xl text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1)),d("div",V,[r(m,{onClick:p},{default:o(()=>e[3]||(e[3]=[t(" Delete Account ")])),_:1})]),r(x,{show:l.value,onClose:u},{title:o(()=>e[4]||(e[4]=[t(" Delete Account ")])),content:o(()=>[e[5]||(e[5]=t(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ")),d("div",$,[r(D,{ref_key:"passwordInput",ref:n,modelValue:a(s).password,"onUpdate:modelValue":e[0]||(e[0]=f=>a(s).password=f),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:v(i,["enter"])},null,8,["modelValue"]),r(b,{message:a(s).errors.password,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[r(C,{onClick:u},{default:o(()=>e[6]||(e[6]=[t(" Cancel ")])),_:1}),r(m,{class:g(["ms-3",{"opacity-25":a(s).processing}]),disabled:a(s).processing,onClick:i},{default:o(()=>e[7]||(e[7]=[t(" Delete Account ")])),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{O as default};
