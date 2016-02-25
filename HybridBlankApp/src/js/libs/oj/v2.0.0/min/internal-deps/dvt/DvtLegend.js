/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.QN=(0,D.j)();(0,D.ca)("DvtLegend",D.QN);D.w.l(D.QN,D.lj,"DvtLegend");D.rn=function(a,b,c){var d=new D.QN;d.Init(a,b,c);return d};D.QN.newInstance=D.rn;D.QN.getDefaults=function(a){return(0,D.mj)(new D.RN,a)};D.QN.prototype.Init=function(a,b,c){D.QN.o.Init.call(this,a,b,c);this.setId("legend1000"+window.Math.floor(1E9*window.Math.random()));this.pf=new D.RN;this.ea=new D.SN(this);this.ea.le(this);this.Aq=[];this.Ur=[];this.Hc=null;this.x$=[]};
D.QN.prototype.ud=function(a){a?(this.D=this.pf.Tj(a),(0,D.TN)(this,this.D.sections)):this.D||(this.D=(0,D.tj)(this))};D.QN.prototype.Bp=function(a,b,c){this.ud(a);this.q().isLayout=!0;a=D.UN.P(this,new D.y(0,0,b,c));this.q().isLayout=!1;return new D.wg(a.e,a.g)};D.QN.prototype.getPreferredSize=D.QN.prototype.Bp;
D.QN.prototype.P=function(a,b,c){this.ud(a);!(0,window.isNaN)(b)&&!(0,window.isNaN)(c)&&(this.Ga=b,this.Ua=c);this.q().isLayout=!1;this.Aj();this.Aq=[];this.Ur=[];this.Hc=null;this.x$=[];(0,D.Ef)()||(0,D.rj)(this.ea,new D.VN(this.ea,this));this.Pn();this.g5=D.UN.P(this,new D.y(0,0,this.Ga,this.Ua));(a=this.q().highlightedCategories)&&0<a.length&&this.Ee(a);return this.g5};D.QN.prototype.render=D.QN.prototype.P;
D.QN.prototype.Ee=function(a){this.q().highlightedCategories=a&&0<a.length?a.slice():null;(0,D.jl)(a,this.Aq,!0)};D.QN.prototype.highlight=D.QN.prototype.Ee;D.QN.prototype.Od=function(a,b){var c=a.Ta();if(("categoryRollOver"==c||"categoryRollOut"==c)&&"dim"==this.q().hoverBehavior){var d=this.Aq;this!=b&&this.Ee(a.categories);for(var e=0;e<d.length;e++)if(d[e].getId()==a.Nk){this.Npa.scrollIntoView(d[e].Yc()[0]);break}}(this==b||"showPopup"==c||"hidePopup"==c)&&this.dispatchEvent(a)};
D.QN.prototype.la=(0,D.s)("ea");D.QN.prototype.O3=function(a){if(a.Yc()[0]instanceof D.Ke)this.Ur.push(a);else{var b=this.q().hideAndShowBehavior;(null!=a.Be()||null!=a.Ae()||a.Sg()||"none"!=b&&"off"!=b)&&this.Ur.push(a);this.Aq.push(a)}};D.QN.prototype.Q=function(){this.ea&&(this.ea.ei(this),this.ea.Q(),this.ea=null);D.QN.o.Q.call(this)};D.QN.prototype.destroy=D.QN.prototype.Q;D.QN.prototype.P3=(0,D.q)("Hc");D.QN.prototype.Df=function(){return new D.WN(this)};D.QN.prototype.getAutomation=D.QN.prototype.Df;
D.u=D.QN.prototype;D.u.rD=function(){return null!=this.ea?this.ea.dd():null};D.u.V0=function(a,b){if(null!=this.ea){for(var c=this.Ur,d=0;d<c.length;d++)if(c[d].getId()==a.getId()){(0,D.vj)(this.ea,c[d]);b&&c[d].Ud();break}if(c=this.rD())d=c.Yc()[0],d.Zb("label",c.ec()),(0,D.ug)(this.j(),d)}};D.u.F=function(a){var b=new D.y(0,0,this.Ga,this.Ua);return!a||a===this?b:(0,D.Bg)(this,b,a)};D.u.es=function(a){return!a||a===this?this.g5:(0,D.Bg)(this,this.g5,a)};
D.u.Fj=function(){return(0,D.P)("DvtUtilBundle","LEGEND")};D.TN=function(a,b){if(b&&!(0>=b.length))for(var c=a.q().hiddenCategories,d=0;d<b.length;d++){var e=b[d];e.sections&&(c=(0,D.TN)(a,e.sections));if((e=e.items)&&!(0>=e.length))for(var f=0;f<e.length;f++){var g=e[f],h=D.UN.i_(g);"hidden"==g.categoryVisibility&&0>D.H.wa(c,h)&&c.push(h);g.categoryVisibility=null}}};
D.QN.prototype.Pn=function(){if((0,D.TD)(this)){var a=this.q(),b=a.hideAndShowBehavior;if("off"!=b&&"none"!=b||"dim"==a.hoverBehavior)this.j().Td("application"),(0,D.UD)(this.j(),(0,D.P)("DvtUtilBundle","COLON_SEP_LIST",[(0,D.P)("DvtUtilBundle","DATA_VISUALIZATION"),D.dg.XA(this.Fj())]))}};D.QN.prototype.LA=function(){return 0<this.Ur.length};
D.WN=function(a){this.Cb=a;this.de=this.Cb.q()};(0,D.ca)("DvtLegendAutomation",D.WN);D.w.l(D.WN,D.xj,"DvtLegendAutomation");D.WN.prototype.ol=function(a){if((a=(0,D.yj)(this.Cb.la(),a))&&a instanceof D.XN)if(a=a.getData(),a=(0,D.YN)(this,a,this.de))return"section"+a;return null};
D.YN=function(a,b,c){if(c.sections&&0<c.sections.length){for(var d=0;d<c.sections.length;d++){if(c.sections[d]==b)return"["+d+"]";var e=(0,D.YN)(a,b,c.sections[d]);if(e)return"["+d+"]"+e}return null}if(c.items&&0<c.items.length){for(a=0;a<c.items.length;a++)if(c.items[a]==b)return":item["+a+"]";return null}};
D.Tl=function(a,b,c){if(c.sections&&0<c.sections.length){for(var d=0;d<c.sections.length;d++){var e=(0,D.Tl)(a,b,c.sections[d]);if(e)return"["+d+"]"+e}return null}if(c.items&&0<c.items.length){for(a=0;a<c.items.length;a++)if(c.items[a].text==b.name)return":item["+a+"]";return null}};
D.Ol=function(a,b,c){var d=c.indexOf("["),e=c.indexOf("]");if(0<=d&&0<=e){var d=c.substring(d+1,e),f=c.indexOf(":");c=c.substring(e+1);e=c.indexOf("]");return 0<=c.indexOf("[")&&0<=e?(0,D.Ol)(a,b.sections[d],c):0==f?b.items[d]:b.sections[d]}};D.WN.prototype.Ff=function(a){if("tooltip"==a)return(0,D.Rl)(this.Cb);a=(0,D.Ol)(this,this.de,a);for(var b=this.Cb.Aq,c=0;c<b.length;c++){var d=b[c].getData();if(a==d)return b[c].Yc()[0].ta()}return null};D.WN.prototype.getDomElementForSubId=D.WN.prototype.Ff;
D.WN.prototype.Vv=function(){return this.de.title};D.WN.prototype.getTitle=D.WN.prototype.Vv;D.WN.prototype.getItem=function(a){for(var b,c=a.shift(),d=this.de;void 0!=c;)0<a.length?d=d.sections[c]:b=d.items[c],c=a.shift();return b?{text:b.text?b.text:null}:null};D.WN.prototype.getItem=D.WN.prototype.getItem;
D.WN.prototype.iKa=function(a){for(var b,c=a.shift(),d=this.de;void 0!=c;)0<a.length?d=d.sections[c]:b=d.sections[c],c=a.shift();return{title:b.title?b.title:null,items:b.items?(0,D.ZN)(b.items):null,sections:b.sections?(0,D.$N)(this,b.sections):null}};D.WN.prototype.getSection=D.WN.prototype.iKa;D.ZN=function(a){for(var b=[],c=0;c<a.length;c++)b.push({text:a[c].text});return b};
D.$N=function(a,b){for(var c=[],d=0;d<b.length;d++)c.push({title:b[d].title?b[d].title:null,items:b[d].items?(0,D.ZN)(b[d].items):null,sections:b[d].sections?(0,D.$N)(a,b[d].sections):null});return c};
D.RN=function(){this.Init({skyros:D.aO,alta:D.bO,next:D.cO})};D.w.l(D.RN,D.Hj,"DvtLegendDefaults");D.cO={skin:"next",titleStyle:new D.F("color: #737373;"),_sectionTitleStyle:new D.F("color: #737373;"),layout:{titleGapWidth:17,titleGapHeight:9,symbolGapWidth:7,symbolGapHeight:4,rowGap:4,columnGap:10,sectionGapHeight:16,sectionGapWidth:24}};
D.bO={skin:"alta",textStyle:new D.F("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"),titleStyle:new D.F("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #333333;"),_sectionTitleStyle:new D.F("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #333333;")};
D.aO={skin:"skyros",orientation:"vertical",position:null,backgroundColor:null,borderColor:null,textStyle:new D.F("font-family: tahoma, sans-serif; font-size: 11px; color: #333333;"),titleStyle:new D.F("font-family: tahoma, sans-serif; font-size: 12px; color: #003d5b;"),titleHalign:"start",hiddenCategories:[],hideAndShowBehavior:"off",hoverBehavior:"none",hoverBehaviorDelay:200,scrolling:"asNeeded",halign:"start",valign:"top",drilling:"off",_color:"#a6acb1",_markerShape:"square",_lineWidth:3,layout:{outerGapWidth:3,
outerGapHeight:3,titleGapWidth:8,titleGapHeight:3,symbolGapWidth:5,symbolGapHeight:4,rowGap:0,columnGap:8,sectionGapHeight:6,sectionGapWidth:15},isLayout:!1};D.dO=function(a,b){var c=window.Math.min(D.Ve.cu(a.j(),a.q().textStyle)/14,1);return window.Math.ceil(b*c)};
D.SN=function(a){this.Init(a.j(),a.Od,a);this.Cb=a};D.w.l(D.SN,D.Jj,"DvtLegendEventManager");D.SN.prototype.Hh=function(a){D.SN.o.Hh.call(this,a);var b=(0,D.yj)(this,a.target);if(b){var c=(0,D.eO)(this,b),b=(0,D.fO)(this,b,a);(c||b)&&a.stopPropagation()}};D.SN.prototype.Jy=function(a){D.SN.o.Jy.call(this,a);(a=(0,D.yj)(this,a.target))&&this.Iw(a)};D.SN.prototype.Om=function(a){D.SN.o.Om.call(this,a);(0,D.yj)(this,a.target)};
D.SN.prototype.or=function(a){var b=(0,D.yj)(this,a.target);if(b){a=a.qda;var c=(0,D.eO)(this,b),b=(0,D.fO)(this,b,window.event);(c||b)&&a&&a.preventDefault()}};
D.eO=function(a,b){var c=a.Cb.q().hideAndShowBehavior;if("none"==c||"off"==c)return!1;var d=b.Lc?b.Lc():null;if(!d||0>=d.length)return!1;for(var e=b.Lc()[0],c=a.Cb.q().hiddenCategories||[],c=c.slice(),f=b.Yc(),g=0;g<f.length;g++){var h=f[g];h instanceof D.Yg?h.$H(b.rb()):h instanceof D.C&&(0,D.gO)(b)}d=d[0];D.UN.V_(e,a.Cb)?(c.splice(D.H.wa(c,e),1),e=new D.pl(D.pl.Ny,d)):(c.push(e),e=new D.pl(D.pl.Hw,d));e.hiddenCategories=c;a.Cb.q().hiddenCategories=c;a.Fh(e,a.Cb);return!0};
D.fO=function(a,b,c){return b&&b.Ae&&b.Ae()?(a.Fh(new D.Lj("action",b.Ae(),b.getId()),a.Cb),!0):b instanceof D.XN&&b.Sg()?(c=b.getId(),a.Fh(new D.Nj(c,c,null),a.Cb),!0):(b=b instanceof D.zj?b.$o:null)&&"title"==b.type&&b.isCollapsible?((0,D.hO)(a,c,b.id),!0):!1};
D.SN.prototype.dm=function(a,b,c){a=this.Cb.q();"none"==a.hoverBehavior||b.Yc&&b.Yc()[0]instanceof D.Ke||(b=b.Lc?b.Lc():[],a.highlightedCategories=c?b.slice():null,c=new D.om(c?"categoryRollOver":"categoryRollOut",a.highlightedCategories),a=(0,D.Po)(a.hoverBehaviorDelay),this.DB.Od(c,this.Cb.Aq,a,!0))};D.SN.prototype.sca=function(a,b){var c=b.getId();(0,D.hO)(this,a,c)};
D.hO=function(a,b,c){for(var d=a.Cb.q(),e=0;e<c.length;e++)d=d.sections[c[e]];d.expanded="off"==d.expanded?"on":"off";b.type==D.dk&&(c=(0,D.yj)(a,(0,D.hm)(a,b)),c.zd&&(0,D.vj)(a,c.zd(b)));c=(b=a.Cb.rD())?b.oc():!1;a.Cb.P();b&&a.Cb.V0(b,c);a.Ac();b=a.Cb.es();a.Fh(new D.jC(b.e,b.g,b.x,b.y),a.Cb)};D.SN.prototype.zu=function(){return this.Cb.q()._isScrollingLegend?"touchHold":"touchStart"};
D.VN=function(a,b){this.Init(a,b)};D.w.l(D.VN,D.ck,"DvtLegendKeyboardHandler");D.VN.prototype.Init=function(a,b){D.VN.o.Init.call(this,a);this.Cb=b};
D.VN.prototype.Ch=function(a){var b=a.keyCode,c=this.ea.dd(),d=c&&c.Yc()[0]instanceof D.Ke,e=null;null==c&&9==b?(b=this.Cb.Ur,0<b.length&&((0,D.bi)(a),e=this.pD(b))):c&&(9==b?((0,D.bi)(a),e=c):13==b||32==b?(13==b&&(0,D.fO)(this.ea,c,a),d?this.ea.sca(a,c.Yc()[0]):(0,D.eO)(this.ea,c),(0,D.bi)(a)):d&&(37==b||39==b)?(this.ea.sca(a,c.Yc()[0]),(0,D.bi)(a)):e=D.VN.o.Ch.call(this,a));e&&this.Cb.Npa.scrollIntoView(e.Yc()[0]);return e};
D.XN=function(a,b,c,d,e,f){this.Init(a,b,c,d,e,f)};D.w.l(D.XN,D.w,"DvtLegendObjPeer");D.XN.prototype.Init=function(a,b,c,d,e,f){this.Cb=a;this.je=b;this.Rk=c;this.Xa=(this.Nk=D.UN.i_(this.Rk))?this.Nk:c.title;this.Xm=c.action;this.Dr=f;this.YFa=c._spb;this.Si=d;this.D5=e;this.Ib=!1;if(this.Xm||this.Dr)for(a=0;a<this.je.length;a++)this.je[a].setCursor("pointer")};D.iO=function(a,b,c,d,e,f){if(!a||!c)return null;c=new D.XN(b,a,c,d,e,f);b.O3(c);for(d=0;d<a.length;d++)b.la().Fa(a[d],c);return c};
D.u=D.XN.prototype;D.u.getData=(0,D.s)("Rk");D.u.rb=function(){return this.Rk.color};D.u.getId=(0,D.s)("Xa");D.u.Yc=(0,D.s)("je");D.u.Lc=function(){return null!=this.Nk?[this.Nk]:null};D.u.Ae=(0,D.s)("Xm");D.u.Sg=(0,D.s)("Dr");D.u.pd=(0,D.s)("YFa");
D.u.ec=function(){var a=[],b=this.Cb.q(),c=this.Cb.q().hideAndShowBehavior,d=D.UN.V_(this.Nk,this.Cb),e=this.getData();if(this.je[0]instanceof D.Ke)return a.push((0,D.P)("DvtUtilBundle","off"==e.expanded?"STATE_COLLAPSED":"STATE_EXPANDED")),(0,D.hk)(e.title,a);"off"!=c&&"none"!=c&&a.push((0,D.P)("DvtUtilBundle",d?"STATE_HIDDEN":"STATE_VISIBLE"));this.Sg()&&a.push((0,D.gk)(b,"stateDrillable","DvtUtilBundle","STATE_DRILLABLE"));return null!=e.shortDesc?(0,D.hk)(e.shortDesc,a):0<a.length?(0,D.hk)(e.text,
a):null};D.gO=function(a){!(0,D.Ye)()&&a.je[0]&&a.je[0].Zb("label",a.ec())};D.u=D.XN.prototype;D.u.zd=function(a){return a.type==D.dk?this:(0,D.ek)(this,a,this.Cb.Ur,!0)};D.u.Ce=function(a){return this.je[0]?this.je[0].F(a):new D.y(0,0,0,0)};D.u.wj=function(){return this.je[0]?this.je[0].ta():null};D.u.Ud=function(){this.Ib=!0;this.je[0]&&(this.je[0]instanceof D.Ke?(0,D.xF)(this.je[0]):this.je[0].Qa((0,D.fk)()))};
D.u.ic=function(){this.Ib=!1;this.je[0]&&(this.je[0]instanceof D.Ke?(0,D.Ie)(this.je[0]):this.je[0].V(null))};D.u.oc=(0,D.s)("Ib");D.u.Gf=(0,D.s)("Si");D.u.Be=(0,D.s)("D5");D.u.si=function(){return this.Rk.color};
D.UN={};D.w.l(D.UN,D.w,"DvtLegendRenderer");D.UN.Qxa=5;D.UN.Rxa=2;D.UN.kha=0.6;D.UN.Vga=10;D.UN.Kh=12;D.UN.WN=2;
D.UN.P=function(a,b){var c=a.q(),d=a.j(),e=(0,D.D)(d);c.isLayout||D.UN.Et(a,b);var f=new D.CA(d,b.e,b.g),g=new D.B(d);f.X.k(g);a.k(f);a.Npa=f;var h=(0,D.dO)(a,c.layout.outerGapWidth),i=(0,D.dO)(a,c.layout.outerGapHeight);b.x+=h;b.y+=i;b.e-=2*h;b.g-=2*i;a.P3(b);if(0>=b.e||0>=b.g)return new D.wg(0,0);d=D.UN.TEa(a,g,new D.y(b.x,b.y,b.e,b.g));if(0==d.e||0==d.g)return new D.wg(0,0);(0,D.DA)(f);d.g>b.g?(d.g=b.g,c._isScrollingLegend=!0):c._isScrollingLegend=!1;var k=f=0,l=null!=c.hAlign?c.hAlign:c.halign;
"center"==l?f=b.x-d.x+(b.e-d.e)/2:"end"==l&&(f=e?b.x-d.x:b.x-d.x+b.e-d.e);e=null!=c.vAlign?c.vAlign:c.valign;"middle"==e?k=b.y-d.y+(b.g-d.g)/2:"bottom"==e&&(k=b.y-d.y+b.g-d.g);e=new D.y(d.x+f-h,d.y+k-i,d.e+2*h,d.g+2*i);if(c.isLayout)return e;(f||k)&&(0,D.ik)(g,f,k);c=a.x$;for(g=0;g<c.length;g++)(0,D.xn)(d,c[g].$Ka,c[g].text,c[g].text.Eb().e);return e};
D.UN.TEa=function(a,b,c){var d=a.q();c=c.Y();var e=D.UN.wG(a,b,d.title,c,null,!0);if(e){var f=e.Eb(),g=(0,D.dO)(a,d.layout.titleGapHeight);c.y+=f.g+g;c.g-=window.Math.floor(f.g+g)}a=D.UN.ioa(a,b,d.sections,c,[]);return e?(0,D.qo)(f,a):a};D.UN.Et=function(a,b){var c=a.q(),d=c.backgroundColor,c=c.borderColor;if(d||c){var e=new D.C(a.j(),b.x,b.y,b.e,b.g);d?e.pa(d):(0,D.qi)(e);c&&(e.Qa(c),(0,D.yi)(e));a.k(e)}};
D.UN.wG=function(a,b,c,d,e,f){var g=a.q(),h=b.j(),i=(0,D.D)(h);if(!c)return null;c=new D.Ff(h,c,d.x,d.y);h=g.titleStyle;e&&e.titleStyle?h=new D.F(e.titleStyle):e&&g._sectionTitleStyle&&(h=g._sectionTitleStyle);c.Ha(h);return D.Ve.Qb(c,d.e,window.Infinity,b)?(i&&c.ca(d.x+d.e-c.Eb().e),g.isLayout?b.removeChild(c):(b={},b.isCollapsible=e&&("on"==e.collapsible||!0==e.collapsible),a.la().Fa(c,new D.zj(c.xo(),null,null,b)),f&&a.x$.push({text:c,$Ka:e&&e.titleHalign?e.titleHalign:g.titleHalign})),c):null};
D.UN.ioa=function(a,b,c,d,e){var f=a.q();null==f.symbolWidth&&null==f.symbolHeight?(f.symbolWidth=D.UN.Vga,f.symbolHeight=D.UN.Vga):(null==f.symbolWidth?f.symbolWidth=f.symbolHeight:null==f.symbolHeight&&(f.symbolHeight=f.symbolWidth),f.symbolWidth=(0,window.parseInt)(f.symbolWidth),f.symbolHeight=(0,window.parseInt)(f.symbolHeight));for(var g=(0,D.dO)(a,f.layout.sectionGapHeight),h=(0,D.dO)(a,f.layout.titleGapHeight),i=(0,D.dO)(a,f.layout.sectionGapWidth),k=D.UN.fCa(a),f="vertical"!=f.orientation,
l=null,m=d.Y(),n,o=0;o<c.length;o++){var p=e.concat([o]),r="off"==c[o].expanded||!1==c[o].expanded?h:g;f?(n=D.UN.aoa(a,b,c[o],m,k),n.e>m.e?(m.e<d.e&&(d.y+=n.g+r,d.g-=n.g+r),n=n.e<=d.e?D.UN.aoa(a,b,c[o],d,k):D.UN.loa(a,b,c[o],d,k,p,!0),d.y+=n.g+r,d.g-=n.g+r,m=d.Y()):(m.e-=n.e+i,(0,D.D)(a.j())||(m.x+=n.e+i))):(n=D.UN.loa(a,b,c[o],d,k,p,!1),d.y+=n.g+r,d.g-=n.g+r);l=l?(0,D.qo)(l,n):n}return l};
D.UN.IAa=function(a,b,c,d,e,f,g,h,i,k,l){var m=D.UN.n5(a,d,e+"Enabled",f,g),n=D.UN.n5(a,d,e+"Over",f,g);d=D.UN.n5(a,d,e+"Down",f,g);a=new D.Ke(a,m,n,d,null,i,k,l);b=(0,D.iO)([a],b,c,h,null,!1);a.Td("button");(0,D.gO)(b);return a};D.UN.n5=function(a,b,c,d,e){var f=(0,D.D)(a)?"RTL":"";a=new D.Pe(a,b[c+f]?b[c+f]:b[c],d,e,D.UN.Kh,D.UN.Kh);(0,D.qi)(a);return a};
D.UN.loa=function(a,b,c,d,e,f,g){if(c){var h=a.q(),i=(0,D.dO)(a,h.layout.symbolGapWidth),k=(0,D.dO)(a,h.layout.rowGap),l=(0,D.dO)(a,h.layout.columnGap),m=a.j(),n=(0,D.D)(m);d=d.Y();"off"!=h.scrolling&&(d.g=window.Infinity);var o,p="on"==c.collapsible||!0==c.collapsible;if(p){o=n?d.x+d.e-D.UN.Kh:d.x;if(!h.isLayout){var r="off"==c.expanded||!1==c.expanded,t=r?"closed":"open",r=(0,D.P)("DvtUtilBundle",r?"EXPAND":"COLLAPSE",null),v=a.la(),m=D.UN.IAa(m,a,c,h._resources,t,o,d.y,r,f,v.sca,v);b.k(m)}o=new D.y(o,
d.y,D.UN.Kh,D.UN.Kh);m=(0,D.dO)(a,h.layout.symbolGapWidth);n||(d.x+=D.UN.Kh+m);d.e-=D.UN.Kh+m}p=(p=D.UN.wG(a,b,c.title,d,c,!p&&1>=f.length,f))?p.Eb():new D.y(n?d.x+d.e:d.x,d.y,0,0);p=o?(0,D.qo)(p,o):p;if(!c.items&&!c.sections||"off"==c.expanded||!1==c.expanded)return p;0<p.g&&(m=(0,D.dO)(a,h.layout.titleGapHeight),d.y+=p.g+m,d.g-=p.g+m);c.sections&&(f=D.UN.ioa(a,b,c.sections,d,f),p=(0,D.qo)(p,f));if(!c.items)return p;m=D.UN.oAa(a,d,e,c.items,g);g=m.numCols;f=m.numRows;m=m.width;o=d.y;if(0==f||0==
g)return p;t=f*(e+k)-k;r=window.Math.min(g*(m+l)-l,d.e);p=(0,D.qo)(p,new D.y(n?d.x+d.e-r:d.x,d.y,r,t));if(h.isLayout)return p;h=m-h.symbolWidth-i;i=0;t=1;r=c.items.length;for(v=0;v<r&&!(D.UN.PO(a,b,c.items[v],d,h,e,v),d.y+=e+k,i++,i===f&&t!==g&&(d.y=o,d.e-=m+l,n||(d.x+=m+l),i=0,t++),i===f);v++);return p}};
D.UN.aoa=function(a,b,c,d,e){if(c){var f=a.q(),g=f.symbolWidth,h=(0,D.dO)(a,f.layout.symbolGapWidth),i=(0,D.dO)(a,f.layout.columnGap),k=(0,D.dO)(a,f.layout.titleGapWidth),l=c.items.length,m=(0,D.D)(a.j()),n=d.Y(),o=D.UN.wG(a,b,c.title,d,c,!1),p=o?o.Eb():new D.y(m?d.x+d.e:d.x,d.y,0,0);if(c.items)0<p.e&&(n.e-=p.e+k,m||(n.x+=p.e+k));else return p;var k=[],r=d.e-n.e,t,v;for(v=0;v<l;v++)t=c.items[v],t=window.Math.ceil(D.Ve.E_(a.j(),t.text,f.textStyle)),r+=t+g+h+i,k.push(t);0<l&&(r-=i);p=new D.y(m?d.x+
d.e-r:d.x,d.y,r,window.Math.max(e,p.g));if(f.isLayout||r>d.e)return b.removeChild(o),p;for(v=0;v<l;v++)t=c.items[v],D.UN.PO(a,b,t,n,k[v],e,v),d=k[v]+g+h,n.e-=d+i,m||(n.x+=d+i);return p}};
D.UN.oAa=function(a,b,c,d,e){for(var f=a.q(),g=0,h=0;h<d.length;h++){var i=D.Ve.E_(a.j(),d[h].text,f.textStyle);i>g&&(g=i)}var h=f.symbolWidth,k=(0,D.dO)(a,f.layout.symbolGapWidth),i=(0,D.dO)(a,f.layout.rowGap);a=(0,D.dO)(a,f.layout.columnGap);g=window.Math.ceil(h+k+g);e?(e=window.Math.min(window.Math.floor((b.e+a)/(g+a)),d.length),c=window.Math.min(window.Math.floor((b.g+i)/(c+i)),window.Math.ceil(d.length/e)),e=window.Math.ceil(d.length/c),c=window.Math.ceil(d.length/e)):window.Infinity==b.g?(e=
1,c=d.length):(c=window.Math.min(window.Math.floor((b.g+i)/(c+i)),d.length),e=window.Math.ceil(d.length/c),c=window.Math.ceil(d.length/e));b=window.Math.min(g,(b.e-a*(e-1))/e);return b<h?{width:0,numCols:0,numRows:0}:{width:b,numCols:e,numRows:c}};D.UN.fCa=function(a){var b=a.q(),c=new D.Ff(a.j(),"Test");c.Ha(b.textStyle);c.uf();c=D.Ve.Ah(c).g;a=b.symbolHeight+(0,D.dO)(a,b.layout.symbolGapHeight);return window.Math.ceil(window.Math.max(c,a))};
D.UN.PO=function(a,b,c,d,e,f){var g=a.q(),h=a.j(),i=(0,D.D)(h),k=g.symbolWidth,l=(0,D.dO)(a,g.layout.symbolGapWidth),m=i?d.x+d.e-k:d.x,n=i?d.x+d.e-k-l:d.x+k+l,o=D.UN.MAa(a,m,d.y,f,c),p=c.text,r;if(p&&(r=D.UN.NAa(b,e,p,g.textStyle)))r.ca(n),D.Ve.uR(r,d.y+f/2),i&&r.wh();b.k(o);d=new D.C(h,i?n-e-D.UN.WN:m-D.UN.WN,d.y-D.UN.WN,k+l+e+2*D.UN.WN,f+2*D.UN.WN);(0,D.qi)(d);g=g.hideAndShowBehavior;"none"!=g&&"off"!=g&&d.setCursor("pointer");b.k(d);b=[d,o];null!=r&&b.push(r);r=(0,D.iO)(b,a,c,null!=r?r.xo():null,
c.shortDesc,D.UN.WCa(a,c));D.UN.V_(D.UN.i_(c),a)&&o.$H(r.rb());if("none"!=g&&"off"!=g||null!=c.shortDesc)d.Td("img"),(0,D.gO)(r)};D.UN.WCa=function(a,b){return"on"==b.drilling?!0:"off"==b.drilling?!1:"on"==a.q().drilling};D.UN.NAa=function(a,b,c,d){c=new D.Ff(a.j(),c);c.Ha(d);return c=D.Ve.Qb(c,b,window.Infinity,a)?c:null};
D.UN.MAa=function(a,b,c,d,e){var f=a.q();e.markerShape||(e.markerShape=f._markerShape);e.color||(e.color=f._color);e.lineWidth||(e.lineWidth=f._lineWidth);var g=f.symbolWidth,f=f.symbolHeight,h=c+d/2,i=b+g/2,k=null!=e.type?e.type:e.symbolType;"line"==k?(e.lineWidth=window.Math.min(e.lineWidth,D.UN.Qxa),b=D.UN.$ia(a.j(),b,c,g,d,e)):"lineWithMarker"==k?(e.lineWidth=window.Math.min(e.lineWidth,D.UN.Rxa),b=D.UN.$ia(a.j(),b,c,g,d,e),D.UN.V_(D.UN.i_(e),a)||b.k(D.UN.dW(a,i,h,g*D.UN.kha,f*D.UN.kha,e))):b=
"image"==k?D.UN.p5(a,b,c,g,f,d,e):D.UN.dW(a,i,h,g,f,e);return b};D.UN.p5=function(a,b,c,d,e,f,g){return new D.Pe(a.j(),g.source,b,c+(f-e)/2,d,e)};D.UN.dW=function(a,b,c,d,e,f){var g=a.j(),h=a.q();a=f.markerShape;var i=f.markerColor?f.markerColor:f.color,k=f.pattern;k&&"none"!=k?(d=new D.Yg(g,a,h.skin,0,0,d,e),d.L(new D.Zg(k,i,"#FFFFFF")),(0,D.ik)(d,b,c)):(d=new D.Yg(g,a,h.skin,b,c,d,e),d.pa(i));f.borderColor&&d.Qa(f.borderColor,null,f._borderWidth?f._borderWidth:1);"square"==a&&(0,D.yi)(d);return d};
D.UN.$ia=function(a,b,c,d,e,f){c+=e/2;a=new D.xi(a,b,c,b+d,c);b=new D.I(f.color,1,f.lineWidth);f=f.lineStyle;"dashed"==f?b.Ek((0,D.cg)(f),"4,2,4"):"dotted"==f&&b.Ek((0,D.cg)(f),"2");a.V(b);(0,D.yi)(a);return a};D.UN.i_=function(a){var b=null;return b=a.categories&&0<a.categories.length?a.categories[0]:a.id?a.id:a.text};D.UN.V_=function(a,b){var c=b.q().hiddenCategories;return!c||0>=c.length?!1:-1!==D.H.wa(c,a)};

  return D;
});