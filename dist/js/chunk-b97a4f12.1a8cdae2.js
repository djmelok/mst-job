(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b97a4f12"],{"05e0":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content-wrapper"},[i("aside",{staticClass:"content-aside"},[i("ul",t._l(t.sections,(function(e,n){return i("li",{key:e.id},[i("a",{class:{active:t.index_active_section==n},attrs:{"data-title":e.title},on:{click:function(e){return t.setIndexActiveSection(n)}}},[t._v(" "+t._s(e.title)+" ")])])})),0)]),i("section",{staticClass:"content-body"},[i("div",{staticClass:"content-body__left"},[i("div",{staticClass:"content-body__text"},[i("transition",{attrs:{name:t.index_prev_section>t.index_active_section?"text-revers":"text",mode:"out-in"}},[i("div",{key:t.getActiveSection.id},[i("h3",[t._v(t._s(t.getActiveSection.title))]),i("p",[i("span",[t._v(t._s(t.getActiveSection.content)+" ")]),i("router-link",{staticClass:"ellipsis",class:this.getActiveSection.content.length>t.letter_limit?"ellipsis_display":"",attrs:{to:t.base_url}},[t._v("... ")])],1)])]),i("span",{staticClass:"content-body__pagination"},[t._v(" "+t._s(t.index_active_section+1)+" / "+t._s(t.sections.length)+" ")])],1)]),i("div",{staticClass:"content-body__right"},[i("transition",{attrs:{name:t.index_prev_section>t.index_active_section?"image-revers":"image"}},[i("div",{key:t.getActiveSection.id,style:{background:"url("+t.getActiveImageRequire+")"}})])],1)])])},c=[],s=i("5530"),o=i("2f62"),a=i("5f53"),p={name:"AboutComplex",data:function(){return{index_active_section:1,index_prev_section:1,sections:""}},created:function(){this.sections=a},mounted:function(){this.TRIM_STRING_TO_LIMIT(this.getActiveSection.content),this.getActiveSection.content=this.trimmed_string},computed:Object(s["a"])(Object(s["a"])({},Object(o["c"])(["base_url","letter_limit","trimmed_string"])),{},{getActiveSection:function(){return this.sections[this.index_active_section]},getActiveImageRequire:function(){return i("8370")("./"+this.getActiveSection.img)}}),methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["TRIM_STRING_TO_LIMIT"])),{},{setIndexActiveSection:function(t){this.index_prev_section=this.index_active_section,this.index_active_section=t}})},r=p,b=(i("d59d"),i("2877")),d=Object(b["a"])(r,n,c,!1,null,"9e2462ba",null);e["default"]=d.exports},1380:function(t,e,i){t.exports=i.p+"img/2.9e93f5c1.jpg"},"27b2":function(t,e,i){t.exports=i.p+"img/5.6dc5bc5b.jpg"},2860:function(t,e,i){t.exports=i.p+"img/3.c053a9b1.webp"},"2b33":function(t,e,i){t.exports=i.p+"img/1.3e5022ea.webp"},"36fe":function(t,e,i){t.exports=i.p+"img/2.3c9e05fd.webp"},"37b0":function(t,e,i){t.exports=i.p+"img/3.49cb1488.jpg"},"41ba":function(t,e,i){t.exports=i.p+"img/4.23062a07.webp"},"463f":function(t,e,i){t.exports=i.p+"img/1.cb2ee30d.jpg"},"55e7":function(t,e,i){t.exports=i.p+"img/6.2065b2ce.webp"},"5f53":function(t){t.exports=JSON.parse('[{"id":1,"title":"Архитектура","content":"Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни","img":"1.jpg"},{"id":2,"title":"Благоустройство","content":"Запроектированные большие окна, которые пропускают много солнечного света, наполнят Ваши квартиры теплотой и уютом","img":"2.jpg"},{"id":3,"title":"Безопастность","content":"Современный двор европейского уровня — территория для детей, игр на свежем воздухе и вечерних","img":"3.jpg"},{"id":4,"title":"Инженерия","content":"Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни","img":"4.jpg"},{"id":5,"title":"Инфраструктура","content":"Прекрасный вариант для тех, кто предпочитает жить в спокойном районе среди интеллигенции, но при этом чувствовать ритм мегаполиса","img":"5.jpg"},{"id":6,"title":"Транспортная доступность","content":"Жилой комплекс «Первомайска» расположен в престижном Академическом районе","img":"6.jpg"}]')},8370:function(t,e,i){var n={"./1.jpg":"463f","./2.jpg":"1380","./3.jpg":"37b0","./4.jpg":"98f1","./5.jpg":"27b2","./6.jpg":"b63b","./webp/1.webp":"2b33","./webp/2.webp":"36fe","./webp/3.webp":"2860","./webp/4.webp":"41ba","./webp/5.webp":"bb44","./webp/6.webp":"55e7"};function c(t){var e=s(t);return i(e)}function s(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}c.keys=function(){return Object.keys(n)},c.resolve=s,t.exports=c,c.id="8370"},"98f1":function(t,e,i){t.exports=i.p+"img/4.7bb1ed05.jpg"},b63b:function(t,e,i){t.exports=i.p+"img/6.2605a7d6.jpg"},bb44:function(t,e,i){t.exports=i.p+"img/5.6c6606ad.webp"},d59d:function(t,e,i){"use strict";var n=i("ec80"),c=i.n(n);c.a},ec80:function(t,e,i){}}]);
//# sourceMappingURL=chunk-b97a4f12.1a8cdae2.js.map