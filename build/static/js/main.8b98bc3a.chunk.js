(this["webpackJsonpmaterial-ui"]=this["webpackJsonpmaterial-ui"]||[]).push([[0],{103:function(e,a,t){},108:function(e,a,t){},109:function(e,a,t){},112:function(e,a,t){},114:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),c=t.n(l),i=(t(85),t(28)),o=t(69),s=t(34),m=t(150),u=t(151),d=t(144),E=t(152),f=t(146),p=t(157),g=t(153),h=t(147),v=t(119),b=t(154),w=t(158),k=t(142),x=t(3),y=t(22),N=t(75),C=t.n(N),j=t(51),O=t.n(j),S=t(50),B=t.n(S),A=t(52),I=t.n(A),L=t(53),T=t.n(L),z=t(54),W=t.n(z),P=t(76),q=t.n(P),R=t(71),M=t.n(R),D=t(72),U=t.n(D),J=t(73),G=t.n(J),H=t(38),$=t.n(H),F=t(156),K=t(148),Q=t(149),V=t(42),X=t.n(V),Y=t(39),Z=t.n(Y),_=(t(103),Object(k.a)((function(e){return{root:{},centerContainer:{display:"flex",justify:"center",justifyContent:"right",color:"#004B87",margin:"0"},menuButton:{margin:"0",padding:"0"}}}))),ee=function(){var e=_(),a=r.a.useState(null),t=Object(i.a)(a,2),l=t[0],c=t[1],o=Boolean(l),s=Object(n.useState)([]),m=Object(i.a)(s,2),u=(m[0],m[1],""),E=function(){c(null)};return Object(n.useEffect)((function(){Z.a.get("http://ms00015080d:7050/api/userpreferences/fhenao").then((function(e){u=e.data.mills[3].millName}))}),[u]),r.a.createElement("div",{className:e.root},r.a.createElement(d.a,{item:!0,xs:4,className:e.centerContainer},r.a.createElement(f.a,{color:"inherit",size:"small",className:Object(x.a)(e.menuButton),"aria-controls":"fade-menu","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)}},r.a.createElement(X.a,{color:"primary"}),r.a.createElement("h4",{className:e.centerContainer},u))),r.a.createElement(F.a,{id:"fade-menu",anchorEl:l,keepMounted:!0,open:o,onClose:E,TransitionComponent:K.a},r.a.createElement(Q.a,{onClick:E},"Mill One"),r.a.createElement(Q.a,{onClick:E},"Mill Two"),r.a.createElement(Q.a,{onClick:E},"Mill Three")))},ae=(t(108),""),te="",ne="";function re(){var e=r.a.useState(null),a=Object(i.a)(e,2),t=a[0],n=a[1],l=Boolean(t),c=function(){n(null)};return r.a.createElement("div",{className:"root"},r.a.createElement(f.a,{color:"inherit",size:"small","aria-controls":"fade-menu","aria-haspopup":"true",onClick:function(e){n(e.currentTarget)}},r.a.createElement(X.a,{color:"primary"}),r.a.createElement("h5",null,ae)),r.a.createElement(F.a,{keepMounted:!0,id:"fade-menu",anchorEl:t,open:l,onClose:c},r.a.createElement(Q.a,{onClick:c,language:ne}),r.a.createElement(Q.a,{onClick:c,units:te})))}Z.a.get("http://ms00015080d:7050/api/userpreferences/fhenao").then((function(e){ae=e.data.userName,te=e.data.units,ne=e.data.language})).catch((function(e){}));t(109);var le=Object(k.a)((function(e){return{root:{textAlign:"center",display:"flex"},flex:{display:"flex"},appBar:{backgroundColor:"white",position:"fixed",borderBottom:"5px solid #ff8200",height:"7vh",transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},button:{color:"inherit"},rightContainer:{alignItems:"center",display:"flex",justify:"center",justifyContent:"flex-end"},centerContainer:{display:"flex",flexDirection:"column",alignItems:"center"},leftContainer:{display:"flex",justifyContent:"flex-Start",flexDirection:"row",justify:"center"},appBarShift:{width:"calc(100% - ".concat(290,"px)"),marginLeft:290,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{margin:"0",padding:"0"},hide:{display:"none"},drawer:{width:290,flexShrink:0,position:"absolute"},drawerPaper:{width:290,height:"56%"},drawerHeader:Object(o.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-290},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},quickAccessIconsContainer:{paddingTop:"10vh",borderRight:"2px"},quickAccessIcons:{marginLeft:"2vh",marginTop:"1vh",color:"gray",opacity:"60%"}}})),ce=function(){var e=le(),a=Object(y.a)(),t=r.a.useState(!1),n=Object(i.a)(t,2),l=n[0],c=n[1];return r.a.createElement("div",{className:e.root},r.a.createElement(m.a,{className:e.appBar},r.a.createElement(u.a,null,r.a.createElement(d.a,{container:!0},r.a.createElement(d.a,{item:!0,xs:4,className:e.leftContainer},r.a.createElement("div",null,r.a.createElement(E.a,{onClickAway:function(){c(!1)}},r.a.createElement(f.a,{color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},edge:"start",className:Object(x.a)(e.menuButton,l&&e.hide)},r.a.createElement(M.a,{color:"primary"}))),r.a.createElement(p.a,{className:e.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:"drawer-header"},r.a.createElement(f.a,{onClick:function(){c(!1)}},"ltr"===a.direction?r.a.createElement(U.a,null):r.a.createElement(G.a,null))),r.a.createElement(g.a,null),r.a.createElement(h.a,null,r.a.createElement(s.a,null,r.a.createElement("nav",null,r.a.createElement(s.b,{to:"/load-planner"},r.a.createElement(v.a,{button:!0},r.a.createElement(b.a,null,r.a.createElement(B.a,null)),r.a.createElement(w.a,{primary:"Load Planner"}))),r.a.createElement(s.b,{to:"/mill-preferences"},r.a.createElement(v.a,{button:!0},r.a.createElement(b.a,null,r.a.createElement(O.a,null)),r.a.createElement(w.a,{primary:"Mill Preferences"}))),r.a.createElement(s.b,{to:"/mill-preferences"},r.a.createElement(v.a,{button:!0},r.a.createElement(b.a,null,r.a.createElement(I.a,null)),r.a.createElement(w.a,{primary:"Reports"}))),r.a.createElement(v.a,{button:!0},r.a.createElement(b.a,null,r.a.createElement(T.a,null)),r.a.createElement(w.a,{primary:"Scenario Builder"})),r.a.createElement(v.a,{button:!0},r.a.createElement(b.a,null,r.a.createElement(W.a,null)),r.a.createElement(w.a,{primary:"Som Tester"}))))),r.a.createElement(g.a,null))),r.a.createElement("img",{src:$.a,alt:"West Rock Logo",className:"logo"})),r.a.createElement(d.a,{item:!0,xs:4,className:e.centerContainer},r.a.createElement(ee,{className:e.location})),r.a.createElement(d.a,{item:!0,xs:4,className:e.rightContainer},r.a.createElement(f.a,{color:"inherit",size:"small",className:Object(x.a)(e.menuButton)}),r.a.createElement(re,null),r.a.createElement(f.a,{color:"inherit",size:"small",className:Object(x.a)(e.menuButton)},r.a.createElement(C.a,{color:"action"})),r.a.createElement(f.a,{color:"inherit",size:"small",className:Object(x.a)(e.menuButton)},r.a.createElement(q.a,{color:"action"})))))),r.a.createElement(d.a,{className:e.quickAccessIconsContainer},r.a.createElement(d.a,{container:!0,spacing:1},r.a.createElement(f.a,{size:"small",className:Object(x.a)(e.quickAccessIcons)},r.a.createElement(B.a,null))),r.a.createElement(d.a,null,r.a.createElement(f.a,{size:"small",className:Object(x.a)(e.quickAccessIcons)},r.a.createElement(O.a,null))),r.a.createElement(d.a,null,r.a.createElement(f.a,{size:"small",className:Object(x.a)(e.quickAccessIcons)},r.a.createElement(I.a,null))),r.a.createElement(d.a,null,r.a.createElement(f.a,{size:"small",className:Object(x.a)(e.quickAccessIcons)},r.a.createElement(T.a,null))),r.a.createElement(d.a,null,r.a.createElement(f.a,{size:"small",className:Object(x.a)(e.quickAccessIcons)},r.a.createElement(W.a,null)))))},ie=t(27),oe=function(){return r.a.createElement("div",null,"LogOut")},se=function(){return r.a.createElement("div",null,"LoadPlanner")},me=function(){return r.a.createElement("div",null,"LoadPlanSelector")},ue=function(){return r.a.createElement("div",null,"Mill Plan")},de=function(){return r.a.createElement("div",null,"Reports")},Ee=function(){return r.a.createElement("div",null,"Som Tester")},fe=(t(112),function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"root"},r.a.createElement(pe,null)),r.a.createElement("div",null,r.a.createElement("div",{className:"overlay"}),r.a.createElement(me,null)),r.a.createElement("div",{className:"mobile-message"},r.a.createElement("svg",{version:"1.1",id:"mobile-svg",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 1366 912"},r.a.createElement("img",{src:$.a,alt:"Westrock Logo"})),r.a.createElement("p",null,"This content must be viewed on a larger screen.",r.a.createElement("span",null,"(Landscape Tablet or larger.)"))),r.a.createElement("main",{role:"main",className:"main-content"},r.a.createElement(ie.d,null,r.a.createElement(ie.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(pe,e)}}),r.a.createElement(ie.b,{path:"/reports",exact:!0,render:function(e){return r.a.createElement(de,e)}}),r.a.createElement(ie.b,{path:"/load-planner",render:function(e){return r.a.createElement(se,e)}}),r.a.createElement(ie.b,{path:"/mill-plan",render:function(e){return r.a.createElement(ue,Object.assign({},e,{millName:(void 0).props.millName}))}}),r.a.createElement(ie.b,{path:"/som-tester",render:function(e){return r.a.createElement(Ee,Object.assign({},e,{userID:(void 0).props.userID}))}}),r.a.createElement(ie.b,{path:"/logout",render:function(e){return r.a.createElement(oe,e)}}),r.a.createElement(ie.a,{path:"*",to:"/"}))))}),pe=function(){return r.a.createElement("div",null,r.a.createElement(ce,null),r.a.createElement(fe,null))},ge=(t(113),function(){return r.a.createElement("div",null,r.a.createElement(pe,null))}),he=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(ge,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");he?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ve(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ve(a,e)}))}}()},38:function(e,a,t){e.exports=t.p+"static/media/westRockLogo.9606afff.png"},80:function(e,a,t){e.exports=t(114)},85:function(e,a,t){}},[[80,1,2]]]);
//# sourceMappingURL=main.8b98bc3a.chunk.js.map