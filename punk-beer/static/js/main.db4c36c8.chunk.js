(this["webpackJsonppunk-beer-api-frontend"]=this["webpackJsonppunk-beer-api-frontend"]||[]).push([[0],{64:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(10),r=a.n(i),s=(a(64),a(12)),o=a(115),l=a(120),d=a(121),j=a(122),b=a(124),p=a(123),h=a(52),u=a.n(h),m=a(127),O=a(119),x=a(78),g=a(4),f=Object(o.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",width:"90%",margin:"auto"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",borderRadius:"7px",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),textAlign:"center"},Backdrop:{backgroundColor:"rgba(60, 77, 49, .5)"}}}));function v(e){var t=f();return Object(g.jsx)("div",{children:e.data[e.id]&&Object(g.jsx)(m.a,{disableEnforceFocus:!0,"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:e.open,onClose:function(){e.setOpen(!1)},closeAfterTransition:!0,BackdropComponent:O.a,BackdropProps:{timeout:500,className:t.Backdrop},children:Object(g.jsx)(x.a,{in:e.open,children:Object(g.jsxs)("div",{className:t.paper,children:[Object(g.jsx)("h2",{id:"transition-modal-title",children:e.data[e.id].name?"".concat(e.data[e.id].name):"no name"}),Object(g.jsx)("h3",{style:{color:"#008000"},children:"Description:"}),Object(g.jsx)("h4",{id:"transition-modal-description",children:e.data[e.id].description?"".concat(e.data[e.id].description):"no description"}),Object(g.jsx)("h4",{style:{color:"#008000"},children:"Goes well with:"}),Object(g.jsx)("h5",{children:e.data[e.id].food_pairing?e.data[e.id].food_pairing.map((function(e,t){return Object(g.jsxs)("p",{children:["- ",e]},t)})):"no food pairing suggestion"}),Object(g.jsx)("h4",{style:{color:"#008000"},children:"Malts used:"}),Object(g.jsx)("h5",{children:e.data[e.id].ingredients.malt?e.data[e.id].ingredients.malt.map((function(e,t){return Object(g.jsxs)("span",{children:[e.name,", "]},t)})):"no malt ingredients"}),Object(g.jsx)("h4",{style:{color:"#008000"},children:"Hops used:"}),Object(g.jsx)("h5",{children:e.data[e.id].ingredients.hops?e.data[e.id].ingredients.hops.map((function(e,t){return Object(g.jsxs)("span",{children:[e.name,", "]},t)})):"no malt ingredients"}),Object(g.jsx)("span",{style:{color:"#008000"},children:"Tips: "}),Object(g.jsx)("span",{style:{fontSize:"0.9em"},children:e.data[e.id].brewers_tips?e.data[e.id].brewers_tips:"no brewers tips"})]})})})})}var y=Object(o.a)({root:{maxWidth:345,minWidth:300,margin:"1rem"},media:{height:140}});function w(e){var t=y(),a=Object(n.useState)(!1),c=Object(s.a)(a,2),i=c[0],r=c[1],o=Object(n.useState)(0),h=Object(s.a)(o,2),m=h[0],O=h[1],x=e.data;return Object(g.jsxs)("div",{className:"cardWrapper",style:{width:"100%",margin:"auto",display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[e.data&&e.data.map((function(e,a){return Object(g.jsxs)(l.a,{id:a,className:"".concat(t.root," Card"),style:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},children:[Object(g.jsx)(d.a,{id:a,onClick:function(){return t="".concat(e.image_url),void window.open(t,"_blank");var t},children:Object(g.jsx)("img",{src:e.image_url?"".concat(e.image_url):"https://s3.amazonaws.com/FringeBucket/image_placeholder.png",alt:"cover art",style:{width:"auto",margin:"1rem auto",maxHeight:"20rem"}})},a),Object(g.jsxs)(j.a,{children:[Object(g.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(g.jsx)(p.a,{gutterBottom:!0,variant:"h6",component:"h4",children:e.tagline}),Object(g.jsx)(p.a,{variant:"body2",color:"textSecondary",component:"p",style:{margin:"1rem auto"},children:e.description?e.description:"No description"}),Object(g.jsx)(p.a,{variant:"body1",color:"textSecondary",component:"p",children:e.food_pairing?"Goes well with: ".concat(e.food_pairing[0]," "):"You can drink it with anything"}),Object(g.jsx)(p.a,{variant:"body1",color:"textSecondary",component:"p",style:{margin:"1rem auto"},children:e.first_brewed?"First brewed: ".concat(e.first_brewed," "):"No data about when this was brewed first"})]}),Object(g.jsx)(b.a,{id:a,className:t.root,variant:"outlined",startIcon:Object(g.jsx)(u.a,{}),onClick:function(e){O(e.currentTarget.id),console.log(m),r(!0)},children:"Details"})]},a)})),e.data&&Object(g.jsx)(v,{open:i,setOpen:r,data:x,id:m})]})}var k=a(128),C=a(129),_=a(125),N=a(126),S=(a(74),Object(o.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})));var B=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),r=Object(s.a)(i,2),o=r[0],l=r[1],d=Object(n.useState)(""),j=Object(s.a)(d,2),b=j[0],p=j[1],h=Object(n.useState)(""),u=Object(s.a)(h,2),m=u[0],O=u[1],x=Object(n.useState)(""),f=Object(s.a)(x,2),v=f[0],y=f[1],B=S();function W(){c("https://api.punkapi.com/v2/beers?beer_name=".concat(b.replaceAll(" ","_"))),O(""),y("")}return Object(n.useEffect)((function(){fetch(a).then((function(e){return e.json()})).then((function(e){l(e),console.log(e)}))}),[a]),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("div",{className:"search",children:[Object(g.jsx)("input",{value:b,type:"text",placeholder:"search for a beer",name:"search",id:"s",onChange:function(e){p(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&W()}}),Object(g.jsx)("div",{className:"button",id:"b",onClick:function(){return W()},children:"SEARCH"}),0!==a.length&&Object(g.jsxs)("div",{className:"buttonWrapper",children:[Object(g.jsxs)(_.a,{className:B.formControl,children:[Object(g.jsx)(k.a,{id:"demo-simple-select-label",children:"only show beers before..."}),Object(g.jsxs)(N.a,{value:m,style:{minWidth:"200px"},labelId:"demo-simple-select-label",id:"demo-simple-select",onChange:function(e){O(e.target.value),a.length<=52?(c("".concat(a,"&brewed_before=01-").concat(e.target.value)),y(""),p("")):(p(""),c("https://api.punkapi.com/v2/beers?&brewed_before=01-".concat(e.target.value)),y(""))},children:[Object(g.jsx)(C.a,{value:2010,children:"2010"}),Object(g.jsx)(C.a,{value:2011,children:"2011"}),Object(g.jsx)(C.a,{value:2012,children:"2012"}),Object(g.jsx)(C.a,{value:2013,children:"2013"}),Object(g.jsx)(C.a,{value:2014,children:"2014"}),Object(g.jsx)(C.a,{value:2015,children:"2015"}),Object(g.jsx)(C.a,{value:2016,children:"2016"})]})]}),Object(g.jsxs)(_.a,{className:B.formControl,children:[Object(g.jsx)(k.a,{id:"demo-simple-select-label2",children:"only show beers after..."}),Object(g.jsxs)(N.a,{value:v,style:{minWidth:"200px"},labelId:"demo-simple-select-label2",id:"demo-simple-select2",onChange:function(e){y(e.target.value),a.length<=52?(c("".concat(a,"&brewed_after=12-").concat(e.target.value)),O(""),p("")):(p(""),c("https://api.punkapi.com/v2/beers?brewed_after=12-".concat(e.target.value)),O(""))},children:[Object(g.jsx)(C.a,{value:2010,children:"2010"}),Object(g.jsx)(C.a,{value:2011,children:"2011"}),Object(g.jsx)(C.a,{value:2012,children:"2012"}),Object(g.jsx)(C.a,{value:2013,children:"2013"}),Object(g.jsx)(C.a,{value:2014,children:"2014"}),Object(g.jsx)(C.a,{value:2015,children:"2015"})]})]})]})]}),0!==o.length?Object(g.jsx)(w,{data:o}):"No such beer"]})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,130)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(B,{})}),document.getElementById("root")),W()}},[[76,1,2]]]);
//# sourceMappingURL=main.db4c36c8.chunk.js.map