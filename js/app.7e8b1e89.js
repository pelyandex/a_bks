(function(e){function t(t){for(var a,l,c=t[0],o=t[1],u=t[2],_=0,d=[];_<c.length;_++)l=c[_],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);s&&s(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},i=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00ad":function(e,t,n){"use strict";var a=n("80ee"),r=n.n(a);r.a},"14b1":function(e,t,n){},3105:function(e,t,n){"use strict";var a=n("14b1"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],l=(n("5c0b"),n("2877")),c={},o=Object(l["a"])(c,r,i,!1,null,null,null),u=o.exports,s=n("5c96"),_=n.n(s),d=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Header"),n("h1",[e._v("Продуктовая витрина с фильтрацией уровня риска")]),n("Selects",{on:{change:e.change}}),n("Cards",{attrs:{currentSelect:e.currentSelect,filteredItems:e.filteredItems},on:{length:e.lengthChange}}),n("Pagination",{attrs:{length:e.length},on:{click:e.currentFilter}})],1)},f=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cards"},e._l(e.swichCards,(function(t,a){return n("div",{key:a+t,staticClass:"card"},[n("h3",[e._v(e._s(t.name))]),"0.0000"===t.risk_ratio?n("p",[e._v("100% защита")]):e._e(),e._m(0,!0),n("div",{staticClass:"card_subscr"},[n("div",[e._v("Потенциальный доход")]),t.expected_income.first?n("div",[e._v(e._s(e._f("getIncome")(t.expected_income.first))+"% годовых")]):n("div",[e._v("Не ограничен")]),n("div",[e._v("Защита капитала")]),n("div",[e._v(e._s(e._f("getRiskRatio")(t.risk_ratio))+" %")]),n("div",[e._v("Минимальная сумма")]),n("div",[e._v(e._s(e._f("getMinSum")(t.min_sum))+" ₽")]),n("div",[e._v("Срок инвестиций")]),n("div",[e._v(e._s(e._f("getMounth")(e._f("getSeconds")(t))))])])])})),0)},b=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("img",{attrs:{src:n("cfce"),alt:"Продукт"}})])}],v=(n("4de4"),n("caad"),n("fb6a"),n("a9e3"),n("2532"),{props:["currentSelect","filteredItems"],computed:{getCards:function(){var e=this;return this.$store.getters.returnState.filter((function(t){return t.risk_ratio.includes(e.currentSelect)}))},swichCards:function(){return this.getCards.slice(this.filteredItems-6,this.filteredItems)}},filters:{getRiskRatio:function(e){return 100*Number(e)},getIncome:function(e){return Math.ceil(e)},getMinSum:function(e){return Number(e).toLocaleString("ru-RU")},getSeconds:function(e){return Math.ceil((new Date(e.contract.execution_date).getTime()-new Date(e.period.start_date).getTime())/2629743830)},getMounth:function(e){return"".concat(e,e>4?" месяцев":" месяца")}},beforeUpdate:function(){this.$emit("length",this.getCards.length)}}),g=v,h=(n("3105"),Object(l["a"])(g,m,b,!1,null,"870b47f4",null)),C=h.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select"},[n("el-select",{attrs:{placeholder:"Все",size:"small"},on:{change:e.filter},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),n("el-button",{attrs:{size:"small"},on:{click:e.reset}},[e._v("Сбросить")])],1)},y=[],B={data:function(){return{options:[{value:"0.0000",label:"Безрисковые"},{value:"0.5000",label:"Умеренный риск"},{value:"1.0000",label:"Рисковые"}],value:""}},methods:{reset:function(){this.value="",this.$emit("change",this.value)},filter:function(e){this.$emit("change",e)}},mounted:function(){this.reset()}},A=B,E=(n("659f"),Object(l["a"])(A,k,y,!1,null,"2e353720",null)),D=E.exports,S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},F=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("img",{attrs:{src:n("e347"),alt:"БКС логотип"}}),a("span",[a("a",{attrs:{href:"tel:+78005004040"}},[e._v("8 800 500-40-40")]),e._v(" — звонок по России бесплатный")])])}],x=(n("00ad"),{}),I=Object(l["a"])(x,S,F,!1,null,"11f645e0",null),U=I.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-pagination",{attrs:{"page-size":6,layout:"prev, pager, next",total:e.length},on:{"current-change":e.click}})},w=[],R={props:["length"],methods:{click:function(e){this.$emit("click",6*e)}},mounted:function(){this.$emit("click",6)}},T=R,L=(n("871f"),Object(l["a"])(T,N,w,!1,null,"5cf54456",null)),O=L.exports,M={name:"home",data:function(){return{currentSelect:null,length:null,filteredItems:null}},components:{Selects:D,Header:U,Cards:C,Pagination:O},methods:{change:function(e){this.currentSelect=e},lengthChange:function(e){this.length=e},currentFilter:function(e){this.filteredItems=e}},mounted:function(){this.$store.dispatch("getProducts")}},P=M,$=(n("fb29"),Object(l["a"])(P,p,f,!1,null,"b49ba016",null)),j=$.exports;a["default"].use(d["a"]);var V=[{path:"/",name:"home",component:j}],Y=new d["a"]({mode:"history",routes:V}),q=Y,z=n("2f62"),Q=n("91a6");a["default"].use(z["a"]);var W=new z["a"].Store({state:{allProducts:[]},mutations:{load:function(e){e.allProducts=Q}},actions:{getProducts:function(e){e.commit("load")}},getters:{returnState:function(e){return e.allProducts}}});n("0fae");a["default"].use(_.a),a["default"].config.productionTip=!1,new a["default"]({router:q,store:W,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"659f":function(e,t,n){"use strict";var a=n("c800"),r=n.n(a);r.a},"734b":function(e,t,n){},"80ee":function(e,t,n){},"871f":function(e,t,n){"use strict";var a=n("734b"),r=n.n(a);r.a},"91a6":function(e){e.exports=JSON.parse('[{"_id":"1","code":"0BD33845-DC77-45E5-B7D9-0C3CB5DEB5D3","name":"Газпром с гарантированным доходом","min_sum":"300000.00","currency":"RUB","type_name":"Пороговый","participation_rate":null,"direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"10.000000","barrier":"1.0000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"0.0000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":"14.00","second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"356D00A0-41B0-4D66-93F0-673455A4D0AF","price_execution":null,"name":{"full":"ПАО \\"Газпром\\"","short":"Газпром","code":"GAZP"},"base_asset_currency":"российский рубль","issuer_name":"ПАО \\"Газпром\\", ","kind":"1 (одна) обыкновенная акция ","isin":"ISIN RU0007661625","state_reg_number":null,"type_account_depo":"TS1","stock_exchange_name":"ПАО Московская Биржа","transcript":"1 (одна) обыкновенная акция ПАО \\"Газпром\\", ISIN RU0007661625 - ценная бумага ПАО \\"Газпром\\", которой присвоены коды ISIN RU0007661625 и CFI ESVXFR, номер государственной регистрации выпуска 1-02-00028-A, квалифицированная как акция, обращающаяся на бирже ПАО Московская Биржа.","weight_koeff":null,"type":"Российские акции"}},"props":null,"updated_at":"2019-12-10 16:19:44","created_at":"2019-12-10 16:19:44"},{"_id":"5def9b8e7ebecb44566292d2","code":"C2636CF3-66A7-47B8-923D-FCBF972B60E9","name":"Растущий доллар с гарантированным доходом","min_sum":"50000.00","currency":"RUB","type_name":"Пороговый","participation_rate":null,"direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"10.000000","barrier":"1.1000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"0.0000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":"22.00","second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"B3FC165E-6699-4051-9B9E-3449BE904A06","price_execution":null,"name":{"full":"курс USD","short":"USD/RUB","code":"USD"},"base_asset_currency":"российский рубль","issuer_name":"по отношению к рублю РФ","kind":"Курс доллара США ","isin":".","state_reg_number":null,"type_account_depo":null,"stock_exchange_name":"-","transcript":"Официальный курс доллара США к российскому рублю, установленный ЦБ РФ","weight_koeff":null,"type":"Валюта"}},"props":{"_id":"5dc918667ebecb4f8165ae22","offer_name":"Растущий доллар с гарантированным доходом","color":"#37a7af","disclaimer":"","slug":"rub","subtitle":"","preview_picture":"","detail_picture":"/storage/media/86447b450320d1461521afccc1bedc2b.svg","updated_at":"2019-11-11 11:14:30","created_at":"2019-11-11 11:14:30"},"updated_at":"2019-12-10 16:20:14","created_at":"2019-12-10 16:20:14"},{"_id":"5def9ba27ebecb79562c6d02","code":"E21D2DAE-42B3-42EC-84F6-3A84C0B90420","name":"Растущая нефть с гарантированным доходом","min_sum":"10000.00","currency":"RUB","type_name":"Пороговый","participation_rate":null,"direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"8.000000","barrier":"1.0800","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"0.0000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-06-13"},"expected_income":{"first":"13.00","second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"40E12D8A-2DC1-4BCD-A5AE-46714BD08E2F","price_execution":null,"name":{"full":"Один баррель сырой нефти сорта «Brent»","short":"нефть марки Brent","code":"Brent"},"base_asset_currency":"доллар США","issuer_name":"Один баррель сырой нефти сорта «Brent» ","kind":null,"isin":null,"state_reg_number":null,"type_account_depo":null,"stock_exchange_name":"-","transcript":"Нефть - один баррель сырой нефти сорта «Brent».","weight_koeff":null,"type":"Товары"}},"props":{"_id":"5dc9189e7ebecb4f7d30abc4","offer_name":"Растущая нефть с гарантированным доходом","color":"#36015f","disclaimer":"","slug":"oil","subtitle":"","preview_picture":"","detail_picture":"/storage/media/8217c0ccab3e453970d7f6894562d1b2.svg","updated_at":"2019-11-11 11:15:26","created_at":"2019-11-11 11:15:26"},"updated_at":"2019-12-10 16:20:34","created_at":"2019-12-10 16:20:34"},{"_id":"5def9bac7ebecb0a94200ec2","code":"654E3B7A-CE65-4EA6-A5D0-021A1DE93443","name":"Яндекс – инвестиции в лидера IT","min_sum":"10000.00","currency":"RUB","type_name":"Участие EB","participation_rate":null,"direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"0.000000","barrier":"1.0000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"0.5000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":null,"second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"E011777E-C428-4173-81A4-16198BCE4C29","price_execution":null,"name":{"full":"Yandex N.V.","short":"Яндекс","code":"YNDX"},"base_asset_currency":"российский рубль","issuer_name":"PLLC Yandex N.V., ","kind":"1 (одна) обыкновенная акция класса А ","isin":"ISIN NL0009805522","state_reg_number":null,"type_account_depo":"TS1","stock_exchange_name":"ПАО Московская Биржа","transcript":"1 (одна) обыкновенная акция класса А PLLC Yandex N.V., ISIN NL0009805522 - ценная бумага YANDEX N V, которой присвоены коды ISIN NL0009805522 и CFI ESVUFN, квалифицированная как акция (согласно Указанию Банка России от 03.10.2017 № 4561-У «О порядке квалификации иностранных финансовых инструментов в качестве ценных бумаг»), обращающаяся на бирже ПАО Московская Биржа.","weight_koeff":"1.0000","type":"Иностранные акции"}},"props":{"_id":"5db1d9267ebecb565d529383","offer_name":"Яндекс – инвестиции в лидера IT","color":"#c90b08","disclaimer":"","slug":"yandex","subtitle":"","preview_picture":"","detail_picture":"/storage/media/285d6ada0bda670f55048d16cf55a97c.svg","updated_at":"2019-10-24 20:08:15","created_at":"2019-10-24 20:02:30"},"updated_at":"2019-12-10 16:20:44","created_at":"2019-12-10 16:20:44"},{"_id":"5def9bc17ebecb0a9e1cbd93","code":"2A9CD08E-B7C1-4613-84D4-CCD06D5AE7A8","name":"Сбербанк – инвестиции в прибыльный банк","min_sum":"10000.00","currency":"RUB","type_name":"Участие EB","participation_rate":"1.25","direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"0.000000","barrier":"1.0000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"0.5000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":null,"second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"6EA0B21B-B75F-4114-A1EE-C5678BC2C8AC","price_execution":null,"name":{"full":"ПАО Сбербанк","short":"Сбербанк","code":"SBER"},"base_asset_currency":"российский рубль","issuer_name":"ПАО Сбербанк, ","kind":"1 (одна) обыкновенная акция ","isin":"ISIN RU0009029540","state_reg_number":null,"type_account_depo":"TS1","stock_exchange_name":"ПАО Московская Биржа","transcript":"1 (одна) обыкновенная акция ПАО \\"Сбербанк России\\", ISIN RU0009029540 - ценная бумага ПАО Сбербанк , которой присвоены коды ISIN RU0009029540 и CFI ESVXFR, номер государственной регистрации выпуска 10301481B, квалифицированная как акция, обращающаяся на бирже ПАО Московская Биржа.","weight_koeff":"1.0000","type":"Российские акции"}},"props":{"_id":"5db1d8bb7ebecb4aa25307c2","offer_name":"Сбербанк – инвестиции в прибыльный банк","color":"#4f9c1d","disclaimer":"","slug":"sber","subtitle":"","preview_picture":"","detail_picture":"/storage/media/7be813b404b5032d7d1a56b743928199.svg","updated_at":"2019-10-24 20:07:36","created_at":"2019-10-24 20:00:43"},"updated_at":"2019-12-10 16:21:05","created_at":"2019-12-10 16:21:05"},{"_id":"5def9bd57ebecb79475cfb03","code":"E0E3E71B-E996-4A1B-A3C9-F1A3E947CC94","name":"Albemarle – инвестиции в производителя лития","min_sum":"10000.00","currency":"RUB","type_name":"Участие EB","participation_rate":"1.25","direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"0.000000","barrier":"1.0000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"0.5000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":null,"second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"E593EC44-B032-4F3D-B082-60B4871C2A0B","price_execution":null,"name":{"full":"Albemarle Corp","short":"Albemarle","code":"ALB"},"base_asset_currency":"доллар США","issuer_name":"Albemarle Corp., ","kind":"1 (одна) обыкновенная акция ","isin":"ISIN US0126531013","state_reg_number":null,"type_account_depo":"TS3","stock_exchange_name":"New York Stock Exchange LLC","transcript":"1 (одна) обыкновенная акция Albemarle Corp., ISIN US0126531013 - ценная бумага ALBEMARLE CORP, которой присвоены коды ISIN US0126531013 и CFI ESVUFR, квалифицированная как акция (согласно Указанию Банка России от 03.10.2017 № 4561-У «О порядке квалификации иностранных финансовых инструментов в качестве ценных бумаг»), обращающаяся на бирже New York Stock Exchange LLC (Нью Йорк Сток Эксчендж ЭлЭлСи).","weight_koeff":"1.0000","type":"Иностранные акции"}},"props":{"_id":"5db1d89d7ebecb56523b5593","offer_name":"Albemarle – инвестиции в производителя лития","color":"#70c6a8","disclaimer":"","slug":"albemarle","subtitle":"","preview_picture":"","detail_picture":"/storage/media/a4bae7d86e3588c65379e307871c0fda.svg","updated_at":"2019-10-24 20:07:21","created_at":"2019-10-24 20:00:13"},"updated_at":"2019-12-10 16:21:25","created_at":"2019-12-10 16:21:25"},{"_id":"5def9be97ebecb0a9d36c662","code":"EFEA72C9-11DE-46A2-9DC7-3BAE13779845","name":"McDonald\'s – инвестиции в короля фастфуда","min_sum":"10000.00","currency":"RUB","type_name":"Участие EB","participation_rate":"1.25","direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"0.000000","barrier":"1.0000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"0.5000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":null,"second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"29959EC2-CB56-41B9-9C6F-EC70BACF7CC6","price_execution":null,"name":{"full":"McDonald\'s Corporation","short":"McDonald\'s","code":"MCD"},"base_asset_currency":"доллар США","issuer_name":"McDonald\'s Corporation, ","kind":"1 (одна) обыкновенная акция ","isin":"ISIN US5801351017","state_reg_number":null,"type_account_depo":"TS3","stock_exchange_name":"New York Stock Exchange LLC","transcript":"1 (одна) обыкновенная акция McDonald\'s Corporation,  ISIN US5801351017 – ценная бумага MCDONALDS CORP, которой присвоены коды US5801351017 и CFI ESVUFR, квалифицированная как акция (согласно Указанию Банка России от 03.10.2017 № 4561-У «О порядке квалификации иностранных финансовых инструментов в качестве ценных бумаг»), обращающаяся на бирже New York Stock Exchange LLC (Нью Йорк Сток Эксчендж ЭлЭлСи).","weight_koeff":"1.0000","type":"Иностранные акции"}},"props":{"_id":"5db1d82e7ebecb4f403ec7a5","offer_name":"McDonald\'s – инвестиции в короля фастфуда","color":"#edbc09","disclaimer":"","slug":"mcdonalds","subtitle":"","preview_picture":"","detail_picture":"/storage/media/984982029c99f5ae15ebcf6ee2fcbed4.svg","updated_at":"2019-10-24 20:06:42","created_at":"2019-10-24 19:58:22"},"updated_at":"2019-12-10 16:21:45","created_at":"2019-12-10 16:21:45"},{"_id":"5def9bfd7ebecb79455f6712","code":"D8F68875-C955-41A0-9B44-1CAD6C17A762","name":"Facebook – инвестиции в глобальную соцсеть","min_sum":"10000.00","currency":"RUB","type_name":"Участие EB","participation_rate":"1.25","direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"0.000000","barrier":"1.0000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"1.0000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":null,"second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"C4B6FB29-7C00-4885-9A76-6FAC130F29B5","price_execution":null,"name":{"full":"Facebook Inc.","short":"Facebook","code":"FB"},"base_asset_currency":"доллар США","issuer_name":"Facebook Inc. ","kind":"1 (одна) акция класса A","isin":"ISIN US30303M1027","state_reg_number":null,"type_account_depo":"TS3","stock_exchange_name":"NASDAQ","transcript":"1 (одна) акция класса A Facebook Inc. (ISIN US30303M1027) – ценная бумага FACEBOOK INC, которой присвоены коды ISIN US30303M1027 и CFI ESVUFR, квалифицированная как акция (согласно Указанию Банка России от 03.10.2017 № 4561-У «О порядке квалификации иностранных финансовых инструментов в качестве ценных бумаг»), обращающаяся на бирже NASDAQ (Насдак).","weight_koeff":"1.0000","type":"Иностранные акции"}},"props":{"_id":"5db1d8097ebecb4f4f6234b3","offer_name":"Facebook – инвестиции в глобальную соцсеть","color":"#3b65b6","disclaimer":"","slug":"fb","subtitle":"","preview_picture":"","detail_picture":"/storage/media/2b35b9ee4fa9f75cd9e32e3b5f6006cc.svg","updated_at":"2019-10-24 20:06:26","created_at":"2019-10-24 19:57:45"},"updated_at":"2019-12-10 16:22:05","created_at":"2019-12-10 16:22:05"},{"_id":"5def9c1b7ebecb0a930d3ab2","code":"B25BCF16-3B13-4993-99A7-76570BB59A43","name":"Amazon – инвестиции в мирового ритейлера","min_sum":"10000.00","currency":"RUB","type_name":"Участие EB","participation_rate":"1.25","direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"0.000000","barrier":"1.0000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"1.0000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":null,"second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-13T18:00:00"},"base_assets_list":{"base_asset":{"id":"2214234F-2053-4C6D-A9F1-DE0E0D257FD5","price_execution":null,"name":{"full":"Amazon.com","short":"Amazon","code":"AMZN"},"base_asset_currency":"доллар США","issuer_name":"Amazon.com Inc., ","kind":"1 (одна) обыкновенная акция","isin":"ISIN US0231351067","state_reg_number":null,"type_account_depo":"TS3","stock_exchange_name":"NASDAQ","transcript":"1 (одна) обыкновенная акция Amazon.com Inc., ISIN US0231351067 – ценная бумага AMAZON COM INC, которой присвоены коды ISIN US0231351067 и CFI ESVUFR, квалифицированная как акция (согласно Указанию Банка России от 03.10.2017 № 4561-У «О порядке квалификации иностранных финансовых инструментов в качестве ценных бумаг»), обращающаяся на бирже NASDAQ (Насдак).","weight_koeff":"1.0000","type":"Иностранные акции"}},"props":{"_id":"5db1d7e57ebecb4f57643a02","offer_name":"Amazon – инвестиции в мирового ритейлера","color":"#c4871e","disclaimer":"","slug":"amazon","subtitle":"","preview_picture":"","detail_picture":"/storage/media/1896b6436dc53f35e6ccf8b3822fbaab.svg","updated_at":"2019-10-24 20:06:06","created_at":"2019-10-24 19:57:09"},"updated_at":"2019-12-10 16:22:35","created_at":"2019-12-10 16:22:35"},{"_id":"5def9c4e7ebecb0a9530ab62","code":"FA8677F4-1D63-407A-8044-40C53E6EA75F","name":"Disney – инвестиции в гиганта развлечений","min_sum":"10000.00","currency":"RUB","type_name":"Участие EB","participation_rate":null,"direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"0.000000","barrier":"1.0000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"1.0000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":null,"second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"FE732F93-FEF5-450E-815B-EC2F4B9D386B","price_execution":null,"name":{"full":"The Walt Disney Company","short":"Disney","code":"DIS"},"base_asset_currency":"доллар США","issuer_name":"The Walt Disney Company, ","kind":"1 (одна) обыкновенная акция ","isin":"ISIN US2546871060","state_reg_number":null,"type_account_depo":"TS3","stock_exchange_name":"New York Stock Exchange LLC","transcript":"1 (одна) обыкновенная акция The Walt Disney Company, ISIN US2546871060 – ценная бумага DISNEY WALT CO, которой присвоены коды ISIN US2546871060 и CFI ESVUFR, квалифицированная как акция (согласно Указанию Банка России от 03.10.2017 № 4561-У «О порядке квалификации иностранных финансовых инструментов в качестве ценных бумаг»), обращающаяся на бирже New York Stock Exchange LLC (Нью Йорк Сток Эксчендж ЭлЭлСи).","weight_koeff":"1.0000","type":"Иностранные акции"}},"props":{"_id":"5db1d7c27ebecb56677747b3","offer_name":"Disney – инвестиции в гиганта развлечений","color":"#593ddf","disclaimer":"","slug":"disney","subtitle":"","preview_picture":"","detail_picture":"/storage/media/62e02e8f6996d501e0a382033db933b6.svg","updated_at":"2019-10-24 20:05:45","created_at":"2019-10-24 19:56:34"},"updated_at":"2019-12-10 16:23:26","created_at":"2019-12-10 16:23:26"},{"_id":"5def9c627ebecb445d6cdb92","code":"6B4FDDFB-E108-4CC7-9908-E8E88E721734","name":"Золото – инвестиции в драгметаллы","min_sum":"10000.00","currency":"RUB","type_name":"Участие EB","participation_rate":null,"direction":"Рост","additional_koeff":null,"preterm_koeff":null,"price_koeff":null,"delivery_koeff":null,"capital_protection_level":"0.000000","barrier":"1.0000","delivery_price_percent":null,"nominal":null,"period_quantity":null,"risk_ratio":"1.0000","period_length":null,"is_actual":true,"risk_profile":"31CDEAC8-2FA3-4DB2-AB02-1E6F89C1D493","is_investment_idea":true,"calculated_rate":null,"barrier2":null,"calculation_currency":"RUB","contract":{"execution_date":"2020-03-13"},"expected_income":{"first":null,"second":null},"period":{"start_date":"2019-12-10T18:01:00","stop_date":"2019-12-12T18:00:00"},"base_assets_list":{"base_asset":{"id":"646C5CCF-69AE-4C4B-A5AC-E7288455F29E","price_execution":null,"name":{"full":"Золото","short":"Золото","code":"GOLD"},"base_asset_currency":"доллар США","issuer_name":"Золото","kind":null,"isin":".","state_reg_number":null,"type_account_depo":null,"stock_exchange_name":"-","transcript":"Золото - одна тройская унция аффинированного золота в слитках на лондонском рынке наличного металла «The London Bullion Market Association».","weight_koeff":"1.0000","type":"Товары"}},"props":{"_id":"5db1d79a7ebecb4f4b67bd04","offer_name":"Золото – инвестиции в драгметаллы","color":"#e4940f","disclaimer":"","slug":"au","subtitle":"","preview_picture":"","detail_picture":"/storage/media/9875b2e467a77c2f4ab393c65eb126c9.svg","updated_at":"2019-10-24 20:05:25","created_at":"2019-10-24 19:55:54"},"updated_at":"2019-12-10 16:23:46","created_at":"2019-12-10 16:23:46"}]')},"9a6f":function(e,t,n){},"9c0c":function(e,t,n){},c800:function(e,t,n){},cfce:function(e,t,n){e.exports=n.p+"img/product-default.a9550e40.svg"},e347:function(e,t,n){e.exports=n.p+"img/logo.e705bb68.svg"},fb29:function(e,t,n){"use strict";var a=n("9a6f"),r=n.n(a);r.a}});
//# sourceMappingURL=app.7e8b1e89.js.map