(this["webpackJsonppunk-beer-api-frontend"]=this["webpackJsonppunk-beer-api-frontend"]||[]).push([[0],{70:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),o=(a(70),a(12)),s=a(118),l=a(123),d=a(124),b=a(125),j=a(127),u=a(126),h=a(53),p=a.n(h),m=a(132),g=a(122),O=a(84),x=a(4),f=Object(s.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",width:"70%",margin:"auto",height:"auto",maxHeight:"97%",overflowX:"hidden",overflowY:"auto"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",borderRadius:"7px",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),textAlign:"center",height:"auto"},Backdrop:{backgroundColor:"rgba(76, 201, 240, .2)"}}}));function v(e){var t=f();return Object(x.jsx)("div",{children:e.data[e.id]&&Object(x.jsx)(m.a,{disableEnforceFocus:!0,"aria-describedby":"transition-modal-description",className:t.modal,open:e.open,onClose:function(){e.setOpen(!1)},closeAfterTransition:!0,BackdropComponent:g.a,BackdropProps:{timeout:500,className:t.Backdrop},children:Object(x.jsx)(O.a,{in:e.open,children:Object(x.jsxs)("div",{className:t.paper,children:[Object(x.jsx)("h4",{id:"transition-modal-description",style:{color:"rgba(76, 201, 240, 1)"},children:e.data[e.id].tagline?"".concat(e.data[e.id].tagline):"no tagline"}),Object(x.jsx)("img",{src:e.data[e.id].image_url?"".concat(e.data[e.id].image_url):"https://s3.amazonaws.com/FringeBucket/image_placeholder.png",alt:"cover art",style:{width:"auto",margin:"auto",maxHeight:"20vw"}}),Object(x.jsx)("h4",{style:{color:"rgba(76, 201, 240, 1)",marginTop:0},children:"Goes well with:"}),Object(x.jsx)("h5",{children:e.data[e.id].food_pairing?e.data[e.id].food_pairing.map((function(e,t){return Object(x.jsxs)("p",{children:["- ",e]},t)})):"no food pairing suggestion"}),Object(x.jsx)("h4",{style:{color:"rgba(76, 201, 240, 1))"},children:"Malts used:"}),Object(x.jsx)("h5",{children:e.data[e.id].ingredients.malt?e.data[e.id].ingredients.malt.map((function(e,t){return Object(x.jsxs)("span",{children:[e.name,", "]},t)})):"no malt ingredients"}),Object(x.jsx)("h4",{style:{color:"rgba(76, 201, 240, 1)"},children:"Hops used:"}),Object(x.jsx)("h5",{children:e.data[e.id].ingredients.hops?e.data[e.id].ingredients.hops.map((function(e,t){return Object(x.jsxs)("span",{children:[e.name,", "]},t)})):"no malt ingredients"}),Object(x.jsx)("span",{style:{color:"rgb(0, 0, 139)"},children:"Tips: "}),Object(x.jsx)("span",{style:{fontSize:"0.9em"},children:e.data[e.id].brewers_tips?e.data[e.id].brewers_tips:"no brewers tips"})]})})})})}var w=Object(s.a)({root:{maxWidth:345,minWidth:300,margin:"1rem"},media:{height:140}});function y(e){var t=w(),a=Object(n.useState)(!1),r=Object(o.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(0),h=Object(o.a)(s,2),m=h[0],g=h[1],O=e.data;return Object(x.jsxs)("div",{className:"cardWrapper",style:{width:"100%",margin:"auto",display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[e.data&&e.data.map((function(e,a){return Object(x.jsxs)(l.a,{id:a,className:"".concat(t.root," Card"),style:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},children:[Object(x.jsx)(d.a,{id:a,onClick:function(){return t="".concat(e.image_url),void window.open(t,"_blank");var t},children:Object(x.jsx)("img",{src:e.image_url?"".concat(e.image_url):"https://s3.amazonaws.com/FringeBucket/image_placeholder.png",alt:"cover art",style:{width:"auto",margin:"1rem auto",maxHeight:"20rem"}})},a),Object(x.jsxs)(b.a,{children:[Object(x.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(x.jsx)(u.a,{gutterBottom:!0,variant:"h6",component:"h4",children:e.tagline}),Object(x.jsx)(u.a,{variant:"body2",color:"textSecondary",component:"p",style:{margin:"1rem auto"},children:e.description?e.description:"No description"}),Object(x.jsx)(u.a,{variant:"body1",color:"textSecondary",component:"p",children:e.food_pairing?"Goes well with: ".concat(e.food_pairing[0]," "):"You can drink it with anything"}),Object(x.jsx)(u.a,{variant:"body1",color:"textSecondary",component:"p",style:{margin:"1rem auto"},children:e.first_brewed?"First brewed: ".concat(e.first_brewed," "):"No data about when this was brewed first"})]}),Object(x.jsx)(j.a,{id:a,className:t.root,variant:"outlined",startIcon:Object(x.jsx)(p.a,{}),onClick:function(e){g(e.currentTarget.id),console.log(m),i(!0)},children:"Details"})]},a)})),e.data&&Object(x.jsx)(v,{open:c,setOpen:i,data:O,id:m})]})}var C=a(134),k=a(135),_=a(130),N=a(131),S=a(133),B=(a(80),Object(s.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},button:{margin:"1rem auto","& label.Mui-focused":{color:"#44bce0"},"& .MuiInput-underline:after":{borderBottomColor:"green"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"lightBlue"},"&:hover fieldset":{borderColor:"#44bce0"},"&.Mui-focused fieldset":{borderColor:"#44bce0"}}}}})));var I=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(o.a)(c,2),s=i[0],l=i[1],d=Object(n.useState)(""),b=Object(o.a)(d,2),j=b[0],u=b[1],h=Object(n.useState)(""),p=Object(o.a)(h,2),m=p[0],g=p[1],O=Object(n.useState)(""),f=Object(o.a)(O,2),v=f[0],w=f[1],I=B();function F(){0!==j.length?(r("https://api.punkapi.com/v2/beers?beer_name=".concat(j.replaceAll(" ","_"))),g(""),w("")):alert("no empty search field please")}return Object(n.useEffect)((function(){fetch(a).then((function(e){return e.json()})).then((function(e){l(e),console.log(e)}))}),[a]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("div",{className:"search",children:[Object(x.jsx)(S.a,{className:I.button,id:"outlined-basic",label:"Search for a beer",variant:"outlined",value:j,type:"text",placeholder:"search for a beer",name:"search",onChange:function(e){u(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&F()}}),Object(x.jsx)("button",{className:"btn",id:"b",onClick:function(){return F()},children:"SEARCH"}),0!==a.length&&Object(x.jsxs)("div",{className:"buttonWrapper",children:[Object(x.jsxs)(_.a,{className:I.formControl,children:[Object(x.jsx)(C.a,{id:"demo-simple-select-label",children:"only show beers before..."}),Object(x.jsxs)(N.a,{value:m,style:{minWidth:"200px"},labelId:"demo-simple-select-label",id:"demo-simple-select",onChange:function(e){g(e.target.value),a.length<=52?(r("".concat(a,"&brewed_before=01-").concat(e.target.value)),w(""),u("")):(u(""),r("https://api.punkapi.com/v2/beers?&brewed_before=01-".concat(e.target.value)),w(""))},children:[Object(x.jsx)(k.a,{value:2010,children:"2010"}),Object(x.jsx)(k.a,{value:2011,children:"2011"}),Object(x.jsx)(k.a,{value:2012,children:"2012"}),Object(x.jsx)(k.a,{value:2013,children:"2013"}),Object(x.jsx)(k.a,{value:2014,children:"2014"}),Object(x.jsx)(k.a,{value:2015,children:"2015"}),Object(x.jsx)(k.a,{value:2016,children:"2016"})]})]}),Object(x.jsxs)(_.a,{className:I.formControl,children:[Object(x.jsx)(C.a,{id:"demo-simple-select-label2",children:"only show beers after..."}),Object(x.jsxs)(N.a,{value:v,style:{minWidth:"200px"},labelId:"demo-simple-select-label2",id:"demo-simple-select2",onChange:function(e){w(e.target.value),a.length<=52?(r("".concat(a,"&brewed_after=12-").concat(e.target.value)),g(""),u("")):(u(""),r("https://api.punkapi.com/v2/beers?brewed_after=12-".concat(e.target.value)),g(""))},children:[Object(x.jsx)(k.a,{value:2010,children:"2010"}),Object(x.jsx)(k.a,{value:2011,children:"2011"}),Object(x.jsx)(k.a,{value:2012,children:"2012"}),Object(x.jsx)(k.a,{value:2013,children:"2013"}),Object(x.jsx)(k.a,{value:2014,children:"2014"}),Object(x.jsx)(k.a,{value:2015,children:"2015"})]})]})]})]}),0!==s.length?Object(x.jsx)(y,{data:s}):"No such beer"]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,137)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root")),F()}},[[82,1,2]]]);
//# sourceMappingURL=main.72354aff.chunk.js.map