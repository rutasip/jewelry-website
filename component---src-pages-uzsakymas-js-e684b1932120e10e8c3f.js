(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"10+L":function(e,a,t){},"7oih":function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var l=t("q1tI"),c=t.n(l),n=t("aCnj"),r=t("JwsL");t("8ypT");function m(e){var a=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement(n.a,null),c.a.createElement("main",null,a),c.a.createElement(r.a,null))}},PpG3:function(e,a,t){"use strict";t.r(a),t.d(a,"Order",(function(){return m}));var l=t("q1tI"),c=t.n(l),n=t("7oih");t("10+L");function r(){var e=!0;document.getElementById("checkout").querySelectorAll("[required]").forEach((function(a){console.log("runs"),a.value||(e=!1)})),e?(document.getElementById("order-sent").style.display="flex",setTimeout((function(){document.getElementById("order-sent").style.display="none",localStorage.removeItem("id"),localStorage.removeItem("img"),localStorage.removeItem("name"),localStorage.removeItem("price"),window.location.replace("/jewelry-shop")}),1e3)):(document.getElementById("empty-fields-alert").style.display="flex",setTimeout((function(){document.getElementById("empty-fields-alert").style.display="none"}),1e3))}var m=function(){return"undefined"!=typeof window&&null!==localStorage.getItem("id")?c.a.createElement(n.a,null,c.a.createElement("section",{id:"checkout"},c.a.createElement("div",{className:"container"},c.a.createElement("form",{action:"#",className:"checkout__form"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-8"},c.a.createElement("h5",null,"užsakymo forma"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6"},c.a.createElement("div",{className:"checkout__form__input"},c.a.createElement("p",null,"Vardas ",c.a.createElement("span",null,"*")),c.a.createElement("input",{type:"text",required:!0}))),c.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6"},c.a.createElement("div",{className:"checkout__form__input"},c.a.createElement("p",null,"Pavardė ",c.a.createElement("span",null,"*")),c.a.createElement("input",{type:"text",required:!0}))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"checkout__form__input"},c.a.createElement("p",null,"Šalis ",c.a.createElement("span",null,"*")),c.a.createElement("input",{type:"text",required:!0})),c.a.createElement("div",{className:"checkout__form__input"},c.a.createElement("p",null,"Miestas ",c.a.createElement("span",null,"*")),c.a.createElement("input",{type:"text",required:!0})),c.a.createElement("div",{className:"checkout__form__input"},c.a.createElement("p",null,"Adresas ",c.a.createElement("span",null,"*")),c.a.createElement("input",{type:"text",required:!0})),c.a.createElement("div",{className:"checkout__form__input"},c.a.createElement("p",null,"Pašto kodas ",c.a.createElement("span",null,"*")),c.a.createElement("input",{type:"text",required:!0}))),c.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6"},c.a.createElement("div",{className:"checkout__form__input"},c.a.createElement("p",null,"Tel. nr. ",c.a.createElement("span",null,"*")),c.a.createElement("input",{type:"text",required:!0}))),c.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6"},c.a.createElement("div",{className:"checkout__form__input"},c.a.createElement("p",null,"El. paštas ",c.a.createElement("span",null,"*")),c.a.createElement("input",{type:"text",required:!0}))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"checkout__form__checkboxes"},c.a.createElement("p",null,"Pristatymo būdas"),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:"form-check col-sm-4"},c.a.createElement("input",{className:"form-check-input",type:"radio",id:"inStore",checked:!0}),c.a.createElement("label",{className:"form-check-label",for:"inStore"},"Atsiėmimas parduotuvėje")),c.a.createElement("div",{className:"form-check col-sm-4"},c.a.createElement("input",{className:"form-check-input",type:"radio",id:"delivery"}),c.a.createElement("label",{className:"form-check-label",for:"delivery"},"Pristatymas į namus")),c.a.createElement("div",{className:"form-check col-sm-4"},c.a.createElement("input",{className:"form-check-input",type:"radio",id:"omniva"}),c.a.createElement("label",{className:"form-check-label",for:"omniva"},"Į Omniva paštomatą"))))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"checkout__form__checkboxes"},c.a.createElement("p",null,"Apmokėjimo būdas"),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:"form-check col-sm-5"},c.a.createElement("input",{className:"form-check-input",type:"radio",id:"paymentInStore",checked:!0}),c.a.createElement("label",{className:"form-check-label",for:"paymentInStore"},"Grynais/banko kortele atsiimant")),c.a.createElement("div",{className:"form-check col-sm-5"},c.a.createElement("input",{className:"form-check-input",type:"radio",id:"paymentByBankTransfer"}),c.a.createElement("label",{className:"form-check-label",for:"paymentByBankTransfer"},"Bankiniu pavedimu"))))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"checkout__form__input"},c.a.createElement("p",null,"Komentaras"),c.a.createElement("input",{type:"text",placeholder:"Spec. pageidavimai pardavėjui ir kt."}))))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"checkout__order"},c.a.createElement("h5",null,"Jūsų užsakymas"),c.a.createElement("div",{className:"checkout__order__product"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("span",{className:"top__text"},"Prekė"),c.a.createElement("span",{className:"top__text__right"},"Kaina")),c.a.createElement("li",null,localStorage.getItem("name")," ",c.a.createElement("span",null,localStorage.getItem("price")," €")))),c.a.createElement("div",{className:"checkout__order__total"},c.a.createElement("ul",null,c.a.createElement("li",null,"Iš viso ",c.a.createElement("span",null,localStorage.getItem("price")," €")))),c.a.createElement("a",{href:"#",className:"theme-button",onClick:r},"Užsakyti"),c.a.createElement("div",{className:"alert alert-success",id:"order-sent",role:"alert"},"Užsakymas išsiųstas!"),c.a.createElement("div",{className:"alert alert-warning",id:"empty-fields-alert",role:"alert"},"Užpildykite būtinus laukelius")))))))):c.a.createElement(n.a,null,c.a.createElement("section",{className:"cart"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("h5",null,"Užsakymo įvykdyti neįmanoma, nes krepšelis tuščias")))))};a.default=m}}]);
//# sourceMappingURL=component---src-pages-uzsakymas-js-e684b1932120e10e8c3f.js.map