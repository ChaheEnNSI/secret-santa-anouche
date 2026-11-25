var Mh=0,Gl=1,Sh=2;var Sr=1,bh=2,Ss=3,vi=0,$e=1,Ke=2,zi=0,bs=1,cn=2,Vl=3,Hl=4,wh=5;var ki=100,Th=101,Ah=102,Eh=103,Ch=104,Rh=200,Ph=201,Ih=202,Lh=203,Wl=204,Xl=205,Dh=206,Nh=207,Uh=208,Fh=209,Oh=210,Bh=211,zh=212,kh=213,Gh=214,_a=0,xa=1,va=2,ds=3,ya=4,Ma=5,Sa=6,ba=7,ql=0,Vh=1,Hh=2,Wn=0,Yl=1,Zl=2,Jl=3,Gi=4,$l=5,Kl=6,Ql=7;var jl=300,Vi=301,ws=302,ro=303,ao=304,Cn=1e3,Bn=1001,wa=1002,Xe=1003,Wh=1004;var br=1005;var rn=1006,oo=1007;var ri=1008;var _n=1009,tc=1010,ec=1011,Ts=1012,lo=1013,In=1014,Sn=1015,Ln=1016,co=1017,ho=1018,Hi=1020,nc=35902,ic=35899,sc=1021,rc=1022,Dn=1023,ei=1026,ai=1027,uo=1028,fo=1029,yi=1030,po=1031;var mo=1033,wr=33776,Tr=33777,Ar=33778,Er=33779,go=35840,_o=35841,xo=35842,vo=35843,yo=36196,Mo=37492,So=37496,bo=37488,wo=37489,Cr=37490,To=37491,Ao=37808,Eo=37809,Co=37810,Ro=37811,Po=37812,Io=37813,Lo=37814,Do=37815,No=37816,Uo=37817,Fo=37818,Oo=37819,Bo=37820,zo=37821,ko=36492,Go=36494,Vo=36495,Ho=36283,Wo=36284,Rr=36285,Xo=36286;var Xs=2300,Ta=2301,ma=2302,Rl=2303,Pl=2400,Il=2401,Ll=2402;var Xh=3200;var qo=0,qh=1,oi="",Ee="srgb",qs="srgb-linear",Ys="linear",be="srgb";var ga=7680;var Yh=519,Zh=512,Jh=513,$h=514,ac=515,Kh=516,Qh=517,oc=518,lc=519,cc=35044;var hc="300 es",vn=2e3,Zs=2001;function Zu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ju(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jh(){let i=Js("canvas");return i.style.display="block",i}var Uc={},fs=null;function $s(...i){let t="THREE."+i.shift();fs?fs("log",t,...i):console.log(t,...i)}function tu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ne(...i){i=tu(i);let t="THREE."+i.shift();if(fs)fs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ie(...i){i=tu(i);let t="THREE."+i.shift();if(fs)fs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Di(...i){let t=i.join(" ");t in Uc||(Uc[t]=!0,ne(...i))}function eu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var nu={[_a]:_a,[va]:Sa,[ya]:ya,[ds]:Ma,[xa]:xa,[Sa]:va,[ba]:ba,[Ma]:ds},zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var il=Math.PI/180,Aa=180/Math.PI;function Mi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function $u(i,t){return(i%t+t)%t}function sl(i,t,e){return(1-e)*i+e*t}function iu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function su(i,t){if(t.constructor===Float32Array)return i;let e=Yo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function ru(i,t){if(t.constructor===Float32Array)return i;let e=Yo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var gc=class gc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gc.prototype.isVector2=!0;var dt=gc,hn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(f!==x||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+f*x;m<0&&(u=-u,d=-d,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let v=Math.acos(m),w=Math.sin(v);p=Math.sin(p*v)/w,o=Math.sin(o*v)/w,l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+x*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-o*d,t[e+2]=c*g+h*d+o*u-l*f,t[e+3]=h*g-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_c=class _c{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rl.copy(this).projectOnVector(t),this.sub(rl)}reflect(t){return this.sub(rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_c.prototype.isVector3=!0;var I=_c,rl=new I,Fc=new hn,xc=class xc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],w=s[4],S=s[7],C=s[2],T=s[5],_=s[8];return r[0]=a*x+o*v+l*C,r[3]=a*m+o*w+l*T,r[6]=a*p+o*S+l*_,r[1]=c*x+h*v+f*C,r[4]=c*m+h*w+f*T,r[7]=c*p+h*S+f*_,r[2]=u*x+d*v+g*C,r[5]=u*m+d*w+g*T,r[8]=u*p+d*S+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Di("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(al.makeScale(t,e)),this}rotate(t){return Di("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(al.makeRotation(-t)),this}translate(t,e){return Di("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};xc.prototype.isMatrix3=!0;var re=xc,al=new re,Oc=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bc=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ku(){let i={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===be&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===be&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?Ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qs]:{primaries:t,whitePoint:n,transfer:Ys,toXYZ:Oc,fromXYZ:Bc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:n,transfer:be,toXYZ:Oc,fromXYZ:Bc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),i}var ge=Ku();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yi,Ea=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Yi===void 0&&(Yi=Js("canvas")),Yi.width=t.width,Yi.height=t.height;let s=Yi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Yi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Js("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qu=0,ps=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ol(s[a].image)):r.push(ol(s[a]))}else r=ol(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ol(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ea.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}var ju=0,ll=new I,an=class i extends zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=rn,a=ri,o=Dn,l=_n,c=i.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Mi(),this.name="",this.source=new ps(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ll).x}get height(){return this.source.getSize(ll).y}get depth(){return this.source.getSize(ll).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ne(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ne(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cn:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cn:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=jl;an.DEFAULT_ANISOTROPY=1;var vc=class vc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,S=(d+1)/2,C=(p+1)/2,T=(h+u)/4,_=(f+x)/4,b=(g+m)/4;return w>S&&w>C?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=_/n):S>C?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=b/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=_/r,s=b/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vc.prototype.isVector4=!0;var Re=vc,Ca=class extends zn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new an({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ps(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends Ca{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ks=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ra=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var so=class so{constructor(t,e,n,s,r,a,o,l,c,h,f,u,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,d,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,f,u,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new so().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,g=o*h,x=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,g=c*h,x=c*f;e[0]=u+x*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,g=c*h,x=c*f;e[0]=u-x*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,g=o*h,x=o*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-x*f}else if(t.order==="XZY"){let u=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(td,t,ed)}lookAt(t,e,n){let s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),ci.crossVectors(n,dn),ci.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),ci.crossVectors(n,dn)),ci.normalize(),zr.crossVectors(dn,ci),s[0]=ci.x,s[4]=zr.x,s[8]=dn.x,s[1]=ci.y,s[5]=zr.y,s[9]=dn.y,s[2]=ci.z,s[6]=zr.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],w=n[7],S=n[11],C=n[15],T=s[0],_=s[4],b=s[8],D=s[12],E=s[1],N=s[5],F=s[9],G=s[13],L=s[2],V=s[6],Z=s[10],q=s[14],ot=s[3],K=s[7],st=s[11],at=s[15];return r[0]=a*T+o*E+l*L+c*ot,r[4]=a*_+o*N+l*V+c*K,r[8]=a*b+o*F+l*Z+c*st,r[12]=a*D+o*G+l*q+c*at,r[1]=h*T+f*E+u*L+d*ot,r[5]=h*_+f*N+u*V+d*K,r[9]=h*b+f*F+u*Z+d*st,r[13]=h*D+f*G+u*q+d*at,r[2]=g*T+x*E+m*L+p*ot,r[6]=g*_+x*N+m*V+p*K,r[10]=g*b+x*F+m*Z+p*st,r[14]=g*D+x*G+m*q+p*at,r[3]=v*T+w*E+S*L+C*ot,r[7]=v*_+w*N+S*V+C*K,r[11]=v*b+w*F+S*Z+C*st,r[15]=v*D+w*G+S*q+C*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15],v=l*d-c*u,w=o*d-c*f,S=o*u-l*f,C=a*d-c*h,T=a*u-l*h,_=a*f-o*h;return e*(x*v-m*w+p*S)-n*(g*v-m*C+p*T)+s*(g*w-x*C+p*_)-r*(g*S-x*T+m*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=e*o-n*a,w=e*l-s*a,S=e*c-r*a,C=n*l-s*o,T=n*c-r*o,_=s*c-r*l,b=h*x-f*g,D=h*m-u*g,E=h*p-d*g,N=f*m-u*x,F=f*p-d*x,G=u*p-d*m,L=v*G-w*F+S*N+C*E-T*D+_*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/L;return t[0]=(o*G-l*F+c*N)*V,t[1]=(s*F-n*G-r*N)*V,t[2]=(x*_-m*T+p*C)*V,t[3]=(u*T-f*_-d*C)*V,t[4]=(l*E-a*G-c*D)*V,t[5]=(e*G-s*E+r*D)*V,t[6]=(m*S-g*_-p*w)*V,t[7]=(h*_-u*S+d*w)*V,t[8]=(a*F-o*E+c*b)*V,t[9]=(n*E-e*F-r*b)*V,t[10]=(g*T-x*S+p*v)*V,t[11]=(f*S-h*T-d*v)*V,t[12]=(o*D-a*N-l*b)*V,t[13]=(e*N-n*D+s*b)*V,t[14]=(x*w-g*C-m*v)*V,t[15]=(h*C-f*w+u*v)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,x=a*h,m=a*f,p=o*f,v=l*c,w=l*h,S=l*f,C=n.x,T=n.y,_=n.z;return s[0]=(1-(x+p))*C,s[1]=(d+S)*C,s[2]=(g-w)*C,s[3]=0,s[4]=(d-S)*T,s[5]=(1-(u+p))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+w)*_,s[9]=(m-v)*_,s[10]=(1-(u+x))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Zi.set(s[0],s[1],s[2]).length(),o=Zi.set(s[4],s[5],s[6]).length(),l=Zi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),wn.copy(this);let c=1/a,h=1/o,f=1/l;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,e.setFromRotationMatrix(wn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=vn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===vn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Zs)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=vn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===vn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Zs)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};so.prototype.isMatrix4=!0;var we=so,Zi=new I,wn=new we,td=new I(0,0,0),ed=new I(1,1,1),ci=new I,zr=new I,dn=new I,zc=new we,kc=new hn,Rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kc.setFromEuler(this),this.setFromQuaternion(kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var ms=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nd=0,Gc=new I,Ji=new hn,Zn=new we,kr=new I,Ls=new I,id=new I,sd=new hn,Vc=new I(1,0,0),Hc=new I(0,1,0),Wc=new I(0,0,1),Xc={type:"added"},rd={type:"removed"},$i={type:"childadded",child:null},cl={type:"childremoved",child:null},Je=class i extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Rn,n=new hn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new re}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(Vc,t)}rotateY(t){return this.rotateOnAxis(Hc,t)}rotateZ(t){return this.rotateOnAxis(Wc,t)}translateOnAxis(t,e){return Gc.copy(t).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vc,t)}translateY(t){return this.translateOnAxis(Hc,t)}translateZ(t){return this.translateOnAxis(Wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Ls,kr,this.up):Zn.lookAt(kr,Ls,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Zn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xc),$i.child=t,this.dispatchEvent($i),$i.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rd),cl.child=t,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xc),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,id),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,sd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new I(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Be=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},ad={type:"move"},gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ad)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function hl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var te=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=$u(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=hl(a,r,t+1/3),this.g=hl(a,r,t),this.b=hl(a,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ne("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let n=au[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return ge.workingToColorSpace(tn.copy(this),t),Math.round(me(tn.r*255,0,255))*65536+Math.round(me(tn.g*255,0,255))*256+Math.round(me(tn.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(tn.copy(this),e);let n=tn.r,s=tn.g,r=tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Ee){ge.workingToColorSpace(tn.copy(this),t);let e=tn.r,n=tn.g,s=tn.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Gr);let n=sl(hi.h,Gr.h,e),s=sl(hi.s,Gr.s,e),r=sl(hi.l,Gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new te;te.NAMES=au;var pi=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Tn=new I,Jn=new I,ul=new I,$n=new I,Ki=new I,Qi=new I,qc=new I,dl=new I,fl=new I,pl=new I,ml=new Re,gl=new Re,_l=new Re,jn=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),Jn.subVectors(n,e),ul.subVectors(t,e);let a=Tn.dot(Tn),o=Tn.dot(Jn),l=Tn.dot(ul),c=Jn.dot(Jn),h=Jn.dot(ul),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ml.setScalar(0),gl.setScalar(0),_l.setScalar(0),ml.fromBufferAttribute(t,e),gl.fromBufferAttribute(t,n),_l.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ml,r.x),a.addScaledVector(gl,r.y),a.addScaledVector(_l,r.z),a}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),Jn.subVectors(t,e),Tn.cross(Jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Tn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ki.subVectors(s,n),Qi.subVectors(r,n),dl.subVectors(t,n);let l=Ki.dot(dl),c=Qi.dot(dl);if(l<=0&&c<=0)return e.copy(n);fl.subVectors(t,s);let h=Ki.dot(fl),f=Qi.dot(fl);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Ki,a);pl.subVectors(t,r);let d=Ki.dot(pl),g=Qi.dot(pl);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Qi,o);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return qc.subVectors(r,s),o=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(qc,o);let p=1/(m+x+u);return a=x*p,o=u*p,e.copy(n).addScaledVector(Ki,a).addScaledVector(Qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vr.copy(n.boundingBox)),Vr.applyMatrix4(t.matrixWorld),this.union(Vr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),Hr.subVectors(this.max,Ds),ji.subVectors(t.a,Ds),ts.subVectors(t.b,Ds),es.subVectors(t.c,Ds),ui.subVectors(ts,ji),di.subVectors(es,ts),Ci.subVectors(ji,es);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ci.z,Ci.y,ui.z,0,-ui.x,di.z,0,-di.x,Ci.z,0,-Ci.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ci.y,Ci.x,0];return!xl(e,ji,ts,es,Hr)||(e=[1,0,0,0,1,0,0,0,1],!xl(e,ji,ts,es,Hr))?!1:(Wr.crossVectors(ui,di),e=[Wr.x,Wr.y,Wr.z],xl(e,ji,ts,es,Hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Kn=[new I,new I,new I,new I,new I,new I,new I,new I],An=new I,Vr=new kn,ji=new I,ts=new I,es=new I,ui=new I,di=new I,Ci=new I,Ds=new I,Hr=new I,Wr=new I,Ri=new I;function xl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ri.fromArray(i,r);let o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),l=t.dot(Ri),c=e.dot(Ri),h=n.dot(Ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ue=new I,Xr=new dt,od=0,Te=class extends zn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:od++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cc,this.updateRanges=[],this.gpuType=Sn,this.version=0,this._normalizationScale=t!==void 0?Yo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xr.fromBufferAttribute(this,e),Xr.applyMatrix3(t),this.setXY(e,Xr.x,Xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):su(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):ru(t,this.array)}};var Qs=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var js=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xe=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},ld=new kn,Ns=new I,vl=new I,yn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ld.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);let e=Ns.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ns,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(vl)),this.expandByPoint(Ns.copy(t.center).sub(vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},cd=0,xn=new we,yl=new Je,ns=new I,fn=new kn,Us=new kn,We=new I,Pe=class i extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zu(t)?js:Qs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return yl.lookAt(t),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(We.addVectors(fn.min,Us.min),fn.expandByPoint(We),We.addVectors(fn.max,Us.max),fn.expandByPoint(We)):(fn.expandByPoint(Us.min),fn.expandByPoint(Us.max))}fn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)We.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(t,c),We.add(ns)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Te(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new I,l[D]=new I;let h=new I,f=new I,u=new I,d=new dt,g=new dt,x=new dt,m=new I,p=new I;function v(D,E,N){c[D]=c[E]=c[N]=1,h.fromBufferAttribute(n,D),f.fromBufferAttribute(n,E),u.fromBufferAttribute(n,N),d.fromBufferAttribute(r,D),g.fromBufferAttribute(r,E),x.fromBufferAttribute(r,N),f.sub(h),u.sub(h),g.sub(d),x.sub(d);let F=1/(g.x*x.y-x.x*g.y);isFinite(F)&&(m.copy(f).multiplyScalar(x.y).addScaledVector(u,-g.y).multiplyScalar(F),p.copy(u).multiplyScalar(g.x).addScaledVector(f,-x.x).multiplyScalar(F),o[D].add(m),o[E].add(m),o[N].add(m),l[D].add(p),l[E].add(p),l[N].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let D=0,E=w.length;D<E;++D){let N=w[D],F=N.start,G=N.count;for(let L=F,V=F+G;L<V;L+=3)v(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let S=new I,C=new I,T=new I,_=new I;function b(D){T.fromBufferAttribute(s,D),_.copy(T);let E=o[D];S.copy(E),S.sub(T.multiplyScalar(T.dot(E))).normalize(),C.crossVectors(_,E);let F=C.dot(l[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,F)}for(let D=0,E=n.count;D<E;++D)c[D]&&b(D);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,f=new I;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new Te(u,h,f)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=cc,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Yc(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Yc(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Yc(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Mi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var sn=new I,tr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Yo(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){$s("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){$s("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):su(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):ru(t,this.data.array)}},Ml=new I,hd=new I,ud=new re,En=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ml.subVectors(n,e).cross(hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ml),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ud.getNormalMatrix(t),s=this.coplanarPoint(Ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},dd=0,Pn=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=bs,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ga,this.stencilZFail=ga,this.stencilZPass=ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ne(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ne(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new te().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new En().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new dt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new dt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},on=class extends Pn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},is,Fs=new I,ss=new I,rs=new I,as=new dt,Os=new dt,ou=new we,qr=new I,Bs=new I,Yr=new I,Zc=new dt,Sl=new dt,Jc=new dt,un=class extends Je{constructor(t=new on){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new Pe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pa(e,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new tr(n,3,0,!1)),is.setAttribute("uv",new tr(n,2,3,!1))}this.geometry=is,this.material=t,this.center=new dt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ie('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),ou.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-rs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Zr(qr.set(-.5,-.5,0),rs,a,ss,s,r),Zr(Bs.set(.5,-.5,0),rs,a,ss,s,r),Zr(Yr.set(.5,.5,0),rs,a,ss,s,r),Zc.set(0,0),Sl.set(1,0),Jc.set(1,1);let o=t.ray.intersectTriangle(qr,Bs,Yr,!1,Fs);if(o===null&&(Zr(Bs.set(-.5,.5,0),rs,a,ss,s,r),Sl.set(0,1),o=t.ray.intersectTriangle(qr,Yr,Bs,!1,Fs),o===null))return;let l=t.ray.origin.distanceTo(Fs);l<t.near||l>t.far||e.push({distance:l,point:Fs.clone(),uv:jn.getInterpolation(Fs,qr,Bs,Yr,Zc,Sl,Jc,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Zr(i,t,e,n,s,r){as.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Os.x=r*as.x-s*as.y,Os.y=s*as.x+r*as.y):Os.copy(as),i.copy(t),i.x+=Os.x,i.y+=Os.y,i.applyMatrix4(ou)}var Qn=new I,bl=new I,Jr=new I,$r=new I,ni=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){bl.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),$r.copy(this.origin).sub(bl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Jr),o=$r.dot(this.direction),l=-$r.dot(Jr),c=$r.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let x=1/h;f*=x,u*=x,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(bl).addScaledVector(Jr,u),d}intersectSphere(t,e){if(t.radius<0)return null;Qn.subVectors(t.center,this.origin);let n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,x=e.y-a.y,m=e.z-a.z,p=n.x-a.x,v=n.y-a.y,w=n.z-a.z,S=Math.abs(l),C=Math.abs(c),T=Math.abs(h),_,b,D,E,N,F,G,L,V,Z,q,ot;if(S>=C&&S>=T?(D=l,F=f,V=g,ot=p,l>=0?(_=c,b=h,E=u,N=d,G=x,L=m,Z=v,q=w):(_=h,b=c,E=d,N=u,G=m,L=x,Z=w,q=v)):C>=T?(D=c,F=u,V=x,ot=v,c>=0?(_=h,b=l,E=d,N=f,G=m,L=g,Z=w,q=p):(_=l,b=h,E=f,N=d,G=g,L=m,Z=p,q=w)):(D=h,F=d,V=m,ot=w,h>=0?(_=l,b=c,E=f,N=u,G=g,L=x,Z=p,q=v):(_=c,b=l,E=u,N=f,G=x,L=g,Z=v,q=p)),D===0)return null;let K=_/D,st=b/D,at=1/D,It=E-K*F,Ht=N-st*F,tt=G-K*V,Rt=L-st*V,Lt=Z-K*ot,kt=q-st*ot,Dt=Lt*Rt-kt*tt,ut=It*kt-Ht*Lt,B=tt*Ht-Rt*It;if(s){if(Dt<0||ut<0||B<0)return null}else if((Dt<0||ut<0||B<0)&&(Dt>0||ut>0||B>0))return null;let Yt=Dt+ut+B;if(Yt===0)return null;let Nt=at*(Dt*F+ut*V+B*ot);return(Yt>0?Nt<0:Nt>0)?null:this.at(Nt/Yt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gn=class extends Pn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},$c=new we,Pi=new ni,Kr=new yn,Kc=new I,Qr=new I,jr=new I,ta=new I,wl=new I,ea=new I,Qc=new I,na=new I,_e=class extends Je{constructor(t=new Pe,e=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(wl.fromBufferAttribute(f,t),a?ea.addScaledVector(wl,h):ea.addScaledVector(wl.sub(e),h))}e.add(ea)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(Kr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Kr,Kc)===null||Pi.origin.distanceToSquared(Kc)>(t.far-t.near)**2))&&($c.copy(r).invert(),Pi.copy(t.ray).applyMatrix4($c),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],v=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=v,C=w;S<C;S+=3){let T=o.getX(S),_=o.getX(S+1),b=o.getX(S+2);s=ia(this,p,t,n,c,h,f,T,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=o.getX(m),w=o.getX(m+1),S=o.getX(m+2);s=ia(this,a,t,n,c,h,f,v,w,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],v=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=v,C=w;S<C;S+=3){let T=S,_=S+1,b=S+2;s=ia(this,p,t,n,c,h,f,T,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=m,w=m+1,S=m+2;s=ia(this,a,t,n,c,h,f,v,w,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function fd(i,t,e,n,s,r,a,o){let l;if(t.side===$e?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===vi,o),l===null)return null;na.copy(o),na.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(na);return c<e.near||c>e.far?null:{distance:c,point:na.clone(),object:i}}function ia(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Qr),i.getVertexPosition(l,jr),i.getVertexPosition(c,ta);let h=fd(i,t,e,n,Qr,jr,ta,Qc);if(h){let f=new I;jn.getBarycoord(Qc,Qr,jr,ta,f),s&&(h.uv=jn.getInterpolatedAttribute(s,o,l,c,f,new dt)),r&&(h.uv1=jn.getInterpolatedAttribute(r,o,l,c,f,new dt)),a&&(h.normal=jn.getInterpolatedAttribute(a,o,l,c,f,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};jn.getNormal(Qr,jr,ta,u.normal),h.face=u,h.barycoord=f}return h}var er=class extends an{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Xe,h=Xe,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nr=class extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},os=new we,jc=new we,sa=[],th=new kn,pd=new we,zs=new _e,ks=new yn,ir=class extends _e{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,pd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),th.copy(t.boundingBox).applyMatrix4(os),this.boundingBox.union(th)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),ks.copy(t.boundingSphere).applyMatrix4(os),this.boundingSphere.union(ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ks.copy(this.boundingSphere),ks.applyMatrix4(n),t.ray.intersectsSphere(ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),jc.multiplyMatrices(n,os),zs.matrixWorld=jc,zs.raycast(t,sa);for(let a=0,o=sa.length;a<o;a++){let l=sa[a];l.instanceId=r,l.object=this,e.push(l)}sa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new er(new Float32Array(s*this.count),s,this.count,uo,Sn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ii=new yn,md=new dt(.5,.5),ra=new I,Ni=class{constructor(t=new En,e=new En,n=new En,s=new En,r=new En,a=new En){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],v=r[12],w=r[13],S=r[14],C=r[15];if(s[0].setComponents(c-a,d-h,p-g,C-v).normalize(),s[1].setComponents(c+a,d+h,p+g,C+v).normalize(),s[2].setComponents(c+o,d+f,p+x,C+w).normalize(),s[3].setComponents(c-o,d-f,p-x,C-w).normalize(),n)s[4].setComponents(l,u,m,S).normalize(),s[5].setComponents(c-l,d-u,p-m,C-S).normalize();else if(s[4].setComponents(c-l,d-u,p-m,C-S).normalize(),e===vn)s[5].setComponents(c+l,d+u,p+m,C+S).normalize();else if(e===Zs)s[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){Ii.center.set(0,0,0);let e=md.distanceTo(t.center);return Ii.radius=.7071067811865476+e,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ra.x=s.normal.x>0?t.max.x:t.min.x,ra.y=s.normal.y>0?t.max.y:t.min.y,ra.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},eh=new we,Ia=class i{constructor(){this.coordinateSystem=vn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];eh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ni),n[s].setFromProjectionMatrix(eh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ni),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var _s=class extends Pn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},La=new I,Da=new I,nh=new we,Gs=new ni,aa=new yn,Tl=new I,ih=new I,Na=class extends Je{constructor(t=new Pe,e=new _s){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)La.fromBufferAttribute(e,s-1),Da.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=La.distanceTo(Da);t.setAttribute("lineDistance",new xe(n,1))}else ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,t.ray.intersectsSphere(aa)===!1)return;nh.copy(s).invert(),Gs.copy(t.ray).applyMatrix4(nh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=c){let p=h.getX(x),v=h.getX(x+1),w=oa(this,t,Gs,l,p,v,x);w&&e.push(w)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=oa(this,t,Gs,l,x,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=c){let p=oa(this,t,Gs,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=oa(this,t,Gs,l,g-1,d,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function oa(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(La.fromBufferAttribute(o,s),Da.fromBufferAttribute(o,r),e.distanceSqToSegment(La,Da,Tl,ih)>n)return;Tl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Tl);if(!(c<t.near||c>t.far))return{distance:c,point:ih.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var sh=new I,rh=new I,sr=class extends Na{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)sh.fromBufferAttribute(e,s),rh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+sh.distanceTo(rh);t.setAttribute("lineDistance",new xe(n,1))}else ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ua=class extends Pn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ah=new we,Dl=new ni,la=new yn,ca=new I,Ui=class extends Je{constructor(t=new Pe,e=new Ua){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(s),la.radius+=r,t.ray.intersectsSphere(la)===!1)return;ah.copy(s).invert(),Dl.copy(t.ray).applyMatrix4(ah);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=u,x=d;g<x;g++){let m=c.getX(g);ca.fromBufferAttribute(f,m),oh(ca,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=u,x=d;g<x;g++)ca.fromBufferAttribute(f,g),oh(ca,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function oh(i,t,e,n,s,r,a){let o=Dl.distanceSqToPoint(i);if(o<e){let l=new I;Dl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var rr=class extends an{constructor(t=[],e=Vi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Fe=class extends an{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ii=class extends an{constructor(t,e,n=In,s,r,a,o=Xe,l=Xe,c,h=ei,f=1){if(h!==ei&&h!==ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ps(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ar=class extends ii{constructor(t,e=In,n=Vi,s,r,a=Xe,o=Xe,l,c=ei){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},or=class extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Vn=class i extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(f,2));function g(x,m,p,v,w,S,C,T,_,b,D){let E=S/_,N=C/b,F=S/2,G=C/2,L=T/2,V=_+1,Z=b+1,q=0,ot=0,K=new I;for(let st=0;st<Z;st++){let at=st*N-G;for(let It=0;It<V;It++){let Ht=It*E-F;K[x]=Ht*v,K[m]=at*w,K[p]=L,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[p]=T>0?1:-1,h.push(K.x,K.y,K.z),f.push(It/_),f.push(1-st/b),q+=1}}for(let st=0;st<b;st++)for(let at=0;at<_;at++){let It=u+at+V*st,Ht=u+at+V*(st+1),tt=u+(at+1)+V*(st+1),Rt=u+(at+1)+V*st;l.push(It,Ht,Rt),l.push(Ht,tt,Rt),ot+=6}o.addGroup(d,ot,D),d+=ot,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var lr=class i extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new I,h=new dt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(o,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},si=class i extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,x=[],m=n/2,p=0;v(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(d,2));function v(){let S=new I,C=new I,T=0,_=(e-t)/n;for(let b=0;b<=r;b++){let D=[],E=b/r,N=E*(e-t)+t;for(let F=0;F<=s;F++){let G=F/s,L=G*l+o,V=Math.sin(L),Z=Math.cos(L);C.x=N*V,C.y=-E*n+m,C.z=N*Z,f.push(C.x,C.y,C.z),S.set(V,_,Z).normalize(),u.push(S.x,S.y,S.z),d.push(G,1-E),D.push(g++)}x.push(D)}for(let b=0;b<s;b++)for(let D=0;D<r;D++){let E=x[D][b],N=x[D+1][b],F=x[D+1][b+1],G=x[D][b+1];(t>0||D!==0)&&(h.push(E,N,G),T+=3),(e>0||D!==r-1)&&(h.push(N,F,G),T+=3)}c.addGroup(p,T,0),p+=T}function w(S){let C=g,T=new dt,_=new I,b=0,D=S===!0?t:e,E=S===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*E,0),u.push(0,E,0),d.push(.5,.5),g++;let N=g;for(let F=0;F<=s;F++){let L=F/s*l+o,V=Math.cos(L),Z=Math.sin(L);_.x=D*Z,_.y=m*E,_.z=D*V,f.push(_.x,_.y,_.z),u.push(0,E,0),T.x=V*.5+.5,T.y=Z*.5*E+.5,d.push(T.x,T.y),g++}for(let F=0;F<s;F++){let G=C+F,L=N+F;S===!0?h.push(L,L+1,G):h.push(L+1,L,G),b+=3}c.addGroup(p,b,S===!0?1:2),p+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Fa=class i extends Pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(r.slice(),3)),this.setAttribute("uv",new xe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let w=new I,S=new I,C=new I;for(let T=0;T<e.length;T+=3)d(e[T+0],w),d(e[T+1],S),d(e[T+2],C),l(w,S,C,v)}function l(v,w,S,C){let T=C+1,_=[];for(let b=0;b<=T;b++){_[b]=[];let D=v.clone().lerp(S,b/T),E=w.clone().lerp(S,b/T),N=T-b;for(let F=0;F<=N;F++)F===0&&b===T?_[b][F]=D:_[b][F]=D.clone().lerp(E,F/N)}for(let b=0;b<T;b++)for(let D=0;D<2*(T-b)-1;D++){let E=Math.floor(D/2);D%2===0?(u(_[b][E+1]),u(_[b+1][E]),u(_[b][E])):(u(_[b][E+1]),u(_[b+1][E+1]),u(_[b+1][E]))}}function c(v){let w=new I;for(let S=0;S<r.length;S+=3)w.x=r[S+0],w.y=r[S+1],w.z=r[S+2],w.normalize().multiplyScalar(v),r[S+0]=w.x,r[S+1]=w.y,r[S+2]=w.z}function h(){let v=new I;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];let S=m(v)/2/Math.PI+.5,C=p(v)/Math.PI+.5;a.push(S,1-C)}g(),f()}function f(){for(let v=0;v<a.length;v+=6){let w=a[v+0],S=a[v+2],C=a[v+4],T=Math.max(w,S,C),_=Math.min(w,S,C);T>.9&&_<.1&&(w<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function d(v,w){let S=v*3;w.x=t[S+0],w.y=t[S+1],w.z=t[S+2]}function g(){let v=new I,w=new I,S=new I,C=new I,T=new dt,_=new dt,b=new dt;for(let D=0,E=0;D<r.length;D+=9,E+=6){v.set(r[D+0],r[D+1],r[D+2]),w.set(r[D+3],r[D+4],r[D+5]),S.set(r[D+6],r[D+7],r[D+8]),T.set(a[E+0],a[E+1]),_.set(a[E+2],a[E+3]),b.set(a[E+4],a[E+5]),C.copy(v).add(w).add(S).divideScalar(3);let N=m(C);x(T,E+0,v,N),x(_,E+2,w,N),x(b,E+4,S,N)}}function x(v,w,S,C){C<0&&v.x===1&&(a[w]=v.x-1),S.x===0&&S.z===0&&(a[w]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ne("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new dt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new we;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(me(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(me(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},xs=class extends mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Oa=class extends xs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function uc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var lh=new I,ch=new I,Al=new uc,El=new uc,Cl=new uc,Ba=class extends mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ch.subVectors(s[0],s[1]).add(s[0]),c=ch);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(lh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=lh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Al.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,x,m),El.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,x,m),Cl.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Al.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),El.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Cl.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Al.calc(l),El.calc(l),Cl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function hh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function gd(i,t){let e=1-i;return e*e*t}function _d(i,t){return 2*(1-i)*i*t}function xd(i,t){return i*i*t}function Hs(i,t,e,n){return gd(i,t)+_d(i,e)+xd(i,n)}function vd(i,t){let e=1-i;return e*e*e*t}function yd(i,t){let e=1-i;return 3*e*e*i*t}function Md(i,t){return 3*(1-i)*i*i*t}function Sd(i,t){return i*i*i*t}function Ws(i,t,e,n,s){return vd(i,t)+yd(i,e)+Md(i,n)+Sd(i,s)}var cr=class extends mn{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ws(t,s.x,r.x,a.x,o.x),Ws(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},za=class extends mn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ws(t,s.x,r.x,a.x,o.x),Ws(t,s.y,r.y,a.y,o.y),Ws(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},hr=class extends mn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ka=class extends mn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ur=class extends mn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Hs(t,s.x,r.x,a.x),Hs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ga=class extends mn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Hs(t,s.x,r.x,a.x),Hs(t,s.y,r.y,a.y),Hs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dr=class extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(hh(o,l.x,c.x,h.x,f.x),hh(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new dt().fromArray(s))}return this}},Nl=Object.freeze({__proto__:null,ArcCurve:Oa,CatmullRomCurve3:Ba,CubicBezierCurve:cr,CubicBezierCurve3:za,EllipseCurve:xs,LineCurve:hr,LineCurve3:ka,QuadraticBezierCurve:ur,QuadraticBezierCurve3:Ga,SplineCurve:dr}),Va=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Nl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},fr=class extends Va{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new hr(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ur(this.currentPoint.clone(),new dt(t,e),new dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new cr(this.currentPoint.clone(),new dt(t,e),new dt(n,s),new dt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new dr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new xs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vs=class extends fr{constructor(t){super(t),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new fr().fromJSON(s))}return this}};function bd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=lu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Cd(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,f=l;for(let u=e;u<s;u+=e){let d=i[u],g=i[u+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return pr(r,a,e,o,l,c,0),a}function lu(i,t,e,n,s){let r;if(s===zd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=uh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=uh(a/n|0,i[a],i[a+1],r);return r&&ys(r,r.next)&&(gr(r),r=r.next),r}function Fi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ys(e,e.next)||De(e.prev,e,e.next)===0)){if(gr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function pr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Dd(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Td(i,n,s,r):wd(i)){t.push(l.i,i.i,c.i),gr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ad(Fi(i),t),pr(i,t,e,n,s,r,2)):a===2&&Ed(i,t,e,n,s,r):pr(Fi(i),t,e,n,s,r,1);break}}}function wd(i){let t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Vs(s,o,r,l,a,c,g.x,g.y)&&De(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Td(i,t,e,n){let s=i.prev,r=i,a=i.next;if(De(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),g=Math.min(h,f,u),x=Math.max(o,l,c),m=Math.max(h,f,u),p=Ul(d,g,t,e,n),v=Ul(x,m,t,e,n),w=i.prevZ,S=i.nextZ;for(;w&&w.z>=p&&S&&S.z<=v;){if(w.x>=d&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&Vs(o,h,l,f,c,u,w.x,w.y)&&De(w.prev,w,w.next)>=0||(w=w.prevZ,S.x>=d&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Vs(o,h,l,f,c,u,S.x,S.y)&&De(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;w&&w.z>=p;){if(w.x>=d&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&Vs(o,h,l,f,c,u,w.x,w.y)&&De(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;S&&S.z<=v;){if(S.x>=d&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Vs(o,h,l,f,c,u,S.x,S.y)&&De(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Ad(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ys(n,s)&&hu(n,e,e.next,s)&&mr(n,s)&&mr(s,n)&&(t.push(n.i,e.i,s.i),gr(e),gr(e.next),e=i=s),e=e.next}while(e!==i);return Fi(e)}function Ed(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Fd(a,o)){let l=uu(a,o);a=Fi(a,a.next),l=Fi(l,l.next),pr(a,t,e,n,s,r,0),pr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Cd(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=lu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Ud(c))}s.sort(Rd);for(let r=0;r<s.length;r++)e=Pd(s[r],e);return e}function Rd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Pd(i,t){let e=Id(i,t);if(!e)return t;let n=uu(e,i);return Fi(n,n.next),Fi(e,e.next)}function Id(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(ys(i,e))return e;do{if(ys(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&cu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);mr(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&Ld(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function Ld(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function Dd(i,t,e,n){let s=i;do s.z===0&&(s.z=Ul(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Nd(s)}function Nd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Ul(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ud(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function cu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Vs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&cu(i,t,e,n,s,r,a,o)}function Fd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Od(i,t)&&(mr(i,t)&&mr(t,i)&&Bd(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||ys(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ys(i,t){return i.x===t.x&&i.y===t.y}function hu(i,t,e,n){let s=ua(De(i,t,e)),r=ua(De(i,t,n)),a=ua(De(e,n,i)),o=ua(De(e,n,t));return!!(s!==r&&a!==o||s===0&&ha(i,e,t)||r===0&&ha(i,n,t)||a===0&&ha(e,i,n)||o===0&&ha(e,t,n))}function ha(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ua(i){return i>0?1:i<0?-1:0}function Od(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&hu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function mr(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function Bd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function uu(i,t){let e=Fl(i.i,i.x,i.y),n=Fl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function uh(i,t,e,n){let s=Fl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ol=class{static triangulate(t,e,n=2){return bd(t,e,n)}},Li=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];dh(t),fh(n,t);let a=t.length;e.forEach(dh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,fh(n,e[l]);let o=Ol.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function dh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function fh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var _r=class i extends Pe{constructor(t=new vs([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:kd,w,S=!1,C,T,_,b;if(p){w=p.getSpacedPoints(h),S=!0,u=!1;let $=p.isCatmullRomCurve3?p.closed:!1;C=p.computeFrenetFrames(h,$),T=new I,_=new I,b=new I}u||(m=0,d=0,g=0,x=0);let D=o.extractPoints(c),E=D.shape,N=D.holes;if(!Li.isClockWise(E)){E=E.reverse();for(let $=0,vt=N.length;$<vt;$++){let pt=N[$];Li.isClockWise(pt)&&(N[$]=pt.reverse())}}function G($){let pt=10000000000000001e-36,Bt=$[0];for(let At=1;At<=$.length;At++){let se=At%$.length,J=$[se],rt=J.x-Bt.x,Ct=J.y-Bt.y,Jt=rt*rt+Ct*Ct,U=Math.max(Math.abs(J.x),Math.abs(J.y),Math.abs(Bt.x),Math.abs(Bt.y)),ue=pt*U*U;if(Jt<=ue){$.splice(se,1),At--;continue}Bt=J}}G(E),N.forEach(G);let L=N.length,V=E;for(let $=0;$<L;$++){let vt=N[$];E=E.concat(vt)}function Z($,vt,pt){return vt||ie("ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(vt,pt)}let q=E.length;function ot($,vt,pt){let Bt,At,se,J=$.x-vt.x,rt=$.y-vt.y,Ct=pt.x-$.x,Jt=pt.y-$.y,U=J*J+rt*rt,ue=J*Jt-rt*Ct;if(Math.abs(ue)>Number.EPSILON){let ee=Math.sqrt(U),ce=Math.sqrt(Ct*Ct+Jt*Jt),xt=vt.x-rt/ee,fe=vt.y+J/ee,Wt=pt.x-Jt/ce,$t=pt.y+Ct/ce,A=((Wt-xt)*Jt-($t-fe)*Ct)/(J*Jt-rt*Ct);Bt=xt+J*A-$.x,At=fe+rt*A-$.y;let M=Bt*Bt+At*At;if(M<=2)return new dt(Bt,At);se=Math.sqrt(M/2)}else{let ee=!1;J>Number.EPSILON?Ct>Number.EPSILON&&(ee=!0):J<-Number.EPSILON?Ct<-Number.EPSILON&&(ee=!0):Math.sign(rt)===Math.sign(Jt)&&(ee=!0),ee?(Bt=-rt,At=J,se=Math.sqrt(U)):(Bt=J,At=rt,se=Math.sqrt(U/2))}return new dt(Bt/se,At/se)}let K=[];for(let $=0,vt=V.length,pt=vt-1,Bt=$+1;$<vt;$++,pt++,Bt++)pt===vt&&(pt=0),Bt===vt&&(Bt=0),K[$]=ot(V[$],V[pt],V[Bt]);let st=[],at,It=K.concat();for(let $=0,vt=L;$<vt;$++){let pt=N[$];at=[];for(let Bt=0,At=pt.length,se=At-1,J=Bt+1;Bt<At;Bt++,se++,J++)se===At&&(se=0),J===At&&(J=0),at[Bt]=ot(pt[Bt],pt[se],pt[J]);st.push(at),It=It.concat(at)}let Ht;if(m===0)Ht=Li.triangulateShape(V,N);else{let $=[],vt=[];for(let pt=0;pt<m;pt++){let Bt=pt/m,At=d*Math.cos(Bt*Math.PI/2),se=g*Math.sin(Bt*Math.PI/2)+x;for(let J=0,rt=V.length;J<rt;J++){let Ct=Z(V[J],K[J],se);ut(Ct.x,Ct.y,-At),Bt===0&&$.push(Ct)}for(let J=0,rt=L;J<rt;J++){let Ct=N[J];at=st[J];let Jt=[];for(let U=0,ue=Ct.length;U<ue;U++){let ee=Z(Ct[U],at[U],se);ut(ee.x,ee.y,-At),Bt===0&&Jt.push(ee)}Bt===0&&vt.push(Jt)}}Ht=Li.triangulateShape($,vt)}let tt=Ht.length,Rt=g+x;for(let $=0;$<q;$++){let vt=u?Z(E[$],It[$],Rt):E[$];S?(_.copy(C.normals[0]).multiplyScalar(vt.x),T.copy(C.binormals[0]).multiplyScalar(vt.y),b.copy(w[0]).add(_).add(T),ut(b.x,b.y,b.z)):ut(vt.x,vt.y,0)}for(let $=1;$<=h;$++)for(let vt=0;vt<q;vt++){let pt=u?Z(E[vt],It[vt],Rt):E[vt];S?(_.copy(C.normals[$]).multiplyScalar(pt.x),T.copy(C.binormals[$]).multiplyScalar(pt.y),b.copy(w[$]).add(_).add(T),ut(b.x,b.y,b.z)):ut(pt.x,pt.y,f/h*$)}for(let $=m-1;$>=0;$--){let vt=$/m,pt=d*Math.cos(vt*Math.PI/2),Bt=g*Math.sin(vt*Math.PI/2)+x;for(let At=0,se=V.length;At<se;At++){let J=Z(V[At],K[At],Bt);ut(J.x,J.y,f+pt)}for(let At=0,se=N.length;At<se;At++){let J=N[At];at=st[At];for(let rt=0,Ct=J.length;rt<Ct;rt++){let Jt=Z(J[rt],at[rt],Bt);S?ut(Jt.x,Jt.y+w[h-1].y,w[h-1].x+pt):ut(Jt.x,Jt.y,f+pt)}}}Lt(),kt();function Lt(){let $=s.length/3;if(u){let vt=0,pt=q*vt;for(let Bt=0;Bt<tt;Bt++){let At=Ht[Bt];B(At[2]+pt,At[1]+pt,At[0]+pt)}vt=h+m*2,pt=q*vt;for(let Bt=0;Bt<tt;Bt++){let At=Ht[Bt];B(At[0]+pt,At[1]+pt,At[2]+pt)}}else{for(let vt=0;vt<tt;vt++){let pt=Ht[vt];B(pt[2],pt[1],pt[0])}for(let vt=0;vt<tt;vt++){let pt=Ht[vt];B(pt[0]+q*h,pt[1]+q*h,pt[2]+q*h)}}n.addGroup($,s.length/3-$,0)}function kt(){let $=s.length/3,vt=0;Dt(V,vt),vt+=V.length;for(let pt=0,Bt=N.length;pt<Bt;pt++){let At=N[pt];Dt(At,vt),vt+=At.length}n.addGroup($,s.length/3-$,1)}function Dt($,vt){let pt=$.length;for(;--pt>=0;){let Bt=pt,At=pt-1;At<0&&(At=$.length-1);for(let se=0,J=h+m*2;se<J;se++){let rt=q*se,Ct=q*(se+1),Jt=vt+Bt+rt,U=vt+At+rt,ue=vt+At+Ct,ee=vt+Bt+Ct;Yt(Jt,U,ue,ee)}}}function ut($,vt,pt){l.push($),l.push(vt),l.push(pt)}function B($,vt,pt){Nt($),Nt(vt),Nt(pt);let Bt=s.length/3,At=v.generateTopUV(n,s,Bt-3,Bt-2,Bt-1);ae(At[0]),ae(At[1]),ae(At[2])}function Yt($,vt,pt,Bt){Nt($),Nt(vt),Nt(Bt),Nt(vt),Nt(pt),Nt(Bt);let At=s.length/3,se=v.generateSideWallUV(n,s,At-6,At-3,At-2,At-1);ae(se[0]),ae(se[1]),ae(se[3]),ae(se[1]),ae(se[2]),ae(se[3])}function Nt($){s.push(l[$*3+0]),s.push(l[$*3+1]),s.push(l[$*3+2])}function ae($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Gd(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Nl[s.type]().fromJSON(s)),new i(n,t.options)}},kd={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new dt(r,a),new dt(o,l),new dt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new dt(a,1-l),new dt(c,1-f),new dt(u,1-g),new dt(x,1-p)]:[new dt(o,1-l),new dt(h,1-f),new dt(d,1-g),new dt(m,1-p)]}};function Gd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var xr=class i extends Fa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Oi=class i extends Pe{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=me(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,f=new I,u=new dt,d=new I,g=new I,x=new I,m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let v=0;v<=e;v++){let w=n+v*h*s,S=Math.sin(w),C=Math.cos(w);for(let T=0;T<=t.length-1;T++){f.x=t[T].x*S,f.y=t[T].y,f.z=t[T].x*C,a.push(f.x,f.y,f.z),u.x=v/e,u.y=T/(t.length-1),o.push(u.x,u.y);let _=l[3*T+0]*S,b=l[3*T+1],D=l[3*T+0]*C;c.push(_,b,D)}}for(let v=0;v<e;v++)for(let w=0;w<t.length-1;w++){let S=w+v*t.length,C=S,T=S+t.length,_=S+t.length+1,b=S+1;r.push(C,T,b),r.push(_,b,T)}this.setIndex(r),this.setAttribute("position",new xe(a,3)),this.setAttribute("uv",new xe(o,2)),this.setAttribute("normal",new xe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Mn=class i extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let v=p*u-a;for(let w=0;w<c;w++){let S=w*f-r;g.push(S,-v,0),x.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let w=v+c*p,S=v+c*(p+1),C=v+1+c*(p+1),T=v+1+c*p;d.push(w,S,T),d.push(S,C,T)}this.setIndex(d),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Hn=class i extends Pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new I,u=new I,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let v=[],w=p/n,S=a+w*o,C=t*Math.cos(S),T=Math.sqrt(t*t-C*C),_=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){let D=b/e,E=s+D*r;f.x=-T*Math.cos(E),f.y=C,f.z=T*Math.sin(E),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(D+_,1-w),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let w=h[p][v+1],S=h[p][v],C=h[p+1][v],T=h[p+1][v+1];(p!==0||a>0)&&d.push(w,S,T),(p!==n-1||l<Math.PI)&&d.push(S,C,T)}this.setIndex(d),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var mi=class i extends Pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new I,d=new I,g=new I;for(let x=0;x<=n;x++){let m=a+x/n*o;for(let p=0;p<=s;p++){let v=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(p/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,v=(s+1)*(x-1)+m-1,w=(s+1)*(x-1)+m,S=(s+1)*x+m;l.push(p,v,S),l.push(v,w,S)}this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Wi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ph(s))s.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ph(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function nn(i){let t={};for(let e=0;e<i.length;e++){let n=Wi(i[e]);for(let s in n)t[s]=n[s]}return t}function ph(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Vd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var du={clone:Wi,merge:nn},Hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends Pn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hd,this.fragmentShader=Wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=Vd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new te().setHex(s.value);break;case"v2":this.uniforms[n].value=new dt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[n].value=new re().fromArray(s.value);break;case"m4":this.uniforms[n].value=new we().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ha=class extends ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},en=class extends Pn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Bi=class extends en{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Di('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Di('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Wa=class extends Pn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xa=class extends Pn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ls(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function da(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var gi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qa=class extends gi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Il:r=t,o=2*e-n;break;case Ll:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Il:a=t,l=2*n-e;break;case Ll:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,v=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,w=(-1-d)*m+(1.5+d)*x+.5*g,S=d*m-d*x;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+v*a[c+C]+w*a[l+C]+S*a[f+C];return r}},Ya=class extends gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Za=class extends gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ja=class extends gi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*g;return r}let u=o*2,d=t-1;for(let g=0;g!==o;++g){let x=a[c+g],m=a[l+g],p=d*u+g*2,v=f[p],w=f[p+1],S=t*u+g*2,C=h[S],T=h[S+1],_=qd(n,e,v,C,s);r[g]=fu(_,x,w,T,m)}return r}};function fu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Xd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function qd(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=fu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Xd(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ls(e,this.TimeBufferType),this.values=ls(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ls(t.times,Array),values:ls(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),da(t.settings)&&(n.settings={inTangents:ls(t.settings.inTangents,Array),outTangents:ls(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ja(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Xs:e=this.InterpolantFactoryMethodDiscrete;break;case Ta:e=this.InterpolantFactoryMethodLinear;break;case ma:e=this.InterpolantFactoryMethodSmooth;break;case Rl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ne("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return Ta;case this.InterpolantFactoryMethodSmooth:return ma;case this.InterpolantFactoryMethodBezier:return Rl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;da(this.settings)&&(mh(this.settings.inTangents,t),mh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;da(this.settings)&&(gh(this.settings.inTangents,t),gh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ie("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ie("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ie("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ie("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Ju(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ie("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ma,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[u+g]||x!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,da(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function mh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function gh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Ta;var _i=class extends gn{constructor(t,e,n){super(t,e,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Xs;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};$a.prototype.ValueTypeName="color";var Ka=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};Ka.prototype.ValueTypeName="number";var Qa=class extends gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)hn.slerpFlat(r,0,a,c-o,a,c,l);return r}},vr=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Qa(this.times,this.values,this.getValueSize(),t)}};vr.prototype.ValueTypeName="quaternion";vr.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends gn{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Xs;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};ja.prototype.ValueTypeName="vector";var to=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pu=new to,eo=class{constructor(t){this.manager=t!==void 0?t:pu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};eo.DEFAULT_MATERIAL_NAME="__DEFAULT";var fa=new I,pa=new hn,On=new I,yr=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(fa,pa,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,pa,On.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(fa,pa,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,pa,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fi=new I,_h=new dt,xh=new dt,Ze=class extends yr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Aa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,_h,xh),e.subVectors(xh,_h)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(il*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var no=class extends yr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var cs=-90,hs=1,Ms=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(cs,hs,t,e);s.layers=this.layers,this.add(s);let r=new Ze(cs,hs,t,e);r.layers=this.layers,this.add(r);let a=new Ze(cs,hs,t,e);a.layers=this.layers,this.add(a);let o=new Ze(cs,hs,t,e);o.layers=this.layers,this.add(o);let l=new Ze(cs,hs,t,e);l.layers=this.layers,this.add(l);let c=new Ze(cs,hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},io=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var fc="\\[\\]\\.:\\/",Yd=new RegExp("["+fc+"]","g"),pc="[^"+fc+"]",Zd="[^"+fc.replace("\\.","")+"]",Jd=/((?:WC+[\/:])*)/.source.replace("WC",pc),$d=/(WCOD+)?/.source.replace("WCOD",Zd),Kd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pc),Qd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pc),jd=new RegExp("^"+Jd+$d+Kd+Qd+"$"),tf=["material","materials","bones","map"],Bl=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yd,"")}static parseTrackName(t){let e=jd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);tf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ie("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Bl;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $0=new Float32Array(1);var vh=new we,Mr=class{constructor(t,e,n=0,s=1/0){this.ray=new ni(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ms,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vh),this}intersectObject(t,e=!0,n=[]){return zl(t,this,n,e),n.sort(yh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)zl(t[s],this,n,e);return n.sort(yh),n}};function yh(i,t){return i.distance-t.distance}function zl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)zl(r[a],t,e,!0)}}var yc=class yc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};yc.prototype.isMatrix2=!0;var kl=yc;function mc(i,t,e,n){let s=ef(n);switch(e){case sc:return i*t;case uo:return i*t/s.components*s.byteLength;case fo:return i*t/s.components*s.byteLength;case yi:return i*t*2/s.components*s.byteLength;case po:return i*t*2/s.components*s.byteLength;case rc:return i*t*3/s.components*s.byteLength;case Dn:return i*t*4/s.components*s.byteLength;case mo:return i*t*4/s.components*s.byteLength;case wr:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ar:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _o:case vo:return Math.max(i,16)*Math.max(t,8)/4;case go:case xo:return Math.max(i,8)*Math.max(t,8)/2;case yo:case Mo:case bo:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case So:case Cr:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ko:case Go:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ho:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Rr:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ef(i){switch(i){case _n:case tc:return{byteLength:1,components:1};case Ts:case ec:case Ln:return{byteLength:2,components:1};case co:case ho:return{byteLength:2,components:4};case In:case lo:case Sn:return{byteLength:4,components:1};case nc:case ic:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Fu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,af=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ff=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_f=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Af=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ef=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Cf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$f=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ep=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,np=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ip=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ap=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,op=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ep=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,um=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Am=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:rf,alphahash_pars_fragment:af,alphamap_fragment:of,alphamap_pars_fragment:lf,alphatest_fragment:cf,alphatest_pars_fragment:hf,aomap_fragment:uf,aomap_pars_fragment:df,batching_pars_vertex:ff,batching_vertex:pf,begin_vertex:mf,beginnormal_vertex:gf,bsdfs:_f,iridescence_fragment:xf,bumpmap_pars_fragment:vf,clipping_planes_fragment:yf,clipping_planes_pars_fragment:Mf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:bf,color_fragment:wf,color_pars_fragment:Tf,color_pars_vertex:Af,color_vertex:Ef,common:Cf,defaultnormal_vertex:Rf,displacementmap_pars_vertex:Pf,displacementmap_vertex:If,emissivemap_fragment:Lf,emissivemap_pars_fragment:Df,colorspace_fragment:Nf,colorspace_pars_fragment:Uf,envmap_fragment:Ff,envmap_common_pars_fragment:Of,envmap_pars_fragment:Bf,envmap_pars_vertex:zf,envmap_physical_pars_fragment:$f,envmap_vertex:kf,fog_vertex:Gf,fog_pars_vertex:Vf,fog_fragment:Hf,fog_pars_fragment:Wf,gradientmap_pars_fragment:Xf,lightmap_pars_fragment:qf,lights_lambert_fragment:Yf,lights_lambert_pars_fragment:Zf,lights_pars_begin:Jf,lights_toon_fragment:Kf,lights_toon_pars_fragment:Qf,lights_phong_fragment:jf,lights_phong_pars_fragment:tp,lights_physical_fragment:ep,lights_physical_pars_fragment:np,lights_fragment_begin:ip,lights_fragment_maps:sp,lights_fragment_end:rp,lightprobes_pars_fragment:ap,logdepthbuf_fragment:op,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:hp,map_fragment:up,map_pars_fragment:dp,map_particle_fragment:fp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:gp,morphinstance_vertex:_p,morphcolor_vertex:xp,morphnormal_vertex:vp,morphtarget_pars_vertex:yp,morphtarget_vertex:Mp,normal_fragment_begin:Sp,normal_fragment_maps:bp,normal_pars_fragment:wp,normal_pars_vertex:Tp,normal_vertex:Ap,normalmap_pars_fragment:Ep,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Rp,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Ip,opaque_fragment:Lp,packing:Dp,premultiplied_alpha_fragment:Np,project_vertex:Up,dithering_fragment:Fp,dithering_pars_fragment:Op,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:zp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:Gp,shadowmap_vertex:Vp,shadowmask_pars_fragment:Hp,skinbase_vertex:Wp,skinning_pars_vertex:Xp,skinning_vertex:qp,skinnormal_vertex:Yp,specularmap_fragment:Zp,specularmap_pars_fragment:Jp,tonemapping_fragment:$p,tonemapping_pars_fragment:Kp,transmission_fragment:Qp,transmission_pars_fragment:jp,uv_pars_fragment:tm,uv_pars_vertex:em,uv_vertex:nm,worldpos_vertex:im,background_vert:sm,background_frag:rm,backgroundCube_vert:am,backgroundCube_frag:om,cube_vert:lm,cube_frag:cm,depth_vert:hm,depth_frag:um,distance_vert:dm,distance_frag:fm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:gm,linedashed_frag:_m,meshbasic_vert:xm,meshbasic_frag:vm,meshlambert_vert:ym,meshlambert_frag:Mm,meshmatcap_vert:Sm,meshmatcap_frag:bm,meshnormal_vert:wm,meshnormal_frag:Tm,meshphong_vert:Am,meshphong_frag:Em,meshphysical_vert:Cm,meshphysical_frag:Rm,meshtoon_vert:Pm,meshtoon_frag:Im,points_vert:Lm,points_frag:Dm,shadow_vert:Nm,shadow_frag:Um,sprite_vert:Fm,sprite_frag:Om},Ot={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},qn={basic:{uniforms:nn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:nn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:nn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:nn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:nn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new te(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:nn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:nn([Ot.points,Ot.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:nn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:nn([Ot.common,Ot.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:nn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:nn([Ot.sprite,Ot.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:nn([Ot.common,Ot.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:nn([Ot.lights,Ot.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};qn.physical={uniforms:nn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var Zo={r:0,b:0,g:0},Bm=new we,Ou=new re;Ou.set(-1,0,0,0,1,0,0,0,1);function zm(i,t,e,n,s,r){let a=new te(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let S=v.backgroundBlurriness>0;w=t.get(w,S)}return w}function g(v){let w=!1,S=d(v);S===null?m(a,o):S&&S.isColor&&(m(S,1),w=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,w){let S=d(w);S&&S.isCubeTexture?(c===void 0&&(c=new _e(new Vn(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Wi(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ou),c.material.toneMapped=ge.getTransfer(S.colorSpace)!==be,(h!==S||f!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new _e(new Mn(2,2),new ln({name:"BackgroundMaterial",uniforms:Wi(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ge.getTransfer(S.colorSpace)!==be,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,w){v.getRGB(Zo,dc(i)),e.buffers.color.setClear(Zo.r,Zo.g,Zo.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:x,dispose:p}}function km(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,F,G,L,V){let Z=!1,q=f(N,L,G,F);r!==q&&(r=q,c(r.object)),Z=d(N,L,G,V),Z&&g(N,L,G,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(N,F,G,L),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function f(N,F,G,L){let V=L.wireframe===!0,Z=n[F.id];Z===void 0&&(Z={},n[F.id]=Z);let q=N.isInstancedMesh===!0?N.id:0,ot=Z[q];ot===void 0&&(ot={},Z[q]=ot);let K=ot[G.id];K===void 0&&(K={},ot[G.id]=K);let st=K[V];return st===void 0&&(st=u(l()),K[V]=st),st}function u(N){let F=[],G=[],L=[];for(let V=0;V<e;V++)F[V]=0,G[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:L,object:N,attributes:{},index:null}}function d(N,F,G,L){let V=r.attributes,Z=F.attributes,q=0,ot=G.getAttributes();for(let K in ot)if(ot[K].location>=0){let at=V[K],It=Z[K];if(It===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(It=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(It=N.instanceColor)),at===void 0||at.attribute!==It||It&&at.data!==It.data)return!0;q++}return r.attributesNum!==q||r.index!==L}function g(N,F,G,L){let V={},Z=F.attributes,q=0,ot=G.getAttributes();for(let K in ot)if(ot[K].location>=0){let at=Z[K];at===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(at=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(at=N.instanceColor));let It={};It.attribute=at,at&&at.data&&(It.data=at.data),V[K]=It,q++}r.attributes=V,r.attributesNum=q,r.index=L}function x(){let N=r.newAttributes;for(let F=0,G=N.length;F<G;F++)N[F]=0}function m(N){p(N,0)}function p(N,F){let G=r.newAttributes,L=r.enabledAttributes,V=r.attributeDivisors;G[N]=1,L[N]===0&&(i.enableVertexAttribArray(N),L[N]=1),V[N]!==F&&(i.vertexAttribDivisor(N,F),V[N]=F)}function v(){let N=r.newAttributes,F=r.enabledAttributes;for(let G=0,L=F.length;G<L;G++)F[G]!==N[G]&&(i.disableVertexAttribArray(G),F[G]=0)}function w(N,F,G,L,V,Z,q){q===!0?i.vertexAttribIPointer(N,F,G,V,Z):i.vertexAttribPointer(N,F,G,L,V,Z)}function S(N,F,G,L){x();let V=L.attributes,Z=G.getAttributes(),q=F.defaultAttributeValues;for(let ot in Z){let K=Z[ot];if(K.location>=0){let st=V[ot];if(st===void 0&&(ot==="instanceMatrix"&&N.instanceMatrix&&(st=N.instanceMatrix),ot==="instanceColor"&&N.instanceColor&&(st=N.instanceColor)),st!==void 0){let at=st.normalized,It=st.itemSize,Ht=t.get(st);if(Ht===void 0)continue;let tt=Ht.buffer,Rt=Ht.type,Lt=Ht.bytesPerElement,kt=Rt===i.INT||Rt===i.UNSIGNED_INT||st.gpuType===lo;if(st.isInterleavedBufferAttribute){let Dt=st.data,ut=Dt.isInterleavedBuffer===!0?Dt.stride:Dt.itemSize,B=st.offset;if(Dt.isInstancedInterleavedBuffer||Dt.isInstancedBufferAttribute){for(let Yt=0;Yt<K.locationSize;Yt++)p(K.location+Yt,Dt.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let Yt=0;Yt<K.locationSize;Yt++)m(K.location+Yt);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let Yt=0;Yt<K.locationSize;Yt++)w(K.location+Yt,It/K.locationSize,Rt,at,ut*Lt,(B+It/K.locationSize*Yt)*Lt,kt)}else{if(st.isInstancedBufferAttribute){for(let Dt=0;Dt<K.locationSize;Dt++)p(K.location+Dt,st.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Dt=0;Dt<K.locationSize;Dt++)m(K.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let Dt=0;Dt<K.locationSize;Dt++)w(K.location+Dt,It/K.locationSize,Rt,at,It*Lt,It/K.locationSize*Dt*Lt,kt)}}else if(q!==void 0){let at=q[ot];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(K.location,at);break;case 3:i.vertexAttrib3fv(K.location,at);break;case 4:i.vertexAttrib4fv(K.location,at);break;default:i.vertexAttrib1fv(K.location,at)}}}}v()}function C(){D();for(let N in n){let F=n[N];for(let G in F){let L=F[G];for(let V in L){let Z=L[V];for(let q in Z)h(Z[q].object),delete Z[q];delete L[V]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;let F=n[N.id];for(let G in F){let L=F[G];for(let V in L){let Z=L[V];for(let q in Z)h(Z[q].object),delete Z[q];delete L[V]}}delete n[N.id]}function _(N){for(let F in n){let G=n[F];for(let L in G){let V=G[L];if(V[N.id]===void 0)continue;let Z=V[N.id];for(let q in Z)h(Z[q].object),delete Z[q];delete V[N.id]}}}function b(N){for(let F in n){let G=n[F],L=N.isInstancedMesh===!0?N.id:0,V=G[L];if(V!==void 0){for(let Z in V){let q=V[Z];for(let ot in q)h(q[ot].object),delete q[ot];delete V[Z]}delete G[L],Object.keys(G).length===0&&delete n[F]}}}function D(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Gm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Vm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Dn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==_n&&_!==Sn&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&ne("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:S,maxSamples:C,samples:T}}function Hm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new En,o=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,w=v*4,S=p.clippingState||null;l.value=S,S=h(g,u,w,d);for(let C=0;C!==w;++C)S[C]=e[C];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,S=d;w!==x;++w,S+=4)a.copy(f[w]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Lr=class extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new rr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vn(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:zi});r.uniforms.tEquirect.value=e;let a=new _e(s,r),o=e.minFilter;return e.minFilter===ri&&(e.minFilter=rn),new Ms(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},mu=256,Wm=3,Xm=20,Bu=256,zu=16,qm=3,Ym=new I,Zm=new te,Es=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ms(1,10,null),this._boxMesh=new _e(new Vn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Ym}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Zm));let m=new Ms(n,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=g,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(mu,iu(t))}_fromTexture(t,e){t.mapping===Vi||t.mapping===ws?this._setSize(t.image.length===0?mu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=gu(t,!1,!1),n=Math.log2(t)-Wm;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=gu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Vi||t.mapping===ws?(this._cubemapMaterial===null&&(this._cubemapMaterial=xu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=_u()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Jm(),this._integrationMaterial=$m());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/zu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-qm)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Bu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Km());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function gu(i,t,e){return new Lr(i,{minFilter:ri,generateMipmaps:t,type:Ln,colorSpace:qs,depthBuffer:e})}function Dr(i,t,e){return new ln({name:i,uniforms:t,vertexShader:de.cube_vert,fragmentShader:e,side:$e,blending:zi,depthTest:!1,depthWrite:!1})}function Jm(){return Dr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Bu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function $m(){return Dr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:zu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Km(){return Dr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Xm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function _u(){return Dr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function xu(){return Dr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Qm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===ro||d===ao)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new Lr(g.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,g=d===ro||d===ao,x=d===Vi||d===ws;if(g||x){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Es(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return g&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Es(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===ro?u.mapping=Vi:d===ao&&(u.mapping=ws),u}function l(u){let d=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function jm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Di("WebGLRenderer: "+n+" extension not supported."),s}}}function tg(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let x=r.get(g);x&&(t.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(g){let x=g.attributes;for(let m in x)t.update(x[m],i.ARRAY_BUFFER)}function f(g){let x=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let v=x!==null?x.array.length:m.array.length/3-1,w=m.count>=65535?js:Qs,S=new w(Math.ceil(v/3)*6,1),C=S.array;if(x!==null){let _=x.array;p=x.version;for(let b=0,D=0;b<v;b+=3){let E=_[b+0],N=_[b+1],F=_[b+2];C[D++]=E,C[D++]=N,C[D++]=N,C[D++]=F,C[D++]=F,C[D++]=E}}else{p=m.version;for(let _=0,b=0;_<v;_+=3){let D=_+0,E=_+1,N=_+2;C[b++]=D,C[b++]=E,C[b++]=E,C[b++]=N,C[b++]=N,C[b++]=D}}S.version=p;let T=r.get(g);T&&t.remove(T),r.set(g,S)}function u(g){let x=r.get(g);if(x){let m=g.index;m!==null&&x.version<m.version&&f(g)}else f(g);return r.get(g)}function d(){for(let g in s){let x=s[g].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function eg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=u[m];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ng(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ig(i,t,e){let n=new WeakMap,s=new Re;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let D=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],w=0;d===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let S=o.attributes.position.count*w,C=1;S>t.maxTextureSize&&(C=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let T=new Float32Array(S*C*4*f),_=new Ks(T,S,C,f);_.type=Sn,_.needsUpdate=!0;let b=w*4;for(let E=0;E<f;E++){let N=m[E],F=p[E],G=v[E],L=S*C*4*E;for(let V=0;V<N.count;V++){let Z=V*b;d===!0&&(s.fromBufferAttribute(N,V),T[L+Z+0]=s.x,T[L+Z+1]=s.y,T[L+Z+2]=s.z,T[L+Z+3]=0),g===!0&&(s.fromBufferAttribute(F,V),T[L+Z+4]=s.x,T[L+Z+5]=s.y,T[L+Z+6]=s.z,T[L+Z+7]=0),x===!0&&(s.fromBufferAttribute(G,V),T[L+Z+8]=s.x,T[L+Z+9]=s.y,T[L+Z+10]=s.z,T[L+Z+11]=G.itemSize===4?s.w:1)}}u={count:f,texture:_,size:new dt(S,C)},n.set(o,u),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function sg(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var rg={[Yl]:"LINEAR_TONE_MAPPING",[Zl]:"REINHARD_TONE_MAPPING",[Jl]:"CINEON_TONE_MAPPING",[Gi]:"ACES_FILMIC_TONE_MAPPING",[Kl]:"AGX_TONE_MAPPING",[Ql]:"NEUTRAL_TONE_MAPPING",[$l]:"CUSTOM_TONE_MAPPING"};function ag(i,t,e,n,s,r){let a=new pn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Pe;h.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new xe([0,2,0,0,2,0],2));let f=new Ha({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new _e(h,f),d=new no(-1,1,1,-1,0,1),g=null,x=null,m=!1,p,v=null,w=[],S=!1;this.setSize=function(C,T){a.setSize(C,T),o!==null&&o.setSize(C,T),l!==null&&l.setSize(C,T);for(let _=0;_<w.length;_++){let b=w[_];b.setSize&&b.setSize(C,T)}},this.setEffects=function(C){w=C,S=w.length>0&&w[0].isRenderPass===!0;let T=a.width,_=a.height;w.length>0&&o===null&&(o=new pn(T,_,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),l=new pn(T,_,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&w.some(D=>D.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new ii(T,_),r===!0&&(c.format=ai,c.type=Hi)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let D=0;D<w.length;D++){let E=w[D];E.setSize&&E.setSize(T,_),b&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(C,T){if(m||C.toneMapping===Wn&&w.length===0)return!1;if(v=T,T!==null){let _=T.width,b=T.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return S===!1&&C.setRenderTarget(a),p=C.toneMapping,C.toneMapping=Wn,!0},this.hasRenderPass=function(){return S},this.end=function(C,T){C.toneMapping=p,m=!0;let _=a,b=o;for(let D=0;D<w.length;D++){let E=w[D];E.enabled!==!1&&(E.render(C,b,_,T),E.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(g!==C.outputColorSpace||x!==C.toneMapping){g=C.outputColorSpace,x=C.toneMapping,f.defines={},ge.getTransfer(g)===be&&(f.defines.SRGB_TRANSFER="");let D=rg[x];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,C.setRenderTarget(v),C.render(u,d),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var ku=new an,Gu=new ii(1,1),Vu=new ar(1),Hu=new Ks,Wu=new Ra,Xu=new rr,vu=[],yu=[],Mu=new Float32Array(16),Su=new Float32Array(9),bu=new Float32Array(4);function Rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=vu[s];if(r===void 0&&(r=new Float32Array(s),vu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $o(i,t){let e=yu[t];e===void 0&&(e=new Int32Array(t),yu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function og(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function ug(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;bu.set(n),i.uniformMatrix2fv(this.addr,!1,bu),ke(e,n)}}function dg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Su.set(n),i.uniformMatrix3fv(this.addr,!1,Su),ke(e,n)}}function fg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Mu.set(n),i.uniformMatrix4fv(this.addr,!1,Mu),ke(e,n)}}function pg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function xg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function Ko(i){return i.version===0&&(i.compareFunction=lc,i.needsUpdate=!0),i}function Sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ko(Gu):r=ku,e.setTexture2D(t||r,s)}function bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wu,s)}function wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ko(Vu):r=Xu,e.setTextureCube(t||r,s)}function Tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hu,s)}function Ag(i){switch(i){case 5126:return og;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return ug;case 35675:return dg;case 35676:return fg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return _g;case 5125:return xg;case 36294:return vg;case 36295:return yg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Tg}}function Eg(i,t){i.uniform1fv(this.addr,t)}function Cg(i,t){let e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function Rg(i,t){let e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function Pg(i,t){let e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function Ig(i,t){let e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Lg(i,t){let e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Dg(i,t){let e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ng(i,t){i.uniform1iv(this.addr,t)}function Ug(i,t){i.uniform2iv(this.addr,t)}function Fg(i,t){i.uniform3iv(this.addr,t)}function Og(i,t){i.uniform4iv(this.addr,t)}function Bg(i,t){i.uniform1uiv(this.addr,t)}function zg(i,t){i.uniform2uiv(this.addr,t)}function kg(i,t){i.uniform3uiv(this.addr,t)}function Gg(i,t){i.uniform4uiv(this.addr,t)}function Vg(i,t,e){let n=this.cache,s=t.length,r=$o(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ko(Gu):a=ku;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Hg(i,t,e){let n=this.cache,s=t.length,r=$o(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Wu,r[a])}function Wg(i,t,e){let n=this.cache,s=t.length,r=$o(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ko(Vu):a=Xu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Xg(i,t,e){let n=this.cache,s=t.length,r=$o(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Hu,r[a])}function qg(i){switch(i){case 5126:return Eg;case 35664:return Cg;case 35665:return Rg;case 35666:return Pg;case 35674:return Ig;case 35675:return Lg;case 35676:return Dg;case 5124:case 35670:return Ng;case 35667:case 35671:return Ug;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return Bg;case 36294:return zg;case 36295:return kg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}var bc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ag(e.type)}},wc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qg(e.type)}},Tc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Mc=/(\w+)(\])?(\[|\.)?/g;function wu(i,t){i.seq.push(t),i.map[t.id]=t}function Yg(i,t,e){let n=i.name,s=n.length;for(Mc.lastIndex=0;;){let r=Mc.exec(n),a=Mc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){wu(e,c===void 0?new bc(o,i,t):new wc(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Tc(o),wu(e,f)),e=f}}}var As=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Yg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Tu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Zg=37297,Jg=0;function $g(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Au=new re;function Kg(i){ge._getMatrix(Au,ge.workingColorSpace,i);let t=`mat3( ${Au.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case Ys:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Eu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+$g(i.getShaderSource(t),o)}else return r}function Qg(i,t){let e=Kg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var jg={[Yl]:"Linear",[Zl]:"Reinhard",[Jl]:"Cineon",[Gi]:"ACESFilmic",[Kl]:"AgX",[Ql]:"Neutral",[$l]:"Custom"};function t0(i,t){let e=jg[t];return e===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jo=new I;function e0(){ge.getLuminanceCoefficients(Jo);let i=Jo.x.toFixed(4),t=Jo.y.toFixed(4),e=Jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function i0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function s0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ir(i){return i!==""}function Cu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ru(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var r0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(i){return i.replace(r0,a0)}function a0(i,t){let e=de[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ac(e)}var o0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(i){return i.replace(o0,l0)}function l0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Iu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var c0={[Sr]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};function h0(i){return c0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var u0={[ws]:"ENVMAP_MODE_REFRACTION"};function d0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":u0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var f0={[ql]:"ENVMAP_BLENDING_MULTIPLY",[Vh]:"ENVMAP_BLENDING_MIX",[Hh]:"ENVMAP_BLENDING_ADD"};function p0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":f0[i.combine]||"ENVMAP_BLENDING_NONE"}function m0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=h0(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=d0(e),f=p0(e),u=n0(e),d=i0(r),g=s.createProgram(),x,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ir).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ir).join(`
`),m.length>0&&(m+=`
`)):(x=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),m=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?de.tonemapping_pars_fragment:"",e.toneMapping!==Wn?t0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,Qg("linearToOutputTexel",e.outputColorSpace),e0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),a=Ac(a),a=Cu(a,e),a=Ru(a,e),o=Ac(o),o=Cu(o,e),o=Ru(o,e),a=Pu(a),o=Pu(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=p+x+a,w=p+m+o,S=Tu(s,s.VERTEX_SHADER,v),C=Tu(s,s.FRAGMENT_SHADER,w);s.attachShader(g,S),s.attachShader(g,C),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(E){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(S)||"",G=s.getShaderInfoLog(C)||"",L=N.trim(),V=F.trim(),Z=G.trim(),q=!0,ot=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,S,C);else{let K=Eu(s,S,"vertex"),st=Eu(s,C,"fragment");ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+L+`
`+K+`
`+st)}else L!==""?ne("WebGLProgram: Program Info Log:",L):(V===""||Z==="")&&(ot=!1);ot&&(E.diagnostics={runnable:q,programLog:L,vertexShader:{log:V,prefix:x},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(S),s.deleteShader(C),_=new As(s,g),b=s0(s,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(g,Zg)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}var g0=0,Ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Cc(t),e.set(t,n)),n}},Cc=class{constructor(t){this.id=g0++,this.code=t,this.usedTimes=0}};function _0(i){return i===yi||i===Cr||i===Rr}function x0(i,t,e,n,s,r){let a=new ms,o=new Ec,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,D,E,N,F){let G=E.fog,L=N.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?E.environment:null,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,q=t.get(_.envMap||V,Z),ot=u[_.type],K=n.precision;_.precision!==null&&(K=n.getMaxPrecision(_.precision),K!==_.precision&&ne("WebGLProgram.getParameters:",_.precision,"not supported, using",K,"instead."));let st=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,at=st!==void 0?st.length:0,It=0;L.morphAttributes.position!==void 0&&(It=1),L.morphAttributes.normal!==void 0&&(It=2),L.morphAttributes.color!==void 0&&(It=3);let Ht,tt,Rt,Lt;if(ot){let Ut=qn[ot];Ht=Ut.vertexShader,tt=Ut.fragmentShader}else{Ht=_.vertexShader,tt=_.fragmentShader;let Ut=o.getVertexShaderStage(_),ye=o.getFragmentShaderStage(_);o.update(_,Ut,ye),Rt=Ut.id,Lt=ye.id}let kt=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),ut=N.isInstancedMesh===!0,B=N.isBatchedMesh===!0,Yt=!!_.map,Nt=!!_.matcap,ae=!!q,$=ae&&q.isPMREMTexture===!0,vt=!!_.aoMap,pt=!!_.lightMap,Bt=!!_.bumpMap&&_.wireframe===!1,At=!!_.normalMap,se=!!_.displacementMap,J=!!_.emissiveMap,rt=!!_.metalnessMap,Ct=!!_.roughnessMap,Jt=_.anisotropy>0,U=_.clearcoat>0,ue=_.diffuseRoughness>0,ee=_.dispersion>0,ce=_.retroreflectivity>0,xt=_.iridescence>0,fe=_.sheen>0,Wt=_.transmission>0,$t=Jt&&!!_.anisotropyMap,A=U&&!!_.clearcoatMap,M=U&&!!_.clearcoatNormalMap,W=U&&!!_.clearcoatRoughnessMap,mt=ue&&!!_.diffuseRoughnessMap,nt=xt&&!!_.iridescenceMap,St=xt&&!!_.iridescenceThicknessMap,yt=fe&&!!_.sheenColorMap,et=fe&&!!_.sheenRoughnessMap,it=!!_.specularMap,bt=!!_.specularColorMap,P=!!_.specularIntensityMap,O=Wt&&!!_.transmissionMap,j=Wt&&!!_.thicknessMap,Et=!!_.gradientMap,Mt=!!_.alphaMap,Tt=_.alphaTest>0,Zt=!!_.alphaHash,he=!!_.extensions,_t=Wn;_.toneMapped&&(kt===null||kt.isXRRenderTarget===!0)&&(_t=i.toneMapping);let Kt=$?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,Xt={shaderID:ot,shaderType:_.type,shaderName:_.name,vertexShader:Ht,fragmentShader:tt,defines:_.defines,customVertexShaderID:Rt,customFragmentShaderID:Lt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:K,batching:B,batchingColor:B&&N._colorsTexture!==null,instancing:ut,instancingColor:ut&&N.instanceColor!==null,instancingMorph:ut&&N.morphTexture!==null,outputColorSpace:kt===null?i.outputColorSpace:kt.isXRRenderTarget===!0?kt.texture.colorSpace:ge.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Yt,matcap:Nt,envMap:ae,envMapMode:ae&&q.mapping,envMapPMREM:$,envMapMaxLod:$?Kt.length-1:null,envMapSize:$?Kt[0].width:null,aoMap:vt,lightMap:pt,bumpMap:Bt,normalMap:At,displacementMap:se,emissiveMap:J,normalMapObjectSpace:At&&_.normalMapType===qh,normalMapTangentSpace:At&&_.normalMapType===qo,packedNormalMap:At&&_.normalMapType===qo&&_0(_.normalMap.format),metalnessMap:rt,roughnessMap:Ct,anisotropy:Jt,anisotropyMap:$t,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:W,diffuseRoughness:ue,diffuseRoughnessMap:mt,dispersion:ee,retroreflection:ce,iridescence:xt,iridescenceMap:nt,iridescenceThicknessMap:St,sheen:fe,sheenColorMap:yt,sheenRoughnessMap:et,specularMap:it,specularColorMap:bt,specularIntensityMap:P,transmission:Wt,transmissionMap:O,thicknessMap:j,gradientMap:Et,opaque:_.transparent===!1&&_.blending===bs&&_.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Tt,alphaHash:Zt,combine:_.combine,mapUv:Yt&&d(_.map.channel),aoMapUv:vt&&d(_.aoMap.channel),lightMapUv:pt&&d(_.lightMap.channel),bumpMapUv:Bt&&d(_.bumpMap.channel),normalMapUv:At&&d(_.normalMap.channel),displacementMapUv:se&&d(_.displacementMap.channel),emissiveMapUv:J&&d(_.emissiveMap.channel),metalnessMapUv:rt&&d(_.metalnessMap.channel),roughnessMapUv:Ct&&d(_.roughnessMap.channel),anisotropyMapUv:$t&&d(_.anisotropyMap.channel),clearcoatMapUv:A&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:mt&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:St&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:et&&d(_.sheenRoughnessMap.channel),specularMapUv:it&&d(_.specularMap.channel),specularColorMapUv:bt&&d(_.specularColorMap.channel),specularIntensityMapUv:P&&d(_.specularIntensityMap.channel),transmissionMapUv:O&&d(_.transmissionMap.channel),thicknessMapUv:j&&d(_.thicknessMap.channel),alphaMapUv:Mt&&d(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(At||Jt),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(Yt||Mt),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&At===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Dt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:It,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:F.filter(Ut=>Ut.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,decodeVideoTexture:Yt&&_.map.isVideoTexture===!0&&ge.getTransfer(_.map.colorSpace)===be,decodeVideoTextureEmissive:J&&_.emissiveMap.isVideoTexture===!0&&ge.getTransfer(_.emissiveMap.colorSpace)===be,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ke,flipSided:_.side===$e,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:he&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&_.extensions.multiDraw===!0||B)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function x(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)b.push(D),b.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(m(b,_),p(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function m(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function p(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let b=u[_.type],D;if(b){let E=qn[b];D=du.clone(E.uniforms)}else D=_.uniforms;return D}function w(_,b){let D=h.get(b);return D!==void 0?++D.usedTimes:(D=new m0(i,b,_,s),c.push(D),h.set(b,D)),D}function S(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function C(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:v,acquireProgram:w,releaseProgram:S,releaseShaderCache:C,programs:c,dispose:T}}function v0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function y0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Lu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Du(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,x,m,p){let v=i[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},i[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=g,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=m,v.group=p),t++,v}function l(u,d,g,x,m,p,v){v.reversedDepth===!0&&(m=-m);let w=o(u,d,g,x,m,p);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(u,d,g,x,m,p){let v=o(u,d,g,x,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,d){e.length>1&&e.sort(u||y0),n.length>1&&n.sort(d||Lu),s.length>1&&s.sort(d||Lu)}function f(){for(let u=t,d=i.length;u<d;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function M0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Du,i.set(n,[a])):s>=r.length?(a=new Du,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function S0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new te};break;case"SpotLight":e={position:new I,direction:new I,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function b0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var w0=0;function T0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function A0(i){let t=new S0,e=b0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new we,a=new we;function o(c){let h=0,f=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,v=0,w=0,S=0,C=0,T=0,_=0,b=0,D=0,E=0;c.sort(T0);for(let F=0,G=c.length;F<G;F++){let L=c[F],V=L.color,Z=L.intensity,q=L.distance,ot=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===yi?ot=L.shadow.map.texture:ot=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=V.r*Z,f+=V.g*Z,u+=V.b*Z;else if(L.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(L.sh.coefficients[K],Z);E++}else if(L.isSunLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let st=L.shadow,at=e.get(L);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[g]=at,n.sunShadowMap[g]=ot;let It=st.getViewportCount();for(let Ht=0;Ht<It;Ht++)n.sunShadowMatrix[x+Ht]=st.getMatrix(Ht),n.sunShadowCascade[x+Ht]=st._cascadeData[Ht];x+=It,g++}n.sun[d]=K,d++}else if(L.isDirectionalLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let st=L.shadow,at=e.get(L);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,n.directionalShadow[m]=at,n.directionalShadowMap[m]=ot,n.directionalShadowMatrix[m]=L.shadow.matrix,C++}n.directional[m]=K,m++}else if(L.isSpotLight){let K=t.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(V).multiplyScalar(Z),K.distance=q,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,n.spot[v]=K;let st=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,st.updateMatrices(L),L.castShadow&&D++),n.spotLightMatrix[v]=st.matrix,L.castShadow){let at=e.get(L);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,n.spotShadow[v]=at,n.spotShadowMap[v]=ot,_++}v++}else if(L.isRectAreaLight){let K=t.get(L);K.color.copy(V).multiplyScalar(Z),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=K,w++}else if(L.isPointLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){let st=L.shadow,at=e.get(L);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,at.shadowCameraNear=st.camera.near,at.shadowCameraFar=st.camera.far,n.pointShadow[p]=at,n.pointShadowMap[p]=ot,n.pointShadowMatrix[p]=L.shadow.matrix,T++}n.point[p]=K,p++}else if(L.isHemisphereLight){let K=t.get(L);K.skyColor.copy(L.color).multiplyScalar(Z),K.groundColor.copy(L.groundColor).multiplyScalar(Z),n.hemi[S]=K,S++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let N=n.hash;(N.sunLength!==d||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==v||N.rectAreaLength!==w||N.hemiLength!==S||N.numSunShadows!==g||N.numDirectionalShadows!==C||N.numPointShadows!==T||N.numSpotShadows!==_||N.numSpotMaps!==b||N.numLightProbes!==E)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=w,n.point.length=p,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-D,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=E,N.sunLength=d,N.directionalLength=m,N.pointLength=p,N.spotLength=v,N.rectAreaLength=w,N.hemiLength=S,N.numSunShadows=g,N.numDirectionalShadows=C,N.numPointShadows=T,N.numSpotShadows=_,N.numSpotMaps=b,N.numLightProbes=E,n.version=w0++)}function l(c,h){let f=0,u=0,d=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let S=c[v];if(S.isSunLight){let C=n.sun[f];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(p),f++}else if(S.isDirectionalLight){let C=n.directional[u];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),u++}else if(S.isSpotLight){let C=n.spot[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let C=n.rectArea[x];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let C=n.point[d];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){let C=n.hemi[m];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Nu(i){let t=new A0(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function E0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Nu(i),t.set(s,[o])):r>=a.length?(o=new Nu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var C0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,P0=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],I0=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Uu=new we,Pr=new I,Sc=new I;function L0(i,t,e){let n=new Ni,s=new dt,r=new dt,a=new Re,o=new Wa,l=new Xa,c={},h=e.maxTextureSize,f={[vi]:$e,[$e]:vi,[Ke]:Ke},u=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:C0,fragmentShader:R0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Pe;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new _e(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let p=this.type;this.render=function(T,_,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===bh&&(ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sr);let D=i.getRenderTarget(),E=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending(zi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let G=p!==this.type;G&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(V=>V.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,V=T.length;L<V;L++){let Z=T[L],q=Z.shadow;if(q===void 0){ne("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ot=q.getFrameExtents();s.multiply(ot),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,q.mapSize.y=r.y));let K=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=K,q.map===null||G===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ss){if(Z.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new pn(s.x,s.y,{format:yi,type:Ln,minFilter:rn,magFilter:rn,generateMipmaps:!1}),q.map.texture.name=Z.name+".shadowMap",q.map.depthTexture=new ii(s.x,s.y,Sn),q.map.depthTexture.name=Z.name+".shadowMapDepth",q.map.depthTexture.format=ei,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Xe,q.map.depthTexture.magFilter=Xe}else Z.isPointLight?(q.map=new Lr(s.x),q.map.depthTexture=new ar(s.x,In)):(q.map=new pn(s.x,s.y),q.map.depthTexture=new ii(s.x,s.y,In)),q.map.depthTexture.name=Z.name+".shadowMap",q.map.depthTexture.format=ei,this.type===Sr?(q.map.depthTexture.compareFunction=K?oc:ac,q.map.depthTexture.minFilter=rn,q.map.depthTexture.magFilter=rn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Xe,q.map.depthTexture.magFilter=Xe);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let st=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Z.isPointLight!==!0&&q.updateMatrices(Z,b);let at=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:b.layers;for(let It=0;It<st;It++){let Ht=q.getCamera(It);if(Z.isPointLight){let tt=q.camera,Rt=q.matrix,Lt=Z.distance||tt.far;Lt!==tt.far&&(tt.far=Lt,tt.updateProjectionMatrix()),Pr.setFromMatrixPosition(Z.matrixWorld),tt.position.copy(Pr),Sc.copy(tt.position),Sc.add(P0[It]),tt.up.copy(I0[It]),tt.lookAt(Sc),tt.updateMatrixWorld(),Rt.makeTranslation(-Pr.x,-Pr.y,-Pr.z),Uu.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Uu,tt.coordinateSystem,tt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,It),i.clear();else{It===0&&(i.setRenderTarget(q.map),i.clear());let tt=q.getViewport(It);a.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),F.viewport(a)}n=q.getFrustum(It),S(_,b,Ht,Z,at,this.type)}q.isPointLightShadow!==!0&&this.type===Ss&&v(q,b),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(D,E,N)};function v(T,_){let b=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new pn(s.x,s.y,{format:yi,type:Ln}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,b,u,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,b,d,x,null)}function w(T,_,b,D){let E=null,N=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)E=N;else if(E=b.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=E.uuid,G=_.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let V=L[G];V===void 0&&(V=E.clone(),L[G]=V,_.addEventListener("dispose",C)),E=V}if(E.visible=_.visible,E.wireframe=_.wireframe,D===Ss?E.side=_.shadowSide!==null?_.shadowSide:_.side:E.side=_.shadowSide!==null?_.shadowSide:f[_.side],E.alphaMap=_.alphaMap,E.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,E.map=_.map,E.clipShadows=_.clipShadows,E.clippingPlanes=_.clippingPlanes,E.clipIntersection=_.clipIntersection,E.displacementMap=_.displacementMap,E.displacementScale=_.displacementScale,E.displacementBias=_.displacementBias,E.wireframeLinewidth=_.wireframeLinewidth,E.linewidth=_.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let F=i.properties.get(E);F.light=b}return E}function S(T,_,b,D,E,N){if(T.visible===!1)return;if(T.layers.test(E)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===Ss)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let L=t.update(T),V=T.material;if(Array.isArray(V)){let Z=L.groups;for(let q=0,ot=Z.length;q<ot;q++){let K=Z[q],st=V[K.materialIndex];if(st&&st.visible){let at=w(T,st,D,N);T.onBeforeShadow(i,T,_,b,L,at,K),i.renderBufferDirect(b,null,L,at,T,K),T.onAfterShadow(i,T,_,b,L,at,K)}}}else if(V.visible){let Z=w(T,V,D,N);T.onBeforeShadow(i,T,_,b,L,Z,null),i.renderBufferDirect(b,null,L,Z,T,null),T.onAfterShadow(i,T,_,b,L,Z,null)}}let G=T.children;for(let L=0,V=G.length;L<V;L++)S(G[L],_,b,D,E,N)}function C(T){T.target.removeEventListener("dispose",C);for(let b in c){let D=c[b],E=T.target.uuid;E in D&&(D[E].dispose(),delete D[E])}}}function D0(i,t){function e(){let P=!1,O=new Re,j=null,Et=new Re(0,0,0,0);return{setMask:function(Mt){j!==Mt&&!P&&(i.colorMask(Mt,Mt,Mt,Mt),j=Mt)},setLocked:function(Mt){P=Mt},setClear:function(Mt,Tt,Zt,he,_t){_t===!0&&(Mt*=he,Tt*=he,Zt*=he),O.set(Mt,Tt,Zt,he),Et.equals(O)===!1&&(i.clearColor(Mt,Tt,Zt,he),Et.copy(O))},reset:function(){P=!1,j=null,Et.set(-1,0,0,0)}}}function n(){let P=!1,O=!1,j=null,Et=null,Mt=null;return{setReversed:function(Tt){if(O!==Tt){let Zt=t.get("EXT_clip_control");Tt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),O=Tt;let he=Mt;Mt=null,this.setClear(he)}},getReversed:function(){return O},setTest:function(Tt){Tt?Dt(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(Tt){j!==Tt&&!P&&(i.depthMask(Tt),j=Tt)},setFunc:function(Tt){if(O&&(Tt=nu[Tt]),Et!==Tt){switch(Tt){case _a:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case va:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case ya:i.depthFunc(i.EQUAL);break;case Ma:i.depthFunc(i.GEQUAL);break;case Sa:i.depthFunc(i.GREATER);break;case ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=Tt}},setLocked:function(Tt){P=Tt},setClear:function(Tt){Mt!==Tt&&(Mt=Tt,O&&(Tt=1-Tt),i.clearDepth(Tt))},reset:function(){P=!1,j=null,Et=null,Mt=null,O=!1}}}function s(){let P=!1,O=null,j=null,Et=null,Mt=null,Tt=null,Zt=null,he=null,_t=null;return{setTest:function(Kt){P||(Kt?Dt(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(Kt){O!==Kt&&!P&&(i.stencilMask(Kt),O=Kt)},setFunc:function(Kt,Xt,Ut){(j!==Kt||Et!==Xt||Mt!==Ut)&&(i.stencilFunc(Kt,Xt,Ut),j=Kt,Et=Xt,Mt=Ut)},setOp:function(Kt,Xt,Ut){(Tt!==Kt||Zt!==Xt||he!==Ut)&&(i.stencilOp(Kt,Xt,Ut),Tt=Kt,Zt=Xt,he=Ut)},setLocked:function(Kt){P=Kt},setClear:function(Kt){_t!==Kt&&(i.clearStencil(Kt),_t=Kt)},reset:function(){P=!1,O=null,j=null,Et=null,Mt=null,Tt=null,Zt=null,he=null,_t=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],x=null,m=!1,p=null,v=null,w=null,S=null,C=null,T=null,_=null,b=new te(0,0,0),D=0,E=!1,N=null,F=null,G=null,L=null,V=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ot=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=ot>=1):K.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=ot>=2);let st=null,at={},It=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),tt=new Re().fromArray(It),Rt=new Re().fromArray(Ht);function Lt(P,O,j,Et){let Mt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(P,Tt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<j;Zt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(O,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(O+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return Tt}let kt={};kt[i.TEXTURE_2D]=Lt(i.TEXTURE_2D,i.TEXTURE_2D,1),kt[i.TEXTURE_CUBE_MAP]=Lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),kt[i.TEXTURE_2D_ARRAY]=Lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),kt[i.TEXTURE_3D]=Lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Dt(i.DEPTH_TEST),a.setFunc(ds),Bt(!1),At(Gl),Dt(i.CULL_FACE),vt(zi);function Dt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function ut(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function B(P,O){return u[P]!==O?(i.bindFramebuffer(P,O),u[P]=O,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=O),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=O),!0):!1}function Yt(P,O){let j=g,Et=!1;if(P){j=d.get(O),j===void 0&&(j=[],d.set(O,j));let Mt=P.textures;if(j.length!==Mt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,Zt=Mt.length;Tt<Zt;Tt++)j[Tt]=i.COLOR_ATTACHMENT0+Tt;j.length=Mt.length,Et=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,Et=!0);Et&&i.drawBuffers(j)}function Nt(P){return x!==P?(i.useProgram(P),x=P,!0):!1}let ae={[ki]:i.FUNC_ADD,[Th]:i.FUNC_SUBTRACT,[Ah]:i.FUNC_REVERSE_SUBTRACT};ae[Eh]=i.MIN,ae[Ch]=i.MAX;let $={[Rh]:i.ZERO,[Ph]:i.ONE,[Ih]:i.SRC_COLOR,[Wl]:i.SRC_ALPHA,[Oh]:i.SRC_ALPHA_SATURATE,[Uh]:i.DST_COLOR,[Dh]:i.DST_ALPHA,[Lh]:i.ONE_MINUS_SRC_COLOR,[Xl]:i.ONE_MINUS_SRC_ALPHA,[Fh]:i.ONE_MINUS_DST_COLOR,[Nh]:i.ONE_MINUS_DST_ALPHA,[Bh]:i.CONSTANT_COLOR,[zh]:i.ONE_MINUS_CONSTANT_COLOR,[kh]:i.CONSTANT_ALPHA,[Gh]:i.ONE_MINUS_CONSTANT_ALPHA};function vt(P,O,j,Et,Mt,Tt,Zt,he,_t,Kt){if(P===zi){m===!0&&(ut(i.BLEND),m=!1);return}if(m===!1&&(Dt(i.BLEND),m=!0),P!==wh){if(P!==p||Kt!==E){if((v!==ki||C!==ki)&&(i.blendEquation(i.FUNC_ADD),v=ki,C=ki),Kt)switch(P){case bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cn:i.blendFunc(i.ONE,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ie("WebGLState: Invalid blending: ",P);break}else switch(P){case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vl:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",P);break}w=null,S=null,T=null,_=null,b.set(0,0,0),D=0,p=P,E=Kt}return}Mt=Mt||O,Tt=Tt||j,Zt=Zt||Et,(O!==v||Mt!==C)&&(i.blendEquationSeparate(ae[O],ae[Mt]),v=O,C=Mt),(j!==w||Et!==S||Tt!==T||Zt!==_)&&(i.blendFuncSeparate($[j],$[Et],$[Tt],$[Zt]),w=j,S=Et,T=Tt,_=Zt),(he.equals(b)===!1||_t!==D)&&(i.blendColor(he.r,he.g,he.b,_t),b.copy(he),D=_t),p=P,E=!1}function pt(P,O){P.side===Ke?ut(i.CULL_FACE):Dt(i.CULL_FACE);let j=P.side===$e;O&&(j=!j),Bt(j),P.blending===bs&&P.transparent===!1?vt(zi):vt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let Et=P.stencilWrite;o.setTest(Et),Et&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),J(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Dt(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(P){N!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),N=P)}function At(P){P!==Mh?(Dt(i.CULL_FACE),P!==F&&(P===Gl?i.cullFace(i.BACK):P===Sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),F=P}function se(P){P!==G&&(q&&i.lineWidth(P),G=P)}function J(P,O,j){P?(Dt(i.POLYGON_OFFSET_FILL),(L!==O||V!==j)&&(L=O,V=j,a.getReversed()&&(O=-O,j=-j),i.polygonOffset(O,j))):ut(i.POLYGON_OFFSET_FILL)}function rt(P){P?Dt(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function Ct(P){P===void 0&&(P=i.TEXTURE0+Z-1),st!==P&&(i.activeTexture(P),st=P)}function Jt(P,O,j){j===void 0&&(st===null?j=i.TEXTURE0+Z-1:j=st);let Et=at[j];Et===void 0&&(Et={type:void 0,texture:void 0},at[j]=Et),(Et.type!==P||Et.texture!==O)&&(st!==j&&(i.activeTexture(j),st=j),i.bindTexture(P,O||kt[P]),Et.type=P,Et.texture=O)}function U(){let P=at[st];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ue(){try{i.compressedTexImage2D(...arguments)}catch(P){ie("WebGLState:",P)}}function ee(){try{i.compressedTexImage3D(...arguments)}catch(P){ie("WebGLState:",P)}}function ce(){try{i.texSubImage2D(...arguments)}catch(P){ie("WebGLState:",P)}}function xt(){try{i.texSubImage3D(...arguments)}catch(P){ie("WebGLState:",P)}}function fe(){try{i.compressedTexSubImage2D(...arguments)}catch(P){ie("WebGLState:",P)}}function Wt(){try{i.compressedTexSubImage3D(...arguments)}catch(P){ie("WebGLState:",P)}}function $t(){try{i.texStorage2D(...arguments)}catch(P){ie("WebGLState:",P)}}function A(){try{i.texStorage3D(...arguments)}catch(P){ie("WebGLState:",P)}}function M(){try{i.texImage2D(...arguments)}catch(P){ie("WebGLState:",P)}}function W(){try{i.texImage3D(...arguments)}catch(P){ie("WebGLState:",P)}}function mt(P){return f[P]!==void 0?f[P]:i.getParameter(P)}function nt(P,O){f[P]!==O&&(i.pixelStorei(P,O),f[P]=O)}function St(P){tt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),tt.copy(P))}function yt(P){Rt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Rt.copy(P))}function et(P,O){let j=c.get(O);j===void 0&&(j=new WeakMap,c.set(O,j));let Et=j.get(P);Et===void 0&&(Et=i.getUniformBlockIndex(O,P.name),i.uniformBlockBinding(O,Et,Et),j.set(P,Et))}function it(P,O,j){let Mt=c.get(O).get(P);l[Mt]!==j&&(i.bindBufferBase(i.UNIFORM_BUFFER,Mt,j),l[Mt]=j)}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},st=null,at={},u={},l={},d=new WeakMap,g=[],x=null,m=!1,p=null,v=null,w=null,S=null,C=null,T=null,_=null,b=new te(0,0,0),D=0,E=!1,N=null,F=null,G=null,L=null,V=null,tt.set(0,0,i.canvas.width,i.canvas.height),Rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Dt,disable:ut,bindFramebuffer:B,drawBuffers:Yt,useProgram:Nt,setBlending:vt,setMaterial:pt,setFlipSided:Bt,setCullFace:At,setLineWidth:se,setPolygonOffset:J,setScissorTest:rt,activeTexture:Ct,bindTexture:Jt,unbindTexture:U,compressedTexImage2D:ue,compressedTexImage3D:ee,texImage2D:M,texImage3D:W,pixelStorei:nt,getParameter:mt,updateUBOMapping:et,uniformBlockBinding:it,texStorage2D:$t,texStorage3D:A,texSubImage2D:ce,texSubImage3D:xt,compressedTexSubImage2D:fe,compressedTexSubImage3D:Wt,scissor:St,viewport:yt,reset:bt}}function N0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap,f=new Set,u,d=new WeakMap,g=new Set,x=new FinalizationRegistry(A=>g.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,M){return m?new OffscreenCanvas(A,M):Js("canvas")}function v(A,M,W){let mt=1,nt=$t(A);if((nt.width>W||nt.height>W)&&(mt=W/Math.max(nt.width,nt.height)),mt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let St=Math.floor(mt*nt.width),yt=Math.floor(mt*nt.height);u===void 0&&(u=p(St,yt));let et=M?p(St,yt):u;return et.width=St,et.height=yt,et.getContext("2d").drawImage(A,0,0,St,yt),ne("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+St+"x"+yt+")."),et}else return"data"in A&&ne("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),A;return A}function w(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,M,W,mt,nt,St=!1){if(A!==null){if(i[A]!==void 0)return i[A];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let yt;mt&&(yt=t.get("EXT_texture_norm16"),yt||ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=M;if(M===i.RED&&(W===i.FLOAT&&(et=i.R32F),W===i.HALF_FLOAT&&(et=i.R16F),W===i.UNSIGNED_BYTE&&(et=i.R8),W===i.UNSIGNED_SHORT&&yt&&(et=yt.R16_EXT),W===i.SHORT&&yt&&(et=yt.R16_SNORM_EXT)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.R8UI),W===i.UNSIGNED_SHORT&&(et=i.R16UI),W===i.UNSIGNED_INT&&(et=i.R32UI),W===i.BYTE&&(et=i.R8I),W===i.SHORT&&(et=i.R16I),W===i.INT&&(et=i.R32I)),M===i.RG&&(W===i.FLOAT&&(et=i.RG32F),W===i.HALF_FLOAT&&(et=i.RG16F),W===i.UNSIGNED_BYTE&&(et=i.RG8),W===i.UNSIGNED_SHORT&&yt&&(et=yt.RG16_EXT),W===i.SHORT&&yt&&(et=yt.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RG8UI),W===i.UNSIGNED_SHORT&&(et=i.RG16UI),W===i.UNSIGNED_INT&&(et=i.RG32UI),W===i.BYTE&&(et=i.RG8I),W===i.SHORT&&(et=i.RG16I),W===i.INT&&(et=i.RG32I)),M===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RGB8UI),W===i.UNSIGNED_SHORT&&(et=i.RGB16UI),W===i.UNSIGNED_INT&&(et=i.RGB32UI),W===i.BYTE&&(et=i.RGB8I),W===i.SHORT&&(et=i.RGB16I),W===i.INT&&(et=i.RGB32I)),M===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),W===i.UNSIGNED_INT&&(et=i.RGBA32UI),W===i.BYTE&&(et=i.RGBA8I),W===i.SHORT&&(et=i.RGBA16I),W===i.INT&&(et=i.RGBA32I)),M===i.RGB&&(W===i.UNSIGNED_SHORT&&yt&&(et=yt.RGB16_EXT),W===i.SHORT&&yt&&(et=yt.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),M===i.RGBA){let it=St?Ys:ge.getTransfer(nt);W===i.FLOAT&&(et=i.RGBA32F),W===i.HALF_FLOAT&&(et=i.RGBA16F),W===i.UNSIGNED_BYTE&&(et=it===be?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&yt&&(et=yt.RGBA16_EXT),W===i.SHORT&&yt&&(et=yt.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function _(A,M){let W;return A?M===null||M===In||M===Hi?W=i.DEPTH24_STENCIL8:M===Sn?W=i.DEPTH32F_STENCIL8:M===Ts&&(W=i.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===In||M===Hi?W=i.DEPTH_COMPONENT24:M===Sn?W=i.DEPTH_COMPONENT32F:M===Ts&&(W=i.DEPTH_COMPONENT16),W}function b(A,M){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xe&&A.minFilter!==rn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function D(A){let M=new WeakRef(A);n.get(A).__ref=M,g.add(M),x.register(A,M,M)}function E(A){let M=n.get(A).__ref;M!==void 0&&(g.delete(M),x.unregister(M))}function N(A){G(A.target)}function F(A){L(A.target)}function G(A){A.removeEventListener("dispose",N),E(A),Z(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}function L(A){A.removeEventListener("dispose",F),E(A),ot(A)}function V(){for(let A of g){let M=A.deref();M!==void 0&&(M.isRenderTarget===!0?L(M):G(M))}g.clear(),f.clear()}function Z(A){let M=n.get(A);if(M.__webglInit===void 0)return;let W=A.source,mt=d.get(W);if(mt){let nt=mt[M.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&q(A),Object.keys(mt).length===0&&d.delete(W)}n.remove(A)}function q(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let W=A.source,mt=d.get(W);delete mt[M.__cacheKey],a.memory.textures--}function ot(A){let M=n.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();let W=A.depthTexture;if(W&&W.renderTarget===A&&G(W),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(M.__webglFramebuffer[nt]))for(let St=0;St<M.__webglFramebuffer[nt].length;St++)i.deleteFramebuffer(M.__webglFramebuffer[nt][St]);else i.deleteFramebuffer(M.__webglFramebuffer[nt]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[nt])}else{if(Array.isArray(M.__webglFramebuffer))for(let nt=0;nt<M.__webglFramebuffer.length;nt++)i.deleteFramebuffer(M.__webglFramebuffer[nt]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let nt=0;nt<M.__webglColorRenderbuffer.length;nt++)M.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[nt]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let mt=A.textures;for(let nt=0,St=mt.length;nt<St;nt++){let yt=n.get(mt[nt]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(mt[nt])}n.remove(A)}let K=0;function st(){K=0}function at(){return K}function It(A){K=A}function Ht(){let A=K;return A>=s.maxTextures&&ne("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),K+=1,A}function tt(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function Rt(A,M){let W=n.get(A);if(A.isVideoTexture&&fe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&W.__version!==A.version){let mt=A.image;if(mt===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(W,A,M);return}}else A.isExternalTexture&&(W.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function Lt(A,M){let W=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){pt(W,A,M);return}else A.isExternalTexture&&(W.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function kt(A,M){let W=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){pt(W,A,M);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function Dt(A,M){let W=n.get(A);if(A.version>0&&W.__version!==A.version){Bt(W,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}let ut={[Cn]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[wa]:i.MIRRORED_REPEAT},B={[Xe]:i.NEAREST,[Wh]:i.NEAREST_MIPMAP_NEAREST,[br]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[oo]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},Yt={[Zh]:i.NEVER,[lc]:i.ALWAYS,[Jh]:i.LESS,[ac]:i.LEQUAL,[$h]:i.EQUAL,[oc]:i.GEQUAL,[Kh]:i.GREATER,[Qh]:i.NOTEQUAL};function Nt(A,M){if(M.type===Sn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===rn||M.magFilter===oo||M.magFilter===br||M.magFilter===ri||M.minFilter===rn||M.minFilter===oo||M.minFilter===br||M.minFilter===ri)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ut[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ut[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ut[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,B[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,B[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Yt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Xe||M.minFilter!==br&&M.minFilter!==ri||M.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ae(A,M){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",N),D(M));let mt=M.source,nt=d.get(mt);nt===void 0&&(nt={},d.set(mt,nt));let St=tt(M);if(St!==A.__cacheKey){nt[St]===void 0&&(nt[St]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),nt[St].usedTimes++;let yt=nt[A.__cacheKey];yt!==void 0&&(nt[A.__cacheKey].usedTimes--,yt.usedTimes===0&&q(M)),A.__cacheKey=St,A.__webglTexture=nt[St].texture}return W}function $(A,M,W){return Math.floor(Math.floor(A/W)/M)}function vt(A,M,W,mt){let St=A.updateRanges;if(St.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,W,mt,M.data);else{St.sort((P,O)=>P.start-O.start);let yt=0;for(let P=1;P<St.length;P++){let O=St[yt],j=St[P],Et=O.start+O.count,Mt=$(j.start,M.width,4),Tt=$(O.start,M.width,4);j.start<=Et+1&&Mt===Tt&&$(j.start+j.count-1,M.width,4)===Mt?O.count=Math.max(O.count,j.start+j.count-O.start):(++yt,St[yt]=j)}St.length=yt+1;let et=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let P=0,O=St.length;P<O;P++){let j=St[P],Et=Math.floor(j.start/4),Mt=Math.ceil(j.count/4),Tt=Et%M.width,Zt=Math.floor(Et/M.width),he=Mt,_t=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Zt),e.texSubImage2D(i.TEXTURE_2D,0,Tt,Zt,he,_t,W,mt,M.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function pt(A,M,W){let mt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(mt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(mt=i.TEXTURE_3D);let nt=ae(A,M),St=M.source;e.bindTexture(mt,A.__webglTexture,i.TEXTURE0+W);let yt=n.get(St);if(St.version!==yt.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let _t=ge.getPrimaries(ge.workingColorSpace),Kt=M.colorSpace===oi?null:ge.getPrimaries(M.colorSpace),Xt=M.colorSpace===oi||_t===Kt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let it=v(M.image,!1,s.maxTextureSize);it=Wt(M,it);let bt=r.convert(M.format,M.colorSpace),P=r.convert(M.type),O=T(M.internalFormat,bt,P,M.normalized,M.colorSpace,M.isVideoTexture);Nt(mt,M);let j,Et=M.mipmaps,Mt=M.isVideoTexture!==!0,Tt=yt.__version===void 0||nt===!0,Zt=St.dataReady,he=b(M,it);if(M.isDepthTexture)O=_(M.format===ai,M.type),Tt&&(Mt?e.texStorage2D(i.TEXTURE_2D,1,O,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,O,it.width,it.height,0,bt,P,null));else if(M.isDataTexture)if(Et.length>0){Mt&&Tt&&e.texStorage2D(i.TEXTURE_2D,he,O,Et[0].width,Et[0].height);for(let _t=0,Kt=Et.length;_t<Kt;_t++)j=Et[_t],Mt?Zt&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,j.width,j.height,bt,P,j.data):e.texImage2D(i.TEXTURE_2D,_t,O,j.width,j.height,0,bt,P,j.data);M.generateMipmaps=!1}else Mt?(Tt&&e.texStorage2D(i.TEXTURE_2D,he,O,it.width,it.height),Zt&&vt(M,it,bt,P)):e.texImage2D(i.TEXTURE_2D,0,O,it.width,it.height,0,bt,P,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Mt&&Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,he,O,Et[0].width,Et[0].height,it.depth);for(let _t=0,Kt=Et.length;_t<Kt;_t++)if(j=Et[_t],M.format!==Dn)if(bt!==null)if(Mt){if(Zt)if(M.layerUpdates.size>0){let Xt=mc(j.width,j.height,M.format,M.type);for(let Ut of M.layerUpdates){let ye=j.data.subarray(Ut*Xt/j.data.BYTES_PER_ELEMENT,(Ut+1)*Xt/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,Ut,j.width,j.height,1,bt,ye)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,j.width,j.height,it.depth,bt,j.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_t,O,j.width,j.height,it.depth,0,j.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Mt?Zt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,j.width,j.height,it.depth,bt,P,j.data):e.texImage3D(i.TEXTURE_2D_ARRAY,_t,O,j.width,j.height,it.depth,0,bt,P,j.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Mt&&Tt&&e.texStorage2D(i.TEXTURE_2D,he,O,Et[0].width,Et[0].height);for(let _t=0,Kt=Et.length;_t<Kt;_t++)j=Et[_t],M.format!==Dn?bt!==null?Mt?Zt&&e.compressedTexSubImage2D(i.TEXTURE_2D,_t,0,0,j.width,j.height,bt,j.data):e.compressedTexImage2D(i.TEXTURE_2D,_t,O,j.width,j.height,0,j.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?Zt&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,j.width,j.height,bt,P,j.data):e.texImage2D(i.TEXTURE_2D,_t,O,j.width,j.height,0,bt,P,j.data)}else if(M.isDataArrayTexture)if(Mt){if(Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,he,O,it.width,it.height,it.depth),Zt)if(M.layerUpdates.size>0){let _t=mc(it.width,it.height,M.format,M.type);for(let Kt of M.layerUpdates){let Xt=it.data.subarray(Kt*_t/it.data.BYTES_PER_ELEMENT,(Kt+1)*_t/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Kt,it.width,it.height,1,bt,P,Xt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,bt,P,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,O,it.width,it.height,it.depth,0,bt,P,it.data);else if(M.isData3DTexture)Mt?(Tt&&e.texStorage3D(i.TEXTURE_3D,he,O,it.width,it.height,it.depth),Zt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,bt,P,it.data)):e.texImage3D(i.TEXTURE_3D,0,O,it.width,it.height,it.depth,0,bt,P,it.data);else if(M.isFramebufferTexture){if(Tt)if(Mt)e.texStorage2D(i.TEXTURE_2D,he,O,it.width,it.height);else{let _t=it.width,Kt=it.height;for(let Xt=0;Xt<he;Xt++)e.texImage2D(i.TEXTURE_2D,Xt,O,_t,Kt,0,bt,P,null),_t>>=1,Kt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let _t=i.canvas;if(_t.hasAttribute("layoutsubtree")||_t.setAttribute("layoutsubtree","true"),it.parentNode!==_t){_t.appendChild(it),f.add(M),_t.onpaint=Kt=>{let Xt=Kt.changedElements;for(let Ut of f)Xt.includes(Ut.image)&&(Ut.needsUpdate=!0)},_t.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,it);else{let Xt=i.RGBA,Ut=i.RGBA,ye=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Xt,Ut,ye,it)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Et.length>0){if(Mt&&Tt){let _t=$t(Et[0]);e.texStorage2D(i.TEXTURE_2D,he,O,_t.width,_t.height)}for(let _t=0,Kt=Et.length;_t<Kt;_t++)j=Et[_t],Mt?Zt&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,bt,P,j):e.texImage2D(i.TEXTURE_2D,_t,O,bt,P,j);M.generateMipmaps=!1}else if(Mt){if(Tt){let _t=$t(it);e.texStorage2D(i.TEXTURE_2D,he,O,_t.width,_t.height)}Zt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,P,it)}else e.texImage2D(i.TEXTURE_2D,0,O,bt,P,it);w(M)&&M.mipmapsAutoUpdate===!0&&S(mt),yt.__version=St.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Bt(A,M,W){if(M.image.length!==6)return;let mt=ae(A,M),nt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+W);let St=n.get(nt);if(nt.version!==St.__version||mt===!0){e.activeTexture(i.TEXTURE0+W);let yt=ge.getPrimaries(ge.workingColorSpace),et=M.colorSpace===oi?null:ge.getPrimaries(M.colorSpace),it=M.colorSpace===oi||yt===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let bt=M.isCompressedTexture||M.image[0].isCompressedTexture,P=M.image[0]&&M.image[0].isDataTexture,O=[];for(let Ut=0;Ut<6;Ut++)!bt&&!P?O[Ut]=v(M.image[Ut],!0,s.maxCubemapSize):O[Ut]=P?M.image[Ut].image:M.image[Ut],O[Ut]=Wt(M,O[Ut]);let j=O[0],Et=r.convert(M.format,M.colorSpace),Mt=r.convert(M.type),Tt=T(M.internalFormat,Et,Mt,M.normalized,M.colorSpace),Zt=M.isVideoTexture!==!0,he=St.__version===void 0||mt===!0,_t=nt.dataReady,Kt=b(M,j);Nt(i.TEXTURE_CUBE_MAP,M);let Xt;if(M.isDepthTexture){if(Tt=_(M.format===ai,M.type),he)if(Zt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Tt,j.width,j.height);else for(let Ut=0;Ut<6;Ut++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,Tt,j.width,j.height,0,Et,Mt,null)}else if(bt){Zt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Kt,Tt,j.width,j.height);for(let Ut=0;Ut<6;Ut++){Xt=O[Ut].mipmaps;for(let ye=0;ye<Xt.length;ye++){let Ne=Xt[ye];M.format!==Dn?Et!==null?Zt?_t&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ye,0,0,Ne.width,Ne.height,Et,Ne.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ye,Tt,Ne.width,Ne.height,0,Ne.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ye,0,0,Ne.width,Ne.height,Et,Mt,Ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ye,Tt,Ne.width,Ne.height,0,Et,Mt,Ne.data)}}}else{if(Xt=M.mipmaps,Zt&&he){Xt.length>0&&Kt++;let Ut=$t(O[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Kt,Tt,Ut.width,Ut.height)}for(let Ut=0;Ut<6;Ut++)if(P){Zt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,0,0,O[Ut].width,O[Ut].height,Et,Mt,O[Ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,Tt,O[Ut].width,O[Ut].height,0,Et,Mt,O[Ut].data);for(let ye=0;ye<Xt.length;ye++){let Un=Xt[ye].image[Ut].image;Zt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ye+1,0,0,Un.width,Un.height,Et,Mt,Un.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ye+1,Tt,Un.width,Un.height,0,Et,Mt,Un.data)}}else{Zt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,0,0,Et,Mt,O[Ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,Tt,Et,Mt,O[Ut]);for(let ye=0;ye<Xt.length;ye++){let Ne=Xt[ye];Zt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ye+1,0,0,Et,Mt,Ne.image[Ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ye+1,Tt,Et,Mt,Ne.image[Ut])}}}w(M)&&M.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),St.__version=nt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function At(A,M,W,mt,nt,St){let yt=r.convert(W.format,W.colorSpace),et=r.convert(W.type),it=T(W.internalFormat,yt,et,W.normalized,W.colorSpace),bt=n.get(M),P=n.get(W);if(P.__renderTarget=M,!bt.__hasExternalTextures){let O=Math.max(1,M.width>>St),j=Math.max(1,M.height>>St);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,St,it,O,j,M.depth,0,yt,et,null):e.texImage2D(nt,St,it,O,j,0,yt,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),xt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,nt,P.__webglTexture,0,ce(M)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,mt,nt,P.__webglTexture,St),e.bindFramebuffer(i.FRAMEBUFFER,null)}function se(A,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let mt=M.depthTexture,nt=mt&&mt.isDepthTexture?mt.type:null,St=_(M.stencilBuffer,nt),yt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(M),St,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(M),St,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,St,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,A)}else{let mt=M.textures;for(let nt=0;nt<mt.length;nt++){let St=mt[nt],yt=r.convert(St.format,St.colorSpace),et=r.convert(St.type),it=T(St.internalFormat,yt,et,St.normalized,St.colorSpace);xt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(M),it,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(M),it,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,it,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function J(A,M,W){let mt=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(M.depthTexture);nt.__renderTarget=M;let St=mt?M.depthTexture.image[0]:M.depthTexture.image;(!nt.__webglTexture||St.width!==M.width||St.height!==M.height)&&(St.width=M.width,St.height=M.height,M.depthTexture.needsUpdate=!0),mt?Dt(M.depthTexture,0):Rt(M.depthTexture,0);let yt=nt.__webglTexture,et=ce(M),it=mt?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,bt=M.depthTexture.format===ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===ei)xt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,bt,it,yt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,bt,it,yt,0);else if(M.depthTexture.format===ai)xt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,bt,it,yt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,bt,it,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(A){let M=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let mt=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),mt){let nt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,mt.removeEventListener("dispose",nt)};mt.addEventListener("dispose",nt),M.__depthDisposeCallback=nt}M.__boundDepthTexture=mt}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let mt=0;mt<6;mt++)J(M.__webglFramebuffer[mt],A,mt);else A.texture.mipmaps.length>0?J(M.__webglFramebuffer[0],A,0):J(M.__webglFramebuffer,A,0);else if(W){M.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[mt]),M.__webglDepthbuffer[mt]===void 0)M.__webglDepthbuffer[mt]=i.createRenderbuffer(),se(M.__webglDepthbuffer[mt],A,!1);else{let nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=M.__webglDepthbuffer[mt];i.bindRenderbuffer(i.RENDERBUFFER,St),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,St)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),se(M.__webglDepthbuffer,A,!1);else{let nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,St),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,St)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(A,M,W){let mt=n.get(A);M!==void 0&&At(mt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&rt(A)}function Jt(A){let M=A.texture,W=n.get(A),mt=n.get(M);A.addEventListener("dispose",F),D(A);let nt=A.textures,St=A.isWebGLCubeRenderTarget===!0,yt=nt.length>1;if(yt||(mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture()),mt.__version=M.version,a.memory.textures++),St){W.__webglFramebuffer=[];for(let et=0;et<6;et++)if(M.mipmaps.length>0){W.__webglFramebuffer[et]=[];for(let it=0;it<M.mipmaps.length;it++)W.__webglFramebuffer[et][it]=i.createFramebuffer()}else W.__webglFramebuffer[et]=i.createFramebuffer()}else{if(M.mipmaps.length>0){W.__webglFramebuffer=[];for(let et=0;et<M.mipmaps.length;et++)W.__webglFramebuffer[et]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(yt)for(let et=0,it=nt.length;et<it;et++){let bt=n.get(nt[et]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&xt(A)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let et=0;et<nt.length;et++){let it=nt[et];W.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[et]);let bt=r.convert(it.format,it.colorSpace),P=r.convert(it.type),O=T(it.internalFormat,bt,P,it.normalized,it.colorSpace,A.isXRRenderTarget===!0),j=ce(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,O,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,W.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),se(W.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(St){e.bindTexture(i.TEXTURE_CUBE_MAP,mt.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,M);for(let et=0;et<6;et++)if(M.mipmaps.length>0)for(let it=0;it<M.mipmaps.length;it++)At(W.__webglFramebuffer[et][it],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,it);else At(W.__webglFramebuffer[et],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);w(M)?S(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(yt){for(let et=0,it=nt.length;et<it;et++){let bt=nt[et],P=n.get(bt),O=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(O=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(O,P.__webglTexture),Nt(O,bt),At(W.__webglFramebuffer,A,bt,i.COLOR_ATTACHMENT0+et,O,0),w(bt)&&S(O)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(et=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,mt.__webglTexture),Nt(et,M),M.mipmaps.length>0)for(let it=0;it<M.mipmaps.length;it++)At(W.__webglFramebuffer[it],A,M,i.COLOR_ATTACHMENT0,et,it);else At(W.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,et,0);w(M)?S(et):M.mipmaps.length>0&&i.texParameteri(et,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&rt(A)}function U(A){let M=A.textures;for(let W=0,mt=M.length;W<mt;W++){let nt=M[W];if(w(nt)&&nt.mipmapsAutoUpdate===!0){let St=C(A),yt=n.get(nt).__webglTexture;e.bindTexture(St,yt),S(St),e.unbindTexture()}}}let ue=[];function ee(A){if(A.samples>0){if(xt(A)===!1){let M=A.textures,W=A.width,mt=A.height,nt=i.COLOR_BUFFER_BIT,St=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(A),et=M.length>1;if(et)for(let bt=0;bt<M.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let bt=0;bt<M.length;bt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[bt]);let P=n.get(M[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,W,mt,0,0,W,mt,nt,i.NEAREST),l===!0&&(ue.length=0,ue.push(i.COLOR_ATTACHMENT0+bt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&ue.push(St),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let bt=0;bt<M.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[bt]);let P=n.get(M[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,P,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ce(A){return Math.min(s.maxSamples,A.samples)}function xt(A){let M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function fe(A){let M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Wt(A,M){let W=A.colorSpace,mt=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==qs&&W!==oi&&(ge.getTransfer(W)===be?(mt!==Dn||nt!==_n)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",W)),M}function $t(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Ht,this.resetTextureUnits=st,this.getTextureUnits=at,this.setTextureUnits=It,this.setTexture2D=Rt,this.setTexture2DArray=Lt,this.setTexture3D=kt,this.setTextureCube=Dt,this.rebindTextures=Ct,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=xt,this.dispose=V}function U0(i,t){function e(n,s=oi){let r,a=ge.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ic)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===tc)return i.BYTE;if(n===ec)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===lo)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===sc)return i.ALPHA;if(n===rc)return i.RGB;if(n===Dn)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===ai)return i.DEPTH_STENCIL;if(n===uo)return i.RED;if(n===fo)return i.RED_INTEGER;if(n===yi)return i.RG;if(n===po)return i.RG_INTEGER;if(n===mo)return i.RGBA_INTEGER;if(n===wr||n===Tr||n===Ar||n===Er)if(a===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===go||n===_o||n===xo||n===vo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yo||n===Mo||n===So||n===bo||n===wo||n===Cr||n===To)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yo||n===Mo)return a===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===So)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===bo)return r.COMPRESSED_R11_EAC;if(n===wo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Cr)return r.COMPRESSED_RG11_EAC;if(n===To)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ao||n===Eo||n===Co||n===Ro||n===Po||n===Io||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ao)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ro)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Po)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Io)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Do)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===No)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ko||n===Go||n===Vo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ko)return a===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ho||n===Wo||n===Rr||n===Xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var F0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new or(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ln({vertexShader:F0,fragmentShader:O0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new Mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pc=class extends zn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new Rc,p={},v=e.getContextAttributes(),w=null,S=null,C=[],T=[],_=new dt,b=null,D=null,E=new Ze;E.viewport=new Re;let N=new Ze;N.viewport=new Re;let F=[E,N],G=new io,L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let Rt=C[tt];return Rt===void 0&&(Rt=new gs,C[tt]=Rt),Rt.getTargetRaySpace()},this.getControllerGrip=function(tt){let Rt=C[tt];return Rt===void 0&&(Rt=new gs,C[tt]=Rt),Rt.getGripSpace()},this.getHand=function(tt){let Rt=C[tt];return Rt===void 0&&(Rt=new gs,C[tt]=Rt),Rt.getHandSpace()};function Z(tt){let Rt=T.indexOf(tt.inputSource);if(Rt===-1)return;let Lt=C[Rt];Lt!==void 0&&(Lt.update(tt.inputSource,tt.frame,c||a),Lt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function q(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ot);for(let tt=0;tt<C.length;tt++){let Rt=T[tt];Rt!==null&&(T[tt]=null,C[tt].disconnect(Rt))}L=null,V=null,m.reset();for(let tt in p)delete p[tt];if(t.setRenderTarget(w),d=null,u=null,f=null,s=null,S=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),D!==null){let tt=D.camera;tt.fov=D.fov,tt.zoom=D.zoom,tt.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,n.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ot),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,kt=null,Dt=null;v.depth&&(Dt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=v.stencil?ai:ei,kt=v.stencil?Hi:In);let ut={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new pn(u.textureWidth,u.textureHeight,{format:Dn,type:_n,depthTexture:new ii(u.textureWidth,u.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Lt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Lt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new pn(d.framebufferWidth,d.framebufferHeight,{format:Dn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ot(tt){for(let Rt=0;Rt<tt.removed.length;Rt++){let Lt=tt.removed[Rt],kt=T.indexOf(Lt);kt>=0&&(T[kt]=null,C[kt].disconnect(Lt))}for(let Rt=0;Rt<tt.added.length;Rt++){let Lt=tt.added[Rt],kt=T.indexOf(Lt);if(kt===-1){for(let ut=0;ut<C.length;ut++)if(ut>=T.length){T.push(Lt),kt=ut;break}else if(T[ut]===null){T[ut]=Lt,kt=ut;break}if(kt===-1)break}let Dt=C[kt];Dt&&Dt.connect(Lt)}}function K(tt,Rt){Rt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(Rt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let Rt=tt.near,Lt=tt.far;m.texture!==null&&(m.depthNear>0&&(Rt=m.depthNear),m.depthFar>0&&(Lt=m.depthFar)),G.near=N.near=E.near=Rt,G.far=N.far=E.far=Lt,(L!==G.near||V!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),L=G.near,V=G.far),G.layers.mask=tt.layers.mask|6,E.layers.mask=G.layers.mask&-5,N.layers.mask=G.layers.mask&-3;let kt=tt.parent,Dt=G.cameras;K(G,kt);for(let ut=0;ut<Dt.length;ut++)K(Dt[ut],kt);G.projectionMatrix.copy(E.projectionMatrix),G.projectionMatrixInverse.copy(E.projectionMatrixInverse),D===null&&tt.isPerspectiveCamera&&(D={camera:tt,fov:tt.fov,zoom:tt.zoom}),st(tt,G,kt)};function st(tt,Rt,Lt){Lt===null?tt.matrix.copy(Rt.matrixWorld):(tt.matrix.copy(Lt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(Rt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(Rt.projectionMatrix),tt.projectionMatrixInverse.copy(Rt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Aa*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(tt){l=tt,u!==null&&(u.fixedFoveation=tt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(tt){return p[tt]};let at=null;function It(tt,Rt){if(h=Rt.getViewerPose(c||a),g=Rt,h!==null){let Lt=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let kt=!1;Lt.length!==G.cameras.length&&(G.cameras.length=0,kt=!0);for(let Yt=0;Yt<Lt.length;Yt++){let Nt=Lt[Yt],ae=null;if(d!==null)ae=d.getViewport(Nt);else{let vt=f.getViewSubImage(u,Nt);ae=vt.viewport,Yt===0&&(t.setRenderTargetTextures(S,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(S))}let $=F[Yt];$===void 0&&($=new Ze,$.layers.enable(Yt),$.viewport=new Re,F[Yt]=$),$.matrix.fromArray(Nt.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Nt.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(ae.x,ae.y,ae.width,ae.height),Yt===0&&(G.matrix.copy($.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),kt===!0&&G.cameras.push($)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let Yt=f.getDepthInformation(Lt[0]);Yt&&Yt.isValid&&Yt.texture&&m.init(Yt,s.renderState)}if(Dt&&Dt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let Yt=0;Yt<Lt.length;Yt++){let Nt=Lt[Yt].camera;if(Nt){let ae=p[Nt];ae||(ae=new or,p[Nt]=ae);let $=f.getCameraImage(Nt);ae.sourceTexture=$}}}}for(let Lt=0;Lt<C.length;Lt++){let kt=T[Lt],Dt=C[Lt];kt!==null&&Dt!==void 0&&Dt.update(kt,Rt,c||a)}at&&at(tt,Rt),Rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Rt}),g=null}let Ht=new Fu;Ht.setAnimationLoop(It),this.setAnimationLoop=function(tt){at=tt},this.dispose=function(){}}},B0=new we,qu=new re;qu.set(-1,0,0,0,1,0,0,0,1);function z0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,dc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,w,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),w=v.envMap,S=v.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(B0.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(qu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function k0(i,t,e,n){let s={},r={};function a(v,w){let S=w.program;n.uniformBlockBinding(v,S,s[v.id])}function o(v,w){let S=s[v.id];S===void 0&&(g(v),S=l(v),s[v.id]=S,v.addEventListener("dispose",m));let C=w.program;n.updateUBOMapping(v,C);let T=t.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){let w=i.createBuffer(),S=v.__size,C=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,S,C),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(v){let w=s[v.id],S=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,_=S.length;T<_;T++){let b=S[T];if(Array.isArray(b))for(let D=0,E=b.length;D<E;D++)h(b[D],T,D,C);else h(b,T,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,w,S,C){if(u(v,w,S,C)===!0){let T=v.__offset,_=v.value;if(Array.isArray(_)){let b=0;for(let D=0;D<_.length;D++){let E=_[D],N=x(E,!0);f(E,v.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,v.__data)}}function f(v,w,S){typeof v=="number"||typeof v=="boolean"?w[S]=v:v.isMatrix3?(w[S]=v.elements[0],w[S+1]=v.elements[1],w[S+2]=v.elements[2],w[S+3]=0,w[S+4]=v.elements[3],w[S+5]=v.elements[4],w[S+6]=v.elements[5],w[S+7]=0,w[S+8]=v.elements[6],w[S+9]=v.elements[7],w[S+10]=v.elements[8],w[S+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-S),S):v.toArray(w,S)}function u(v,w,S,C){let T=v.value,_=w+"_"+S;if(Array.isArray(T)){C[_]===void 0&&(C[_]=[]);let b=C[_],D=!1;for(let E=0;E<T.length;E++)d(T[E],b,E)===!0&&(D=!0);return D}return d(T,C,_)}function d(v,w,S){if(w[S]===void 0)return typeof v=="number"||typeof v=="boolean"?w[S]=v:ArrayBuffer.isView(v)?w[S]=v.slice():w[S]=v.clone(),!0;{let C=w[S];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return w[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function g(v){let w=v.uniforms,S=0,C=16;for(let _=0,b=w.length;_<b;_++){let D=Array.isArray(w[_])?w[_]:[w[_]];for(let E=0,N=D.length;E<N;E++){let F=D[E],G=Array.isArray(F.value)?F.value:[F.value],L=Array.isArray(w[_])||Array.isArray(F.value),V=S;for(let q=0,ot=G.length;q<ot;q++){let K=G[q],st=x(K,L),at=S%C,It=at%st.boundary,Ht=at+It;S+=It,Ht!==0&&C-Ht<st.storage&&(S+=C-Ht),q===0&&(V=S),S+=st.storage}let Z=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Z((S-V)/Float32Array.BYTES_PER_ELEMENT),F.__offset=V}}let T=S%C;return T>0&&(S+=C-T),v.__size=S,v.__cache={},this}function x(v,w){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):ne("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(v){let w=v.target;w.removeEventListener("dispose",m),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:p}}var G0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xn=null;function V0(){return Xn===null&&(Xn=new er(G0,16,16,yi,Ln),Xn.name="DFG_LUT",Xn.minFilter=rn,Xn.magFilter=rn,Xn.wrapS=Bn,Xn.wrapT=Bn,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}var Cs=class{constructor(t={}){let{canvas:e=jh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=_n}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=d,m=new Set([mo,po,fo]),p=new Set([_n,In,Ts,Hi,co,ho]),v=new Uint32Array(4),w=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},C=null,T=null,_=[],b=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,N=!1,F=null,G=null,L=null,V=null;this._outputColorSpace=Ee;let Z=0,q=0,ot=null,K=-1,st=null,at=new Re,It=new Re,Ht=null,tt=new te(0),Rt=0,Lt=e.width,kt=e.height,Dt=1,ut=null,B=null,Yt=new Re(0,0,Lt,kt),Nt=new Re(0,0,Lt,kt),ae=!1,$=new Ni,vt=new Ia,pt=!1,Bt=!1,At=new we,se=new I,J=new Re,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function Jt(){return ot===null?Dt:1}let U=n;function ue(y,R){return e.getContext(y,R)}let ee,ce,xt,fe,Wt,$t,A,M,W,mt,nt,St,yt,et,it,bt,P,O,j,Et,Mt,Tt,Zt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Kt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),U===null){let R="webgl2";if(U=ue(R,y),U===null)throw ue(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}he()}catch(y){throw e.removeEventListener("webglcontextlost",Kt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),ie("WebGLRenderer: "+y.message),y}function he(){ee=new jm(U),ee.init(),Mt=new U0(U,ee),ce=new Vm(U,ee,t,Mt),xt=new D0(U,ee),ce.reversedDepthBuffer&&u&&xt.buffers.depth.setReversed(!0),G=U.createFramebuffer(),L=U.createFramebuffer(),V=U.createFramebuffer(),fe=new ng(U),Wt=new v0,$t=new N0(U,ee,xt,Wt,ce,Mt,fe),A=new Qm(E),M=new sf(U),Tt=new km(U,M),W=new tg(U,M,fe,Tt),mt=new sg(U,W,M,Tt,fe),O=new ig(U,ce,$t),it=new Hm(Wt),nt=new x0(E,A,ee,ce,Tt,it),St=new z0(E,Wt),yt=new M0,et=new E0(ee),P=new zm(E,A,xt,mt,g,l),bt=new L0(E,mt,ce),Zt=new k0(U,fe,ce,xt),j=new Gm(U,ee,fe),Et=new eg(U,ee,fe),fe.programs=nt.programs,E.capabilities=ce,E.extensions=ee,E.properties=Wt,E.renderLists=yt,E.shadowMap=bt,E.state=xt,E.info=fe}x!==_n&&(D=new ag(x,e.width,e.height,o,s,r));let _t=new Pc(E,U);this.xr=_t,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let y=ee.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ee.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Dt},this.setPixelRatio=function(y){y!==void 0&&(Dt=y,this.setSize(Lt,kt,!1))},this.getSize=function(y){return y.set(Lt,kt)},this.setSize=function(y,R,z=!0){if(_t.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Lt=y,kt=R,e.width=Math.floor(y*Dt),e.height=Math.floor(R*Dt),z===!0&&(e.style.width=y+"px",e.style.height=R+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,y,R)},this.getDrawingBufferSize=function(y){return y.set(Lt*Dt,kt*Dt).floor()},this.setDrawingBufferSize=function(y,R,z){Lt=y,kt=R,Dt=z,e.width=Math.floor(y*z),e.height=Math.floor(R*z),this.setViewport(0,0,y,R)},this.setEffects=function(y){if(x===_n){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let R=0;R<y.length;R++)if(y[R].isOutputPass===!0){ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(at)},this.getViewport=function(y){return y.copy(Yt)},this.setViewport=function(y,R,z,k){y.isVector4?Yt.set(y.x,y.y,y.z,y.w):Yt.set(y,R,z,k),xt.viewport(at.copy(Yt).multiplyScalar(Jt()).round())},this.getScissor=function(y){return y.copy(Nt)},this.setScissor=function(y,R,z,k){y.isVector4?Nt.set(y.x,y.y,y.z,y.w):Nt.set(y,R,z,k),xt.scissor(It.copy(Nt).multiplyScalar(Jt()).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(y){xt.setScissorTest(ae=y)},this.setOpaqueSort=function(y){ut=y},this.setTransparentSort=function(y){B=y},this.getClearColor=function(y){return y.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(y=!0,R=!0,z=!0){let k=0;if(y){let H=!1;if(ot!==null){let ct=ot.texture.format;H=m.has(ct)}if(H){let ct=ot.texture.type,wt=p.has(ct),gt=P.getClearColor(),Pt=P.getClearAlpha(),Gt=gt.r,jt=gt.g,le=gt.b;wt?(v[0]=Gt,v[1]=jt,v[2]=le,v[3]=Pt,U.clearBufferuiv(U.COLOR,0,v)):(w[0]=Gt,w[1]=jt,w[2]=le,w[3]=Pt,U.clearBufferiv(U.COLOR,0,w))}else k|=U.COLOR_BUFFER_BIT}R&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Kt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),P.dispose(),yt.dispose(),et.dispose(),$t.dispose(),Wt.dispose(),A.dispose(),mt.dispose(),W.dispose(),Tt.dispose(),Zt.dispose(),nt.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",Or),_t.removeEventListener("sessionend",Is),Fn.stop()};function Kt(y){y.preventDefault(),$s("WebGLRenderer: Context Lost."),N=!0}function Xt(){$s("WebGLRenderer: Context Restored."),N=!1;let y=fe.autoReset,R=bt.enabled,z=bt.autoUpdate,k=bt.needsUpdate,H=bt.type;he(),fe.autoReset=y,bt.enabled=R,bt.autoUpdate=z,bt.needsUpdate=k,bt.type=H}function Ut(y){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ye(y){let R=y.target;R.removeEventListener("dispose",ye),Ne(R)}function Ne(y){Un(y),Wt.remove(y)}function Un(y){let R=Wt.get(y).programs;R!==void 0&&(R.forEach(function(z){nt.releaseProgram(z)}),y.isShaderMaterial&&nt.releaseShaderCache(y))}this.renderBufferDirect=function(y,R,z,k,H,ct){R===null&&(R=rt);let wt=H.isMesh&&H.matrixWorld.determinantAffine()<0,gt=zt(y,R,z,k,H);xt.setMaterial(k,wt);let Pt=z.index,Gt=1;if(k.wireframe===!0){if(Pt=W.getWireframeAttribute(z),Pt===void 0)return;Gt=2}let jt=z.drawRange,le=z.attributes.position,qt=jt.start*Gt,pe=(jt.start+jt.count)*Gt;ct!==null&&(qt=Math.max(qt,ct.start*Gt),pe=Math.min(pe,(ct.start+ct.count)*Gt)),Pt!==null?(qt=Math.max(qt,0),pe=Math.min(pe,Pt.count)):le!=null&&(qt=Math.max(qt,0),pe=Math.min(pe,le.count));let Ie=pe-qt;if(Ie<0||Ie===1/0)return;Tt.setup(H,k,gt,z,Pt);let Ae,Se=j;if(Pt!==null&&(Ae=M.get(Pt),Se=Et,Se.setIndex(Ae)),H.isMesh)k.wireframe===!0?(xt.setLineWidth(k.wireframeLinewidth*Jt()),Se.setMode(U.LINES)):Se.setMode(U.TRIANGLES);else if(H.isLine){let Oe=k.linewidth;Oe===void 0&&(Oe=1),xt.setLineWidth(Oe*Jt()),H.isLineSegments?Se.setMode(U.LINES):H.isLineLoop?Se.setMode(U.LINE_LOOP):Se.setMode(U.LINE_STRIP)}else H.isPoints?Se.setMode(U.POINTS):H.isSprite&&Se.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))Se.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Oe=H._multiDrawStarts,Vt=H._multiDrawCounts,Ve=H._multiDrawCount,Me=Pt?M.get(Pt).bytesPerElement:1,Ai=Wt.get(k).currentProgram.getUniforms();for(let Qe=0;Qe<Ve;Qe++)Ai.setValue(U,"_gl_DrawID",Qe),Se.render(Oe[Qe]/Me,Vt[Qe])}else if(H.isInstancedMesh)Se.renderInstances(qt,Ie,H.count);else if(z.isInstancedBufferGeometry){let Oe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Vt=Math.min(z.instanceCount,Oe);Se.renderInstances(qt,Ie,Vt)}else Se.render(qt,Ie)};function Fr(y,R,z,k){F!==null&&y.isNodeMaterial&&F.setObject(k,y),pt===!0&&it.setState(y,z,!1),y.transparent===!0&&y.side===Ke&&y.forceSinglePass===!1?(y.side=$e,y.needsUpdate=!0,ht(y,R,k),y.side=vi,y.needsUpdate=!0,ht(y,R,k),y.side=Ke):ht(y,R,k)}this.compile=function(y,R,z=null){z===null&&(z=y),F!==null&&F.renderStart(y,R,z),T=et.get(z),T.init(R),b.push(T),z.traverseVisible(function(H){H.isLight&&H.layers.test(R.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),y!==z&&y.traverseVisible(function(H){H.isLight&&H.layers.test(R.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),Bt=this.localClippingEnabled,pt=it.init(this.clippingPlanes,Bt),pt===!0&&it.setGlobalState(this.clippingPlanes,R),F!==null&&bt.render(T.state.shadowsArray,z,R);let k=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ct=H.material;if(ct)if(Array.isArray(ct))for(let wt=0;wt<ct.length;wt++){let gt=ct[wt];Fr(gt,z,R,H),k.add(gt)}else Fr(ct,z,R,H),k.add(ct)}),T=b.pop(),F!==null&&F.renderEnd(),k},this.compileAsync=function(y,R,z=null){let k=this.compile(y,R,z);return new Promise(H=>{function ct(){if(k.forEach(function(wt){let Pt=Wt.get(wt).currentProgram;(Pt===void 0||Pt.isReady())&&k.delete(wt)}),k.size===0){H(y);return}setTimeout(ct,10)}ee.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Xi=null;function nl(y){Xi&&Xi(y)}function Or(){Fn.stop()}function Is(){Fn.start()}let Fn=new Fu;Fn.setAnimationLoop(nl),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(y){Xi=y,_t.setAnimationLoop(y),y===null?Fn.stop():Fn.start()},_t.addEventListener("sessionstart",Or),_t.addEventListener("sessionend",Is),this.render=function(y,R){if(R!==void 0&&R.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(y,R);let z=_t.enabled===!0&&_t.isPresenting===!0,k=D!==null&&(ot===null||z)&&D.begin(E,ot);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(R),R=_t.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,R,ot),T=et.get(y,b.length),T.init(R),T.state.textureUnits=$t.getTextureUnits(),b.push(T),At.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),R.isArrayCamera?vt.setFromArrayCamera(R):$.setFromProjectionMatrix(At,vn,R.reversedDepth),Bt=this.localClippingEnabled,pt=it.init(this.clippingPlanes,Bt),C=yt.get(y,_.length),C.init(),_.push(C),this.info.render.frame++,_t.enabled===!0&&_t.isPresenting===!0){let wt=E.xr.getDepthSensingMesh();wt!==null&&Si(wt,R,-1/0,E.sortObjects)}Si(y,R,0,E.sortObjects),C.finish(),F!==null&&F.updateLights(T.state.lightsArray),E.sortObjects===!0&&C.sort(ut,B),Ct=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,Ct&&P.addToRenderList(C,y),this.info.autoReset===!0&&this.info.reset(),pt===!0&&it.beginShadows();let H=T.state.shadowsArray;if(bt.render(H,y,R),pt===!0&&it.endShadows(),(k&&D.hasRenderPass())===!1){let wt=C.opaque,gt=C.transmissive;if(T.setupLights(),R.isArrayCamera){let Pt=R.cameras;if(gt.length>0)for(let Gt=0,jt=Pt.length;Gt<jt;Gt++){let le=Pt[Gt];qi(wt,gt,y,le)}Ct&&P.render(y);for(let Gt=0,jt=Pt.length;Gt<jt;Gt++){let le=Pt[Gt];bi(C,y,le,le.viewport)}}else gt.length>0&&qi(wt,gt,y,R),Ct&&P.render(y),bi(C,y,R)}ot!==null&&q===0&&($t.updateMultisampleRenderTarget(ot),$t.updateRenderTargetMipmap(ot)),k&&D.end(E),y.isScene===!0&&y.onAfterRender(E,y,R),Tt.resetDefaultState(),K=-1,st=null,b.pop(),b.length>0?(T=b[b.length-1],$t.setTextureUnits(T.state.textureUnits),pt===!0&&it.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?C=_[_.length-1]:C=null,F!==null&&F.renderEnd()};function Si(y,R,z,k){if(y.visible===!1)return;if(y.layers.test(R.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(R);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){let wt=R.isArrayCamera?vt:$;if(!y.frustumCulled||y.intersectsFrustum(wt)){k&&J.setFromMatrixPosition(y.matrixWorld).applyMatrix4(At);let gt=mt.update(y),Pt=y.material;Pt.visible&&C.push(y,gt,Pt,z,J.z,null,R)}}else if(y.isMesh||y.isLine||y.isPoints){let wt=R.isArrayCamera?vt:$;if(!y.frustumCulled||y.intersectsFrustum(wt)){let gt=mt.update(y),Pt=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),J.copy(y.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),J.copy(gt.boundingSphere.center)),J.applyMatrix4(y.matrixWorld).applyMatrix4(At)),Array.isArray(Pt)){let Gt=gt.groups;for(let jt=0,le=Gt.length;jt<le;jt++){let qt=Gt[jt],pe=Pt[qt.materialIndex];pe&&pe.visible&&C.push(y,gt,pe,z,J.z,qt,R)}}else Pt.visible&&C.push(y,gt,Pt,z,J.z,null,R)}}}let ct=y.children;for(let wt=0,gt=ct.length;wt<gt;wt++)Si(ct[wt],R,z,k)}function bi(y,R,z,k){let{opaque:H,transmissive:ct,transparent:wt}=y;T.setupLightsView(z),pt===!0&&it.setGlobalState(E.clippingPlanes,z),k&&xt.viewport(at.copy(k)),H.length>0&&wi(H,R,z),ct.length>0&&wi(ct,R,z),wt.length>0&&wi(wt,R,z),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function qi(y,R,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let qt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new pn(1,1,{generateMipmaps:!0,type:qt?Ln:_n,minFilter:ri,samples:Math.max(4,ce.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ge.workingColorSpace})}let ct=T.state.transmissionRenderTarget[k.id],wt=k.viewport||at;ct.setSize(wt.z*E.transmissionResolutionScale,wt.w*E.transmissionResolutionScale);let gt=E.getRenderTarget(),Pt=E.getActiveCubeFace(),Gt=E.getActiveMipmapLevel();E.setRenderTarget(ct),E.getClearColor(tt),Rt=E.getClearAlpha(),Rt<1&&E.setClearColor(16777215,.5),E.clear(),Ct&&P.render(z);let jt=E.toneMapping;E.toneMapping=Wn;let le=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),pt===!0&&it.setGlobalState(E.clippingPlanes,k),wi(y,z,k),$t.updateMultisampleRenderTarget(ct),$t.updateRenderTargetMipmap(ct),ee.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let pe=0,Ie=R.length;pe<Ie;pe++){let Ae=R[pe],{object:Se,geometry:Oe,material:Vt,group:Ve}=Ae;if(Vt.side===Ke&&Se.layers.test(k.layers)){let Me=Vt.side;Vt.side=$e,Vt.needsUpdate=!0,Ti(Se,z,k,Oe,Vt,Ve),Vt.side=Me,Vt.needsUpdate=!0,qt=!0}}qt===!0&&($t.updateMultisampleRenderTarget(ct),$t.updateRenderTargetMipmap(ct))}E.setRenderTarget(gt,Pt,Gt),E.setClearColor(tt,Rt),le!==void 0&&(k.viewport=le),E.toneMapping=jt}function wi(y,R,z){let k=R.isScene===!0?R.overrideMaterial:null;for(let H=0,ct=y.length;H<ct;H++){let wt=y[H],{object:gt,geometry:Pt,group:Gt}=wt,jt=wt.material;jt.allowOverride===!0&&k!==null&&(jt=k),gt.layers.test(z.layers)&&Ti(gt,R,z,Pt,jt,Gt)}}function Ti(y,R,z,k,H,ct){F!==null&&H.isNodeMaterial&&F.setObject(y,H),y.onBeforeRender(E,R,z,k,H,ct),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(E,R,z,k,y,ct),H.transparent===!0&&H.side===Ke&&H.forceSinglePass===!1?(H.side=$e,H.needsUpdate=!0,E.renderBufferDirect(z,R,k,H,y,ct),H.side=vi,H.needsUpdate=!0,E.renderBufferDirect(z,R,k,H,y,ct),H.side=Ke):E.renderBufferDirect(z,R,k,H,y,ct),y.onAfterRender(E,R,z,k,H,ct)}function Q(y){let R=0;for(let z of y)z.texture!==null&&R++;return R}function ht(y,R,z){R.isScene!==!0&&(R=rt);let k=Wt.get(y),H=T.state.lights,ct=T.state.shadowsArray,wt=H.state.version,gt=nt.getParameters(y,H.state,ct,R,z,T.state.lightProbeGridArray),Pt=nt.getProgramCacheKey(gt),Gt=k.programs;k.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,k.fog=R.fog;let jt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;k.envMap=A.get(y.envMap||k.environment,jt),k.envMapRotation=k.environment!==null&&y.envMap===null?R.environmentRotation:y.envMapRotation,Gt===void 0&&(y.addEventListener("dispose",ye),Gt=new Map,k.programs=Gt,k.programVariants=new Map);let le=Gt.get(Pt);if(le!==void 0){if(k.currentProgram===le&&k.lightsStateVersion===wt)return lt(y,gt),le}else gt.uniforms=nt.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,z,gt),y.onBeforeCompile(gt,E),le=nt.acquireProgram(gt,Pt),Gt.set(Pt,le),k.uniforms=gt.uniforms;let qt=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(qt.clippingPlanes=it.uniform),lt(y,gt),k.needsLights=oe(y),k.lightsStateVersion=wt,k.needsLights&&(qt.ambientLightColor.value=H.state.ambient,qt.lightProbe.value=H.state.probe,qt.sunLights.value=H.state.sun,qt.sunLightShadows.value=H.state.sunShadow,qt.directionalLights.value=H.state.directional,qt.directionalLightShadows.value=H.state.directionalShadow,qt.spotLights.value=H.state.spot,qt.spotLightShadows.value=H.state.spotShadow,qt.rectAreaLights.value=H.state.rectArea,qt.ltc_1.value=H.state.rectAreaLTC1,qt.ltc_2.value=H.state.rectAreaLTC2,qt.pointLights.value=H.state.point,qt.pointLightShadows.value=H.state.pointShadow,qt.hemisphereLights.value=H.state.hemi,qt.sunShadowMatrix.value=H.state.sunShadowMatrix,qt.sunShadowCascade.value=H.state.sunShadowCascade,qt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,qt.spotLightMatrix.value=H.state.spotLightMatrix,qt.spotLightMap.value=H.state.spotLightMap,qt.pointShadowMatrix.value=H.state.pointShadowMatrix),k.numLightProbeGrids=Q(T.state.lightProbeGridArray),k.currentProgram=le,k.uniformsList=null,le}function Y(y,R,z,k,H){let ct=Wt.get(y),wt=ct.currentProgram.id+","+k+","+H,gt=ct.programVariants.get(wt);return gt===void 0?(gt=ht(y,R,z),ct.programVariants.set(wt,gt)):(ct.currentProgram=gt,ct.uniformsList=null,ct.outputColorSpace=k,ct.toneMapping=H),gt}function X(y){if(y.uniformsList===null){let R=y.currentProgram.getUniforms();y.uniformsList=As.seqWithValue(R.seq,y.uniforms)}return y.uniformsList}function lt(y,R){let z=Wt.get(y);z.outputColorSpace=R.outputColorSpace,z.batching=R.batching,z.batchingColor=R.batchingColor,z.instancing=R.instancing,z.instancingColor=R.instancingColor,z.instancingMorph=R.instancingMorph,z.skinning=R.skinning,z.morphTargets=R.morphTargets,z.morphNormals=R.morphNormals,z.morphColors=R.morphColors,z.morphTargetsCount=R.morphTargetsCount,z.numClippingPlanes=R.numClippingPlanes,z.numIntersection=R.numClipIntersection,z.vertexAlphas=R.vertexAlphas,z.vertexTangents=R.vertexTangents,z.toneMapping=R.toneMapping}function zt(y,R,z,k,H){R.isScene!==!0&&(R=rt),$t.resetTextureUnits();let ct=R.fog,wt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?R.environment:null,gt=ot===null?E.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ge.workingColorSpace,Pt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Gt=A.get(k.envMap||wt,Pt),jt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,le=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),qt=!!z.morphAttributes.position,pe=!!z.morphAttributes.normal,Ie=!!z.morphAttributes.color,Ae=Wn;k.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Ae=E.toneMapping);let Se=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Oe=Se!==void 0?Se.length:0,Vt=Wt.get(k),Ve=T.state.lights;if(pt===!0&&(Bt===!0||y!==st)){let Le=y===st&&k.id===K;it.setState(k,y,Le)}let Me=!1,Ai=!1;k.version===Vt.__version?Vt.needsLights&&Vt.lightsStateVersion!==Ve.state.version||H.isBatchedMesh&&Vt.batching===!1||!H.isBatchedMesh&&Vt.batching===!0||H.isBatchedMesh&&Vt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Vt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Vt.instancing===!1||!H.isInstancedMesh&&Vt.instancing===!0||H.isSkinnedMesh&&Vt.skinning===!1||!H.isSkinnedMesh&&Vt.skinning===!0||H.isInstancedMesh&&Vt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Vt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Vt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Vt.instancingMorph===!1&&H.morphTexture!==null||Vt.envMap!==Gt||k.fog===!0&&Vt.fog!==ct||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==it.numPlanes||Vt.numIntersection!==it.numIntersection)||Vt.vertexAlphas!==jt||Vt.vertexTangents!==le||Vt.morphTargets!==qt||Vt.morphNormals!==pe||Vt.morphColors!==Ie||Vt.morphTargetsCount!==Oe||Vt.numLightProbeGrids!==Q(T.state.lightProbeGridArray)?Me=!0:(Vt.outputColorSpace!==gt||Vt.toneMapping!==Ae)&&(Ai=!0):(Me=!0,Vt.__version=k.version);let Qe=Vt.currentProgram;(Me===!0||Ai===!0)&&(Qe=Ai===!0?Y(k,R,H,gt,Ae):ht(k,R,H),F&&k.isNodeMaterial&&F.onUpdateProgram(k,Qe,Vt));let Br=!1,li=!1,Ei=!1,ve=Qe.getUniforms(),Ye=Vt.uniforms;if(xt.useProgram(Qe.program)&&(Br=!0,li=!0,Ei=!0),k.id!==K&&(K=k.id,li=!0),Br||st!==y){xt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ve.setValue(U,"projectionMatrix",y.projectionMatrix),ve.setValue(U,"viewMatrix",y.matrixWorldInverse);let He=ve.map.cameraPosition;He!==void 0&&He.setValue(U,se.setFromMatrixPosition(y.matrixWorld)),ce.logarithmicDepthBuffer&&ve.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ve.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),st!==y&&(st=y,li=!0,Ei=!0)}if(Vt.needsLights&&(Ve.state.sunShadowMap.length>0&&ve.setValue(U,"sunShadowMap",Ve.state.sunShadowMap,$t),Ve.state.directionalShadowMap.length>0&&ve.setValue(U,"directionalShadowMap",Ve.state.directionalShadowMap,$t),Ve.state.spotShadowMap.length>0&&ve.setValue(U,"spotShadowMap",Ve.state.spotShadowMap,$t),Ve.state.pointShadowMap.length>0&&ve.setValue(U,"pointShadowMap",Ve.state.pointShadowMap,$t)),H.isSkinnedMesh){ve.setOptional(U,H,"bindMatrix"),ve.setOptional(U,H,"bindMatrixInverse");let Le=H.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),ve.setValue(U,"boneTexture",Le.boneTexture,$t))}H.isBatchedMesh&&(ve.setOptional(U,H,"batchingTexture"),ve.setValue(U,"batchingTexture",H._matricesTexture,$t),ve.setOptional(U,H,"batchingIdTexture"),ve.setValue(U,"batchingIdTexture",H._indirectTexture,$t),ve.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&ve.setValue(U,"batchingColorTexture",H._colorsTexture,$t));let bn=z.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&O.update(H,z,Qe),(li||Vt.receiveShadow!==H.receiveShadow)&&(Vt.receiveShadow=H.receiveShadow,ve.setValue(U,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&R.environment!==null&&(Ye.envMapIntensity.value=R.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=V0()),li){if(ve.setValue(U,"toneMappingExposure",E.toneMappingExposure),Vt.needsLights&&Qt(Ye,Ei),ct&&k.fog===!0&&St.refreshFogUniforms(Ye,ct),St.refreshMaterialUniforms(Ye,k,Dt,kt,T.state.transmissionRenderTarget[y.id]),Vt.needsLights&&Vt.numLightProbeGrids>0){let Le=S,He=0;for(let Yn of T.state.lightProbeGridArray)Yn.texture!==null&&(Le.textures[He]=Yn.texture,Le.min[He]=Yn.boundingBox.min,Le.max[He]=Yn.boundingBox.max,Le.resolution[He]=Yn.resolution,He++);for(let Yn in Le)Le[Yn].length=He;Ye.probesSH.value=Le.textures,Ye.probesMin.value=Le.min,Ye.probesMax.value=Le.max,Ye.probesResolution.value=Le.resolution}As.upload(U,X(Vt),Ye,$t)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(As.upload(U,X(Vt),Ye,$t),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ve.setValue(U,"center",H.center),ve.setValue(U,"modelViewMatrix",H.modelViewMatrix),ve.setValue(U,"normalMatrix",H.normalMatrix),ve.setValue(U,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){let Le=k.uniformsGroups;for(let He=0,Yn=Le.length;He<Yn;He++){let Nc=Le[He];Zt.update(Nc,Qe),Zt.bind(Nc,Qe)}}return Qe}function Qt(y,R){y.ambientLightColor.needsUpdate=R,y.lightProbe.needsUpdate=R,y.sunLights.needsUpdate=R,y.sunLightShadows.needsUpdate=R,y.directionalLights.needsUpdate=R,y.directionalLightShadows.needsUpdate=R,y.pointLights.needsUpdate=R,y.pointLightShadows.needsUpdate=R,y.spotLights.needsUpdate=R,y.spotLightShadows.needsUpdate=R,y.rectAreaLights.needsUpdate=R,y.hemisphereLights.needsUpdate=R}function oe(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(y,R,z){let k=Wt.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Wt.get(y.texture).__webglTexture=R,Wt.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,R){let z=Wt.get(y);z.__webglFramebuffer=R,z.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(y,R=0,z=0){ot=y,Z=R,q=z;let k=null,H=!1,ct=!1;if(y){let gt=Wt.get(y);if(gt.__useDefaultFramebuffer!==void 0){xt.bindFramebuffer(U.FRAMEBUFFER,gt.__webglFramebuffer),at.copy(y.viewport),It.copy(y.scissor),Ht=y.scissorTest,xt.viewport(at),xt.scissor(It),xt.setScissorTest(Ht),K=-1;return}else if(gt.__webglFramebuffer===void 0)$t.setupRenderTarget(y);else if(gt.__hasExternalTextures)$t.rebindTextures(y,Wt.get(y.texture).__webglTexture,Wt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let jt=y.depthTexture;if(gt.__boundDepthTexture!==jt){if(jt!==null&&Wt.has(jt)&&(y.width!==jt.image.width||y.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$t.setupDepthRenderbuffer(y)}}let Pt=y.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ct=!0);let Gt=Wt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Gt[R])?k=Gt[R][z]:k=Gt[R],H=!0):y.samples>0&&$t.useMultisampledRTT(y)===!1?k=Wt.get(y).__webglMultisampledFramebuffer:Array.isArray(Gt)?k=Gt[z]:k=Gt,at.copy(y.viewport),It.copy(y.scissor),Ht=y.scissorTest}else at.copy(Yt).multiplyScalar(Dt).floor(),It.copy(Nt).multiplyScalar(Dt).floor(),Ht=ae;if(z!==0&&(k=G),xt.bindFramebuffer(U.FRAMEBUFFER,k)&&xt.drawBuffers(y,k),xt.viewport(at),xt.scissor(It),xt.setScissorTest(Ht),H){let gt=Wt.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+R,gt.__webglTexture,z)}else if(ct){let gt=R;for(let Pt=0;Pt<y.textures.length;Pt++){let Gt=Wt.get(y.textures[Pt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Pt,Gt.__webglTexture,z,gt)}}else if(y!==null&&z!==0){let gt=Wt.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,gt.__webglTexture,z)}K=-1};function Ft(y){let R=Wt.get(y);return(R.__readFormat!==y.format||R.__readType!==y.type)&&(R.__readFormat=y.format,R.__readType=y.type,R.__formatReadable=ce.textureFormatReadable(y.format),R.__typeReadable=ce.textureTypeReadable(y.type)),R}this.readRenderTargetPixels=function(y,R,z,k,H,ct,wt,gt=0){if(!(y&&y.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Wt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&wt!==void 0&&(Pt=Pt[wt],Array.isArray(Pt)&&(Pt=Pt[0])),Pt){xt.bindFramebuffer(U.FRAMEBUFFER,Pt);try{let Gt=y.textures[gt],jt=Gt.format,le=Gt.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+gt);let qt=Ft(Gt);if(qt.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qt.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=y.width-k&&z>=0&&z<=y.height-H&&U.readPixels(R,z,k,H,Mt.convert(jt),Mt.convert(le),ct)}finally{let Gt=ot!==null?Wt.get(ot).__webglFramebuffer:null;xt.bindFramebuffer(U.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(y,R,z,k,H,ct,wt,gt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Wt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&wt!==void 0&&(Pt=Pt[wt],Array.isArray(Pt)&&(Pt=Pt[0])),Pt)if(R>=0&&R<=y.width-k&&z>=0&&z<=y.height-H){xt.bindFramebuffer(U.FRAMEBUFFER,Pt);let Gt=y.textures[gt],jt=Gt.format,le=Gt.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+gt);let qt=Ft(Gt);if(qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,pe),U.bufferData(U.PIXEL_PACK_BUFFER,ct.byteLength,U.STREAM_READ),U.readPixels(R,z,k,H,Mt.convert(jt),Mt.convert(le),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ie=ot!==null?Wt.get(ot).__webglFramebuffer:null;xt.bindFramebuffer(U.FRAMEBUFFER,Ie);let Ae=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await eu(U,Ae,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,pe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ct),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(pe),U.deleteSync(Ae),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,R=null,z=0){let k=Math.pow(2,-z),H=Math.floor(y.image.width*k),ct=Math.floor(y.image.height*k),wt=R!==null?R.x:0,gt=R!==null?R.y:0;$t.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,wt,gt,H,ct),xt.unbindTexture()},this.copyTextureToTexture=function(y,R,z=null,k=null,H=0,ct=0){let wt,gt,Pt,Gt,jt,le,qt,pe,Ie,Ae=y.isCompressedTexture?y.mipmaps[ct]:y.image;if(z!==null)wt=z.max.x-z.min.x,gt=z.max.y-z.min.y,Pt=z.isBox3?z.max.z-z.min.z:1,Gt=z.min.x,jt=z.min.y,le=z.isBox3?z.min.z:0;else{let ve=Math.pow(2,-H);wt=Math.floor(Ae.width*ve),gt=Math.floor(Ae.height*ve),y.isDataArrayTexture?Pt=Ae.depth:y.isData3DTexture?Pt=Math.floor(Ae.depth*ve):Pt=1,Gt=0,jt=0,le=0}k!==null?(qt=k.x,pe=k.y,Ie=k.z):(qt=0,pe=0,Ie=0);let Se=Mt.convert(R.format),Oe=Mt.convert(R.type),Vt;R.isData3DTexture?($t.setTexture3D(R,0),Vt=U.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?($t.setTexture2DArray(R,0),Vt=U.TEXTURE_2D_ARRAY):($t.setTexture2D(R,0),Vt=U.TEXTURE_2D),xt.activeTexture(U.TEXTURE0),xt.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,R.flipY),xt.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),xt.pixelStorei(U.UNPACK_ALIGNMENT,R.unpackAlignment);let Ve=xt.getParameter(U.UNPACK_ROW_LENGTH),Me=xt.getParameter(U.UNPACK_IMAGE_HEIGHT),Ai=xt.getParameter(U.UNPACK_SKIP_PIXELS),Qe=xt.getParameter(U.UNPACK_SKIP_ROWS),Br=xt.getParameter(U.UNPACK_SKIP_IMAGES);xt.pixelStorei(U.UNPACK_ROW_LENGTH,Ae.width),xt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ae.height),xt.pixelStorei(U.UNPACK_SKIP_PIXELS,Gt),xt.pixelStorei(U.UNPACK_SKIP_ROWS,jt),xt.pixelStorei(U.UNPACK_SKIP_IMAGES,le);let li=y.isDataArrayTexture||y.isData3DTexture,Ei=R.isDataArrayTexture||R.isData3DTexture;if(y.isDepthTexture){let ve=Wt.get(y),Ye=Wt.get(R),bn=Wt.get(ve.__renderTarget),Le=Wt.get(Ye.__renderTarget);xt.bindFramebuffer(U.READ_FRAMEBUFFER,bn.__webglFramebuffer),xt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let He=0;He<Pt;He++)li&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Wt.get(y).__webglTexture,H,le+He),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Wt.get(R).__webglTexture,ct,Ie+He)),U.blitFramebuffer(Gt,jt,Gt+wt,jt+gt,qt,pe,qt+wt,pe+gt,U.DEPTH_BUFFER_BIT,U.NEAREST);xt.bindFramebuffer(U.READ_FRAMEBUFFER,null),xt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||Wt.has(y)){let ve=Wt.get(y),Ye=Wt.get(R);xt.bindFramebuffer(U.READ_FRAMEBUFFER,L),xt.bindFramebuffer(U.DRAW_FRAMEBUFFER,V);for(let bn=0;bn<Pt;bn++)li?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ve.__webglTexture,H,le+bn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ve.__webglTexture,H),Ei?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ye.__webglTexture,ct,Ie+bn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ye.__webglTexture,ct),H!==0?U.blitFramebuffer(Gt,jt,Gt+wt,jt+gt,qt,pe,qt+wt,pe+gt,U.COLOR_BUFFER_BIT,U.NEAREST):Ei?U.copyTexSubImage3D(Vt,ct,qt,pe,Ie+bn,Gt,jt,wt,gt):U.copyTexSubImage2D(Vt,ct,qt,pe,Gt,jt,wt,gt);xt.bindFramebuffer(U.READ_FRAMEBUFFER,null),xt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ei?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(Vt,ct,qt,pe,Ie,wt,gt,Pt,Se,Oe,Ae.data):R.isCompressedArrayTexture?U.compressedTexSubImage3D(Vt,ct,qt,pe,Ie,wt,gt,Pt,Se,Ae.data):U.texSubImage3D(Vt,ct,qt,pe,Ie,wt,gt,Pt,Se,Oe,Ae):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ct,qt,pe,wt,gt,Se,Oe,Ae.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ct,qt,pe,Ae.width,Ae.height,Se,Ae.data):U.texSubImage2D(U.TEXTURE_2D,ct,qt,pe,wt,gt,Se,Oe,Ae);xt.pixelStorei(U.UNPACK_ROW_LENGTH,Ve),xt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Me),xt.pixelStorei(U.UNPACK_SKIP_PIXELS,Ai),xt.pixelStorei(U.UNPACK_SKIP_ROWS,Qe),xt.pixelStorei(U.UNPACK_SKIP_IMAGES,Br),ct===0&&R.generateMipmaps===!0&&R.mipmapsAutoUpdate===!0&&U.generateMipmap(Vt),xt.unbindTexture()},this.initRenderTarget=function(y){Wt.get(y).__webglFramebuffer===void 0&&$t.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?$t.setTextureCube(y,0):y.isData3DTexture?$t.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?$t.setTexture2DArray(y,0):$t.setTexture2D(y,0),xt.unbindTexture()},this.resetState=function(){Z=0,q=0,ot=null,xt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}};var Lc=64,jo=8,Qo=30,qe=Math.PI*2,ft=(i,t)=>i+Math.random()*(t-i),Ps=[["#9c0c22","#c0112b","#8f0a1f"],["#05402a","#0b7d4c","#053524"],["#0a1f5c","#1b42ad","#081a4d"],["#0b0b10","#1d1d28","#08080c"],["#7a0f45","#b81d6a","#6a0c3b"],["#7a2c06","#c4530f","#6a2505"],["#064a52","#0d8c95","#053d44"],["#3d0f52","#6c1c8c","#330c45"],["#cfcabd","#f1ede4","#c5bfb1"],["#2a5d7a","#5ca6cd","#234f69"]];function tl(i=2048,t=Ps[0],e="",n=1){let s=i,r=i/2,a=()=>{let _=document.createElement("canvas");return _.width=s,_.height=r,_},o=a(),l=a(),c=o.getContext("2d"),h=l.getContext("2d"),f=document.createElement("canvas");f.width=f.height=128;let u=f.getContext("2d"),d=u.createImageData(128,128);for(let _=0;_<d.data.length;_+=4){let b=50+Math.random()*130;d.data[_]=d.data[_+1]=d.data[_+2]=b,d.data[_+3]=255}u.putImageData(d,0,0);let g=c.createLinearGradient(0,0,0,r);g.addColorStop(0,t[0]),g.addColorStop(.5,t[1]),g.addColorStop(1,t[2]),c.fillStyle=g,c.fillRect(0,0,s,r),h.fillStyle="rgb(20,20,20)",h.fillRect(0,0,s,r);let x=c.createLinearGradient(0,0,0,r);x.addColorStop(0,"#f6d47a"),x.addColorStop(.5,"#eebf52"),x.addColorStop(1,"#f6d47a");let m=h.createPattern(f,"repeat"),p=_=>{c.fillStyle=x,c.strokeStyle=x,_(c),h.fillStyle=m,h.strokeStyle=m,_(h)},v=s/2048,w=(_,b)=>p(D=>D.fillRect(0,_*r-b*v/2,s,b*v));w(.335,9),w(.312,3.5),w(.665,9),w(.688,3.5),w(.185,4),w(.815,4);let S=12,C=s/S;for(let _=0;_<S;_++){let b=(_+.5)*C,D=r/2;e&&_%6!==0&&_%6!==5||(_%2===0?p(E=>{E.save(),E.translate(b,D),E.lineCap="round",E.lineWidth=6.5*v;for(let N=0;N<6;N++)E.rotate(Math.PI/3),E.beginPath(),E.moveTo(0,0),E.lineTo(0,-64*v),E.moveTo(0,-30*v),E.lineTo(-15*v,-45*v),E.moveTo(0,-30*v),E.lineTo(15*v,-45*v),E.moveTo(0,-48*v),E.lineTo(-10*v,-58*v),E.moveTo(0,-48*v),E.lineTo(10*v,-58*v),E.stroke();E.beginPath(),E.arc(0,0,9*v,0,qe),E.fill(),E.restore()}):p(E=>{E.save(),E.translate(b,D),E.beginPath();for(let N=0;N<8;N++){let F=N/8*qe,G=(N%2?9:40)*v;E.lineTo(Math.sin(F)*G,-Math.cos(F)*G)}E.closePath(),E.fill(),[[-46,-46],[46,-46],[-46,46],[46,46]].forEach(([N,F])=>{E.beginPath(),E.arc(N*v,F*v,6*v,0,qe),E.fill()}),E.restore()}))}e&&p(_=>{_.save(),_.textAlign="center",_.textBaseline="middle";let b=170*v*n;_.font=`italic 600 ${b}px Fraunces, Georgia, serif`;let D=_.measureText(e).width;D>610*v*n&&(b*=610*v*n/D,_.font=`italic 600 ${b}px Fraunces, Georgia, serif`),_.fillText(e,.25*s,r/2+6*v),_.fillText(e,.75*s,r/2+6*v),_.restore()});for(let _=0;_<s;_+=23*v){let b=Math.cos(_/C*qe),D=(4.5+2.5*(.5-.5*b))*v;p(E=>{E.beginPath(),E.arc(_,(.262+.026*b)*r,D,0,qe),E.fill(),E.beginPath(),E.arc(_,(.738-.026*b)*r,D,0,qe),E.fill()})}let T=28;for(let _=0;_<T;_++){let b=(_+.5)*(s/T);p(D=>{D.beginPath(),D.moveTo(b-9*v,.168*r),D.lineTo(b+9*v,.168*r),D.lineTo(b+2*v,.03*r),D.lineTo(b-2*v,.03*r),D.closePath(),D.fill(),D.beginPath(),D.moveTo(b-9*v,.832*r),D.lineTo(b+9*v,.832*r),D.lineTo(b+2*v,.97*r),D.lineTo(b-2*v,.97*r),D.closePath(),D.fill()})}return{colorC:o,roughC:l}}function Nr(i){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),n=e.createRadialGradient(128,128,0,128,128,128);i.forEach(([r,a])=>n.addColorStop(r,a)),e.fillStyle=n,e.fillRect(0,0,256,256);let s=new Fe(t);return s.colorSpace=Ee,s}function Dc(i){let t=new pi,e=new Hn(60,48,24),n=e.attributes.position,s=new Float32Array(n.count*3),r=new te(.012,.035,.05),a=new te(.05,.13,.11),o=new te(.2,.26,.3),l=new te;for(let g=0;g<n.count;g++){let x=n.getY(g)/60;x>0?l.copy(a).lerp(r,Math.min(1,x*1.6)):l.copy(a).lerp(o,Math.min(1,-x*2.2)),s.set([l.r,l.g,l.b],g*3)}e.setAttribute("color",new Te(s,3)),t.add(new _e(e,new Gn({side:$e,vertexColors:!0})));let c=(g,x,m,p,v,w,S,C)=>{let T=new _e(g,new Gn({color:new te(x*v,m*v,p*v),side:Ke}));return T.position.set(w,S,C),T.lookAt(0,0,0),t.add(T),T},h=new Hn(1,12,8);c(new Mn(20,11),1,.97,.9,7,-14,20,20),c(new Mn(4,22),.55,.78,1,3.5,26,6,-10),c(new Hn(3.2,20,12),1,.95,.8,11,20,22,-30),c(new Mn(5,5),1,.58,.18,9,12,-9,26);let f=[[1,.14,.1],[1,.72,.22],[.16,1,.42],[1,.94,.84]];for(let g=0;g<16;g++){let x=g/16*qe+.2,[m,p,v]=f[g%4];c(h,m,p,v,16,Math.cos(x)*30,19+Math.sin(g*1.9)*2.4,Math.sin(x)*30).scale.setScalar(1.15)}for(let g=0;g<46;g++){let x=ft(0,qe),m=ft(.25,1.3);c(h,1,.97,.9,22,Math.cos(x)*Math.cos(m)*50,Math.sin(m)*50,Math.sin(x)*Math.cos(m)*50).scale.setScalar(ft(.14,.3))}let u=new Es(i),d=u.fromScene(t,.02).texture;return u.dispose(),t.traverse(g=>{g.geometry?.dispose(),g.material?.dispose()}),d}function H0(i,t){i.customProgramCacheKey=()=>"boule-fissures",i.onBeforeCompile=e=>{Object.assign(e.uniforms,t),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aObj;
varying vec3 vObj;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vObj = aObj;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vObj;
        uniform vec3 uSeeds[${Lc}];
        uniform vec4 uImpacts[${jo}];
        uniform float uGlow;
        uniform float uCharge;
        uniform float uTime;
        float crackCore = 0.0;
        float crackHalo = 0.0;
        float crackFlick = 1.0;
        float hash1(float n) { return fract(sin(n) * 43758.5453123); }
        void computeCracks() {
          vec3 p = normalize(vObj);
          vec3 q = normalize(p + 0.035 * sin(p.yzx * 17.0 + 1.3) * sin(p.zxy * 29.0 + 0.7) + 0.012 * sin(p.zxy * 71.0));
          float d1 = -2.0, d2 = -2.0, i1 = 0.0, i2 = 0.0;
          vec3 s1 = vec3(0.0), s2 = vec3(0.0);
          for (int i = 0; i < ${Lc}; i++) {
            vec3 s = uSeeds[i];
            float d = dot(q, s);
            if (d > d1) { d2 = d1; s2 = s1; i2 = i1; d1 = d; s1 = s; i1 = float(i); }
            else if (d > d2) { d2 = d; s2 = s; i2 = float(i); }
          }
          float e = dot(q - 0.5 * (s1 + s2), normalize(s1 - s2));
          float h = hash1((i1 + 1.0) * (i2 + 1.0) * 0.731 + (i1 + i2) * 3.17);
          float m = 0.0;
          float star = 0.0;
          for (int k = 0; k < ${jo}; k++) {
            vec4 im = uImpacts[k];
            if (im.w <= 0.0) continue;
            float a = acos(clamp(dot(p, im.xyz), -1.0, 1.0));
            float wob = 0.14 * sin(dot(p, vec3(13.1, 7.7, 9.3)) + float(k) * 2.1) + 0.06 * sin(dot(p, vec3(-31.0, 23.0, 17.0)));
            m = max(m, 1.0 - smoothstep(im.w - 0.22, im.w, a + wob));
            // \xE9toile d'impact : fines fissures qui rayonnent du point touch\xE9
            vec3 t1 = normalize(cross(im.xyz, vec3(0.31, 0.87, 0.38)));
            vec3 t2 = cross(im.xyz, t1);
            float phi = atan(dot(p, t1), dot(p, t2));
            float spokes = abs(sin(phi * 4.5 + float(k) * 1.7 + 0.5 * sin(phi * 3.0 + float(k))));
            float reach = min(0.5, im.w * 0.55) * (0.6 + 0.4 * hash1(floor(phi * 1.43 + float(k) * 7.0)));
            float sw = 0.0028 + 0.0055 * (1.0 - a / max(reach, 0.001));
            star = max(star, (1.0 - smoothstep(sw * 0.4, sw, a * spokes)) * (1.0 - smoothstep(reach * 0.8, reach, a)));
            star = max(star, 1.0 - smoothstep(0.008, 0.022, a));
          }
          float vis = m * smoothstep(h * 0.8 - 0.06, h * 0.8 + 0.04, uCharge + 0.12);
          float w = mix(0.0022, 0.0075, pow(1.0 - h, 1.5)) * (0.8 + 0.5 * uCharge);
          crackCore = max((1.0 - smoothstep(w * 0.45, w, e)) * vis, star);
          crackHalo = max(exp(-e * 105.0) * vis, star * 0.5);
          crackFlick = 0.82 + 0.18 * sin(uTime * 11.0 + h * 40.0) * sin(uTime * 3.7 + i1);
        }`).replace("void main() {",`void main() {
  computeCracks();`).replace("#include <map_fragment>",`#include <map_fragment>
        if (!gl_FrontFacing) diffuseColor.rgb = vec3(0.82, 0.84, 0.88);
        diffuseColor.rgb *= 1.0 - 0.9 * crackCore;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += (vec3(1.0, 0.9, 0.62) * crackCore * 3.0 + vec3(1.0, 0.55, 0.14) * crackHalo * 0.9) * uGlow * crackFlick;`)}}function W0(i){let t=[];for(let e=0;e<i;e++){let n=null,s=-1;for(let r=0;r<5;r++){let a=new I().randomDirection(),o=9;for(let l of t)o=Math.min(o,a.distanceToSquared(l));o>s&&(s=o,n=a)}t.push(n)}return t}function X0(i,t,e){let s=new xr(1,26),r=s.attributes.position,a=i.map(()=>[]),o=new I,l=new I,c=new I,h=new I;for(let u=0;u<r.count;u+=3){o.fromBufferAttribute(r,u),l.fromBufferAttribute(r,u+1),c.fromBufferAttribute(r,u+2),h.copy(o).add(l).add(c).normalize();let d=0,g=-2;for(let x=0;x<i.length;x++){let m=h.dot(i[x]);m>g&&(g=m,d=x)}a[d].push(o.clone().normalize(),l.clone().normalize(),c.clone().normalize())}s.dispose();let f=[];return a.forEach(u=>{if(!u.length)return;let d=new I;u.forEach(F=>d.add(F)),d.multiplyScalar(1/u.length);let g=u.length,x=F=>`${F.x.toFixed(4)},${F.y.toFixed(4)},${F.z.toFixed(4)}`,m=new Map;for(let F=0;F<g;F+=3)for(let G=0;G<3;G++){let L=u[F+G],V=u[F+(G+1)%3],Z=x(L),q=x(V),ot=Z<q?`${Z}|${q}`:`${q}|${Z}`,K=m.get(ot);K?K.count++:m.set(ot,{count:1,a:L,b:V})}let p=[...m.values()].filter(F=>F.count===1),v=g*2+p.length*6,w=new Float32Array(v*3),S=new Float32Array(v*3),C=new Float32Array(v*3),T=new Float32Array(v*2);for(let F=0;F<g;F+=3){let G=[];for(let V=0;V<3;V++){let Z=u[F+V];w.set([Z.x-d.x,Z.y-d.y,Z.z-d.z],(F+V)*3),S.set([Z.x,Z.y,Z.z],(F+V)*3),C.set([Z.x,Z.y,Z.z],(F+V)*3);let q=Math.atan2(Z.z,-Z.x)/qe;q<0&&(q+=1),G.push(q),T[(F+V)*2+1]=1-Math.acos(Math.max(-1,Math.min(1,Z.y)))/Math.PI}let L=Math.max(...G)-Math.min(...G)>.5;for(let V=0;V<3;V++)T[(F+V)*2]=L&&G[V]<.5?G[V]+1:G[V]}for(let F=0;F<g;F++){let G=u[F],L=g+F;w.set([G.x*.965-d.x,G.y*.965-d.y,G.z*.965-d.z],L*3),S.set([G.x,G.y,G.z],L*3),C.set([G.x,G.y,G.z],L*3),T[L*2]=T[F*2],T[L*2+1]=T[F*2+1]}let _=g*2,b=new I,D=new I;p.forEach(({a:F,b:G})=>{let L=F.clone().multiplyScalar(.965),V=G.clone().multiplyScalar(.965);D.copy(F).add(G).multiplyScalar(.5),b.copy(G).sub(F).cross(D).normalize(),b.dot(D.clone().sub(d))<0&&b.negate(),[F,G,L,G,V,L].forEach(Z=>{w.set([Z.x-d.x,Z.y-d.y,Z.z-d.z],_*3),S.set([b.x,b.y,b.z],_*3),C.set([D.x,D.y,D.z],_*3),T[_*2]=.5,T[_*2+1]=.5,_++})});let E=new Pe;E.addGroup(0,g*2,0),E.addGroup(g*2,p.length*6,1),E.setAttribute("position",new Te(w,3)),E.setAttribute("normal",new Te(S,3)),E.setAttribute("aObj",new Te(C,3)),E.setAttribute("uv",new Te(T,2));let N=new _e(E,[t,e]);N.visible=!1,N.frustumCulled=!1,f.push({mesh:N,center:d,vel:new I,axis:new I,spin:0,size:Math.sqrt(g)*.55})}),f}function Ic(i,t=!1){let e=new Pe,n=new Float32Array(i*3),s=new Float32Array(i),r=new Float32Array(i),a=new Float32Array(i*3);e.setAttribute("position",new Te(n,3)),e.setAttribute("aSize",new Te(s,1)),e.setAttribute("aAlpha",new Te(r,1)),e.setAttribute("aColor",new Te(a,3));let o=new ln({uniforms:{uScale:{value:1},uCamZ:{value:15}},vertexShader:`
      attribute float aSize; attribute float aAlpha; attribute vec3 aColor;
      uniform float uScale; uniform float uCamZ;
      varying float vAlpha; varying vec3 vColor;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = aSize * uScale * (uCamZ / max(0.5, -mv.z));
        vAlpha = aAlpha; vColor = aColor;
      }`,fragmentShader:`
      varying float vAlpha; varying vec3 vColor;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float core = smoothstep(1.0, 0.0, length(c) * 2.0);
        float a = pow(core, 2.4) + 0.7 * pow(core, 9.0);
        float star = max(0.0, 1.0 - abs(c.x) * abs(c.y) * 110.0) * core;
        gl_FragColor = vec4(vColor * (a + star * 0.55) * vAlpha, 0.0);
      }`,blending:cn,premultipliedAlpha:!0,transparent:!0,depthWrite:!1}),l=new Ui(e,o);l.frustumCulled=!1;let c=Array.from({length:i},()=>({life:0,max:1,x:0,y:0,z:0,vx:0,vy:0,vz:0,size:3,drag:1,grav:0,tw:0,r:1,g:.8,b:.4,fixed:!1})),h=0;return{points:l,mat:o,P:c,emit(f){if(t)h=(h+1)%i;else for(let u=0;u<i&&(h=(h+1)%i,!(!c[h].fixed&&c[h].life<=0));u++);return Object.assign(c[h],{drag:1.5,grav:0,tw:ft(0,qe),r:1,g:.8,b:.42,fixed:!1,strobe:!1,wob:.08},f),c[h].max=c[h].life,c[h]},clear(){c.forEach(f=>{f.life=0,f.fixed=!1})},update(f,u){let d=0;for(let g=0;g<i;g++){let x=c[g];if(x.life<=0){r[g]=0;continue}if(d++,!x.fixed){x.life-=f;let p=Math.exp(-x.drag*f);x.vx*=p,x.vy=x.vy*p+x.grav*f,x.vz*=p,x.x+=(x.vx+Math.sin(u*1.3+x.tw)*x.wob)*f,x.y+=x.vy*f,x.z+=x.vz*f}n[g*3]=x.x,n[g*3+1]=x.y,n[g*3+2]=x.z;let m=x.fixed?1:Math.min(1,x.life/(x.max*.45))*Math.min(1,(x.max-x.life)*14);r[g]=m*(x.strobe?Math.sin(u*46+x.tw*9)>.25?1.25:.06:.55+.45*Math.sin(u*7+x.tw*3)),s[g]=x.size,a[g*3]=x.r,a[g*3+1]=x.g,a[g*3+2]=x.b}return e.attributes.position.needsUpdate=!0,e.attributes.aSize.needsUpdate=!0,e.attributes.aAlpha.needsUpdate=!0,e.attributes.aColor.needsUpdate=!0,d}}}function q0({canvas:i,anchor:t,sound:e={}}){let n;try{n=new Cs({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch{return null}let s=Math.min(window.devicePixelRatio||1,2);n.setPixelRatio(s),n.setClearColor(0,0),n.toneMapping=Gi,n.toneMappingExposure=1.05;let r=new pi;r.environment=Dc(n);let a=new Ze(Qo,1,.1,200),{colorC:o,roughC:l}=tl(2048),c=Math.min(8,n.capabilities.getMaxAnisotropy()),h=new Fe(o);h.colorSpace=Ee,h.wrapS=Cn,h.anisotropy=c;let f=new Fe(l);f.wrapS=Cn,f.anisotropy=c;let u="0|",d=W0(Lc),g={uSeeds:{value:d},uImpacts:{value:Array.from({length:jo},()=>new Re(0,1,0,0))},uGlow:{value:1},uCharge:{value:0},uTime:{value:0}},x=new Bi({map:h,roughnessMap:f,roughness:1,metalness:1,bumpMap:f,bumpScale:1.2,clearcoat:1,clearcoatRoughness:.035,envMapIntensity:1.25,side:Ke});H0(x,g);let m=new en({color:new te(1,.74,.3),metalness:1,roughness:.26,envMapIntensity:1.3}),p=new Be,v=new Be,w=new Be;r.add(p),p.add(v),v.add(w);let S=new Hn(1,96,64);S.setAttribute("aObj",S.attributes.position.clone());let C=new _e(S,x);w.add(C);let T=document.createElement("canvas");T.width=64,T.height=4;let _=T.getContext("2d");for(let Q=0;Q<64;Q+=4)_.fillStyle=Q%8?"#fff":"#555",_.fillRect(Q,0,4,4);let b=new Fe(T);b.wrapS=Cn,b.repeat.set(4,1);let D=m.clone();D.bumpMap=b,D.bumpScale=2.5;let E=new _e(new Oi([new dt(.001,1.185),new dt(.15,1.185),new dt(.195,1.15),new dt(.2,.99),new dt(.235,.965),new dt(.24,.93),new dt(.001,.93)],40),D),N=new _e(new mi(.085,.014,10,30),m);N.position.y=1.25,w.add(E,N);let F=document.createElement("canvas");F.width=4,F.height=64;let G=F.getContext("2d"),L=G.createLinearGradient(0,0,0,64);L.addColorStop(0,"#000"),L.addColorStop(.5,"#555"),L.addColorStop(1,"#fff"),G.fillStyle=L,G.fillRect(0,0,4,64);let V=1.05,Z=new _e(new si(.009,.009,V,6,1,!0),new Gn({color:new te(1.2,1,.6),alphaMap:new Fe(F),transparent:!0,depthWrite:!1}));Z.position.y=1.32+V/2,v.add(Z);let q=Nr([[0,"rgba(255,236,170,1)"],[.25,"rgba(255,205,110,0.55)"],[.6,"rgba(255,170,70,0.12)"],[1,"rgba(255,160,60,0)"]]),ot=new un(new on({map:q,blending:cn,depthWrite:!1,transparent:!0,toneMapped:!1,opacity:0})),K=new un(new on({map:q,blending:cn,depthWrite:!1,depthTest:!1,transparent:!0,toneMapped:!1,opacity:0})),st=Nr([[0,"rgba(255,240,200,0)"],[.84,"rgba(255,240,200,0)"],[.93,"rgba(255,236,180,0.55)"],[.97,"rgba(255,210,120,0.2)"],[1,"rgba(255,200,100,0)"]]),at=new un(new on({map:st,blending:cn,depthWrite:!1,depthTest:!1,transparent:!0,toneMapped:!1,opacity:0}));r.add(ot,K,at);let It=Ic(900);r.add(It.points);let Ht=Ic(9e3,!0);Ht.mat.depthTest=!1,r.add(Ht.points);let tt=Ic(1800);tt.mat.depthTest=!1,r.add(tt.points);let Rt=new en({color:15138804,metalness:.15,roughness:.06,emissive:10274740,emissiveIntensity:.45,envMapIntensity:2.2,side:Ke}),Lt=X0(d,x,Rt);Lt.forEach(Q=>r.add(Q.mesh));let kt=[],Dt=Q=>new Promise((ht,Y)=>{let X=new Image;X.onload=()=>ht(X),X.onerror=Y,X.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(Q)}`});async function ut(Q,ht){kt.forEach(X=>{r.remove(X.sprite),X.sprite.material.map.dispose(),X.sprite.material.dispose()}),kt.length=0;let Y=await Promise.all(ht.map(Dt));["",...Q].forEach((X,lt)=>{let zt=document.createElement("canvas");zt.width=256,zt.height=420;let Qt=zt.getContext("2d");Qt.drawImage(Y[lt%Y.length],0,121,256,299),X&&(Qt.font="italic 600 150px Fraunces, Georgia, serif",Qt.textAlign="center",Qt.textBaseline="middle",Qt.shadowColor="rgba(255, 214, 120, 0.95)",Qt.shadowBlur=24,Qt.fillStyle="#f3cf7a",Qt.fillText(X,128,106),Qt.shadowBlur=0,Qt.globalAlpha=.35,Qt.fillStyle="#fff6da",Qt.fillText(X,128,104),Qt.globalAlpha=1);let oe=new Fe(zt);oe.colorSpace=Ee;let Ft=new un(new on({map:oe,transparent:!0,depthWrite:!1,toneMapped:!1}));Ft.scale.set(.72,1.18,1),Ft.visible=!1,r.add(Ft),kt.push({sprite:Ft,vel:new I,spin:0,guard:lt===0})})}let B={running:!1,raf:0,last:0,t:0,visible:!1,W:1,H:1,ppu:100,camZ:15,L:6,ax:0,ay:0,seen:!1,thz:0,thzV:0,thx:0,thxV:0,spin:0,spinV:.35,dragging:!1,tapT:-10,charge:0,glow:0,shaking:!1,kick:new I,impacts:[],shattered:!1,shatterT:0,shake:0,done:null},Yt=Array.from({length:12},(Q,ht)=>{let Y=It.P[ht];return Object.assign(Y,{fixed:!0,life:0,size:ft(3.5,6.5),tw:ft(0,qe),r:1,g:.84,b:.5}),{q:Y,a:ft(0,qe),speed:ft(.5,1.1),R:ft(1.35,1.75),y:ft(-.7,.8),tilt:ft(-.5,.5)}});try{n.initTexture(h),n.initTexture(f),n.compile(r,a)}catch{}let Nt=new I,ae=new I,$=new I,vt=()=>v.getWorldPosition(Nt);function pt(Q){return ae.copy(Q).project(a),{x:(ae.x*.5+.5)*B.W,y:(-ae.y*.5+.5)*B.H}}function Bt(){B.W=window.innerWidth,B.H=window.innerHeight,n.setSize(B.W,B.H,!1),a.aspect=B.W/B.H,a.updateProjectionMatrix(),It.mat.uniforms.uScale.value=J,At()}function At(){let Q=B.shattered?null:t();Q&&Q.r>0&&(B.ppu=Q.r,B.ax=(Q.x-B.W/2)/B.ppu,B.ay=-(Q.y-B.H/2)/B.ppu,B.seen=!0),B.camZ=B.H/B.ppu/2/Math.tan(Qo*Math.PI/360),a.position.set(0,0,B.camZ),It.mat.uniforms.uCamZ.value=B.camZ}window.addEventListener("resize",()=>{B.visible&&Bt()});function se(){Object.assign(B,{thz:-.09,thzV:0,thx:.04,thxV:0,spin:-.9,spinV:.35,dragging:!1,tapT:-10,charge:0,glow:0,shaking:!1,impacts:[],shattered:!1,shatterT:0,shake:0}),B.kick.set(0,0,0),g.uImpacts.value.forEach(Q=>Q.set(0,1,0,0)),g.uCharge.value=0,B.seen=!1,a.rotation.set(0,0,0),p.visible=!1,C.visible=!0,Lt.forEach(Q=>{Q.mesh.visible=!1}),Xt.on=!1,Xt.heads=[],Xt.rockets=[],Ht.clear(),tt.clear(),i.style.zIndex="",Mt(),P.on=!1,w.add(E),w.add(N),E.position.set(0,0,0),E.rotation.set(0,0,0),E.scale.set(1,1,1),N.position.set(0,1.25,0),N.rotation.set(0,0,0),N.scale.set(1,1,1),A.visible=!1,M.forEach(Q=>{Q.life=0}),yt.material.opacity=0,bt.material.opacity=0,kt.forEach(Q=>{Q.sprite.visible=!1}),It.clear(),Yt.forEach(Q=>{Q.q.fixed=!0,Q.q.life=1}),ot.material.opacity=0,K.material.opacity=0,at.material.opacity=0}let J=s,rt=.016,Ct=0,Jt=s>1?"measure":"off",U=0;function ue(Q){J=Q,n.setPixelRatio(J),n.setSize(B.W,B.H,!1),It.mat.uniforms.uScale.value=J}function ee(Q){if(Jt!=="off")if(Ct++,rt+=(Math.min(.2,Q)-rt)*.08,Jt==="measure"){if(Ct<45)return;rt>.03?(U=rt,ue(Math.max(1,s*.7)),Jt="check",Ct=0,rt=U*.6):Ct>240&&(Jt="off")}else Ct>=70&&(rt>U*.85&&ue(s),Jt="off")}function ce(Q){B.raf=B.running?requestAnimationFrame(ce):0;let ht=(Q-B.last)/1e3,Y=Math.max(.001,Math.min(.04,ht));B.last=Q,ee(ht),Is(Y),B.holdRender||n.render(r,a),!Xt.on&&!O.active&&B.shattered&&B.shatterT>1.2&&!B.flying&&B.alive===0&&Si()}let xt=260,fe=new Pe,Wt=new Float32Array(xt*6),$t=new Float32Array(xt*6);fe.setAttribute("position",new Te(Wt,3)),fe.setAttribute("color",new Te($t,3));let A=new sr(fe,new _s({vertexColors:!0,transparent:!0,blending:cn,depthWrite:!1,toneMapped:!1}));A.frustumCulled=!1,A.visible=!1,r.add(A);let M=Array.from({length:xt},()=>({p:new I,v:new I,life:0,max:1,warm:1}));function W(Q,ht){M.forEach(Y=>{Y.p.copy(Q).add($.randomDirection().multiplyScalar(.25)),Y.v.copy($.randomDirection()).multiplyScalar(ft(5,15)).addScaledVector(ht,ft(0,3)),Y.max=Y.life=ft(.7,1.5),Y.warm=Math.random()}),A.visible=!0}function mt(Q){if(!A.visible)return;let ht=0;M.forEach((Y,X)=>{Y.life>0&&(Y.life-=Q,Y.v.multiplyScalar(Math.exp(-2.4*Q)),Y.v.y-=6*Q,Y.p.addScaledVector(Y.v,Q),ht++);let lt=Math.max(0,Y.life/Y.max),zt=.045;Wt.set([Y.p.x,Y.p.y,Y.p.z,Y.p.x-Y.v.x*zt,Y.p.y-Y.v.y*zt,Y.p.z-Y.v.z*zt],X*6);let Qt=1.3*lt,oe=(.85+.15*Y.warm)*lt,Ft=(.45+.5*Y.warm)*lt;$t.set([Qt,oe,Ft,Qt*.15,oe*.12,Ft*.1],X*6)}),fe.attributes.position.needsUpdate=!0,fe.attributes.color.needsUpdate=!0,ht||(A.visible=!1)}let nt=document.createElement("canvas");nt.width=nt.height=512;{let Q=nt.getContext("2d");Q.translate(256,256);for(let ht=0;ht<28;ht++){Q.rotate(qe/28+ft(-.05,.05));let Y=ft(140,256),X=ft(3,11),lt=Q.createLinearGradient(0,0,0,-Y);lt.addColorStop(0,"rgba(255,236,190,0.9)"),lt.addColorStop(1,"rgba(255,220,150,0)"),Q.fillStyle=lt,Q.beginPath(),Q.moveTo(-X,0),Q.lineTo(0,-Y),Q.lineTo(X,0),Q.fill()}}let St=new Fe(nt);St.colorSpace=Ee;let yt=new un(new on({map:St,blending:cn,depthWrite:!1,depthTest:!1,transparent:!0,toneMapped:!1,opacity:0})),et=document.createElement("canvas");et.width=512,et.height=64;{let Q=et.getContext("2d"),ht=Q.createLinearGradient(0,0,512,0);ht.addColorStop(0,"rgba(160,200,255,0)"),ht.addColorStop(.42,"rgba(200,225,255,0.55)"),ht.addColorStop(.5,"rgba(255,255,255,1)"),ht.addColorStop(.58,"rgba(200,225,255,0.55)"),ht.addColorStop(1,"rgba(160,200,255,0)"),Q.fillStyle=ht;for(let Y=0;Y<64;Y++)Q.globalAlpha=Math.exp(-(((Y-32)/9)**2)),Q.fillRect(0,Y,512,1)}let it=new Fe(et);it.colorSpace=Ee;let bt=new un(new on({map:it,blending:cn,depthWrite:!1,depthTest:!1,transparent:!0,toneMapped:!1,opacity:0}));r.add(yt,bt);let P={on:!1,v:new I,w:new I,vr:new I,wr:new I},O={group:new Be,frags:[],plane:null,mat:null,tex:null,active:!1,aligned:!1,resolve:null,fly:null,textFrac:.8,Wp:3};r.add(O.group);let j=new I;function Et(Q){let ht=document.createElement("canvas");ht.width=2048,ht.height=512;let Y=ht.getContext("2d");((y,R,z,k,H)=>{Y.beginPath(),Y.moveTo(y+H,R),Y.arcTo(y+z,R,y+z,R+k,H),Y.arcTo(y+z,R+k,y,R+k,H),Y.arcTo(y,R+k,y,R,H),Y.arcTo(y,R,y+z,R,H),Y.closePath()})(30,60,1988,392,140),Y.fillStyle="rgba(235, 248, 255, 0.07)",Y.fill(),Y.lineWidth=5,Y.strokeStyle="rgba(255, 236, 190, 0.32)",Y.stroke();let lt=330;Y.font=`italic 600 ${lt}px Fraunces, Georgia, serif`;let zt=Y.measureText(Q).width;zt>1700&&(lt*=1700/zt,Y.font=`italic 600 ${lt}px Fraunces, Georgia, serif`);let Qt=Y.measureText(Q).width;Y.textAlign="center",Y.textBaseline="alphabetic";let oe=256+lt*.33,Ft=Y.createLinearGradient(0,oe-lt*.78,0,oe+lt*.1);return Ft.addColorStop(0,"#fff6d6"),Ft.addColorStop(.35,"#f6d47a"),Ft.addColorStop(.7,"#c9902f"),Ft.addColorStop(1,"#f3cc6d"),Y.shadowColor="rgba(255, 196, 90, 0.9)",Y.shadowBlur=46,Y.fillStyle=Ft,Y.fillText(Q,1024,oe),Y.shadowBlur=0,Y.fillText(Q,1024,oe),{canvas:ht,textFrac:Math.min(1,Qt/2048)}}function Mt(){O.frags.forEach(Q=>{O.group.remove(Q.mesh),Q.mesh.geometry.dispose()}),O.frags=[],O.plane&&(O.group.remove(O.plane),O.plane.geometry.dispose(),O.plane=null),O.mat?.dispose(),O.tex?.dispose(),O.planeMat?.dispose(),O.fragTex?.dispose(),O.fragTex=null,O.mat=O.tex=O.planeMat=null,O.active=O.aligned=!1,O.fly=null,O.resolve=null}function Tt(Q){Mt();let{canvas:ht,textFrac:Y}=Et(Q);O.textFrac=Y,O.canvas=ht;let X=new Fe(ht);X.colorSpace=Ee,X.anisotropy=Math.min(8,n.capabilities.getMaxAnisotropy()),O.tex=X,O.mat=new en({map:X,emissive:16777215,emissiveMap:X,emissiveIntensity:1.15,metalness:.7,roughness:.28,transparent:!0,depthWrite:!1,depthTest:!1,side:Ke,envMapIntensity:1.4}),O.planeMat=new ln({uniforms:{uMap:{value:X},uShine:{value:-1},uAlpha:{value:1}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D uMap; uniform float uShine; uniform float uAlpha; varying vec2 vUv;
        void main() {
          vec4 c = texture2D(uMap, vUv);
          float band = exp(-pow((vUv.x - uShine) * 9.0 - (vUv.y - 0.5) * 2.5, 2.0));
          vec3 col = c.rgb * c.a + vec3(1.0, 0.95, 0.85) * band * c.a * 0.9;
          gl_FragColor = vec4(col * uAlpha, c.a * uAlpha);
        }`,transparent:!0,depthWrite:!1,depthTest:!1,premultipliedAlpha:!0}),O.ready=!0}function Zt(){let Q=B.camZ;j.set(0,0,Q);let ht=Math.tan(Qo*Math.PI/360)*(Q-Nt.z),Y=Math.min(2*ht*a.aspect*.86,4.4),X=Y/4;O.Wp=Y;let lt=11,zt=3,Qt=[];for(let ct=0;ct<=zt;ct++)for(let wt=0;wt<=lt;wt++){let gt=wt===0||ct===0||wt===lt||ct===zt;Qt.push([wt/lt+(gt?0:ft(-.32,.32)/lt),ct/zt+(gt?0:ft(-.3,.3)/zt)])}let oe=(ct,wt)=>Qt[wt*(lt+1)+ct],Ft=[];for(let ct=0;ct<zt;ct++)for(let wt=0;wt<lt;wt++){let gt=oe(wt,ct),Pt=oe(wt+1,ct),Gt=oe(wt+1,ct+1),jt=oe(wt,ct+1);Math.random()<.5?Ft.push([gt,Pt,Gt],[gt,Gt,jt]):Ft.push([gt,Pt,jt],[Pt,Gt,jt])}let y=document.createElement("canvas");y.width=O.canvas.width,y.height=O.canvas.height;let R=y.getContext("2d");R.drawImage(O.canvas,0,0),R.save(),R.beginPath(),R.rect(30,60,1988,392),R.clip(),R.strokeStyle="rgba(255, 250, 235, 0.6)",R.lineWidth=3.5,R.lineJoin="round",Ft.forEach(ct=>{R.beginPath(),ct.forEach(([wt,gt],Pt)=>Pt?R.lineTo(wt*2048,gt*512):R.moveTo(wt*2048,gt*512)),R.closePath(),R.stroke()}),R.restore();let z=new Fe(y);z.colorSpace=Ee,z.anisotropy=O.tex.anisotropy,O.mat.map=z,O.mat.emissiveMap=z,O.mat.needsUpdate=!0,O.fragTex=z;let k=new I(B.ax,Nt.y,Nt.z);Ft.forEach(ct=>{let wt=(ct[0][0]+ct[1][0]+ct[2][0])/3,gt=(ct[0][1]+ct[1][1]+ct[2][1])/3,Pt=new Float32Array(9),Gt=new Float32Array(6);ct.forEach(([Oe,Vt],Ve)=>{Pt.set([(Oe-wt)*Y,(gt-Vt)*X,0],Ve*3),Gt.set([Oe,1-Vt],Ve*2)});let jt=new Pe;jt.setAttribute("position",new Te(Pt,3)),jt.setAttribute("uv",new Te(Gt,2)),jt.computeVertexNormals();let le=new _e(jt,O.mat);le.frustumCulled=!1;let qt=new I(k.x+(wt-.5)*Y,k.y+(.5-gt)*X,k.z),pe=ft(.55,1.5),Ie=j.clone().add(qt.clone().sub(j).multiplyScalar(pe)),Ae=Ie.clone().add($.randomDirection().multiplyScalar(ft(.5,1.4))).add(new I(0,0,ft(-.8,.8))),Se=new hn().setFromEuler(new Rn(ft(-3,3),ft(-3,3),ft(-3,3)));le.position.copy(Nt),le.scale.setScalar(.01),le.quaternion.copy(Se),O.group.add(le),O.frags.push({mesh:le,final:Ie,scatter:Ae,sf:pe,qStart:Se,spin:ft(-2,2)})});let H=new Mn(Y,X);O.plane=new _e(H,O.planeMat),O.plane.position.copy(k),O.plane.visible=!1,O.plane.frustumCulled=!1,O.group.add(O.plane),O.active=!0,O.aligned=!1}let he=new hn,_t=1.37;function Kt(Q){if(!O.active)return;let ht=B.shatterT;if(!O.aligned){if(O.frags.forEach(X=>{let lt=X.mesh;if(ht<.16){let zt=1-(1-ht/.16)**3;lt.position.lerpVectors(Nt,X.scatter,zt),lt.scale.setScalar(.01+(X.sf-.01)*zt)}else{let zt=Math.min(1,Math.max(0,(ht-.3)/(_t-.3-.02))),Qt=zt*zt*(3-2*zt);lt.position.lerpVectors(X.scatter,X.final,Qt),lt.scale.setScalar(X.sf),lt.quaternion.slerpQuaternions(X.qStart,he,Qt)}}),ht>=_t){O.aligned=!0,O.frags.forEach(X=>{X.mesh.position.copy(X.final),X.mesh.quaternion.identity()}),O.plane.visible=!0,O.alignT=ht,O.frags.forEach(X=>{X.mesh.visible=!1}),K.position.copy(O.plane.position),K.material.opacity=.85,K.scale.setScalar(3.4);for(let X=0;X<140;X++){let lt=Math.random();It.emit({life:ft(.5,1.4),x:O.plane.position.x+(lt-.5)*O.Wp*O.textFrac,y:Nt.y+ft(-.25,.25),z:Nt.z+.2,vx:ft(-.6,.6),vy:ft(-.2,1.4),vz:ft(0,.6),size:ft(2.5,6.5),grav:-.6,drag:2.2,r:1,g:ft(.82,.96),b:ft(.5,.85)})}e.chime?.(),e.boom?.(),O.resolve?.(),O.resolve=null}return}let Y=ht-O.alignT;if(K.material.opacity=Math.max(0,.85-Y*2.2),K.scale.setScalar(3.4+Y*3),O.planeMat.uniforms.uShine.value=-.3+Y*.75%1.6,O.fly){let X=O.fly;X.t+=Q;let lt=Math.min(1,X.t/X.dur),zt=lt<.5?4*lt**3:1-(-2*lt+2)**3/2;O.plane.position.lerpVectors(X.p0,X.p1,zt),O.plane.scale.setScalar(X.s0+(X.s1-X.s0)*zt),lt>=1&&!X.arrived&&(X.arrived=!0,X.resolve?.()),X.arrived&&(X.fade+=Q,O.planeMat.uniforms.uAlpha.value=Math.max(0,1-X.fade/.35),X.fade>.4&&(O.active=!1,O.plane.visible=!1))}}let Xt={on:!1,t:0,shells:[],heads:[],rockets:[]},Ut={gold:[[1,.82,.42],[1,.9,.62]],red:[[1,.25,.3],[1,.5,.45]],green:[[.35,1,.55],[.6,1,.7]],white:[[1,.97,.9],[.85,.92,1]],blue:[[.45,.65,1],[.7,.85,1]]},ye=Q=>(Ut[Q]||Ut.gold)[Math.random()<.5?0:1];function Ne(Q,ht){let Y=[];if(Q==="heart")for(let X=0;X<ht;X++){let lt=X/ht*qe;Y.push([16*Math.sin(lt)**3/17,(13*Math.cos(lt)-5*Math.cos(2*lt)-2*Math.cos(3*lt)-Math.cos(4*lt))/17])}else if(Q==="ring")for(let X=0;X<ht;X++){let lt=X/ht*qe;Y.push([Math.cos(lt),Math.sin(lt)])}else if(Q==="star")for(let X=0;X<ht;X++){let lt=X/ht*10,zt=Math.floor(lt),Qt=lt-zt,oe=zt%2?.42:1,Ft=zt%2?1:.42,y=zt/10*qe+Math.PI/2,R=(zt+1)/10*qe+Math.PI/2,z=Math.cos(y)*oe,k=Math.sin(y)*oe,H=Math.cos(R)*Ft,ct=Math.sin(R)*Ft;Y.push([z+(H-z)*Qt,k+(ct-k)*Qt])}else if(Q==="paw"){let X=(lt,zt,Qt,oe,Ft)=>{for(let y=0;y<Ft;y++){let R=y/Ft*qe;Y.push([lt+Math.cos(R)*Qt,zt+Math.sin(R)*oe])}};X(0,-.32,.5,.42,Math.round(ht*.36)),[[-.66,.3],[-.24,.66],[.24,.66],[.66,.3]].forEach(([lt,zt])=>X(lt,zt,.2,.25,Math.round(ht*.16)))}return Y}function Un(Q,ht,Y,X,lt){let zt=Math.abs(B.camZ-Y)/B.camZ,Qt=Ft=>Ht.emit(Ft);e.pop?.();for(let Ft=0;Ft<26;Ft++)$.randomDirection().multiplyScalar(ft(.2,1.2)*zt),Qt({life:ft(.15,.35),x:Q,y:ht,z:Y,vx:$.x,vy:$.y,vz:$.z,size:ft(18,30),drag:4,r:1,g:.95,b:.85,wob:0});let oe=(Ft,y,R,z)=>{let[k,H,ct]=ye(lt).map(gt=>gt*1.35),wt=tt.emit({life:ft(1.5,2.1),x:Q,y:ht,z:Y,vx:Ft,vy:y,vz:R,size:ft(10,14),drag:1.25,grav:-1.5*zt,r:k,g:H,b:ct,wob:0,...z});Xt.heads.push({q:wt,trail:z?.trail??.32,every:z?.every??1,k:0,crackle:z?.crackle||!1})};if(X==="peony"||X==="crackle")for(let y=0;y<170;y++)$.randomDirection().multiplyScalar(ft(2.3,2.6)*zt),oe($.x,$.y,$.z,{crackle:X==="crackle"});else if(X==="willow")for(let Ft=0;Ft<110;Ft++)$.randomDirection().multiplyScalar(ft(1.9,2.2)*zt),oe($.x,$.y+.4*zt,$.z,{life:ft(2.8,3.4),drag:.85,grav:-1.05*zt,size:ft(7,9.5),trail:.95,every:2,r:1,g:.78,b:.36});else{let Ft=Ne(X,X==="paw"?260:170),y=(X==="paw"?2.2:2)*zt,R=X==="paw"?ft(-.12,.12):ft(-.2,.2);Ft.forEach(([z,k])=>{let H=Math.cos(R),ct=Math.sin(R);oe((z*H-k*ct)*y,(z*ct+k*H)*y,ft(-.15,.15)*zt,{drag:1.9,grav:-.3*zt,life:ft(2.3,2.7),trail:.3,size:ft(11,14),...X==="paw"?{r:1.4,g:1.15,b:.6}:{}})})}}function Fr(Q,ht,Y,X,lt,zt){Xt.rockets.push({at:Xt.t+zt,xs:Q,ys:ht,z:Y,kind:X,tone:lt,started:!1})}function Xi(Q,ht,Y){let X=B.camZ-Y,lt=Math.tan(Qo*Math.PI/360)*X;return{x:(Q-.5)*2*lt*a.aspect,y:(.5-ht)*2*lt}}function nl(Q){Xt.t+=Q,Xt.rockets.forEach(Y=>{if(Y.done||Xt.t<Y.at)return;let X=Xi(Y.xs,Y.ys,Y.z),lt=Xi(Y.xs+ft(-.06,.06),1.08,Y.z);Y.started||(Y.started=!0,Y.t0=Xt.t,Y.dur=ft(.85,1.1),e.sweep?.("sine",600,1700,Y.dur*.9,.025));let zt=Math.min(1,(Xt.t-Y.t0)/Y.dur),Qt=1-(1-zt)**2.2,oe=lt.x+(X.x-lt.x)*Qt,Ft=lt.y+(X.y-lt.y)*Qt;for(let y=0;y<2;y++)Ht.emit({life:ft(.25,.5),x:oe+ft(-.03,.03),y:Ft,z:Y.z,vx:ft(-.2,.2),vy:ft(-.8,-.2),vz:0,size:ft(4.5,7.5),drag:2,grav:-.6,r:1,g:.78,b:.45,wob:0});Ht.emit({life:.06,x:oe,y:Ft,z:Y.z,vx:0,vy:0,vz:0,size:15,drag:0,r:1,g:.95,b:.8,wob:0}),zt>=1&&(Y.done=!0,Un(oe,Ft,Y.z,Y.kind,Y.tone))}),Xt.heads=Xt.heads.filter(Y=>{let X=Y.q;if(X.life<=0){if(Y.crackle)for(let lt=0;lt<3;lt++)Ht.emit({life:ft(.35,.7),x:X.x,y:X.y,z:X.z,vx:ft(-.5,.5),vy:ft(-.5,.3),vz:0,size:ft(5,8),drag:2,grav:-.5,r:1,g:1,b:.92,strobe:!0,wob:0});return Y.crackle&&Math.random()<.02&&e.crack?.(0),!1}return Y.k+=1,Y.k%Y.every===0&&Ht.emit({life:Y.trail*ft(.9,1.35),x:X.x,y:X.y,z:X.z,vx:X.vx*.05,vy:X.vy*.05-.05,vz:0,size:X.size*.7,drag:3,grav:-.35,r:X.r,g:X.g*.92,b:X.b*.8,wob:0}),!0});let ht=Ht.update(Q,B.t)+tt.update(Q,B.t);Xt.t>2&&!Xt.heads.length&&Xt.rockets.every(Y=>Y.done)&&ht===0&&Or()}function Or(){Xt.on=!1,i.style.zIndex="",Si()}function Is(Q){if(Xt.on){B.t+=Q,nl(Q);return}let ht=Q;if(B.shattered){let Y=B.shatterT,X=Y<.17?1:Y<1?.04:Math.min(1,.04+((Y-1)/.4)**2);ht=Q*X,B.shatterT+=Q}if(B.t+=Q,g.uTime.value=B.t,B.shattered){let Y=B.shatterT,X=-B.H/B.ppu/2-2.5,lt=0;Lt.forEach(z=>{z.mesh.visible&&(z.vel.y-=13*ht,z.vel.multiplyScalar(Math.exp(-.25*ht)),z.mesh.position.addScaledVector(z.vel,ht),z.mesh.rotateOnWorldAxis(z.axis,z.spin*ht),z.mesh.position.y<X||z.mesh.position.z>B.camZ-.6?z.mesh.visible=!1:lt++)}),kt.forEach(z=>{z.sprite.visible&&(z.vel.y-=11*ht,z.vel.multiplyScalar(Math.exp(-.5*ht)),z.sprite.position.addScaledVector(z.vel,ht),z.sprite.material.rotation+=z.spin*ht,z.sprite.position.y<X-1||z.sprite.position.z>B.camZ-1.5?z.sprite.visible=!1:lt++)}),g.uGlow.value=Math.max(0,2.2-Y*2.4),K.material.opacity=Math.max(0,1-Y/.3),K.scale.setScalar(3+Y*16),at.material.opacity=Math.max(0,.8-Y/.45),at.scale.setScalar(2+(1-Math.exp(-Y*7))*9),ot.material.opacity=Math.max(0,.6-Y*.5),B.shake=Math.max(0,.2-Y)*.7;let zt=Math.min(1,Math.max(0,(Y-.12)/1.25)),Qt=Math.sin(Math.PI*zt*zt*(3-2*zt)),oe=.62*Qt*B.orbitDir,Ft=1-.17*Qt,y=-B.c.x*Ft,R=(B.camZ-B.c.z)*Ft;a.position.set(B.c.x+y*Math.cos(oe)+R*Math.sin(oe)+ft(-B.shake,B.shake),B.c.y*(1-Ft)+ft(-B.shake,B.shake),B.c.z-y*Math.sin(oe)+R*Math.cos(oe)),a.rotation.set(0,oe,0),B.flying=lt,Kt(Q),mt(ht),P.on&&(P.v.y-=11*ht,P.vr.y-=11*ht,E.position.addScaledVector(P.v,ht),N.position.addScaledVector(P.vr,ht),E.rotation.x+=P.w.x*ht,E.rotation.y+=P.w.y*ht,E.rotation.z+=P.w.z*ht,N.rotation.x+=P.wr.x*ht,N.rotation.y+=P.wr.y*ht,N.rotation.z+=P.wr.z*ht,E.position.y<X&&N.position.y<X?P.on=!1:lt++,B.flying=lt),yt.material.opacity=Math.max(0,1-Y/.7)*.9,yt.scale.setScalar(2.5+(1-Math.exp(-Y*4))*7),yt.material.rotation=Y*.25,bt.material.opacity=Math.max(0,1-Y/.45),bt.scale.set(3+Y*22,.55+Y*.6,1)}else{At(),p.visible=!!B.seen;let Y=10.5,X=1.7;B.thzV+=(-Y*B.thz-X*B.thzV+Math.sin(B.t*.7)*.03)*Q,B.thxV+=(-Y*B.thx-X*B.thxV)*Q,B.thz+=B.thzV*Q,B.thx+=B.thxV*Q,B.dragging||(B.spin+=B.spinV*Q,B.spinV+=(.35-B.spinV)*(1-Math.exp(-Q*1.6))),p.position.set(B.ax,B.ay+B.L,0),p.rotation.set(B.thx,0,B.thz),v.position.set(0,-B.L,0),B.kick.multiplyScalar(Math.exp(-Q*9));let lt=B.t-B.tapT,zt=1-.06*Math.exp(-lt*8)*Math.cos(lt*36),Qt=B.shaking?.035:.012*B.charge*B.charge;w.position.set(B.kick.x+ft(-Qt,Qt),B.kick.y+ft(-Qt,Qt),B.kick.z),w.scale.setScalar(zt),w.rotation.set(Math.sin(B.t*.9)*.05,B.spin,0),B.impacts.forEach((Ft,y)=>{Ft.r+=(Ft.target-Ft.r)*(1-Math.exp(-Q*7)),g.uImpacts.value[y].w=Ft.r});let oe=B.impacts.length?.9+B.charge*1.5+(B.shaking?1.2:0):0;B.glow+=(oe-B.glow)*(1-Math.exp(-Q*6)),g.uGlow.value=B.glow+Math.exp(-lt*6)*1.6*(B.impacts.length?1:0),vt(),ot.position.set(Nt.x,Nt.y,Nt.z-1.3),ot.scale.setScalar(4.2+B.charge*1.6),ot.material.opacity=Math.min(1,.1+B.charge*.55+(B.shaking?.25:0))*(.88+.12*Math.sin(B.t*13)),Yt.forEach(Ft=>{Ft.a+=Ft.speed*(1+B.charge*1.8)*Q;let y=Math.cos(Ft.a)*Ft.R,R=Math.sin(Ft.a)*Ft.R;Ft.q.x=Nt.x+y,Ft.q.y=Nt.y+Ft.y+R*Ft.tilt+Math.sin(B.t*1.7+Ft.a)*.08,Ft.q.z=Nt.z+R})}B.alive=It.update(ht,B.t)}function Fn(){B.running||(B.running=!0,B.visible=!0,i.hidden=!1,Bt(),B.last=performance.now(),B.raf=requestAnimationFrame(ce))}function Si(){B.running=!1,B.visible=!1,cancelAnimationFrame(B.raf),B.raf=0,n.clear(),i.hidden=!0}let bi=new ni,qi=new yn,wi=new I,Ti=new hn;return{start:Fn,stop:Si,reset(){se(),Bt()},setTone(Q,ht=""){let Y=`${Q}|${ht}`;if(Y===u)return;u=Y;let X=Ps.length,lt=tl(2048,Ps[(Q%X+X)%X],ht);h.image=lt.colorC,f.image=lt.roughC,h.needsUpdate=!0,f.needsUpdate=!0},set holdRender(Q){B.holdRender=Q},advance(Q){for(let ht=0;ht<Q;ht+=1/60)Is(1/60);n.render(r,a)},get shattered(){return B.shattered},setDragging(Q){B.dragging=Q,Q&&(B.spinV=0)},spinBy(Q){let ht=Q*.011;B.spin+=ht,B.spinV=ht*60},setShaking(Q){B.shaking=Q},prepareCrew:ut,fireworks(){Xt.on=!0,Xt.t=0,Xt.heads=[],Xt.rockets=[],Ht.clear(),tt.clear(),It.clear(),kt.forEach(ht=>{ht.sprite.visible=!1}),Lt.forEach(ht=>{ht.mesh.visible=!1}),ot.material.opacity=0,K.material.opacity=0,at.material.opacity=0,p.visible=!1,a.rotation.set(0,0,0),a.position.set(0,0,B.camZ),[[.22,.14,-4,"peony","red",0],[.78,.12,-5,"willow","gold",.3],[.5,.8,-3,"paw","gold",.8],[.2,.64,-4,"heart","red",1.35],[.8,.66,-4,"ring","green",1.7],[.34,.16,-5,"crackle","white",2.15],[.74,.84,-3,"star","gold",2.6],[.5,.14,-6,"willow","gold",3.05],[.3,.78,-5,"crackle","gold",3.5]].forEach(ht=>Fr(...ht)),Fn()},knock(){if(!B.shattered){B.kick.set(ft(-.04,.04),ft(-.02,.04),.2),B.tapT=B.t-.02,B.thxV+=.18,vt();for(let Q=0;Q<10;Q++)$.randomDirection(),$.z=Math.abs($.z),It.emit({life:ft(.3,.7),x:Nt.x+$.x,y:Nt.y+$.y,z:Nt.z+$.z,vx:$.x*1.5,vy:$.y*1.5,vz:$.z*1.5,size:ft(2,4),grav:-3,drag:2.5})}},tap(Q,ht,Y,X){if(B.shattered)return null;vt(),wi.set(Q/B.W*2-1,-(ht/B.H)*2+1,.5).unproject(a),bi.origin.copy(a.position),bi.direction.copy(wi).sub(a.position).normalize(),qi.center.copy(Nt),qi.radius=1;let lt=new I;bi.intersectSphere(qi,lt)||(bi.closestPointToPoint(Nt,lt),lt.sub(Nt).normalize().multiplyScalar(.75),lt.z=Math.sqrt(Math.max(.05,1-lt.x*lt.x-lt.y*lt.y)),lt.normalize().add(Nt));let zt=lt.clone().sub(Nt).normalize(),Qt=C.worldToLocal(lt.clone()).normalize();if(B.charge=Y,g.uCharge.value=Y,B.impacts.forEach(Ft=>{Ft.target=Math.min(Math.PI,Ft.target+.3+Y*.35)}),B.impacts.length<jo){let Ft=B.impacts.length;B.impacts.push({r:.02,target:.55+Y*1.1}),g.uImpacts.value[Ft].set(Qt.x,Qt.y,Qt.z,.02)}X&&B.impacts.forEach(Ft=>{Ft.target=Math.PI+.4}),B.tapT=B.t;let oe=.9+Y*1.3;B.thzV=Math.max(-.5,Math.min(.5,B.thzV-zt.x*oe*.3+ft(-.08,.08))),B.thxV=Math.max(-.3,Math.min(.3,B.thxV+zt.z*oe*.14)),B.spinV+=(zt.x>0?-1:1)*ft(1.5,3.5),B.kick.copy(zt).multiplyScalar(-.09);for(let Ft=0;Ft<34+Y*30;Ft++)$.randomDirection().multiplyScalar(ft(.5,2.6)).addScaledVector(zt,ft(1.2,4.2)),It.emit({life:ft(.35,.95),x:lt.x,y:lt.y,z:lt.z,vx:$.x,vy:$.y,vz:$.z,size:ft(2,6),grav:-6,drag:2.2,r:1,g:ft(.8,.98),b:ft(.5,.9)});return pt(lt)},shatter(){if(B.shattered)return;vt(),w.updateWorldMatrix(!0,!1),w.getWorldQuaternion(Ti);let Q=B.impacts.length?new I().copy(g.uImpacts.value[B.impacts.length-1]).applyQuaternion(Ti):new I(0,0,1);Lt.forEach(X=>{let lt=X.center.clone().applyQuaternion(Ti);X.mesh.position.copy(Nt).addScaledVector(lt,X.center.length()),X.mesh.quaternion.copy(Ti),X.mesh.scale.setScalar(1),X.mesh.visible=!0;let zt=Math.max(0,lt.dot(Q)),Qt=ft(2.2,6.5)*(1+zt*.8)*(.7+6/(6+X.size));X.vel.copy(lt).multiplyScalar(Qt),X.vel.y+=ft(.5,3.2),lt.z>.35&&Math.random()<.45&&(X.vel.z+=ft(4,11)),X.axis.randomDirection(),X.spin=ft(2,11)*(Math.random()<.5?-1:1)});let ht=Math.max(1,kt.length-1),Y=Array.from({length:ht},(X,lt)=>lt).sort(()=>Math.random()-.5);kt.forEach((X,lt)=>{if(X.sprite.visible=!0,X.guard)X.sprite.position.copy(Nt).add($.set(0,1.5,.2)),X.vel.set(ft(-1.6,1.6),4.2,1.8);else{let zt=[2.2,.95,-1.57,2.6,.55,-2.1,-1],Qt=zt[Y[lt-1]%zt.length]+ft(-.15,.15),oe=ft(8.5,10.5);X.sprite.position.copy(Nt),X.vel.set(Math.cos(Qt)*oe*.8,Math.sin(Qt)*oe*.85+.5,ft(1.5,3.5))}X.sprite.material.rotation=ft(-.55,.55),X.spin=ft(-3.5,3.5)}),r.attach(E),r.attach(N),P.on=!0,P.v.set(ft(-1.2,1.2),ft(4.5,6),ft(.5,2)),P.w.set(ft(-9,9),ft(-4,4),ft(-9,9)),P.vr.set(P.v.x+ft(-1.5,1.5),P.v.y+ft(.5,2),P.v.z+ft(0,1)),P.wr.set(ft(-14,14),ft(-6,6),ft(-14,14)),W(Nt,Q),yt.position.copy(Nt),bt.position.copy(Nt),p.visible=!1,Yt.forEach(X=>{X.q.fixed=!1,X.q.life=ft(.6,1.6),X.q.max=X.q.life,X.q.vx=ft(-2,2),X.q.vy=ft(0,3),X.q.vz=ft(-2,2)});for(let X=0;X<520;X++){$.randomDirection().multiplyScalar(ft(.4,7)*(Math.random()<.25?1.6:1));let lt=Math.random();It.emit({life:ft(1.4,5.2),x:Nt.x+$.x*.05,y:Nt.y+$.y*.05,z:Nt.z+$.z*.05,vx:$.x,vy:$.y+.8,vz:$.z,size:ft(2,8.5),grav:ft(-.9,-.15),drag:ft(1.6,3.2),r:1,g:.72+lt*.26,b:.3+lt*.6})}return K.position.copy(Nt),at.position.copy(Nt),B.c=Nt.clone(),B.orbitDir=Math.random()<.5?-1:1,B.shattered=!0,B.shatterT=0,B.flying=Lt.length,O.ready?(O.ready=!1,Zt(),new Promise(X=>{O.resolve=X})):Promise.resolve()},prepareName:Tt,flyName(Q){if(!O.plane||!O.aligned)return Promise.resolve();let ht=B.ppu,Y=Q.left+Q.width/2,X=Q.top+Q.height/2,lt=new I((Y-B.W/2)/ht,-(X-B.H/2)/ht,O.plane.position.z),zt=Math.max(.2,Q.width*.94/(O.Wp*O.textFrac*ht));return new Promise(Qt=>{O.fly={t:0,dur:.55,p0:O.plane.position.clone(),p1:lt,s0:O.plane.scale.x,s1:zt,fade:0,arrived:!1,resolve:Qt}})},center(){return vt(),pt(Nt)},capTop(){$.set(0,1.19,0),v.localToWorld($);let Q=pt($);return{x:Q.x,y:Q.y,rot:-B.thz*180/Math.PI}}}}var Nn=Math.PI*2,Ge=(i,t)=>i+Math.random()*(t-i),el=4.05,Ur=i=>1.62*(1-i/el)+.05;function Y0(){let i=document.createElement("canvas");i.width=512,i.height=256;let t=i.getContext("2d");t.lineCap="round";let e=(s,r,a,o,l,c)=>{for(let h=0;h<l;h++){let f=h/l,u=s+Math.cos(a)*o*f,d=r+Math.sin(a)*o*f,g=c*(1-f*.45)*Ge(.8,1.15);for(let x of[-1,1]){let m=a+x*Ge(.85,1.25),p=x<0?Ge(30,70):Ge(0,35);t.strokeStyle=`rgb(${Math.round(16+p*.25)}, ${Math.round(66+p)}, ${Math.round(42+p*.4)})`,t.lineWidth=Ge(3.2,4.4),t.beginPath(),t.moveTo(u,d),t.lineTo(u+Math.cos(m)*g,d+Math.sin(m)*g),t.stroke()}}};t.strokeStyle="#3d2a1a",t.lineWidth=5,t.beginPath(),t.moveTo(6,128),t.quadraticCurveTo(260,122,500,112),t.stroke(),[[.22,-.55],[.3,.6],[.46,-.5],[.55,.55],[.7,-.45],[.78,.45]].forEach(([s,r])=>{let a=6+s*494,o=128-s*14;e(a,o,r,150*(1-s*.6),26,34)}),e(6,128,-.03,494,92,44);for(let s=0;s<70;s++){let r=Math.random(),a=30+r*440,o=128-r*14-Ge(18,50),l=t.createRadialGradient(a,o,0,a,o,Ge(6,13));l.addColorStop(0,"rgba(250,252,255,0.95)"),l.addColorStop(1,"rgba(250,252,255,0)"),t.fillStyle=l,t.fillRect(a-14,o-14,28,28)}let n=new Fe(i);return n.colorSpace=Ee,n.anisotropy=4,n}function Yu(i,t=!1){let e=document.createElement("canvas");e.width=640,e.height=220;let n=e.getContext("2d"),s=70,r=14,a=34,o=612,l=172;n.beginPath(),n.moveTo(r+s,a),n.arcTo(r+o,a,r+o,a+l,s),n.arcTo(r+o,a+l,r,a+l,s),n.arcTo(r,a+l,r,a,s),n.arcTo(r,a,r+o,a,s),n.closePath();let c=n.createLinearGradient(0,a,0,a+l);t?(c.addColorStop(0,"#f7dc8f"),c.addColorStop(1,"#d9a73f")):(c.addColorStop(0,"#fffaf0"),c.addColorStop(1,"#f1e4c6")),n.fillStyle=c,n.shadowColor="rgba(0,0,0,0.55)",n.shadowBlur=14,n.shadowOffsetY=6,n.fill(),n.shadowColor="transparent",n.lineWidth=8,n.strokeStyle="#c99a3c",n.stroke(),n.lineWidth=2.5,n.strokeStyle="rgba(178,31,53,0.55)",n.beginPath(),n.roundRect?.(r+14,a+14,o-28,l-28,s-14),n.stroke(),n.fillStyle="#e9c46a",n.beginPath(),n.arc(320,a+2,15,0,Math.PI*2),n.fill(),n.fillStyle="#5a3a1c",n.beginPath(),n.arc(320,a+2,7,0,Math.PI*2),n.fill();let h=t?96:122;n.font=`600 ${h}px Fraunces, Georgia, serif`;let f=n.measureText(i).width;if(f>540&&(h*=540/f,n.font=`600 ${h}px Fraunces, Georgia, serif`),n.textAlign="center",n.textBaseline="middle",n.fillStyle="#123d2c",n.fillText(i,320,a+l/2+(t?-22:6)),t){n.font="italic 600 54px Fraunces, Georgia, serif";let d="a pioch\xE9",x=320-(n.measureText(d).width+40)/2;n.strokeStyle="#b21f35",n.lineWidth=7,n.lineCap="round",n.lineJoin="round",n.beginPath(),n.moveTo(x+2,a+128),n.lineTo(x+13,a+140),n.lineTo(x+32,a+114),n.stroke(),n.fillStyle="#7a1424",n.textAlign="left",n.fillText(d,x+44,a+128)}let u=new Fe(e);return u.colorSpace=Ee,u.anisotropy=4,u}function Z0(i,t){let e=i.length/3,n=new Pe,s=new Float32Array(e);for(let o=0;o<e;o++)s[o]=Math.random()*Nn;n.setAttribute("position",new Te(i,3)),n.setAttribute("aColor",new Te(t,3)),n.setAttribute("aPhase",new Te(s,1));let r=new ln({uniforms:{uTime:{value:0},uScale:{value:1},uWave:{value:0}},vertexShader:`
      attribute vec3 aColor; attribute float aPhase;
      uniform float uTime; uniform float uScale; uniform float uWave;
      varying vec3 vColor; varying float vA;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        float tw = 0.6 + 0.4 * sin(uTime * 2.2 + aPhase * 3.0) * sin(uTime * 0.9 + aPhase);
        float wave = exp(-pow(position.y - uWave, 2.0) * 6.0);
        vA = tw + wave * 1.6;
        gl_PointSize = (26.0 + wave * 18.0) * uScale * (9.0 / max(1.0, -mv.z));
        vColor = aColor;
      }`,fragmentShader:`
      varying vec3 vColor; varying float vA;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c) * 2.0;
        float core = smoothstep(0.32, 0.0, d);
        float halo = pow(max(0.0, 1.0 - d), 3.0) * 0.55;
        gl_FragColor = vec4((vColor * halo + vec3(1.0, 0.98, 0.92) * core) * vA, 0.0);
      }`,blending:cn,transparent:!0,depthWrite:!1,premultipliedAlpha:!0}),a=new Ui(n,r);return a.frustumCulled=!1,a}function J0({canvas:i,people:t,drawn:e=[],onPick:n,sound:s={}}){let r;try{r=new Cs({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch{return null}let a=Math.min(window.devicePixelRatio||1,2);r.setPixelRatio(a),r.setClearColor(0,0),r.toneMapping=Gi,r.toneMappingExposure=1.1;let o=new pi;o.environment=Dc(r);let l=new Ze(30,1,.1,100),c={pos:new I(0,2.3,9.6),look:new I(0,2.18,0)};l.position.copy(c.pos),l.lookAt(c.look);let h=new Be;o.add(h);let f=Y0(),u=new Mn(1,.5);u.translate(.5,0,0);let d=new en({map:f,alphaTest:.42,side:Ke,roughness:.82,metalness:0,envMapIntensity:.75}),g=1100,x=new ir(u,d,g),m=new Je,p=new te,v=0;for(;v<g;){let J=Ge(.32,el-.05);if(Math.random()>Math.sqrt(Ur(J)/Ur(.32)))continue;let rt=Ur(J),Ct=Math.random()<.3,Jt=(Ct?Ge(.45,.7):Ge(.82,1.08))*rt+.12;m.position.set(0,J+(Ct?0:Ge(-.04,.04)),0),m.rotation.set(0,0,0),m.scale.set(Jt,Math.min(.62,Jt*.6)/.5*.5*2,1),m.rotateY(Ge(0,Nn)),m.rotateZ(-Ge(.18,.5)-(1-J/el)*.15),m.rotateX(-Math.PI/2+Ge(-.75,.75)),m.updateMatrix(),x.setMatrixAt(v,m.matrix);let U=Ct?Ge(.42,.6):Ge(.78,1.12);p.setRGB(U*Ge(.9,1.05),U,U*Ge(.88,1.06)),x.setColorAt(v,p),v++}h.add(x);let w=new _e(new si(.1,.16,.75,14),new en({color:4861724,roughness:.9}));w.position.y=.3,h.add(w);let S=Nr([[0,"rgba(255,255,255,1)"],[.55,"rgba(240,246,255,0.85)"],[1,"rgba(240,246,255,0)"]]),C=new _e(new lr(2.4,48),new en({color:16054527,map:S,transparent:!0,depthWrite:!1,roughness:1}));C.rotation.x=-Math.PI/2,C.position.y=-.02,o.add(C);let T=new Be;[[.95,.42,.3,11673397,.2],[-.95,.35,.55,2062924,-.5],[.15,.3,1.1,15320170,.9],[-.35,.26,-.95,7085196,.3],[1.2,.24,-.6,1786541,-.2]].forEach(([J,rt,Ct,Jt,U])=>{let ue=new Be,ee=new _e(new Vn(rt*1.2,rt,rt),new en({color:Jt,roughness:.45,metalness:.1})),ce=new en({color:Jt===15320170?11673397:15320170,metalness:.8,roughness:.3}),xt=new _e(new Vn(rt*1.22,rt*1.02,rt*.16),ce),fe=new _e(new Vn(rt*.16,rt*1.02,rt*1.02),ce),Wt=new _e(new mi(rt*.16,rt*.05,8,16),ce);Wt.position.y=rt*.56,Wt.rotation.y=.7,ue.add(ee,xt,fe,Wt),ue.position.set(J,rt/2,Ct),ue.rotation.y=U,T.add(ue)}),h.add(T);let _=150,b=new Float32Array(_*3),D=new Float32Array(_*3),E=[[1,.86,.55],[1,.86,.55],[1,.72,.3],[1,.3,.32],[.45,1,.6]];for(let J=0;J<_;J++){let rt=J/_,Ct=.42+rt*3.45,Jt=rt*Nn*6.5,U=Ur(Ct)*.9+.04+Math.sin(rt*160)*.02;b.set([Math.cos(Jt)*U,Ct-Math.abs(Math.sin(rt*80))*.05,Math.sin(Jt)*U],J*3),D.set(E[J%E.length],J*3)}let N=Z0(b,D);h.add(N);let F=new vs;for(let J=0;J<10;J++){let rt=J/10*Nn+Math.PI/2,Ct=J%2?.12:.29;J===0?F.moveTo(Math.cos(rt)*Ct,Math.sin(rt)*Ct):F.lineTo(Math.cos(rt)*Ct,Math.sin(rt)*Ct)}F.closePath();let G=new _r(F,{depth:.05,bevelEnabled:!0,bevelThickness:.035,bevelSize:.03,bevelSegments:3});G.center();let L=new _e(G,new en({color:16766074,metalness:1,roughness:.22,emissive:16758858,emissiveIntensity:.55,envMapIntensity:1.4}));L.position.y=el+.18,o.add(L);let V=Nr([[0,"rgba(255,240,190,0.95)"],[.3,"rgba(255,210,120,0.4)"],[1,"rgba(255,190,90,0)"]]),Z=new un(new on({map:V,blending:cn,transparent:!0,depthWrite:!1,toneMapped:!1}));Z.scale.setScalar(1.25),Z.position.copy(L.position),o.add(Z);let q=document.createElement("canvas");q.width=q.height=256;let ot=q.getContext("2d");ot.translate(128,128);for(let J=0;J<16;J++){ot.rotate(Nn/16);let rt=ot.createLinearGradient(0,0,0,-128);rt.addColorStop(0,"rgba(255,230,170,0.7)"),rt.addColorStop(1,"rgba(255,230,170,0)"),ot.fillStyle=rt,ot.beginPath(),ot.moveTo(-(J%2?2:4),0),ot.lineTo(0,-(J%2?80:126)),ot.lineTo(J%2?2:4,0),ot.fill()}let K=new Fe(q);K.colorSpace=Ee;let st=new un(new on({map:K,blending:cn,transparent:!0,depthWrite:!1,toneMapped:!1,opacity:.8}));st.scale.setScalar(1.5),st.position.copy(L.position),o.add(st);let at=new en({color:new te(1,.74,.3),metalness:1,roughness:.28,envMapIntensity:1.3}),It=new Oi([new dt(.001,1.185),new dt(.15,1.185),new dt(.195,1.15),new dt(.2,.99),new dt(.235,.965),new dt(.24,.93),new dt(.001,.93)],24),Ht=new mi(.085,.016,8,20),tt=new Hn(1,48,32),Rt=new Gn({color:new te(1.1,.9,.55)}),Lt=.3,kt=t.map((J,rt)=>{let Ct=t.length,Jt=.66+rt/Math.max(1,Ct-1)*2.62,U=rt*2.39996+.4,ue=Ur(Jt)+.2,ee=new Be;ee.position.set(Math.sin(U)*ue,Jt+.42,Math.cos(U)*ue),ee.rotation.y=U;let ce=new Be;ee.add(ce);let xt=tl(1024,Ps[rt%Ps.length],"",1),fe=new Fe(xt.colorC);fe.colorSpace=Ee,fe.wrapS=Cn,fe.anisotropy=4;let Wt=new Fe(xt.roughC);Wt.wrapS=Cn;let $t=new Bi({map:fe,roughnessMap:Wt,roughness:1,metalness:1,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.3}),A=new Be;A.position.y=-.42;let M=new _e(tt,$t);M.userData.index=rt;let W=new _e(It,at),mt=new _e(Ht,at);mt.position.y=1.25,A.add(M,W,mt);let nt=new un(new on({map:Yu(J,e.includes(J)),transparent:!0,depthWrite:!1,depthTest:!1}));nt.userData.drawn=e.includes(J),nt.scale.set(.98/Lt,.98*220/640/Lt,1),nt.position.y=-1-(.03+.49*220/640)/Lt,nt.center.set(.5,.5),nt.renderOrder=10,A.add(nt);let St=new _e(new si(.02,.02,.07/Lt,4),Rt);St.position.y=-1-.03/Lt,A.add(St),A.scale.setScalar(Lt),ce.add(A);let yt=new _e(new si(.006,.006,.07,4),Rt);return yt.position.y=-.035,ce.add(yt),h.add(ee),{name:J,hook:ee,swing:ce,ball:A,mesh:M,tag:nt,rr:ue,theta:U,phase:Ge(0,Nn),kick:0}}),Dt=kt.map(J=>J.mesh),ut={running:!1,raf:0,last:0,t:0,angle:.25,vel:.16,dragging:!1,hold:!1,picking:null,wave:-1};function B(){let J=i.clientWidth||1,rt=i.clientHeight||1;r.setSize(J,rt,!1),l.aspect=J/rt;let Ct=4.1/(2*Math.tan(30*Math.PI/360)*l.aspect);c.pos.z=Math.max(9.6,Ct),ut.picking||l.position.copy(c.pos),l.updateProjectionMatrix(),N.material.uniforms.uScale.value=a*(rt/440)}window.addEventListener("resize",()=>{ut.running&&B()});let Yt=new I;function Nt(J){ut.t+=J,!ut.dragging&&!ut.picking&&(ut.vel+=(.1-ut.vel)*(1-Math.exp(-J*.9)),ut.angle+=ut.vel*J),h.rotation.y=ut.angle,N.material.uniforms.uTime.value=ut.t,ut.wave=ut.t*.55%3.2*1.6-.6,N.material.uniforms.uWave.value=ut.wave,L.rotation.y=Math.sin(ut.t*.7)*.55,st.material.rotation=ut.t*.15,Z.material.opacity=.75+.25*Math.sin(ut.t*3.1),kt.forEach(rt=>{if(rt.free)return;rt.kick*=Math.exp(-J*2.2),rt.swing.rotation.z=Math.sin(ut.t*1.7+rt.phase)*.05+Math.sin(ut.t*6)*rt.kick,rt.swing.rotation.x=Math.sin(ut.t*1.3+rt.phase*2)*.04;let Ct=(ut.angle+rt.theta)%Nn;Ct>Math.PI&&(Ct-=Nn),Ct<-Math.PI&&(Ct+=Nn),rt.ball.rotation.y=-Ct*.85+Math.sin(ut.t*.6+rt.phase)*.12;let Jt=Math.cos(Ct);rt.tag.material.opacity=Math.min(1,Math.max(0,(Jt+.05)/.45))}),ut.picking&&ut.picking.tick(J)}function ae(){ut.raf=ut.running?requestAnimationFrame(ae):0;let J=performance.now(),rt=Math.max(.001,Math.min(.04,(J-ut.last)/1e3));ut.last=J,Nt(rt),ut.hold||r.render(o,l)}let $=new Mr,vt=new dt,pt=null;i.addEventListener("pointerdown",J=>{if(!ut.picking){pt={x:J.clientX,y:J.clientY,last:J.clientX,t:performance.now(),moved:0},ut.dragging=!0,ut.vel=0;try{i.setPointerCapture(J.pointerId)}catch{}}}),i.addEventListener("pointermove",J=>{if(!pt)return;let rt=J.clientX-pt.last;pt.last=J.clientX,pt.moved+=Math.abs(rt);let Ct=rt*.0095;ut.angle+=Ct;let Jt=performance.now();ut.vel=Ct/Math.max(.008,(Jt-pt.t)/1e3),pt.t=Jt});let Bt=J=>{if(!pt)return;let rt=pt.moved<8&&Math.hypot(J.clientX-pt.x,J.clientY-pt.y)<10;if(pt=null,ut.dragging=!1,ut.vel=Math.max(-4,Math.min(4,ut.vel)),!rt)return;let Ct=i.getBoundingClientRect();vt.set((J.clientX-Ct.left)/Ct.width*2-1,-((J.clientY-Ct.top)/Ct.height)*2+1),$.setFromCamera(vt,l);let U=$.intersectObjects(Dt,!1).find(ue=>(ue.object.getWorldPosition(Yt),Yt.z>-.35));if(!U){s.note?.(Math.floor(Math.random()*8));return}At(kt[U.object.userData.index])};i.addEventListener("pointerup",Bt),i.addEventListener("pointercancel",()=>{pt=null,ut.dragging=!1});function At(J){s.unlock?.(),s.chime?.(),J.kick=.25;let rt=-J.theta;rt+=Math.round((ut.angle-rt)/Nn)*Nn;let Ct=ut.angle,Jt=l.position.clone(),U=c.look.clone(),ue=0,ee=new I,ce=new I;ut.picking={tick(xt){ue+=xt;let fe=Math.min(1,ue/.75),Wt=fe*fe*(3-2*fe);ut.angle=Ct+(rt-Ct)*Wt,h.rotation.y=ut.angle,h.updateMatrixWorld(),J.mesh.getWorldPosition(ee);let $t=Math.min(1,Math.max(0,(ue-.25)/.75)),A=$t*$t*(3-2*$t);if(l.position.lerpVectors(Jt,Yt.copy(ee).add(new I(0,.12,1.85)),A*.92),ce.lerpVectors(U,ee,A),l.lookAt(ce),ue>1&&!J.free&&(J.free=!0,s.whoosh?.(),J.swing.updateMatrixWorld(),o.attach(J.ball),J.fly={p0:J.ball.position.clone(),s0:J.ball.scale.x,t0:ue}),J.free){let M=Math.min(1,(ue-J.fly.t0)/.5),W=M*M;l.getWorldDirection(Yt);let mt=l.position.clone().addScaledVector(Yt,.6);J.ball.position.lerpVectors(J.fly.p0,mt,W),J.ball.rotation.y+=xt*9,M>=1&&!J.done&&(J.done=!0,n?.(J.name))}}}}function se(){ut.picking=null,kt.forEach(J=>{J.free&&(J.swing.attach(J.ball),J.ball.position.set(0,-.42,0),J.ball.rotation.set(0,0,0),J.ball.scale.setScalar(Lt)),J.free=!1,J.done=!1,J.fly=null}),l.position.copy(c.pos),l.lookAt(c.look)}try{r.compile(o,l)}catch{}return{start(){ut.running||(ut.running=!0,B(),ut.last=performance.now(),ut.raf=requestAnimationFrame(ae))},stop(){ut.running=!1,cancelAnimationFrame(ut.raf),ut.raf=0},reset:se,pickByName(J){let rt=kt.find(Ct=>Ct.name===J);rt&&At(rt)},setDrawn(J){kt.forEach(rt=>{let Ct=J.includes(rt.name);rt.tag.userData.drawn!==Ct&&(rt.tag.userData.drawn=Ct,rt.tag.material.map.dispose(),rt.tag.material.map=Yu(rt.name,Ct),rt.tag.material.needsUpdate=!0)})},set holdRender(J){ut.hold=J},advance(J){for(let rt=0;rt<J;rt+=1/60)Nt(1/60);r.render(o,l)}}}export{q0 as createBall,J0 as createTree};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
