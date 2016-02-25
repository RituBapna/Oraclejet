/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojdnd"],function(b,f){function a(b,c,e,f,h,k){null==a.WG&&(a.WG=a.Vca());this.rc=b;this.yj=c;this.F$=e;f&&f.D5&&(this.Qla=f.D5);h&&(h.G5&&(this.oM=h.G5),h.F5&&(this.nM=h.F5),h.K5&&(this.tM=h.K5),h.J5&&(this.sM=h.J5),h.H5&&(this.qM=h.H5),h.I5&&(this.tD=h.I5),h.M5&&(this.vM=h.M5),h.N5&&(this.wM=h.N5),h.L5&&(this.uM=h.L5));k&&(k.y1&&(this.xn=k.y1),k.T4&&(this.fh=k.T4),k.k3&&(this.QW=k.k3),k.t3&&(this.CJ=k.t3),k.p5&&(this.po=k.p5),k.F3&&(this.wt=k.F3),
k.c4&&(this.Jt=k.c4),k.b4&&(this.zk=k.b4),k.a4&&(this.bo=k.a4),k.r5&&(this.Tx=k.r5),k.Qf&&(this.L0=k.Qf),k.Hg&&(this.M0=k.Hg));c=document.createElement("div");e=c.style;e.display="inline-block";e.overflow="hidden";e.visibility="hidden";f=document.createElement("div");e=f.style;e.display="inline-block";c.appendChild(f);b.insertBefore(c,b.firstChild);this.A0=c;this.Oq=f;var l=this;this.vk=function(a){l.tq(a)};this.HX=function(){l.dga()};this.qq=function(a){l.RJ(a)};this.sq=function(a){l.YJ(a)}}(function(){function d(a){for(;a;){a=
a.nextSibling;var b=!0;if(a){var c=a.style;!c||c.visibility!==p&&c.display!==r||(b=!1)}if(a&&1===a.nodeType&&b)return a}return null}function c(a,b){for(var c=a;c;){var d=c.style;if(d&&(d.visibility===p||d.display===r))break;d=c.parentNode;if(d===b)return c;c=d}return null}function e(a,b){return b.sc<a.sc?1:a.sc<b.sc?-1:0}function g(a){a&&a.sort(e);return a}function h(a){var b=null;a=f(a);a.hasClass("oj-masonrylayout-tile-1x1")?b={colSpan:1,rowSpan:1}:a.hasClass("oj-masonrylayout-tile-2x1")?b={colSpan:2,
rowSpan:1}:a.hasClass("oj-masonrylayout-tile-3x1")?b={colSpan:3,rowSpan:1}:a.hasClass("oj-masonrylayout-tile-1x2")?b={colSpan:1,rowSpan:2}:a.hasClass("oj-masonrylayout-tile-1x3")?b={colSpan:1,rowSpan:3}:a.hasClass("oj-masonrylayout-tile-2x2")?b={colSpan:2,rowSpan:2}:a.hasClass("oj-masonrylayout-tile-2x3")?b={colSpan:2,rowSpan:3}:a.hasClass("oj-masonrylayout-tile-3x2")&&(b={colSpan:3,rowSpan:2});return b}function k(a){var b=null;a=f(a);a.hasClass("oj-masonrylayout-tile-1x1")?b="oj-masonrylayout-tile-1x1":
a.hasClass("oj-masonrylayout-tile-2x1")?b="oj-masonrylayout-tile-2x1":a.hasClass("oj-masonrylayout-tile-3x1")?b="oj-masonrylayout-tile-3x1":a.hasClass("oj-masonrylayout-tile-1x2")?b="oj-masonrylayout-tile-1x2":a.hasClass("oj-masonrylayout-tile-1x3")?b="oj-masonrylayout-tile-1x3":a.hasClass("oj-masonrylayout-tile-2x2")?b="oj-masonrylayout-tile-2x2":a.hasClass("oj-masonrylayout-tile-2x3")?b="oj-masonrylayout-tile-2x3":a.hasClass("oj-masonrylayout-tile-3x2")&&(b="oj-masonrylayout-tile-3x2");return b}
function l(a,b){f(a).removeClass(b)}function m(a,b){f(a).addClass(b)}b.ya("oj.ojMasonryLayout",f.oj.baseComponent,{defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{reorderHandle:null,beforeInsert:null,insert:null,beforeRemove:null,remove:null,beforeResize:null,resize:null,beforeReorder:null,reorder:null},_ComponentCreate:function(){this._super();this.element.addClass("oj-masonrylayout oj-component");this.options.disabled&&b.r.warn(u);this.Ar=this.eventNamespace+"ReorderHandle";this.oa=
{};this.oa.sh=!1;this.oa.Je=!1;this.oa.tP=!1;this.oa.Sm=!1;this.oa.hp=!1;this.Vn();this.Wv();this.Aa(!0)},refresh:function(){this._super();var a="rtl"===this.bc()!==this.wf;a&&this.PU();this.Aa(a)},tl:function(){this._super();this.Xc&&this.Aa(this.Xc[0])},pn:function(){this._super();this.Xc&&this.Aa(this.Xc[0])},pf:function(a,b,c){this.Eia(b);this.rf(b,c,{launcher:f(b.target).closest(":tabbable")})},Aa:function(c){if(this.cw()){this.Xc=null;this.wf="rtl"===this.bc();this.An=b.v.Rd();var d=this.element,
e=this.options;if(c){var f=this;this.po=function(a){f.wla(a)};this.wt=function(a){f.cga(a)};this.Jt=function(){f.tha()};this.zk=function(){f.sha()};this.bo=function(){f.rha()};if(!this.Bf){var n={};n.D5=w;var p={G5:"oj-masonrylayout-transition-resize-to",F5:"oj-masonrylayout-transition-resize-to-fast",K5:"oj-masonrylayout-tile-transition-move-to",J5:"oj-masonrylayout-tile-transition-move-to-fast",H5:"oj-masonrylayout-tile-transition-hide-from",I5:"oj-masonrylayout-tile-transition-hide-to"};p.M5=x;
p.N5="oj-masonrylayout-tile-transition-show-to";p.L5="oj-masonrylayout-tile-transition-resize-to";var q={};q.y1=m;q.T4=l;q.k3=k;q.t3=h;q.p5=this.po;q.F3=this.wt;q.c4=this.Jt;q.b4=this.zk;q.a4=this.bo;q.r5=g;q.Qf=b.Components.Qf;q.Hg=b.Components.Hg;this.pka();this.Bf=new a(d[0],this.wf,"enabled"===b.ba.AN(),n,p,q)}this.kX=function(a){f.efa(a)};this.hX=function(a){f.afa(a)};this.jX=function(a){f.dfa(a)};this.iX=function(a){f.bfa(a)};this.fX=function(a){f.$ea(a)};this.lX=function(a){f.ffa(a)};e.reorderHandle&&
this.p0()}else e=d.children(),this.fM(e),this.VL(e),this.paa();this.Bf.Lm(c);c&&(this.ah=function(){f.Ve()},b.v.Nh(d[0],this.ah))}else d=!1,this.Xc&&(d=this.Xc[0]),this.Xc=[c||d]},_destroy:function(){this.Tp();var a=this.element;b.v.Oi(a[0],this.ah);this.ah=null;this.mka();for(var c=this.tk(),d=c.length,e=0;e<d;e++)delete c[e].sc;this.PU();a.removeClass("oj-masonrylayout oj-component");this.options.reorderHandle&&this.Y0();this.Js=this.bo=this.zk=this.Jt=this.wt=this.po=this.lX=this.fX=this.iX=this.jX=
this.hX=this.kX=null;this._super()},_setOption:function(a,c,d){var e=!1;switch(a){case "reorderHandle":this.Y0();e=!0;break;case "disabled":b.r.warn(u);break;case "contextMenu":b.v.Rd()||(this.Tp(),c&&this.Vn(c))}this._super(a,c,d);e&&c&&this.p0()},resizeTile:function(a,b){var c=this.Bf;c.oE()&&c.cE();var d=f(a),e=d[0],g=k(e);if(b==g)throw Error("JET MasonryLayout: Unable to resize child "+a+" to style class "+b+" because "+b+" is already applied.");!1!==this._trigger("beforeResize",null,{tile:d,
previousSizeStyleClass:g,sizeStyleClass:b})&&(this.Yv||(this.Yv=[]),this.Yv.push(e,g,b),c.resizeTile(a,b))},insertTile:function(a,c){var d=this.Bf;d.oE()&&d.cE();isNaN(c)&&(c=-1);var e=f(a),g=e[0];!1!==this._trigger("beforeInsert",null,{tile:e,index:c})&&(g.GY=c,d.Ag()&&e.addClass(x),e=g.style,e.top="-1px",this.wf?e.right="-1px":e.left="-1px",this.Wn(g,c),d.Toa(g,c),b.Components.Qf(g),this.Js||(this.Js=[]),this.Js.push(a))},removeTile:function(a){var c=this.Bf;c.oE()&&c.cE();var d=f(a),e=d[0];if(b.sd.QD(e)){var g=
this.tk(!0),e=g.indexOf(e);0<e&&(this.gI=g[e-1])}!1!==this._trigger("beforeRemove",null,{tile:d})&&c.Moa(a)},Ve:function(){this.bw||this.LX||this.Bf.Lpa()},wla:function(a){var b=f(a),c=a.GY;delete a.GY;this.options.reorderHandle&&this.VL(b);this._trigger("insert",null,{tile:b,index:c})},cga:function(a){var c=f(a);this.options.reorderHandle&&this.fM(c);b.Components.Hg(a);a.parentNode.removeChild(a);this.RC(a);this._trigger("remove",null,{tile:c})},tha:function(){if(this.Js){for(var a=this.Bf,b=this.Js,
c=0;c<b.length;c++)a.aqa(b[c]);this.Js=null}if(this.Yv){a=this.Yv;for(c=0;c<a.length;c+=3){var b=a[c+1],d=a[c+2],b={tile:f(a[c]),previousSizeStyleClass:b,sizeStyleClass:d};this._trigger("resize",null,b)}this.Yv=null}this.bw&&(this.CA?this.cfa():this.cH&&this.gX())},sha:function(){this.LX=!0;this.wC=null;var a=document.activeElement;a&&b.v.Wk(this.element[0],a)&&(this.wC=a)},rha:function(){this.LX=!1;var a=this.element[0];if(this.wC){var c=this.wC;this.wC=null;if(this.gI){if(c=this.gI,this.gI=null,
c&&b.v.Wk(a,c)){var a=this.tk(a,!0),d=a.indexOf(c);0<=d&&d<a.length-1?b.sd.xN(a[d+1]):b.sd.xN(c)}}else b.v.Wk(a,c)?b.sd.wy(c):b.sd.xN(a)}},PU:function(){var a=this.Bf;a&&a.destroy();this.Bf=null},cw:function(){var a=document.createElement("div"),b=a.style;b.width="10px";b.height="10px";b=this.element[0];b.appendChild(a);var c=!1;try{c=0<a.offsetWidth&&0<a.offsetHeight}catch(d){}b.removeChild(a);return c},tk:function(a){for(var b=this.element.children(w),c=b.length,d=[],e=0;e<c;e++){var f=b[e];if(!a||
a&&f!==this.yd){var g=f.style;g.visibility!==p&&g.display!==r&&d.push(f)}}return d},pka:function(){var a=this.tk();if(a)for(var b=0;b<a.length;b++){var c=a[b];c.sc||(c.sc=b+1)}},paa:function(){var a=this.tk();if(a)for(var b=0;b<a.length;b++){var c=a[b];c.sc||this.Wn(c,b)}},mka:function(){var a=this.tk(),c=this.tk();g(c);for(var d=0;d<a.length;d++){var e=a[d],f=c[d];e!=f&&(b.Components.Hg(f),e.parentNode.insertBefore(f,e),b.Components.Qf(f),e=a.indexOf(f),e>d&&(a.splice(e,1),a.splice(d,0,f)))}},Wn:function(a,
b){var c=this.tk();0>b&&(b=c.length);if(c)for(var d=0;d<c.length;d++){var e=c[d];e.sc&&e.sc>=b+1&&e.sc++}a.sc=b+1},RC:function(a){if(a.sc){var b=this.tk();if(b)for(var c=0;c<b.length;c++){var d=b[c];d.sc&&d.sc>a.sc&&d.sc--}delete a.sc}},Vn:function(a){var b=null,c=null;a||this.options.contextMenu||(b=this.element.attr("contextmenu"))&&(this.options.contextMenu="#"+b);if(a||this.options.contextMenu){b=a||this.options.contextMenu;c=f.type(b);if("function"==c){try{b=b()}catch(d){b=null}c=f.type(b)}if("string"===
c){if(b=f(b)){b.css("display",r);c=this.oa;if(!c)return;c.Je=b;c.sh=!0}this.oa.sh&&a&&this.Wv()}}},Wv:function(){if(this.oa&&this.oa.sh&&this.options.reorderHandle){var a=this.oa.Je,b=this;a.on("ojselect",f.proxy(this.qj,this));var c=!1;a.find("[data-oj-command]").each(function(){if(0===f(this).children("a").length){var a=f(this).attr("data-oj-command").slice(17);f(this).replaceWith(b.qi(a));f(this).addClass("oj-menu-item");c=!0}});c&&a.ojMenu("refresh");this.oa.tP=a.find("#"+v);this.oa.Sm=a.find("#"+
y);this.oa.hp=a.find("#"+B)}},Tp:function(){var a=this.oa;a&&a.sh&&(a.sh=!1,a.Je.off("ojselect"),a.Je=null)},Eia:function(a){a=c(a.originalEvent.target,this.element[0]);this.oa.tile=a;if(this.oa.sh){var b=this.oa.UD,e=!1,f=this.oa.tP;if(f){var g=f.hasClass(q),h=!1;b&&a===b&&(h=!0);h&&!g?(f.addClass(q),e=!0):!h&&g&&(f.removeClass(q),e=!0)}if(f=this.oa.Sm)g=f.hasClass(q),h=!1,b&&a!==b&&a!==d(b)||(h=!0),h&&!g?(f.addClass(q),e=!0):!h&&g&&(f.removeClass(q),e=!0);if(f=this.oa.hp)g=f.hasClass(q),h=!1,b&&
b!==a&&b!==d(a)||(h=!0),h&&!g?(f.addClass(q),e=!0):!h&&g&&(f.removeClass(q),e=!0);e&&this.oa.Je.ojMenu("refresh")}},qi:function(a){var b=M[a];a=I[a];var c=f('\x3ca href\x3d"#"\x3e\x3c/a\x3e');c.text(this.A(a));c.wrap("\x3cli id\x3d"+b+"\x3e\x3c/li\x3e");return c.parent()},Iha:function(a){a&&(this.oa.UD=a)},WY:function(a,b){if(a&&this.oa.UD){var c=this.oa.UD;this.oa.UD=!1;this.cca(c,a,b)}},cca:function(a,b,c){var e=a.sc-1,g=f(a);if(!1!==this._trigger("beforeReorder",null,{tile:g,fromIndex:e})){this.RC(a);
var h=b.sc-1;c||h++;var k=this.element[0];c||(b=d(b));this.Wn(a,h);k.insertBefore(a,b);this.Bf.Lm(!0);this._trigger("reorder",null,{tile:g,fromIndex:e,toIndex:h})}},qj:function(a,b){var c=b?b.item.attr("id"):void 0;c===v?this.Iha(this.oa.tile):c===y?this.WY(this.oa.tile,!0):c===B&&this.WY(this.oa.tile,!1)},YW:function(a){var b=this.tk(!0);g(b);for(var c=b.length,d=0;d<c;d++)if(b[d]===a)return d;return-1},p0:function(){var a=this.element,b=a.children();this.VL(b);a.on("dragstart"+this.Ar,this.kX).on("dragenter"+
this.Ar,this.hX).on("dragover"+this.Ar,this.jX).on("dragleave"+this.Ar,this.iX).on("dragend"+this.Ar,this.fX).on("drop"+this.Ar,this.lX)},VL:function(a){var b=this.options;a.filter(b.reorderHandle).attr(s,"true").addClass(t);a.find(b.reorderHandle).attr(s,"true").addClass(t)},Y0:function(){var a=this.element,b=a.children();this.fM(b);a.off(this.Ar)},fM:function(a){var b=this.options;a.filter(b.reorderHandle).removeAttr(s).removeClass(t);a.find(b.reorderHandle).removeAttr(s).removeClass(t)},efa:function(a){if(this.options.reorderHandle&&
!this.bw){var b=c(a.target,this.element[0]);if(b){var d=this.YW(b);b.yK=d;d={tile:f(b),fromIndex:d};!1!==this._trigger("beforeReorder",null,d)&&(a=a.originalEvent,this.rI(b,a.pageX,a.pageY,a.dataTransfer))}}},afa:function(a){a=a.originalEvent;var c=a.relatedTarget,d=this.element[0],e=!1;c?e=d!=c&&!b.v.Wk(d,c):this.dV&&(e=(c=document.elementFromPoint(a.clientX,a.clientY))&&(c==d||b.v.Wk(d,c)));e&&((this.dV=!1,this.Jn)?this.yd&&(f(this.yd).css("display",""),this.Bf.Lm(!1,!0)):a.dataTransfer.dropEffect=
"none")},dfa:function(a){var b=a.originalEvent;b.dataTransfer.dropEffect="move";this.jca(b.pageX,b.clientX,b.clientY);a.preventDefault();return!1},bfa:function(a){var c=a.originalEvent,d=c.relatedTarget;a=this.element[0];var e=!1;e=d?a!=d&&!b.v.Wk(a,d):(c=document.elementFromPoint(c.clientX,c.clientY))&&c!=a&&!b.v.Wk(a,c);e&&(this.dV=!0,this.yd&&(f(this.yd).css("display",r),this.Bf.Lm(!1,!0)))},MT:function(){if(this.fB){clearTimeout(this.fB);this.fB=null;var a=this.Jn;a&&f(a).removeClass("oj-drag")}},
$ea:function(){this.MT();if(!this.eH){var a=this.Jn;if(a&&this.yd){var c=this.yd;b.v.Wk(this.element[0],a)&&(f(c).css("display",""),this.RC(c),c.parentNode.removeChild(c),f(a).css("display",""),this.Wn(a,a.sc-1),this.Bf.Lm(!1,!0));delete a.yK}this.yd=this.Jn=null;this.EA=this.CA=!1;this.qI=null;this.bw=this.cH=!1}},ffa:function(a){var b=this.Bf;b.oE()&&b.cE();this.MT();b=a.originalEvent;this.rca(this.Jn,b.pageX,b.pageY);a.stopPropagation();return!1},rI:function(a,c,d,e){this.bw=!0;this.dH=this.EA=
this.eH=!1;this.Jn=a;var g=this.element[0],h=k(a),l=this.yd=document.createElement("div");l.sc=a.sc;l.className=h+" oj-drop";var h=l.style,m=a.style;h.top=m.top;this.wf?h.right=m.right:h.left=m.left;h=f(a).offset();g.insertBefore(l,a);this.qI=c={left:c-h.left,top:d-h.top};f(a).addClass("oj-drag");e.effectAllowed="move";e.setData("text/html",a.outerHTML);e.setDragImage(a,c.left,c.top);var n=this;this.fB=setTimeout(function(){n.dH=!0;m.display=r;f(a).removeClass("oj-drag");n.fB=null;b.Components.dp(a)},
0)},jca:function(a,b,e){this.EA=!0;if(this.dH&&!this.CA){var g=this.element[0];b=document.elementFromPoint(b,e);if((b=c(b,g))&&b!==this.yd&&b!==this.Jn){var h=f(g).offset();e=d(this.yd);a=a-h.left>=b.offsetLeft+.5*b.offsetWidth;this.RC(this.yd);a&&!this.wf||!a&&this.wf?(a=d(b))?(this.Wn(this.yd,a.sc-1),g.insertBefore(this.yd,a)):(this.Wn(this.yd,b.sc),g.appendChild(this.yd)):(this.Wn(this.yd,b.sc-1),g.insertBefore(this.yd,b));e!==d(this.yd)&&(this.CA=this.Bf.Lm(!1,!0))}}},cfa:function(){this.CA=!1},
rca:function(a,c,d){this.eH=!0;var e=this.element[0],g=this.yd;this.yd=null;b.Components.Hg(a);e.replaceChild(a,g);b.Components.Qf(a);a.sc=g.sc;g=a.style;g.display="";b.Components.Nm(a);var h=f(e).offset(),k=this.qI;g.top=d-k.top-h.top+n;c=c-k.left-h.left;this.wf?(g.right=e.offsetWidth-(c+f(a).outerWidth(!0))+n,g.left=""):g.left=c+n;this.qI=null;this.EA?this.cH=this.Bf.Lm(!1,!0):this.gX()},gX:function(){this.dH=this.EA=this.eH=this.bw=this.cH=!1;var a=this.Jn;this.Jn=null;var b=a.yK;delete a.yK;var c=
this.YW(a),a={tile:f(a),fromIndex:b,toIndex:c};this._trigger("reorder",null,a)},getNodeBySubId:function(a){return this._super(a)},getSubIdByNode:function(a){return this._super(a)}});var n="px",p="hidden",r="none",s="draggable",q="oj-disabled",t="oj-draggable",w=".oj-masonrylayout-tile-1x1, .oj-masonrylayout-tile-1x2, .oj-masonrylayout-tile-1x3, .oj-masonrylayout-tile-2x1, .oj-masonrylayout-tile-2x2, .oj-masonrylayout-tile-2x3, .oj-masonrylayout-tile-3x1, .oj-masonrylayout-tile-3x2",x="oj-masonrylayout-tile-transition-show-from",
u="JET MasonryLayout: 'disabled' option not supported",v="ojmasonrylayoutcut",y="ojmasonrylayoutpastebefore",B="ojmasonrylayoutpasteafter",M={cut:v,"paste-before":y,"paste-after":B},I={cut:"labelCut","paste-before":"labelPasteBefore","paste-after":"labelPasteAfter"}})();a.prototype.Lm=function(a,b){var e=!1;a?(e=this.dh()?!0:!1,this.r_()):(this.zk&&this.zk(),this.xM(b),e=this.rM());return e};a.prototype.destroy=function(){for(var a=this.rc,b=this.oq(),e=0;e<b.length;e++){var f=b[e].style;this.yj?
f.right="":f.left="";f.top=""}a.removeChild(this.A0);this.M0=this.L0=this.Tx=this.bo=this.zk=this.Jt=this.wt=this.po=this.CJ=this.QW=this.fh=this.xn=this.rc=this.yl=this.gk=this.oi=this.hk=this.ej=this.sq=this.qq=this.HX=this.vk=this.Oq=this.A0=null};a.prototype.resizeTile=function(a,b){var e=this.rc.querySelector(a);if(e){this.hk||(this.hk=[]);var f=this.hk;f.push(e);f.push(b);this.y_=!0;this.Bx()}};a.prototype.Toa=function(a,b){var e=this.oq();this.Tx&&this.Tx(e);var f=null;0<=b&&b<e.length&&(f=
e[b]);this.rc.insertBefore(a,f);this.Bx()};a.prototype.aqa=function(b){if(b=this.rc.querySelector(b))this.oi||(this.oi=[]),this.oi.push(b),this.ZL=!0,this.tj!==a.eS&&this.tj!==a.cA?this.Bx():this.ZL=!1};a.prototype.Moa=function(a){if(a=this.rc.querySelector(a))this.gk||(this.gk=[]),this.gk.push(a),this.IX=!0,this.Bx()};a.prototype.Lpa=function(){this.y_||this.IX||this.ZL||(this.zk&&this.zk(),this.xM(!1),this.rM())};a.prototype.Ag=function(){if(this.$0)return!1;this.$$||(this.v$=this.F$?!1:a.Zga(a.WG[0],
a.WG[1]),this.$$=!0);return this.v$};a.prototype.oE=function(){return null!=this.tj||null!=this.ej&&0<this.ej.length};a.prototype.cE=function(){this.$0=!0;this.Zl(this.tM);this.Zl(this.sM);this.Zl(this.qM);this.Zl(this.tD);this.Zl(this.vM);this.Zl(this.wM);this.Zl(this.uM);this.fh(this.Oq,this.oM);this.fh(this.Oq,this.nM);a.ie(this.rc,"transitionend",this.vk);a.ie(this.rc,"webkitTransitionEnd",this.vk);for(var b=this.oq(),c=0;c<b.length;c++){var e=b[c];e.zA&&delete e.zA;a.ie(e,"transitionend",this.qq);
a.ie(e,"webkitTransitionEnd",this.qq);a.ie(e,"transitionend",this.sq);a.ie(e,"webkitTransitionEnd",this.sq)}this.xt?(clearTimeout(this.xt),this.xt=null,this.RJ(null)):this.au?(clearTimeout(this.au),this.au=null,this.YL()):this.tj===a.cA||null!=this.ej&&0<this.ej.length?this.tq(null):this.tj===a.fS&&this.YJ(null);this.$0=!1};a.wda=function(b){var c=a.Aw(b);return{Rf:b.offsetWidth+(a.kg(c.marginLeft)+a.kg(c.marginRight)),mh:b.offsetHeight+(a.kg(c.marginTop)+a.kg(c.marginBottom))}};a.vda=function(b){b=
a.Aw(b);return{paddingLeft:a.kg(b.paddingLeft),paddingRight:a.kg(b.paddingRight),paddingTop:a.kg(b.paddingTop),paddingBottom:a.kg(b.paddingBottom),borderLeftWidth:a.kg(b.borderLeftWidth),borderRightWidth:a.kg(b.borderRightWidth),borderTopWidth:a.kg(b.borderTopWidth),borderBottomWidth:a.kg(b.borderBottomWidth)}};a.Aw=function(a){var b=a.ownerDocument.defaultView,e=null;return e=b?b.getComputedStyle(a,null):a.currentStyle};a.kg=function(a){return 0<a.length&&"auto"!=a?(a=parseInt(a,10),isNaN(a)&&(a=
0),a):0};a.tf=function(a,b,e){a.addEventListener?a.addEventListener(b,e,!1):a.attachEvent&&a.attachEvent("on"+b,e)};a.ie=function(a,b,e){a.removeEventListener?a.removeEventListener(b,e,!1):a.detachEvent&&a.detachEvent("on"+b,e)};a.hT=function(a,b){if(a)for(var e=0;e<a.length;e++)if(a[e]==b)return e;return-1};a.Zga=function(a,b){var e=["gecko",16,"trident",6,"webkit",533.1],f=e.length;if(0==f%2)for(var h=0;h<=f-2;h+=2)if(a==e[h]){if(b>=e[1+h])return!0;break}return!1};a.Vca=function(){var b=a.zi,c=
null,e=-1,f=navigator.userAgent.toLowerCase();-1!=f.indexOf("msie")||-1!=f.indexOf("trident")?(c="trident",e=b(f,/trident\/(\d+[.]\d+)/),-1==e&&(e=b(f,/msie (\d+\.\d+);/),-1==e&&(e=b(f,/msie (\d+\.\d+)b;/)),e-=4),null!=document.documentMode&&(e=Math.min(e,document.documentMode-4))):-1!=f.indexOf("applewebkit")?(c="webkit",e=b(f,/applewebkit\/(\d+([.]\d+)*)/)):-1!=f.indexOf("gecko/")&&(c="gecko",e=b(f,/rv:(\d+[.]\d+)/));return[c,e]};a.zi=function(a,b){var e=a.match(b);return e&&(e=e[1])?parseFloat(e):
-1};a.Iaa=function(a,b){return a.QE>b.QE?1:a.QE<b.QE?-1:a.PE>b.PE?1:a.PE<b.PE?-1:0};a.prototype.Bx=function(){this.hC||(this.tj?this.gL||(this.gL=!0):this.hC=setTimeout(this.HX,0))};a.prototype.oq=function(){for(var a=this.rc.querySelectorAll(this.Qla),b=[],e=0;e<a.length;e++){var f=a[e],h=f.style;0<f.offsetWidth&&0<f.offsetHeight&&"hidden"!=h.visibility&&b.push(f)}return b};a.prototype.rM=function(){var b=this.ej,c=this.dh();if(this.hk){var e=this.hk;c||(c=[]);for(var f=0;f<e.length;f+=2){var h=
e[f];0>a.hT(c,h)&&c.push(h)}}e=!1;if(!c||1>c.length){if(!b||1>b.length)this.ej=null,this.tq(null),e=!0}else this.ej=c;b=null!=c&&0<c.length;this.Ag()||e||this.tq(null);return b};a.prototype.dh=function(){var b=this.rc,c=this.oq();this.Tx&&this.Tx(c);var e=this.AH=null;this.Dn=0;this.qa=1;this.Pt=null;var f=[],h=[],k=[],l=this.yj,m=a.vda(b),n=0,p=[];this.gT=p;for(var r=0;r<c.length;r++){var s=c[r],q=this.CJ(s);(e=s.zA)&&delete s.zA;if(!this.AH){var t=q;e&&(t=document.createElement("div"),t.className=
e,t=this.CJ(t));this.AH=this.aaa(s,t)}e=this.AH;this.Pt||(this.Dn=Math.max(Math.floor((b.offsetWidth-m.paddingLeft-m.paddingRight-m.borderLeftWidth-m.borderRightWidth)/e.Rf),1),this.vga(this.Dn,this.qa),n=this.Dn);q.colSpan>n&&(n=q.colSpan);q.colSpan>this.Dn&&(q.colSpan=this.Dn);for(var w=!1,t=0;t<this.qa;t++){for(var x=0;x<this.Dn;x++)if(this.Pca(x,t,q)){var w=s.style,u={top:w.top};l?u.right=w.right:u.left=w.left;h.push(u);this.YK(s,x,t,q,e,m);l&&k.push(x);w=!0;p.push({PE:x,QE:t,tile:s});break}if(w)break;
t===this.qa-1&&this.QS()}}e&&(b=this.Oq.style,b.width=n*e.Rf+"px",b.height=this.qa*e.mh+"px");for(r=0;r<c.length;r++)s=c[r],w=s.style,u=h[r],""!=u.top&&(l&&parseInt(w.right,10)!==parseInt(u.right,10)||!l&&parseInt(w.left,10)!==parseInt(u.left,10)||parseInt(w.top,10)!==parseInt(u.top,10))&&f.push(s);1>f.length&&(f=null);return f};a.prototype.r_=function(){var b=this.gT;this.gT=null;for(var b=b.sort(a.Iaa),c=this.oq(),e=0;e<c.length;e++){var f=c[e],h=b[e].tile;f!=h&&(this.M0(h),f.parentNode.insertBefore(h,
f),this.L0(h),f=a.hT(c,h),f>e&&(c.splice(f,1),c.splice(e,0,h)))}};a.prototype.vga=function(a,b){for(var e=this.Pt=[],f=0;f<b;f++){var h=[];e.push(h);for(var k=0;k<a;k++)h[k]=!1}};a.prototype.QS=function(){this.qa++;var a=[];this.Pt.push(a);for(var b=0;b<this.Dn;b++)a[b]=!1};a.prototype.Pca=function(a,b,e){var f=e.colSpan;e=e.rowSpan;for(var h=b;h<b+e;h++){h>=this.qa&&this.QS();for(var k=a;k<a+f;k++)if(k>=this.Dn||this.Pt[h][k])return!1}return!0};a.prototype.YK=function(a,b,e,f,h,k){var l=f.colSpan;
f=f.rowSpan;for(var m=this.Pt,n=e;n<e+f;n++)for(var p=b;p<b+l;p++)m[n][p]=!0;a=a.style;a.top=k.paddingTop+e*h.mh+"px";this.yj?a.right=k.paddingRight+b*h.Rf+"px":a.left=k.paddingLeft+b*h.Rf+"px"};a.prototype.h$=function(a){for(var b=this.oq(),e=0;e<b.length;e++)this.xn(b[e],a)};a.prototype.Zl=function(a){for(var b=this.oq(),e=0;e<b.length;e++)this.fh(b[e],a)};a.prototype.xM=function(b){this.JY||(this.s_=b,this.Ag()&&(this.h$(b?this.sM:this.tM),this.xn(this.Oq,b?this.nM:this.oM),a.tf(this.rc,"transitionend",
this.vk),a.tf(this.rc,"webkitTransitionEnd",this.vk)),this.JY=!0)};a.prototype.tq=function(b){var c=!0;if(this.ej){var e=this.ej;if(b){var f=b.target;for(b=0;b<e.length;b++)if(f===e[b]){e.splice(b,1);break}}else this.Ag()||(e=this.ej=[]);0<e.length&&(c=!1)}if(c){if(this.hk&&(c=this.hk,this.hk=null,this.Ag()))for(b=0;b<c.length;b+=2)this.fh(c[b],this.uM);this.s_?(this.Ag()&&(this.Zl(this.sM),this.fh(this.Oq,this.nM)),this.s_=!1):this.Ag()&&(this.Zl(this.tM),this.fh(this.Oq,this.oM));this.Ag()&&(a.ie(this.rc,
"transitionend",this.vk),a.ie(this.rc,"webkitTransitionEnd",this.vk));this.ZL=this.IX=this.y_=this.JY=!1;this.r_();this.Jt&&this.Jt();if(this.tj===a.cA)if(this.Ag()){var h=this;this.au=setTimeout(function(){h.YL()},0)}else this.YL();else this.tj||this.bo&&this.bo()}};a.prototype.aaa=function(b,c){var e=a.wda(b);return{Rf:e.Rf/c.colSpan,mh:e.mh/c.rowSpan}};a.prototype.dga=function(){this.hC&&(clearTimeout(this.hC),this.hC=null);this.zk&&this.zk();this.tj=a.eS;if(this.gk&&this.Ag()){for(var b=this.gk,
c=0;c<b.length;c++){var e=b[c];a.tf(e,"transitionend",this.qq);a.tf(e,"webkitTransitionEnd",this.qq);this.xn(e,this.qM)}var f=this;this.xt=setTimeout(function(){for(var a=0;a<b.length;a++){var c=b[a];f.fh(c,f.qM);f.xn(c,f.tD)}},0)}else this.RJ(null)};a.prototype.RJ=function(b){this.xt&&(clearTimeout(this.xt),this.xt=null);if(b){b.preventDefault();b.stopPropagation();b=b.target;this.fh(b,this.tD);a.ie(b,"transitionend",this.qq);a.ie(b,"webkitTransitionEnd",this.qq);var c=this.gk;if(c){for(var e=0;e<
c.length;e++){var f=c[e];if(f===b){c.splice(e,1);this.yl||(this.yl=[]);var h=this.yl;h.push(b);break}}1>c.length&&(this.gk=null)}}else if(!this.Ag()&&(c=this.gk)){for(e=0;e<c.length;e++)f=c[e],this.yl||(this.yl=[]),h=this.yl,h.push(f);this.gk=null}if(!this.gk){if(this.yl){h=this.yl;for(e=0;e<h.length;e++)b=h[e],this.Ag()&&this.fh(b,this.tD),c=b.style,this.yj?c.right="":c.left="",c.top="",this.wt&&this.wt(b);this.yl=null}this.tj=a.cA;this.xM(!1);if(this.hk)for(h=this.hk,e=0;e<h.length;e+=2)b=h[e],
c=h[e+1],f=this.QW(b),this.fh(b,f),this.xn(b,c),this.Ag()&&(this.xn(b,this.uM),b.zA=f);this.rM()}};a.prototype.YL=function(){this.au&&(clearTimeout(this.au),this.au=null);this.tj=a.fS;if(this.oi&&this.Ag())for(var b=this.oi,c=0;c<b.length;c++){var e=b[c];a.tf(e,"transitionend",this.sq);a.tf(e,"webkitTransitionEnd",this.sq);this.xn(e,this.wM);this.fh(e,this.vM)}else{if(this.oi)for(b=this.oi,c=0;c<b.length;c++)e=b[c],this.fh(e,this.vM);this.YJ(null)}};a.prototype.YJ=function(b){if(b){b.preventDefault();
b.stopPropagation();b=b.target;this.fh(b,this.wM);a.ie(b,"transitionend",this.sq);a.ie(b,"webkitTransitionEnd",this.sq);var c=this.oi;if(c){for(var e=0;e<c.length;e++){var f=c[e];if(f===b){c.splice(e,1);this.po&&this.po(b);break}}1>c.length&&(this.oi=null)}}else if(!this.Ag()&&(c=this.oi)){for(e=0;e<c.length;e++)f=c[e],this.po&&this.po(f);this.oi=null}this.oi||(this.tj=null,this.bo&&this.bo(),this.gL&&(this.gL=!1,this.Bx()))};a.eS=1;a.cA=2;a.fS=3});