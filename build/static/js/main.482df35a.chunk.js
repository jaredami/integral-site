(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(35)},,,,,,function(e,t,n){},,function(e,t,n){var a={"./beige-circle.png":21,"./blue-circle.png":22,"./green-circle.png":23,"./orange-circle.png":24,"./purple-circle.png":25,"./red-circle.png":26,"./turquoise-circle.png":27,"./yellow-circle.png":28};function r(e){var t=o(e);return n(t)}function o(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=20},function(e,t,n){e.exports=n.p+"static/media/beige-circle.c7e2c051.png"},function(e,t,n){e.exports=n.p+"static/media/blue-circle.f8510e61.png"},function(e,t,n){e.exports=n.p+"static/media/green-circle.a246e40c.png"},function(e,t,n){e.exports=n.p+"static/media/orange-circle.6624eacb.png"},function(e,t,n){e.exports=n.p+"static/media/purple-circle.47d3ae16.png"},function(e,t,n){e.exports=n.p+"static/media/red-circle.76abbd8d.png"},function(e,t,n){e.exports=n.p+"static/media/turquoise-circle.6024db70.png"},function(e,t,n){e.exports=n.p+"static/media/yellow-circle.8c743b4a.png"},function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),i=n.n(o),c=(n(18),n(2)),l=n(3),s=n(5),u=n(4),p=n(6),d=n(1),h=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={hoveredColor:"none"},n.StageInfo={none:{stage:"",name:""},beige:{stage:"Stage 1: Beige",name:"Survival Sense"},purple:{stage:"Stage 2: Purple",name:"Tribal Order"},red:{stage:"Stage 3: Red",name:"Power Self"},blue:{stage:"Stage 4: Blue",name:"Absolute Order"},orange:{stage:"Stage 5: Orange",name:"Enterprising Self"},green:{stage:"Stage 6: Green",name:"Egalitarian Order"},yellow:{stage:"Stage 7: Yellow",name:"Integrated Self"},turquoise:{stage:"Stage 8: Turquoise",name:"Global Order"}},n.getStageInfo=n.getStageInfo.bind(Object(d.a)(Object(d.a)(n))),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.color!==e.color&&this.setState({hoveredColor:this.props.color})}},{key:"getStageInfo",value:function(){var e=this.state.hoveredColor;return r.a.createElement("div",null,r.a.createElement("h1",null,this.StageInfo["".concat(e)].stage),r.a.createElement("h2",null,this.StageInfo["".concat(e)].name))}},{key:"render",value:function(){return r.a.createElement("div",{className:"color-info"},this.getStageInfo())}}]),t}(a.Component),g=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).spacing=2*Math.PI/8,n.start=225*Math.PI/180,n.radius=300,n.xcenter=window.innerWidth/2,n.ycenter=400,n.step=.05,n.intervalTime=100,n.state={hoveredColor:"none",topVal:0,leftVal:0},n.getTop=n.getTop.bind(Object(d.a)(Object(d.a)(n))),n.getLeft=n.getLeft.bind(Object(d.a)(Object(d.a)(n))),n.handleMouseEnter=n.handleMouseEnter.bind(Object(d.a)(Object(d.a)(n))),n.handleMouseLeave=n.handleMouseLeave.bind(Object(d.a)(Object(d.a)(n))),n.moveit=n.moveit.bind(Object(d.a)(Object(d.a)(n))),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.moveit,this.intervalTime),console.log("test")}},{key:"componentDidUpdate",value:function(){this.start=225*Math.PI/180}},{key:"moveit",value:function(){var e=this;document.querySelectorAll(".color-circle").forEach(function(t){var n=parseFloat(t.dataset.pos)+e.step;t.setAttribute("data-pos",n);var a=Math.floor(e.ycenter+e.radius*Math.sin(n));t.style.top=a+"px";var r=Math.floor(e.xcenter+e.radius*Math.cos(n));t.style.left=r+"px"})}},{key:"getTop",value:function(){return this.start=this.start+this.spacing,Math.floor(this.ycenter+this.radius*Math.sin(this.start))}},{key:"getLeft",value:function(){return Math.floor(this.xcenter+this.radius*Math.cos(this.start))}},{key:"handleMouseEnter",value:function(e){this.setState({hoveredColor:e.target.name}),document.querySelector(".color-info").style.opacity=1,clearInterval(this.interval)}},{key:"handleMouseLeave",value:function(e){this.setState({hoveredColor:"none"}),document.querySelector(".color-info").style.opacity=0,this.interval=setInterval(this.moveit,this.intervalTime)}},{key:"render",value:function(){var e=this,t=["beige","purple","red","blue","orange","green","yellow","turquoise"].map(function(t){e.start=e.start+e.spacing;var a=Math.floor(e.ycenter+e.radius*Math.sin(e.start)),o=Math.floor(e.xcenter+e.radius*Math.cos(e.start));return r.a.createElement("img",{className:"color-circle",name:t,key:t,"data-pos":e.start,src:n(20)("./".concat(t,"-circle.png")),alt:t,style:{top:a,left:o},onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave})});return r.a.createElement("div",null,r.a.createElement("div",null,t),r.a.createElement(h,{color:this.state.hoveredColor}))}}]),t}(a.Component),f=(n(29),n(11)),v=n.n(f),m=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v.a,null,r.a.createElement(g,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,2,1]]]);
//# sourceMappingURL=main.482df35a.chunk.js.map