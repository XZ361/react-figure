(this["webpackJsonpreact-epic"]=this["webpackJsonpreact-epic"]||[]).push([[3],{105:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);n(100);var r=n(0),o=n.n(r),a=n(7),i=n.n(a),c=n(28),u=n(3),l=(n(105),n(16)),s=n(17);function p(){var e=Object(l.a)(["\n    padding:10px 100px;\n    text-align:center;\n    font-size:12px;\n    color:#aaa;\n"]);return p=function(){return e},e}var f=s.a.footer(p());var b=function(){return o.a.createElement(f,null,o.a.createElement("h1",null,"figure \xa92020 Created by XZ"))},m=n(160),y=n(66),h=n(93),O=n.n(h),g=n(62);function j(){var e=Object(l.a)(["\n    margin-left:10px;\n"]);return j=function(){return e},e}function d(){var e=Object(l.a)(["\n    margin-left:auto;\n"]);return d=function(){return e},e}function v(){var e=Object(l.a)(["\n    color:#fff;\n    margin-left:50px;\n\n    &.active{\n        border-bottom:1px solid #fff;\n    }\n"]);return v=function(){return e},e}function w(){var e=Object(l.a)(["\n    height:30px;\n"]);return w=function(){return e},e}function U(){var e=Object(l.a)(["\n    display:flex;\n    align-items:center;\n    padding:10px 100px;\n    background-color:#02101f;\n"]);return U=function(){return e},e}var P=s.a.header(U()),E=s.a.img(w()),k=Object(s.a)(c.b)(v()),x=s.a.div(d()),z=Object(s.a)(m.a)(j()),F=Object(y.a)((function(){var e=Object(g.a)(),t=e.UserStore,n=e.AuthStore,r=Object(u.f)();return o.a.createElement(P,null,o.a.createElement(E,{src:O.a,alt:""}),o.a.createElement("nav",null,o.a.createElement(k,{to:"/",activeClassName:"active",exact:!0},"\u9996\u9875"),o.a.createElement(k,{to:"/history",activeClassName:"active"},"\u4e0a\u4f20\u5386\u53f2"),o.a.createElement(k,{to:"/about",activeClassName:"active"},"\u5173\u4e8e")),o.a.createElement(x,null,t.currentUser?o.a.createElement(o.a.Fragment,null,t.currentUser.attributes.username," ",o.a.createElement(z,{type:"primary",onClick:function(){n.logout()}},"\u6ce8\u9500")):o.a.createElement(o.a.Fragment,null,o.a.createElement(z,{type:"primary",onClick:function(){r.push("/login")}},"\u767b\u5f55"),o.a.createElement(z,{type:"primary",onClick:function(){r.push("/register")}},"\u6ce8\u518c"))))}));var D=function(){return o.a.createElement("div",null,"Loading...")},S=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(7),n.e(10)]).then(n.bind(null,340))})),C=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(6),n.e(9)]).then(n.bind(null,341))})),L=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,332))})),I=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,333))})),M=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,334))}));var A=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(F,null),o.a.createElement("main",null,o.a.createElement(r.Suspense,{fallback:o.a.createElement(D,null)},o.a.createElement(u.c,null,o.a.createElement(u.a,{path:"/",exact:!0,component:S}),o.a.createElement(u.a,{path:"/history",component:C}),o.a.createElement(u.a,{path:"/about",component:L}),o.a.createElement(u.a,{path:"/login",component:I}),o.a.createElement(u.a,{path:"/register",component:M})))),o.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(c.a,null,o.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return A}));var r=n(0),o=n(8),a=n(18),i=n(19),c=n(2),u=(n(40),n(161)),l=n(1),s=n(13),p=n.n(s);p.a.init({appId:"xl5PtXUU3LluVijMH2eF4X9C-gzGzoHsz",appKey:"hvdyKoPL9MSbM5o2S9WGFTxW",serverURL:"https://xl5ptxuu.lc-cn-n1-shared.com"});var f,b,m,y,h,O=function(e,t){var n=new s.User;return n.setUsername(e),n.setPassword(t),new Promise((function(e,t){n.signUp().then((function(t){e(t)}),(function(e){t(e)}))}))},g=function(e,t){return new Promise((function(n,r){s.User.logIn(e,t).then((function(e){n(e)}),(function(e){r(e)}))}))},j=function(){s.User.logOut()},d=function(){return s.User.current()},v={add:function(e,t){var n=new p.a.Object("Image"),r=new p.a.File(t,e);return n.set("filename",t),n.set("owner",p.a.User.current()),n.set("url",r),new Promise((function(e,t){n.save().then((function(t){e(t)}),(function(e){t(e)}))}))},find:function(e){var t=e.page,n=void 0===t?0:t,r=e.limit,o=void 0===r?10:r,a=new p.a.Query("Image");return a.limit(o),a.skip(n*o),a.equalTo("owner",p.a.User.current()),a.descending("createdAt"),new Promise((function(e,t){a.find().then((function(t){return e(t)})).catch((function(e){return t(e)}))}))}};window.Uploader=v;var w,U,P,E,k,x,z,F,D,S=new(f=function(){function e(){Object(a.a)(this,e),Object(o.a)(this,"list",b,this),Object(o.a)(this,"isLoading",m,this),Object(o.a)(this,"hasMore",y,this),Object(o.a)(this,"page",h,this),this.limit=10}return Object(i.a)(e,[{key:"append",value:function(e){this.list=this.list.concat(e)}},{key:"find",value:function(){var e=this;this.isLoading=!0,v.find({page:this.page,limit:this.limit}).then((function(t){e.append(t),e.page++,t.length<e.limit&&(e.hasMore=!1)})).catch((function(e){u.a.error("\u52a0\u8f7d\u5386\u53f2\u8bb0\u5f55\u5931\u8d25\uff01")})).finally((function(){e.isLoading=!1}))}},{key:"reset",value:function(){this.list=[],this.isLoading=!1,this.hasMore=!0,this.page=0}}]),e}(),b=Object(c.a)(f.prototype,"list",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),m=Object(c.a)(f.prototype,"isLoading",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),y=Object(c.a)(f.prototype,"hasMore",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),h=Object(c.a)(f.prototype,"page",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Object(c.a)(f.prototype,"append",[l.f],Object.getOwnPropertyDescriptor(f.prototype,"append"),f.prototype),Object(c.a)(f.prototype,"find",[l.f],Object.getOwnPropertyDescriptor(f.prototype,"find"),f.prototype),Object(c.a)(f.prototype,"reset",[l.f],Object.getOwnPropertyDescriptor(f.prototype,"reset"),f.prototype),f),C=new(w=function(){function e(){Object(a.a)(this,e),Object(o.a)(this,"filename",U,this),Object(o.a)(this,"file",P,this),Object(o.a)(this,"isUploading",E,this),Object(o.a)(this,"serverFile",k,this)}return Object(i.a)(e,[{key:"setFilename",value:function(e){this.filename=e}},{key:"setFile",value:function(e){this.file=e}},{key:"upload",value:function(){var e=this;return this.isUploading=!0,this.serverFile=null,new Promise((function(t,n){v.add(e.file,e.filename).then((function(n){e.serverFile=n,t(n)})).catch((function(e){u.a.error("\u4e0a\u4f20\u5931\u8d25\uff01")})).finally((function(){e.isUploading=!1}))}))}},{key:"reset",value:function(){this.isUploading=!1,this.serverFile=null}}]),e}(),U=Object(c.a)(w.prototype,"filename",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),P=Object(c.a)(w.prototype,"file",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=Object(c.a)(w.prototype,"isUploading",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),k=Object(c.a)(w.prototype,"serverFile",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(c.a)(w.prototype,"setFilename",[l.f],Object.getOwnPropertyDescriptor(w.prototype,"setFilename"),w.prototype),Object(c.a)(w.prototype,"setFile",[l.f],Object.getOwnPropertyDescriptor(w.prototype,"setFile"),w.prototype),Object(c.a)(w.prototype,"upload",[l.f],Object.getOwnPropertyDescriptor(w.prototype,"upload"),w.prototype),Object(c.a)(w.prototype,"reset",[l.f],Object.getOwnPropertyDescriptor(w.prototype,"reset"),w.prototype),w),L=new(x=function(){function e(){Object(a.a)(this,e),Object(o.a)(this,"currentUser",z,this)}return Object(i.a)(e,[{key:"pullUser",value:function(){this.currentUser=d()}},{key:"resetUser",value:function(){this.currentUser=null}}]),e}(),z=Object(c.a)(x.prototype,"currentUser",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(c.a)(x.prototype,"pullUser",[l.f],Object.getOwnPropertyDescriptor(x.prototype,"pullUser"),x.prototype),Object(c.a)(x.prototype,"resetUser",[l.f],Object.getOwnPropertyDescriptor(x.prototype,"resetUser"),x.prototype),x),I=new(F=function(){function e(){Object(a.a)(this,e),Object(o.a)(this,"values",D,this)}return Object(i.a)(e,[{key:"setUsername",value:function(e){this.values.username=e}},{key:"setPassword",value:function(e){this.values.password=e}},{key:"login",value:function(){var e=this;return new Promise((function(t,n){g(e.values.username,e.values.password).then((function(e){L.pullUser(),t(e),u.a.success("\u767b\u9646\u6210\u529f\uff01")})).catch((function(e){L.resetUser(),u.a.error("\u767b\u9646\u5931\u8d25\uff01"),n(e)}))}))}},{key:"register",value:function(){var e=this;return new Promise((function(t,n){O(e.values.username,e.values.password).then((function(e){L.pullUser(),t(e),u.a.success("\u6ce8\u518c\u6210\u529f\uff01")})).catch((function(e){L.resetUser(),u.a.error("\u6ce8\u518c\u5931\u8d25\uff01"),n(e)}))}))}},{key:"logout",value:function(){j(),L.resetUser(),S.reset(),C.reset(),u.a.success("\u6ce8\u9500\u6210\u529f\uff01")}}]),e}(),D=Object(c.a)(F.prototype,"values",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{username:"",password:""}}}),Object(c.a)(F.prototype,"setUsername",[l.f],Object.getOwnPropertyDescriptor(F.prototype,"setUsername"),F.prototype),Object(c.a)(F.prototype,"setPassword",[l.f],Object.getOwnPropertyDescriptor(F.prototype,"setPassword"),F.prototype),Object(c.a)(F.prototype,"login",[l.f],Object.getOwnPropertyDescriptor(F.prototype,"login"),F.prototype),Object(c.a)(F.prototype,"register",[l.f],Object.getOwnPropertyDescriptor(F.prototype,"register"),F.prototype),Object(c.a)(F.prototype,"logout",[l.f],Object.getOwnPropertyDescriptor(F.prototype,"logout"),F.prototype),F),M=Object(r.createContext)({AuthStore:I,UserStore:L,ImageStore:C,HistoryStore:S});window.stores={AuthStore:I,UserStore:L,ImageStore:C,HistoryStore:S};var A=function(){return Object(r.useContext)(M)}},93:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},99:function(e,t,n){e.exports=n(159)}},[[99,4,5]]]);
//# sourceMappingURL=main.ff0c89d8.chunk.js.map