import{_ as d}from"./CnFysPOj.js";import{_,g as l,c as a,o as t,F as c,B as x,A as i,J as b,w as y,d as v,t as f,M as o,C as h}from"./CfVQ7UYt.js";import{C}from"./CNZ5aXak.js";const k={key:1,class:"font-semibold text-[18px] text-[#A6431F]"},g=`
  hover:opacity-100
  hover:text-[#a16450]
  transition-all
  duration-200
  after:content-['']
  after:absolute
  after:bottom-0
  after:left-0
  after:w-0
  after:h-[2px]
  after:bg-[#a16450]
  hover:after:w-full
  after:transition-all
  after:duration-300
`,w={__name:"Breadcrumb",props:{items:{type:Array,required:!0},direction:{type:String,default:"rtl"}},setup(r){const s=r,m=l(()=>(s.direction==="rtl","flex-row justify-start")),u=l(()=>s.direction==="ltr"?"rotate-180":"");return(B,A)=>{const p=d;return t(),a("nav",{class:o(["flex items-center gap-2 text-[#8c6b5d] text-sm md:text-base font-medium mb-8 md:mb-12",m.value])},[(t(!0),a(c,null,x(r.items,(e,n)=>(t(),a(c,{key:n},[e.active?(t(),a("span",k,f(e.label),1)):(t(),i(p,{key:0,to:e.to,class:o(["opacity-70 transition-all relative pb-0.5",g])},{default:y(()=>[v(f(e.label),1)]),_:2},1032,["to"])),n<r.items.length-1?(t(),i(h(C),{key:2,size:"16",class:o(["opacity-50",u.value])},null,8,["class"])):b("",!0)],64))),128))],2)}}},j=_(w,[["__scopeId","data-v-7bb42b70"]]);export{j as _};
