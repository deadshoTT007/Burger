(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[0],{12:function(e,t,n){},26:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){e.exports=n.p+"static/media/28.1 burger-logo.b8503d26.png"},48:function(e,t,n){e.exports=n(82)},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),i=n.n(o),c=(n(26),n(5)),l=n(6),u=n(8),s=n(7),d=n(46);var h=function(e){return r.a.createElement("div",null,e.children)},p=n(4),m=(n(12),n(43)),g=n.n(m);var v=function(e){return r.a.createElement("div",{className:"Logo"},r.a.createElement("img",{src:g.a,style:{height:e.height},alt:"Logo"}))},f=n(10);var b=function(e){return r.a.createElement("li",{className:"NavigationItem"},r.a.createElement(f.b,{to:"/",exact:!0,activeClassName:"active"},"Burger Builder"),e.authentication?r.a.createElement(f.b,{to:"/orders",exact:!0,activeClassName:"active"},"Orders"):null,e.authentication?r.a.createElement(f.b,{to:"/",exact:!0,activeClassName:"active"},"LOGOUT"):r.a.createElement(f.b,{to:"/Authenticate",exact:!0,activeClassName:"active"},"Authenticate"))};var E=function(e){return r.a.createElement("ul",{className:"NavigationItems "},r.a.createElement(b,{authentication:e.authentication}))};var y=function(e){return r.a.createElement("header",{className:"Toolbar"},r.a.createElement("div",{id:"DrawerToggle",onClick:e.toggle},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement(v,null),r.a.createElement("nav",null,r.a.createElement(E,{authentication:e.authentication})))},O=function(e){return r.a.createElement(r.a.Fragment,null)};var j=function(e){var t=["SideDrawer","Close"];return e.show&&(t=["SideDrawer","Open"]),r.a.createElement(h,null,r.a.createElement(O,{show:e.show,cancel:e.close}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement(v,null),r.a.createElement("nav",null,r.a.createElement(E,null))))};var k=Object(p.b)((function(e){return{isAuth:null!==e.authReducer.token}}),null)((function(e){var t=Object(a.useState)({show:!0}),n=Object(d.a)(t,2),o=n[0],i=n[1];return console.log(e.isAuth,"ISAUTH"),r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null,r.a.createElement(y,{authentication:e.isAuth,toggle:function(){i((function(e){return{show:!e.show}}))}}),r.a.createElement(j,{authentication:e.isAuth,show:o,close:function(){i(o.show=!1)}}),r.a.createElement("main",{className:"content"}," ",e.children)))})),C=n(1),S=n(47),I=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:"BreadBottom"});break;case"bread-top":e=r.a.createElement("div",{className:"BreadTop"},r.a.createElement("div",{classsName:"Seeds1"}),r.a.createElement("div",{className:"Seeds2"}));break;case"meat":e=r.a.createElement("div",{className:"Meat"});break;case"cheese":e=r.a.createElement("div",{className:"Cheese"});break;case"salad":e=r.a.createElement("div",{className:"Salad"});break;case"bacon":e=r.a.createElement("div",{id:"Bacon"});break;default:e=null}return e}}]),n}(a.Component),T=(n(58),n(2)),R=Object(T.g)((function(e){console.log("Props",e);var t=Object.keys(e.ingredients).map((function(t){return Object(S.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(I,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",{style:{textAlign:"center"}},"PLease Insert Ingredients")),console.log(t),r.a.createElement("div",{className:"Burger"},r.a.createElement(I,{type:"bread-top"}),t,r.a.createElement(I,{type:"bread-bottom"}))})),N=(n(59),n(60),function(e){return r.a.createElement("div",{className:"BuildControl"},r.a.createElement("div",{className:"Label"},e.label),r.a.createElement("button",{className:"Less",onClick:e.deleted,disabled:e.disabled},"Less"),r.a.createElement("button",{classNAme:"More",onClick:e.added},"More"))}),A=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}];var w=function(e){return console.log("iadaid",A),r.a.createElement("div",{className:"BuildControls"},r.a.createElement("p",null,"Current Price:",r.a.createElement("strong",null,"$",e.price.toFixed(2))),A.map((function(t){return r.a.createElement(N,{key:t.label,disabled:e.disabled[t.type],label:t.type,deleted:function(){return e.deletedIngredient(t.type)},added:function(){return e.ingredientAdded(t.type)}})})),r.a.createElement("button",{className:"OrderButton",onClick:e.ordered,disabled:!e.purchasable},e.isAuthenticated?"ORDER NOW":"SIGN UP"))};var D=function(e){return r.a.createElement("button",{id:e.id,className:e.button,onClick:e.Click},e.children)};var P=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t,":"),e.ingredients[t])})),n=t.reduce((function(e,t){return e.concat(t)}),[]);return console.log(t,n),r.a.createElement(h,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A Delicious burger with the following ingredients :"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total:",e.price.toFixed(2))),r.a.createElement(D,{id:"Succ",class:"Button",Click:e.purchaseContinue},"CONTINUE"),r.a.createElement(D,{id:"Dan",class:"Button",Click:e.purchaseCancel},"CANCEL"))};var _=function(e){return r.a.createElement(h,null,r.a.createElement(O,{show:e.show,cancel:e.cancel}),r.a.createElement("div",{style:{transform:e.show?"translateY(0)":"tranlateY(-100vh)",opacity:e.show?"1":"0"},className:"Modal"},e.children))},L=(n(61),function(){return r.a.createElement("div",{className:"loader"},"Loading...")}),H=n(14),x=n.n(H),B=function(e,t){return{type:"AUTH_SUCCESS",token:e,userId:t}},U=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:"AUTH_LOGOUT"}},F=function(e){return{type:"AUTH_REDIRECT_PATH",path:e}},M=function(e){return function(t){setTimeout((function(){t(U())}),1e3*e)}},G=function(){return{type:"Purchase_Burger_Start"}},V=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={purchase:!1,purchasing:!1,price:e.props.prices},e.updatePurchaseState=function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0},e.purchaseHandler=function(){e.props.token?e.setState({purchasing:!0}):(e.props.onSetAuthRedirectPath("/"),e.props.history.push("authenticate"))},e.addIngredientsHandler=function(t){console.log("dada");var n=e.state.ingredients[t]+1,a=Object(C.a)({},e.state.ingredients);a[t]=n;var r=e.state.totalPrice,o=e.props.prices[t]+r;e.setState({totalPrice:o,ingredients:a}),e.updatePurchaseState(a)},e.deleteIngredientsHandler=function(t){var n=e.state.ingredients[t],a=n-1;if(!(n<=0)){var r=Object(C.a)({},e.state.ingredients);r[t]=a;var o=e.state.totalPrice-e.props.prices[t];e.setState({totalPrice:o,ingredients:r}),e.updatePurchaseState(r)}},e.cancelOrder=function(){e.setState({purchasing:!1})},e.purchaseContinue=function(){var t=[];for(var n in e.props.ing)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e.props.ing[n]));t.push("price="+e.props.prices.toFixed(2));var a=t.join("&");console.log("Queryparams",a),e.props.history.push("/checkout"),e.props.history.push({search:"?"+a})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("History",this.props),this.props.initIngredients()}},{key:"render",value:function(){console.log("History",this.props);var e=Object(C.a)({},this.props.ing);for(var t in e)e[t]=e[t]<=0;var n=r.a.createElement(L,null),a=null;return this.props.ing&&(n=r.a.createElement(h,null,r.a.createElement(R,{ingredients:this.props.ing}),r.a.createElement(w,{price:this.props.prices,ingredientAdded:this.props.onIngredientAdded,deletedIngredient:this.props.onIngredientRemoved,purchasable:this.updatePurchaseState(this.props.ing),isAuthenticated:this.props.token,disabled:e,ordered:this.purchaseHandler,purchase:this.state.purchasing})),a=r.a.createElement(P,{ingredients:this.props.ing,price:this.props.prices,purchaseContinue:this.purchaseContinue,purchaseCancel:this.cancelOrder})),this.props.loading&&(a=r.a.createElement(L,null)),r.a.createElement(h,null,r.a.createElement("div",null,this.props.error),r.a.createElement(_,{show:this.state.purchasing,cancel:this.cancelOrder},a),n)}}]),n}(a.Component),q=Object(p.b)((function(e){return{ing:e.burgerBuilder.ingredients,prices:e.burgerBuilder.totalPrice,loading:e.burgerBuilder.loading,error:e.order.error,token:null!==e.authReducer.token}}),(function(e){return{onIngredientAdded:function(t){return e(function(e){return{type:"ADD_INGREDIENT",name:e}}(t))},onIngredientRemoved:function(t){return e(function(e){return{type:"REMOVE_INGREDIENT",name:e}}(t))},initIngredients:function(){return e((function(e){e({type:"Error"}),x.a.get("https://myburger-f07d4.firebaseio.com/ingredients.json").then((function(t){e({type:"SET_INGREDIENT",ingredients:t.data})}))}))},onSetAuthRedirectPath:function(t){return e(F(t))}}}))(V),Y=n(44);var W=function(e){return r.a.createElement("div",{className:"Checkout"},r.a.createElement("h1",null,"We Hope it tastes good"),r.a.createElement("div",{style:{width:"100%",height:"auto",margin:"auto"}},r.a.createElement(R,{ingredients:e.ingredients})),r.a.createElement("button",{id:"Succ",onClick:e.checkoutContinue},"CONTINUE "),r.a.createElement("button",{id:"Dan",onClick:e.checkoutCancel},"CANCEL "))},z=(n(79),n(80),function(e){console.log(e,"input.js");var t="InputElement valid",n=null;e.invalid&&e.touched&&(t="InputElement ",n=r.a.createElement("p",null,"PLease Enter a Valid ",e.type," min 3 words req")),console.log(e.invalid),void 0===e.value&&(t="InputElement valid");var a=null;switch(e.elementType){case"input":a=r.a.createElement("input",Object.assign({className:t,onChange:e.changed},e.elementConfig,{value:e.value})),console.log(t);break;case"textarea":a=r.a.createElement("textarea",Object.assign({className:t,onChange:e.changed},e.elementConfig,{value:e.value}));break;default:a=r.a.createElement("input",Object.assign({className:t,onChange:e.changed},e.elementConfig,{value:e.value}));break;case"select":a=r.a.createElement("select",{className:t,value:e.value},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:"fast"}," ",e.displayValue)})))}return r.a.createElement("div",{className:"Input"},a,n)}),Q=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"my name"},value:"",validation:{required:!0,minLength:3},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Street"},value:"",validation:{required:!0,minLength:3},valid:!1,touched:!1},zipcode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zipcode"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Country"},value:"",validation:{required:!0,minLength:3},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Email"},value:"",validation:{required:!0,minLength:3},valid:!1,touched:!1},deleveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"slowest",displayValue:"Slowest"}]},value:"fastest",valid:!0}},formIsValid:!1},e.checkValidity=function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n,console.log(e,t.required,n,"Min Length")),t.minLength&&(n=e.length>=t.minLength&&n,console.log(e.length,t.minLength,n,"Min Length")),t.maxLength&&(n=e.length<=t.maxLength&&n,console.log(e.length,t.maxLength,"MAx-length")),console.log(e.length,t,n,"Valid It anyhow"),n},e.orderHandler=function(t){t.preventDefault(),e.props.history.push("/"),e.setState({loading:!0});var n={};for(var a in e.state.orderForm)n[a]=e.state.orderForm[a].value;var r={ingredients:e.props.ing,price:e.props.prices,orderData:n,userId:e.props.userId};e.props.onPurchaseBurger(r,e.props.token)},e.inputChangedHandler=function(t,n){var a=Object(C.a)({},e.state.orderForm),r=Object(C.a)({},a[n]);r.value=t.target.value,r.valid=e.checkValidity(r.value,r.validation),r.touched=!0,console.log(r,"updated"),console.log(a[n],"validation"),a[n]=r;var o=!0;for(var i in a)o=a[i].valid&&o,console.log(o,"formis validornot");e.setState({orderForm:a,formIsValid:o}),console.log(o,"formValid"),console.log(e.state)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=r.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return console.log(t,"formELement"),r.a.createElement(z,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,touched:t.config.touched,type:t.id,changed:function(n){return e.inputChangedHandler(n,t.id)},invalid:!t.config.valid})})),r.a.createElement("button",{id:"Succ",disabled:!this.state.formIsValid},"ORDER"));return!0===this.props.loading&&(a=r.a.createElement(L,null)),console.log(this.props.loading,"LOad"),r.a.createElement("div",{className:"ContactData"},r.a.createElement("h4",null,"Enter your Contact Data"),a)}}]),n}(a.Component),J=Object(T.g)(Object(p.b)((function(e){return{ing:e.burgerBuilder.ingredients,prices:e.burgerBuilder.totalPrice,loading:e.order.spinnerLoading,error:e.order.error,token:e.authReducer.token,userId:e.authReducer.userId}}),(function(e){return{onPurchaseBurger:function(t,n){return e(function(e,t){return console.log("aaa"),function(n){n(G),console.log("aaaaa"),x.a.post("https://myburger-f07d4.firebaseio.com//orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:"Purchase_Burger_Success",id:e,orderData:t}}(t.data.name,e)),console.log(t.data.name,e,"resdata")})).catch((function(e){n({type:"PURCHASE_BURGER_FAIL",error:e}),console.log(e,"err")}))}}(t,n))}}}))(Q)),Z=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:null,totalPrice:0},e.checkoutCancelHandler=function(){console.log("adad"),e.props.history.goBack()},e.checkoutContinueHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(l.a)(n,[{key:"componentWillMount",value:function(){var e=new URLSearchParams(this.props.location.search);console.log("Querydata",e),console.log("ChekoutQuery",e);var t,n,a={},r=0,o=Object(Y.a)(e.entries());try{for(o.s();!(n=o.n()).done;)"price"===(t=n.value)[0]?r=t[1]:a[t[0]]=+t[1]}catch(i){o.e(i)}finally{o.f()}this.setState({ingredients:a,totalPrice:r})}},{key:"render",value:function(){var e=this,t=r.a.createElement(T.a,{to:"/"});return this.props.ing&&(t=r.a.createElement("div",null,r.a.createElement(W,{checkoutContinue:this.checkoutContinueHandler,checkoutCancel:this.checkoutCancelHandler,ingredients:this.state.ingredients}),r.a.createElement(T.b,{path:"/checkout/contact-data",exact:!0,render:function(t){return r.a.createElement(J,{ingredients:e.state.ingredients,price:e.state.totalPrice})}}))),t}}]),n}(a.Component),$=Object(p.b)((function(e){return{ing:e.burgerBuilder.ingredients}}))(Z);n(41);var K=function(e){console.log(e);var t=[];for(var n in e.ingredients)t.push({name:n,ingredients:e.ingredients[n]}),console.log("array",t);var a=t.map((function(e){return r.a.createElement("span",null,e.name,": ",e.ingredients)}));return r.a.createElement("div",{className:"order"},r.a.createElement("p",null,"Ingredients:",a),r.a.createElement("h1",null,"Price:$",e.price.toFixed(2)))},X=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={orders:null,loading:!0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t="?auth="+this.props.token+'&orderBy="userId"&equalTo="'+this.props.userId+'"';console.log(t,"par"),x.a.get("https://myburger-f07d4.firebaseio.com/orders.json"+t).then((function(n){console.log(t,"params");var a=[];for(var r in n.data)a.push(Object(C.a)(Object(C.a)({},n.data[r]),{},{id:r}));e.setState({loading:!1,orders:a}),console.log(a,"Order Data")}))}},{key:"render",value:function(){return console.log(this.state,"DATASSS"),console.log(this.props.orders,"ORDDERS"),console.log(this.props.token,"token"),this.state.loading?r.a.createElement(L,null):r.a.createElement("div",{className:"orders"},this.state.orders.map((function(e){return r.a.createElement(K,{key:e.id,ingredients:e.ingredients,price:+e.price})})))}}]),n}(a.Component),ee=Object(p.b)((function(e){return{token:e.authReducer.token,orders:e.order.orders,userId:e.authReducer.userId}}),(function(e){return{onFetchOrder:function(t,n){return e(function(e,t){return function(n){n({type:"FETCH_ORDER_START"});var a="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';x.a.get("https://myburger-f07d4.firebaseio.com/orders.json"+a).then((function(e){console.log(e,"res");var t=[];for(var a in e.data)t.push(Object(C.a)(Object(C.a)({},e.data[a]),{},{id:a})),console.log(t,"fetchOrder");n({type:"FETCH_ORDER_SUCCESS",orders:t})})).catch((function(e){n({type:"FETCH_ORDER_FAIL"})}))}}(t,n))}}}))(X),te=n(16),ne=(n(81),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"text",placeholder:"password"},value:"",validation:{required:!0},valid:!1,touched:!1}},isSignup:!0},e.checkValidity=function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n,console.log(e.length,t.maxLength,"MAx-length")),n},e.inputChangedHandler=function(t,n){var a=Object(C.a)(Object(C.a)({},e.state.controls),{},Object(te.a)({},n,Object(C.a)(Object(C.a)({},e.state.controls[n]),{},{value:t.target.value,valid:e.checkValidity(t.target.value,e.state.controls[n].validation),touched:!0})));e.setState({controls:a})},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignup)},e.onSignChange=function(){e.setState((function(e){return Object(C.a)(Object(C.a)({},e),{},{isSignup:!e.isSignup})}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.building||"/"===this.props.authRedirectPath||this.props.onAuthRedirectPath("/checkout")}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});console.log(t.length,"Length");var a=t.map((function(t){return r.a.createElement(z,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,touched:t.config.touched,type:t.id,changed:function(n){return e.inputChangedHandler(n,t.id)},invalid:!t.config.valid})})),o=null;this.props.token&&(o=r.a.createElement(T.a,{to:this.props.authRedirectPath})),console.log(this.props.token,"TOKEEN");var i=r.a.createElement("div",{className:"Auth"},o,r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement(z,null),a,r.a.createElement("button",{id:"Succ"},this.state.isSignup?"SIGN UP":"SIGN IN"),r.a.createElement("button",{id:"Dan",onClick:this.onSignChange},"SWITCH TO ",this.state.isSignup?"SIGN IN":"SIGN UP")));return this.props.loading?r.a.createElement(L,null):r.a.createElement(r.a.Fragment,null,i)}}]),n}(a.Component)),ae=Object(p.b)((function(e){return{loading:e.authReducer.loading,error:e.authReducer.error,token:null!==e.authReducer.token,building:e.authReducer.building,authRedirectPath:e.authReducer.authRedirectPath}}),(function(e){return{onAuth:function(t,n,a){return e(function(e,t,n){return function(a){a({type:"AUTH_START"});var r={email:e,password:t,returnSecureToken:!0};a(M());var o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA8aMyBRFw_g4ZSUHV6crYwdz1PHBgQGJ8";n||(o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA8aMyBRFw_g4ZSUHV6crYwdz1PHBgQGJ8"),x.a.post(o,r).then((function(e){localStorage.setItem("token",e.data.idToken);var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(B(e.data.idToken,e.data.localId)),console.log(e.data.idToken,"TOKEN"),a(M(e.data.expiresIn))})).catch((function(e){a(function(e){return{type:"AUTH_FAIL",error:e}}(e))}))}}(t,n,a))},onAuthRedirectPath:function(t){return e(F(t))}}}))(ne),re=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onAuthLogout()}},{key:"render",value:function(){return r.a.createElement(T.a,{to:"/"})}}]),n}(r.a.Component),oe=Object(p.b)((function(e){return{onAuthLogout:function(){return e({type:"AUTH_START"})}}}))(re),ie=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onStateChange()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null,r.a.createElement(T.d,null,r.a.createElement(T.b,{path:"/checkout",exact:!0,component:$}),r.a.createElement(T.b,{path:"/orders",exact:!0,component:ee}),r.a.createElement(T.b,{path:"/Authenticate",exact:!0,component:ae}),r.a.createElement("route",{path:"/logout",exact:!0,component:oe}),r.a.createElement(T.b,{path:"/",exact:!0,component:q}),r.a.createElement(T.b,{exact:!0,path:"/checkout/contact-data",component:J}))))}}]),n}(a.Component),ce=Object(p.b)((function(e){return{token:e.authReducer.token}}),(function(e){return{onStateChange:function(){return e((function(e){var t=localStorage.getItem("token");if(console.log(t,"ttoken"),t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(U());else{var a=localStorage.getItem("userId");e(B(t,a)),e(M((n.getTime()-(new Date).getTime())/1e3))}}else e(U())}))}}}))(ie);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=n(45),ue=function(e,t){return Object(C.a)(Object(C.a)({},e),t)},se={ingredients:null,totalPrice:4,loading:!1,building:!1},de={salad:.5,cheese:.4,meat:1.3,bacon:.7},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":var n=Object(te.a)({},t.name,e.ingredients[t.name]+1),a=ue(e.ingredients,n),r={ingredients:a,totalPrice:e.totalPrice+de[t.name],building:!0};return ue(e,r);case"REMOVE_INGREDIENT":var o=Object(te.a)({},t.name,e.ingredients[t.name]-1),i=ue(e.ingredients,o),c={ingredients:i,totalPrice:e.totalPrice+de[t.name],building:!0};return ue(e,c);case"SET_INGREDIENTS":return ue(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,loading:!1,building:!1});case"Error":return ue(e,{loading:!0});case"SET_INGREDIENT":return Object(C.a)(Object(C.a)({},e),{},{ingredients:t.ingredients,loading:!1,totalPrice:4})}return e},pe=n(17),me={orders:[],spinnerLoading:!1,error:""},ge={error:null,token:null,userId:null,loading:!1,authRedirectPath:"/"},ve=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.d,fe=Object(pe.c)({burgerBuilder:he,order:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Purchase_Burger_start":return Object(C.a)(Object(C.a)({},e),{},{spinnerLoading:!0});case"Purchase_Burger_Success":var n=Object(C.a)(Object(C.a)({},t.orders),{},{id:t.id});return Object(C.a)(Object(C.a)({},e),{},{orders:e.orders.concat(n),spinnerLoading:!1});case"PURCHASE_BURGER_FAIL":return Object(C.a)(Object(C.a)({},e),{},{error:t.error});case"FETCH_ORDER_START":return Object(C.a)(Object(C.a)({},e),{},{loading:!0});case"FETCH_ORDER_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{orders:e.orders.push(t.orders)});case"Fetch_ORDER_FAIL":return Object(C.a)(Object(C.a)({},e),{},{loading:!1});default:return me}},authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return Object(C.a)(Object(C.a)({},e),{},{loading:!0});case"AUTH_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{loading:!1,token:t.token,userId:t.userId});case"AUTH_LOGOUT":return Object(C.a)(Object(C.a)({},e),{},{token:null,userId:null});case"AUTH_FAIL":return Object(C.a)(Object(C.a)({},e),{},{loading:!1,error:t.error});case"AUTH_REDIRECT_PATH":return Object(C.a)(Object(C.a)({},e),{},{authRedirectPath:t.path});default:return e}}}),be=Object(pe.e)(fe,ve(Object(pe.a)(le.a))),Ee=r.a.createElement(p.a,{store:be},r.a.createElement(f.a,null,r.a.createElement(ce,null)));i.a.render(Ee,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.03d93325.chunk.js.map