(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__HuxZP",BreadTop:"BurgerIngredient__BreadTop__10-cT",Seeds1:"BurgerIngredient__Seeds1__3xHtz",Seeds2:"BurgerIngredient__Seeds2__1cUso",Meat:"BurgerIngredient__Meat__13nAN",Cheese:"BurgerIngredient__Cheese__1FxeY",Salad:"BurgerIngredient__Salad__1iTJE",Bacon:"BurgerIngredient__Bacon__3vrAI"}},function(e,t,n){e.exports={SideDrawer:"SideDrawer__SideDrawer__21TuB",Open:"SideDrawer__Open__1pVYR",Close:"SideDrawer__Close__3Yv1l",Logo:"SideDrawer__Logo__3TkPv"}},function(e,t,n){e.exports={BuildControl:"BuildControl__BuildControl__1jYc3",Label:"BuildControl__Label__33Z-p",Less:"BuildControl__Less__377MJ",More:"BuildControl__More__28-hQ"}},function(e,t,n){e.exports={Toolbar:"Toolbar__Toolbar__2JJW-",Logo:"Toolbar__Logo__1efBD",DesktopOnly:"Toolbar__DesktopOnly__WADUd"}},function(e,t,n){e.exports={NavigationItem:"NavigationItem__NavigationItem__23bcu",active:"NavigationItem__active__2zJdO"}},function(e,t,n){e.exports={BuildControls:"BuildControls__BuildControls__3_01f",OrderButton:"BuildControls__OrderButton__myBwT",enable:"BuildControls__enable__3jYIq"}},function(e,t,n){e.exports={Button:"Button__Button__QI7b2",Success:"Button__Success__2dHUt",Danger:"Button__Danger__2xnhN"}},,,,,,,,,,,function(e,t,n){e.exports={Content:"Layout__Content__3pLYC"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo__Logo__19WaN"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems__NavigationItems___yd_d"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle__26to0"}},function(e,t,n){e.exports={Backdrop:"Backdrop__Backdrop__efy1y"}},,function(e,t,n){e.exports={Burger:"Burger__Burger__3K4F-"}},function(e,t,n){e.exports={Modal:"Modal__Modal__32_-a"}},function(e,t,n){e.exports={Loader:"Spinner__Loader__1DDwY",load4:"Spinner__load4__2zf_T"}},,,function(e,t,n){e.exports=n(59)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),l=n.n(o),c=(n(41),n(1)),i=n(2),s=n(4),u=n(3),d=n(5),p=function(e){return e.children},m=n(24),h=n.n(m),_=n(10),g=n.n(_),b=n(25),f=n.n(b),v=n(26),E=n.n(v),y=function(e){return r.a.createElement("div",{className:E.a.Logo},r.a.createElement("img",{src:f.a,alt:"MyBurger"}))},O=n(27),w=n.n(O),C=n(11),j=n.n(C),k=function(e){return r.a.createElement("li",{className:j.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?j.a.active:null}," ",e.children))},B=function(){return r.a.createElement("ul",{className:w.a.NavigationItems},r.a.createElement(k,{link:"/",active:!0},"Burger Builder"),r.a.createElement(k,{link:"/"},"Checkout"))},S=n(28),N=n.n(S),D=function(e){return r.a.createElement("div",{className:N.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},I=function(e){return r.a.createElement("header",{className:g.a.Toolbar},r.a.createElement(D,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:g.a.Logo},r.a.createElement(y,null)),r.a.createElement("nav",{className:g.a.DesktopOnly},r.a.createElement(B,null)))},T=n(8),x=n.n(T),L=n(29),P=n.n(L),H=function(e){return e.show?r.a.createElement("div",{className:P.a.Backdrop,onClick:e.clicked}," "):null},M=function(e){var t=[x.a.SideDrawer,x.a.Close];return e.open&&(t=[x.a.SideDrawer,x.a.Open]),r.a.createElement(p,null,r.a.createElement(H,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:x.a.Logo},r.a.createElement(y,null)),r.a.createElement("nav",null,r.a.createElement(B,null))))},A=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(I,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(M,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:h.a.Content},this.props.children))}}]),t}(a.Component),W=n(30),Y=n(35),U=n(31),J=n.n(U),z=n(7),R=n.n(z),q=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:R.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:R.a.BreadTop},r.a.createElement("div",{className:R.a.Seeds1}),r.a.createElement("div",{className:R.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:R.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:R.a.Cheese});break;case"bacon":e=r.a.createElement("div",{className:R.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:R.a.Salad});break;default:e=null}return e}}]),t}(a.Component),F=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(Y.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(q,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:J.a.Burger},r.a.createElement(q,{type:"bread-top"}),t,r.a.createElement(q,{type:"bread-bottom"}))},Q=n(12),Z=n.n(Q),G=n(9),K=n.n(G),V=function(e){return r.a.createElement("div",{className:K.a.BuildControl},r.a.createElement("div",{className:K.a.Label},e.label),r.a.createElement("button",{className:K.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:K.a.More,onClick:e.added},"More"))},$=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],X=function(e){return r.a.createElement("div",{className:Z.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),$.map((function(t){return r.a.createElement(V,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:Z.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},ee=n(32),te=n.n(ee),ne=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentWillUpdate",value:function(){console.log("[Modal] WillUpdate")}},{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(H,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:te.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(a.Component),ae=n(13),re=n.n(ae),oe=function(e){return r.a.createElement("button",{className:[re.a.Button,re.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},le=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])}));return r.a.createElement(p,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(oe,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),r.a.createElement(oe,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(a.Component),ce=n(33),ie=n.n(ce),se=function(){return r.a.createElement("div",{className:ie.a.loader},"Loading...")},ue=function(e,t){return function(n){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(d.a)(a,n),Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(ne,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),a}(a.Component)},de=n(34),pe=n.n(de).a.create({baseURL:"https://react-burger-project-ec804.firebaseio.com/"});function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(n,!0).forEach((function(t){Object(W.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _e={salad:.5,cheese:.4,meat:1.3,bacon:.7},ge=ue(function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:4,purchasable:!1,purchasing:!1,loading:!1,error:!1},n.addIngredientHandler=function(e){var t=n.state.ingredients[e]+1,a=he({},n.state.ingredients);a[e]=t;var r=_e[e],o=n.state.totalPrice+r;n.setState({totalPrice:o,ingredients:a}),n.updatePurchaseState(a)},n.removeIngredientHandler=function(e){var t=n.state.ingredients[e];if(!(t<=0)){var a=t-1,r=he({},n.state.ingredients);r[e]=a;var o=_e[e],l=n.state.totalPrice-o;n.setState({totalPrice:l,ingredients:r}),n.updatePurchaseState(r)}},n.purchaseHandler=function(){n.setState({purchasing:!0})},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.setState({loading:!0});var e={ingredients:n.state.ingredients,price:n.state.totalPrice,customer:{name:"Max Schwarzm\xfcller",address:{street:"Teststreet 1",zipCode:"41351",country:"Germany"},email:"test@test.com"},deliveryMethod:"fastest"};pe.post("/orders.json",e).then((function(e){n.setState({loading:!1,purchasing:!1})})).catch((function(e){n.setState({loading:!1,purchasing:!1})}))},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;pe.get("https://react-burger-project-ec804.firebaseio.com/ingredients.json").then((function(t){e.setState({ingredients:t.data})})).catch((function(t){e.setState({error:!0})}))}},{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=he({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.state.error?r.a.createElement("p",null,"Ingredients can't be loaded!"):r.a.createElement(se,null);return this.state.ingredients&&(a=r.a.createElement(p,null,r.a.createElement(F,{ingredients:this.state.ingredients}),r.a.createElement(X,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,ordered:this.purchaseHandler,price:this.state.totalPrice})),n=r.a.createElement(le,{ingredients:this.state.ingredients,price:this.state.totalPrice,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),this.state.loading&&(n=r.a.createElement(se,null)),r.a.createElement(p,null,r.a.createElement(ne,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),a)}}]),t}(a.Component),pe),be=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A,null,r.a.createElement(ge,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[36,1,2]]]);
//# sourceMappingURL=main.17207948.chunk.js.map