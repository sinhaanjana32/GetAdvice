(this.webpackJsonpadvice=this.webpackJsonpadvice||[]).push([[0],{293:function(e,t,a){},294:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),i=a(65),o=a.n(i),l=a(66),r=a(67),s=a(71),u=a(70),d=a(68),m=a.n(d),v=a(69),p=a.n(v),b=(a(293),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={advice:""},e.fetchAdvice=function(){m.a.get("https://api.adviceslip.com/advice").then((function(t){var a=t.data.slip.advice;e.setState({advice:a})})).catch((function(e){console.log(e)}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.fetchAdvice()}},{key:"render",value:function(){var e=this,t=this.state.advice;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"app"},c.a.createElement(p.a,{style:{position:"absolute",opacity:"1"},params:{particles:{number:{value:160,density:{enable:!1}},size:{value:3,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:250,duration:2,size:0,opacity:0},repulse:{distance:400,duration:4}}}}}),c.a.createElement("div",{className:"card"},c.a.createElement("h1",{className:"heading"},t),c.a.createElement("button",{className:"Button",onClick:function(){return e.fetchAdvice()}},c.a.createElement("span",null,"Give Me Advice")))))}}]),a}(c.a.Component));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))},72:function(e,t,a){e.exports=a(294)}},[[72,1,2]]]);
//# sourceMappingURL=main.052c863d.chunk.js.map