(function(){"use strict";var t={1750:function(t,s,a){var o=a(6369),e=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container-fluid content"},[s("div",{staticClass:"row flex-nowrap"},[s("VSidebar"),s("router-view")],1)])])},l=[],n=(a(7154),function(){var t=this,s=t._self._c;return s("div",{staticClass:"sidebar col-auto bg-white"},[s("div",{staticClass:"sidebar-row d-flex flex-column align-items-start min-vh-100"},[s("router-link",{staticClass:"sidebar-logo",attrs:{to:"/"}},[s("img",{staticClass:"sidebar-logo__img",attrs:{src:a(9574),alt:"log"}})]),s("ul",{staticClass:"sidebar-list flex-column mb-sm-auto align-items-center align-items-sm-start",attrs:{id:"menu"}},t._l(t.menu,(function(a,o){return s("li",{key:o,staticClass:"sidebar-list__item"},[s("router-link",{staticClass:"sidebar-list__link d-flex align-items-center",attrs:{to:a.to}},[s("span",{class:[`icon-${a.icon}`,"sidebar-list__link-icon"]}),s("span",{staticClass:"sidebar-list__link-text d-none d-sm-inline"},[t._v(t._s(a.name))])])],1)})),0)],1)])}),i=[],r={name:"VSidebar",data(){return{menu:[{icon:"home",name:"Главная",to:"/"},{icon:"cart",name:"Мои магазины",to:"/stores"},{icon:"megaphone",name:"Промоматериалы",to:"/promo"},{icon:"diagramma",name:"Статистика",to:"/stats"},{icon:"wallet",name:"Баланс",to:"/wallet"},{icon:"person",name:"Персональные данные",to:"/personal"},{icon:"question",name:"FAQ",to:"/faq"},{icon:"headphones",name:"Техподдержка",to:"/support"},{icon:"exit",name:"Выход",to:"/logout"}]}}},c=r,d=a(1001),u=(0,d.Z)(c,n,i,!1,null,null,null),p=u.exports,b={components:{VSidebar:p}},m=b,v=(0,d.Z)(m,e,l,!1,null,null,null),f=v.exports,C=a(2631),h=function(){var t=this,s=t._self._c;return s("div",{staticClass:"store-page col"},[s("div",{staticClass:"top-bar container-fluid"},[s("div",{staticClass:"row"},[s("VBreadcrumbs",{staticClass:"col-6"}),t._m(0)],1)]),s("VButton",{ref:"modalButton",staticClass:"button-store",attrs:{"data-bs-toggle":"modal","data-bs-target":`#${t.modalId}`},nativeOn:{click:function(s){return t.getButtonModalPosition.apply(null,arguments)}},scopedSlots:t._u([{key:"icon",fn:function(){return[s("span",{staticClass:"button-store-icon"},[t._v("+")])]},proxy:!0}])},[t._v(" Создать свой магазин ")]),s("VStoreTable",{attrs:{title:"Управление магазинами"}}),s("VModal",{attrs:{id:t.modalId,"use-pos":!0,"pos-top":t.modalPos.top,"pos-left":t.modalPos.left}})],1)},y=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"top-bar__right col-6"},[s("div",{staticClass:"top-bar__messages has-notification"},[s("span",{staticClass:"top-bar__messages-icon icon-letter"})]),s("div",{staticClass:"top-bar__user"},[s("div",{staticClass:"top-bar__user-img"},[s("img",{attrs:{src:a(8308),alt:"avatar"}})]),s("div",{staticClass:"top-bar__user-name"},[t._v(" Максим Добжанский ")])])])}],_=function(){var t=this,s=t._self._c;return s("div",{staticClass:"breadcrumbs"},[s("router-link",{staticClass:"breadcrumbs__link",attrs:{to:"/"}},[t._v("Главная")]),s("span",{staticClass:"breadcrumbs__arrow icon-arrow-right"}),s("router-link",{staticClass:"breadcrumbs__link",attrs:{to:"/stores"}},[t._v("Мои магазины")])],1)},w=[],x={},g=(0,d.Z)(x,_,w,!1,null,null,null),T=g.exports,A=function(){var t=this,s=t._self._c;return s("button",{class:["btn","button",`button-${t.type}`],style:{"--width":t.width},attrs:{type:"button"}},[t.$slots.icon?s("span",{staticClass:"button__icon"},[t._t("icon")],2):t._e(),s("span",{staticClass:"button__text"},[t._t("default")],2)])},k=[],M={name:"VButton",props:{type:{type:String,default:"success"},width:{type:String,default:"auto"}}},B=M,Q=(0,d.Z)(B,A,k,!1,null,null,null),V=Q.exports,P=function(){var t=this,s=t._self._c;return s("div",{staticClass:"table-wrapper"},[s("h2",{staticClass:"table-title"},[t._v(t._s(t.title))]),s("div",{staticClass:"table-inner table-responsive"},[s("table",{staticClass:"table table-borderless"},[t._m(0),s("tbody",{staticClass:"table-body"},[s("tr",{staticClass:"table-body-row"},[s("td",{staticClass:"table-body-col",attrs:{scope:"row"}},[t._v("12345")]),s("td",{staticClass:"table-body-col"},[t._v("Дипломная работа")]),s("td",{staticClass:"table-body-col"},[t._v("http://www.work5.ru/services")]),s("td",{staticClass:"table-body-col table-body-col--last"},[s("div",{staticClass:"table-buttons"},[s("VButton",{staticClass:"table-button",attrs:{width:"149px"},scopedSlots:t._u([{key:"icon",fn:function(){return[s("span",{staticClass:"icon-edit"})]},proxy:!0}])},[t._v(" Редактировать ")]),s("VButton",{staticClass:"table-button",attrs:{width:"149px",type:"cancel"},scopedSlots:t._u([{key:"icon",fn:function(){return[s("span",{staticClass:"icon-cross"})]},proxy:!0}])},[t._v(" Редактировать ")])],1)])]),s("tr",{staticClass:"table-body-row"},[s("td",{staticClass:"table-body-col",attrs:{scope:"row"}},[t._v("12345")]),s("td",{staticClass:"table-body-col"},[t._v("Дипломная работа")]),s("td",{staticClass:"table-body-col"},[t._v("http://www.work5.ru/services")]),s("td",{staticClass:"table-body-col table-body-col--last"},[s("div",{staticClass:"table-buttons"},[s("VButton",{staticClass:"table-button",attrs:{width:"149px"},scopedSlots:t._u([{key:"icon",fn:function(){return[s("span",{staticClass:"icon-edit"})]},proxy:!0}])},[t._v(" Редактировать ")]),s("VButton",{staticClass:"table-button",attrs:{width:"149px",type:"cancel"},scopedSlots:t._u([{key:"icon",fn:function(){return[s("span",{staticClass:"icon-cross"})]},proxy:!0}])},[t._v(" Редактировать ")])],1)])])])])])])},I=[function(){var t=this,s=t._self._c;return s("thead",[s("tr",{staticClass:"table-head"},[s("th",{staticClass:"table-head-col",attrs:{scope:"col"}},[t._v("№")]),s("th",{staticClass:"table-head-col",attrs:{scope:"col"}},[t._v("Название")]),s("th",{staticClass:"table-head-col",attrs:{scope:"col"}},[t._v("Адрес")]),s("th",{staticClass:"table-head-col table-head-col--last",attrs:{scope:"col"}},[t._v("Действие")])])])}],S={name:"VStoreTable",props:{title:{type:String,default:""}},components:{VButton:V}},Z=S,N=(0,d.Z)(Z,P,I,!1,null,null,null),U=N.exports,E=function(){var t=this,s=t._self._c;return s("div",{staticClass:"modal fade",attrs:{id:t.id,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{class:["modal-dialog","modal-dialog-centered","modal-dialog-scrollable","store-modal",{fixed:t.usePos}],style:{"--pos-left":t.posLeft+"px","--pos-top":t.posTop+"px"}},[s("div",{staticClass:"modal-content store-modal-wrapper"},[t._m(0),s("div",{staticClass:"modal-footer store-modal-footer"},[s("VButton",{staticClass:"store-modal-footer__button",attrs:{type:"cancel","data-bs-dismiss":"modal"}},[t._v("Отмена")]),s("VButton",{staticClass:"store-modal-footer__button"},[t._v("Создать")])],1)])])])},G=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"modal-body store-modal-body"},[s("div",{staticClass:"store-modal-body__header"},[s("h1",{staticClass:"modal-title fs-5 store-modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Создать магазин")]),s("button",{staticClass:"store-modal__icon icon-cross",attrs:{type:"button","data-bs-dismiss":"modal"}})]),s("div",{staticClass:"store-modal-body__content"},[s("div",{staticClass:"store-modal-selects"},[s("div",{staticClass:"store-modal-select"},[s("div",{staticClass:"store-modal-subtitle"},[t._v("Шаблон")]),s("select",{staticClass:"form-select store-modal-select store-modal-select__text",attrs:{"aria-label":"Пример выбора по умолчанию"}},[s("option",{attrs:{selected:""}},[t._v("Стандартный")]),s("option",{attrs:{value:"1"}},[t._v("Один")]),s("option",{attrs:{value:"2"}},[t._v("Два")]),s("option",{attrs:{value:"3"}},[t._v("Три")])])]),s("div",{staticClass:"store-modal-select"},[s("div",{staticClass:"store-modal-subtitle"},[t._v("Цветовая схема")]),s("select",{staticClass:"form-select store-modal-select store-modal-select__text",attrs:{"aria-label":"Пример выбора по умолчанию"}},[s("option",{attrs:{selected:""}},[t._v("Классическая")]),s("option",{attrs:{value:"1"}},[t._v("Один")]),s("option",{attrs:{value:"2"}},[t._v("Два")]),s("option",{attrs:{value:"3"}},[t._v("Три")])])])]),s("div",{staticClass:"store-modal-domen"},[s("div",{staticClass:"store-modal-subtitle"},[t._v("Домен")])]),s("div",{staticClass:"input-group mb-3 store-modal-input"},[s("input",{staticClass:"form-control store-modal-input__text",attrs:{type:"text",placeholder:"Например: ivangrozniy","aria-label":"Example text with button addon","aria-describedby":"button-addon1"}}),s("button",{staticClass:"btn btn-outline-secondary store-modal-input__button",attrs:{type:"button",id:"button-addon1"}},[t._v(".work5.ru")])]),s("div",{staticClass:"store-modal-subtext"},[s("img",{staticClass:"store-modal-subtext__img",attrs:{src:a(19)}}),s("p",{staticClass:"store-modal-subtext__text"},[t._v("В названии домена разрешены латиница и “-”, запрещается использовать "),s("br"),t._v(" словосочетание Work 5. После создания магазина Вы сможете прикрутить свой "),s("br"),t._v(" домен (например ivangrozniy.ru). Подробнее по "),s("a",{attrs:{href:"#",target:"_blank"}},[t._v("ссылке")])])])])])}],R={name:"VModal",props:{id:{type:String,required:!0},posLeft:{type:Number,default:0},posTop:{type:Number,default:0},usePos:{type:Boolean,default:!1}},data(){return{}},components:{VButton:V}},Y=R,O=(0,d.Z)(Y,E,G,!1,null,null,null),W=O.exports,L={name:"StoresView",data(){return{modalId:"storeModal",modalPos:{top:null,left:null}}},methods:{getButtonModalPosition(){const t=this.$refs.modalButton.$el;console.log("modalButton",t.getBoundingClientRect());const s=t.getBoundingClientRect();this.modalPos.left=s.left,this.modalPos.top=s.bottom}},components:{VBreadcrumbs:T,VButton:V,VStoreTable:U,VModal:W}},j=L,J=(0,d.Z)(j,h,y,!1,null,null,null),F=J.exports;o.ZP.use(C.ZP);const z=[{path:"/stores",name:"stores",component:F}],K=new C.ZP({routes:z});K.replace("/stores");var q=K;o.ZP.config.productionTip=!1,new o.ZP({router:q,render:t=>t(f)}).$mount("#app")},9574:function(t,s,a){t.exports=a.p+"img/logo.0d4ab02c.svg"},19:function(t,s,a){t.exports=a.p+"img/warning.ad7fbf90.svg"},8308:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAxCAYAAABK+/BHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA1iSURBVHgB1VlbkxxlGX66e/o0552dPeWckGxCCBQScoGABC2kKA+UoDdWWd574R1VeIlV/gW990outNAqLig0glimUBQpQBISAiTZze5mds7TM93T3Z/P+/VslCooyUxQ+apmdw7dX7+H533ew2coLnxOl4nP8fpMhBdnpkkib/BZrhxu0WpsbOC5Z5/FC88/j4vvXcQ4jlGuVnDXnXfi8SeexOlHH4NfyOOWLjXjSuJY/fynP1NfPH67Wi4V1LzvqcW8p+q+q+qeqxYLnjpQq6onHv6yOnvmjErTVN2qZcgfTLmajev4ydNP4w9nXkAwHCDhTgYUir6j3+dMU0NnNBpjnKSYK5fxne9+Hz94+kdw87N7YWrYBP0ennnqKbz6x9/h9oOLqBR9ROEI0ThFTMgMhvI+wXLJQb2cRxQrDEcJXvz1s1QQ+OEzP4ZpGJhlTS38C8/9CmdffhH3nzyKx7/xGEp5H3F7DWoUwrFNjKiElbNQn6+gVCpqjww6Tfz+T2/hF7/5JU5/9VHc/cADmGVNJTxxjpde/C3qtSIefeQh3HnqQVBOJM1lCt+DiscwLBOmmb0Mg//5nZuz8fCXfLx6fh3n3nz9fyN8OBqhsbmGE6v7sHr7HfDyRcTDNiwKqawcUmR4NywLxkQB2C5M5aOSy+PksYPoNzY1pRozQGcq4aMohOtaOLRvN4xRG2HnOhBHwDiCGocwRWi+JHwNy6bwOSrBjypBLk0wX/axEbQpfErhLUy7pkpSyXiMUsFHuVRC0GlpqysVQ9k+TL4EJqBgwjQqGWfvb1jYQKVS5IMNvc8sayrhO+0WavU5bTm3UAZZEDG5UaWxFlagYjlFgNa33DKVKpJtUnSoaBSNcfjoEYz6bfTbbcyypoJNn0KMghAFd558Xcb6xjbWzr1JpbaxTEisrh7B3L5D9EKRAm7h8sULuHTpCvIFj0xk4cTJe1Gg5y6/9Rrmlr6OaddNCz/uNrD1+hlYpkKhtoB+P8Da314mw0TIExqdxhauqiEMFaKy6wCi9jrGWx9iseph/0EqREpNY/6W52ezpb1lmNMx9k3DJh50cMBPcMeRfXA8Mkg8gMEgXO8kOPvuJtzFQzh/cRNrF99jcKaIen2sbUd45fwWPtjoAsM+a5wS9u9bQXlxBVkkT7duWmXT8YhnG/U0gJBiub6Cu05/Batr7+MRypGaLtzOPGr7j0kgoLb3CB5c3IvT9IrNksC0bSjTwf4DhwGvmgX3f0t4u7qEQbuHXQULxQMHYTI7Vep7UHZ8jIcdjHstHDh+FJXDJ4DeNbo2RkGENm0YVNyU68g0Zf4lfjDLumm1TSahxRP3wK2UadgYKQVIlWyUwvfysJlF/ZUDcFwf8IsZdU6yrOWXtedYN7BYoODGbBX5VHd7y4cQ9zsYUaiY0ED3ChiGSC2F1voVDHN9bF84h0Os5YXjc1QtDLZhhT24C3vBVAV35QiM8iJmWVMJX9h3B5ziPLa3LqN39R0k16+iVimh29zExvVtbDXepxdMuJ6CV6rQ0DYc38OotY4Kc1VcXERhZRWG7WGWNZXwlgTt8gHkyTLX33sdzVabWbaL9Q/XYRMSq7ftR7U2p69zCjW2hDHe+fsF7F7J0+oGu6yxht+sa6Ye1nYLum4ZhhFK8wvYtWsJr751BR8OWNus3o/Cqa/B3HUcQaCwu17C4v7DSJw8nNIC42D6mmZnzaS+U6ggtvPwyNs9VprFWhWPP3IPkh6rxbMvIdl/kEFqo7ZQgrVSxoiFWcx6x6vuAjBbIyJrJss7rocik1JEGtxs93F9OEZhcQFzty3AWV2CKrMcrniwnRyCUR+tThex4cCv78atWLONPph4dpPPcwzArc4QV7YHaAxZnLERYZnGEiFGzOYkaG+gH1A5XlPcczeDt4hbsWaOGpvZ1max1R6maK5vYqvVwbGlMvYsL8CbZ0LqD1hpJtho9UmTh9m43Lrxx0zCx6xdPrh4DlV7BNZdaBLPF65so7HdxbFeAO/KGpOYPMVFvlzHoidF2K0bRM0kfKMf491z/8BBc4xdcw7TfQnzLBucnGK/aqDKiYLLYHbZgHukzSq5X6X/B8IPIoUOobK4Zy9yW9dQLTgoOBZ6tTwsNSanL6FQrcP2K0hILJbIzLK50WwiV90N15md56faIWBXtNYeIwhj2AtHEW+9Qew78LwcimXyN7HieLS4W4LJGkdPE1gmKNY37avnyUL7sFAtIU8anaUBvym24SiGUInIKhEStn3y2MjMY7RyiswjTTerGMOmgUe605LWNWFbmDITK5OTGwoasWccsVG/2mjh/fUmmt1AT9OmWZ/K8vLArU5EmCRsS82sipQqkQKlykRQPQ5zTxvGtddYVZqMT5YBtP6II0CLlGkJRFjEDQZ9jMuHWMJlio9ZNvQGQ75GKDE+8q6jB1afdpL2ycJTwCFN3Qwi0mCsJwG27eghQMyu36IwOSriU7AR8d9fvg9FYferf4bvl/T4I2FGNQ0pf03dmLzxzgc48q1v68+2GIEKykvCoUmKbfEej82Kzw6t4Nn/MS4+9tcuhRWBh1EqJqY1bIQh2z12QDKWTQmZ1ijAfDGvMSseiCjceM8DsAWI199mJelL8Y9hEMDyPLQa21i495tI6TGPQsplUt8I3eboLZljutwrpGGGYYhe36IRyFB8hmN/PLo/8m1vFOPS9SE2+inE2IaVZgcFE3pLmGz0uIMDpxGLMcUaUQS3KYxYUhRrVE/h4vKTCBbvoWAKr7z0Mv66wWC+73u4FlcpeI6TNbIPBZVBmswwtQH4vYxPEpmicc+A+3fZ3G802tjc7rESTT/Z8tuDMTZ7sRZGkeqS1NCcbBgRN3Z0TR5yCmw7rsZUkUyx3uyhXmLtwlGexeuHwwhvn7uCXjfCG6aPL+w5iV5hDcdPPgTXGrHxy+Mv5zZR4QhkeaGAEqHhkaUE4QKRAWsj8YIoFXEe6jI3iCc40cdWM8XKQvkj8aDn841BjA0+0MxmcrRwpLv6AanQMRRydFuOpW8YDrm5PRnRKRZbY7R7obiEyhkaTmGYYNAf0vViTQN7VwqYn69qC3cYnGXf0uNu1+bv3MWnF8UTYvFWl7VP0dPft5mhK5zIjUZZMCfjGAtzRT37v2F5wfdaM0A7GDErWvpQwOF/U0XajSHdlWeWMfnQHOERRhH53NMQ8ajU0pyn5/ESeNKrJmSmes1HuxXx2pRznRjFQkjlcpjzTRmigXqSWTJWidMJ98i93FQMKNSaE1lSbSP+ZGl6HdCzLusoO5f1AiaNTuQqZkgP/WFIV4zRaAVo9sgoxHeTcEpIaUMeFihaXPAv2Nc3E+dSqzgURNxu05qumxVqJR4qLLNA83wX/Z4MoRIykwhEb+ZEgazyFOmE/y3tdUPTsMDEJUlIeyyJbchYtCYx1SX77ZzlmO1+qIeeIae75YJNzo2ISXI3tQyIwTBMaX2OtTljlCAVy8m88aMnfWpiUVPP6R3itli0+Z3CYr1AT8U6fiT4bVpYPCuBL5IaAqjJUNazOQmiF6U7S1WGbZMGE+HzE7hIw5+kWfCa0eSDiJJwszkGYKM1wHzFxjXCiTJgoxlrTu9RUYO8rflZH1WKrbJzJ203glcYwDZFSEMr4TsKKzUOOtJIw8qmRbWFdcQZO7prSvbotYhQdahEEKV6XCIxZpoZrIQcZWAr8NHCD1ksaReKpuIyClavFtBqB9hbz6Pd7WuYCJ0JFkchGYH7SBOd6vk69G8aApPPxAhhkOrrwthCkNQJMZcPNrKxt7yQWT2rbQxhDp2doVOYqfEuv8nxkPC8OFp0FMrU515U0hRNemQR4d00yTKeFFZChV1itVp0meaHPMqBnvC2OnJ4YOjNJBYgNlQ71IXJwyf/zUlsQOIhpycHgufM6VLr6H+ZwjowTU0KqaGyoyBaPKSxCn7mrYhyScAKTsaxZG++aXb6bNNGetN4nAUkUQIJKUnuXi5hwoh0SdDsDjKLmakO3vTfjma0PbWJsu9y4m79qMzKsuMk1m9InFnf1IrIN5LsjDQ7MZGttNVFWN4YRVJbWdnxKAPRFA0KZITLVzewca2pMRfzCDLR39t8NLHIVk84ehTxiJJKZhXlxJUqU2DH8uZETGsCU0G3aagbyUWYTaUTeCGTeHK3Vkhyg8SeTT7tDngGkLc0/Y5ZP+W1PJmXJFa18Clfu5cWdMF16dIGCzLh34xQinkyB2sMOUAIgjEcx0CfycnQ8E11rJi62Z6k+knFqK2fZUHCABMhDQ2LeMI8O3jXDlLZvZaeayoNTSYbyqJocQa/myVGU4TifWPBPI3MOl1ps9VqJexaKqLJbicIlXa4WNVxDbJPET1SZ4le6jETanikmQISXJqvdtjDzIJtBzQClXQSqCL8BFn/ipMd0BsZhOSTI/mDAdwPpGQwdJ7QhMJrEpl9iuVzrEtCuqRHF9nMgpK9ahW2cpzihqEEsakD2WaCaTQ78Bl4URRPkot0G2kmwY5EIozURRMkpJP4MSYCCiFIIEq8qCxss2A1Msa5UajxNSC/e66lJ8pSXutOko+TsiTPTPdP4LEgfPHlg2kAAAAASUVORK5CYII="}},s={};function a(o){var e=s[o];if(void 0!==e)return e.exports;var l=s[o]={exports:{}};return t[o].call(l.exports,l,l.exports,a),l.exports}a.m=t,function(){var t=[];a.O=function(s,o,e,l){if(!o){var n=1/0;for(d=0;d<t.length;d++){o=t[d][0],e=t[d][1],l=t[d][2];for(var i=!0,r=0;r<o.length;r++)(!1&l||n>=l)&&Object.keys(a.O).every((function(t){return a.O[t](o[r])}))?o.splice(r--,1):(i=!1,l<n&&(n=l));if(i){t.splice(d--,1);var c=e();void 0!==c&&(s=c)}}return s}l=l||0;for(var d=t.length;d>0&&t[d-1][2]>l;d--)t[d]=t[d-1];t[d]=[o,e,l]}}(),function(){a.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(s,{a:s}),s}}(),function(){a.d=function(t,s){for(var o in s)a.o(s,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:s[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/work5-test/dist/"}(),function(){var t={143:0};a.O.j=function(s){return 0===t[s]};var s=function(s,o){var e,l,n=o[0],i=o[1],r=o[2],c=0;if(n.some((function(s){return 0!==t[s]}))){for(e in i)a.o(i,e)&&(a.m[e]=i[e]);if(r)var d=r(a)}for(s&&s(o);c<n.length;c++)l=n[c],a.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return a.O(d)},o=self["webpackChunkwork5_test"]=self["webpackChunkwork5_test"]||[];o.forEach(s.bind(null,0)),o.push=s.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(1750)}));o=a.O(o)})();
//# sourceMappingURL=app.7ee54d13.js.map