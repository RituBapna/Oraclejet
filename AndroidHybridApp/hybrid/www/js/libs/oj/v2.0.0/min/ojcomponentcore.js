/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","jqueryui-amd/core","jqueryui-amd/widget","ojs/ojmessaging"],function(b,f){function a(a,b){function c(){var a=f(this),d=a.data(k);if(null!=d)for(var e=0;e<d.length;e++){var g=a.data("oj-"+d[e]);null!=g&&b(g)}}var d=f(a);d.hasClass(l)&&c.call(a);d.find("."+l).each(c)}function d(a){this.CN=function(){return a}}function c(a,b,c,d,g,f,h){var k=c,m=!1,p={};delete d[g];Object.defineProperty(d,g,{get:function(){if(m||null!=a.$t)return k;var c=f(h?h():g);return e([b,c,k],p)},
set:function(b){k=b;null!=a.$t?p[a.$t]=!0:m=!0},enumerable:!0})}function e(a,b){for(var c=void 0,d=0;d<a.length;d++){var e=a[d];void 0!==e&&(c=f.isPlainObject(e)?g(f.isPlainObject(c)?[c,e]:[e],d==a.length-1?null:b,null):e)}return c}function g(a,b,c){for(var d={},e=a.length,h=0;h<e;h++)for(var k=a[h],m=Object.keys(k),p=0;p<m.length;p++){var n=m[p],l=null==b?null:null==c?n:c+"."+n;if(null==b||!b[l]){var I=k[n];void 0!==I&&(d[n]=f.isPlainObject(I)?g(f.isPlainObject(d[n])?[d[n],I]:[I],b,l):I)}}return d}
function h(){return!0}b.Components={};o_("Components",b.Components,b);b.Components.Km=function(a){b.Components.JU=f.widget.extend(b.Components.JU||{},a)};o_("Components.setDefaultOptions",b.Components.Km,b);b.Components.L2=function(){return b.Components.JU||{}};o_("Components.getDefaultOptions",b.Components.L2,b);b.Components.lh=function(a){return new d(a)};o_("Components.createDynamicPropertyGetter",b.Components.lh,b);b.Components.Nf=function(a,b){var c=f(a),d=c.data(k);return d&&(null==b?b=d[0]:
0>d.indexOf(b)&&(b=void 0),null!=b&&(d=c[b],"function"===typeof d))?d.bind(c):null};o_("Components.getWidgetConstructor",b.Components.Nf,b);b.Components.Qf=function(c){b.v.u2(c);a(c,function(a){a.pn()})};o_("Components.subtreeAttached",b.Components.Qf,b);b.Components.Hg=function(b){a(b,function(a){a.li()})};o_("Components.subtreeDetached",b.Components.Hg,b);b.Components.Nm=function(c){b.v.u2(c);a(c,function(a){a.tl()})};o_("Components.subtreeShown",b.Components.Nm,b);b.Components.dp=function(b){a(b,
function(a){a.sl()})};o_("Components.subtreeHidden",b.Components.dp,b);b.Components.$N=function(a){var b=a.data(k);return f.isArray(b)&&-1<b.indexOf("ojPopup")&&a.is("."+l)?!0:!1};b.Components.qn="data-oj-container";var k="oj-component-names",l="oj-component-initnode";f.widget("oj.baseComponent",{options:{contextMenu:null,rootAttributes:null,optionChange:void 0,destroy:void 0},refresh:function(){this.Ut=null},_createWidget:function(a,b){this.pZ=this.options||{};this.eU=a||{};this._super(a,b);this.EQ()},
iA:function(){var a=this.options.rootAttributes;if(a){var b=this.widget();if(null!=b){var c=a["class"];c&&b.addClass(c);if(c=a.style){var d=b.attr("style");d?b.attr("style",d+";"+c):b.attr("style",c)}a=f.extend({},a);delete a["class"];delete a.style;b.attr(a);delete a.id;a=Object.keys(a);if(a.length)throw Error("Unsupported values passed to rootAttributes option: "+a.toString());}}},_create:function(){this.Lv(this.element);this.Xd(this.pZ,this.eU);delete this.pZ;delete this.eU;this._ComponentCreate();
this.lf();this.element.addClass(l)},Xd:function(a,b){this.jla(a,b);this.lga(b)},_ComponentCreate:function(){var a=this.element,b=this.widgetName,c=a.data(k);c||(c=[],a.data(k,c));0>c.indexOf(b)&&c.push(b)},lf:function(){this.iA();this.Gi=this.eventNamespace+"contextMenu";this.m0(!0)},EQ:f.noop,Lv:function(){},y9:function(a){var b=this;this.DL=[];f.each(a,function(a,c){var d={},e=c.attributes;b.DL.push({element:c,attributes:d});f.each(e,function(a,b){var e=b.name;d[e]={attr:b.value,prop:f(c).prop(e)}})})},
mR:function(a){var b=this.DL;if(void 0===b)return null;a=a[0];for(var c=0,d=b.length;c<d;c++){var e=b[c];if(e.element===a)return e.attributes}return{}},As:function(){},e9:function(){f.each(this.DL,function(a,b){var c=f(b.element),d=b.attributes;if(1===c.length){for(var e=b.element.attributes,g=[],h=0,k=e.length;h<k;h++)e[h].name in d||g.push(e[h].name);h=0;for(k=g.length;h<k;h++)c.removeAttr(g[h]);for(var m in d)c.attr(m,d[m].attr)}})},Nz:function(){return this.widgetFullName},Av:function(a,b,c){return b==
c},A:function(a,c){var d={},e;2<arguments.length?d=Array.prototype.slice.call(arguments,1):2==arguments.length&&(d=arguments[1],"object"===typeof d||d instanceof Array||(d=[d]));e=this.option(n+a);return null==e?a:b.ha.Lb(e.toString(),d)},getNodeBySubId:function(a){return null==a||null==a.subId?this.element?this.element[0]:null:null},getSubIdByNode:function(){return null},destroy:function(){this._trigger("destroy");this._super();this.d_();this.element.removeClass(l);this.widget().removeClass("oj-disabled");
this.tL(this.element);var a=this.element,b=this.widgetName,c=a.data(k);c&&(b=c.indexOf(b),0<=b&&(c.splice(b,1),0===c.length&&a.removeData(k)));this.As();this.VX?this.element.attr("contextmenu",this.VX):this.element.removeAttr("contextmenu");this.Ut=null},option:function(a,b){if(0===arguments.length)return f.widget.extend({},this.options);var c=arguments[0],d=c,e=null,g={};if("string"===typeof c){var d={},h=c.split("."),c=h.shift();if(h.length){var e=h.join("."),k;try{1<arguments.length&&(this.$t=
e),k=d[c]=f.widget.extend({},this.options[c])}finally{this.$t=null}for(c=0;c<h.length-1;c++)k[h[c]]=k[h[c]]||{},k=k[h[c]];c=h.pop();if(1===arguments.length)return void 0===k[c]?null:k[c];k[c]=b}else{if(1===arguments.length)return void 0===this.options[c]?null:this.options[c];d[c]=b}g=arguments[2]||g}else g=arguments[1]||g;null!=e&&(g=f.widget.extend({},g,{subkey:e}));(e=g?g._context:null)&&e.Va?this.Jga(d,g):this._setOptions(d,g);return this},Jga:function(a,b){for(var c in a){var d=a[c],e=this.options[c];
this.options[c]=d;this.nZ(c,d,e,b)}},_setOptions:function(a,b){for(var c in a)this._setOption(c,a[c],b);return this},_setOption:function(a,b,c){var d=this.options[a];if("disabled"===a)this.options[a]=b,this.widget().toggleClass("oj-disabled",!!b).attr("aria-disabled",b),b&&this.tL(this.widget());else{try{var e=null==c?null:c.subkey;null!=e&&(this.$t=e);this._super(a,b)}finally{this.$t=null}"contextMenu"===a&&this.m0(!1)}this.nZ(a,b,d,c);return this},nZ:function(a,b,c,d){var e=!1,g=null,h=!1,k=null,
m=null,p;d&&(e=d.changed,g=d._context)&&(k=g.originalEvent,h=void 0===g.Hc?null!=k:g.Hc,m=g.xr,p=g.Gj);if(e||!this.Av(a,c,b))m=m||{},m.writeback=h?"shouldWrite":"shouldNotWrite",a={option:a,previousValue:c,value:b,optionMetadata:m},null!=p&&(a=f.extend({},p,a)),this._trigger("optionChange",k,a)},_trigger:function(a,b,c){return this.yM(a,b,c).proceed},yM:function(a,b,c){var d=this.options[a];c=c||{};b=f.Event(b,p);b.type=(this.widgetEventPrefix+a).toLowerCase();b.target=this.element[0];this.element.trigger(b,
c);return{proceed:!(f.isFunction(d)&&!1===d.apply(this.element[0],[b].concat(c))||b.isDefaultPrevented()),event:b}},lga:function(a){var b=this.element.attr("contextmenu");this.VX=b;!b||"contextMenu"in a||this.option("contextMenu","#"+b,{_context:{Va:!0}})},m0:function(a){this.d_();if(this.options.contextMenu){var c=this.widget(),d=this.element;a&&!d.is(c)&&d.removeAttr("contextmenu");(a=f(this.options.contextMenu).attr("id"))&&c.attr("contextmenu",a);var e=this;this.vZ=function(a){121==a.which&&a.shiftKey&&
e.TV().is(":visible")&&a.preventDefault()};var g=!1,h=!1,k,m,p,n=null,l=function(a,b,d){g=d;var f=e.SI();if(g)c.one("touchend"+e.Gi,function(){f.Gs(!0);setTimeout(function(){f.Gs(!1)},50)});"touchstart"===n&&"contextmenu"===a.type||"contextmenu"===n&&"touchstart"===a.type?(n=null,clearTimeout(p)):a.isDefaultPrevented()||a.originalEvent&&a.originalEvent.defaultPrevented||e.Yd()||(e.pf(f,a,b),!e.TV().is(":visible")||(a.preventDefault(),document.addEventListener("keyup",e.vZ),"touchstart"!==a.type&&
"contextmenu"!==a.type))||(n=a.type,p=setTimeout(function(){n=null},300))};this.UT=function(a){g&&(a.preventDefault(),a.stopPropagation(),g=!1)};c[0].addEventListener("click",this.UT,!0);c.on("touchstart"+this.Gi+" mousedown"+this.Gi+" keydown"+this.Gi+" ",function(a){if("mousedown"!==a.type||!e.SI().Gs()){g=!1;if("touchstart"===a.type&&1===a.originalEvent.touches.length){var b=a.originalEvent.touches[0];k=b.pageX;m=b.pageY;h=!0;this.RH=setTimeout(l.bind(void 0,a,"touch",!0),750)}return!0}}).on("touchmove"+
this.Gi,function(a){a=a.originalEvent.touches[0];if(5<Math.abs(k-a.pageX)||5<Math.abs(m-a.pageY))h=!1,clearTimeout(this.RH);return!0}).on("touchend"+this.Gi+" touchcancel"+this.Gi,function(){h=!1;clearTimeout(this.RH);return!0}).on("keydown"+this.Gi+" contextmenu"+this.Gi,function(a){("contextmenu"===a.type||121==a.which&&a.shiftKey)&&l(a,h?"touch":"keydown"===a.type?"keyboard":"mouse",!1);return!0}).addClass(b.v.Rd()?"oj-menu-context-menu-launcher":void 0)}},U_:function(){this.Xp=f(this.options.contextMenu).first();
this.QA=this.Xp.data("oj-ojMenu");if(!this.QA)throw Error('"contextMenu" option set to "'+this.options.contextMenu+'", which does not reference a valid JET Menu.');var a=this;this.Xp.on("ojclose"+this.Gi,function(){document.removeEventListener("keyup",a.vZ)})},SI:function(){this.QA||this.U_();return this.QA},TV:function(){this.Xp||this.U_();return this.Xp},d_:function(){this.widget().removeAttr("contextmenu").off(this.Gi).removeClass("oj-menu-context-menu-launcher")[0].removeEventListener("click",
this.UT,!0);this.Xp&&this.Xp.off(this.Gi);clearTimeout(this.RH);this.Xp=this.QA=void 0},pf:function(a,b,c){this.rf(b,c)},rf:function(a,b,c,d,e){b={launcher:this.element,position:{mouse:{my:"start top",at:"start bottom",of:a,collision:"flipfit"},touch:{my:"start\x3e40 center",at:"start bottom",of:a,collision:"flipfit"},keyboard:{my:"start top",at:"start bottom",of:"launcher",collision:"flipfit"}}[b]};var g={initialFocus:"menu"};c=e?f.extend(b,c,g):f.extend(!0,b,c,g);e=this.SI();e.qA=!0;e.open(a,c,
d);e.qA=!1},tL:function(a){a.removeClass("oj-hover oj-focus oj-active");a.find(".oj-hover").removeClass("oj-hover");a.find(".oj-focus").removeClass("oj-focus");a.find(".oj-active").removeClass("oj-active")},_hoverable:function(a){this._on(a,{mouseenter:function(a){f(a.currentTarget).hasClass("oj-disabled")||f(a.currentTarget).addClass("oj-hover")},mouseleave:function(a){f(a.currentTarget).removeClass("oj-hover")}})},_focusable:function(a){this._on(a,{focusin:function(a){f(a.currentTarget).addClass("oj-focus")},
focusout:function(a){f(a.currentTarget).removeClass("oj-focus")}})},Op:function(a){this._on(a,{mousedown:function(a){f(a.currentTarget).addClass("oj-active")},mouseup:function(a){f(a.currentTarget).removeClass("oj-active")}})},Kp:function(a){if(a){f(a).off(this.eventNamespace);var b=this.bindings;b&&(this.bindings=f(b.not(a)))}},c3:function(a){return this.option(n+a)},dc:function(){return b.v.qm()},pn:function(){this.Ut=null},li:function(){this.Ut=null;this.tL(this.widget())},tl:function(){},sl:function(){},
Yd:function(){return this.options.disabled||this.$S?!0:!1},Rv:function(a){this.$S=a},vea:function(){var a=[],c=this,d=0;this.g1(function(e){e=0==d?c.Nz():e.widgetFullName;d++;var g=b.ha.fE(e);null==g||f.isEmptyObject(g)||a.push(e)});var e=a.length;return 0<e?function(){if(1==e)return b.ha.fE(a[0]);for(var c={},d=e-1;0<=d;d--)f.widget.extend(c,b.ha.fE(a[d]));return c}:null},qda:function(){if(!this.Ut){var a={};this.Ut=a;for(var c=this.element[0],d=c,e=[];d;){var g=d.getAttribute,g=g?g.call(d,b.Components.qn):
null;null!=g&&e.push(g);d=d.parentNode}a.containers=e;a.element=c}return this.Ut},jla:function(a,b){var d=this.options,e=this.vea(),g=b[m];null==e||void 0!==g&&!f.isPlainObject(g)||c(this,void 0,b[m],d,m,e);this.wha(a,b)},wha:function(a,g){var h=this.options,k={},m=[];this.g1(function(a){m.push(a.widgetName)});var p=b.Components.L2();m.push("default");for(var n=m.length-1;0<=n;n--){var l=p[m[n]];void 0!==l&&(k=f.widget.extend(k,l))}if(!f.isEmptyObject(k)){var y=this,p=function(){return y.qda()},B;
for(B in k)if(n=g[B],void 0===n||f.isPlainObject(n))l=k[B],null!=l&&l instanceof d?(l=l.CN(),f.isFunction(l)?c(this,a[B],n,h,B,l,p):b.r.error("Dynamic getter for property %s is not a function",B)):h[B]=e([a[B],l,n])}},g1:function(a){for(var b=this.constructor.prototype;null!=b&&"oj"===b.namespace;)a(b),b=Object.getPrototypeOf(b)}});delete f.fn.baseComponent;b.ya=function(a,b,c,d){f.widget(a,b,c);d&&delete f.fn[a.split(".")[1]];if("oj.oj"===a.substring(0,5)||"oj._oj"===a.substring(0,6)){b=a.split(".");
a=b[0];b=b[1];var e=a+"-"+b;f.expr[":"][("_"===b.substring(0,1)?"_"+a+"-"+b.substring(3):a+"-"+b.substring(2)).toLowerCase()]=function(a){return!!f.data(a,e)}}};var m="translations",n=m+".",p={preventDefault:function(){this.isDefaultPrevented=h},stopPropagation:function(){this.isPropagationStopped=h},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=h}};f(document).ready(function(){var a=f("\x3cdiv style\x3d'border: 1px solid;border-color:red green;position: absolute;top: -999px;background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs\x3d);'\x3e\x3c/div\x3e"),
b;a.appendTo("body");b=a.css("backgroundImage");a.css("borderTopColor")!=a.css("borderRightColor")&&(null==b||"none"!=b&&"url (invalid-url:)"!=b)||f("body").addClass("oj-hicontrast");a.remove()});f(document).ready(function(){"Microsoft Internet Explorer"==navigator.appName&&f("html").addClass("oj-slow-borderradius oj-slow-cssgradients oj-slow-boxshadow")});b.v={};b.v.U7="\x3chtml\x3e";b.v.T7="\x3c/html\x3e";b.v.n8={SPAN:1,B:1,I:1,EM:1,BR:1,HR:1,LI:1,OL:1,UL:1,P:1,TT:1,BIG:1,SMALL:1,PRE:1};b.v.m8=
{"class":1,style:1};b.v.Zoa=function(a){return 0===a.indexOf(b.v.U7)&&a.lastIndexOf(b.v.T7)===a.length-7?!0:!1};b.v.$ma=function(a){var c=f(document.createElement("span")).get(0);(c.innerHTML=a)&&0<=a.indexOf("\x3c")&&b.v.JT(c);return c};b.v.JT=function(a){for(var c=a.childNodes,d,e,g,h,k,m=c.length-1;0<=m;){if((d=c.item(m))&&1===d.nodeType)if(b.v.n8[d.nodeName]){e=d.attributes;for(k=e.length-1;0<=k;k--)g=e[k],(h=void 0!==f(d).attr(g.name))&&(b.v.m8[g.name]||d.removeAttribute(g.nodeName));b.v.JT(d)}else d&&
a.removeChild(d);m--}};b.v.Wk=function(a,b){for(var c=b.parentNode;c;){if(c==a)return!0;c=c.parentNode}return!1};b.v.No=function(a,c){return c==a?!0:b.v.Wk(a,c)};b.v.Nh=function(a,c,d){var e=f(a),g=e.data(b.v.Jv);null==g&&(g=new b.v.d9(a),e.data(b.v.Jv,g),g.start());g.addListener(c,d)};b.v.Pi=function(a,c){var d=f(a),e=d.data(b.v.Jv);null!=e&&(e.removeListener(c),e.oh()&&(e.stop(),d.removeData(b.v.Jv)))};b.v.u2=function(a){f(a).find(".oj-helper-detect-expansion").parent().each(function(a,c){var d=
f(c).data(b.v.Jv);null!=d&&d.vm(!0)})};b.v.wm=function(a){var c=b.Ma.wy();return b.Ma.Yi.bQ===c.os?a.metaKey:a.ctrlKey};b.v.Kga=(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(a){return window.setTimeout(a,0)}).bind(window);b.v.ET=(window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||function(a){return window.clearTimeout(a)}).bind(window);b.v.d9=function(a){function c(a){var b=!1;if(null!=A.offsetParent){var e=
A.offsetWidth,g=A.offsetHeight;if(F!==e||D!==g)l=n,h(e,g),b=!0,a&&d(!0)}return b}function d(c){var e=a.offsetWidth,g=a.offsetHeight;k.has()&&(c?(null!==I&&b.v.ET(I),I=b.v.Kga(function(){I=null;k.fire(e,g)})):k.fire(e,g));for(c=0;c<m.length;c++)m[c].CN()(e,g)}function e(a){a.stopPropagation();!c(!0)&&0<l&&null!=A.offsetParent&&(0==A.scrollLeft||0==A.scrollTop)&&(l--,h(F,D))}function g(){d(!1)}function h(a,b){F=a;D=b;var c=A.firstChild.style,d=1;do c.width=a+d+"px",c.height=b+d+"px",A.scrollLeft=A.scrollTop=
d,d++;while((0==A.scrollTop||0==A.scrollLeft)&&5>=d);z.scrollLeft=a;z.scrollTop=b}var k=f.Callbacks(),m=[],p=[],n=2,l=0,I=null,F=null,D=null,A=null,z=null,E=null,J=null;this.addListener=function(a,c){void 0===c||0===c?k.add(a):(m.push(new b.v.Eaa(a,c)),p.push(a))};this.removeListener=function(a){var b=p.indexOf(a);0<=b?(p.splice(b,1),m.splice(b,1)[0].stop()):k.remove(a)};this.oh=function(){return!k.has()&&0==p.length};this.start=function(){J=e.bind(this);if(a.attachEvent)E=g.bind(this),a.attachEvent("onresize",
E);else{var b=a.childNodes[0];A=document.createElement("div");A.className="oj-helper-detect-expansion";var c=document.createElement("div");A.appendChild(c);null!=b?a.insertBefore(A,b):a.appendChild(A);A.addEventListener("scroll",J,!1);z=document.createElement("div");z.className="oj-helper-detect-contraction";b=document.createElement("div");b.style.width="200%";b.style.height="200%";z.appendChild(b);a.insertBefore(z,A);z.addEventListener("scroll",J,!1);this.vm(!1)}};this.stop=function(){null!=I&&(b.v.ET(I),
I=null);null!=A?(A.removeEventListener("scroll",J),z.removeEventListener("scroll",J),a.removeChild(A),a.removeChild(z)):a.detachEvent("onresize",E)};this.vm=function(a){var b=c(a);a&&!b&&null!=A.offsetParent&&h(F,D)}};b.v.Jv="_ojResizeTracker";b.v.sE=function(a){return/^[A-Za-z][0-9A-Z_a-z-]*$/.test(a)};b.v.Eaa=function(a,b){function c(){e=Array.prototype.slice.call(arguments);null==g&&(g=window.setTimeout(d,b))}function d(){a.apply(null,e);g=null}var e=null,g=null;this.CN=function(){return c};this.stop=
function(){null!=g&&(window.clearTimeout(g),g=null)}};b.v.Rd=function(){return"ontouchstart"in window||0<navigator.msMaxTouchPoints||0<navigator.maxTouchPoints};b.v.f5=function(a){b.v.nha=a};b.v.unwrap=function(a,c){var d=b.v.nha;d&&d==a.parent().get(0)||(1<arguments.length?c.replaceWith(a):a.unwrap())};b.v.N3=function(a){function c(a){var d=a.target,e=f(d),g=d.getBoundingClientRect(),h=b.v.kE(),k="ltr"===b.v.qm();return k&&("HTML"===d.nodeName||"visible"!==e.css("overflow-x"))&&a.clientX>g.right-
h?!0:!k&&"HTML"===d.nodeName&&a.clientX>g.left-h?!0:!k&&"visible"!==e.css("overflow-x")&&a.clientX<g.left+h?!0:("HTML"===d.nodeName||"visible"!==e.css("overflow-y"))&&a.clientY>g.bottom-h?!0:!1}if(!("clientX"in a&&"clientY"in a))return!1;var d=b.Ma.wy();if(b.Ma.Yi.vP===d.os||b.Ma.Yi.wF===d.os)a=!1;else{var e;if(b.Ma.Vm.KP===d.engine)try{e=a.originalTarget.localName?!1:!0}catch(g){e=!0}else e=b.Ma.Vm.MF===d.engine?c(a):b.Ma.kl.vF===d.browser?c(a):!1;a=e}return a};b.v.kE=function(){var a=b.v.tka;if(f.isNumeric(a))return a;
a=f("\x3cdiv /\x3e");f(document.body).append(a);a.width(50).height(50).css({overflow:"scroll",visibility:"hidden",position:"absolute"});var c=f("\x3cdiv /\x3e");c.height(1);a.append(c);var c=c.width(),d=a.width();a.remove();return a=b.v.tka=d-c};b.v.qm=function(){var a=document.documentElement.getAttribute("dir");a&&(a=a.toLowerCase());return"rtl"===a?"rtl":"ltr"};b.v.xy=function(a){return isNaN(a)?a&&0<a.length&&"auto"!=a?(a=parseInt(a,10),isNaN(a)&&(a=0),a):0:a};b.v.Wna=function(a){return isNaN(a)?
a&&0<a.length?(a=parseFloat(a),isNaN(a)&&(a=0),a):0:a};b.v.apa=function(a){function c(a,d){if(-1>a.bottom-d.top)return!1;var e="auto"===d.overflowY||"scroll"===d.overflowY?b.v.kE():0;if(1>d.bottom-e-a.top)return!1;e="auto"!==d.overflowX&&"scroll"!==d.overflowX||"rtl"!==b.v.qm()?0:b.v.kE();if(-1>a.right-(d.left+e))return!1;e="auto"!==d.overflowX&&"scroll"!==d.overflowX||"ltr"!==b.v.qm()?0:b.v.kE();return-1<a.left-(d.right-e)?!1:!0}function d(a){return"visible"!==a.css("overflow-x")||"visible"!==a.css("overflow-y")}
function e(a){var b=a[0];return 1===b.nodeType?(b=b.getBoundingClientRect(),b.overflowX=a.css("overflow-x"),b.overflowY=a.css("overflow-y"),b):f.isWindow(b)?b={width:b.innerWidth,height:b.innerHeight,top:0,bottom:b.innerHeight,left:0,right:b.innerWidth}:{height:0,width:0}}if(!a)return!1;var g=e(a),h=!0;for(a=a.parent();h&&a&&0<a.length&&1===a[0].nodeType;){if(d(a)){var k=e(a);0<k.height&&0<k.width&&(h=c(g,k))}a=a.parent()}return h};b.v.iG="oj-logical-parent";b.v.$na=function(a){if(a)return a.data(b.v.iG)};
b.v.g5=function(a,c){a&&(null===c?a.removeData(b.v.iG):a.data(b.v.iG,c))};b.v.$oa=function(a,c){b.l.UM(a);b.l.UM(c);for(var d=c;d;){if(d==a)return!0;var e=b.v.$na(f(d)),d=e?e[0]:d.parentNode}return!1};b.v.xqa=function(a){var b=document.createElement("a");b.href=a;a=b.protocol;null!=a&&(a=a.toLowerCase());if(0>["http:","https:"].indexOf(a))throw a+" is not a valid URL protocol";};b.v.Dla=function(){f(document.body).hasClass("oj-hybrid")&&document.body.addEventListener("contextmenu",function(a){a.preventDefault()},
!0)};b.v.Dla();b.Sa=function(a){this.Init(a)};b.b.ga(b.Sa,b.b,"oj.ComponentMessaging");b.Sa.ed={NONE:"none",tz:"notewindow",jv:"placeholder",fv:"inline"};b.Sa.$F={};b.Sa.LE=function(a,c){a&&"function"===typeof c&&(b.Sa.$F[a]=c)};b.Sa.prototype.Init=function(a){b.Sa.q.Init.call(this);this.la=a;this.Tv=!1;this.Fga()};b.Sa.prototype.Ao=function(a,c){var d=this;b.l.Ff(c);this.kc=a;this.AC=b.nc.$e(this.AC||{},c);this.Tv?this.aja():(f.each(this.Rq,function(a,b){b.Ao(d)}),this.Tv=!0)};b.Sa.prototype.update=
function(a){b.l.Ff(a);b.l.E1(this.Tv);this.AC=b.nc.$e(this.AC||{},a);this.Tv&&f.each(this.Rq,function(b,c){c.aP(a)&&c.update()})};b.Sa.prototype.Pk=function(){f.each(this.Rq,function(a,b){b.Pk()});this.Tv=!1;this.kc=this.la=null;this.Rq={}};b.Sa.prototype.mw=function(a,c){return new (b.Sa.$F[a]||b.Sa.$F[b.Sa.ed.NONE])(c)};b.Sa.prototype.ida=function(){return this.la||null};b.Sa.prototype.Lda=function(){return this.kc||null};b.Sa.prototype.ti=function(){return this.AC||{}};b.Sa.prototype.IW=function(){var a=
{},c=!1,d,e,g=this.la.options.placeholder,h,k,m,p,n=this.la.options.displayOptions||{},l={};k=Object.keys(n);for(m=0;m<k.length;m++){e=k[m];d=n[e];c=!1;h=e+"";if(Array.isArray(d))for(p=0;p<d.length;p++)e=d[p],c||(c=this.y_(h,e,g,l));else"string"===typeof d&&(c||(c=this.y_(h,d,g,l)));c||(l[h]=b.Sa.ed.NONE)}f.each(b.Sa.ed,function(b,c){a[c]=[]});f.each(l,function(b,c){a[c].push(b)});return a};b.Sa.prototype.y_=function(a,c,d,e){var g=!1;switch(c){case b.Sa.ed.jv:"converterHint"!==a||g||d||(e[a]=c,g=
!0);break;case b.Sa.ed.fv:"messages"!==a||g||(e[a]=c,g=!0);break;default:g||(e[a]=c,g=!0)}return g};b.Sa.prototype.Fga=function(){var a=this.IW(),c=a[b.Sa.ed.tz],d=a[b.Sa.ed.NONE],e=a[b.Sa.ed.jv],a=a[b.Sa.ed.fv],g={};0<c.length&&(g[b.Sa.ed.tz]=this.mw(b.Sa.ed.tz,c));0<e.length&&(g[b.Sa.ed.jv]=this.mw(b.Sa.ed.jv,e));0<a.length&&(g[b.Sa.ed.fv]=this.mw(b.Sa.ed.fv,a));g[b.Sa.ed.NONE]=this.mw(b.Sa.ed.NONE,d);this.Rq=g};b.Sa.prototype.aja=function(){var a=this.IW(),c,d=this;f.each(a,function(a,e){a+="";
c=d.Rq[a];e&&0<e.length?c?c&&c.Ar(e):(c=d.mw(a,e),d.Rq[a]=c,c.Ao(d)):c&&b.Sa.ed.NONE!==a&&(c.Pk(),delete d.Rq[a])})};b.oc=function(a){this.Init(a)};b.b.ga(b.oc,b.b,"oj.MessagingStrategy");b.oc.prototype.Init=function(a){b.l.ND(a);b.oc.q.Init.call(this);this.bB=a};b.oc.prototype.Ao=function(a){this.Wp=a};b.oc.prototype.Pk=function(){};b.oc.prototype.Ar=function(a){this.Init(a)};b.oc.prototype.aP=function(){return!0};b.oc.prototype.update=function(){};b.oc.prototype.Yh=function(){return this.Wp.Lda()};
b.oc.prototype.Wi=function(){return this.Wp.ida()};b.oc.prototype.mF=function(){return this.oF().ix};b.oc.prototype.lF=function(){return this.oF().Bu()};b.oc.prototype.OP=function(){var a=[],b=this.ti();(b=b&&b.Y1)&&a.push(b);return a};b.oc.prototype.u6=function(){var a=[],b=this.ti();f.each(b&&b.Aqa||[],function(b,c){a.push(c)});return a};b.oc.prototype.t6=function(){var a=this.ti();return a&&a.title||""};b.oc.prototype.oF=function(){var a=this.ti();return a&&a.S5||null};b.oc.prototype.uF=function(){var a=
this.mF();return a&&0<a.length?!0:!1};b.oc.prototype.tQ=function(){return-1!==this.bB.indexOf("messages")?!0:!1};b.oc.prototype.GF=function(){return-1!==this.bB.indexOf("converterHint")?!0:!1};b.oc.prototype.vQ=function(){return-1!==this.bB.indexOf("validatorHint")?!0:!1};b.oc.prototype.uQ=function(){return-1!==this.bB.indexOf("title")?!0:!1};b.oc.prototype.x6=function(){return this.oF().eO()};b.oc.prototype.ti=function(){return this.Wp?this.Wp.ti():{}};b.cf=function(a){this.Init(a)};b.Sa.LE(b.Sa.ed.NONE,
b.cf);b.cf.fA="oj-invalid";b.cf.gA="oj-warning";b.b.ga(b.cf,b.oc,"oj.DefaultMessagingStrategy");b.cf.prototype.update=function(){b.cf.q.update.call(this);var a=this.Yh(),c=this.lF(),d=[],e=[],g=!1,f=this.Wi().widget();a&&(this.x6()?(d.push(b.cf.gA),e.push(b.cf.fA),g=!0):this.uF()&&c===b.X.Sb.WARNING?(d.push(b.cf.fA),e.push(b.cf.gA)):(d.push(b.cf.fA),d.push(b.cf.gA)),f.removeClass(d.join(" ")).addClass(e.join(" ")),a.attr({"aria-invalid":g}))};b.cf.prototype.Pk=function(){this.Wi().widget().removeClass(b.cf.fA).removeClass(b.cf.gA);
this.Yh().removeAttr("aria-invalid");b.cf.q.Pk.call(this)};b.xh=function(a){this.Init(a)};b.Sa.LE(b.Sa.ed.jv,b.xh);b.b.ga(b.xh,b.oc,"oj.PlaceholderMessagingStrategy");b.xh.prototype.Init=function(a){b.xh.q.Init.call(this,a)};b.xh.prototype.Ao=function(a){b.xh.q.Ao.call(this,a);this.lL()};b.xh.prototype.Ar=function(a){b.xh.q.Ar.call(this,a);this.lL()};b.xh.prototype.aP=function(a){return a&&void 0!==a.Y1?!0:!1};b.xh.prototype.update=function(){b.xh.q.update.call(this);this.lL()};b.xh.prototype.lL=
function(){var a=this.Yh();this.V6()&&a&&(a=this.OP(),a=a.length?a[0]:"",this.Wi().option({placeholder:a},{_context:{Xoa:!0}}))};b.xh.prototype.V6=function(){return this.GF()};b.Ri=function(a,b){this.Init(a,b)};b.Ri.eO=function(a){return b.X.Bu(a)>=b.X.Sb.ERROR?!0:!1};b.b.ga(b.Ri,b.b,"oj.ComponentValidity");b.Ri.prototype.Init=function(a,c){b.Ri.q.Init.call(this);this.WX(c)};b.Ri.prototype.eO=function(){return this.Xn};b.Ri.prototype.Bu=function(){return this.Hha};b.Ri.prototype.update=function(a,
b){this.WX(b)};b.Ri.prototype.WX=function(a){this.Faa=a;this.ix=this.Fda();this.Hha=b.X.Bu(this.ix);this.Xn=b.Ri.eO(this.ix)};b.Ri.prototype.Fda=function(){for(var a=this.Faa||[],c=[],d,e=0;e<a.length;e++)d=a[e],d instanceof b.Ic&&!d.L1()||c.push(d);return c};b.sd={};b.sd.mS=":tabbable";b.sd.RD=function(a){var c=document.activeElement;return a&&c?b.v.No(a,c):!1};b.sd.vy=function(a){a.focus()};b.sd.xN=function(a){(a=b.sd.R2(a))&&b.sd.vy(a)};b.sd.R2=function(a){var c=f(a);return c.is(b.sd.mS)?a:(a=
c.find(b.sd.mS))&&0<a.length?a[0]:null};b.aj={};o_("Test",b.aj,b);b.aj.ready=!1;o_("Test.ready",b.aj.ready,b);b.aj.Hna=function(a){var c=a;if(b.Ea.nd(a))try{c=f.parseJSON(a)}catch(d){return null}return c&&c.element&&(a=f(c.element))?(a=b.Components.Nf(a[0],c.component),delete c.element,a("getNodeBySubId",c)):null};o_("Test.domNodeForLocator",b.aj.Hna,b);b.aj.MN=function(){return b.J.MN()};o_("Test.getOpenPopupCount",b.aj.MN,b);b.aj.pN=function(){return b.J.pN()};o_("Test.findOpenPopups",b.aj.pN,b);
b.aj.fN=function(a,c){return b.J.fN(a,c)};o_("Test.compareStackingContexts",b.aj.fN,b)});