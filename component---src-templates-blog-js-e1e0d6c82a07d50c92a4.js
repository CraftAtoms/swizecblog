(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{214:function(e,n,t){"use strict";t.r(n),t(239);var a=t(1),r=t.n(a),o=t(219),i=t.n(o),c=t(226),l=function(e){return e.test?r.a.createElement("span",null,e.text):r.a.createElement(i.a,{to:e.url},e.text)};n.default=function(e){e.data;var n=e.pageContext,t=n.group,a=n.index,o=n.first,u=n.last,s=n.pageCount,d=a-1==1?"":(a-1).toString(),m=(a+1).toString();return console.log(t),r.a.createElement(c.a,null,r.a.createElement("h4",null,s," Pages"),t.map(function(e){var n=e.node;return r.a.createElement("div",{key:n.slug,className:"post",style:{marginBottom:50}},r.a.createElement(i.a,{to:"/post/"+n.slug},r.a.createElement("h3",null,n.title)),r.a.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:n.excerpt}}),n.date)}),r.a.createElement("div",{className:"previousLink"},r.a.createElement(l,{test:"/blog/"+o,url:d,text:"Go to Previous Page"})),r.a.createElement("div",{className:"nextLink"},r.a.createElement(l,{test:u,url:"/blog/"+m,text:"Go to Next Page"})))}},220:function(e,n,t){var a;e.exports=(a=t(222))&&a.default||a},221:function(e){e.exports={data:{site:{siteMetadata:{title:"Swizec Blog"}}}}},222:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(20),i=t.n(o),c=t(46),l=t(4),u=function(e){var n=e.location,t=l.a.getResourcesForPathname(n.pathname);return r.a.createElement(c.a,{location:n,pageResources:t})};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=u},223:function(e,n,t){},226:function(e,n,t){"use strict";var a=t(228),r=t.n(a),o=t(221),i=t(1),c=t.n(i),l=t(20),u=t.n(l),s=t(229),d=t.n(s),m=t(219),g=t.n(m),p=t(230),f=(t(220),c.a.createContext({})),v=function(e){return c.a.createElement(f.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};function E(){var e=r()(["\nmargin: 0 3rem 4.5rem ;\n\n"]);return E=function(){return e},e}function h(){var e=r()(["\ntext-decoration: none;\ncolor: black;\n:hover {\n    text-decoration: underline;\n    color: #7c51a1;\n  }\nh3 {\n  display: inline;\n  font-size: 30px;\n\n}\n\n"]);return h=function(){return e},e}function x(){var e=r()(["\ntext-decoration: none;\ntext-align: right;\nmargin: 0 .5rem 0 .5rem;\npadding: 10px;\nbackground-color: ;\ncolor: #7c51a1;\n:hover {\n    color: #fff;\n    background-color: #7c51a1;\n\n  }\n"]);return x=function(){return e},e}function y(){var e=r()(["\n\nmargin: 3rem auto;\nmax-width: 960px;\npadding: 1.25rem 1rem;\n\nul {\n  margin: 0 0 0px 0;\n  list-style: none;\n  float: right;\n}\n"]);return y=function(){return e},e}v.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func},t(223);var b=function(e){var n=e.children;return e.data,c.a.createElement(v,{query:"755544856",render:function(e){return c.a.createElement("div",null,c.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),c.a.createElement(w,null,c.a.createElement(N,null,c.a.createElement(q,{to:"/"},c.a.createElement("h3",null,"Swizec Teller")),c.a.createElement("ul",null,c.a.createElement(S,{to:"/Business/"},"Business"),c.a.createElement(S,{to:"/Personal/"},"Personal"),c.a.createElement(S,{to:"/Technical/"},"Technical"),c.a.createElement(S,{to:"/Thoughts/"},"Thoughts"))),n))},data:o})};b.propTypes={children:u.a.node.isRequired},n.a=b;var k,w=((k=p.a.div(y())).displayName="Wrapper",k),S=function(){var e=Object(p.a)(g.a)(x());return e.displayName="Pages",e}(),q=function(){var e=Object(p.a)(g.a)(h());return e.displayName="List",e}(),N=function(){var e=p.a.div(E());return e.displayName="Head",e}()},233:function(e,n,t){"use strict";var a=t(13);e.exports=function(){var e=a(this),n="";return e.global&&(n+="g"),e.ignoreCase&&(n+="i"),e.multiline&&(n+="m"),e.unicode&&(n+="u"),e.sticky&&(n+="y"),n}},239:function(e,n,t){"use strict";t(240);var a=t(13),r=t(233),o=t(17),i=/./.toString,c=function(e){t(21)(RegExp.prototype,"toString",e,!0)};t(14)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?c(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=i.name&&c(function(){return i.call(this)})},240:function(e,n,t){t(17)&&"g"!=/./g.flags&&t(18).f(RegExp.prototype,"flags",{configurable:!0,get:t(233)})}}]);
//# sourceMappingURL=component---src-templates-blog-js-e1e0d6c82a07d50c92a4.js.map