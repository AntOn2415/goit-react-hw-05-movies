"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[478],{5412:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7689),a=r(1087),c="MoviesListItem_movieLink__7wLUU",s=r(184),u=function(e){var t=e.movie,r=(0,n.TH)(),u="/"===r.pathname?"/movies/".concat(t.id):"".concat(t.id);return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:u,state:{from:r.pathname},className:c,children:t.title||t.name})})},i="MoviesList_movieList__8BnEE",o=function(e){var t=e.movies;return(0,s.jsx)("ul",{className:i,children:t.map((function(e){return(0,s.jsx)(u,{movie:e},e.id)}))})}},6478:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(5861),a=r(9439),c=r(4687),s=r.n(c),u=r(2791),i=r(7596),o=r(608),h=r(9983),l=r(6355),p={searchForm:"Searchbar_searchForm__Bt5yh",searchInput:"Searchbar_searchInput__+BnhG",searchButton:"Searchbar_searchButton__8lE-T",searchLabel:"Searchbar_searchLabel__yveFe"},f=r(184);var v=function(e){var t=e.onSubmit,r=(0,u.useState)(""),n=(0,a.Z)(r,2),c=n[0],s=n[1],o=(0,u.useState)(""),v=(0,a.Z)(o,2),m=v[0],d=v[1];return(0,f.jsx)("div",{children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()?c!==m?(t(c),s(""),d(c)):i.Am.info("Sorry, the result of this request is already in front of you, try another way"):i.Am.info("Please enter a search query")},className:p.searchForm,children:[(0,f.jsx)("input",{type:"text",name:"searchQuery",value:c,onChange:function(e){s(e.currentTarget.value.toLowerCase())},autoComplete:"off",autoFocus:!0,placeholder:"Search movie",className:p.searchInput}),(0,f.jsxs)("button",{type:"submit",className:p.searchButton,children:[(0,f.jsx)(h.Pd.Provider,{value:{color:"#007bff",size:20},children:(0,f.jsx)(l.U41,{className:p.searchIcon})}),(0,f.jsx)("label",{className:p.searchLabel,children:"Search"})]})]})})},m=r(6673),d=r(5412),y=(r(5462),function(){var e=(0,u.useState)(""),t=(0,a.Z)(e,2),r=t[0],c=t[1],h=(0,u.useState)((function(){return JSON.parse(localStorage.getItem("searchedMovies"))||[]})),l=(0,a.Z)(h,2),p=l[0],y=l[1],x=(0,u.useState)(!1),g=(0,a.Z)(x,2),w=g[0],_=g[1];(0,u.useEffect)((function(){localStorage.setItem("searchedMovies",JSON.stringify(p))}),[p]),(0,u.useEffect)((function(){function e(){return(e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,(0,o.z1)(r);case 4:t=e.sent,y(t),0===t.length&&i.Am.info("No movies found."),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(0),new Error("Failed to search movies");case 12:return e.prev=12,_(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))).apply(this,arguments)}""!==r&&function(){e.apply(this,arguments)}()}),[r]);return(0,f.jsxs)("div",{children:[(0,f.jsx)(v,{onSubmit:function(e){c(e)}}),w?(0,f.jsx)(m.a,{}):(0,f.jsx)(d.Z,{movies:p})]})})},608:function(e,t,r){r.d(t,{xc:function(){return f},Y5:function(){return l},Hx:function(){return m},wr:function(){return u},Jn:function(){return y},z1:function(){return o}});var n=r(5861),a=r(4687),c=r.n(a),s=r(1243).Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGFjODFjMzk0ODNkOGVmMmY5N2ZkNTBjNjA4NmQ1NyIsInN1YiI6IjY0OGYzM2NiYzNjODkxMDBhZTUxODllMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sy6yeDv4hwTPYW8QyN_kvYlj0SfCrm-aR769hvjNTqI"}});function u(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("trending/all/day?language=en-US");case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function o(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("movie/".concat(t,"?language=en-US"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Failed to fetch details for movie with ID: ".concat(t));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("movie/".concat(t,"/credits?language=en-US"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("movie/".concat(t,"/reviews?language=en-US&page=1"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var y=function(e){return e?"https://image.tmdb.org/t/p/original".concat(e):null}}}]);
//# sourceMappingURL=478.b5a07720.chunk.js.map