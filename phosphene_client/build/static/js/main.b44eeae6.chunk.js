(this.webpackJsonpphosphene=this.webpackJsonpphosphene||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a,s=n(0),c=n.n(s),i=n(12),o=n.n(i),r=n(38),l=n(52),j=n(107),d=n(104),h=n(105),b=n(64),u=n(19),p=(n(70),n(53)),m=n.p+"static/media/logo2.fc984d64.png",O=n(63),x=n(2),f=p.a.div(a||(a=Object(l.a)(["\n  a:hover {\n    text-decoration: none;\n  }\n\n  a {\n    color: #303030;\n    font-size: 15px;\n    font-weight: 500;\n  }\n\n  a:focus {\n    color: grey;\n  }\n\n  img {\n    border-radius: 100px;\n    height: 2.8em;\n  }\n\n  .link {\n    border-right: 1px solid;\n    padding: 0.5em;\n  }\n  .navbar {\n    border-bottom: 1px solid;\n  }\n"])));var g=function(){var e;return Object(x.jsx)("div",{children:Object(x.jsx)(f,{children:Object(x.jsxs)(j.a,(e={collapseOnSelect:!0,className:"navbar",expand:"lg",bg:"white",variant:"light"},Object(r.a)(e,"expand","lg"),Object(r.a)(e,"children",[Object(x.jsx)(j.a.Brand,{href:"/home",children:Object(x.jsx)("img",{src:m,alt:"logo"})}),Object(x.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(x.jsx)(j.a.Collapse,{id:"responsive-navbar-nav",children:Object(x.jsxs)(d.a,{children:[Object(x.jsxs)(h.a,{className:"mr-auto",children:[Object(x.jsxs)(b.a,{children:[" ",Object(x.jsx)(u.b,{className:"link ",to:"/home",children:"Home"})," "]}),Object(x.jsxs)(b.a,{children:[" ",Object(x.jsx)(u.b,{className:"link ",to:"/aboutus",children:"About Us"})," "]})]}),Object(x.jsx)(h.a,{children:Object(x.jsxs)("div",{className:"input-group rounded",children:[Object(x.jsx)("input",{type:"search",className:"form-control rounded",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon"}),Object(x.jsx)("span",{className:"input-group-text border-0 ml-2",id:"search-addon",children:Object(x.jsx)("i",{className:"fa fa-search",children:Object(x.jsx)(O.a,{})})})]})})]})})]),e))})})},v=(n(83),n(22)),N=n(62),_=n(32),S=n.n(_),y=n(28),I=n(7),w={settings:{autoplaySpeed:1500,transitionSpeed:900},buttons:{showDownloadButton:!1,showFullscreenButton:!1,showAutoplayButton:!1},caption:{captionColor:"#ffffff",captionFontFamily:"Raleway, sans-serif",captionFontWeight:"300"}};var C=function(e){console.log("im rendering");var t=Object(s.useState)(e.state.shop),n=Object(N.a)(t,2),a=n[0],c=(n[1],Object(I.f)().collection);Object(s.useEffect)((function(){return e[c]()}),[c,e.state.shop]);var i=a.shopData.map((function(e){return Object(x.jsx)("div",{className:S.a.item,children:Object(x.jsx)("img",{className:S.a.image,src:"data:image/png;base64,"+e.base64,alt:e.desc,width:"300",height:"300"})},e.id)}));return Object(x.jsx)(y.a,{options:w,children:Object(x.jsx)("div",{className:S.a.shopImage,children:i})})},B=n(33),E="PENDANTS",P="BROOCHES",H="EARINGS",k={currentCollection:"",shopData:[]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:case P:case H:return{shopData:t.data};default:return e}},D=function(){return function(e){B.get("/api/getEarrings").then((function(t){e({type:H,data:t})}))}},M=function(){return function(e){B.get("/api/getPendants").then((function(t){return e({type:E,data:t})}))}},F=function(){return function(e){B.get("/api/getBrooches").then((function(t){return e({type:P,data:t})}))}},R=Object(v.b)((function(e){return console.log(e),{state:e}}),{pendants:function(){return M()},brooches:function(){return F()},earrings:function(){return D()}})(C),G=n(106),J=n.p+"static/media/slide-1.1654245e.jpg",T=n.p+"static/media/slide-2.c768def2.jpg",W=n.p+"static/media/slide-3.048af088.jpg",q=n(18),z=n.n(q);var U=function(e){return Object(x.jsx)("div",{children:Object(x.jsxs)(G.a,{className:z.a.mainCarousel,children:[Object(x.jsxs)(G.a.Item,{className:z.a.slideItem,children:[Object(x.jsx)("img",{className:z.a.slidePhoto,src:J,alt:"slide-1"}),Object(x.jsxs)(G.a.Caption,{children:[Object(x.jsx)("h2",{children:"Pendants"}),Object(x.jsx)("a",{type:"button",className:"btn btn-info",href:"/shop/pendants",children:"See More"})]})]}),Object(x.jsxs)(G.a.Item,{className:z.a.slideItem,children:[Object(x.jsx)("img",{className:z.a.slidePhoto,src:T,alt:"slide-2"}),Object(x.jsxs)(G.a.Caption,{children:[Object(x.jsx)("h2",{children:"Earrings"}),Object(x.jsx)("a",{type:"button",className:"btn btn-info",href:"/shop/earrings",children:"See More"})]})]}),Object(x.jsxs)(G.a.Item,{className:z.a.slideItem,children:[Object(x.jsx)("img",{className:z.a.slidePhoto,src:W,alt:"slide-3"}),Object(x.jsxs)(G.a.Caption,{children:[Object(x.jsx)("h2",{children:"Brooches"}),Object(x.jsx)("a",{type:"button",className:"btn btn-info",href:"/shop/brooches",children:"See More"})]})]})]})})},V=Object(v.b)((function(e){return{state:e}}),(function(){}))(U);function K(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)(g,{}),Object(x.jsxs)(I.c,{children:[Object(x.jsx)(I.a,{exact:!0,path:"/",render:function(){return Object(x.jsx)(V,{})}}),Object(x.jsx)(I.a,{path:"/home",render:function(){return Object(x.jsx)(V,{})}}),Object(x.jsx)(I.a,{path:"/shop/:collection",render:function(){return Object(x.jsx)(R,{})}})]})]})}var L=n(34),Q=n(61),X=Object(L.b)({shop:A}),Y=Object(L.c)(X,Object(L.a)(Q.a));o.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(u.a,{children:Object(x.jsx)(v.a,{store:Y,children:Object(x.jsx)(y.b,{children:Object(x.jsx)(K,{})})})})}),document.getElementById("root"))},18:function(e,t,n){e.exports={slideItem:"Home_slideItem__3Ghhi",mainCarousel:"Home_mainCarousel__3CVbl",slidePhoto:"Home_slidePhoto__NqoWP",about:"Home_about__3Ns7H"}},32:function(e,t,n){e.exports={shopImage:"Shop_shopImage__MAEf4",item:"Shop_item__3Bel4",image:"Shop_image__2-daE"}},70:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.b44eeae6.chunk.js.map