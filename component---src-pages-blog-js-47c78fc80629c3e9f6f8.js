(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{214:function(e,t,n){"use strict";n.r(t),n(239),n(241);var a=n(1),r=n.n(a),o=n(219),i=n.n(o),l=n(226),c=function(e){return e.test?r.a.createElement("span",null,e.text):r.a.createElement(i.a,{to:e.url},e.text)};t.default=function(e){e.data;var t=e.pageContext,n=t.group,a=t.index,o=t.first,u=t.last,s=t.pageCount,d=a-1==1?"":(a-1).toString(),m=(a+1).toString();return console.log(n),r.a.createElement(l.a,null,r.a.createElement("h4",null,s," Pages"),n.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.slug,className:"post",style:{marginBottom:50}},r.a.createElement(i.a,{to:"/post/"+t.slug},r.a.createElement("h3",null,t.title)),r.a.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:t.excerpt}}),t.date)}),r.a.createElement("div",{className:"previousLink"},r.a.createElement(c,{test:"/blog/"+o,url:d,text:"Go to Previous Page"})),r.a.createElement("div",{className:"nextLink"},r.a.createElement(c,{test:u,url:"/blog/"+m,text:"Go to Next Page"})))}},220:function(e,t,n){var a;e.exports=(a=n(222))&&a.default||a},221:function(e){e.exports={data:{site:{siteMetadata:{title:"Swizec Blog"}}}}},222:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(20),i=n.n(o),l=n(46),c=n(4),u=function(e){var t=e.location,n=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:n})};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},223:function(e,t,n){},226:function(e,t,n){"use strict";var a=n(228),r=n.n(a),o=n(221),i=n(1),l=n.n(i),c=n(20),u=n.n(c),s=n(229),d=n.n(s),m=n(219),g=n.n(m),p=n(230),f=(n(220),l.a.createContext({})),v=function(e){return l.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){var e=r()(["\nmargin: 0 3rem 4.5rem ;\n\n"]);return h=function(){return e},e}function E(){var e=r()(["\ntext-decoration: none;\ncolor: black;\n:hover {\n    text-decoration: underline;\n    color: #7c51a1;\n  }\nh3 {\n  display: inline;\n  font-size: 30px;\n\n}\n\n"]);return E=function(){return e},e}function x(){var e=r()(["\ntext-decoration: none;\ntext-align: right;\nmargin: 0 .5rem 0 .5rem;\npadding: 10px;\nbackground-color: ;\ncolor: #7c51a1;\n:hover {\n    color: #fff;\n    background-color: #7c51a1;\n\n  }\n"]);return x=function(){return e},e}function y(){var e=r()(["\n\nmargin: 3rem auto;\nmax-width: 960px;\npadding: 1.25rem 1rem;\n\nul {\n  margin: 0 0 0px 0;\n  list-style: none;\n  float: right;\n}\n"]);return y=function(){return e},e}v.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func},n(223);var b=function(e){var t=e.children;return e.data,l.a.createElement(v,{query:"755544856",render:function(e){return l.a.createElement("div",null,l.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),l.a.createElement(w,null,l.a.createElement(T,null,l.a.createElement(k,{to:"/"},l.a.createElement("h3",null,"Swizec Teller")),l.a.createElement("ul",null,l.a.createElement(N,{to:"/Business/"},"Business"),l.a.createElement(N,{to:"/Personal/"},"Personal"),l.a.createElement(N,{to:"/Technical/"},"Technical"),l.a.createElement(N,{to:"/Thoughts/"},"Thoughts"))),t))},data:o})};b.propTypes={children:u.a.node.isRequired},t.a=b;var S,w=((S=p.a.div(y())).displayName="Wrapper",S),N=function(){var e=Object(p.a)(g.a)(x());return e.displayName="Pages",e}(),k=function(){var e=Object(p.a)(g.a)(E());return e.displayName="List",e}(),T=function(){var e=p.a.div(h());return e.displayName="Head",e}()},233:function(e,t,n){"use strict";var a=n(13);e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},239:function(e,t,n){"use strict";n(240);var a=n(13),r=n(233),o=n(17),i=/./.toString,l=function(e){n(21)(RegExp.prototype,"toString",e,!0)};n(14)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?l(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=i.name&&l(function(){return i.call(this)})},240:function(e,t,n){n(17)&&"g"!=/./g.flags&&n(18).f(RegExp.prototype,"flags",{configurable:!0,get:n(233)})},241:function(e,t,n){var a=Date.prototype,r=a.toString,o=a.getTime;new Date(NaN)+""!="Invalid Date"&&n(21)(a,"toString",function(){var e=o.call(this);return e==e?r.call(this):"Invalid Date"})}}]);
//# sourceMappingURL=component---src-pages-blog-js-47c78fc80629c3e9f6f8.js.map