(this.webpackJsonpmynews=this.webpackJsonpmynews||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);a(10);var n=a(1),c=a.n(n),s=a(9),r=a.n(s),i=(a(15),a(2)),l=a(3),o=a(5),b=a(4),d=(a(16),a(0)),u=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"/",children:"NewsPanda"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"/",children:"About"})})]})})]})})})}}]),a}(n.Component),j=a(6),p=a.n(j),h=a(7),m=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,n=e.imageUrl,c=e.newsUrl;return Object(d.jsx)("div",{className:"my-3",children:Object(d.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(d.jsx)("img",{src:n,className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:t}),Object(d.jsx)("p",{className:"card-text",children:a}),Object(d.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",className:"btn btn-sm btn-dark",children:"Read More"})]})]})})}}]),a}(n.Component),v=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handlePrevClick=Object(h.a)(p.a.mark((function t(){var a,n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("previous"),a="https://newsapi.org/v2/top-headlines?country=in&apiKey=544b1919f1a648b4aba16d29cc586a15&page=".concat(e.state.page-1,"&pageSize=20"),t.next=4,fetch(a);case 4:return n=t.sent,t.next=7,n.json();case 7:c=t.sent,console.log(c),e.setState({page:e.state.page-1,articles:c.articles});case 10:case"end":return t.stop()}}),t)}))),e.handleNextClick=Object(h.a)(p.a.mark((function t(){var a,n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("next"),!(e.state.page+1>Math.ceil(e.state.totalResults/20))){t.next=4;break}t.next=13;break;case 4:return a="https://newsapi.org/v2/top-headlines?country=in&apiKey=544b1919f1a648b4aba16d29cc586a15&page=".concat(e.state.page+1,"&pageSize=20"),t.next=7,fetch(a);case 7:return n=t.sent,t.next=10,n.json();case 10:c=t.sent,console.log(c),e.setState({page:e.state.page+1,articles:c.articles});case 13:case"end":return t.stop()}}),t)}))),console.log("i am a constructor from news component"),e.state={articles:[],loading:!1,page:1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("cdm"),"https://newsapi.org/v2/top-headlines?country=in&apiKey=544b1919f1a648b4aba16d29cc586a15&pageSize=20",e.next=4,fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=544b1919f1a648b4aba16d29cc586a15&pageSize=20");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,console.log(a),this.setState({articles:a.articles,totalResults:a.totalResults});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log("render"),Object(d.jsxs)("div",{className:"container  my-4",children:[Object(d.jsx)("h2",{className:"text-center",children:"NewsPanda- Top Headlines"}),Object(d.jsx)("div",{className:"row",children:this.state.articles.map((function(e){return Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)(m,{title:e.title?e.title.slice(0,48):"",description:e.description?e.description.slice(0,88):"",imageUrl:e.urlToImage,newsUrl:e.url})},e.url)}))}),Object(d.jsxs)("div",{className:"container d-flex justify-content-between",children:[Object(d.jsx)("button",{type:"button",disabled:this.state.page<=1,class:"btn btn-dark",onClick:this.handlePrevClick,children:"\u2190Previous"}),Object(d.jsx)("button",{type:"button",disabled:this.state.page+1>Math.ceil(this.state.totalResults/20),className:"btn btn-dark",onClick:this.handleNextClick,children:"Next \u2192"})]})]})}}]),a}(n.Component),g=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)(u,{})}),Object(d.jsx)(v,{})]})}}]),a}(n.Component),x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),x()}},[[19,1,2]]]);
//# sourceMappingURL=main.7be785d0.chunk.js.map