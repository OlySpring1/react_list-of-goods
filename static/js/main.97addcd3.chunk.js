(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(7),c=n.n(a),s=n(2),l=n(3),u=n(5),i=n(4),g=(n(13),n(1)),p=function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={goods:Object(g.a)(t.props.goods),count:1,toggle:!0},t.reverse=function(){t.setState((function(t){return{goods:Object(g.a)(t.goods).reverse()}}))},t.sort=function(){t.setState((function(t){var e=t.goods;return t.toggle?{goods:Object(g.a)(e).sort((function(t,e){return t.localeCompare(e)})),toggle:!1}:{goods:Object(g.a)(e).sort((function(t,e){return e.localeCompare(t)})),toggle:!0}}))},t.reset=function(){t.setState({goods:t.props.goods,count:1,toggle:!0})},t.sortLength=function(){t.setState((function(t){var e=t.goods;return t.toggle?{goods:Object(g.a)(e).sort((function(t,e){return t.length-e.length})),toggle:!1}:{goods:Object(g.a)(e).sort((function(t,e){return e.length-t.length})),toggle:!0}}))},t.selectGoodsLength=function(e){t.setState({count:e})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=Object(g.a)(Array(10).keys()),n=this.state,o=n.goods,a=n.count;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,o.filter((function(t){return t.length>=a})).map((function(t){return r.a.createElement("li",{key:t},t)}))),r.a.createElement("button",{type:"button",onClick:this.reverse},"Reverse"),r.a.createElement("button",{type:"button",onClick:this.sort},"Sort by alphabet "),r.a.createElement("button",{type:"button",onClick:this.reset},"Reset"),r.a.createElement("button",{type:"button",onClick:this.sortLength},"Sort by length"),r.a.createElement("select",{value:a,onChange:function(e){return t.selectGoodsLength(e.target.value)}},e.map((function(t){return r.a.createElement("option",{value:t+1,key:t+1},t+1)}))))}}]),n}(r.a.Component),f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={isToggleOn:!1},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Goods"),this.state.isToggleOn?r.a.createElement(p,{goods:f}):r.a.createElement("button",{type:"button",onClick:function(){return t.setState({isToggleOn:!0})}},"Start"))}}]),n}(r.a.Component);c.a.render(r.a.createElement(h,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.97addcd3.chunk.js.map