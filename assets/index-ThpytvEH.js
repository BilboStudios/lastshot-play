import{a as Jh,O as es}from"./icons-CIqdHjLj.js";const qo="186",Qh=0,Ml=1,jh=2,tu=0,Cs=1,eu=2,ws=3,Ei=0,ke=1,In=2,Zn=0,Ps=1,cs=2,Sl=3,yl=4,nu=5,ts=100,iu=101,su=102,ru=103,au=104,ou=200,lu=201,cu=202,hu=203,Yc=204,Kc=205,uu=206,fu=207,du=208,pu=209,mu=210,gu=211,_u=212,xu=213,vu=214,Ja=0,Qa=1,ja=2,Ls=3,to=4,eo=5,no=6,io=7,Vr=0,Mu=1,Su=2,An=0,Zc=1,$c=2,Jc=3,Qc=4,jc=5,th=6,eh=7,nh=300,Ti=301,hs=302,Qr=303,jr=304,kr=306,Pr=1e3,Kn=1001,so=1002,Ue=1003,yu=1004,ks=1005,we=1006,ta=1007,hi=1008,hn=1009,ih=1010,sh=1011,Is=1012,Yo=1013,On=1014,Nn=1015,Bn=1016,Ko=1017,Zo=1018,Ds=1020,rh=35902,ah=35899,oh=1021,lh=1022,un=1023,Jn=1026,bi=1027,ch=1028,$o=1029,Ai=1030,Jo=1031,Qo=1033,Tr=33776,Ar=33777,wr=33778,Rr=33779,ro=35840,ao=35841,oo=35842,lo=35843,co=36196,ho=37492,uo=37496,fo=37488,po=37489,Lr=37490,mo=37491,go=37808,_o=37809,xo=37810,vo=37811,Mo=37812,So=37813,yo=37814,bo=37815,Eo=37816,To=37817,Ao=37818,wo=37819,Ro=37820,Co=37821,Po=36492,Lo=36494,Io=36495,Do=36283,Uo=36284,Ir=36285,No=36286,bu=3200,Us=0,Eu=1,ci="",en="srgb",Dr="srgb-linear",Ur="linear",oe="srgb",ea=7680,Tu=519,Au=512,wu=513,Ru=514,jo=515,Cu=516,Pu=517,tl=518,Lu=519,hh=35044,bl="300 es",Fn=2e3,Ns=2001;function Iu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Du(){const i=Nr("canvas");return i.style.display="block",i}const El={};function Fr(...i){const t="THREE."+i.shift();console.log(t,...i)}function uh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ft(...i){i=uh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function jt(...i){i=uh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function rs(...i){const t=i.join(" ");t in El||(El[t]=!0,Ft(...i))}function Uu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Nu={[Ja]:Qa,[ja]:no,[to]:io,[Ls]:eo,[Qa]:Ja,[no]:ja,[io]:to,[eo]:Ls};class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,Fo=180/Math.PI;function ui(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function Fu(i,t){return(i%t+t)%t}function ia(i,t,e){return(1-e)*i+e*t}function Dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class Lt{static{Lt.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],f=n[s+2],u=n[s+3],h=r[a+0],d=r[a+1],g=r[a+2],M=r[a+3];if(u!==M||c!==h||l!==d||f!==g){let m=c*h+l*d+f*g+u*M;m<0&&(h=-h,d=-d,g=-g,M=-M,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),A=Math.sin(S);p=Math.sin(p*S)/A,o=Math.sin(o*S)/A,c=c*p+h*o,l=l*p+d*o,f=f*p+g*o,u=u*p+M*o}else{c=c*p+h*o,l=l*p+d*o,f=f*p+g*o,u=u*p+M*o;const S=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=S,l*=S,f*=S,u*=S}}t[e]=c,t[e+1]=l,t[e+2]=f,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],f=n[s+3],u=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+f*u+c*d-l*h,t[e+1]=c*g+f*h+l*u-o*d,t[e+2]=l*g+f*d+o*h-c*u,t[e+3]=f*g-o*u-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(s/2),u=o(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*f*u+l*d*g,this._y=l*d*u-h*f*g,this._z=l*f*g+h*d*u,this._w=l*f*u-h*d*g;break;case"YXZ":this._x=h*f*u+l*d*g,this._y=l*d*u-h*f*g,this._z=l*f*g-h*d*u,this._w=l*f*u+h*d*g;break;case"ZXY":this._x=h*f*u-l*d*g,this._y=l*d*u+h*f*g,this._z=l*f*g+h*d*u,this._w=l*f*u-h*d*g;break;case"ZYX":this._x=h*f*u-l*d*g,this._y=l*d*u+h*f*g,this._z=l*f*g-h*d*u,this._w=l*f*u+h*d*g;break;case"YZX":this._x=h*f*u+l*d*g,this._y=l*d*u+h*f*g,this._z=l*f*g-h*d*u,this._w=l*f*u-h*d*g;break;case"XZY":this._x=h*f*u-l*d*g,this._y=l*d*u-h*f*g,this._z=l*f*g+h*d*u,this._w=l*f*u+h*d*g;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],f=e[6],u=e[10],h=n+o+u;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(f-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+f)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,f=e._w;return this._x=n*f+a*o+s*l-r*c,this._y=s*f+a*c+r*o-n*l,this._z=r*f+a*l+n*c-s*o,this._w=a*f-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,e=Math.sin(e*l)/f,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{static{R.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),f=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*f,this.y=n+c*f+o*l-r*u,this.z=s+c*u+r*f-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sa.copy(this).projectOnVector(t),this.sub(sa)}reflect(t){return this.sub(sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new R,Tl=new vn;class Bt{static{Bt.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=e,f[4]=r,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],u=n[7],h=n[2],d=n[5],g=n[8],M=s[0],m=s[3],p=s[6],S=s[1],A=s[4],v=s[7],b=s[2],E=s[5],C=s[8];return r[0]=a*M+o*S+c*b,r[3]=a*m+o*A+c*E,r[6]=a*p+o*v+c*C,r[1]=l*M+f*S+u*b,r[4]=l*m+f*A+u*E,r[7]=l*p+f*v+u*C,r[2]=h*M+d*S+g*b,r[5]=h*m+d*A+g*E,r[8]=h*p+d*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],f=t[8];return e*a*f-e*o*l-n*r*f+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],f=t[8],u=f*a-o*l,h=o*c-f*r,d=l*r-a*c,g=e*u+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=u*M,t[1]=(s*l-f*n)*M,t[2]=(o*n-s*a)*M,t[3]=h*M,t[4]=(f*e-s*c)*M,t[5]=(s*r-o*e)*M,t[6]=d*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ra.makeScale(t,e)),this}rotate(t){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ra.makeRotation(-t)),this}translate(t,e){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new Bt,Al=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wl=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ou(){const i={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===oe&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?Ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Dr]:{primaries:t,whitePoint:n,transfer:Ur,toXYZ:Al,fromXYZ:wl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:Al,fromXYZ:wl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),i}const $t=Ou();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Li;class Bu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Li===void 0&&(Li=Nr("canvas")),Li.width=t.width,Li.height=t.height;const s=Li.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Li}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Nr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zu=0;class el{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=ui(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(aa(s[a].image)):r.push(aa(s[a]))}else r=aa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}let Hu=0;const oa=new R;class Ze extends wi{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=Kn,s=Kn,r=we,a=hi,o=un,c=hn,l=Ze.DEFAULT_ANISOTROPY,f=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=ui(),this.name="",this.source=new el(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(oa).x}get height(){return this.source.getSize(oa).y}get depth(){return this.source.getSize(oa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pr:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case so:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pr:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case so:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=nh;Ze.DEFAULT_ANISOTROPY=1;class be{static{be.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],f=c[4],u=c[8],h=c[1],d=c[5],g=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(f-h)<.01&&Math.abs(u-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+M)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(l+1)/2,v=(d+1)/2,b=(p+1)/2,E=(f+h)/4,C=(u+M)/4,x=(g+m)/4;return A>v&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=E/n,r=C/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=x/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=x/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-M)*(u-M)+(h-f)*(h-f));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-M)/S,this.z=(h-f)/S,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gu extends wi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:we,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Ze(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:we,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new el(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends Gu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fh extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vu extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class le{static{le.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,l,f,u,h,d,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,f,u,h,d,g,M,m)}set(t,e,n,s,r,a,o,c,l,f,u,h,d,g,M,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=f,p[10]=u,p[14]=h,p[3]=d,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),a=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const h=a*f,d=a*u,g=o*f,M=o*u;e[0]=c*f,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=h-M*l,e[9]=-o*c,e[2]=M-h*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*f,d=c*u,g=l*f,M=l*u;e[0]=h+M*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*f,e[9]=-o,e[2]=d*o-g,e[6]=M+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*f,d=c*u,g=l*f,M=l*u;e[0]=h-M*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*f,e[9]=M-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*f,d=a*u,g=o*f,M=o*u;e[0]=c*f,e[4]=g*l-d,e[8]=h*l+M,e[1]=c*u,e[5]=M*l+h,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,d=a*l,g=o*c,M=o*l;e[0]=c*f,e[4]=M-h*u,e[8]=g*u+d,e[1]=u,e[5]=a*f,e[9]=-o*f,e[2]=-l*f,e[6]=d*u+g,e[10]=h-M*u}else if(t.order==="XZY"){const h=a*c,d=a*l,g=o*c,M=o*l;e[0]=c*f,e[4]=-u,e[8]=l*f,e[1]=h*u+M,e[5]=a*f,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*f,e[10]=M*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ku,t,Wu)}lookAt(t,e,n){const s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ni.crossVectors(n,rn),ni.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ni.crossVectors(n,rn)),ni.normalize(),Ws.crossVectors(rn,ni),s[0]=ni.x,s[4]=Ws.x,s[8]=rn.x,s[1]=ni.y,s[5]=Ws.y,s[9]=rn.y,s[2]=ni.z,s[6]=Ws.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],u=n[5],h=n[9],d=n[13],g=n[2],M=n[6],m=n[10],p=n[14],S=n[3],A=n[7],v=n[11],b=n[15],E=s[0],C=s[4],x=s[8],T=s[12],P=s[1],D=s[5],F=s[9],B=s[13],L=s[2],G=s[6],Y=s[10],K=s[14],st=s[3],Z=s[7],V=s[11],q=s[15];return r[0]=a*E+o*P+c*L+l*st,r[4]=a*C+o*D+c*G+l*Z,r[8]=a*x+o*F+c*Y+l*V,r[12]=a*T+o*B+c*K+l*q,r[1]=f*E+u*P+h*L+d*st,r[5]=f*C+u*D+h*G+d*Z,r[9]=f*x+u*F+h*Y+d*V,r[13]=f*T+u*B+h*K+d*q,r[2]=g*E+M*P+m*L+p*st,r[6]=g*C+M*D+m*G+p*Z,r[10]=g*x+M*F+m*Y+p*V,r[14]=g*T+M*B+m*K+p*q,r[3]=S*E+A*P+v*L+b*st,r[7]=S*C+A*D+v*G+b*Z,r[11]=S*x+A*F+v*Y+b*V,r[15]=S*T+A*B+v*K+b*q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],f=t[2],u=t[6],h=t[10],d=t[14],g=t[3],M=t[7],m=t[11],p=t[15],S=c*d-l*h,A=o*d-l*u,v=o*h-c*u,b=a*d-l*f,E=a*h-c*f,C=a*u-o*f;return e*(M*S-m*A+p*v)-n*(g*S-m*b+p*E)+s*(g*A-M*b+p*C)-r*(g*v-M*E+m*C)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],f=t[10];return e*(a*f-o*l)-n*(r*f-o*c)+s*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],f=t[8],u=t[9],h=t[10],d=t[11],g=t[12],M=t[13],m=t[14],p=t[15],S=e*o-n*a,A=e*c-s*a,v=e*l-r*a,b=n*c-s*o,E=n*l-r*o,C=s*l-r*c,x=f*M-u*g,T=f*m-h*g,P=f*p-d*g,D=u*m-h*M,F=u*p-d*M,B=h*p-d*m,L=S*B-A*F+v*D+b*P-E*T+C*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/L;return t[0]=(o*B-c*F+l*D)*G,t[1]=(s*F-n*B-r*D)*G,t[2]=(M*C-m*E+p*b)*G,t[3]=(h*E-u*C-d*b)*G,t[4]=(c*P-a*B-l*T)*G,t[5]=(e*B-s*P+r*T)*G,t[6]=(m*v-g*C-p*A)*G,t[7]=(f*C-h*v+d*A)*G,t[8]=(a*F-o*P+l*x)*G,t[9]=(n*P-e*F-r*x)*G,t[10]=(g*E-M*v+p*S)*G,t[11]=(u*v-f*E-d*S)*G,t[12]=(o*T-a*D-c*x)*G,t[13]=(e*D-n*T+s*x)*G,t[14]=(M*A-g*b-m*S)*G,t[15]=(f*b-u*A+h*S)*G,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,f=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,f*o+n,f*c-s*a,0,l*c-s*o,f*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,f=a+a,u=o+o,h=r*l,d=r*f,g=r*u,M=a*f,m=a*u,p=o*u,S=c*l,A=c*f,v=c*u,b=n.x,E=n.y,C=n.z;return s[0]=(1-(M+p))*b,s[1]=(d+v)*b,s[2]=(g-A)*b,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(h+p))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+A)*C,s[9]=(m-S)*C,s[10]=(1-(h+M))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ii.set(s[0],s[1],s[2]).length();const o=Ii.set(s[4],s[5],s[6]).length(),c=Ii.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Sn.copy(this);const l=1/a,f=1/o,u=1/c;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=f,Sn.elements[5]*=f,Sn.elements[6]*=f,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,e.setFromRotationMatrix(Sn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Fn,c=!1){const l=this.elements,f=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let g,M;if(c)g=r/(a-r),M=a*r/(a-r);else if(o===Fn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ns)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Fn,c=!1){const l=this.elements,f=2/(e-t),u=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,M;if(c)g=1/(a-r),M=a/(a-r);else if(o===Fn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ns)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ii=new R,Sn=new le,ku=new R(0,0,0),Wu=new R(1,1,1),ni=new R,Ws=new R,rn=new R,Rl=new le,Cl=new vn;class zn{constructor(t=0,e=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],f=s[9],u=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class dh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xu=0;const Pl=new R,Di=new vn,Hn=new le,Xs=new R,ms=new R,qu=new R,Yu=new vn,Ll=new R(1,0,0),Il=new R(0,1,0),Dl=new R(0,0,1),Ul={type:"added"},Ku={type:"removed"},Ui={type:"childadded",child:null},la={type:"childremoved",child:null};class Ne extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new R,e=new zn,n=new vn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Bt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(Ll,t)}rotateY(t){return this.rotateOnAxis(Il,t)}rotateZ(t){return this.rotateOnAxis(Dl,t)}translateOnAxis(t,e){return Pl.copy(t).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ll,t)}translateY(t){return this.translateOnAxis(Il,t)}translateZ(t){return this.translateOnAxis(Dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xs.copy(t):Xs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(ms,Xs,this.up):Hn.lookAt(Xs,ms,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(Hn),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ul),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ku),la.child=t,this.dispatchEvent(la),la.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ul),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,qu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Yu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),f=a(t.images),u=a(t.shapes),h=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ne.DEFAULT_UP=new R(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ns extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zu={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),p=this._getHandJoint(l,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ns;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},qs={h:0,s:0,l:0};function ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Fu(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ha(a,r,t+1/3),this.g=ha(a,r,t),this.b=ha(a,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=en){function n(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){const n=ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return $t.workingToColorSpace(Ke.copy(this),t),Math.round(Zt(Ke.r*255,0,255))*65536+Math.round(Zt(Ke.g*255,0,255))*256+Math.round(Zt(Ke.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(Ke.copy(this),e);const n=Ke.r,s=Ke.g,r=Ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=f<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=f,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=en){$t.workingToColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,s=Ke.b;return t!==en?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(qs);const n=ia(ii.h,qs.h,e),s=ia(ii.s,qs.s,e),r=ia(ii.l,qs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new wt;wt.NAMES=ph;class Or{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=n}clone(){return new Or(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Br extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const yn=new R,Gn=new R,ua=new R,Vn=new R,Ni=new R,Fi=new R,Nl=new R,fa=new R,da=new R,pa=new R,ma=new be,ga=new be,_a=new be;class mn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),Gn.subVectors(n,e),ua.subVectors(t,e);const a=yn.dot(yn),o=yn.dot(Gn),c=yn.dot(ua),l=Gn.dot(Gn),f=Gn.dot(ua),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const h=1/u,d=(l*c-o*f)*h,g=(a*f-o*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vn.x),c.addScaledVector(a,Vn.y),c.addScaledVector(o,Vn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return ma.setScalar(0),ga.setScalar(0),_a.setScalar(0),ma.fromBufferAttribute(t,e),ga.fromBufferAttribute(t,n),_a.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ma,r.x),a.addScaledVector(ga,r.y),a.addScaledVector(_a,r.z),a}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),Gn.subVectors(t,e),yn.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),yn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ni.subVectors(s,n),Fi.subVectors(r,n),fa.subVectors(t,n);const c=Ni.dot(fa),l=Fi.dot(fa);if(c<=0&&l<=0)return e.copy(n);da.subVectors(t,s);const f=Ni.dot(da),u=Fi.dot(da);if(f>=0&&u<=f)return e.copy(s);const h=c*u-f*l;if(h<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(n).addScaledVector(Ni,a);pa.subVectors(t,r);const d=Ni.dot(pa),g=Fi.dot(pa);if(g>=0&&d<=g)return e.copy(r);const M=d*l-c*g;if(M<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Fi,o);const m=f*g-d*u;if(m<=0&&u-f>=0&&d-g>=0)return Nl.subVectors(r,s),o=(u-f)/(u-f+(d-g)),e.copy(s).addScaledVector(Nl,o);const p=1/(m+M+h);return a=M*p,o=h*p,e.copy(n).addScaledVector(Ni,a).addScaledVector(Fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Bs{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(t.matrixWorld),this.union(Ys)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),Ks.subVectors(this.max,gs),Oi.subVectors(t.a,gs),Bi.subVectors(t.b,gs),zi.subVectors(t.c,gs),si.subVectors(Bi,Oi),ri.subVectors(zi,Bi),mi.subVectors(Oi,zi);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-mi.z,mi.y,si.z,0,-si.x,ri.z,0,-ri.x,mi.z,0,-mi.x,-si.y,si.x,0,-ri.y,ri.x,0,-mi.y,mi.x,0];return!xa(e,Oi,Bi,zi,Ks)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,Oi,Bi,zi,Ks))?!1:(Zs.crossVectors(si,ri),e=[Zs.x,Zs.y,Zs.z],xa(e,Oi,Bi,zi,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const kn=[new R,new R,new R,new R,new R,new R,new R,new R],bn=new R,Ys=new Bs,Oi=new R,Bi=new R,zi=new R,si=new R,ri=new R,mi=new R,gs=new R,Ks=new R,Zs=new R,gi=new R;function xa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gi.fromArray(i,r);const o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),f=n.dot(gi);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const Le=new R,$s=new Lt;let $u=0;class _n extends wi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$u++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hh,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$s.fromBufferAttribute(this,e),$s.applyMatrix3(t),this.setXY(e,$s.x,$s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class mh extends _n{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class gh extends _n{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends _n{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Ju=new Bs,_s=new R,va=new R;class Wr{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ju.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(va)),this.expandByPoint(_s.copy(t.center).sub(va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Qu=0;const dn=new le,Ma=new Ne,Hi=new R,an=new Bs,xs=new Bs,ze=new R;class Re extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Iu(t)?gh:mh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return Ma.lookAt(t),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];xs.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(an.min,xs.min),an.expandByPoint(ze),ze.addVectors(an.max,xs.max),an.expandByPoint(ze)):(an.expandByPoint(xs.min),an.expandByPoint(xs.max))}an.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)ze.fromBufferAttribute(o,l),c&&(Hi.fromBufferAttribute(t,l),ze.add(Hi)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new _n(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new R,c[x]=new R;const l=new R,f=new R,u=new R,h=new Lt,d=new Lt,g=new Lt,M=new R,m=new R;function p(x,T,P){l.fromBufferAttribute(n,x),f.fromBufferAttribute(n,T),u.fromBufferAttribute(n,P),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),f.sub(l),u.sub(l),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(M.copy(f).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(D),m.copy(u).multiplyScalar(d.x).addScaledVector(f,-g.x).multiplyScalar(D),o[x].add(M),o[T].add(M),o[P].add(M),c[x].add(m),c[T].add(m),c[P].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,T=S.length;x<T;++x){const P=S[x],D=P.start,F=P.count;for(let B=D,L=D+F;B<L;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const A=new R,v=new R,b=new R,E=new R;function C(x){b.fromBufferAttribute(s,x),E.copy(b);const T=o[x];A.copy(T),A.sub(b.multiplyScalar(b.dot(T))).normalize(),v.crossVectors(E,T);const D=v.dot(c[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,D)}for(let x=0,T=S.length;x<T;++x){const P=S[x],D=P.start,F=P.count;for(let B=D,L=D+F;B<L;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,f=new R,u=new R;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),M=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),f.subVectors(a,r),u.subVectors(s,r),f.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(f),c.add(f),l.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),f.subVectors(a,r),u.subVectors(s,r),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,c){const l=o.array,f=o.itemSize,u=o.normalized,h=new l.constructor(c.length*f);let d=0,g=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?d=c[M]*o.data.stride+o.offset:d=c[M]*f;for(let p=0;p<f;p++)h[g++]=l[d++]}return new _n(h,f,u)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let f=0,u=l.length;f<u;f++){const h=l[f],d=t(h,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let u=0,h=l.length;u<h;u++){const d=l[u];f.push(d.toJSON(t.data))}f.length>0&&(s[c]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const f=s[l];this.setAttribute(l,f.clone(e))}const r=t.morphAttributes;for(const l in r){const f=[],u=r[l];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(e));this.morphAttributes[l]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,f=a.length;l<f;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ju{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hh,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const Je=new R;class zr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Fr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new _n(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new zr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Fr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Sa=new R,tf=new R,ef=new Bt;class li{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Sa.subVectors(n,e).cross(tf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Sa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ef.getNormalMatrix(t),s=this.coplanarPoint(Sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let nf=0;class Qn extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=Ps,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=Kc,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new li().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class _h extends Qn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Gi;const vs=new R,Vi=new R,ki=new R,Wi=new Lt,Ms=new Lt,xh=new le,Js=new R,Ss=new R,Qs=new R,Fl=new Lt,ya=new Lt,Ol=new Lt;class os extends Ne{constructor(t=new _h){if(super(),this.isSprite=!0,this.type="Sprite",Gi===void 0){Gi=new Re;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ju(e,5);Gi.setIndex([0,1,2,0,2,3]),Gi.setAttribute("position",new zr(n,3,0,!1)),Gi.setAttribute("uv",new zr(n,2,3,!1))}this.geometry=Gi,this.material=t,this.center=new Lt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vi.setFromMatrixScale(this.matrixWorld),xh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vi.multiplyScalar(-ki.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;js(Js.set(-.5,-.5,0),ki,a,Vi,s,r),js(Ss.set(.5,-.5,0),ki,a,Vi,s,r),js(Qs.set(.5,.5,0),ki,a,Vi,s,r),Fl.set(0,0),ya.set(1,0),Ol.set(1,1);let o=t.ray.intersectTriangle(Js,Ss,Qs,!1,vs);if(o===null&&(js(Ss.set(-.5,.5,0),ki,a,Vi,s,r),ya.set(0,1),o=t.ray.intersectTriangle(Js,Qs,Ss,!1,vs),o===null))return;const c=t.ray.origin.distanceTo(vs);c<t.near||c>t.far||e.push({distance:c,point:vs.clone(),uv:mn.getInterpolation(vs,Js,Ss,Qs,Fl,ya,Ol,new Lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function js(i,t,e,n,s,r){Wi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ms.x=r*Wi.x-s*Wi.y,Ms.y=s*Wi.x+r*Wi.y):Ms.copy(Wi),i.copy(t),i.x+=Ms.x,i.y+=Ms.y,i.applyMatrix4(xh)}const Wn=new R,ba=new R,tr=new R,er=new R;class vh{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ba.copy(t).add(e).multiplyScalar(.5),tr.copy(e).sub(t).normalize(),er.copy(this.origin).sub(ba);const r=t.distanceTo(e)*.5,a=-this.direction.dot(tr),o=er.dot(this.direction),c=-er.dot(tr),l=er.lengthSq(),f=Math.abs(1-a*a);let u,h,d,g;if(f>0)if(u=a*c-o,h=a*o-c,g=r*f,u>=0)if(h>=-g)if(h<=g){const M=1/f;u*=M,h*=M,d=u*(u+a*h+2*o)+h*(a*u+h+2*c)+l}else h=r,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*c)+l;else h=-r,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*c)+l;else h<=-g?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+h*(h+2*c)+l):h<=g?(u=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+h*(h+2*c)+l);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ba).addScaledVector(tr,h),d}intersectSphere(t,e){if(t.radius<0)return null;Wn.subVectors(t.center,this.origin);const n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),f>=0?(r=(t.min.y-h.y)*f,a=(t.max.y-h.y)*f):(r=(t.max.y-h.y)*f,a=(t.min.y-h.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-h.z)*u,c=(t.max.z-h.z)*u):(o=(t.max.z-h.z)*u,c=(t.min.z-h.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,f=o.z,u=t.x-a.x,h=t.y-a.y,d=t.z-a.z,g=e.x-a.x,M=e.y-a.y,m=e.z-a.z,p=n.x-a.x,S=n.y-a.y,A=n.z-a.z,v=Math.abs(c),b=Math.abs(l),E=Math.abs(f);let C,x,T,P,D,F,B,L,G,Y,K,st;if(v>=b&&v>=E?(T=c,F=u,G=g,st=p,c>=0?(C=l,x=f,P=h,D=d,B=M,L=m,Y=S,K=A):(C=f,x=l,P=d,D=h,B=m,L=M,Y=A,K=S)):b>=E?(T=l,F=h,G=M,st=S,l>=0?(C=f,x=c,P=d,D=u,B=m,L=g,Y=A,K=p):(C=c,x=f,P=u,D=d,B=g,L=m,Y=p,K=A)):(T=f,F=d,G=m,st=A,f>=0?(C=c,x=l,P=u,D=h,B=g,L=M,Y=p,K=S):(C=l,x=c,P=h,D=u,B=M,L=g,Y=S,K=p)),T===0)return null;const Z=C/T,V=x/T,q=1/T,gt=P-Z*F,rt=D-V*F,Ot=B-Z*G,zt=L-V*G,Xt=Y-Z*st,X=K-V*st,tt=Xt*zt-X*Ot,xt=gt*X-rt*Xt,Nt=Ot*rt-zt*gt;if(s){if(tt<0||xt<0||Nt<0)return null}else if((tt<0||xt<0||Nt<0)&&(tt>0||xt>0||Nt>0))return null;const Mt=tt+xt+Nt;if(Mt===0)return null;const Wt=q*(tt*F+xt*G+Nt*st);return(Mt>0?Wt<0:Wt>0)?null:this.at(Wt/Mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nl extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Vr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Bl=new le,_i=new vh,nr=new Wr,zl=new R,ir=new R,sr=new R,rr=new R,Ea=new R,ar=new R,Hl=new R,or=new R;class We extends Ne{constructor(t=new Re,e=new nl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const f=o[c],u=r[c];f!==0&&(Ea.fromBufferAttribute(u,t),a?ar.addScaledVector(Ea,f):ar.addScaledVector(Ea.sub(e),f))}e.add(ar)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(nr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(nr,zl)===null||_i.origin.distanceToSquared(zl)>(t.far-t.near)**2))&&(Bl.copy(r).invert(),_i.copy(t.ray).applyMatrix4(Bl),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,u=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){const m=h[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,b=A;v<b;v+=3){const E=o.getX(v),C=o.getX(v+1),x=o.getX(v+2);s=lr(this,p,t,n,l,f,u,E,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){const S=o.getX(m),A=o.getX(m+1),v=o.getX(m+2);s=lr(this,a,t,n,l,f,u,S,A,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){const m=h[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,b=A;v<b;v+=3){const E=v,C=v+1,x=v+2;s=lr(this,p,t,n,l,f,u,E,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){const S=m,A=m+1,v=m+2;s=lr(this,a,t,n,l,f,u,S,A,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function sf(i,t,e,n,s,r,a,o){let c;if(t.side===ke?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Ei,o),c===null)return null;or.copy(o),or.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(or);return l<e.near||l>e.far?null:{distance:l,point:or.clone(),object:i}}function lr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ir),i.getVertexPosition(c,sr),i.getVertexPosition(l,rr);const f=sf(i,t,e,n,ir,sr,rr,Hl);if(f){const u=new R;mn.getBarycoord(Hl,ir,sr,rr,u),s&&(f.uv=mn.getInterpolatedAttribute(s,o,c,l,u,new Lt)),r&&(f.uv1=mn.getInterpolatedAttribute(r,o,c,l,u,new Lt)),a&&(f.normal=mn.getInterpolatedAttribute(a,o,c,l,u,new R),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new R,materialIndex:0};mn.getNormal(ir,sr,rr,h.normal),f.face=h,f.barycoord=u}return f}class il extends Ze{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ue,f=Ue,u,h){super(null,a,o,c,l,f,s,r,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xi=new Wr,rf=new Lt(.5,.5),cr=new R;class sl{constructor(t=new li,e=new li,n=new li,s=new li,r=new li,a=new li){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],f=r[4],u=r[5],h=r[6],d=r[7],g=r[8],M=r[9],m=r[10],p=r[11],S=r[12],A=r[13],v=r[14],b=r[15];if(s[0].setComponents(l-a,d-f,p-g,b-S).normalize(),s[1].setComponents(l+a,d+f,p+g,b+S).normalize(),s[2].setComponents(l+o,d+u,p+M,b+A).normalize(),s[3].setComponents(l-o,d-u,p-M,b-A).normalize(),n)s[4].setComponents(c,h,m,v).normalize(),s[5].setComponents(l-c,d-h,p-m,b-v).normalize();else if(s[4].setComponents(l-c,d-h,p-m,b-v).normalize(),e===Fn)s[5].setComponents(l+c,d+h,p+m,b+v).normalize();else if(e===Ns)s[5].setComponents(c,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){xi.center.set(0,0,0);const e=rf.distanceTo(t.center);return xi.radius=.7071067811865476+e,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(cr.x=s.normal.x>0?t.max.x:t.min.x,cr.y=s.normal.y>0?t.max.y:t.min.y,cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mh extends Qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Gl=new le,Oo=new vh,hr=new Wr,ur=new R;class af extends Ne{constructor(t=new Re,e=new Mh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;Gl.copy(s).invert(),Oo.copy(t.ray).applyMatrix4(Gl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=h,M=d;g<M;g++){const m=l.getX(g);ur.fromBufferAttribute(u,m),Vl(ur,m,c,s,t,e,this)}}else{const h=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=h,M=d;g<M;g++)ur.fromBufferAttribute(u,g),Vl(ur,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Vl(i,t,e,n,s,r,a){const o=Oo.distanceSqToPoint(i);if(o<e){const c=new R;Oo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Sh extends Ze{constructor(t=[],e=Ti,n,s,r,a,o,c,l,f){super(t,e,n,s,r,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class of extends Ze{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fs extends Ze{constructor(t,e,n=On,s,r,a,o=Ue,c=Ue,l,f=Jn,u=1){if(f!==Jn&&f!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:u};super(h,s,r,a,o,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new el(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class lf extends Fs{constructor(t,e=On,n=Ti,s,r,a=Ue,o=Ue,c,l=Jn){const f={width:t,height:t,depth:1},u=[f,f,f,f,f,f];super(t,t,e,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class yh extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class fs extends Re{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],f=[],u=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(u,2));function g(M,m,p,S,A,v,b,E,C,x,T){const P=v/C,D=b/x,F=v/2,B=b/2,L=E/2,G=C+1,Y=x+1;let K=0,st=0;const Z=new R;for(let V=0;V<Y;V++){const q=V*D-B;for(let gt=0;gt<G;gt++){const rt=gt*P-F;Z[M]=rt*S,Z[m]=q*A,Z[p]=L,l.push(Z.x,Z.y,Z.z),Z[M]=0,Z[m]=0,Z[p]=E>0?1:-1,f.push(Z.x,Z.y,Z.z),u.push(gt/C),u.push(1-V/x),K+=1}}for(let V=0;V<x;V++)for(let q=0;q<C;q++){const gt=h+q+G*V,rt=h+q+G*(V+1),Ot=h+(q+1)+G*(V+1),zt=h+(q+1)+G*V;c.push(gt,rt,zt),c.push(rt,Ot,zt),st+=6}o.addGroup(d,st,T),d+=st,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Xr extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new R,f=new Lt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,h=3;u<=e;u++,h+=3){const d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),f.x=(a[h]/t+1)/2,f.y=(a[h+1]/t+1)/2,c.push(f.x,f.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class qr extends Re{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const f=[],u=[],h=[],d=[];let g=0;const M=[],m=n/2;let p=0;S(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(f),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(d,2));function S(){const v=new R,b=new R;let E=0;const C=(e-t)/n;for(let x=0;x<=r;x++){const T=[],P=x/r,D=P*(e-t)+t;for(let F=0;F<=s;F++){const B=F/s,L=B*c+o,G=Math.sin(L),Y=Math.cos(L);b.x=D*G,b.y=-P*n+m,b.z=D*Y,u.push(b.x,b.y,b.z),v.set(G,C,Y).normalize(),h.push(v.x,v.y,v.z),d.push(B,1-P),T.push(g++)}M.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const P=M[T][x],D=M[T+1][x],F=M[T+1][x+1],B=M[T][x+1];(t>0||T!==0)&&(f.push(P,D,B),E+=3),(e>0||T!==r-1)&&(f.push(D,F,B),E+=3)}l.addGroup(p,E,0),p+=E}function A(v){const b=g,E=new Lt,C=new R;let x=0;const T=v===!0?t:e,P=v===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*P,0),h.push(0,P,0),d.push(.5,.5),g++;const D=g;for(let F=0;F<=s;F++){const L=F/s*c+o,G=Math.cos(L),Y=Math.sin(L);C.x=T*Y,C.y=m*P,C.z=T*G,u.push(C.x,C.y,C.z),h.push(0,P,0),E.x=G*.5+.5,E.y=Y*.5*P+.5,d.push(E.x,E.y),g++}for(let F=0;F<s;F++){const B=b+F,L=D+F;v===!0?f.push(L,L+1,B):f.push(L+1,L,B),x+=3}l.addGroup(p,x,v===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hr extends qr{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Hr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yr extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),f(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const A=new R,v=new R,b=new R;for(let E=0;E<e.length;E+=3)d(e[E+0],A),d(e[E+1],v),d(e[E+2],b),c(A,v,b,S)}function c(S,A,v,b){const E=b+1,C=[];for(let x=0;x<=E;x++){C[x]=[];const T=S.clone().lerp(v,x/E),P=A.clone().lerp(v,x/E),D=E-x;for(let F=0;F<=D;F++)F===0&&x===E?C[x][F]=T:C[x][F]=T.clone().lerp(P,F/D)}for(let x=0;x<E;x++)for(let T=0;T<2*(E-x)-1;T++){const P=Math.floor(T/2);T%2===0?(h(C[x][P+1]),h(C[x+1][P]),h(C[x][P])):(h(C[x][P+1]),h(C[x+1][P+1]),h(C[x+1][P]))}}function l(S){const A=new R;for(let v=0;v<r.length;v+=3)A.x=r[v+0],A.y=r[v+1],A.z=r[v+2],A.normalize().multiplyScalar(S),r[v+0]=A.x,r[v+1]=A.y,r[v+2]=A.z}function f(){const S=new R;for(let A=0;A<r.length;A+=3){S.x=r[A+0],S.y=r[A+1],S.z=r[A+2];const v=m(S)/2/Math.PI+.5,b=p(S)/Math.PI+.5;a.push(v,1-b)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){const A=a[S+0],v=a[S+2],b=a[S+4],E=Math.max(A,v,b),C=Math.min(A,v,b);E>.9&&C<.1&&(A<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),b<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function d(S,A){const v=S*3;A.x=t[v+0],A.y=t[v+1],A.z=t[v+2]}function g(){const S=new R,A=new R,v=new R,b=new R,E=new Lt,C=new Lt,x=new Lt;for(let T=0,P=0;T<r.length;T+=9,P+=6){S.set(r[T+0],r[T+1],r[T+2]),A.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),E.set(a[P+0],a[P+1]),C.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),b.copy(S).add(A).add(v).divideScalar(3);const D=m(b);M(E,P+0,S,D),M(C,P+2,A,D),M(x,P+4,v,D)}}function M(S,A,v,b){b<0&&S.x===1&&(a[A]=S.x-1),v.x===0&&v.z===0&&(a[A]=b/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.vertices,t.indices,t.radius,t.detail)}}class rl extends Yr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new rl(t.radius,t.detail)}}class al extends Re{constructor(t=[new Lt(0,-.5),new Lt(.5,0),new Lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Zt(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],f=1/e,u=new R,h=new Lt,d=new R,g=new R,M=new R;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,M.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(M.x,M.y,M.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=M.x,d.y+=M.y,d.z+=M.z,d.normalize(),c.push(d.x,d.y,d.z),M.copy(g)}for(let S=0;S<=e;S++){const A=n+S*f*s,v=Math.sin(A),b=Math.cos(A);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*v,u.y=t[E].y,u.z=t[E].x*b,a.push(u.x,u.y,u.z),h.x=S/e,h.y=E/(t.length-1),o.push(h.x,h.y);const C=c[3*E+0]*v,x=c[3*E+1],T=c[3*E+0]*b;l.push(C,x,T)}}for(let S=0;S<e;S++)for(let A=0;A<t.length-1;A++){const v=A+S*t.length,b=v,E=v+t.length,C=v+t.length+1,x=v+1;r.push(b,E,x),r.push(C,x,E)}this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("uv",new ne(o,2)),this.setAttribute("normal",new ne(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new al(t.points,t.segments,t.phiStart,t.phiLength)}}class fi extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,f=c+1,u=t/o,h=e/c,d=[],g=[],M=[],m=[];for(let p=0;p<f;p++){const S=p*h-a;for(let A=0;A<l;A++){const v=A*u-r;g.push(v,-S,0),M.push(0,0,1),m.push(A/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){const A=S+l*p,v=S+l*(p+1),b=S+1+l*(p+1),E=S+1+l*p;d.push(A,v,E),d.push(v,b,E)}this.setIndex(d),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(M,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.width,t.height,t.widthSegments,t.heightSegments)}}class ol extends Re{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],f=[];let u=t;const h=(e-t)/s,d=new R,g=new Lt;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,f.push(g.x,g.y)}u+=h}for(let M=0;M<s;M++){const m=M*(n+1);for(let p=0;p<n;p++){const S=p+m,A=S,v=S+n+1,b=S+n+2,E=S+1;o.push(A,v,E),o.push(v,b,E)}}this.setIndex(o),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class zs extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const f=[],u=new R,h=new R,d=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){const S=[],A=p/n,v=a+A*o,b=t*Math.cos(v),E=Math.sqrt(t*t-b*b);let C=0;p===0&&a===0?C=.5/e:p===n&&c===Math.PI&&(C=-.5/e);for(let x=0;x<=e;x++){const T=x/e,P=s+T*r;u.x=-E*Math.cos(P),u.y=b,u.z=E*Math.sin(P),g.push(u.x,u.y,u.z),h.copy(u).normalize(),M.push(h.x,h.y,h.z),m.push(T+C,1-A),S.push(l++)}f.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const A=f[p][S+1],v=f[p][S],b=f[p+1][S],E=f[p+1][S+1];(p!==0||a>0)&&d.push(A,v,E),(p!==n-1||c<Math.PI)&&d.push(v,b,E)}this.setIndex(d),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(M,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ll extends Yr{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ll(t.radius,t.detail)}}class Os extends Re{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],f=[],u=[],h=new R,d=new R,g=new R;for(let M=0;M<=n;M++){const m=a+M/n*o;for(let p=0;p<=s;p++){const S=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(S),d.y=(t+e*Math.cos(m))*Math.sin(S),d.z=e*Math.sin(m),l.push(d.x,d.y,d.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),g.subVectors(d,h).normalize(),f.push(g.x,g.y,g.z),u.push(p/s),u.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){const p=(s+1)*M+m-1,S=(s+1)*(M-1)+m-1,A=(s+1)*(M-1)+m,v=(s+1)*M+m;c.push(p,S,v),c.push(S,A,v)}this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Os(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function us(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(kl(s))s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(kl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function je(i){const t={};for(let e=0;e<i.length;e++){const n=us(i[e]);for(const s in n)t[s]=n[s]}return t}function kl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function cf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const hf={clone:us,merge:je};var uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uf,this.fragmentShader=ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=cf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new wt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class df extends xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pf extends Qn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new wt(16777215),this.specular=new wt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Vr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mf extends Qn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new wt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class gf extends Qn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Vr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _f extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xf extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Eh extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class vf extends Eh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ta=new le,Wl=new R,Xl=new R;class Mf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sl,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Wl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wl),Xl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ta.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ta,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Ns||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const fr=new R,dr=new vn,Cn=new R;class Th extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(fr,dr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,dr,Cn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(fr,dr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,dr,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ai=new R,ql=new Lt,Yl=new Lt;class pn extends Th{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,ql,Yl),e.subVectors(Yl,ql)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(na*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Hs extends Th{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Sf extends Mf{constructor(){super(new Hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Aa extends Eh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Sf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Xi=-90,qi=1;class yf extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(Xi,qi,t,e);s.layers=this.layers,this.add(s);const r=new pn(Xi,qi,t,e);r.layers=this.layers,this.add(r);const a=new pn(Xi,qi,t,e);a.layers=this.layers,this.add(a);const o=new pn(Xi,qi,t,e);o.layers=this.layers,this.add(o);const c=new pn(Xi,qi,t,e);c.layers=this.layers,this.add(c);const l=new pn(Xi,qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,f]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(u,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bf extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ah{static{Ah.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}}function Kl(i,t,e,n){const s=Ef(n);switch(e){case oh:return i*t;case ch:return i*t/s.components*s.byteLength;case $o:return i*t/s.components*s.byteLength;case Ai:return i*t*2/s.components*s.byteLength;case Jo:return i*t*2/s.components*s.byteLength;case lh:return i*t*3/s.components*s.byteLength;case un:return i*t*4/s.components*s.byteLength;case Qo:return i*t*4/s.components*s.byteLength;case Tr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wr:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ao:case lo:return Math.max(i,16)*Math.max(t,8)/4;case ro:case oo:return Math.max(i,8)*Math.max(t,8)/2;case co:case ho:case fo:case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case uo:case Lr:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Po:case Lo:case Io:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Do:case Uo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ir:case No:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ef(i){switch(i){case hn:case ih:return{byteLength:1,components:1};case Is:case sh:case Bn:return{byteLength:2,components:1};case Ko:case Zo:return{byteLength:2,components:4};case On:case Yo:case Nn:return{byteLength:4,components:1};case rh:case ah:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qo}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qo);function wh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tf(i){const t=new WeakMap;function e(o,c){const l=o.array,f=o.usage,u=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,f),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const f=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,f);else{u.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<u.length;d++){const g=u[h],M=u[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++h,u[h]=M)}u.length=h+1;for(let d=0,g=u.length;d<g;d++){const M=u[d];i.bufferSubData(l,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wf=`#ifdef USE_ALPHAHASH
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
#endif`,Rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,If=`#ifdef USE_AOMAP
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
#endif`,Df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uf=`#ifdef USE_BATCHING
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
#endif`,Nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zf=`#ifdef USE_IRIDESCENCE
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
#endif`,Hf=`#ifdef USE_BUMPMAP
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Zf=`#define PI 3.141592653589793
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
} // validated`,$f=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jf=`vec3 transformedNormal = objectNormal;
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
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",id=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sd=`#ifdef USE_ENVMAP
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
#endif`,rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dd=`#ifdef USE_GRADIENTMAP
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
}`,pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,md=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_d=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
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
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,Ed=`uniform sampler2D dfgLUT;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,Td=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,wd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,Cd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Id=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fd=`#if defined( USE_POINTS_UV )
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
#endif`,Od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vd=`#ifdef USE_MORPHTARGETS
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
#endif`,kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zd=`#ifdef USE_NORMALMAP
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
#endif`,$d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ep=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,up=`float getShadowMask() {
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
}`,fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mp=`#ifdef USE_SKINNING
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
#endif`,gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mp=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#ifdef USE_TRANSMISSION
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wp=`uniform sampler2D t2D;
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`#include <common>
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
}`,Dp=`#if DEPTH_PACKING == 3200
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
}`,Up=`#define DISTANCE
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
}`,Np=`#define DISTANCE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`uniform float scale;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Hp=`#include <common>
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Vp=`#define LAMBERT
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
}`,kp=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,Wp=`#define MATCAP
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
}`,Xp=`#define MATCAP
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
}`,qp=`#define NORMAL
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
}`,Yp=`#define NORMAL
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
}`,Kp=`#define PHONG
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
}`,Zp=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,$p=`#define STANDARD
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
}`,Jp=`#define STANDARD
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
#include <cube_uv_reflection_fragment>
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
}`,Qp=`#define TOON
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
}`,jp=`#define TOON
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
}`,tm=`uniform float size;
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
}`,em=`uniform vec3 diffuse;
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
}`,nm=`#include <common>
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
}`,im=`uniform vec3 color;
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
}`,sm=`uniform float rotation;
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
}`,rm=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Af,alphahash_pars_fragment:wf,alphamap_fragment:Rf,alphamap_pars_fragment:Cf,alphatest_fragment:Pf,alphatest_pars_fragment:Lf,aomap_fragment:If,aomap_pars_fragment:Df,batching_pars_vertex:Uf,batching_vertex:Nf,begin_vertex:Ff,beginnormal_vertex:Of,bsdfs:Bf,iridescence_fragment:zf,bumpmap_pars_fragment:Hf,clipping_planes_fragment:Gf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:kf,clipping_planes_vertex:Wf,color_fragment:Xf,color_pars_fragment:qf,color_pars_vertex:Yf,color_vertex:Kf,common:Zf,cube_uv_reflection_fragment:$f,defaultnormal_vertex:Jf,displacementmap_pars_vertex:Qf,displacementmap_vertex:jf,emissivemap_fragment:td,emissivemap_pars_fragment:ed,colorspace_fragment:nd,colorspace_pars_fragment:id,envmap_fragment:sd,envmap_common_pars_fragment:rd,envmap_pars_fragment:ad,envmap_pars_vertex:od,envmap_physical_pars_fragment:xd,envmap_vertex:ld,fog_vertex:cd,fog_pars_vertex:hd,fog_fragment:ud,fog_pars_fragment:fd,gradientmap_pars_fragment:dd,lightmap_pars_fragment:pd,lights_lambert_fragment:md,lights_lambert_pars_fragment:gd,lights_pars_begin:_d,lights_toon_fragment:vd,lights_toon_pars_fragment:Md,lights_phong_fragment:Sd,lights_phong_pars_fragment:yd,lights_physical_fragment:bd,lights_physical_pars_fragment:Ed,lights_fragment_begin:Td,lights_fragment_maps:Ad,lights_fragment_end:wd,lightprobes_pars_fragment:Rd,logdepthbuf_fragment:Cd,logdepthbuf_pars_fragment:Pd,logdepthbuf_pars_vertex:Ld,logdepthbuf_vertex:Id,map_fragment:Dd,map_pars_fragment:Ud,map_particle_fragment:Nd,map_particle_pars_fragment:Fd,metalnessmap_fragment:Od,metalnessmap_pars_fragment:Bd,morphinstance_vertex:zd,morphcolor_vertex:Hd,morphnormal_vertex:Gd,morphtarget_pars_vertex:Vd,morphtarget_vertex:kd,normal_fragment_begin:Wd,normal_fragment_maps:Xd,normal_pars_fragment:qd,normal_pars_vertex:Yd,normal_vertex:Kd,normalmap_pars_fragment:Zd,clearcoat_normal_fragment_begin:$d,clearcoat_normal_fragment_maps:Jd,clearcoat_pars_fragment:Qd,iridescence_pars_fragment:jd,opaque_fragment:tp,packing:ep,premultiplied_alpha_fragment:np,project_vertex:ip,dithering_fragment:sp,dithering_pars_fragment:rp,roughnessmap_fragment:ap,roughnessmap_pars_fragment:op,shadowmap_pars_fragment:lp,shadowmap_pars_vertex:cp,shadowmap_vertex:hp,shadowmask_pars_fragment:up,skinbase_vertex:fp,skinning_pars_vertex:dp,skinning_vertex:pp,skinnormal_vertex:mp,specularmap_fragment:gp,specularmap_pars_fragment:_p,tonemapping_fragment:xp,tonemapping_pars_fragment:vp,transmission_fragment:Mp,transmission_pars_fragment:Sp,uv_pars_fragment:yp,uv_pars_vertex:bp,uv_vertex:Ep,worldpos_vertex:Tp,background_vert:Ap,background_frag:wp,backgroundCube_vert:Rp,backgroundCube_frag:Cp,cube_vert:Pp,cube_frag:Lp,depth_vert:Ip,depth_frag:Dp,distance_vert:Up,distance_frag:Np,equirect_vert:Fp,equirect_frag:Op,linedashed_vert:Bp,linedashed_frag:zp,meshbasic_vert:Hp,meshbasic_frag:Gp,meshlambert_vert:Vp,meshlambert_frag:kp,meshmatcap_vert:Wp,meshmatcap_frag:Xp,meshnormal_vert:qp,meshnormal_frag:Yp,meshphong_vert:Kp,meshphong_frag:Zp,meshphysical_vert:$p,meshphysical_frag:Jp,meshtoon_vert:Qp,meshtoon_frag:jp,points_vert:tm,points_frag:em,shadow_vert:nm,shadow_frag:im,sprite_vert:sm,sprite_frag:rm},dt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Ln={basic:{uniforms:je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:je([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:je([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:je([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:je([dt.points,dt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:je([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:je([dt.common,dt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:je([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:je([dt.sprite,dt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:je([dt.common,dt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:je([dt.lights,dt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Ln.physical={uniforms:je([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const pr={r:0,b:0,g:0},am=new le,Rh=new Bt;Rh.set(-1,0,0,0,1,0,0,0,1);function om(i,t,e,n,s,r){const a=new wt(0);let o=s===!0?0:1,c,l,f=null,u=0,h=null;function d(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){const v=S.backgroundBlurriness>0;A=t.get(A,v)}return A}function g(S){let A=!1;const v=d(S);v===null?m(a,o):v&&v.isColor&&(m(v,1),A=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,A){const v=d(A);v&&(v.isCubeTexture||v.mapping===kr)?(l===void 0&&(l=new We(new fs(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:us(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(am.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Rh),l.material.toneMapped=$t.getTransfer(v.colorSpace)!==oe,(f!==v||u!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,u=v.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new We(new fi(2,2),new xn({name:"BackgroundMaterial",uniforms:us(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=$t.getTransfer(v.colorSpace)!==oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,u=v.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,A){S.getRGB(pr,bh(i)),e.buffers.color.setClear(pr.r,pr.g,pr.b,A,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:M,dispose:p}}function lm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(D,F,B,L,G){let Y=!1;const K=u(D,L,B,F);r!==K&&(r=K,l(r.object)),Y=d(D,L,B,G),Y&&g(D,L,B,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(D,F,B,L),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function f(D){return i.deleteVertexArray(D)}function u(D,F,B,L){const G=L.wireframe===!0;let Y=n[F.id];Y===void 0&&(Y={},n[F.id]=Y);const K=D.isInstancedMesh===!0?D.id:0;let st=Y[K];st===void 0&&(st={},Y[K]=st);let Z=st[B.id];Z===void 0&&(Z={},st[B.id]=Z);let V=Z[G];return V===void 0&&(V=h(c()),Z[G]=V),V}function h(D){const F=[],B=[],L=[];for(let G=0;G<e;G++)F[G]=0,B[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:L,object:D,attributes:{},index:null}}function d(D,F,B,L){const G=r.attributes,Y=F.attributes;let K=0;const st=B.getAttributes();for(const Z in st)if(st[Z].location>=0){const q=G[Z];let gt=Y[Z];if(gt===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(gt=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(gt=D.instanceColor)),q===void 0||q.attribute!==gt||gt&&q.data!==gt.data)return!0;K++}return r.attributesNum!==K||r.index!==L}function g(D,F,B,L){const G={},Y=F.attributes;let K=0;const st=B.getAttributes();for(const Z in st)if(st[Z].location>=0){let q=Y[Z];q===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(q=D.instanceColor));const gt={};gt.attribute=q,q&&q.data&&(gt.data=q.data),G[Z]=gt,K++}r.attributes=G,r.attributesNum=K,r.index=L}function M(){const D=r.newAttributes;for(let F=0,B=D.length;F<B;F++)D[F]=0}function m(D){p(D,0)}function p(D,F){const B=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;B[D]=1,L[D]===0&&(i.enableVertexAttribArray(D),L[D]=1),G[D]!==F&&(i.vertexAttribDivisor(D,F),G[D]=F)}function S(){const D=r.newAttributes,F=r.enabledAttributes;for(let B=0,L=F.length;B<L;B++)F[B]!==D[B]&&(i.disableVertexAttribArray(B),F[B]=0)}function A(D,F,B,L,G,Y,K){K===!0?i.vertexAttribIPointer(D,F,B,G,Y):i.vertexAttribPointer(D,F,B,L,G,Y)}function v(D,F,B,L){M();const G=L.attributes,Y=B.getAttributes(),K=F.defaultAttributeValues;for(const st in Y){const Z=Y[st];if(Z.location>=0){let V=G[st];if(V===void 0&&(st==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),st==="instanceColor"&&D.instanceColor&&(V=D.instanceColor)),V!==void 0){const q=V.normalized,gt=V.itemSize,rt=t.get(V);if(rt===void 0)continue;const Ot=rt.buffer,zt=rt.type,Xt=rt.bytesPerElement,X=zt===i.INT||zt===i.UNSIGNED_INT||V.gpuType===Yo;if(V.isInterleavedBufferAttribute){const tt=V.data,xt=tt.stride,Nt=V.offset;if(tt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<Z.locationSize;Mt++)p(Z.location+Mt,tt.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Mt=0;Mt<Z.locationSize;Mt++)m(Z.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let Mt=0;Mt<Z.locationSize;Mt++)A(Z.location+Mt,gt/Z.locationSize,zt,q,xt*Xt,(Nt+gt/Z.locationSize*Mt)*Xt,X)}else{if(V.isInstancedBufferAttribute){for(let tt=0;tt<Z.locationSize;tt++)p(Z.location+tt,V.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let tt=0;tt<Z.locationSize;tt++)m(Z.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let tt=0;tt<Z.locationSize;tt++)A(Z.location+tt,gt/Z.locationSize,zt,q,gt*Xt,gt/Z.locationSize*tt*Xt,X)}}else if(K!==void 0){const q=K[st];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(Z.location,q);break;case 3:i.vertexAttrib3fv(Z.location,q);break;case 4:i.vertexAttrib4fv(Z.location,q);break;default:i.vertexAttrib1fv(Z.location,q)}}}}S()}function b(){T();for(const D in n){const F=n[D];for(const B in F){const L=F[B];for(const G in L){const Y=L[G];for(const K in Y)f(Y[K].object),delete Y[K];delete L[G]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;const F=n[D.id];for(const B in F){const L=F[B];for(const G in L){const Y=L[G];for(const K in Y)f(Y[K].object),delete Y[K];delete L[G]}}delete n[D.id]}function C(D){for(const F in n){const B=n[F];for(const L in B){const G=B[L];if(G[D.id]===void 0)continue;const Y=G[D.id];for(const K in Y)f(Y[K].object),delete Y[K];delete G[D.id]}}}function x(D){for(const F in n){const B=n[F],L=D.isInstancedMesh===!0?D.id:0,G=B[L];if(G!==void 0){for(const Y in G){const K=G[Y];for(const st in K)f(K[st].object),delete K[st];delete G[Y]}delete B[L],Object.keys(B).length===0&&delete n[F]}}}function T(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function cm(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,f){f!==0&&(i.drawArraysInstanced(n,c,l,f),e.update(l,n,f))}function o(c,l,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,f);let h=0;for(let d=0;d<f;d++)h+=l[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function hm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==un&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===Bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==hn&&C!==Nn&&!x&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const f=c(l);f!==l&&(Ft("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const u=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:v,maxSamples:b,samples:E}}function um(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new li,o=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const d=u.length!==0||h||n!==0||s;return s=h,n=u.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){e=f(u,h,0)},this.setState=function(u,h,d){const g=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?f(null):l();else{const S=r?0:n,A=S*4;let v=p.clippingState||null;c.value=v,v=f(g,h,A,d);for(let b=0;b!==A;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(u,h,d,g){const M=u!==null?u.length:0;let m=null;if(M!==0){if(m=c.value,g!==!0||m===null){const p=d+M*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,v=d;A!==M;++A,v+=4)a.copy(u[A]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}const is=4,fm=6,dm=20,pm=256,ys=new Hs,Zl=new wt;let wa=null,Ra=0,Ca=0,Pa=!1;const mm=new R,vi=new R;class $l{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=mm}=r;wa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wa,Ra,Ca),this._renderer.xr.enabled=Pa,t.scissorTest=!1,Yi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:we,minFilter:we,generateMipmaps:!1,type:Bn,format:un,colorSpace:Dr,depthBuffer:!1},s=Jl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gm(r)),this._blurMaterial=xm(r,t,e),this._ggxMaterial=_m(r,t,e)}return s}_compileMaterial(t){const e=new We(new Re,t);this._renderer.compile(e,ys)}_sceneToCubeUV(t,e,n,s,r){const c=new pn(90,1,e,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Zl),u.toneMapping=An,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new We(new fs,new nl({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(Zl),p=!0);for(let A=0;A<6;A++){const v=A%3;v===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[A],r.y,r.z)):v===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[A]));const b=this._cubeSize;Yi(s,v*b,A>2?b:0,b,b),u.setRenderTarget(s),p&&u.render(M,c),u.render(t,c)}u.toneMapping=d,u.autoClear=h,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ti||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Yi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ys)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-f*f),h=l*1.25,d=u*h,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-is?n-g+is:0),p=4*(this._cubeSize-M);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,Yi(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(o,ys),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Yi(t,m,p,3*M,2*M),s.setRenderTarget(t),s.render(o,ys)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const f=this._sizeLods[s],u=3*f*(s>this._lodMax-is?s-this._lodMax+is:0),h=4*(this._cubeSize-f);Yi(e,u,h,3*f,2*f),a.setRenderTarget(e),a.render(c,ys)}}function gm(i){const t=[],e=[];let n=i;const s=i-is+1+fm;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),c=-o,l=1+o,f=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,h=6,d=3,g=new Float32Array(d*h*u),M=new Float32Array(d*h*u);for(let p=0;p<u;p++){const S=p%3*2/3-1,A=p>2?0:-1,v=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];g.set(v,d*h*p);for(let b=0;b<h;b++){const E=f[b*2]*2-1,C=f[b*2+1]*2-1;p===0?vi.set(1,C,E):p===1?vi.set(-E,1,-C):p===2?vi.set(-E,C,1):p===3?vi.set(-1,C,-E):p===4?vi.set(-E,-1,C):vi.set(E,C,-1),vi.toArray(M,(p*h+b)*d)}}const m=new Re;m.setAttribute("position",new _n(g,d)),m.setAttribute("outputDirection",new _n(M,d)),e.push(new We(m,null)),n>is&&n--}return{lodMeshes:e,sizeLods:t}}function Jl(i,t,e){const n=new gn(i,t,e);return n.texture.mapping=kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _m(i,t,e){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function xm(i,t,e){return new xn({name:"SphericalGaussianBlur",defines:{SAMPLES:dm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Kr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ql(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function jl(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Kr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ch extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Sh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fs(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Zn});r.uniforms.tEquirect.value=e;const a=new We(s,r),o=e.minFilter;return e.minFilter===hi&&(e.minFilter=we),new yf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function vm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Qr||d===jr)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const M=new Ch(g.height);return M.fromEquirectangularTexture(i,h),t.set(h,M),h.addEventListener("dispose",l),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,g=d===Qr||d===jr,M=d===Ti||d===hs;if(g||M){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new $l(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return g&&S&&S.height>0||M&&S&&c(S)?(n===null&&(n=new $l(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",f),m.texture):null}}}return h}function o(h,d){return d===Qr?h.mapping=Ti:d===jr&&(h.mapping=hs),h}function c(h){let d=0;const g=6;for(let M=0;M<g;M++)h[M]!==void 0&&d++;return d===g}function l(h){const d=h.target;d.removeEventListener("dispose",l);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(h){const d=h.target;d.removeEventListener("dispose",f);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Mm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&rs("WebGLRenderer: "+n+" extension not supported."),s}}}function Sm(i,t,e,n){const s={},r=new WeakMap;function a(u){const h=u.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(u){const h=u.attributes;for(const d in h)t.update(h[d],i.ARRAY_BUFFER)}function l(u){const h=[],d=u.index,g=u.attributes.position;let M=0;if(g===void 0)return;if(d!==null){const S=d.array;M=d.version;for(let A=0,v=S.length;A<v;A+=3){const b=S[A+0],E=S[A+1],C=S[A+2];h.push(b,E,E,C,C,b)}}else{const S=g.array;M=g.version;for(let A=0,v=S.length/3-1;A<v;A+=3){const b=A+0,E=A+1,C=A+2;h.push(b,E,E,C,C,b)}}const m=new(g.count>=65535?gh:mh)(h,1);m.version=M;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function f(u){const h=r.get(u);if(h){const d=u.index;d!==null&&h.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:f}}function ym(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,h){i.drawElements(n,h,r,u*a),e.update(h,n,1)}function l(u,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,u*a,d),e.update(h,n,d))}function f(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,u,0,d);let M=0;for(let m=0;m<d;m++)M+=h[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function bm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Em(i,t,e){const n=new WeakMap,s=new be;function r(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let h=n.get(o);if(h===void 0||h.count!==u){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let A=0;d===!0&&(A=1),g===!0&&(A=2),M===!0&&(A=3);let v=o.attributes.position.count*A,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const E=new Float32Array(v*b*4*u),C=new fh(E,v,b,u);C.type=Nn,C.needsUpdate=!0;const x=A*4;for(let P=0;P<u;P++){const D=m[P],F=p[P],B=S[P],L=v*b*4*P;for(let G=0;G<D.count;G++){const Y=G*x;d===!0&&(s.fromBufferAttribute(D,G),E[L+Y+0]=s.x,E[L+Y+1]=s.y,E[L+Y+2]=s.z,E[L+Y+3]=0),g===!0&&(s.fromBufferAttribute(F,G),E[L+Y+4]=s.x,E[L+Y+5]=s.y,E[L+Y+6]=s.z,E[L+Y+7]=0),M===!0&&(s.fromBufferAttribute(B,G),E[L+Y+8]=s.x,E[L+Y+9]=s.y,E[L+Y+10]=s.z,E[L+Y+11]=B.itemSize===4?s.w:1)}}h={count:u,texture:C,size:new Lt(v,b)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let M=0;M<l.length;M++)d+=l[M];const g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Tm(i,t,e,n,s){let r=new WeakMap;function a(l){const f=s.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==f&&(t.update(h),r.set(h,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==f&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return h}function o(){r=new WeakMap}function c(l){const f=l.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:o}}const Am={[Zc]:"LINEAR_TONE_MAPPING",[$c]:"REINHARD_TONE_MAPPING",[Jc]:"CINEON_TONE_MAPPING",[Qc]:"ACES_FILMIC_TONE_MAPPING",[th]:"AGX_TONE_MAPPING",[eh]:"NEUTRAL_TONE_MAPPING",[jc]:"CUSTOM_TONE_MAPPING"};function wm(i,t,e,n,s,r){const a=new gn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Re;l.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ne([0,2,0,0,2,0],2));const f=new df({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new We(l,f),h=new Hs(-1,1,1,-1,0,1);let d=null,g=null,M=!1,m,p=null,S=[],A=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),c!==null&&c.setSize(v,b);for(let E=0;E<S.length;E++){const C=S[E];C.setSize&&C.setSize(v,b)}},this.setEffects=function(v){S=v,A=S.length>0&&S[0].isRenderPass===!0;const b=a.width,E=a.height;S.length>0&&o===null&&(o=new gn(b,E,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),c=new gn(b,E,{type:Bn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){const x=S[C];x.setSize&&x.setSize(b,E)}},this.begin=function(v,b){if(M||v.toneMapping===An&&S.length===0)return!1;if(p=b,b!==null){const E=b.width,C=b.height;(a.width!==E||a.height!==C)&&this.setSize(E,C)}return A===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=An,!0},this.hasRenderPass=function(){return A},this.end=function(v,b){v.toneMapping=m,M=!0;let E=a,C=o;for(let x=0;x<S.length;x++){const T=S[x];T.enabled!==!1&&(T.render(v,C,E,b),T.needsSwap!==!1&&(E=C,C=C===o?c:o))}if(d!==v.outputColorSpace||g!==v.toneMapping){d=v.outputColorSpace,g=v.toneMapping,f.defines={},$t.getTransfer(d)===oe&&(f.defines.SRGB_TRANSFER="");const x=Am[g];x&&(f.defines[x]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(p),v.render(u,h),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),f.dispose()}}const Ph=new Ze,Bo=new Fs(1,1),Lh=new fh,Ih=new Vu,Dh=new Sh,tc=[],ec=[],nc=new Float32Array(16),ic=new Float32Array(9),sc=new Float32Array(4);function ds(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=tc[s];if(r===void 0&&(r=new Float32Array(s),tc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zr(i,t){let e=ec[t];e===void 0&&(e=new Int32Array(t),ec[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Rm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function Im(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;sc.set(n),i.uniformMatrix2fv(this.addr,!1,sc),Oe(e,n)}}function Dm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;ic.set(n),i.uniformMatrix3fv(this.addr,!1,ic),Oe(e,n)}}function Um(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;nc.set(n),i.uniformMatrix4fv(this.addr,!1,nc),Oe(e,n)}}function Nm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bo.compareFunction=e.isReversedDepthBuffer()?tl:jo,r=Bo):r=Ph,e.setTexture2D(t||r,s)}function Wm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ih,s)}function Xm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Dh,s)}function qm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Lh,s)}function Ym(i){switch(i){case 5126:return Rm;case 35664:return Cm;case 35665:return Pm;case 35666:return Lm;case 35674:return Im;case 35675:return Dm;case 35676:return Um;case 5124:case 35670:return Nm;case 35667:case 35671:return Fm;case 35668:case 35672:return Om;case 35669:case 35673:return Bm;case 5125:return zm;case 36294:return Hm;case 36295:return Gm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return qm}}function Km(i,t){i.uniform1fv(this.addr,t)}function Zm(i,t){const e=ds(t,this.size,2);i.uniform2fv(this.addr,e)}function $m(i,t){const e=ds(t,this.size,3);i.uniform3fv(this.addr,e)}function Jm(i,t){const e=ds(t,this.size,4);i.uniform4fv(this.addr,e)}function Qm(i,t){const e=ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jm(i,t){const e=ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function t0(i,t){const e=ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function e0(i,t){i.uniform1iv(this.addr,t)}function n0(i,t){i.uniform2iv(this.addr,t)}function i0(i,t){i.uniform3iv(this.addr,t)}function s0(i,t){i.uniform4iv(this.addr,t)}function r0(i,t){i.uniform1uiv(this.addr,t)}function a0(i,t){i.uniform2uiv(this.addr,t)}function o0(i,t){i.uniform3uiv(this.addr,t)}function l0(i,t){i.uniform4uiv(this.addr,t)}function c0(i,t,e){const n=this.cache,s=t.length,r=Zr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Bo:a=Ph;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function h0(i,t,e){const n=this.cache,s=t.length,r=Zr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ih,r[a])}function u0(i,t,e){const n=this.cache,s=t.length,r=Zr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Dh,r[a])}function f0(i,t,e){const n=this.cache,s=t.length,r=Zr(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Lh,r[a])}function d0(i){switch(i){case 5126:return Km;case 35664:return Zm;case 35665:return $m;case 35666:return Jm;case 35674:return Qm;case 35675:return jm;case 35676:return t0;case 5124:case 35670:return e0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return a0;case 36295:return o0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return f0}}class p0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ym(e.type)}}class m0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d0(e.type)}}class g0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const La=/(\w+)(\])?(\[|\.)?/g;function rc(i,t){i.seq.push(t),i.map[t.id]=t}function _0(i,t,e){const n=i.name,s=n.length;for(La.lastIndex=0;;){const r=La.exec(n),a=La.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){rc(e,l===void 0?new p0(o,i,t):new m0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new g0(o),rc(e,u)),e=u}}}class Cr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);_0(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ac(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const x0=37297;let v0=0;function M0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const oc=new Bt;function S0(i){$t._getMatrix(oc,$t.workingColorSpace,i);const t=`mat3( ${oc.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Ur:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function lc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+M0(i.getShaderSource(t),o)}else return r}function y0(i,t){const e=S0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const b0={[Zc]:"Linear",[$c]:"Reinhard",[Jc]:"Cineon",[Qc]:"ACESFilmic",[th]:"AgX",[eh]:"Neutral",[jc]:"Custom"};function E0(i,t){const e=b0[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const mr=new R;function T0(){$t.getLuminanceCoefficients(mr);const i=mr.x.toFixed(4),t=mr.y.toFixed(4),e=mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function w0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function R0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Rs(i){return i!==""}function cc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const C0=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(i){return i.replace(C0,L0)}const P0=new Map;function L0(i,t){let e=Vt[t];if(e===void 0){const n=P0.get(t);if(n!==void 0)e=Vt[n],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return zo(e)}const I0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(i){return i.replace(I0,D0)}function D0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const U0={[Cs]:"SHADOWMAP_TYPE_PCF",[ws]:"SHADOWMAP_TYPE_VSM"};function N0(i){return U0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const F0={[Ti]:"ENVMAP_TYPE_CUBE",[hs]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE_UV"};function O0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":F0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const B0={[hs]:"ENVMAP_MODE_REFRACTION"};function z0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":B0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const H0={[Vr]:"ENVMAP_BLENDING_MULTIPLY",[Mu]:"ENVMAP_BLENDING_MIX",[Su]:"ENVMAP_BLENDING_ADD"};function G0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":H0[i.combine]||"ENVMAP_BLENDING_NONE"}function V0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function k0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=N0(e),l=O0(e),f=z0(e),u=G0(e),h=V0(e),d=A0(e),g=w0(r),M=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(m=[fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?Vt.tonemapping_pars_fragment:"",e.toneMapping!==An?E0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,y0("linearToOutputTexel",e.outputColorSpace),T0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),a=zo(a),a=cc(a,e),a=hc(a,e),o=zo(o),o=cc(o,e),o=hc(o,e),a=uc(a),o=uc(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=S+m+a,v=S+p+o,b=ac(s,s.VERTEX_SHADER,A),E=ac(s,s.FRAGMENT_SHADER,v);s.attachShader(M,b),s.attachShader(M,E),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function C(D){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(M)||"",B=s.getShaderInfoLog(b)||"",L=s.getShaderInfoLog(E)||"",G=F.trim(),Y=B.trim(),K=L.trim();let st=!0,Z=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,b,E);else{const V=lc(s,b,"vertex"),q=lc(s,E,"fragment");jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+V+`
`+q)}else G!==""?Ft("WebGLProgram: Program Info Log:",G):(Y===""||K==="")&&(Z=!1);Z&&(D.diagnostics={runnable:st,programLog:G,vertexShader:{log:Y,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(b),s.deleteShader(E),x=new Cr(s,M),T=R0(s,M)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(M,x0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=v0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=E,this}let W0=0;class X0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new q0(t),e.set(t,n)),n}}class q0{constructor(t){this.id=W0++,this.code=t,this.usedTimes=0}}function Y0(i){return i===Ai||i===Lr||i===Ir}function K0(i,t,e,n,s,r){const a=new dh,o=new X0,c=new Set,l=[],f=new Map,u=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function M(x,T,P,D,F,B){const L=D.fog,G=F.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,st=t.get(x.envMap||Y,K),Z=st&&st.mapping===kr?st.image.height:null,V=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ft("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,gt=q!==void 0?q.length:0;let rt=0;G.morphAttributes.position!==void 0&&(rt=1),G.morphAttributes.normal!==void 0&&(rt=2),G.morphAttributes.color!==void 0&&(rt=3);let Ot,zt,Xt,X;if(V){const pe=Ln[V];Ot=pe.vertexShader,zt=pe.fragmentShader}else{Ot=x.vertexShader,zt=x.fragmentShader;const pe=o.getVertexShaderStage(x),ie=o.getFragmentShaderStage(x);o.update(x,pe,ie),Xt=pe.id,X=ie.id}const tt=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Nt=F.isInstancedMesh===!0,Mt=F.isBatchedMesh===!0,Wt=!!x.map,Ie=!!x.matcap,qt=!!st,te=!!x.aoMap,de=!!x.lightMap,Kt=!!x.bumpMap&&x.wireframe===!1,ve=!!x.normalMap,Be=!!x.displacementMap,sn=!!x.emissiveMap,Se=!!x.metalnessMap,Ce=!!x.roughnessMap,N=x.anisotropy>0,Xe=x.clearcoat>0,re=x.dispersion>0,w=x.retroreflectivity>0,_=x.iridescence>0,O=x.sheen>0,k=x.transmission>0,$=N&&!!x.anisotropyMap,at=Xe&&!!x.clearcoatMap,ot=Xe&&!!x.clearcoatNormalMap,J=Xe&&!!x.clearcoatRoughnessMap,j=_&&!!x.iridescenceMap,lt=_&&!!x.iridescenceThicknessMap,Rt=O&&!!x.sheenColorMap,ft=O&&!!x.sheenRoughnessMap,ct=!!x.specularMap,Ct=!!x.specularColorMap,Ut=!!x.specularIntensityMap,Ht=k&&!!x.transmissionMap,U=k&&!!x.thicknessMap,ht=!!x.gradientMap,Q=!!x.alphaMap,ut=x.alphaTest>0,_t=!!x.alphaHash,it=!!x.extensions;let Pt=An;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Pt=i.toneMapping);const Tt={shaderID:V,shaderType:x.type,shaderName:x.name,vertexShader:Ot,fragmentShader:zt,defines:x.defines,customVertexShaderID:Xt,customFragmentShaderID:X,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Mt,batchingColor:Mt&&F._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&F.instanceColor!==null,instancingMorph:Nt&&F.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Wt,matcap:Ie,envMap:qt,envMapMode:qt&&st.mapping,envMapCubeUVHeight:Z,aoMap:te,lightMap:de,bumpMap:Kt,normalMap:ve,displacementMap:Be,emissiveMap:sn,normalMapObjectSpace:ve&&x.normalMapType===Eu,normalMapTangentSpace:ve&&x.normalMapType===Us,packedNormalMap:ve&&x.normalMapType===Us&&Y0(x.normalMap.format),metalnessMap:Se,roughnessMap:Ce,anisotropy:N,anisotropyMap:$,clearcoat:Xe,clearcoatMap:at,clearcoatNormalMap:ot,clearcoatRoughnessMap:J,dispersion:re,retroreflection:w,iridescence:_,iridescenceMap:j,iridescenceThicknessMap:lt,sheen:O,sheenColorMap:Rt,sheenRoughnessMap:ft,specularMap:ct,specularColorMap:Ct,specularIntensityMap:Ut,transmission:k,transmissionMap:Ht,thicknessMap:U,gradientMap:ht,opaque:x.transparent===!1&&x.blending===Ps&&x.alphaToCoverage===!1,alphaMap:Q,alphaTest:ut,alphaHash:_t,combine:x.combine,mapUv:Wt&&g(x.map.channel),aoMapUv:te&&g(x.aoMap.channel),lightMapUv:de&&g(x.lightMap.channel),bumpMapUv:Kt&&g(x.bumpMap.channel),normalMapUv:ve&&g(x.normalMap.channel),displacementMapUv:Be&&g(x.displacementMap.channel),emissiveMapUv:sn&&g(x.emissiveMap.channel),metalnessMapUv:Se&&g(x.metalnessMap.channel),roughnessMapUv:Ce&&g(x.roughnessMap.channel),anisotropyMapUv:$&&g(x.anisotropyMap.channel),clearcoatMapUv:at&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ot&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ft&&g(x.sheenRoughnessMap.channel),specularMapUv:ct&&g(x.specularMap.channel),specularColorMapUv:Ct&&g(x.specularColorMap.channel),specularIntensityMapUv:Ut&&g(x.specularIntensityMap.channel),transmissionMapUv:Ht&&g(x.transmissionMap.channel),thicknessMapUv:U&&g(x.thicknessMap.channel),alphaMapUv:Q&&g(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ve||N),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(Wt||Q),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:rt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Wt&&x.map.isVideoTexture===!0&&$t.getTransfer(x.map.colorSpace)===oe,decodeVideoTextureEmissive:sn&&x.emissiveMap.isVideoTexture===!0&&$t.getTransfer(x.emissiveMap.colorSpace)===oe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===In,flipSided:x.side===ke,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||Mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function m(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(T,x),S(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){const T=d[x.type];let P;if(T){const D=Ln[T];P=hf.clone(D.uniforms)}else P=x.uniforms;return P}function v(x,T){let P=f.get(T);return P!==void 0?++P.usedTimes:(P=new k0(i,T,x,s),l.push(P),f.set(T,P)),P}function b(x){if(--x.usedTimes===0){const T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),f.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:A,acquireProgram:v,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:C}}function Z0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function $0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function dc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,M,m,p){let S=i[t];return S===void 0?(S={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:p},i[t]=S):(S.id=h.id,S.object=h,S.geometry=d,S.material=g,S.materialVariant=a(h),S.groupOrder=M,S.renderOrder=h.renderOrder,S.z=m,S.group=p),t++,S}function c(h,d,g,M,m,p,S){S.reversedDepth===!0&&(m=-m);const A=o(h,d,g,M,m,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):e.push(A)}function l(h,d,g,M,m,p){const S=o(h,d,g,M,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function f(h,d){e.length>1&&e.sort(h||$0),n.length>1&&n.sort(d||dc),s.length>1&&s.sort(d||dc)}function u(){for(let h=t,d=i.length;h<d;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:f}}function J0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new pc,i.set(n,[a])):s>=r.length?(a=new pc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Q0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new wt};break;case"SpotLight":e={position:new R,direction:new R,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function j0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let tg=0;function eg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ng(i){const t=new Q0,e=j0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new le,a=new le;function o(l){let f=0,u=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,g=0,M=0,m=0,p=0,S=0,A=0,v=0,b=0,E=0,C=0,x=0,T=0,P=0;l.sort(eg);for(let F=0,B=l.length;F<B;F++){const L=l[F],G=L.color,Y=L.intensity,K=L.distance;let st=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ai?st=L.shadow.map.texture:st=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)f+=G.r*Y,u+=G.g*Y,h+=G.b*Y;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(L.sh.coefficients[Z],Y);P++}else if(L.isSunLight){const Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const V=L.shadow,q=e.get(L);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[g]=q,n.sunShadowMap[g]=st;const gt=V.getViewportCount();for(let rt=0;rt<gt;rt++)n.sunShadowMatrix[M+rt]=V.getMatrix(rt),n.sunShadowCascade[M+rt]=V._cascadeData[rt];M+=gt,g++}n.sun[d]=Z,d++}else if(L.isDirectionalLight){const Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const V=L.shadow,q=e.get(L);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,n.directionalShadow[m]=q,n.directionalShadowMap[m]=st,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=Z,m++}else if(L.isSpotLight){const Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(G).multiplyScalar(Y),Z.distance=K,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,n.spot[S]=Z;const V=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,V.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[S]=V.matrix,L.castShadow){const q=e.get(L);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,n.spotShadow[S]=q,n.spotShadowMap[S]=st,C++}S++}else if(L.isRectAreaLight){const Z=t.get(L);Z.color.copy(G).multiplyScalar(Y),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=Z,A++}else if(L.isPointLight){const Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){const V=L.shadow,q=e.get(L);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,q.shadowCameraNear=V.camera.near,q.shadowCameraFar=V.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=st,n.pointShadowMatrix[p]=L.shadow.matrix,E++}n.point[p]=Z,p++}else if(L.isHemisphereLight){const Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(Y),Z.groundColor.copy(L.groundColor).multiplyScalar(Y),n.hemi[v]=Z,v++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=h;const D=n.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==S||D.rectAreaLength!==A||D.hemiLength!==v||D.numSunShadows!==g||D.numDirectionalShadows!==b||D.numPointShadows!==E||D.numSpotShadows!==C||D.numSpotMaps!==x||D.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,D.sunLength=d,D.directionalLength=m,D.pointLength=p,D.spotLength=S,D.rectAreaLength=A,D.hemiLength=v,D.numSunShadows=g,D.numDirectionalShadows=b,D.numPointShadows=E,D.numSpotShadows=C,D.numSpotMaps=x,D.numLightProbes=P,n.version=tg++)}function c(l,f){let u=0,h=0,d=0,g=0,M=0,m=0;const p=f.matrixWorldInverse;for(let S=0,A=l.length;S<A;S++){const v=l[S];if(v.isSunLight){const b=n.sun[u];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),u++}else if(v.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(v.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const b=n.rectArea[M];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),M++}else if(v.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function mc(i){const t=new ng(i),e=[],n=[],s=[];function r(h){u.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function f(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function ig(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new mc(i),t.set(s,[o])):r>=a.length?(o=new mc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rg=`uniform sampler2D shadow_pass;
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
}`,ag=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],og=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],gc=new le,bs=new R,Ia=new R;function lg(i,t,e){let n=new sl;const s=new Lt,r=new Lt,a=new be,o=new _f,c=new xf,l={},f=e.maxTextureSize,u={[Ei]:ke,[ke]:Ei,[In]:In},h=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:sg,fragmentShader:rg}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Re;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new We(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cs;let p=this.type;this.render=function(E,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===eu&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cs);const T=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Zn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=p!==this.type;B&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=E.length;L<G;L++){const Y=E[L],K=Y.shadow;if(K===void 0){Ft("WebGLShadowMap:",Y,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const st=K.getFrameExtents();s.multiply(st),r.copy(K.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/st.x),s.x=r.x*st.x,K.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/st.y),s.y=r.y*st.y,K.mapSize.y=r.y));const Z=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Z,K.map===null||B===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===ws){if(Y.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new gn(s.x,s.y,{format:Ai,type:Bn,minFilter:we,magFilter:we,generateMipmaps:!1}),K.map.texture.name=Y.name+".shadowMap",K.map.depthTexture=new Fs(s.x,s.y,Nn),K.map.depthTexture.name=Y.name+".shadowMapDepth",K.map.depthTexture.format=Jn,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ue,K.map.depthTexture.magFilter=Ue}else Y.isPointLight?(K.map=new Ch(s.x),K.map.depthTexture=new lf(s.x,On)):(K.map=new gn(s.x,s.y),K.map.depthTexture=new Fs(s.x,s.y,On)),K.map.depthTexture.name=Y.name+".shadowMap",K.map.depthTexture.format=Jn,this.type===Cs?(K.map.depthTexture.compareFunction=Z?tl:jo,K.map.depthTexture.minFilter=we,K.map.depthTexture.magFilter=we):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ue,K.map.depthTexture.magFilter=Ue);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);const V=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();Y.isPointLight!==!0&&K.updateMatrices(Y,x);for(let q=0;q<V;q++){const gt=K.getCamera(q);if(Y.isPointLight){const rt=K.camera,Ot=K.matrix,zt=Y.distance||rt.far;zt!==rt.far&&(rt.far=zt,rt.updateProjectionMatrix()),bs.setFromMatrixPosition(Y.matrixWorld),rt.position.copy(bs),Ia.copy(rt.position),Ia.add(ag[q]),rt.up.copy(og[q]),rt.lookAt(Ia),rt.updateMatrixWorld(),Ot.makeTranslation(-bs.x,-bs.y,-bs.z),gc.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),K._frustum.setFromProjectionMatrix(gc,rt.coordinateSystem,rt.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,q),i.clear();else{q===0&&(i.setRenderTarget(K.map),i.clear());const rt=K.getViewport(q);a.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),F.viewport(a)}n=K.getFrustum(q),v(C,x,gt,Y,this.type)}K.isPointLightShadow!==!0&&this.type===ws&&S(K,x),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,D)};function S(E,C){const x=t.update(M);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new gn(s.x,s.y,{format:Ai,type:Bn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,M,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,x,d,M,null)}function A(E,C,x,T){let P=null;const D=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)P=D;else if(P=x.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=P.uuid,B=C.uuid;let L=l[F];L===void 0&&(L={},l[F]=L);let G=L[B];G===void 0&&(G=P.clone(),L[B]=G,C.addEventListener("dispose",b)),P=G}if(P.visible=C.visible,P.wireframe=C.wireframe,T===ws?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:u[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=i.properties.get(P);F.light=x}return P}function v(E,C,x,T,P){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===ws)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const B=t.update(E),L=E.material;if(Array.isArray(L)){const G=B.groups;for(let Y=0,K=G.length;Y<K;Y++){const st=G[Y],Z=L[st.materialIndex];if(Z&&Z.visible){const V=A(E,Z,T,P);E.onBeforeShadow(i,E,C,x,B,V,st),i.renderBufferDirect(x,null,B,V,E,st),E.onAfterShadow(i,E,C,x,B,V,st)}}}else if(L.visible){const G=A(E,L,T,P);E.onBeforeShadow(i,E,C,x,B,G,null),i.renderBufferDirect(x,null,B,G,E,null),E.onAfterShadow(i,E,C,x,B,G,null)}}const F=E.children;for(let B=0,L=F.length;B<L;B++)v(F[B],C,x,T,P)}function b(E){E.target.removeEventListener("dispose",b);for(const x in l){const T=l[x],P=E.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function cg(i,t){function e(){let U=!1;const ht=new be;let Q=null;const ut=new be(0,0,0,0);return{setMask:function(_t){Q!==_t&&!U&&(i.colorMask(_t,_t,_t,_t),Q=_t)},setLocked:function(_t){U=_t},setClear:function(_t,it,Pt,Tt,pe){pe===!0&&(_t*=Tt,it*=Tt,Pt*=Tt),ht.set(_t,it,Pt,Tt),ut.equals(ht)===!1&&(i.clearColor(_t,it,Pt,Tt),ut.copy(ht))},reset:function(){U=!1,Q=null,ut.set(-1,0,0,0)}}}function n(){let U=!1,ht=!1,Q=null,ut=null,_t=null;return{setReversed:function(it){if(ht!==it){const Pt=t.get("EXT_clip_control");it?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),ht=it;const Tt=_t;_t=null,this.setClear(Tt)}},getReversed:function(){return ht},setTest:function(it){it?tt(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(it){Q!==it&&!U&&(i.depthMask(it),Q=it)},setFunc:function(it){if(ht&&(it=Nu[it]),ut!==it){switch(it){case Ja:i.depthFunc(i.NEVER);break;case Qa:i.depthFunc(i.ALWAYS);break;case ja:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case to:i.depthFunc(i.EQUAL);break;case eo:i.depthFunc(i.GEQUAL);break;case no:i.depthFunc(i.GREATER);break;case io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=it}},setLocked:function(it){U=it},setClear:function(it){_t!==it&&(_t=it,ht&&(it=1-it),i.clearDepth(it))},reset:function(){U=!1,Q=null,ut=null,_t=null,ht=!1}}}function s(){let U=!1,ht=null,Q=null,ut=null,_t=null,it=null,Pt=null,Tt=null,pe=null;return{setTest:function(ie){U||(ie?tt(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(ie){ht!==ie&&!U&&(i.stencilMask(ie),ht=ie)},setFunc:function(ie,Mn,wn){(Q!==ie||ut!==Mn||_t!==wn)&&(i.stencilFunc(ie,Mn,wn),Q=ie,ut=Mn,_t=wn)},setOp:function(ie,Mn,wn){(it!==ie||Pt!==Mn||Tt!==wn)&&(i.stencilOp(ie,Mn,wn),it=ie,Pt=Mn,Tt=wn)},setLocked:function(ie){U=ie},setClear:function(ie){pe!==ie&&(i.clearStencil(ie),pe=ie)},reset:function(){U=!1,ht=null,Q=null,ut=null,_t=null,it=null,Pt=null,Tt=null,pe=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let f={},u={},h={},d=new WeakMap,g=[],M=null,m=!1,p=null,S=null,A=null,v=null,b=null,E=null,C=null,x=new wt(0,0,0),T=0,P=!1,D=null,F=null,B=null,L=null,G=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,st=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=st>=1):Z.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=st>=2);let V=null,q={};const gt=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),Ot=new be().fromArray(gt),zt=new be().fromArray(rt);function Xt(U,ht,Q,ut){const _t=new Uint8Array(4),it=i.createTexture();i.bindTexture(U,it),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<Q;Pt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(ht+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return it}const X={};X[i.TEXTURE_2D]=Xt(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(Ls),Kt(!1),ve(Ml),tt(i.CULL_FACE),te(Zn);function tt(U){f[U]!==!0&&(i.enable(U),f[U]=!0)}function xt(U){f[U]!==!1&&(i.disable(U),f[U]=!1)}function Nt(U,ht){return h[U]!==ht?(i.bindFramebuffer(U,ht),h[U]=ht,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ht),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Mt(U,ht){let Q=g,ut=!1;if(U){Q=d.get(ht),Q===void 0&&(Q=[],d.set(ht,Q));const _t=U.textures;if(Q.length!==_t.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Pt=_t.length;it<Pt;it++)Q[it]=i.COLOR_ATTACHMENT0+it;Q.length=_t.length,ut=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ut=!0);ut&&i.drawBuffers(Q)}function Wt(U){return M!==U?(i.useProgram(U),M=U,!0):!1}const Ie={[ts]:i.FUNC_ADD,[iu]:i.FUNC_SUBTRACT,[su]:i.FUNC_REVERSE_SUBTRACT};Ie[ru]=i.MIN,Ie[au]=i.MAX;const qt={[ou]:i.ZERO,[lu]:i.ONE,[cu]:i.SRC_COLOR,[Yc]:i.SRC_ALPHA,[mu]:i.SRC_ALPHA_SATURATE,[du]:i.DST_COLOR,[uu]:i.DST_ALPHA,[hu]:i.ONE_MINUS_SRC_COLOR,[Kc]:i.ONE_MINUS_SRC_ALPHA,[pu]:i.ONE_MINUS_DST_COLOR,[fu]:i.ONE_MINUS_DST_ALPHA,[gu]:i.CONSTANT_COLOR,[_u]:i.ONE_MINUS_CONSTANT_COLOR,[xu]:i.CONSTANT_ALPHA,[vu]:i.ONE_MINUS_CONSTANT_ALPHA};function te(U,ht,Q,ut,_t,it,Pt,Tt,pe,ie){if(U===Zn){m===!0&&(xt(i.BLEND),m=!1);return}if(m===!1&&(tt(i.BLEND),m=!0),U!==nu){if(U!==p||ie!==P){if((S!==ts||b!==ts)&&(i.blendEquation(i.FUNC_ADD),S=ts,b=ts),ie)switch(U){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cs:i.blendFunc(i.ONE,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",U);break}else switch(U){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sl:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yl:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",U);break}A=null,v=null,E=null,C=null,x.set(0,0,0),T=0,p=U,P=ie}return}_t=_t||ht,it=it||Q,Pt=Pt||ut,(ht!==S||_t!==b)&&(i.blendEquationSeparate(Ie[ht],Ie[_t]),S=ht,b=_t),(Q!==A||ut!==v||it!==E||Pt!==C)&&(i.blendFuncSeparate(qt[Q],qt[ut],qt[it],qt[Pt]),A=Q,v=ut,E=it,C=Pt),(Tt.equals(x)===!1||pe!==T)&&(i.blendColor(Tt.r,Tt.g,Tt.b,pe),x.copy(Tt),T=pe),p=U,P=!1}function de(U,ht){U.side===In?xt(i.CULL_FACE):tt(i.CULL_FACE);let Q=U.side===ke;ht&&(Q=!Q),Kt(Q),U.blending===Ps&&U.transparent===!1?te(Zn):te(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const ut=U.stencilWrite;o.setTest(ut),ut&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),sn(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(U){D!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),D=U)}function ve(U){U!==Qh?(tt(i.CULL_FACE),U!==F&&(U===Ml?i.cullFace(i.BACK):U===jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),F=U}function Be(U){U!==B&&(K&&i.lineWidth(U),B=U)}function sn(U,ht,Q){U?(tt(i.POLYGON_OFFSET_FILL),(L!==ht||G!==Q)&&(L=ht,G=Q,a.getReversed()&&(ht=-ht),i.polygonOffset(ht,Q))):xt(i.POLYGON_OFFSET_FILL)}function Se(U){U?tt(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Ce(U){U===void 0&&(U=i.TEXTURE0+Y-1),V!==U&&(i.activeTexture(U),V=U)}function N(U,ht,Q){Q===void 0&&(V===null?Q=i.TEXTURE0+Y-1:Q=V);let ut=q[Q];ut===void 0&&(ut={type:void 0,texture:void 0},q[Q]=ut),(ut.type!==U||ut.texture!==ht)&&(V!==Q&&(i.activeTexture(Q),V=Q),i.bindTexture(U,ht||X[U]),ut.type=U,ut.texture=ht)}function Xe(){const U=q[V];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function re(){try{i.compressedTexImage2D(...arguments)}catch(U){jt("WebGLState:",U)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(U){jt("WebGLState:",U)}}function _(){try{i.texSubImage2D(...arguments)}catch(U){jt("WebGLState:",U)}}function O(){try{i.texSubImage3D(...arguments)}catch(U){jt("WebGLState:",U)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(U){jt("WebGLState:",U)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(U){jt("WebGLState:",U)}}function at(){try{i.texStorage2D(...arguments)}catch(U){jt("WebGLState:",U)}}function ot(){try{i.texStorage3D(...arguments)}catch(U){jt("WebGLState:",U)}}function J(){try{i.texImage2D(...arguments)}catch(U){jt("WebGLState:",U)}}function j(){try{i.texImage3D(...arguments)}catch(U){jt("WebGLState:",U)}}function lt(U){return u[U]!==void 0?u[U]:i.getParameter(U)}function Rt(U,ht){u[U]!==ht&&(i.pixelStorei(U,ht),u[U]=ht)}function ft(U){Ot.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ot.copy(U))}function ct(U){zt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),zt.copy(U))}function Ct(U,ht){let Q=l.get(ht);Q===void 0&&(Q=new WeakMap,l.set(ht,Q));let ut=Q.get(U);ut===void 0&&(ut=i.getUniformBlockIndex(ht,U.name),Q.set(U,ut))}function Ut(U,ht){const ut=l.get(ht).get(U);c.get(ht)!==ut&&(i.uniformBlockBinding(ht,ut,U.__bindingPointIndex),c.set(ht,ut))}function Ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},u={},V=null,q={},h={},d=new WeakMap,g=[],M=null,m=!1,p=null,S=null,A=null,v=null,b=null,E=null,C=null,x=new wt(0,0,0),T=0,P=!1,D=null,F=null,B=null,L=null,G=null,Ot.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:xt,bindFramebuffer:Nt,drawBuffers:Mt,useProgram:Wt,setBlending:te,setMaterial:de,setFlipSided:Kt,setCullFace:ve,setLineWidth:Be,setPolygonOffset:sn,setScissorTest:Se,activeTexture:Ce,bindTexture:N,unbindTexture:Xe,compressedTexImage2D:re,compressedTexImage3D:w,texImage2D:J,texImage3D:j,pixelStorei:Rt,getParameter:lt,updateUBOMapping:Ct,uniformBlockBinding:Ut,texStorage2D:at,texStorage3D:ot,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:k,compressedTexSubImage3D:$,scissor:ft,viewport:ct,reset:Ht}}function hg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Lt,f=new WeakMap,u=new Set;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(w,_){return g?new OffscreenCanvas(w,_):Nr("canvas")}function m(w,_,O){let k=1;const $=re(w);if(($.width>O||$.height>O)&&(k=O/Math.max($.width,$.height)),k<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const at=Math.floor(k*$.width),ot=Math.floor(k*$.height);h===void 0&&(h=M(at,ot));const J=_?M(at,ot):h;return J.width=at,J.height=ot,J.getContext("2d").drawImage(w,0,0,at,ot),Ft("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+at+"x"+ot+")."),J}else return"data"in w&&Ft("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),w;return w}function p(w){return w.generateMipmaps}function S(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(w,_,O,k,$,at=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ot;k&&(ot=t.get("EXT_texture_norm16"),ot||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8),O===i.UNSIGNED_SHORT&&ot&&(J=ot.R16_EXT),O===i.SHORT&&ot&&(J=ot.R16_SNORM_EXT)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),_===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8),O===i.UNSIGNED_SHORT&&ot&&(J=ot.RG16_EXT),O===i.SHORT&&ot&&(J=ot.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGB8UI),O===i.UNSIGNED_SHORT&&(J=i.RGB16UI),O===i.UNSIGNED_INT&&(J=i.RGB32UI),O===i.BYTE&&(J=i.RGB8I),O===i.SHORT&&(J=i.RGB16I),O===i.INT&&(J=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),O===i.UNSIGNED_INT&&(J=i.RGBA32UI),O===i.BYTE&&(J=i.RGBA8I),O===i.SHORT&&(J=i.RGBA16I),O===i.INT&&(J=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_SHORT&&ot&&(J=ot.RGB16_EXT),O===i.SHORT&&ot&&(J=ot.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),_===i.RGBA){const j=at?Ur:$t.getTransfer($);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=j===oe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ot&&(J=ot.RGBA16_EXT),O===i.SHORT&&ot&&(J=ot.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function b(w,_){let O;return w?_===null||_===On||_===Ds?O=i.DEPTH24_STENCIL8:_===Nn?O=i.DEPTH32F_STENCIL8:_===Is&&(O=i.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===On||_===Ds?O=i.DEPTH_COMPONENT24:_===Nn?O=i.DEPTH_COMPONENT32F:_===Is&&(O=i.DEPTH_COMPONENT16),O}function E(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ue&&w.minFilter!==we?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function C(w){const _=w.target;_.removeEventListener("dispose",C),T(_),_.isVideoTexture&&f.delete(_),_.isHTMLTexture&&u.delete(_)}function x(w){const _=w.target;_.removeEventListener("dispose",x),D(_)}function T(w){const _=n.get(w);if(_.__webglInit===void 0)return;const O=w.source,k=d.get(O);if(k){const $=k[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(w),Object.keys(k).length===0&&d.delete(O)}n.remove(w)}function P(w){const _=n.get(w);i.deleteTexture(_.__webglTexture);const O=w.source,k=d.get(O);delete k[_.__cacheKey],a.memory.textures--}function D(w){const _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let $=0;$<_.__webglFramebuffer[k].length;$++)i.deleteFramebuffer(_.__webglFramebuffer[k][$]);else i.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)i.deleteFramebuffer(_.__webglFramebuffer[k]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=w.textures;for(let k=0,$=O.length;k<$;k++){const at=n.get(O[k]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),n.remove(O[k])}n.remove(w)}let F=0;function B(){F=0}function L(){return F}function G(w){F=w}function Y(){const w=F;return w>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,w}function K(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function st(w,_){const O=n.get(w);if(w.isVideoTexture&&N(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const k=w.image;if(k===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(O,w,_);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function Z(w,_){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){xt(O,w,_);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function V(w,_){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){xt(O,w,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function q(w,_){const O=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&O.__version!==w.version){Nt(O,w,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const gt={[Pr]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[so]:i.MIRRORED_REPEAT},rt={[Ue]:i.NEAREST,[yu]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[we]:i.LINEAR,[ta]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},Ot={[Au]:i.NEVER,[Lu]:i.ALWAYS,[wu]:i.LESS,[jo]:i.LEQUAL,[Ru]:i.EQUAL,[tl]:i.GEQUAL,[Cu]:i.GREATER,[Pu]:i.NOTEQUAL};function zt(w,_){if(_.type===Nn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===we||_.magFilter===ta||_.magFilter===ks||_.magFilter===hi||_.minFilter===we||_.minFilter===ta||_.minFilter===ks||_.minFilter===hi)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,gt[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,gt[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,gt[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,rt[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,rt[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ot[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ue||_.minFilter!==ks&&_.minFilter!==hi||_.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Xt(w,_){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",C));const k=_.source;let $=d.get(k);$===void 0&&($={},d.set(k,$));const at=K(_);if(at!==w.__cacheKey){$[at]===void 0&&($[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[at].usedTimes++;const ot=$[w.__cacheKey];ot!==void 0&&($[w.__cacheKey].usedTimes--,ot.usedTimes===0&&P(_)),w.__cacheKey=at,w.__webglTexture=$[at].texture}return O}function X(w,_,O){return Math.floor(Math.floor(w/O)/_)}function tt(w,_,O,k){const at=w.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,k,_.data);else{at.sort((Rt,ft)=>Rt.start-ft.start);let ot=0;for(let Rt=1;Rt<at.length;Rt++){const ft=at[ot],ct=at[Rt],Ct=ft.start+ft.count,Ut=X(ct.start,_.width,4),Ht=X(ft.start,_.width,4);ct.start<=Ct+1&&Ut===Ht&&X(ct.start+ct.count-1,_.width,4)===Ut?ft.count=Math.max(ft.count,ct.start+ct.count-ft.start):(++ot,at[ot]=ct)}at.length=ot+1;const J=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),lt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Rt=0,ft=at.length;Rt<ft;Rt++){const ct=at[Rt],Ct=Math.floor(ct.start/4),Ut=Math.ceil(ct.count/4),Ht=Ct%_.width,U=Math.floor(Ct/_.width),ht=Ut,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Ht,U,ht,Q,O,k,_.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,lt)}}function xt(w,_,O){let k=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=i.TEXTURE_3D);const $=Xt(w,_),at=_.source;e.bindTexture(k,w.__webglTexture,i.TEXTURE0+O);const ot=n.get(at);if(at.version!==ot.__version||$===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Q=$t.getPrimaries($t.workingColorSpace),ut=_.colorSpace===ci?null:$t.getPrimaries(_.colorSpace),_t=_.colorSpace===ci||Q===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let j=m(_.image,!1,s.maxTextureSize);j=Xe(_,j);const lt=r.convert(_.format,_.colorSpace),Rt=r.convert(_.type);let ft=v(_.internalFormat,lt,Rt,_.normalized,_.colorSpace,_.isVideoTexture);zt(k,_);let ct;const Ct=_.mipmaps,Ut=_.isVideoTexture!==!0,Ht=ot.__version===void 0||$===!0,U=at.dataReady,ht=E(_,j);if(_.isDepthTexture)ft=b(_.format===bi,_.type),Ht&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,ft,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,ft,j.width,j.height,0,lt,Rt,null));else if(_.isDataTexture)if(Ct.length>0){Ut&&Ht&&e.texStorage2D(i.TEXTURE_2D,ht,ft,Ct[0].width,Ct[0].height);for(let Q=0,ut=Ct.length;Q<ut;Q++)ct=Ct[Q],Ut?U&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ct.width,ct.height,lt,Rt,ct.data):e.texImage2D(i.TEXTURE_2D,Q,ft,ct.width,ct.height,0,lt,Rt,ct.data);_.generateMipmaps=!1}else Ut?(Ht&&e.texStorage2D(i.TEXTURE_2D,ht,ft,j.width,j.height),U&&tt(_,j,lt,Rt)):e.texImage2D(i.TEXTURE_2D,0,ft,j.width,j.height,0,lt,Rt,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ut&&Ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,ft,Ct[0].width,Ct[0].height,j.depth);for(let Q=0,ut=Ct.length;Q<ut;Q++)if(ct=Ct[Q],_.format!==un)if(lt!==null)if(Ut){if(U)if(_.layerUpdates.size>0){const _t=Kl(ct.width,ct.height,_.format,_.type);for(const it of _.layerUpdates){const Pt=ct.data.subarray(it*_t/ct.data.BYTES_PER_ELEMENT,(it+1)*_t/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,it,ct.width,ct.height,1,lt,Pt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ct.width,ct.height,j.depth,lt,ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,ft,ct.width,ct.height,j.depth,0,ct.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ct.width,ct.height,j.depth,lt,Rt,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,ft,ct.width,ct.height,j.depth,0,lt,Rt,ct.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ut&&Ht&&e.texStorage2D(i.TEXTURE_2D,ht,ft,Ct[0].width,Ct[0].height);for(let Q=0,ut=Ct.length;Q<ut;Q++)ct=Ct[Q],_.format!==un?lt!==null?Ut?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ct.width,ct.height,lt,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,ft,ct.width,ct.height,0,ct.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?U&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ct.width,ct.height,lt,Rt,ct.data):e.texImage2D(i.TEXTURE_2D,Q,ft,ct.width,ct.height,0,lt,Rt,ct.data)}else if(_.isDataArrayTexture)if(Ut){if(Ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,ft,j.width,j.height,j.depth),U)if(_.layerUpdates.size>0){const Q=Kl(j.width,j.height,_.format,_.type);for(const ut of _.layerUpdates){const _t=j.data.subarray(ut*Q/j.data.BYTES_PER_ELEMENT,(ut+1)*Q/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,j.width,j.height,1,lt,Rt,_t)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,lt,Rt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,j.width,j.height,j.depth,0,lt,Rt,j.data);else if(_.isData3DTexture)Ut?(Ht&&e.texStorage3D(i.TEXTURE_3D,ht,ft,j.width,j.height,j.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,lt,Rt,j.data)):e.texImage3D(i.TEXTURE_3D,0,ft,j.width,j.height,j.depth,0,lt,Rt,j.data);else if(_.isFramebufferTexture){if(Ht)if(Ut)e.texStorage2D(i.TEXTURE_2D,ht,ft,j.width,j.height);else{let Q=j.width,ut=j.height;for(let _t=0;_t<ht;_t++)e.texImage2D(i.TEXTURE_2D,_t,ft,Q,ut,0,lt,Rt,null),Q>>=1,ut>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),j.parentNode!==Q){Q.appendChild(j),u.add(_),Q.onpaint=ut=>{const _t=ut.changedElements;for(const it of u)_t.includes(it.image)&&(it.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{const _t=i.RGBA,it=i.RGBA,Pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_t,it,Pt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(Ut&&Ht){const Q=re(Ct[0]);e.texStorage2D(i.TEXTURE_2D,ht,ft,Q.width,Q.height)}for(let Q=0,ut=Ct.length;Q<ut;Q++)ct=Ct[Q],Ut?U&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,lt,Rt,ct):e.texImage2D(i.TEXTURE_2D,Q,ft,lt,Rt,ct);_.generateMipmaps=!1}else if(Ut){if(Ht){const Q=re(j);e.texStorage2D(i.TEXTURE_2D,ht,ft,Q.width,Q.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,Rt,j)}else e.texImage2D(i.TEXTURE_2D,0,ft,lt,Rt,j);p(_)&&S(k),ot.__version=at.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Nt(w,_,O){if(_.image.length!==6)return;const k=Xt(w,_),$=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const at=n.get($);if($.version!==at.__version||k===!0){e.activeTexture(i.TEXTURE0+O);const ot=$t.getPrimaries($t.workingColorSpace),J=_.colorSpace===ci?null:$t.getPrimaries(_.colorSpace),j=_.colorSpace===ci||ot===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const lt=_.isCompressedTexture||_.image[0].isCompressedTexture,Rt=_.image[0]&&_.image[0].isDataTexture,ft=[];for(let it=0;it<6;it++)!lt&&!Rt?ft[it]=m(_.image[it],!0,s.maxCubemapSize):ft[it]=Rt?_.image[it].image:_.image[it],ft[it]=Xe(_,ft[it]);const ct=ft[0],Ct=r.convert(_.format,_.colorSpace),Ut=r.convert(_.type),Ht=v(_.internalFormat,Ct,Ut,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,ht=at.__version===void 0||k===!0,Q=$.dataReady;let ut=E(_,ct);zt(i.TEXTURE_CUBE_MAP,_);let _t;if(lt){U&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Ht,ct.width,ct.height);for(let it=0;it<6;it++){_t=ft[it].mipmaps;for(let Pt=0;Pt<_t.length;Pt++){const Tt=_t[Pt];_.format!==un?Ct!==null?U?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,0,0,Tt.width,Tt.height,Ct,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,Ht,Tt.width,Tt.height,0,Tt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,0,0,Tt.width,Tt.height,Ct,Ut,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,Ht,Tt.width,Tt.height,0,Ct,Ut,Tt.data)}}}else{if(_t=_.mipmaps,U&&ht){_t.length>0&&ut++;const it=re(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Ht,it.width,it.height)}for(let it=0;it<6;it++)if(Rt){U?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,ft[it].width,ft[it].height,Ct,Ut,ft[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ht,ft[it].width,ft[it].height,0,Ct,Ut,ft[it].data);for(let Pt=0;Pt<_t.length;Pt++){const pe=_t[Pt].image[it].image;U?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,0,0,pe.width,pe.height,Ct,Ut,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,Ht,pe.width,pe.height,0,Ct,Ut,pe.data)}}else{U?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ct,Ut,ft[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ht,Ct,Ut,ft[it]);for(let Pt=0;Pt<_t.length;Pt++){const Tt=_t[Pt];U?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,0,0,Ct,Ut,Tt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,Ht,Ct,Ut,Tt.image[it])}}}p(_)&&S(i.TEXTURE_CUBE_MAP),at.__version=$.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Mt(w,_,O,k,$,at){const ot=r.convert(O.format,O.colorSpace),J=r.convert(O.type),j=v(O.internalFormat,ot,J,O.normalized,O.colorSpace),lt=n.get(_),Rt=n.get(O);if(Rt.__renderTarget=_,!lt.__hasExternalTextures){const ft=Math.max(1,_.width>>at),ct=Math.max(1,_.height>>at);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,at,j,ft,ct,_.depth,0,ot,J,null):e.texImage2D($,at,j,ft,ct,0,ot,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Ce(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,$,Rt.__webglTexture,0,Se(_)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,$,Rt.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(w,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){const k=_.depthTexture,$=k&&k.isDepthTexture?k.type:null,at=b(_.stencilBuffer,$),ot=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ce(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(_),at,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(_),at,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,at,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,w)}else{const k=_.textures;for(let $=0;$<k.length;$++){const at=k[$],ot=r.convert(at.format,at.colorSpace),J=r.convert(at.type),j=v(at.internalFormat,ot,J,at.normalized,at.colorSpace);Ce(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(_),j,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(_),j,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,j,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(w,_,O){const k=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(_.depthTexture);if($.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k){if($.__webglInit===void 0&&($.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),zt(i.TEXTURE_CUBE_MAP,_.depthTexture);const lt=r.convert(_.depthTexture.format),Rt=r.convert(_.depthTexture.type);let ft;_.depthTexture.format===Jn?ft=i.DEPTH_COMPONENT24:_.depthTexture.format===bi&&(ft=i.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ft,_.width,_.height,0,lt,Rt,null)}}else st(_.depthTexture,0);const at=$.__webglTexture,ot=Se(_),J=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,j=_.depthTexture.format===bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Jn)Ce(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,at,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,j,J,at,0);else if(_.depthTexture.format===bi)Ce(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,at,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,j,J,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qt(w){const _=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const k=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",$)};k.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=k}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let k=0;k<6;k++)Ie(_.__webglFramebuffer[k],w,k);else{const k=w.texture.mipmaps;k&&k.length>0?Ie(_.__webglFramebuffer[0],w,0):Ie(_.__webglFramebuffer,w,0)}else if(O){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=i.createRenderbuffer(),Wt(_.__webglDepthbuffer[k],w,!1);else{const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,at)}}else{const k=w.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Wt(_.__webglDepthbuffer,w,!1);else{const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,at)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(w,_,O){const k=n.get(w);_!==void 0&&Mt(k.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&qt(w)}function de(w){const _=w.texture,O=n.get(w),k=n.get(_);w.addEventListener("dispose",x);const $=w.textures,at=w.isWebGLCubeRenderTarget===!0,ot=$.length>1;if(ot||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=_.version,a.memory.textures++),at){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let j=0;j<_.mipmaps.length;j++)O.__webglFramebuffer[J][j]=i.createFramebuffer()}else O.__webglFramebuffer[J]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)O.__webglFramebuffer[J]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ot)for(let J=0,j=$.length;J<j;J++){const lt=n.get($[J]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Ce(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){const j=$[J];O.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[J]);const lt=r.convert(j.format,j.colorSpace),Rt=r.convert(j.type),ft=v(j.internalFormat,lt,Rt,j.normalized,j.colorSpace,w.isXRRenderTarget===!0),ct=Se(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,ft,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,O.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Wt(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),zt(i.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)Mt(O.__webglFramebuffer[J][j],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,j);else Mt(O.__webglFramebuffer[J],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(_)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let J=0,j=$.length;J<j;J++){const lt=$[J],Rt=n.get(lt);let ft=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ft=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Rt.__webglTexture),zt(ft,lt),Mt(O.__webglFramebuffer,w,lt,i.COLOR_ATTACHMENT0+J,ft,0),p(lt)&&S(ft)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,k.__webglTexture),zt(J,_),_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)Mt(O.__webglFramebuffer[j],w,_,i.COLOR_ATTACHMENT0,J,j);else Mt(O.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,J,0);p(_)&&S(J),e.unbindTexture()}w.depthBuffer&&qt(w)}function Kt(w){const _=w.textures;for(let O=0,k=_.length;O<k;O++){const $=_[O];if(p($)){const at=A(w),ot=n.get($).__webglTexture;e.bindTexture(at,ot),S(at),e.unbindTexture()}}}const ve=[],Be=[];function sn(w){if(w.samples>0){if(Ce(w)===!1){const _=w.textures,O=w.width,k=w.height;let $=i.COLOR_BUFFER_BIT;const at=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=n.get(w),J=_.length>1;if(J)for(let lt=0;lt<_.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);const j=w.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let lt=0;lt<_.length;lt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);const Rt=n.get(_[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Rt,0)}i.blitFramebuffer(0,0,O,k,0,0,O,k,$,i.NEAREST),c===!0&&(ve.length=0,Be.length=0,ve.push(i.COLOR_ATTACHMENT0+lt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(ve.push(at),Be.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let lt=0;lt<_.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);const Rt=n.get(_[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){const _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Se(w){return Math.min(s.maxSamples,w.samples)}function Ce(w){const _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(w){const _=a.render.frame;f.get(w)!==_&&(f.set(w,_),w.update())}function Xe(w,_){const O=w.colorSpace,k=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Dr&&O!==ci&&($t.getTransfer(O)===oe?(k!==un||$!==hn)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",O)),_}function re(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=B,this.getTextureUnits=L,this.setTextureUnits=G,this.setTexture2D=st,this.setTexture2DArray=Z,this.setTexture3D=V,this.setTextureCube=q,this.rebindTextures=te,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ug(i,t){function e(n,s=ci){let r;const a=$t.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===Ko)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ah)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ih)return i.BYTE;if(n===sh)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===Yo)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===oh)return i.ALPHA;if(n===lh)return i.RGB;if(n===un)return i.RGBA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===ch)return i.RED;if(n===$o)return i.RED_INTEGER;if(n===Ai)return i.RG;if(n===Jo)return i.RG_INTEGER;if(n===Qo)return i.RGBA_INTEGER;if(n===Tr||n===Ar||n===wr||n===Rr)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ro||n===ao||n===oo||n===lo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===co||n===ho||n===uo||n===fo||n===po||n===Lr||n===mo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===co||n===ho)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===fo)return r.COMPRESSED_R11_EAC;if(n===po)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Lr)return r.COMPRESSED_RG11_EAC;if(n===mo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===go||n===_o||n===xo||n===vo||n===Mo||n===So||n===yo||n===bo||n===Eo||n===To||n===Ao||n===wo||n===Ro||n===Co)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===go)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_o)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===So)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===To)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ao)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ro)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Co)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Po||n===Lo||n===Io)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Po)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Do||n===Uo||n===Ir||n===No)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Do)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ir)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===No)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const fg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dg=`
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

}`;class pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new yh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xn({vertexShader:fg,fragmentShader:dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new We(new fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mg extends wi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,f=null,u=null,h=null,d=null,g=null;const M=typeof XRWebGLBinding<"u",m=new pg,p={},S=e.getContextAttributes();let A=null,v=null;const b=[],E=[],C=new Lt;let x=null,T=null;const P=new pn;P.viewport=new be;const D=new pn;D.viewport=new be;const F=[P,D],B=new bf;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=b[X];return tt===void 0&&(tt=new ca,b[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=b[X];return tt===void 0&&(tt=new ca,b[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=b[X];return tt===void 0&&(tt=new ca,b[X]=tt),tt.getHandSpace()};function Y(X){const tt=E.indexOf(X.inputSource);if(tt===-1)return;const xt=b[tt];xt!==void 0&&(xt.update(X.inputSource,X.frame,l||a),xt.dispatchEvent({type:X.type,data:X.inputSource}))}function K(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",st);for(let X=0;X<b.length;X++){const tt=E[X];tt!==null&&(E[X]=null,b[X].disconnect(tt))}L=null,G=null,m.reset();for(const X in p)delete p[X];if(t.setRenderTarget(A),d=null,h=null,u=null,s=null,v=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),T!==null){const X=T.camera;X.fov=T.fov,X.zoom=T.zoom,X.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",K),s.addEventListener("inputsourceschange",st),S.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Nt=null,Mt=null;S.depth&&(Mt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=S.stencil?bi:Jn,Nt=S.stencil?Ds:On);const Wt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(Wt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new gn(h.textureWidth,h.textureHeight,{format:un,type:hn,depthTexture:new Fs(h.textureWidth,h.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const xt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new gn(d.framebufferWidth,d.framebufferHeight,{format:un,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(X){for(let tt=0;tt<X.removed.length;tt++){const xt=X.removed[tt],Nt=E.indexOf(xt);Nt>=0&&(E[Nt]=null,b[Nt].disconnect(xt))}for(let tt=0;tt<X.added.length;tt++){const xt=X.added[tt];let Nt=E.indexOf(xt);if(Nt===-1){for(let Wt=0;Wt<b.length;Wt++)if(Wt>=E.length){E.push(xt),Nt=Wt;break}else if(E[Wt]===null){E[Wt]=xt,Nt=Wt;break}if(Nt===-1)break}const Mt=b[Nt];Mt&&Mt.connect(xt)}}const Z=new R,V=new R;function q(X,tt,xt){Z.setFromMatrixPosition(tt.matrixWorld),V.setFromMatrixPosition(xt.matrixWorld);const Nt=Z.distanceTo(V),Mt=tt.projectionMatrix.elements,Wt=xt.projectionMatrix.elements,Ie=Mt[14]/(Mt[10]-1),qt=Mt[14]/(Mt[10]+1),te=(Mt[9]+1)/Mt[5],de=(Mt[9]-1)/Mt[5],Kt=(Mt[8]-1)/Mt[0],ve=(Wt[8]+1)/Wt[0],Be=Ie*Kt,sn=Ie*ve,Se=Nt/(-Kt+ve),Ce=Se*-Kt;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ce),X.translateZ(Se),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Mt[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const N=Ie+Se,Xe=qt+Se,re=Be-Ce,w=sn+(Nt-Ce),_=te*qt/Xe*N,O=de*qt/Xe*N;X.projectionMatrix.makePerspective(re,w,_,O,N,Xe),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function gt(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let tt=X.near,xt=X.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),B.near=D.near=P.near=tt,B.far=D.far=P.far=xt,(L!==B.near||G!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,G=B.far),B.layers.mask=X.layers.mask|6,P.layers.mask=B.layers.mask&-5,D.layers.mask=B.layers.mask&-3;const Nt=X.parent,Mt=B.cameras;gt(B,Nt);for(let Wt=0;Wt<Mt.length;Wt++)gt(Mt[Wt],Nt);Mt.length===2?q(B,P,D):B.projectionMatrix.copy(P.projectionMatrix),T===null&&X.isPerspectiveCamera&&(T={camera:X,fov:X.fov,zoom:X.zoom}),rt(X,B,Nt)};function rt(X,tt,xt){xt===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(xt.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Fo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(X){c=X,h!==null&&(h.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(X){return p[X]};let Ot=null;function zt(X,tt){if(f=tt.getViewerPose(l||a),g=tt,f!==null){const xt=f.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Nt=!1;xt.length!==B.cameras.length&&(B.cameras.length=0,Nt=!0);for(let qt=0;qt<xt.length;qt++){const te=xt[qt];let de=null;if(d!==null)de=d.getViewport(te);else{const ve=u.getViewSubImage(h,te);de=ve.viewport,qt===0&&(t.setRenderTargetTextures(v,ve.colorTexture,ve.depthStencilTexture),t.setRenderTarget(v))}let Kt=F[qt];Kt===void 0&&(Kt=new pn,Kt.layers.enable(qt),Kt.viewport=new be,F[qt]=Kt),Kt.matrix.fromArray(te.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(te.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(de.x,de.y,de.width,de.height),qt===0&&(B.matrix.copy(Kt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Nt===!0&&B.cameras.push(Kt)}const Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=n.getBinding();const qt=u.getDepthInformation(xt[0]);qt&&qt.isValid&&qt.texture&&m.init(qt,s.renderState)}if(Mt&&Mt.includes("camera-access")&&M){t.state.unbindTexture(),u=n.getBinding();for(let qt=0;qt<xt.length;qt++){const te=xt[qt].camera;if(te){let de=p[te];de||(de=new yh,p[te]=de);const Kt=u.getCameraImage(te);de.sourceTexture=Kt}}}}for(let xt=0;xt<b.length;xt++){const Nt=E[xt],Mt=b[xt];Nt!==null&&Mt!==void 0&&Mt.update(Nt,tt,l||a)}Ot&&Ot(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Xt=new wh;Xt.setAnimationLoop(zt),this.setAnimationLoop=function(X){Ot=X},this.dispose=function(){}}}const gg=new le,Uh=new Bt;Uh.set(-1,0,0,0,1,0,0,0,1);function _g(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,A,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,A):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),A=S.envMap,v=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(gg.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Uh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){const E=b.program;n.uniformBlockBinding(v,E)}function l(v,b){let E=s[v.id];E===void 0&&(m(v),E=f(v),s[v.id]=E,v.addEventListener("dispose",S));const C=b.program;n.updateUBOMapping(v,C);const x=t.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function f(v){const b=u();v.__bindingPointIndex=b;const E=i.createBuffer(),C=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const b=s[v.id],E=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,T=E.length;x<T;x++){const P=E[x];if(Array.isArray(P))for(let D=0,F=P.length;D<F;D++)d(P[D],x,D,C);else d(P,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,b,E,C){if(M(v,b,E,C)===!0){const x=v.__offset,T=v.value;if(Array.isArray(T)){let P=0;for(let D=0;D<T.length;D++){const F=T[D],B=p(F);g(F,v.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function g(v,b,E){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,E)}function M(v,b,E,C){const x=v.value,T=b+"_"+E;if(C[T]===void 0)return typeof x=="number"||typeof x=="boolean"?C[T]=x:ArrayBuffer.isView(x)?C[T]=x.slice():C[T]=x.clone(),!0;{const P=C[T];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return C[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(v){const b=v.uniforms;let E=0;const C=16;for(let T=0,P=b.length;T<P;T++){const D=Array.isArray(b[T])?b[T]:[b[T]];for(let F=0,B=D.length;F<B;F++){const L=D[F],G=Array.isArray(L.value)?L.value:[L.value];for(let Y=0,K=G.length;Y<K;Y++){const st=G[Y],Z=p(st),V=E%C,q=V%Z.boundary,gt=V+q;E+=q,gt!==0&&C-gt<Z.storage&&(E+=C-gt),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=Z.storage}}}const x=E%C;return x>0&&(E+=C-x),v.__size=E,v.__cache={},this}function p(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",v),b}function S(v){const b=v.target;b.removeEventListener("dispose",S);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:A}}const vg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pn=null;function Mg(){return Pn===null&&(Pn=new il(vg,16,16,Ai,Bn),Pn.name="DFG_LUT",Pn.minFilter=we,Pn.magFilter=we,Pn.wrapS=Kn,Pn.wrapT=Kn,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}class Sg{constructor(t={}){const{canvas:e=Du(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:d=hn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const M=d,m=new Set([Qo,Jo,$o]),p=new Set([hn,On,Is,Ds,Ko,Zo]),S=new Uint32Array(4),A=new Int32Array(4),v=new R;let b=null,E=null;const C=[],x=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,F=null,B=null,L=null,G=null;this._outputColorSpace=en;let Y=0,K=0,st=null,Z=-1,V=null;const q=new be,gt=new be;let rt=null;const Ot=new wt(0);let zt=0,Xt=e.width,X=e.height,tt=1,xt=null,Nt=null;const Mt=new be(0,0,Xt,X),Wt=new be(0,0,Xt,X);let Ie=!1;const qt=new sl;let te=!1,de=!1;const Kt=new le,ve=new R,Be=new be,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Se=!1;function Ce(){return st===null?tt:1}let N=n;function Xe(y,I){return e.getContext(y,I)}let re,w,_,O,k,$,at,ot,J,j,lt,Rt,ft,ct,Ct,Ut,Ht,U,ht,Q,ut,_t,it;try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qo}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",Mn,!1),N===null){const I="webgl2";if(N=Xe(I,y),N===null)throw Xe(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pt()}catch(y){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),jt("WebGLRenderer: "+y.message),y}function Pt(){re=new Mm(N),re.init(),ut=new ug(N,re),w=new hm(N,re,t,ut),_=new cg(N,re),w.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),B=N.createFramebuffer(),L=N.createFramebuffer(),G=N.createFramebuffer(),O=new bm(N),k=new Z0,$=new hg(N,re,_,k,w,ut,O),at=new vm(P),ot=new Tf(N),_t=new lm(N,ot),J=new Sm(N,ot,O,_t),j=new Tm(N,J,ot,_t,O),U=new Em(N,w,$),Ct=new um(k),lt=new K0(P,at,re,w,_t,Ct),Rt=new _g(P,k),ft=new J0,ct=new ig(re),Ht=new om(P,at,_,j,g,c),Ut=new lg(P,j,w),it=new xg(N,O,w,_),ht=new cm(N,re,O),Q=new ym(N,re,O),O.programs=lt.programs,P.capabilities=w,P.extensions=re,P.properties=k,P.renderLists=ft,P.shadowMap=Ut,P.state=_,P.info=O}M!==hn&&(T=new wm(M,e.width,e.height,o,s,r));const Tt=new mg(P,N);this.xr=Tt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=re.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=re.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(y){y!==void 0&&(tt=y,this.setSize(Xt,X,!1))},this.getSize=function(y){return y.set(Xt,X)},this.setSize=function(y,I,W=!0){if(Tt.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Xt=y,X=I,e.width=Math.floor(y*tt),e.height=Math.floor(I*tt),W===!0&&(e.style.width=y+"px",e.style.height=I+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(Xt*tt,X*tt).floor()},this.setDrawingBufferSize=function(y,I,W){Xt=y,X=I,tt=W,e.width=Math.floor(y*W),e.height=Math.floor(I*W),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(M===hn){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(q)},this.getViewport=function(y){return y.copy(Mt)},this.setViewport=function(y,I,W,z){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,I,W,z),_.viewport(q.copy(Mt).multiplyScalar(tt).round())},this.getScissor=function(y){return y.copy(Wt)},this.setScissor=function(y,I,W,z){y.isVector4?Wt.set(y.x,y.y,y.z,y.w):Wt.set(y,I,W,z),_.scissor(gt.copy(Wt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(y){_.setScissorTest(Ie=y)},this.setOpaqueSort=function(y){xt=y},this.setTransparentSort=function(y){Nt=y},this.getClearColor=function(y){return y.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor(...arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,W=!0){let z=0;if(y){let H=!1;if(st!==null){const mt=st.texture.format;H=m.has(mt)}if(H){const mt=st.texture.type,St=p.has(mt),pt=Ht.getClearColor(),bt=Ht.getClearAlpha(),At=pt.r,Gt=pt.g,Yt=pt.b;St?(S[0]=At,S[1]=Gt,S[2]=Yt,S[3]=bt,N.clearBufferuiv(N.COLOR,0,S)):(A[0]=At,A[1]=Gt,A[2]=Yt,A[3]=bt,N.clearBufferiv(N.COLOR,0,A))}else z|=N.COLOR_BUFFER_BIT}I&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),Ht.dispose(),ft.dispose(),ct.dispose(),k.dispose(),at.dispose(),j.dispose(),_t.dispose(),it.dispose(),lt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",ul),Tt.removeEventListener("sessionend",fl),pi.stop()};function pe(y){y.preventDefault(),Fr("WebGLRenderer: Context Lost."),D=!0}function ie(){Fr("WebGLRenderer: Context Restored."),D=!1;const y=O.autoReset,I=Ut.enabled,W=Ut.autoUpdate,z=Ut.needsUpdate,H=Ut.type;Pt(),O.autoReset=y,Ut.enabled=I,Ut.autoUpdate=W,Ut.needsUpdate=z,Ut.type=H}function Mn(y){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function wn(y){const I=y.target;I.removeEventListener("dispose",wn),Wh(I)}function Wh(y){Xh(y),k.remove(y)}function Xh(y){const I=k.get(y).programs;I!==void 0&&(I.forEach(function(W){lt.releaseProgram(W)}),y.isShaderMaterial&&lt.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,W,z,H,mt){I===null&&(I=sn);const St=H.isMesh&&H.matrixWorld.determinantAffine()<0,pt=Kh(y,I,W,z,H);_.setMaterial(z,St);let bt=W.index,At=1;if(z.wireframe===!0){if(bt=J.getWireframeAttribute(W),bt===void 0)return;At=2}const Gt=W.drawRange,Yt=W.attributes.position;let Et=Gt.start*At,se=(Gt.start+Gt.count)*At;mt!==null&&(Et=Math.max(Et,mt.start*At),se=Math.min(se,(mt.start+mt.count)*At)),bt!==null?(Et=Math.max(Et,0),se=Math.min(se,bt.count)):Yt!=null&&(Et=Math.max(Et,0),se=Math.min(se,Yt.count));const Pe=se-Et;if(Pe<0||Pe===1/0)return;_t.setup(H,z,pt,W,bt);let _e,fe=ht;if(bt!==null&&(_e=ot.get(bt),fe=Q,fe.setIndex(_e)),H.isMesh)z.wireframe===!0?(_.setLineWidth(z.wireframeLinewidth*Ce()),fe.setMode(N.LINES)):fe.setMode(N.TRIANGLES);else if(H.isLine){let qe=z.linewidth;qe===void 0&&(qe=1),_.setLineWidth(qe*Ce()),H.isLineSegments?fe.setMode(N.LINES):H.isLineLoop?fe.setMode(N.LINE_LOOP):fe.setMode(N.LINE_STRIP)}else H.isPoints?fe.setMode(N.POINTS):H.isSprite&&fe.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(re.get("WEBGL_multi_draw"))fe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const qe=H._multiDrawStarts,vt=H._multiDrawCounts,$e=H._multiDrawCount,Jt=bt?ot.get(bt).bytesPerElement:1,fn=k.get(z).currentProgram.getUniforms();for(let Rn=0;Rn<$e;Rn++)fn.setValue(N,"_gl_DrawID",Rn),fe.render(qe[Rn]/Jt,vt[Rn])}else if(H.isInstancedMesh)fe.renderInstances(Et,Pe,H.count);else if(W.isInstancedBufferGeometry){const qe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,vt=Math.min(W.instanceCount,qe);fe.renderInstances(Et,Pe,vt)}else fe.render(Et,Pe)};function hl(y,I,W,z){F!==null&&y.isNodeMaterial&&F.setObject(z,y),te===!0&&Ct.setState(y,W,!1),y.transparent===!0&&y.side===In&&y.forceSinglePass===!1?(y.side=ke,y.needsUpdate=!0,Vs(y,I,z),y.side=Ei,y.needsUpdate=!0,Vs(y,I,z),y.side=In):Vs(y,I,z)}this.compile=function(y,I,W=null){W===null&&(W=y),F!==null&&F.renderStart(y,I,W),E=ct.get(W),E.init(I),x.push(E),W.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),y!==W&&y.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),de=this.localClippingEnabled,te=Ct.init(this.clippingPlanes,de),te===!0&&Ct.setGlobalState(this.clippingPlanes,I),F!==null&&Ut.render(E.state.shadowsArray,W,I);const z=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const mt=H.material;if(mt)if(Array.isArray(mt))for(let St=0;St<mt.length;St++){const pt=mt[St];hl(pt,W,I,H),z.add(pt)}else hl(mt,W,I,H),z.add(mt)}),E=x.pop(),F!==null&&F.renderEnd(),z},this.compileAsync=function(y,I,W=null){const z=this.compile(y,I,W);return new Promise(H=>{function mt(){if(z.forEach(function(St){const bt=k.get(St).currentProgram;(bt===void 0||bt.isReady())&&z.delete(St)}),z.size===0){H(y);return}setTimeout(mt,10)}re.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let $r=null;function qh(y){$r&&$r(y)}function ul(){pi.stop()}function fl(){pi.start()}const pi=new wh;pi.setAnimationLoop(qh),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(y){$r=y,Tt.setAnimationLoop(y),y===null?pi.stop():pi.start()},Tt.addEventListener("sessionstart",ul),Tt.addEventListener("sessionend",fl),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(y,I);const W=Tt.enabled===!0&&Tt.isPresenting===!0,z=T!==null&&(st===null||W)&&T.begin(P,st);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(I),I=Tt.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,I,st),E=ct.get(y,x.length),E.init(I),E.state.textureUnits=$.getTextureUnits(),x.push(E),Kt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),qt.setFromProjectionMatrix(Kt,Fn,I.reversedDepth),de=this.localClippingEnabled,te=Ct.init(this.clippingPlanes,de),b=ft.get(y,C.length),b.init(),C.push(b),Tt.enabled===!0&&Tt.isPresenting===!0){const St=P.xr.getDepthSensingMesh();St!==null&&Jr(St,I,-1/0,P.sortObjects)}Jr(y,I,0,P.sortObjects),b.finish(),F!==null&&F.updateLights(E.state.lightsArray),P.sortObjects===!0&&b.sort(xt,Nt),Se=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,Se&&Ht.addToRenderList(b,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),te===!0&&Ct.beginShadows();const H=E.state.shadowsArray;if(Ut.render(H,y,I),te===!0&&Ct.endShadows(),(z&&T.hasRenderPass())===!1){const St=b.opaque,pt=b.transmissive;if(E.setupLights(),I.isArrayCamera){const bt=I.cameras;if(pt.length>0)for(let At=0,Gt=bt.length;At<Gt;At++){const Yt=bt[At];pl(St,pt,y,Yt)}Se&&Ht.render(y);for(let At=0,Gt=bt.length;At<Gt;At++){const Yt=bt[At];dl(b,y,Yt,Yt.viewport)}}else pt.length>0&&pl(St,pt,y,I),Se&&Ht.render(y),dl(b,y,I)}st!==null&&K===0&&($.updateMultisampleRenderTarget(st),$.updateRenderTargetMipmap(st)),z&&T.end(P),y.isScene===!0&&y.onAfterRender(P,y,I),_t.resetDefaultState(),Z=-1,V=null,x.pop(),x.length>0?(E=x[x.length-1],$.setTextureUnits(E.state.textureUnits),te===!0&&Ct.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,F!==null&&F.renderEnd()};function Jr(y,I,W,z){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(qt)){z&&Be.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Kt);const St=j.update(y),pt=y.material;pt.visible&&b.push(y,St,pt,W,Be.z,null,I)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(qt))){const St=j.update(y),pt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Be.copy(y.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Be.copy(St.boundingSphere.center)),Be.applyMatrix4(y.matrixWorld).applyMatrix4(Kt)),Array.isArray(pt)){const bt=St.groups;for(let At=0,Gt=bt.length;At<Gt;At++){const Yt=bt[At],Et=pt[Yt.materialIndex];Et&&Et.visible&&b.push(y,St,Et,W,Be.z,Yt,I)}}else pt.visible&&b.push(y,St,pt,W,Be.z,null,I)}}const mt=y.children;for(let St=0,pt=mt.length;St<pt;St++)Jr(mt[St],I,W,z)}function dl(y,I,W,z){const{opaque:H,transmissive:mt,transparent:St}=y;E.setupLightsView(W),te===!0&&Ct.setGlobalState(P.clippingPlanes,W),z&&_.viewport(q.copy(z)),H.length>0&&Gs(H,I,W),mt.length>0&&Gs(mt,I,W),St.length>0&&Gs(St,I,W),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function pl(y,I,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){const Et=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new gn(1,1,{generateMipmaps:!0,type:Et?Bn:hn,minFilter:hi,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$t.workingColorSpace})}const mt=E.state.transmissionRenderTarget[z.id],St=z.viewport||q;mt.setSize(St.z*P.transmissionResolutionScale,St.w*P.transmissionResolutionScale);const pt=P.getRenderTarget(),bt=P.getActiveCubeFace(),At=P.getActiveMipmapLevel();P.setRenderTarget(mt),P.getClearColor(Ot),zt=P.getClearAlpha(),zt<1&&P.setClearColor(16777215,.5),P.clear(),Se&&Ht.render(W);const Gt=P.toneMapping;P.toneMapping=An;const Yt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),te===!0&&Ct.setGlobalState(P.clippingPlanes,z),Gs(y,W,z),$.updateMultisampleRenderTarget(mt),$.updateRenderTargetMipmap(mt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let se=0,Pe=I.length;se<Pe;se++){const _e=I[se],{object:fe,geometry:qe,material:vt,group:$e}=_e;if(vt.side===In&&fe.layers.test(z.layers)){const Jt=vt.side;vt.side=ke,vt.needsUpdate=!0,ml(fe,W,z,qe,vt,$e),vt.side=Jt,vt.needsUpdate=!0,Et=!0}}Et===!0&&($.updateMultisampleRenderTarget(mt),$.updateRenderTargetMipmap(mt))}P.setRenderTarget(pt,bt,At),P.setClearColor(Ot,zt),Yt!==void 0&&(z.viewport=Yt),P.toneMapping=Gt}function Gs(y,I,W){const z=I.isScene===!0?I.overrideMaterial:null;for(let H=0,mt=y.length;H<mt;H++){const St=y[H],{object:pt,geometry:bt,group:At}=St;let Gt=St.material;Gt.allowOverride===!0&&z!==null&&(Gt=z),pt.layers.test(W.layers)&&ml(pt,I,W,bt,Gt,At)}}function ml(y,I,W,z,H,mt){F!==null&&H.isNodeMaterial&&F.setObject(y,H),y.onBeforeRender(P,I,W,z,H,mt),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(P,I,W,z,y,mt),H.transparent===!0&&H.side===In&&H.forceSinglePass===!1?(H.side=ke,H.needsUpdate=!0,P.renderBufferDirect(W,I,z,H,y,mt),H.side=Ei,H.needsUpdate=!0,P.renderBufferDirect(W,I,z,H,y,mt),H.side=In):P.renderBufferDirect(W,I,z,H,y,mt),y.onAfterRender(P,I,W,z,H,mt)}function Vs(y,I,W){I.isScene!==!0&&(I=sn);const z=k.get(y),H=E.state.lights,mt=E.state.shadowsArray,St=H.state.version,pt=lt.getParameters(y,H.state,mt,I,W,E.state.lightProbeGridArray),bt=lt.getProgramCacheKey(pt);let At=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,z.fog=I.fog;const Gt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=at.get(y.envMap||z.environment,Gt),z.envMapRotation=z.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,At===void 0&&(y.addEventListener("dispose",wn),At=new Map,z.programs=At);let Yt=At.get(bt);if(Yt!==void 0){if(z.currentProgram===Yt&&z.lightsStateVersion===St)return _l(y,pt),Yt}else pt.uniforms=lt.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,W,pt),y.onBeforeCompile(pt,P),Yt=lt.acquireProgram(pt,bt),At.set(bt,Yt),z.uniforms=pt.uniforms;const Et=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Et.clippingPlanes=Ct.uniform),_l(y,pt),z.needsLights=$h(y),z.lightsStateVersion=St,z.needsLights&&(Et.ambientLightColor.value=H.state.ambient,Et.lightProbe.value=H.state.probe,Et.sunLights.value=H.state.sun,Et.sunLightShadows.value=H.state.sunShadow,Et.directionalLights.value=H.state.directional,Et.directionalLightShadows.value=H.state.directionalShadow,Et.spotLights.value=H.state.spot,Et.spotLightShadows.value=H.state.spotShadow,Et.rectAreaLights.value=H.state.rectArea,Et.ltc_1.value=H.state.rectAreaLTC1,Et.ltc_2.value=H.state.rectAreaLTC2,Et.pointLights.value=H.state.point,Et.pointLightShadows.value=H.state.pointShadow,Et.hemisphereLights.value=H.state.hemi,Et.sunShadowMatrix.value=H.state.sunShadowMatrix,Et.sunShadowCascade.value=H.state.sunShadowCascade,Et.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Et.spotLightMatrix.value=H.state.spotLightMatrix,Et.spotLightMap.value=H.state.spotLightMap,Et.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=Yt,z.uniformsList=null,Yt}function gl(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Cr.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function _l(y,I){const W=k.get(y);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function Yh(y,I){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;v.setFromMatrixPosition(I.matrixWorld);for(let W=0,z=y.length;W<z;W++){const H=y[W];if(H.texture!==null&&H.boundingBox.containsPoint(v))return H}return null}function Kh(y,I,W,z,H){I.isScene!==!0&&(I=sn),$.resetTextureUnits();const mt=I.fog,St=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?I.environment:null,pt=st===null?P.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:$t.workingColorSpace,bt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,At=at.get(z.envMap||St,bt),Gt=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Yt=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Et=!!W.morphAttributes.position,se=!!W.morphAttributes.normal,Pe=!!W.morphAttributes.color;let _e=An;z.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(_e=P.toneMapping);const fe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,qe=fe!==void 0?fe.length:0,vt=k.get(z),$e=E.state.lights;if(te===!0&&(de===!0||y!==V)){const me=y===V&&z.id===Z;Ct.setState(z,y,me)}let Jt=!1;z.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==$e.state.version||vt.outputColorSpace!==pt||H.isBatchedMesh&&vt.batching===!1||!H.isBatchedMesh&&vt.batching===!0||H.isBatchedMesh&&vt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&vt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&vt.instancing===!1||!H.isInstancedMesh&&vt.instancing===!0||H.isSkinnedMesh&&vt.skinning===!1||!H.isSkinnedMesh&&vt.skinning===!0||H.isInstancedMesh&&vt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&vt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&vt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&vt.instancingMorph===!1&&H.morphTexture!==null||vt.envMap!==At||z.fog===!0&&vt.fog!==mt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Ct.numPlanes||vt.numIntersection!==Ct.numIntersection)||vt.vertexAlphas!==Gt||vt.vertexTangents!==Yt||vt.morphTargets!==Et||vt.morphNormals!==se||vt.morphColors!==Pe||vt.toneMapping!==_e||vt.morphTargetsCount!==qe||!!vt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Jt=!0):(Jt=!0,vt.__version=z.version);let fn=vt.currentProgram;Jt===!0&&(fn=Vs(z,I,H),F&&z.isNodeMaterial&&F.onUpdateProgram(z,fn,vt));let Rn=!1,jn=!1,Ci=!1;const ce=fn.getUniforms(),Ae=vt.uniforms;if(_.useProgram(fn.program)&&(Rn=!0,jn=!0,Ci=!0),z.id!==Z&&(Z=z.id,jn=!0),vt.needsLights){const me=Yh(E.state.lightProbeGridArray,H);vt.lightProbeGrid!==me&&(vt.lightProbeGrid=me,jn=!0)}if(Rn||V!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ce.setValue(N,"projectionMatrix",y.projectionMatrix),ce.setValue(N,"viewMatrix",y.matrixWorldInverse);const ei=ce.map.cameraPosition;ei!==void 0&&ei.setValue(N,ve.setFromMatrixPosition(y.matrixWorld)),w.logarithmicDepthBuffer&&ce.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ce.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),V!==y&&(V=y,jn=!0,Ci=!0)}if(vt.needsLights&&($e.state.sunShadowMap.length>0&&ce.setValue(N,"sunShadowMap",$e.state.sunShadowMap,$),$e.state.directionalShadowMap.length>0&&ce.setValue(N,"directionalShadowMap",$e.state.directionalShadowMap,$),$e.state.spotShadowMap.length>0&&ce.setValue(N,"spotShadowMap",$e.state.spotShadowMap,$),$e.state.pointShadowMap.length>0&&ce.setValue(N,"pointShadowMap",$e.state.pointShadowMap,$)),H.isSkinnedMesh){ce.setOptional(N,H,"bindMatrix"),ce.setOptional(N,H,"bindMatrixInverse");const me=H.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),ce.setValue(N,"boneTexture",me.boneTexture,$))}H.isBatchedMesh&&(ce.setOptional(N,H,"batchingTexture"),ce.setValue(N,"batchingTexture",H._matricesTexture,$),ce.setOptional(N,H,"batchingIdTexture"),ce.setValue(N,"batchingIdTexture",H._indirectTexture,$),ce.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&ce.setValue(N,"batchingColorTexture",H._colorsTexture,$));const ti=W.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&U.update(H,W,fn),(jn||vt.receiveShadow!==H.receiveShadow)&&(vt.receiveShadow=H.receiveShadow,ce.setValue(N,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&I.environment!==null&&(Ae.envMapIntensity.value=I.environmentIntensity),Ae.dfgLUT!==void 0&&(Ae.dfgLUT.value=Mg()),jn){if(ce.setValue(N,"toneMappingExposure",P.toneMappingExposure),vt.needsLights&&Zh(Ae,Ci),mt&&z.fog===!0&&Rt.refreshFogUniforms(Ae,mt),Rt.refreshMaterialUniforms(Ae,z,tt,X,E.state.transmissionRenderTarget[y.id]),vt.needsLights&&vt.lightProbeGrid){const me=vt.lightProbeGrid;Ae.probesSH.value=me.texture,Ae.probesMin.value.copy(me.boundingBox.min),Ae.probesMax.value.copy(me.boundingBox.max),Ae.probesResolution.value.copy(me.resolution)}Cr.upload(N,gl(vt),Ae,$)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Cr.upload(N,gl(vt),Ae,$),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ce.setValue(N,"center",H.center),ce.setValue(N,"modelViewMatrix",H.modelViewMatrix),ce.setValue(N,"normalMatrix",H.normalMatrix),ce.setValue(N,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){const me=z.uniformsGroups;for(let ei=0,Pi=me.length;ei<Pi;ei++){const vl=me[ei];it.update(vl,fn),it.bind(vl,fn)}}return fn}function Zh(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function $h(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(y,I,W){const z=k.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),k.get(y.texture).__webglTexture=I,k.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){const W=k.get(y);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,W=0){st=y,Y=I,K=W;let z=null,H=!1,mt=!1;if(y){const pt=k.get(y);if(pt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,pt.__webglFramebuffer),q.copy(y.viewport),gt.copy(y.scissor),rt=y.scissorTest,_.viewport(q),_.scissor(gt),_.setScissorTest(rt),Z=-1;return}else if(pt.__webglFramebuffer===void 0)$.setupRenderTarget(y);else if(pt.__hasExternalTextures)$.rebindTextures(y,k.get(y.texture).__webglTexture,k.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Gt=y.depthTexture;if(pt.__boundDepthTexture!==Gt){if(Gt!==null&&k.has(Gt)&&(y.width!==Gt.image.width||y.height!==Gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(y)}}const bt=y.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(mt=!0);const At=k.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(At[I])?z=At[I][W]:z=At[I],H=!0):y.samples>0&&$.useMultisampledRTT(y)===!1?z=k.get(y).__webglMultisampledFramebuffer:Array.isArray(At)?z=At[W]:z=At,q.copy(y.viewport),gt.copy(y.scissor),rt=y.scissorTest}else q.copy(Mt).multiplyScalar(tt).floor(),gt.copy(Wt).multiplyScalar(tt).floor(),rt=Ie;if(W!==0&&(z=B),_.bindFramebuffer(N.FRAMEBUFFER,z)&&_.drawBuffers(y,z),_.viewport(q),_.scissor(gt),_.setScissorTest(rt),H){const pt=k.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,pt.__webglTexture,W)}else if(mt){const pt=I;for(let bt=0;bt<y.textures.length;bt++){const At=k.get(y.textures[bt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+bt,At.__webglTexture,W,pt)}}else if(y!==null&&W!==0){const pt=k.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pt.__webglTexture,W)}Z=-1};function xl(y){const I=k.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=w.textureFormatReadable(y.format),I.__typeReadable=w.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,W,z,H,mt,St,pt=0){if(!(y&&y.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=k.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(bt=bt[St]),bt){_.bindFramebuffer(N.FRAMEBUFFER,bt);try{const At=y.textures[pt],Gt=At.format,Yt=At.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pt);const Et=xl(At);if(Et.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Et.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-z&&W>=0&&W<=y.height-H&&N.readPixels(I,W,z,H,ut.convert(Gt),ut.convert(Yt),mt)}finally{const At=st!==null?k.get(st).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(y,I,W,z,H,mt,St,pt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=k.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(bt=bt[St]),bt)if(I>=0&&I<=y.width-z&&W>=0&&W<=y.height-H){_.bindFramebuffer(N.FRAMEBUFFER,bt);const At=y.textures[pt],Gt=At.format,Yt=At.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pt);const Et=xl(At);if(Et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,se),N.bufferData(N.PIXEL_PACK_BUFFER,mt.byteLength,N.STREAM_READ),N.readPixels(I,W,z,H,ut.convert(Gt),ut.convert(Yt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Pe=st!==null?k.get(st).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Pe);const _e=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Uu(N,_e,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,se),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,mt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(se),N.deleteSync(_e),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,W=0){const z=Math.pow(2,-W),H=Math.floor(y.image.width*z),mt=Math.floor(y.image.height*z),St=I!==null?I.x:0,pt=I!==null?I.y:0;$.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,St,pt,H,mt),_.unbindTexture()},this.copyTextureToTexture=function(y,I,W=null,z=null,H=0,mt=0){let St,pt,bt,At,Gt,Yt,Et,se,Pe;const _e=y.isCompressedTexture?y.mipmaps[mt]:y.image;if(W!==null)St=W.max.x-W.min.x,pt=W.max.y-W.min.y,bt=W.isBox3?W.max.z-W.min.z:1,At=W.min.x,Gt=W.min.y,Yt=W.isBox3?W.min.z:0;else{const Ae=Math.pow(2,-H);St=Math.floor(_e.width*Ae),pt=Math.floor(_e.height*Ae),y.isDataArrayTexture?bt=_e.depth:y.isData3DTexture?bt=Math.floor(_e.depth*Ae):bt=1,At=0,Gt=0,Yt=0}z!==null?(Et=z.x,se=z.y,Pe=z.z):(Et=0,se=0,Pe=0);const fe=ut.convert(I.format),qe=ut.convert(I.type);let vt;I.isData3DTexture?($.setTexture3D(I,0),vt=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?($.setTexture2DArray(I,0),vt=N.TEXTURE_2D_ARRAY):($.setTexture2D(I,0),vt=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const $e=_.getParameter(N.UNPACK_ROW_LENGTH),Jt=_.getParameter(N.UNPACK_IMAGE_HEIGHT),fn=_.getParameter(N.UNPACK_SKIP_PIXELS),Rn=_.getParameter(N.UNPACK_SKIP_ROWS),jn=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,_e.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_e.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,At),_.pixelStorei(N.UNPACK_SKIP_ROWS,Gt),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Yt);const Ci=y.isDataArrayTexture||y.isData3DTexture,ce=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const Ae=k.get(y),ti=k.get(I),me=k.get(Ae.__renderTarget),ei=k.get(ti.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,me.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let Pi=0;Pi<bt;Pi++)Ci&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,k.get(y).__webglTexture,H,Yt+Pi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,k.get(I).__webglTexture,mt,Pe+Pi)),N.blitFramebuffer(At,Gt,St,pt,Et,se,St,pt,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||k.has(y)){const Ae=k.get(y),ti=k.get(I);_.bindFramebuffer(N.READ_FRAMEBUFFER,L),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,G);for(let me=0;me<bt;me++)Ci?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.__webglTexture,H,Yt+me):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ae.__webglTexture,H),ce?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ti.__webglTexture,mt,Pe+me):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ti.__webglTexture,mt),H!==0?N.blitFramebuffer(At,Gt,St,pt,Et,se,St,pt,N.COLOR_BUFFER_BIT,N.NEAREST):ce?N.copyTexSubImage3D(vt,mt,Et,se,Pe+me,At,Gt,St,pt):N.copyTexSubImage2D(vt,mt,Et,se,At,Gt,St,pt);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ce?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(vt,mt,Et,se,Pe,St,pt,bt,fe,qe,_e.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(vt,mt,Et,se,Pe,St,pt,bt,fe,_e.data):N.texSubImage3D(vt,mt,Et,se,Pe,St,pt,bt,fe,qe,_e):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,mt,Et,se,St,pt,fe,qe,_e.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,mt,Et,se,_e.width,_e.height,fe,_e.data):N.texSubImage2D(N.TEXTURE_2D,mt,Et,se,St,pt,fe,qe,_e);_.pixelStorei(N.UNPACK_ROW_LENGTH,$e),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Jt),_.pixelStorei(N.UNPACK_SKIP_PIXELS,fn),_.pixelStorei(N.UNPACK_SKIP_ROWS,Rn),_.pixelStorei(N.UNPACK_SKIP_IMAGES,jn),mt===0&&I.generateMipmaps&&N.generateMipmap(vt),_.unbindTexture()},this.initRenderTarget=function(y){k.get(y).__webglFramebuffer===void 0&&$.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?$.setTextureCube(y,0):y.isData3DTexture?$.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?$.setTexture2DArray(y,0):$.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){Y=0,K=0,st=null,_.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}const Ve=Math.PI*2,Ge=Math.PI/2,Un=(i,t,e)=>i<t?t:i>e?e:i,Ri=i=>i<0?0:i>1?1:i,xe=(i,t,e)=>i+(t-i)*e,et=(i,t,e)=>Ri((i-t)/(e-t)),Qt=i=>1-(1-Ri(i))**3,Nh=i=>Ri(i)**2.2,Te=i=>{const t=Ri(i);return t<.5?4*t*t*t:1-(2-2*t)**3/2},He=i=>Math.sin(Math.PI*Ri(i)),di=i=>{const t=Ri(i)-1;return 1+2.9*t*t*t+1.9*t*t},ye=(i,t=0)=>{const e=Math.sin(i*127.1+t*311.7+.5)*43758.5453;return e-Math.floor(e)},Dt=Jh,Ki=900,_c=830,Xn=4,yg=i=>({id:i,action:"reload",target:-1,attack:null,shot:null,bundle:null,releases:!1,died:!1,diesBy:null,killer:-1,brokeShield:!1,ammoBefore:0,ammoAfter:0,won:!1}),bg=[0,1,2,3].map(yg),Fh=[],ee={ta:-1,t:-1,side:!1,freezeK:0,freezeU:0,frozenMs:0,active:!1,facts:[null,null,null,null],attacks:Fh,pairA:-1,pairB:-1},Ho=i=>i.result==="clash"||i.result==="destroyed";function Eg(i,t){let e=null,n=null;for(const s of i)if(s.result==="hit"&&t[s.target]?.died){if(s.attacker===0||s.target===0)return s;e??=s}else Ho(s)&&(n??=s);return e??n}function Tg(i,t){if(Ho(i))return Dt.meet+25;for(const e of t)if(e.attacker===i.target&&e.target===i.attacker&&Ho(e))return Dt.meet+25;return Dt.impact-45}function Ag(i){const t=i.reveal;ee.side=!1,ee.freezeK=0,ee.freezeU=0,ee.frozenMs=0,ee.pairA=-1,ee.pairB=-1;for(let s=0;s<Xn;s++)ee.facts[s]=null;if(!t||i.phase!=="revealing"&&i.phase!=="result")return ee.ta=-1,ee.t=-1,ee.active=!1,ee.attacks=Fh,ee;ee.active=!0,ee.attacks=t.attacks;let e=0;for(const s of t.actors){const r=bg[s.id];if(!r)continue;let a=null,o=!1;for(const l of t.attacks)l.attacker===s.id&&(a=l),l.target===s.id&&l.result==="hit"&&l.kind==="super"&&(o=!0);const c=s.action;r.action=c,r.target=s.target??-1,r.attack=a,r.shot=c==="shoot"&&a?a.result:c==="shoot"?"hit":null,r.bundle=c==="super"?a?.result==="clash"?"clash":a?.result==="destroyed"?"intercepted":"hit":null,r.releases=c==="super"&&r.bundle!=="intercepted",r.died=s.died,r.diesBy=s.died?o?"blast":"bullet":null,r.killer=s.killedBy[0]??-1,r.brokeShield=a?.brokeShield??!1,r.ammoBefore=s.ammoBefore,r.ammoAfter=s.ammoAfter,r.won=!1,ee.facts[s.id]=r,s.died||e++}if(e===1&&t.actors.length>1)for(const s of ee.facts)s&&!s.died&&(s.won=!0);ee.t=Math.max(0,t.t),ee.ta=ee.t;const n=Eg(t.attacks,ee.facts);if(n&&(ee.pairA=n.target===0?0:n.attacker,ee.pairB=n.target===0?n.attacker:n.target),t.cinematic&&n){const s=Tg(n,t.attacks),r=ee.t-s;r>=0&&r<Ki?(ee.ta=s,ee.side=r<_c,ee.freezeK=Math.min(et(r,0,90),1-et(r,Ki-140,Ki)),ee.freezeU=Te(et(r,0,_c)),ee.frozenMs=r):r>=Ki&&(ee.ta=ee.t-Ki,ee.frozenMs=Ki)}return ee}function wg(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Re;let l=0;for(let f=0;f<i.length;++f){const u=i[f];let h=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,f),l+=d}}if(e){let f=0;const u=[];for(let h=0;h<i.length;++h){const d=i[h].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+f);f+=i[h].attributes.position.count}c.setIndex(u)}for(const f in r){const u=xc(r[f]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;c.setAttribute(f,u)}for(const f in a){const u=a[f][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[f]=[];for(let h=0;h<u;++h){const d=[];for(let M=0;M<a[f].length;++M)d.push(a[f][M][h]);const g=xc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;c.morphAttributes[f].push(g)}}}return c}function xc(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const f=i[l];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*e}const a=new t(r),o=new _n(a,e,n);let c=0;for(let l=0;l<i.length;++l){const f=i[l];if(f.isInterleavedBufferAttribute){const u=c/e;for(let h=0,d=f.count;h<d;h++)for(let g=0;g<e;g++){const M=f.getComponent(h,g);o.setComponent(h+u,g,M)}}else a.set(f.array,c);c+=f.count*e}return s!==void 0&&(o.gpuType=s),o}const yt={rojo:14168618,negro:1381138,crema:15721679,arena:13215615},Tn={rojoOscuro:8133912,arenaOscura:9071177,carbon:3879985},Rg=new Map([[11890794,yt.rojo],[13868390,yt.arena],[14856826,yt.crema],[12947292,Tn.arenaOscura],[10122582,Tn.arenaOscura],[3811877,yt.negro],[5322826,yt.negro],[7311183,yt.negro],[10250823,yt.negro],[7293491,yt.arena],[12159582,yt.arena],[8016440,yt.negro],[9398866,Tn.rojoOscuro],[6243380,yt.negro],[6177072,yt.negro],[9068094,yt.arena],[7227957,yt.arena],[4863014,yt.negro],[10250816,yt.rojo],[8016178,Tn.arenaOscura],[4866104,yt.negro],[9067062,Tn.arenaOscura],[12618325,yt.rojo],[10200240,yt.crema],[15187084,yt.arena],[3876377,yt.negro],[7226407,yt.negro],[14921803,yt.crema],[5133148,yt.negro],[9082275,Tn.carbon],[9198131,Tn.rojoOscuro],[15918022,yt.crema],[2761504,yt.negro],[12935226,yt.rojo],[15784368,yt.crema],[15184711,yt.negro],[14263361,yt.rojo],[3811872,yt.negro]]),Cg=[16758087,4184304,16777215,16727499],Pg=new Set([...Object.values(yt),...Object.values(Tn),...Cg]),Lg=[...Object.values(yt),...Object.values(Tn)];function Ig(i){if(Pg.has(i))return i;const t=Rg.get(i);if(t!==void 0)return t;const e=i>>16&255,n=i>>8&255,s=i&255;let r=yt.arena,a=1/0;for(const o of Lg){const c=e-(o>>16&255),l=n-(o>>8&255),f=s-(o&255),u=2*c*c+4*l*l+3*f*f;u<a&&(a=u,r=o)}return r}function Dg(){const i=Array.from({length:20},(n,s)=>s<10?0:s<12?110:255),t=new Uint8Array(i.length*4);i.forEach((n,s)=>t.set([n,n,n,255],s*4));const e=new il(t,i.length,1,un);return e.minFilter=Ue,e.magFilter=Ue,e.generateMipmaps=!1,e.needsUpdate=!0,e}const gr={reload:"#FFB547",protect:"#3FD8F0",shoot:"#FFFFFF",super:"#FF3DCB"},ge={reload:16758087,protect:4184304,shoot:16777215,super:16727499},vc="#232932";class Ug{constructor(t="toy"){this.style=t}style;geos=new Map;owned=[];graded=[];ramp=null;gradeColor(t){const e=t.clone(),n=e.r*.2126+e.g*.7152+e.b*.0722;this.graded.push({color:t,base:e,grey:new wt(n,n,n)})}track(t){return this.owned.push(t),t}material(t,e){return this.track(t),e&&this.gradeColor(t.color),t}lambert(t,e={}){return this.style==="polvo"?this.toon(t,e.emissive):this.material(new gf({color:t,flatShading:!0,...e}),!0)}phong(t,e={}){return this.style==="polvo"?this.toon(t,e.emissive):this.material(new pf({color:t,flatShading:!0,shininess:8,specular:2234900,...e}),!0)}toon(t,e){this.ramp||(this.ramp=this.track(Dg()));const n=new mf({color:Ig(t),gradientMap:this.ramp});return e!==void 0&&n.emissive.set(e),this.material(n,!0)}basic(t,e={},n=!1){return this.material(new nl({color:t,...e}),n)}sprite(t,e={}){return this.material(new _h({map:t,transparent:!0,depthWrite:!1,...e}),!1)}points(t){return this.material(new Mh(t),!0)}shader(t){return this.track(new xn(t))}geo(t,e){const n=this.geos.get(t);if(n)return n;const s=e();return this.geos.set(t,s),s}box(t,e,n){return this.geo(`b${t},${e},${n}`,()=>new fs(t,e,n))}cyl(t,e,n,s=8){return this.geo(`c${t},${e},${n},${s}`,()=>new qr(t,e,n,s))}sph(t,e=8,n=6){return this.geo(`s${t},${e},${n}`,()=>new zs(t,e,n))}plane(){return this.geo("plane",()=>new fi(1,1))}canvasTex(t,e,n){const s=document.createElement("canvas");s.width=t,s.height=e;const r=s.getContext("2d");r&&n(r,t,e);const a=new of(s);return a.colorSpace=en,a.generateMipmaps=!0,a.minFilter=hi,this.track(a)}own(t){return this.track(t)}grade(t,e){const n=1-t;for(const s of this.graded)s.color.copy(s.base).lerp(s.grey,n).multiply(e)}dispose(){for(const t of this.geos.values())t.dispose();this.geos.clear();for(const t of this.owned)t.dispose();this.owned.length=0,this.graded.length=0,this.ramp=null}}function Oh(i,t){t.updateMatrixWorld(!0);const e=new le().copy(t.matrixWorld).invert(),n=new Map,s=new le;t.traverse(a=>{if(!(a instanceof We)||a.userData.keep)return;const o=a.material,c=`${o.uuid}|${a.castShadow?1:0}${a.receiveShadow?1:0}`;let l=n.get(c);l||(l={mat:o,cast:a.castShadow,receive:a.receiveShadow,parts:[]},n.set(c,l));const f=a.geometry,u=f.index?f.toNonIndexed():f.clone();u.applyMatrix4(s.multiplyMatrices(e,a.matrixWorld)),l.parts.push(u)});const r=[];t.traverse(a=>{a instanceof We&&a.userData.keep&&r.push(a)}),t.clear();for(const a of n.values()){const o=wg(a.parts,!1);for(const l of a.parts)l.dispose();if(!o)continue;i.own(o);const c=new We(o,a.mat);c.castShadow=a.cast,c.receiveShadow=a.receive,c.matrixAutoUpdate=!1,t.add(c)}for(const a of r)s.multiplyMatrices(e,a.matrixWorld).decompose(a.position,a.quaternion,a.scale),t.add(a)}function nt(i,t,e,n=0,s=0,r=0){const a=new We(i,t);return a.position.set(n,s,r),e.add(a),a}function kt(i,t=0,e=0,n=0){const s=new ns;return s.position.set(t,e,n),i.add(s),s}const nn=3.9,Bh=.12,cl=.3,_r=2*nn+cl,ln=1.22,cn=1,xr=.3,Yn=.37,Mc=[-.72,0,.72],Go=[-1.24,-.52,.2],zh=[-.7,0,.7],Da=.52,qn=.34,ls=.3,yi=.08,ss=-.32,Ua=15*Math.PI/180,Ng=5*Math.PI/180,Fg=16,Og=150,Sc=[0,0,1.55,2.1],Bg=.45;function Zi(i,t){if(t===1)return{x:0,z:-nn,rotY:-Math.PI/2};const e=Bh,n=nn+cl,s=Math.asin(i/_r),r=e+_r*Math.sin(s),a=n-_r*Math.cos(s);if(i===0)return{x:r,z:a,rotY:-Math.PI/2};const o=e-r,c=n-_r*Bg-a;return{x:r,z:a,rotY:Math.atan2(-c,o)}}const zg=[[],[Zi(0,1)],[Zi(-1.55,2),Zi(Sc[2],2)],[Zi(-2.1,3),Zi(0,3),Zi(Sc[3],3)]],$i=i=>Object.freeze(i),Me={crouch:$i({py:.42,px:.2,lean:.3,nod:0,fl:.5,fr:.1,kr:yi,g0:.05,g1:1.55,g2:.15,o0:-.12,o1:1.5}),duck:$i({py:.24,px:-.32,lean:1.12,nod:.45,fl:.32,fr:-.2,kr:yi,g0:.3,g1:.55,g2:2,o0:-.15,o1:.8}),kneel:$i({py:.6,px:.15,lean:.05,nod:.05,fl:.3,fr:-.15,kr:.07,g0:-.55,g1:2.05,g2:.15,o0:-.6,o1:1.75}),lean:$i({py:.64,px:.32,lean:.42,nod:0,fl:.5,fr:0,kr:yi,g0:.08,g1:Ge,g2:0,o0:-.3,o1:1}),stand:$i({py:.72,px:.1,lean:0,nod:0,fl:.28,fr:.06,kr:yi,g0:-.15,g1:.25,g2:0,o0:.1,o1:.12}),victor:$i({py:.72,px:.15,lean:.02,nod:0,fl:.3,fr:.04,kr:yi,g0:.05,g1:.6,g2:.2,o0:.15,o1:.2})},Hg=["py","px","lean","nod","fl","fr","kr","g0","g1","g2","o0","o1"];function En(i,t,e,n){for(const s of Hg)i[s]=t[s]+(e[s]-t[s])*n;return i}const Hh=()=>({...Me.crouch}),Vo=(i,t,e)=>new wt(i).lerp(new wt(t),e).getHex(),yc=i=>{const t=es[i];return Vo(t.body,t.dark,.45)},Gg=[{shirt:14271650,sleeve:12935226,pants:6044458,hat:4926749,band:15184711,vest:null,hatStyle:"sombrero"},{shirt:15392712,sleeve:15392712,pants:4739132,hat:3814692,band:Vo(es[1].light,es[1].body,.3),vest:yc(1),hatStyle:"bowler"},{shirt:15392712,sleeve:15392712,pants:3753559,hat:2831684,band:10466508,vest:4614543,hatStyle:"cattleman"},{shirt:15392712,sleeve:15392712,pants:4537170,hat:2893107,band:Vo(es[3].light,es[3].body,.3),vest:yc(3),hatStyle:"gambler"}],Vg=[{shirt:yt.crema,sleeve:yt.rojo,pants:yt.negro,hat:yt.arena,band:yt.negro,vest:null,hatStyle:"sombrero"},{shirt:yt.crema,sleeve:yt.crema,pants:Tn.arenaOscura,hat:yt.negro,band:yt.rojo,vest:yt.negro,hatStyle:"bowler"},{shirt:yt.crema,sleeve:yt.crema,pants:yt.negro,hat:yt.negro,band:yt.arena,vest:yt.arena,hatStyle:"cattleman"},{shirt:yt.rojo,sleeve:yt.rojo,pants:yt.negro,hat:yt.negro,band:yt.crema,vest:yt.crema,hatStyle:"gambler"}],Gh=i=>i==="polvo"?Vg:Gg,ko=(i,t="toy")=>Gh(t)[(i%4+4)%4],kg=(i,t="toy")=>ko(i,t).vest??ko(i,t).sleeve,bc=new WeakMap;function on(i,t){let e=bc.get(i);e||bc.set(i,e=new Map);let n=e.get(t);return n||e.set(t,n=i.phong(t)),n}const Ec=new R(Math.cos(-.33)*.06,0,Math.sin(-.33)*.06),Wg=new vn().setFromAxisAngle(new R(1,0,0),Math.PI),Mi=Hh();class Xg{constructor(t,e,n){this.kit=t,this.post=e;const s=ps(t);this.root=kt(e),this.legMeshes=[],this.knees=[],this.legs=[-.15,.15].map(f=>{const u=kt(this.root,0,.72,f),h=kt(u,0,-qn,0),d=kt(h,0,-ls,0);this.legMeshes.push(nt(t.cyl(.11,.1,qn+.04,7),s.wood,u,0,-qn/2,0));const g=nt(t.sph(.1,7,5),s.wood,h);return this.knees.push(g),this.legMeshes.push(g),this.legMeshes.push(nt(t.cyl(.1,.09,ls,7),s.wood,h,0,-ls/2,0)),nt(t.box(.36,.15,.18),s.boot,d,.05,-.005,0),{hip:u,knee:h,foot:d,z:f}});const r=this.body=kt(this.root,0,.72,0);nt(t.cyl(.34,.34,.17,12),s.leather,r,0,.06,0),this.buckle=nt(t.box(.07,.13,.16),s.brass,r,.34,.06,0),nt(t.box(.15,.32,.12),s.leather,r,0,-.16,.37),this.holstered=nt(t.box(.08,.17,.07),s.grip,r,-.03,.06,.38),this.shirt=nt(t.cyl(.45,.31,.64,6),s.wood,r,0,.44,0),this.poncho=kt(r),nt(t.cyl(.17,.68,.6,8),on(t,12935226),this.poncho,0,.48,0),nt(t.cyl(.53,.59,.07,8),on(t,15784368),this.poncho,0,.335,0),nt(t.cyl(.395,.435,.05,8),on(t,15184711),this.poncho,0,.505,0),this.vest=kt(r),this.vestCloth=nt(t.cyl(.47,.34,.6,6),s.wood,this.vest,0,.45,0),this.vestShirt=nt(t.box(.05,.56,.16),s.wood,this.vest,.4,.45,0),nt(t.cyl(.09,.09,.03,5),s.brass,this.vest,.3,.58,.3).rotation.set(Ge,0,-.9),nt(t.cyl(.2,.08,.16,6),on(t,14263361),this.vest,.08,.76,0);const a=this.head=kt(r,0,1.02,0);nt(t.sph(.26,9,7),s.wood,a),this.nose=nt(t.sph(.075,6,5),s.wood,a,.25,-.02,0),this.eyes=[-.1,.1].map(f=>nt(t.box(.05,.085,.045),s.eye,a,.225,.065,f)),this.xEyes=kt(a);for(const f of[-.1,.1])for(const u of[-1,1])nt(t.box(.04,.17,.045),s.eye,this.xEyes,.24,.06,f).rotation.x=u*.79;this.moustache=nt(t.box(.07,.06,.28),on(t,3811872),a,.24,-.1,0),this.hat=kt(a,0,.16,0),this.looseHat=kt(e),this.looseHat.visible=!1,this.hats=[],this.looseHats=[];const o=Gh(t.style);for(let f=0;f<o.length;f++)this.hats.push(Tc(t,kt(this.hat),o[f])),this.looseHats.push(Tc(t,kt(this.looseHat),o[f]));this.sleeves=[];const c=f=>{const u=kt(kt(r,-.04,.68,f)),h=kt(u),d=kt(h,0,-Da,0);return this.sleeves.push(nt(t.cyl(.085,.075,Da,6),s.wood,h,0,-Da/2,0)),nt(t.sph(.105,7,6),s.wood,d),{yaw:u,pitch:h,hand:d}};this.gunArm=c(.36),this.offArm=c(-.36);const l=this.gun=kt(this.gunArm.hand);nt(t.box(.17,.09,.07),s.grip,l,-.07,.03,0).rotation.z=-.3,nt(t.box(.1,.15,.075),s.gunmetal,l,.03,-.07,0),this.crane=kt(l,0,-.14,0),this.drum=kt(this.crane,.08,0,0),nt(t.cyl(.03,.03,.17,6),s.gunmetal,this.drum);for(let f=0;f<3;f++){const u=-.33+f*Ve/3,h=Math.cos(u)*.06,d=Math.sin(u)*.06;nt(t.cyl(.064,.064,.16,8),s.steel,this.drum,h,0,d),nt(t.cyl(.032,.032,.012,8),s.hole,this.drum,h,.081,d)}nt(t.cyl(.042,.048,.44,8),s.gunmetal,l,.09,-.42,0),nt(t.box(.05,.05,.03),s.gunmetal,l,.13,-.6,0),this.muzzle=kt(l,.09,-.66,0),this.cart=kt(this.drum),Vh(t,this.cart),this.cart.visible=!1,this.root.traverse(f=>{f instanceof We&&(f.castShadow=!0)}),this.cart.traverse(f=>f.castShadow=!1);for(const f of[...this.eyes,this.moustache,this.buckle,this.nose,...this.knees])f.castShadow=!1;for(const f of[this.xEyes,this.gun,this.vest])f.traverse(u=>u.castShadow=!1);this.vestCloth.castShadow=!0,this.hat.traverse(f=>{f.userData.band&&(f.castShadow=!1)}),this.setLook(n)}kit;post;root;legs;body;head;hat;looseHat;eyes;xEyes;gunArm;offArm;gun;holstered;crane;drum;muzzle;cart;lean=0;look=-1;legMeshes;sleeves;shirt;poncho;vest;vestCloth;vestShirt;moustache;hats;knees;buckle;nose;looseHats;setLook(t){const e=(t%4+4)%4;if(e===this.look)return;this.look=e;const n=this.kit,s=ko(e,n.style);this.poncho.visible=s.vest===null,this.vest.visible=s.vest!==null,this.moustache.visible=s.vest!==null,s.vest!==null&&(this.vestCloth.material=on(n,s.vest)),this.vestShirt.material=on(n,s.shirt),this.shirt.material=on(n,s.shirt);for(const r of this.sleeves)r.material=on(n,s.sleeve);for(const r of this.legMeshes)r.material=on(n,s.pants);this.hats.forEach((r,a)=>r.visible=a===e),this.looseHats.forEach((r,a)=>r.visible=a===e)}rest(t){this.root.position.set(0,0,0),this.root.quaternion.identity(),this.root.visible=!0;for(const e of this.eyes)e.visible=!0,e.scale.set(1,1,1);this.xEyes.visible=!1,this.hat.visible=!0,this.hat.position.set(0,.16,0),this.hat.rotation.set(0,0,0),this.looseHat.visible=!1,this.gun.visible=!0,this.holstered.visible=!1,this.crane.rotation.set(0,0,0),this.drum.rotation.set(0,0,0),this.drum.position.x=.08,this.drum.scale.setScalar(1),this.cart.visible=!1,this.head.rotation.set(0,0,0),this.breath=t,this.apply(Me.crouch)}breath=0;apply(t){this.body.position.set(t.px,t.py+this.breath,0),this.body.rotation.set(0,0,-t.lean),this.head.rotation.set(0,0,t.lean*.8-t.nod),Rc(this.legs[0],t.px,t.py,t.fl,yi),Rc(this.legs[1],t.px,t.py,t.fr,t.kr),this.setArm(this.gunArm,t.g0,t.g1,t.lean),this.gun.rotation.set(0,0,t.g2),this.setArm(this.offArm,t.o0,t.o1,t.lean),this.lean=t.lean}setArm(t,e,n,s=this.lean){t.yaw.rotation.y=e,t.pitch.rotation.z=n+s}reload(t,e){const n=Qt(et(t,200,500))*(1-Te(et(t,1e3,1100)))*(1-e);if(this.crane.rotation.y=-1.9*n,this.drum.position.x=.08+.15*n,this.drum.scale.setScalar(1+1.1*n),this.drum.rotation.y=Qt(et(t,1050,1400))*Ve*1.5,this.gunArm.pitch.rotation.z+=.22*He(et(t,1050,1350)),this.offArm.pitch.rotation.z+=.3*He(et(t,380,980)),t>=420&&t<980){const s=Te(et(t,600,950));this.cart.visible=!0,this.cart.position.set(Ec.x,xe(.42,.02,s),Ec.z),this.cart.quaternion.copy(Wg),this.cart.scale.setScalar(.62*di(et(t,420,560)))}}superArm(t,e,n,s,r){const a=xe(xe(xe(xe(.3,-.7,t),-2.45,e),-4.15,n*n),-4.85,s);this.setArm(this.gunArm,-.18,xe(a,1.2-Ve,r)),this.body.rotation.z+=(.12*e*(1-n)-.12*n*(1-s))*(1-r)}knockOut(t,e,n,s,r){const a=Qt(et(t,0,n?.7:.55)),o=et(t,0,n?.65:.5);En(Mi,e,Me.stand,Qt(et(t,0,.16))),s.feet!==null&&(Mi.fl=xe(Mi.fl,s.feet,a),Mi.fr=xe(Mi.fr,s.feet,a),Mi.kr=yi),this.apply(Mi),this.setArm(this.gunArm,-.7*a,xe(.8,s.arms,a),0),this.setArm(this.offArm,.7*a,xe(1.2,s.arms,a),0);const c=(n?1.5:.75)*He(o);this.root.position.set(s.pos.x*Te(et(t,.05,n?.7:.6)),xe(0,s.pos.y,o)+c,s.pos.z*a),this.root.quaternion.identity().slerp(s.lie,Te(o**.8)),this.head.rotation.set(0,s.headY*a,s.headZ*a);for(const f of this.eyes)f.visible=!1;this.xEyes.visible=!0,this.gun.visible=a<.5,this.holstered.visible=!1,this.crane.rotation.set(0,0,0),this.drum.scale.setScalar(1),this.cart.visible=!1,this.hat.visible=!1;const l=et(t,0,1.05);this.looseHat.visible=!0,this.looseHat.position.lerpVectors(r,s.hat,Qt(l)),this.looseHat.position.y=xe(r.y,s.hat.y,l)+1.8*4*l*(1-l),this.looseHat.rotation.set(l*Ve,l*Ve*2.2,.3*He(l))}tipHat(t){this.hat.rotation.z=-.3*t,this.hat.position.y+=.05*t,this.head.rotation.z-=.1*t}}function Tc(i,t,e){const n=on(i,e.hat),s=on(i,e.band);switch(e.hatStyle){case"sombrero":nt(i.cyl(.7,.7,.05,18),n,t),nt(i.geo("brimRoll",()=>new Os(.69,.04,5,22)),n,t,0,.03,0).rotation.x=Ge,nt(i.cyl(.24,.27,.3,10),n,t,0,.17,0),nt(i.cyl(.275,.275,.07,10),s,t,0,.06,0).userData.band=!0;break;case"cattleman":nt(i.cyl(.47,.47,.05,14),n,t).scale.set(1.1,1,.8);for(const r of[-1,1])nt(i.box(.62,.04,.14),n,t,0,.06,r*.4).rotation.x=r*.7;nt(i.cyl(.17,.25,.54,8),n,t,0,.29,0),nt(i.cyl(.255,.255,.07,8),s,t,0,.07,0).userData.band=!0;break;case"bowler":{nt(i.cyl(.4,.4,.04,14),n,t).scale.set(1.05,1,.92),nt(i.geo("bowlerRoll",()=>new Os(.39,.035,5,18)),n,t,0,.03,0).rotation.x=Ge,nt(i.cyl(.29,.29,.12,12),n,t,0,.08,0),nt(i.geo("bowlerDome",()=>new zs(.29,12,6,0,Math.PI*2,0,Math.PI/2)),n,t,0,.14,0),nt(i.cyl(.295,.295,.06,12),s,t,0,.06,0).userData.band=!0;break}case"gambler":nt(i.cyl(.62,.62,.05,16),n,t),nt(i.cyl(.25,.27,.24,12),n,t,0,.14,0),nt(i.cyl(.275,.275,.08,12),s,t,0,.07,0).userData.band=!0;break}return t}function Ac(i,t,e){const n=new R(.97,0,-.2).normalize(),s=new vn().setFromRotationMatrix(new le().makeBasis(new R(0,1,0),n,new R(n.z,0,-n.x)));return{pos:new R(-1.55,.34,t),lie:s,hat:e,headY:.25,headZ:1.05,arms:2.6,feet:null}}function wc(i,t,e){const n=new vn().setFromRotationMatrix(new le().makeBasis(new R(0,1,0),new R(0,0,e),new R(e,0,0)));return{pos:new R(i-.05,t+.24,-1.1*e),lie:n,hat:new R(i+.55,.05,.75*e),headY:-1.05*e,headZ:.15,arms:-1.35,feet:null}}function Rc(i,t,e,n,s){const r=n-t,a=s-e,o=Un(Math.hypot(r,a),.05,qn+ls-.001),c=Math.atan2(r,-a)+Math.acos(Un((qn*qn+o*o-ls*ls)/(2*qn*o),-1,1)),l=t+qn*Math.sin(c),f=e-qn*Math.cos(c),u=Math.atan2(n-l,f-s);i.hip.position.set(t,e,i.z),i.hip.rotation.z=c,i.knee.rotation.z=u-c,i.foot.rotation.z=-u}const Cc=new WeakMap;function ps(i){let t=Cc.get(i);return t||(t={wood:i.phong(15187084),boot:i.phong(3876377),leather:i.phong(7226407),brass:i.phong(14921803,{shininess:40}),gunmetal:i.phong(5133148,{shininess:50,specular:5592405}),steel:i.phong(9082275,{shininess:50,specular:6710886}),grip:i.phong(9198131),eye:i.basic(1708816,{},!0),hole:i.basic(1380366,{},!0),ammoOn:i.basic(16758087),outline:i.basic(1708560,{side:ke}),dyn:i.phong(16727499,{emissive:6949456}),tape:i.phong(15918022),fuse:i.phong(2761504)},Cc.set(i,t)),t}function Vh(i,t){const e=ps(i),n=kt(t);return nt(i.cyl(.09,.09,.28,8),e.ammoOn,n),nt(i.sph(.09,8,5),e.ammoOn,n,0,.14,0).scale.y=1.4,nt(i.cyl(.09,.09,.28,8),e.outline,n).scale.set(1.3,1.12,1.3),n}function kh(i,t){const e=ps(i),n=kt(t);for(const[r,a]of[[.075,0],[-.04,.065],[-.04,-.065]])nt(i.cyl(.07,.07,.46,8),e.dyn,n,r,0,a);for(const r of[-.12,.12])nt(i.cyl(.16,.16,.06,10),e.tape,n,0,r,0);nt(i.cyl(.014,.014,.2,4),e.fuse,n,.02,.32,0).rotation.z=-.4;const s=kt(n,.06,.42,0);return{g:n,tip:s}}function qg(i){const t=e=>(n,s,r)=>{const a=n.createRadialGradient(s/2,r/2,0,s/2,r/2,s/2);for(const[o,c]of e)a.addColorStop(o,c);n.fillStyle=a,n.fillRect(0,0,s,r)};return{glow:i.canvasTex(64,64,t([[0,"rgba(255,255,255,1)"],[.25,"rgba(255,255,255,0.55)"],[1,"rgba(255,255,255,0)"]])),smoke:i.canvasTex(64,64,t([[0,"rgba(255,255,255,0.95)"],[.55,"rgba(255,255,255,0.6)"],[1,"rgba(255,255,255,0)"]])),vignette:i.canvasTex(256,256,t([[0,"rgba(20,10,16,0)"],[.6,"rgba(20,10,16,0)"],[1,"rgba(20,10,16,0.85)"]])),star:i.canvasTex(128,128,e=>{const n=(s,r)=>{e.beginPath();for(const[a,o]of[[0,-s],[r,-r],[s,0],[r,r],[0,s],[-r,r],[-s,0],[-r,-r]])e.lineTo(64+a,64+o);e.closePath(),e.fill()};e.fillStyle="rgba(26,18,16,0.85)",n(62,13),e.fillStyle="#ffffff",n(56,8)})}}const Yg=new R,Pc=new R(0,0,1);class Gr{pools;used={glow:0,star:0,smoke:0,blast:0,ring:0,spark:0,shard:0,splinter:0};motes;motePos;moteMat;static MOTES=90;constructor(t,e,n){const s=ps(t),r=(p,S,A)=>{const v=new os(t.sprite(p,S));return v.renderOrder=A,v.visible=!1,e.add(v),v},a=(p,S)=>Array.from({length:p},(A,v)=>S(v)),o=cs,c=t.geo("fxRing",()=>new ol(.82,1,32)),l=t.box(.022,.022,1),f=t.geo("shard",()=>new ll(.06)),u=t.box(.025,.025,.16),h=t.phong(10200240,{shininess:60,specular:6710886}),d=t.phong(12618325),g=p=>(p.visible=!1,p);this.pools={glow:a(44,()=>r(n.glow,{blending:o},7)),star:a(10,()=>r(n.star,{},8)),smoke:a(52,()=>r(n.smoke,{},6)),blast:a(8,()=>r(n.smoke,{},6)),ring:a(14,()=>{const p=g(nt(c,t.basic(16777215,{transparent:!0,side:In,depthWrite:!1}),e));return p.renderOrder=7,p}),spark:a(60,()=>{const p=g(nt(l,t.basic(16777215,{transparent:!0,depthWrite:!1}),e));return p.renderOrder=8,p}),shard:a(24,p=>g(nt(f,p%3?h:s.brass,e))),splinter:a(30,()=>g(nt(u,d,e)))};const M=Gr.MOTES;this.motePos=new Float32Array(M*3);const m=t.own(new Re);m.setAttribute("position",new _n(this.motePos,3)),this.moteMat=t.points({color:16773328,size:.035,map:n.glow,transparent:!0,depthWrite:!1,opacity:.8}),this.motes=new af(m,this.moteMat),this.motes.frustumCulled=!1,e.add(this.motes)}begin(){for(const t in this.pools){const e=t;this.used[e]=0;for(const n of this.pools[e])n.visible=!1}}take(t){const n=this.pools[t][this.used[t]++];return n?(n.visible=!0,n):null}puff(t,e,n,s,r,a=0){const o=this.take(t);if(!o)return null;if(o.position.copy(e),o.scale.setScalar(n),o instanceof os)o.material.color.setHex(s),o.material.opacity=r,o.material.rotation=a;else if(o instanceof We){const c=o.material;c.transparent&&(c.color.setHex(s),c.opacity=r)}return o}glow(t,e,n,s){return this.puff("glow",t,e,n,s)}star(t,e,n,s){this.puff("star",t,e,n,1,s)}smoke(t,e,n,s){this.puff("smoke",t,e,n,s)}blast(t,e,n,s){this.puff("blast",t,e,n,s)}streak(t,e,n,s,r){const a=this.puff("spark",Yg.copy(t).addScaledVector(e,n/2),1,s,r);a&&(a.quaternion.setFromUnitVectors(Pc,e),a.scale.set(1,1,n))}ring(t,e,n,s,r,a=!1){const o=this.puff("ring",t,n,s,r);o&&(o.quaternion.setFromUnitVectors(Pc,e),o.material.depthTest=!a)}burst(t,e,n,s,r,a,o,c=!1){if(!(n<0||n>=s))for(let l=0;l<e;l++){const f=c?.25+l/Math.max(1,e-1)*(Math.PI-.5):l/e*Ve+ye(l,3)*.5,u=Kg.set(Math.cos(f),Math.sin(f),(ye(l,5)-.5)*.6).normalize();this.streak(Zg.copy(t).addScaledVector(u,.1+n*r),u,a*(1-n/s),o[l%o.length],1)}}debris(t,e,n,s,r,a,o){if(!(s<0))for(let c=0;c<n;c++){const l=this.take(t);if(!l)return;const f=ye(c,7)*Ve,u=r*(.6+ye(c,8)*.8),h=a.x*u+Math.cos(f)*o*u,d=a.z*u+Math.sin(f)*o*u,g=a.y*u+(.8+ye(c,9))*r*.7,M=(g+Math.sqrt(g*g+19.6*Math.max(.01,e.y-.02)))/9.8,m=Math.min(s,M);l.position.set(e.x+h*m,e.y+g*m-4.9*m*m,e.z+d*m),l.rotation.set(m*11+c,m*7+c*.3,m*3)}}ambient(t,e){const n=this.motePos;for(let s=0;s<Gr.MOTES;s++){let r,a,o;if(s<40){const c=.3+ye(s,1)*1.6,l=ye(s,2)*Ve;r=Math.sin(l)*c*.9,a=1+(ye(s,3)-.3)*2.2,o=Math.cos(l)*c*1.4}else r=xe(-3,3.5,ye(s,1)),a=xe(.15,3.4,ye(s,2)),o=xe(-nn-3,nn-1.4,ye(s,3));n[s*3]=r+.22*Math.cos(t*.3+Ve*ye(s,6)),n[s*3+1]=Math.max(.05,a+.14*Math.sin(t*.5+Ve*ye(s,5))),n[s*3+2]=o+.25*Math.sin(t*.35+Ve*ye(s,4))}this.motes.geometry.attributes.position.needsUpdate=!0,this.moteMat.opacity=.55+.4*e}}const Kg=new R,Zg=new R,$g={reload:{fill:"M9.6 3h4.8v6.6H21v4.8h-6.6V21H9.6v-6.6H3V9.6h6.6z"},protect:{stroke:[["M3.5 17a8.5 8.5 0 0 1 17 0",3.4],["M8 17a4 4 0 0 1 8 0",1.8]]},shoot:{fill:"M12 1.5 19 10h-4.6v12.5H9.6V10H5z"},super:{fill:"M12 1 20 10H4zM12 11.5l8 9H4z"}},Na=()=>({show:!1,headX:0,headY:0,topY:0,headR:10,ammo:0,seat:-1,popK:-1,popFrom:0,popTo:0,badge:null,badgeMs:0,downMs:-1,gone:!1,target:0,x0:0,y0:0,x1:0,y1:0}),Ji=()=>({on:!1,from:0,to:0,hex:16777215,grow:0,alpha:0}),vr=10,Jg=["reload","protect","shoot","super"];class Qg{scene=new Br;camera=new Hs(0,1,0,-1,-10,10);marks;aims;pillX=[0,0,0];pillY=[0,0,0];pillW=50;vignette;flash;badgeTex;sockOn;sockOff;tagTex;w=1;h=1;safeTop=16;safeBottom=150;constructor(t,e,n){const s=(u,h)=>{const d=nt(t.plane(),t.basic(16777215,{map:u,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.scene);return d.renderOrder=h,d.frustumCulled=!1,d},r=t.canvasTex(240,64,u=>{Lc(u,3,3,234,58,29),u.fillStyle="rgba(17,20,26,0.74)",u.fill(),u.lineWidth=3,u.strokeStyle="rgba(255,255,255,0.10)",u.stroke()});this.sockOn=t.canvasTex(64,64,u=>{u.beginPath(),u.arc(32,32,27,0,Math.PI*2),u.fillStyle=gr.reload,u.fill(),u.lineWidth=5,u.strokeStyle="#FFE2A8",u.stroke(),u.beginPath(),u.arc(25,25,7,0,Math.PI*2),u.fillStyle="rgba(255,255,255,0.55)",u.fill()}),this.sockOff=t.canvasTex(64,64,u=>{u.beginPath(),u.arc(32,32,24,0,Math.PI*2),u.fillStyle="rgba(8,10,14,0.65)",u.fill(),u.lineWidth=6,u.strokeStyle="#8A93A0",u.stroke()}),this.tagTex=[0,1,2,3].map(u=>t.canvasTex(64,64,h=>{h.beginPath(),h.arc(32,32,28,0,Math.PI*2),h.fillStyle=es[u]?.body??"#9AA3AF",h.fill(),h.lineWidth=4,h.strokeStyle="rgba(17,20,26,0.9)",h.stroke(),h.fillStyle="#15100C",h.font='800 40px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',h.textAlign="center",h.textBaseline="middle",h.fillText(String(u+1),32,34.5)})),this.badgeTex={};for(const u of Jg)this.badgeTex[u]=t.canvasTex(128,128,h=>{h.beginPath(),h.arc(64,64,58,0,Math.PI*2),h.fillStyle=vc,h.fill(),h.lineWidth=8,h.strokeStyle=gr[u],h.stroke(),h.save(),h.translate(64-12*2.6,64-12*2.6),h.scale(2.6,2.6);const d=$g[u];h.fillStyle=h.strokeStyle=gr[u],h.lineCap="round",d.fill&&h.fill(new Path2D(d.fill));for(const[g,M]of d.stroke??[])h.lineWidth=M,h.stroke(new Path2D(g));h.restore()});const a=t.canvasTex(128,128,u=>{u.beginPath(),u.arc(64,64,58,0,Math.PI*2),u.fillStyle=vc,u.fill(),u.lineWidth=7,u.strokeStyle="#9AA3AF",u.stroke(),u.lineCap="round",((d,g)=>{u.beginPath(),u.moveTo(40,40),u.lineTo(88,88),u.moveTo(88,40),u.lineTo(40,88),u.lineWidth=d,u.strokeStyle=g,u.stroke()})(16,"#C9D0D8")});this.vignette=s(n,-2),this.flash=nt(t.plane(),t.basic(16777215,{transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.scene),this.flash.renderOrder=-1,this.flash.frustumCulled=!1;const o=t.canvasTex(240,64,u=>{Lc(u,4,4,232,56,28),u.lineWidth=7,u.strokeStyle="rgba(10,12,16,0.55)",u.stroke(),u.lineWidth=4,u.strokeStyle="#ffffff",u.stroke()}),c=t.canvasTex(64,64,u=>{const h=(d,g)=>{u.beginPath(),u.moveTo(8,56),u.lineTo(8,8),u.lineTo(56,8),u.lineWidth=d,u.lineCap="round",u.lineJoin="round",u.strokeStyle=g,u.stroke()};h(14,"rgba(10,12,16,0.55)"),h(8,"#ffffff")}),l=t.canvasTex(16,32,u=>{u.fillStyle="rgba(10,12,16,0.6)",u.fillRect(0,6,16,20),u.fillStyle="#ffffff",u.fillRect(0,11,16,10)}),f=t.canvasTex(64,64,u=>{const h=d=>{u.beginPath(),u.moveTo(60-d,32),u.lineTo(6+d*.6,6+d),u.lineTo(6+d*.6,58-d),u.closePath(),u.fill()};u.fillStyle="rgba(10,12,16,0.6)",h(0),u.fillStyle="#ffffff",h(7)});this.marks=[0,1,2].map(()=>{const u=s(e,3);return u.material.blending=cs,{brackets:[0,1,2,3].map(()=>s(c,0)),pill:s(r,1),ring:s(o,2),tag:s(this.tagTex[0],2),sockets:[0,1,2].map(()=>s(this.sockOff,2)),badgeGlow:u,badge:s(this.badgeTex.shoot,4),cross:s(a,5)}}),this.aims=[0,1,2,3,4,5].map(()=>{const u=s(l,0),h=[u];for(let d=1;d<vr;d++){const g=nt(t.plane(),u.material,this.scene);g.renderOrder=0,g.frustumCulled=!1,h.push(g)}return{segs:h,head:s(f,0),used:!1}}),this.hideAll()}hideAll(){for(const t of this.marks){t.pill.visible=t.ring.visible=t.tag.visible=t.badge.visible=t.badgeGlow.visible=t.cross.visible=!1;for(const e of t.sockets)e.visible=!1;for(const e of t.brackets)e.visible=!1}for(const t of this.aims){t.used=!1,t.head.visible=!1;for(const e of t.segs)e.visible=!1}}resize(t,e,n,s){this.w=t,this.h=e,this.safeTop=n,this.safeBottom=s,this.camera.left=0,this.camera.right=t,this.camera.top=0,this.camera.bottom=-e,this.camera.updateProjectionMatrix()}screen(t,e,n){this.put(this.vignette,this.w/2,this.h/2,this.w*1.04,this.h*1.04,0,t),this.put(this.flash,this.w/2,this.h/2,this.w,this.h,0,n),this.flash.visible=n>.001,this.flash.material.color.setHex(e)}put(t,e,n,s,r,a=0,o=1){t.visible=!0,t.position.set(e,-n,0),t.scale.set(Math.max(.001,s),Math.max(.001,r),1),t.rotation.z=a,t.material.opacity=o}update(t,e,n,s){this.hideAll();const r=Un(Math.min(this.w,this.h*.75)/390,.85,1.5)*s;for(let a=0;a<e&&a<this.marks.length;a++){const o=t[a];o?.show&&this.mark(this.marks[a],o,r,a)}for(const a of n)a.on&&this.aim(a,r)}aim(t,e){let n=null;for(const S of this.aims)if(!S.used){n=S;break}if(!n||t.alpha<=.01||t.grow<=.01)return;n.used=!0;const s=this.pillX[t.from]??0,r=this.pillX[t.to]??0,a=Math.sign(r-s)||1,o=s+a*(this.pillW/2+3*e),c=this.pillY[t.from]??0,l=r-a*(this.pillW/2+3*e),f=this.pillY[t.to]??0,u=(o+l)/2,h=Math.max(this.safeTop+2*e,Math.min(c,f)-(10*e+.28*Math.abs(l-o))),d=5*e,g=12*e;n.head.material.color.setHex(t.hex),n.segs[0].material.color.setHex(t.hex);const M=t.grow;let m=o,p=c;for(let S=1;S<=vr;S++){const A=M*S/vr,v=(1-A)*(1-A),b=2*A*(1-A),E=A*A,C=v*o+b*u+E*l,x=v*c+b*h+E*f,T=Math.hypot(C-m,x-p);if(this.put(n.segs[S-1],(m+C)/2,(p+x)/2,T+1.5*e,d,-Math.atan2(x-p,C-m),t.alpha),S===vr){const P=2*(1-M)*(u-o)+2*M*(l-u),D=2*(1-M)*(h-c)+2*M*(f-h);this.put(n.head,C,x,g,g*1.05,-Math.atan2(D,P),t.alpha)}m=C,p=x}}mark(t,e,n,s){const r=11*n,a=5.5*n,o=r+9*n,c=e.seat>=0?o-3*n:0,l=c>0?c+3*n:0,f=3*r+2*a+13*n+l,u=30*n,h=6*n,d=this.safeTop+h,g=this.h-this.safeBottom-h,M=Un(e.headX,f/2+h,this.w-f/2-h),m=Un(e.topY-o/2-6*n,d+o/2,g-o/2);if(this.pillX[s]=M,this.pillY[s]=m,this.pillW=f,e.gone){const T=o*1.15;this.put(t.cross,M,m,T,T,0,.7);return}const p=e.downMs>=0?1-.5*et(e.downMs,300,700):1;this.put(t.pill,M,m,f,o,0,p);const S=this.tagTex[e.seat];c>0&&S&&(t.tag.material.map=S,this.put(t.tag,M-f/2+1.5*n+c/2,m,c,c,0,p));const A=M+l/2;for(let T=0;T<3;T++){const P=t.sockets[T],D=T<e.ammo;P.material.map=D?this.sockOn:this.sockOff;let F=1;e.popK>=0&&T>=e.popFrom&&T<e.popTo&&(F=D?di(e.popK):1+.35*He(e.popK));const B=r*(D?1:.92)*F;this.put(P,A+(T-1)*(r+a),m,B,B,0,p)}if(e.target>.01){this.put(t.ring,M,m,f+5*n,o+5*n,0,e.target);const T=15*n,P=Math.max(e.x0,h),D=Math.min(e.x1,this.w-h),F=Math.max(e.y0,m+o/2+4*n),B=Math.min(e.y1,g);if(B-F>2*T&&D-P>2*T)for(let L=0;L<4;L++){const[G,Y,K]=jg[L];this.put(t.brackets[L],G?D-T/2:P+T/2,Y?B-T/2:F+T/2,T,T,K,.9*e.target)}}if(!e.badge)return;let v=e.headX+e.headR+u*.5+6*n;v>this.w-u/2-h&&(v=e.headX-e.headR-u*.5-6*n),v=Un(v,u/2+h,this.w-u/2-h);const b=v<e.headX,E=Un(e.headY,d+u/2+o,g-u/2),C=et(e.badgeMs,0,300),x=u*(C<1?di(C):1);if(t.badge.material.map=this.badgeTex[e.badge],this.put(t.badge,v,E,x,x),C<1){t.badgeGlow.material.color.set(gr[e.badge]);const P=u*2.6*Qt(C);this.put(t.badgeGlow,v,E,P,P,0,.85*(1-C))}if(e.downMs>=0){const T=di(et(e.downMs,220,520));if(T>.01){const P=u*.62*T;this.put(t.cross,v+u*(b?-.36:.36),E+u*.3,P,P)}}}}const jg=[[0,0,0],[1,0,-Math.PI/2],[1,1,Math.PI],[0,1,Math.PI/2]];function Lc(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const Wo=256;class t_{target;scene=new Br;camera=new Hs(-1,1,1,-1,0,1);material;geometry;paper;size=new Lt;constructor(){this.target=new gn(1,1,{samples:4,depthBuffer:!0,colorSpace:en,minFilter:we,magFilter:we,generateMipmaps:!1}),this.paper=e_(),this.geometry=new Re,this.geometry.setAttribute("position",new ne([-1,-1,0,3,-1,0,-1,3,0],3)),this.material=new xn({uniforms:{tScene:{value:this.target.texture},tPaper:{value:this.paper},uDpr:{value:1},uPoster:{value:.35},uInk:{value:new wt(yt.negro)},uPaperC:{value:new wt(yt.crema)}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = position.xy * 0.5 + 0.5;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }`,fragmentShader:`
        uniform sampler2D tScene;
        uniform sampler2D tPaper;
        uniform float uDpr;
        uniform float uPoster;
        uniform vec3 uInk;
        uniform vec3 uPaperC;
        varying vec2 vUv;
        void main() {
          // Work in display (sRGB) values: grain and posterize steps are perceptual.
          vec3 s = sRGBTransferOETF(vec4(texture2D(tScene, vUv).rgb, 1.0)).rgb;
          vec2 px = gl_FragCoord.xy / uDpr;
          vec4 p = texture2D(tPaper, px / ${Wo.toFixed(1)});
          float fib = texture2D(tPaper, px / ${(Wo*2.7).toFixed(1)} + vec2(0.37, 0.61)).g;
          // Slight posterize (ink layers, not a gradient).
          s = mix(s, floor(s * 7.0 + 0.5) / 7.0, uPoster);
          float l = dot(s, vec3(0.299, 0.587, 0.114));
          // Paper grain and fibres, stronger on the light (paper) areas.
          s *= 1.0 + (p.r - 0.5) * (0.05 + 0.06 * l) + (fib - 0.5) * 0.07;
          // Ink specks on the paper, paper specks through the ink.
          s = mix(s, sRGBTransferOETF(vec4(uInk, 1.0)).rgb, p.b * smoothstep(0.55, 0.9, l) * 0.55);
          s = mix(s, sRGBTransferOETF(vec4(uPaperC, 1.0)).rgb, p.a * (1.0 - smoothstep(0.12, 0.5, l)) * 0.4);
          gl_FragColor = sRGBTransferEOTF(vec4(clamp(s, 0.0, 1.0), 1.0));
          #include <colorspace_fragment>
        }`,depthTest:!1,depthWrite:!1});const t=new We(this.geometry,this.material);t.frustumCulled=!1,this.scene.add(t)}resize(t){const e=t.getPixelRatio()>=2?0:4;e!==this.target.samples&&(this.target.dispose(),this.target.samples=e),t.getDrawingBufferSize(this.size),this.target.setSize(Math.max(1,this.size.x),Math.max(1,this.size.y)),this.material.uniforms.uDpr.value=t.getPixelRatio()}begin(t){t.setRenderTarget(this.target),t.clear()}end(t){t.setRenderTarget(null),t.clear(),t.render(this.scene,this.camera)}dispose(){this.target.dispose(),this.paper.dispose(),this.geometry.dispose(),this.material.dispose()}}function e_(){const i=Wo;let t=2654435769;const e=()=>{t=t+1831565813|0;let u=Math.imul(t^t>>>15,1|t);return u=u+Math.imul(u^u>>>7,61|u)^u,((u^u>>>14)>>>0)/4294967296},n=12,s=20,r=Array.from({length:n*s},e),a=(u,h)=>r[(h%s+s)%s*n+(u%n+n)%n],o=u=>u*u*(3-2*u),c=new Uint8Array(i*i*4),l=(u,h,d)=>{for(let g=0;g<u;g++){const M=e()*i,m=e()*i,p=.6+e()*h,S=.55+.45*e();for(let A=Math.floor(m-p-1);A<=m+p+1;A++)for(let v=Math.floor(M-p-1);v<=M+p+1;v++){const b=Math.hypot(v+.5-M,A+.5-m),E=Math.max(0,Math.min(1,p+.5-b))*S,C=((A%i+i)%i*i+(v%i+i)%i)*4+d;c[C]=Math.max(c[C],Math.round(E*255))}}};for(let u=0;u<i;u++)for(let h=0;h<i;h++){const d=h/i*n,g=u/i*s,M=Math.floor(d),m=Math.floor(g),p=o(d-M),S=o(g-m),A=a(M,m)+(a(M+1,m)-a(M,m))*p,v=a(M,m+1)+(a(M+1,m+1)-a(M,m+1))*p,b=(u*i+h)*4;c[b]=Math.round(e()*255),c[b+1]=Math.round((A+(v-A)*S)*255)}l(150,1.1,2),l(110,1.4,3);const f=new il(c,i,i,un);return f.wrapS=f.wrapT=Pr,f.minFilter=we,f.magFilter=we,f.generateMipmaps=!1,f.needsUpdate=!0,f}const n_=new R(0,0,-1),i_=new vn().setFromAxisAngle(new R(0,1,0),Math.PI),s_=new R(0,1,0),r_=new R(0,0,1),Ic=new R,he=new R,a_=new R,o_=new R,Mr=new R,Es=new R,Sr=[new R,new R,new R,new R,new R],tn=650,Fa=[[.55,-.56,.78],[.55,-.4,.8],[.68,.08,.65],[.12,.22,.9],[.1,-1.6,.9]],Qi=.6,Dc=[1,2,0];class l_{root;rArm;lArm;arms;gun;crane;drum;chambers;muzzle;cart;dyn;fuseTip;glows;sparks;smoke;star;ammoOn;hole;glowUsed=0;sleeveMeshes=[];constructor(t,e,n){const s=ps(t);this.ammoOn=s.ammoOn,this.hole=s.hole,this.root=kt(e);const r=t.phong(12935226),a=t.phong(15784368),o=h=>{const d=kt(this.root);return d.scale.setScalar(Qi),nt(t.sph(.062,9,7),s.wood,d),d.userData={shoulder:new R(h*.3,-.95,-.2),sleeve:this.sleeve(nt(t.cyl(.07,.05,1,7),r,this.root)),cuff:nt(t.cyl(.062,.062,.05,8),a,this.root)},d};this.rArm=o(1),this.lArm=o(-1),this.arms=[this.rArm,this.lArm];const c=this.gun=kt(this.rArm,0,.05,.02);c.scale.setScalar(.8),nt(t.box(.075,.2,.1),s.grip,c,0,-.08,-.06).rotation.x=.4,nt(t.box(.08,.11,.2),s.gunmetal,c,0,.02,.07),nt(t.box(.03,.05,.05),s.gunmetal,c,0,.08,-.04).rotation.x=-.6,this.crane=kt(c,.035,-.04,.13),this.drum=kt(this.crane,-.035,.085,0),nt(t.cyl(.1,.1,.15,6),s.steel,this.drum).rotation.x=Math.PI/2,this.chambers=[0,1,2].map(h=>{const d=Math.PI/2+h*Ve/3,g=nt(t.cyl(.032,.032,.012,10),s.hole,this.drum,Math.cos(d)*.056,Math.sin(d)*.056,-.077);return g.rotation.x=Math.PI/2,g}),nt(t.cyl(.042,.048,.46,8),s.gunmetal,c,0,.05,.43).rotation.x=Math.PI/2,nt(t.box(.025,.04,.04),s.gunmetal,c,0,.09,.63),this.muzzle=kt(c,0,.05,.68),this.cart=kt(this.drum),Vh(t,this.cart).rotation.x=Math.PI/2,this.cart.scale.setScalar(.27);const l=kh(t,this.rArm);this.dyn=l.g,this.fuseTip=l.tip,this.dyn.position.set(0,.07,.06),this.dyn.rotation.set(-.25,0,.45),this.dyn.scale.setScalar(.45);const f=cs;this.glows=[0,1,2,3].map(()=>{const h=new os(t.sprite(n.glow,{blending:f,depthTest:!1}));return h.renderOrder=5,this.root.add(h),h}),this.star=new os(t.sprite(n.star,{depthTest:!1})),this.star.renderOrder=6,this.root.add(this.star),this.smoke=[0,1,2].map(()=>{const h=new os(t.sprite(n.smoke,{color:15984338}));return h.renderOrder=4,this.root.add(h),h});const u=()=>t.basic(16777215,{transparent:!0,depthWrite:!1,depthTest:!1});this.sparks=[0,1,2,3,4].map(()=>{const h=nt(t.box(.006,.006,1),u(),this.root);return h.renderOrder=6,h})}sleeve(t){return this.sleeveMeshes.push(t),t}setSleeve(t){for(const e of this.sleeveMeshes)e.material=t}aim(t,e,n){t.position.copy(e),t.quaternion.setFromUnitVectors(n_,Ic.copy(n).normalize()).multiply(i_)}glow(t,e,n,s){const r=this.glows[this.glowUsed++];r&&(r.visible=!0,r.position.copy(t),r.scale.setScalar(e),r.material.color.setHex(n),r.material.opacity=s)}sleeves(){for(const t of this.arms){const{shoulder:e,sleeve:n,cuff:s}=t.userData,r=Ic.subVectors(e,t.position),a=r.length();r.divideScalar(a),n.position.copy(t.position).addScaledVector(r,.04*Qi+a/2),n.scale.set(Qi,a,Qi),n.quaternion.setFromUnitVectors(s_,r),s.position.copy(t.position).addScaledVector(r,.06*Qi),s.quaternion.copy(n.quaternion),s.scale.setScalar(Qi)}}releaseLocal(t,e){const n=Fa[3];return t.local(n[0],n[1],n[2],e)}pose(t,e,n,s){this.root.position.copy(s),this.root.quaternion.copy(n),this.glowUsed=0;for(const h of this.glows)h.visible=!1;for(const h of this.smoke)h.visible=!1;for(const h of this.sparks)h.visible=!1;this.star.visible=!1,this.root.visible=!0,this.gun.visible=!0,this.dyn.visible=!1,this.cart.visible=!1,this.crane.rotation.set(0,0,0),this.drum.rotation.set(0,0,0),this.lArm.visible=!0;const r=t.ta,a=r<0,o=a?1:Qt(et(r,0,350)),c=o*(1-t.back),l=e.local(.55,-.56,.78,a_),f=o_.set(.06,.16,-1);this.aim(this.rArm,l,f),this.aim(this.lArm,e.local(-.62,-.66,.7,Mr),Es.set(.15,.45,-1));const u=t.loaded;switch(t.action){case"shoot":{const h=a?.85:Math.max(.25*o,Qt(et(r,120,520)))*(1-t.back),d=a?0:et(r,650,820),g=(d>0&&d<1?(1-d)*Math.min(1,d*8):0)*(1-t.back),M=e.local(.46,-.4,.8,Mr);he.lerpVectors(l,M,h),he.z+=.05*g,this.aim(this.rArm,he,Es.copy(t.aimDir).normalize().lerp(f.normalize(),1-h)),this.rArm.rotateX(-.45*g),!a&&r>=650&&this.muzzleFx(r);break}case"protect":{const h=a?.35:Math.max(.4*o,Te(et(r,0,280)))*(1-t.back);this.rArm.position.y-=.22*h,this.rArm.position.z+=.08*h,this.rArm.rotateX(.3*h),this.lArm.position.y-=.25*h;break}case"reload":{const h=a?1:Qt(et(r,120,420))*(1-Te(et(r,1e3,1100))),d=e.local(.08,-.3,.6,Mr);this.aim(this.rArm,he.lerpVectors(l,d,c),Es.set(-.25,-1.35,-1).lerp(f,1-c)),a||this.rArm.rotateX(-.25*He(et(r,1e3,1150))),this.crane.rotation.z=-1.35*h,this.drum.rotation.z=a?0:Qt(et(r,1050,1350))*Ve*1.5;const g=Dc[Math.min(2,Math.max(0,t.reloadSlot))]??0,M=this.chambers[g].position,m=a?0:Te(et(r,380,700)),p=a?0:Te(et(r,700,950)),S=!a&&r>=380&&r<950&&t.reloadSlot<3;this.cart.visible=S,S?(this.cart.position.set(M.x+.25*(1-m),M.y-.35*(1-m),xe(-.42,-.2,m)+.11*p),this.cart.rotation.set(0,0,0),this.cart.scale.setScalar(.27*Math.max(.01,di(et(r,380,480)))),this.root.updateMatrixWorld(!0),this.cart.getWorldPosition(he),this.root.worldToLocal(he),this.glow(he,.12,ge.reload,.9),this.lArm.position.copy(he).add(Mr.set(-.05,-.07,.03)),this.lArm.quaternion.copy(this.rArm.quaternion)):this.lArm.position.y-=.2*c,!a&&r>=940&&r<1300&&(this.root.updateMatrixWorld(!0),this.chambers[g].getWorldPosition(he),this.root.worldToLocal(he),this.glow(he,.2*He(et(r,940,1300)),ge.reload,.95));break}case"super":{this.gun.visible=a?!1:!(o>.35&&t.back<.6);let h;a?h=1:t.intercepted?h=Qt(et(r,0,350))+Te(et(r,350,650))*.8:h=Qt(et(r,0,350))+Te(et(r,350,590))+et(r,590,tn)**2+Qt(et(r,tn,900));for(let M=0;M<Fa.length;M++){const m=Fa[M];e.local(m[0],m[1],m[2],Sr[M])}const d=Math.min(Sr.length-2,Math.floor(h));if(he.lerpVectors(Sr[d],Sr[d+1],h-d),t.intercepted&&!a){const M=et(r,600,1200);he.x+=.006*M*Math.sin(t.sim*60),he.y+=.006*M*Math.cos(t.sim*53)}he.lerp(l,t.back),this.aim(this.rArm,he,Es.set(-.15,.6+(a?0:.4*et(r,350,600)),-1).lerp(f,t.back));const g=a||t.intercepted||r<tn;this.dyn.visible=g&&(a||r>=60)&&t.back<.5,this.dyn.scale.setScalar(.45*(a?1:di(et(r,60,300)))),this.lArm.position.y-=.18*c,this.dyn.visible&&this.fuseFx(t.sim),!a&&t.intercepted&&t.hitS>=0&&(this.dyn.visible=t.hitS<.25);break}}if(t.won>0&&(this.rArm.position.y-=.12*t.won,this.rArm.rotateX(.35*t.won)),t.hitS>=0){const h=Nh(et(t.hitS,.05,.6));for(let d=0;d<2;d++){const g=this.arms[d],M=d===0?1:-1;g.position.y-=.75*h,g.position.x+=.08*M*h,g.rotateX(1.4*h),g.rotateZ(-.6*M*h)}this.root.visible=h<.999}for(let h=0;h<3;h++)this.chambers[Dc[h]].material=h<u?this.ammoOn:this.hole;this.sleeves()}muzzleFx(t){this.root.updateMatrixWorld(!0),this.muzzle.getWorldPosition(he),this.root.worldToLocal(he);const e=et(t,650,740);e<1&&(this.star.visible=!0,this.star.position.copy(he),this.star.scale.setScalar(.22*He(e)),this.star.material.color.setHex(16774096),this.star.material.rotation=.4,this.glow(he,.34*He(e),16765562,.9));for(let n=0;n<3;n++){const s=(t-650)/1300-n*.04,r=this.smoke[n];s<=0||s>=1||(r.visible=!0,r.position.set(he.x+.02*n,he.y+.02+.12*s,he.z-.04-.14*s-n*.03),r.scale.setScalar(.05+.16*s),r.material.opacity=.55*(1-s))}}fuseFx(t){this.root.updateMatrixWorld(!0),this.fuseTip.getWorldPosition(he),this.root.worldToLocal(he),this.star.visible=!0,this.star.position.copy(he),this.star.scale.setScalar(.035+.008*Math.sin(t*47)),this.star.material.color.setHex(ge.super),this.star.material.rotation=t*9,this.glow(he,.09,ge.super,.9);for(let e=0;e<this.sparks.length;e++){const n=(t*2.6+e/5)%1,s=ye(e,Math.floor(t*2.6+e/5))*Ve,r=Es.set(Math.cos(s)*.7,.8,Math.sin(s)*.7).normalize(),a=this.sparks[e];a.visible=!0,a.position.copy(he).addScaledVector(r,.012+n*.035),a.quaternion.setFromUnitVectors(r_,r),a.scale.set(.6,.6,.012);const o=a.material;o.color.setHex(e%2?16777215:ge.super),o.opacity=1-n}}}const c_=[[0,"#262a5a"],[.22,"#5b4a86"],[.36,"#c46a7c"],[.44,"#f39a62"],[.485,"#ffd38e"],[.5,"#ffe7b0"],[.52,"#d9a06a"],[1,"#b07a50"]];function h_(i,t){const e=i.canvasTex(4,256,(V,q,gt)=>{const rt=V.createLinearGradient(0,0,0,gt);for(const[Ot,zt]of c_)rt.addColorStop(Ot,zt);V.fillStyle=rt,V.fillRect(0,0,q,gt)});e.generateMipmaps=!1,e.minFilter=we;const n=i.shader({uniforms:{uGrad:{value:e},uSat:{value:1},uTint:{value:new wt(1,1,1)}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform sampler2D uGrad;
      uniform float uSat;
      uniform vec3 uTint;
      varying vec3 vDir;
      void main() {
        float v = 0.5 + asin(clamp(normalize(vDir).y, -1.0, 1.0)) / 3.14159265;
        vec3 c = texture2D(uGrad, vec2(0.5, v)).rgb;
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        c = mix(vec3(l), c, uSat) * uTint;
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,side:ke,depthWrite:!1}),s=i.style==="polvo",r=nt(i.geo("sky",()=>new zs(320,24,32)),s?f_(i):n,t);r.renderOrder=-3,r.frustumCulled=!1;const a=280,o=new R(.1,1.45,nn+.3),c=i.basic(16773577,{fog:!1},!0),l=nt(i.geo("sunDisc",()=>new Xr(a*Math.tan(.04),40)),c,t,o.x+Math.sin(ss)*a,o.y+a*Math.tan(Ng),o.z-Math.cos(ss)*a);l.lookAt(o),l.renderOrder=-2;const f=i.canvasTex(64,64,(V,q,gt)=>{const rt=V.createRadialGradient(q/2,gt/2,0,q/2,gt/2,q/2);rt.addColorStop(0,"rgba(255,255,255,1)"),rt.addColorStop(.25,"rgba(255,255,255,0.5)"),rt.addColorStop(1,"rgba(255,255,255,0)"),V.fillStyle=rt,V.fillRect(0,0,q,gt)}),u=i.sprite(f,{color:16756832,opacity:.7,fog:!1,blending:cs});i.gradeColor(u.color);const h=new os(u);h.position.copy(l.position).sub(o).multiplyScalar(.98).add(o),h.scale.setScalar(a*.55),t.add(h),l.visible=h.visible=!s;const d=kt(t),g=V=>i.lambert(V),M=g(11890794),m=[[-80,-100,34,9],[-55,-118,22,6],[22,-104,40,11],[64,-94,26,7],[-130,-128,50,12],[110,-130,44,10]];for(const[V,q,gt,rt]of m)nt(i.box(gt,rt,14),M,d,V,rt/2,q),nt(i.box(gt*.7,rt*.35,10),M,d,V+gt*.08,rt*1.17,q);const p=nt(i.geo("ground",()=>new fi(500,500)),g(13868390),d),S=nt(i.geo("street",()=>new fi(7,220)),g(14856826),d,.2,.004,-60);for(const V of[p,S])V.rotation.x=-Ge,V.receiveShadow=!0;const A=g(12947292);for(const V of[-1.2,1.6]){const q=nt(i.geo("rut",()=>new fi(.12,220)),A,d,V,.008,-60);q.rotation.x=-Ge,q.receiveShadow=!0}const v=i.phong(10122582);for(let V=0;V<14;V++){const q=xe(-3.2,3.6,ye(V,1)),gt=xe(-12,11,ye(V,2));if(Math.abs(Math.abs(gt)-nn+.6)<1.8&&q>-2.2&&q<1.9)continue;const rt=.05+ye(V,9)*.07;nt(i.geo(`rock${V}`,()=>new rl(rt,0)),v,d,q,.02,gt).rotation.set(ye(V,3)*3,ye(V,4)*3,0)}const b=i.phong(3811877),E=i.phong(5322826),C=new Map,x=V=>{let q=C.get(V);return q||(q=i.phong(V),C.set(V,q)),q},T=(V,q,gt,rt,Ot,zt,Xt)=>{const X=kt(d,V,0,q),tt=x(zt),xt=x(Xt);X.rotation.y=gt,nt(i.box(rt,Ot*.72,2.4),tt,X,0,Ot*.36,-1.2),nt(i.box(rt,Ot,.18),tt,X,0,Ot/2,.05),nt(i.box(rt*.45,Ot*.12,.18),tt,X,0,Ot*1.06,.05),nt(i.box(rt+.12,.12,.28),xt,X,0,Ot,.12),nt(i.box(rt*.82,.38,.05),xt,X,0,Ot*.82,.16),nt(i.box(rt+.6,.1,1.3),xt,X,0,Ot*.5,.78).rotation.x=.14;for(const Nt of[-rt/2-.2,rt/2+.2])nt(i.box(.1,Ot*.5,.1),xt,X,Nt,Ot*.25,1.35);nt(i.box(.8,1.35,.05),b,X,0,.68,.16);for(const Nt of[-rt*.32,rt*.32])nt(i.box(.7,.75,.05),E,X,Nt,1.45,.16)},P=[[-5.6,8.6,Ge,3.6,4.2,10250823,7293491],[-5.6,4.8,Ge,3.2,3.4,12159582,8016440],[-5.6,-4.9,Ge,3.4,3.8,9398866,6243380],[-5.6,-8.9,Ge,3.8,4.4,10250823,7293491],[6.2,6.4,-Ge,3.4,3.6,9398866,6243380],[6.2,-10.6,-Ge,3.4,3.6,12159582,8016440],[6.2,-14.4,-Ge,3.6,4.4,9398866,6243380]];for(const V of P)T(...V);const D=kt(d,7.5,0,-24),F=x(6177072);for(const[V,q]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])nt(i.cyl(.07,.09,3.6,5),F,D,V,1.8,q);nt(i.cyl(1.25,1.25,1.8,12),x(9068094),D,0,4.4,0),nt(i.cyl(.05,1.42,.75,12),x(7227957),D,0,5.68,0);for(const V of[3.85,4.95])nt(i.cyl(1.28,1.28,.08,12),x(4863014),D,0,V,0);const B=i.phong(7311183),L=(V,q,gt)=>{const rt=kt(d,V,0,q);rt.scale.setScalar(gt),nt(i.cyl(.22,.26,2.4,8),B,rt,0,1.2,0),nt(i.sph(.22,8,5),B,rt,0,2.4,0);for(const[Ot,zt,Xt]of[[1,1,.8],[-1,1.35,.6]])nt(i.cyl(.13,.13,.45,7),B,rt,0,zt,Ot*.4).rotation.x=Ge,nt(i.cyl(.13,.15,Xt,7),B,rt,0,zt+Xt/2,Ot*.6),nt(i.sph(.13,7,4),B,rt,0,zt+Xt,Ot*.6)};L(-7.8,7.2,.8),L(8.5,-19,.6),L(-9,-16,.7),Oh(i,d);const G=Ba(i,Mc,0,!0),Y=Ba(i,Go,.5),K=Ba(i,zh,.5),st=Nc(i,t,G,null,Mc);st.post.position.set(0,0,nn),st.post.rotation.y=Ge;const Z=[0,1,2].map(()=>Nc(i,t,Y,K,Go));return{sky:r.material,sunDisc:l,halo:h,covers:[st,...Z]}}const Uc=-.11,Oa=.2,u_=.12;function f_(i){const t=n=>new wt(n),e=new R(Math.sin(Uc)*Math.cos(Oa),Math.sin(Oa),-Math.cos(Uc)*Math.cos(Oa));return i.shader({uniforms:{uSat:{value:1},uTint:{value:new wt(1,1,1)},uSun:{value:e},uSunR:{value:u_},uPaper:{value:t(yt.crema)},uRed:{value:t(yt.rojo)},uSand:{value:t(yt.arena)}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform float uSat;
      uniform vec3 uTint;
      uniform vec3 uSun;
      uniform float uSunR;
      uniform vec3 uPaper;
      uniform vec3 uRed;
      uniform vec3 uSand;
      varying vec3 vDir;
      float hash(float n) { return fract(sin(n) * 43758.5453); }
      float noise(float x) {
        float i = floor(x);
        float f = fract(x);
        f = f * f * (3.0 - 2.0 * f);
        return mix(hash(i), hash(i + 1.0), f);
      }
      // Torn edge: soft wander plus fine fibres.
      float tear(float x, float k) {
        return 0.6 * noise(x * 9.0 + k) + 0.28 * noise(x * 31.0 + 3.7 * k) + 0.12 * noise(x * 97.0 + 1.3 * k) - 0.5;
      }
      // A torn strip centred at elevation y, half height h, between azimuths a0..a1.
      float strip(float az, float el, float y, float h, float a0, float a1, float k) {
        float top = y + h + 0.006 * tear(az, k);
        float bot = y - h + 0.006 * tear(az, k + 5.1);
        float ends = step(a0 + 0.03 * tear(el * 4.0, k + 2.0), az) * step(az, a1 + 0.03 * tear(el * 4.0, k + 9.0));
        return step(bot, el) * step(el, top) * ends;
      }
      void main() {
        vec3 d = normalize(vDir);
        float el = asin(clamp(d.y, -1.0, 1.0));
        float az = atan(d.x, -d.z);
        vec3 c = uPaper;
        // Sand haze right on the horizon (where the far mesas stand).
        c = mix(c, uSand, 0.35 * (1.0 - smoothstep(0.0, 0.09, el)));
        // Red wash torn along the top.
        float wash = step(0.47 + 0.035 * tear(az, 1.0), el);
        // Torn red strips across the sky.
        float s = max(strip(az, el, 0.37, 0.006, -0.95, -0.28, 3.0), strip(az, el, 0.31, 0.004, 0.08, 0.62, 7.0));
        // The sun, crossed by two paper tears.
        float ang = acos(clamp(dot(d, uSun), -1.0, 1.0));
        float sun = step(ang, uSunR + 0.002 * tear(atan(d.y - uSun.y, d.x - uSun.x), 4.0));
        float rel = el - asin(uSun.y);
        float gap = strip(az, rel, -0.035, 0.006, -3.2, 3.2, 13.0) + strip(az, rel, 0.045, 0.004, -3.2, 3.2, 17.0);
        sun *= 1.0 - clamp(gap, 0.0, 1.0);
        c = mix(c, uRed, max(max(wash, s), sun));
        if (el < 0.0) c = uSand;
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        c = mix(vec3(l), c, uSat) * uTint;
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,side:ke,depthWrite:!1})}function Ba(i,t,e,n=!1){const s=new ns,r=i.phong(n&&i.style==="polvo"?Tn.rojoOscuro:10250816),a=i.phong(8016178),o=i.phong(4866104,{shininess:30}),c=i.phong(9067062),l=i.geo("barrel",()=>new al([[xr,0],[Yn-.03,.18],[Yn,cn/2],[Yn-.03,cn-.18],[xr,cn]].map(([M,m])=>new Lt(M,m)),10)),f=i.geo("lid",()=>new Xr(xr,10)),u=i.cyl(Yn-.012,Yn-.012,.045,10),h=i.geo("rim",()=>new Os(xr-.005,.02,4,14)),d=i.basic(3094848);t.forEach((M,m)=>{const p=kt(s,ln+Xo[m],0,M);p.rotation.y=m*1.1+e;const S=nt(l,r,p);S.castShadow=S.receiveShadow=!0,nt(f,a,p,0,cn-.012,0).rotation.x=-Ge;for(const v of[.17,cn-.17]){const b=nt(u,o,p,0,v,0);b.castShadow=!0}const A=nt(h,d,p,0,cn-.01,0);A.rotation.x=Ge});const g=nt(i.box(.06,.9,.22),c,s,ln+.42,.42,t[0]-.32);return g.rotation.set(-.25,.3,-.35),g.castShadow=!0,Oh(i,s),{g:s,rim:d}}const Xo=[.05,0,.03];function Nc(i,t,e,n,s){const r=kt(t),a=i.basic(3094848),o=u=>{const h=u.g.clone();for(const d of h.children)d instanceof We&&d.material===u.rim&&(d.material=a);return r.add(h),h},c=o(e),l=n?o(n):null,f={post:r,rim:a,rows:s,setArc(u){c.visible=!u||!l,l&&(l.visible=u),f.rows=u&&l?zh:s}};return f.setArc(!1),f}const Fc=new R(Bh,.03,cl),d_=.035,p_=-.075,Oc=.205,m_=.3,za=cn+.2,g_=.5,Bc=new R(ln-.6,.5,-.1),zc=new R(.05,.42,nn-ln+.5),__=new R(.06,cn+.005,nn-ln-.3+.04),Hc=new R(2.15,.32,nn+.6),Ha=1.15,x_=2.85,v_=2.25,M_=2.9,Ga=.3,S_=.55,y_=.95,b_=.18,E_=3.6,T_=3.55,A_=new R(-.1,.12,1.05),Gc={ambient:1.1,sun:2.5,sunEl:21*Math.PI/180,key:2.1},w_={right:2,up:3.5,look:1,lookRight:-.55,lookUp:1.25,tan:Math.tan(24*Math.PI/180)},Va={shoot:"lean",protect:"duck",reload:"kneel",super:"stand"},It=new R,De=new R,ae=new R,Ee=new R,Ts=new vn,ka=new vn,yr=new zn(0,0,0,"YXZ"),Wa=new wt,Xa=new wt,qa=new wt(1,1,1),R_=new wt(.97,1,1.04),C_=new wt(.8,.8,.84),P_=new wt(ge.protect),Ya=new R(0,1,0),L_=new wt(15981768),I_=new wt(10260362),D_=new R(0,0,1),Si=new R,oi=new R,Ka=new R,Vc=new R,br=new R,kc=new R,ji=new R,Wc=new R,Qe=new R,U_={hex:16777215,k:0},Za={hex:16777215,k:0},Xc=[16777215,ge.super],N_=[16774880],F_=[ge.protect,16777215],O_=[16777215,16773840],qc=[ge.super,ge.reload],B_=new R,z_=Math.PI/2;class H_{renderer;kit;print;hemiBase;rimOff;scene=new Br;vmScene=new Br;camera=new pn(40,.5,.06,600);world;slots;vm;fx;tex;overlay;sun;hemi;fill;bullets;dyn;slugs;P;koMe;koOne;koArc;koArcL;pose=Hh();hands={action:null,ta:-1,back:0,loaded:0,reloadSlot:0,aimDir:new R(0,0,-1),intercepted:!1,hitS:-1,won:0,sim:0};marks=[Na(),Na(),Na()];aims=[Ji(),Ji(),Ji(),Ji(),Ji(),Ji()];pickRects=new Float32Array(Xn*4);eyeBase=new R;releaseFp=new R;muzzleFp=new R;w=390;h=844;tanFull=.43;shift=0;disposed=!1;n=-1;layoutKey=-1;needH=Oc;myColor=-1;flashBoost=0;constructor(t,e="toy"){const n=e==="polvo",s=this.renderer=new Sg({canvas:t,antialias:!n,alpha:!1,powerPreference:"high-performance"});s.outputColorSpace=en,s.toneMapping=An,s.autoClear=!1,s.setClearColor(n?yt.crema:1645859,1),s.shadowMap.enabled=!0,s.shadowMap.type=n?tu:Cs;const r=this.kit=new Ug(e);if(this.print=n?new t_:null,this.rimOff=new wt(n?yt.negro:3094848),this.camera.rotation.order="YXZ",this.scene.fog=n?new Or(15257012,90,420):new Or(15575676,30,170),r.gradeColor(this.scene.fog.color),this.hemi=new vf(16769205,9067076,1.9),this.sun=new Aa(16762496,3.4),this.sun.position.set(Math.sin(ss)*Math.cos(Ua)*40,Math.sin(Ua)*40,-Math.cos(ss)*Math.cos(Ua)*40),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),this.sun.shadow.bias=-8e-4,this.sun.shadow.normalBias=.02,Object.assign(this.sun.shadow.camera,{left:-5.5,right:5.5,top:4.6,bottom:-3.2,near:28,far:54}),this.sun.shadow.camera.updateProjectionMatrix(),this.fill=new Aa(15388864,1.7),this.fill.position.set(6,7,14),n){const p=Gc;this.hemi.color.set(16764840),this.hemi.groundColor.set(15771784),this.hemi.intensity=p.ambient,this.sun.color.set(16774370),this.sun.intensity=p.sun,this.sun.position.set(Math.sin(ss)*Math.cos(p.sunEl)*40,Math.sin(p.sunEl)*40,-Math.cos(ss)*Math.cos(p.sunEl)*40),Object.assign(this.sun.shadow.camera,{left:-6,right:6,top:3.6,bottom:-2.6,near:26,far:58}),this.sun.shadow.camera.updateProjectionMatrix(),this.sun.shadow.normalBias=.03,this.fill.color.set(16774370),this.fill.intensity=p.key,this.fill.position.set(10,-.5,11)}this.hemiBase=this.hemi.intensity,this.scene.add(this.hemi,this.sun,this.sun.target,this.fill);const a=this.hemi.clone(),o=new Aa(n?16774370:16762496,n?Gc.sun:3);o.position.copy(this.sun.position);const c=this.fill.clone();this.vmScene.add(a,o,o.target,c);for(const p of[this.hemi,a])r.gradeColor(p.color),r.gradeColor(p.groundColor);for(const p of[this.sun,this.fill,o,c])r.gradeColor(p.color);this.tex=qg(r),this.world=h_(r,this.scene),this.koMe=Ac(1.55,1.5,new R(ln-.4,.03,1.4)),this.koOne=Ac(1.55,1.48,new R(ln+.03,cn+.03,Go[2]??.2)),this.koArc=wc(ln,cn,1),this.koArcL=wc(ln,cn,-1),this.slots=this.world.covers.map((p,S)=>({cowboy:new Xg(r,p.post,S===0?0:2),cover:p,post:p.post,ko:S===0?this.koMe:this.koOne,on:S===0,beta:0,anchor:new R,rimTops:[new R,new R,new R],mark:-1})),this.vm=new l_(r,this.vmScene,this.tex),this.fx=new Gr(r,this.scene,this.tex),this.overlay=new Qg(r,this.tex.glow,this.tex.vignette);const l=ps(r),f=r.basic(16777215),u=r.basic(2758676,{transparent:!0,opacity:.3,depthWrite:!1}),h=r.basic(16777215,{transparent:!0,opacity:.9,depthWrite:!1}),d=r.geo("coneD",()=>new Hr(.085,1,8)),g=r.geo("coneT",()=>new Hr(.05,1,8)),M=()=>{const p=kt(this.scene),S=nt(r.cyl(.07,.07,.2,8),f,p);S.rotation.x=Math.PI/2,nt(r.sph(.07,8,5),f,S,0,.1,0).scale.y=1.5;const A=nt(r.cyl(.07,.07,.2,8),l.outline,p);A.rotation.x=Math.PI/2,A.scale.set(1.4,1.25,1.4);const v=[nt(d,u,p),nt(g,h,p)];for(const b of v)b.rotation.x=-Math.PI/2;return p.visible=!1,{g:p,tracers:v}};this.bullets=[M(),M(),M(),M()],this.dyn=[0,1,2,3].map(()=>kh(r,this.scene));for(const p of this.dyn)p.g.visible=!1,p.g.traverse(S=>S.castShadow=!0);const m=r.phong(10200240,{shininess:60,specular:6710886});this.slugs=[0,1,2,3].map(()=>{const p=nt(r.sph(.06,8,5),m,this.scene);return p.scale.set(1,1,.5),p.visible=!1,p}),this.P=this.probe(this.slots[1].cowboy);for(let p=2;p<this.slots.length;p++)this.slots[p].post.visible=!1;this.layout(1,1),this.resize(390,844,1)}probe(t){const e=Object.keys(Me),n=()=>({}),s={head:n(),chest:n(),hat:n(),muzzle:new R,muzzleSide:new R,release:new R,windHand:new R},r=(a,o)=>t.post.worldToLocal(a.getWorldPosition(o));for(const a of e)t.rest(0),t.apply(Me[a]),t.post.updateMatrixWorld(!0),s.head[a]=r(t.head,new R),s.chest[a]=t.post.worldToLocal(t.body.localToWorld(new R(0,.42,0))),s.hat[a]=r(t.hat,new R);return t.rest(0),t.apply(Me.lean),t.post.updateMatrixWorld(!0),r(t.muzzle,s.muzzle),t.rest(0),this.poseAction(t,"shoot",400,!1,0,!1,1),t.post.updateMatrixWorld(!0),r(t.muzzle,s.muzzleSide),t.rest(0),this.poseAction(t,"super",tn,!1,0,!1),t.post.updateMatrixWorld(!0),r(t.gunArm.hand,s.release),t.rest(0),this.poseAction(t,"super",1100,!0,0,!1),t.post.updateMatrixWorld(!0),r(t.gunArm.hand,s.windHand),t.rest(0),s}toWorld(t,e,n,s){return s.copy(e),n!==0&&s.applyAxisAngle(Ya,n),this.slots[t].post.localToWorld(s)}layout(t,e){this.n=t,this.layoutKey=e;const n=zg[Math.min(3,t)]??[];for(let a=1;a<this.slots.length;a++){const o=this.slots[a];o.on=!1,o.mark=-1,o.post.visible=!1}for(let a=0;a<n.length;a++){const o=e>>4*a&15,c=this.slots[o],l=n[a];!c||!l||o===0||(c.on=!0,c.mark=a,c.post.visible=!0,c.post.position.set(l.x,0,l.z),c.post.rotation.set(0,l.rotY,0),c.cover.setArc(t>1),c.ko=t===1?this.koOne:a===0?this.koArcL:this.koArc)}this.scene.updateMatrixWorld(!0);for(const a of this.slots)a.cover.rows.forEach((o,c)=>a.post.localToWorld(a.rimTops[c].set(ln+(Xo[c]??0),cn+.02,o)));const s=this.slots[0].cowboy;s.rest(0),s.post.updateMatrixWorld(!0),this.eyeFromToy(ae);let r=Oc;if(t>1){for(let a=1;a<this.slots.length;a++)if(this.slots[a].on)for(let o=-1;o<=1;o+=2)this.toWorld(a,It.set(0,1.8,g_*o),0,De).sub(ae),r=Math.max(r,Math.abs(De.x)/Math.max(1,-De.z))}this.needH=r}resize(t,e,n){this.w=Math.max(1,t),this.h=Math.max(1,e),this.renderer.setPixelRatio(Math.min(Math.max(n,1),2)),this.renderer.setSize(this.w,this.h,!1),this.print?.resize(this.renderer),this.camera.aspect=this.w/this.h,this.overlay.resize(this.w,this.h,this.safeTop,this.safeBottom),this.setProjection(this.fpBandTan()),this.updateReleaseFp()}updateReleaseFp(){const t=this.slots[0].cowboy;t.rest(0),this.poseAction(t,"super",tn,!1,0,!1),t.post.updateMatrixWorld(!0),this.eyeFromToy(this.eyeBase),this.fpOrientation(Ts,"super",1,0),this.vm.releaseLocal(this,It).applyQuaternion(Ts).add(this.eyeBase),this.releaseFp.copy(It)}pick(t,e){let n=null,s=1/0;for(let r=1;r<Xn;r++){const a=r*4,o=this.pickRects[a],c=this.pickRects[a+1],l=this.pickRects[a+2],f=this.pickRects[a+3];if(o>l||t<o||t>l||e<c||e>f)continue;const u=Math.abs(t-(o+l)/2);u<s&&(s=u,n=r)}return n}dispose(){this.disposed||(this.disposed=!0,this.sun.shadow.dispose(),this.print?.dispose(),this.kit.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss())}get safeTop(){return Math.min(Fg,this.h*.05)}get safeBottom(){return Math.min(Og,this.h*.42)}bandAspect(){return this.w/Math.max(1,this.h-this.safeTop-this.safeBottom)}fpBandTan(){return Math.max(m_,this.needH/this.bandAspect())}setProjection(t){const e=Math.max(1,this.h-this.safeTop-this.safeBottom);this.tanFull=t*this.h/e,this.shift=(this.safeBottom-this.safeTop)/this.h;const n=this.camera;n.aspect=this.w/this.h,n.fov=Math.atan(this.tanFull)*360/Math.PI,n.updateProjectionMatrix(),n.projectionMatrix.elements[9]=-this.shift,n.projectionMatrixInverse.copy(n.projectionMatrix).invert()}local(t,e,n,s){return s.set(t*n*this.tanFull*this.camera.aspect,(e-this.shift)*n*this.tanFull,-n)}poseAction(t,e,n,s,r,a,o=0){const c=Qt(et(n,0,350)),l=this.pose,f=a?Te(et(n,Dt.settle-100,Dt.settle+500)):0,u=(1-r)*(1-f);switch(e){case"shoot":{const h=Qt(Math.max(.7*c,et(n,0,400)));En(l,Me.crouch,Me.lean,h*(1-r)),l.px*=1-.75*o,l.lean*=1-.6*o,f>0&&En(l,l,Me.victor,f),t.apply(l);const d=et(n,Dt.fly,Dt.fly+170),g=(d>0&&d<1?(1-d)*Math.min(1,d*8):0)*u;t.gunArm.pitch.rotation.z+=.42*g,t.body.rotation.z+=.05*g;break}case"protect":{const h=Qt(et(n,0,300));En(l,Me.crouch,Me.duck,h*(1-r)),f>0&&En(l,l,Me.victor,f),t.apply(l);break}case"reload":{En(l,Me.crouch,Me.kneel,c*(1-r)),f>0&&En(l,l,Me.victor,f),t.apply(l),t.reload(n,1-u);break}case"super":{if(En(l,Me.crouch,Me.stand,c*(1-r)),f>0&&En(l,l,Me.victor,f),t.apply(l),s){const d=Te(et(n,350,650));t.superArm(c,d,0,0,1-u),t.gunArm.pitch.rotation.z+=.04*et(n,650,1200)*Math.sin(n*.06)}else t.superArm(c,Te(et(n,350,590)),et(n,590,tn+30),Qt(et(n,tn+30,900)),1-u);const h=c>.35&&u>.4;t.gun.visible=!h,t.holstered.visible=h;break}}}aimYaw(t,e){const n=this.slots[e];return!n||e===t?0:(Ee.copy(n.post.position),Ee.y=1.2,this.slots[t].post.worldToLocal(Ee),Math.atan2(-Ee.z,Ee.x))}poseToy(t,e,n,s,r,a,o){const c=this.slots[t],l=c.cowboy,f=t===0;if(l.rest(.008*Math.sin(r*2.2+t*1.7+.3)),!e){if(!a){l.knockOut(5,Me.crouch,!1,c.ko,this.P.hat.crouch);return}if(s.phase==="intro"){const g=f?0:100+70*Math.max(0,c.mark),M=s.phaseT===void 0?1:Te(et(s.phaseT,120+g,820+g));l.apply(En(this.pose,Me.duck,Me.crouch,M));return}if(f&&s.phase==="choosing"&&s.me.preview==="protect"){l.apply(En(this.pose,Me.crouch,Me.duck,.28));return}f||(l.head.rotation.y=.06*Math.sin(r*.9+1.3+t*2.1),s.phase==="choosing"&&o&&(l.head.rotation.z-=.07));return}const u=n.ta,h=e.died||e.won?0:Te(et(u,Dt.settle,Dt.settle+500));this.poseAction(l,e.action,u,e.bundle==="intercepted",h,e.won,Math.abs(Math.sin(c.beta))),e.won&&l.tipHat(He(et(u,Dt.settle+350,Dt.settle+1100)));let d=c.beta*Qt(et(u,0,350))*(1-h);if(e.died&&u>=Dt.impact){const g=(u-Dt.impact)/1e3,M=Va[e.action];l.knockOut(g,Me[M],e.diesBy==="blast",c.ko,this.P.hat[M]),d*=1-Qt(et(g,0,.45))}d!==0&&l.root.quaternion.premultiply(ka.setFromAxisAngle(Ya,d))}rivalAnchor(t){const e=this.slots[t];e.post.updateMatrixWorld(!0),e.cowboy.head.getWorldPosition(e.anchor);const n=this.toWorld(t,this.P.head.crouch,0,It);e.anchor.y<n.y&&e.anchor.copy(n)}eyeFromToy(t){if(this.slots[0].cowboy.head.getWorldPosition(t).add(Fc),t.y<za){const e=Ri((za-t.y)/.5);t.y=za,t.z=xe(t.z,nn+.4,e)}}fpOrientation(t,e,n,s){let r=p_;return e==="reload"?r-=.1*n:e==="super"?r+=.1*n:e==="protect"&&(r+=.035*n),r+=.012*s,yr.set(r,this.n>1?0:d_,0,"YXZ"),t.setFromEuler(yr)}render(t){if(this.disposed)return;const e=t.rivals,n=Math.min(3,e.length);let s=0;for(let v=0;v<n;v++)s|=(e[v].id&15)<<4*v;(n!==this.n||s!==this.layoutKey)&&(this.layout(n,s),this.setProjection(this.fpBandTan()),this.updateReleaseFp());for(let v=0;v<n;v++)this.slots[e[v].id]?.cowboy.setLook(e[v].color);this.slots[0].cowboy.setLook(t.me.color),t.me.color!==this.myColor&&(this.myColor=t.me.color,this.vm.setSleeve(on(this.kit,kg(t.me.color,this.kit.style))));const r=Ag(t),a=(t.timeMs-r.frozenMs)/1e3,o=r.ta,c=o>=0?o/1e3:a,l=r.facts,f=l[0]??null;this.fx.begin();for(const v of this.bullets)v.g.visible=!1;for(const v of this.dyn)v.g.visible=!1;for(const v of this.slugs)v.visible=!1;for(let v=0;v<Xn;v++){const b=l[v],E=this.slots[v];E.beta=b&&b.target>=0&&(b.action==="shoot"||b.action==="super")?this.aimYaw(v,b.target):0}for(let v=0;v<n;v++){const b=e[v];this.slots[b.id]?.on&&(this.poseToy(b.id,l[b.id]??null,r,t,a,b.alive,b.ready),this.rivalAnchor(b.id))}this.poseToy(0,f,r,t,a,t.me.alive,!1),this.slots[0].post.updateMatrixWorld(!0),this.eyeFromToy(this.eyeBase),this.scene.updateMatrixWorld(!0);const u=r.side,h=this.slots[0].cowboy;h.root.visible=u,u||(h.looseHat.visible=!1);const d=f?.died&&o>=Dt.impact?(o-Dt.impact)/1e3:!f&&!t.me.alive?5:-1;u?this.sideCamera(r):this.fpCamera(t,r,f,d),this.camera.updateMatrixWorld(!0),this.vm.root.visible=!u,u||this.poseHands(t,r,f,d,c),this.effects(r,c,u),this.fx.ambient(a,r.freezeK);const g=r.freezeK,M=d>=0?Te(et(d,.1,1.2)):0,m=(1-.3*g)*(1-.8*M);Wa.copy(qa).lerp(R_,g).multiply(Xa.copy(qa).lerp(C_,M)),this.kit.grade(m,Wa);const p=this.world.sky.uniforms;p.uSat.value=m,p.uTint.value.copy(Wa),this.hemi.intensity=this.hemiBase+.35*g+this.flashBoost,this.overlayState(t,r),this.overlay.update(this.marks,n,this.aims,n>2?.9:1);const S=this.screenFlash(f,d);this.overlay.screen(.4+.25*g+.3*M,S.hex,S.k);const A=this.renderer;this.print?this.print.begin(A):A.clear(),A.render(this.scene,this.camera),u||(A.clearDepth(),A.render(this.vmScene,this.camera)),this.print&&this.print.end(A),A.clearDepth(),A.render(this.overlay.scene,this.overlay.camera)}fpCamera(t,e,n,s){const r=this.camera;this.setProjection(this.fpBandTan());const a=e.ta;let o=null,c=0,l=0;if(n){o=n.action;const f=n.died?0:Te(et(a,Dt.settle,Dt.settle+500));if(c=Qt(et(a,0,350))*(1-f),o==="shoot"){const u=et(a,Dt.fly,Dt.fly+170);l=u>0&&u<1?(1-u)*Math.min(1,u*8):0}}else t.phase==="choosing"&&t.me.preview==="protect"&&(o="protect",c=.4);if(r.position.copy(this.eyeBase),this.fpOrientation(r.quaternion,o,c,l),a>=Dt.impact)for(const f of e.attacks){if(f.target!==0||f.result!=="blocked")continue;const u=(a-Dt.impact)/1e3;r.rotateX(.012*Math.exp(-u*9)*Math.sin(u*70));break}if(s>=0){const f=n?.diesBy==="blast",u=Qt(et(s,0,.12))*(1-.6*et(s,.12,.5)),h=Te(et(s,.12,1.15)),d=n&&n.killer>0?n.killer:this.firstRival(t),g=d>0&&this.slots[d].post.position.x<-.6;br.copy(Hc),g&&(br.x=-Hc.x+2*Fc.x),r.position.lerp(br,h),r.position.z+=(f?.5:.3)*u,r.position.y+=(f?.25:.06)*He(et(s,0,.45)),d>0?this.toWorld(d,this.P.chest.victor,0,It):It.set(0,1.2,-nn),It.sub(br);const M=Math.atan2(-It.x,-It.z),m=Math.atan2(It.y,Math.hypot(It.x,It.z))-.02;yr.set(m,M,g?-.32:.32,"YXZ"),Ts.setFromEuler(yr),ka.copy(r.quaternion),r.quaternion.slerpQuaternions(ka,Ts,h),r.rotateX(.16*He(et(s,0,.3)))}}firstRival(t){let e=-1,n=1/0;for(const s of t.rivals){const r=this.slots[s.id];if(!r?.on)continue;const a=Math.abs(r.post.position.x)+(s.alive?0:10);a<n&&(n=a,e=s.id)}return e}sideCamera(t){const e=this.camera,n=t.freezeU;let s=!1;for(const l of t.attacks)l.kind==="super"&&(l.attacker===t.pairA||l.attacker===t.pairB)&&(s=!0);const r=this.slots[Math.max(0,t.pairA)].post.position,a=this.slots[Math.max(0,t.pairB)].post.position,o=this.bandAspect();if(t.pairA>0){const l=this.slots[0].post.position;It.addVectors(r,a).multiplyScalar(.5);const f=r.distanceTo(a)/2+1.3;e.position.set(l.x+.35*It.x+xe(-.25,.25,n),4.2,l.z+2.4),It.y=1.15+(s?.5:0);const u=e.position.distanceTo(It);this.setProjection(Math.max(Math.tan(15*Math.PI/180),f/u/o)),e.lookAt(It);return}Qe.subVectors(a,r).setY(0);const c=Math.max(.5,Qe.length());if(Qe.divideScalar(c),ae.set(-Qe.z,0,Qe.x),o<1.1){const l=w_;this.setProjection(l.tan);const f=.6*(n-.5);e.position.copy(r).addScaledVector(ae,l.right).addScaledVector(Qe,-4.5-f),e.position.y=l.up,It.addVectors(r,a).multiplyScalar(.5).addScaledVector(ae,l.lookRight).addScaledVector(Qe,l.look-f),It.y=l.lookUp+(s?.5:0),e.lookAt(It)}else{const l=Math.tan(16*Math.PI/180);this.setProjection(l);const f=Un(5.1/(l*o),6,30),u=xe(.35,-.35,n);It.addVectors(r,a).multiplyScalar(.5).addScaledVector(Qe,-u),e.position.copy(It).addScaledVector(ae,f),e.position.y=s?1.3:.95,It.y=s?1.9:1.35,e.lookAt(It)}}poseHands(t,e,n,s,r){const a=this.hands,o=e.ta;a.sim=r,a.hitS=s,a.intercepted=n?.bundle==="intercepted";let c=t.rivals.length>0;for(const f of t.rivals)f.alive&&(c=!1);a.won=n?.won?Te(et(o,1500,2e3)):!n&&c&&t.me.alive?1:0,a.loaded=t.me.ammo,a.reloadSlot=t.me.ammo;let l=-1;if(n){a.action=n.action,a.ta=o,a.back=n.died?0:Te(et(o,Dt.settle,Dt.settle+500));const f=n.action==="reload"?950:n.action==="shoot"?Dt.fly:n.action==="super"&&n.releases?tn:1/0;a.loaded=o>=f?n.ammoAfter:n.ammoBefore,a.reloadSlot=n.ammoBefore,l=n.target}else a.action=t.phase==="choosing"?t.me.preview:null,a.ta=-1,a.back=0,a.action==="shoot"&&t.me.ammo<1&&(a.action=null),l=t.target??this.firstRival(t);if(n?.shot==="clash"&&l>0)this.meetPoint(0,l,"shoot",It);else if(l>0&&this.slots[l]?.on){const f=e.facts[l];this.toWorld(l,this.P.chest[f?Va[f.action]:"crouch"],this.slots[l].beta,It)}else It.set(0,1.2,-nn);a.aimDir.copy(It).sub(this.camera.position).applyQuaternion(Ts.copy(this.camera.quaternion).invert()),this.vm.pose(a,this,this.camera.quaternion,this.camera.position),this.vm.root.updateMatrixWorld(!0),this.vm.muzzle.getWorldPosition(this.muzzleFp)}meetPoint(t,e,n,s){const r=Math.min(t,e),a=Math.max(t,e),o=this.slots[r].post.position,c=this.slots[a].post.position;if(s.addVectors(o,c).multiplyScalar(.5),r===0)ae.subVectors(c,o).setY(0).normalize(),n==="shoot"?s.add(Ee.set(ae.z*.45,0,-ae.x*.45)):s.add(Ee.set(ae.z*.35,0,-ae.x*.35)).addScaledVector(ae,.6),s.y=n==="shoot"?2.15:2.6;else if(this.far(t,e)){const l=s.distanceTo(this.slots[0].post.position);this.towardMe(s,ae),s.addScaledVector(ae,l*(n==="shoot"?S_:b_)),s.y=n==="shoot"?y_:E_}else{const l=o.distanceTo(c);this.towardMe(s,ae),s.addScaledVector(ae,Ga*l),s.y=n==="shoot"?2.15:2.6}return s}far(t,e){const n=this.slots[t],s=this.slots[e];return t>0&&e>0&&!!n&&!!s&&Math.abs(n.mark-s.mark)>=2}towardMe(t,e){return e.subVectors(this.slots[0].post.position,t).setY(0).normalize()}blockPoint(t,e,n){if(t===0)return n.copy(__),n.x+=Un(e.x*.06,-.18,.18),n;const s=this.slots[t];let r=1/0;const a=s.cover.rows;for(let o=0;o<a.length;o++){s.post.localToWorld(Ee.set(ln+(Xo[o]??0),.64,a[o]));const c=Math.hypot(Ee.x-e.x,Ee.z-e.z);c<r&&(r=c,n.copy(Ee))}return Ee.subVectors(e,n).setY(0).normalize(),n.addScaledVector(Ee,Yn-.03)}muzzle(t,e,n){if(t===0&&!e)return n.copy(this.muzzleFp);const s=this.slots[t].beta;return Ee.lerpVectors(this.P.muzzle,this.P.muzzleSide,Math.abs(Math.sin(s))),this.toWorld(t,Ee,s,n)}stack(t,e){let n=0,s=0;for(const r of e)r.target!==t.target||r.result!==t.result||r.kind!==t.kind||(r===t&&(n=s),s++);return s>1?n-(s-1)/2:0}bulletEnd(t,e,n,s,r,a){switch(e.shot){case"clash":return this.meetPoint(t.attacker,t.target,"shoot",a),Dt.meet;case"blocked":return this.blockPoint(t.target,r,a),a.y+=.12*this.stack(t,n.attacks),Dt.impact;case"destroyed":{const o=n.facts[t.target];return o?this.dynPath(t.target,o,Dt.meet,s,a):this.meetPoint(t.attacker,t.target,"super",a),Dt.meet}default:{const o=n.facts[t.target],c=o?Va[o.action]:"crouch";t.target===0&&!s?a.copy(this.eyeBase).add(ae.set(.06,-.32,-.32)):this.toWorld(t.target,this.P.chest[c],this.slots[t.target].beta,a);const l=this.stack(t,n.attacks);return l!==0&&(this.towardMe(a,ae),a.add(Ee.set(-ae.z*.16*l,.08*l,ae.x*.16*l))),Dt.impact}}}placeBullet(t,e,n,s,r){const a=Math.max(.01,s)/r;t.g.visible=!0,t.g.position.copy(e),t.g.scale.setScalar(r),t.g.quaternion.setFromUnitVectors(D_,ae.copy(n).normalize());for(const o of t.tracers)o.scale.y=a,o.position.z=-a/2-.08}dynPath(t,e,n,s,r){const a=t===0&&!s?this.releaseFp:this.toWorld(t,this.P.release,this.slots[t].beta,Vc),o=e.target;if(e.bundle==="clash"){const h=this.meetPoint(t,o,"super",kc),d=et(n,tn,Dt.meet);return oi.lerpVectors(a,h,.5),oi.y=h.y+.5,Er(r,a,oi,h,d)}const c=o===0?zc:this.toWorld(Math.max(0,o),Bc,0,Ka),l=et(n,tn,Dt.impact),f=t!==0&&o!==0;oi.lerpVectors(a,c,t===0?.62:f?.5:.4);const u=t===0?x_:f?this.far(t,o)?T_:M_:v_;return oi.y=2*u-(a.y+c.y)/2,f&&oi.addScaledVector(this.towardMe(oi,Ee),2*Ga*a.distanceTo(c)),Er(r,a,oi,c,l)}effects(t,e,n){const s=this.fx,r=t.ta,a=t.facts;this.flashBoost=0;for(let c=0;c<Xn;c++){const l=this.slots[c],f=a[c],u=l.cover.rim.color;if(u.copy(this.rimOff),!f||f.action!=="protect"||c>0&&!l.on)continue;const h=f.died?0:Te(et(r,Dt.settle,Dt.settle+500)),d=Qt(et(r,120,380))*(1-h),g=c===0&&!n;u.lerp(P_,d*(g?.6:1));let M=!1;for(const A of t.attacks)A.target===c&&A.result==="blocked"&&(M=!0);const m=M&&r>=Dt.impact?(r-Dt.impact)/1e3:-1;if(m>=0&&m<.45&&u.lerp(qa,1-et(m,.04,.45)),f.brokeShield)continue;let p=!1;for(const A of t.attacks)A.target===c&&A.brokeShield&&(p=!0);const S=p?1-et(r,Dt.impact-60,Dt.impact+60):1;for(const A of l.rimTops)g?s.glow(It.copy(A).setY(A.y+.02),.25,ge.protect,.25*d*S):s.glow(A,.95,ge.protect,.55*d*S)}if(!t.active||r<0)return;for(let c=0;c<Xn;c++){const l=a[c];if(!l||l.action!=="shoot"||r<Dt.fly||c===0&&!n)continue;const f=this.muzzle(c,n,ji),u=et(r,Dt.fly,Dt.fly+90);u<1&&(s.star(f,.8*He(u),16774096,.4),s.glow(f,1.2*He(u),16765562,.9),this.flashBoost=Math.max(this.flashBoost,.5*He(u))),Qe.subVectors(this.slots[Math.max(0,l.target)].post.position,f).setY(0).normalize();for(let h=0;h<3;h++){const d=(r-Dt.fly)/1500-h*.04;d>0&&d<1&&(It.copy(f).addScaledVector(Qe,.12+.35*d+h*.09),It.x+=.05*h,It.y+=.04+.32*d,s.smoke(It,.12+.38*d,15984338,.6*(1-d)))}}let o=0;for(const c of t.attacks){const l=a[c.attacker];l&&(c.kind==="shoot"?o=this.bulletFx(c,l,t,n,o):this.dynFx(c,l,t,n,e))}for(let c=n?0:1;c<Xn;c++){const l=a[c];if(!l||l.action!=="reload")continue;const f=this.slots[c].cowboy;f.cart.visible&&s.glow(f.cart.getWorldPosition(It),.75,ge.reload,.95),r>=940&&r<1300&&s.glow(f.drum.getWorldPosition(It),1.1*He(et(r,940,1300)),ge.reload,.95)}for(let c=0;c<Xn;c++){const l=a[c];if(!l?.died||r<Dt.impact||c===0&&!n)continue;const f=this.slots[c],u=(r-Dt.impact)/1e3,h=l.diesBy==="blast",d=et(u,h?.58:.45,1.7),g=f.post.localToWorld(De.copy(f.ko.pos)),M=f.ko!==this.koOne&&f.ko!==this.koMe;for(let S=0;S<(M?4:7)&&d>0&&d<1;S++){const A=S/7*Ve;s.smoke(It.set(g.x+Math.cos(A)*(.4+.9*d),(M?.9:.15)+.25*d,g.z+Math.sin(A)*(.3+.6*d)),.35+.7*d,14267530,.75*(1-d))}const m=et(u,1.02,1.8),p=f.post.localToWorld(De.copy(f.ko.hat));for(let S=0;S<3&&m>0&&m<1;S++)s.smoke(It.set(p.x+(S-1)*.2*(1+m),p.y+.07+.15*m,p.z),.15+.3*m,14267530,.7*(1-m))}}bulletFx(t,e,n,s,r){const a=n.ta;if(a<Dt.fly)return r;const o=this.fx,c=t.attacker,l=this.bullets[c],f=this.muzzle(c,s,Vc),u=Ka,h=this.bulletEnd(t,e,n,s,f,u),d=c!==0&&t.target!==0;if(a<h){const m=G_(et(a,Dt.fly,h));Si.lerpVectors(f,u,.5),Si.y+=e.shot==="clash"?.25:.12,d&&e.shot!=="clash"&&(this.far(c,t.target)?(this.meetPoint(c,t.target,"shoot",Ee),Si.multiplyScalar(-1).addScaledVector(Ee,2)):Si.addScaledVector(this.towardMe(Si,Ee),Ga*f.distanceTo(u))),Er(ji,f,Si,u,m),Er(Wc,f,Si,u,Math.min(1,m+.02));const S=c===0&&!s?xe(.45,1,et(m,0,.4)):s?1.5:1.15;return this.placeBullet(l,ji,Qe.subVectors(Wc,ji),Math.min(1.1,ji.distanceTo(f)),S),r}const g=(a-h)/1e3,M=t.target===0&&!s;if(e.shot==="clash"&&c<t.target&&(this.clashFx(u,g,!1,r),r+=2),e.shot==="blocked"&&this.blockFx(u,g,M,f),e.shot==="hit"&&this.hitFx(u,g,M),e.shot==="destroyed"&&g<.8){o.star(u,.45*(1-et(g,0,.25)),16777215,g*3),o.burst(u,6,g,.25,2,.25,Xc);const m=Math.min(g,.6);this.placeBullet(l,ji.copy(u).add(It.set(.3*m,-4.9*m*m,0)),Qe.set(.3,-1,.2),.05,1)}return r}dynFx(t,e,n,s,r){const a=this.fx,o=n.ta,c=t.attacker,l=this.dyn[c],f=this.slots[c],u=f.cowboy,h=c===0&&!s;let d=Ha,g=!0;if(e.releases)if(o<tn){if(h)return;l.g.visible=o>=60,u.gunArm.hand.getWorldPosition(l.g.position),u.gunArm.pitch.getWorldQuaternion(l.g.quaternion),d*=di(et(o,60,300))}else{const M=e.bundle==="clash"?Dt.meet:Dt.impact;if(o<M){l.g.visible=!0,this.dynPath(c,e,o,s,l.g.position),l.g.rotation.set(.6,.4,.8-(o-tn)*.011),h&&(d=xe(.3,Ha,Nh(et(o,tn,tn+260))));for(let m=1;m<=6;m++){const p=o-m*16;if(p<=tn)break;a.glow(this.dynPath(c,e,p,s,It),.34*(1-m/8),ge.super,.7*(1-m/7))}}else if(e.bundle==="clash"){const m=this.meetPoint(c,t.target,"super",kc),p=(o-M)/1e3,S=Math.min(p,.8),A=c<t.target?-1:1;l.g.visible=!0,l.g.position.copy(m).add(It.set(A*.6*S,1.2*S-4.9*S*S,A*.8*S)),l.g.position.y<.12&&(l.g.position.y=.12),l.g.rotation.set(S*6,.4,S*5*A),g=p<.5;for(let v=0;v<3;v++){const b=et(p,v*.1,.9+v*.1);b>0&&b<1&&a.smoke(It.copy(l.g.position).add(Ee.set(0,.2*b,0)),.2+.5*b,10260362,.6*(1-b))}c<t.target&&this.clashFx(m,p,!0,0)}else{const m=t.target===0?zc:this.toWorld(t.target,Bc,0,Ka);this.blastFx(m,(o-M)/1e3,t.target===0&&!s)}}else{if(h)return;if(o<Dt.impact)l.g.visible=o>=60,u.gunArm.hand.getWorldPosition(l.g.position),u.gunArm.pitch.getWorldQuaternion(l.g.quaternion),d*=di(et(o,60,300));else{const M=(o-Dt.impact)/1e3,m=this.toWorld(c,this.P.windHand,f.beta,De),p=c===0?ae.set(.5,.12,nn-.3):this.toWorld(c,A_,0,ae),S=et(M,0,.55);if(l.g.visible=!0,l.g.position.lerpVectors(m,p,S),l.g.position.y=xe(m.y,p.y,S*S)+.35*He(S)*(1-S),S>=1&&(l.g.position.y=p.y+.12*He(et(M,.55,.8))*.5),l.g.rotation.set(1.2*S+(S>=1?.37:0),.6,z_*Math.min(1,S*1.2)),g=M<1.3,M>.5&&M<2.6)for(let A=0;A<4;A++){const v=et(M,.5+A*.25,1.7+A*.25);v>0&&v<1&&a.smoke(It.copy(l.g.position).add(Ee.set(.1*A-.15,.15+.7*v,0)),.25+.5*v,10260362,.7*(1-v))}}}if(l.g.visible&&(l.g.scale.setScalar(d),g)){l.g.updateMatrixWorld(!0);const M=l.tip.getWorldPosition(It),m=d/Ha;a.star(M,(.32+.08*Math.sin(r*47))*m,ge.super,r*9),a.glow(M,.6*m,ge.super,.9);for(let p=0;p<5;p++){const S=(r*2.6+p/5)%1,A=ye(p,Math.floor(r*2.6+p/5))*Ve;Qe.set(Math.cos(A)*.7,.8,Math.sin(A)*.7).normalize(),a.streak(De.copy(M).addScaledVector(Qe,(.05+S*.25)*m),Qe,.07*m,p%2?16777215:ge.super,1-S)}}}clashFx(t,e,n,s){const r=this.fx,a=n?1.7:1;if(r.star(t,.5*a*(.55+.45*Qt(e/.06))*(1-et(e,.14,.5)),16777215,e*2),r.glow(t,1.3*a*(1-et(e,0,.35)),n?16766708:16777215,.9),r.glow(t,1,16774880,.8*(1-et(e,0,.3)))?.scale.set(3.2*a,.09*a,1),n&&r.ring(t,$a(this.camera,t),.25+1.1*Qt(e/.4),ge.super,.9*(1-et(e,.1,.5))),this.flashBoost=Math.max(this.flashBoost,1.2*(1-et(e,0,.3))),r.debris("shard",t,10,e,2.4,It.set(0,.2,0),1),r.burst(t,8,e,.25,3,.35,n?Xc:N_),!n){const o=Math.min(e,Math.sqrt((t.y-.05)/4.9));for(let c=0;c<2;c++){const l=this.slugs[s+c];if(!l)break;l.visible=!0,l.position.set(t.x+(c-.5)*.12,t.y-4.9*o*o,t.z+(c-.5)*.08),l.rotation.x=o*12*(c?1:-1)}}}blockFx(t,e,n,s){const r=this.fx,a=n?.45:1;r.glow(It.copy(t).addScaledVector($a(this.camera,t),.1),1.2*a*(1-et(e,0,.35)),ge.protect,.9),r.ring(t,$a(this.camera,t),(.1+.26*Qt(e/.3))*a,ge.protect,.95*(1-et(e,.1,.45)),!0),r.star(t,.45*a*Qt(e/.04)*(1-et(e,.06,.3)),16774096,.3),n?De.set(0,.6,-.6):De.subVectors(s,t).setY(0).normalize().multiplyScalar(.7).setY(.5),r.debris("splinter",t,n?10:8,e,n?1.6:2.2,De,.8),r.burst(t,6,e,.2,1.6*a,.22*a,F_);for(let o=0;o<3;o++){const c=et(e,.02+o*.05,.9+o*.1);c>0&&c<1&&r.smoke(It.copy(t).add(De.set((o-1)*.12*a,(.08+.3*c)*a,0)),(.12+.35*c)*a,14267530,.65*(1-c))}}hitFx(t,e,n){if(n)return;const s=this.fx;s.star(t,.85*Qt(e/.04)*(1-et(e,.08,.35)),16777215,.2),s.glow(t,1.4*(1-et(e,0,.3)),16773840,.9),s.burst(t,8,e,.25,3,.35,O_)}blastFx(t,e,n){const s=this.fx;if(n){s.blast(It.copy(t).setY(t.y+.35+.4*Qt(e/.4)),1.5*(.6+.4*Qt(e/.08))*(1-et(e,.15,.55)),ge.super,.85),s.burst(De.copy(t).setY(t.y+.6),8,e,.3,2.5,.3,qc,!0),this.flashBoost=Math.max(this.flashBoost,1.2*(1-et(e,0,.4)));return}const r=this.n>2?.8:1;s.blast(It.copy(t).setY(t.y+.55+.5*Qt(e/.4)),3.4*r*(.6+.4*Qt(e/.08))*(1-et(e,.15,.6)),ge.super,.95),s.blast(It.copy(t).setY(t.y+.75),1.4*(1-et(e,0,.18)),16759020,.9),this.flashBoost=Math.max(this.flashBoost,1.6*(1-et(e,0,.5)));for(let a=0;a<8;a++){const o=e/(1.4+ye(a,1));if(o>=1)continue;const c=ye(a,2)*Ve,l=(.2+.8*Qt(o))*r;Xa.set(ge.super).lerp(L_,et(o,0,.2)).lerp(I_,et(o,.2,.8)),s.smoke(It.set(t.x+Math.cos(c)*l*.8+.3*o,t.y+.3+Math.sin(c)*l*.6+.9*o,t.z-.1),(.7+1.4*o)*r,Xa.getHex(),.9*(1-o))}s.burst(De.copy(t).setY(t.y+.9),10,e,.35,5,.45,qc,!0),s.debris("splinter",De.copy(t).setY(t.y+.4),8,e,3,ae.set(0,1,0),.9)}screenFlash(t,e){return e<0||!t||e>1?U_:(Za.hex=t.diesBy==="blast"?ge.super:16777215,Za.k=(t.diesBy==="blast"?.4:.55)*(1-et(e,.02,.25)),Za)}screen(t,e){return e.copy(t).project(this.camera),e.set((e.x+1)/2*this.w,(1-e.y)/2*this.h,e.z)}screenBox(t,e,n,s,r,a,o,c,l){let f=1/0,u=1/0,h=-1/0,d=-1/0;for(let g=0;g<8;g++)It.set(g&1?n:e,g&2?r:s,g&4?o:a),this.slots[t].post.localToWorld(It),this.screen(It,De),f=Math.min(f,De.x),h=Math.max(h,De.x),u=Math.min(u,De.y),d=Math.max(d,De.y);c[l]=f,c[l+1]=u,c[l+2]=h,c[l+3]=d}overlayState(t,e){const n=this.camera,s=this.pickRects;s.fill(0);for(let l=0;l<Xn;l++)s[l*4]=1,s[l*4+2]=0;for(const l of this.marks)l.show=!1;for(const l of this.aims)l.on=!1;const r=e.t,a=e.ta,o=t.phase==="choosing"||t.phase==="intro";for(let l=0;l<t.rivals.length&&l<this.marks.length;l++){const f=t.rivals[l],u=this.slots[f.id];if(!u?.on)continue;const h=this.marks[l],d=e.facts[f.id]??null;h.show=!0,this.screen(u.anchor,ae),h.headX=ae.x,h.headY=ae.y;const g=Math.max(.5,u.anchor.distanceTo(n.position));h.headR=.26/(g*this.tanFull)*(this.h/2),this.screen(It.copy(u.anchor).addScaledVector(Ya,.78),ae),h.topY=ae.y,h.ammo=Un(Math.round(f.ammo),0,3),h.seat=f.color>=0&&f.color<4?f.color:-1,h.popK=-1,h.badge=null,h.downMs=-1,h.gone=!f.alive&&!d,h.target=0;const M=u.cover.rows,m=Math.min(M[0]??0,-.45)-Yn,p=Math.max(M[M.length-1]??0,.45)+Yn;if(f.alive&&!(d&&d.died)){const S=f.id*4;this.screenBox(f.id,-.4,ln+Yn,0,2.35,m,p,s,S);const A=10;s[S]=(s[S]??0)-A,s[S+1]=Math.min(s[S+1]??0,h.topY-34)-A,s[S+2]=(s[S+2]??0)+A,s[S+3]=(s[S+3]??0)+A}o&&t.target===f.id&&f.alive&&(this.screenBox(f.id,-.3,ln,cn*.55,2,-.62,.62,As,0),h.x0=As[0],h.y0=As[1],h.x1=As[2],h.y1=As[3],h.target=.88+.12*Math.sin(t.timeMs*.006)),d&&(f.ammo===d.ammoAfter&&d.ammoAfter!==d.ammoBefore&&r>=Dt.ammo&&(h.popK=et(r,Dt.ammo,Dt.ammo+320),h.popFrom=Math.min(d.ammoBefore,d.ammoAfter),h.popTo=Math.max(d.ammoBefore,d.ammoAfter),h.popK>=1&&(h.popK=-1)),h.badge=d.action,h.badgeMs=r,d.died&&a>=Dt.impact&&(h.downMs=a-Dt.impact))}if(!e.active||e.side||a<0||a>950)return;let c=0;for(const l of e.attacks){if(l.attacker===0||l.target===0)continue;const f=this.slots[l.attacker],u=this.slots[l.target],h=this.aims[c];!f?.on||!u?.on||!h||f.mark<0||u.mark<0||(c++,h.on=!0,h.from=f.mark,h.to=u.mark,h.hex=ge[l.kind],h.grow=Qt(et(a,60,380)),h.alpha=1-et(a,700,950))}}}const As=new Float32Array(4);function $a(i,t){return B_.copy(i.position).sub(t).normalize()}function Er(i,t,e,n,s){const r=(1-s)*(1-s),a=2*s*(1-s),o=s*s;return i.set(t.x*r+e.x*a+n.x*o,t.y*r+e.y*a+n.y*o,t.z*r+e.z*a+n.z*o)}const G_=i=>xe(i,1-(1-i)**1.6,.6),k_=0,W_=(i,t)=>new H_(i,t?.style??"toy");export{Ki as FP_CINEMATIC_FREEZE_MS,k_ as ME,W_ as createFpScene};
