(this.webpackJsonpplasma=this.webpackJsonpplasma||[]).push([[4],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var s=a(73),n=a(1),r=a(0),c=a(72),i=a.n(c),l=a(64),d=a(82),o=a(106),j=a(63),b=a(40),p=a(66),u=a(62),h=(a(100),a(71)),m=a(13);t.default=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],O=Object(r.useState)(!1),f=Object(s.a)(O,2),x=f[0],v=f[1],g=Object(r.useState)(m.a.msgChooseFile),y=Object(s.a)(g,2),N=y[0],P=y[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(j.a,{children:Object(n.jsxs)(b.a,{sm:{span:6,offset:3},md:{span:6,offset:3},lg:{span:6,offset:3},children:[Object(n.jsx)("h4",{className:"text-center mar-top-bot-2rem",children:m.a.msgUpload}),Object(n.jsx)("hr",{}),Object(n.jsx)(p.a,{children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(b.a,{sm:"9",md:"9",children:Object(n.jsx)(p.a.File,{id:"upload",name:"upload",onChange:function(e){c(e.target.files[0])},required:!0})}),Object(n.jsx)(b.a,{children:Object(n.jsx)(u.a,{variant:"primary",type:"submit",onClick:function(){if(a){v(!0);var e=new FormData;e.append("file",a,a.name),i.a.post(h.a.upload,e).then((function(e){v(!1),e&&e.data&&200===e.data.statusCode&&(c(null),P(e.data.data))})).catch((function(e){v(!1),c(null),P(m.a.msgError)}))}},children:m.a.btnUpload})})]})}),Object(n.jsx)("br",{}),x?Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)(l.a,{animation:"border",role:"status",children:Object(n.jsx)("span",{className:"sr-only",children:m.a.msgUploading})})}):a?Object(n.jsxs)(d.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:m.a.labelFileName}),Object(n.jsx)("th",{children:m.a.labelFileType}),Object(n.jsx)("th",{children:m.a.labelLastModified})]})}),Object(n.jsx)("tbody",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:a.name}),Object(n.jsx)("td",{children:a.type}),Object(n.jsx)("td",{children:a.lastModifiedDate.toDateString()})]})})]}):Object(n.jsx)(o.a,{variant:"primary",children:N})]})})})}},71:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var s="https://plasma-donor.herokuapp.com/",n={upload:"".concat(s,"api/patient/upload"),addPatient:"".concat(s,"api/patient/create"),editPatient:"".concat(s,"api/patient/findById"),updatePatient:"".concat(s,"api/patient/update"),listPatients:"".concat(s,"api/patient/findAll"),requestPlasma:"".concat(s,"api/plasma/request"),listDonors:"".concat(s,"api/plasma/request/close/getdata"),closeDonationRequest:"".concat(s,"api/plasma/request/close/submit")}},82:function(e,t,a){"use strict";var s=a(2),n=a(3),r=a(4),c=a.n(r),i=a(0),l=a.n(i),d=a(5),o=l.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.striped,o=e.bordered,j=e.borderless,b=e.hover,p=e.size,u=e.variant,h=e.responsive,m=Object(n.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),O=Object(d.a)(a,"table"),f=c()(r,O,u&&O+"-"+u,p&&O+"-"+p,i&&O+"-striped",o&&O+"-bordered",j&&O+"-borderless",b&&O+"-hover"),x=l.a.createElement("table",Object(s.a)({},m,{className:f,ref:t}));if(h){var v=O+"-responsive";return"string"===typeof h&&(v=v+"-"+h),l.a.createElement("div",{className:v},x)}return x}));t.a=o}}]);
//# sourceMappingURL=4.4dc31c9a.chunk.js.map