(this.webpackJsonppersonal_site=this.webpackJsonppersonal_site||[]).push([[0],{174:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(37),l=a.n(c),o=(a(72),a(2)),i=a(3),s=a(5),u=a(4),m=a(52),p=a(6),d=a(7),h=a(43),f=(a(73),a(12)),b=a(29),E=a(55),g=a.n(E),y=(a(78),a(79),a(56)),v=a.n(y),k=(a(80),a(57)),j=a.n(k),O=a(58),N=a.n(O),w=[{link:"https://github.com/santius0",label:"Github",icon:g.a},{link:"https://www.linkedin.com/in/sergio-mathurin",label:"LinkedIn",icon:v.a},{link:"https://twitter.com/dangelosaurus",label:"Twitter",icon:j.a},{link:"santius1995@gmail.com",label:"Email",icon:N.a}],C=a(59),S=a.n(C),P=function(){return r.a.createElement("section",{id:"sidebar"},r.a.createElement("section",{id:"intro"},r.a.createElement(p.b,{to:"/",className:"logo"},r.a.createElement("img",{src:S.a,alt:"me_icon"})),r.a.createElement("header",null,r.a.createElement("h2",null,"Sergio Mathurin"),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:santius1995@gmail.com"},"santius1995@gmail.com")))),r.a.createElement("section",{className:"blurb"},r.a.createElement("h2",null,"About"),r.a.createElement("p",null,"Hi, I'm Sergio. I like to build cool stuff."),r.a.createElement("ul",{className:"actions"},r.a.createElement("li",null,window.location.pathname!=="".concat("/","/resume")?r.a.createElement(p.b,{to:"/resume",className:"button"},"Learn More"):r.a.createElement(p.b,{to:"/about",className:"button"},"About Me")))),r.a.createElement("section",{id:"footer"},r.a.createElement("ul",{className:"icons"},w.map((function(e){return r.a.createElement("li",{key:e.label},r.a.createElement("a",{href:e.link},r.a.createElement(b.a,{icon:e.icon})))}))),r.a.createElement("p",{className:"copyright"},"\xa9 Sergio Mathurn ",r.a.createElement(p.b,{to:"/"},"sergiomathurin.com"),".")))},A=a(17),R=a(60),I=a.n(R),x=[{path:"/",label:"Sergio Mathurin",index:!0},{path:"/resume",label:"Resume"},{path:"/contact",label:"Contact"}],M=function(){var e=Object(n.useState)(!1),t=Object(A.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"hamburger-container"},r.a.createElement("nav",{className:"main",id:"hambuger-nav"},r.a.createElement("ul",null,a?r.a.createElement("li",{className:"menu close-menu"},r.a.createElement("div",{onClick:function(){return c(!a)},className:"menu-hover"},"\u2715")):r.a.createElement("li",{className:"menu open-menu"},r.a.createElement("div",{onClick:function(){return c(!a)},className:"menu-hover"},"\u2630")))),r.a.createElement(I.a,{right:!0,isOpen:a},r.a.createElement("ul",{className:"hamburger-ul"},x.map((function(e){return r.a.createElement("li",{key:e.label},r.a.createElement(p.b,{to:e.path,onClick:function(){return c(!a)}},r.a.createElement("h3",{className:e.index&&"index-li"},e.label)))})))))},T=function(){return r.a.createElement("header",{id:"header"},r.a.createElement("h1",{className:"index-link"},x.filter((function(e){return e.index})).map((function(e){return r.a.createElement(p.b,{key:e.label,to:e.path},e.label)}))),r.a.createElement("nav",{className:"links"},r.a.createElement("ul",null,x.filter((function(e){return!e.index})).map((function(e){return r.a.createElement("li",{key:e.label},r.a.createElement(p.b,{to:e.path},e.label))})))),r.a.createElement(M,null))},L=(a(175),function(){Object(d.f)().pathname;return null}),W=function(){var e=Object(d.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},D=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).fullPage=!1,e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(W,null),r.a.createElement(f.a,{titleTemplate:"%s | Sergio Mathurin",defaultTitle:"Sergio Mathurin"}),r.a.createElement("div",{id:"wrapper"},r.a.createElement(T,null),r.a.createElement("div",{id:"main"},this.props.children),this.props.fullPage?null:r.a.createElement(P,null)))}}]),a}(n.Component),J=(n.Component,function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement(f.a,{title:"404"}),r.a.createElement("h1",null,"Page Not Found."),r.a.createElement("p",null,"Return to ",r.a.createElement(p.b,{to:"/"},"index"),"."))}}]),a}(n.Component)),B=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("article",{className:"degree-container"},r.a.createElement("header",null,r.a.createElement("h4",{className:"degree"},this.props.data.degree),r.a.createElement("p",{className:"school"},r.a.createElement("a",{href:this.props.data.link},this.props.data.school),", ",this.props.data.year)))}}]),a}(n.Component),H=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).data=[],e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"education"},r.a.createElement("div",{className:"link-to",id:"education"}),r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,"Education")),this.props.data.map((function(e){return r.a.createElement(B,{data:e,key:e.school})})))}}]),a}(n.Component),U=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("article",{className:"jobs-container"},r.a.createElement("header",null,r.a.createElement("h4",null,r.a.createElement("a",{href:this.props.data.link},this.props.data.company," ")," - ",this.props.data.position),r.a.createElement("p",{className:"daterange"}," ",this.props.data.daterange)),r.a.createElement("ul",{className:"points"},this.props.data.points.map((function(e){return r.a.createElement("li",{key:e},e)}))))}}]),a}(n.Component),F=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"experience"},r.a.createElement("div",{className:"link-to",id:"experience"}),r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,"Experience")),this.props.data.map((function(e){return r.a.createElement(U,{data:e,key:e.company})})))}}]),a}(n.Component),Y=a(23),q=a(14),G=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("button",{className:"skillbutton ".concat(this.props.active[this.props.label]?"skillbutton-active":""),type:"button",onClick:function(){return e.props.handleClick(e.props.label)}},this.props.label)}}]),a}(n.Component),V=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).categories=[],e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.category,a=e.competency,n=e.title,c={background:this.props.categories.filter((function(e){return t.includes(e.name)})).map((function(e){return e.color}))[0]},l=Object(q.a)(Object(q.a)({},c),{},{width:"".concat(String(Math.min(100,Math.max(a/5*100,0))),"%")});return r.a.createElement("div",{className:"skillbar clearfix"},r.a.createElement("div",{className:"skillbar-title",style:c},r.a.createElement("span",null,n)),r.a.createElement("div",{className:"skillbar-bar",style:l}),r.a.createElement("div",{className:"skill-bar-percent"},a," / 5"))}}]),a}(n.Component),_=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChildClick=function(e){n.setState((function(t){var a=Object.keys(t.buttons).reduce((function(a,n){return Object(q.a)(Object(q.a)({},a),{},Object(Y.a)({},n,e===n&&!t.buttons[n]))}),{});return a.All=!Object.keys(t.buttons).some((function(e){return a[e]})),{buttons:a}}))},n.state=function(e){var t=e.categories,a=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(q.a)(Object(q.a)({},e),{},Object(Y.a)({},t,!1))}),{All:!0}),skills:a}}({categories:e.categories,skills:e.skills}),n}return Object(i.a)(a,[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,a){return e.state.buttons[a]?a:t}),"All");return this.state.skills.sort((function(e,t){var a=0;return e.competency>t.competency?a=-1:e.competency<t.competency?a=1:e.category[0]>t.category[0]?a=-1:e.category[0]<t.category[0]||e.title>t.title?a=1:e.title<t.title&&(a=-1),a})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return r.a.createElement(V,{categories:e.props.categories,data:t,key:t.title})}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return r.a.createElement(G,{label:t,key:t,active:e.state.buttons,handleClick:e.handleChildClick})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"skills"},r.a.createElement("div",{className:"link-to",id:"skills"}),r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,"Skills"),r.a.createElement("p",null,"Here is a *mostly* honest overview of my skills.")),r.a.createElement("div",{className:"skill-button-container"},this.getButtons()),r.a.createElement("div",{className:"skill-row-container"},this.getRows()))}}]),a}(n.Component);_.defaultProps={skills:[],categories:[]};var $=_,z=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).last=!1,e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("li",{className:"course-container"},r.a.createElement("a",{href:this.props.data.link},r.a.createElement("h4",{className:"course-number"},this.props.data.number,":"),r.a.createElement("p",{className:"course-name"},this.props.data.title)),!this.props.last&&r.a.createElement("div",{className:"course-dot"},r.a.createElement("p",{className:"course-name"}," \u2022")))}}]),a}(n.Component),K=(n.Component,function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"references"},r.a.createElement("div",{className:"link-to",id:"references"}),r.a.createElement("div",{className:"title"},r.a.createElement(p.b,{to:"/contact"},r.a.createElement("h3",null,"References are available upon request"))))}}]),a}(n.Component)),Q=[{school:"University of the West Indies",degree:"B.S.c Computer Science",link:"https://sta.uwi.edu/",year:2019}],X=[{company:"University of the West Indies",position:"Software Architect, Software Engineer.",link:"https://sta.uwi.edu/",daterange:"April 2019 - Present",points:["Software Architect and Engineer on fully funded research project from the University of the West Indies in the field of fingerprint analysis, classification and matching.","Designed and engineered multiple tools and underlying dynamic libraries for the acquisition and analysis of finger print via external and internal hardware using C, C++, Python and Java.","Designed platform architecture model for both cloud and desktop based solutions.","As one of two primary developers undertaking a large project, was required to learn to new technologies and skills both quickly and constantly."]},{company:"University of the West Indies, Campus Information Technology Services",position:"SOFTWARE DEVELOPER INTERN - ENTERPRISE APPLICATIONS TEAM",link:"https://sta.uwi.edu/cits/",daterange:"June 2018 - Sept. 2018",points:["Developed an API creation tool to securely serve student and staff data via OAuth2 authorization."]},{company:"Aeropost and UPS Trinidad and Tobago",position:"CUSTOMER SERVICE REPRESENTATIVE",link:"https://aeropost.com/  |  https://www.ups.com/tt/en/Home.page",daterange:"September 2016 - 2018",points:["Handled all customer queries and logistical issues regarding packages and customer accounts."]},{company:"Republic Bank Ltd",position:"CLERICAL ASSISTANT",link:"https://www.republictt.com/",daterange:"February 2016 - March 2016",points:["Numerous supporting functions, some of which included transaction processing, account balancing and overdrawn account closures."]},{company:"Plymouth/Bethesda Heritage Development Foundation",position:"PROGRAMMING AND COMPUTER LITERACY TUTOR",link:"N/A",daterange:"July 2015 - January 2016",points:["Constructed lessons and taught basic programming and problem solving skills to teenagers in the age range of 12-15 years old."]}],Z=a(66),ee=[{title:"C#",competency:2,category:["Programming Languages","C#"]},{title:"Java",competency:4,category:["Programming Languages","Java"]},{title:"C",competency:5,category:["Programming Languages","C"]},{title:"C++",competency:5,category:["Programming Languages","C++"]},{title:"Python",competency:5,category:["Programming Languages","Python","Scripting"]},{title:"Javascript",competency:3,category:["Web Development","Programming Languages","Javascript"]},{title:"Django",competency:4,category:["Web Development","Python"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Ionic",competency:1,category:["Web Development","Javascript"]},{title:"Laravel",competency:1,category:["Web Development","Javascript"]},{title:"Bash",competency:4,category:["Tools","Programming Languages","Scripting"]},{title:"PHP",competency:4,category:["Programming Languages","PHP"]},{title:"Linux",competency:5,category:["OS"]},{title:"Windows",competency:5,category:["OS"]},{title:"Unreal Engine",competency:2,category:["C++","Game Engine"]},{title:"Unity",competency:2,category:["C#","Game Engine"]}].map((function(e){return Object(q.a)(Object(q.a)({},e),{},{category:e.category.sort()})})),te=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],ae=Object(Z.a)(new Set(ee.reduce((function(e,t){var a=t.category;return e.concat(a)}),[]))).sort().map((function(e,t){return{name:e,color:te[t]}})),ne=["Education","Experience","Skills","References"],re=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(D,null,r.a.createElement(f.a,{title:"Resume"}),r.a.createElement("article",{className:"post",id:"resume"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,r.a.createElement(p.b,{to:"resume"},"Resume")),r.a.createElement("div",{className:"link-container"},ne.map((function(e){return r.a.createElement("h4",{key:e},r.a.createElement("a",{href:"#".concat(e.toLowerCase())},e))}))))),r.a.createElement(H,{data:Q}),r.a.createElement(F,{data:X}),r.a.createElement($,{skills:ee,categories:ae}),r.a.createElement(K,null)))}}]),a}(n.Component),ce=a(61),le=a.n(ce),oe=(a(87),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"cell-container"},r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h3",null,r.a.createElement("a",{href:this.props.data.link},this.props.data.title)),r.a.createElement("time",{className:"published"},le()(this.props.data.date).format("MMMM, YYYY"))),r.a.createElement("a",{href:this.props.data.link,className:"image"},r.a.createElement("img",{src:"https://www.essence.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-29-at-5.12.15-PM-1920x1080.png?width=1280&height=720"})),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,this.props.data.desc))))}}]),a}(n.Component)),ie=[{title:"Nearest Dollar",subtitle:"2015 BVP Hackathon",link:"/projects/nearestdollar/",image:"/images/projects/nearestdollar.jpg",date:"2015-11-20",desc:"Built for a social impact hackathon. NearestDollar connected to your bank accounts, credit cards, or debit cards and rounded up your purchases to donate the balance to the charity of your choice."},{title:"Harvest",subtitle:"Won 3rd. place in 2015 Techcrunch Disrupt SF Hackathon",link:"https://devpost.com/software/harvest",image:"/images/projects/harvest.jpg",date:"2015-09-20",desc:"Won ~ $7000 in prizes for an advanced, low cost monitoring solution for crops. Harvest was designed to catch irrigation leaks, overwatering, and nutrient deficiencies at an affordable price for the developing world."}],se=(n.Component,function(e){return/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/.test(e)||0===e.length}),ue=["hi","hello","hola","you-can-email-me-at-literally-anything! Really","well, not anything. But most things","like-this","or-this","but not this :(  ","you.can.also.email.me.with.specific.topics.like","just-saying-hi","please-work-for-us","help","admin","or-I-really-like-your-website","I'll-stop-distracting-you-now","thanks"],me=function(){var e=Object(n.useState)(0),t=Object(A.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(ue[a]),o=Object(A.a)(l,2),i=o[0],s=o[1],u=Object(n.useState)(ue[a].length),m=Object(A.a)(u,2),d=m[0],h=m[1],E=Object(n.useState)(!0),g=Object(A.a)(E,2),y=g[0],v=g[1];return function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}return function(){}}),[t])}((function(){var e=a,t=d;d-50>=ue[a].length&&(e+=1,t=0),e===ue.length?v(!1):(s(ue[e].slice(0,t)),c(e),h(t+1))}),y?50:null),r.a.createElement(D,null,r.a.createElement(f.a,{title:"Contact"}),r.a.createElement("article",{className:"post",id:"contact"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,r.a.createElement(p.b,{to:"/contact"},"Contact")))),r.a.createElement("div",{className:"email-at"},r.a.createElement("p",null,"Feel free to get in touch. You can email me at: "),r.a.createElement("div",{className:"inline-container",style:se(i)?{}:{color:"red"},onMouseEnter:function(){return v(!1)},onMouseLeave:function(){return a<ue.length&&v(!0)}},r.a.createElement("a",{href:se(i)?"mailto:santius1995@gmail.com":""},r.a.createElement("span",null,i),r.a.createElement("span",null,"@smathurin.com")))),r.a.createElement("ul",{className:"icons"},w.map((function(e){return r.a.createElement("li",{key:e.label},r.a.createElement("a",{href:e.link},r.a.createElement(b.a,{icon:e.icon})))})))))},pe=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(D,null,r.a.createElement("h1",null,"Stats"))}}]),a}(n.Component),de=a(24),he=a.n(de),fe=a(41),be=a(62),Ee=a.n(be),ge=a(42),ye=a.n(ge),ve=function(e){var t=Object.assign({},e);return r.a.createElement(p.b,t)},ke=function(){var e=Object(fe.a)(he.a.mark((function e(t){var a;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="",e.next=3,fetch(ye.a).then((function(e){return e.text()})).then((function(e){a=e}));case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),je=function(e){return e.split(/\s+/).map((function(e){return e.replace(/\W/g,"")})).filter((function(e){return e.length})).length};n.Component,n.Component;function Oe(){var e=Object(m.a)(["\nbody {\n    background-color: ",";\n    color: ",";\n    body, input, select, textarea: => ",";\n}\n"]);return Oe=function(){return e},e}var Ne=Object(h.b)(Oe(),(function(e){return"dark"===e.theme.mode?"#111":"#EEE"}),(function(e){return"dark"===e.theme.mode?"#EEE":"#111"}),(function(e){return"dark"===e.theme.mode?"#111":"#EEE"})),we=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{theme:{mode:"light"}},r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne,null),r.a.createElement(p.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:re}),r.a.createElement(d.a,{path:"/resume",component:re}),r.a.createElement(d.a,{path:"/stats",component:pe}),r.a.createElement(d.a,{path:"/contact",component:me}),r.a.createElement(d.a,{component:J,status:404})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,a){e.exports=a.p+"static/media/about.44663f8b.md"},59:function(e,t,a){e.exports=a.p+"static/media/me_icon.9c2fea80.jpg"},67:function(e,t,a){e.exports=a(174)},72:function(e,t,a){},73:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.9e2f4f33.chunk.js.map