"use strict";(self.webpackChunkproject_react_twitter_cards=self.webpackChunkproject_react_twitter_cards||[]).push([[18],{8018:function(e,r,t){t.r(r),t.d(r,{default:function(){return _}});var n=t(3433),s=t(9439),a=t(2791),l=t(5861),c=t(4687),o=t.n(c),u=t(1243);function i(){return(i=(0,l.Z)(o().mark((function e(r,t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("page",r),e.prev=1,e.next=4,u.Z.get("/users",{params:{completed:!1,page:"".concat(r),limit:3},signal:t.signal});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}u.Z.defaults.baseURL="https://6444e238914c816083c15cad.mockapi.io/";var d=t(5987),p=t(1889),h=t(4554),f=t(6151),x=t(184),v=function(e){var r=e.props;r.user,r.avatar,r.followers,r.tweets;return(0,x.jsx)(h.Z,{sx:{width:"380px",height:"460px",backgroundColor:"rgba(87, 54, 163, 1)"},children:(0,x.jsx)(f.Z,{children:"Follow"})})},Z=["id"],j=function(e){var r=e.users;return(0,x.jsx)(p.ZP,{container:!0,spacing:3,children:r.map((function(e){var r=e.id,t=(0,d.Z)(e,Z);return(0,x.jsx)(p.ZP,{item:!0,xs:2,sm:4,md:4,children:(0,x.jsx)(v,{props:t})},r)}))})},w=t(4925),g=t(9891),m=t(6362),b=t(5558),k=function(){var e=(0,a.useState)(""),r=(0,s.Z)(e,2),t=r[0],n=r[1];return(0,x.jsx)(h.Z,{sx:{minWidth:120},children:(0,x.jsxs)(m.Z,{fullWidth:!0,children:[(0,x.jsx)(w.Z,{id:"demo-simple-select-label",children:"Show"}),(0,x.jsxs)(b.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t,label:"Age",onChange:function(e){n(e.target.value),console.log(e.target.value)},children:[(0,x.jsx)(g.Z,{value:20,children:"All"}),(0,x.jsx)(g.Z,{value:20,children:"Follow"}),(0,x.jsx)(g.Z,{value:30,children:"Followings show all"})]})]})})},C=t(1087);function _(){var e=(0,a.useState)(1),r=(0,s.Z)(e,2),t=r[0],l=r[1],c=(0,a.useState)([]),o=(0,s.Z)(c,2),u=o[0],d=o[1];(0,a.useEffect)((function(){var e=new AbortController;return function(e,r){return i.apply(this,arguments)}(t,e).then((function(e){var r=e.map((function(e){var r=e.user,t=e.avatar,n=e.id;return{user:r,avatar:t,followers:e.followers,tweets:e.tweets,id:n}}));d((function(e){return console.log("prevState",e),[].concat((0,n.Z)(e),(0,n.Z)(r))}))})).catch((function(e){return console.error(e)})),function(){e.abort()}}),[t]);return(0,x.jsxs)(h.Z,{children:[(0,x.jsx)("p",{children:"Tweets ???"}),(0,x.jsx)(f.Z,{children:(0,x.jsx)(C.rU,{to:"/",children:"Go back"})}),(0,x.jsx)(k,{}),(0,x.jsx)(j,{users:u}),0!==u.length&&(0,x.jsx)(f.Z,{onClick:function(){return l((function(e){return e+1}))},children:"LOAD MORE"})]})}}}]);
//# sourceMappingURL=18.7baf77a1.chunk.js.map