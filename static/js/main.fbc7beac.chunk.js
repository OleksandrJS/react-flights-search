(this["webpackJsonpreact-flight-search"]=this["webpackJsonpreact-flight-search"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),s=a(2),o=a(3),l=a(5),u=a(4),h=(a(14),a(15),a(1)),m=a.n(h),d=a(6),p=function e(){var t=this;Object(s.a)(this,e),this.getData=function(){var e=Object(d.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,"; received ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getCity=Object(d.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData(t.PROXY+t.CITY_API);case 2:return a=e.sent,e.abrupt("return",a.filter((function(e){return e.name})));case 4:case"end":return e.stop()}}),e)}))),this.getPrice=function(){var e=Object(d.a)(m.a.mark((function e(a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData(t.PROXY+t.PRICE+a);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.CITY_API="http://api.travelpayouts.com/data/ru/cities.json",this.PROXY="https://cors-anywhere.herokuapp.com/",this.API_KEY="6af464c149023c58b81e81ab93488992",this.PRICE="https://min-prices.aviasales.ru/calendar_preload"},f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getNameCityFrom(),this.getNameCityTo(),this.getDate(),this.currencyEx(),this.getChanges(),this.getLinkAviasales()}},{key:"componentDidUpdate",value:function(e){this.props.data!==e.data&&(this.getNameCityFrom(),this.getNameCityTo(),this.getDate(),this.currencyEx(),this.getChanges(),this.getLinkAviasales())}},{key:"getChanges",value:function(){switch(this.props.data.number_of_changes){case 1:this.setState({transfer:"\u0421 \u043e\u0434\u043d\u043e\u0439 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u043e\u0439"});break;case 2:this.setState({transfer:"\u0421 \u0434\u0432\u0443\u043c\u044f \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430\u043c\u0438"});break;case 3:this.setState({transfer:"\u0421 \u0442\u0440\u0435\u043c\u044f \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430\u043c\u0438"});break;default:this.setState({transfer:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"})}}},{key:"getDate",value:function(){var e=new Date(this.props.data.depart_date).toLocaleString("ru",{year:"numeric",month:"long",day:"numeric"});this.setState({date:e})}},{key:"getLinkAviasales",value:function(){var e="https://www.aviasales.ua/search/";e+=this.props.data.origin;var t=new Date(this.props.data.depart_date),a=t.getDate();e+=a<10?"0"+a:a;var n=t.getMonth();e+=n<10?"0"+n:n,e+=this.props.data.destination,e+="1",this.setState({link:e})}},{key:"getNameCityFrom",value:function(){var e=this,t=this.props.city.find((function(t){return t.code===e.props.data.origin}));this.setState({cityNameFrom:t.name})}},{key:"getNameCityTo",value:function(){var e=this,t=this.props.city.find((function(t){return t.code===e.props.data.destination}));this.setState({cityNameTo:t.name})}},{key:"currencyEx",value:function(){var e=(this.props.data.value/2.6).toFixed(2);this.setState({exch:e})}},{key:"render",value:function(){var e=this.state,t=e.link,a=e.exch,n=e.cityNameFrom,i=e.cityNameTo,c=e.date,s=e.transfer;return r.a.createElement("div",{className:"card_ticket"},r.a.createElement("h3",{className:"agent"},this.props.data.gate),r.a.createElement("div",{className:"ticket__wrapper"},r.a.createElement("div",{className:"left-side"},r.a.createElement("a",{href:t,className:"button button__buy"},"\u041a\u0443\u043f\u0438\u0442\u044c \u0437\u0430\xa0",a,"\u20b4")),r.a.createElement("div",{className:"right-side"},r.a.createElement("div",{className:"block-left"},r.a.createElement("div",{className:"city__from"},"\u0412\u044b\u043b\u0435\u0442 \u0438\u0437 \u0433\u043e\u0440\u043e\u0434\u0430:",r.a.createElement("span",{className:"city__name"},n)),r.a.createElement("div",{className:"date"},c)),r.a.createElement("div",{className:"block-right"},r.a.createElement("div",{className:"changes"},s),r.a.createElement("div",{className:"city__to"},"\u0413\u043e\u0440\u043e\u0434 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",r.a.createElement("span",{className:"city__name"},i))))))}}]),a}(n.Component),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onCityLoaded=function(e){n.setState({city:e})},n.showCity=function(e,t){(t.textContent="",""!==e)&&n.state.city.filter((function(t){return t.name.toLowerCase().startsWith(e.toLowerCase())})).forEach((function(e){var a=document.createElement("li");a.classList.add("dropdown__city"),a.textContent=e.name,t.append(a)}))},n.selectCityFrom=function(e){var t=document.querySelector(".dropdown__cities-from"),a=e.target;"li"===a.tagName.toLowerCase()&&(n.setState({origin:a.textContent}),t.textContent="")},n.selectCityTo=function(e){var t=document.querySelector(".dropdown__cities-to"),a=e.target;"li"===a.tagName.toLowerCase()&&(n.setState({destination:a.textContent}),t.textContent="")},n.onOriginChange=function(e){n.setState({origin:e.target.value})},n.onDestinationChange=function(e){n.setState({destination:e.target.value})},n.departureDateChange=function(e){n.setState({setDepartureDate:e.target.value})},n.renderCheap=function(e,t){var a=e.best_prices.filter((function(e){return e.depart_date===t}))[0];n.setState({cheapTicket:a});var r=document.getElementById("cheapest-ticket"),i=document.querySelector(".wrapper__ticket>h2");n.state.cheapTicket&&r&&(i.textContent="\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439 \u0431\u0438\u043b\u0435\u0442 \u043d\u0430 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u0443\u044e \u0434\u0430\u0442\u0443",r.style.display="block"),void 0===n.state.cheapTicket&&(r.style.display="block",i.textContent="\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u043f\u043e \u044d\u0442\u043e\u043c\u0443 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044e \u043d\u0435\u0442 \u0431\u0438\u043b\u0435\u0442\u043e\u0432")},n.renderCardCheap=function(e){return r.a.createElement(f,{data:e,city:n.state.city})},n.onSearchFlights=function(e){e.preventDefault();var t={from:n.state.city.find((function(e){return n.state.origin===e.name})),to:n.state.city.find((function(e){return n.state.destination===e.name})),when:n.state.setDepartureDate};if(t.from&&t.to){var a="?depart_date=".concat(t.when,"&origin=").concat(t.from.code,"&destination=").concat(t.to.code,"&one_way=true&token=").concat(n.API_KEY);n.SearchService.getPrice(a).then((function(e){n.renderCheap(e,t.when)}))}else alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430")},n.SearchService=new p,n.state={origin:"",destination:"",setDepartureDate:"",city:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateCity()}},{key:"updateCity",value:function(){this.SearchService.getCity().then(this.onCityLoaded)}},{key:"render",value:function(){var e=document.querySelector(".dropdown__cities-from"),t=document.querySelector(".dropdown__cities-to"),a=this.state,n=a.cheapTicket,i=a.origin,c=a.destination,s=this.renderCardCheap(n);return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"wrapper"},r.a.createElement("form",{onSubmit:this.onSearchFlights,className:"form-search"},r.a.createElement("div",{className:"wrapper__search"},r.a.createElement("div",{className:"input",style:{display:"block"}},r.a.createElement("label",null,"\u041e\u0442\u043a\u0443\u0434\u0430",r.a.createElement("input",{type:"text",value:i,onInput:this.showCity.bind(this,i,e),onChange:this.onOriginChange,className:"input__cities-from",required:!0})),r.a.createElement("ul",{onClick:this.selectCityFrom,className:"dropdown dropdown__cities-from"})),r.a.createElement("div",{className:"input"},r.a.createElement("label",null,"\u041a\u0443\u0434\u0430",r.a.createElement("input",{type:"text",value:c,onInput:this.showCity.bind(this,c,t),onChange:this.onDestinationChange,className:"input__cities-to",required:!0})),r.a.createElement("ul",{onClick:this.selectCityTo,className:"dropdown dropdown__cities-to"})),r.a.createElement("div",{className:"input input__cities-from"},r.a.createElement("label",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",r.a.createElement("input",{type:"date",placeholder:"Departure date",onChange:this.departureDateChange,className:"input__date-depart",required:!0})))),r.a.createElement("div",{className:"wrapper__button"},r.a.createElement("button",{type:"submit",className:"button button__search"},r.a.createElement("span",{className:"button__search-text"},"\u041d\u0430\u0439\u0442\u0438 \u0431\u0438\u043b\u0435\u0442\u044b"))))),r.a.createElement("section",{className:"card-wrapper"},r.a.createElement("section",{className:"wrapper__ticket",id:"cheapest-ticket",style:{display:"none"}},r.a.createElement("h2",null),r.a.createElement("article",{className:"ticket"},this.state.cheapTicket?s:null))))}}]),a}(n.Component);function y(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center  p-3"},"\u0410\u0432\u0438\u0430\u0431\u0438\u043b\u0435\u0442\u044b"),r.a.createElement(v,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.fbc7beac.chunk.js.map