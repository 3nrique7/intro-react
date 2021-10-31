(this["webpackJsonpintro-react"]=this["webpackJsonpintro-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n(4),r=n.n(c),a=n(6),s=n(2);var l=n(0),i=Object(o.createContext)();function d(e){var t=function(e,t){var n=Object(o.useState)(!1),c=Object(s.a)(n,2),r=c[0],a=c[1],l=Object(o.useState)(!0),i=Object(s.a)(l,2),d=i[0],u=i[1],j=Object(o.useState)(t),b=Object(s.a)(j,2),O=b[0],m=b[1];return Object(o.useEffect)((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),m(n),u(!1)}catch(r){a(r)}}),1e3)})),{item:O,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),m(t)}catch(r){a(r)}},loading:d,error:r}}("TODOS_V1",[]),n=t.item,c=t.saveItem,r=t.loading,d=t.error,u=Object(o.useState)(!1),j=Object(s.a)(u,2),b=j[0],O=j[1],m=Object(o.useState)(""),x=Object(s.a)(m,2),f=x[0],p=x[1],h=n.filter((function(e){return e.completed})).length,v=n.length,T=[];T=!f.length>=1?n:n.filter((function(e){return e.text.toLowerCase().includes(f.toLowerCase())}));return Object(l.jsx)(i.Provider,{value:{loading:r,error:d,completedTodos:h,totalTodos:v,search:f,setSearch:p,searchTodos:T,addTodo:function(e){var t=Object(a.a)(n);t.push({completed:!1,text:e}),c(t)},completeTodos:function(e){var t=n.findIndex((function(t){return t.text===e})),o=Object(a.a)(n);o[t].completed=!0,c(o)},deleteTodos:function(e){var t=n.findIndex((function(t){return t.text===e})),o=Object(a.a)(n);o.splice(t,1),c(o)},openModal:b,setOpenModal:O},children:e.children})}n(13);function u(){var e=Object(o.useContext)(i),t=e.completedTodos,n=e.totalTodos;return Object(l.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",t," de ",n," Tareas"]})}n(14);function j(){var e=Object(o.useContext)(i),t=e.search,n=e.setSearch;return Object(l.jsx)("input",{className:"TodoSearch",placeholder:"Recetas",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})}n(15);function b(e){return Object(l.jsx)("section",{children:Object(l.jsx)("ul",{children:e.children})})}n(16);function O(e){return Object(l.jsxs)("li",{className:"TodoItem",children:[Object(l.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:"\u221a"}),Object(l.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(l.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDelete,children:"X"})]})}n(17);function m(e){e.openModal;var t=e.setOpenModal;return Object(l.jsx)("button",{className:"CreateTodoButton",onClick:function(){t((function(e){return!e}))},children:"+"})}n(18);function x(e){var t=e.children;return r.a.createPortal(Object(l.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(19);function f(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(o.useContext)(i),a=r.addTodo,d=r.setOpenModal;return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(n),d(!1)},children:[Object(l.jsx)("label",{children:"Escribe tu nueva tarea"}),Object(l.jsx)("textarea",{value:n,onChange:function(e){c(e.target.value)},placeholder:"Explicar que hace la tarea"}),Object(l.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(l.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button-cancel",onClick:function(){d(!1)},children:"Cancelar"}),Object(l.jsx)("button",{className:"TodoForm-button TodoForm-button-add",type:"submit",children:"A\xf1adir"})]})]})}function p(e){var t=e.error;return Object(l.jsxs)("p",{children:["Hubo un error - ",t]})}n(20);function h(){return Object(l.jsxs)("div",{className:"LoadingTodo-container",children:[Object(l.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(l.jsx)("p",{className:"LoadingTodo-text",children:"Cargando ....."}),Object(l.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}function v(){return Object(l.jsx)("p",{children:"Crea tu primer tarea!!!"})}function T(){var e=Object(o.useContext)(i),t=e.loading,n=e.error,c=e.searchTodos,r=e.completeTodos,a=e.deleteTodos,s=e.openModal,d=e.setOpenModal;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(j,{}),Object(l.jsxs)(b,{children:[n&&Object(l.jsx)(p,{error:n}),t&&Object(l.jsx)(h,{}),!t&&!c.length&&Object(l.jsx)(v,{}),c.map((function(e){return Object(l.jsx)(O,{text:e.text,completed:e.completed,onComplete:function(){r(e.text)},onDelete:function(){a(e.text)}},e.text)}))]}),s&&Object(l.jsx)(x,{children:Object(l.jsx)(f,{})}),Object(l.jsx)(m,{openModal:s,setOpenModal:d})]})}var g=function(){return Object(l.jsx)(d,{children:Object(l.jsx)(T,{})})};n(21);r.a.render(Object(l.jsx)(g,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.b3d7a932.chunk.js.map