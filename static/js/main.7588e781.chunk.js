(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={container:"Container_container__P46bj"}},13:function(e,t,n){e.exports={text:"Filter_text__v_PjH"}},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(9),o=n.n(r),s=n(14),i=n(3),u=n(23),b=n(10),l=n.n(b),j=n(1);function m(e){var t=e.children;return Object(j.jsx)("div",{className:l.a.container,children:t})}var d=n(11),h=n(8),O=n.n(h);function x(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),b=u[0],l=u[1];function m(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":l(a);break;default:return}}var h=function(){o(""),l("")};return Object(j.jsxs)("form",{className:O.a.form,onSubmit:function(e){e.preventDefault(),t({name:r,number:b}),h()},children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",value:r,onChange:m,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{children:"Number"}),Object(j.jsx)("input",{type:"tel",name:"number",value:b,onChange:m,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{className:O.a.button,type:"submit",children:Object(j.jsx)(d.a,{size:50})})]})}var f=n(12),p=n(4),v=n.n(p);function _(e){var t=e.contacts,n=e.onDeleteContact;return Object(j.jsx)("ul",{className:v.a.list,children:t.map((function(e){var t=e.name,a=e.id,c=e.number;return Object(j.jsxs)("li",{className:v.a.item,children:[Object(j.jsxs)("p",{className:v.a.text,children:[t,":"]}),Object(j.jsx)("span",{children:c}),Object(j.jsx)("button",{className:v.a.button,onClick:function(){return n(a)},children:Object(j.jsx)(f.a,{className:v.a.button})})]},a)}))})}var C=n(13),g=n.n(C);function S(e){var t=e.value,n=e.onChange;return Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{className:g.a.text,children:"Find contacts by name"}),Object(j.jsx)("input",{type:"text",value:t,onChange:n})]})}function w(){var e=Object(a.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]})),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),b=o[0],l=o[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(j.jsxs)(m,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(x,{onSubmit:function(e){var t=e.name,a=e.number,r={id:Object(u.a)(),name:t,number:a};n.some((function(e){return e.name.toLowerCase()===r.name.toLowerCase()}))?alert("".concat(t," is already in contacts")):c([r].concat(Object(s.a)(n)))}}),Object(j.jsx)("h2",{children:"Contacts"}),n.length>1&&Object(j.jsx)(S,{value:b,onChange:function(e){l(e.currentTarget.value)}}),n.length>0?Object(j.jsx)(_,{contacts:function(){var e=b.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteContact:function(e){c(n.filter((function(t){return t.id!==e})))}}):Object(j.jsx)("p",{children:"Your phonebook is empty. Please add contact."})]})}n(20);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.querySelector("#root"))},4:function(e,t,n){e.exports={list:"ContactList_list__18bF1",item:"ContactList_item__2jzgE",text:"ContactList_text__mKXi9",button:"ContactList_button__3ZbDQ"}},8:function(e,t,n){e.exports={form:"ContactForm_form__6mtLu",button:"ContactForm_button__1PIha"}}},[[21,1,2]]]);
//# sourceMappingURL=main.7588e781.chunk.js.map