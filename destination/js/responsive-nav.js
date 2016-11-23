!function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return o(n?n:e)},l,l.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){(function(t,r,o,i,a,s,u,l,f){function o(e,t,n){if(!(this instanceof o))return new o(e,t,n);var r=typeof e;if("base64"===t&&"string"===r)for(e=T(e);e.length%4!==0;)e+="=";var i;if("number"===r)i=F(e);else if("string"===r)i=o.byteLength(e,t);else{if("object"!==r)throw new Error("First argument needs to be a number, array or string.");i=F(e.length)}var a;o._useTypedArrays?a=o._augment(new Uint8Array(i)):(a=this,a.length=i,a._isBuffer=!0);var s;if(o._useTypedArrays&&"number"==typeof e.byteLength)a._set(e);else if(W(e))for(s=0;s<i;s++)o.isBuffer(e)?a[s]=e.readUInt8(s):a[s]=e[s];else if("string"===r)a.write(e,0,t);else if("number"===r&&!o._useTypedArrays&&!n)for(s=0;s<i;s++)a[s]=0;return a}function d(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;var a=t.length;Q(a%2===0,"Invalid hex string"),r>a/2&&(r=a/2);for(var s=0;s<r;s++){var u=parseInt(t.substr(2*s,2),16);Q(!isNaN(u),"Invalid hex string"),e[n+s]=u}return o._charsWritten=2*s,s}function c(e,t,n,r){var i=o._charsWritten=R(O(t),e,n,r);return i}function h(e,t,n,r){var i=o._charsWritten=R(H(t),e,n,r);return i}function p(e,t,n,r){return h(e,t,n,r)}function y(e,t,n,r){var i=o._charsWritten=R(J(t),e,n,r);return i}function g(e,t,n,r){var i=o._charsWritten=R(z(t),e,n,r);return i}function v(e,t,n){return 0===t&&n===e.length?V.fromByteArray(e):V.fromByteArray(e.slice(t,n))}function w(e,t,n){var r="",o="";n=Math.min(e.length,n);for(var i=t;i<n;i++)e[i]<=127?(r+=X(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return r+X(o)}function m(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;o<n;o++)r+=String.fromCharCode(e[o]);return r}function b(e,t,n){return m(e,t,n)}function E(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=t;i<n;i++)o+=P(e[i]);return o}function L(e,t,n){for(var r=e.slice(t,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function A(e,t,n,r){r||(Q("boolean"==typeof n,"missing or invalid endian"),Q(void 0!==t&&null!==t,"missing offset"),Q(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(i=e[t],t+1<o&&(i|=e[t+1]<<8)):(i=e[t]<<8,t+1<o&&(i|=e[t+1])),i}}function I(e,t,n,r){r||(Q("boolean"==typeof n,"missing or invalid endian"),Q(void 0!==t&&null!==t,"missing offset"),Q(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(t+2<o&&(i=e[t+2]<<16),t+1<o&&(i|=e[t+1]<<8),i|=e[t],t+3<o&&(i+=e[t+3]<<24>>>0)):(t+1<o&&(i=e[t+1]<<16),t+2<o&&(i|=e[t+2]<<8),t+3<o&&(i|=e[t+3]),i+=e[t]<<24>>>0),i}}function S(e,t,n,r){r||(Q("boolean"==typeof n,"missing or invalid endian"),Q(void 0!==t&&null!==t,"missing offset"),Q(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i=A(e,t,n,!0),a=32768&i;return a?(65535-i+1)*-1:i}}function _(e,t,n,r){r||(Q("boolean"==typeof n,"missing or invalid endian"),Q(void 0!==t&&null!==t,"missing offset"),Q(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i=I(e,t,n,!0),a=2147483648&i;return a?(4294967295-i+1)*-1:i}}function B(e,t,n,r){return r||(Q("boolean"==typeof n,"missing or invalid endian"),Q(t+3<e.length,"Trying to read beyond buffer length")),Z.read(e,t,n,23,4)}function N(e,t,n,r){return r||(Q("boolean"==typeof n,"missing or invalid endian"),Q(t+7<e.length,"Trying to read beyond buffer length")),Z.read(e,t,n,52,8)}function C(e,t,n,r,o){o||(Q(void 0!==t&&null!==t,"missing value"),Q("boolean"==typeof r,"missing or invalid endian"),Q(void 0!==n&&null!==n,"missing offset"),Q(n+1<e.length,"trying to write beyond buffer length"),Y(t,65535));var i=e.length;if(!(n>=i))for(var a=0,s=Math.min(i-n,2);a<s;a++)e[n+a]=(t&255<<8*(r?a:1-a))>>>8*(r?a:1-a)}function q(e,t,n,r,o){o||(Q(void 0!==t&&null!==t,"missing value"),Q("boolean"==typeof r,"missing or invalid endian"),Q(void 0!==n&&null!==n,"missing offset"),Q(n+3<e.length,"trying to write beyond buffer length"),Y(t,4294967295));var i=e.length;if(!(n>=i))for(var a=0,s=Math.min(i-n,4);a<s;a++)e[n+a]=t>>>8*(r?a:3-a)&255}function U(e,t,n,r,o){o||(Q(void 0!==t&&null!==t,"missing value"),Q("boolean"==typeof r,"missing or invalid endian"),Q(void 0!==n&&null!==n,"missing offset"),Q(n+1<e.length,"Trying to write beyond buffer length"),G(t,32767,-32768));var i=e.length;n>=i||(t>=0?C(e,t,n,r,o):C(e,65535+t+1,n,r,o))}function M(e,t,n,r,o){o||(Q(void 0!==t&&null!==t,"missing value"),Q("boolean"==typeof r,"missing or invalid endian"),Q(void 0!==n&&null!==n,"missing offset"),Q(n+3<e.length,"Trying to write beyond buffer length"),G(t,2147483647,-2147483648));var i=e.length;n>=i||(t>=0?q(e,t,n,r,o):q(e,4294967295+t+1,n,r,o))}function k(e,t,n,r,o){o||(Q(void 0!==t&&null!==t,"missing value"),Q("boolean"==typeof r,"missing or invalid endian"),Q(void 0!==n&&null!==n,"missing offset"),Q(n+3<e.length,"Trying to write beyond buffer length"),K(t,3.4028234663852886e38,-3.4028234663852886e38));var i=e.length;n>=i||Z.write(e,t,n,r,23,4)}function D(e,t,n,r,o){o||(Q(void 0!==t&&null!==t,"missing value"),Q("boolean"==typeof r,"missing or invalid endian"),Q(void 0!==n&&null!==n,"missing offset"),Q(n+7<e.length,"Trying to write beyond buffer length"),K(t,1.7976931348623157e308,-1.7976931348623157e308));var i=e.length;n>=i||Z.write(e,t,n,r,52,8)}function T(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function x(e,t,n){return"number"!=typeof e?n:(e=~~e,e>=t?t:e>=0?e:(e+=t,e>=0?e:0))}function F(e){return e=~~Math.ceil(+e),e<0?0:e}function j(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function W(e){return j(e)||o.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function P(e){return e<16?"0"+e.toString(16):e.toString(16)}function O(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else{var o=n;r>=55296&&r<=57343&&n++;for(var i=encodeURIComponent(e.slice(o,n+1)).substr(1).split("%"),a=0;a<i.length;a++)t.push(parseInt(i[a],16))}}return t}function H(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}function z(e){for(var t,n,r,o=[],i=0;i<e.length;i++)t=e.charCodeAt(i),n=t>>8,r=t%256,o.push(r),o.push(n);return o}function J(e){return V.toByteArray(e)}function R(e,t,n,r){for(var o=0;o<r&&!(o+n>=t.length||o>=e.length);o++)t[o+n]=e[o];return o}function X(e){try{return decodeURIComponent(e)}catch(e){return String.fromCharCode(65533)}}function Y(e,t){Q("number"==typeof e,"cannot write a non-number as a number"),Q(e>=0,"specified a negative value for writing an unsigned value"),Q(e<=t,"value is larger than maximum value for type"),Q(Math.floor(e)===e,"value has a fractional component")}function G(e,t,n){Q("number"==typeof e,"cannot write a non-number as a number"),Q(e<=t,"value larger than maximum allowed value"),Q(e>=n,"value smaller than minimum allowed value"),Q(Math.floor(e)===e,"value has a fractional component")}function K(e,t,n){Q("number"==typeof e,"cannot write a non-number as a number"),Q(e<=t,"value larger than maximum allowed value"),Q(e>=n,"value smaller than minimum allowed value")}function Q(e,t){if(!e)throw new Error(t||"Failed assertion")}var V=e("base64-js"),Z=e("ieee754");n.Buffer=o,n.SlowBuffer=o,n.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(e){return!1}}(),o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},o.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case"hex":n=e.length/2;break;case"utf8":case"utf-8":n=O(e).length;break;case"ascii":case"binary":case"raw":n=e.length;break;case"base64":n=J(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},o.concat=function(e,t){if(Q(j(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new o(0);if(1===e.length)return e[0];var n;if("number"!=typeof t)for(t=0,n=0;n<e.length;n++)t+=e[n].length;var r=new o(t),i=0;for(n=0;n<e.length;n++){var a=e[n];a.copy(r,i),i+=a.length}return r},o.prototype.write=function(e,t,n,r){if(isFinite(t))isFinite(n)||(r=n,n=void 0);else{var o=r;r=t,t=n,n=o}t=Number(t)||0;var i=this.length-t;n?(n=Number(n),n>i&&(n=i)):n=i,r=String(r||"utf8").toLowerCase();var a;switch(r){case"hex":a=d(this,e,t,n);break;case"utf8":case"utf-8":a=c(this,e,t,n);break;case"ascii":a=h(this,e,t,n);break;case"binary":a=p(this,e,t,n);break;case"base64":a=y(this,e,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":a=g(this,e,t,n);break;default:throw new Error("Unknown encoding")}return a},o.prototype.toString=function(e,t,n){var r=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,n=void 0!==n?Number(n):n=r.length,n===t)return"";var o;switch(e){case"hex":o=E(r,t,n);break;case"utf8":case"utf-8":o=w(r,t,n);break;case"ascii":o=m(r,t,n);break;case"binary":o=b(r,t,n);break;case"base64":o=v(r,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=L(r,t,n);break;default:throw new Error("Unknown encoding")}return o},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(e,t,n,r){var i=this;if(n||(n=0),r||0===r||(r=this.length),t||(t=0),r!==n&&0!==e.length&&0!==i.length){Q(r>=n,"sourceEnd < sourceStart"),Q(t>=0&&t<e.length,"targetStart out of bounds"),Q(n>=0&&n<i.length,"sourceStart out of bounds"),Q(r>=0&&r<=i.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var a=r-n;if(a<100||!o._useTypedArrays)for(var s=0;s<a;s++)e[s+t]=this[s+n];else e._set(this.subarray(n,n+a),t)}},o.prototype.slice=function(e,t){var n=this.length;if(e=x(e,n,0),t=x(t,n,n),o._useTypedArrays)return o._augment(this.subarray(e,t));for(var r=t-e,i=new o(r,(void 0),(!0)),a=0;a<r;a++)i[a]=this[a+e];return i},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},o.prototype.readUInt8=function(e,t){if(t||(Q(void 0!==e&&null!==e,"missing offset"),Q(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},o.prototype.readUInt16LE=function(e,t){return A(this,e,!0,t)},o.prototype.readUInt16BE=function(e,t){return A(this,e,!1,t)},o.prototype.readUInt32LE=function(e,t){return I(this,e,!0,t)},o.prototype.readUInt32BE=function(e,t){return I(this,e,!1,t)},o.prototype.readInt8=function(e,t){if(t||(Q(void 0!==e&&null!==e,"missing offset"),Q(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){var n=128&this[e];return n?(255-this[e]+1)*-1:this[e]}},o.prototype.readInt16LE=function(e,t){return S(this,e,!0,t)},o.prototype.readInt16BE=function(e,t){return S(this,e,!1,t)},o.prototype.readInt32LE=function(e,t){return _(this,e,!0,t)},o.prototype.readInt32BE=function(e,t){return _(this,e,!1,t)},o.prototype.readFloatLE=function(e,t){return B(this,e,!0,t)},o.prototype.readFloatBE=function(e,t){return B(this,e,!1,t)},o.prototype.readDoubleLE=function(e,t){return N(this,e,!0,t)},o.prototype.readDoubleBE=function(e,t){return N(this,e,!1,t)},o.prototype.writeUInt8=function(e,t,n){n||(Q(void 0!==e&&null!==e,"missing value"),Q(void 0!==t&&null!==t,"missing offset"),Q(t<this.length,"trying to write beyond buffer length"),Y(e,255)),t>=this.length||(this[t]=e)},o.prototype.writeUInt16LE=function(e,t,n){C(this,e,t,!0,n)},o.prototype.writeUInt16BE=function(e,t,n){C(this,e,t,!1,n)},o.prototype.writeUInt32LE=function(e,t,n){q(this,e,t,!0,n)},o.prototype.writeUInt32BE=function(e,t,n){q(this,e,t,!1,n)},o.prototype.writeInt8=function(e,t,n){n||(Q(void 0!==e&&null!==e,"missing value"),Q(void 0!==t&&null!==t,"missing offset"),Q(t<this.length,"Trying to write beyond buffer length"),G(e,127,-128)),t>=this.length||(e>=0?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},o.prototype.writeInt16LE=function(e,t,n){U(this,e,t,!0,n)},o.prototype.writeInt16BE=function(e,t,n){U(this,e,t,!1,n)},o.prototype.writeInt32LE=function(e,t,n){M(this,e,t,!0,n)},o.prototype.writeInt32BE=function(e,t,n){M(this,e,t,!1,n)},o.prototype.writeFloatLE=function(e,t,n){k(this,e,t,!0,n)},o.prototype.writeFloatBE=function(e,t,n){k(this,e,t,!1,n)},o.prototype.writeDoubleLE=function(e,t,n){D(this,e,t,!0,n)},o.prototype.writeDoubleBE=function(e,t,n){D(this,e,t,!1,n)},o.prototype.fill=function(e,t,n){if(e||(e=0),t||(t=0),n||(n=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),Q("number"==typeof e&&!isNaN(e),"value is not a number"),Q(n>=t,"end < start"),n!==t&&0!==this.length){Q(t>=0&&t<this.length,"start out of bounds"),Q(n>=0&&n<=this.length,"end out of bounds");for(var r=t;r<n;r++)this[r]=e}},o.prototype.inspect=function(){for(var e=[],t=this.length,r=0;r<t;r++)if(e[r]=P(this[r]),r===n.INSPECT_MAX_BYTES){e[r+1]="...";break}return"<Buffer "+e.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(o._useTypedArrays)return new o(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var $=o.prototype;o._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=$.get,e.set=$.set,e.write=$.write,e.toString=$.toString,e.toLocaleString=$.toString,e.toJSON=$.toJSON,e.copy=$.copy,e.slice=$.slice,e.readUInt8=$.readUInt8,e.readUInt16LE=$.readUInt16LE,e.readUInt16BE=$.readUInt16BE,e.readUInt32LE=$.readUInt32LE,e.readUInt32BE=$.readUInt32BE,e.readInt8=$.readInt8,e.readInt16LE=$.readInt16LE,e.readInt16BE=$.readInt16BE,e.readInt32LE=$.readInt32LE,e.readInt32BE=$.readInt32BE,e.readFloatLE=$.readFloatLE,e.readFloatBE=$.readFloatBE,e.readDoubleLE=$.readDoubleLE,e.readDoubleBE=$.readDoubleBE,e.writeUInt8=$.writeUInt8,e.writeUInt16LE=$.writeUInt16LE,e.writeUInt16BE=$.writeUInt16BE,e.writeUInt32LE=$.writeUInt32LE,e.writeUInt32BE=$.writeUInt32BE,e.writeInt8=$.writeInt8,e.writeInt16LE=$.writeInt16LE,e.writeInt16BE=$.writeInt16BE,e.writeInt32LE=$.writeInt32LE,e.writeInt32BE=$.writeInt32BE,e.writeFloatLE=$.writeFloatLE,e.writeFloatBE=$.writeFloatBE,e.writeDoubleLE=$.writeDoubleLE,e.writeDoubleBE=$.writeDoubleBE,e.fill=$.fill,e.inspect=$.inspect,e.toArrayBuffer=$.toArrayBuffer,e}}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")},{"base64-js":2,buffer:1,ieee754:3,oMfpAn:4}],2:[function(e,t,n){(function(e,t,r,o,i,a,s,u,l){var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(e){"use strict";function t(e){var t=e.charCodeAt(0);return t===i||t===d?62:t===a||t===c?63:t<s?-1:t<s+10?t-s+26+26:t<l+26?t-l:t<u+26?t-u+26:void 0}function n(e){function n(e){l[d++]=e}var r,i,a,s,u,l;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var f=e.length;u="="===e.charAt(f-2)?2:"="===e.charAt(f-1)?1:0,l=new o(3*e.length/4-u),a=u>0?e.length-4:e.length;var d=0;for(r=0,i=0;r<a;r+=4,i+=3)s=t(e.charAt(r))<<18|t(e.charAt(r+1))<<12|t(e.charAt(r+2))<<6|t(e.charAt(r+3)),n((16711680&s)>>16),n((65280&s)>>8),n(255&s);return 2===u?(s=t(e.charAt(r))<<2|t(e.charAt(r+1))>>4,n(255&s)):1===u&&(s=t(e.charAt(r))<<10|t(e.charAt(r+1))<<4|t(e.charAt(r+2))>>2,n(s>>8&255),n(255&s)),l}function r(e){function t(e){return f.charAt(e)}function n(e){return t(e>>18&63)+t(e>>12&63)+t(e>>6&63)+t(63&e)}var r,o,i,a=e.length%3,s="";for(r=0,i=e.length-a;r<i;r+=3)o=(e[r]<<16)+(e[r+1]<<8)+e[r+2],s+=n(o);switch(a){case 1:o=e[e.length-1],s+=t(o>>2),s+=t(o<<4&63),s+="==";break;case 2:o=(e[e.length-2]<<8)+e[e.length-1],s+=t(o>>10),s+=t(o>>4&63),s+=t(o<<2&63),s+="="}return s}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="+".charCodeAt(0),a="/".charCodeAt(0),s="0".charCodeAt(0),u="a".charCodeAt(0),l="A".charCodeAt(0),d="-".charCodeAt(0),c="_".charCodeAt(0);e.toByteArray=n,e.fromByteArray=r}("undefined"==typeof n?this.base64js={}:n)}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")},{buffer:1,oMfpAn:4}],3:[function(e,t,n){(function(e,t,r,o,i,a,s,u,l){n.read=function(e,t,n,r,o){var i,a,s=8*o-r-1,u=(1<<s)-1,l=u>>1,f=-7,d=n?o-1:0,c=n?-1:1,h=e[t+d];for(d+=c,i=h&(1<<-f)-1,h>>=-f,f+=s;f>0;i=256*i+e[t+d],d+=c,f-=8);for(a=i&(1<<-f)-1,i>>=-f,f+=r;f>0;a=256*a+e[t+d],d+=c,f-=8);if(0===i)i=1-l;else{if(i===u)return a?NaN:(h?-1:1)*(1/0);a+=Math.pow(2,r),i-=l}return(h?-1:1)*a*Math.pow(2,i-r)},n.write=function(e,t,n,r,o,i){var a,s,u,l=8*i-o-1,f=(1<<l)-1,d=f>>1,c=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:i-1,p=r?1:-1,y=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=f):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),t+=a+d>=1?c/u:c*Math.pow(2,1-d),t*u>=2&&(a++,u/=2),a+d>=f?(s=0,a=f):a+d>=1?(s=(t*u-1)*Math.pow(2,o),a+=d):(s=t*Math.pow(2,d-1)*Math.pow(2,o),a=0));o>=8;e[n+h]=255&s,h+=p,s/=256,o-=8);for(a=a<<o|s,l+=o;l>0;e[n+h]=255&a,h+=p,a/=256,l-=8);e[n+h-p]|=128*y}}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")},{buffer:1,oMfpAn:4}],4:[function(e,t,n){(function(e,n,r,o,i,a,s,u,l){function f(){}var e=t.exports={};e.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),n.length>0)){var r=n.shift();r()}},!0),function(e){n.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=f,e.addListener=f,e.once=f,e.off=f,e.removeListener=f,e.removeAllListeners=f,e.emit=f,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")}}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")},{buffer:1,oMfpAn:4}],5:[function(e,t,n){(function(e,r,o,i,a,s,u,l,f){!function(e,r){"function"==typeof define&&define.amd?define("priorityNav",r(e)):"object"==typeof n?t.exports=r(e):e.priorityNav=r(e)}(window||this,function(e){"use strict";function t(e,t,n){var r;return function(){var o=this,i=arguments,a=function(){r=null,n||e.apply(o,i)},s=n&&!r;clearTimeout(r),r=setTimeout(a,t),s&&e.apply(o,i)}}var n,r,o,i,a,s,u,l,f={},d=[],c=!!document.querySelector&&!!e.addEventListener,h={},p=0,y=0,g=0,v={initClass:"js-priorityNav",mainNavWrapper:"nav",mainNav:"ul",navDropdownClassName:"nav__dropdown",navDropdownToggleClassName:"nav__dropdown-toggle",navDropdownLabel:"more",navDropdownBreakpointLabel:"menu",breakPoint:500,throttleDelay:50,offsetPixels:0,count:!0,moved:function(){},movedBack:function(){}},w=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(n,e[r],r,e);else for(var o=0,i=e.length;o<i;o++)t.call(n,e[o],o,e)},m=function(e,t){for(var n=t.charAt(0);e&&e!==document;e=e.parentNode)if("."===n){if(e.classList.contains(t.substr(1)))return e}else if("#"===n){if(e.id===t.substr(1))return e}else if("["===n&&e.hasAttribute(t.substr(1,t.length-2)))return e;return!1},b=function(e,t){var n={};return w(e,function(t,r){n[r]=e[r]}),w(t,function(e,r){n[r]=t[r]}),n},E=function(e,t){if(e.classList)e.classList.toggle(t);else{var n=e.className.split(" "),r=n.indexOf(t);r>=0?n.splice(r,1):n.push(t),e.className=n.join(" ")}},L=function(e,t){return l=document.createElement("span"),a=document.createElement("ul"),s=document.createElement("button"),s.innerHTML=t.navDropdownLabel,s.setAttribute("aria-controls","menu"),s.setAttribute("type","button"),a.setAttribute("aria-hidden","true"),e.querySelector(i).parentNode!==e?void console.warn("mainNav is not a direct child of mainNavWrapper, double check please"):(e.insertAfter(l,e.querySelector(i)),l.appendChild(s),l.appendChild(a),a.classList.add(t.navDropdownClassName),a.classList.add("priority-nav__dropdown"),s.classList.add(t.navDropdownToggleClassName),s.classList.add("priority-nav__dropdown-toggle"),l.classList.add(t.navDropdownClassName+"-wrapper"),l.classList.add("priority-nav__wrapper"),void e.classList.add("priority-nav"))},A=function(e){var t=window.getComputedStyle(e),n=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight);return e.clientWidth-n},I=function(){var e=document,t=window,n=e.compatMode&&"CSS1Compat"===e.compatMode?e.documentElement:e.body,r=n.clientWidth,o=n.clientHeight;return t.innerWidth&&r>t.innerWidth&&(r=t.innerWidth,o=t.innerHeight),{width:r,height:o}},S=function(e){r=A(e),u=e.querySelector(a).parentNode===e?e.querySelector(a).offsetWidth:0,o=C(e)+h.offsetPixels,g=I().width};f.doesItFit=function(e){var n=0===e.getAttribute("instance")?n:h.throttleDelay;p++,t(function(){var t=e.getAttribute("instance");for(S(e);r<=o&&e.querySelector(i).children.length>0||g<h.breakPoint&&e.querySelector(i).children.length>0;)f.toDropdown(e,t),S(e,t),g<h.breakPoint&&N(e,t,h.navDropdownBreakpointLabel);for(;r>=d[t][d[t].length-1]&&g>h.breakPoint;)f.toMenu(e,t),g>h.breakPoint&&N(e,t,h.navDropdownLabel);d[t].length<1&&(e.querySelector(a).classList.remove("show"),N(e,t,h.navDropdownLabel)),e.querySelector(i).children.length<1?(e.classList.add("is-empty"),N(e,t,h.navDropdownBreakpointLabel)):e.classList.remove("is-empty"),_(e,t)},n)()};var _=function(e,t){d[t].length<1?(e.querySelector(s).classList.add("priority-nav-is-hidden"),e.querySelector(s).classList.remove("priority-nav-is-visible"),e.classList.remove("priority-nav-has-dropdown"),e.querySelector(".priority-nav__wrapper").setAttribute("aria-haspopup","false")):(e.querySelector(s).classList.add("priority-nav-is-visible"),e.querySelector(s).classList.remove("priority-nav-is-hidden"),e.classList.add("priority-nav-has-dropdown"),e.querySelector(".priority-nav__wrapper").setAttribute("aria-haspopup","true"))},B=function(e,t){e.querySelector(s).setAttribute("priorityNav-count",d[t].length)},N=function(e,t,n){e.querySelector(s).innerHTML=n};f.toDropdown=function(e,t){e.querySelector(a).firstChild&&e.querySelector(i).children.length>0?e.querySelector(a).insertBefore(e.querySelector(i).lastElementChild,e.querySelector(a).firstChild):e.querySelector(i).children.length>0&&e.querySelector(a).appendChild(e.querySelector(i).lastElementChild),d[t].push(o),_(e,t),e.querySelector(i).children.length>0&&h.count&&B(e,t),h.moved()},f.toMenu=function(e,t){e.querySelector(a).children.length>0&&e.querySelector(i).appendChild(e.querySelector(a).firstElementChild),d[t].pop(),_(e,t),e.querySelector(i).children.length>0&&h.count&&B(e,t),h.movedBack()};var C=function(e){for(var t=e.childNodes,n=0,r=0;r<t.length;r++)3!==t[r].nodeType&&(isNaN(t[r].offsetWidth)||(n+=t[r].offsetWidth));return n},q=function(e,t){window.attachEvent?window.attachEvent("onresize",function(){f.doesItFit&&f.doesItFit(e)}):window.addEventListener&&window.addEventListener("resize",function(){f.doesItFit&&f.doesItFit(e)},!0),e.querySelector(s).addEventListener("click",function(){E(e.querySelector(a),"show"),E(this,"is-open"),E(e,"is-open"),-1!==e.className.indexOf("is-open")?e.querySelector(a).setAttribute("aria-hidden","false"):(e.querySelector(a).setAttribute("aria-hidden","true"),e.querySelector(a).blur())}),document.addEventListener("click",function(n){m(n.target,"."+t.navDropdownClassName)||n.target===e.querySelector(s)||(e.querySelector(a).classList.remove("show"),e.querySelector(s).classList.remove("is-open"),e.classList.remove("is-open"))}),document.onkeydown=function(e){e=e||window.event,27===e.keyCode&&(document.querySelector(a).classList.remove("show"),document.querySelector(s).classList.remove("is-open"),n.classList.remove("is-open"))}};Element.prototype.remove=function(){this.parentElement.removeChild(this)},NodeList.prototype.remove=HTMLCollection.prototype.remove=function(){for(var e=0,t=this.length;e<t;e++)this[e]&&this[e].parentElement&&this[e].parentElement.removeChild(this[e])},f.destroy=function(){h&&(document.documentElement.classList.remove(h.initClass),l.remove(),h=null,delete f.init,delete f.doesItFit)},c&&"undefined"!=typeof Node&&(Node.prototype.insertAfter=function(e,t){this.insertBefore(e,t.nextSibling)});var U=function(e){var t=e.charAt(0);return"."!==t&&"#"!==t};return f.init=function(e){if(h=b(v,e||{}),!c&&"undefined"==typeof Node)return void console.warn("This browser doesn't support priorityNav");if(!U(h.navDropdownClassName)||!U(h.navDropdownToggleClassName))return void console.warn("No symbols allowed in navDropdownClassName & navDropdownToggleClassName. These are not selectors.");var t=document.querySelectorAll(h.mainNavWrapper);w(t,function(e){return d[y]=[],e.setAttribute("instance",y++),(n=e)?(i=h.mainNav,e.querySelector(i)?(L(e,h),a="."+h.navDropdownClassName,e.querySelector(a)?(s="."+h.navDropdownToggleClassName,e.querySelector(s)?(q(e,h),void f.doesItFit(e)):void console.warn("couldn't find the specified navDropdownToggle element")):void console.warn("couldn't find the specified navDropdown element")):void console.warn("couldn't find the specified mainNav element")):void console.warn("couldn't find the specified mainNavWrapper element")}),p++,document.documentElement.classList.add(h.initClass)},f})}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/priority-nav/dist/priority-nav.js","/../../node_modules/priority-nav/dist")},{buffer:1,oMfpAn:4}],6:[function(e,t,n){(function(t,n,r,o,i,a,s,u,l){var f=e("priority-nav");f.init({mainNav:"ul.site-nav",navDropdownClassName:"site-nav__dropdown",navDropdownToggleClassName:"site-nav__dropdown-toggle",navDropdownLabel:"More",navDropdownBreakpointLabel:"Menu",breakPoint:450})}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_4e471ddf.js","/")},{buffer:1,oMfpAn:4,"priority-nav":5}]},{},[6]);