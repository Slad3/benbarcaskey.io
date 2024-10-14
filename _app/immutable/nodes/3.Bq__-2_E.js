import{s as G,n as y,o as Oe,b as we,q as Se,y as Le}from"../chunks/scheduler.BrnuHscI.js";import{S as J,i as Q,e as v,c as b,y as V,o as R,g as _,d as u,u as k,a as E,v as w,w as S,n as h,l as g,x as L,A as Ee,s as C,f as P,k as M,q as W,m as K,z as B,t as O,b as A,h as d,j,C as Ae}from"../chunks/index.CCEzZINS.js";import{A as Ce,f as Te,P as Pe,L as F,H as Ie,C as Re,e as U,I as Ue,c as q,a as ne,d as Y,b as De}from"../chunks/Projects.DAp7gFMq.js";const He=!1,Me=He,ye=Me,Ne=!0,Dt=Object.freeze(Object.defineProperty({__proto__:null,csr:ye,prerender:Ne},Symbol.toStringTag,{value:"Module"}));function je(c){let e,s='<h1 class="sectionTitle">About This Page</h1> <p>While a resume is an official document of my professional skillset, this is a more complete overview of my professional skillset including my publications, job/professional experience, accomplishments, and list of technical skills.</p> <a href="https://drive.google.com/file/d/1iQ9R-nilxRHqlYO5YnH2pc66Vfd4dgBK/view?usp=sharing" target="_blank" rel="noopener noreferrer"><h2>Link to my Official Resume</h2></a>';return{c(){e=v("div"),e.innerHTML=s,this.h()},l(l){e=b(l,"DIV",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-1l8nmz5"&&(e.innerHTML=s),this.h()},h(){R(e,"class","block about svelte-nek32g")},m(l,t){_(l,e,t)},p:y,i:y,o:y,d(l){l&&u(e)}}}class Be extends J{constructor(e){super(),Q(this,e,null,je,G,{})}}function se(c,e,s){const l=c.slice();return l[3]=e[s].title,l[4]=e[s].conference,l[5]=e[s].date,l[6]=e[s].notes,l}function re(c,e,s){const l=c.slice();return l[9]=e[s],l}function oe(c,e,s){const l=c.slice();return l[3]=e[s].title,l[4]=e[s].conference,l[5]=e[s].date,l[6]=e[s].notes,l}function ae(c,e,s){const l=c.slice();return l[9]=e[s],l}function ce(c){let e,s="Notes:",l,t,r=U(c[6]),n=[];for(let o=0;o<r.length;o+=1)n[o]=ie(ae(c,r,o));return{c(){e=v("h4"),e.textContent=s,l=C();for(let o=0;o<n.length;o+=1)n[o].c();t=M()},l(o){e=b(o,"H4",{"data-svelte-h":!0}),V(e)!=="svelte-2hc3l3"&&(e.textContent=s),l=P(o);for(let a=0;a<n.length;a+=1)n[a].l(o);t=M()},m(o,a){_(o,e,a),_(o,l,a);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(o,a);_(o,t,a)},p(o,a){if(a&2){r=U(o[6]);let i;for(i=0;i<r.length;i+=1){const f=ae(o,r,i);n[i]?n[i].p(f,a):(n[i]=ie(f),n[i].c(),n[i].m(t.parentNode,t))}for(;i<n.length;i+=1)n[i].d(1);n.length=r.length}},d(o){o&&(u(e),u(l),u(t)),B(n,o)}}}function ie(c){let e,s,l=c[9]+"",t;return{c(){e=v("p"),s=O("- "),t=O(l)},l(r){e=b(r,"P",{});var n=E(e);s=A(n,"- "),t=A(n,l),n.forEach(u)},m(r,n){_(r,e,n),d(e,s),d(e,t)},p(r,n){n&2&&l!==(l=r[9]+"")&&j(t,l)},d(r){r&&u(e)}}}function qe(c){let e,s,l=c[3]+"",t,r,n,o,a,i=c[4]+"",f,$,p,m,I=c[5]+"",N,X,T=c[6].length>0&&ce(c);return{c(){e=v("div"),s=v("h1"),t=O(l),r=C(),n=v("div"),o=v("div"),a=v("p"),f=O(i),$=C(),p=v("div"),m=v("p"),N=O(I),X=C(),T&&T.c(),this.h()},l(H){e=b(H,"DIV",{class:!0});var D=E(e);s=b(D,"H1",{class:!0});var Z=E(s);t=A(Z,l),Z.forEach(u),r=P(D),n=b(D,"DIV",{class:!0});var z=E(n);o=b(z,"DIV",{class:!0});var x=E(o);a=b(x,"P",{});var ee=E(a);f=A(ee,i),ee.forEach(u),x.forEach(u),$=P(z),p=b(z,"DIV",{class:!0});var te=E(p);m=b(te,"P",{});var le=E(m);N=A(le,I),le.forEach(u),te.forEach(u),z.forEach(u),X=P(D),T&&T.l(D),D.forEach(u),this.h()},h(){R(s,"class","publicationTitle"),R(o,"class","conferenceTitle svelte-140d2o5"),R(p,"class","corner"),R(n,"class","publicationTitleBar svelte-140d2o5"),R(e,"class","pub svelte-140d2o5")},m(H,D){_(H,e,D),d(e,s),d(s,t),d(e,r),d(e,n),d(n,o),d(o,a),d(a,f),d(n,$),d(n,p),d(p,m),d(m,N),d(e,X),T&&T.m(e,null)},p(H,D){D&2&&l!==(l=H[3]+"")&&j(t,l),D&2&&i!==(i=H[4]+"")&&j(f,i),D&2&&I!==(I=H[5]+"")&&j(N,I),H[6].length>0?T?T.p(H,D):(T=ce(H),T.c(),T.m(e,null)):T&&(T.d(1),T=null)},d(H){H&&u(e),T&&T.d()}}}function Ve(c){let e,s,l;return e=new Y({props:{$$slots:{default:[qe]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment),s=C()},l(t){w(e.$$.fragment,t),s=P(t)},m(t,r){S(e,t,r),_(t,s,r),l=!0},p(t,r){const n={};r&65538&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){t&&u(s),L(e,t)}}}function fe(c){let e,s;return e=new q({props:{span:6,$$slots:{default:[Ve]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment)},l(l){w(e.$$.fragment,l)},m(l,t){S(e,l,t),s=!0},p(l,t){const r={};t&65538&&(r.$$scope={dirty:t,ctx:l}),e.$set(r)},i(l){s||(h(e.$$.fragment,l),s=!0)},o(l){g(e.$$.fragment,l),s=!1},d(l){L(e,l)}}}function Fe(c){let e,s,l=U(c[1].slice(0,2)),t=[];for(let n=0;n<l.length;n+=1)t[n]=fe(oe(c,l,n));const r=n=>g(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=M()},l(n){for(let o=0;o<t.length;o+=1)t[o].l(n);e=M()},m(n,o){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(n,o);_(n,e,o),s=!0},p(n,o){if(o&2){l=U(n[1].slice(0,2));let a;for(a=0;a<l.length;a+=1){const i=oe(n,l,a);t[a]?(t[a].p(i,o),h(t[a],1)):(t[a]=fe(i),t[a].c(),h(t[a],1),t[a].m(e.parentNode,e))}for(W(),a=l.length;a<t.length;a+=1)r(a);K()}},i(n){if(!s){for(let o=0;o<l.length;o+=1)h(t[o]);s=!0}},o(n){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)g(t[o]);s=!1},d(n){n&&u(e),B(t,n)}}}function ze(c){let e;return{c(){e=O("Show All Publications")},l(s){e=A(s,"Show All Publications")},m(s,l){_(s,e,l)},d(s){s&&u(e)}}}function Ge(c){let e;return{c(){e=O("Show Less Publications")},l(s){e=A(s,"Show Less Publications")},m(s,l){_(s,e,l)},d(s){s&&u(e)}}}function Je(c){let e;function s(r,n){return r[0]?Ge:ze}let l=s(c),t=l(c);return{c(){e=v("h1"),t.c()},l(r){e=b(r,"H1",{});var n=E(e);t.l(n),n.forEach(u)},m(r,n){_(r,e,n),t.m(e,null)},p(r,n){l!==(l=s(r))&&(t.d(1),t=l(r),t&&(t.c(),t.m(e,null)))},d(r){r&&u(e),t.d()}}}function Qe(c){let e,s,l,t;return e=new ne({props:{class:"material-icons",on:!0}}),l=new ne({props:{class:"material-icons"}}),{c(){k(e.$$.fragment),s=C(),k(l.$$.fragment)},l(r){w(e.$$.fragment,r),s=P(r),w(l.$$.fragment,r)},m(r,n){S(e,r,n),_(r,s,n),S(l,r,n),t=!0},p:y,i(r){t||(h(e.$$.fragment,r),h(l.$$.fragment,r),t=!0)},o(r){g(e.$$.fragment,r),g(l.$$.fragment,r),t=!1},d(r){r&&u(s),L(e,r),L(l,r)}}}function We(c){let e,s;return e=new Ue({props:{slot:"icon",toggle:!0,pressed:c[0],$$slots:{default:[Qe]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment)},l(l){w(e.$$.fragment,l)},m(l,t){S(e,l,t),s=!0},p(l,t){const r={};t&1&&(r.pressed=l[0]),t&65536&&(r.$$scope={dirty:t,ctx:l}),e.$set(r)},i(l){s||(h(e.$$.fragment,l),s=!0)},o(l){g(e.$$.fragment,l),s=!1},d(l){L(e,l)}}}function Ke(c){let e,s=c[5]+"",l;return{c(){e=v("p"),l=O(s)},l(t){e=b(t,"P",{});var r=E(e);l=A(r,s),r.forEach(u)},m(t,r){_(t,e,r),d(e,l)},p(t,r){r&2&&s!==(s=t[5]+"")&&j(l,s)},d(t){t&&u(e)}}}function Ye(c){let e,s=c[4]+"",l;return{c(){e=v("p"),l=O(s)},l(t){e=b(t,"P",{});var r=E(e);l=A(r,s),r.forEach(u)},m(t,r){_(t,e,r),d(e,l)},p(t,r){r&2&&s!==(s=t[4]+"")&&j(l,s)},d(t){t&&u(e)}}}function Xe(c){let e,s,l,t;return e=new q({props:{span:3,$$slots:{default:[Ke]},$$scope:{ctx:c}}}),l=new q({props:{span:9,style:"text-align: right;",$$slots:{default:[Ye]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment),s=C(),k(l.$$.fragment)},l(r){w(e.$$.fragment,r),s=P(r),w(l.$$.fragment,r)},m(r,n){S(e,r,n),_(r,s,n),S(l,r,n),t=!0},p(r,n){const o={};n&65538&&(o.$$scope={dirty:n,ctx:r}),e.$set(o);const a={};n&65538&&(a.$$scope={dirty:n,ctx:r}),l.$set(a)},i(r){t||(h(e.$$.fragment,r),h(l.$$.fragment,r),t=!0)},o(r){g(e.$$.fragment,r),g(l.$$.fragment,r),t=!1},d(r){r&&u(s),L(e,r),L(l,r)}}}function ue(c){let e,s="Notes:",l,t,r=U(c[6]),n=[];for(let o=0;o<r.length;o+=1)n[o]=$e(re(c,r,o));return{c(){e=v("h4"),e.textContent=s,l=C();for(let o=0;o<n.length;o+=1)n[o].c();t=M()},l(o){e=b(o,"H4",{"data-svelte-h":!0}),V(e)!=="svelte-2hc3l3"&&(e.textContent=s),l=P(o);for(let a=0;a<n.length;a+=1)n[a].l(o);t=M()},m(o,a){_(o,e,a),_(o,l,a);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(o,a);_(o,t,a)},p(o,a){if(a&2){r=U(o[6]);let i;for(i=0;i<r.length;i+=1){const f=re(o,r,i);n[i]?n[i].p(f,a):(n[i]=$e(f),n[i].c(),n[i].m(t.parentNode,t))}for(;i<n.length;i+=1)n[i].d(1);n.length=r.length}},d(o){o&&(u(e),u(l),u(t)),B(n,o)}}}function $e(c){let e,s,l=c[9]+"",t;return{c(){e=v("p"),s=O("- "),t=O(l)},l(r){e=b(r,"P",{});var n=E(e);s=A(n,"- "),t=A(n,l),n.forEach(u)},m(r,n){_(r,e,n),d(e,s),d(e,t)},p(r,n){n&2&&l!==(l=r[9]+"")&&j(t,l)},d(r){r&&u(e)}}}function Ze(c){let e,s,l=c[3]+"",t,r,n,o,a;n=new F({props:{style:"padding: 2px",$$slots:{default:[Xe]},$$scope:{ctx:c}}});let i=c[6].length>0&&ue(c);return{c(){e=v("div"),s=v("h1"),t=O(l),r=C(),k(n.$$.fragment),o=C(),i&&i.c(),this.h()},l(f){e=b(f,"DIV",{class:!0});var $=E(e);s=b($,"H1",{});var p=E(s);t=A(p,l),p.forEach(u),r=P($),w(n.$$.fragment,$),o=P($),i&&i.l($),$.forEach(u),this.h()},h(){R(e,"class","pub svelte-140d2o5")},m(f,$){_(f,e,$),d(e,s),d(s,t),d(e,r),S(n,e,null),d(e,o),i&&i.m(e,null),a=!0},p(f,$){(!a||$&2)&&l!==(l=f[3]+"")&&j(t,l);const p={};$&65538&&(p.$$scope={dirty:$,ctx:f}),n.$set(p),f[6].length>0?i?i.p(f,$):(i=ue(f),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},i(f){a||(h(n.$$.fragment,f),a=!0)},o(f){g(n.$$.fragment,f),a=!1},d(f){f&&u(e),L(n),i&&i.d()}}}function xe(c){let e,s,l;return e=new Y({props:{$$slots:{default:[Ze]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment),s=C()},l(t){w(e.$$.fragment,t),s=P(t)},m(t,r){S(e,t,r),_(t,s,r),l=!0},p(t,r){const n={};r&65538&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){t&&u(s),L(e,t)}}}function pe(c){let e,s;return e=new q({props:{span:6,$$slots:{default:[xe]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment)},l(l){w(e.$$.fragment,l)},m(l,t){S(e,l,t),s=!0},p(l,t){const r={};t&65538&&(r.$$scope={dirty:t,ctx:l}),e.$set(r)},i(l){s||(h(e.$$.fragment,l),s=!0)},o(l){g(e.$$.fragment,l),s=!1},d(l){L(e,l)}}}function et(c){let e,s,l=U(c[1].slice(2,c[1].length)),t=[];for(let n=0;n<l.length;n+=1)t[n]=pe(se(c,l,n));const r=n=>g(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=M()},l(n){for(let o=0;o<t.length;o+=1)t[o].l(n);e=M()},m(n,o){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(n,o);_(n,e,o),s=!0},p(n,o){if(o&2){l=U(n[1].slice(2,n[1].length));let a;for(a=0;a<l.length;a+=1){const i=se(n,l,a);t[a]?(t[a].p(i,o),h(t[a],1)):(t[a]=pe(i),t[a].c(),h(t[a],1),t[a].m(e.parentNode,e))}for(W(),a=l.length;a<t.length;a+=1)r(a);K()}},i(n){if(!s){for(let o=0;o<l.length;o+=1)h(t[o]);s=!0}},o(n){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)g(t[o]);s=!1},d(n){n&&u(e),B(t,n)}}}function tt(c){let e,s;return e=new F({props:{$$slots:{default:[et]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment)},l(l){w(e.$$.fragment,l)},m(l,t){S(e,l,t),s=!0},p(l,t){const r={};t&65538&&(r.$$scope={dirty:t,ctx:l}),e.$set(r)},i(l){s||(h(e.$$.fragment,l),s=!0)},o(l){g(e.$$.fragment,l),s=!1},d(l){L(e,l)}}}function lt(c){let e,s,l,t,r,n;return e=new F({props:{$$slots:{default:[Fe]},$$scope:{ctx:c}}}),l=new Ie({props:{style:`color: whitesmoke;\r
                     background-color: rgba(28, 28, 28, 0.8);`,$$slots:{icon:[We],default:[Je]},$$scope:{ctx:c}}}),r=new Re({props:{$$slots:{default:[tt]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment),s=C(),k(l.$$.fragment),t=C(),k(r.$$.fragment)},l(o){w(e.$$.fragment,o),s=P(o),w(l.$$.fragment,o),t=P(o),w(r.$$.fragment,o)},m(o,a){S(e,o,a),_(o,s,a),S(l,o,a),_(o,t,a),S(r,o,a),n=!0},p(o,a){const i={};a&65538&&(i.$$scope={dirty:a,ctx:o}),e.$set(i);const f={};a&65537&&(f.$$scope={dirty:a,ctx:o}),l.$set(f);const $={};a&65538&&($.$$scope={dirty:a,ctx:o}),r.$set($)},i(o){n||(h(e.$$.fragment,o),h(l.$$.fragment,o),h(r.$$.fragment,o),n=!0)},o(o){g(e.$$.fragment,o),g(l.$$.fragment,o),g(r.$$.fragment,o),n=!1},d(o){o&&(u(s),u(t)),L(e,o),L(l,o),L(r,o)}}}function nt(c){let e,s="Publications / Presentations",l,t,r,n;function o(i){c[2](i)}let a={style:"background-color: transparent",$$slots:{default:[lt]},$$scope:{ctx:c}};return c[0]!==void 0&&(a.open=c[0]),t=new Pe({props:a}),we.push(()=>Ee(t,"open",o)),{c(){e=v("h1"),e.textContent=s,l=C(),k(t.$$.fragment),this.h()},l(i){e=b(i,"H1",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-xht6hl"&&(e.textContent=s),l=P(i),w(t.$$.fragment,i),this.h()},h(){R(e,"class","sectionTitle")},m(i,f){_(i,e,f),_(i,l,f),S(t,i,f),n=!0},p(i,f){const $={};f&65539&&($.$$scope={dirty:f,ctx:i}),!r&&f&1&&(r=!0,$.open=i[0],Se(()=>r=!1)),t.$set($)},i(i){n||(h(t.$$.fragment,i),n=!0)},o(i){g(t.$$.fragment,i),n=!1},d(i){i&&(u(e),u(l)),L(t,i)}}}function st(c){let e,s,l;return s=new Ce({props:{multiple:!0,$$slots:{default:[nt]},$$scope:{ctx:c}}}),{c(){e=v("div"),k(s.$$.fragment),this.h()},l(t){e=b(t,"DIV",{class:!0});var r=E(e);w(s.$$.fragment,r),r.forEach(u),this.h()},h(){R(e,"class","block")},m(t,r){_(t,e,r),S(s,e,null),l=!0},p(t,[r]){const n={};r&65539&&(n.$$scope={dirty:r,ctx:t}),s.$set(n)},i(t){l||(h(s.$$.fragment,t),l=!0)},o(t){g(s.$$.fragment,t),l=!1},d(t){t&&u(e),L(s)}}}function rt(c,e,s){let l=!1,t=[];Oe(async()=>{s(1,t=await Te("publications"))});function r(n){l=n,s(0,l)}return[l,t,r]}class ot extends J{constructor(e){super(),Q(this,e,rt,st,G,{})}}const at=""+new URL("../assets/awsIcon.BmQ0CxOb.png",import.meta.url).href,ct=""+new URL("../assets/javaIcon.CliyTApr.png",import.meta.url).href,it=""+new URL("../assets/linuxIcon.qv_H7zrM.png",import.meta.url).href,ft=""+new URL("../assets/pythonIcon.B-dpO3MO.png",import.meta.url).href,ut=""+new URL("../assets/rustIcon.DBFud1CI.png",import.meta.url).href,$t=""+new URL("../assets/typescriptIcon.DwfpNOHv.png",import.meta.url).href;function _e(c,e,s){const l=c.slice();return l[3]=e[s],l}function he(c,e,s){const l=c.slice();return l[6]=e[s],l}function me(c,e,s){const l=c.slice();return l[3]=e[s],l}function ge(c,e,s){const l=c.slice();return l[6]=e[s],l}function pt(c){let e,s;return{c(){e=v("img"),this.h()},l(l){e=b(l,"IMG",{class:!0,alt:!0,src:!0}),this.h()},h(){R(e,"class","icon svelte-qaxv9c"),R(e,"alt","Icon of "+c[3]),Le(e.src,s=c[1][c[3]].iconURL)||R(e,"src",s)},m(l,t){_(l,e,t)},p:y,d(l){l&&u(e)}}}function de(c){let e,s=c[6]+"",l;return{c(){e=v("li"),l=O(s)},l(t){e=b(t,"LI",{});var r=E(e);l=A(r,s),r.forEach(u)},m(t,r){_(t,e,r),d(e,l)},p:y,d(t){t&&u(e)}}}function _t(c){let e,s,l=c[3]+"",t,r,n,o=c[1][c[3]].iconURL&&pt(c),a=U(c[1][c[3]].subSkills),i=[];for(let f=0;f<a.length;f+=1)i[f]=de(ge(c,a,f));return{c(){e=v("h1"),o&&o.c(),s=v("span"),t=O(l),r=C(),n=v("ul");for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=b(f,"H1",{});var $=E(e);o&&o.l($),s=b($,"SPAN",{class:!0});var p=E(s);t=A(p,l),p.forEach(u),$.forEach(u),r=P(f),n=b(f,"UL",{});var m=E(n);for(let I=0;I<i.length;I+=1)i[I].l(m);m.forEach(u),this.h()},h(){R(s,"class","skillTitle svelte-qaxv9c")},m(f,$){_(f,e,$),o&&o.m(e,null),d(e,s),d(s,t),_(f,r,$),_(f,n,$);for(let p=0;p<i.length;p+=1)i[p]&&i[p].m(n,null)},p(f,$){if(f[1][f[3]].iconURL&&o.p(f,$),$&2){a=U(f[1][f[3]].subSkills);let p;for(p=0;p<a.length;p+=1){const m=ge(f,a,p);i[p]?i[p].p(m,$):(i[p]=de(m),i[p].c(),i[p].m(n,null))}for(;p<i.length;p+=1)i[p].d(1);i.length=a.length}},d(f){f&&(u(e),u(r),u(n)),o&&o.d(),B(i,f)}}}function ht(c){let e,s,l;return e=new Y({props:{style:"padding: 10px;",$$slots:{default:[_t]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment),s=C()},l(t){w(e.$$.fragment,t),s=P(t)},m(t,r){S(e,t,r),_(t,s,r),l=!0},p(t,r){const n={};r&8192&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){t&&u(s),L(e,t)}}}function ve(c){let e,s;return e=new q({props:{span:4,class:"skillCard",$$slots:{default:[ht]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment)},l(l){w(e.$$.fragment,l)},m(l,t){S(e,l,t),s=!0},p(l,t){const r={};t&8192&&(r.$$scope={dirty:t,ctx:l}),e.$set(r)},i(l){s||(h(e.$$.fragment,l),s=!0)},o(l){g(e.$$.fragment,l),s=!1},d(l){L(e,l)}}}function mt(c){let e,s,l=U(Object.keys(c[1]).splice(0,6)),t=[];for(let n=0;n<l.length;n+=1)t[n]=ve(me(c,l,n));const r=n=>g(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=M()},l(n){for(let o=0;o<t.length;o+=1)t[o].l(n);e=M()},m(n,o){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(n,o);_(n,e,o),s=!0},p(n,o){if(o&2){l=U(Object.keys(n[1]).splice(0,6));let a;for(a=0;a<l.length;a+=1){const i=me(n,l,a);t[a]?(t[a].p(i,o),h(t[a],1)):(t[a]=ve(i),t[a].c(),h(t[a],1),t[a].m(e.parentNode,e))}for(W(),a=l.length;a<t.length;a+=1)r(a);K()}},i(n){if(!s){for(let o=0;o<l.length;o+=1)h(t[o]);s=!0}},o(n){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)g(t[o]);s=!1},d(n){n&&u(e),B(t,n)}}}function gt(c){let e;return{c(){e=O("Show All Skills")},l(s){e=A(s,"Show All Skills")},m(s,l){_(s,e,l)},d(s){s&&u(e)}}}function dt(c){let e;return{c(){e=O("Show Less Skills")},l(s){e=A(s,"Show Less Skills")},m(s,l){_(s,e,l)},d(s){s&&u(e)}}}function vt(c){let e;function s(r,n){return r[0]?dt:gt}let l=s(c),t=l(c);return{c(){e=v("h1"),t.c()},l(r){e=b(r,"H1",{});var n=E(e);t.l(n),n.forEach(u)},m(r,n){_(r,e,n),t.m(e,null)},p(r,n){l!==(l=s(r))&&(t.d(1),t=l(r),t&&(t.c(),t.m(e,null)))},d(r){r&&u(e),t.d()}}}function bt(c){let e,s;return{c(){e=v("img"),this.h()},l(l){e=b(l,"IMG",{class:!0,alt:!0,src:!0}),this.h()},h(){R(e,"class","icon svelte-qaxv9c"),R(e,"alt",c[1][c[3]].iconURL),Le(e.src,s=c[1][c[3]].iconURL)||R(e,"src",s)},m(l,t){_(l,e,t)},p:y,d(l){l&&u(e)}}}function be(c){let e,s=c[6]+"",l;return{c(){e=v("li"),l=O(s)},l(t){e=b(t,"LI",{});var r=E(e);l=A(r,s),r.forEach(u)},m(t,r){_(t,e,r),d(e,l)},p:y,d(t){t&&u(e)}}}function kt(c){let e,s,l,t=c[3]+"",r,n,o,a=c[1][c[3]].iconURL&&bt(c),i=U(c[1][c[3]].subSkills),f=[];for(let $=0;$<i.length;$+=1)f[$]=be(he(c,i,$));return{c(){e=v("h1"),a&&a.c(),s=C(),l=v("span"),r=O(t),n=C(),o=v("ul");for(let $=0;$<f.length;$+=1)f[$].c();this.h()},l($){e=b($,"H1",{});var p=E(e);a&&a.l(p),s=P(p),l=b(p,"SPAN",{class:!0});var m=E(l);r=A(m,t),m.forEach(u),p.forEach(u),n=P($),o=b($,"UL",{});var I=E(o);for(let N=0;N<f.length;N+=1)f[N].l(I);I.forEach(u),this.h()},h(){R(l,"class","skillTitle svelte-qaxv9c")},m($,p){_($,e,p),a&&a.m(e,null),d(e,s),d(e,l),d(l,r),_($,n,p),_($,o,p);for(let m=0;m<f.length;m+=1)f[m]&&f[m].m(o,null)},p($,p){if($[1][$[3]].iconURL&&a.p($,p),p&2){i=U($[1][$[3]].subSkills);let m;for(m=0;m<i.length;m+=1){const I=he($,i,m);f[m]?f[m].p(I,p):(f[m]=be(I),f[m].c(),f[m].m(o,null))}for(;m<f.length;m+=1)f[m].d(1);f.length=i.length}},d($){$&&(u(e),u(n),u(o)),a&&a.d(),B(f,$)}}}function wt(c){let e,s,l;return e=new Y({props:{style:"min-width: 300px;",$$slots:{default:[kt]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment),s=C()},l(t){w(e.$$.fragment,t),s=P(t)},m(t,r){S(e,t,r),_(t,s,r),l=!0},p(t,r){const n={};r&8192&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){t&&u(s),L(e,t)}}}function ke(c){let e,s;return e=new q({props:{span:6,class:"skillCard",$$slots:{default:[wt]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment)},l(l){w(e.$$.fragment,l)},m(l,t){S(e,l,t),s=!0},p(l,t){const r={};t&8192&&(r.$$scope={dirty:t,ctx:l}),e.$set(r)},i(l){s||(h(e.$$.fragment,l),s=!0)},o(l){g(e.$$.fragment,l),s=!1},d(l){L(e,l)}}}function St(c){let e,s,l=U(Object.keys(c[1]).splice(6,Object.keys(c[1]).length)),t=[];for(let n=0;n<l.length;n+=1)t[n]=ke(_e(c,l,n));const r=n=>g(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=M()},l(n){for(let o=0;o<t.length;o+=1)t[o].l(n);e=M()},m(n,o){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(n,o);_(n,e,o),s=!0},p(n,o){if(o&2){l=U(Object.keys(n[1]).splice(6,Object.keys(n[1]).length));let a;for(a=0;a<l.length;a+=1){const i=_e(n,l,a);t[a]?(t[a].p(i,o),h(t[a],1)):(t[a]=ke(i),t[a].c(),h(t[a],1),t[a].m(e.parentNode,e))}for(W(),a=l.length;a<t.length;a+=1)r(a);K()}},i(n){if(!s){for(let o=0;o<l.length;o+=1)h(t[o]);s=!0}},o(n){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)g(t[o]);s=!1},d(n){n&&u(e),B(t,n)}}}function Lt(c){let e,s;return e=new F({props:{$$slots:{default:[St]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment)},l(l){w(e.$$.fragment,l)},m(l,t){S(e,l,t),s=!0},p(l,t){const r={};t&8192&&(r.$$scope={dirty:t,ctx:l}),e.$set(r)},i(l){s||(h(e.$$.fragment,l),s=!0)},o(l){g(e.$$.fragment,l),s=!1},d(l){L(e,l)}}}function Et(c){let e,s,l,t,r,n;return e=new F({props:{$$slots:{default:[mt]},$$scope:{ctx:c}}}),l=new Ie({props:{style:`color: whitesmoke;\r
                 background-color: rgba(28, 28, 28, 0.8);`,$$slots:{default:[vt]},$$scope:{ctx:c}}}),r=new Re({props:{$$slots:{default:[Lt]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment),s=C(),k(l.$$.fragment),t=C(),k(r.$$.fragment)},l(o){w(e.$$.fragment,o),s=P(o),w(l.$$.fragment,o),t=P(o),w(r.$$.fragment,o)},m(o,a){S(e,o,a),_(o,s,a),S(l,o,a),_(o,t,a),S(r,o,a),n=!0},p(o,a){const i={};a&8192&&(i.$$scope={dirty:a,ctx:o}),e.$set(i);const f={};a&8193&&(f.$$scope={dirty:a,ctx:o}),l.$set(f);const $={};a&8192&&($.$$scope={dirty:a,ctx:o}),r.$set($)},i(o){n||(h(e.$$.fragment,o),h(l.$$.fragment,o),h(r.$$.fragment,o),n=!0)},o(o){g(e.$$.fragment,o),g(l.$$.fragment,o),g(r.$$.fragment,o),n=!1},d(o){o&&(u(s),u(t)),L(e,o),L(l,o),L(r,o)}}}function Ct(c){let e,s,l;function t(n){c[2](n)}let r={style:"background-color: transparent",$$slots:{default:[Et]},$$scope:{ctx:c}};return c[0]!==void 0&&(r.open=c[0]),e=new Pe({props:r}),we.push(()=>Ee(e,"open",t)),{c(){k(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,o){S(e,n,o),l=!0},p(n,o){const a={};o&8193&&(a.$$scope={dirty:o,ctx:n}),!s&&o&1&&(s=!0,a.open=n[0],Se(()=>s=!1)),e.$set(a)},i(n){l||(h(e.$$.fragment,n),l=!0)},o(n){g(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function Pt(c){let e,s,l="Skills",t,r,n;return r=new Ce({props:{multiple:!0,$$slots:{default:[Ct]},$$scope:{ctx:c}}}),{c(){e=v("div"),s=v("h1"),s.textContent=l,t=C(),k(r.$$.fragment),this.h()},l(o){e=b(o,"DIV",{class:!0});var a=E(e);s=b(a,"H1",{class:!0,"data-svelte-h":!0}),V(s)!=="svelte-9q87we"&&(s.textContent=l),t=P(a),w(r.$$.fragment,a),a.forEach(u),this.h()},h(){R(s,"class","sectionTitle"),R(e,"class","block skillsBlock svelte-qaxv9c")},m(o,a){_(o,e,a),d(e,s),d(e,t),S(r,e,null),n=!0},p(o,[a]){const i={};a&8193&&(i.$$scope={dirty:a,ctx:o}),r.$set(i)},i(o){n||(h(r.$$.fragment,o),n=!0)},o(o){g(r.$$.fragment,o),n=!1},d(o){o&&u(e),L(r)}}}function It(c,e,s){let l=!1;const t={Python:{iconURL:ft,subSkills:["Flask/Fastapi","NumPy","Pandas","MatPlotLib","Plotly","TensorFlow","SQLAlchemy"]},AWS:{iconURL:at,subSkills:["Lambda","EC2","S3","Cognito","SQS","Cloudwatch","Rekognition"]},TypeScript:{iconURL:$t,subSkills:["Vue3","Svelte (This site!)","Angular","Leaflet","Express","Raw HTML/CSS/TypeScript","React"]},Rust:{iconURL:ut,subSkills:["Wasm Development","Rocket Framework","Rocket_ws (socket.io)","Asynchronous Multithreading","Serde_json","Tokio Async"]},"Java/Kotlin":{iconURL:ct,subSkills:["DOM & Stax XML Parsing","Android Development","Jooby Microframework","Maven & Gradle","Multithreaded Workloads","JSON/CSV Parsing"]},"Other Languages / Framworks":{subSkills:["SQL (Postgres)","MongoDB","Postgres TimescaleDB","C/C++","Swift","C#"]},Linux:{iconURL:it,subSkills:["Systemctl Services","Raspberry Pi Development","GUI and terminal/SSH","Debian, Fedora, Arch","Apache & Nginx http Server","Bash Scripting"]},"Other Skills":{subSkills:["Public Speaking","Jira","Audio Production","Digital Ocean","Microsoft Azure","Microsoft Office"]}};function r(n){l=n,s(0,l)}return[l,t,r]}class Rt extends J{constructor(e){super(),Q(this,e,It,Pt,G,{})}}function Ot(c){let e,s,l,t,r,n,o,a,i,f,$;return t=new Be({}),n=new Rt({}),a=new De({}),f=new ot({}),{c(){e=v("meta"),s=C(),l=v("section"),k(t.$$.fragment),r=C(),k(n.$$.fragment),o=C(),k(a.$$.fragment),i=C(),k(f.$$.fragment),this.h()},l(p){const m=Ae("svelte-63swsw",document.head);e=b(m,"META",{name:!0,content:!0}),m.forEach(u),s=P(p),l=b(p,"SECTION",{class:!0});var I=E(l);w(t.$$.fragment,I),r=P(I),w(n.$$.fragment,I),o=P(I),w(a.$$.fragment,I),i=P(I),w(f.$$.fragment,I),I.forEach(u),this.h()},h(){document.title="Experience",R(e,"name","description"),R(e,"content","Professional Experience"),R(l,"class","svelte-7w87tm")},m(p,m){d(document.head,e),_(p,s,m),_(p,l,m),S(t,l,null),d(l,r),S(n,l,null),d(l,o),S(a,l,null),d(l,i),S(f,l,null),$=!0},p:y,i(p){$||(h(t.$$.fragment,p),h(n.$$.fragment,p),h(a.$$.fragment,p),h(f.$$.fragment,p),$=!0)},o(p){g(t.$$.fragment,p),g(n.$$.fragment,p),g(a.$$.fragment,p),g(f.$$.fragment,p),$=!1},d(p){p&&(u(s),u(l)),u(e),L(t),L(n),L(a),L(f)}}}class Ht extends J{constructor(e){super(),Q(this,e,null,Ot,G,{})}}export{Ht as component,Dt as universal};
