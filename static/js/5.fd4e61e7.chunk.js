(this.webpackJsonpplasma=this.webpackJsonpplasma||[]).push([[5],{100:function(t,e,a){"use strict";a.r(e);var n=a(70),r=a(1),s=a(69),c=a.n(s),i=a(0),o=a(61),d=a(103),l=a(63),u=a(79),j=a(12),p=a(68),b=[];e.default=function(){var t=Object(i.useState)(b),e=Object(n.a)(t,2),a=e[0],s=e[1],h=Object(i.useState)(!1),f=Object(n.a)(h,2),O=f[0],m=f[1],x=Object(i.useState)(""),v=Object(n.a)(x,2),D=v[0],g=v[1];Object(i.useEffect)((function(){m(!0),c.a.post("".concat(p.a.listDonors)).then((function(t){t&&t.data&&200===t.data.statusCode&&(m(!1),"string"===typeof t.data.data?g(t.data.data):s(t.data.data))})).catch((function(t){m(!1),g("Donors: "+j.a.msgError)}))}),[]);var I=function(t){if(t)return t.map((function(t,e){return t.selected=!1,Object(r.jsx)("option",{value:t.donorId,children:t.name},t.donorId)}))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{className:"text-center mar-top-bot-2rem",children:j.a.msgDonations}),Object(r.jsx)("hr",{}),O?Object(r.jsx)("div",{className:"text-center",children:Object(r.jsx)(o.a,{animation:"border",role:"status"})}):D?Object(r.jsx)(d.a,{variant:"primary",children:D}):null,Object(r.jsx)("br",{}),Object(r.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Email"}),Object(r.jsx)("th",{children:"Donation Date"}),Object(r.jsx)("th",{children:"Donars List"}),Object(r.jsx)("th",{style:{textAlign:"center"},children:"Actions"})]})}),Object(r.jsx)("tbody",{children:function(){if(a)return a.map((function(t,e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e+1}),Object(r.jsx)("td",{children:t.patientName}),Object(r.jsx)("td",{children:t.patientEmail}),Object(r.jsx)("td",{children:Object(r.jsx)(l.a.Control,{type:"date",placeholder:"Enter Admission Date",size:"sm",value:t.donationDate,onChange:function(e){return n=t.patientId,r=e.target.value,void(a.find((function(t){return t.patientId==n})).donationDate=r);var n,r}})}),Object(r.jsx)("td",{children:Object(r.jsxs)(l.a.Control,{as:"select",onChange:function(e){return n=t.patientId,r=e.target.value,void a.find((function(t){return t.patientId==n})).donorsList.forEach((function(t){t.donorId==r&&(t.selected=!0)}));var n,r},children:[Object(r.jsx)("option",{value:"",children:"Select Donor"}),I(t.donorsList)]})}),Object(r.jsx)("td",{style:{textAlign:"center"},children:Object(r.jsx)("span",{className:"link",onClick:function(){return function(t){var e=a.find((function(e){return e.patientId==t})),n=e.donorsList.find((function(t){return 1==t.selected}));m(!0),c.a.post("".concat(p.a.closeDonationRequest),{patientId:t,donorId:n.donorId,donationDate:e.donationDate}).then((function(t){t&&t.data&&200===t.data.statusCode&&(m(!1),"string"===typeof t.data.data?g(t.data.data):g("Donation request closed successfully"))})).catch((function(t){m(!1),g(j.a.msgError)}))}(t.patientId)},children:"Close Donation Request"})})]},t.patientId)}))}()})]})]})}},68:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n="https://plasma-donor.herokuapp.com/",r={upload:"".concat(n,"api/patient/upload"),addPatient:"".concat(n,"api/patient/create"),editPatient:"".concat(n,"api/patient/findById"),updatePatient:"".concat(n,"api/patient/update"),listPatients:"".concat(n,"api/patient/findAll"),requestPlasma:"".concat(n,"api/plasma/request"),listDonors:"".concat(n,"api/plasma/request/close/getdata"),closeDonationRequest:"".concat(n,"api/plasma/request/close/submit")}},79:function(t,e,a){"use strict";var n=a(2),r=a(3),s=a(4),c=a.n(s),i=a(0),o=a.n(i),d=a(5),l=o.a.forwardRef((function(t,e){var a=t.bsPrefix,s=t.className,i=t.striped,l=t.bordered,u=t.borderless,j=t.hover,p=t.size,b=t.variant,h=t.responsive,f=Object(r.a)(t,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),O=Object(d.a)(a,"table"),m=c()(s,O,b&&O+"-"+b,p&&O+"-"+p,i&&O+"-striped",l&&O+"-bordered",u&&O+"-borderless",j&&O+"-hover"),x=o.a.createElement("table",Object(n.a)({},f,{className:m,ref:e}));if(h){var v=O+"-responsive";return"string"===typeof h&&(v=v+"-"+h),o.a.createElement("div",{className:v},x)}return x}));e.a=l}}]);
//# sourceMappingURL=5.fd4e61e7.chunk.js.map