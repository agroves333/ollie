(this.webpackJsonpollie=this.webpackJsonpollie||[]).push([[0],{132:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(45),s=a.n(o),i=(a(65),a(30)),c=a.n(i),l=a(46),m=a(57),d=a(47),p=a.n(d),u=a(31),h=a.n(u),w=a(7),E=a(1),b=a(12),f=a(4),g=a(59),x=function(e){var t=e.field,a=Object(g.a)(e,["field"]);return n.a.createElement(b.a,Object.assign({},t,a))},y=a(52),v=a.n(y),B=a(58),W=a(53),k=a.n(W),q=Object(B.a)({},k.a,{breakpoints:["768px"]}),C=function(){return n.a.createElement(E.Box,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},n.a.createElement(v.a,{size:100,color:q.colors.primary}))},F=function(e){var t,a=e.message,r=void 0===a?{}:a,o=r.text,s=void 0===o?"":o,i=r.type;switch(void 0===i?"info":i){case"success":t="green";break;case"error":t="red";break;case"info":t="black";break;default:t="black"}return n.a.createElement(E.Box,{py:3,color:t,"data-testid":"message"},s)},j=function(e){var t={};e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(e.password)||(t.password="Invalid password. Password must be at least 8 characters, contain 1 letter, 1 number and 1 special character"):t.password="Required",e.passwordConfirm?e.password!==e.passwordConfirm&&(t.passwordConfirm="Passwords do not match"):t.passwordConfirm="Required",e.name||(t.name="Required");var a="Weight must be between ".concat(3,"-").concat(180,"lbs");return e.weight?(e.weight<3||e.weight>180)&&(t.weight=a):t.weight="Required",e.idealWeight&&(e.idealWeight<3||e.idealWeight>180)&&(t.idealWeight=a),t},O=function(){var e=Object(r.useState)({text:"",color:"black"}),t=Object(m.a)(e,2),a=t[0],o=t[1],s=function(){var e=Object(l.a)(c.a.mark((function e(t,a){var r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o({text:"",type:"info"}),e.prev=1,e.next=4,p.a.post("https://32f2jzoot4.execute-api.us-east-1.amazonaws.com/default/fe-takehome-api",t,{headers:{"Content-Type":"application/json"}});case 4:200===e.sent.status&&o({text:"Form submitted successfully!",type:"success"}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),500===(r=h()(e.t0,"response.status"))?o({text:"There has been an error processing your request. Please try again.",type:"error"}):400===r&&(n=h()(e.t0,"response.data.message",""),a.setFieldError("email",n));case 12:a.setSubmitting(!1);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}();return n.a.createElement(E.Flex,{flexWrap:"wrap"},n.a.createElement(E.Box,{width:[1,.5],p:3},n.a.createElement(w.c,{src:"https://via.placeholder.com/600"})),n.a.createElement(E.Box,{width:[1,.5],p:3},n.a.createElement(f.d,{initialValues:{email:"",password:"",passwordConfirm:"",name:"",weight:null,idealWeight:null},onSubmit:s,validate:j},(function(e){var t=e.isSubmitting;return n.a.createElement(E.Box,{sx:{position:"relative"}},t&&n.a.createElement(C,null),n.a.createElement(E.Box,{sx:{opacity:t?.3:1}},n.a.createElement(f.c,null,n.a.createElement(E.Box,{py:2},n.a.createElement(b.b,{htmlFor:"email"},"Email"),n.a.createElement(f.b,{type:"email",name:"email",component:x,"aria-required":"true"}),n.a.createElement(f.a,{name:"email",color:"red",component:w.d})),n.a.createElement(E.Box,{py:2},n.a.createElement(b.b,{htmlFor:"password"},"Password"),n.a.createElement(f.b,{name:"password",type:"password",component:x,"aria-required":"true"}),n.a.createElement(f.a,{name:"password",color:"red",component:w.d})),n.a.createElement(E.Box,{py:2},n.a.createElement(b.b,{htmlFor:"passwordConfirm"},"Confirm Password"),n.a.createElement(f.b,{name:"passwordConfirm",type:"password",component:x,"aria-required":"true"}),n.a.createElement(f.a,{name:"passwordConfirm",color:"red",component:w.d})),n.a.createElement(E.Box,{py:2},n.a.createElement(b.b,{htmlFor:"name"},"Name"),n.a.createElement(f.b,{name:"name",component:x,"aria-required":"true"}),n.a.createElement(f.a,{name:"name",color:"red",component:w.d})),n.a.createElement(E.Box,{py:2},n.a.createElement(b.b,{htmlFor:"weight"},"Weight"),n.a.createElement(f.b,{name:"weight",type:"number",component:x,"aria-required":"true"}),n.a.createElement(f.a,{name:"weight",color:"red",component:w.d})),n.a.createElement(E.Box,{py:2},n.a.createElement(b.b,{htmlFor:"idealWeight"},"Ideal Weight"),n.a.createElement(f.b,{name:"idealWeight",type:"number",component:x}),n.a.createElement(f.a,{name:"idealWeight",color:"red",component:w.d})),n.a.createElement(E.Box,{sx:{textAlign:"center"},py:2},n.a.createElement(w.b,{variant:"primary",type:"submit"},"Submit")))))})),n.a.createElement(F,{message:a})))},S=function(e){return n.a.createElement(w.a,{sx:{maxWidth:1200,mx:"auto",px:3}},n.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(54);s.a.render(n.a.createElement(A.a,{theme:q},n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,a){e.exports=a(132)},65:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.f358b890.chunk.js.map