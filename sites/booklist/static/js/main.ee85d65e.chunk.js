(window.webpackJsonpbooklist=window.webpackJsonpbooklist||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),l=(n(11),n(1)),u=n(5),i=n(4),s=n.n(i),m=function(e,t){switch(t.type){case"ADD_BOOK":return[].concat(Object(u.a)(e),[{title:t.book.title,author:t.book.author,id:s()()}]);case"REMOVE_BOOK":return e.filter(function(e){return e.id!==t.id});default:return e}},d=Object(a.createContext)(),b=function(e){var t=Object(a.useReducer)(m,[],function(){var e=localStorage.getItem("books");return e?JSON.parse(e):[]}),n=Object(l.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)(function(){localStorage.setItem("books",JSON.stringify(r))},[r]),o.a.createElement(d.Provider,{value:{books:r,dispatch:c}},e.children)},h=function(){var e=Object(a.useContext)(d).books;return o.a.createElement("div",{className:"navbar"},o.a.createElement("h1",null,"Ninja Reading List"),o.a.createElement("p",null,"Currently you have ",e.length," books to get through"))},v=function(e){var t=e.book,n=Object(a.useContext)(d).dispatch;return o.a.createElement("li",{onClick:function(){return n({type:"REMOVE_BOOK",id:t.id})}},o.a.createElement("div",{className:"title"},t.title),o.a.createElement("div",{className:"author"},t.author))},p=function(){var e=Object(a.useContext)(d).books;return e.length?o.a.createElement("div",{className:"book-list"},o.a.createElement("ul",null,e.map(function(e){return o.a.createElement(v,{book:e,key:e.id})}))):o.a.createElement("div",{className:"empty"},"No More Books To Read!")},E=function(){var e=Object(a.useContext)(d).dispatch,t=Object(a.useState)(""),n=Object(l.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),s=i[0],m=i[1];return o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({type:"ADD_BOOK",book:{title:r,author:s}}),c(""),m("")}},o.a.createElement("input",{type:"text",placeholder:"book title",value:r,onChange:function(e){return c(e.target.value)},required:!0}),o.a.createElement("input",{type:"text",placeholder:"author",value:s,onChange:function(e){return m(e.target.value)},required:!0}),o.a.createElement("input",{type:"submit",value:"Add Book"}))};var f=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(b,null,o.a.createElement(h,null),o.a.createElement(p,null),o.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.ee85d65e.chunk.js.map