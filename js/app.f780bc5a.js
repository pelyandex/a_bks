(function(e){function t(t){for(var n,l,c=t[0],o=t[1],u=t[2],_=0,d=[];_<c.length;_++)l=c[_],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);s&&s(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},i=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=o;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0c39":function(e,t,a){},"0ed6":function(e,t,a){"use strict";var n=a("bcba"),r=a.n(n);r.a},"311a":function(e,t,a){"use strict";var n=a("cb3e"),r=a.n(n);r.a},"48e0":function(e,t,a){"use strict";var n=a("0c39"),r=a.n(n);r.a},5063:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],l=(a("5c0b"),a("2877")),c={},o=Object(l["a"])(c,r,i,!1,null,null,null),u=o.exports,s=a("5c96"),_=a.n(s),d=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("Header"),a("h1",[e._v("Продуктовая витрина с фильтрацией уровня риска")]),a("Selects",{on:{change:e.filterProducts}}),a("Cards",{attrs:{filtered:e.filtered,pageCount:e.pageCount}}),a("Pagination",{attrs:{filtered:e.filtered},on:{clicked:e.pageSwap}})],1)},f=[],m=(a("4de4"),a("caad"),a("2532"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cards"},e._l(e.swichCards,(function(t,n){return a("div",{key:n+t,staticClass:"card"},[a("h3",[e._v(e._s(t.name))]),"0.0000"===t.risk_ratio?a("p",[e._v("100% защита")]):e._e(),e._m(0,!0),a("div",{staticClass:"card_subscr"},[a("div",[e._v("Потенциальный доход")]),t.expected_income.first?a("div",[e._v(e._s(e._f("getIncome")(t.expected_income.first))+"% годовых")]):a("div",[e._v("Не ограничен")]),a("div",[e._v("Защита капитала")]),a("div",[e._v(e._s(e._f("getRiskRatio")(t.risk_ratio))+" %")]),a("div",[e._v("Минимальная сумма")]),a("div",[e._v(e._s(e._f("getMinSum")(t.min_sum))+" ₽")]),a("div",[e._v("Срок инвестиций")]),a("div",[e._v(e._s(e._f("getMounth")(e._f("getSeconds")(t))))])])])})),0)}),b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{attrs:{src:a("cfce"),alt:"Продукт"}})])}],v=(a("fb6a"),a("a9e3"),{props:["filtered","pageCount"],computed:{swichCards:function(){return this.filtered.slice(this.pageCount-5,this.pageCount+1)}},filters:{getRiskRatio:function(e){return 100*Number(e)},getIncome:function(e){return Math.ceil(e)},getMinSum:function(e){return Number(e).toLocaleString("ru-RU")},getSeconds:function(e){return Math.ceil((new Date(e.contract.execution_date).getTime()-new Date(e.period.start_date).getTime())/2629743830)},getMounth:function(e){return"".concat(e,e>4?" месяцев":" месяца")}}}),g=v,C=(a("311a"),Object(l["a"])(g,m,b,!1,null,"7305a9cf",null)),k=C.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"select",attrs:{id:"element"}},[a("el-select",{attrs:{placeholder:"Все",size:"small"},on:{change:e.filter},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("el-button",{attrs:{size:"small"},on:{click:e.reset}},[e._v("Сбросить")])],1)},h=[],B={data:function(){return{options:[{value:"0.0000",label:"Безрисковые"},{value:"0.5000",label:"Умеренный риск"},{value:"1.0000",label:"Рисковые"}],value:""}},methods:{reset:function(){this.value="",this.$emit("change",this.value)},filter:function(e){this.$emit("change",e)}},mounted:function(){this.reset()}},A=B,E=(a("e879"),Object(l["a"])(A,y,h,!1,null,"cfb37d72",null)),D=E.exports,S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},F=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("img",{attrs:{src:a("e347"),alt:"БКС логотип"}}),n("span",[n("a",{attrs:{href:"tel:+78005004040"}},[e._v("8 800 500-40-40")]),e._v(" — звонок по России бесплатный")])])}],x=(a("0ed6"),{}),I=Object(l["a"])(x,S,F,!1,null,"4490930e",null),U=I.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-pagination",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#element",expression:"'#element'"}],attrs:{"page-size":6,layout:"prev, pager, next",total:e.filtered.length},on:{"current-change":e.clicked}})},w=[],R={props:["filtered"],methods:{clicked:function(e){this.$emit("clicked",e)},startClicked:function(){this.clicked(1)}},mounted:function(){this.startClicked()}},T=R,L=(a("48e0"),Object(l["a"])(T,N,w,!1,null,"4bda2d0b",null)),O=L.exports,M={name:"home",data:function(){return{pageCount:null}},components:{Selects:D,Header:U,Cards:k,Pagination:O},computed:{filtered:function(){return this.$store.getters.getFilteredItems}},methods:{filterProducts:function(e){var t=this.$store.getters.returnState.filter((function(t){return t.risk_ratio.includes(e)}));this.$store.dispatch("changeFilter",t),this.pageCount>5&&t.length<5&&this.pageSwap(1)},pageSwap:function(e){this.pageCount=6*e-1}},created:function(){this.$store.dispatch("getProducts")}},P=M,$=(a("baed"),Object(l["a"])(P,p,f,!1,null,"1726b7be",null)),j=$.exports;n["default"].use(d["a"]);var V=[{path:"/",name:"home",component:j}],Y=new d["a"]({routes:V}),q=Y,z=a("2f62"),Q=a("91a6"),W={state:{allProducts:[]},mutations:{load:function(e){e.allProducts=Q}},actions:{getProducts:function(e){e.commit("load")}},getters:{returnState:function(e){return e.allProducts}}},X={actions:{changeFilter:function(e,t){e.commit("filtering",t)}},mutations:{filtering:function(e,t){e.filteredItems=t}},state:{filteredItems:[]},getters:{getFilteredItems:function(e){return e.filteredItems}}};n["default"].use(z["a"]);var J=new z["a"].Store({modules:{getProducts:W,filteredProducts:X}}),Z=(a("0fae"),a("f13c"));n["default"].use(Z),n["default"].use(_.a),n["default"].config.productionTip=!1,new n["default"]({router:q,store:J,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"7e41":function(e,t,a){},"91a6":function(e){e.exports=JSON.parse('[{"_id":"1","code":"0BD33845-DC77-45E5-B7D9-0C3CB5DEB5D3","name":"Газпром с гарантированным доходом","min_sum":"300000.00","currency":"RUB","type_name":"Пороговый","participation_rate":null,"direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"10.000000","barrier":"1.0000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"0.0000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":"14.00","second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"356D00A0-41B0-4D66-93F0-673455A4D0AF","price_execution":null,"name":{"full":"ПАО \\"Газпром\\"","short":"Газпром","code":"GAZP"},"base_asset_currency":"российский рубль","issuer_name":"ПАО \\"Газпром\\", ","kind":"1 (одна) обыкновенная акция ","isin":"ISIN RU0007661625","state_reg_number":null,"type_account_depo":"TS1","stock_exchange_name":"ПАО Московская Биржа","transcript":"1 (одна) обыкновенная акция ПАО \\"Газпром\\", ISIN RU0007661625 - ценная бумага ПАО \\"Газпром\\", которой присвоены коды ISIN RU0007661625 и CFI ESVXFR, номер государственной регистрации выпуска 1-02-00028-A, квалифицированная как акция, обращающаяся на бирже ПАО Московская Биржа.","weight_koeff":null,"type":"Российские акции"}},"props":null,"updated_at":"2019-12-10 16:19:44","created_at":"2019-12-10 16:19:44"},{"_id":"5def9b8e7ebecb44566292d2","code":"C2636CF3-66A7-47B8-923D-FCBF972B60E9","name":"Растущий доллар с гарантированным доходом","min_sum":"50000.00","currency":"RUB","type_name":"Пороговый","participation_rate":null,"direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"10.000000","barrier":"1.1000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"0.0000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":"22.00","second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"B3FC165E-6699-4051-9B9E-3449BE904A06","price_execution":null,"name":{"full":"курс USD","short":"USD/RUB","code":"USD"},"base_asset_currency":"российский рубль","issuer_name":"по отношению к рублю РФ","kind":"Курс доллара США ","isin":".","state_reg_number":null,"type_account_depo":null,"stock_exchange_name":"-","transcript":"Официальный курс доллара США к российскому рублю, установленный ЦБ РФ","weight_koeff":null,"type":"Валюта"}},"props":{"_id":"5dc918667ebecb4f8165ae22","offer_name":"Растущий доллар с гарантированным доходом","color":"#37a7af","disclaimer":"","slug":"rub","subtitle":"","preview_picture":"","detail_picture":"/storage/media/86447b450320d1461521afccc1bedc2b.svg","updated_at":"2019-11-11 11:14:30","created_at":"2019-11-11 11:14:30"},"updated_at":"2019-12-10 16:20:14","created_at":"2019-12-10 16:20:14"},{"_id":"5def9ba27ebecb79562c6d02","code":"E21D2DAE-42B3-42EC-84F6-3A84C0B90420","name":"Растущая нефть с гарантированным доходом","min_sum":"10000.00","currency":"RUB","type_name":"Пороговый","participation_rate":null,"direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"8.000000","barrier":"1.0800","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"0.0000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-06-13"},"expected_income":{"first":"13.00","second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"40E12D8A-2DC1-4BCD-A5AE-46714BD08E2F","price_execution":null,"name":{"full":"Один баррель сырой нефти сорта «Brent»","short":"нефть марки Brent","code":"Brent"},"base_asset_currency":"доллар США","issuer_name":"Один баррель сырой нефти сорта «Brent» ","kind":null,"isin":null,"state_reg_number":null,"type_account_depo":null,"stock_exchange_name":"-","transcript":"Нефть - один баррель сырой нефти сорта «Brent».","weight_koeff":null,"type":"Товары"}},"props":{"_id":"5dc9189e7ebecb4f7d30abc4","offer_name":"Растущая нефть с гарантированным доходом","color":"#36015f","disclaimer":"","slug":"oil","subtitle":"","preview_picture":"","detail_picture":"/storage/media/8217c0ccab3e453970d7f6894562d1b2.svg","updated_at":"2019-11-11 11:15:26","created_at":"2019-11-11 11:15:26"},"updated_at":"2019-12-10 16:20:34","created_at":"2019-12-10 16:20:34"},{"_id":"5def9bac7ebecb0a94200ec2","code":"654E3B7A-CE65-4EA6-A5D0-021A1DE93443","name":"Яндекс – инвестиции в лидера IT","min_sum":"10000.00","currency":"RUB","type_name":"Участие EB","participation_rate":null,"direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"0.000000","barrier":"1.0000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"0.5000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":null,"second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"E011777E-C428-4173-81A4-16198BCE4C29","price_execution":null,"name":{"full":"Yandex N.V.","short":"Яндекс","code":"YNDX"},"base_asset_currency":"российский рубль","issuer_name":"PLLC Yandex N.V., ","kind":"1 (одна) обыкновенная акция класса А ","isin":"ISIN NL0009805522","state_reg_number":null,"type_account_depo":"TS1","stock_exchange_name":"ПАО Московская Биржа","transcript":"1 (одна) обыкновенная акция класса А PLLC Yandex N.V., ISIN NL0009805522 - ценная бумага YANDEX N V, которой присвоены коды ISIN NL0009805522 и CFI ESVUFN, квалифицированная как акция (согласно Указанию Банка России от 03.10.2017 № 4561-У «О порядке квалификации иностранных финансовых инструментов в качестве ценных бумаг»), обращающаяся на бирже ПАО Московская Биржа.","weight_koeff":"1.0000","type":"Иностранные акции"}},"props":{"_id":"5db1d9267ebecb565d529383","offer_name":"Яндекс – инвестиции в лидера IT","color":"#c90b08","disclaimer":"","slug":"yandex","subtitle":"","preview_picture":"","detail_picture":"/storage/media/285d6ada0bda670f55048d16cf55a97c.svg","updated_at":"2019-10-24 20:08:15","created_at":"2019-10-24 20:02:30"},"updated_at":"2019-12-10 16:20:44","created_at":"2019-12-10 16:20:44"},{"_id":"5def9bc17ebecb0a9e1cbd93","code":"2A9CD08E-B7C1-4613-84D4-CCD06D5AE7A8","name":"Сбербанк – инвестиции в прибыльный банк","min_sum":"10000.00","currency":"RUB","type_name":"Участие EB","participation_rate":"1.25","direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"0.000000","barrier":"1.0000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"0.5000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":null,"second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"6EA0B21B-B75F-4114-A1EE-C5678BC2C8AC","price_execution":null,"name":{"full":"ПАО Сбербанк","short":"Сбербанк","code":"SBER"},"base_asset_currency":"российский рубль","issuer_name":"ПАО Сбербанк, ","kind":"1 (одна) обыкновенная акция ","isin":"ISIN RU0009029540","state_reg_number":null,"type_account_depo":"TS1","stock_exchange_name":"ПАО Московская Биржа","transcript":"1 (одна) обыкновенная акция ПАО \\"Сбербанк России\\", ISIN RU0009029540 - ценная бумага ПАО Сбербанк , которой присвоены коды ISIN RU0009029540 и CFI ESVXFR, номер государственной регистрации выпуска 10301481B, квалифицированная как акция, обращающаяся на бирже ПАО Московская Биржа.","weight_koeff":"1.0000","type":"Российские акции"}},"props":{"_id":"5db1d8bb7ebecb4aa25307c2","offer_name":"Сбербанк – инвестиции в прибыльный банк","color":"#4f9c1d","disclaimer":"","slug":"sber","subtitle":"","preview_picture":"","detail_picture":"/storage/media/7be813b404b5032d7d1a56b743928199.svg","updated_at":"2019-10-24 20:07:36","created_at":"2019-10-24 20:00:43"},"updated_at":"2019-12-10 16:21:05","created_at":"2019-12-10 16:21:05"},{"_id":"5def9bd57ebecb79475cfb03","code":"E0E3E71B-E996-4A1B-A3C9-F1A3E947CC94","name":"Albemarle – инвестиции в производителя лития","min_sum":"10000.00","currency":"RUB","type_name":"Участие EB","participation_rate":"1.25","direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"0.000000","barrier":"1.0000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"0.5000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":null,"second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"E593EC44-B032-4F3D-B082-60B4871C2A0B","price_execution":null,"name":{"full":"Albemarle Corp","short":"Albemarle","code":"ALB"},"base_asset_currency":"доллар США","issuer_name":"Albemarle Corp., ","kind":"1 (одна) обыкновенная акция ","isin":"ISIN US0126531013","state_reg_number":null,"type_account_depo":"TS3","stock_exchange_name":"New York Stock Exchange LLC","transcript":"1 (одна) обыкновенная акция Albemarle Corp., ISIN US0126531013 - ценная бумага ALBEMARLE CORP, которой присвоены коды ISIN US0126531013 и CFI ESVUFR, квалифицированная как акция (согласно Указанию Банка России от 03.10.2017 № 4561-У «О порядке квалификации иностранных финансовых инструментов в качестве ценных бумаг»), обращающаяся на бирже New York Stock Exchange LLC (Нью Йорк Сток Эксчендж ЭлЭлСи).","weight_koeff":"1.0000","type":"Иностранные акции"}},"props":{"_id":"5db1d89d7ebecb56523b5593","offer_name":"Albemarle – инвестиции в производителя лития","color":"#70c6a8","disclaimer":"","slug":"albemarle","subtitle":"","preview_picture":"","detail_picture":"/storage/media/a4bae7d86e3588c65379e307871c0fda.svg","updated_at":"2019-10-24 20:07:21","created_at":"2019-10-24 20:00:13"},"updated_at":"2019-12-10 16:21:25","created_at":"2019-12-10 16:21:25"},{"_id":"5def9be97ebecb0a9d36c662","code":"EFEA72C9-11DE-46A2-9DC7-3BAE13779845","name":"McDonald\'s – инвестиции в короля фастфуда","min_sum":"10000.00","currency":"RUB","type_name":"Участие EB","participation_rate":"1.25","direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"0.000000","barrier":"1.0000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"0.5000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":null,"second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"29959EC2-CB56-41B9-9C6F-EC70BACF7CC6","price_execution":null,"name":{"full":"McDonald\'s Corporation","short":"McDonald\'s","code":"MCD"},"base_asset_currency":"доллар США","issuer_name":"McDonald\'s Corporation, ","kind":"1 (одна) обыкновенная акция ","isin":"ISIN US5801351017","state_reg_number":null,"type_account_depo":"TS3","stock_exchange_name":"New York Stock Exchange LLC","transcript":"1 (одна) обыкновенная акция McDonald\'s Corporation,  ISIN US5801351017 – ценная бумага MCDONALDS CORP, которой присвоены коды US5801351017 и CFI ESVUFR, квалифицированная как акция (согласно Указанию Банка России от 03.10.2017 № 4561-У «О порядке квалификации иностранных финансовых инструментов в качестве ценных бумаг»), обращающаяся на бирже New York Stock Exchange LLC (Нью Йорк Сток Эксчендж ЭлЭлСи).","weight_koeff":"1.0000","type":"Иностранные акции"}},"props":{"_id":"5db1d82e7ebecb4f403ec7a5","offer_name":"McDonald\'s – инвестиции в короля фастфуда","color":"#edbc09","disclaimer":"","slug":"mcdonalds","subtitle":"","preview_picture":"","detail_picture":"/storage/media/984982029c99f5ae15ebcf6ee2fcbed4.svg","updated_at":"2019-10-24 20:06:42","created_at":"2019-10-24 19:58:22"},"updated_at":"2019-12-10 16:21:45","created_at":"2019-12-10 16:21:45"},{"_id":"5def9bfd7ebecb79455f6712","code":"D8F68875-C955-41A0-9B44-1CAD6C17A762","name":"Facebook – инвестиции в глобальную соцсеть","min_sum":"10000.00","currency":"RUB","type_name":"Участие EB","participation_rate":"1.25","direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"0.000000","barrier":"1.0000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"1.0000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":null,"second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"C4B6FB29-7C00-4885-9A76-6FAC130F29B5","price_execution":null,"name":{"full":"Facebook Inc.","short":"Facebook","code":"FB"},"base_asset_currency":"доллар США","issuer_name":"Facebook Inc. ","kind":"1 (одна) акция класса A","isin":"ISIN US30303M1027","state_reg_number":null,"type_account_depo":"TS3","stock_exchange_name":"NASDAQ","transcript":"1 (одна) акция класса A Facebook Inc. (ISIN US30303M1027) – ценная бумага FACEBOOK INC, которой присвоены коды ISIN US30303M1027 и CFI ESVUFR, квалифицированная как акция (согласно Указанию Банка России от 03.10.2017 № 4561-У «О порядке квалификации иностранных финансовых инструментов в качестве ценных бумаг»), обращающаяся на бирже NASDAQ (Насдак).","weight_koeff":"1.0000","type":"Иностранные акции"}},"props":{"_id":"5db1d8097ebecb4f4f6234b3","offer_name":"Facebook – инвестиции в глобальную соцсеть","color":"#3b65b6","disclaimer":"","slug":"fb","subtitle":"","preview_picture":"","detail_picture":"/storage/media/2b35b9ee4fa9f75cd9e32e3b5f6006cc.svg","updated_at":"2019-10-24 20:06:26","created_at":"2019-10-24 19:57:45"},"updated_at":"2019-12-10 16:22:05","created_at":"2019-12-10 16:22:05"},{"_id":"5def9c1b7ebecb0a930d3ab2","code":"B25BCF16-3B13-4993-99A7-76570BB59A43","name":"Amazon – инвестиции в мирового ритейлера","min_sum":"10000.00","currency":"RUB","type_name":"Участие EB","participation_rate":"1.25","direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"0.000000","barrier":"1.0000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"1.0000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":null,"second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-13T18:00:00"},"base_assets_list":{"base_asset":{"id":"2214234F-2053-4C6D-A9F1-DE0E0D257FD5","price_execution":null,"name":{"full":"Amazon.com","short":"Amazon","code":"AMZN"},"base_asset_currency":"доллар США","issuer_name":"Amazon.com Inc., ","kind":"1 (одна) обыкновенная акция","isin":"ISIN US0231351067","state_reg_number":null,"type_account_depo":"TS3","stock_exchange_name":"NASDAQ","transcript":"1 (одна) обыкновенная акция Amazon.com Inc., ISIN US0231351067 – ценная бумага AMAZON COM INC, которой присвоены коды ISIN US0231351067 и CFI ESVUFR, квалифицированная как акция (согласно Указанию Банка России от 03.10.2017 № 4561-У «О порядке квалификации иностранных финансовых инструментов в качестве ценных бумаг»), обращающаяся на бирже NASDAQ (Насдак).","weight_koeff":"1.0000","type":"Иностранные акции"}},"props":{"_id":"5db1d7e57ebecb4f57643a02","offer_name":"Amazon – инвестиции в мирового ритейлера","color":"#c4871e","disclaimer":"","slug":"amazon","subtitle":"","preview_picture":"","detail_picture":"/storage/media/1896b6436dc53f35e6ccf8b3822fbaab.svg","updated_at":"2019-10-24 20:06:06","created_at":"2019-10-24 19:57:09"},"updated_at":"2019-12-10 16:22:35","created_at":"2019-12-10 16:22:35"},{"_id":"5def9c4e7ebecb0a9530ab62","code":"FA8677F4-1D63-407A-8044-40C53E6EA75F","name":"Disney – инвестиции в гиганта развлечений","min_sum":"10000.00","currency":"RUB","type_name":"Участие EB","participation_rate":null,"direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"0.000000","barrier":"1.0000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"1.0000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":null,"second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"FE732F93-FEF5-450E-815B-EC2F4B9D386B","price_execution":null,"name":{"full":"The Walt Disney Company","short":"Disney","code":"DIS"},"base_asset_currency":"доллар США","issuer_name":"The Walt Disney Company, ","kind":"1 (одна) обыкновенная акция ","isin":"ISIN US2546871060","state_reg_number":null,"type_account_depo":"TS3","stock_exchange_name":"New York Stock Exchange LLC","transcript":"1 (одна) обыкновенная акция The Walt Disney Company, ISIN US2546871060 – ценная бумага DISNEY WALT CO, которой присвоены коды ISIN US2546871060 и CFI ESVUFR, квалифицированная как акция (согласно Указанию Банка России от 03.10.2017 № 4561-У «О порядке квалификации иностранных финансовых инструментов в качестве ценных бумаг»), обращающаяся на бирже New York Stock Exchange LLC (Нью Йорк Сток Эксчендж ЭлЭлСи).","weight_koeff":"1.0000","type":"Иностранные акции"}},"props":{"_id":"5db1d7c27ebecb56677747b3","offer_name":"Disney – инвестиции в гиганта развлечений","color":"#593ddf","disclaimer":"","slug":"disney","subtitle":"","preview_picture":"","detail_picture":"/storage/media/62e02e8f6996d501e0a382033db933b6.svg","updated_at":"2019-10-24 20:05:45","created_at":"2019-10-24 19:56:34"},"updated_at":"2019-12-10 16:23:26","created_at":"2019-12-10 16:23:26"},{"_id":"5def9c627ebecb445d6cdb92","code":"6B4FDDFB-E108-4CC7-9908-E8E88E721734","name":"Золото – инвестиции в драгметаллы","min_sum":"10000.00","currency":"RUB","type_name":"Участие EB","participation_rate":null,"direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"0.000000","barrier":"1.0000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"1.0000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":null,"second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"646C5CCF-69AE-4C4B-A5AC-E7288455F29E","price_execution":null,"name":{"full":"Золото","short":"Золото","code":"GOLD"},"base_asset_currency":"доллар США","issuer_name":"Золото","kind":null,"isin":".","state_reg_number":null,"type_account_depo":null,"stock_exchange_name":"-","transcript":"Золото - одна тройская унция аффинированного золота в слитках на лондонском рынке наличного металла «The London Bullion Market Association».","weight_koeff":"1.0000","type":"Товары"}},"props":{"_id":"5db1d79a7ebecb4f4b67bd04","offer_name":"Золото – инвестиции в драгметаллы","color":"#e4940f","disclaimer":"","slug":"au","subtitle":"","preview_picture":"","detail_picture":"/storage/media/9875b2e467a77c2f4ab393c65eb126c9.svg","updated_at":"2019-10-24 20:05:25","created_at":"2019-10-24 19:55:54"},"updated_at":"2019-12-10 16:23:46","created_at":"2019-12-10 16:23:46"}]')},"9c0c":function(e,t,a){},baed:function(e,t,a){"use strict";var n=a("7e41"),r=a.n(n);r.a},bcba:function(e,t,a){},cb3e:function(e,t,a){},cfce:function(e,t,a){e.exports=a.p+"img/product-default.a9550e40.svg"},e347:function(e,t,a){e.exports=a.p+"img/logo.e705bb68.svg"},e879:function(e,t,a){"use strict";var n=a("5063"),r=a.n(n);r.a}});
//# sourceMappingURL=app.f780bc5a.js.map