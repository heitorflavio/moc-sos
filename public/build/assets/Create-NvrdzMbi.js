import{T as m,c as p,w as o,o as u,a as e,b,g as i,l as n,p as d,u as a,q as c}from"./app-DA-mYySs.js";import{_ as g}from"./AppLayout-DNLLSyut.js";import{_ as x}from"./FormSection-BHuKzv14.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Dark-D8AX3y9_.js";import"./SectionTitle-Bwant7KX.js";const f={class:"py-12"},y={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},k={class:""},w={class:"col-span-6 sm:col-span-4"},v={class:"col-span-6 sm:col-span-4 mt-4"},D={__name:"Create",setup(C){const r=m({name:"",description:""}),l=()=>{r.post(route("categories.store"),{onSuccess:()=>c.visit(route("categories.index")),onError:()=>{console.log("Error")}})};return(_,t)=>(u(),p(g,{title:"Create Category"},{header:o(()=>t[3]||(t[3]=[e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight dark:text-white"}," Create Category ",-1)])),default:o(()=>[e("div",f,[e("div",y,[e("div",k,[b(x,{class:"p-6",onSubmit:t[2]||(t[2]=s=>l())},{title:o(()=>t[4]||(t[4]=[i("Create a New Category")])),description:o(()=>t[5]||(t[5]=[i("Fill in the details below to create a new category.")])),form:o(()=>[e("div",w,[t[6]||(t[6]=e("label",{for:"name",class:"block font-medium text-sm text-gray-700 dark:text-gray-300"},"Name",-1)),n(e("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=s=>a(r).name=s),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white"},null,512),[[d,a(r).name]])]),e("div",v,[t[7]||(t[7]=e("label",{for:"description",class:"block font-medium text-sm text-gray-700 dark:text-gray-300"},"Description",-1)),n(e("textarea",{id:"description","onUpdate:modelValue":t[1]||(t[1]=s=>a(r).description=s),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white"},null,512),[[d,a(r).description]])])]),actions:o(()=>t[8]||(t[8]=[e("button",{type:"submit",class:"inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition"}," Save ",-1)])),_:1})])])])]),_:1}))}};export{D as default};
