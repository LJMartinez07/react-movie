(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[0],{154:function(e,t,a){e.exports=a(204)},159:function(e,t,a){},186:function(e,t,a){},204:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),l=a(8),i=a(32),s=a(24),m=a(89),u=(a(159),function(){var e=Object(m.useMediaQuery)({query:"(max-width: 1224px)"});return r.a.createElement(s.Navbar,{className:"bp3-violet1"},r.a.createElement(s.Navbar.Group,{align:s.Alignment.LEFT},r.a.createElement(s.Navbar.Heading,null,r.a.createElement(i.b,{to:"/"},"React Movies")),!e&&r.a.createElement("input",{className:"bp3-input",placeholder:"Search your favorite Movie/Tv Show",type:"search"}),r.a.createElement(s.Navbar.Divider,{className:"customize-bar-divider"}),r.a.createElement(i.b,{to:"/movies"},r.a.createElement(s.Button,{className:"bp3-minimal",icon:"film"},"Movies")),r.a.createElement(i.b,{to:"/"},r.a.createElement(s.Button,{className:"bp3-minimal",icon:"video"},"TV Shows"))))}),p=(a(186),function(e){var t=e.children;return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"header"},r.a.createElement(u,null)),r.a.createElement("div",{className:"body"},t))}),v=a(37),h=a.n(v),d=a(53),f=a(95),b=a(96),E=a(98),g=a(97),y=a.n(g).a.create({baseURL:"https://api.themoviedb.org/3/"});y.interceptors.request.use((function(e){return e.params=Object(E.a)({api_key:"49d1d45c576713c95ea9afe3d1bbea95"},e.params),e}));var x=y,w=(new(function(){function e(){Object(f.a)(this,e)}return Object(b.a)(e,[{key:"getPopularMovies",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("/movie/popular");case 3:t=e.sent,console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"getLatestMovies",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("/movie/latest");case 3:t=e.sent,console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}]),e}()),[{path:"/home",component:function(){return r.a.createElement(p,null,r.a.createElement("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",height:"100vh"}},r.a.createElement("div",null,r.a.createElement("div",{style:{maxWidth:"600px",margin:"0px auto"}},r.a.createElement("h1",null,"React Movies"),r.a.createElement("h4",{style:{color:"#5c255c"}},"The Movie Database (TMDb) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDb's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different."))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/LuisMartinez28/react-movie"},r.a.createElement("i",{style:{color:"#5e6367"},className:"fab fa-github fa-4x"})),r.a.createElement("br",null),r.a.createElement("small",null,"Source Code"))))}},{path:"/movies",component:function(){return r.a.createElement(p,null,r.a.createElement("h1",null,"Movies"))}},{path:"/404",component:function(){return r.a.createElement(p,null,r.a.createElement("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",height:"100vh"}},r.a.createElement("h1",null,"Page Not Found 404")))}}]);function N(e){var t=e.location.pathname;if(e.beforeEnter&&e.beforeEnter(t),"/"===t)return r.a.createElement(l.a,{to:"/home"});var a=w.find((function(e){var a=e.path;return a=a.replace(/(:.+)/g,"[^/]+").replace(/\//g,"\\/"),new RegExp("".concat(a,"(\\/|\\/)?$"),"gi").test(t)}));return a?r.a.createElement(l.b,{exact:!a.hasChild,path:a.path,component:a.component}):r.a.createElement(l.a,{to:"/404"})}var k=function(e){return r.a.createElement(i.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(l.d,null,r.a.createElement(N,e))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement("div",{className:"app"},r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[154,1,2]]]);
//# sourceMappingURL=main.ed5cfd9f.chunk.js.map