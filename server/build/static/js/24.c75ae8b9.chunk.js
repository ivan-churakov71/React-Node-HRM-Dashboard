(this["webpackJsonp@thimble/hrm-system-react"]=this["webpackJsonp@thimble/hrm-system-react"]||[]).push([[24],{451:function(e,t,n){"use strict";var a=n(5),c=n.n(a),r=n(192),i=n(0),o=n(267),s=n(1);const l=Object(i.forwardRef)((({children:e,title:t="",...n},a)=>Object(s.jsxs)(o.a,{ref:a,...n,children:[Object(s.jsx)(r.a,{children:Object(s.jsx)("title",{children:t})}),e]})));l.propTypes={children:c.a.node.isRequired,title:c.a.string},t.a=l},533:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(433),c=n(429),r=n(1);function i({searchQuery:e="",...t}){return Object(r.jsxs)(a.a,{...t,children:[Object(r.jsx)(c.a,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),Object(r.jsxs)(c.a,{variant:"body2",align:"center",children:["No results found for \xa0",Object(r.jsxs)("strong",{children:['"',e,'"']}),". Try checking for typos or using complete words."]})]})}},576:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(7),c=n(14),r=n(1);const i=Object(a.a)("span")((({theme:e,styleProps:t})=>{const n="light"===e.palette.mode,{color:a,variant:r}=t;return{height:22,minWidth:22,lineHeight:0,borderRadius:8,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",padding:e.spacing(0,1),color:e.palette.grey[800],fontSize:e.typography.pxToRem(12),fontFamily:e.typography.fontFamily,backgroundColor:e.palette.grey[300],fontWeight:e.typography.fontWeightBold,..."default"!==a?{..."filled"===r&&{...(t=>({color:e.palette[t].contrastText,backgroundColor:e.palette[t].main}))(a)},..."outlined"===r&&{...(t=>({color:e.palette[t].main,backgroundColor:"transparent",border:"1px solid ".concat(e.palette[t].main)}))(a)},..."ghost"===r&&{...(t=>({color:e.palette[t][n?"dark":"light"],backgroundColor:Object(c.a)(e.palette[t].main,.16)}))(a)}}:{..."outlined"===r&&{backgroundColor:"transparent",color:e.palette.text.primary,border:"1px solid ".concat(e.palette.grey[50032])},..."ghost"===r&&{color:n?e.palette.text.secondary:e.palette.common.white,backgroundColor:e.palette.grey[50016]}}}}));function o({color:e="default",variant:t="ghost",children:n,...a}){return Object(r.jsx)(i,{styleProps:{color:e,variant:t},...a,children:n})}},577:function(e,t,n){"use strict";function a(e){return e.charAt(0).toUpperCase()+e.substr(1)}n.d(t,"a",(function(){return a}))},661:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));function a(e){return e.toLowerCase()}var c=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],r=/[^A-Z0-9]+/gi;function i(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,i=void 0===n?c:n,s=t.stripRegexp,l=void 0===s?r:s,d=t.transform,j=void 0===d?a:d,h=t.delimiter,u=void 0===h?" ":h,b=o(o(e,i,"$1\0$2"),l,"\0"),g=0,p=b.length;"\0"===b.charAt(g);)g++;for(;"\0"===b.charAt(p-1);)p--;return b.slice(g,p).split("\0").map(j).join(u)}function o(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}},754:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(3),c=n(661),r=n(577);function i(e,t){var n=e.toLowerCase();return 0===t?Object(r.a)(n):n}function o(e,t){return void 0===t&&(t={}),Object(c.a)(e,Object(a.a)({delimiter:" ",transform:i},t))}},880:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return K}));var a=n(451),c=n(0),r=n(24),i=n(446),o=n(36),s=n(754),l=n(556),d=n(734),j=n(735),h=n(736),u=n(732),b=n(733),g=n(414),p=n(885),O=n(151),x=n(203),f=n(576),m=n(200),y=n(533),v=n(863),w=n(731),C=n(889),S=n(267),k=n(1);function R({order:e,orderBy:t,rowCount:n,headLabel:a,numSelected:c,onRequestSort:r,onSelectAllClick:i}){return Object(k.jsx)(w.a,{children:Object(k.jsxs)(u.a,{children:[Object(k.jsx)(b.a,{padding:"checkbox",children:Object(k.jsx)(g.a,{indeterminate:c>0&&c<n,checked:n>0&&c===n,onChange:i})}),a.map((n=>{return Object(k.jsx)(b.a,{align:n.alignRight?"right":"left",sortDirection:t===n.id&&e,children:Object(k.jsxs)(C.a,{hideSortIcon:!0,active:t===n.id,direction:t===n.id?e:"asc",onClick:(a=n.id,e=>{r(e,a)}),children:[n.label,t===n.id?Object(k.jsx)(S.a,{sx:{...v.a},children:"desc"===e?"sorted descending":"sorted ascending"}):null]})},n.id);var a}))]})})}var P=n(19),A=n(666),D=n.n(A),I=n(667),N=n.n(I),L=n(668),T=n.n(L),W=n(7),E=n(440),F=n(890),z=n(429),B=n(676),Z=n(827),q=n(426);const J=Object(W.a)(E.a)((({theme:e})=>({height:96,display:"flex",justifyContent:"space-between",padding:e.spacing(0,1,0,3)}))),M=Object(W.a)(F.a)((({theme:e})=>({width:240,transition:e.transitions.create(["box-shadow","width"],{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.shorter}),"&.Mui-focused":{width:320,boxShadow:e.customShadows.z8},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(e.palette.grey[50032]," !important")}})));function Q({numSelected:e,filterName:t,onFilterName:n}){const a="light"===Object(r.a)().palette.mode;return Object(k.jsxs)(J,{sx:{...e>0&&{color:a?"primary.main":"text.primary",bgcolor:a?"primary.lighter":"primary.dark"}},children:[e>0?Object(k.jsxs)(z.a,{component:"div",variant:"subtitle1",children:[e," selected"]}):Object(k.jsx)(M,{value:t,onChange:n,placeholder:"Search companies...",startAdornment:Object(k.jsx)(B.a,{position:"start",children:Object(k.jsx)(S.a,{component:P.Icon,icon:D.a,sx:{color:"text.disabled"}})})}),e>0?Object(k.jsx)(Z.a,{title:"Delete",children:Object(k.jsx)(q.a,{children:Object(k.jsx)(P.Icon,{icon:N.a})})}):Object(k.jsx)(Z.a,{title:"Filter list",children:Object(k.jsx)(q.a,{children:Object(k.jsx)(P.Icon,{icon:T.a})})})]})}const U=[{id:"companyName",label:"Company Name",alignRight:!1},{id:"companyDomain",label:"Domain",alignRight:!1},{id:"plans",label:"Plans",alignRight:!1},{id:"isPaid",label:"Payment Status",alignRight:!1},{id:"trialDays",label:"Trial Days",alignRight:!1},{id:"endOn",label:"End On",alignRight:!1},{id:"passedDays",label:"Passed Days",alignRight:!1}];function $(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function H(){const e=Object(O.c)(),{insights:t,companies:n}=Object(O.d)((e=>e.superAdmin)),[a,r]=Object(c.useState)(0),[i,v]=Object(c.useState)("asc"),[w,C]=Object(c.useState)([]),[S,P]=Object(c.useState)("domain"),[A,D]=Object(c.useState)(""),[I,N]=Object(c.useState)(10),[L,T]=Object(c.useState)([]),[W,E]=Object(c.useState)([]);Object(c.useEffect)((()=>{e(Object(x.c)()),e(Object(x.b)())}),[e]),Object(c.useEffect)((()=>{E([...t])}),[t]),Object(c.useEffect)((()=>{T([...n])}),[n]);const F=a>0?Math.max(0,(1+a)*I-W.length):0,z=function(e,t,n){const a=e||[],c=a.map(((e,t)=>[e,t]));return c.sort(((e,n)=>{const a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n?Object(o.filter)(a,(e=>-1!==e.domain.toLowerCase().indexOf(n.toLowerCase()))):c.map((e=>e[0]))}(W,function(e,t){return"desc"===e?(e,n)=>$(e,n,t):(e,n)=>-$(e,n,t)}(i,S),A),B=0===z.length;return Object(k.jsxs)(l.a,{children:[Object(k.jsx)(Q,{numSelected:w.length,filterName:A,onFilterName:e=>{D(e.target.value)}}),Object(k.jsx)(m.a,{children:Object(k.jsx)(d.a,{sx:{minWidth:800},children:Object(k.jsxs)(j.a,{children:[Object(k.jsx)(R,{order:i,orderBy:S,headLabel:U,rowCount:W.length,numSelected:w.length,onRequestSort:(e,t)=>{v(S===t&&"asc"===i?"desc":"asc"),P(t)},onSelectAllClick:e=>{if(e.target.checked){const e=W.map((e=>e.domain));C(e)}else C([])}}),Object(k.jsxs)(h.a,{children:[z.slice(a*I,a*I+I).map(((e,t)=>{const{name:n,domain:a,endOn:c,isPaid:r,passedDays:i,plans:o,trialDays:l}=e,d=-1!==w.indexOf(a);return Object(k.jsxs)(u.a,{hover:!0,tabIndex:-1,role:"checkbox",selected:d,"aria-checked":d,children:[Object(k.jsx)(b.a,{padding:"checkbox",children:Object(k.jsx)(g.a,{checked:d,onChange:e=>((e,t)=>{const n=w.indexOf(t);let a=[];-1===n?a=a.concat(w,t):0===n?a=a.concat(w.slice(1)):n===w.length-1?a=a.concat(w.slice(0,-1)):n>0&&(a=a.concat(w.slice(0,n),w.slice(n+1))),C(a)})(0,a)})}),Object(k.jsx)(b.a,{align:"left",children:n}),Object(k.jsx)(b.a,{align:"left",children:a}),Object(k.jsx)(b.a,{align:"left",children:Object(k.jsx)(f.a,{variant:"filled",color:("free"===o?"error":"trial"===o&&"warning")||"success",children:Object(s.a)(o)})}),Object(k.jsx)(b.a,{align:"left",children:Object(k.jsx)(f.a,{variant:"filled",color:1!==r?"error":"success",children:0===r?"UNPAID":"PAID"})}),Object(k.jsx)(b.a,{align:"left",children:"trial"===o?l:"0"}),Object(k.jsx)(b.a,{align:"left",children:"trial"===o?c:"Infinity"}),Object(k.jsx)(b.a,{align:"left",children:i})]},t)})),F>0&&Object(k.jsx)(u.a,{style:{height:53*F},children:Object(k.jsx)(b.a,{colSpan:6})})]}),B&&Object(k.jsx)(h.a,{children:Object(k.jsx)(u.a,{children:Object(k.jsx)(b.a,{align:"center",colSpan:6,sx:{py:3},children:Object(k.jsx)(y.a,{searchQuery:A})})})})]})})}),Object(k.jsx)(p.a,{rowsPerPageOptions:[10,15,25],component:"div",count:L.length,rowsPerPage:I,page:a,onPageChange:(e,t)=>{r(t)},onRowsPerPageChange:e=>{N(parseInt(e.target.value,10)),r(0)}})]})}function G(){const e=Object(r.a)();return Object(k.jsx)(i.a,{maxWidth:"xl",sx:{[e.breakpoints.down("md")]:{px:0}},children:Object(k.jsx)(H,{})})}function K(){return Object(k.jsx)(a.a,{title:"Thimble | Insights",children:Object(k.jsx)(G,{})})}}}]);
//# sourceMappingURL=24.c75ae8b9.chunk.js.map