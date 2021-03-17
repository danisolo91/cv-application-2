(this["webpackJsonpcv-application-2"]=this["webpackJsonpcv-application-2"]||[]).push([[0],{16:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),l=a(9),n=a.n(l),i=(a(14),a(15),a(16),a(4)),o=a(3),d=a(2),r=a(6),m=a.n(r),b=a(0),j=function(e){var t=Object(s.useState)({fullName:"Daniel Solomon",email:"example@example.com",phoneNumber:"+34-666-555-444"}),a=Object(d.a)(t,2),c=a[0],l=a[1],n=function(e){l(Object(o.a)(Object(o.a)({},c),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"container p-3 bg-primary text-light rounded",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("h2",{children:c.fullName}),Object(b.jsxs)("div",{children:[Object(b.jsx)("i",{className:"bi bi-envelope",children:" "}),Object(b.jsx)("span",{children:c.email})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("i",{className:"bi bi-telephone",children:" "}),Object(b.jsx)("span",{children:c.phoneNumber})]})]}),Object(b.jsx)("div",{className:"col-2 text-light text-end",children:Object(b.jsx)("i",{className:"bi bi-pencil-square","data-bs-toggle":"modal","data-bs-target":"#generalInfoModal"})})]})}),Object(b.jsx)("div",{className:"modal fade",id:"generalInfoModal",tabIndex:"-1","aria-labelledby":"generalInfoLabel","aria-hidden":"true",children:Object(b.jsx)("div",{className:"modal-dialog",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",id:"generalInfoLabel",children:"General information"}),Object(b.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(b.jsx)("div",{className:"modal-body",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m.a.getInstance(document.getElementById("generalInfoModal")).hide()},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"fullName",className:"form-label",children:"Full Name"}),Object(b.jsx)("input",{onChange:n,type:"text",className:"form-control",name:"fullName",value:c.fullName})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(b.jsx)("input",{onChange:n,type:"email",className:"form-control",name:"email",value:c.email})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"phoneNumber",className:"form-label",children:"Phone Number"}),Object(b.jsx)("input",{onChange:n,type:"text",className:"form-control",name:"phoneNumber",value:c.phoneNumber})]}),Object(b.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary ms-2",children:"Submit"})]})})]})})})]})},u=a(5),x=a.n(u),h=function(e){var t=Object(s.useState)(e.education),a=Object(d.a)(t,2),c=a[0],l=a[1],n=function(e){l(Object(o.a)(Object(o.a)({},c),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(s.useEffect)((function(){l(e.education)}),[e.education]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.save(c)},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"schoolName",className:"form-label",children:"School Name"}),Object(b.jsx)("input",{onChange:n,type:"text",className:"form-control",name:"schoolName",value:c.schoolName,required:!0})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title of study"}),Object(b.jsx)("input",{onChange:n,type:"text",className:"form-control",name:"title",value:c.title,required:!0})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"dateFrom",className:"form-label",children:"From"}),Object(b.jsx)("input",{onChange:n,type:"date",className:"form-control",name:"dateFrom",value:c.dateFrom,required:!0})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"dateTo",className:"form-label",children:"To"}),Object(b.jsx)("input",{onChange:n,type:"date",className:"form-control",name:"dateTo",value:c.dateTo,required:!0})]}),Object(b.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary ms-2",children:"Save"})]})})},O=function(e){return Object(b.jsxs)("div",{className:"container-fluid list-group-item",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("h5",{children:e.education.schoolName})}),Object(b.jsxs)("div",{className:"col-3 text-secondary text-end",children:[Object(b.jsx)("i",{onClick:function(){return e.loadEducation(e.education)},className:"bi bi-pencil-square","data-bs-toggle":"modal","data-bs-target":"#educationModal"}),Object(b.jsx)("i",{onClick:function(){return e.deleteEducation(e.education.id)},className:"bi bi-trash ms-2"})]})]}),Object(b.jsxs)("span",{className:"text-secondary text-small",children:[Object(b.jsx)("i",{className:"bi bi-calendar3 me-2"}),e.education.dateFrom," - ",e.education.dateTo]}),Object(b.jsx)("p",{className:"mb-0",children:e.education.title})]})},N=function(){var e=Object(s.useState)([{id:x.a.time(),schoolName:"TheOdinProject",title:"Fullstack Developer",dateFrom:"1980-09-20",dateTo:"1984-06-15"},{id:x.a.time(),schoolName:"Oxford University",title:"Computer Science Degree",dateFrom:"1976-09-20",dateTo:"1980-06-15"}]),t=Object(d.a)(e,2),a=t[0],c=t[1],l={id:"",schoolName:"",title:"",dateFrom:"",dateTo:""},n=Object(s.useState)(l),i=Object(d.a)(n,2),o=i[0],r=i[1],j=function(e){r(e)},u=function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"container-fluid border-bottom border-primary border-5 mt-4 mb-2",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("h3",{className:"text-primary",children:"Education"})}),Object(b.jsx)("div",{className:"col-4 text-end",children:Object(b.jsxs)("button",{onClick:function(){return j(l)},type:"button",className:"btn btn-outline-primary btn-sm min-width-60px","data-bs-toggle":"modal","data-bs-target":"#educationModal",children:[Object(b.jsx)("i",{className:"bi bi-plus-circle me-2"}),"Add"]})})]})}),Object(b.jsx)("div",{className:"list-group list-group-flush",children:a.length>0?a.map((function(e){return Object(b.jsx)(O,{education:e,loadEducation:j,deleteEducation:u},e.id)})):Object(b.jsx)("p",{className:"ps-2",children:"No educations. Please add some..."})}),Object(b.jsx)("div",{className:"modal fade",id:"educationModal",tabIndex:"-1","aria-labelledby":"educationModalLabel","aria-hidden":"true",children:Object(b.jsx)("div",{className:"modal-dialog",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",id:"educationModalLabel",children:"Educational experience"}),Object(b.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(b.jsx)("div",{className:"modal-body",children:Object(b.jsx)(h,{education:o,save:function(e){e.id?c((function(t){return t.map((function(t){return t.id===e.id?e:t}))})):(e.id=x.a.time(),c((function(t){return t.concat(e)}))),m.a.getInstance(document.getElementById("educationModal")).hide()}})})]})})})]})},p=function(e){return Object(b.jsxs)("div",{className:"container-fluid list-group-item",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("h5",{children:e.job.companyName})}),Object(b.jsxs)("div",{className:"col-3 text-secondary text-end",children:[Object(b.jsx)("i",{onClick:function(){return e.loadJob(e.job)},className:"bi bi-pencil-square","data-bs-toggle":"modal","data-bs-target":"#experienceModal"}),Object(b.jsx)("i",{onClick:function(){return e.delete(e.job.id)},className:"bi bi-trash ms-2"})]})]}),Object(b.jsxs)("span",{className:"text-secondary text-small",children:[Object(b.jsx)("i",{className:"bi bi-calendar3 me-2"}),e.job.dateFrom," - ",e.job.dateTo]}),Object(b.jsxs)("p",{className:"mb-0",children:[Object(b.jsx)("i",{children:e.job.position}),". ",e.job.tasks]})]})},f=function(e){var t=Object(s.useState)(e.job),a=Object(d.a)(t,2),c=a[0],l=a[1];Object(s.useEffect)((function(){l(e.job)}),[e.job]);var n=function(e){l(Object(o.a)(Object(o.a)({},c),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.save(c)},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"companyName",className:"form-label",children:"Company Name"}),Object(b.jsx)("input",{onChange:n,type:"text",className:"form-control",name:"companyName",value:c.companyName,required:!0})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"position",className:"form-label",children:"Position of title"}),Object(b.jsx)("input",{onChange:n,type:"text",className:"form-control",name:"position",value:c.position,required:!0})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"tasks",className:"form-label",children:"Tasks"}),Object(b.jsx)("textarea",{onChange:n,className:"form-control",name:"tasks",value:c.tasks})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"dateFrom",className:"form-label",children:"Date From"}),Object(b.jsx)("input",{onChange:n,type:"date",className:"form-control",name:"dateFrom",value:c.dateFrom,required:!0})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"dateTo",className:"form-label",children:"To"}),Object(b.jsx)("input",{onChange:n,type:"date",className:"form-control",name:"dateTo",value:c.dateTo,required:!0})]}),Object(b.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary ms-2",children:"Save"})]})})},v=function(){var e=Object(s.useState)([{id:x.a.time(),companyName:"Facebook,Inc",position:"Software Engineer",tasks:"I was the lead of a scrum team. Developing new functions and lorem ipsum dolor set amet.",dateFrom:"1976-09-20",dateTo:"1988-05-20"},{id:x.a.time(),companyName:"Alphabet Company",position:"Backend Developer",tasks:"I was the lead of a scrum team. Developing new functions and lorem ipsum dolor set amet.",dateFrom:"1983-09-20",dateTo:"1988-09-20"}]),t=Object(d.a)(e,2),a=t[0],c=t[1],l={id:"",companyName:"",position:"",tasks:"",dateFrom:"",dateTo:""},n=Object(s.useState)(l),i=Object(d.a)(n,2),o=i[0],r=i[1],j=function(e){r(e)},u=function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"container-fluid border-bottom border-primary border-5 mt-4 mb-2",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("h3",{className:"text-primary",children:"Experience"})}),Object(b.jsx)("div",{className:"col-4 text-end",children:Object(b.jsxs)("button",{onClick:function(){return j(l)},type:"button",className:"btn btn-outline-primary btn-sm min-width-60px","data-bs-toggle":"modal","data-bs-target":"#experienceModal",children:[Object(b.jsx)("i",{className:"bi bi-plus-circle me-2"}),"Add"]})})]})}),Object(b.jsx)("div",{className:"list-group list-group-flush",children:a.length>0?a.map((function(e){return Object(b.jsx)(p,{job:e,loadJob:j,delete:u},e.id)})):Object(b.jsx)("p",{className:"ps-2",children:"No experience, please add some..."})}),Object(b.jsx)("div",{className:"modal fade",id:"experienceModal",tabIndex:"-1","aria-labelledby":"experienceModalLabel","aria-hidden":"true",children:Object(b.jsx)("div",{className:"modal-dialog",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",id:"experienceModalLabel",children:"Professional experience"}),Object(b.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(b.jsx)("div",{className:"modal-body",children:Object(b.jsx)(f,{job:o,save:function(e){e.id?c((function(t){return t.map((function(t){return e.id===t.id?e:t}))})):(e.id=x.a.time(),c((function(t){return t.concat(e)}))),m.a.getInstance(document.getElementById("experienceModal")).hide()}})})]})})})]})},g=function(e){return Object(b.jsxs)("div",{className:"container mb-5",children:[Object(b.jsx)("h1",{className:"text-center mt-3 mb-3",children:"CV Application"}),Object(b.jsxs)("div",{className:"container-fluid border p-3 rounded",children:[Object(b.jsx)(j,{}),Object(b.jsx)(N,{}),Object(b.jsx)(v,{})]}),Object(b.jsx)("div",{className:"text-center mt-3 text-small",children:"Made by Daniel Solomon"})]})};n.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.53a09a37.chunk.js.map