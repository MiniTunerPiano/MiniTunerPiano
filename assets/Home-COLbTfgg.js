var ze=Object.defineProperty;var He=(e,r,i)=>r in e?ze(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i;var L=(e,r,i)=>He(e,typeof r!="symbol"?r+"":r,i);import{c as k}from"./_commonjsHelpers-Cpj98o6Y.js";import{d as B,r as O,p as Re,m as Ye,a as We,b as Ke,c as Xe,e as Je,f as Qe,g as Ze,h as ea,i as aa,j as Ne,k as ta,u as sa,t as na,l as ra,n as oa,o as ia,q as la,s as ua,v as ca,w as De,x as E,y as ma,z as va,A as da,B as fa,C as ya,D as re,E as ha,F as H,V as Me,_ as te,G as b,H as N,I as C,J as _,K as R,L as Le,M as q,N as J,O as D,P as $,Q as oe,R as ee,S as Q,T as ge,U as j,W as X,X as ue,Y as pa,Z as Te,$ as Sa,a0 as ce,a1 as wa,a2 as ga,a3 as Aa,a4 as Fa}from"./index-DhwjA651.js";const x=class x{};L(x,"IsOnRange",(r,i,u)=>u<i&&u>r),L(x,"Clamp",(r,i=0,u=1)=>Math.min(u,Math.max(i,r))),L(x,"Lerp",(r,i,u)=>r*(1-u)+i*u),L(x,"Invlerp",(r,i,u)=>x.Clamp((u-r)/(i-r))),L(x,"ToRange",(r,i,u,m=0,l=1)=>x.Lerp(m,l,x.Invlerp(i,u,r)));let ae=x;class F{constructor(r,i,u){L(this,"$natural",!0);L(this,"name",{classic:F.Classic.ENotes.NONE,american:F.American.ENotes.NONE});L(this,"frequency",{main:0,min:0,max:0});L(this,"isNatural",()=>this.$natural);this.frequency.main=r,i&&(this.name.classic=i),u&&(this.name.american=u)}}class U extends F{constructor(i,u=F.Classic.ENotes.NONE,m=F.American.ENotes.NONE){super(i,u,m);L(this,"sharp",F.EmptyNote);L(this,"flat",F.EmptyNote);this.$natural=!1}}(e=>{(l=>{l[l.CLASSIC=0]="CLASSIC",l[l.AMERICAN=1]="AMERICAN"})(e.Systems||(e.Systems={})),(l=>{l[l.SHARP=0]="SHARP",l[l.FLAT=1]="FLAT",l[l.NATURAL=2]="NATURAL",l[l.DOUBLE_SHARP=3]="DOUBLE_SHARP",l[l.DOUBLE_FLAT=4]="DOUBLE_FLAT"})(e.Accidentals||(e.Accidentals={})),(l=>{(t=>{t.NONE="?",t.DO="DO",t.DOS_REF="DO# REb",t.RE="RE",t.RES_MIF="RE# MIb",t.MI="MI",t.FA="FA",t.FAS_SOLF="FA# SOLb",t.SOL="SOL",t.SOLS_LAF="SOL# LAb",t.LA="LA",t.LAS_SIF="LA# SIb",t.SI="SI"})(l.ENotes||(l.ENotes={}))})(e.Classic||(e.Classic={})),(l=>{(t=>{t.NONE="?",t.C="C",t.CS_DF="C# Db",t.D="D",t.DS_EF="D# Eb",t.E="E",t.F="F",t.FS_GF="F# Gb",t.G="G",t.GS_AF="G# Ab",t.A="A",t.AS_BF="A# Bb",t.B="B"})(l.ENotes||(l.ENotes={}))})(e.American||(e.American={}));let r=[new e(261.63,"DO","C"),new U(277.18,"DO# REb","C# Db"),new e(293.66,"RE","D"),new U(311.13,"RE# MIb","D# Eb"),new e(329.63,"MI","E"),new e(349.23,"FA","F"),new U(369.99,"FA# SOLb","F# Gb"),new e(392,"SOL","G"),new U(415.3,"SOL# LAb","G# Ab"),new e(440,"LA","A"),new U(466.16,"LA# SIb","A# Bb"),new e(493.88,"SI","B")];e.Notes=r,e.EmptyNote=new U(0);let i=[],u=[];const m=(l,t)=>Math.sqrt(l*t);e.FillMedFrequencys=(l,t,s)=>{for(let n=0;n<l.length;n++){{const d=n>0?l[n-1].frequency.main:l[l.length-1].frequency.main/2;l[n].frequency.min=m(d,l[n].frequency.main)}{const d=n<l.length-1?l[n+1].frequency.main:l[0].frequency.main*2;l[n].frequency.max=m(l[n].frequency.main,d)}l[n]instanceof U?(l[n].sharp=l[n-1],l[n].flat=l[n+1],s.push(l[n])):(t.push(l[n]),n<l.length-1&&!(l[n+1]instanceof U)&&s.push(e.EmptyNote))}},(0,e.FillMedFrequencys)(r,i,u),e.Naturals=i,e.Semis=u})(F||(F={}));var I;(e=>{e.OCTAVE_CENTRAL=4,e.OCTAVE_RANGE={MIN:1,MAX:7};const r=(n,d)=>n/Math.pow(2,d),i=(n,d)=>n*Math.pow(2,d),u=(n,d)=>n==e.OCTAVE_CENTRAL?d:n<e.OCTAVE_CENTRAL?r(d,e.OCTAVE_CENTRAL-n):i(d,n-e.OCTAVE_CENTRAL);let m=[],l=[],t=[];for(let n=e.OCTAVE_RANGE.MIN;n<=e.OCTAVE_RANGE.MAX;n++){let d=[],w=[],o=[];F.Notes.forEach(a=>{const v=u(n,a.frequency.main);let h;a instanceof U?h=new U(v,a.name.classic,a.name.american):h=new F(v,a.name.classic,a.name.american),d.push(h)}),F.FillMedFrequencys(d,w,o),m.push(d),l.push(w),t.push(o)}const s=n=>ae.Clamp(n,e.OCTAVE_RANGE.MIN,e.OCTAVE_RANGE.MAX)-e.OCTAVE_RANGE.MIN;e.GetNotesAtOctave=n=>m[s(n)],e.GetNaturalsAtOctave=n=>l[s(n)],e.GetSemisAtOctave=n=>t[s(n)]})(I||(I={}));var Y={},Fe={},me=k&&k.__assign||function(){return me=Object.assign||function(e){for(var r,i=1,u=arguments.length;i<u;i++){r=arguments[i];for(var m in r)Object.prototype.hasOwnProperty.call(r,m)&&(e[m]=r[m])}return e},me.apply(this,arguments)};Object.defineProperty(Fe,"__esModule",{value:!0});var Ea={threshold:.1,sampleRate:44100,probabilityThreshold:.1};function ba(e){e===void 0&&(e={});var r=me(me({},Ea),e),i=r.threshold,u=r.sampleRate,m=r.probabilityThreshold;return function(t){var s;for(s=1;s<t.length;s*=2);s/=2;for(var n=s/2,d=new Float32Array(n),w=0,o,a=0;a<n;a++)d[a]=0;for(var a=1;a<n;a++)for(var v=0;v<n;v++){var h=t[v]-t[v+a];d[a]+=h*h}d[0]=1,d[1]=1;for(var g=0,a=1;a<n;a++)g+=d[a],d[a]*=a/g;for(o=2;o<n;o++)if(d[o]<i){for(;o+1<n&&d[o+1]<d[o];)o++;w=1-d[o];break}if(o===n||d[o]>=i||w<m)return null;var y,c,f;if(o<1?c=o:c=o-1,o+1<n?f=o+1:f=o,c===o)d[o]<=d[f]?y=o:y=f;else if(f===o)d[o]<=d[c]?y=o:y=c;else{var p=d[c],S=d[o],A=d[f];y=o+(A-p)/(2*(2*S-A-p))}return u/y}}Fe.YIN=ba;var Ee={},ve=k&&k.__assign||function(){return ve=Object.assign||function(e){for(var r,i=1,u=arguments.length;i<u;i++){r=arguments[i];for(var m in r)Object.prototype.hasOwnProperty.call(r,m)&&(e[m]=r[m])}return e},ve.apply(this,arguments)};Object.defineProperty(Ee,"__esModule",{value:!0});var Ca={sampleRate:44100,minFrequency:82,maxFrequency:1e3,ratio:5,sensitivity:.1};function Oa(e){e===void 0&&(e={});var r=ve(ve({},Ca),e),i=r.sampleRate,u=r.minFrequency,m=r.maxFrequency,l=r.sensitivity,t=r.ratio,s=[],n=Math.ceil(i/u),d=Math.floor(i/m);return function(o){var a=o.length,v=0,h=1/0,g=-1/0,y,c,f,p,S,A,P,M;for(p=0;p<a;p++)if(d<=p&&p<=n){for(P=0,M=p,v=0,y=[],c=[];P<a-p;v++,M++,P++)y[v]=o[P],c[v]=o[M];var V=y.length;for(f=[],A=0;A<V;A++)f[A]=y[A]-c[A];var W=0;for(A=0;A<V;A++)W+=Math.abs(f[A]);s[p]=W}for(S=d;S<n;S++)s[S]<h&&(h=s[S]),s[S]>g&&(g=s[S]);var z=Math.round(l*(g-h)+h);for(S=d;S<=n&&s[S]>z;S++);var se=d/2;h=s[S];var G=S;for(p=S-1;p<S+se&&p<=n;p++)s[p]<h&&(h=s[p],G=p);return Math.round(s[G]*t)<g?i/G:null}}Ee.AMDF=Oa;var be={},de=k&&k.__assign||function(){return de=Object.assign||function(e){for(var r,i=1,u=arguments.length;i<u;i++){r=arguments[i];for(var m in r)Object.prototype.hasOwnProperty.call(r,m)&&(e[m]=r[m])}return e},de.apply(this,arguments)};Object.defineProperty(be,"__esModule",{value:!0});var _e={sampleRate:44100};function Pa(e){e===void 0&&(e=_e);var r=de(de({},_e),e),i=r.sampleRate;return function(m){var l=m.length,t=0,s,n,d,w;for(s=0;s<l;s++)w=m[s],t+=w*w;if(t=Math.sqrt(t/l),t<.01)return-1;var o=0,a=l-1,v=.2;for(s=0;s<l/2;s++)if(Math.abs(m[s])<v){o=s;break}for(s=1;s<l/2;s++)if(Math.abs(m[l-s])<v){a=l-s;break}var h=m.slice(o,a),g=h.length,y=new Array(g).fill(0);for(s=0;s<g;s++)for(n=0;n<g-s;n++)y[s]=y[s]+h[n]*h[n+s];for(d=0;y[d]>y[d+1];)d++;var c=-1,f=-1;for(s=d;s<g;s++)y[s]>c&&(c=y[s],f=s);var p=f,S=y[p-1],A=y[p],P=y[p+1],M=(S+P-2*A)/2,V=(P-S)/2;return M&&(p=p-V/(2*M)),i/p}}be.ACF2PLUS=Pa;var Ce={},fe=k&&k.__assign||function(){return fe=Object.assign||function(e){for(var r,i=1,u=arguments.length;i<u;i++){r=arguments[i];for(var m in r)Object.prototype.hasOwnProperty.call(r,m)&&(e[m]=r[m])}return e},fe.apply(this,arguments)};Object.defineProperty(Ce,"__esModule",{value:!0});var qa=6,Ma=3e3,Ta=3,_a=.75,Ia={sampleRate:44100};function Ra(e){e===void 0&&(e={});var r=fe(fe({},Ia),e),i=r.sampleRate;return function(m){for(var l=[],t=[],s=m.length,n=null,d=0,w=0,o=0,a=0;a<s;a++){var v=m[a];d=d+v,o=Math.max(o,v),w=Math.min(w,v)}d/=s,w-=d,o-=d;for(var h=o>-1*w?o:-1*w,g=h*_a,y=0,c=-1,f=m.length,p,S,A;p=~~(i/(Math.pow(2,y)*Ma)),!(f<2);){var P=void 0,M=-1e3,V=-1e6,W=-1e6,z=!1,se=!1;A=0,S=0;for(var a=2;a<f;a++){var G=m[a]-d,he=m[a-1]-d;he<=0&&G>0&&(z=!0),he>=0&&G<0&&(se=!0),P=G-he,M>-1e3&&(se&&M<0&&P>=0&&Math.abs(G)>=g&&a>V+p&&(l[A++]=a,V=a,se=!1),z&&M>0&&P<=0&&Math.abs(G)>=g&&a>W+p&&(t[S++]=a,W=a,z=!1)),M=P}if(A===0&&S===0)break;for(var Pe=void 0,ne=[],a=0;a<f;a++)ne[a]=0;for(var a=0;a<A;a++)for(var T=1;T<Ta;T++)a+T<A&&(Pe=Math.abs(l[a]-l[a+T]),ne[Pe]+=1);for(var K=-1,pe=-1,a=0;a<f;a++){for(var ie=0,T=-1*p;T<=p;T++)a+T>=0&&a+T<f&&(ie+=ne[a+T]);ie===pe?a===2*K&&(K=a):ie>pe&&(pe=ie,K=a)}for(var le=0,qe=0,T=-p;T<=p;T++)if(K+T>=0&&K+T<s){var Se=ne[K+T];Se>0&&(qe+=Se,le+=(K+T)*Se)}if(le/=qe,c>-1&&Math.abs(le*2-c)<=2*p){n=i/(Math.pow(2,y-1)*c);break}if(c=le,y++,y>=qa||f<2)break;var we=m.subarray(0);f===ne.length&&(we=new Float32Array(f/2));for(var a=0;a<f/2;a++)we[a]=(m[2*a]+m[2*a+1])/2;m=we,f/=2}return n}}Ce.DynamicWavelet=Ra;var Oe={},ye=k&&k.__assign||function(){return ye=Object.assign||function(e){for(var r,i=1,u=arguments.length;i<u;i++){r=arguments[i];for(var m in r)Object.prototype.hasOwnProperty.call(r,m)&&(e[m]=r[m])}return e},ye.apply(this,arguments)};Object.defineProperty(Oe,"__esModule",{value:!0});var Na={bufferSize:1024,cutoff:.97,sampleRate:44100};function Da(e){e===void 0&&(e={});var r=ye(ye({},Na),e),i=r.bufferSize,u=r.cutoff,m=r.sampleRate,l=.5,t=80,s=new Float32Array(i),n=new Float32Array(i),d,w,o=[],a=[],v=[];function h(c){var f,p;n[0]=c[0]*c[0];for(var S=1;S<c.length;S+=1)n[S]=c[S]*c[S]+n[S-1];for(var A=0;A<c.length;A++){f=0,p=n[c.length-1-A]+n[c.length-1]-n[A];for(var S=0;S<c.length-A;S++)f+=c[S]*c[S+A];s[A]=2*f/p}}function g(c){var f=s[c-1],p=s[c],S=s[c+1],A=c,P=S+f-2*p;if(P===0)d=A,w=p;else{var M=f-S;d=A+M/(2*P),w=p-M*M/(8*P)}}function y(){for(var c=0,f=0;c<(s.length-1)/3&&s[c]>0;)c++;for(;c<s.length-1&&s[c]<=0;)c++;for(c==0&&(c=1);c<s.length-1;)if(s[c]>s[c-1]&&s[c]>=s[c+1]&&(f==0||s[c]>s[f])&&(f=c),c++,c<s.length-1&&s[c]<=0)for(f>0&&(o.push(f),f=0);c<s.length-1&&s[c]<=0;)c++;f>0&&o.push(f)}return function(f){var p;o=[],a=[],v=[],h(f),y();for(var S=-1/0,A=0;A<o.length;A++){var P=o[A];S=Math.max(S,s[P]),s[P]>l&&(g(P),v.push(w),a.push(d),S=Math.max(S,w))}if(a.length){for(var M=u*S,V=0,A=0;A<v.length;A++)if(v[A]>=M){V=A;break}var W=a[V],z=m/W;z>t?p=z:p=-1}else p=-1;return{probability:S,freq:p}}}Oe.Macleod=Da;var ke={};(function(e){var r=k&&k.__assign||function(){return r=Object.assign||function(m){for(var l,t=1,s=arguments.length;t<s;t++){l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(m[n]=l[n])}return m},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.DEFAULT_FREQUENCIES_PARAMS={tempo:120,quantization:4,sampleRate:44100};function i(m,l){var t=m.map(function(v){return v(l)}).filter(function(v){return v!==null}).sort(function(v,h){return v-h});if(t.length===1)return t[0];if(t.length===2){var s=t[0],n=t[1];return s*2>n?Math.sqrt(s*n):s}else{var s=t[0],n=t[1],d=t[t.length-2],w=t[t.length-1],o=s*2>n?t:t.slice(1),a=d*2>w?o:o.slice(0,-1);return Math.pow(a.reduce(function(g,y){return g*y},1),1/a.length)}}function u(m,l,t){t===void 0&&(t={});var s=r(r({},e.DEFAULT_FREQUENCIES_PARAMS),t),n=s.tempo,d=s.quantization,w=s.sampleRate,o=l.length,a=Math.round(w*60/(d*n)),v;Array.isArray(m)?v=i.bind(null,m):v=m;for(var h=[],g=0,y=o-a;g<=y;g+=a){var c=l.slice(g,g+a),f=v(c);h.push(f)}return h}e.frequencies=u})(ke);Object.defineProperty(Y,"__esModule",{value:!0});var $e=Fe;Y.YIN=$e.YIN;var Ve=Ee;Y.AMDF=Ve.AMDF;var Ue=be;Y.ACF2PLUS=Ue.ACF2PLUS;var xe=Ce;Y.DynamicWavelet=xe.DynamicWavelet;var Ge=Oe;Y.Macleod=Ge.Macleod;var je=ke;Y.frequencies=je.frequencies;var La=Y.default={YIN:$e.YIN,AMDF:Ve.AMDF,ACF2PLUS:Ue.ACF2PLUS,DynamicWavelet:xe.DynamicWavelet,Macleod:Ge.Macleod,frequencies:je.frequencies};const ka=B({name:"Tuner",emits:["update:frequency","update:note","is-running","update:bad-frequency"],props:{classes:{type:String,default:""},showClassicSystem:{type:Boolean,default:!0},showAmericanSystem:{type:Boolean,default:!0},showSemiSharps:{type:Boolean,defailt:!0},showSemiFlats:{type:Boolean,defailt:!0}},setup(e,{emit:r,expose:i}){const u=O(null),m=O(null),l=O(0),t=O({note:F.EmptyNote,octave:0}),s=O(!1),n=O(!0),d=O(null),w=O(new Date),o=500,a=La.YIN(),v=c=>{const S=Math.round(12*(Math.log(c/440)/Math.log(2)))+69,A=S%12,P=Math.floor(S/12)-1;if(ae.IsOnRange(I.OCTAVE_RANGE.MIN,I.OCTAVE_RANGE.MAX,P)){const M=F.Notes[A];return w.value=new Date,{note:M,octave:P}}return{note:F.EmptyNote,octave:-1}},h=()=>{if(!m.value||!u.value||!s.value)return;const c=m.value.fftSize,f=new Float32Array(c);m.value.getFloatTimeDomainData(f);const p=a(f);if(p){const S=v(p);S.octave==-1?new Date().getTime()-w.value.getTime()>o&&(n.value=!0,r("update:bad-frequency",!0)):(l.value=p,t.value=S,n.value=!1,r("update:note",t.value),r("update:frequency",p),r("update:bad-frequency",!1))}requestAnimationFrame(h)},g=async()=>{if(s.value)return;u.value=new AudioContext,m.value=u.value.createAnalyser(),m.value.fftSize=2048,d.value=await navigator.mediaDevices.getUserMedia({audio:!0}),u.value.createMediaStreamSource(d.value).connect(m.value),s.value=!0,r("is-running",!0),h()},y=()=>{u.value&&u.value.close(),s.value=!1,r("is-running",!1),d.value!=null&&d.value.getTracks().forEach(c=>{c.stop()})};return i({startTuner:g,stopTuner:y}),{frequency:l,note:t,startTuner:g,stopTuner:y,running:s,badFrequency:n}}}),$a=Re({color:String,...Ye(),...We(),...Ke(),...Xe(),...Je(),...Qe(),...Ze(),...ea(),...aa()},"VSheet"),Ae=Ne()({name:"VSheet",props:$a(),setup(e,r){let{slots:i}=r;const{themeClasses:u}=ta(e),{backgroundColorClasses:m,backgroundColorStyles:l}=sa(na(e,"color")),{borderClasses:t}=ra(e),{dimensionStyles:s}=oa(e),{elevationClasses:n}=ia(e),{locationStyles:d}=la(e),{positionClasses:w}=ua(e),{roundedClasses:o}=ca(e);return De(()=>E(e.tag,{class:["v-sheet",u.value,m.value,t.value,n.value,w.value,o.value,e.class],style:[l.value,s.value,d.value,e.style]},i)),{}}}),Va=Re({id:String,text:String,...ma(va({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),Z=Ne()({name:"VTooltip",props:Va(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:i}=r;const u=da(e,"modelValue"),{scopeId:m}=fa(),l=ya(),t=re(()=>e.id||`v-tooltip-${l}`),s=O(),n=re(()=>e.location.split(" ").length>1?e.location:e.location+" center"),d=re(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),w=re(()=>e.transition?e.transition:u.value?"scale-transition":"fade-transition"),o=re(()=>H({"aria-describedby":t.value},e.activatorProps));return De(()=>{const a=Me.filterProps(e);return E(Me,H({ref:s,class:["v-tooltip",e.class],style:e.style,id:t.value},a,{modelValue:u.value,"onUpdate:modelValue":v=>u.value=v,transition:w.value,absolute:!0,location:n.value,origin:d.value,persistent:!0,role:"tooltip",activatorProps:o.value,_disableGlobalStack:!0},m),{activator:i.activator,default:function(){var y;for(var v=arguments.length,h=new Array(v),g=0;g<v;g++)h[g]=arguments[g];return((y=i.default)==null?void 0:y.call(i,...h))??e.text}})}),ha({},s)}}),Ua={class:"tuner-note text-primary d-flex ga-1"},xa={key:0,class:"tuner-classic tuner-natural"},Ga={key:1,class:"tuner-classic tuner-semi"},ja={key:0,class:"tuner-american tuner-natural"},Ba={key:1,class:"tuner-american tuner-semi"},za={class:"tuner-octave"},Ha={class:"text-body-1 text-right",style:{width:"7rem"}};function Ya(e,r,i,u,m,l){return b(),N(Ae,{class:oe(`d-flex flex-wrap justify-center ga-4 bg-background align-center my-4 ${e.classes}`),style:{"z-index":"100"}},{default:C(()=>[e.running?(b(),N(Z,{key:1,text:"Detener afinador",location:"start"},{activator:C(({props:t})=>[E(_,H(t,{icon:"mdi-stop",onClick:e.stopTuner}),null,16,["onClick"])]),_:1})):(b(),N(Z,{key:0,text:"Iniciar afinador",location:"start"},{activator:C(({props:t})=>[E(_,H(t,{icon:"mdi-microphone",onClick:e.startTuner,color:"primary"}),null,16,["onClick"])]),_:1})),R("div",{class:"d-flex justify-center align-center ga-3",style:Le(`opacity: ${e.badFrequency?"0.5":"1"}`)},[R("div",Ua,[e.showClassicSystem||!e.showAmericanSystem?(b(),q(J,{key:0},[e.note.note.isNatural()?(b(),q("span",xa,D(e.note.note.name.classic),1)):(b(),q("span",Ga,D(e.showSemiFlats?e.showSemiSharps?e.note.note.name.classic:e.note.note.name.classic.split(" ")[1]:e.note.note.name.classic.split(" ")[0]),1))],64)):$("",!0),e.showAmericanSystem?(b(),q(J,{key:1},[e.note.note.isNatural()?(b(),q("span",ja,D(e.note.note.name.american),1)):(b(),q("span",Ba,D(e.showSemiFlats?e.showSemiSharps?e.note.note.name.american:e.note.note.name.american.split(" ")[1]:e.note.note.name.american.split(" ")[0]),1))],64)):$("",!0),R("span",za,D(e.note.octave),1)]),R("div",Ha,D(e.frequency.toFixed(2))+" Hz ",1)],4)]),_:1},8,["class"])}const Wa=te(ka,[["render",Ya],["__scopeId","data-v-98050293"]]),Ka={showClassicSystem:!0,showAmericanSystem:!0},Xa={showSemiSharps:!0,showSemiFlats:!0},Ja={...Ka,...Xa},Qa={listenedFrequency:0,badFrequency:!1},Za={...Ja,activeOctaves:[3,4,5],waveform:"sine"},Ie="MiniTuner:Settings:Instrument",et=B({__name:"InstrumentSettings",props:{classes:{}},emits:["octaves","show:noteSystems","show:noteSemis","waveform"],setup(e,{emit:r}){const i=r;let u=Za;const m=y=>{u=y,localStorage.setItem(Ie,JSON.stringify(u))};(()=>{let y=localStorage.getItem(Ie);y!=null&&(u=JSON.parse(y))})();const t=()=>{let y=[];return u.showClassicSystem&&y.push(F.Systems.CLASSIC),u.showAmericanSystem&&y.push(F.Systems.AMERICAN),i("show:noteSystems",u.showClassicSystem,u.showAmericanSystem),y},s=()=>{let y=[];return u.showSemiSharps&&y.push(F.Accidentals.SHARP),u.showSemiFlats&&y.push(F.Accidentals.FLAT),i("show:noteSemis",u.showSemiSharps,u.showSemiFlats),y};let n=()=>{};const d=()=>{let y={min:u.activeOctaves[0],max:u.activeOctaves[u.activeOctaves.length-1]};return n(),y};//!-- For save and load from localStorage --
const w=O(d()),o=O(t()),a=O(s()),v=O(u.waveform??"sine");ee(o,y=>{const c=y.indexOf(F.Systems.CLASSIC)!=-1,f=y.indexOf(F.Systems.AMERICAN)!=-1;i("show:noteSystems",c,f),m({...u,showClassicSystem:c,showAmericanSystem:f})}),ee(a,y=>{const c=y.indexOf(F.Accidentals.SHARP)!=-1,f=y.indexOf(F.Accidentals.FLAT)!=-1;i("show:noteSemis",c,f),m({...u,showSemiSharps:c,showSemiFlats:f})}),ee(v,()=>{i("waveform",v.value),m({...u,waveform:v.value})}),n=()=>{const y=w.value.max-w.value.min+1,c=Array.from(Array(y).keys()).map(f=>f+w.value.min);i("octaves",c),m({...u,activeOctaves:c})},n();const h=(y=!0)=>{y?w.value.min-=1:w.value.min+=1,n()},g=(y=!0)=>{y?w.value.max+=1:w.value.max-=1,n()};return(y,c)=>(b(),N(ue,{"no-gutters":"",class:oe(`align-center px-3 mb-2 position-relative gr-1 ${y.classes}`),style:{"z-index":"20"}},{default:C(()=>[E(Q,{cols:"6",sm:"3",md:"2",class:"d-flex align-center justify-start ga-2 order-1"},{default:C(()=>[E(Z,{text:"Incluir una octava grave más",location:"top"},{activator:C(({props:f})=>[E(_,H(f,{variant:"tonal",disabled:w.value.min<=1,icon:"mdi-music-note-plus",onClick:c[0]||(c[0]=p=>h(!0))}),null,16,["disabled"])]),_:1}),E(Z,{text:"Disminuir una octava grave",location:"right"},{activator:C(({props:f})=>[E(_,H(f,{size:"small",variant:"tonal",disabled:w.value.min>=w.value.max,icon:"mdi-music-note-minus",onClick:c[1]||(c[1]=p=>h(!1))}),null,16,["disabled"])]),_:1})]),_:1}),E(Q,{cols:"12",sm:"12",md:"5",class:"d-flex justify-space-evenly order-3 order-sm-4 order-md-2"},{default:C(()=>[E(ge,{multiple:"",modelValue:o.value,"onUpdate:modelValue":c[2]||(c[2]=f=>o.value=f),rounded:"xl",variant:"outlined"},{default:C(()=>[E(_,{value:j(F).Systems.CLASSIC},{default:C(()=>c[7]||(c[7]=[X("Do, Re, ...")])),_:1},8,["value"]),E(_,{value:j(F).Systems.AMERICAN},{default:C(()=>c[8]||(c[8]=[X("C, D, ...")])),_:1},8,["value"])]),_:1},8,["modelValue"]),E(ge,{multiple:"",modelValue:a.value,"onUpdate:modelValue":c[3]||(c[3]=f=>a.value=f),rounded:"xl",variant:"outlined"},{default:C(()=>[E(_,{icon:"mdi-music-accidental-sharp",value:j(F).Accidentals.SHARP},null,8,["value"]),E(_,{icon:"mdi-music-accidental-flat",value:j(F).Accidentals.FLAT},null,8,["value"])]),_:1},8,["modelValue"])]),_:1}),E(Q,{cols:"12",sm:"6",md:"3",class:"d-flex justify-space-evenly ga-2 order-4 order-sm-2 order-md-3"},{default:C(()=>[E(ge,{modelValue:v.value,"onUpdate:modelValue":c[4]||(c[4]=f=>v.value=f),rounded:"xl",variant:"outlined"},{default:C(()=>[E(_,{icon:"mdi-sine-wave",value:"sine"}),E(_,{icon:"mdi-sawtooth-wave",value:"sawtooth"}),E(_,{icon:"mdi-square-wave",value:"square"}),E(_,{icon:"mdi-triangle-wave",value:"triangle"})]),_:1},8,["modelValue"])]),_:1}),E(Q,{cols:"6",sm:"3",md:"2",class:"d-flex align-center justify-end ga-2 order-2 order-sm-3 order-md-4"},{default:C(()=>[E(Z,{text:"Disminuir una octava aguda",location:"left"},{activator:C(({props:f})=>[E(_,H(f,{size:"small",variant:"tonal",disabled:w.value.min>=w.value.max,icon:"mdi-music-note-minus",onClick:c[5]||(c[5]=p=>g(!1))}),null,16,["disabled"])]),_:1}),E(Z,{text:"Incluir una octava aguda más",location:"top"},{activator:C(({props:f})=>[E(_,H(f,{variant:"tonal",disabled:w.value.max>=7,icon:"mdi-music-note-plus",onClick:c[6]||(c[6]=p=>g(!0))}),null,16,["disabled"])]),_:1})]),_:1})]),_:1},8,["class"]))}}),at=B({__name:"PianoKey",props:{note:{},variant:{}},emits:["pressStart","pressEnd"],setup(e,{emit:r}){const i=r,u=O(!1),m=()=>{u.value||(u.value=!0,i("pressStart",e.note.frequency.main))},l=()=>{u.value&&(u.value=!1,i("pressEnd",e.note.frequency.main))};return(t,s)=>(b(),N(_,{class:oe(`piano-key key-${t.variant}`),onMousedown:m,onMouseup:l,onTouchstart:m,onTouchend:l},{default:C(()=>[pa(t.$slots,"default",{},void 0,!0)]),_:3},8,["class"]))}}),Be=te(at,[["__scopeId","data-v-4c23215a"]]),tt={class:"text-center"},st={key:0},nt={key:1},rt=B({__name:"PianoKeyNatural",props:{showClassicSystem:{type:Boolean,default:!0},showAmericanSystem:{type:Boolean,default:!0},note:{}},setup(e){return(r,i)=>(b(),N(Be,{note:r.note,variant:"white"},{default:C(()=>[R("div",tt,[r.showClassicSystem?(b(),q("div",st,D(r.note.name.classic),1)):$("",!0),r.showAmericanSystem?(b(),q("div",nt,D(r.note.name.american),1)):$("",!0)])]),_:1},8,["note"]))}}),ot=te(rt,[["__scopeId","data-v-59d32181"]]),it={key:0},lt={key:0},ut={key:1},ct={key:1},mt={key:0},vt={key:1},dt=B({__name:"PianoKeySemiSF",props:{showClassicSystem:{type:Boolean,default:!0},showAmericanSystem:{type:Boolean,default:!0},showSemiSharps:{type:Boolean,default:!0},showSemiFlats:{type:Boolean,default:!0},note:{}},setup(e){return(r,i)=>r.note!=j(F).EmptyNote?(b(),N(Be,{key:0,note:r.note,variant:"black"},{default:C(()=>[r.showSemiSharps?(b(),q("div",it,[r.showClassicSystem?(b(),q("div",lt,[X(D(r.note.sharp.name.classic),1),i[0]||(i[0]=R("span",{class:"accidental"},"#",-1))])):$("",!0),r.showAmericanSystem?(b(),q("div",ut,[X(D(r.note.sharp.name.american),1),i[1]||(i[1]=R("span",{class:"accidental"},"#",-1))])):$("",!0)])):$("",!0),r.showSemiFlats?(b(),q("div",ct,[r.showClassicSystem?(b(),q("div",mt,[X(D(r.note.flat.name.classic),1),i[2]||(i[2]=R("span",{class:"accidental"},"b",-1))])):$("",!0),r.showAmericanSystem?(b(),q("div",vt,[X(D(r.note.flat.name.american),1),i[3]||(i[3]=R("span",{class:"accidental"},"b",-1))])):$("",!0)])):$("",!0)]),_:1},8,["note"])):(b(),N(_,{key:1,class:"key-black empty"}))}}),ft=te(dt,[["__scopeId","data-v-8d44301e"]]),yt={key:0,class:"light-tail-indicator pressed"},ht=B({__name:"PianoLightTail",props:{listenedFrequency:{default:()=>note.frequency.main},badFrequency:{type:Boolean,default:!0},note:{default:()=>F.EmptyNote},isPressed:{type:Boolean,default:!1}},emits:["key-state"],setup(e,{emit:r}){let i;(s=>{s[s.INACTIVE=0]="INACTIVE",s[s.LISTENED=2]="LISTENED",s[s.IS_BAD_LISTENED=4]="IS_BAD_LISTENED",s[s.PRESSED=8]="PRESSED",s[s.PRESSED_ANY=12]="PRESSED_ANY",s[s.LISTENED_PRESSED=10]="LISTENED_PRESSED",s[s.LISTENED_BAD=6]="LISTENED_BAD",s[s.LISTENED_PRESSED_BAD=14]="LISTENED_PRESSED_BAD"})(i||(i={}));const u=new Map([[0,"none"],[4,"none"],[2,"listened"],[8,"pressed"],[12,"pressed"],[10,"glow"],[6,"listened-bad"],[14,"pressed-bad"]]);e.note;const m=r,l=O(50),t=O(0);return ee(()=>e.badFrequency,()=>{e.badFrequency?t.value|=4:t.value&=-5,m("key-state",t.value)}),ee(()=>e.listenedFrequency,()=>{ae.IsOnRange(e.note.frequency.min,e.note.frequency.max,e.listenedFrequency)?t.value|=2:t.value&=-3,l.value=(t.value&2)==2?ae.Invlerp(e.note.frequency.min,e.note.frequency.max,e.listenedFrequency)*100:50,m("key-state",t.value)}),ee(()=>e.isPressed,()=>{e.isPressed===!0?t.value|=8:e.isPressed===!1&&(t.value&=-9),m("key-state",t.value)}),(s,n)=>(b(),q("div",{class:oe(`light-tail ${s.note.isNatural()?"":"shrink"} ${j(u).get(t.value)} ${t.value}}`)},[n[2]||(n[2]=R("div",{class:"light-tail-border left"},null,-1)),R("div",{class:"light-tail-indicator listened",style:Le(`left: ${l.value}%;`)},n[0]||(n[0]=[R("div",{class:"light-tail-indicator-point"},null,-1)]),4),t.value?(b(),q("div",yt,n[1]||(n[1]=[R("div",{class:"light-tail-indicator-point"},null,-1)]))):$("",!0),n[3]||(n[3]=R("div",{class:"light-tail-border right"},null,-1))],2))}}),pt=te(ht,[["__scopeId","data-v-8ce3d670"]]),St=B({__name:"PianoOctave",props:Te({showClassicSystem:{type:Boolean,default:!0},showAmericanSystem:{type:Boolean,default:!0},showSemiSharps:{type:Boolean,default:!0},showSemiFlats:{type:Boolean,default:!0},listenedFrequency:{default:0},badFrequency:{type:Boolean,default:!0},octaveId:{default:()=>I.OCTAVE_CENTRAL},keyPressedFrequency:{},keyUnpressedFrequency:{}},{pressedFrequencies:{default:new Set},pressedFrequenciesModifiers:{}}),emits:Te(["frequency-pressed","frequency-unpressed"],["update:pressedFrequencies"]),setup(e,{emit:r}){const i=r,u=Sa(e,"pressedFrequencies"),m=t=>{u.value.has(t)||(u.value.add(t),i("frequency-pressed",t))},l=t=>{u.value.has(t)&&(u.value.delete(t),i("frequency-unpressed",t))};return(t,s)=>(b(),N(Q,{class:"position-relative rounded-lg mt-4",xs:"12",sm:"6",md:"6",lg:"4",xl:"3",xxl:"3"},{default:C(()=>[E(ue,{class:"flex-nowrap piano-keys key-tails mx-0"},{default:C(()=>[(b(!0),q(J,null,ce(j(I).GetNotesAtOctave(t.octaveId),n=>(b(),N(pt,{key:n.frequency.main,note:n,"bad-frequency":t.badFrequency,"listened-frequency":t.listenedFrequency,"is-pressed":u.value.has(n.frequency.main)},null,8,["note","bad-frequency","listened-frequency","is-pressed"]))),128))]),_:1}),E(ue,{class:"flex-nowrap piano-keys white-keys"},{default:C(()=>[(b(!0),q(J,null,ce(j(I).GetNaturalsAtOctave(t.octaveId),n=>(b(),N(ot,{note:n,"show-classic-system":t.showClassicSystem,"show-american-system":t.showAmericanSystem,onPressStart:m,onPressEnd:l},null,8,["note","show-classic-system","show-american-system"]))),256))]),_:1}),E(ue,{class:"flex-nowrap piano-keys black-keys mt-6"},{default:C(()=>[(b(!0),q(J,null,ce(j(I).GetSemisAtOctave(t.octaveId),n=>(b(),N(ft,{note:n,"show-classic-system":t.showClassicSystem,"show-american-system":t.showAmericanSystem,"show-semi-sharps":t.showSemiSharps,"show-semi-flats":t.showSemiFlats,onPressStart:m,onPressEnd:l},null,8,["note","show-classic-system","show-american-system","show-semi-sharps","show-semi-flats"]))),256))]),_:1}),E(Q,{cols:"12",class:"piano-octave-id"},{default:C(()=>[X(D(t.octaveId),1)]),_:1})]),_:1}))}}),wt=te(St,[["__scopeId","data-v-3e739740"]]),gt=B({__name:"Piano",props:wa({activeOctaves:{},waveform:{},showClassicSystem:{type:Boolean},showAmericanSystem:{type:Boolean},showSemiSharps:{type:Boolean},showSemiFlats:{type:Boolean},listenedFrequency:{},badFrequency:{type:Boolean},classes:{}},{waveform:"sine",...Qa}),setup(e){const r=e,i=O(new Set),u=new Map,m=new Map,l=()=>{let o=null;return m.forEach((a,v)=>{if(!a){o=v;return}}),o==null&&(o=new(AudioContext||window.AudioContext||window.webkitAudioContext)),o!=null&&m.set(o,!0),o},t=o=>{if(u.get(o)!=null||o===F.EmptyNote.frequency.main)return;let a=l();if(a==null)return;let v=a.createGain(),h=a.createOscillator();const g=a.currentTime;h&&(h.type=r.waveform??"sine",h.frequency.setValueAtTime(o,g),v?(v.gain.setValueAtTime(1,g),h.connect(v),v.connect(a.destination)):h.connect(a.destination),h.start()),u.set(o,{audioCtx:a,oscillator:h,gainNode:v}),i.value.add(o)},s=o=>{let a=u.get(o);if(a){if(a.oscillator)if(a.gainNode){const v=a.audioCtx.currentTime;a.gainNode.gain.setValueAtTime(a.gainNode.gain.value,v),a.gainNode.gain.exponentialRampToValueAtTime(1e-4,v+.05),a.oscillator.stop(v+.06)}else a.oscillator.stop();setTimeout(()=>{m.set(a.audioCtx,!1),u.delete(o),i.value.delete(o)},75)}},n=o=>{const a=Fa.KEYS_CODE.indexOf(o.code);if(a===-1)return F.EmptyNote;const v=a<12,h=v?a:a-12;let g=F.EmptyNote;return o.altKey&&o.ctrlKey&&o.shiftKey?g=I.GetNotesAtOctave(v?1:2)[h]:o.altKey&&o.ctrlKey?g=I.GetNotesAtOctave(v?2:3)[h]:o.ctrlKey?g=I.GetNotesAtOctave(v?3:4)[h]:o.altKey&&o.shiftKey?g=I.GetNotesAtOctave(v?6:7)[h]:o.shiftKey?g=I.GetNotesAtOctave(v?5:6)[h]:g=I.GetNotesAtOctave(v?4:5)[h],g},d=o=>{if(o.repeat)return;const a=n(o);a!==F.EmptyNote&&(o.preventDefault(),o.stopPropagation(),t(a.frequency.main))},w=o=>{const a=n(o);a!==F.EmptyNote&&s(a.frequency.main)};return ga(d),Aa(w),(o,a)=>(b(),N(Ae,{class:oe(`bg-background ${o.classes}`)},{default:C(()=>[E(Ae,{class:"d-flex flex-wrap justify-center align-center ga-0 position-relative pa-2 pt-10",style:{"z-index":"10"}},{default:C(()=>[(b(!0),q(J,null,ce(o.activeOctaves,v=>(b(),N(wt,{octaveId:v,"listened-frequency":o.listenedFrequency,"bad-frequency":o.badFrequency,"show-classic-system":o.showClassicSystem,"show-american-system":o.showAmericanSystem,"show-semi-sharps":o.showSemiSharps,"show-semi-flats":o.showSemiFlats,"pressed-frequencies":i.value,"onUpdate:pressedFrequencies":a[0]||(a[0]=h=>i.value=h),onFrequencyPressed:t,onFrequencyUnpressed:s},null,8,["octaveId","listened-frequency","bad-frequency","show-classic-system","show-american-system","show-semi-sharps","show-semi-flats","pressed-frequencies"]))),256))]),_:1})]),_:1},8,["class"]))}}),bt=B({__name:"Home",setup(e){const r=O(!1),i=O(0),u=O(!0),m=O({note:F.EmptyNote,octave:-1}),l=O(!0),t=O(!0),s=O(!0),n=O(!0),d=O([]),w=O("sine");return(o,a)=>(b(),q(J,null,[E(Wa,{ref:"tunerRef",classes:"order-1 order-md-1 position-sticky top-0","show-american-system":t.value,"show-classic-system":l.value,"show-semi-sharps":s.value,"show-semi-flats":n.value,"onUpdate:frequency":a[0]||(a[0]=v=>i.value=v),"onUpdate:note":a[1]||(a[1]=v=>m.value=v),"onUpdate:badFrequency":a[2]||(a[2]=v=>u.value=v),onIsRunning:a[3]||(a[3]=v=>r.value=v)},null,8,["show-american-system","show-classic-system","show-semi-sharps","show-semi-flats"]),E(et,{classes:"order-3 order-md-2",onOctaves:a[4]||(a[4]=v=>{d.value=v}),"onShow:noteSystems":a[5]||(a[5]=(v,h)=>{l.value=v,t.value=h}),"onShow:noteSemis":a[6]||(a[6]=(v,h)=>{s.value=v,n.value=h}),onWaveform:a[7]||(a[7]=v=>{v&&(w.value=v)})}),E(gt,{classes:"order-2 order-md-3","active-octaves":d.value,waveform:w.value,showAmericanSystem:t.value,showClassicSystem:l.value,showSemiSharps:s.value,showSemiFlats:n.value,"listened-frequency":i.value,"bad-frequency":u.value},null,8,["active-octaves","waveform","showAmericanSystem","showClassicSystem","showSemiSharps","showSemiFlats","listened-frequency","bad-frequency"])],64))}});export{bt as default};
