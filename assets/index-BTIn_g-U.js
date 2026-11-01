import{a as Wh,O as bs}from"./icons-CIqdHjLj.js";const Go="186",Xh=0,ml=1,qh=2,ws=1,Yh=2,Es=3,yi=0,qe=1,Pn=2,Yn=0,Rs=1,rs=2,gl=3,_l=4,Kh=5,Qi=100,Zh=101,$h=102,Jh=103,Qh=104,jh=200,tu=201,eu=202,nu=203,Gc=204,Vc=205,iu=206,su=207,ru=208,au=209,ou=210,lu=211,cu=212,hu=213,uu=214,qa=0,Ya=1,Ka=2,Cs=3,Za=4,$a=5,Ja=6,Qa=7,Or=0,fu=1,du=2,yn=0,kc=1,Wc=2,Xc=3,qc=4,Yc=5,Kc=6,Zc=7,$c=300,bi=301,as=302,Kr=303,Zr=304,Br=306,ja=1e3,qn=1001,to=1002,He=1003,pu=1004,zs=1005,Ge=1006,$r=1007,oi=1008,cn=1009,Jc=1010,Qc=1011,Ps=1012,Vo=1013,Nn=1014,In=1015,Fn=1016,ko=1017,Wo=1018,Ls=1020,jc=35902,th=35899,eh=1021,nh=1022,Sn=1023,Zn=1026,Si=1027,ih=1028,Xo=1029,Ei=1030,qo=1031,Yo=1033,Sr=33776,yr=33777,br=33778,Er=33779,eo=35840,no=35841,io=35842,so=35843,ro=36196,ao=37492,oo=37496,lo=37488,co=37489,Ar=37490,ho=37491,uo=37808,fo=37809,po=37810,mo=37811,go=37812,_o=37813,xo=37814,vo=37815,Mo=37816,So=37817,yo=37818,bo=37819,Eo=37820,To=37821,Ao=36492,wo=36494,Ro=36495,Co=36283,Po=36284,wr=36285,Lo=36286,mu=3200,Rr=0,gu=1,ai="",nn="srgb",Cr="srgb-linear",Pr="linear",ae="srgb",Jr=7680,_u=519,xu=512,vu=513,Mu=514,Ko=515,Su=516,yu=517,Zo=518,bu=519,sh=35044,xl="300 es",Un=2e3,Ds=2001;function Eu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tu(){const i=Lr("canvas");return i.style.display="block",i}const vl={};function Dr(...i){const t="THREE."+i.shift();console.log(t,...i)}function rh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ut(...i){i=rh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Qt(...i){i=rh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function es(...i){const t=i.join(" ");t in vl||(vl[t]=!0,Ut(...i))}function Au(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const wu={[qa]:Ya,[Ka]:Ja,[Za]:Qa,[Cs]:$a,[Ya]:qa,[Ja]:Ka,[Qa]:Za,[$a]:Cs};class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qr=Math.PI/180,Do=180/Math.PI;function li(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function Ru(i,t){return(i%t+t)%t}function jr(i,t,e){return(1-e)*i+e*t}function Ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class Dt{static{Dt.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let c=n[s+0],o=n[s+1],f=n[s+2],u=n[s+3],h=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||c!==h||o!==d||f!==g){let m=c*h+o*d+f*g+u*v;m<0&&(h=-h,d=-d,g=-g,v=-v,m=-m);let p=1-l;if(m<.9995){const S=Math.acos(m),A=Math.sin(S);p=Math.sin(p*S)/A,l=Math.sin(l*S)/A,c=c*p+h*l,o=o*p+d*l,f=f*p+g*l,u=u*p+v*l}else{c=c*p+h*l,o=o*p+d*l,f=f*p+g*l,u=u*p+v*l;const S=1/Math.sqrt(c*c+o*o+f*f+u*u);c*=S,o*=S,f*=S,u*=S}}t[e]=c,t[e+1]=o,t[e+2]=f,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const l=n[s],c=n[s+1],o=n[s+2],f=n[s+3],u=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return t[e]=l*g+f*u+c*d-o*h,t[e+1]=c*g+f*h+o*u-l*d,t[e+2]=o*g+f*d+l*h-c*u,t[e+3]=f*g-l*u-c*h-o*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,c=Math.sin,o=l(n/2),f=l(s/2),u=l(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*f*u+o*d*g,this._y=o*d*u-h*f*g,this._z=o*f*g+h*d*u,this._w=o*f*u-h*d*g;break;case"YXZ":this._x=h*f*u+o*d*g,this._y=o*d*u-h*f*g,this._z=o*f*g-h*d*u,this._w=o*f*u+h*d*g;break;case"ZXY":this._x=h*f*u-o*d*g,this._y=o*d*u+h*f*g,this._z=o*f*g+h*d*u,this._w=o*f*u-h*d*g;break;case"ZYX":this._x=h*f*u-o*d*g,this._y=o*d*u+h*f*g,this._z=o*f*g-h*d*u,this._w=o*f*u+h*d*g;break;case"YZX":this._x=h*f*u+o*d*g,this._y=o*d*u+h*f*g,this._z=o*f*g-h*d*u,this._w=o*f*u-h*d*g;break;case"XZY":this._x=h*f*u-o*d*g,this._y=o*d*u-h*f*g,this._z=o*f*g+h*d*u,this._w=o*f*u+h*d*g;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],c=e[9],o=e[2],f=e[6],u=e[10],h=n+l+u;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-c)*d,this._y=(r-o)*d,this._z=(a-s)*d}else if(n>l&&n>u){const d=2*Math.sqrt(1+n-l-u);this._w=(f-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+o)/d}else if(l>u){const d=2*Math.sqrt(1+l-n-u);this._w=(r-o)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+f)/d}else{const d=2*Math.sqrt(1+u-n-l);this._w=(a-s)/d,this._x=(r+o)/d,this._y=(c+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,c=e._y,o=e._z,f=e._w;return this._x=n*f+a*l+s*o-r*c,this._y=s*f+a*c+r*l-n*o,this._z=r*f+a*o+n*c-s*l,this._w=a*f-n*l-s*c-r*o,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let c=1-e;if(l<.9995){const o=Math.acos(l),f=Math.sin(o);c=Math.sin(c*o)/f,e=Math.sin(e*o)/f,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{static{R.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ml.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ml.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,c=t.w,o=2*(a*s-l*n),f=2*(l*e-r*s),u=2*(r*n-a*e);return this.x=e+c*o+a*u-l*f,this.y=n+c*f+l*o-r*u,this.z=s+c*u+r*f-a*o,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,c=e.z;return this.x=s*c-r*l,this.y=r*a-n*c,this.z=n*l-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ta.copy(this).projectOnVector(t),this.sub(ta)}reflect(t){return this.sub(ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new R,Ml=new mn;class Ft{static{Ft.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,c,o){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,o)}set(t,e,n,s,r,a,l,c,o){const f=this.elements;return f[0]=t,f[1]=s,f[2]=l,f[3]=e,f[4]=r,f[5]=c,f[6]=n,f[7]=a,f[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],c=n[6],o=n[1],f=n[4],u=n[7],h=n[2],d=n[5],g=n[8],v=s[0],m=s[3],p=s[6],S=s[1],A=s[4],M=s[7],b=s[2],E=s[5],C=s[8];return r[0]=a*v+l*S+c*b,r[3]=a*m+l*A+c*E,r[6]=a*p+l*M+c*C,r[1]=o*v+f*S+u*b,r[4]=o*m+f*A+u*E,r[7]=o*p+f*M+u*C,r[2]=h*v+d*S+g*b,r[5]=h*m+d*A+g*E,r[8]=h*p+d*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],o=t[7],f=t[8];return e*a*f-e*l*o-n*r*f+n*l*c+s*r*o-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],o=t[7],f=t[8],u=f*a-l*o,h=l*c-f*r,d=o*r-a*c,g=e*u+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*o-f*n)*v,t[2]=(l*n-s*a)*v,t[3]=h*v,t[4]=(f*e-s*c)*v,t[5]=(s*r-l*e)*v,t[6]=d*v,t[7]=(n*c-o*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){const c=Math.cos(r),o=Math.sin(r);return this.set(n*c,n*o,-n*(c*a+o*l)+a+t,-s*o,s*c,-s*(-o*a+c*l)+l+e,0,0,1),this}scale(t,e){return es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ea.makeScale(t,e)),this}rotate(t){return es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ea.makeRotation(-t)),this}translate(t,e){return es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ea.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new Ft,Sl=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cu(){const i={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?Pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Cr]:{primaries:t,whitePoint:n,transfer:Pr,toXYZ:Sl,fromXYZ:yl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Sl,fromXYZ:yl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}const Kt=Cu();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ci;class Pu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ci===void 0&&(Ci=Lr("canvas")),Ci.width=t.width,Ci.height=t.height;const s=Ci.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ci}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lu=0;class $o{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(na(s[a].image)):r.push(na(s[a]))}else r=na(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}let Du=0;const ia=new R;class Ye extends Ti{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=qn,s=qn,r=Ge,a=oi,l=Sn,c=cn,o=Ye.DEFAULT_ANISOTROPY,f=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=li(),this.name="",this.source=new $o(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ja:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case to:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ja:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case to:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=$c;Ye.DEFAULT_ANISOTROPY=1;class ye{static{ye.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,o=c[0],f=c[4],u=c[8],h=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(f-h)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(o+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(o+1)/2,M=(d+1)/2,b=(p+1)/2,E=(f+h)/4,C=(u+v)/4,x=(g+m)/4;return A>M&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=E/n,r=C/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=x/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=x/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(h-f)*(h-f));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-v)/S,this.z=(h-f)/S,this.w=Math.acos((o+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Iu extends Ti{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Ye(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new $o(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends Iu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ah extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uu extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class oe{static{oe.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,c,o,f,u,h,d,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,o,f,u,h,d,g,v,m)}set(t,e,n,s,r,a,l,c,o,f,u,h,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=l,p[13]=c,p[2]=o,p[6]=f,p[10]=u,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Pi.setFromMatrixColumn(t,0).length(),r=1/Pi.setFromMatrixColumn(t,1).length(),a=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),o=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const h=a*f,d=a*u,g=l*f,v=l*u;e[0]=c*f,e[4]=-c*u,e[8]=o,e[1]=d+g*o,e[5]=h-v*o,e[9]=-l*c,e[2]=v-h*o,e[6]=g+d*o,e[10]=a*c}else if(t.order==="YXZ"){const h=c*f,d=c*u,g=o*f,v=o*u;e[0]=h+v*l,e[4]=g*l-d,e[8]=a*o,e[1]=a*u,e[5]=a*f,e[9]=-l,e[2]=d*l-g,e[6]=v+h*l,e[10]=a*c}else if(t.order==="ZXY"){const h=c*f,d=c*u,g=o*f,v=o*u;e[0]=h-v*l,e[4]=-a*u,e[8]=g+d*l,e[1]=d+g*l,e[5]=a*f,e[9]=v-h*l,e[2]=-a*o,e[6]=l,e[10]=a*c}else if(t.order==="ZYX"){const h=a*f,d=a*u,g=l*f,v=l*u;e[0]=c*f,e[4]=g*o-d,e[8]=h*o+v,e[1]=c*u,e[5]=v*o+h,e[9]=d*o-g,e[2]=-o,e[6]=l*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,d=a*o,g=l*c,v=l*o;e[0]=c*f,e[4]=v-h*u,e[8]=g*u+d,e[1]=u,e[5]=a*f,e[9]=-l*f,e[2]=-o*f,e[6]=d*u+g,e[10]=h-v*u}else if(t.order==="XZY"){const h=a*c,d=a*o,g=l*c,v=l*o;e[0]=c*f,e[4]=-u,e[8]=o*f,e[1]=h*u+v,e[5]=a*f,e[9]=d*u-g,e[2]=g*u-d,e[6]=l*f,e[10]=v*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nu,t,Fu)}lookAt(t,e,n){const s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),jn.crossVectors(n,sn),jn.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),jn.crossVectors(n,sn)),jn.normalize(),Hs.crossVectors(sn,jn),s[0]=jn.x,s[4]=Hs.x,s[8]=sn.x,s[1]=jn.y,s[5]=Hs.y,s[9]=sn.y,s[2]=jn.z,s[6]=Hs.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],c=n[8],o=n[12],f=n[1],u=n[5],h=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],S=n[3],A=n[7],M=n[11],b=n[15],E=s[0],C=s[4],x=s[8],T=s[12],P=s[1],N=s[5],F=s[9],G=s[13],D=s[2],V=s[6],Z=s[10],Y=s[14],st=s[3],B=s[7],X=s[11],J=s[15];return r[0]=a*E+l*P+c*D+o*st,r[4]=a*C+l*N+c*V+o*B,r[8]=a*x+l*F+c*Z+o*X,r[12]=a*T+l*G+c*Y+o*J,r[1]=f*E+u*P+h*D+d*st,r[5]=f*C+u*N+h*V+d*B,r[9]=f*x+u*F+h*Z+d*X,r[13]=f*T+u*G+h*Y+d*J,r[2]=g*E+v*P+m*D+p*st,r[6]=g*C+v*N+m*V+p*B,r[10]=g*x+v*F+m*Z+p*X,r[14]=g*T+v*G+m*Y+p*J,r[3]=S*E+A*P+M*D+b*st,r[7]=S*C+A*N+M*V+b*B,r[11]=S*x+A*F+M*Z+b*X,r[15]=S*T+A*G+M*Y+b*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],c=t[9],o=t[13],f=t[2],u=t[6],h=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15],S=c*d-o*h,A=l*d-o*u,M=l*h-c*u,b=a*d-o*f,E=a*h-c*f,C=a*u-l*f;return e*(v*S-m*A+p*M)-n*(g*S-m*b+p*E)+s*(g*A-v*b+p*C)-r*(g*M-v*E+m*C)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],o=t[6],f=t[10];return e*(a*f-l*o)-n*(r*f-l*c)+s*(r*o-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],o=t[7],f=t[8],u=t[9],h=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],S=e*l-n*a,A=e*c-s*a,M=e*o-r*a,b=n*c-s*l,E=n*o-r*l,C=s*o-r*c,x=f*v-u*g,T=f*m-h*g,P=f*p-d*g,N=u*m-h*v,F=u*p-d*v,G=h*p-d*m,D=S*G-A*F+M*N+b*P-E*T+C*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/D;return t[0]=(l*G-c*F+o*N)*V,t[1]=(s*F-n*G-r*N)*V,t[2]=(v*C-m*E+p*b)*V,t[3]=(h*E-u*C-d*b)*V,t[4]=(c*P-a*G-o*T)*V,t[5]=(e*G-s*P+r*T)*V,t[6]=(m*M-g*C-p*A)*V,t[7]=(f*C-h*M+d*A)*V,t[8]=(a*F-l*P+o*x)*V,t[9]=(n*P-e*F-r*x)*V,t[10]=(g*E-v*M+p*S)*V,t[11]=(u*M-f*E-d*S)*V,t[12]=(l*T-a*N-c*x)*V,t[13]=(e*N-n*T+s*x)*V,t[14]=(v*A-g*b-m*S)*V,t[15]=(f*b-u*A+h*S)*V,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,c=t.z,o=r*a,f=r*l;return this.set(o*a+n,o*l-s*c,o*c+s*l,0,o*l+s*c,f*l+n,f*c-s*a,0,o*c-s*l,f*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,l=e._z,c=e._w,o=r+r,f=a+a,u=l+l,h=r*o,d=r*f,g=r*u,v=a*f,m=a*u,p=l*u,S=c*o,A=c*f,M=c*u,b=n.x,E=n.y,C=n.z;return s[0]=(1-(v+p))*b,s[1]=(d+M)*b,s[2]=(g-A)*b,s[3]=0,s[4]=(d-M)*E,s[5]=(1-(h+p))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+A)*C,s[9]=(m-S)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Pi.set(s[0],s[1],s[2]).length();const l=Pi.set(s[4],s[5],s[6]).length(),c=Pi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);const o=1/a,f=1/l,u=1/c;return _n.elements[0]*=o,_n.elements[1]*=o,_n.elements[2]*=o,_n.elements[4]*=f,_n.elements[5]*=f,_n.elements[6]*=f,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,e.setFromRotationMatrix(_n),n.x=a,n.y=l,n.z=c,this}makePerspective(t,e,n,s,r,a,l=Un,c=!1){const o=this.elements,f=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(l===Un)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(l===Ds)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=f,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=u,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=g,o[14]=v,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=Un,c=!1){const o=this.elements,f=2/(e-t),u=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,v;if(c)g=1/(a-r),v=a/(a-r);else if(l===Un)g=-2/(a-r),v=-(a+r)/(a-r);else if(l===Ds)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=f,o[4]=0,o[8]=0,o[12]=h,o[1]=0,o[5]=u,o[9]=0,o[13]=d,o[2]=0,o[6]=0,o[10]=g,o[14]=v,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Pi=new R,_n=new oe,Nu=new R(0,0,0),Fu=new R(1,1,1),jn=new R,Hs=new R,sn=new R,bl=new oe,El=new mn;class On{constructor(t=0,e=0,n=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],l=s[8],c=s[1],o=s[5],f=s[9],u=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,o),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,o),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,o),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return El.setFromEuler(this),this.setFromQuaternion(El,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class oh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ou=0;const Tl=new R,Li=new mn,Bn=new oe,Gs=new R,us=new R,Bu=new R,zu=new mn,Al=new R(1,0,0),wl=new R(0,1,0),Rl=new R(0,0,1),Cl={type:"added"},Hu={type:"removed"},Di={type:"childadded",child:null},sa={type:"childremoved",child:null};class De extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new R,e=new On,n=new mn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ft}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(Al,t)}rotateY(t){return this.rotateOnAxis(wl,t)}rotateZ(t){return this.rotateOnAxis(Rl,t)}translateOnAxis(t,e){return Tl.copy(t).applyQuaternion(this.quaternion),this.position.add(Tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Al,t)}translateY(t){return this.translateOnAxis(wl,t)}translateZ(t){return this.translateOnAxis(Rl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gs.copy(t):Gs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(us,Gs,this.up):Bn.lookAt(Gs,us,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(Bn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cl),Di.child=t,this.dispatchEvent(Di),Di.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hu),sa.child=t,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cl),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,Bu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,zu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let o=0,f=c.length;o<f;o++){const u=c[o];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,o=this.material.length;c<o;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];s.animations.push(r(t.animations,c))}}if(e){const l=a(t.geometries),c=a(t.materials),o=a(t.textures),f=a(t.images),u=a(t.shapes),h=a(t.skeletons),d=a(t.animations),g=a(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),o.length>0&&(n.textures=o),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(l){const c=[];for(const o in l){const f=l[o];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}De.DEFAULT_UP=new R(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ji extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gu={type:"move"};class ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const l=this._targetRay,c=this._grip,o=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(o&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(o,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=o.joints["index-finger-tip"],u=o.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,g=.005;o.inputState.pinching&&h>d+g?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!o.inputState.pinching&&h<=d-g&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Gu)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=Ru(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=aa(a,r,t+1/3),this.g=aa(a,r,t),this.b=aa(a,r,t-1/3)}return Kt.colorSpaceToWorking(this,s),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const n=lh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return Kt.workingToColorSpace(Xe.copy(this),t),Math.round(Yt(Xe.r*255,0,255))*65536+Math.round(Yt(Xe.g*255,0,255))*256+Math.round(Yt(Xe.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(Xe.copy(this),e);const n=Xe.r,s=Xe.g,r=Xe.b,a=Math.max(n,s,r),l=Math.min(n,s,r);let c,o;const f=(l+a)/2;if(l===a)c=0,o=0;else{const u=a-l;switch(o=f<=.5?u/(a+l):u/(2-a-l),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=o,t.l=f,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=nn){Kt.workingToColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,s=Xe.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Vs);const n=jr(ti.h,Vs.h,e),s=jr(ti.s,Vs.s,e),r=jr(ti.l,Vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Lt;Lt.NAMES=lh;class Jo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new Jo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Io extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const xn=new R,zn=new R,oa=new R,Hn=new R,Ii=new R,Ui=new R,Pl=new R,la=new R,ca=new R,ha=new R,ua=new ye,fa=new ye,da=new ye;class dn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),zn.subVectors(n,e),oa.subVectors(t,e);const a=xn.dot(xn),l=xn.dot(zn),c=xn.dot(oa),o=zn.dot(zn),f=zn.dot(oa),u=a*o-l*l;if(u===0)return r.set(0,0,0),null;const h=1/u,d=(o*c-l*f)*h,g=(a*f-l*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,a,l,c){return this.getBarycoord(t,e,n,s,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hn.x),c.addScaledVector(a,Hn.y),c.addScaledVector(l,Hn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return ua.setScalar(0),fa.setScalar(0),da.setScalar(0),ua.fromBufferAttribute(t,e),fa.fromBufferAttribute(t,n),da.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ua,r.x),a.addScaledVector(fa,r.y),a.addScaledVector(da,r.z),a}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),zn.subVectors(t,e),xn.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),xn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return dn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,l;Ii.subVectors(s,n),Ui.subVectors(r,n),la.subVectors(t,n);const c=Ii.dot(la),o=Ui.dot(la);if(c<=0&&o<=0)return e.copy(n);ca.subVectors(t,s);const f=Ii.dot(ca),u=Ui.dot(ca);if(f>=0&&u<=f)return e.copy(s);const h=c*u-f*o;if(h<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(n).addScaledVector(Ii,a);ha.subVectors(t,r);const d=Ii.dot(ha),g=Ui.dot(ha);if(g>=0&&d<=g)return e.copy(r);const v=d*o-c*g;if(v<=0&&o>=0&&g<=0)return l=o/(o-g),e.copy(n).addScaledVector(Ui,l);const m=f*g-d*u;if(m<=0&&u-f>=0&&d-g>=0)return Pl.subVectors(r,s),l=(u-f)/(u-f+(d-g)),e.copy(s).addScaledVector(Pl,l);const p=1/(m+v+h);return a=v*p,l=h*p,e.copy(n).addScaledVector(Ii,a).addScaledVector(Ui,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ns{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Ws.subVectors(this.max,fs),Ni.subVectors(t.a,fs),Fi.subVectors(t.b,fs),Oi.subVectors(t.c,fs),ei.subVectors(Fi,Ni),ni.subVectors(Oi,Fi),di.subVectors(Ni,Oi);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-di.z,di.y,ei.z,0,-ei.x,ni.z,0,-ni.x,di.z,0,-di.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-di.y,di.x,0];return!pa(e,Ni,Fi,Oi,Ws)||(e=[1,0,0,0,1,0,0,0,1],!pa(e,Ni,Fi,Oi,Ws))?!1:(Xs.crossVectors(ei,ni),e=[Xs.x,Xs.y,Xs.z],pa(e,Ni,Fi,Oi,Ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Gn=[new R,new R,new R,new R,new R,new R,new R,new R],vn=new R,ks=new Ns,Ni=new R,Fi=new R,Oi=new R,ei=new R,ni=new R,di=new R,fs=new R,Ws=new R,Xs=new R,pi=new R;function pa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){pi.fromArray(i,r);const l=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),c=t.dot(pi),o=e.dot(pi),f=n.dot(pi);if(Math.max(-Math.max(c,o,f),Math.min(c,o,f))>l)return!1}return!0}const Re=new R,qs=new Dt;let Vu=0;class pn extends Ti{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sh,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qs.fromBufferAttribute(this,e),qs.applyMatrix3(t),this.setXY(e,qs.x,qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class ch extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hh extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const ku=new Ns,ds=new R,ma=new R;class zr{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ku.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);const e=ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(ma)),this.expandByPoint(ds.copy(t.center).sub(ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Wu=0;const un=new oe,ga=new De,Bi=new R,rn=new Ns,ps=new Ns,Fe=new R;class Ce extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eu(t)?hh:ch)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return ga.lookAt(t),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const l=e[r];ps.setFromBufferAttribute(l),this.morphTargetsRelative?(Fe.addVectors(rn.min,ps.min),rn.expandByPoint(Fe),Fe.addVectors(rn.max,ps.max),rn.expandByPoint(Fe)):(rn.expandByPoint(ps.min),rn.expandByPoint(ps.max))}rn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){const l=e[r],c=this.morphTargetsRelative;for(let o=0,f=l.count;o<f;o++)Fe.fromBufferAttribute(l,o),c&&(Bi.fromBufferAttribute(t,o),Fe.add(Bi)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const l=[],c=[];for(let x=0;x<n.count;x++)l[x]=new R,c[x]=new R;const o=new R,f=new R,u=new R,h=new Dt,d=new Dt,g=new Dt,v=new R,m=new R;function p(x,T,P){o.fromBufferAttribute(n,x),f.fromBufferAttribute(n,T),u.fromBufferAttribute(n,P),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),f.sub(o),u.sub(o),d.sub(h),g.sub(h);const N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(v.copy(f).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(N),m.copy(u).multiplyScalar(d.x).addScaledVector(f,-g.x).multiplyScalar(N),l[x].add(v),l[T].add(v),l[P].add(v),c[x].add(m),c[T].add(m),c[P].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,T=S.length;x<T;++x){const P=S[x],N=P.start,F=P.count;for(let G=N,D=N+F;G<D;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const A=new R,M=new R,b=new R,E=new R;function C(x){b.fromBufferAttribute(s,x),E.copy(b);const T=l[x];A.copy(T),A.sub(b.multiplyScalar(b.dot(T))).normalize(),M.crossVectors(E,T);const N=M.dot(c[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,N)}for(let x=0,T=S.length;x<T;++x){const P=S[x],N=P.start,F=P.count;for(let G=N,D=N+F;G<D;G+=3)C(t.getX(G+0)),C(t.getX(G+1)),C(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new R,r=new R,a=new R,l=new R,c=new R,o=new R,f=new R,u=new R;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),f.subVectors(a,r),u.subVectors(s,r),f.cross(u),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),l.add(f),c.add(f),o.add(f),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,o.x,o.y,o.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),f.subVectors(a,r),u.subVectors(s,r),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(l,c){const o=l.array,f=l.itemSize,u=l.normalized,h=new o.constructor(c.length*f);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){l.isInterleavedBufferAttribute?d=c[v]*l.data.stride+l.offset:d=c[v]*f;for(let p=0;p<f;p++)h[g++]=o[d++]}return new pn(h,f,u)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,s=this.attributes;for(const l in s){const c=s[l],o=t(c,n);e.setAttribute(l,o)}const r=this.morphAttributes;for(const l in r){const c=[],o=r[l];for(let f=0,u=o.length;f<u;f++){const h=o[f],d=t(h,n);c.push(d)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const o=a[l];e.addGroup(o.start,o.count,o.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const o in c)c[o]!==void 0&&(t[o]=c[o]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const o=n[c];t.data.attributes[c]=o.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const o=this.morphAttributes[c],f=[];for(let u=0,h=o.length;u<h;u++){const d=o[u];f.push(d.toJSON(t.data))}f.length>0&&(s[c]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const o in s){const f=s[o];this.setAttribute(o,f.clone(e))}const r=t.morphAttributes;for(const o in r){const f=[],u=r[o];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(e));this.morphAttributes[o]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let o=0,f=a.length;o<f;o++){const u=a[o];this.addGroup(u.start,u.count,u.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sh,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const $e=new R;class Ir{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Dr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new pn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ir(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Dr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const _a=new R,qu=new R,Yu=new Ft;class ri{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=_a.subVectors(n,e).cross(qu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(_a),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yu.getNormalMatrix(t),s=this.coplanarPoint(_a).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Ku=0;class ui extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Rs,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Vc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const l in r){const c=r[l];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ri().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Dt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class uh extends ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zi;const ms=new R,Hi=new R,Gi=new R,Vi=new Dt,gs=new Dt,fh=new oe,Ys=new R,_s=new R,Ks=new R,Ll=new Dt,xa=new Dt,Dl=new Dt;class is extends De{constructor(t=new uh){if(super(),this.isSprite=!0,this.type="Sprite",zi===void 0){zi=new Ce;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xu(e,5);zi.setIndex([0,1,2,0,2,3]),zi.setAttribute("position",new Ir(n,3,0,!1)),zi.setAttribute("uv",new Ir(n,2,3,!1))}this.geometry=zi,this.material=t,this.center=new Dt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),fh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Gi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Zs(Ys.set(-.5,-.5,0),Gi,a,Hi,s,r),Zs(_s.set(.5,-.5,0),Gi,a,Hi,s,r),Zs(Ks.set(.5,.5,0),Gi,a,Hi,s,r),Ll.set(0,0),xa.set(1,0),Dl.set(1,1);let l=t.ray.intersectTriangle(Ys,_s,Ks,!1,ms);if(l===null&&(Zs(_s.set(-.5,.5,0),Gi,a,Hi,s,r),xa.set(0,1),l=t.ray.intersectTriangle(Ys,Ks,_s,!1,ms),l===null))return;const c=t.ray.origin.distanceTo(ms);c<t.near||c>t.far||e.push({distance:c,point:ms.clone(),uv:dn.getInterpolation(ms,Ys,_s,Ks,Ll,xa,Dl,new Dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Zs(i,t,e,n,s,r){Vi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(gs.x=r*Vi.x-s*Vi.y,gs.y=s*Vi.x+r*Vi.y):gs.copy(Vi),i.copy(t),i.x+=gs.x,i.y+=gs.y,i.applyMatrix4(fh)}const Vn=new R,va=new R,$s=new R,Js=new R;class dh{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){va.copy(t).add(e).multiplyScalar(.5),$s.copy(e).sub(t).normalize(),Js.copy(this.origin).sub(va);const r=t.distanceTo(e)*.5,a=-this.direction.dot($s),l=Js.dot(this.direction),c=-Js.dot($s),o=Js.lengthSq(),f=Math.abs(1-a*a);let u,h,d,g;if(f>0)if(u=a*c-l,h=a*l-c,g=r*f,u>=0)if(h>=-g)if(h<=g){const v=1/f;u*=v,h*=v,d=u*(u+a*h+2*l)+h*(a*u+h+2*c)+o}else h=r,u=Math.max(0,-(a*h+l)),d=-u*u+h*(h+2*c)+o;else h=-r,u=Math.max(0,-(a*h+l)),d=-u*u+h*(h+2*c)+o;else h<=-g?(u=Math.max(0,-(-a*r+l)),h=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+h*(h+2*c)+o):h<=g?(u=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+o):(u=Math.max(0,-(a*r+l)),h=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+h*(h+2*c)+o);else h=a>0?-r:r,u=Math.max(0,-(a*h+l)),d=-u*u+h*(h+2*c)+o;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(va).addScaledVector($s,h),d}intersectSphere(t,e){if(t.radius<0)return null;Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,c;const o=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return o>=0?(n=(t.min.x-h.x)*o,s=(t.max.x-h.x)*o):(n=(t.max.x-h.x)*o,s=(t.min.x-h.x)*o),f>=0?(r=(t.min.y-h.y)*f,a=(t.max.y-h.y)*f):(r=(t.max.y-h.y)*f,a=(t.min.y-h.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(l=(t.min.z-h.z)*u,c=(t.max.z-h.z)*u):(l=(t.max.z-h.z)*u,c=(t.min.z-h.z)*u),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,l=this.direction,c=l.x,o=l.y,f=l.z,u=t.x-a.x,h=t.y-a.y,d=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=n.x-a.x,S=n.y-a.y,A=n.z-a.z,M=Math.abs(c),b=Math.abs(o),E=Math.abs(f);let C,x,T,P,N,F,G,D,V,Z,Y,st;if(M>=b&&M>=E?(T=c,F=u,V=g,st=p,c>=0?(C=o,x=f,P=h,N=d,G=v,D=m,Z=S,Y=A):(C=f,x=o,P=d,N=h,G=m,D=v,Z=A,Y=S)):b>=E?(T=o,F=h,V=v,st=S,o>=0?(C=f,x=c,P=d,N=u,G=m,D=g,Z=A,Y=p):(C=c,x=f,P=u,N=d,G=g,D=m,Z=p,Y=A)):(T=f,F=d,V=m,st=A,f>=0?(C=c,x=o,P=u,N=h,G=g,D=v,Z=p,Y=S):(C=o,x=c,P=h,N=u,G=v,D=g,Z=S,Y=p)),T===0)return null;const B=C/T,X=x/T,J=1/T,rt=P-B*F,ft=N-X*F,Zt=G-B*V,zt=D-X*V,Ot=Z-B*st,q=Y-X*st,j=Ot*zt-q*Zt,xt=rt*q-ft*Ot,Nt=Zt*ft-zt*rt;if(s){if(j<0||xt<0||Nt<0)return null}else if((j<0||xt<0||Nt<0)&&(j>0||xt>0||Nt>0))return null;const Mt=j+xt+Nt;if(Mt===0)return null;const kt=J*(j*F+xt*V+Nt*st);return(Mt>0?kt<0:kt>0)?null:this.at(kt/Mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qo extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Il=new oe,mi=new dh,Qs=new zr,Ul=new R,js=new R,tr=new R,er=new R,Ma=new R,nr=new R,Nl=new R,ir=new R;class Ke extends De{constructor(t=new Ce,e=new Qo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const l=this.morphTargetInfluences;if(r&&l){nr.set(0,0,0);for(let c=0,o=r.length;c<o;c++){const f=l[c],u=r[c];f!==0&&(Ma.fromBufferAttribute(u,t),a?nr.addScaledVector(Ma,f):nr.addScaledVector(Ma.sub(e),f))}e.add(nr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(Qs.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Qs,Ul)===null||mi.origin.distanceToSquared(Ul)>(t.far-t.near)**2))&&(Il.copy(r).invert(),mi.copy(t.ray).applyMatrix4(Il),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,o=r.attributes.uv,f=r.attributes.uv1,u=r.attributes.normal,h=r.groups,d=r.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,b=A;M<b;M+=3){const E=l.getX(M),C=l.getX(M+1),x=l.getX(M+2);s=sr(this,p,t,n,o,f,u,E,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=l.getX(m),A=l.getX(m+1),M=l.getX(m+2);s=sr(this,a,t,n,o,f,u,S,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,b=A;M<b;M+=3){const E=M,C=M+1,x=M+2;s=sr(this,p,t,n,o,f,u,E,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=m,A=m+1,M=m+2;s=sr(this,a,t,n,o,f,u,S,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Zu(i,t,e,n,s,r,a,l){let c;if(t.side===qe?c=n.intersectTriangle(a,r,s,!0,l):c=n.intersectTriangle(s,r,a,t.side===yi,l),c===null)return null;ir.copy(l),ir.applyMatrix4(i.matrixWorld);const o=e.ray.origin.distanceTo(ir);return o<e.near||o>e.far?null:{distance:o,point:ir.clone(),object:i}}function sr(i,t,e,n,s,r,a,l,c,o){i.getVertexPosition(l,js),i.getVertexPosition(c,tr),i.getVertexPosition(o,er);const f=Zu(i,t,e,n,js,tr,er,Nl);if(f){const u=new R;dn.getBarycoord(Nl,js,tr,er,u),s&&(f.uv=dn.getInterpolatedAttribute(s,l,c,o,u,new Dt)),r&&(f.uv1=dn.getInterpolatedAttribute(r,l,c,o,u,new Dt)),a&&(f.normal=dn.getInterpolatedAttribute(a,l,c,o,u,new R),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:l,b:c,c:o,normal:new R,materialIndex:0};dn.getNormal(js,tr,er,h.normal),f.face=h,f.barycoord=u}return f}class $u extends Ye{constructor(t=null,e=1,n=1,s,r,a,l,c,o=He,f=He,u,h){super(null,a,l,c,o,f,s,r,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gi=new zr,Ju=new Dt(.5,.5),rr=new R;class jo{constructor(t=new ri,e=new ri,n=new ri,s=new ri,r=new ri,a=new ri){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un,n=!1){const s=this.planes,r=t.elements,a=r[0],l=r[1],c=r[2],o=r[3],f=r[4],u=r[5],h=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],S=r[12],A=r[13],M=r[14],b=r[15];if(s[0].setComponents(o-a,d-f,p-g,b-S).normalize(),s[1].setComponents(o+a,d+f,p+g,b+S).normalize(),s[2].setComponents(o+l,d+u,p+v,b+A).normalize(),s[3].setComponents(o-l,d-u,p-v,b-A).normalize(),n)s[4].setComponents(c,h,m,M).normalize(),s[5].setComponents(o-c,d-h,p-m,b-M).normalize();else if(s[4].setComponents(o-c,d-h,p-m,b-M).normalize(),e===Un)s[5].setComponents(o+c,d+h,p+m,b+M).normalize();else if(e===Ds)s[5].setComponents(c,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){gi.center.set(0,0,0);const e=Ju.distanceTo(t.center);return gi.radius=.7071067811865476+e,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(rr.x=s.normal.x>0?t.max.x:t.min.x,rr.y=s.normal.y>0?t.max.y:t.min.y,rr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(rr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ph extends ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Fl=new oe,Uo=new dh,ar=new zr,or=new R;class Qu extends De{constructor(t=new Ce,e=new ph){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,t.ray.intersectsSphere(ar)===!1)return;Fl.copy(s).invert(),Uo.copy(t.ray).applyMatrix4(Fl);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,o=n.index,u=n.attributes.position;if(o!==null){const h=Math.max(0,a.start),d=Math.min(o.count,a.start+a.count);for(let g=h,v=d;g<v;g++){const m=o.getX(g);or.fromBufferAttribute(u,m),Ol(or,m,c,s,t,e,this)}}else{const h=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=h,v=d;g<v;g++)or.fromBufferAttribute(u,g),Ol(or,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function Ol(i,t,e,n,s,r,a){const l=Uo.distanceSqToPoint(i);if(l<e){const c=new R;Uo.closestPointToPoint(i,c),c.applyMatrix4(n);const o=s.ray.origin.distanceTo(c);if(o<s.near||o>s.far)return;r.push({distance:o,distanceToRay:Math.sqrt(l),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class mh extends Ye{constructor(t=[],e=bi,n,s,r,a,l,c,o,f){super(t,e,n,s,r,a,l,c,o,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ju extends Ye{constructor(t,e,n,s,r,a,l,c,o){super(t,e,n,s,r,a,l,c,o),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Is extends Ye{constructor(t,e,n=Nn,s,r,a,l=He,c=He,o,f=Zn,u=1){if(f!==Zn&&f!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:u};super(h,s,r,a,l,c,f,n,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $o(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class tf extends Is{constructor(t,e=Nn,n=bi,s,r,a=He,l=He,c,o=Zn){const f={width:t,height:t,depth:1},u=[f,f,f,f,f,f];super(t,t,e,n,s,r,a,l,c,o),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class gh extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ls extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],o=[],f=[],u=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(u,2));function g(v,m,p,S,A,M,b,E,C,x,T){const P=M/C,N=b/x,F=M/2,G=b/2,D=E/2,V=C+1,Z=x+1;let Y=0,st=0;const B=new R;for(let X=0;X<Z;X++){const J=X*N-G;for(let rt=0;rt<V;rt++){const ft=rt*P-F;B[v]=ft*S,B[m]=J*A,B[p]=D,o.push(B.x,B.y,B.z),B[v]=0,B[m]=0,B[p]=E>0?1:-1,f.push(B.x,B.y,B.z),u.push(rt/C),u.push(1-X/x),Y+=1}}for(let X=0;X<x;X++)for(let J=0;J<C;J++){const rt=h+J+V*X,ft=h+J+V*(X+1),Zt=h+(J+1)+V*(X+1),zt=h+(J+1)+V*X;c.push(rt,ft,zt),c.push(ft,Zt,zt),st+=6}l.addGroup(d,st,T),d+=st,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Hr extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],l=[],c=[],o=new R,f=new Dt;a.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let u=0,h=3;u<=e;u++,h+=3){const d=n+u/e*s;o.x=t*Math.cos(d),o.y=t*Math.sin(d),a.push(o.x,o.y,o.z),l.push(0,0,1),f.x=(a[h]/t+1)/2,f.y=(a[h+1]/t+1)/2,c.push(f.x,f.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Gr extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};const o=this;s=Math.floor(s),r=Math.floor(r);const f=[],u=[],h=[],d=[];let g=0;const v=[],m=n/2;let p=0;S(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(f),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(d,2));function S(){const M=new R,b=new R;let E=0;const C=(e-t)/n;for(let x=0;x<=r;x++){const T=[],P=x/r,N=P*(e-t)+t;for(let F=0;F<=s;F++){const G=F/s,D=G*c+l,V=Math.sin(D),Z=Math.cos(D);b.x=N*V,b.y=-P*n+m,b.z=N*Z,u.push(b.x,b.y,b.z),M.set(V,C,Z).normalize(),h.push(M.x,M.y,M.z),d.push(G,1-P),T.push(g++)}v.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const P=v[T][x],N=v[T+1][x],F=v[T+1][x+1],G=v[T][x+1];(t>0||T!==0)&&(f.push(P,N,G),E+=3),(e>0||T!==r-1)&&(f.push(N,F,G),E+=3)}o.addGroup(p,E,0),p+=E}function A(M){const b=g,E=new Dt,C=new R;let x=0;const T=M===!0?t:e,P=M===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*P,0),h.push(0,P,0),d.push(.5,.5),g++;const N=g;for(let F=0;F<=s;F++){const D=F/s*c+l,V=Math.cos(D),Z=Math.sin(D);C.x=T*Z,C.y=m*P,C.z=T*V,u.push(C.x,C.y,C.z),h.push(0,P,0),E.x=V*.5+.5,E.y=Z*.5*P+.5,d.push(E.x,E.y),g++}for(let F=0;F<s;F++){const G=b+F,D=N+F;M===!0?f.push(D,D+1,G):f.push(D+1,D,G),x+=3}o.addGroup(p,x,M===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ur extends Gr{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,l=Math.PI*2){super(0,t,e,n,s,r,a,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l}}static fromJSON(t){return new Ur(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vr extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];l(s),o(n),f(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(S){const A=new R,M=new R,b=new R;for(let E=0;E<e.length;E+=3)d(e[E+0],A),d(e[E+1],M),d(e[E+2],b),c(A,M,b,S)}function c(S,A,M,b){const E=b+1,C=[];for(let x=0;x<=E;x++){C[x]=[];const T=S.clone().lerp(M,x/E),P=A.clone().lerp(M,x/E),N=E-x;for(let F=0;F<=N;F++)F===0&&x===E?C[x][F]=T:C[x][F]=T.clone().lerp(P,F/N)}for(let x=0;x<E;x++)for(let T=0;T<2*(E-x)-1;T++){const P=Math.floor(T/2);T%2===0?(h(C[x][P+1]),h(C[x+1][P]),h(C[x][P])):(h(C[x][P+1]),h(C[x+1][P+1]),h(C[x+1][P]))}}function o(S){const A=new R;for(let M=0;M<r.length;M+=3)A.x=r[M+0],A.y=r[M+1],A.z=r[M+2],A.normalize().multiplyScalar(S),r[M+0]=A.x,r[M+1]=A.y,r[M+2]=A.z}function f(){const S=new R;for(let A=0;A<r.length;A+=3){S.x=r[A+0],S.y=r[A+1],S.z=r[A+2];const M=m(S)/2/Math.PI+.5,b=p(S)/Math.PI+.5;a.push(M,1-b)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){const A=a[S+0],M=a[S+2],b=a[S+4],E=Math.max(A,M,b),C=Math.min(A,M,b);E>.9&&C<.1&&(A<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),b<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function d(S,A){const M=S*3;A.x=t[M+0],A.y=t[M+1],A.z=t[M+2]}function g(){const S=new R,A=new R,M=new R,b=new R,E=new Dt,C=new Dt,x=new Dt;for(let T=0,P=0;T<r.length;T+=9,P+=6){S.set(r[T+0],r[T+1],r[T+2]),A.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),E.set(a[P+0],a[P+1]),C.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),b.copy(S).add(A).add(M).divideScalar(3);const N=m(b);v(E,P+0,S,N),v(C,P+2,A,N),v(x,P+4,M,N)}}function v(S,A,M,b){b<0&&S.x===1&&(a[A]=S.x-1),M.x===0&&M.z===0&&(a[A]=b/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.vertices,t.indices,t.radius,t.detail)}}class tl extends Vr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tl(t.radius,t.detail)}}class el extends Ce{constructor(t=[new Dt(0,-.5),new Dt(.5,0),new Dt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Yt(s,0,Math.PI*2);const r=[],a=[],l=[],c=[],o=[],f=1/e,u=new R,h=new Dt,d=new R,g=new R,v=new R;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let S=0;S<=e;S++){const A=n+S*f*s,M=Math.sin(A),b=Math.cos(A);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*M,u.y=t[E].y,u.z=t[E].x*b,a.push(u.x,u.y,u.z),h.x=S/e,h.y=E/(t.length-1),l.push(h.x,h.y);const C=c[3*E+0]*M,x=c[3*E+1],T=c[3*E+0]*b;o.push(C,x,T)}}for(let S=0;S<e;S++)for(let A=0;A<t.length-1;A++){const M=A+S*t.length,b=M,E=M+t.length,C=M+t.length+1,x=M+1;r.push(b,E,x),r.push(C,x,E)}this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("uv",new ie(l,2)),this.setAttribute("normal",new ie(o,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.points,t.segments,t.phiStart,t.phiLength)}}class ci extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,l=Math.floor(n),c=Math.floor(s),o=l+1,f=c+1,u=t/l,h=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<f;p++){const S=p*h-a;for(let A=0;A<o;A++){const M=A*u-r;g.push(M,-S,0),v.push(0,0,1),m.push(A/l),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<l;S++){const A=S+o*p,M=S+o*(p+1),b=S+1+o*(p+1),E=S+1+o*p;d.push(A,M,E),d.push(M,b,E)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.width,t.height,t.widthSegments,t.heightSegments)}}class nl extends Ce{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const l=[],c=[],o=[],f=[];let u=t;const h=(e-t)/s,d=new R,g=new Dt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),o.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,f.push(g.x,g.y)}u+=h}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const S=p+m,A=S,M=S+n+1,b=S+n+2,E=S+1;l.push(A,M,E),l.push(M,b,E)}}this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Fs extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+l,Math.PI);let o=0;const f=[],u=new R,h=new R,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const S=[],A=p/n,M=a+A*l,b=t*Math.cos(M),E=Math.sqrt(t*t-b*b);let C=0;p===0&&a===0?C=.5/e:p===n&&c===Math.PI&&(C=-.5/e);for(let x=0;x<=e;x++){const T=x/e,P=s+T*r;u.x=-E*Math.cos(P),u.y=b,u.z=E*Math.sin(P),g.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),m.push(T+C,1-A),S.push(o++)}f.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const A=f[p][S+1],M=f[p][S],b=f[p+1][S],E=f[p+1][S+1];(p!==0||a>0)&&d.push(A,M,E),(p!==n-1||c<Math.PI)&&d.push(M,b,E)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class il extends Vr{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new il(t.radius,t.detail)}}class Us extends Ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:l},n=Math.floor(n),s=Math.floor(s);const c=[],o=[],f=[],u=[],h=new R,d=new R,g=new R;for(let v=0;v<=n;v++){const m=a+v/n*l;for(let p=0;p<=s;p++){const S=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(S),d.y=(t+e*Math.cos(m))*Math.sin(S),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),g.subVectors(d,h).normalize(),f.push(g.x,g.y,g.z),u.push(p/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){const p=(s+1)*v+m-1,S=(s+1)*(v-1)+m-1,A=(s+1)*(v-1)+m,M=(s+1)*v+m;c.push(p,S,M),c.push(S,A,M)}this.setIndex(c),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Us(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function os(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Bl(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Bl(s[0])){const r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=os(i[e]);for(const s in n)t[s]=n[s]}return t}function Bl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ef(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _h(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const nf={clone:os,merge:Qe};var sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sf,this.fragmentShader=rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=ef(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Lt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"m4":this.uniforms[n].value=new oe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class af extends En{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class of extends ui{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Lt(16777215),this.specular=new Lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rr,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Or,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lf extends ui{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rr,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Or,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cf extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hf extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class xh extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class uf extends xh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Sa=new oe,zl=new R,Hl=new R;class ff{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jo,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;zl.setFromMatrixPosition(t.matrixWorld),e.position.copy(zl),Hl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Sa,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,o=s?s.y/r.y:0;t.coordinateSystem===Ds||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+o,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+o,0,0,.5,.5,0,0,0,1),e.multiply(Sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const lr=new R,cr=new mn,wn=new R;class vh extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(lr,cr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lr,cr,wn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(lr,cr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lr,cr,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ii=new R,Gl=new Dt,Vl=new Dt;class fn extends vh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Do*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,Gl,Vl),e.subVectors(Vl,Gl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,o=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/o,s*=a.width/c,n*=a.height/o}const l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class kr extends vh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,l=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,a=r+o*this.view.width,l-=f*this.view.offsetY,c=l-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class df extends ff{constructor(){super(new kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ya extends xh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new df}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ki=-90,Wi=1;class pf extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(ki,Wi,t,e);s.layers=this.layers,this.add(s);const r=new fn(ki,Wi,t,e);r.layers=this.layers,this.add(r);const a=new fn(ki,Wi,t,e);a.layers=this.layers,this.add(a);const l=new fn(ki,Wi,t,e);l.layers=this.layers,this.add(l);const c=new fn(ki,Wi,t,e);c.layers=this.layers,this.add(c);const o=new fn(ki,Wi,t,e);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,c]=e;for(const o of e)this.remove(o);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const o of e)this.add(o),o.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,c,o,f]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(u,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class mf extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Mh{static{Mh.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}}function kl(i,t,e,n){const s=gf(n);switch(e){case eh:return i*t;case ih:return i*t/s.components*s.byteLength;case Xo:return i*t/s.components*s.byteLength;case Ei:return i*t*2/s.components*s.byteLength;case qo:return i*t*2/s.components*s.byteLength;case nh:return i*t*3/s.components*s.byteLength;case Sn:return i*t*4/s.components*s.byteLength;case Yo:return i*t*4/s.components*s.byteLength;case Sr:case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case br:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case no:case so:return Math.max(i,16)*Math.max(t,8)/4;case eo:case io:return Math.max(i,8)*Math.max(t,8)/2;case ro:case ao:case lo:case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oo:case Ar:case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case po:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case go:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case vo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case yo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case To:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ao:case wo:case Ro:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Co:case Po:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wr:case Lo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gf(i){switch(i){case cn:case Jc:return{byteLength:1,components:1};case Ps:case Qc:case Fn:return{byteLength:2,components:1};case ko:case Wo:return{byteLength:2,components:4};case Nn:case Vo:case In:return{byteLength:4,components:1};case jc:case th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);function Sh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _f(i){const t=new WeakMap;function e(l,c){const o=l.array,f=l.usage,u=o.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,o,f),l.onUploadCallback();let d;if(o instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)d=i.HALF_FLOAT;else if(o instanceof Uint16Array)l.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=i.SHORT;else if(o instanceof Uint32Array)d=i.UNSIGNED_INT;else if(o instanceof Int32Array)d=i.INT;else if(o instanceof Int8Array)d=i.BYTE;else if(o instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:h,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:l.version,size:u}}function n(l,c,o){const f=c.array,u=c.updateRanges;if(i.bindBuffer(o,l),u.length===0)i.bufferSubData(o,0,f);else{u.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<u.length;d++){const g=u[h],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,u[h]=v)}u.length=h+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];i.bufferSubData(o,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=t.get(l);c&&(i.deleteBuffer(c.buffer),t.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=t.get(l);(!f||f.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const o=t.get(l);if(o===void 0)t.set(l,e(l,c));else if(o.version<l.version){if(o.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(o.buffer,l,c),o.version=l.version}}return{get:s,remove:r,update:a}}var xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vf=`#ifdef USE_ALPHAHASH
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
#endif`,Mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ef=`#ifdef USE_AOMAP
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
#endif`,Tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Af=`#ifdef USE_BATCHING
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
#endif`,wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lf=`#ifdef USE_IRIDESCENCE
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
#endif`,Df=`#ifdef USE_BUMPMAP
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Gf=`#define PI 3.141592653589793
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
} // validated`,Vf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kf=`vec3 transformedNormal = objectNormal;
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
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$f=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
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
#endif`,ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,id=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rd=`#ifdef USE_GRADIENTMAP
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
}`,ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,md=`PhysicalMaterial material;
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
#endif`,gd=`uniform sampler2D dfgLUT;
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
}`,_d=`
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
#endif`,xd=`#if defined( RE_IndirectDiffuse )
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
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Md=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Sd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rd=`#if defined( USE_POINTS_UV )
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
#endif`,Cd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`#ifdef USE_MORPHTARGETS
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
#endif`,Nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Od=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gd=`#ifdef USE_NORMALMAP
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
#endif`,Vd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ip=`float getShadowMask() {
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
}`,sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rp=`#ifdef USE_SKINNING
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
#endif`,ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,op=`#ifdef USE_SKINNING
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
#endif`,lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,up=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fp=`#ifdef USE_TRANSMISSION
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
#endif`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vp=`uniform sampler2D t2D;
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`#include <common>
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
}`,Tp=`#if DEPTH_PACKING == 3200
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
}`,Ap=`#define DISTANCE
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
}`,wp=`#define DISTANCE
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`uniform float scale;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Dp=`#include <common>
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Up=`#define LAMBERT
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
}`,Np=`#define LAMBERT
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
}`,Fp=`#define MATCAP
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
}`,Op=`#define MATCAP
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
}`,Bp=`#define NORMAL
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
}`,zp=`#define NORMAL
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
}`,Hp=`#define PHONG
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
}`,Gp=`#define PHONG
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
}`,Vp=`#define STANDARD
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
}`,kp=`#define STANDARD
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
}`,Wp=`#define TOON
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
}`,Xp=`#define TOON
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
}`,qp=`uniform float size;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,Kp=`#include <common>
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
}`,Zp=`uniform vec3 color;
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
}`,$p=`uniform float rotation;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:xf,alphahash_pars_fragment:vf,alphamap_fragment:Mf,alphamap_pars_fragment:Sf,alphatest_fragment:yf,alphatest_pars_fragment:bf,aomap_fragment:Ef,aomap_pars_fragment:Tf,batching_pars_vertex:Af,batching_vertex:wf,begin_vertex:Rf,beginnormal_vertex:Cf,bsdfs:Pf,iridescence_fragment:Lf,bumpmap_pars_fragment:Df,clipping_planes_fragment:If,clipping_planes_pars_fragment:Uf,clipping_planes_pars_vertex:Nf,clipping_planes_vertex:Ff,color_fragment:Of,color_pars_fragment:Bf,color_pars_vertex:zf,color_vertex:Hf,common:Gf,cube_uv_reflection_fragment:Vf,defaultnormal_vertex:kf,displacementmap_pars_vertex:Wf,displacementmap_vertex:Xf,emissivemap_fragment:qf,emissivemap_pars_fragment:Yf,colorspace_fragment:Kf,colorspace_pars_fragment:Zf,envmap_fragment:$f,envmap_common_pars_fragment:Jf,envmap_pars_fragment:Qf,envmap_pars_vertex:jf,envmap_physical_pars_fragment:hd,envmap_vertex:td,fog_vertex:ed,fog_pars_vertex:nd,fog_fragment:id,fog_pars_fragment:sd,gradientmap_pars_fragment:rd,lightmap_pars_fragment:ad,lights_lambert_fragment:od,lights_lambert_pars_fragment:ld,lights_pars_begin:cd,lights_toon_fragment:ud,lights_toon_pars_fragment:fd,lights_phong_fragment:dd,lights_phong_pars_fragment:pd,lights_physical_fragment:md,lights_physical_pars_fragment:gd,lights_fragment_begin:_d,lights_fragment_maps:xd,lights_fragment_end:vd,lightprobes_pars_fragment:Md,logdepthbuf_fragment:Sd,logdepthbuf_pars_fragment:yd,logdepthbuf_pars_vertex:bd,logdepthbuf_vertex:Ed,map_fragment:Td,map_pars_fragment:Ad,map_particle_fragment:wd,map_particle_pars_fragment:Rd,metalnessmap_fragment:Cd,metalnessmap_pars_fragment:Pd,morphinstance_vertex:Ld,morphcolor_vertex:Dd,morphnormal_vertex:Id,morphtarget_pars_vertex:Ud,morphtarget_vertex:Nd,normal_fragment_begin:Fd,normal_fragment_maps:Od,normal_pars_fragment:Bd,normal_pars_vertex:zd,normal_vertex:Hd,normalmap_pars_fragment:Gd,clearcoat_normal_fragment_begin:Vd,clearcoat_normal_fragment_maps:kd,clearcoat_pars_fragment:Wd,iridescence_pars_fragment:Xd,opaque_fragment:qd,packing:Yd,premultiplied_alpha_fragment:Kd,project_vertex:Zd,dithering_fragment:$d,dithering_pars_fragment:Jd,roughnessmap_fragment:Qd,roughnessmap_pars_fragment:jd,shadowmap_pars_fragment:tp,shadowmap_pars_vertex:ep,shadowmap_vertex:np,shadowmask_pars_fragment:ip,skinbase_vertex:sp,skinning_pars_vertex:rp,skinning_vertex:ap,skinnormal_vertex:op,specularmap_fragment:lp,specularmap_pars_fragment:cp,tonemapping_fragment:hp,tonemapping_pars_fragment:up,transmission_fragment:fp,transmission_pars_fragment:dp,uv_pars_fragment:pp,uv_pars_vertex:mp,uv_vertex:gp,worldpos_vertex:_p,background_vert:xp,background_frag:vp,backgroundCube_vert:Mp,backgroundCube_frag:Sp,cube_vert:yp,cube_frag:bp,depth_vert:Ep,depth_frag:Tp,distance_vert:Ap,distance_frag:wp,equirect_vert:Rp,equirect_frag:Cp,linedashed_vert:Pp,linedashed_frag:Lp,meshbasic_vert:Dp,meshbasic_frag:Ip,meshlambert_vert:Up,meshlambert_frag:Np,meshmatcap_vert:Fp,meshmatcap_frag:Op,meshnormal_vert:Bp,meshnormal_frag:zp,meshphong_vert:Hp,meshphong_frag:Gp,meshphysical_vert:Vp,meshphysical_frag:kp,meshtoon_vert:Wp,meshtoon_frag:Xp,points_vert:qp,points_frag:Yp,shadow_vert:Kp,shadow_frag:Zp,sprite_vert:$p,sprite_frag:Jp},pt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Cn={basic:{uniforms:Qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Qe([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Qe([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Qe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Qe([pt.points,pt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Qe([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Qe([pt.common,pt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Qe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Qe([pt.sprite,pt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:Qe([pt.common,pt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:Qe([pt.lights,pt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Cn.physical={uniforms:Qe([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const hr={r:0,b:0,g:0},Qp=new oe,yh=new Ft;yh.set(-1,0,0,0,1,0,0,0,1);function jp(i,t,e,n,s,r){const a=new Lt(0);let l=s===!0?0:1,c,o,f=null,u=0,h=null;function d(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){const M=S.backgroundBlurriness>0;A=t.get(A,M)}return A}function g(S){let A=!1;const M=d(S);M===null?m(a,l):M&&M.isColor&&(m(M,1),A=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(S,A){const M=d(A);M&&(M.isCubeTexture||M.mapping===Br)?(o===void 0&&(o=new Ke(new ls(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:os(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(b,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(o)),o.material.uniforms.envMap.value=M,o.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(Qp.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&o.material.uniforms.backgroundRotation.value.premultiply(yh),o.material.toneMapped=Kt.getTransfer(M.colorSpace)!==ae,(f!==M||u!==M.version||h!==i.toneMapping)&&(o.material.needsUpdate=!0,f=M,u=M.version,h=i.toneMapping),o.layers.enableAll(),S.unshift(o,o.geometry,o.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ke(new ci(2,2),new En({name:"BackgroundMaterial",uniforms:os(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(M.colorSpace)!==ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||u!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,u=M.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,A){S.getRGB(hr,_h(i)),e.buffers.color.setClear(hr.r,hr.g,hr.b,A,r)}function p(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),l=A,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:g,addToRenderList:v,dispose:p}}function tm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function l(N,F,G,D,V){let Z=!1;const Y=u(N,D,G,F);r!==Y&&(r=Y,o(r.object)),Z=d(N,D,G,V),Z&&g(N,D,G,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(N,F,G,D),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function o(N){return i.bindVertexArray(N)}function f(N){return i.deleteVertexArray(N)}function u(N,F,G,D){const V=D.wireframe===!0;let Z=n[F.id];Z===void 0&&(Z={},n[F.id]=Z);const Y=N.isInstancedMesh===!0?N.id:0;let st=Z[Y];st===void 0&&(st={},Z[Y]=st);let B=st[G.id];B===void 0&&(B={},st[G.id]=B);let X=B[V];return X===void 0&&(X=h(c()),B[V]=X),X}function h(N){const F=[],G=[],D=[];for(let V=0;V<e;V++)F[V]=0,G[V]=0,D[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:D,object:N,attributes:{},index:null}}function d(N,F,G,D){const V=r.attributes,Z=F.attributes;let Y=0;const st=G.getAttributes();for(const B in st)if(st[B].location>=0){const J=V[B];let rt=Z[B];if(rt===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(rt=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(rt=N.instanceColor)),J===void 0||J.attribute!==rt||rt&&J.data!==rt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==D}function g(N,F,G,D){const V={},Z=F.attributes;let Y=0;const st=G.getAttributes();for(const B in st)if(st[B].location>=0){let J=Z[B];J===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(J=N.instanceColor));const rt={};rt.attribute=J,J&&J.data&&(rt.data=J.data),V[B]=rt,Y++}r.attributes=V,r.attributesNum=Y,r.index=D}function v(){const N=r.newAttributes;for(let F=0,G=N.length;F<G;F++)N[F]=0}function m(N){p(N,0)}function p(N,F){const G=r.newAttributes,D=r.enabledAttributes,V=r.attributeDivisors;G[N]=1,D[N]===0&&(i.enableVertexAttribArray(N),D[N]=1),V[N]!==F&&(i.vertexAttribDivisor(N,F),V[N]=F)}function S(){const N=r.newAttributes,F=r.enabledAttributes;for(let G=0,D=F.length;G<D;G++)F[G]!==N[G]&&(i.disableVertexAttribArray(G),F[G]=0)}function A(N,F,G,D,V,Z,Y){Y===!0?i.vertexAttribIPointer(N,F,G,V,Z):i.vertexAttribPointer(N,F,G,D,V,Z)}function M(N,F,G,D){v();const V=D.attributes,Z=G.getAttributes(),Y=F.defaultAttributeValues;for(const st in Z){const B=Z[st];if(B.location>=0){let X=V[st];if(X===void 0&&(st==="instanceMatrix"&&N.instanceMatrix&&(X=N.instanceMatrix),st==="instanceColor"&&N.instanceColor&&(X=N.instanceColor)),X!==void 0){const J=X.normalized,rt=X.itemSize,ft=t.get(X);if(ft===void 0)continue;const Zt=ft.buffer,zt=ft.type,Ot=ft.bytesPerElement,q=zt===i.INT||zt===i.UNSIGNED_INT||X.gpuType===Vo;if(X.isInterleavedBufferAttribute){const j=X.data,xt=j.stride,Nt=X.offset;if(j.isInstancedInterleavedBuffer){for(let Mt=0;Mt<B.locationSize;Mt++)p(B.location+Mt,j.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Mt=0;Mt<B.locationSize;Mt++)m(B.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Mt=0;Mt<B.locationSize;Mt++)A(B.location+Mt,rt/B.locationSize,zt,J,xt*Ot,(Nt+rt/B.locationSize*Mt)*Ot,q)}else{if(X.isInstancedBufferAttribute){for(let j=0;j<B.locationSize;j++)p(B.location+j,X.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let j=0;j<B.locationSize;j++)m(B.location+j);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let j=0;j<B.locationSize;j++)A(B.location+j,rt/B.locationSize,zt,J,rt*Ot,rt/B.locationSize*j*Ot,q)}}else if(Y!==void 0){const J=Y[st];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(B.location,J);break;case 3:i.vertexAttrib3fv(B.location,J);break;case 4:i.vertexAttrib4fv(B.location,J);break;default:i.vertexAttrib1fv(B.location,J)}}}}S()}function b(){T();for(const N in n){const F=n[N];for(const G in F){const D=F[G];for(const V in D){const Z=D[V];for(const Y in Z)f(Z[Y].object),delete Z[Y];delete D[V]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;const F=n[N.id];for(const G in F){const D=F[G];for(const V in D){const Z=D[V];for(const Y in Z)f(Z[Y].object),delete Z[Y];delete D[V]}}delete n[N.id]}function C(N){for(const F in n){const G=n[F];for(const D in G){const V=G[D];if(V[N.id]===void 0)continue;const Z=V[N.id];for(const Y in Z)f(Z[Y].object),delete Z[Y];delete V[N.id]}}}function x(N){for(const F in n){const G=n[F],D=N.isInstancedMesh===!0?N.id:0,V=G[D];if(V!==void 0){for(const Z in V){const Y=V[Z];for(const st in Y)f(Y[st].object),delete Y[st];delete V[Z]}delete G[D],Object.keys(G).length===0&&delete n[F]}}}function T(){P(),a=!0,r!==s&&(r=s,o(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:T,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function em(i,t,e){let n;function s(c){n=c}function r(c,o){i.drawArrays(n,c,o),e.update(o,n,1)}function a(c,o,f){f!==0&&(i.drawArraysInstanced(n,c,o,f),e.update(o,n,f))}function l(c,o,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,o,0,f);let h=0;for(let d=0;d<f;d++)h+=o[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function nm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Sn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(C){const x=C===Fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==cn&&C!==In&&!x&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=e.precision!==void 0?e.precision:"highp";const f=c(o);f!==o&&(Ut("WebGLRenderer:",o,"not supported, using",f,"instead."),o=f);const u=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:o,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:M,maxSamples:b,samples:E}}function im(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ri,l=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const d=u.length!==0||h||n!==0||s;return s=h,n=u.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){e=f(u,h,0)},this.setState=function(u,h,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?f(null):o();else{const S=r?0:n,A=S*4;let M=p.clippingState||null;c.value=M,M=f(g,h,A,d);for(let b=0;b!==A;++b)M[b]=e[b];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function o(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(u,h,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,S=h.matrixWorldInverse;l.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,M=d;A!==v;++A,M+=4)a.copy(u[A]).applyMatrix4(S,l),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}const ts=4,sm=6,rm=20,am=256,xs=new kr,Wl=new Lt;let ba=null,Ea=0,Ta=0,Aa=!1;const om=new R,_i=new R;class Xl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:l=om}=r;ba=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,l),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ba,Ea,Ta),this._renderer.xr.enabled=Aa,t.scissorTest=!1,Xi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bi||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ba=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Fn,format:Sn,colorSpace:Cr,depthBuffer:!1},s=ql(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ql(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lm(r)),this._blurMaterial=hm(r,t,e),this._ggxMaterial=cm(r,t,e)}return s}_compileMaterial(t){const e=new Ke(new Ce,t);this._renderer.compile(e,xs)}_sceneToCubeUV(t,e,n,s,r){const c=new fn(90,1,e,n),o=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Wl),u.toneMapping=yn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ke(new ls,new Qo({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(Wl),p=!0);for(let A=0;A<6;A++){const M=A%3;M===0?(c.up.set(0,o[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[A],r.y,r.z)):M===1?(c.up.set(0,0,o[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[A],r.z)):(c.up.set(0,o[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[A]));const b=this._cubeSize;Xi(s,M*b,A>2?b:0,b,b),u.setRenderTarget(s),p&&u.render(v,c),u.render(t,c)}u.toneMapping=d,u.autoClear=h,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===bi||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const l=r.uniforms;l.envMap.value=t;const c=this._cubeSize;Xi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,xs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;const c=a.uniforms,o=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),u=Math.sqrt(o*o-f*f),h=o*1.25,d=u*h,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-ts?n-g+ts:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,Xi(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(l,xs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Xi(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(l,xs)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){const a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;const o=l.uniforms;o.envMap.value=t.texture,o.sigma.value=r,o.mipInt.value=this._lodMax-n;const f=this._sizeLods[s],u=3*f*(s>this._lodMax-ts?s-this._lodMax+ts:0),h=4*(this._cubeSize-f);Xi(e,u,h,3*f,2*f),a.setRenderTarget(e),a.render(c,xs)}}function lm(i){const t=[],e=[];let n=i;const s=i-ts+1+sm;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);const l=1/(a-2),c=-l,o=1+l,f=[c,c,o,c,o,o,c,c,o,o,c,o],u=6,h=6,d=3,g=new Float32Array(d*h*u),v=new Float32Array(d*h*u);for(let p=0;p<u;p++){const S=p%3*2/3-1,A=p>2?0:-1,M=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];g.set(M,d*h*p);for(let b=0;b<h;b++){const E=f[b*2]*2-1,C=f[b*2+1]*2-1;p===0?_i.set(1,C,E):p===1?_i.set(-E,1,-C):p===2?_i.set(-E,C,1):p===3?_i.set(-1,C,-E):p===4?_i.set(-E,-1,C):_i.set(E,C,-1),_i.toArray(v,(p*h+b)*d)}}const m=new Ce;m.setAttribute("position",new pn(g,d)),m.setAttribute("outputDirection",new pn(v,d)),e.push(new Ke(m,null)),n>ts&&n--}return{lodMeshes:e,sizeLods:t}}function ql(i,t,e){const n=new bn(i,t,e);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function cm(i,t,e){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:am,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wr(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function hm(i,t,e){return new En({name:"SphericalGaussianBlur",defines:{SAMPLES:rm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wr(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Yl(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wr(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Kl(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Wr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class bh extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new mh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ls(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Yn});r.uniforms.tEquirect.value=e;const a=new Ke(s,r),l=e.minFilter;return e.minFilter===oi&&(e.minFilter=Ge),new pf(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function um(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Kr||d===Zr)if(t.has(h)){const g=t.get(h).texture;return l(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new bh(g.height);return v.fromEquirectangularTexture(i,h),t.set(h,v),h.addEventListener("dispose",o),l(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,g=d===Kr||d===Zr,v=d===bi||d===as;if(g||v){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Xl(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return g&&S&&S.height>0||v&&S&&c(S)?(n===null&&(n=new Xl(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",f),m.texture):null}}}return h}function l(h,d){return d===Kr?h.mapping=bi:d===Zr&&(h.mapping=as),h}function c(h){let d=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&d++;return d===g}function o(h){const d=h.target;d.removeEventListener("dispose",o);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(h){const d=h.target;d.removeEventListener("dispose",f);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function fm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&es("WebGLRenderer: "+n+" extension not supported."),s}}}function dm(i,t,e,n){const s={},r=new WeakMap;function a(u){const h=u.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function l(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(u){const h=u.attributes;for(const d in h)t.update(h[d],i.ARRAY_BUFFER)}function o(u){const h=[],d=u.index,g=u.attributes.position;let v=0;if(g===void 0)return;if(d!==null){const S=d.array;v=d.version;for(let A=0,M=S.length;A<M;A+=3){const b=S[A+0],E=S[A+1],C=S[A+2];h.push(b,E,E,C,C,b)}}else{const S=g.array;v=g.version;for(let A=0,M=S.length/3-1;A<M;A+=3){const b=A+0,E=A+1,C=A+2;h.push(b,E,E,C,C,b)}}const m=new(g.count>=65535?hh:ch)(h,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function f(u){const h=r.get(u);if(h){const d=u.index;d!==null&&h.version<d.version&&o(u)}else o(u);return r.get(u)}return{get:l,update:c,getWireframeAttribute:f}}function pm(i,t,e){let n;function s(u){n=u}let r,a;function l(u){r=u.type,a=u.bytesPerElement}function c(u,h){i.drawElements(n,h,r,u*a),e.update(h,n,1)}function o(u,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,u*a,d),e.update(h,n,d))}function f(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,u,0,d);let v=0;for(let m=0;m<d;m++)v+=h[m];e.update(v,n,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=o,this.renderMultiDraw=f}function mm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:Qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gm(i,t,e){const n=new WeakMap,s=new ye;function r(a,l,c){const o=a.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=f!==void 0?f.length:0;let h=n.get(l);if(h===void 0||h.count!==u){let T=function(){C.dispose(),n.delete(l),l.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const d=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],S=l.morphAttributes.color||[];let A=0;d===!0&&(A=1),g===!0&&(A=2),v===!0&&(A=3);let M=l.attributes.position.count*A,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const E=new Float32Array(M*b*4*u),C=new ah(E,M,b,u);C.type=In,C.needsUpdate=!0;const x=A*4;for(let P=0;P<u;P++){const N=m[P],F=p[P],G=S[P],D=M*b*4*P;for(let V=0;V<N.count;V++){const Z=V*x;d===!0&&(s.fromBufferAttribute(N,V),E[D+Z+0]=s.x,E[D+Z+1]=s.y,E[D+Z+2]=s.z,E[D+Z+3]=0),g===!0&&(s.fromBufferAttribute(F,V),E[D+Z+4]=s.x,E[D+Z+5]=s.y,E[D+Z+6]=s.z,E[D+Z+7]=0),v===!0&&(s.fromBufferAttribute(G,V),E[D+Z+8]=s.x,E[D+Z+9]=s.y,E[D+Z+10]=s.z,E[D+Z+11]=G.itemSize===4?s.w:1)}}h={count:u,texture:C,size:new Dt(M,b)},n.set(l,h),l.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<o.length;v++)d+=o[v];const g=l.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",o)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function _m(i,t,e,n,s){let r=new WeakMap;function a(o){const f=s.render.frame,u=o.geometry,h=t.get(o,u);if(r.get(h)!==f&&(t.update(h),r.set(h,f)),o.isInstancedMesh&&(o.hasEventListener("dispose",c)===!1&&o.addEventListener("dispose",c),r.get(o)!==f&&(e.update(o.instanceMatrix,i.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,i.ARRAY_BUFFER),r.set(o,f))),o.isSkinnedMesh){const d=o.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return h}function l(){r=new WeakMap}function c(o){const f=o.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:l}}const xm={[kc]:"LINEAR_TONE_MAPPING",[Wc]:"REINHARD_TONE_MAPPING",[Xc]:"CINEON_TONE_MAPPING",[qc]:"ACES_FILMIC_TONE_MAPPING",[Kc]:"AGX_TONE_MAPPING",[Zc]:"NEUTRAL_TONE_MAPPING",[Yc]:"CUSTOM_TONE_MAPPING"};function vm(i,t,e,n,s,r){const a=new bn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,c=null;const o=new Ce;o.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ie([0,2,0,0,2,0],2));const f=new af({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ke(o,f),h=new kr(-1,1,1,-1,0,1);let d=null,g=null,v=!1,m,p=null,S=[],A=!1;this.setSize=function(M,b){a.setSize(M,b),l!==null&&l.setSize(M,b),c!==null&&c.setSize(M,b);for(let E=0;E<S.length;E++){const C=S[E];C.setSize&&C.setSize(M,b)}},this.setEffects=function(M){S=M,A=S.length>0&&S[0].isRenderPass===!0;const b=a.width,E=a.height;S.length>0&&l===null&&(l=new bn(b,E,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),c=new bn(b,E,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){const x=S[C];x.setSize&&x.setSize(b,E)}},this.begin=function(M,b){if(v||M.toneMapping===yn&&S.length===0)return!1;if(p=b,b!==null){const E=b.width,C=b.height;(a.width!==E||a.height!==C)&&this.setSize(E,C)}return A===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=yn,!0},this.hasRenderPass=function(){return A},this.end=function(M,b){M.toneMapping=m,v=!0;let E=a,C=l;for(let x=0;x<S.length;x++){const T=S[x];T.enabled!==!1&&(T.render(M,C,E,b),T.needsSwap!==!1&&(E=C,C=C===l?c:l))}if(d!==M.outputColorSpace||g!==M.toneMapping){d=M.outputColorSpace,g=M.toneMapping,f.defines={},Kt.getTransfer(d)===ae&&(f.defines.SRGB_TRANSFER="");const x=xm[g];x&&(f.defines[x]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(p),M.render(u,h),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),o.dispose(),f.dispose()}}const Eh=new Ye,No=new Is(1,1),Th=new ah,Ah=new Uu,wh=new mh,Zl=[],$l=[],Jl=new Float32Array(16),Ql=new Float32Array(9),jl=new Float32Array(4);function cs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Zl[s];if(r===void 0&&(r=new Float32Array(s),Zl[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xr(i,t){let e=$l[t];e===void 0&&(e=new Int32Array(t),$l[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function Em(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;jl.set(n),i.uniformMatrix2fv(this.addr,!1,jl),Ue(e,n)}}function Tm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;Ql.set(n),i.uniformMatrix3fv(this.addr,!1,Ql),Ue(e,n)}}function Am(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;Jl.set(n),i.uniformMatrix4fv(this.addr,!1,Jl),Ue(e,n)}}function wm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function Lm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Nm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(No.compareFunction=e.isReversedDepthBuffer()?Zo:Ko,r=No):r=Eh,e.setTexture2D(t||r,s)}function Fm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ah,s)}function Om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wh,s)}function Bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Th,s)}function zm(i){switch(i){case 5126:return Mm;case 35664:return Sm;case 35665:return ym;case 35666:return bm;case 35674:return Em;case 35675:return Tm;case 35676:return Am;case 5124:case 35670:return wm;case 35667:case 35671:return Rm;case 35668:case 35672:return Cm;case 35669:case 35673:return Pm;case 5125:return Lm;case 36294:return Dm;case 36295:return Im;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Bm}}function Hm(i,t){i.uniform1fv(this.addr,t)}function Gm(i,t){const e=cs(t,this.size,2);i.uniform2fv(this.addr,e)}function Vm(i,t){const e=cs(t,this.size,3);i.uniform3fv(this.addr,e)}function km(i,t){const e=cs(t,this.size,4);i.uniform4fv(this.addr,e)}function Wm(i,t){const e=cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xm(i,t){const e=cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qm(i,t){const e=cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ym(i,t){i.uniform1iv(this.addr,t)}function Km(i,t){i.uniform2iv(this.addr,t)}function Zm(i,t){i.uniform3iv(this.addr,t)}function $m(i,t){i.uniform4iv(this.addr,t)}function Jm(i,t){i.uniform1uiv(this.addr,t)}function Qm(i,t){i.uniform2uiv(this.addr,t)}function jm(i,t){i.uniform3uiv(this.addr,t)}function t0(i,t){i.uniform4uiv(this.addr,t)}function e0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=No:a=Eh;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function n0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ah,r[a])}function i0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||wh,r[a])}function s0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Th,r[a])}function r0(i){switch(i){case 5126:return Hm;case 35664:return Gm;case 35665:return Vm;case 35666:return km;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return Km;case 35668:case 35672:return Zm;case 35669:case 35673:return $m;case 5125:return Jm;case 36294:return Qm;case 36295:return jm;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}class a0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zm(e.type)}}class o0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=r0(e.type)}}class l0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const l=s[r];l.setValue(t,e[l.id],n)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function tc(i,t){i.seq.push(t),i.map[t.id]=t}function c0(i,t,e){const n=i.name,s=n.length;for(wa.lastIndex=0;;){const r=wa.exec(n),a=wa.lastIndex;let l=r[1];const c=r[2]==="]",o=r[3];if(c&&(l=l|0),o===void 0||o==="["&&a+2===s){tc(e,o===void 0?new a0(l,i,t):new o0(l,i,t));break}else{let u=e.map[l];u===void 0&&(u=new l0(l),tc(e,u)),e=u}}}class Tr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const l=t.getActiveUniform(e,a),c=t.getUniformLocation(e,l.name);c0(l,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const l=e[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ec(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const h0=37297;let u0=0;function f0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}const nc=new Ft;function d0(i){Kt._getMatrix(nc,Kt.workingColorSpace,i);const t=`mat3( ${nc.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case Pr:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ic(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+f0(i.getShaderSource(t),l)}else return r}function p0(i,t){const e=d0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const m0={[kc]:"Linear",[Wc]:"Reinhard",[Xc]:"Cineon",[qc]:"ACESFilmic",[Kc]:"AgX",[Zc]:"Neutral",[Yc]:"Custom"};function g0(i,t){const e=m0[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ur=new R;function _0(){Kt.getLuminanceCoefficients(ur);const i=ur.x.toFixed(4),t=ur.y.toFixed(4),e=ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function v0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function M0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function Ts(i){return i!==""}function sc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const S0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(i){return i.replace(S0,b0)}const y0=new Map;function b0(i,t){let e=Gt[t];if(e===void 0){const n=y0.get(t);if(n!==void 0)e=Gt[n],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Fo(e)}const E0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ac(i){return i.replace(E0,T0)}function T0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function oc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const A0={[ws]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function w0(i){return A0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R0={[bi]:"ENVMAP_TYPE_CUBE",[as]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE_UV"};function C0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":R0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const P0={[as]:"ENVMAP_MODE_REFRACTION"};function L0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":P0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const D0={[Or]:"ENVMAP_BLENDING_MULTIPLY",[fu]:"ENVMAP_BLENDING_MIX",[du]:"ENVMAP_BLENDING_ADD"};function I0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":D0[i.combine]||"ENVMAP_BLENDING_NONE"}function U0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function N0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,l=e.fragmentShader;const c=w0(e),o=C0(e),f=L0(e),u=I0(e),h=U0(e),d=x0(e),g=v0(r),v=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(m=[oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+o:"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==yn?g0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,p0("linearToOutputTexel",e.outputColorSpace),_0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),a=Fo(a),a=sc(a,e),a=rc(a,e),l=Fo(l),l=sc(l,e),l=rc(l,e),a=ac(a),l=ac(l),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=S+m+a,M=S+p+l,b=ec(s,s.VERTEX_SHADER,A),E=ec(s,s.FRAGMENT_SHADER,M);s.attachShader(v,b),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(N){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(b)||"",D=s.getShaderInfoLog(E)||"",V=F.trim(),Z=G.trim(),Y=D.trim();let st=!0,B=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,b,E);else{const X=ic(s,b,"vertex"),J=ic(s,E,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+X+`
`+J)}else V!==""?Ut("WebGLProgram: Program Info Log:",V):(Z===""||Y==="")&&(B=!1);B&&(N.diagnostics={runnable:st,programLog:V,vertexShader:{log:Z,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(b),s.deleteShader(E),x=new Tr(s,v),T=M0(s,v)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(v,h0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=u0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=E,this}let F0=0;class O0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new B0(t),e.set(t,n)),n}}class B0{constructor(t){this.id=F0++,this.code=t,this.usedTimes=0}}function z0(i){return i===Ei||i===Ar||i===wr}function H0(i,t,e,n,s,r){const a=new oh,l=new O0,c=new Set,o=[],f=new Map,u=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,T,P,N,F,G){const D=N.fog,V=F.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,st=t.get(x.envMap||Z,Y),B=st&&st.mapping===Br?st.image.height:null,X=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ut("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const J=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,rt=J!==void 0?J.length:0;let ft=0;V.morphAttributes.position!==void 0&&(ft=1),V.morphAttributes.normal!==void 0&&(ft=2),V.morphAttributes.color!==void 0&&(ft=3);let Zt,zt,Ot,q;if(X){const de=Cn[X];Zt=de.vertexShader,zt=de.fragmentShader}else{Zt=x.vertexShader,zt=x.fragmentShader;const de=l.getVertexShaderStage(x),ee=l.getFragmentShaderStage(x);l.update(x,de,ee),Ot=de.id,q=ee.id}const j=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Nt=F.isInstancedMesh===!0,Mt=F.isBatchedMesh===!0,kt=!!x.map,Pe=!!x.matcap,Wt=!!st,jt=!!x.aoMap,fe=!!x.lightMap,qt=!!x.bumpMap&&x.wireframe===!1,xe=!!x.normalMap,Ne=!!x.displacementMap,en=!!x.emissiveMap,Me=!!x.metalnessMap,Ae=!!x.roughnessMap,U=x.anisotropy>0,Ve=x.clearcoat>0,se=x.dispersion>0,w=x.retroreflectivity>0,_=x.iridescence>0,O=x.sheen>0,k=x.transmission>0,K=U&&!!x.anisotropyMap,at=Ve&&!!x.clearcoatMap,ot=Ve&&!!x.clearcoatNormalMap,$=Ve&&!!x.clearcoatRoughnessMap,tt=_&&!!x.iridescenceMap,lt=_&&!!x.iridescenceThicknessMap,At=O&&!!x.sheenColorMap,dt=O&&!!x.sheenRoughnessMap,ct=!!x.specularMap,wt=!!x.specularColorMap,It=!!x.specularIntensityMap,Bt=k&&!!x.transmissionMap,I=k&&!!x.thicknessMap,ht=!!x.gradientMap,Q=!!x.alphaMap,ut=x.alphaTest>0,_t=!!x.alphaHash,it=!!x.extensions;let Rt=yn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Rt=i.toneMapping);const Et={shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:Zt,fragmentShader:zt,defines:x.defines,customVertexShaderID:Ot,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Mt,batchingColor:Mt&&F._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&F.instanceColor!==null,instancingMorph:Nt&&F.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:kt,matcap:Pe,envMap:Wt,envMapMode:Wt&&st.mapping,envMapCubeUVHeight:B,aoMap:jt,lightMap:fe,bumpMap:qt,normalMap:xe,displacementMap:Ne,emissiveMap:en,normalMapObjectSpace:xe&&x.normalMapType===gu,normalMapTangentSpace:xe&&x.normalMapType===Rr,packedNormalMap:xe&&x.normalMapType===Rr&&z0(x.normalMap.format),metalnessMap:Me,roughnessMap:Ae,anisotropy:U,anisotropyMap:K,clearcoat:Ve,clearcoatMap:at,clearcoatNormalMap:ot,clearcoatRoughnessMap:$,dispersion:se,retroreflection:w,iridescence:_,iridescenceMap:tt,iridescenceThicknessMap:lt,sheen:O,sheenColorMap:At,sheenRoughnessMap:dt,specularMap:ct,specularColorMap:wt,specularIntensityMap:It,transmission:k,transmissionMap:Bt,thicknessMap:I,gradientMap:ht,opaque:x.transparent===!1&&x.blending===Rs&&x.alphaToCoverage===!1,alphaMap:Q,alphaTest:ut,alphaHash:_t,combine:x.combine,mapUv:kt&&g(x.map.channel),aoMapUv:jt&&g(x.aoMap.channel),lightMapUv:fe&&g(x.lightMap.channel),bumpMapUv:qt&&g(x.bumpMap.channel),normalMapUv:xe&&g(x.normalMap.channel),displacementMapUv:Ne&&g(x.displacementMap.channel),emissiveMapUv:en&&g(x.emissiveMap.channel),metalnessMapUv:Me&&g(x.metalnessMap.channel),roughnessMapUv:Ae&&g(x.roughnessMap.channel),anisotropyMapUv:K&&g(x.anisotropyMap.channel),clearcoatMapUv:at&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ot&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:At&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:dt&&g(x.sheenRoughnessMap.channel),specularMapUv:ct&&g(x.specularMap.channel),specularColorMapUv:wt&&g(x.specularColorMap.channel),specularIntensityMapUv:It&&g(x.specularIntensityMap.channel),transmissionMapUv:Bt&&g(x.transmissionMap.channel),thicknessMapUv:I&&g(x.thicknessMap.channel),alphaMapUv:Q&&g(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(xe||U),vertexNormals:!!V.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(kt||Q),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||V.attributes.normal===void 0&&xe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:ft,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,decodeVideoTexture:kt&&x.map.isVideoTexture===!0&&Kt.getTransfer(x.map.colorSpace)===ae,decodeVideoTextureEmissive:en&&x.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(x.emissiveMap.colorSpace)===ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pn,flipSided:x.side===qe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||Mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function m(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(T,x),S(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){const T=d[x.type];let P;if(T){const N=Cn[T];P=nf.clone(N.uniforms)}else P=x.uniforms;return P}function M(x,T){let P=f.get(T);return P!==void 0?++P.usedTimes:(P=new N0(i,T,x,s),o.push(P),f.set(T,P)),P}function b(x){if(--x.usedTimes===0){const T=o.indexOf(x);o[T]=o[o.length-1],o.pop(),f.delete(x.cacheKey),x.destroy()}}function E(x){l.remove(x)}function C(){l.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:A,acquireProgram:M,releaseProgram:b,releaseShaderCache:E,programs:o,dispose:C}}function G0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,c){i.get(a)[l]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function V0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function lc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function l(h,d,g,v,m,p){let S=i[t];return S===void 0?(S={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},i[t]=S):(S.id=h.id,S.object=h,S.geometry=d,S.material=g,S.materialVariant=a(h),S.groupOrder=v,S.renderOrder=h.renderOrder,S.z=m,S.group=p),t++,S}function c(h,d,g,v,m,p,S){S.reversedDepth===!0&&(m=-m);const A=l(h,d,g,v,m,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):e.push(A)}function o(h,d,g,v,m,p){const S=l(h,d,g,v,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function f(h,d){e.length>1&&e.sort(h||V0),n.length>1&&n.sort(d||lc),s.length>1&&s.sort(d||lc)}function u(){for(let h=t,d=i.length;h<d;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:o,finish:u,sort:f}}function k0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new cc,i.set(n,[a])):s>=r.length?(a=new cc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function W0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new Lt};break;case"SpotLight":e={position:new R,direction:new R,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function X0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let q0=0;function Y0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function K0(i){const t=new W0,e=X0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new R);const s=new R,r=new oe,a=new oe;function l(o){let f=0,u=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,S=0,A=0,M=0,b=0,E=0,C=0,x=0,T=0,P=0;o.sort(Y0);for(let F=0,G=o.length;F<G;F++){const D=o[F],V=D.color,Z=D.intensity,Y=D.distance;let st=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ei?st=D.shadow.map.texture:st=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=V.r*Z,u+=V.g*Z,h+=V.b*Z;else if(D.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(D.sh.coefficients[B],Z);P++}else if(D.isSunLight){const B=t.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,J=e.get(D);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[g]=J,n.sunShadowMap[g]=st;const rt=X.getViewportCount();for(let ft=0;ft<rt;ft++)n.sunShadowMatrix[v+ft]=X.getMatrix(ft),n.sunShadowCascade[v+ft]=X._cascadeData[ft];v+=rt,g++}n.sun[d]=B,d++}else if(D.isDirectionalLight){const B=t.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,J=e.get(D);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=st,n.directionalShadowMatrix[m]=D.shadow.matrix,b++}n.directional[m]=B,m++}else if(D.isSpotLight){const B=t.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(V).multiplyScalar(Z),B.distance=Y,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,n.spot[S]=B;const X=D.shadow;if(D.map&&(n.spotLightMap[x]=D.map,x++,X.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[S]=X.matrix,D.castShadow){const J=e.get(D);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,n.spotShadow[S]=J,n.spotShadowMap[S]=st,C++}S++}else if(D.isRectAreaLight){const B=t.get(D);B.color.copy(V).multiplyScalar(Z),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),n.rectArea[A]=B,A++}else if(D.isPointLight){const B=t.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),B.distance=D.distance,B.decay=D.decay,D.castShadow){const X=D.shadow,J=e.get(D);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,J.shadowCameraNear=X.camera.near,J.shadowCameraFar=X.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=st,n.pointShadowMatrix[p]=D.shadow.matrix,E++}n.point[p]=B,p++}else if(D.isHemisphereLight){const B=t.get(D);B.skyColor.copy(D.color).multiplyScalar(Z),B.groundColor.copy(D.groundColor).multiplyScalar(Z),n.hemi[M]=B,M++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=h;const N=n.hash;(N.sunLength!==d||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==S||N.rectAreaLength!==A||N.hemiLength!==M||N.numSunShadows!==g||N.numDirectionalShadows!==b||N.numPointShadows!==E||N.numSpotShadows!==C||N.numSpotMaps!==x||N.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,N.sunLength=d,N.directionalLength=m,N.pointLength=p,N.spotLength=S,N.rectAreaLength=A,N.hemiLength=M,N.numSunShadows=g,N.numDirectionalShadows=b,N.numPointShadows=E,N.numSpotShadows=C,N.numSpotMaps=x,N.numLightProbes=P,n.version=q0++)}function c(o,f){let u=0,h=0,d=0,g=0,v=0,m=0;const p=f.matrixWorldInverse;for(let S=0,A=o.length;S<A;S++){const M=o[S];if(M.isSunLight){const b=n.sun[u];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),u++}else if(M.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(M.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:n}}function hc(i){const t=new K0(i),e=[],n=[],s=[];function r(h){u.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function l(h){n.push(h)}function c(h){s.push(h)}function o(){t.setup(e)}function f(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:o,setupLightsView:f,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function Z0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let l;return a===void 0?(l=new hc(i),t.set(s,[l])):r>=a.length?(l=new hc(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}const $0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J0=`uniform sampler2D shadow_pass;
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
}`,Q0=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],j0=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],uc=new oe,vs=new R,Ra=new R;function tg(i,t,e){let n=new jo;const s=new Dt,r=new Dt,a=new ye,l=new cf,c=new hf,o={},f=e.maxTextureSize,u={[yi]:qe,[qe]:yi,[Pn]:Pn},h=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:$0,fragmentShader:J0}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ke(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ws;let p=this.type;this.render=function(E,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Yh&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ws);const T=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Yn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const G=p!==this.type;G&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(V=>V.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,V=E.length;D<V;D++){const Z=E[D],Y=Z.shadow;if(Y===void 0){Ut("WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const st=Y.getFrameExtents();s.multiply(st),r.copy(Y.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/st.x),s.x=r.x*st.x,Y.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/st.y),s.y=r.y*st.y,Y.mapSize.y=r.y));const B=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=B,Y.map===null||G===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Es){if(Z.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new bn(s.x,s.y,{format:Ei,type:Fn,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),Y.map.texture.name=Z.name+".shadowMap",Y.map.depthTexture=new Is(s.x,s.y,In),Y.map.depthTexture.name=Z.name+".shadowMapDepth",Y.map.depthTexture.format=Zn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=He,Y.map.depthTexture.magFilter=He}else Z.isPointLight?(Y.map=new bh(s.x),Y.map.depthTexture=new tf(s.x,Nn)):(Y.map=new bn(s.x,s.y),Y.map.depthTexture=new Is(s.x,s.y,Nn)),Y.map.depthTexture.name=Z.name+".shadowMap",Y.map.depthTexture.format=Zn,this.type===ws?(Y.map.depthTexture.compareFunction=B?Zo:Ko,Y.map.depthTexture.minFilter=Ge,Y.map.depthTexture.magFilter=Ge):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=He,Y.map.depthTexture.magFilter=He);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);const X=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();Z.isPointLight!==!0&&Y.updateMatrices(Z,x);for(let J=0;J<X;J++){const rt=Y.getCamera(J);if(Z.isPointLight){const ft=Y.camera,Zt=Y.matrix,zt=Z.distance||ft.far;zt!==ft.far&&(ft.far=zt,ft.updateProjectionMatrix()),vs.setFromMatrixPosition(Z.matrixWorld),ft.position.copy(vs),Ra.copy(ft.position),Ra.add(Q0[J]),ft.up.copy(j0[J]),ft.lookAt(Ra),ft.updateMatrixWorld(),Zt.makeTranslation(-vs.x,-vs.y,-vs.z),uc.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(uc,ft.coordinateSystem,ft.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,J),i.clear();else{J===0&&(i.setRenderTarget(Y.map),i.clear());const ft=Y.getViewport(J);a.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),F.viewport(a)}n=Y.getFrustum(J),M(C,x,rt,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===Es&&S(Y,x),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,N)};function S(E,C){const x=t.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new bn(s.x,s.y,{format:Ei,type:Fn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,x,d,v,null)}function A(E,C,x,T){let P=null;const N=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)P=N;else if(P=x.isPointLight===!0?c:l,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=P.uuid,G=C.uuid;let D=o[F];D===void 0&&(D={},o[F]=D);let V=D[G];V===void 0&&(V=P.clone(),D[G]=V,C.addEventListener("dispose",b)),P=V}if(P.visible=C.visible,P.wireframe=C.wireframe,T===Es?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:u[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=i.properties.get(P);F.light=x}return P}function M(E,C,x,T,P){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Es)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const G=t.update(E),D=E.material;if(Array.isArray(D)){const V=G.groups;for(let Z=0,Y=V.length;Z<Y;Z++){const st=V[Z],B=D[st.materialIndex];if(B&&B.visible){const X=A(E,B,T,P);E.onBeforeShadow(i,E,C,x,G,X,st),i.renderBufferDirect(x,null,G,X,E,st),E.onAfterShadow(i,E,C,x,G,X,st)}}}else if(D.visible){const V=A(E,D,T,P);E.onBeforeShadow(i,E,C,x,G,V,null),i.renderBufferDirect(x,null,G,V,E,null),E.onAfterShadow(i,E,C,x,G,V,null)}}const F=E.children;for(let G=0,D=F.length;G<D;G++)M(F[G],C,x,T,P)}function b(E){E.target.removeEventListener("dispose",b);for(const x in o){const T=o[x],P=E.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function eg(i,t){function e(){let I=!1;const ht=new ye;let Q=null;const ut=new ye(0,0,0,0);return{setMask:function(_t){Q!==_t&&!I&&(i.colorMask(_t,_t,_t,_t),Q=_t)},setLocked:function(_t){I=_t},setClear:function(_t,it,Rt,Et,de){de===!0&&(_t*=Et,it*=Et,Rt*=Et),ht.set(_t,it,Rt,Et),ut.equals(ht)===!1&&(i.clearColor(_t,it,Rt,Et),ut.copy(ht))},reset:function(){I=!1,Q=null,ut.set(-1,0,0,0)}}}function n(){let I=!1,ht=!1,Q=null,ut=null,_t=null;return{setReversed:function(it){if(ht!==it){const Rt=t.get("EXT_clip_control");it?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),ht=it;const Et=_t;_t=null,this.setClear(Et)}},getReversed:function(){return ht},setTest:function(it){it?j(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(it){Q!==it&&!I&&(i.depthMask(it),Q=it)},setFunc:function(it){if(ht&&(it=wu[it]),ut!==it){switch(it){case qa:i.depthFunc(i.NEVER);break;case Ya:i.depthFunc(i.ALWAYS);break;case Ka:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case Ja:i.depthFunc(i.GREATER);break;case Qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=it}},setLocked:function(it){I=it},setClear:function(it){_t!==it&&(_t=it,ht&&(it=1-it),i.clearDepth(it))},reset:function(){I=!1,Q=null,ut=null,_t=null,ht=!1}}}function s(){let I=!1,ht=null,Q=null,ut=null,_t=null,it=null,Rt=null,Et=null,de=null;return{setTest:function(ee){I||(ee?j(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(ee){ht!==ee&&!I&&(i.stencilMask(ee),ht=ee)},setFunc:function(ee,gn,Tn){(Q!==ee||ut!==gn||_t!==Tn)&&(i.stencilFunc(ee,gn,Tn),Q=ee,ut=gn,_t=Tn)},setOp:function(ee,gn,Tn){(it!==ee||Rt!==gn||Et!==Tn)&&(i.stencilOp(ee,gn,Tn),it=ee,Rt=gn,Et=Tn)},setLocked:function(ee){I=ee},setClear:function(ee){de!==ee&&(i.clearStencil(ee),de=ee)},reset:function(){I=!1,ht=null,Q=null,ut=null,_t=null,it=null,Rt=null,Et=null,de=null}}}const r=new e,a=new n,l=new s,c=new WeakMap,o=new WeakMap;let f={},u={},h={},d=new WeakMap,g=[],v=null,m=!1,p=null,S=null,A=null,M=null,b=null,E=null,C=null,x=new Lt(0,0,0),T=0,P=!1,N=null,F=null,G=null,D=null,V=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,st=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(B)[1]),Y=st>=1):B.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Y=st>=2);let X=null,J={};const rt=i.getParameter(i.SCISSOR_BOX),ft=i.getParameter(i.VIEWPORT),Zt=new ye().fromArray(rt),zt=new ye().fromArray(ft);function Ot(I,ht,Q,ut){const _t=new Uint8Array(4),it=i.createTexture();i.bindTexture(I,it),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<Q;Rt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(ht+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return it}const q={};q[i.TEXTURE_2D]=Ot(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),j(i.DEPTH_TEST),a.setFunc(Cs),qt(!1),xe(ml),j(i.CULL_FACE),jt(Yn);function j(I){f[I]!==!0&&(i.enable(I),f[I]=!0)}function xt(I){f[I]!==!1&&(i.disable(I),f[I]=!1)}function Nt(I,ht){return h[I]!==ht?(i.bindFramebuffer(I,ht),h[I]=ht,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ht),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Mt(I,ht){let Q=g,ut=!1;if(I){Q=d.get(ht),Q===void 0&&(Q=[],d.set(ht,Q));const _t=I.textures;if(Q.length!==_t.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Rt=_t.length;it<Rt;it++)Q[it]=i.COLOR_ATTACHMENT0+it;Q.length=_t.length,ut=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ut=!0);ut&&i.drawBuffers(Q)}function kt(I){return v!==I?(i.useProgram(I),v=I,!0):!1}const Pe={[Qi]:i.FUNC_ADD,[Zh]:i.FUNC_SUBTRACT,[$h]:i.FUNC_REVERSE_SUBTRACT};Pe[Jh]=i.MIN,Pe[Qh]=i.MAX;const Wt={[jh]:i.ZERO,[tu]:i.ONE,[eu]:i.SRC_COLOR,[Gc]:i.SRC_ALPHA,[ou]:i.SRC_ALPHA_SATURATE,[ru]:i.DST_COLOR,[iu]:i.DST_ALPHA,[nu]:i.ONE_MINUS_SRC_COLOR,[Vc]:i.ONE_MINUS_SRC_ALPHA,[au]:i.ONE_MINUS_DST_COLOR,[su]:i.ONE_MINUS_DST_ALPHA,[lu]:i.CONSTANT_COLOR,[cu]:i.ONE_MINUS_CONSTANT_COLOR,[hu]:i.CONSTANT_ALPHA,[uu]:i.ONE_MINUS_CONSTANT_ALPHA};function jt(I,ht,Q,ut,_t,it,Rt,Et,de,ee){if(I===Yn){m===!0&&(xt(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),I!==Kh){if(I!==p||ee!==P){if((S!==Qi||b!==Qi)&&(i.blendEquation(i.FUNC_ADD),S=Qi,b=Qi),ee)switch(I){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rs:i.blendFunc(i.ONE,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",I);break}else switch(I){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gl:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _l:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",I);break}A=null,M=null,E=null,C=null,x.set(0,0,0),T=0,p=I,P=ee}return}_t=_t||ht,it=it||Q,Rt=Rt||ut,(ht!==S||_t!==b)&&(i.blendEquationSeparate(Pe[ht],Pe[_t]),S=ht,b=_t),(Q!==A||ut!==M||it!==E||Rt!==C)&&(i.blendFuncSeparate(Wt[Q],Wt[ut],Wt[it],Wt[Rt]),A=Q,M=ut,E=it,C=Rt),(Et.equals(x)===!1||de!==T)&&(i.blendColor(Et.r,Et.g,Et.b,de),x.copy(Et),T=de),p=I,P=!1}function fe(I,ht){I.side===Pn?xt(i.CULL_FACE):j(i.CULL_FACE);let Q=I.side===qe;ht&&(Q=!Q),qt(Q),I.blending===Rs&&I.transparent===!1?jt(Yn):jt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const ut=I.stencilWrite;l.setTest(ut),ut&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),en(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(I){N!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),N=I)}function xe(I){I!==Xh?(j(i.CULL_FACE),I!==F&&(I===ml?i.cullFace(i.BACK):I===qh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),F=I}function Ne(I){I!==G&&(Y&&i.lineWidth(I),G=I)}function en(I,ht,Q){I?(j(i.POLYGON_OFFSET_FILL),(D!==ht||V!==Q)&&(D=ht,V=Q,a.getReversed()&&(ht=-ht),i.polygonOffset(ht,Q))):xt(i.POLYGON_OFFSET_FILL)}function Me(I){I?j(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Ae(I){I===void 0&&(I=i.TEXTURE0+Z-1),X!==I&&(i.activeTexture(I),X=I)}function U(I,ht,Q){Q===void 0&&(X===null?Q=i.TEXTURE0+Z-1:Q=X);let ut=J[Q];ut===void 0&&(ut={type:void 0,texture:void 0},J[Q]=ut),(ut.type!==I||ut.texture!==ht)&&(X!==Q&&(i.activeTexture(Q),X=Q),i.bindTexture(I,ht||q[I]),ut.type=I,ut.texture=ht)}function Ve(){const I=J[X];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(I){Qt("WebGLState:",I)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(I){Qt("WebGLState:",I)}}function _(){try{i.texSubImage2D(...arguments)}catch(I){Qt("WebGLState:",I)}}function O(){try{i.texSubImage3D(...arguments)}catch(I){Qt("WebGLState:",I)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Qt("WebGLState:",I)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Qt("WebGLState:",I)}}function at(){try{i.texStorage2D(...arguments)}catch(I){Qt("WebGLState:",I)}}function ot(){try{i.texStorage3D(...arguments)}catch(I){Qt("WebGLState:",I)}}function $(){try{i.texImage2D(...arguments)}catch(I){Qt("WebGLState:",I)}}function tt(){try{i.texImage3D(...arguments)}catch(I){Qt("WebGLState:",I)}}function lt(I){return u[I]!==void 0?u[I]:i.getParameter(I)}function At(I,ht){u[I]!==ht&&(i.pixelStorei(I,ht),u[I]=ht)}function dt(I){Zt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Zt.copy(I))}function ct(I){zt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),zt.copy(I))}function wt(I,ht){let Q=o.get(ht);Q===void 0&&(Q=new WeakMap,o.set(ht,Q));let ut=Q.get(I);ut===void 0&&(ut=i.getUniformBlockIndex(ht,I.name),Q.set(I,ut))}function It(I,ht){const ut=o.get(ht).get(I);c.get(ht)!==ut&&(i.uniformBlockBinding(ht,ut,I.__bindingPointIndex),c.set(ht,ut))}function Bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},u={},X=null,J={},h={},d=new WeakMap,g=[],v=null,m=!1,p=null,S=null,A=null,M=null,b=null,E=null,C=null,x=new Lt(0,0,0),T=0,P=!1,N=null,F=null,G=null,D=null,V=null,Zt.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:j,disable:xt,bindFramebuffer:Nt,drawBuffers:Mt,useProgram:kt,setBlending:jt,setMaterial:fe,setFlipSided:qt,setCullFace:xe,setLineWidth:Ne,setPolygonOffset:en,setScissorTest:Me,activeTexture:Ae,bindTexture:U,unbindTexture:Ve,compressedTexImage2D:se,compressedTexImage3D:w,texImage2D:$,texImage3D:tt,pixelStorei:At,getParameter:lt,updateUBOMapping:wt,uniformBlockBinding:It,texStorage2D:at,texStorage3D:ot,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:k,compressedTexSubImage3D:K,scissor:dt,viewport:ct,reset:Bt}}function ng(i,t,e,n,s,r,a){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new Dt,f=new WeakMap,u=new Set;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,_){return g?new OffscreenCanvas(w,_):Lr("canvas")}function m(w,_,O){let k=1;const K=se(w);if((K.width>O||K.height>O)&&(k=O/Math.max(K.width,K.height)),k<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const at=Math.floor(k*K.width),ot=Math.floor(k*K.height);h===void 0&&(h=v(at,ot));const $=_?v(at,ot):h;return $.width=at,$.height=ot,$.getContext("2d").drawImage(w,0,0,at,ot),Ut("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+at+"x"+ot+")."),$}else return"data"in w&&Ut("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function p(w){return w.generateMipmaps}function S(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(w,_,O,k,K,at=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ot;k&&(ot=t.get("EXT_texture_norm16"),ot||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=_;if(_===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8),O===i.UNSIGNED_SHORT&&ot&&($=ot.R16_EXT),O===i.SHORT&&ot&&($=ot.R16_SNORM_EXT)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),_===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8),O===i.UNSIGNED_SHORT&&ot&&($=ot.RG16_EXT),O===i.SHORT&&ot&&($=ot.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_SHORT&&ot&&($=ot.RGB16_EXT),O===i.SHORT&&ot&&($=ot.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),_===i.RGBA){const tt=at?Pr:Kt.getTransfer(K);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=tt===ae?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ot&&($=ot.RGBA16_EXT),O===i.SHORT&&ot&&($=ot.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function b(w,_){let O;return w?_===null||_===Nn||_===Ls?O=i.DEPTH24_STENCIL8:_===In?O=i.DEPTH32F_STENCIL8:_===Ps&&(O=i.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Nn||_===Ls?O=i.DEPTH_COMPONENT24:_===In?O=i.DEPTH_COMPONENT32F:_===Ps&&(O=i.DEPTH_COMPONENT16),O}function E(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==He&&w.minFilter!==Ge?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function C(w){const _=w.target;_.removeEventListener("dispose",C),T(_),_.isVideoTexture&&f.delete(_),_.isHTMLTexture&&u.delete(_)}function x(w){const _=w.target;_.removeEventListener("dispose",x),N(_)}function T(w){const _=n.get(w);if(_.__webglInit===void 0)return;const O=w.source,k=d.get(O);if(k){const K=k[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(w),Object.keys(k).length===0&&d.delete(O)}n.remove(w)}function P(w){const _=n.get(w);i.deleteTexture(_.__webglTexture);const O=w.source,k=d.get(O);delete k[_.__cacheKey],a.memory.textures--}function N(w){const _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let K=0;K<_.__webglFramebuffer[k].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[k][K]);else i.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)i.deleteFramebuffer(_.__webglFramebuffer[k]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=w.textures;for(let k=0,K=O.length;k<K;k++){const at=n.get(O[k]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),n.remove(O[k])}n.remove(w)}let F=0;function G(){F=0}function D(){return F}function V(w){F=w}function Z(){const w=F;return w>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,w}function Y(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function st(w,_){const O=n.get(w);if(w.isVideoTexture&&U(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const k=w.image;if(k===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(O,w,_);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function B(w,_){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){xt(O,w,_);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function X(w,_){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){xt(O,w,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function J(w,_){const O=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&O.__version!==w.version){Nt(O,w,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const rt={[ja]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[to]:i.MIRRORED_REPEAT},ft={[He]:i.NEAREST,[pu]:i.NEAREST_MIPMAP_NEAREST,[zs]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},Zt={[xu]:i.NEVER,[bu]:i.ALWAYS,[vu]:i.LESS,[Ko]:i.LEQUAL,[Mu]:i.EQUAL,[Zo]:i.GEQUAL,[Su]:i.GREATER,[yu]:i.NOTEQUAL};function zt(w,_){if(_.type===In&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ge||_.magFilter===$r||_.magFilter===zs||_.magFilter===oi||_.minFilter===Ge||_.minFilter===$r||_.minFilter===zs||_.minFilter===oi)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,rt[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,rt[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,rt[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ft[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ft[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Zt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===He||_.minFilter!==zs&&_.minFilter!==oi||_.type===In&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ot(w,_){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",C));const k=_.source;let K=d.get(k);K===void 0&&(K={},d.set(k,K));const at=Y(_);if(at!==w.__cacheKey){K[at]===void 0&&(K[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[at].usedTimes++;const ot=K[w.__cacheKey];ot!==void 0&&(K[w.__cacheKey].usedTimes--,ot.usedTimes===0&&P(_)),w.__cacheKey=at,w.__webglTexture=K[at].texture}return O}function q(w,_,O){return Math.floor(Math.floor(w/O)/_)}function j(w,_,O,k){const at=w.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,k,_.data);else{at.sort((At,dt)=>At.start-dt.start);let ot=0;for(let At=1;At<at.length;At++){const dt=at[ot],ct=at[At],wt=dt.start+dt.count,It=q(ct.start,_.width,4),Bt=q(dt.start,_.width,4);ct.start<=wt+1&&It===Bt&&q(ct.start+ct.count-1,_.width,4)===It?dt.count=Math.max(dt.count,ct.start+ct.count-dt.start):(++ot,at[ot]=ct)}at.length=ot+1;const $=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),lt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let At=0,dt=at.length;At<dt;At++){const ct=at[At],wt=Math.floor(ct.start/4),It=Math.ceil(ct.count/4),Bt=wt%_.width,I=Math.floor(wt/_.width),ht=It,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Bt),e.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,Bt,I,ht,Q,O,k,_.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,lt)}}function xt(w,_,O){let k=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=i.TEXTURE_3D);const K=Ot(w,_),at=_.source;e.bindTexture(k,w.__webglTexture,i.TEXTURE0+O);const ot=n.get(at);if(at.version!==ot.__version||K===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Q=Kt.getPrimaries(Kt.workingColorSpace),ut=_.colorSpace===ai?null:Kt.getPrimaries(_.colorSpace),_t=_.colorSpace===ai||Q===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let tt=m(_.image,!1,s.maxTextureSize);tt=Ve(_,tt);const lt=r.convert(_.format,_.colorSpace),At=r.convert(_.type);let dt=M(_.internalFormat,lt,At,_.normalized,_.colorSpace,_.isVideoTexture);zt(k,_);let ct;const wt=_.mipmaps,It=_.isVideoTexture!==!0,Bt=ot.__version===void 0||K===!0,I=at.dataReady,ht=E(_,tt);if(_.isDepthTexture)dt=b(_.format===Si,_.type),Bt&&(It?e.texStorage2D(i.TEXTURE_2D,1,dt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,dt,tt.width,tt.height,0,lt,At,null));else if(_.isDataTexture)if(wt.length>0){It&&Bt&&e.texStorage2D(i.TEXTURE_2D,ht,dt,wt[0].width,wt[0].height);for(let Q=0,ut=wt.length;Q<ut;Q++)ct=wt[Q],It?I&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ct.width,ct.height,lt,At,ct.data):e.texImage2D(i.TEXTURE_2D,Q,dt,ct.width,ct.height,0,lt,At,ct.data);_.generateMipmaps=!1}else It?(Bt&&e.texStorage2D(i.TEXTURE_2D,ht,dt,tt.width,tt.height),I&&j(_,tt,lt,At)):e.texImage2D(i.TEXTURE_2D,0,dt,tt.width,tt.height,0,lt,At,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){It&&Bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,dt,wt[0].width,wt[0].height,tt.depth);for(let Q=0,ut=wt.length;Q<ut;Q++)if(ct=wt[Q],_.format!==Sn)if(lt!==null)if(It){if(I)if(_.layerUpdates.size>0){const _t=kl(ct.width,ct.height,_.format,_.type);for(const it of _.layerUpdates){const Rt=ct.data.subarray(it*_t/ct.data.BYTES_PER_ELEMENT,(it+1)*_t/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,it,ct.width,ct.height,1,lt,Rt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ct.width,ct.height,tt.depth,lt,ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,dt,ct.width,ct.height,tt.depth,0,ct.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ct.width,ct.height,tt.depth,lt,At,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,dt,ct.width,ct.height,tt.depth,0,lt,At,ct.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{It&&Bt&&e.texStorage2D(i.TEXTURE_2D,ht,dt,wt[0].width,wt[0].height);for(let Q=0,ut=wt.length;Q<ut;Q++)ct=wt[Q],_.format!==Sn?lt!==null?It?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ct.width,ct.height,lt,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,dt,ct.width,ct.height,0,ct.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?I&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ct.width,ct.height,lt,At,ct.data):e.texImage2D(i.TEXTURE_2D,Q,dt,ct.width,ct.height,0,lt,At,ct.data)}else if(_.isDataArrayTexture)if(It){if(Bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,dt,tt.width,tt.height,tt.depth),I)if(_.layerUpdates.size>0){const Q=kl(tt.width,tt.height,_.format,_.type);for(const ut of _.layerUpdates){const _t=tt.data.subarray(ut*Q/tt.data.BYTES_PER_ELEMENT,(ut+1)*Q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,tt.width,tt.height,1,lt,At,_t)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,lt,At,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,tt.width,tt.height,tt.depth,0,lt,At,tt.data);else if(_.isData3DTexture)It?(Bt&&e.texStorage3D(i.TEXTURE_3D,ht,dt,tt.width,tt.height,tt.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,lt,At,tt.data)):e.texImage3D(i.TEXTURE_3D,0,dt,tt.width,tt.height,tt.depth,0,lt,At,tt.data);else if(_.isFramebufferTexture){if(Bt)if(It)e.texStorage2D(i.TEXTURE_2D,ht,dt,tt.width,tt.height);else{let Q=tt.width,ut=tt.height;for(let _t=0;_t<ht;_t++)e.texImage2D(i.TEXTURE_2D,_t,dt,Q,ut,0,lt,At,null),Q>>=1,ut>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),tt.parentNode!==Q){Q.appendChild(tt),u.add(_),Q.onpaint=ut=>{const _t=ut.changedElements;for(const it of u)_t.includes(it.image)&&(it.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{const _t=i.RGBA,it=i.RGBA,Rt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_t,it,Rt,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(wt.length>0){if(It&&Bt){const Q=se(wt[0]);e.texStorage2D(i.TEXTURE_2D,ht,dt,Q.width,Q.height)}for(let Q=0,ut=wt.length;Q<ut;Q++)ct=wt[Q],It?I&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,lt,At,ct):e.texImage2D(i.TEXTURE_2D,Q,dt,lt,At,ct);_.generateMipmaps=!1}else if(It){if(Bt){const Q=se(tt);e.texStorage2D(i.TEXTURE_2D,ht,dt,Q.width,Q.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,At,tt)}else e.texImage2D(i.TEXTURE_2D,0,dt,lt,At,tt);p(_)&&S(k),ot.__version=at.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Nt(w,_,O){if(_.image.length!==6)return;const k=Ot(w,_),K=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const at=n.get(K);if(K.version!==at.__version||k===!0){e.activeTexture(i.TEXTURE0+O);const ot=Kt.getPrimaries(Kt.workingColorSpace),$=_.colorSpace===ai?null:Kt.getPrimaries(_.colorSpace),tt=_.colorSpace===ai||ot===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const lt=_.isCompressedTexture||_.image[0].isCompressedTexture,At=_.image[0]&&_.image[0].isDataTexture,dt=[];for(let it=0;it<6;it++)!lt&&!At?dt[it]=m(_.image[it],!0,s.maxCubemapSize):dt[it]=At?_.image[it].image:_.image[it],dt[it]=Ve(_,dt[it]);const ct=dt[0],wt=r.convert(_.format,_.colorSpace),It=r.convert(_.type),Bt=M(_.internalFormat,wt,It,_.normalized,_.colorSpace),I=_.isVideoTexture!==!0,ht=at.__version===void 0||k===!0,Q=K.dataReady;let ut=E(_,ct);zt(i.TEXTURE_CUBE_MAP,_);let _t;if(lt){I&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Bt,ct.width,ct.height);for(let it=0;it<6;it++){_t=dt[it].mipmaps;for(let Rt=0;Rt<_t.length;Rt++){const Et=_t[Rt];_.format!==Sn?wt!==null?I?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,0,0,Et.width,Et.height,wt,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,Bt,Et.width,Et.height,0,Et.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,0,0,Et.width,Et.height,wt,It,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,Bt,Et.width,Et.height,0,wt,It,Et.data)}}}else{if(_t=_.mipmaps,I&&ht){_t.length>0&&ut++;const it=se(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Bt,it.width,it.height)}for(let it=0;it<6;it++)if(At){I?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,dt[it].width,dt[it].height,wt,It,dt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Bt,dt[it].width,dt[it].height,0,wt,It,dt[it].data);for(let Rt=0;Rt<_t.length;Rt++){const de=_t[Rt].image[it].image;I?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,0,0,de.width,de.height,wt,It,de.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,Bt,de.width,de.height,0,wt,It,de.data)}}else{I?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,wt,It,dt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Bt,wt,It,dt[it]);for(let Rt=0;Rt<_t.length;Rt++){const Et=_t[Rt];I?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,0,0,wt,It,Et.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,Bt,wt,It,Et.image[it])}}}p(_)&&S(i.TEXTURE_CUBE_MAP),at.__version=K.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Mt(w,_,O,k,K,at){const ot=r.convert(O.format,O.colorSpace),$=r.convert(O.type),tt=M(O.internalFormat,ot,$,O.normalized,O.colorSpace),lt=n.get(_),At=n.get(O);if(At.__renderTarget=_,!lt.__hasExternalTextures){const dt=Math.max(1,_.width>>at),ct=Math.max(1,_.height>>at);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,at,tt,dt,ct,_.depth,0,ot,$,null):e.texImage2D(K,at,tt,dt,ct,0,ot,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Ae(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,K,At.__webglTexture,0,Me(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,K,At.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(w,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){const k=_.depthTexture,K=k&&k.isDepthTexture?k.type:null,at=b(_.stencilBuffer,K),ot=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ae(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me(_),at,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me(_),at,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,at,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,w)}else{const k=_.textures;for(let K=0;K<k.length;K++){const at=k[K],ot=r.convert(at.format,at.colorSpace),$=r.convert(at.type),tt=M(at.internalFormat,ot,$,at.normalized,at.colorSpace);Ae(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me(_),tt,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me(_),tt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,tt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(w,_,O){const k=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),zt(i.TEXTURE_CUBE_MAP,_.depthTexture);const lt=r.convert(_.depthTexture.format),At=r.convert(_.depthTexture.type);let dt;_.depthTexture.format===Zn?dt=i.DEPTH_COMPONENT24:_.depthTexture.format===Si&&(dt=i.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,dt,_.width,_.height,0,lt,At,null)}}else st(_.depthTexture,0);const at=K.__webglTexture,ot=Me(_),$=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,tt=_.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Zn)Ae(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,$,at,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,tt,$,at,0);else if(_.depthTexture.format===Si)Ae(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,$,at,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,tt,$,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Wt(w){const _=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const k=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",K)};k.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=k}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let k=0;k<6;k++)Pe(_.__webglFramebuffer[k],w,k);else{const k=w.texture.mipmaps;k&&k.length>0?Pe(_.__webglFramebuffer[0],w,0):Pe(_.__webglFramebuffer,w,0)}else if(O){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=i.createRenderbuffer(),kt(_.__webglDepthbuffer[k],w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,at)}}else{const k=w.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),kt(_.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,at)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(w,_,O){const k=n.get(w);_!==void 0&&Mt(k.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Wt(w)}function fe(w){const _=w.texture,O=n.get(w),k=n.get(_);w.addEventListener("dispose",x);const K=w.textures,at=w.isWebGLCubeRenderTarget===!0,ot=K.length>1;if(ot||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=_.version,a.memory.textures++),at){O.__webglFramebuffer=[];for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[$]=[];for(let tt=0;tt<_.mipmaps.length;tt++)O.__webglFramebuffer[$][tt]=i.createFramebuffer()}else O.__webglFramebuffer[$]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let $=0;$<_.mipmaps.length;$++)O.__webglFramebuffer[$]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ot)for(let $=0,tt=K.length;$<tt;$++){const lt=n.get(K[$]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Ae(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let $=0;$<K.length;$++){const tt=K[$];O.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[$]);const lt=r.convert(tt.format,tt.colorSpace),At=r.convert(tt.type),dt=M(tt.internalFormat,lt,At,tt.normalized,tt.colorSpace,w.isXRRenderTarget===!0),ct=Me(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,dt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,O.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),kt(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),zt(i.TEXTURE_CUBE_MAP,_);for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)Mt(O.__webglFramebuffer[$][tt],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,tt);else Mt(O.__webglFramebuffer[$],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(_)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let $=0,tt=K.length;$<tt;$++){const lt=K[$],At=n.get(lt);let dt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(dt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,At.__webglTexture),zt(dt,lt),Mt(O.__webglFramebuffer,w,lt,i.COLOR_ATTACHMENT0+$,dt,0),p(lt)&&S(dt)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,k.__webglTexture),zt($,_),_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)Mt(O.__webglFramebuffer[tt],w,_,i.COLOR_ATTACHMENT0,$,tt);else Mt(O.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,$,0);p(_)&&S($),e.unbindTexture()}w.depthBuffer&&Wt(w)}function qt(w){const _=w.textures;for(let O=0,k=_.length;O<k;O++){const K=_[O];if(p(K)){const at=A(w),ot=n.get(K).__webglTexture;e.bindTexture(at,ot),S(at),e.unbindTexture()}}}const xe=[],Ne=[];function en(w){if(w.samples>0){if(Ae(w)===!1){const _=w.textures,O=w.width,k=w.height;let K=i.COLOR_BUFFER_BIT;const at=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=n.get(w),$=_.length>1;if($)for(let lt=0;lt<_.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);const tt=w.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let lt=0;lt<_.length;lt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);const At=n.get(_[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,At,0)}i.blitFramebuffer(0,0,O,k,0,0,O,k,K,i.NEAREST),c===!0&&(xe.length=0,Ne.length=0,xe.push(i.COLOR_ATTACHMENT0+lt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(xe.push(at),Ne.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let lt=0;lt<_.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);const At=n.get(_[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,At,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){const _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Me(w){return Math.min(s.maxSamples,w.samples)}function Ae(w){const _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function U(w){const _=a.render.frame;f.get(w)!==_&&(f.set(w,_),w.update())}function Ve(w,_){const O=w.colorSpace,k=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Cr&&O!==ai&&(Kt.getTransfer(O)===ae?(k!==Sn||K!==cn)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",O)),_}function se(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(o.width=w.naturalWidth||w.width,o.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(o.width=w.displayWidth,o.height=w.displayHeight):(o.width=w.width,o.height=w.height),o}this.allocateTextureUnit=Z,this.resetTextureUnits=G,this.getTextureUnits=D,this.setTextureUnits=V,this.setTexture2D=st,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=J,this.rebindTextures=jt,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ig(i,t){function e(n,s=ai){let r;const a=Kt.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===ko)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jc)return i.BYTE;if(n===Qc)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===Vo)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===eh)return i.ALPHA;if(n===nh)return i.RGB;if(n===Sn)return i.RGBA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===ih)return i.RED;if(n===Xo)return i.RED_INTEGER;if(n===Ei)return i.RG;if(n===qo)return i.RG_INTEGER;if(n===Yo)return i.RGBA_INTEGER;if(n===Sr||n===yr||n===br||n===Er)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eo||n===no||n===io||n===so)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===no)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===so)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ro||n===ao||n===oo||n===lo||n===co||n===Ar||n===ho)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ro||n===ao)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===lo)return r.COMPRESSED_R11_EAC;if(n===co)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ar)return r.COMPRESSED_RG11_EAC;if(n===ho)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===Mo||n===So||n===yo||n===bo||n===Eo||n===To)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===po)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===go)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_o)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===So)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===To)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ao||n===wo||n===Ro)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ao)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ro)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Co||n===Po||n===wr||n===Lo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rg=`
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

}`;class ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new gh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new En({vertexShader:sg,fragmentShader:rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ke(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class og extends Ti{constructor(t,e){super();const n=this;let s=null,r=1,a=null,l="local-floor",c=1,o=null,f=null,u=null,h=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new ag,p={},S=e.getContextAttributes();let A=null,M=null;const b=[],E=[],C=new Dt;let x=null,T=null;const P=new fn;P.viewport=new ye;const N=new fn;N.viewport=new ye;const F=[P,N],G=new mf;let D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=b[q];return j===void 0&&(j=new ra,b[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=b[q];return j===void 0&&(j=new ra,b[q]=j),j.getGripSpace()},this.getHand=function(q){let j=b[q];return j===void 0&&(j=new ra,b[q]=j),j.getHandSpace()};function Z(q){const j=E.indexOf(q.inputSource);if(j===-1)return;const xt=b[j];xt!==void 0&&(xt.update(q.inputSource,q.frame,o||a),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",st);for(let q=0;q<b.length;q++){const j=E[q];j!==null&&(E[q]=null,b[q].disconnect(j))}D=null,V=null,m.reset();for(const q in p)delete p[q];if(t.setRenderTarget(A),d=null,h=null,u=null,s=null,M=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),T!==null){const q=T.camera;q.fov=T.fov,q.zoom=T.zoom,q.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){l=q,n.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(q){o=q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",st),S.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Nt=null,Mt=null;S.depth&&(Mt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=S.stencil?Si:Zn,Nt=S.stencil?Ls:Nn);const kt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(kt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new bn(h.textureWidth,h.textureHeight,{format:Sn,type:cn,depthTexture:new Is(h.textureWidth,h.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const xt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new bn(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),o=null,a=await s.requestReferenceSpace(l),Ot.setContext(s),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(q){for(let j=0;j<q.removed.length;j++){const xt=q.removed[j],Nt=E.indexOf(xt);Nt>=0&&(E[Nt]=null,b[Nt].disconnect(xt))}for(let j=0;j<q.added.length;j++){const xt=q.added[j];let Nt=E.indexOf(xt);if(Nt===-1){for(let kt=0;kt<b.length;kt++)if(kt>=E.length){E.push(xt),Nt=kt;break}else if(E[kt]===null){E[kt]=xt,Nt=kt;break}if(Nt===-1)break}const Mt=b[Nt];Mt&&Mt.connect(xt)}}const B=new R,X=new R;function J(q,j,xt){B.setFromMatrixPosition(j.matrixWorld),X.setFromMatrixPosition(xt.matrixWorld);const Nt=B.distanceTo(X),Mt=j.projectionMatrix.elements,kt=xt.projectionMatrix.elements,Pe=Mt[14]/(Mt[10]-1),Wt=Mt[14]/(Mt[10]+1),jt=(Mt[9]+1)/Mt[5],fe=(Mt[9]-1)/Mt[5],qt=(Mt[8]-1)/Mt[0],xe=(kt[8]+1)/kt[0],Ne=Pe*qt,en=Pe*xe,Me=Nt/(-qt+xe),Ae=Me*-qt;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ae),q.translateZ(Me),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Mt[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const U=Pe+Me,Ve=Wt+Me,se=Ne-Ae,w=en+(Nt-Ae),_=jt*Wt/Ve*U,O=fe*Wt/Ve*U;q.projectionMatrix.makePerspective(se,w,_,O,U,Ve),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function rt(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,xt=q.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),G.near=N.near=P.near=j,G.far=N.far=P.far=xt,(D!==G.near||V!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),D=G.near,V=G.far),G.layers.mask=q.layers.mask|6,P.layers.mask=G.layers.mask&-5,N.layers.mask=G.layers.mask&-3;const Nt=q.parent,Mt=G.cameras;rt(G,Nt);for(let kt=0;kt<Mt.length;kt++)rt(Mt[kt],Nt);Mt.length===2?J(G,P,N):G.projectionMatrix.copy(P.projectionMatrix),T===null&&q.isPerspectiveCamera&&(T={camera:q,fov:q.fov,zoom:q.zoom}),ft(q,G,Nt)};function ft(q,j,xt){xt===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Do*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(q){return p[q]};let Zt=null;function zt(q,j){if(f=j.getViewerPose(o||a),g=j,f!==null){const xt=f.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Nt=!1;xt.length!==G.cameras.length&&(G.cameras.length=0,Nt=!0);for(let Wt=0;Wt<xt.length;Wt++){const jt=xt[Wt];let fe=null;if(d!==null)fe=d.getViewport(jt);else{const xe=u.getViewSubImage(h,jt);fe=xe.viewport,Wt===0&&(t.setRenderTargetTextures(M,xe.colorTexture,xe.depthStencilTexture),t.setRenderTarget(M))}let qt=F[Wt];qt===void 0&&(qt=new fn,qt.layers.enable(Wt),qt.viewport=new ye,F[Wt]=qt),qt.matrix.fromArray(jt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(jt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(fe.x,fe.y,fe.width,fe.height),Wt===0&&(G.matrix.copy(qt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Nt===!0&&G.cameras.push(qt)}const Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const Wt=u.getDepthInformation(xt[0]);Wt&&Wt.isValid&&Wt.texture&&m.init(Wt,s.renderState)}if(Mt&&Mt.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let Wt=0;Wt<xt.length;Wt++){const jt=xt[Wt].camera;if(jt){let fe=p[jt];fe||(fe=new gh,p[jt]=fe);const qt=u.getCameraImage(jt);fe.sourceTexture=qt}}}}for(let xt=0;xt<b.length;xt++){const Nt=E[xt],Mt=b[xt];Nt!==null&&Mt!==void 0&&Mt.update(Nt,j,o||a)}Zt&&Zt(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Ot=new Sh;Ot.setAnimationLoop(zt),this.setAnimationLoop=function(q){Zt=q},this.dispose=function(){}}}const lg=new oe,Rh=new Ft;Rh.set(-1,0,0,0,1,0,0,0,1);function cg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,_h(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,A,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?c(m,p,S,A):p.isSpriteMaterial?o(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),A=S.envMap,M=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(lg.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Rh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hg(i,t,e,n){let s={},r={},a=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){const E=b.program;n.uniformBlockBinding(M,E)}function o(M,b){let E=s[M.id];E===void 0&&(m(M),E=f(M),s[M.id]=E,M.addEventListener("dispose",S));const C=b.program;n.updateUBOMapping(M,C);const x=t.render.frame;r[M.id]!==x&&(h(M),r[M.id]=x)}function f(M){const b=u();M.__bindingPointIndex=b;const E=i.createBuffer(),C=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function u(){for(let M=0;M<l;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const b=s[M.id],E=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,T=E.length;x<T;x++){const P=E[x];if(Array.isArray(P))for(let N=0,F=P.length;N<F;N++)d(P[N],x,N,C);else d(P,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,b,E,C){if(v(M,b,E,C)===!0){const x=M.__offset,T=M.value;if(Array.isArray(T)){let P=0;for(let N=0;N<T.length;N++){const F=T[N],G=p(F);g(F,M.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function g(M,b,E){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,E)}function v(M,b,E,C){const x=M.value,T=b+"_"+E;if(C[T]===void 0)return typeof x=="number"||typeof x=="boolean"?C[T]=x:ArrayBuffer.isView(x)?C[T]=x.slice():C[T]=x.clone(),!0;{const P=C[T];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return C[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(M){const b=M.uniforms;let E=0;const C=16;for(let T=0,P=b.length;T<P;T++){const N=Array.isArray(b[T])?b[T]:[b[T]];for(let F=0,G=N.length;F<G;F++){const D=N[F],V=Array.isArray(D.value)?D.value:[D.value];for(let Z=0,Y=V.length;Z<Y;Z++){const st=V[Z],B=p(st),X=E%C,J=X%B.boundary,rt=X+J;E+=J,rt!==0&&C-rt<B.storage&&(E+=C-rt),D.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=B.storage}}}const x=E%C;return x>0&&(E+=C-x),M.__size=E,M.__cache={},this}function p(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",M),b}function S(M){const b=M.target;b.removeEventListener("dispose",S);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:o,dispose:A}}const ug=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Rn=null;function fg(){return Rn===null&&(Rn=new $u(ug,16,16,Ei,Fn),Rn.name="DFG_LUT",Rn.minFilter=Ge,Rn.magFilter=Ge,Rn.wrapS=qn,Rn.wrapT=qn,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}class dg{constructor(t={}){const{canvas:e=Tu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:d=cn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=d,m=new Set([Yo,qo,Xo]),p=new Set([cn,Nn,Ps,Ls,ko,Wo]),S=new Uint32Array(4),A=new Int32Array(4),M=new R;let b=null,E=null;const C=[],x=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,F=null,G=null,D=null,V=null;this._outputColorSpace=nn;let Z=0,Y=0,st=null,B=-1,X=null;const J=new ye,rt=new ye;let ft=null;const Zt=new Lt(0);let zt=0,Ot=e.width,q=e.height,j=1,xt=null,Nt=null;const Mt=new ye(0,0,Ot,q),kt=new ye(0,0,Ot,q);let Pe=!1;const Wt=new jo;let jt=!1,fe=!1;const qt=new oe,xe=new R,Ne=new ye,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Ae(){return st===null?j:1}let U=n;function Ve(y,L){return e.getContext(y,L)}let se,w,_,O,k,K,at,ot,$,tt,lt,At,dt,ct,wt,It,Bt,I,ht,Q,ut,_t,it;try{const y={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Go}`),e.addEventListener("webglcontextlost",de,!1),e.addEventListener("webglcontextrestored",ee,!1),e.addEventListener("webglcontextcreationerror",gn,!1),U===null){const L="webgl2";if(U=Ve(L,y),U===null)throw Ve(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Rt()}catch(y){throw e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",gn,!1),Qt("WebGLRenderer: "+y.message),y}function Rt(){se=new fm(U),se.init(),ut=new ig(U,se),w=new nm(U,se,t,ut),_=new eg(U,se),w.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),G=U.createFramebuffer(),D=U.createFramebuffer(),V=U.createFramebuffer(),O=new mm(U),k=new G0,K=new ng(U,se,_,k,w,ut,O),at=new um(P),ot=new _f(U),_t=new tm(U,ot),$=new dm(U,ot,O,_t),tt=new _m(U,$,ot,_t,O),I=new gm(U,w,K),wt=new im(k),lt=new H0(P,at,se,w,_t,wt),At=new cg(P,k),dt=new k0,ct=new Z0(se),Bt=new jp(P,at,_,tt,g,c),It=new tg(P,tt,w),it=new hg(U,O,w,_),ht=new em(U,se,O),Q=new pm(U,se,O),O.programs=lt.programs,P.capabilities=w,P.extensions=se,P.properties=k,P.renderLists=dt,P.shadowMap=It,P.state=_,P.info=O}v!==cn&&(T=new vm(v,e.width,e.height,l,s,r));const Et=new og(P,U);this.xr=Et,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=se.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=se.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(y){y!==void 0&&(j=y,this.setSize(Ot,q,!1))},this.getSize=function(y){return y.set(Ot,q)},this.setSize=function(y,L,W=!0){if(Et.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}Ot=y,q=L,e.width=Math.floor(y*j),e.height=Math.floor(L*j),W===!0&&(e.style.width=y+"px",e.style.height=L+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(Ot*j,q*j).floor()},this.setDrawingBufferSize=function(y,L,W){Ot=y,q=L,j=W,e.width=Math.floor(y*W),e.height=Math.floor(L*W),this.setViewport(0,0,y,L)},this.setEffects=function(y){if(v===cn){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let L=0;L<y.length;L++)if(y[L].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(J)},this.getViewport=function(y){return y.copy(Mt)},this.setViewport=function(y,L,W,z){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,L,W,z),_.viewport(J.copy(Mt).multiplyScalar(j).round())},this.getScissor=function(y){return y.copy(kt)},this.setScissor=function(y,L,W,z){y.isVector4?kt.set(y.x,y.y,y.z,y.w):kt.set(y,L,W,z),_.scissor(rt.copy(kt).multiplyScalar(j).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(y){_.setScissorTest(Pe=y)},this.setOpaqueSort=function(y){xt=y},this.setTransparentSort=function(y){Nt=y},this.getClearColor=function(y){return y.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(y=!0,L=!0,W=!0){let z=0;if(y){let H=!1;if(st!==null){const gt=st.texture.format;H=m.has(gt)}if(H){const gt=st.texture.type,St=p.has(gt),mt=Bt.getClearColor(),yt=Bt.getClearAlpha(),Tt=mt.r,Ht=mt.g,Xt=mt.b;St?(S[0]=Tt,S[1]=Ht,S[2]=Xt,S[3]=yt,U.clearBufferuiv(U.COLOR,0,S)):(A[0]=Tt,A[1]=Ht,A[2]=Xt,A[3]=yt,U.clearBufferiv(U.COLOR,0,A))}else z|=U.COLOR_BUFFER_BIT}L&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",gn,!1),Bt.dispose(),dt.dispose(),ct.dispose(),k.dispose(),at.dispose(),tt.dispose(),_t.dispose(),it.dispose(),lt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",al),Et.removeEventListener("sessionend",ol),fi.stop()};function de(y){y.preventDefault(),Dr("WebGLRenderer: Context Lost."),N=!0}function ee(){Dr("WebGLRenderer: Context Restored."),N=!1;const y=O.autoReset,L=It.enabled,W=It.autoUpdate,z=It.needsUpdate,H=It.type;Rt(),O.autoReset=y,It.enabled=L,It.autoUpdate=W,It.needsUpdate=z,It.type=H}function gn(y){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Tn(y){const L=y.target;L.removeEventListener("dispose",Tn),Oh(L)}function Oh(y){Bh(y),k.remove(y)}function Bh(y){const L=k.get(y).programs;L!==void 0&&(L.forEach(function(W){lt.releaseProgram(W)}),y.isShaderMaterial&&lt.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,W,z,H,gt){L===null&&(L=en);const St=H.isMesh&&H.matrixWorld.determinantAffine()<0,mt=Gh(y,L,W,z,H);_.setMaterial(z,St);let yt=W.index,Tt=1;if(z.wireframe===!0){if(yt=$.getWireframeAttribute(W),yt===void 0)return;Tt=2}const Ht=W.drawRange,Xt=W.attributes.position;let bt=Ht.start*Tt,ne=(Ht.start+Ht.count)*Tt;gt!==null&&(bt=Math.max(bt,gt.start*Tt),ne=Math.min(ne,(gt.start+gt.count)*Tt)),yt!==null?(bt=Math.max(bt,0),ne=Math.min(ne,yt.count)):Xt!=null&&(bt=Math.max(bt,0),ne=Math.min(ne,Xt.count));const we=ne-bt;if(we<0||we===1/0)return;_t.setup(H,z,mt,W,yt);let ge,ue=ht;if(yt!==null&&(ge=ot.get(yt),ue=Q,ue.setIndex(ge)),H.isMesh)z.wireframe===!0?(_.setLineWidth(z.wireframeLinewidth*Ae()),ue.setMode(U.LINES)):ue.setMode(U.TRIANGLES);else if(H.isLine){let ke=z.linewidth;ke===void 0&&(ke=1),_.setLineWidth(ke*Ae()),H.isLineSegments?ue.setMode(U.LINES):H.isLineLoop?ue.setMode(U.LINE_LOOP):ue.setMode(U.LINE_STRIP)}else H.isPoints?ue.setMode(U.POINTS):H.isSprite&&ue.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(se.get("WEBGL_multi_draw"))ue.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const ke=H._multiDrawStarts,vt=H._multiDrawCounts,Ze=H._multiDrawCount,$t=yt?ot.get(yt).bytesPerElement:1,hn=k.get(z).currentProgram.getUniforms();for(let An=0;An<Ze;An++)hn.setValue(U,"_gl_DrawID",An),ue.render(ke[An]/$t,vt[An])}else if(H.isInstancedMesh)ue.renderInstances(bt,we,H.count);else if(W.isInstancedBufferGeometry){const ke=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,vt=Math.min(W.instanceCount,ke);ue.renderInstances(bt,we,vt)}else ue.render(bt,we)};function rl(y,L,W,z){F!==null&&y.isNodeMaterial&&F.setObject(z,y),jt===!0&&wt.setState(y,W,!1),y.transparent===!0&&y.side===Pn&&y.forceSinglePass===!1?(y.side=qe,y.needsUpdate=!0,Bs(y,L,z),y.side=yi,y.needsUpdate=!0,Bs(y,L,z),y.side=Pn):Bs(y,L,z)}this.compile=function(y,L,W=null){W===null&&(W=y),F!==null&&F.renderStart(y,L,W),E=ct.get(W),E.init(L),x.push(E),W.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),y!==W&&y.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),fe=this.localClippingEnabled,jt=wt.init(this.clippingPlanes,fe),jt===!0&&wt.setGlobalState(this.clippingPlanes,L),F!==null&&It.render(E.state.shadowsArray,W,L);const z=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const gt=H.material;if(gt)if(Array.isArray(gt))for(let St=0;St<gt.length;St++){const mt=gt[St];rl(mt,W,L,H),z.add(mt)}else rl(gt,W,L,H),z.add(gt)}),E=x.pop(),F!==null&&F.renderEnd(),z},this.compileAsync=function(y,L,W=null){const z=this.compile(y,L,W);return new Promise(H=>{function gt(){if(z.forEach(function(St){const yt=k.get(St).currentProgram;(yt===void 0||yt.isReady())&&z.delete(St)}),z.size===0){H(y);return}setTimeout(gt,10)}se.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let qr=null;function zh(y){qr&&qr(y)}function al(){fi.stop()}function ol(){fi.start()}const fi=new Sh;fi.setAnimationLoop(zh),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(y){qr=y,Et.setAnimationLoop(y),y===null?fi.stop():fi.start()},Et.addEventListener("sessionstart",al),Et.addEventListener("sessionend",ol),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(y,L);const W=Et.enabled===!0&&Et.isPresenting===!0,z=T!==null&&(st===null||W)&&T.begin(P,st);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(L),L=Et.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,L,st),E=ct.get(y,x.length),E.init(L),E.state.textureUnits=K.getTextureUnits(),x.push(E),qt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Wt.setFromProjectionMatrix(qt,Un,L.reversedDepth),fe=this.localClippingEnabled,jt=wt.init(this.clippingPlanes,fe),b=dt.get(y,C.length),b.init(),C.push(b),Et.enabled===!0&&Et.isPresenting===!0){const St=P.xr.getDepthSensingMesh();St!==null&&Yr(St,L,-1/0,P.sortObjects)}Yr(y,L,0,P.sortObjects),b.finish(),F!==null&&F.updateLights(E.state.lightsArray),P.sortObjects===!0&&b.sort(xt,Nt),Me=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,Me&&Bt.addToRenderList(b,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),jt===!0&&wt.beginShadows();const H=E.state.shadowsArray;if(It.render(H,y,L),jt===!0&&wt.endShadows(),(z&&T.hasRenderPass())===!1){const St=b.opaque,mt=b.transmissive;if(E.setupLights(),L.isArrayCamera){const yt=L.cameras;if(mt.length>0)for(let Tt=0,Ht=yt.length;Tt<Ht;Tt++){const Xt=yt[Tt];cl(St,mt,y,Xt)}Me&&Bt.render(y);for(let Tt=0,Ht=yt.length;Tt<Ht;Tt++){const Xt=yt[Tt];ll(b,y,Xt,Xt.viewport)}}else mt.length>0&&cl(St,mt,y,L),Me&&Bt.render(y),ll(b,y,L)}st!==null&&Y===0&&(K.updateMultisampleRenderTarget(st),K.updateRenderTargetMipmap(st)),z&&T.end(P),y.isScene===!0&&y.onAfterRender(P,y,L),_t.resetDefaultState(),B=-1,X=null,x.pop(),x.length>0?(E=x[x.length-1],K.setTextureUnits(E.state.textureUnits),jt===!0&&wt.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,F!==null&&F.renderEnd()};function Yr(y,L,W,z){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Wt)){z&&Ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(qt);const St=tt.update(y),mt=y.material;mt.visible&&b.push(y,St,mt,W,Ne.z,null,L)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Wt))){const St=tt.update(y),mt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ne.copy(y.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ne.copy(St.boundingSphere.center)),Ne.applyMatrix4(y.matrixWorld).applyMatrix4(qt)),Array.isArray(mt)){const yt=St.groups;for(let Tt=0,Ht=yt.length;Tt<Ht;Tt++){const Xt=yt[Tt],bt=mt[Xt.materialIndex];bt&&bt.visible&&b.push(y,St,bt,W,Ne.z,Xt,L)}}else mt.visible&&b.push(y,St,mt,W,Ne.z,null,L)}}const gt=y.children;for(let St=0,mt=gt.length;St<mt;St++)Yr(gt[St],L,W,z)}function ll(y,L,W,z){const{opaque:H,transmissive:gt,transparent:St}=y;E.setupLightsView(W),jt===!0&&wt.setGlobalState(P.clippingPlanes,W),z&&_.viewport(J.copy(z)),H.length>0&&Os(H,L,W),gt.length>0&&Os(gt,L,W),St.length>0&&Os(St,L,W),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function cl(y,L,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){const bt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new bn(1,1,{generateMipmaps:!0,type:bt?Fn:cn,minFilter:oi,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}const gt=E.state.transmissionRenderTarget[z.id],St=z.viewport||J;gt.setSize(St.z*P.transmissionResolutionScale,St.w*P.transmissionResolutionScale);const mt=P.getRenderTarget(),yt=P.getActiveCubeFace(),Tt=P.getActiveMipmapLevel();P.setRenderTarget(gt),P.getClearColor(Zt),zt=P.getClearAlpha(),zt<1&&P.setClearColor(16777215,.5),P.clear(),Me&&Bt.render(W);const Ht=P.toneMapping;P.toneMapping=yn;const Xt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),jt===!0&&wt.setGlobalState(P.clippingPlanes,z),Os(y,W,z),K.updateMultisampleRenderTarget(gt),K.updateRenderTargetMipmap(gt),se.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let ne=0,we=L.length;ne<we;ne++){const ge=L[ne],{object:ue,geometry:ke,material:vt,group:Ze}=ge;if(vt.side===Pn&&ue.layers.test(z.layers)){const $t=vt.side;vt.side=qe,vt.needsUpdate=!0,hl(ue,W,z,ke,vt,Ze),vt.side=$t,vt.needsUpdate=!0,bt=!0}}bt===!0&&(K.updateMultisampleRenderTarget(gt),K.updateRenderTargetMipmap(gt))}P.setRenderTarget(mt,yt,Tt),P.setClearColor(Zt,zt),Xt!==void 0&&(z.viewport=Xt),P.toneMapping=Ht}function Os(y,L,W){const z=L.isScene===!0?L.overrideMaterial:null;for(let H=0,gt=y.length;H<gt;H++){const St=y[H],{object:mt,geometry:yt,group:Tt}=St;let Ht=St.material;Ht.allowOverride===!0&&z!==null&&(Ht=z),mt.layers.test(W.layers)&&hl(mt,L,W,yt,Ht,Tt)}}function hl(y,L,W,z,H,gt){F!==null&&H.isNodeMaterial&&F.setObject(y,H),y.onBeforeRender(P,L,W,z,H,gt),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(P,L,W,z,y,gt),H.transparent===!0&&H.side===Pn&&H.forceSinglePass===!1?(H.side=qe,H.needsUpdate=!0,P.renderBufferDirect(W,L,z,H,y,gt),H.side=yi,H.needsUpdate=!0,P.renderBufferDirect(W,L,z,H,y,gt),H.side=Pn):P.renderBufferDirect(W,L,z,H,y,gt),y.onAfterRender(P,L,W,z,H,gt)}function Bs(y,L,W){L.isScene!==!0&&(L=en);const z=k.get(y),H=E.state.lights,gt=E.state.shadowsArray,St=H.state.version,mt=lt.getParameters(y,H.state,gt,L,W,E.state.lightProbeGridArray),yt=lt.getProgramCacheKey(mt);let Tt=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,z.fog=L.fog;const Ht=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=at.get(y.envMap||z.environment,Ht),z.envMapRotation=z.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Tt===void 0&&(y.addEventListener("dispose",Tn),Tt=new Map,z.programs=Tt);let Xt=Tt.get(yt);if(Xt!==void 0){if(z.currentProgram===Xt&&z.lightsStateVersion===St)return fl(y,mt),Xt}else mt.uniforms=lt.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,W,mt),y.onBeforeCompile(mt,P),Xt=lt.acquireProgram(mt,yt),Tt.set(yt,Xt),z.uniforms=mt.uniforms;const bt=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(bt.clippingPlanes=wt.uniform),fl(y,mt),z.needsLights=kh(y),z.lightsStateVersion=St,z.needsLights&&(bt.ambientLightColor.value=H.state.ambient,bt.lightProbe.value=H.state.probe,bt.sunLights.value=H.state.sun,bt.sunLightShadows.value=H.state.sunShadow,bt.directionalLights.value=H.state.directional,bt.directionalLightShadows.value=H.state.directionalShadow,bt.spotLights.value=H.state.spot,bt.spotLightShadows.value=H.state.spotShadow,bt.rectAreaLights.value=H.state.rectArea,bt.ltc_1.value=H.state.rectAreaLTC1,bt.ltc_2.value=H.state.rectAreaLTC2,bt.pointLights.value=H.state.point,bt.pointLightShadows.value=H.state.pointShadow,bt.hemisphereLights.value=H.state.hemi,bt.sunShadowMatrix.value=H.state.sunShadowMatrix,bt.sunShadowCascade.value=H.state.sunShadowCascade,bt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,bt.spotLightMatrix.value=H.state.spotLightMatrix,bt.spotLightMap.value=H.state.spotLightMap,bt.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=Xt,z.uniformsList=null,Xt}function ul(y){if(y.uniformsList===null){const L=y.currentProgram.getUniforms();y.uniformsList=Tr.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function fl(y,L){const W=k.get(y);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function Hh(y,L){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(L.matrixWorld);for(let W=0,z=y.length;W<z;W++){const H=y[W];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function Gh(y,L,W,z,H){L.isScene!==!0&&(L=en),K.resetTextureUnits();const gt=L.fog,St=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?L.environment:null,mt=st===null?P.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Kt.workingColorSpace,yt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Tt=at.get(z.envMap||St,yt),Ht=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xt=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),bt=!!W.morphAttributes.position,ne=!!W.morphAttributes.normal,we=!!W.morphAttributes.color;let ge=yn;z.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ge=P.toneMapping);const ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ke=ue!==void 0?ue.length:0,vt=k.get(z),Ze=E.state.lights;if(jt===!0&&(fe===!0||y!==X)){const pe=y===X&&z.id===B;wt.setState(z,y,pe)}let $t=!1;z.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==Ze.state.version||vt.outputColorSpace!==mt||H.isBatchedMesh&&vt.batching===!1||!H.isBatchedMesh&&vt.batching===!0||H.isBatchedMesh&&vt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&vt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&vt.instancing===!1||!H.isInstancedMesh&&vt.instancing===!0||H.isSkinnedMesh&&vt.skinning===!1||!H.isSkinnedMesh&&vt.skinning===!0||H.isInstancedMesh&&vt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&vt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&vt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&vt.instancingMorph===!1&&H.morphTexture!==null||vt.envMap!==Tt||z.fog===!0&&vt.fog!==gt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==wt.numPlanes||vt.numIntersection!==wt.numIntersection)||vt.vertexAlphas!==Ht||vt.vertexTangents!==Xt||vt.morphTargets!==bt||vt.morphNormals!==ne||vt.morphColors!==we||vt.toneMapping!==ge||vt.morphTargetsCount!==ke||!!vt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&($t=!0):($t=!0,vt.__version=z.version);let hn=vt.currentProgram;$t===!0&&(hn=Bs(z,L,H),F&&z.isNodeMaterial&&F.onUpdateProgram(z,hn,vt));let An=!1,$n=!1,wi=!1;const le=hn.getUniforms(),Te=vt.uniforms;if(_.useProgram(hn.program)&&(An=!0,$n=!0,wi=!0),z.id!==B&&(B=z.id,$n=!0),vt.needsLights){const pe=Hh(E.state.lightProbeGridArray,H);vt.lightProbeGrid!==pe&&(vt.lightProbeGrid=pe,$n=!0)}if(An||X!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),le.setValue(U,"projectionMatrix",y.projectionMatrix),le.setValue(U,"viewMatrix",y.matrixWorldInverse);const Qn=le.map.cameraPosition;Qn!==void 0&&Qn.setValue(U,xe.setFromMatrixPosition(y.matrixWorld)),w.logarithmicDepthBuffer&&le.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&le.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),X!==y&&(X=y,$n=!0,wi=!0)}if(vt.needsLights&&(Ze.state.sunShadowMap.length>0&&le.setValue(U,"sunShadowMap",Ze.state.sunShadowMap,K),Ze.state.directionalShadowMap.length>0&&le.setValue(U,"directionalShadowMap",Ze.state.directionalShadowMap,K),Ze.state.spotShadowMap.length>0&&le.setValue(U,"spotShadowMap",Ze.state.spotShadowMap,K),Ze.state.pointShadowMap.length>0&&le.setValue(U,"pointShadowMap",Ze.state.pointShadowMap,K)),H.isSkinnedMesh){le.setOptional(U,H,"bindMatrix"),le.setOptional(U,H,"bindMatrixInverse");const pe=H.skeleton;pe&&(pe.boneTexture===null&&pe.computeBoneTexture(),le.setValue(U,"boneTexture",pe.boneTexture,K))}H.isBatchedMesh&&(le.setOptional(U,H,"batchingTexture"),le.setValue(U,"batchingTexture",H._matricesTexture,K),le.setOptional(U,H,"batchingIdTexture"),le.setValue(U,"batchingIdTexture",H._indirectTexture,K),le.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&le.setValue(U,"batchingColorTexture",H._colorsTexture,K));const Jn=W.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&I.update(H,W,hn),($n||vt.receiveShadow!==H.receiveShadow)&&(vt.receiveShadow=H.receiveShadow,le.setValue(U,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&L.environment!==null&&(Te.envMapIntensity.value=L.environmentIntensity),Te.dfgLUT!==void 0&&(Te.dfgLUT.value=fg()),$n){if(le.setValue(U,"toneMappingExposure",P.toneMappingExposure),vt.needsLights&&Vh(Te,wi),gt&&z.fog===!0&&At.refreshFogUniforms(Te,gt),At.refreshMaterialUniforms(Te,z,j,q,E.state.transmissionRenderTarget[y.id]),vt.needsLights&&vt.lightProbeGrid){const pe=vt.lightProbeGrid;Te.probesSH.value=pe.texture,Te.probesMin.value.copy(pe.boundingBox.min),Te.probesMax.value.copy(pe.boundingBox.max),Te.probesResolution.value.copy(pe.resolution)}Tr.upload(U,ul(vt),Te,K)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Tr.upload(U,ul(vt),Te,K),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&le.setValue(U,"center",H.center),le.setValue(U,"modelViewMatrix",H.modelViewMatrix),le.setValue(U,"normalMatrix",H.normalMatrix),le.setValue(U,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){const pe=z.uniformsGroups;for(let Qn=0,Ri=pe.length;Qn<Ri;Qn++){const pl=pe[Qn];it.update(pl,hn),it.bind(pl,hn)}}return hn}function Vh(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.sunLights.needsUpdate=L,y.sunLightShadows.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function kh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(y,L,W){const z=k.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),k.get(y.texture).__webglTexture=L,k.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,L){const W=k.get(y);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,W=0){st=y,Z=L,Y=W;let z=null,H=!1,gt=!1;if(y){const mt=k.get(y);if(mt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(U.FRAMEBUFFER,mt.__webglFramebuffer),J.copy(y.viewport),rt.copy(y.scissor),ft=y.scissorTest,_.viewport(J),_.scissor(rt),_.setScissorTest(ft),B=-1;return}else if(mt.__webglFramebuffer===void 0)K.setupRenderTarget(y);else if(mt.__hasExternalTextures)K.rebindTextures(y,k.get(y.texture).__webglTexture,k.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ht=y.depthTexture;if(mt.__boundDepthTexture!==Ht){if(Ht!==null&&k.has(Ht)&&(y.width!==Ht.image.width||y.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(y)}}const yt=y.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(gt=!0);const Tt=k.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Tt[L])?z=Tt[L][W]:z=Tt[L],H=!0):y.samples>0&&K.useMultisampledRTT(y)===!1?z=k.get(y).__webglMultisampledFramebuffer:Array.isArray(Tt)?z=Tt[W]:z=Tt,J.copy(y.viewport),rt.copy(y.scissor),ft=y.scissorTest}else J.copy(Mt).multiplyScalar(j).floor(),rt.copy(kt).multiplyScalar(j).floor(),ft=Pe;if(W!==0&&(z=G),_.bindFramebuffer(U.FRAMEBUFFER,z)&&_.drawBuffers(y,z),_.viewport(J),_.scissor(rt),_.setScissorTest(ft),H){const mt=k.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,mt.__webglTexture,W)}else if(gt){const mt=L;for(let yt=0;yt<y.textures.length;yt++){const Tt=k.get(y.textures[yt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+yt,Tt.__webglTexture,W,mt)}}else if(y!==null&&W!==0){const mt=k.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,mt.__webglTexture,W)}B=-1};function dl(y){const L=k.get(y);return(L.__readFormat!==y.format||L.__readType!==y.type)&&(L.__readFormat=y.format,L.__readType=y.type,L.__formatReadable=w.textureFormatReadable(y.format),L.__typeReadable=w.textureTypeReadable(y.type)),L}this.readRenderTargetPixels=function(y,L,W,z,H,gt,St,mt=0){if(!(y&&y.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=k.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(yt=yt[St]),yt){_.bindFramebuffer(U.FRAMEBUFFER,yt);try{const Tt=y.textures[mt],Ht=Tt.format,Xt=Tt.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+mt);const bt=dl(Tt);if(bt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-z&&W>=0&&W<=y.height-H&&U.readPixels(L,W,z,H,ut.convert(Ht),ut.convert(Xt),gt)}finally{const Tt=st!==null?k.get(st).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(y,L,W,z,H,gt,St,mt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=k.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(yt=yt[St]),yt)if(L>=0&&L<=y.width-z&&W>=0&&W<=y.height-H){_.bindFramebuffer(U.FRAMEBUFFER,yt);const Tt=y.textures[mt],Ht=Tt.format,Xt=Tt.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+mt);const bt=dl(Tt);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ne),U.bufferData(U.PIXEL_PACK_BUFFER,gt.byteLength,U.STREAM_READ),U.readPixels(L,W,z,H,ut.convert(Ht),ut.convert(Xt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const we=st!==null?k.get(st).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,we);const ge=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Au(U,ge,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ne),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,gt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ne),U.deleteSync(ge),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,L=null,W=0){const z=Math.pow(2,-W),H=Math.floor(y.image.width*z),gt=Math.floor(y.image.height*z),St=L!==null?L.x:0,mt=L!==null?L.y:0;K.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,St,mt,H,gt),_.unbindTexture()},this.copyTextureToTexture=function(y,L,W=null,z=null,H=0,gt=0){let St,mt,yt,Tt,Ht,Xt,bt,ne,we;const ge=y.isCompressedTexture?y.mipmaps[gt]:y.image;if(W!==null)St=W.max.x-W.min.x,mt=W.max.y-W.min.y,yt=W.isBox3?W.max.z-W.min.z:1,Tt=W.min.x,Ht=W.min.y,Xt=W.isBox3?W.min.z:0;else{const Te=Math.pow(2,-H);St=Math.floor(ge.width*Te),mt=Math.floor(ge.height*Te),y.isDataArrayTexture?yt=ge.depth:y.isData3DTexture?yt=Math.floor(ge.depth*Te):yt=1,Tt=0,Ht=0,Xt=0}z!==null?(bt=z.x,ne=z.y,we=z.z):(bt=0,ne=0,we=0);const ue=ut.convert(L.format),ke=ut.convert(L.type);let vt;L.isData3DTexture?(K.setTexture3D(L,0),vt=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(K.setTexture2DArray(L,0),vt=U.TEXTURE_2D_ARRAY):(K.setTexture2D(L,0),vt=U.TEXTURE_2D),_.activeTexture(U.TEXTURE0),_.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),_.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),_.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);const Ze=_.getParameter(U.UNPACK_ROW_LENGTH),$t=_.getParameter(U.UNPACK_IMAGE_HEIGHT),hn=_.getParameter(U.UNPACK_SKIP_PIXELS),An=_.getParameter(U.UNPACK_SKIP_ROWS),$n=_.getParameter(U.UNPACK_SKIP_IMAGES);_.pixelStorei(U.UNPACK_ROW_LENGTH,ge.width),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ge.height),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Tt),_.pixelStorei(U.UNPACK_SKIP_ROWS,Ht),_.pixelStorei(U.UNPACK_SKIP_IMAGES,Xt);const wi=y.isDataArrayTexture||y.isData3DTexture,le=L.isDataArrayTexture||L.isData3DTexture;if(y.isDepthTexture){const Te=k.get(y),Jn=k.get(L),pe=k.get(Te.__renderTarget),Qn=k.get(Jn.__renderTarget);_.bindFramebuffer(U.READ_FRAMEBUFFER,pe.__webglFramebuffer),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Ri=0;Ri<yt;Ri++)wi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,k.get(y).__webglTexture,H,Xt+Ri),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,k.get(L).__webglTexture,gt,we+Ri)),U.blitFramebuffer(Tt,Ht,St,mt,bt,ne,St,mt,U.DEPTH_BUFFER_BIT,U.NEAREST);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||k.has(y)){const Te=k.get(y),Jn=k.get(L);_.bindFramebuffer(U.READ_FRAMEBUFFER,D),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,V);for(let pe=0;pe<yt;pe++)wi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.__webglTexture,H,Xt+pe):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Te.__webglTexture,H),le?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Jn.__webglTexture,gt,we+pe):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Jn.__webglTexture,gt),H!==0?U.blitFramebuffer(Tt,Ht,St,mt,bt,ne,St,mt,U.COLOR_BUFFER_BIT,U.NEAREST):le?U.copyTexSubImage3D(vt,gt,bt,ne,we+pe,Tt,Ht,St,mt):U.copyTexSubImage2D(vt,gt,bt,ne,Tt,Ht,St,mt);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else le?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(vt,gt,bt,ne,we,St,mt,yt,ue,ke,ge.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(vt,gt,bt,ne,we,St,mt,yt,ue,ge.data):U.texSubImage3D(vt,gt,bt,ne,we,St,mt,yt,ue,ke,ge):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,gt,bt,ne,St,mt,ue,ke,ge.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,gt,bt,ne,ge.width,ge.height,ue,ge.data):U.texSubImage2D(U.TEXTURE_2D,gt,bt,ne,St,mt,ue,ke,ge);_.pixelStorei(U.UNPACK_ROW_LENGTH,Ze),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,$t),_.pixelStorei(U.UNPACK_SKIP_PIXELS,hn),_.pixelStorei(U.UNPACK_SKIP_ROWS,An),_.pixelStorei(U.UNPACK_SKIP_IMAGES,$n),gt===0&&L.generateMipmaps&&U.generateMipmap(vt),_.unbindTexture()},this.initRenderTarget=function(y){k.get(y).__webglFramebuffer===void 0&&K.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?K.setTextureCube(y,0):y.isData3DTexture?K.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?K.setTexture2DArray(y,0):K.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){Z=0,Y=0,st=null,_.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}const ze=Math.PI*2,Be=Math.PI/2,Dn=(i,t,e)=>i<t?t:i>e?e:i,Ai=i=>i<0?0:i>1?1:i,_e=(i,t,e)=>i+(t-i)*e,et=(i,t,e)=>Ai((i-t)/(e-t)),Jt=i=>1-(1-Ai(i))**3,Ch=i=>Ai(i)**2.2,Ee=i=>{const t=Ai(i);return t<.5?4*t*t*t:1-(2-2*t)**3/2},Oe=i=>Math.sin(Math.PI*Ai(i)),hi=i=>{const t=Ai(i)-1;return 1+2.9*t*t*t+1.9*t*t},Se=(i,t=0)=>{const e=Math.sin(i*127.1+t*311.7+.5)*43758.5453;return e-Math.floor(e)},Pt=Wh,qi=900,fc=830,kn=4,pg=i=>({id:i,action:"reload",target:-1,attack:null,shot:null,bundle:null,releases:!1,died:!1,diesBy:null,killer:-1,brokeShield:!1,ammoBefore:0,ammoAfter:0,won:!1}),mg=[0,1,2,3].map(pg),Ph=[],te={ta:-1,t:-1,side:!1,freezeK:0,freezeU:0,frozenMs:0,active:!1,facts:[null,null,null,null],attacks:Ph,pairA:-1,pairB:-1},Oo=i=>i.result==="clash"||i.result==="destroyed";function gg(i,t){let e=null,n=null;for(const s of i)if(s.result==="hit"&&t[s.target]?.died){if(s.attacker===0||s.target===0)return s;e??=s}else Oo(s)&&(n??=s);return e??n}function _g(i,t){if(Oo(i))return Pt.meet+25;for(const e of t)if(e.attacker===i.target&&e.target===i.attacker&&Oo(e))return Pt.meet+25;return Pt.impact-45}function xg(i){const t=i.reveal;te.side=!1,te.freezeK=0,te.freezeU=0,te.frozenMs=0,te.pairA=-1,te.pairB=-1;for(let s=0;s<kn;s++)te.facts[s]=null;if(!t||i.phase!=="revealing"&&i.phase!=="result")return te.ta=-1,te.t=-1,te.active=!1,te.attacks=Ph,te;te.active=!0,te.attacks=t.attacks;let e=0;for(const s of t.actors){const r=mg[s.id];if(!r)continue;let a=null,l=!1;for(const o of t.attacks)o.attacker===s.id&&(a=o),o.target===s.id&&o.result==="hit"&&o.kind==="super"&&(l=!0);const c=s.action;r.action=c,r.target=s.target??-1,r.attack=a,r.shot=c==="shoot"&&a?a.result:c==="shoot"?"hit":null,r.bundle=c==="super"?a?.result==="clash"?"clash":a?.result==="destroyed"?"intercepted":"hit":null,r.releases=c==="super"&&r.bundle!=="intercepted",r.died=s.died,r.diesBy=s.died?l?"blast":"bullet":null,r.killer=s.killedBy[0]??-1,r.brokeShield=a?.brokeShield??!1,r.ammoBefore=s.ammoBefore,r.ammoAfter=s.ammoAfter,r.won=!1,te.facts[s.id]=r,s.died||e++}if(e===1&&t.actors.length>1)for(const s of te.facts)s&&!s.died&&(s.won=!0);te.t=Math.max(0,t.t),te.ta=te.t;const n=gg(t.attacks,te.facts);if(n&&(te.pairA=n.target===0?0:n.attacker,te.pairB=n.target===0?n.attacker:n.target),t.cinematic&&n){const s=_g(n,t.attacks),r=te.t-s;r>=0&&r<qi?(te.ta=s,te.side=r<fc,te.freezeK=Math.min(et(r,0,90),1-et(r,qi-140,qi)),te.freezeU=Ee(et(r,0,fc)),te.frozenMs=r):r>=qi&&(te.ta=te.t-qi,te.frozenMs=qi)}return te}function vg(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},l=i[0].morphTargetsRelative,c=new Ce;let o=0;for(let f=0;f<i.length;++f){const u=i[f];let h=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(l!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;c.addGroup(o,d,f),o+=d}}if(e){let f=0;const u=[];for(let h=0;h<i.length;++h){const d=i[h].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+f);f+=i[h].attributes.position.count}c.setIndex(u)}for(const f in r){const u=dc(r[f]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;c.setAttribute(f,u)}for(const f in a){const u=a[f][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[f]=[];for(let h=0;h<u;++h){const d=[];for(let v=0;v<a[f].length;++v)d.push(a[f][v][h]);const g=dc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;c.morphAttributes[f].push(g)}}}return c}function dc(i){let t,e,n,s=-1,r=0;for(let o=0;o<i.length;++o){const f=i[o];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*e}const a=new t(r),l=new pn(a,e,n);let c=0;for(let o=0;o<i.length;++o){const f=i[o];if(f.isInterleavedBufferAttribute){const u=c/e;for(let h=0,d=f.count;h<d;h++)for(let g=0;g<e;g++){const v=f.getComponent(h,g);l.setComponent(h+u,g,v)}}else a.set(f.array,c);c+=f.count*e}return s!==void 0&&(l.gpuType=s),l}const fr={reload:"#FFB547",protect:"#3FD8F0",shoot:"#FFFFFF",super:"#FF3DCB"},me={reload:16758087,protect:4184304,shoot:16777215,super:16727499},pc="#232932";class Mg{geos=new Map;owned=[];graded=[];gradeColor(t){const e=t.clone(),n=e.r*.2126+e.g*.7152+e.b*.0722;this.graded.push({color:t,base:e,grey:new Lt(n,n,n)})}track(t){return this.owned.push(t),t}material(t,e){return this.track(t),e&&this.gradeColor(t.color),t}lambert(t,e={}){return this.material(new lf({color:t,flatShading:!0,...e}),!0)}phong(t,e={}){return this.material(new of({color:t,flatShading:!0,shininess:8,specular:2234900,...e}),!0)}basic(t,e={},n=!1){return this.material(new Qo({color:t,...e}),n)}sprite(t,e={}){return this.material(new uh({map:t,transparent:!0,depthWrite:!1,...e}),!1)}points(t){return this.material(new ph(t),!0)}shader(t){return this.track(new En(t))}geo(t,e){const n=this.geos.get(t);if(n)return n;const s=e();return this.geos.set(t,s),s}box(t,e,n){return this.geo(`b${t},${e},${n}`,()=>new ls(t,e,n))}cyl(t,e,n,s=8){return this.geo(`c${t},${e},${n},${s}`,()=>new Gr(t,e,n,s))}sph(t,e=8,n=6){return this.geo(`s${t},${e},${n}`,()=>new Fs(t,e,n))}plane(){return this.geo("plane",()=>new ci(1,1))}canvasTex(t,e,n){const s=document.createElement("canvas");s.width=t,s.height=e;const r=s.getContext("2d");r&&n(r,t,e);const a=new ju(s);return a.colorSpace=nn,a.generateMipmaps=!0,a.minFilter=oi,this.track(a)}own(t){return this.track(t)}grade(t,e){const n=1-t;for(const s of this.graded)s.color.copy(s.base).lerp(s.grey,n).multiply(e)}dispose(){for(const t of this.geos.values())t.dispose();this.geos.clear();for(const t of this.owned)t.dispose();this.owned.length=0,this.graded.length=0}}function Lh(i,t){t.updateMatrixWorld(!0);const e=new oe().copy(t.matrixWorld).invert(),n=new Map,s=new oe;t.traverse(a=>{if(!(a instanceof Ke)||a.userData.keep)return;const l=a.material,c=`${l.uuid}|${a.castShadow?1:0}${a.receiveShadow?1:0}`;let o=n.get(c);o||(o={mat:l,cast:a.castShadow,receive:a.receiveShadow,parts:[]},n.set(c,o));const f=a.geometry,u=f.index?f.toNonIndexed():f.clone();u.applyMatrix4(s.multiplyMatrices(e,a.matrixWorld)),o.parts.push(u)});const r=[];t.traverse(a=>{a instanceof Ke&&a.userData.keep&&r.push(a)}),t.clear();for(const a of n.values()){const l=vg(a.parts,!1);for(const o of a.parts)o.dispose();if(!l)continue;i.own(l);const c=new Ke(l,a.mat);c.castShadow=a.cast,c.receiveShadow=a.receive,c.matrixAutoUpdate=!1,t.add(c)}for(const a of r)s.multiplyMatrices(e,a.matrixWorld).decompose(a.position,a.quaternion,a.scale),t.add(a)}function nt(i,t,e,n=0,s=0,r=0){const a=new Ke(i,t);return a.position.set(n,s,r),e.add(a),a}function Vt(i,t=0,e=0,n=0){const s=new ji;return s.position.set(t,e,n),i.add(s),s}const tn=3.9,Dh=.12,sl=.3,dr=2*tn+sl,on=1.22,ln=1,pr=.3,Xn=.37,mc=[-.72,0,.72],Bo=[-1.24,-.52,.2],Ih=[-.7,0,.7],Ca=.52,Wn=.34,ss=.3,Mi=.08,Nr=-.32,Pa=15*Math.PI/180,Sg=5*Math.PI/180,yg=16,bg=150,gc=[0,0,1.55,2.1],Eg=.45;function Yi(i,t){if(t===1)return{x:0,z:-tn,rotY:-Math.PI/2};const e=Dh,n=tn+sl,s=Math.asin(i/dr),r=e+dr*Math.sin(s),a=n-dr*Math.cos(s);if(i===0)return{x:r,z:a,rotY:-Math.PI/2};const l=e-r,c=n-dr*Eg-a;return{x:r,z:a,rotY:Math.atan2(-c,l)}}const Tg=[[],[Yi(0,1)],[Yi(-1.55,2),Yi(gc[2],2)],[Yi(-2.1,3),Yi(0,3),Yi(gc[3],3)]],Ki=i=>Object.freeze(i),ve={crouch:Ki({py:.42,px:.2,lean:.3,nod:0,fl:.5,fr:.1,kr:Mi,g0:.05,g1:1.55,g2:.15,o0:-.12,o1:1.5}),duck:Ki({py:.24,px:-.32,lean:1.12,nod:.45,fl:.32,fr:-.2,kr:Mi,g0:.3,g1:.55,g2:2,o0:-.15,o1:.8}),kneel:Ki({py:.6,px:.15,lean:.05,nod:.05,fl:.3,fr:-.15,kr:.07,g0:-.55,g1:2.05,g2:.15,o0:-.6,o1:1.75}),lean:Ki({py:.64,px:.32,lean:.42,nod:0,fl:.5,fr:0,kr:Mi,g0:.08,g1:Be,g2:0,o0:-.3,o1:1}),stand:Ki({py:.72,px:.1,lean:0,nod:0,fl:.28,fr:.06,kr:Mi,g0:-.15,g1:.25,g2:0,o0:.1,o1:.12}),victor:Ki({py:.72,px:.15,lean:.02,nod:0,fl:.3,fr:.04,kr:Mi,g0:.05,g1:.6,g2:.2,o0:.15,o1:.2})},Ag=["py","px","lean","nod","fl","fr","kr","g0","g1","g2","o0","o1"];function Mn(i,t,e,n){for(const s of Ag)i[s]=t[s]+(e[s]-t[s])*n;return i}const Uh=()=>({...ve.crouch}),zo=(i,t,e)=>new Lt(i).lerp(new Lt(t),e).getHex(),_c=i=>{const t=bs[i];return zo(t.body,t.dark,.45)},As=[{shirt:14271650,sleeve:12935226,pants:6044458,hat:4926749,band:15184711,vest:null,hatStyle:"sombrero"},{shirt:15392712,sleeve:15392712,pants:4739132,hat:3814692,band:zo(bs[1].light,bs[1].body,.3),vest:_c(1),hatStyle:"bowler"},{shirt:15392712,sleeve:15392712,pants:3753559,hat:2831684,band:10466508,vest:4614543,hatStyle:"cattleman"},{shirt:15392712,sleeve:15392712,pants:4537170,hat:2893107,band:zo(bs[3].light,bs[3].body,.3),vest:_c(3),hatStyle:"gambler"}],xc=i=>As[(i%4+4)%4],wg=i=>xc(i).vest??xc(i).sleeve,vc=new WeakMap;function an(i,t){let e=vc.get(i);e||vc.set(i,e=new Map);let n=e.get(t);return n||e.set(t,n=i.phong(t)),n}const Mc=new R(Math.cos(-.33)*.06,0,Math.sin(-.33)*.06),Rg=new mn().setFromAxisAngle(new R(1,0,0),Math.PI),xi=Uh();class Cg{constructor(t,e,n){this.kit=t,this.post=e;const s=hs(t);this.root=Vt(e),this.legMeshes=[],this.knees=[],this.legs=[-.15,.15].map(o=>{const f=Vt(this.root,0,.72,o),u=Vt(f,0,-Wn,0),h=Vt(u,0,-ss,0);this.legMeshes.push(nt(t.cyl(.11,.1,Wn+.04,7),s.wood,f,0,-Wn/2,0));const d=nt(t.sph(.1,7,5),s.wood,u);return this.knees.push(d),this.legMeshes.push(d),this.legMeshes.push(nt(t.cyl(.1,.09,ss,7),s.wood,u,0,-ss/2,0)),nt(t.box(.36,.15,.18),s.boot,h,.05,-.005,0),{hip:f,knee:u,foot:h,z:o}});const r=this.body=Vt(this.root,0,.72,0);nt(t.cyl(.34,.34,.17,12),s.leather,r,0,.06,0),this.buckle=nt(t.box(.07,.13,.16),s.brass,r,.34,.06,0),nt(t.box(.15,.32,.12),s.leather,r,0,-.16,.37),this.holstered=nt(t.box(.08,.17,.07),s.grip,r,-.03,.06,.38),this.shirt=nt(t.cyl(.45,.31,.64,6),s.wood,r,0,.44,0),this.poncho=Vt(r),nt(t.cyl(.17,.68,.6,8),an(t,12935226),this.poncho,0,.48,0),nt(t.cyl(.53,.59,.07,8),an(t,15784368),this.poncho,0,.335,0),nt(t.cyl(.395,.435,.05,8),an(t,15184711),this.poncho,0,.505,0),this.vest=Vt(r),this.vestCloth=nt(t.cyl(.47,.34,.6,6),s.wood,this.vest,0,.45,0),this.vestShirt=nt(t.box(.05,.56,.16),s.wood,this.vest,.4,.45,0),nt(t.cyl(.09,.09,.03,5),s.brass,this.vest,.3,.58,.3).rotation.set(Be,0,-.9),nt(t.cyl(.2,.08,.16,6),an(t,14263361),this.vest,.08,.76,0);const a=this.head=Vt(r,0,1.02,0);nt(t.sph(.26,9,7),s.wood,a),this.nose=nt(t.sph(.075,6,5),s.wood,a,.25,-.02,0),this.eyes=[-.1,.1].map(o=>nt(t.box(.05,.085,.045),s.eye,a,.225,.065,o)),this.xEyes=Vt(a);for(const o of[-.1,.1])for(const f of[-1,1])nt(t.box(.04,.17,.045),s.eye,this.xEyes,.24,.06,o).rotation.x=f*.79;this.moustache=nt(t.box(.07,.06,.28),an(t,3811872),a,.24,-.1,0),this.hat=Vt(a,0,.16,0),this.looseHat=Vt(e),this.looseHat.visible=!1,this.hats=[],this.looseHats=[];for(let o=0;o<As.length;o++)this.hats.push(Sc(t,Vt(this.hat),As[o])),this.looseHats.push(Sc(t,Vt(this.looseHat),As[o]));this.sleeves=[];const l=o=>{const f=Vt(Vt(r,-.04,.68,o)),u=Vt(f),h=Vt(u,0,-Ca,0);return this.sleeves.push(nt(t.cyl(.085,.075,Ca,6),s.wood,u,0,-Ca/2,0)),nt(t.sph(.105,7,6),s.wood,h),{yaw:f,pitch:u,hand:h}};this.gunArm=l(.36),this.offArm=l(-.36);const c=this.gun=Vt(this.gunArm.hand);nt(t.box(.17,.09,.07),s.grip,c,-.07,.03,0).rotation.z=-.3,nt(t.box(.1,.15,.075),s.gunmetal,c,.03,-.07,0),this.crane=Vt(c,0,-.14,0),this.drum=Vt(this.crane,.08,0,0),nt(t.cyl(.03,.03,.17,6),s.gunmetal,this.drum);for(let o=0;o<3;o++){const f=-.33+o*ze/3,u=Math.cos(f)*.06,h=Math.sin(f)*.06;nt(t.cyl(.064,.064,.16,8),s.steel,this.drum,u,0,h),nt(t.cyl(.032,.032,.012,8),s.hole,this.drum,u,.081,h)}nt(t.cyl(.042,.048,.44,8),s.gunmetal,c,.09,-.42,0),nt(t.box(.05,.05,.03),s.gunmetal,c,.13,-.6,0),this.muzzle=Vt(c,.09,-.66,0),this.cart=Vt(this.drum),Nh(t,this.cart),this.cart.visible=!1,this.root.traverse(o=>{o instanceof Ke&&(o.castShadow=!0)}),this.cart.traverse(o=>o.castShadow=!1);for(const o of[...this.eyes,this.moustache,this.buckle,this.nose,...this.knees])o.castShadow=!1;for(const o of[this.xEyes,this.gun,this.vest])o.traverse(f=>f.castShadow=!1);this.vestCloth.castShadow=!0,this.hat.traverse(o=>{o.userData.band&&(o.castShadow=!1)}),this.setLook(n)}kit;post;root;legs;body;head;hat;looseHat;eyes;xEyes;gunArm;offArm;gun;holstered;crane;drum;muzzle;cart;lean=0;look=-1;legMeshes;sleeves;shirt;poncho;vest;vestCloth;vestShirt;moustache;hats;knees;buckle;nose;looseHats;setLook(t){const e=(t%4+4)%4;if(e===this.look)return;this.look=e;const n=As[e],s=this.kit;this.poncho.visible=n.vest===null,this.vest.visible=n.vest!==null,this.moustache.visible=n.vest!==null,n.vest!==null&&(this.vestCloth.material=an(s,n.vest)),this.vestShirt.material=an(s,n.shirt),this.shirt.material=an(s,n.shirt);for(const r of this.sleeves)r.material=an(s,n.sleeve);for(const r of this.legMeshes)r.material=an(s,n.pants);this.hats.forEach((r,a)=>r.visible=a===e),this.looseHats.forEach((r,a)=>r.visible=a===e)}rest(t){this.root.position.set(0,0,0),this.root.quaternion.identity(),this.root.visible=!0;for(const e of this.eyes)e.visible=!0,e.scale.set(1,1,1);this.xEyes.visible=!1,this.hat.visible=!0,this.hat.position.set(0,.16,0),this.hat.rotation.set(0,0,0),this.looseHat.visible=!1,this.gun.visible=!0,this.holstered.visible=!1,this.crane.rotation.set(0,0,0),this.drum.rotation.set(0,0,0),this.drum.position.x=.08,this.drum.scale.setScalar(1),this.cart.visible=!1,this.head.rotation.set(0,0,0),this.breath=t,this.apply(ve.crouch)}breath=0;apply(t){this.body.position.set(t.px,t.py+this.breath,0),this.body.rotation.set(0,0,-t.lean),this.head.rotation.set(0,0,t.lean*.8-t.nod),Ec(this.legs[0],t.px,t.py,t.fl,Mi),Ec(this.legs[1],t.px,t.py,t.fr,t.kr),this.setArm(this.gunArm,t.g0,t.g1,t.lean),this.gun.rotation.set(0,0,t.g2),this.setArm(this.offArm,t.o0,t.o1,t.lean),this.lean=t.lean}setArm(t,e,n,s=this.lean){t.yaw.rotation.y=e,t.pitch.rotation.z=n+s}reload(t,e){const n=Jt(et(t,200,500))*(1-Ee(et(t,1e3,1100)))*(1-e);if(this.crane.rotation.y=-1.9*n,this.drum.position.x=.08+.15*n,this.drum.scale.setScalar(1+1.1*n),this.drum.rotation.y=Jt(et(t,1050,1400))*ze*1.5,this.gunArm.pitch.rotation.z+=.22*Oe(et(t,1050,1350)),this.offArm.pitch.rotation.z+=.3*Oe(et(t,380,980)),t>=420&&t<980){const s=Ee(et(t,600,950));this.cart.visible=!0,this.cart.position.set(Mc.x,_e(.42,.02,s),Mc.z),this.cart.quaternion.copy(Rg),this.cart.scale.setScalar(.62*hi(et(t,420,560)))}}superArm(t,e,n,s,r){const a=_e(_e(_e(_e(.3,-.7,t),-2.45,e),-4.15,n*n),-4.85,s);this.setArm(this.gunArm,-.18,_e(a,1.2-ze,r)),this.body.rotation.z+=(.12*e*(1-n)-.12*n*(1-s))*(1-r)}knockOut(t,e,n,s,r){const a=Jt(et(t,0,n?.7:.55)),l=et(t,0,n?.65:.5);Mn(xi,e,ve.stand,Jt(et(t,0,.16))),s.feet!==null&&(xi.fl=_e(xi.fl,s.feet,a),xi.fr=_e(xi.fr,s.feet,a),xi.kr=Mi),this.apply(xi),this.setArm(this.gunArm,-.7*a,_e(.8,s.arms,a),0),this.setArm(this.offArm,.7*a,_e(1.2,s.arms,a),0);const c=(n?1.5:.75)*Oe(l);this.root.position.set(s.pos.x*Ee(et(t,.05,n?.7:.6)),_e(0,s.pos.y,l)+c,s.pos.z*a),this.root.quaternion.identity().slerp(s.lie,Ee(l**.8)),this.head.rotation.set(0,s.headY*a,s.headZ*a);for(const f of this.eyes)f.visible=!1;this.xEyes.visible=!0,this.gun.visible=a<.5,this.holstered.visible=!1,this.crane.rotation.set(0,0,0),this.drum.scale.setScalar(1),this.cart.visible=!1,this.hat.visible=!1;const o=et(t,0,1.05);this.looseHat.visible=!0,this.looseHat.position.lerpVectors(r,s.hat,Jt(o)),this.looseHat.position.y=_e(r.y,s.hat.y,o)+1.8*4*o*(1-o),this.looseHat.rotation.set(o*ze,o*ze*2.2,.3*Oe(o))}tipHat(t){this.hat.rotation.z=-.3*t,this.hat.position.y+=.05*t,this.head.rotation.z-=.1*t}}function Sc(i,t,e){const n=an(i,e.hat),s=an(i,e.band);switch(e.hatStyle){case"sombrero":nt(i.cyl(.7,.7,.05,18),n,t),nt(i.geo("brimRoll",()=>new Us(.69,.04,5,22)),n,t,0,.03,0).rotation.x=Be,nt(i.cyl(.24,.27,.3,10),n,t,0,.17,0),nt(i.cyl(.275,.275,.07,10),s,t,0,.06,0).userData.band=!0;break;case"cattleman":nt(i.cyl(.47,.47,.05,14),n,t).scale.set(1.1,1,.8);for(const r of[-1,1])nt(i.box(.62,.04,.14),n,t,0,.06,r*.4).rotation.x=r*.7;nt(i.cyl(.17,.25,.54,8),n,t,0,.29,0),nt(i.cyl(.255,.255,.07,8),s,t,0,.07,0).userData.band=!0;break;case"bowler":{nt(i.cyl(.4,.4,.04,14),n,t).scale.set(1.05,1,.92),nt(i.geo("bowlerRoll",()=>new Us(.39,.035,5,18)),n,t,0,.03,0).rotation.x=Be,nt(i.cyl(.29,.29,.12,12),n,t,0,.08,0),nt(i.geo("bowlerDome",()=>new Fs(.29,12,6,0,Math.PI*2,0,Math.PI/2)),n,t,0,.14,0),nt(i.cyl(.295,.295,.06,12),s,t,0,.06,0).userData.band=!0;break}case"gambler":nt(i.cyl(.62,.62,.05,16),n,t),nt(i.cyl(.25,.27,.24,12),n,t,0,.14,0),nt(i.cyl(.275,.275,.08,12),s,t,0,.07,0).userData.band=!0;break}return t}function yc(i,t,e){const n=new R(.97,0,-.2).normalize(),s=new mn().setFromRotationMatrix(new oe().makeBasis(new R(0,1,0),n,new R(n.z,0,-n.x)));return{pos:new R(-1.55,.34,t),lie:s,hat:e,headY:.25,headZ:1.05,arms:2.6,feet:null}}function bc(i,t,e){const n=new mn().setFromRotationMatrix(new oe().makeBasis(new R(0,1,0),new R(0,0,e),new R(e,0,0)));return{pos:new R(i-.05,t+.24,-1.1*e),lie:n,hat:new R(i+.55,.05,.75*e),headY:-1.05*e,headZ:.15,arms:-1.35,feet:null}}function Ec(i,t,e,n,s){const r=n-t,a=s-e,l=Dn(Math.hypot(r,a),.05,Wn+ss-.001),c=Math.atan2(r,-a)+Math.acos(Dn((Wn*Wn+l*l-ss*ss)/(2*Wn*l),-1,1)),o=t+Wn*Math.sin(c),f=e-Wn*Math.cos(c),u=Math.atan2(n-o,f-s);i.hip.position.set(t,e,i.z),i.hip.rotation.z=c,i.knee.rotation.z=u-c,i.foot.rotation.z=-u}const Tc=new WeakMap;function hs(i){let t=Tc.get(i);return t||(t={wood:i.phong(15187084),boot:i.phong(3876377),leather:i.phong(7226407),brass:i.phong(14921803,{shininess:40}),gunmetal:i.phong(5133148,{shininess:50,specular:5592405}),steel:i.phong(9082275,{shininess:50,specular:6710886}),grip:i.phong(9198131),eye:i.basic(1708816,{},!0),hole:i.basic(1380366,{},!0),ammoOn:i.basic(16758087),outline:i.basic(1708560,{side:qe}),dyn:i.phong(16727499,{emissive:6949456}),tape:i.phong(15918022),fuse:i.phong(2761504)},Tc.set(i,t)),t}function Nh(i,t){const e=hs(i),n=Vt(t);return nt(i.cyl(.09,.09,.28,8),e.ammoOn,n),nt(i.sph(.09,8,5),e.ammoOn,n,0,.14,0).scale.y=1.4,nt(i.cyl(.09,.09,.28,8),e.outline,n).scale.set(1.3,1.12,1.3),n}function Fh(i,t){const e=hs(i),n=Vt(t);for(const[r,a]of[[.075,0],[-.04,.065],[-.04,-.065]])nt(i.cyl(.07,.07,.46,8),e.dyn,n,r,0,a);for(const r of[-.12,.12])nt(i.cyl(.16,.16,.06,10),e.tape,n,0,r,0);nt(i.cyl(.014,.014,.2,4),e.fuse,n,.02,.32,0).rotation.z=-.4;const s=Vt(n,.06,.42,0);return{g:n,tip:s}}function Pg(i){const t=e=>(n,s,r)=>{const a=n.createRadialGradient(s/2,r/2,0,s/2,r/2,s/2);for(const[l,c]of e)a.addColorStop(l,c);n.fillStyle=a,n.fillRect(0,0,s,r)};return{glow:i.canvasTex(64,64,t([[0,"rgba(255,255,255,1)"],[.25,"rgba(255,255,255,0.55)"],[1,"rgba(255,255,255,0)"]])),smoke:i.canvasTex(64,64,t([[0,"rgba(255,255,255,0.95)"],[.55,"rgba(255,255,255,0.6)"],[1,"rgba(255,255,255,0)"]])),vignette:i.canvasTex(256,256,t([[0,"rgba(20,10,16,0)"],[.6,"rgba(20,10,16,0)"],[1,"rgba(20,10,16,0.85)"]])),star:i.canvasTex(128,128,e=>{const n=(s,r)=>{e.beginPath();for(const[a,l]of[[0,-s],[r,-r],[s,0],[r,r],[0,s],[-r,r],[-s,0],[-r,-r]])e.lineTo(64+a,64+l);e.closePath(),e.fill()};e.fillStyle="rgba(26,18,16,0.85)",n(62,13),e.fillStyle="#ffffff",n(56,8)})}}const Lg=new R,Ac=new R(0,0,1);class Fr{pools;used={glow:0,star:0,smoke:0,blast:0,ring:0,spark:0,shard:0,splinter:0};motes;motePos;moteMat;static MOTES=90;constructor(t,e,n){const s=hs(t),r=(p,S,A)=>{const M=new is(t.sprite(p,S));return M.renderOrder=A,M.visible=!1,e.add(M),M},a=(p,S)=>Array.from({length:p},(A,M)=>S(M)),l=rs,c=t.geo("fxRing",()=>new nl(.82,1,32)),o=t.box(.022,.022,1),f=t.geo("shard",()=>new il(.06)),u=t.box(.025,.025,.16),h=t.phong(10200240,{shininess:60,specular:6710886}),d=t.phong(12618325),g=p=>(p.visible=!1,p);this.pools={glow:a(44,()=>r(n.glow,{blending:l},7)),star:a(10,()=>r(n.star,{},8)),smoke:a(52,()=>r(n.smoke,{},6)),blast:a(8,()=>r(n.smoke,{},6)),ring:a(14,()=>{const p=g(nt(c,t.basic(16777215,{transparent:!0,side:Pn,depthWrite:!1}),e));return p.renderOrder=7,p}),spark:a(60,()=>{const p=g(nt(o,t.basic(16777215,{transparent:!0,depthWrite:!1}),e));return p.renderOrder=8,p}),shard:a(24,p=>g(nt(f,p%3?h:s.brass,e))),splinter:a(30,()=>g(nt(u,d,e)))};const v=Fr.MOTES;this.motePos=new Float32Array(v*3);const m=t.own(new Ce);m.setAttribute("position",new pn(this.motePos,3)),this.moteMat=t.points({color:16773328,size:.035,map:n.glow,transparent:!0,depthWrite:!1,opacity:.8}),this.motes=new Qu(m,this.moteMat),this.motes.frustumCulled=!1,e.add(this.motes)}begin(){for(const t in this.pools){const e=t;this.used[e]=0;for(const n of this.pools[e])n.visible=!1}}take(t){const n=this.pools[t][this.used[t]++];return n?(n.visible=!0,n):null}puff(t,e,n,s,r,a=0){const l=this.take(t);if(!l)return null;if(l.position.copy(e),l.scale.setScalar(n),l instanceof is)l.material.color.setHex(s),l.material.opacity=r,l.material.rotation=a;else if(l instanceof Ke){const c=l.material;c.transparent&&(c.color.setHex(s),c.opacity=r)}return l}glow(t,e,n,s){return this.puff("glow",t,e,n,s)}star(t,e,n,s){this.puff("star",t,e,n,1,s)}smoke(t,e,n,s){this.puff("smoke",t,e,n,s)}blast(t,e,n,s){this.puff("blast",t,e,n,s)}streak(t,e,n,s,r){const a=this.puff("spark",Lg.copy(t).addScaledVector(e,n/2),1,s,r);a&&(a.quaternion.setFromUnitVectors(Ac,e),a.scale.set(1,1,n))}ring(t,e,n,s,r,a=!1){const l=this.puff("ring",t,n,s,r);l&&(l.quaternion.setFromUnitVectors(Ac,e),l.material.depthTest=!a)}burst(t,e,n,s,r,a,l,c=!1){if(!(n<0||n>=s))for(let o=0;o<e;o++){const f=c?.25+o/Math.max(1,e-1)*(Math.PI-.5):o/e*ze+Se(o,3)*.5,u=Dg.set(Math.cos(f),Math.sin(f),(Se(o,5)-.5)*.6).normalize();this.streak(Ig.copy(t).addScaledVector(u,.1+n*r),u,a*(1-n/s),l[o%l.length],1)}}debris(t,e,n,s,r,a,l){if(!(s<0))for(let c=0;c<n;c++){const o=this.take(t);if(!o)return;const f=Se(c,7)*ze,u=r*(.6+Se(c,8)*.8),h=a.x*u+Math.cos(f)*l*u,d=a.z*u+Math.sin(f)*l*u,g=a.y*u+(.8+Se(c,9))*r*.7,v=(g+Math.sqrt(g*g+19.6*Math.max(.01,e.y-.02)))/9.8,m=Math.min(s,v);o.position.set(e.x+h*m,e.y+g*m-4.9*m*m,e.z+d*m),o.rotation.set(m*11+c,m*7+c*.3,m*3)}}ambient(t,e){const n=this.motePos;for(let s=0;s<Fr.MOTES;s++){let r,a,l;if(s<40){const c=.3+Se(s,1)*1.6,o=Se(s,2)*ze;r=Math.sin(o)*c*.9,a=1+(Se(s,3)-.3)*2.2,l=Math.cos(o)*c*1.4}else r=_e(-3,3.5,Se(s,1)),a=_e(.15,3.4,Se(s,2)),l=_e(-tn-3,tn-1.4,Se(s,3));n[s*3]=r+.22*Math.cos(t*.3+ze*Se(s,6)),n[s*3+1]=Math.max(.05,a+.14*Math.sin(t*.5+ze*Se(s,5))),n[s*3+2]=l+.25*Math.sin(t*.35+ze*Se(s,4))}this.motes.geometry.attributes.position.needsUpdate=!0,this.moteMat.opacity=.55+.4*e}}const Dg=new R,Ig=new R,Ug={reload:{fill:"M9.6 3h4.8v6.6H21v4.8h-6.6V21H9.6v-6.6H3V9.6h6.6z"},protect:{stroke:[["M3.5 17a8.5 8.5 0 0 1 17 0",3.4],["M8 17a4 4 0 0 1 8 0",1.8]]},shoot:{fill:"M12 1.5 19 10h-4.6v12.5H9.6V10H5z"},super:{fill:"M12 1 20 10H4zM12 11.5l8 9H4z"}},La=()=>({show:!1,headX:0,headY:0,topY:0,headR:10,ammo:0,popK:-1,popFrom:0,popTo:0,badge:null,badgeMs:0,downMs:-1,gone:!1,target:0,x0:0,y0:0,x1:0,y1:0}),Zi=()=>({on:!1,from:0,to:0,hex:16777215,grow:0,alpha:0}),mr=10,Ng=["reload","protect","shoot","super"];class Fg{scene=new Io;camera=new kr(0,1,0,-1,-10,10);marks;aims;pillX=[0,0,0];pillY=[0,0,0];pillW=50;vignette;flash;badgeTex;sockOn;sockOff;w=1;h=1;safeTop=16;safeBottom=150;constructor(t,e,n){const s=(u,h)=>{const d=nt(t.plane(),t.basic(16777215,{map:u,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.scene);return d.renderOrder=h,d.frustumCulled=!1,d},r=t.canvasTex(192,64,u=>{wc(u,3,3,186,58,29),u.fillStyle="rgba(17,20,26,0.74)",u.fill(),u.lineWidth=3,u.strokeStyle="rgba(255,255,255,0.10)",u.stroke()});this.sockOn=t.canvasTex(64,64,u=>{u.beginPath(),u.arc(32,32,27,0,Math.PI*2),u.fillStyle=fr.reload,u.fill(),u.lineWidth=5,u.strokeStyle="#FFE2A8",u.stroke(),u.beginPath(),u.arc(25,25,7,0,Math.PI*2),u.fillStyle="rgba(255,255,255,0.55)",u.fill()}),this.sockOff=t.canvasTex(64,64,u=>{u.beginPath(),u.arc(32,32,24,0,Math.PI*2),u.fillStyle="rgba(8,10,14,0.65)",u.fill(),u.lineWidth=6,u.strokeStyle="#8A93A0",u.stroke()}),this.badgeTex={};for(const u of Ng)this.badgeTex[u]=t.canvasTex(128,128,h=>{h.beginPath(),h.arc(64,64,58,0,Math.PI*2),h.fillStyle=pc,h.fill(),h.lineWidth=8,h.strokeStyle=fr[u],h.stroke(),h.save(),h.translate(64-12*2.6,64-12*2.6),h.scale(2.6,2.6);const d=Ug[u];h.fillStyle=h.strokeStyle=fr[u],h.lineCap="round",d.fill&&h.fill(new Path2D(d.fill));for(const[g,v]of d.stroke??[])h.lineWidth=v,h.stroke(new Path2D(g));h.restore()});const a=t.canvasTex(128,128,u=>{u.beginPath(),u.arc(64,64,58,0,Math.PI*2),u.fillStyle=pc,u.fill(),u.lineWidth=7,u.strokeStyle="#9AA3AF",u.stroke(),u.lineCap="round",((d,g)=>{u.beginPath(),u.moveTo(40,40),u.lineTo(88,88),u.moveTo(88,40),u.lineTo(40,88),u.lineWidth=d,u.strokeStyle=g,u.stroke()})(16,"#C9D0D8")});this.vignette=s(n,-2),this.flash=nt(t.plane(),t.basic(16777215,{transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.scene),this.flash.renderOrder=-1,this.flash.frustumCulled=!1;const l=t.canvasTex(192,64,u=>{wc(u,4,4,184,56,28),u.lineWidth=7,u.strokeStyle="rgba(10,12,16,0.55)",u.stroke(),u.lineWidth=4,u.strokeStyle="#ffffff",u.stroke()}),c=t.canvasTex(64,64,u=>{const h=(d,g)=>{u.beginPath(),u.moveTo(8,56),u.lineTo(8,8),u.lineTo(56,8),u.lineWidth=d,u.lineCap="round",u.lineJoin="round",u.strokeStyle=g,u.stroke()};h(14,"rgba(10,12,16,0.55)"),h(8,"#ffffff")}),o=t.canvasTex(16,32,u=>{u.fillStyle="rgba(10,12,16,0.6)",u.fillRect(0,6,16,20),u.fillStyle="#ffffff",u.fillRect(0,11,16,10)}),f=t.canvasTex(64,64,u=>{const h=d=>{u.beginPath(),u.moveTo(60-d,32),u.lineTo(6+d*.6,6+d),u.lineTo(6+d*.6,58-d),u.closePath(),u.fill()};u.fillStyle="rgba(10,12,16,0.6)",h(0),u.fillStyle="#ffffff",h(7)});this.marks=[0,1,2].map(()=>{const u=s(e,3);return u.material.blending=rs,{brackets:[0,1,2,3].map(()=>s(c,0)),pill:s(r,1),ring:s(l,2),sockets:[0,1,2].map(()=>s(this.sockOff,2)),badgeGlow:u,badge:s(this.badgeTex.shoot,4),cross:s(a,5)}}),this.aims=[0,1,2,3,4,5].map(()=>{const u=s(o,0),h=[u];for(let d=1;d<mr;d++){const g=nt(t.plane(),u.material,this.scene);g.renderOrder=0,g.frustumCulled=!1,h.push(g)}return{segs:h,head:s(f,0),used:!1}}),this.hideAll()}hideAll(){for(const t of this.marks){t.pill.visible=t.ring.visible=t.badge.visible=t.badgeGlow.visible=t.cross.visible=!1;for(const e of t.sockets)e.visible=!1;for(const e of t.brackets)e.visible=!1}for(const t of this.aims){t.used=!1,t.head.visible=!1;for(const e of t.segs)e.visible=!1}}resize(t,e,n,s){this.w=t,this.h=e,this.safeTop=n,this.safeBottom=s,this.camera.left=0,this.camera.right=t,this.camera.top=0,this.camera.bottom=-e,this.camera.updateProjectionMatrix()}screen(t,e,n){this.put(this.vignette,this.w/2,this.h/2,this.w*1.04,this.h*1.04,0,t),this.put(this.flash,this.w/2,this.h/2,this.w,this.h,0,n),this.flash.visible=n>.001,this.flash.material.color.setHex(e)}put(t,e,n,s,r,a=0,l=1){t.visible=!0,t.position.set(e,-n,0),t.scale.set(Math.max(.001,s),Math.max(.001,r),1),t.rotation.z=a,t.material.opacity=l}update(t,e,n,s){this.hideAll();const r=Dn(Math.min(this.w,this.h*.75)/390,.85,1.5)*s;for(let a=0;a<e&&a<this.marks.length;a++){const l=t[a];l?.show&&this.mark(this.marks[a],l,r,a)}for(const a of n)a.on&&this.aim(a,r)}aim(t,e){let n=null;for(const S of this.aims)if(!S.used){n=S;break}if(!n||t.alpha<=.01||t.grow<=.01)return;n.used=!0;const s=this.pillX[t.from]??0,r=this.pillX[t.to]??0,a=Math.sign(r-s)||1,l=s+a*(this.pillW/2+3*e),c=this.pillY[t.from]??0,o=r-a*(this.pillW/2+3*e),f=this.pillY[t.to]??0,u=(l+o)/2,h=Math.max(this.safeTop+2*e,Math.min(c,f)-(10*e+.28*Math.abs(o-l))),d=5*e,g=12*e;n.head.material.color.setHex(t.hex),n.segs[0].material.color.setHex(t.hex);const v=t.grow;let m=l,p=c;for(let S=1;S<=mr;S++){const A=v*S/mr,M=(1-A)*(1-A),b=2*A*(1-A),E=A*A,C=M*l+b*u+E*o,x=M*c+b*h+E*f,T=Math.hypot(C-m,x-p);if(this.put(n.segs[S-1],(m+C)/2,(p+x)/2,T+1.5*e,d,-Math.atan2(x-p,C-m),t.alpha),S===mr){const P=2*(1-v)*(u-l)+2*v*(o-u),N=2*(1-v)*(h-c)+2*v*(f-h);this.put(n.head,C,x,g,g*1.05,-Math.atan2(N,P),t.alpha)}m=C,p=x}}mark(t,e,n,s){const r=11*n,a=5.5*n,l=3*r+2*a+13*n,c=r+9*n,o=30*n,f=6*n,u=this.safeTop+f,h=this.h-this.safeBottom-f,d=Dn(e.headX,l/2+f,this.w-l/2-f),g=Dn(e.topY-c/2-6*n,u+c/2,h-c/2);if(this.pillX[s]=d,this.pillY[s]=g,this.pillW=l,e.gone){const b=c*1.15;this.put(t.cross,d,g,b,b,0,.7);return}const v=e.downMs>=0?1-.5*et(e.downMs,300,700):1;this.put(t.pill,d,g,l,c,0,v);for(let b=0;b<3;b++){const E=t.sockets[b],C=b<e.ammo;E.material.map=C?this.sockOn:this.sockOff;let x=1;e.popK>=0&&b>=e.popFrom&&b<e.popTo&&(x=C?hi(e.popK):1+.35*Oe(e.popK));const T=r*(C?1:.92)*x;this.put(E,d+(b-1)*(r+a),g,T,T,0,v)}if(e.target>.01){this.put(t.ring,d,g,l+5*n,c+5*n,0,e.target);const b=15*n,E=Math.max(e.x0,f),C=Math.min(e.x1,this.w-f),x=Math.max(e.y0,g+c/2+4*n),T=Math.min(e.y1,h);if(T-x>2*b&&C-E>2*b)for(let P=0;P<4;P++){const[N,F,G]=Og[P];this.put(t.brackets[P],N?C-b/2:E+b/2,F?T-b/2:x+b/2,b,b,G,.9*e.target)}}if(!e.badge)return;let m=e.headX+e.headR+o*.5+6*n;m>this.w-o/2-f&&(m=e.headX-e.headR-o*.5-6*n),m=Dn(m,o/2+f,this.w-o/2-f);const p=m<e.headX,S=Dn(e.headY,u+o/2+c,h-o/2),A=et(e.badgeMs,0,300),M=o*(A<1?hi(A):1);if(t.badge.material.map=this.badgeTex[e.badge],this.put(t.badge,m,S,M,M),A<1){t.badgeGlow.material.color.set(fr[e.badge]);const E=o*2.6*Jt(A);this.put(t.badgeGlow,m,S,E,E,0,.85*(1-A))}if(e.downMs>=0){const b=hi(et(e.downMs,220,520));if(b>.01){const E=o*.62*b;this.put(t.cross,m+o*(p?-.36:.36),S+o*.3,E,E)}}}}const Og=[[0,0,0],[1,0,-Math.PI/2],[1,1,Math.PI],[0,1,Math.PI/2]];function wc(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const Bg=new R(0,0,-1),zg=new mn().setFromAxisAngle(new R(0,1,0),Math.PI),Hg=new R(0,1,0),Gg=new R(0,0,1),Rc=new R,ce=new R,Vg=new R,kg=new R,gr=new R,Ms=new R,_r=[new R,new R,new R,new R,new R],je=650,Da=[[.55,-.56,.78],[.55,-.4,.8],[.68,.08,.65],[.12,.22,.9],[.1,-1.6,.9]],$i=.6,Cc=[1,2,0];class Wg{root;rArm;lArm;arms;gun;crane;drum;chambers;muzzle;cart;dyn;fuseTip;glows;sparks;smoke;star;ammoOn;hole;glowUsed=0;sleeveMeshes=[];constructor(t,e,n){const s=hs(t);this.ammoOn=s.ammoOn,this.hole=s.hole,this.root=Vt(e);const r=t.phong(12935226),a=t.phong(15784368),l=h=>{const d=Vt(this.root);return d.scale.setScalar($i),nt(t.sph(.062,9,7),s.wood,d),d.userData={shoulder:new R(h*.3,-.95,-.2),sleeve:this.sleeve(nt(t.cyl(.07,.05,1,7),r,this.root)),cuff:nt(t.cyl(.062,.062,.05,8),a,this.root)},d};this.rArm=l(1),this.lArm=l(-1),this.arms=[this.rArm,this.lArm];const c=this.gun=Vt(this.rArm,0,.05,.02);c.scale.setScalar(.8),nt(t.box(.075,.2,.1),s.grip,c,0,-.08,-.06).rotation.x=.4,nt(t.box(.08,.11,.2),s.gunmetal,c,0,.02,.07),nt(t.box(.03,.05,.05),s.gunmetal,c,0,.08,-.04).rotation.x=-.6,this.crane=Vt(c,.035,-.04,.13),this.drum=Vt(this.crane,-.035,.085,0),nt(t.cyl(.1,.1,.15,6),s.steel,this.drum).rotation.x=Math.PI/2,this.chambers=[0,1,2].map(h=>{const d=Math.PI/2+h*ze/3,g=nt(t.cyl(.032,.032,.012,10),s.hole,this.drum,Math.cos(d)*.056,Math.sin(d)*.056,-.077);return g.rotation.x=Math.PI/2,g}),nt(t.cyl(.042,.048,.46,8),s.gunmetal,c,0,.05,.43).rotation.x=Math.PI/2,nt(t.box(.025,.04,.04),s.gunmetal,c,0,.09,.63),this.muzzle=Vt(c,0,.05,.68),this.cart=Vt(this.drum),Nh(t,this.cart).rotation.x=Math.PI/2,this.cart.scale.setScalar(.27);const o=Fh(t,this.rArm);this.dyn=o.g,this.fuseTip=o.tip,this.dyn.position.set(0,.07,.06),this.dyn.rotation.set(-.25,0,.45),this.dyn.scale.setScalar(.45);const f=rs;this.glows=[0,1,2,3].map(()=>{const h=new is(t.sprite(n.glow,{blending:f,depthTest:!1}));return h.renderOrder=5,this.root.add(h),h}),this.star=new is(t.sprite(n.star,{depthTest:!1})),this.star.renderOrder=6,this.root.add(this.star),this.smoke=[0,1,2].map(()=>{const h=new is(t.sprite(n.smoke,{color:15984338}));return h.renderOrder=4,this.root.add(h),h});const u=()=>t.basic(16777215,{transparent:!0,depthWrite:!1,depthTest:!1});this.sparks=[0,1,2,3,4].map(()=>{const h=nt(t.box(.006,.006,1),u(),this.root);return h.renderOrder=6,h})}sleeve(t){return this.sleeveMeshes.push(t),t}setSleeve(t){for(const e of this.sleeveMeshes)e.material=t}aim(t,e,n){t.position.copy(e),t.quaternion.setFromUnitVectors(Bg,Rc.copy(n).normalize()).multiply(zg)}glow(t,e,n,s){const r=this.glows[this.glowUsed++];r&&(r.visible=!0,r.position.copy(t),r.scale.setScalar(e),r.material.color.setHex(n),r.material.opacity=s)}sleeves(){for(const t of this.arms){const{shoulder:e,sleeve:n,cuff:s}=t.userData,r=Rc.subVectors(e,t.position),a=r.length();r.divideScalar(a),n.position.copy(t.position).addScaledVector(r,.04*$i+a/2),n.scale.set($i,a,$i),n.quaternion.setFromUnitVectors(Hg,r),s.position.copy(t.position).addScaledVector(r,.06*$i),s.quaternion.copy(n.quaternion),s.scale.setScalar($i)}}releaseLocal(t,e){const n=Da[3];return t.local(n[0],n[1],n[2],e)}pose(t,e,n,s){this.root.position.copy(s),this.root.quaternion.copy(n),this.glowUsed=0;for(const h of this.glows)h.visible=!1;for(const h of this.smoke)h.visible=!1;for(const h of this.sparks)h.visible=!1;this.star.visible=!1,this.root.visible=!0,this.gun.visible=!0,this.dyn.visible=!1,this.cart.visible=!1,this.crane.rotation.set(0,0,0),this.drum.rotation.set(0,0,0),this.lArm.visible=!0;const r=t.ta,a=r<0,l=a?1:Jt(et(r,0,350)),c=l*(1-t.back),o=e.local(.55,-.56,.78,Vg),f=kg.set(.06,.16,-1);this.aim(this.rArm,o,f),this.aim(this.lArm,e.local(-.62,-.66,.7,gr),Ms.set(.15,.45,-1));const u=t.loaded;switch(t.action){case"shoot":{const h=a?.85:Math.max(.25*l,Jt(et(r,120,520)))*(1-t.back),d=a?0:et(r,650,820),g=(d>0&&d<1?(1-d)*Math.min(1,d*8):0)*(1-t.back),v=e.local(.46,-.4,.8,gr);ce.lerpVectors(o,v,h),ce.z+=.05*g,this.aim(this.rArm,ce,Ms.copy(t.aimDir).normalize().lerp(f.normalize(),1-h)),this.rArm.rotateX(-.45*g),!a&&r>=650&&this.muzzleFx(r);break}case"protect":{const h=a?.35:Math.max(.4*l,Ee(et(r,0,280)))*(1-t.back);this.rArm.position.y-=.22*h,this.rArm.position.z+=.08*h,this.rArm.rotateX(.3*h),this.lArm.position.y-=.25*h;break}case"reload":{const h=a?1:Jt(et(r,120,420))*(1-Ee(et(r,1e3,1100))),d=e.local(.08,-.3,.6,gr);this.aim(this.rArm,ce.lerpVectors(o,d,c),Ms.set(-.25,-1.35,-1).lerp(f,1-c)),a||this.rArm.rotateX(-.25*Oe(et(r,1e3,1150))),this.crane.rotation.z=-1.35*h,this.drum.rotation.z=a?0:Jt(et(r,1050,1350))*ze*1.5;const g=Cc[Math.min(2,Math.max(0,t.reloadSlot))]??0,v=this.chambers[g].position,m=a?0:Ee(et(r,380,700)),p=a?0:Ee(et(r,700,950)),S=!a&&r>=380&&r<950&&t.reloadSlot<3;this.cart.visible=S,S?(this.cart.position.set(v.x+.25*(1-m),v.y-.35*(1-m),_e(-.42,-.2,m)+.11*p),this.cart.rotation.set(0,0,0),this.cart.scale.setScalar(.27*Math.max(.01,hi(et(r,380,480)))),this.root.updateMatrixWorld(!0),this.cart.getWorldPosition(ce),this.root.worldToLocal(ce),this.glow(ce,.12,me.reload,.9),this.lArm.position.copy(ce).add(gr.set(-.05,-.07,.03)),this.lArm.quaternion.copy(this.rArm.quaternion)):this.lArm.position.y-=.2*c,!a&&r>=940&&r<1300&&(this.root.updateMatrixWorld(!0),this.chambers[g].getWorldPosition(ce),this.root.worldToLocal(ce),this.glow(ce,.2*Oe(et(r,940,1300)),me.reload,.95));break}case"super":{this.gun.visible=a?!1:!(l>.35&&t.back<.6);let h;a?h=1:t.intercepted?h=Jt(et(r,0,350))+Ee(et(r,350,650))*.8:h=Jt(et(r,0,350))+Ee(et(r,350,590))+et(r,590,je)**2+Jt(et(r,je,900));for(let v=0;v<Da.length;v++){const m=Da[v];e.local(m[0],m[1],m[2],_r[v])}const d=Math.min(_r.length-2,Math.floor(h));if(ce.lerpVectors(_r[d],_r[d+1],h-d),t.intercepted&&!a){const v=et(r,600,1200);ce.x+=.006*v*Math.sin(t.sim*60),ce.y+=.006*v*Math.cos(t.sim*53)}ce.lerp(o,t.back),this.aim(this.rArm,ce,Ms.set(-.15,.6+(a?0:.4*et(r,350,600)),-1).lerp(f,t.back));const g=a||t.intercepted||r<je;this.dyn.visible=g&&(a||r>=60)&&t.back<.5,this.dyn.scale.setScalar(.45*(a?1:hi(et(r,60,300)))),this.lArm.position.y-=.18*c,this.dyn.visible&&this.fuseFx(t.sim),!a&&t.intercepted&&t.hitS>=0&&(this.dyn.visible=t.hitS<.25);break}}if(t.won>0&&(this.rArm.position.y-=.12*t.won,this.rArm.rotateX(.35*t.won)),t.hitS>=0){const h=Ch(et(t.hitS,.05,.6));for(let d=0;d<2;d++){const g=this.arms[d],v=d===0?1:-1;g.position.y-=.75*h,g.position.x+=.08*v*h,g.rotateX(1.4*h),g.rotateZ(-.6*v*h)}this.root.visible=h<.999}for(let h=0;h<3;h++)this.chambers[Cc[h]].material=h<u?this.ammoOn:this.hole;this.sleeves()}muzzleFx(t){this.root.updateMatrixWorld(!0),this.muzzle.getWorldPosition(ce),this.root.worldToLocal(ce);const e=et(t,650,740);e<1&&(this.star.visible=!0,this.star.position.copy(ce),this.star.scale.setScalar(.22*Oe(e)),this.star.material.color.setHex(16774096),this.star.material.rotation=.4,this.glow(ce,.34*Oe(e),16765562,.9));for(let n=0;n<3;n++){const s=(t-650)/1300-n*.04,r=this.smoke[n];s<=0||s>=1||(r.visible=!0,r.position.set(ce.x+.02*n,ce.y+.02+.12*s,ce.z-.04-.14*s-n*.03),r.scale.setScalar(.05+.16*s),r.material.opacity=.55*(1-s))}}fuseFx(t){this.root.updateMatrixWorld(!0),this.fuseTip.getWorldPosition(ce),this.root.worldToLocal(ce),this.star.visible=!0,this.star.position.copy(ce),this.star.scale.setScalar(.035+.008*Math.sin(t*47)),this.star.material.color.setHex(me.super),this.star.material.rotation=t*9,this.glow(ce,.09,me.super,.9);for(let e=0;e<this.sparks.length;e++){const n=(t*2.6+e/5)%1,s=Se(e,Math.floor(t*2.6+e/5))*ze,r=Ms.set(Math.cos(s)*.7,.8,Math.sin(s)*.7).normalize(),a=this.sparks[e];a.visible=!0,a.position.copy(ce).addScaledVector(r,.012+n*.035),a.quaternion.setFromUnitVectors(Gg,r),a.scale.set(.6,.6,.012);const l=a.material;l.color.setHex(e%2?16777215:me.super),l.opacity=1-n}}}const Xg=[[0,"#262a5a"],[.22,"#5b4a86"],[.36,"#c46a7c"],[.44,"#f39a62"],[.485,"#ffd38e"],[.5,"#ffe7b0"],[.52,"#d9a06a"],[1,"#b07a50"]];function qg(i,t){const e=i.canvasTex(4,256,(B,X,J)=>{const rt=B.createLinearGradient(0,0,0,J);for(const[ft,Zt]of Xg)rt.addColorStop(ft,Zt);B.fillStyle=rt,B.fillRect(0,0,X,J)});e.generateMipmaps=!1,e.minFilter=Ge;const n=i.shader({uniforms:{uGrad:{value:e},uSat:{value:1},uTint:{value:new Lt(1,1,1)}},vertexShader:`
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
      }`,side:qe,depthWrite:!1}),s=nt(i.geo("sky",()=>new Fs(320,24,32)),n,t);s.renderOrder=-3,s.frustumCulled=!1;const r=280,a=new R(.1,1.45,tn+.3),l=i.basic(16773577,{fog:!1},!0),c=nt(i.geo("sunDisc",()=>new Hr(r*Math.tan(.04),40)),l,t,a.x+Math.sin(Nr)*r,a.y+r*Math.tan(Sg),a.z-Math.cos(Nr)*r);c.lookAt(a),c.renderOrder=-2;const o=i.canvasTex(64,64,(B,X,J)=>{const rt=B.createRadialGradient(X/2,J/2,0,X/2,J/2,X/2);rt.addColorStop(0,"rgba(255,255,255,1)"),rt.addColorStop(.25,"rgba(255,255,255,0.5)"),rt.addColorStop(1,"rgba(255,255,255,0)"),B.fillStyle=rt,B.fillRect(0,0,X,J)}),f=i.sprite(o,{color:16756832,opacity:.7,fog:!1,blending:rs});i.gradeColor(f.color);const u=new is(f);u.position.copy(c.position).sub(a).multiplyScalar(.98).add(a),u.scale.setScalar(r*.55),t.add(u);const h=Vt(t),d=B=>i.lambert(B),g=d(11890794),v=[[-80,-100,34,9],[-55,-118,22,6],[22,-104,40,11],[64,-94,26,7],[-130,-128,50,12],[110,-130,44,10]];for(const[B,X,J,rt]of v)nt(i.box(J,rt,14),g,h,B,rt/2,X),nt(i.box(J*.7,rt*.35,10),g,h,B+J*.08,rt*1.17,X);const m=nt(i.geo("ground",()=>new ci(500,500)),d(13868390),h),p=nt(i.geo("street",()=>new ci(7,220)),d(14856826),h,.2,.004,-60);for(const B of[m,p])B.rotation.x=-Be,B.receiveShadow=!0;const S=d(12947292);for(const B of[-1.2,1.6]){const X=nt(i.geo("rut",()=>new ci(.12,220)),S,h,B,.008,-60);X.rotation.x=-Be,X.receiveShadow=!0}const A=i.phong(10122582);for(let B=0;B<14;B++){const X=_e(-3.2,3.6,Se(B,1)),J=_e(-12,11,Se(B,2));if(Math.abs(Math.abs(J)-tn+.6)<1.8&&X>-2.2&&X<1.9)continue;const rt=.05+Se(B,9)*.07;nt(i.geo(`rock${B}`,()=>new tl(rt,0)),A,h,X,.02,J).rotation.set(Se(B,3)*3,Se(B,4)*3,0)}const M=i.phong(3811877),b=i.phong(5322826),E=new Map,C=B=>{let X=E.get(B);return X||(X=i.phong(B),E.set(B,X)),X},x=(B,X,J,rt,ft,Zt,zt)=>{const Ot=Vt(h,B,0,X),q=C(Zt),j=C(zt);Ot.rotation.y=J,nt(i.box(rt,ft*.72,2.4),q,Ot,0,ft*.36,-1.2),nt(i.box(rt,ft,.18),q,Ot,0,ft/2,.05),nt(i.box(rt*.45,ft*.12,.18),q,Ot,0,ft*1.06,.05),nt(i.box(rt+.12,.12,.28),j,Ot,0,ft,.12),nt(i.box(rt*.82,.38,.05),j,Ot,0,ft*.82,.16),nt(i.box(rt+.6,.1,1.3),j,Ot,0,ft*.5,.78).rotation.x=.14;for(const xt of[-rt/2-.2,rt/2+.2])nt(i.box(.1,ft*.5,.1),j,Ot,xt,ft*.25,1.35);nt(i.box(.8,1.35,.05),M,Ot,0,.68,.16);for(const xt of[-rt*.32,rt*.32])nt(i.box(.7,.75,.05),b,Ot,xt,1.45,.16)},T=[[-5.6,8.6,Be,3.6,4.2,10250823,7293491],[-5.6,4.8,Be,3.2,3.4,12159582,8016440],[-5.6,-4.9,Be,3.4,3.8,9398866,6243380],[-5.6,-8.9,Be,3.8,4.4,10250823,7293491],[6.2,6.4,-Be,3.4,3.6,9398866,6243380],[6.2,-10.6,-Be,3.4,3.6,12159582,8016440],[6.2,-14.4,-Be,3.6,4.4,9398866,6243380]];for(const B of T)x(...B);const P=Vt(h,7.5,0,-24),N=C(6177072);for(const[B,X]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])nt(i.cyl(.07,.09,3.6,5),N,P,B,1.8,X);nt(i.cyl(1.25,1.25,1.8,12),C(9068094),P,0,4.4,0),nt(i.cyl(.05,1.42,.75,12),C(7227957),P,0,5.68,0);for(const B of[3.85,4.95])nt(i.cyl(1.28,1.28,.08,12),C(4863014),P,0,B,0);const F=i.phong(7311183),G=(B,X,J)=>{const rt=Vt(h,B,0,X);rt.scale.setScalar(J),nt(i.cyl(.22,.26,2.4,8),F,rt,0,1.2,0),nt(i.sph(.22,8,5),F,rt,0,2.4,0);for(const[ft,Zt,zt]of[[1,1,.8],[-1,1.35,.6]])nt(i.cyl(.13,.13,.45,7),F,rt,0,Zt,ft*.4).rotation.x=Be,nt(i.cyl(.13,.15,zt,7),F,rt,0,Zt+zt/2,ft*.6),nt(i.sph(.13,7,4),F,rt,0,Zt+zt,ft*.6)};G(-7.8,7.2,.8),G(8.5,-19,.6),G(-9,-16,.7),Lh(i,h);const D=Ia(i,mc,0),V=Ia(i,Bo,.5),Z=Ia(i,Ih,.5),Y=Pc(i,t,D,null,mc);Y.post.position.set(0,0,tn),Y.post.rotation.y=Be;const st=[0,1,2].map(()=>Pc(i,t,V,Z,Bo));return{sky:n,sunDisc:c,halo:u,covers:[Y,...st]}}function Ia(i,t,e){const n=new ji,s=i.phong(10250816),r=i.phong(8016178),a=i.phong(4866104,{shininess:30}),l=i.phong(9067062),c=i.geo("barrel",()=>new el([[pr,0],[Xn-.03,.18],[Xn,ln/2],[Xn-.03,ln-.18],[pr,ln]].map(([g,v])=>new Dt(g,v)),10)),o=i.geo("lid",()=>new Hr(pr,10)),f=i.cyl(Xn-.012,Xn-.012,.045,10),u=i.geo("rim",()=>new Us(pr-.005,.02,4,14)),h=i.basic(3094848);t.forEach((g,v)=>{const m=Vt(n,on+Ho[v],0,g);m.rotation.y=v*1.1+e;const p=nt(c,s,m);p.castShadow=p.receiveShadow=!0,nt(o,r,m,0,ln-.012,0).rotation.x=-Be;for(const A of[.17,ln-.17]){const M=nt(f,a,m,0,A,0);M.castShadow=!0}const S=nt(u,h,m,0,ln-.01,0);S.rotation.x=Be});const d=nt(i.box(.06,.9,.22),l,n,on+.42,.42,t[0]-.32);return d.rotation.set(-.25,.3,-.35),d.castShadow=!0,Lh(i,n),{g:n,rim:h}}const Ho=[.05,0,.03];function Pc(i,t,e,n,s){const r=Vt(t),a=i.basic(3094848),l=u=>{const h=u.g.clone();for(const d of h.children)d instanceof Ke&&d.material===u.rim&&(d.material=a);return r.add(h),h},c=l(e),o=n?l(n):null,f={post:r,rim:a,rows:s,setArc(u){c.visible=!u||!o,o&&(o.visible=u),f.rows=u&&o?Ih:s}};return f.setArc(!1),f}const Lc=new R(Dh,.03,sl),Yg=.035,Kg=-.075,Dc=.205,Zg=.3,Ua=ln+.2,$g=.5,Ic=new R(on-.6,.5,-.1),Uc=new R(.05,.42,tn-on+.5),Jg=new R(.06,ln+.005,tn-on-.3+.04),Nc=new R(2.15,.32,tn+.6),Na=1.15,Qg=2.85,jg=2.25,t_=2.9,Fa=.3,e_=.55,n_=.95,i_=.18,s_=3.6,r_=3.55,a_=new R(-.1,.12,1.05),o_={right:2,up:3.5,look:1,lookRight:-.55,lookUp:1.25,tan:Math.tan(24*Math.PI/180)},Oa={shoot:"lean",protect:"duck",reload:"kneel",super:"stand"},Ct=new R,Le=new R,re=new R,be=new R,Ss=new mn,Ba=new mn,xr=new On(0,0,0,"YXZ"),za=new Lt,Ha=new Lt,Ga=new Lt(1,1,1),l_=new Lt(.97,1,1.04),c_=new Lt(.8,.8,.84),h_=new Lt(3094848),u_=new Lt(me.protect),Va=new R(0,1,0),f_=new Lt(15981768),d_=new Lt(10260362),p_=new R(0,0,1),vi=new R,si=new R,ka=new R,Fc=new R,vr=new R,Oc=new R,Ji=new R,Bc=new R,Je=new R,m_={hex:16777215,k:0},Wa={hex:16777215,k:0},zc=[16777215,me.super],g_=[16774880],__=[me.protect,16777215],x_=[16777215,16773840],Hc=[me.super,me.reload],v_=new R,M_=Math.PI/2;class S_{renderer;kit=new Mg;scene=new Io;vmScene=new Io;camera=new fn(40,.5,.06,600);world;slots;vm;fx;tex;overlay;sun;hemi;fill;bullets;dyn;slugs;P;koMe;koOne;koArc;koArcL;pose=Uh();hands={action:null,ta:-1,back:0,loaded:0,reloadSlot:0,aimDir:new R(0,0,-1),intercepted:!1,hitS:-1,won:0,sim:0};marks=[La(),La(),La()];aims=[Zi(),Zi(),Zi(),Zi(),Zi(),Zi()];pickRects=new Float32Array(kn*4);eyeBase=new R;releaseFp=new R;muzzleFp=new R;w=390;h=844;tanFull=.43;shift=0;disposed=!1;n=-1;layoutKey=-1;needH=Dc;myColor=-1;flashBoost=0;constructor(t){const e=this.renderer=new dg({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"});e.outputColorSpace=nn,e.toneMapping=yn,e.autoClear=!1,e.setClearColor(1645859,1),e.shadowMap.enabled=!0,e.shadowMap.type=ws;const n=this.kit;this.camera.rotation.order="YXZ",this.scene.fog=new Jo(15575676,30,170),n.gradeColor(this.scene.fog.color),this.hemi=new uf(16769205,9067076,1.9),this.sun=new ya(16762496,3.4),this.sun.position.set(Math.sin(Nr)*Math.cos(Pa)*40,Math.sin(Pa)*40,-Math.cos(Nr)*Math.cos(Pa)*40),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),this.sun.shadow.bias=-8e-4,this.sun.shadow.normalBias=.02,Object.assign(this.sun.shadow.camera,{left:-5.5,right:5.5,top:4.6,bottom:-3.2,near:28,far:54}),this.sun.shadow.camera.updateProjectionMatrix(),this.fill=new ya(15388864,1.7),this.fill.position.set(6,7,14),this.scene.add(this.hemi,this.sun,this.sun.target,this.fill);const s=this.hemi.clone(),r=new ya(16762496,3);r.position.copy(this.sun.position);const a=this.fill.clone();this.vmScene.add(s,r,r.target,a);for(const v of[this.hemi,s])n.gradeColor(v.color),n.gradeColor(v.groundColor);for(const v of[this.sun,this.fill,r,a])n.gradeColor(v.color);this.tex=Pg(n),this.world=qg(n,this.scene),this.koMe=yc(1.55,1.5,new R(on-.4,.03,1.4)),this.koOne=yc(1.55,1.48,new R(on+.03,ln+.03,Bo[2]??.2)),this.koArc=bc(on,ln,1),this.koArcL=bc(on,ln,-1),this.slots=this.world.covers.map((v,m)=>({cowboy:new Cg(n,v.post,m===0?0:2),cover:v,post:v.post,ko:m===0?this.koMe:this.koOne,on:m===0,beta:0,anchor:new R,rimTops:[new R,new R,new R],mark:-1})),this.vm=new Wg(n,this.vmScene,this.tex),this.fx=new Fr(n,this.scene,this.tex),this.overlay=new Fg(n,this.tex.glow,this.tex.vignette);const l=hs(n),c=n.basic(16777215),o=n.basic(2758676,{transparent:!0,opacity:.3,depthWrite:!1}),f=n.basic(16777215,{transparent:!0,opacity:.9,depthWrite:!1}),u=n.geo("coneD",()=>new Ur(.085,1,8)),h=n.geo("coneT",()=>new Ur(.05,1,8)),d=()=>{const v=Vt(this.scene),m=nt(n.cyl(.07,.07,.2,8),c,v);m.rotation.x=Math.PI/2,nt(n.sph(.07,8,5),c,m,0,.1,0).scale.y=1.5;const p=nt(n.cyl(.07,.07,.2,8),l.outline,v);p.rotation.x=Math.PI/2,p.scale.set(1.4,1.25,1.4);const S=[nt(u,o,v),nt(h,f,v)];for(const A of S)A.rotation.x=-Math.PI/2;return v.visible=!1,{g:v,tracers:S}};this.bullets=[d(),d(),d(),d()],this.dyn=[0,1,2,3].map(()=>Fh(n,this.scene));for(const v of this.dyn)v.g.visible=!1,v.g.traverse(m=>m.castShadow=!0);const g=n.phong(10200240,{shininess:60,specular:6710886});this.slugs=[0,1,2,3].map(()=>{const v=nt(n.sph(.06,8,5),g,this.scene);return v.scale.set(1,1,.5),v.visible=!1,v}),this.P=this.probe(this.slots[1].cowboy);for(let v=2;v<this.slots.length;v++)this.slots[v].post.visible=!1;this.layout(1,1),this.resize(390,844,1)}probe(t){const e=Object.keys(ve),n=()=>({}),s={head:n(),chest:n(),hat:n(),muzzle:new R,muzzleSide:new R,release:new R,windHand:new R},r=(a,l)=>t.post.worldToLocal(a.getWorldPosition(l));for(const a of e)t.rest(0),t.apply(ve[a]),t.post.updateMatrixWorld(!0),s.head[a]=r(t.head,new R),s.chest[a]=t.post.worldToLocal(t.body.localToWorld(new R(0,.42,0))),s.hat[a]=r(t.hat,new R);return t.rest(0),t.apply(ve.lean),t.post.updateMatrixWorld(!0),r(t.muzzle,s.muzzle),t.rest(0),this.poseAction(t,"shoot",400,!1,0,!1,1),t.post.updateMatrixWorld(!0),r(t.muzzle,s.muzzleSide),t.rest(0),this.poseAction(t,"super",je,!1,0,!1),t.post.updateMatrixWorld(!0),r(t.gunArm.hand,s.release),t.rest(0),this.poseAction(t,"super",1100,!0,0,!1),t.post.updateMatrixWorld(!0),r(t.gunArm.hand,s.windHand),t.rest(0),s}toWorld(t,e,n,s){return s.copy(e),n!==0&&s.applyAxisAngle(Va,n),this.slots[t].post.localToWorld(s)}layout(t,e){this.n=t,this.layoutKey=e;const n=Tg[Math.min(3,t)]??[];for(let a=1;a<this.slots.length;a++){const l=this.slots[a];l.on=!1,l.mark=-1,l.post.visible=!1}for(let a=0;a<n.length;a++){const l=e>>4*a&15,c=this.slots[l],o=n[a];!c||!o||l===0||(c.on=!0,c.mark=a,c.post.visible=!0,c.post.position.set(o.x,0,o.z),c.post.rotation.set(0,o.rotY,0),c.cover.setArc(t>1),c.ko=t===1?this.koOne:a===0?this.koArcL:this.koArc)}this.scene.updateMatrixWorld(!0);for(const a of this.slots)a.cover.rows.forEach((l,c)=>a.post.localToWorld(a.rimTops[c].set(on+(Ho[c]??0),ln+.02,l)));const s=this.slots[0].cowboy;s.rest(0),s.post.updateMatrixWorld(!0),this.eyeFromToy(re);let r=Dc;if(t>1){for(let a=1;a<this.slots.length;a++)if(this.slots[a].on)for(let l=-1;l<=1;l+=2)this.toWorld(a,Ct.set(0,1.8,$g*l),0,Le).sub(re),r=Math.max(r,Math.abs(Le.x)/Math.max(1,-Le.z))}this.needH=r}resize(t,e,n){this.w=Math.max(1,t),this.h=Math.max(1,e),this.renderer.setPixelRatio(Math.min(Math.max(n,1),2)),this.renderer.setSize(this.w,this.h,!1),this.camera.aspect=this.w/this.h,this.overlay.resize(this.w,this.h,this.safeTop,this.safeBottom),this.setProjection(this.fpBandTan()),this.updateReleaseFp()}updateReleaseFp(){const t=this.slots[0].cowboy;t.rest(0),this.poseAction(t,"super",je,!1,0,!1),t.post.updateMatrixWorld(!0),this.eyeFromToy(this.eyeBase),this.fpOrientation(Ss,"super",1,0),this.vm.releaseLocal(this,Ct).applyQuaternion(Ss).add(this.eyeBase),this.releaseFp.copy(Ct)}pick(t,e){let n=null,s=1/0;for(let r=1;r<kn;r++){const a=r*4,l=this.pickRects[a],c=this.pickRects[a+1],o=this.pickRects[a+2],f=this.pickRects[a+3];if(l>o||t<l||t>o||e<c||e>f)continue;const u=Math.abs(t-(l+o)/2);u<s&&(s=u,n=r)}return n}dispose(){this.disposed||(this.disposed=!0,this.sun.shadow.dispose(),this.kit.dispose(),this.renderer.dispose())}get safeTop(){return Math.min(yg,this.h*.05)}get safeBottom(){return Math.min(bg,this.h*.42)}bandAspect(){return this.w/Math.max(1,this.h-this.safeTop-this.safeBottom)}fpBandTan(){return Math.max(Zg,this.needH/this.bandAspect())}setProjection(t){const e=Math.max(1,this.h-this.safeTop-this.safeBottom);this.tanFull=t*this.h/e,this.shift=(this.safeBottom-this.safeTop)/this.h;const n=this.camera;n.aspect=this.w/this.h,n.fov=Math.atan(this.tanFull)*360/Math.PI,n.updateProjectionMatrix(),n.projectionMatrix.elements[9]=-this.shift,n.projectionMatrixInverse.copy(n.projectionMatrix).invert()}local(t,e,n,s){return s.set(t*n*this.tanFull*this.camera.aspect,(e-this.shift)*n*this.tanFull,-n)}poseAction(t,e,n,s,r,a,l=0){const c=Jt(et(n,0,350)),o=this.pose,f=a?Ee(et(n,Pt.settle-100,Pt.settle+500)):0,u=(1-r)*(1-f);switch(e){case"shoot":{const h=Jt(Math.max(.7*c,et(n,0,400)));Mn(o,ve.crouch,ve.lean,h*(1-r)),o.px*=1-.75*l,o.lean*=1-.6*l,f>0&&Mn(o,o,ve.victor,f),t.apply(o);const d=et(n,Pt.fly,Pt.fly+170),g=(d>0&&d<1?(1-d)*Math.min(1,d*8):0)*u;t.gunArm.pitch.rotation.z+=.42*g,t.body.rotation.z+=.05*g;break}case"protect":{const h=Jt(et(n,0,300));Mn(o,ve.crouch,ve.duck,h*(1-r)),f>0&&Mn(o,o,ve.victor,f),t.apply(o);break}case"reload":{Mn(o,ve.crouch,ve.kneel,c*(1-r)),f>0&&Mn(o,o,ve.victor,f),t.apply(o),t.reload(n,1-u);break}case"super":{if(Mn(o,ve.crouch,ve.stand,c*(1-r)),f>0&&Mn(o,o,ve.victor,f),t.apply(o),s){const d=Ee(et(n,350,650));t.superArm(c,d,0,0,1-u),t.gunArm.pitch.rotation.z+=.04*et(n,650,1200)*Math.sin(n*.06)}else t.superArm(c,Ee(et(n,350,590)),et(n,590,je+30),Jt(et(n,je+30,900)),1-u);const h=c>.35&&u>.4;t.gun.visible=!h,t.holstered.visible=h;break}}}aimYaw(t,e){const n=this.slots[e];return!n||e===t?0:(be.copy(n.post.position),be.y=1.2,this.slots[t].post.worldToLocal(be),Math.atan2(-be.z,be.x))}poseToy(t,e,n,s,r,a,l){const c=this.slots[t],o=c.cowboy,f=t===0;if(o.rest(.008*Math.sin(r*2.2+t*1.7+.3)),!e){if(!a){o.knockOut(5,ve.crouch,!1,c.ko,this.P.hat.crouch);return}if(s.phase==="intro"){const g=f?0:100+70*Math.max(0,c.mark),v=s.phaseT===void 0?1:Ee(et(s.phaseT,120+g,820+g));o.apply(Mn(this.pose,ve.duck,ve.crouch,v));return}if(f&&s.phase==="choosing"&&s.me.preview==="protect"){o.apply(Mn(this.pose,ve.crouch,ve.duck,.28));return}f||(o.head.rotation.y=.06*Math.sin(r*.9+1.3+t*2.1),s.phase==="choosing"&&l&&(o.head.rotation.z-=.07));return}const u=n.ta,h=e.died||e.won?0:Ee(et(u,Pt.settle,Pt.settle+500));this.poseAction(o,e.action,u,e.bundle==="intercepted",h,e.won,Math.abs(Math.sin(c.beta))),e.won&&o.tipHat(Oe(et(u,Pt.settle+350,Pt.settle+1100)));let d=c.beta*Jt(et(u,0,350))*(1-h);if(e.died&&u>=Pt.impact){const g=(u-Pt.impact)/1e3,v=Oa[e.action];o.knockOut(g,ve[v],e.diesBy==="blast",c.ko,this.P.hat[v]),d*=1-Jt(et(g,0,.45))}d!==0&&o.root.quaternion.premultiply(Ba.setFromAxisAngle(Va,d))}rivalAnchor(t){const e=this.slots[t];e.post.updateMatrixWorld(!0),e.cowboy.head.getWorldPosition(e.anchor);const n=this.toWorld(t,this.P.head.crouch,0,Ct);e.anchor.y<n.y&&e.anchor.copy(n)}eyeFromToy(t){if(this.slots[0].cowboy.head.getWorldPosition(t).add(Lc),t.y<Ua){const e=Ai((Ua-t.y)/.5);t.y=Ua,t.z=_e(t.z,tn+.4,e)}}fpOrientation(t,e,n,s){let r=Kg;return e==="reload"?r-=.1*n:e==="super"?r+=.1*n:e==="protect"&&(r+=.035*n),r+=.012*s,xr.set(r,this.n>1?0:Yg,0,"YXZ"),t.setFromEuler(xr)}render(t){if(this.disposed)return;const e=t.rivals,n=Math.min(3,e.length);let s=0;for(let M=0;M<n;M++)s|=(e[M].id&15)<<4*M;(n!==this.n||s!==this.layoutKey)&&(this.layout(n,s),this.setProjection(this.fpBandTan()),this.updateReleaseFp());for(let M=0;M<n;M++)this.slots[e[M].id]?.cowboy.setLook(e[M].color);this.slots[0].cowboy.setLook(t.me.color),t.me.color!==this.myColor&&(this.myColor=t.me.color,this.vm.setSleeve(an(this.kit,wg(t.me.color))));const r=xg(t),a=(t.timeMs-r.frozenMs)/1e3,l=r.ta,c=l>=0?l/1e3:a,o=r.facts,f=o[0]??null;this.fx.begin();for(const M of this.bullets)M.g.visible=!1;for(const M of this.dyn)M.g.visible=!1;for(const M of this.slugs)M.visible=!1;for(let M=0;M<kn;M++){const b=o[M],E=this.slots[M];E.beta=b&&b.target>=0&&(b.action==="shoot"||b.action==="super")?this.aimYaw(M,b.target):0}for(let M=0;M<n;M++){const b=e[M];this.slots[b.id]?.on&&(this.poseToy(b.id,o[b.id]??null,r,t,a,b.alive,b.ready),this.rivalAnchor(b.id))}this.poseToy(0,f,r,t,a,t.me.alive,!1),this.slots[0].post.updateMatrixWorld(!0),this.eyeFromToy(this.eyeBase),this.scene.updateMatrixWorld(!0);const u=r.side,h=this.slots[0].cowboy;h.root.visible=u,u||(h.looseHat.visible=!1);const d=f?.died&&l>=Pt.impact?(l-Pt.impact)/1e3:!f&&!t.me.alive?5:-1;u?this.sideCamera(r):this.fpCamera(t,r,f,d),this.camera.updateMatrixWorld(!0),this.vm.root.visible=!u,u||this.poseHands(t,r,f,d,c),this.effects(r,c,u),this.fx.ambient(a,r.freezeK);const g=r.freezeK,v=d>=0?Ee(et(d,.1,1.2)):0,m=(1-.3*g)*(1-.8*v);za.copy(Ga).lerp(l_,g).multiply(Ha.copy(Ga).lerp(c_,v)),this.kit.grade(m,za);const p=this.world.sky.uniforms;p.uSat.value=m,p.uTint.value.copy(za),this.hemi.intensity=1.9+.35*g+this.flashBoost,this.overlayState(t,r),this.overlay.update(this.marks,n,this.aims,n>2?.9:1);const S=this.screenFlash(f,d);this.overlay.screen(.4+.25*g+.3*v,S.hex,S.k);const A=this.renderer;A.clear(),A.render(this.scene,this.camera),u||(A.clearDepth(),A.render(this.vmScene,this.camera)),A.clearDepth(),A.render(this.overlay.scene,this.overlay.camera)}fpCamera(t,e,n,s){const r=this.camera;this.setProjection(this.fpBandTan());const a=e.ta;let l=null,c=0,o=0;if(n){l=n.action;const f=n.died?0:Ee(et(a,Pt.settle,Pt.settle+500));if(c=Jt(et(a,0,350))*(1-f),l==="shoot"){const u=et(a,Pt.fly,Pt.fly+170);o=u>0&&u<1?(1-u)*Math.min(1,u*8):0}}else t.phase==="choosing"&&t.me.preview==="protect"&&(l="protect",c=.4);if(r.position.copy(this.eyeBase),this.fpOrientation(r.quaternion,l,c,o),a>=Pt.impact)for(const f of e.attacks){if(f.target!==0||f.result!=="blocked")continue;const u=(a-Pt.impact)/1e3;r.rotateX(.012*Math.exp(-u*9)*Math.sin(u*70));break}if(s>=0){const f=n?.diesBy==="blast",u=Jt(et(s,0,.12))*(1-.6*et(s,.12,.5)),h=Ee(et(s,.12,1.15)),d=n&&n.killer>0?n.killer:this.firstRival(t),g=d>0&&this.slots[d].post.position.x<-.6;vr.copy(Nc),g&&(vr.x=-Nc.x+2*Lc.x),r.position.lerp(vr,h),r.position.z+=(f?.5:.3)*u,r.position.y+=(f?.25:.06)*Oe(et(s,0,.45)),d>0?this.toWorld(d,this.P.chest.victor,0,Ct):Ct.set(0,1.2,-tn),Ct.sub(vr);const v=Math.atan2(-Ct.x,-Ct.z),m=Math.atan2(Ct.y,Math.hypot(Ct.x,Ct.z))-.02;xr.set(m,v,g?-.32:.32,"YXZ"),Ss.setFromEuler(xr),Ba.copy(r.quaternion),r.quaternion.slerpQuaternions(Ba,Ss,h),r.rotateX(.16*Oe(et(s,0,.3)))}}firstRival(t){let e=-1,n=1/0;for(const s of t.rivals){const r=this.slots[s.id];if(!r?.on)continue;const a=Math.abs(r.post.position.x)+(s.alive?0:10);a<n&&(n=a,e=s.id)}return e}sideCamera(t){const e=this.camera,n=t.freezeU;let s=!1;for(const o of t.attacks)o.kind==="super"&&(o.attacker===t.pairA||o.attacker===t.pairB)&&(s=!0);const r=this.slots[Math.max(0,t.pairA)].post.position,a=this.slots[Math.max(0,t.pairB)].post.position,l=this.bandAspect();if(t.pairA>0){const o=this.slots[0].post.position;Ct.addVectors(r,a).multiplyScalar(.5);const f=r.distanceTo(a)/2+1.3;e.position.set(o.x+.35*Ct.x+_e(-.25,.25,n),4.2,o.z+2.4),Ct.y=1.15+(s?.5:0);const u=e.position.distanceTo(Ct);this.setProjection(Math.max(Math.tan(15*Math.PI/180),f/u/l)),e.lookAt(Ct);return}Je.subVectors(a,r).setY(0);const c=Math.max(.5,Je.length());if(Je.divideScalar(c),re.set(-Je.z,0,Je.x),l<1.1){const o=o_;this.setProjection(o.tan);const f=.6*(n-.5);e.position.copy(r).addScaledVector(re,o.right).addScaledVector(Je,-4.5-f),e.position.y=o.up,Ct.addVectors(r,a).multiplyScalar(.5).addScaledVector(re,o.lookRight).addScaledVector(Je,o.look-f),Ct.y=o.lookUp+(s?.5:0),e.lookAt(Ct)}else{const o=Math.tan(16*Math.PI/180);this.setProjection(o);const f=Dn(5.1/(o*l),6,30),u=_e(.35,-.35,n);Ct.addVectors(r,a).multiplyScalar(.5).addScaledVector(Je,-u),e.position.copy(Ct).addScaledVector(re,f),e.position.y=s?1.3:.95,Ct.y=s?1.9:1.35,e.lookAt(Ct)}}poseHands(t,e,n,s,r){const a=this.hands,l=e.ta;a.sim=r,a.hitS=s,a.intercepted=n?.bundle==="intercepted";let c=t.rivals.length>0;for(const f of t.rivals)f.alive&&(c=!1);a.won=n?.won?Ee(et(l,1500,2e3)):!n&&c&&t.me.alive?1:0,a.loaded=t.me.ammo,a.reloadSlot=t.me.ammo;let o=-1;if(n){a.action=n.action,a.ta=l,a.back=n.died?0:Ee(et(l,Pt.settle,Pt.settle+500));const f=n.action==="reload"?950:n.action==="shoot"?Pt.fly:n.action==="super"&&n.releases?je:1/0;a.loaded=l>=f?n.ammoAfter:n.ammoBefore,a.reloadSlot=n.ammoBefore,o=n.target}else a.action=t.phase==="choosing"?t.me.preview:null,a.ta=-1,a.back=0,a.action==="shoot"&&t.me.ammo<1&&(a.action=null),o=t.target??this.firstRival(t);if(n?.shot==="clash"&&o>0)this.meetPoint(0,o,"shoot",Ct);else if(o>0&&this.slots[o]?.on){const f=e.facts[o];this.toWorld(o,this.P.chest[f?Oa[f.action]:"crouch"],this.slots[o].beta,Ct)}else Ct.set(0,1.2,-tn);a.aimDir.copy(Ct).sub(this.camera.position).applyQuaternion(Ss.copy(this.camera.quaternion).invert()),this.vm.pose(a,this,this.camera.quaternion,this.camera.position),this.vm.root.updateMatrixWorld(!0),this.vm.muzzle.getWorldPosition(this.muzzleFp)}meetPoint(t,e,n,s){const r=Math.min(t,e),a=Math.max(t,e),l=this.slots[r].post.position,c=this.slots[a].post.position;if(s.addVectors(l,c).multiplyScalar(.5),r===0)re.subVectors(c,l).setY(0).normalize(),n==="shoot"?s.add(be.set(re.z*.45,0,-re.x*.45)):s.add(be.set(re.z*.35,0,-re.x*.35)).addScaledVector(re,.6),s.y=n==="shoot"?2.15:2.6;else if(this.far(t,e)){const o=s.distanceTo(this.slots[0].post.position);this.towardMe(s,re),s.addScaledVector(re,o*(n==="shoot"?e_:i_)),s.y=n==="shoot"?n_:s_}else{const o=l.distanceTo(c);this.towardMe(s,re),s.addScaledVector(re,Fa*o),s.y=n==="shoot"?2.15:2.6}return s}far(t,e){const n=this.slots[t],s=this.slots[e];return t>0&&e>0&&!!n&&!!s&&Math.abs(n.mark-s.mark)>=2}towardMe(t,e){return e.subVectors(this.slots[0].post.position,t).setY(0).normalize()}blockPoint(t,e,n){if(t===0)return n.copy(Jg),n.x+=Dn(e.x*.06,-.18,.18),n;const s=this.slots[t];let r=1/0;const a=s.cover.rows;for(let l=0;l<a.length;l++){s.post.localToWorld(be.set(on+(Ho[l]??0),.64,a[l]));const c=Math.hypot(be.x-e.x,be.z-e.z);c<r&&(r=c,n.copy(be))}return be.subVectors(e,n).setY(0).normalize(),n.addScaledVector(be,Xn-.03)}muzzle(t,e,n){if(t===0&&!e)return n.copy(this.muzzleFp);const s=this.slots[t].beta;return be.lerpVectors(this.P.muzzle,this.P.muzzleSide,Math.abs(Math.sin(s))),this.toWorld(t,be,s,n)}stack(t,e){let n=0,s=0;for(const r of e)r.target!==t.target||r.result!==t.result||r.kind!==t.kind||(r===t&&(n=s),s++);return s>1?n-(s-1)/2:0}bulletEnd(t,e,n,s,r,a){switch(e.shot){case"clash":return this.meetPoint(t.attacker,t.target,"shoot",a),Pt.meet;case"blocked":return this.blockPoint(t.target,r,a),a.y+=.12*this.stack(t,n.attacks),Pt.impact;case"destroyed":{const l=n.facts[t.target];return l?this.dynPath(t.target,l,Pt.meet,s,a):this.meetPoint(t.attacker,t.target,"super",a),Pt.meet}default:{const l=n.facts[t.target],c=l?Oa[l.action]:"crouch";t.target===0&&!s?a.copy(this.eyeBase).add(re.set(.06,-.32,-.32)):this.toWorld(t.target,this.P.chest[c],this.slots[t.target].beta,a);const o=this.stack(t,n.attacks);return o!==0&&(this.towardMe(a,re),a.add(be.set(-re.z*.16*o,.08*o,re.x*.16*o))),Pt.impact}}}placeBullet(t,e,n,s,r){const a=Math.max(.01,s)/r;t.g.visible=!0,t.g.position.copy(e),t.g.scale.setScalar(r),t.g.quaternion.setFromUnitVectors(p_,re.copy(n).normalize());for(const l of t.tracers)l.scale.y=a,l.position.z=-a/2-.08}dynPath(t,e,n,s,r){const a=t===0&&!s?this.releaseFp:this.toWorld(t,this.P.release,this.slots[t].beta,Fc),l=e.target;if(e.bundle==="clash"){const h=this.meetPoint(t,l,"super",Oc),d=et(n,je,Pt.meet);return si.lerpVectors(a,h,.5),si.y=h.y+.5,Mr(r,a,si,h,d)}const c=l===0?Uc:this.toWorld(Math.max(0,l),Ic,0,ka),o=et(n,je,Pt.impact),f=t!==0&&l!==0;si.lerpVectors(a,c,t===0?.62:f?.5:.4);const u=t===0?Qg:f?this.far(t,l)?r_:t_:jg;return si.y=2*u-(a.y+c.y)/2,f&&si.addScaledVector(this.towardMe(si,be),2*Fa*a.distanceTo(c)),Mr(r,a,si,c,o)}effects(t,e,n){const s=this.fx,r=t.ta,a=t.facts;this.flashBoost=0;for(let c=0;c<kn;c++){const o=this.slots[c],f=a[c],u=o.cover.rim.color;if(u.copy(h_),!f||f.action!=="protect"||c>0&&!o.on)continue;const h=f.died?0:Ee(et(r,Pt.settle,Pt.settle+500)),d=Jt(et(r,120,380))*(1-h),g=c===0&&!n;u.lerp(u_,d*(g?.6:1));let v=!1;for(const A of t.attacks)A.target===c&&A.result==="blocked"&&(v=!0);const m=v&&r>=Pt.impact?(r-Pt.impact)/1e3:-1;if(m>=0&&m<.45&&u.lerp(Ga,1-et(m,.04,.45)),f.brokeShield)continue;let p=!1;for(const A of t.attacks)A.target===c&&A.brokeShield&&(p=!0);const S=p?1-et(r,Pt.impact-60,Pt.impact+60):1;for(const A of o.rimTops)g?s.glow(Ct.copy(A).setY(A.y+.02),.25,me.protect,.25*d*S):s.glow(A,.95,me.protect,.55*d*S)}if(!t.active||r<0)return;for(let c=0;c<kn;c++){const o=a[c];if(!o||o.action!=="shoot"||r<Pt.fly||c===0&&!n)continue;const f=this.muzzle(c,n,Ji),u=et(r,Pt.fly,Pt.fly+90);u<1&&(s.star(f,.8*Oe(u),16774096,.4),s.glow(f,1.2*Oe(u),16765562,.9),this.flashBoost=Math.max(this.flashBoost,.5*Oe(u))),Je.subVectors(this.slots[Math.max(0,o.target)].post.position,f).setY(0).normalize();for(let h=0;h<3;h++){const d=(r-Pt.fly)/1500-h*.04;d>0&&d<1&&(Ct.copy(f).addScaledVector(Je,.12+.35*d+h*.09),Ct.x+=.05*h,Ct.y+=.04+.32*d,s.smoke(Ct,.12+.38*d,15984338,.6*(1-d)))}}let l=0;for(const c of t.attacks){const o=a[c.attacker];o&&(c.kind==="shoot"?l=this.bulletFx(c,o,t,n,l):this.dynFx(c,o,t,n,e))}for(let c=n?0:1;c<kn;c++){const o=a[c];if(!o||o.action!=="reload")continue;const f=this.slots[c].cowboy;f.cart.visible&&s.glow(f.cart.getWorldPosition(Ct),.75,me.reload,.95),r>=940&&r<1300&&s.glow(f.drum.getWorldPosition(Ct),1.1*Oe(et(r,940,1300)),me.reload,.95)}for(let c=0;c<kn;c++){const o=a[c];if(!o?.died||r<Pt.impact||c===0&&!n)continue;const f=this.slots[c],u=(r-Pt.impact)/1e3,h=o.diesBy==="blast",d=et(u,h?.58:.45,1.7),g=f.post.localToWorld(Le.copy(f.ko.pos)),v=f.ko!==this.koOne&&f.ko!==this.koMe;for(let S=0;S<(v?4:7)&&d>0&&d<1;S++){const A=S/7*ze;s.smoke(Ct.set(g.x+Math.cos(A)*(.4+.9*d),(v?.9:.15)+.25*d,g.z+Math.sin(A)*(.3+.6*d)),.35+.7*d,14267530,.75*(1-d))}const m=et(u,1.02,1.8),p=f.post.localToWorld(Le.copy(f.ko.hat));for(let S=0;S<3&&m>0&&m<1;S++)s.smoke(Ct.set(p.x+(S-1)*.2*(1+m),p.y+.07+.15*m,p.z),.15+.3*m,14267530,.7*(1-m))}}bulletFx(t,e,n,s,r){const a=n.ta;if(a<Pt.fly)return r;const l=this.fx,c=t.attacker,o=this.bullets[c],f=this.muzzle(c,s,Fc),u=ka,h=this.bulletEnd(t,e,n,s,f,u),d=c!==0&&t.target!==0;if(a<h){const m=y_(et(a,Pt.fly,h));vi.lerpVectors(f,u,.5),vi.y+=e.shot==="clash"?.25:.12,d&&e.shot!=="clash"&&(this.far(c,t.target)?(this.meetPoint(c,t.target,"shoot",be),vi.multiplyScalar(-1).addScaledVector(be,2)):vi.addScaledVector(this.towardMe(vi,be),Fa*f.distanceTo(u))),Mr(Ji,f,vi,u,m),Mr(Bc,f,vi,u,Math.min(1,m+.02));const S=c===0&&!s?_e(.45,1,et(m,0,.4)):s?1.5:1.15;return this.placeBullet(o,Ji,Je.subVectors(Bc,Ji),Math.min(1.1,Ji.distanceTo(f)),S),r}const g=(a-h)/1e3,v=t.target===0&&!s;if(e.shot==="clash"&&c<t.target&&(this.clashFx(u,g,!1,r),r+=2),e.shot==="blocked"&&this.blockFx(u,g,v,f),e.shot==="hit"&&this.hitFx(u,g,v),e.shot==="destroyed"&&g<.8){l.star(u,.45*(1-et(g,0,.25)),16777215,g*3),l.burst(u,6,g,.25,2,.25,zc);const m=Math.min(g,.6);this.placeBullet(o,Ji.copy(u).add(Ct.set(.3*m,-4.9*m*m,0)),Je.set(.3,-1,.2),.05,1)}return r}dynFx(t,e,n,s,r){const a=this.fx,l=n.ta,c=t.attacker,o=this.dyn[c],f=this.slots[c],u=f.cowboy,h=c===0&&!s;let d=Na,g=!0;if(e.releases)if(l<je){if(h)return;o.g.visible=l>=60,u.gunArm.hand.getWorldPosition(o.g.position),u.gunArm.pitch.getWorldQuaternion(o.g.quaternion),d*=hi(et(l,60,300))}else{const v=e.bundle==="clash"?Pt.meet:Pt.impact;if(l<v){o.g.visible=!0,this.dynPath(c,e,l,s,o.g.position),o.g.rotation.set(.6,.4,.8-(l-je)*.011),h&&(d=_e(.3,Na,Ch(et(l,je,je+260))));for(let m=1;m<=6;m++){const p=l-m*16;if(p<=je)break;a.glow(this.dynPath(c,e,p,s,Ct),.34*(1-m/8),me.super,.7*(1-m/7))}}else if(e.bundle==="clash"){const m=this.meetPoint(c,t.target,"super",Oc),p=(l-v)/1e3,S=Math.min(p,.8),A=c<t.target?-1:1;o.g.visible=!0,o.g.position.copy(m).add(Ct.set(A*.6*S,1.2*S-4.9*S*S,A*.8*S)),o.g.position.y<.12&&(o.g.position.y=.12),o.g.rotation.set(S*6,.4,S*5*A),g=p<.5;for(let M=0;M<3;M++){const b=et(p,M*.1,.9+M*.1);b>0&&b<1&&a.smoke(Ct.copy(o.g.position).add(be.set(0,.2*b,0)),.2+.5*b,10260362,.6*(1-b))}c<t.target&&this.clashFx(m,p,!0,0)}else{const m=t.target===0?Uc:this.toWorld(t.target,Ic,0,ka);this.blastFx(m,(l-v)/1e3,t.target===0&&!s)}}else{if(h)return;if(l<Pt.impact)o.g.visible=l>=60,u.gunArm.hand.getWorldPosition(o.g.position),u.gunArm.pitch.getWorldQuaternion(o.g.quaternion),d*=hi(et(l,60,300));else{const v=(l-Pt.impact)/1e3,m=this.toWorld(c,this.P.windHand,f.beta,Le),p=c===0?re.set(.5,.12,tn-.3):this.toWorld(c,a_,0,re),S=et(v,0,.55);if(o.g.visible=!0,o.g.position.lerpVectors(m,p,S),o.g.position.y=_e(m.y,p.y,S*S)+.35*Oe(S)*(1-S),S>=1&&(o.g.position.y=p.y+.12*Oe(et(v,.55,.8))*.5),o.g.rotation.set(1.2*S+(S>=1?.37:0),.6,M_*Math.min(1,S*1.2)),g=v<1.3,v>.5&&v<2.6)for(let A=0;A<4;A++){const M=et(v,.5+A*.25,1.7+A*.25);M>0&&M<1&&a.smoke(Ct.copy(o.g.position).add(be.set(.1*A-.15,.15+.7*M,0)),.25+.5*M,10260362,.7*(1-M))}}}if(o.g.visible&&(o.g.scale.setScalar(d),g)){o.g.updateMatrixWorld(!0);const v=o.tip.getWorldPosition(Ct),m=d/Na;a.star(v,(.32+.08*Math.sin(r*47))*m,me.super,r*9),a.glow(v,.6*m,me.super,.9);for(let p=0;p<5;p++){const S=(r*2.6+p/5)%1,A=Se(p,Math.floor(r*2.6+p/5))*ze;Je.set(Math.cos(A)*.7,.8,Math.sin(A)*.7).normalize(),a.streak(Le.copy(v).addScaledVector(Je,(.05+S*.25)*m),Je,.07*m,p%2?16777215:me.super,1-S)}}}clashFx(t,e,n,s){const r=this.fx,a=n?1.7:1;if(r.star(t,.5*a*(.55+.45*Jt(e/.06))*(1-et(e,.14,.5)),16777215,e*2),r.glow(t,1.3*a*(1-et(e,0,.35)),n?16766708:16777215,.9),r.glow(t,1,16774880,.8*(1-et(e,0,.3)))?.scale.set(3.2*a,.09*a,1),n&&r.ring(t,Xa(this.camera,t),.25+1.1*Jt(e/.4),me.super,.9*(1-et(e,.1,.5))),this.flashBoost=Math.max(this.flashBoost,1.2*(1-et(e,0,.3))),r.debris("shard",t,10,e,2.4,Ct.set(0,.2,0),1),r.burst(t,8,e,.25,3,.35,n?zc:g_),!n){const l=Math.min(e,Math.sqrt((t.y-.05)/4.9));for(let c=0;c<2;c++){const o=this.slugs[s+c];if(!o)break;o.visible=!0,o.position.set(t.x+(c-.5)*.12,t.y-4.9*l*l,t.z+(c-.5)*.08),o.rotation.x=l*12*(c?1:-1)}}}blockFx(t,e,n,s){const r=this.fx,a=n?.45:1;r.glow(Ct.copy(t).addScaledVector(Xa(this.camera,t),.1),1.2*a*(1-et(e,0,.35)),me.protect,.9),r.ring(t,Xa(this.camera,t),(.1+.26*Jt(e/.3))*a,me.protect,.95*(1-et(e,.1,.45)),!0),r.star(t,.45*a*Jt(e/.04)*(1-et(e,.06,.3)),16774096,.3),n?Le.set(0,.6,-.6):Le.subVectors(s,t).setY(0).normalize().multiplyScalar(.7).setY(.5),r.debris("splinter",t,n?10:8,e,n?1.6:2.2,Le,.8),r.burst(t,6,e,.2,1.6*a,.22*a,__);for(let l=0;l<3;l++){const c=et(e,.02+l*.05,.9+l*.1);c>0&&c<1&&r.smoke(Ct.copy(t).add(Le.set((l-1)*.12*a,(.08+.3*c)*a,0)),(.12+.35*c)*a,14267530,.65*(1-c))}}hitFx(t,e,n){if(n)return;const s=this.fx;s.star(t,.85*Jt(e/.04)*(1-et(e,.08,.35)),16777215,.2),s.glow(t,1.4*(1-et(e,0,.3)),16773840,.9),s.burst(t,8,e,.25,3,.35,x_)}blastFx(t,e,n){const s=this.fx;if(n){s.blast(Ct.copy(t).setY(t.y+.35+.4*Jt(e/.4)),1.5*(.6+.4*Jt(e/.08))*(1-et(e,.15,.55)),me.super,.85),s.burst(Le.copy(t).setY(t.y+.6),8,e,.3,2.5,.3,Hc,!0),this.flashBoost=Math.max(this.flashBoost,1.2*(1-et(e,0,.4)));return}const r=this.n>2?.8:1;s.blast(Ct.copy(t).setY(t.y+.55+.5*Jt(e/.4)),3.4*r*(.6+.4*Jt(e/.08))*(1-et(e,.15,.6)),me.super,.95),s.blast(Ct.copy(t).setY(t.y+.75),1.4*(1-et(e,0,.18)),16759020,.9),this.flashBoost=Math.max(this.flashBoost,1.6*(1-et(e,0,.5)));for(let a=0;a<8;a++){const l=e/(1.4+Se(a,1));if(l>=1)continue;const c=Se(a,2)*ze,o=(.2+.8*Jt(l))*r;Ha.set(me.super).lerp(f_,et(l,0,.2)).lerp(d_,et(l,.2,.8)),s.smoke(Ct.set(t.x+Math.cos(c)*o*.8+.3*l,t.y+.3+Math.sin(c)*o*.6+.9*l,t.z-.1),(.7+1.4*l)*r,Ha.getHex(),.9*(1-l))}s.burst(Le.copy(t).setY(t.y+.9),10,e,.35,5,.45,Hc,!0),s.debris("splinter",Le.copy(t).setY(t.y+.4),8,e,3,re.set(0,1,0),.9)}screenFlash(t,e){return e<0||!t||e>1?m_:(Wa.hex=t.diesBy==="blast"?me.super:16777215,Wa.k=(t.diesBy==="blast"?.4:.55)*(1-et(e,.02,.25)),Wa)}screen(t,e){return e.copy(t).project(this.camera),e.set((e.x+1)/2*this.w,(1-e.y)/2*this.h,e.z)}screenBox(t,e,n,s,r,a,l,c,o){let f=1/0,u=1/0,h=-1/0,d=-1/0;for(let g=0;g<8;g++)Ct.set(g&1?n:e,g&2?r:s,g&4?l:a),this.slots[t].post.localToWorld(Ct),this.screen(Ct,Le),f=Math.min(f,Le.x),h=Math.max(h,Le.x),u=Math.min(u,Le.y),d=Math.max(d,Le.y);c[o]=f,c[o+1]=u,c[o+2]=h,c[o+3]=d}overlayState(t,e){const n=this.camera,s=this.pickRects;s.fill(0);for(let o=0;o<kn;o++)s[o*4]=1,s[o*4+2]=0;for(const o of this.marks)o.show=!1;for(const o of this.aims)o.on=!1;const r=e.t,a=e.ta,l=t.phase==="choosing"||t.phase==="intro";for(let o=0;o<t.rivals.length&&o<this.marks.length;o++){const f=t.rivals[o],u=this.slots[f.id];if(!u?.on)continue;const h=this.marks[o],d=e.facts[f.id]??null;h.show=!0,this.screen(u.anchor,re),h.headX=re.x,h.headY=re.y;const g=Math.max(.5,u.anchor.distanceTo(n.position));h.headR=.26/(g*this.tanFull)*(this.h/2),this.screen(Ct.copy(u.anchor).addScaledVector(Va,.78),re),h.topY=re.y,h.ammo=Dn(Math.round(f.ammo),0,3),h.popK=-1,h.badge=null,h.downMs=-1,h.gone=!f.alive&&!d,h.target=0;const v=u.cover.rows,m=Math.min(v[0]??0,-.45)-Xn,p=Math.max(v[v.length-1]??0,.45)+Xn;if(f.alive&&!(d&&d.died)){const S=f.id*4;this.screenBox(f.id,-.4,on+Xn,0,2.35,m,p,s,S);const A=10;s[S]=(s[S]??0)-A,s[S+1]=Math.min(s[S+1]??0,h.topY-34)-A,s[S+2]=(s[S+2]??0)+A,s[S+3]=(s[S+3]??0)+A}l&&t.target===f.id&&f.alive&&(this.screenBox(f.id,-.3,on,ln*.55,2,-.62,.62,ys,0),h.x0=ys[0],h.y0=ys[1],h.x1=ys[2],h.y1=ys[3],h.target=.88+.12*Math.sin(t.timeMs*.006)),d&&(f.ammo===d.ammoAfter&&d.ammoAfter!==d.ammoBefore&&r>=Pt.ammo&&(h.popK=et(r,Pt.ammo,Pt.ammo+320),h.popFrom=Math.min(d.ammoBefore,d.ammoAfter),h.popTo=Math.max(d.ammoBefore,d.ammoAfter),h.popK>=1&&(h.popK=-1)),h.badge=d.action,h.badgeMs=r,d.died&&a>=Pt.impact&&(h.downMs=a-Pt.impact))}if(!e.active||e.side||a<0||a>950)return;let c=0;for(const o of e.attacks){if(o.attacker===0||o.target===0)continue;const f=this.slots[o.attacker],u=this.slots[o.target],h=this.aims[c];!f?.on||!u?.on||!h||f.mark<0||u.mark<0||(c++,h.on=!0,h.from=f.mark,h.to=u.mark,h.hex=me[o.kind],h.grow=Jt(et(a,60,380)),h.alpha=1-et(a,700,950))}}}const ys=new Float32Array(4);function Xa(i,t){return v_.copy(i.position).sub(t).normalize()}function Mr(i,t,e,n,s){const r=(1-s)*(1-s),a=2*s*(1-s),l=s*s;return i.set(t.x*r+e.x*a+n.x*l,t.y*r+e.y*a+n.y*l,t.z*r+e.z*a+n.z*l)}const y_=i=>_e(i,1-(1-i)**1.6,.6),E_=0,T_=i=>new S_(i);export{qi as FP_CINEMATIC_FREEZE_MS,E_ as ME,T_ as createFpScene};
