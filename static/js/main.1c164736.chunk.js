(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},25:function(e,t,a){e.exports=a(48)},30:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(23),r=a.n(i),o=(a(30),a(5)),s=a(6),c=a(8),u=a(7),m=a(9),d=(a(11),a(12)),h=a(3),g=a(18),p=a.n(g),f=(a(44),p.a.initializeApp({apiKey:"AIzaSyA8O3u7KuZmjMHrSt9b8-K9XMMDDAH5oAo",authDomain:"woofout-36aca.firebaseapp.com",databaseURL:"https://woofout-36aca.firebaseio.com",projectId:"woofout-36aca",storageBucket:"woofout-36aca.appspot.com",messagingSenderId:"178817819886"}));p.a.firestore().settings({timestampsInSnapshots:!0});p.a.storage();var b=f,E=function(){return l.a.createElement("div",{className:"StartPage-header"},l.a.createElement("a",{href:"/"},l.a.createElement("h1",{className:"woofout"},"Woofout")),l.a.createElement("h1",{className:"registartionHeadline"},"Registrering"),l.a.createElement("h1",{className:"profileHeadline"},"Profil"),l.a.createElement("h1",{className:"dogs"},"Dina hundar"))},v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).login=a.login.bind(Object(h.a)(Object(h.a)(a))),a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.handleReset=a.handleReset.bind(Object(h.a)(Object(h.a)(a))),a.losenord=a.losenord.bind(Object(h.a)(Object(h.a)(a))),a.logout=a.logout.bind(Object(h.a)(Object(h.a)(a))),a.state={email:"",emailReset:"",password:"",user:{user:!1}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;b.auth().onAuthStateChanged(function(t){console.log(t),t?(e.setState({user:!0}),console.log("inloggad")):console.log("ej loggad")})}},{key:"login",value:function(e){e.preventDefault(),b.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(function(e){window.location.href="/profile"}).catch(function(e){console.log(e)})}},{key:"logout",value:function(){b.auth().signOut().then(function(e){window.location.href="/"}).catch(function(e){console.log(e)})}},{key:"losenord",value:function(e){e.preventDefault(),b.auth().sendPasswordResetEmail(this.state.emailReset).then(function(e){window.location.href="/"}).catch(function(e){console.log(e)})}},{key:"handleReset",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"handleChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"StartPage-wrapper"},l.a.createElement(E,null),l.a.createElement("div",{className:"StartPage-input"},l.a.createElement("input",{value:this.state.email,onChange:this.handleChange,type:"email",name:"email",id:"username",placeholder:"Mailadress",required:!0}),l.a.createElement("input",{value:this.state.password,onChange:this.handleChange,type:"password",name:"password",id:"password",placeholder:"L\xf6senord",required:!0}),l.a.createElement("button",{className:"smallLinkButton",id:"losenord"},l.a.createElement("a",{href:"/ResetPassword"},"Gl\xf6mt l\xf6senord")),l.a.createElement("button",{onClick:this.login,className:"button",id:"login"},"Logga in"),l.a.createElement("button",{className:"linkButton",id:"signup"},l.a.createElement("a",{href:"/Registration"},"Skapa konto")))))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.signup=a.signup.bind(Object(h.a)(Object(h.a)(a))),a.state={name:"",surname:"",email:"",password:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"signup",value:function(e){var t=this;e.preventDefault();var a=b.firestore();b.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(function(e){var n=b.auth().currentUser;console.log(n),a.collection("users").doc(n.uid).set({name:t.state.name,surname:t.state.surname}),n.sendEmailVerification().then(function(){console.log("verification email sent")}).then(function(){alert("Document successfully written!"),window.location.href="/RegistrationDog"}).catch(function(e){alert(e)})})}},{key:"handleChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",{className:"App-registration blue-gradient"},l.a.createElement("section",{className:"RegistrationPage"},l.a.createElement("div",{className:"RegistrationPage-wrapper"},l.a.createElement("div",{className:"RegistrationPage-title"},l.a.createElement("h1",null,"Registrering"),l.a.createElement("br",null),l.a.createElement("h2",null,"Anv\xe4ndare")),l.a.createElement("div",{className:"RegistrationPage-form"},l.a.createElement("input",{value:this.state.name,onChange:this.handleChange,type:"name",name:"name",id:"name",placeholder:"F\xf6rnamn",required:!0}),l.a.createElement("input",{value:this.state.surname,onChange:this.handleChange,type:"surname",name:"surname",id:"surname",placeholder:"Efternamn",required:!0}),l.a.createElement("input",{value:this.state.email,onChange:this.handleChange,type:"email",name:"email",id:"email",placeholder:"Mailadress",required:!0}),l.a.createElement("input",{value:this.state.password,onChange:this.handleChange,type:"password",name:"password",id:"password",placeholder:"L\xf6senord",required:!0})),l.a.createElement("button",{onClick:this.signup,className:"button",id:"signUp"},"KLART"))))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("ul",{className:"navMenu"},l.a.createElement("a",{className:"profileIcon",href:"/Profile"},"Profil"),l.a.createElement("a",{className:"profileDogIcon",href:"/ProfileDog"},"Profil Hund"),l.a.createElement("a",{className:"regDogIcon",href:"/RegistrationDog"},"L\xe4gg till hund"),l.a.createElement("a",{className:"workoutBankIcon",href:"/WorkoutBank"},"\xd6vningsbank")))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChangeImage=a.handleChangeImage.bind(Object(h.a)(Object(h.a)(a))),a.handleChangeUploadImage=a.handleChangeUploadImage.bind(Object(h.a)(Object(h.a)(a))),a.state={image:null,url:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleChangeImage",value:function(e){var t=document.querySelector("img"),a=document.querySelector("input[type=file]").files[0],n=new FileReader;if(n.addEventListener("load",function(){t.src=n.result},!1),a&&n.readAsDataURL(a),e.target.files[0]){var l=e.target.files[0];this.setState({image:l})}}},{key:"handleChangeUploadImage",value:function(e){e.preventDefault();var t=this.state.image;b.auth().onAuthStateChanged(function(e){var a=b.auth().currentUser.uid,n={customMetadata:{id:a}},l=b.storage().ref(),i=l.child("test/"+a+".jpg").put(t,n);return console.log(i),i.on("state_changed",function(e){},function(e){console.log(e)},function(){l.child("test/"+a+".jpg").getDownloadURL().then(function(e){console.log(e)}),window.location.href="/ProfileDog"})})}},{key:"render",value:function(){return console.log(this.state.image),l.a.createElement("div",null,l.a.createElement("section",{className:"ImageUpload"},l.a.createElement("div",{className:"ImageUpload-wrapper"},l.a.createElement("div",{className:"ImageUpload-title"},l.a.createElement("h1",null,"Ladda upp bild"),l.a.createElement("br",null)),l.a.createElement("div",{className:"ImageUpload-form"},l.a.createElement("label",{for:"file"},l.a.createElement("span",{className:"imgUpload"})),l.a.createElement("input",{className:"imageInput",onChange:this.handleChangeImage,type:"file",name:"file",id:"file"}),l.a.createElement("img",Object(d.a)({src:this.state.url,className:"addedImage",alt:" Preview"},"src","data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")),l.a.createElement("button",{onClick:this.handleChangeUploadImage,className:"button"},"Klar")))),l.a.createElement(O,null))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.signup=a.signup.bind(Object(h.a)(Object(h.a)(a))),a.newDog=a.newDog.bind(Object(h.a)(Object(h.a)(a))),a.state={name:"",breed:"",size:"",weight:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"signup",value:function(e){if("\xe5\xe4\xf6"===this.state.name){e.preventDefault();var t=b.firestore(),a=b.auth().currentUser;t.collection("dog").add({name:this.state.name,breed:this.state.breed,size:this.state.size,weight:this.state.weight,userID:a.uid}).then(function(){alert("Document successfully written!"),window.location.href="/Profile"}).catch(function(e){alert("Got an error",e)})}}},{key:"newDog",value:function(e){if("\xe5\xe4\xf6"===this.state.name){e.preventDefault();var t=b.firestore(),a=b.auth().currentUser;t.collection("dog").add({name:this.state.name,breed:this.state.breed,size:this.state.size,weight:this.state.weight,userID:a.uid}).then(function(){alert("Document successfully written!"),window.location.href="/RegistrationDog"}).catch(function(e){alert("Got an error",e)})}}},{key:"handleChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",{className:"App-registration-dog orange-gradient"},l.a.createElement("section",{className:"RegistrationDogPage"},l.a.createElement("div",{className:"RegistrationDogPage-wrapper"},l.a.createElement("div",{className:"RegistrationDogPage-title"},l.a.createElement("h1",null,"Registrering"),l.a.createElement("br",null),l.a.createElement("h2",null,"Hund")),l.a.createElement("form",{className:"RegistrationDogPage-form"},l.a.createElement("input",{value:this.state.name,onChange:this.handleChange,type:"name",name:"name",id:"name",placeholder:"Namn",required:!0}),l.a.createElement("input",{value:this.state.breed,onChange:this.handleChange,type:"text",name:"breed",id:"breed",placeholder:"Ras",required:!0}),l.a.createElement("input",{value:this.state.size,onChange:this.handleChange,type:"text",name:"size",id:"size",placeholder:"Storlek",required:!0}),l.a.createElement("input",{value:this.state.weight,onChange:this.handleChange,type:"text",name:"weight",id:"weight",placeholder:"Vikt",required:!0}),l.a.createElement("button",{onClick:this.newDog,className:"button",type:"submit",id:"newDog"}),l.a.createElement("p",{class:"addDog"},"L\xe4gg till fler"),l.a.createElement("div",{className:"gdpr-wrapper"},l.a.createElement("p",{className:"gdpr-text"}," Jag godk\xe4nner anv\xe4ndarvillkoren och att Woofout behandlar mina personuppgifter enligt integritetspolicyn")),l.a.createElement("button",{onClick:this.signup,className:"button",type:"submit",id:"signUpDog"},"KLART")))),l.a.createElement(O,null))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).logout=a.logout.bind(Object(h.a)(Object(h.a)(a))),a.state={data:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"logout",value:function(){b.auth().signOut().then(function(e){window.location.href="/"}).catch(function(e){console.log(e)})}},{key:"componentDidMount",value:function(){var e=this;b.auth().onAuthStateChanged(function(t){var a=b.auth().currentUser,n=b.firestore().collection("users").doc(a.uid);a=b.auth().currentUser.uid;b.storage().ref("profileimage/"+a+".jpg").getDownloadURL().then(function(t){console.log(t),e.setState({url:t})}),t?(e.setState({user:t.uid}),console.log("inloggad")):console.log("ej loggad"),n.get().then(function(t){var a=t.data();e.setState({data:a})}).catch(function(e){console.log(e)})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App-profile-image"},l.a.createElement("section",{className:"ProfilePage"},l.a.createElement("button",{onClick:this.logout,className:"button",id:"logout"}),l.a.createElement("div",{className:"custom-header"},l.a.createElement("div",{className:"ProfilePage-title"},l.a.createElement("h1",null,"Profil"),l.a.createElement("br",null)),l.a.createElement("div",{className:"ProfilePage-userInfo"},l.a.createElement("h2",null,this.state.data.name),l.a.createElement("h2",null,this.state.data.surname)),l.a.createElement("div",{className:"flexWrapper"},l.a.createElement("a",{className:"profileLink",href:"/ImageUploadProfile"},l.a.createElement("div",{className:"imageWrapper"},l.a.createElement("div",{className:"imageHover"},l.a.createElement("p",null,"Uppdatera bild")),l.a.createElement("img",{src:this.state.url,className:"addedImage",alt:"test"})))),l.a.createElement("div",{className:"ProfilePage-wrapper"},l.a.createElement("div",{className:"ProfilePage-listlinks"},l.a.createElement("a",{className:"profileLink",href:"/ProfileDog"},l.a.createElement("button",{className:"button",id:"profileLinks"},"Mina Hundar")),l.a.createElement("a",{className:"profileLink",href:"/WorkoutLogg"},l.a.createElement("button",{className:"button",id:"profileLinks"},"Tr\xe4ningslogg")))))),l.a.createElement(O,null))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).logout=a.logout.bind(Object(h.a)(Object(h.a)(a))),a.state={data:[],id:[],image:[],url:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"logout",value:function(){b.auth().signOut().then(function(e){window.location.href="/"}).catch(function(e){console.log(e)})}},{key:"componentDidMount",value:function(){var e=this;b.auth().onAuthStateChanged(function(t){b.auth().onAuthStateChanged(function(t){var a=b.auth().currentUser.uid,n=b.storage().ref("test/"+a+".jpg");n.getDownloadURL().then(function(t){console.log(t),e.setState({url:t})}),console.log(n),e.setState({id:a.uid}),b.firestore().collection("dog").where("userID","==",a).get().then(function(t){var a=[];t.forEach(function(e){var t=e.data(),n=t.name,l=t.breed,i=t.size,r=t.weight,o=t.userID,s=t.image;a.push({id:e.id,doc:e,name:n,breed:l,size:i,weight:r,userID:o,image:s})}),e.setState({data:a})})})})}},{key:"render",value:function(){var e=this;return console.log(this.state.url),l.a.createElement("div",{className:"App-profileDog"},l.a.createElement("section",{className:"ProfileDogPage"},l.a.createElement("div",{className:"custom-headerDog"},l.a.createElement("div",{className:"ProfileDogPage-title"},l.a.createElement("h1",null,"MINA HUNDAR"),l.a.createElement("br",null))),l.a.createElement("div",{className:"ProfileDogPage-wrapper"},this.state.data.map(function(t){return l.a.createElement("div",{className:"flexWrapper"},l.a.createElement("div",{className:"imageWrapper"},l.a.createElement("a",{className:"profileLink",href:"/ImageUpload"},l.a.createElement("div",{className:"imageHover"},l.a.createElement("p",null,"Uppdatera bild"))),l.a.createElement("img",{src:e.state.url,className:"addedImage",alt:"test"})),l.a.createElement("ul",{className:"ProfileDogPage-list",key:t.id},l.a.createElement("h2",null,t.name),l.a.createElement("li",null,t.breed),l.a.createElement("li",null,t.size),l.a.createElement("li",null,t.weight)))}))),l.a.createElement(O,null))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("ul",{className:"workoutPage-list",key:this.props.id},l.a.createElement("h3",{className:"listName"},this.props.name),l.a.createElement("li",{className:"listType"},this.props.category),l.a.createElement("li",null,l.a.createElement("h4",null,"Syfte:"),this.props.purpose),l.a.createElement("li",null,l.a.createElement("h4",null,"Material:"),this.props.material),l.a.createElement("li",null,l.a.createElement("h4",null,"Beskrivning:"),this.props.description)))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){if(a.setState({type:e}),console.log(a.state.type),a.state.type){var t=a.state.type;b.firestore().collection("trainingprogram").where("category","==",t).onSnapshot(a.getCollection)}},a.handleReload=function(){window.location.href="/WorkoutBank"},a.getCollection=function(e){var t=[];e.forEach(function(e){var a=e.data(),n=a.name,l=a.category,i=a.purpose,r=a.description,o=a.material;t.push({key:e.id,doc:e,name:n,category:l,material:o,purpose:i,description:r})}),a.setState({data:t})},a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.state={data:[],type:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){b.firestore().collection("trainingprogram").onSnapshot(this.getCollection)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("section",{className:"workoutPage"},l.a.createElement("div",{className:"workoutPage-wrapper"},l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"\xd6vningsbank")),l.a.createElement("div",{className:"filterWrapper"},l.a.createElement("h2",null,"FILTRERA"),l.a.createElement("ul",null,l.a.createElement("li",{onClick:this.handleChange.bind(this,"R\xf6rlighet")},"R\xf6rlighet"),l.a.createElement("li",{onClick:this.handleChange.bind(this,"Balans")},"Balans"),l.a.createElement("li",{onClick:this.handleChange.bind(this,"Stabilitet")},"Stabilitet"),l.a.createElement("li",{onClick:this.handleReload},"Alla"))),this.state.data.map(function(e){return l.a.createElement(N,{key:e.id,id:e.id,name:e.name,category:e.category,purpose:e.purpose,material:e.material,description:e.description})}))),l.a.createElement(O,null))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChangeImage=a.handleChangeImage.bind(Object(h.a)(Object(h.a)(a))),a.handleChangeUploadImage=a.handleChangeUploadImage.bind(Object(h.a)(Object(h.a)(a))),a.state={image:null,url:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleChangeImage",value:function(e){var t=document.querySelector("img"),a=document.querySelector("input[type=file]").files[0],n=new FileReader;if(n.addEventListener("load",function(){t.src=n.result},!1),a&&n.readAsDataURL(a),e.target.files[0]){var l=e.target.files[0];this.setState({image:l})}}},{key:"handleChangeUploadImage",value:function(e){e.preventDefault();var t=this.state.image;b.auth().onAuthStateChanged(function(e){var a=b.auth().currentUser.uid,n={customMetadata:{id:a}},l=b.storage().ref(),i=l.child("profileimage/"+a+".jpg").put(t,n);return console.log(i),i.on("state_changed",function(e){},function(e){console.log(e)},function(){l.child("profileimage/"+a+".jpg").getDownloadURL().then(function(e){console.log(e),alert("Document successfully written!"),window.location.href="/Profile"})})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("section",{className:"ImageUpload"},l.a.createElement("div",{className:"ImageUpload-wrapper"},l.a.createElement("div",{className:"ImageUpload-title"},l.a.createElement("h1",null,"Ladda upp bild"),l.a.createElement("br",null)),l.a.createElement("div",{className:"ImageUpload-form"},l.a.createElement("label",{for:"file"},l.a.createElement("span",{className:"imgUpload"})),l.a.createElement("input",{className:"imageInput",onChange:this.handleChangeImage,type:"file",name:"file",id:"file"}),l.a.createElement("img",Object(d.a)({src:this.state.url,className:"addedImage",alt:" Preview"},"src","data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")),l.a.createElement("button",{onClick:this.handleChangeUploadImage,className:"button"},"Klar")))),l.a.createElement(O,null))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleReset=a.handleReset.bind(Object(h.a)(Object(h.a)(a))),a.losenord=a.losenord.bind(Object(h.a)(Object(h.a)(a))),a.state={emailReset:"",user:{user:!1}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;b.auth().onAuthStateChanged(function(t){console.log(t),t?(e.setState({user:!0}),console.log("inloggad")):console.log("ej loggad")})}},{key:"losenord",value:function(e){e.preventDefault(),b.auth().sendPasswordResetEmail(this.state.emailReset).then(function(e){window.location.href="/"}).catch(function(e){alert("Du m\xe5ste fylla i en mailadress")})}},{key:"handleReset",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"StartPage-wrapper"},l.a.createElement(E,null),l.a.createElement("form",{class:"resetForm"},l.a.createElement("h1",{class:"reset"},"\xc5terst\xe4ll ditt l\xf6senord"),l.a.createElement("input",{value:this.state.emailReset,onChange:this.handleReset,id:"resetfield",placeholder:"mailadress",type:"emailReset",name:"emailReset"}),l.a.createElement("button",{onClick:this.losenord,id:"resetbutton",className:"smallLinkButton"},"\xc5terst\xe4ll"))))}}]),t}(n.Component),P=a(50),I=a(52),S=a(51),U=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("span",{className:"logoSpan"},"Woofout"),l.a.createElement(P.a,null,l.a.createElement(I.a,null,l.a.createElement(S.a,{path:"/",component:v,exact:!0}),l.a.createElement(S.a,{path:"/Registration",component:j}),l.a.createElement(S.a,{path:"/Profile",component:k}),l.a.createElement(S.a,{path:"/WorkoutBank",component:A}),l.a.createElement(S.a,{path:"/RegistrationDog",component:y}),l.a.createElement(S.a,{path:"/ProfileDog",component:C}),l.a.createElement(S.a,{path:"/ResetPassword",component:R}),l.a.createElement(S.a,{path:"/ImageUploadProfile",component:D}),l.a.createElement(S.a,{path:"/ImageUpload",component:w}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.1c164736.chunk.js.map