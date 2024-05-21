import{g as X,f as tt,d as et,r as nt,o as rt,a as st,e as j,t as it,p as at,h as ut,_ as ot}from"./index-SUIDejzl.js";var R={exports:{}};(function(g,F){(function(S,w){g.exports=w()})(tt,function(){var S=1e3,w=6e4,H=36e5,T="millisecond",O="second",b="minute",k="hour",v="day",L="week",m="month",J="quarter",p="year",x="date",V="Invalid Date",G=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,P=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],t=s%100;return"["+s+(n[(t-20)%10]||n[t]||n[0])+"]"}},U=function(s,n,t){var r=String(s);return!r||r.length>=n?s:""+Array(n+1-r.length).join(t)+s},K={s:U,z:function(s){var n=-s.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+U(r,2,"0")+":"+U(e,2,"0")},m:function s(n,t){if(n.date()<t.date())return-s(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,m),i=t-e<0,a=n.clone().add(r+(i?-1:1),m);return+(-(r+(t-e)/(i?e-a:a-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:m,y:p,w:L,d:v,D:x,h:k,m:b,s:O,ms:T,Q:J}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},W="en",_={};_[W]=Q;var Z="$isDayjsObject",E=function(s){return s instanceof B||!(!s||!s[Z])},A=function s(n,t,r){var e;if(!n)return W;if(typeof n=="string"){var i=n.toLowerCase();_[i]&&(e=i),t&&(_[i]=t,e=i);var a=n.split("-");if(!e&&a.length>1)return s(a[0])}else{var o=n.name;_[o]=n,e=o}return!r&&e&&(W=e),e||!r&&W},f=function(s,n){if(E(s))return s.clone();var t=typeof n=="object"?n:{};return t.date=s,t.args=arguments,new B(t)},u=K;u.l=A,u.i=E,u.w=function(s,n){return f(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var B=function(){function s(t){this.$L=A(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[Z]=!0}var n=s.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,i=r.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var a=e.match(G);if(a){var o=a[2]-1||0,c=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,c)):new Date(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,c)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==V},n.isSame=function(t,r){var e=f(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return f(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<f(t)},n.$g=function(t,r,e){return u.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,i=!!u.u(r)||r,a=u.p(t),o=function(D,l){var M=u.w(e.$u?Date.UTC(e.$y,l,D):new Date(e.$y,l,D),e);return i?M:M.endOf(v)},c=function(D,l){return u.w(e.toDate()[D].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(l)),e)},d=this.$W,h=this.$M,$=this.$D,Y="set"+(this.$u?"UTC":"");switch(a){case p:return i?o(1,0):o(31,11);case m:return i?o(1,h):o(0,h+1);case L:var y=this.$locale().weekStart||0,C=(d<y?d+7:d)-y;return o(i?$-C:$+(6-C),h);case v:case x:return c(Y+"Hours",0);case k:return c(Y+"Minutes",1);case b:return c(Y+"Seconds",2);case O:return c(Y+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,i=u.p(t),a="set"+(this.$u?"UTC":""),o=(e={},e[v]=a+"Date",e[x]=a+"Date",e[m]=a+"Month",e[p]=a+"FullYear",e[k]=a+"Hours",e[b]=a+"Minutes",e[O]=a+"Seconds",e[T]=a+"Milliseconds",e)[i],c=i===v?this.$D+(r-this.$W):r;if(i===m||i===p){var d=this.clone().set(x,1);d.$d[o](c),d.init(),this.$d=d.set(x,Math.min(this.$D,d.daysInMonth())).$d}else o&&this.$d[o](c);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,r){var e,i=this;t=Number(t);var a=u.p(r),o=function(h){var $=f(i);return u.w($.date($.date()+Math.round(h*t)),i)};if(a===m)return this.set(m,this.$M+t);if(a===p)return this.set(p,this.$y+t);if(a===v)return o(1);if(a===L)return o(7);var c=(e={},e[b]=w,e[k]=H,e[O]=S,e)[a]||1,d=this.$d.getTime()+t*c;return u.w(d,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||V;var i=t||"YYYY-MM-DDTHH:mm:ssZ",a=u.z(this),o=this.$H,c=this.$m,d=this.$M,h=e.weekdays,$=e.months,Y=e.meridiem,y=function(l,M,I,N){return l&&(l[M]||l(r,i))||I[M].slice(0,N)},C=function(l){return u.s(o%12||12,l,"0")},D=Y||function(l,M,I){var N=l<12?"AM":"PM";return I?N.toLowerCase():N};return i.replace(P,function(l,M){return M||function(I){switch(I){case"YY":return String(r.$y).slice(-2);case"YYYY":return u.s(r.$y,4,"0");case"M":return d+1;case"MM":return u.s(d+1,2,"0");case"MMM":return y(e.monthsShort,d,$,3);case"MMMM":return y($,d);case"D":return r.$D;case"DD":return u.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return y(e.weekdaysMin,r.$W,h,2);case"ddd":return y(e.weekdaysShort,r.$W,h,3);case"dddd":return h[r.$W];case"H":return String(o);case"HH":return u.s(o,2,"0");case"h":return C(1);case"hh":return C(2);case"a":return D(o,c,!0);case"A":return D(o,c,!1);case"m":return String(c);case"mm":return u.s(c,2,"0");case"s":return String(r.$s);case"ss":return u.s(r.$s,2,"0");case"SSS":return u.s(r.$ms,3,"0");case"Z":return a}return null}(l)||a.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var i,a=this,o=u.p(r),c=f(t),d=(c.utcOffset()-this.utcOffset())*w,h=this-c,$=function(){return u.m(a,c)};switch(o){case p:i=$()/12;break;case m:i=$();break;case J:i=$()/3;break;case L:i=(h-d)/6048e5;break;case v:i=(h-d)/864e5;break;case k:i=h/H;break;case b:i=h/w;break;case O:i=h/S;break;default:i=h}return e?i:u.a(i)},n.daysInMonth=function(){return this.endOf(m).$D},n.$locale=function(){return _[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),i=A(t,r,!0);return i&&(e.$L=i),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),z=B.prototype;return f.prototype=z,[["$ms",T],["$s",O],["$m",b],["$H",k],["$W",v],["$M",m],["$y",p],["$D",x]].forEach(function(s){z[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),f.extend=function(s,n){return s.$i||(s(n,B,f),s.$i=!0),f},f.locale=A,f.isDayjs=E,f.unix=function(s){return f(1e3*s)},f.en=_[W],f.Ls=_,f.p={},f})})(R);var ct=R.exports;const ft=X(ct),q=g=>(at("data-v-1535c29c"),g=g(),ut(),g),dt={class:"base-header"},ht={class:"header-left"},lt=q(()=>j("i",{class:"fa-solid fa-arrows-rotate"},null,-1)),$t=[lt],mt=q(()=>j("div",{class:"header-middle"},"智慧安检数据大屏",-1)),vt={class:"header-right"},pt=et({__name:"BaseHeader",setup(g){const F=nt("");setInterval(()=>{F.value=ft().format("YYYY-MM-DD HH:mm:ss")},1e3);const S={onWindowRefresh:()=>{location.reload()}};return(w,H)=>(rt(),st("div",dt,[j("div",ht,[j("div",{class:"action-item",onClick:H[0]||(H[0]=(...T)=>S.onWindowRefresh&&S.onWindowRefresh(...T))},$t)]),mt,j("div",vt,it(F.value),1)]))}}),_t=ot(pt,[["__scopeId","data-v-1535c29c"]]);export{_t as default};
