import{_ as M,r as s,c as x,o as F,j as h,k as f,l as e,t as l,F as $,v as T,x as b,A as R,G as j,H as A,I as E,m as v}from"./entry.f7fb5c8a.js";const i=o=>(T("data-v-9dc89490"),o=o(),b(),o),G={class:"countdown__text-wrap bordered"},L={class:"hard-coded"},U={key:0,class:"row"},q={class:"date"},z={class:"days"},J=i(()=>e("div",{class:"label countdown__text-info"},"D",-1)),K=i(()=>e("span",{class:"leading-snug"},":",-1)),O={class:"date"},P={class:"hours"},Q=i(()=>e("div",{class:"label countdown__text-info"},"H",-1)),W=i(()=>e("span",{class:"leading-snug"},":",-1)),X={class:"date"},Z={class:"minutes"},ee=i(()=>e("div",{class:"label countdown__text-info"},"M",-1)),te=i(()=>e("span",{class:"leading-snug"},":",-1)),se={class:"date"},oe={class:"seconds"},ne=i(()=>e("div",{class:"label countdown__text-info"},"S",-1)),I=1e3,ae={__name:"Counter",props:["year","month","date","hour","minute","second","millisecond"],setup(o){const t=o,a=s(0),c=s(0),m=s(0),p=s(0),y=s(!1),D=s(!1),u=x(()=>I*60),r=x(()=>u.value*60),w=x(()=>r.value*24),n=x(()=>new Date(t.year,t.month-1,t.date,t.hour,t.minute,t.second,t.millisecond)),_=d=>d<10?"0"+d:d;return F(()=>{const d=setInterval(()=>{const C=new Date,g=n.value.getTime()-C.getTime();if(g<0){clearInterval(d),D.value=!0;return}const B=Math.floor(g/w.value),N=Math.floor(g%w.value/r.value),V=Math.floor(g%r.value/u.value),Y=Math.floor(g%u.value/I);m.value=_(V),p.value=_(Y),c.value=_(N),a.value=_(B),y.value=!0},1e3)}),(d,C)=>(h(),f("div",G,[e("p",L,l(o.month)+"-"+l(o.date)+"-"+l(o.year),1),y.value?(h(),f("div",U,[e("div",q,[e("span",z,l(a.value),1),J]),K,e("div",O,[e("span",P,l(c.value),1),Q]),W,e("div",X,[e("span",Z,l(m.value),1),ee]),te,e("div",se,[e("span",oe,l(p.value),1),ne])])):$("",!0)]))}},H=M(ae,[["__scopeId","data-v-9dc89490"]]);const k=o=>(T("data-v-7b415a44"),o=o(),b(),o),ce=k(()=>e("h1",null,"Dynamic Counter",-1)),de={class:"counter"},le=k(()=>e("h2",null,"Select a Date and Time",-1)),_e={key:0,class:"input"},ie={__name:"CountDown",setup(o){const t=s(""),a=s(""),c=s(),m=s(),p=s(),y=s(),D=s(),u=s(),r=s(),w=n=>{t.value=n.target.value};return R(t,()=>{const n=new Date(t.value);c.value=n.getFullYear(),m.value=n.getMonth()+1,p.value=n.getDate(),y.value=n.getHours(),D.value=n.getMinutes(),u.value=n.getSeconds(),r.value=n.getMilliseconds(),a.value=n.toLocaleString()}),(n,_)=>{const S=H;return h(),f("div",null,[ce,e("div",de,[le,j(e("input",{type:"datetime-local",id:"selectedDateTime","onUpdate:modelValue":_[0]||(_[0]=d=>t.value=d),onInput:w},null,544),[[A,t.value]]),t.value?(h(),f("p",_e,"You Selected : "+l(a.value),1)):$("",!0),t.value?(h(),E(S,{key:1,year:c.value,month:m.value,date:p.value,hour:y.value,minute:D.value,second:u.value,millisecond:r.value},null,8,["year","month","date","hour","minute","second","millisecond"])):$("",!0)])])}}},ue=M(ie,[["__scopeId","data-v-7b415a44"]]);const re={},ve={class:"counter__home"},he={class:"grid"},me={class:"grid"},pe=e("h2",null,"Hard Coded Dates",-1),ye={class:"counter"},ge=e("h2",null,"Hard Coded Dates",-1),fe={class:"counter"},De=e("h2",null,"Hard Coded Dates",-1),we={class:"counter"};function xe(o,t){const a=ue,c=H;return h(),f("div",ve,[e("div",he,[v(a),v(a),v(a)]),e("div",me,[e("div",null,[pe,e("div",ye,[v(c,{year:2024,month:2,date:22,hour:23,minute:23,second:22,millisecond:22})])]),e("div",null,[ge,e("div",fe,[v(c,{year:2024,month:2,date:21,hour:23,minute:23,second:22,millisecond:22})])]),e("div",null,[De,e("div",we,[v(c,{year:2024,month:2,date:10,hour:23,minute:23,second:22,millisecond:22})])])])])}const Me=M(re,[["render",xe]]);export{Me as default};
