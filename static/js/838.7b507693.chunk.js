"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[838],{838:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(2791),r=n(9434),s=function(e){return e.contacts.contacts},c=function(e){return e.filter},o=function(e){return e.contacts.isLoading},l=function(e){return e.contacts.error},i=n(208),u="ContactForm_form__dhl+T",m="ContactForm_label__-cVXI",d="ContactForm_input__Bl93P",_="ContactForm_button__eSwX9",h=n(184),f=function(){var e=(0,r.I0)();return(0,h.jsxs)("form",{className:u,onSubmit:function(t){t.preventDefault();var n=t.target,a={name:t.target.elements.name.value,number:t.target.elements.number.value};e((0,i.uK)(a)),n.reset()},children:[(0,h.jsxs)("label",{className:m,children:["Name",(0,h.jsx)("input",{className:d,type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)("label",{className:m,children:["Number",(0,h.jsx)("input",{className:d,type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)("button",{className:_,type:"submit",children:"Add contact"})]})},p="ContactList_list__csErn",b="ContactList_item__EZYHO",v="ContactList_button__7kL4l",x=function(){var e=(0,r.v9)(s),t=(0,r.v9)(c),n=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})),a=(0,r.I0)();return console.log("making contacts list",e),(0,h.jsx)("ul",{className:p,children:n.map((function(e){return(0,h.jsxs)("li",{className:b,children:[e.name+": "+e.number,(0,h.jsx)("button",{className:v,type:"button",name:"delete",onClick:function(){return t=e.id,console.log("Deleting contact with ID:",t),void a((0,i.zY)(t));var t},children:"delete"})]},e.id)}))})},j="Filter_input__N7T3z",C="Filter_container__L5eml",N="Filter_call__Z1MR5",g=n(6895);var k=function(){var e=(0,r.v9)(c),t=(0,r.I0)();return(0,h.jsxs)("div",{className:C,children:[(0,h.jsx)("p",{className:N,children:"Find contacts by name"}),(0,h.jsx)("input",{className:j,type:"text",value:e,onChange:function(e){var n=e.target.value.toLowerCase();console.log("thats filter",e.target.value),t((0,g.s)(n))}})]})};function w(){var e=(0,r.I0)(),t=(0,r.v9)(o),n=(0,r.v9)(l);return(0,a.useEffect)((function(){e((0,i.yF)())}),[e]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Phonebook"}),(0,h.jsx)(f,{}),t&&!n&&(0,h.jsx)("b",{children:"Request in progress..."}),(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsx)(k,{}),(0,h.jsx)(x,{})]})}}}]);
//# sourceMappingURL=838.7b507693.chunk.js.map