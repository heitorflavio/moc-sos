import{T as d,e as i,b as s,u as t,w as l,F as f,o as m,Z as c,a as o,t as p,f as _,n as w,g,i as y}from"./app-DA-mYySs.js";import{A as b}from"./AuthenticationCard-4dUUMhxS.js";import{_ as x}from"./AuthenticationCardLogo-DIhkdXVX.js";import{_ as k,a as V}from"./TextInput-CEOB0oOw.js";import{_ as v}from"./InputLabel-JgusdTJd.js";import{_ as F}from"./PrimaryButton-DsWLPrcE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$={class:"flex items-center justify-end mt-4"},j={__name:"ForgotPassword",props:{status:String},setup(r){const e=d({email:""}),n=()=>{e.post(route("password.email"))};return(C,a)=>(m(),i(f,null,[s(t(c),{title:"Forgot Password"}),s(b,null,{logo:l(()=>[s(x)]),default:l(()=>[a[2]||(a[2]=o("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1)),r.status?(m(),i("div",N,p(r.status),1)):_("",!0),o("form",{onSubmit:y(n,["prevent"])},[o("div",null,[s(v,{for:"email",value:"Email"}),s(k,{id:"email",modelValue:t(e).email,"onUpdate:modelValue":a[0]||(a[0]=u=>t(e).email=u),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),s(V,{class:"mt-2",message:t(e).errors.email},null,8,["message"])]),o("div",$,[s(F,{class:w({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:l(()=>a[1]||(a[1]=[g(" Email Password Reset Link ")])),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{j as default};
