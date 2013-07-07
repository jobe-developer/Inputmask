/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2013 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 2.2.64
*/
(function(b){void 0==b.fn.inputmask&&(b.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},escapeChar:"\\",mask:null,oncomplete:b.noop,onincomplete:b.noop,oncleared:b.noop,repeat:"*",greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:b.noop,onKeyDown:b.noop,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:b.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,radixPoint:"",skipRadixDance:!1,rightAlignNumerics:!0,
definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,
RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],getMaskLength:function(b,J,B,K){var C=b.length;J||("*"==B?C=K.length+1:1<B&&(C+=b.length*(B-1)));return C}},val:b.fn.val,escapeRegex:function(b){return b.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")}},b.fn.inputmask=function(H,J){function B(d,e){var a=c.aliases[d];return a?(a.alias&&B(a.alias),b.extend(!0,
c,a),b.extend(!0,c,e),!0):!1}function K(d){var e=!1,a=0,f=c.greedy,g=c.repeat;"*"==g&&(f=!1);1==d.length&&!1==f&&(c.placeholder="");for(var d=b.map(d.split(""),function(b){var g=[];if(b==c.escapeChar)e=true;else if(b!=c.optionalmarker.start&&b!=c.optionalmarker.end||e){var k=c.definitions[b];if(k&&!e)for(b=0;b<k.cardinality;b++)g.push(D(a+b));else{g.push(b);e=false}a=a+g.length;return g}}),k=d.slice(),l=1;l<g&&f;l++)k=k.concat(d.slice());return{mask:k,repeat:g,greedy:f}}function C(d){var e=!1,a=!1,
f=!1;return b.map(d.split(""),function(b){var k=[];if(b==c.escapeChar)a=!0;else if(b==c.optionalmarker.start&&!a)f=e=!0;else if(b==c.optionalmarker.end&&!a)e=!1,f=!0;else{var d=c.definitions[b];if(d&&!a){for(var o=d.prevalidator,p=o?o.length:0,q=1;q<d.cardinality;q++){var m=p>=q?o[q-1]:[],r=m.validator,m=m.cardinality;k.push({fn:r?"string"==typeof r?RegExp(r):new function(){this.test=r}:/./,cardinality:m?m:1,optionality:e,newBlockMarker:!0==e?f:!1,offset:0,casing:d.casing,def:d.definitionSymbol|b});
!0==e&&(f=!1)}k.push({fn:d.validator?"string"==typeof d.validator?RegExp(d.validator):new function(){this.test=d.validator}:/./,cardinality:d.cardinality,optionality:e,newBlockMarker:f,offset:0,casing:d.casing,def:d.definitionSymbol|b})}else k.push({fn:null,cardinality:0,optionality:e,newBlockMarker:f,offset:0,casing:null,def:b}),a=!1;f=!1;return k}})}function N(){function d(a){var b=a.length;for(i=0;i<b&&a.charAt(i)!=c.optionalmarker.start;i++);var e=[a.substring(0,i)];i<b&&e.push(a.substring(i+
1,b));return e}function e(g,k){var l=0,o=0,p=k.length;for(i=0;i<p&&!(k.charAt(i)==c.optionalmarker.start&&l++,k.charAt(i)==c.optionalmarker.end&&o++,0<l&&l==o);i++);l=[k.substring(0,i)];i<p&&l.push(k.substring(i+1,p));var q=d(l[0]);if(1<q.length){if(p=g+q[0]+(c.optionalmarker.start+q[1]+c.optionalmarker.end)+(1<l.length?l[1]:""),-1==b.inArray(p,f)&&(f.push(p),o=K(p),a.push({mask:p,_buffer:o.mask,buffer:o.mask.slice(),tests:C(p),lastValidPosition:void 0,greedy:o.greedy,repeat:o.repeat})),p=g+q[0]+
(1<l.length?l[1]:""),-1==b.inArray(p,f)&&(f.push(p),o=K(p),a.push({mask:p,_buffer:o.mask,buffer:o.mask.slice(),tests:C(p),lastValidPosition:void 0,greedy:o.greedy,repeat:o.repeat})),1<d(q[1]).length&&e(g+q[0],q[1]+l[1]),1<l.length&&1<d(l[1]).length)e(g+q[0]+(c.optionalmarker.start+q[1]+c.optionalmarker.end),l[1]),e(g+q[0],l[1])}else p=g+l,-1==b.inArray(p,f)&&(f.push(p),o=K(p),a.push({mask:p,_buffer:o.mask,buffer:o.mask.slice(),tests:C(p),lastValidPosition:void 0,greedy:o.greedy,repeat:o.repeat}))}
var a=[],f=[];b.isArray(c.mask)?b.each(c.mask,function(a,c){e("",c.toString())}):e("",c.mask.toString());return a}function D(b){return c.placeholder.charAt(b%c.placeholder.length)}function E(d,e){function a(){return d[e]}function f(){return a().tests}function g(){return a()._buffer}function k(){return a().buffer}function l(j,M,t,g){function w(a,b){for(var j=q(a),e=M?1:0,d="",g=b.buffer,k=b.tests[j].cardinality;k>e;k--)d+=y(g,j-(k-1));M&&(d+=M);return null!=b.tests[j].fn?b.tests[j].fn.test(d,g,a,t,
c):!1}if(t=!0===t){var f=w(j,a());!0===f&&(f={pos:j});return f}var l=[],f=!1,o=e;b.each(d,function(a){e=a;if(o!=e&&!p(j)){if(M==this._buffer[j]||M==c.skipOptionalPartCharacter)return l.push({activeMasksetIndex:a,result:{refresh:!0,c:this._buffer[j]}}),this.lastValidPosition=j,!1;this.lastValidPosition=g?m()+1:-1}if((void 0==this.lastValidPosition&&j==(g?F(m()):r(-1))||g||c.numericInput?this.lastValidPosition<=c.numericInput?m():r(j):this.lastValidPosition>=F(j))&&0<=j&&j<m()){f=w(j,this);if(!1!==
f){!0===f&&(f={pos:j});var b=f.pos||j;if(void 0==this.lastValidPosition||(g?c.greedy?this.lastValidPosition>b:b==k().length-1:this.lastValidPosition<b))this.lastValidPosition=b}l.push({activeMasksetIndex:a,result:f})}});e=o;return l}function o(j){var M=e,t={activeMasksetIndex:0,lastValidPosition:j?m()+1:-1};b.each(d,function(a){if(void 0!=this.lastValidPosition&&(j||c.numericInput?this.lastValidPosition<t.lastValidPosition:this.lastValidPosition>t.lastValidPosition))t.activeMasksetIndex=a,t.lastValidPosition=
this.lastValidPosition});e=t.activeMasksetIndex;M!=e&&(j?H(k(),0,F(t.lastValidPosition)):H(k(),r(t.lastValidPosition),m()),a().writeOutBuffer=!0)}function p(a){a=q(a);a=f()[a];return void 0!=a?a.fn:!1}function q(a){return a%f().length}function m(){return c.getMaskLength(g(),a().greedy,a().repeat,k(),c)}function r(a){var b=m();if(a>=b)return b;for(;++a<b&&!p(a););return a}function F(a){if(0>=a)return 0;for(;0<--a&&!p(a););return a}function u(a,b,c,e,d){e&&(b=I(a,b,d));e=f()[q(b)];d=c;if(void 0!=d)switch(e.casing){case "upper":d=
c.toUpperCase();break;case "lower":d=c.toLowerCase()}a[b]=d}function y(a,b,c){c&&(b=I(a,b));return a[b]}function I(a,b,c){if(c)for(;0>b&&a.length<m();){c=g().length-1;for(b=g().length;void 0!==g()[c];)a.unshift(g()[c--])}else for(;void 0==a[b]&&a.length<m();)for(c=0;void 0!==g()[c];)a.push(g()[c++]);return b}function B(a,b,c){a._valueSet(b.join(""));void 0!=c&&A(a,c)}function H(a,b,c){for(var e=m();b<c&&b<e;b++)u(a,b,y(g().slice(),b,!0))}function C(a,b){var c=q(b);u(a,b,y(g(),c))}function J(j,k,f,
l){var w=b(j).data("_inputmask").isRTL,l=void 0!=l?l.slice():K(j._valueGet(),w).split("");b.each(d,function(a,b){b.buffer=b._buffer.slice();b.lastValidPosition=void 0;b.p=w?m():0});!0!==f&&(e=0);k&&j._valueSet("");w&&!c.numericInput&&(l=l.reverse());var o=m();b.each(l,function(e,d){var m=w?c.numericInput?o:o-e:e;(f&&p(w?m-1:m)||d!=y(g().slice(),w?m-1:m,!0)&&-1==b.inArray(d,g().slice(a().lastValidPosition+1,a().p)))&&b(j).trigger("keypress",[!0,d.charCodeAt(0),k,f,m,w])});!0===f&&(a().lastValidPosition=
w?r(a().p):F(a().p))}function E(a){return b.inputmask.escapeRegex.call(this,a)}function K(a,b){return b?a.replace(RegExp("^("+E(g().join(""))+")*"),""):a.replace(RegExp("("+E(g().join(""))+")*$"),"")}function N(a){var c=k(),e=c.slice(),d,g;if(b(a).data("_inputmask").isRTL)for(g=0;g<=e.length-1;g++)if(d=q(g),f()[d].optionality)if(!p(g)||!l(g,c[g],!0))e.splice(0,1);else break;else break;else for(g=e.length-1;0<=g;g--)if(d=q(g),f()[d].optionality)if(!p(g)||!l(g,c[g],!0))e.pop();else break;else break;
B(a,e)}function S(a,c){return f()&&(!0===c||!a.hasClass("hasDatepicker"))?b.map(k(),function(a,b){return p(b)&&l(b,a,!0)?a:null}).join(""):a[0]._valueGet()}function A(a,e,d){var g=a.jquery&&0<a.length?a[0]:a;if("number"==typeof e)b(a).is(":visible")&&(d="number"==typeof d?d:e,!1==c.insertMode&&e==d&&d++,g.setSelectionRange?(g.selectionStart=e,g.selectionEnd=P?e:d):g.createTextRange&&(a=g.createTextRange(),a.collapse(!0),a.moveEnd("character",d),a.moveStart("character",e),a.select()));else{if(!b(a).is(":visible"))return{begin:0,
end:0};g.setSelectionRange?(e=g.selectionStart,d=g.selectionEnd):document.selection&&document.selection.createRange&&(a=document.selection.createRange(),e=0-a.duplicate().moveStart("character",-1E5),d=e+a.text.length);return{begin:e,end:d}}}function Q(a){var c=!1,k=0,f=e;b.each(d,function(b,d){e=b;var f=F(m());if(void 0!=d.lastValidPosition&&d.lastValidPosition>=k&&d.lastValidPosition==f){for(var l=!0,o=0;o<=f;o++){var r=p(o),u=q(o);if(r&&(void 0==a[o]||a[o]==D(o))||!r&&a[o]!=g()[u]){l=!1;break}}if(c=
c||l)return!1}k=d.lastValidPosition});e=f;return c}this.unmaskedvalue=function(a,b){return S(a,b)};this.isComplete=function(a){return Q(a)};this.mask=function(j){function E(a){a=b._data(a).events;b.each(a,function(a,c){b.each(c,function(a,b){if("inputmask"==b.namespace){var c=b.handler;b.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return c.apply(this,arguments)}}})})}function t(a){var c;Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(a,"value"));if(c&&
c.get)a._valueGet||(a._valueGet=c.get,a._valueSet=c.set,Object.defineProperty(a,"value",{get:function(){var a=b(this),c=b(this).data("_inputmask"),e=c.masksets,d=c.activeMasksetIndex;return c&&c.opts.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=e[d]._buffer.join("")?this._valueGet():""},set:function(a){this._valueSet(a);b(this).triggerHandler("setvalue.inputmask")}}));else if(document.__lookupGetter__&&a.__lookupGetter__("value"))a._valueGet||(a._valueGet=a.__lookupGetter__("value"),
a._valueSet=a.__lookupSetter__("value"),a.__defineGetter__("value",function(){var a=b(this),c=b(this).data("_inputmask"),e=c.masksets,d=c.activeMasksetIndex;return c&&c.opts.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=e[d]._buffer.join("")?this._valueGet():""}),a.__defineSetter__("value",function(a){this._valueSet(a);b(this).triggerHandler("setvalue.inputmask")}));else if(a._valueGet||(a._valueGet=function(){return this.value},a._valueSet=function(a){this.value=a}),!0!=b.fn.val.inputmaskpatch)b.fn.val=
function(){if(arguments.length==0){var a=b(this);if(a.data("_inputmask")){if(a.data("_inputmask").opts.autoUnmask)return a.inputmask("unmaskedvalue");var a=b.inputmask.val.apply(a),c=b(this).data("_inputmask");return a!=c.masksets[c.activeMasksetIndex]._buffer.join("")?a:""}return b.inputmask.val.apply(a)}var e=arguments;return this.each(function(){var a=b(this),c=b.inputmask.val.apply(a,e);a.data("_inputmask")&&a.triggerHandler("setvalue.inputmask");return c})},b.extend(b.fn.val,{inputmaskpatch:!0})}
function P(a,b){if(c.numericInput&&""!=c.radixPoint&&!1===c.skipRadixDance){var e=a._valueGet().indexOf(c.radixPoint);n=b.begin<=e||b.end<=e||-1==e}}function w(c,b,e){for(var d=k();!p(c)&&0<=c-1;)c--;for(var h=c;h<b&&h<m();h++)if(p(h)){C(d,h);var j=r(h),o=y(d,j);if(o!=D(j))if(j<m()&&!1!==l(h,o,!0,n)&&f()[q(h)].def==f()[q(j)].def)u(d,h,y(d,j),!0,n),j<b&&C(d,j);else if(p(h))break}else C(d,h);void 0!=e&&u(d,n?b:F(b),e);if(!1==a().greedy){b=K(d.join(""),n).split("");d.length=b.length;h=0;for(e=d.length;h<
e;h++)d[h]=b[h];0==d.length&&(a().buffer=g().slice())}return c}function O(c,b,e,d){for(var h=k();c<=b&&c<m();c++)if(p(c)){var j=y(h,c,!0);u(h,c,e,!0,n);if(j!=D(c))if(e=r(c),e<m())if(!1!==l(e,j,!0,n)&&f()[q(c)].def==f()[q(e)].def)e=j;else if(p(e))break;else e=j;else break;else if(e=j,!0!==d)break}else C(h,c);d=h.length;if(!1==a().greedy){e=K(h.join(""),n).split("");h.length=e.length;c=0;for(j=h.length;c<j;c++)h[c]=e[c];0==h.length&&(a().buffer=g().slice())}return b-(d-h.length)}function S(j){R=!1;
var f=this,G=j.keyCode,s=A(f);P(f,s);if(G==c.keyCode.BACKSPACE||G==c.keyCode.DELETE||Y&&127==G||j.ctrlKey&&88==G){j.preventDefault();var h=s.begin;if(0==s.begin&&s.end==m())H(k(),s.begin,s.end),b.each(d,function(a,c){c.buffer=c._buffer.slice();c.lastValidPosition=void 0;c.p=n?m():0});else if(1<s.end-s.begin||1==s.end-s.begin&&c.insertMode){H(k(),s.begin,s.end);var l=m();if(!1==c.greedy)n?O(0,s.end-1,D(s.end),!0):w(s.begin,l);else for(var q=s.begin;q<s.end;q++)p(q)&&(n?O(0,s.end-1,D(s.end),!0):w(s.begin,
l));J(f,!1,!0,k())}else b.each(d,function(b){e=b;h=V?s.end:s.begin;var b=k(),d=n?F(m()+1):r(-1),j=m();if(G==c.keyCode.DELETE){if(n?h>d:h<d)h=d;if(h<j&&(c.numericInput&&""!=c.radixPoint&&b[h]==c.radixPoint?(h=b.length-1==h?h:r(h),h=w(h,j)):n?(h=O(0,h,D(h),!0),h=r(h)):h=w(h,j),void 0!=a().lastValidPosition))-1!=a().lastValidPosition&&k()[a().lastValidPosition]==g()[a().lastValidPosition]&&(a().lastValidPosition=n?r(a().lastValidPosition):0==a().lastValidPosition?-1:F(a().lastValidPosition)),(n?a().lastValidPosition>
d:a().lastValidPosition<d)?(a().lastValidPosition=void 0,a().p=d):(a().writeOutBuffer=!0,a().p=h)}else if(G==c.keyCode.BACKSPACE)if(n?h<=d:h>d){if(h-=1,c.numericInput&&""!=c.radixPoint&&b[h]==c.radixPoint?(h=O(0,b.length-1==h?h:h-1,D(h),!0),h++):n?(h=O(0,h,D(h),!0),h=b[h+1]==c.radixPoint?h+1:r(h)):h=w(h,j),void 0!=a().lastValidPosition)-1!=a().lastValidPosition&&k()[a().lastValidPosition]==g()[a().lastValidPosition]&&(a().lastValidPosition=n?r(a().lastValidPosition):0==a().lastValidPosition?-1:F(a().lastValidPosition)),
(n?a().lastValidPosition>d:a().lastValidPosition<d)?(a().lastValidPosition=void 0,a().p=d):(a().writeOutBuffer=!0,a().p=h)}else 0<e&&(a().lastValidPosition=void 0,a().writeOutBuffer=!0,a().p=d,e=0,a().buffer=g().slice(),a().p=n?F(m()+1):r(-1),a().lastValidPosition=void 0)});o(n);B(f,k(),a().p);f._valueGet()==g().join("")&&b(f).trigger("cleared");c.showTooltip&&v.prop("title",a().mask)}else G==c.keyCode.END||G==c.keyCode.PAGE_DOWN?setTimeout(function(){var b=n?a().lastValidPosition:r(a().lastValidPosition);
!c.insertMode&&(b==m()&&!j.shiftKey)&&b--;A(f,j.shiftKey?s.begin:b,b)},0):G==c.keyCode.HOME&&!j.shiftKey||G==c.keyCode.PAGE_UP?A(f,0,j.shiftKey?s.begin:0):G==c.keyCode.ESCAPE?(f._valueSet(a().undoBuffer),J(f,!0,!0)):G==c.keyCode.INSERT&&!j.shiftKey&&!j.ctrlKey?(c.insertMode=!c.insertMode,A(f,!c.insertMode&&s.begin==m()?s.begin-1:s.begin)):!1==c.insertMode&&!j.shiftKey&&(G==c.keyCode.RIGHT?setTimeout(function(){var a=A(f);A(f,a.begin)},0):G==c.keyCode.LEFT&&setTimeout(function(){var a=A(f);A(f,a.begin-
1)},0));c.onKeyDown.call(this,j,k(),c);T=-1!=b.inArray(G,c.ignorables)}function X(g,j,f,s,h,q,v){n=void 0==v?n:v;if(void 0==f&&R)return!1;R=!0;var C=b(this),g=g||window.event,f=f||g.which||g.charCode||g.keyCode,t=String.fromCharCode(f);c.numericInput&&(t==c.radixPoint&&!0!==j)&&(v=this._valueGet().indexOf(c.radixPoint),A(this,r(-1!=v?v:m())));if((g.ctrlKey||g.metaKey||T)&&!0!==j)return!0;if(f){var z,E;j?(f=h?q:c.numericInput?r(a().p):a().p,z={begin:f,end:f}):z=A(this);var K=1<z.end-z.begin||1==z.end-
z.begin&&c.insertMode;if(K){var f=e,L=!1;b.each(d,function(b){e=b;a().undoBuffer=k().join("");b=z.end<m()?z.end:m();H(k(),z.begin,b);var d=m();if(c.greedy==false)n?O(0,b-1,D(b),true):w(z.begin,d);else for(var f=z.begin;f<b;f++)p(f)&&(n?O(0,b-1,D(b-1),true):w(z.begin,d));a().lastValidPosition>z.begin&&a().lastValidPosition<b?a().lastValidPosition=n?b:z.begin:L=true});!0===L&&(e=f,J(this,!1,!0,k()),c.insertMode||b.each(d,function(b){e=b;n?w(0,posend):O(z.begin,m(),D(z.begin),true);a().lastValidPosition=
n?F(a().lastValidPosition):r(a().lastValidPosition)}));e=f}if(n){var x=F(z.end),f=l(x,t,h,n);!0===h&&(f=[{activeMasksetIndex:e,result:f}]);b.each(f,function(b,d){e=d.activeMasksetIndex;a().writeOutBuffer=true;var f=d.result;if(f!==false){var g=false,h=k();if(f!==true){g=f.refresh;x=f.pos!=void 0?f.pos:x;t=f.c!=void 0?f.c:t}if(g!==true){var g=m(),j=r(-1),f=j;if(c.insertMode==true){if(a().greedy==true)for(var l=h.slice();y(l,f,true)!=D(f)&&f<=x;)f=f==g?g+1:r(f);if(f<=x&&(a().greedy||h.length<g||y(h,
x)==D(x))){if(h[j]!=D(j)&&h.length<g){h=I(h,-1,n);if((K?z.begin:z.end)!=0)x=x+h}w(f,x,t)}else a().writeOutBuffer=false}else u(h,x,t,true,n)}a().p=x}})}else x=r(z.begin-1),f=l(x,t,h,n),!0===h&&(f=[{activeMasksetIndex:e,result:f}]),b.each(f,function(b,d){e=d.activeMasksetIndex;a().writeOutBuffer=true;var f=d.result;if(f!==false){var h=false,g=k();if(f!==true){h=f.refresh;x=f.pos!=void 0?f.pos:x;t=f.c!=void 0?f.c:t}if(h!==true)if(c.insertMode==true){f=m();for(h=g.slice();y(h,f,true)!=D(f)&&f>=x;)f=f==
0?-1:F(f);f>=x?O(x,g.length,t):a().writeOutBuffer=false}else u(g,x,t,true,n);a().p=r(x)}});!0!==h&&o(n);if(!1!==s&&(b.each(f,function(a,b){if(b.activeMasksetIndex==e){E=b;return false}}),void 0!=E)){var N=this;setTimeout(function(){c.onKeyValidation.call(N,E.result,c)},0);if(a().writeOutBuffer&&!1!==E.result){var M=k();B(this,M,j?void 0:c.numericInput?r(a().p):a().p);setTimeout(function(){Q(M)&&C.trigger("complete")},0)}else K&&(a().buffer=a().undoBuffer.split(""))}c.showTooltip&&C.prop("title",a().mask);
g.preventDefault()}}function W(d){var e=b(this),f=d.keyCode,j=k();c.onKeyUp.call(this,d,j,c);f==c.keyCode.TAB&&(e.hasClass("focus.inputmask")&&0==this._valueGet().length&&c.showMaskOnFocus)&&(j=g().slice(),B(this,j),n||A(this,0),a().undoBuffer=this._valueGet())}var v=b(j);if(v.is(":input")){v.data("_inputmask",{masksets:d,activeMasksetIndex:e,opts:c,isRTL:!1});c.showTooltip&&v.prop("title",a().mask);a().greedy=a().greedy?a().greedy:0==a().repeat;var L=v.prop("maxLength");m()>L&&-1<L&&(L<g().length&&
(g().length=L),!1==a().greedy&&(a().repeat=Math.round(L/g().length)),v.prop("maxLength",2*m()));t(j);a().undoBuffer=j._valueGet();var R=!1,T=!1,n=!1;if("rtl"==j.dir||c.numericInput)("rtl"==j.dir||c.numericInput&&c.rightAlignNumerics)&&v.css("text-align","right"),j.dir="ltr",v.removeAttr("dir"),L=v.data("_inputmask"),L.isRTL=!0,v.data("_inputmask",L),n=!0;v.unbind(".inputmask");v.removeClass("focus.inputmask");v.closest("form").bind("submit",function(){v[0]._valueGet()!=a().undoBuffer&&v.change()});
v.bind("mouseenter.inputmask",function(){!b(this).hasClass("focus.inputmask")&&c.showMaskOnHover&&this._valueGet()!=k().join("")&&B(this,k())}).bind("blur.inputmask",function(){var f=b(this),j=this._valueGet(),l=k();f.removeClass("focus.inputmask");j!=a().undoBuffer&&f.change();c.clearMaskOnLostFocus&&j!=""&&(j==g().join("")?this._valueSet(""):N(this));if(!Q(l)){f.trigger("incomplete");if(c.clearIncomplete){b.each(d,function(a,b){b.buffer=b._buffer.slice();b.lastValidPosition=void 0;b.p=n?m():0});
e=0;if(c.clearMaskOnLostFocus)this._valueSet("");else{l=g().slice();B(this,l)}}}}).bind("focus.inputmask",function(){var d=b(this),e=this._valueGet();c.showMaskOnFocus&&!d.hasClass("focus.inputmask")&&(!c.showMaskOnHover||c.showMaskOnHover&&e=="")&&this._valueGet()!=k().join("")&&B(this,k(),a().p);d.addClass("focus.inputmask");a().undoBuffer=this._valueGet()}).bind("mouseleave.inputmask",function(){var a=b(this);c.clearMaskOnLostFocus&&(a.hasClass("focus.inputmask")||(this._valueGet()==g().join("")||
this._valueGet()==""?this._valueSet(""):N(this)))}).bind("click.inputmask",function(){var d=this;setTimeout(function(){var e=A(d),f=k();if(e.begin==e.end){var g=e.begin,h=a().lastValidPosition;P(d,e);if(n){e=c.numericInput?c.skipRadixDance===false&&c.radixPoint!=""&&b.inArray(c.radixPoint,f)!=-1?b.inArray(c.radixPoint,f):m():F((h==void 0?m():h)+1);A(d,g>e&&(l(g,f[g],true,n)!==false||!p(g))?g:e)}else{e=r(h==void 0?-1:h);A(d,g<e&&(l(g,f[g],true,n)!==false||!p(g))?g:e)}}},0)}).bind("dblclick.inputmask",
function(){var b=this;a().lastValidPosition!=void 0&&setTimeout(function(){n?A(b,F(a().lastValidPosition),m()):A(b,0,r(a().lastValidPosition))},0)}).bind("keydown.inputmask",S).bind("keypress.inputmask",X).bind("keyup.inputmask",W).bind(Z+".inputmask dragdrop.inputmask drop.inputmask",function(){var a=this,c=b(a);setTimeout(function(){J(a,true,false);Q(k())&&c.trigger("complete");c.click()},0)}).bind("setvalue.inputmask",function(){a().undoBuffer=this._valueGet();J(this,true);this._valueGet()==g().join("")&&
this._valueSet("")}).bind("complete.inputmask",c.oncomplete).bind("incomplete.inputmask",c.onincomplete).bind("cleared.inputmask",c.oncleared);J(j,!0,!1);var U;try{U=document.activeElement}catch($){}U===j?(v.addClass("focus.inputmask"),A(j,a().p)):c.clearMaskOnLostFocus&&(k().join("")==g().join("")?j._valueSet(""):N(j));E(j)}};return this}var c=b.extend(!0,{},b.inputmask.defaults,J),y=null!==navigator.userAgent.match(/msie 10/i),Y=null!==navigator.userAgent.match(/iphone/i),P=null!==navigator.userAgent.match(/android.*safari.*/i),
Z=function(b){var c=document.createElement("input"),b="on"+b,a=b in c;a||(c.setAttribute(b,"return;"),a="function"==typeof c[b]);return a}("paste")&&!y?"paste":"input",V,u,I=0;P&&(y=navigator.userAgent.match(/safari.*/i),V=537>=parseInt(RegExp(/[0-9]+/).exec(y)));if("string"===typeof H)switch(H){case "mask":return B(c.alias,J),u=N(),this.each(function(){E(b.extend(true,{},u),0).mask(this)});case "unmaskedvalue":return y=b(this),y.data("_inputmask")?(u=y.data("_inputmask").masksets,I=y.data("_inputmask").activeMasksetIndex,
c=y.data("_inputmask").opts,E(u,I).unmaskedvalue(y)):y.val();case "remove":return this.each(function(){var d=b(this),e=this;setTimeout(function(){if(d.data("_inputmask")){u=d.data("_inputmask").masksets;I=d.data("_inputmask").activeMasksetIndex;c=d.data("_inputmask").opts;e._valueSet(E(u,I).unmaskedvalue(d,true));d.removeData("_inputmask");d.unbind(".inputmask");d.removeClass("focus.inputmask");var a;Object.getOwnPropertyDescriptor&&(a=Object.getOwnPropertyDescriptor(e,"value"));if(a&&a.get)e._valueGet&&
Object.defineProperty(e,"value",{get:e._valueGet,set:e._valueSet});else if(document.__lookupGetter__&&e.__lookupGetter__("value")&&e._valueGet){e.__defineGetter__("value",e._valueGet);e.__defineSetter__("value",e._valueSet)}delete e._valueGet;delete e._valueSet}},0)});case "getemptymask":return this.data("_inputmask")?(u=this.data("_inputmask").masksets,I=this.data("_inputmask").activeMasksetIndex,u[I]._buffer.join("")):"";case "hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask").opts.autoUnmask:
!1;case "isComplete":return u=this.data("_inputmask").masksets,I=this.data("_inputmask").activeMasksetIndex,c=this.data("_inputmask").opts,E(u,I).isComplete(this[0]._valueGet().split(""));default:return B(H,J)||(c.mask=H),u=N(),this.each(function(){E(b.extend(true,{},u),I).mask(this)})}else{if("object"==typeof H)return c=b.extend(!0,{},b.inputmask.defaults,H),B(c.alias,H),u=N(),this.each(function(){E(b.extend(true,{},u),I).mask(this)});if(void 0==H)return this.each(function(){var d=b(this).attr("data-inputmask");
if(d&&d!="")try{var d=d.replace(RegExp("'","g"),'"'),e=b.parseJSON("{"+d+"}");b.extend(true,e,J);c=b.extend(true,{},b.inputmask.defaults,e);B(c.alias,e);c.alias=void 0;b(this).inputmask(c)}catch(a){}})}return this})})(jQuery);
