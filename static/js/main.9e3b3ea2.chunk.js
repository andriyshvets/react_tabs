(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var a=c(3),n=c.n(a),s=c(4),i=c(1),b=(c(9),c(0)),d=function(t){var e=t.tabs,c=t.selectedTabId,a=t.setSelectedTab;return Object(b.jsx)("div",{className:"tabs__list",children:e.map((function(t){return Object(b.jsxs)("div",{className:"tab",children:[Object(b.jsx)("button",{type:"button",onClick:function(){return a(t)},className:"tab__button ".concat(c===t.id?"activated":"deactivated"),children:t.title}),Object(b.jsx)("p",{className:"tab__content",children:c===t.id?t.content:""})]},t.id)}))})},l=(c(11),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),o=function(){var t=Object(i.useState)(l[0]||null),e=Object(s.a)(t,2),c=e[0],a=e[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("h1",{className:"App__title",children:["Selected tab is\xa0",c.title]}),Object(b.jsx)(d,{tabs:l,selectedTabId:c.id,setSelectedTab:a})]})};n.a.render(Object(b.jsx)(o,{}),document.getElementById("root"))},9:function(t,e,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.9e3b3ea2.chunk.js.map