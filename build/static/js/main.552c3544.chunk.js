(this["webpackJsonpairwallex-frontend-react-spa"]=this["webpackJsonpairwallex-frontend-react-spa"]||[]).push([[0],{133:function(e,t,n){},134:function(e,t,n){},154:function(e,t,n){},222:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(22),i=n.n(s),r=(n(133),n(226)),o=(n(134),n(8));var l=function(e){return Object(o.jsx)(r.a,{className:"header",children:Object(o.jsx)("h1",{children:e.title})})};var j=function(){return Object(o.jsxs)("footer",{className:"footer",children:[Object(o.jsx)("p",{className:"footer-desc",children:"Made with heart in Mebourne."}),Object(o.jsx)("p",{className:"footer-desc",children:"@ 2016 Broccoli & Co. All rights reserved."})]})},d=n(95),u=n(61),m=n(227),b=n(228),h=n(34),O=n(229),f=n(119),x=n.n(f);n(154);var p=function(){var e=Object(c.useState)({name:"",email:""}),t=Object(u.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(!1),r=Object(u.a)(i,2),l=r[0],j=r[1],f=Object(c.useState)(!1),p=Object(u.a)(f,2),v=p[0],g=p[1],w=Object(c.useState)(void 0),N=Object(u.a)(w,2),y=N[0],_=N[1],C=function(e){return j(e)},k=function(){C(!1),_(void 0)},A=function(e){(e.name||e.email)&&s(Object(d.a)(Object(d.a)({},n),e))},S=function(e,t,c){t!==n.email&&c("Two input email must be consistent."),c()},B=function(){var e;g(!0),(e=n,x.a.post("https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",e)).then((function(e){if(g(!1),200!==e.status)throw new Error("Error messge from server here");_({code:0})})).catch((function(e){setTimeout((function(){g(!1),_({code:-1,message:"Error messge from server here"})}),1500)}))},E=Object(c.useMemo)((function(){return y&&-1!==y.code?Object(o.jsxs)(a.a.Fragment,{children:[Object(o.jsx)("div",{className:"content-modal__title",children:"All done!"}),Object(o.jsxs)("div",{className:"content-modal__desc",children:["You will be one of the first to experience ",Object(o.jsx)("br",{}),"Broccoli & Co. when we launch."]}),Object(o.jsx)(h.a,{type:"outlined",block:!0,onClick:k,children:"Ok"})]}):Object(o.jsxs)(m.a,{defaultValue:n,onValuesChange:A,onFinish:B,children:[Object(o.jsx)("div",{className:"content-modal__title",children:"Request an invite"}),Object(o.jsx)(m.a.Item,{name:"name",rules:[{required:!0,message:"Please input your full name!"},{min:3,message:"Please input 3 string at least!"}],children:Object(o.jsx)(b.a,{placeholder:"full name"})}),Object(o.jsx)(m.a.Item,{name:"email",rules:[{required:!0,message:"Please input your email!"},{pattern:/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,message:"email format is incorrect!"}],children:Object(o.jsx)(b.a,{placeholder:"Email"})}),Object(o.jsx)(m.a.Item,{name:"confirmEmail",rules:[{required:!0,message:"Please input your email!"},{validator:S}],children:Object(o.jsx)(b.a,{placeholder:"Confirm email"})}),Object(o.jsx)(m.a.Item,{children:Object(o.jsx)(h.a,{type:"primary",block:!0,htmlType:"submit",loading:v,loadin:!0,children:v?"Sending, please waiting...":"Send"})}),Object(o.jsx)("div",{className:"content-container__error",children:y&&y.message})]})}),[y,v,n]);return Object(o.jsxs)("div",{className:"content",children:[Object(o.jsxs)("div",{className:"content-container",children:[Object(o.jsx)("h1",{className:"content-container__title",children:"A better way to enjoy every day."}),Object(o.jsx)("p",{className:"content-container__desc",children:"Be the first to know when we launch."}),Object(o.jsx)(h.a,{type:"outlined",onClick:C.bind(null,!0),children:"Request an invite"})]}),Object(o.jsx)(O.a,{className:"content-modal",visible:l,centered:!0,footer:null,width:400,closable:!1,onCancel:k,children:E})]})};n(222);var v=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{title:"Broccoli & Co."}),Object(o.jsx)(p,{}),Object(o.jsx)(j,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,230)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(v,{}),document.getElementById("root")),g()}},[[223,1,2]]]);
//# sourceMappingURL=main.552c3544.chunk.js.map