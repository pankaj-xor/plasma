(this.webpackJsonpplasma=this.webpackJsonpplasma||[]).push([[6],{68:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var s="https://plasma-donor.herokuapp.com/",c={upload:"".concat(s,"api/patient/upload"),addPatient:"".concat(s,"api/patient/create"),editPatient:"".concat(s,"api/patient/findById"),updatePatient:"".concat(s,"api/patient/update"),listPatients:"".concat(s,"api/patient/findAll"),requestPlasma:"".concat(s,"api/plasma/request"),listDonors:"".concat(s,"api/plasma/request/close/getdata"),closeDonationRequest:"".concat(s,"api/plasma/request/close/submit")}},79:function(t,e,a){"use strict";var s=a(2),c=a(3),n=a(4),r=a.n(n),i=a(0),d=a.n(i),o=a(5),l=d.a.forwardRef((function(t,e){var a=t.bsPrefix,n=t.className,i=t.striped,l=t.bordered,j=t.borderless,b=t.hover,u=t.size,p=t.variant,h=t.responsive,m=Object(c.a)(t,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),O=Object(o.a)(a,"table"),f=r()(n,O,p&&O+"-"+p,u&&O+"-"+u,i&&O+"-striped",l&&O+"-bordered",j&&O+"-borderless",b&&O+"-hover"),x=d.a.createElement("table",Object(s.a)({},m,{className:f,ref:e}));if(h){var v=O+"-responsive";return"string"===typeof h&&(v=v+"-"+h),d.a.createElement("div",{className:v},x)}return x}));e.a=l},99:function(t,e,a){"use strict";a.r(e);var s=a(70),c=a(1),n=a(69),r=a.n(n),i=a(0),d=a(61),o=a(103),l=a(79),j=a(12),b=a(68),u=a(6),p=[];e.default=function(){var t=Object(i.useState)(p),e=Object(s.a)(t,2),a=e[0],n=e[1],h=Object(i.useState)(!1),m=Object(s.a)(h,2),O=m[0],f=m[1],x=Object(i.useState)(""),v=Object(s.a)(x,2),P=v[0],g=v[1],N=Object(u.f)();Object(i.useEffect)((function(){f(!0),r.a.post("".concat(b.a.listPatients),{page:1,size:10}).then((function(t){t&&t.data&&200===t.data.statusCode&&(f(!1),"string"===typeof t.data.data?g(t.data.data):n(t.data.data))})).catch((function(t){f(!1),g(j.a.msgError)}))}),[]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{className:"text-center mar-top-bot-2rem",children:j.a.msgPatients}),Object(c.jsx)("hr",{}),O?Object(c.jsx)("div",{className:"text-center",children:Object(c.jsx)(d.a,{animation:"border",role:"status"})}):P?Object(c.jsx)(o.a,{variant:"primary",children:P}):null,Object(c.jsx)("br",{}),Object(c.jsxs)(l.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"#"}),Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Email"}),Object(c.jsx)("th",{children:"Blood Group"}),Object(c.jsx)("th",{children:"Mobile No"}),Object(c.jsx)("th",{style:{textAlign:"center"},children:"Actions"})]})}),Object(c.jsx)("tbody",{children:function(){if(a)return a.map((function(t,e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e+1}),Object(c.jsx)("td",{children:t.name}),Object(c.jsx)("td",{children:t.email}),Object(c.jsx)("td",{children:t.bloodGroup}),Object(c.jsx)("td",{children:t.mobile}),Object(c.jsxs)("td",{style:{textAlign:"center"},children:[Object(c.jsx)("span",{className:"link",onClick:function(){return N.push("patient/".concat(t.id))},children:"Edit"}),Object(c.jsx)("span",{className:"link",onClick:function(){return e=t.id,f(!0),void r.a.post("".concat(b.a.requestPlasma,"/").concat(e)).then((function(t){t&&t.data&&200===t.data.statusCode&&(f(!1),"string"===typeof t.data.data?g(t.data.data):g("Plasma request sent successfully"))})).catch((function(t){f(!1),g(j.a.msgError)}));var e},children:"Raise Plasma Request"})]})]},t.email)}))}()})]})]})}}}]);
//# sourceMappingURL=6.8f2d48ee.chunk.js.map