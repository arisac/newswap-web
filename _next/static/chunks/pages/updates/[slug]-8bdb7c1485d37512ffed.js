_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"/a9y":function(e,t,n){"use strict";var a=n("/GRZ"),l=n("i2R6"),r=n("48fX"),i=n("tCBg"),s=n("T0f4");function o(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=s(e);if(t){var l=s(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return i(this,n)}}var u=n("AroE");t.__esModule=!0,t.default=void 0;var c=u(n("q1tI")),d=u(n("8Kt/")),p={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function f(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var m=function(e){r(n,e);var t=o(n);function n(){return a(this,n),t.apply(this,arguments)}return l(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||p[e]||"An unexpected error has occurred";return c.default.createElement("div",{style:v.error},c.default.createElement(d.default,null,c.default.createElement("title",null,e,": ",t)),c.default.createElement("div",null,c.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?c.default.createElement("h1",{style:v.h1},e):null,c.default.createElement("div",{style:v.desc},c.default.createElement("h2",{style:v.h2},t,"."))))}}]),n}(c.default.Component);t.default=m,m.displayName="ErrorPage",m.getInitialProps=f,m.origGetInitialProps=f;var v={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"20a2":function(e,t,n){e.exports=n("nOHt")},"Ru/n":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/updates/[slug]",function(){return n("YR1G")}])},YR1G:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return N})),n.d(t,"default",(function(){return _}));var a=n("q1tI"),l=n.n(a),r=n("7vrA"),i=n("3Z9Z"),s=n("JI6e"),o=n("20a2"),u=n("5Yp1"),c=n("b0oO"),d=n("htHT"),p=n("hAPS"),f=n("8lYe"),m=n("eomm"),v=n.n(m),g=n("9Koi"),h=l.a.createElement;function y(e){var t=e.content;return h("div",{dangerouslySetInnerHTML:{__html:t}})}var b=l.a.createElement,N=!0;function _(e){var t=e.post;e.morePosts,e.preview;if(!Object(o.useRouter)().isFallback&&(null===t||void 0===t||!t.slug))return b(v.a,{statusCode:404});var n=Object(g.a)(),a=n.t;n.i18n;return b(u.a,{pageTitle:t.title+" - "+a("global.site title")},b(c.a,null),b(d.a,null),b("section",{className:"pt-150 pb-30"},b(r.a,null,b(i.a,null,b(s.a,{lg:9},b("div",{className:"post-details-inner"},b("div",{className:"single-post-inner"},b("div",{className:"post-content"},b("div",{className:"post-details"},b("div",{className:"post-title"},b("h3",null,b("a",{href:"#"},t.title)),b("p",null,t.date)),b(y,{content:t.content})))))),b(s.a,{lg:3},b(p.a,null))))),b(f.a,null))}},eomm:function(e,t,n){e.exports=n("/a9y")},hAPS:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),r=n("9Koi"),i=l.a.createElement;t.a=function(){var e=Object(r.a)(),t=e.t;e.i18n;return i("aside",null,i("div",{className:"single-sidebar-widget mb-30"},i("div",{className:"sidebar-title"},i("h5",null,t("global.quick links"))),i("div",{className:"sidebar-body latest-post"},i("ul",null,i("li",null,i("div",{className:"latest-post-wrap "},i("div",{className:"latest-post-body media-body"},i("p",null,i("a",{href:"/updates"},t("pages.updates")))))),i("li",null,i("div",{className:"latest-post-wrap "},i("div",{className:"latest-post-body media-body"},i("p",null,i("a",{href:"/faq"},t("pages.faq")))))),i("li",null,i("div",{className:"latest-post-wrap "},i("div",{className:"latest-post-body media-body"},i("p",null,i("a",{href:"/tools"},t("pages.tools"))))))))))}}},[["Ru/n",0,2,1,3]]]);