(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6nGu":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("ERkP"),a=n.n(r),o=n("Wbzz"),i=n("mtjc"),l=n("RZwI"),c=n.n(l);function u(e){var t=e.subsectionName,n=e.subsectionSlug;return a.a.createElement("ol",{className:c.a.breadcrumbs},a.a.createElement("li",{className:c.a.breadcrumb_item},a.a.createElement(o.Link,{to:"/",className:c.a.breadcrumb_link},a.a.createElement("span",{className:c.a.breadcrumb_homepage_text},"Strona Główna"),a.a.createElement("span",{className:c.a.breadcrumb_homepage_logo},a.a.createElement(i.a,{className:c.a.svg_logo})))),a.a.createElement("li",{className:c.a.breadcrumb_item},a.a.createElement(o.Link,{to:"/"+n,className:c.a.breadcrumb_link},t)))}},"87SZ":function(e,t,n){n("rmZQ");var r=n("NE/D"),a=n("R+/2"),o=n("szBF");e.exports=function(e){return r(a(o(e).replace(/[^\w\s-]/g,"-").toLowerCase()),"-")}},Cs0p:function(e,t){e.exports=function(e){return null==e?"":""+e}},"NE/D":function(e,t,n){n("BPcy"),n("rmZQ"),n("qCVI");var r=n("Cs0p"),a=n("rz+Z"),o=String.prototype.trim;e.exports=function(e,t){return e=r(e),!t&&o?o.call(e):(t=a(t),e.replace(new RegExp("^"+t+"+|"+t+"+$","g"),""))}},"R+/2":function(e,t,n){n("rmZQ");var r=n("NE/D");e.exports=function(e){return r(e).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()}},Z7PA:function(e,t,n){n("rmZQ");var r=n("Cs0p");e.exports=function(e){return r(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}},cI1W:function(e,t,n){"use strict";n("kDPR")("small",(function(e){return function(){return e(this,"small","","")}}))},"lM+4":function(e,t,n){n("rmZQ");var r=n("Cs0p");e.exports=function(e){return r(e).toLowerCase().replace(/(?:^|\s|-)\S/g,(function(e){return e.toUpperCase()}))}},prEu:function(e,t,n){"use strict";n.r(t);n("yIC7");var r=n("ERkP"),a=n.n(r),o=n("6c1n"),i=n.n(o),l=n("VF98"),c=n("YQgG"),u=n("6nGu"),s=n("6VhE"),p=n.n(s),m=n("BKFK"),d=n.n(m),f=n("sweJ"),h=n("g96L"),y=n("Wbzz"),g=n("87SZ"),b=n.n(g),v=n("lM+4"),E=n.n(v),_=n("isoz");function w(e){var t=e.name,n=e.className,r=b()(t),o=E()(t);return a.a.createElement(y.Link,{to:"/tag/"+r,className:[_.button,n].join(" ")},o)}n("cI1W");var N=n("rIBa"),S=n.n(N),x=n("x+QU"),k=n.n(x);n("w/LC");function C(e,t){return 0===e?t-1:e-1}function R(e,t){return e===t-1?0:e+1}function O(e,t){if(!(t.length<2))return t[C(e,t.length)]}function I(e,t){if(!(t.length<2))return t[R(e,t.length)]}var M=k()({loader:function(){return n.e(11).then(n.bind(null,"KOVK"))},loading:function(){return null},delay:200}),L=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={isLightboxOpen:!1,photoIndex:0},n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this,t=this.props.images,n=this.state,r=n.isLightboxOpen,o=n.photoIndex;if(!t||0===t.length)return null;var l=t.map((function(t,n){return a.a.createElement("button",{className:S.a.image_wrapper,type:"button",onClick:function(){e.setState({isLightboxOpen:!0,photoIndex:n})},key:n},a.a.createElement(i.a,{fluid:t.childImageSharp.small,alt:"Picture of the dish",className:S.a.gallery_image,key:n}))})),c=t.map((function(e){return e.childImageSharp.large.src}));return a.a.createElement("div",{className:S.a.gallery_container},a.a.createElement("h2",{className:S.a.gallery_header},"Galeria"),a.a.createElement("div",{className:S.a.gallery},l),r&&a.a.createElement(M,{mainSrc:c[o],prevSrc:O(o,c),nextSrc:I(o,c),onCloseRequest:function(){return e.setState({isLightboxOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:C(o,c.length)})},onMoveNextRequest:function(){return e.setState({photoIndex:R(o,c.length)})}}))},r}(r.Component);function P(e){var t=e.data,n=t.strapiRecipe,r=t.gallery,o=(n.tags||[]).map((function(e){return a.a.createElement(w,{name:e.name,key:e.slug,className:d.a.post_tag})}));return a.a.createElement(f.a,null,a.a.createElement("div",{className:p.a.layout},a.a.createElement(h.a,{render:function(e){var t=e.siteUrl;return a.a.createElement(l.Helmet,null,a.a.createElement("title",null,n.title),a.a.createElement("meta",{name:"description",content:n.title}),n.cover&&a.a.createElement("meta",{property:"og:image",content:t+n.cover.childImageSharp.fluid.src}),a.a.createElement("meta",{property:"og:type",content:"article"}),a.a.createElement("meta",{property:"article:section",content:n.category.name}),(n.tags||[]).map((function(e,t){return a.a.createElement("meta",{property:"article:tag",content:e.name,key:t})})))}}),a.a.createElement("section",{className:p.a.main},a.a.createElement("article",{className:d.a.post},a.a.createElement("div",{className:d.a.post_intro},a.a.createElement("div",{className:d.a.post_preamble},a.a.createElement(u.a,{subsectionName:n.category.name,subsectionSlug:n.category.slug}),a.a.createElement(c.a,null,n.preparationTime)),a.a.createElement("h1",{className:d.a.post_title},n.title),a.a.createElement("div",{className:d.a.post_headline,dangerouslySetInnerHTML:{__html:n.parsedHeadline.childMarkdownRemark.html}}),a.a.createElement("div",{className:d.a.post_tags},o)),n.cover&&a.a.createElement(i.a,{fluid:n.cover.childImageSharp.fluid,alt:"Photography of the food from the recipe.",className:d.a.cover_image}),a.a.createElement("div",{className:d.a.post_body},a.a.createElement("div",{className:d.a.post_ingredients,dangerouslySetInnerHTML:{__html:n.parsedIngredients.childMarkdownRemark.html}}),a.a.createElement("div",{className:d.a.post_directions,dangerouslySetInnerHTML:{__html:n.parsedDirections.childMarkdownRemark.html}})),a.a.createElement(L,{images:r.nodes})))))}n.d(t,"default",(function(){return P})),n.d(t,"pageQuery",(function(){return T}));var T="2609651184"},"rz+Z":function(e,t,n){var r=n("Z7PA");e.exports=function(e){return null==e?"\\s":e.source?e.source:"["+r(e)+"]"}},szBF:function(e,t,n){n("Ph8W"),n("rmZQ"),n("T7D0");var r=n("Cs0p"),a="ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž",o="aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";a+=a.toUpperCase(),o=(o+=o.toUpperCase()).split(""),a+="ß",o.push("ss"),e.exports=function(e){return r(e).replace(/.{1}/g,(function(e){var t=a.indexOf(e);return-1===t?e:o[t]}))}},"x+QU":function(e,t,n){"use strict";n("PN9k"),n("yKDW"),n("4oWw"),n("LnO1"),n("3eMz"),n("dtAy"),n("DB+v"),n("r0id"),n("/CC1"),n("cM8k"),n("RwQI"),n("XjK0"),n("SCO9");var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n("ERkP"),c=n("aWzz"),u=[],s=[];function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function m(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var a=p(e[r]);a.loading?t.loading=!0:(t.loaded[r]=a.loaded,t.error=a.error),n.push(a.promise),a.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function d(e,t){return l.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function f(e,t){var p,m;if(!t.loading)throw new Error("react-loadable requires a `loading` component");var f=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:d,webpack:null,modules:null},t),h=null;function y(){return h||(h=e(f.loader)),h.promise}return u.push(y),"function"==typeof f.webpack&&s.push((function(){if(e=f.webpack,"object"===r(n.m)&&e().every((function(e){return void 0!==e&&void 0!==n.m[e]})))return y();var e})),m=p=function(t){function n(r){a(this,n);var i=o(this,t.call(this,r));return i.retry=function(){i.setState({error:null,loading:!0,timedOut:!1}),h=e(f.loader),i._loadModule()},y(),i.state={error:h.error,pastDelay:!1,timedOut:!1,loading:h.loading,loaded:h.loaded},i}return i(n,t),n.preload=function(){return y()},n.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},n.prototype._loadModule=function(){var e=this;if(this.context.loadable&&Array.isArray(f.modules)&&f.modules.forEach((function(t){e.context.loadable.report(t)})),h.loading){"number"==typeof f.delay&&(0===f.delay?this.setState({pastDelay:!0}):this._delay=setTimeout((function(){e.setState({pastDelay:!0})}),f.delay)),"number"==typeof f.timeout&&(this._timeout=setTimeout((function(){e.setState({timedOut:!0})}),f.timeout));var t=function(){e._mounted&&(e.setState({error:h.error,loaded:h.loaded,loading:h.loading}),e._clearTimeouts())};h.promise.then((function(){t()})).catch((function(e){t()}))}},n.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},n.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},n.prototype.render=function(){return this.state.loading||this.state.error?l.createElement(f.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?f.render(this.state.loaded,this.props):null},n}(l.Component),p.contextTypes={loadable:c.shape({report:c.func.isRequired})},m}function h(e){return f(p,e)}h.Map=function(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return f(m,e)};var y=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},t.prototype.render=function(){return l.Children.only(this.props.children)},t}(l.Component);function g(e){for(var t=[];e.length;){var n=e.pop();t.push(n())}return Promise.all(t).then((function(){if(e.length)return g(e)}))}y.propTypes={report:c.func.isRequired},y.childContextTypes={loadable:c.shape({report:c.func.isRequired}).isRequired},h.Capture=y,h.preloadAll=function(){return new Promise((function(e,t){g(u).then(e,t)}))},h.preloadReady=function(){return new Promise((function(e,t){g(s).then(e,e)}))},e.exports=h}}]);
//# sourceMappingURL=component---src-templates-post-page-index-js-8e428addf0bd5d3da577.js.map