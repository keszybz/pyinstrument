var pyinstrumentHTMLRenderer=function(){"use strict";var vt=Object.defineProperty;var At=(O,y,X)=>y in O?vt(O,y,{enumerable:!0,configurable:!0,writable:!0,value:X}):O[y]=X;var b=(O,y,X)=>(At(O,typeof y!="symbol"?y+"":y,X),X);const O="";function y(){}function X(t){return t()}function Te(){return Object.create(null)}function q(t){t.forEach(X)}function Fe(t){return typeof t=="function"}function j(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ye(t){return Object.keys(t).length===0}function Je(t,...e){if(t==null)return y;const i=t.subscribe(...e);return i.unsubscribe?()=>i.unsubscribe():i}function ce(t,e,i){t.$$.on_destroy.push(Je(e,i))}function f(t,e){t.appendChild(e)}function N(t,e,i){t.insertBefore(e,i||null)}function D(t){t.parentNode&&t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function Se(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function w(){return z(" ")}function $e(){return z("")}function x(t,e,i,n){return t.addEventListener(e,i,n),()=>t.removeEventListener(e,i,n)}function Pe(t){return function(e){return e.preventDefault(),t.call(this,e)}}function De(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function c(t,e,i){i==null?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function Ke(t){return Array.from(t.childNodes)}function U(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function T(t,e,i,n){i===null?t.style.removeProperty(e):t.style.setProperty(e,i,n?"important":"")}function Q(t,e,i){t.classList[i?"add":"remove"](e)}let Y;function J(t){Y=t}function Me(){if(!Y)throw new Error("Function called outside component initialization");return Y}function We(t){Me().$$.on_mount.push(t)}function je(t){Me().$$.on_destroy.push(t)}const K=[],Le=[],ee=[],Ne=[],xe=Promise.resolve();let de=!1;function et(){de||(de=!0,xe.then(ze))}function pe(t){ee.push(t)}const me=new Set;let te=0;function ze(){const t=Y;do{for(;te<K.length;){const e=K[te];te++,J(e),tt(e.$$)}for(J(null),K.length=0,te=0;Le.length;)Le.pop()();for(let e=0;e<ee.length;e+=1){const i=ee[e];me.has(i)||(me.add(i),i())}ee.length=0}while(K.length);for(;Ne.length;)Ne.pop()();de=!1,me.clear(),J(t)}function tt(t){if(t.fragment!==null){t.update(),q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(pe)}}const ie=new Set;let I;function he(){I={r:0,c:[],p:I}}function ge(){I.r||q(I.c),I=I.p}function M(t,e){t&&t.i&&(ie.delete(t),t.i(e))}function B(t,e,i,n){if(t&&t.o){if(ie.has(t))return;ie.add(t),I.c.push(()=>{ie.delete(t),n&&(i&&t.d(1),n())}),t.o(e)}else n&&n()}function it(t,e){B(t,1,1,()=>{e.delete(t.key)})}function nt(t,e,i,n,a,u,l,o,s,r,p,m){let g=t.length,d=u.length,_=g;const E={};for(;_--;)E[t[_].key]=_;const F=[],h=new Map,A=new Map;for(_=d;_--;){const k=m(a,u,_),S=i(k);let $=l.get(S);$?n&&$.p(k,e):($=r(S,k),$.c()),h.set(S,F[_]=$),S in E&&A.set(S,Math.abs(_-E[S]))}const L=new Set,R=new Set;function C(k){M(k,1),k.m(o,p),l.set(k.key,k),p=k.first,d--}for(;g&&d;){const k=F[d-1],S=t[g-1],$=k.key,H=S.key;k===S?(p=k.first,g--,d--):h.has(H)?!l.has($)||L.has($)?C(k):R.has(H)?g--:A.get($)>A.get(H)?(R.add($),C(k)):(L.add(H),g--):(s(S,l),g--)}for(;g--;){const k=t[g];h.has(k.key)||s(k,l)}for(;d;)C(F[d-1]);return F}function _e(t){t&&t.c()}function ne(t,e,i,n){const{fragment:a,after_update:u}=t.$$;a&&a.m(e,i),n||pe(()=>{const l=t.$$.on_mount.map(X).filter(Fe);t.$$.on_destroy?t.$$.on_destroy.push(...l):q(l),t.$$.on_mount=[]}),u.forEach(pe)}function le(t,e){const i=t.$$;i.fragment!==null&&(q(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(K.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ve(t,e,i,n,a,u,l,o=[-1]){const s=Y;J(t);const r=t.$$={fragment:null,ctx:[],props:u,update:y,not_equal:a,bound:Te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:Te(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};l&&l(r.root);let p=!1;if(r.ctx=i?i(t,e.props||{},(m,g,...d)=>{const _=d.length?d[0]:g;return r.ctx&&a(r.ctx[m],r.ctx[m]=_)&&(!r.skip_bound&&r.bound[m]&&r.bound[m](_),p&&lt(t,m)),g}):[],r.update(),p=!0,q(r.before_update),r.fragment=n?n(r.ctx):!1,e.target){if(e.hydrate){const m=Ke(e.target);r.fragment&&r.fragment.l(m),m.forEach(D)}else r.fragment&&r.fragment.c();e.intro&&M(t.$$.fragment),ne(t,e.target,e.anchor,e.customElement),ze()}J(s)}class Ae{$destroy(){le(this,1),this.$destroy=y}$on(e,i){if(!Fe(i))return y;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(i),()=>{const a=n.indexOf(i);a!==-1&&n.splice(a,1)}}$set(e){this.$$set&&!Ye(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const V=[];function Be(t,e=y){let i;const n=new Set;function a(o){if(j(t,o)&&(t=o,i)){const s=!V.length;for(const r of n)r[1](),V.push(r,t);if(s){for(let r=0;r<V.length;r+=2)V[r][0](V[r+1]);V.length=0}}}function u(o){a(o(t))}function l(o,s=y){const r=[o,s];return n.add(r),n.size===1&&(i=e(a)||y),o(t),()=>{n.delete(r),n.size===0&&(i(),i=null)}}return{set:a,update:u,subscribe:l}}const He=Be({}),re=Be("absolute"),wt="";function rt(t){let e,i,n,a,u,l,o,s,r,p,m,g,d,_,E,F,h,A,L,R,C,k,S,$,H,oe=t[0].sampleCount+"",ke,qe,se,Ue,ae,ye,W,Z,ue,Ve,fe,Ce,Ee,Ze;return{c(){e=v("div"),i=v("div"),n=v("div"),a=v("div"),a.textContent="pyinstrument",u=w(),l=v("div"),o=v("label"),o.textContent="Absolute time",s=w(),r=v("input"),p=w(),m=v("div"),m.textContent="Recorded:",g=w(),d=v("div"),d.textContent=`${t[3]}`,_=w(),E=v("div"),E.textContent="Duration:",F=w(),h=v("div"),h.textContent=`${t[5]} seconds`,A=w(),L=v("label"),L.textContent="Proportional time",R=w(),C=v("input"),k=w(),S=v("div"),S.textContent="Samples:",$=w(),H=v("div"),ke=z(oe),qe=w(),se=v("div"),se.textContent="CPU time:",Ue=w(),ae=v("div"),ae.textContent=`${t[4]} seconds`,ye=w(),W=v("div"),Z=v("div"),ue=v("div"),ue.textContent="Program:\xA0",Ve=w(),fe=v("div"),Ce=z(t[1]),c(a,"class","title svelte-12akwil"),c(o,"class","metric-label svelte-12akwil"),c(o,"for","absolute"),c(r,"type","radio"),r.__value="absolute",r.value=r.__value,c(r,"id","absolute"),c(r,"name","time-format"),r.checked=!0,t[7][0].push(r),c(m,"class","metric-label svelte-12akwil"),c(d,"class","metric-value svelte-12akwil"),c(E,"class","metric-label svelte-12akwil"),c(h,"class","metric-value svelte-12akwil"),c(L,"class","metric-label svelte-12akwil"),c(L,"for","proportion"),c(C,"type","radio"),C.__value="proportion",C.value=C.__value,c(C,"id","proportion"),c(C,"name","time-format"),t[7][0].push(C),c(S,"class","metric-label svelte-12akwil"),c(H,"class","metric-value svelte-12akwil"),c(se,"class","metric-label svelte-12akwil"),c(ae,"class","metric-value svelte-12akwil"),c(l,"class","metrics svelte-12akwil"),c(n,"class","row svelte-12akwil"),c(i,"class","margins"),c(e,"class","header svelte-12akwil"),c(ue,"class","metric-label program-label svelte-12akwil"),c(fe,"class","metric-value svelte-12akwil"),c(Z,"class","row svelte-12akwil"),c(W,"class","margins")},m(P,G){N(P,e,G),f(e,i),f(i,n),f(n,a),f(n,u),f(n,l),f(l,o),f(l,s),f(l,r),r.checked=r.__value===t[2],f(l,p),f(l,m),f(l,g),f(l,d),f(l,_),f(l,E),f(l,F),f(l,h),f(l,A),f(l,L),f(l,R),f(l,C),C.checked=C.__value===t[2],f(l,k),f(l,S),f(l,$),f(l,H),f(H,ke),f(l,qe),f(l,se),f(l,Ue),f(l,ae),N(P,ye,G),N(P,W,G),f(W,Z),f(Z,ue),f(Z,Ve),f(Z,fe),f(fe,Ce),Ee||(Ze=[x(r,"change",t[6]),x(C,"change",t[8])],Ee=!0)},p(P,[G]){G&4&&(r.checked=r.__value===P[2]),G&4&&(C.checked=C.__value===P[2]),G&1&&oe!==(oe=P[0].sampleCount+"")&&U(ke,oe),G&2&&U(Ce,P[1])},i:y,o:y,d(P){P&&D(e),t[7][0].splice(t[7][0].indexOf(r),1),t[7][0].splice(t[7][0].indexOf(C),1),P&&D(ye),P&&D(W),Ee=!1,q(Ze)}}}function ot(t,e,i){var g,d;let n;ce(t,re,_=>i(2,n=_));let{session:a}=e;const u=new Date(a.startTime*1e3).toLocaleString(),l=(g=a.cpuTime)==null?void 0:g.toLocaleString(void 0,{maximumSignificantDigits:3}),o=a.duration.toLocaleString(void 0,{maximumSignificantDigits:3});let s=(d=a.rootFrame)==null?void 0:d.function;s=="<module>"&&(s=a.program);const r=[[]];function p(){n=this.__value,re.set(n)}function m(){n=this.__value,re.set(n)}return t.$$set=_=>{"session"in _&&i(0,a=_.session)},[a,s,n,u,l,o,p,r,m]}class st extends Ae{constructor(e){super(),ve(this,e,ot,rt,j,{session:0})}}const bt="";function Xe(t,e,i){const n=t.slice();return n[14]=e[i],n}function Qe(t){let e,i,n,a,u,l,o,s,r,p,m,g,d,_,E,F;return{c(){e=v("div"),i=v("div"),n=Se("svg"),a=Se("path"),u=w(),l=v("div"),o=z(t[5]),s=w(),r=v("div"),p=z(t[4]),m=w(),g=v("div"),d=w(),_=v("div"),_.textContent=`${t[9]}`,c(a,"d","M.937-.016L5.793 4.84.937 9.696z"),c(a,"fill",t[7]),c(a,"fill-rule","evenodd"),c(a,"fill-opacity",".582"),c(n,"width","6"),c(n,"height","10"),c(i,"class","frame-triangle svelte-1aphj50"),Q(i,"rotate",t[2]),T(i,"visibility",t[0].children.length>0?"visible":"hidden"),c(l,"class","time svelte-1aphj50"),T(l,"color",t[7]),T(l,"font-weight",t[0].proportionOfTotal<.2?500:600),c(r,"class","name svelte-1aphj50"),c(g,"class","spacer"),T(g,"flex","1"),c(_,"class","code-position svelte-1aphj50"),c(e,"class","frame-description svelte-1aphj50"),Q(e,"application-code",t[0].isApplicationCode),Q(e,"children-visible",t[2]),T(e,"padding-left",`${t[1]*35}px`)},m(h,A){N(h,e,A),f(e,i),f(i,n),f(n,a),f(e,u),f(e,l),f(l,o),f(e,s),f(e,r),f(r,p),f(e,m),f(e,g),f(e,d),f(e,_),E||(F=x(e,"click",De(Pe(t[10]))),E=!0)},p(h,A){A&128&&c(a,"fill",h[7]),A&4&&Q(i,"rotate",h[2]),A&1&&T(i,"visibility",h[0].children.length>0?"visible":"hidden"),A&32&&U(o,h[5]),A&128&&T(l,"color",h[7]),A&1&&T(l,"font-weight",h[0].proportionOfTotal<.2?500:600),A&16&&U(p,h[4]),A&1&&Q(e,"application-code",h[0].isApplicationCode),A&4&&Q(e,"children-visible",h[2]),A&2&&T(e,"padding-left",`${h[1]*35}px`)},d(h){h&&D(e),E=!1,F()}}}function Ge(t){let e,i,n,a,u=t[0].group.frames.length+"",l,o,s,r,p,m;return{c(){e=v("div"),i=v("div"),n=v("div"),n.innerHTML='<svg width="6" height="10"><path d="M.937-.016L5.793 4.84.937 9.696z" fill="#FFF" fill-rule="evenodd" fill-opacity=".582"></path></svg>',a=w(),l=z(u),o=z(` frames hidden
        (`),s=z(t[6]),r=z(")"),c(n,"class","group-triangle svelte-1aphj50"),Q(n,"rotate",t[8]),c(i,"class","group-header-button svelte-1aphj50"),c(e,"class","group-header svelte-1aphj50"),T(e,"padding-left",`${t[1]*35}px`)},m(g,d){N(g,e,d),f(e,i),f(i,n),f(i,a),f(i,l),f(i,o),f(i,s),f(i,r),p||(m=x(e,"click",De(Pe(t[11]))),p=!0)},p(g,d){d&256&&Q(n,"rotate",g[8]),d&1&&u!==(u=g[0].group.frames.length+"")&&U(l,u),d&64&&U(s,g[6]),d&2&&T(e,"padding-left",`${g[1]*35}px`)},d(g){g&&D(e),p=!1,m()}}}function Ie(t){let e=[],i=new Map,n,a,u=t[0].children;const l=o=>o[14].identifier;for(let o=0;o<u.length;o+=1){let s=Xe(t,u,o),r=l(s);i.set(r,e[o]=Re(r,s))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=$e()},m(o,s){for(let r=0;r<e.length;r+=1)e[r].m(o,s);N(o,n,s),a=!0},p(o,s){s&11&&(u=o[0].children,he(),e=nt(e,s,l,1,o,u,i,n.parentNode,it,Re,n,Xe),ge())},i(o){if(!a){for(let s=0;s<u.length;s+=1)M(e[s]);a=!0}},o(o){for(let s=0;s<e.length;s+=1)B(e[s]);a=!1},d(o){for(let s=0;s<e.length;s+=1)e[s].d(o);o&&D(n)}}}function Re(t,e){let i,n,a;return n=new Oe({props:{frame:e[14],indent:e[1]+(e[3]?1:0)}}),{key:t,first:null,c(){i=$e(),_e(n.$$.fragment),this.first=i},m(u,l){N(u,i,l),ne(n,u,l),a=!0},p(u,l){e=u;const o={};l&1&&(o.frame=e[14]),l&10&&(o.indent=e[1]+(e[3]?1:0)),n.$set(o)},i(u){a||(M(n.$$.fragment,u),a=!0)},o(u){B(n.$$.fragment,u),a=!1},d(u){u&&D(i),le(n,u)}}}function at(t){let e,i,n,a,u,l,o=t[3]&&Qe(t),s=t[0].group&&t[0].group.rootFrame==t[0]&&t[2]&&Ge(t),r=t[2]&&Ie(t);return{c(){e=v("div"),o&&o.c(),i=w(),s&&s.c(),n=w(),r&&r.c(),a=w(),u=v("div"),c(u,"class","visual-guide"),T(u,"left",`${t[1]*35+21}px`),T(u,"backgroundColor",t[7]),c(e,"class","frame svelte-1aphj50")},m(p,m){N(p,e,m),o&&o.m(e,null),f(e,i),s&&s.m(e,null),f(e,n),r&&r.m(e,null),f(e,a),f(e,u),l=!0},p(p,[m]){p[3]?o?o.p(p,m):(o=Qe(p),o.c(),o.m(e,i)):o&&(o.d(1),o=null),p[0].group&&p[0].group.rootFrame==p[0]&&p[2]?s?s.p(p,m):(s=Ge(p),s.c(),s.m(e,n)):s&&(s.d(1),s=null),p[2]?r?(r.p(p,m),m&4&&M(r,1)):(r=Ie(p),r.c(),M(r,1),r.m(e,a)):r&&(he(),B(r,1,1,()=>{r=null}),ge()),m&2&&T(u,"left",`${p[1]*35+21}px`),m&128&&T(u,"backgroundColor",p[7])},i(p){l||(M(r),l=!0)},o(p){B(r),l=!1},d(p){p&&D(e),o&&o.d(),s&&s.d(),r&&r.d()}}}function ut(t,e,i){let n,a,u;ce(t,He,h=>i(12,a=h)),ce(t,re,h=>i(13,u=h));let{frame:l}=e,{indent:o=0}=e,s=!0,r,p;l.className?p=`${l.className}.${l.function}`:p=l.function;const m=`${l.filePathShort}:${l.lineNo.toString().padEnd(4,"\xA0")}`;let g,d=null;if(l.group){const h=l.group.libraries;h.length<4?d=h.join(", "):d=`${h[0]}, ${h[1]}, ${h[2]}...`}let _;l.proportionOfTotal>.6?_="#FF4159":l.proportionOfTotal>.3?_="#F5A623":l.proportionOfTotal>.2?_="#D8CB2A":_="#7ED321";function E(){i(2,s=!s)}function F(){He.update(h=>{var A;return{...h,[(A=l.groupId)!=null?A:""]:!n}})}return t.$$set=h=>{"frame"in h&&i(0,l=h.frame),"indent"in h&&i(1,o=h.indent)},t.$$.update=()=>{var h,A,L;if(t.$$.dirty&4097&&(l.group?a[(h=l.groupId)!=null?h:""]||((A=l.group)==null?void 0:A.rootFrame)===l||l.children.filter(R=>!R.group).length>1?i(3,r=!0):i(3,r=!1):i(3,r=!0)),t.$$.dirty&8193)if(u==="absolute")i(5,g=l.time.toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3}));else if(u==="proportion")i(5,g=`${(l.proportionOfTotal*100).toLocaleString(void 0,{minimumFractionDigits:1,maximumFractionDigits:1})}%`);else throw new Error("unknown timeFormat");t.$$.dirty&4097&&i(8,n=a[(L=l.groupId)!=null?L:""]===!0)},[l,o,s,r,p,g,d,_,n,m,E,F,a,u]}class Oe extends Ae{constructor(e){super(),ve(this,e,ut,at,j,{frame:0,indent:1})}}const ft="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACPTkDJAAAFPklEQVRYCdWXu4skVRSHb3VXP2bcXUVMBkRMTVww2XQDExEEH4iKiUYGhuJEPgJhUSMzQQSDRVzETNDMTTfUwL/ARUwM1t3pV1WX33eqbnfP9MxOu5kHTt9T93F+v3vOubeqi7QhT1+58vhiVn1G19WiaQ6KIqVQOmyT+h9kuUxp2bAAtQkpij9pbw5G5fu/3br1x8ql4NW0+rVJzaN29nop9VUeCtoerXpMTj53g+AGcINR1YB3RIJMN6dIxd/luLxcZoftzltwAct+SiNGh2jJ84BnSQWJTeBNW2C0ZrvufrZA5y2JmuemWkfCjYq5IsC6q2iE2V0LuDdMaYxKZDxo+yS3JZkEY+5SsAU7P5q1qZNEAxnXGo0NubomQM4dWPnCMAU/fUCnoA7kFjPEPohuqfO6uc++0xKSVHUcHDbNwZpAeFyHyMcg408G16mSnwW3b5OEz3rtCAyJnHUQUSEFmMdki0CMmsNOX/gkpf1RSpf223Q43jC2MMw4tFWsjwHzBngsIOT6CaEf7wGKrTo/agFbH8oWAQdkWTF5htGntSDn2h2YBTal/9603Z2++swZ0+5BZIjdQwfUz5DcGwHVotSfdpYtAg7oUKzaycyo6PjmkA4cRmgBuf5zSj/80kbAuToaYHz9afdgCiCxJF3gpudfZampOyGnEwAwIkEbuROBXEauXZGdYzrEtFTTpx3zHGeewGoFcFxk2Cdlxempy8/oZyXm1KO3R14fIraPXEzpAnXgyVBmRMdjNgdVsqZgxLw9cl4C7m7N+d17pOqIuaj2LKetQzs1Ai3E+reRJip4CSnz2wPYHC9wFL66MYko9k8pwgmAU4hqbxZhO6tNXba321V8Uvruc4ZzGgQxErnFNszqItqC0DdpTtzfeqWJ21DwpRp5WkOdHwFJqM4UMLcdeB2AADPUkigSm00VOZixsOL8WfUB3oWd4ZWcT8CpgLz2XkoPX+IgEIU+q6K6QZqzqxoAr15vupqC8Air0wm7JwUL2AWJByIAuDXQEGZ1aegRASY4Ppq0AOZZIoZYsLh4zDsa4PSfeA+En/tGQMI5ZTe+xClhN+Q5z4b67TfZJeATiAQw4J4KwTzCOfT2nSb3JRALAJTEfKPQcrGBG5GwwCLMRCRAXcgiQY1IYD8ogbzuDd5qF7gL+p4ESM05Z//coWXH1oEE5oQkQPOi3EroDDk/Ai40Cp3SRE2AG+8MWyOk5h1j7ixnEogPD0dVcv/FVwXXLceKs20K5rCaFk06fKmOD424akkTXUFkVwanEtBZfH7hMK5eCEwBl0DNYHvJ0Idd4MHXr7djkGDtWQV3GqlTCRhybzqv1R4zbA/fXabRfhFAHkvflJO77XivuyElbRHG+h3yL6EtAu4iPkoF5q4veRn1ecEUAwYg0pSyQwAoRk3qz4p4DS+wawpxSVHoY9cobBHQtxBBBMBrN/rkvOEC6lF0hF/nKvaS31yE155btLVAFKIidbSDbBMI9HaluzjC4ZKQWHieBIcVPqvbyg/b503Dh91kTcB/LH4Z6wmNI8X2PnyxTkPSUI7JP7MjvE5hTrwDuO+rLvT2uXxnAXNNgL9LLHxdB16jOi24XgOEK68EyMKMb/uYRERol1w+FmRN67XrWonsKDdzRNPmXzPjbEXHxwWttsCcwpXki8cte91afP7zkdQuYch/zSizVv66ffvOwZNPfLus/YNSPMYuLkZIda66yw3NzwHMeCOBXcBNdVH8OBiXLx/7c5qJrFrK/GOYfETH97Sr/jOM38FnvodDGv8f+Rcj1XBLIcDKAQAAAABJRU5ErkJggg==",kt="";function ct(t){let e;return{c(){e=v("div"),e.textContent="No samples recorded.",c(e,"class","error")},m(i,n){N(i,e,n)},p:y,i:y,o:y,d(i){i&&D(e)}}}function dt(t){let e,i;return e=new Oe({props:{frame:t[0].rootFrame}}),{c(){_e(e.$$.fragment)},m(n,a){ne(e,n,a),i=!0},p(n,a){const u={};a&1&&(u.frame=n[0].rootFrame),e.$set(u)},i(n){i||(M(e.$$.fragment,n),i=!0)},o(n){B(e.$$.fragment,n),i=!1},d(n){le(e,n)}}}function pt(t){let e,i,n,a,u,l,o,s,r;i=new st({props:{session:t[0]}});const p=[dt,ct],m=[];function g(d,_){return d[0].rootFrame?0:1}return o=g(t),s=m[o]=p[o](t),{c(){e=v("div"),_e(i.$$.fragment),n=w(),a=v("div"),u=w(),l=v("div"),s.c(),c(a,"class","spacer"),T(a,"height","20px"),c(l,"class","margins"),c(e,"class","app svelte-rmu4zi")},m(d,_){N(d,e,_),ne(i,e,null),f(e,n),f(e,a),f(e,u),f(e,l),m[o].m(l,null),r=!0},p(d,[_]){const E={};_&1&&(E.session=d[0]),i.$set(E);let F=o;o=g(d),o===F?m[o].p(d,_):(he(),B(m[F],1,1,()=>{m[F]=null}),ge(),s=m[o],s?s.p(d,_):(s=m[o]=p[o](d),s.c()),M(s,1),s.m(l,null))},i(d){r||(M(i.$$.fragment,d),M(s),r=!0)},o(d){B(i.$$.fragment,d),B(s),r=!1},d(d){d&&D(e),le(i),m[o].d()}}}function we(){document.body.style.minHeight=`${window.scrollY+window.innerHeight}px`}function mt(t,e,i){let{session:n}=e;const a=document.createElement("link");a.rel="shortut icon",a.href=ft,document.head.appendChild(a),We(()=>{window.addEventListener("scroll",we),we()}),je(()=>{window.removeEventListener("scroll",we)});const u=n.rootFrame,l=u==null?void 0:u.time.toLocaleString(void 0,{maximumSignificantDigits:3});let o=u==null?void 0:u.function;return o=="<module>"&&(o=n.program),document.title=`${l}s - ${o} - pyinstrument`,t.$$set=s=>{"session"in s&&i(0,n=s.session)},[n]}class ht extends Ae{constructor(e){super(),ve(this,e,mt,pt,j,{session:0})}}class gt{constructor(e,i){b(this,"id");b(this,"rootFrame");b(this,"frames",[]);this.id=e,this.rootFrame=i}addFrame(e){this.frames.push(e)}get exitFrames(){const e=[];for(const i of this.frames){let n=!1;for(const a of i.children)if(a.group!=this){n=!0;break}n&&e.push(i)}return e}get libraries(){const e=[];for(const i of this.frames){const n=/^[^\\/.]*/.exec(i.filePathShort)[0];e.includes(n)||e.push(n)}return e}}class be{constructor(e,i=null,n={groups:{}}){b(this,"function");b(this,"filePath");b(this,"filePathShort");b(this,"lineNo");b(this,"time");b(this,"totalTime");b(this,"awaitTime");b(this,"isApplicationCode");b(this,"groupId");b(this,"className");b(this,"parent");b(this,"children");b(this,"group");var a,u;if(this.parent=i,this.function=e.function,this.filePath=e.file_path,this.filePathShort=e.file_path_short,this.lineNo=e.line_no,this.time=e.time,this.totalTime=this.parent?this.parent.totalTime:this.time,this.awaitTime=e.await_time,this.isApplicationCode=e.is_application_code,this.groupId=(a=e.group_id)!=null?a:null,this.className=(u=e.class_name)!=null?u:null,e.group_id){const l=e.group_id;let o=n.groups[l];o||(o=n.groups[l]=new gt(l,this)),o.addFrame(this),this.group=n.groups[l]}else this.group=null;this.children=e.children.map(l=>new be(l,this,n))}get identifier(){return`${this.function}:${this.filePath}:${this.lineNo}`}get proportionOfTotal(){return this.time/this.totalTime}}class _t{constructor(e){b(this,"startTime");b(this,"duration");b(this,"sampleCount");b(this,"program");b(this,"cpuTime");b(this,"rootFrame");this.startTime=e.start_time,this.duration=e.duration,this.sampleCount=e.sample_count,this.program=e.program,this.cpuTime=e.cpu_time,this.rootFrame=e.root_frame?new be(e.root_frame):null}}return{render(t,e){const i=new _t(e);return new ht({target:t,props:{session:i}})}}}();
