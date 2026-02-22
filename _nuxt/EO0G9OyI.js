import{c as n}from"./B8u25cvq.js";import{E as i,g as d,c as s,o as l,a as m,F as u,B as p,M as b,t as y}from"./DtlkFUv2.js";/**
 * @license lucide-vue-next v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=n("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=n("package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]),h={class:"flex justify-center w-full mb-8"},g={class:"bg-white/30 backdrop-blur-md rounded-2xl p-1.5 flex gap-1 shadow-sm w-full max-w-2xl mx-4"},k=["onClick"],E={__name:"FilterTabs",props:{activeTab:{type:String,required:!0},tabs:{type:Array,default:()=>[]}},emits:["change"],setup(o){const a=o,{t:e}=i(),c=d(()=>a.tabs&&a.tabs.length>0?a.tabs:[{id:"NEW",label:e("common.statuses.new")},{id:"PAYMENT",label:e("common.statuses.payment_pending")},{id:"CURRENT",label:e("common.statuses.current")},{id:"FINISHED",label:e("common.statuses.finished")}]);return(r,x)=>(l(),s("div",h,[m("div",g,[(l(!0),s(u,null,p(c.value,t=>(l(),s("button",{key:t.id,onClick:f=>r.$emit("change",t.id),class:b(["flex-1 py-2.5 px-4 rounded-xl text-base font-semibold transition-all duration-300",o.activeTab===t.id?"tab-bg  text-white shadow-lg scale-[1.02]":"text-[#8b7e77] hover:bg-white/40 hover:text-primary"])},y(t.label),11,k))),128))])]))}};export{_ as C,C as P,E as _};
