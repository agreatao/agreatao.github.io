webpackJsonp([1],{1513:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(105),u=l(n),i=a(106),o=l(i),r=a(107),s=l(r),d=a(108),c=l(d),f=a(109),m=l(f);a(1715);var p=a(17),h=l(p),v=a(84),g=a(244),y=a(1),E=l(y),_=a(165),b=l(_),k=a(1716),N=l(k),w=a(1516),C=a(1518),P=a(551),M=function(e){function t(e){(0,o.default)(this,t);var a=(0,c.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return a.state={play:!0,detailOpen:!1},a}return(0,m.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){var e=this;(0,b.default)(this.refs.detail,"scroll",function(){(e.refs.detail.scrollY||e.refs.detail.scrollTop)>0?e.setState({detailOpen:!0}):e.setState({detailOpen:!1})})}},{key:"handleVideoToggle",value:function(){this.setState(function(e){return{play:!e.play}})}},{key:"onPlayEnd",value:function(){this.setState({play:!1})}},{key:"handleViewMore",value:function(){(0,P.scroll)({targetPositionY:30},this.refs.detail)}},{key:"render",value:function(){var e=this.props.browser,t=e.width,a=e.height,l=this.state,n=l.play,u=l.detailOpen;return h.default.createElement("div",{className:"about-page",style:{width:t,height:a}},h.default.createElement(N.default,{play:n,onPlayEnd:this.onPlayEnd.bind(this)}),h.default.createElement("div",{className:"about-wrapper"},h.default.createElement("div",{className:"about-box"+(u?"":" open"),style:{height:a,paddingTop:(a-160)/2}},h.default.createElement("h4",null,"AO XU"),h.default.createElement("p",null,"I'm ",h.default.createElement("span",null,"Web")," Developer"),h.default.createElement("div",{className:"btns"},h.default.createElement(g.Link,{className:"home-btn",to:"/home"}),h.default.createElement("a",{onClick:this.handleVideoToggle.bind(this),className:"video-play-btn"+(n?" pause":" play")})),a<1050&&h.default.createElement("a",{className:"view-more",onClick:this.handleViewMore.bind(this)},h.default.createElement("i",{className:"icon-arrow-down"}),h.default.createElement("span",null,"view more"))),h.default.createElement("div",{ref:"detail",className:"about-detail-wrapper"+(u||a>=1050?" open":""),style:{height:a}},h.default.createElement("div",{className:"about-detail"},h.default.createElement("div",{className:"detail"},h.default.createElement("h1",null,"AO XU"),h.default.createElement("h4",null,"许 骜"),h.default.createElement("div",{className:"avatar-lg"}),h.default.createElement("div",{className:"intro"},h.default.createElement("p",null,"喜爱",h.default.createElement("span",null,"猫狗"),"，喜欢玩玩游戏，喜欢",h.default.createElement("span",null,"旅游"),"，偶尔想尝试搞搞设计"),h.default.createElement("p",null,"目前身在",h.default.createElement("span",null,"杭州"),"，从事于IT行业"),h.default.createElement("p",null,"热衷于web前端开发")),h.default.createElement("div",{className:"footer-text"},h.default.createElement("span",null,"在wo眼里没什么"),"不可以"),h.default.createElement(w.AboutNav,{data:C.about_nav}),h.default.createElement("div",{className:"copyright"},"© ",(0,E.default)().format("YYYY")," Designed By Ao"))))))}}]),t}(h.default.Component);t.default=(0,v.connect)(function(e){return{browser:e.browser}})(M)},1514:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(105),u=l(n),i=a(106),o=l(i),r=a(107),s=l(r),d=a(108),c=l(d),f=a(109),m=l(f);a(1515);var p=a(17),h=l(p),v=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.active,a=e.className,l=e.length;l=l||100;var n=l||100,u=l||100,i=l>=100?22:16,o=l>=100?1.5:1;return h.default.createElement("a",{onClick:this.props.onClick,className:"avatar"+(t?" active":"")+" "+(a||""),style:{width:n,height:u,borderWidth:o}},h.default.createElement("span",{style:{fontSize:i,width:l-3,height:l-3,lineHeight:l-3+"px"}},"骜"))}}]),t}(h.default.Component);t.default=v},1515:function(e,t){},1516:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.AboutNav=t.HomeNav=t.CircleNav=t.CircleNavConnect=void 0;var n=a(69),u=l(n),i=a(105),o=l(i),r=a(106),s=l(r),d=a(107),c=l(d),f=a(108),m=l(f),p=a(109),h=l(p);a(1517);var v=a(17),g=l(v),y=a(84),E=a(244),_=a(1514),b=l(_),k=a(245),N=function(e){function t(){return(0,s.default)(this,t),(0,m.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.to,a=e.icon,l=e.title,n=e.className;return g.default.createElement(E.Link,{to:t,className:n},g.default.createElement("i",{className:"icon "+a}),g.default.createElement("text",null,l))}}]),t}(g.default.Component),w=function(e){function t(){return(0,s.default)(this,t),(0,m.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.to,a=e.icon,l=e.title,n=e.className;return g.default.createElement("a",{href:t,target:"_blank",className:n},g.default.createElement("i",{className:"icon "+a}),g.default.createElement("text",null,l))}}]),t}(g.default.Component),C=t.CircleNavConnect=function(e){function t(e){(0,s.default)(this,t);var a=(0,m.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return a.state={open:!1},a}return(0,h.default)(t,e),(0,c.default)(t,[{key:"onNavToggle",value:function(){this.setState(function(e){return{open:!e.open}})}},{key:"onBgToggle",value:function(){this.props.bgToggle()}},{key:"render",value:function(){var e=this.state.open,t=this.props,a=t.data,l=t.bg;return g.default.createElement("div",{className:"circle-nav"+(e?" open":"")},g.default.createElement("a",{className:"nav-toggle",onClick:this.onNavToggle.bind(this)},g.default.createElement("span",{className:"nav-bars"})),g.default.createElement("div",{className:"nav-menu"},a&&a.map(function(e,t){return"a"==e.tag?g.default.createElement(w,(0,u.default)({},e,{className:"menu-"+(t+1),key:t})):"link"==e.tag?g.default.createElement(N,(0,u.default)({},e,{className:"menu-"+(t+1),key:t})):null}),g.default.createElement(b.default,{length:34,active:l.show,onClick:this.onBgToggle.bind(this),className:"menu-"+((a&&a.length||0)+1)})))}}]),t}(g.default.Component);t.CircleNav=(0,y.connect)(function(e){return{bg:e.bg}},function(e){return{bgToggle:function(){return e((0,k.bgToggle)())}}})(C),t.HomeNav=function(e){function t(){return(0,s.default)(this,t),(0,m.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.data;return g.default.createElement("div",{className:"home-nav"},e&&e.map(function(e,t){return"a"==e.tag?g.default.createElement(w,(0,u.default)({},e,{key:t})):"link"==e.tag?g.default.createElement(N,(0,u.default)({},e,{key:t})):null}))}}]),t}(g.default.Component),t.AboutNav=function(e){function t(){return(0,s.default)(this,t),(0,m.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.data;return g.default.createElement("div",{className:"about-nav"},e&&e.map(function(e,t){return"link"==e.tag?g.default.createElement(N,(0,u.default)({},e,{key:t})):"a"==e.tag?g.default.createElement(w,(0,u.default)({},e,{key:t})):void 0}))}}]),t}(g.default.Component)},1517:function(e,t){},1518:function(e,t,a){"use strict";e.exports={home_nav:[{tag:"link",title:"归档",icon:"code",to:"/issues"},{tag:"link",title:"关于",icon:"user",to:"/about"},{tag:"a",title:"github",icon:"github",to:"https://github.com/agreatao"}],issues_nav:[{tag:"link",title:"返回",icon:"back",to:"/home"},{tag:"link",title:"主页",icon:"home",to:"/home"},{tag:"link",title:"关于",icon:"user",to:"/about"}],issue_nav:[{tag:"link",title:"返回",icon:"back",to:"/issues"},{tag:"link",title:"主页",icon:"home",to:"/home"},{tag:"link",title:"关于",icon:"user",to:"/about"}],about_nav:[{tag:"link",title:"主页",icon:"home",to:"/home"},{tag:"link",title:"归档",icon:"code",to:"/issues"}]}},1715:function(e,t){},1716:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(105),u=l(n),i=a(106),o=l(i),r=a(107),s=l(r),d=a(108),c=l(d),f=a(109),m=l(f);a(1717);var p=a(17),h=l(p),v=a(84),g=a(165),y=l(g),E=a(1718),_=l(E),b=function(e){function t(e){(0,o.default)(this,t);var a=(0,c.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return a.state={isPlay:!0},a}return(0,m.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){var e=this;(0,y.default)(this.refs.play,"ended",function(t){e.setState({isPlay:!1}),e.props.onPlayEnd&&e.props.onPlayEnd()})}},{key:"componentWillReceiveProps",value:function(e){var t=e.play;t!=this.props.play&&t?(this.setState({isPlay:!0}),this.refs.play.play()):t==this.props.play||t||this.refs.play.pause()}},{key:"render",value:function(){var e=this.props.browser,t=e.width,a=e.height,l=this.state.isPlay,n=Math.max(t/1920,a/1080);return h.default.createElement("div",{className:"video"+(l?" play":"")},h.default.createElement("video",{className:"video-tag",ref:"play",autoPlay:!0,muted:!0,style:{width:1920*n,height:1080*n}},h.default.createElement("source",{src:_.default,type:"video/mp4",style:{width:t,height:a}})),h.default.createElement("div",{className:"video-bg",style:{width:t,height:a}}),h.default.createElement("div",{className:"video-mask"}))}}]),t}(h.default.Component);t.default=(0,v.connect)(function(e){return{browser:e.browser}})(b)},1717:function(e,t){},1718:function(e,t,a){e.exports=a.p+"videos/play.mp4"}});