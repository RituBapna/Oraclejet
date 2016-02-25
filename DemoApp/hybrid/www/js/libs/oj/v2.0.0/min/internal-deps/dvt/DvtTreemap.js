/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtBaseTreeView'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.nV=function(a,b,c){this.Init(a,b,c)};(0,D.ca)("DvtTreemap",D.nV);D.w.l(D.nV,D.sR,"DvtTreemap");D.nV.newInstance=function(a,b,c){return new D.nV(a,b,c)};D.u=D.nV.prototype;D.u.Init=function(a,b,c){D.nV.o.Init.call(this,a,b,c);this.pf=new D.oV;this.setId("treemap1000"+window.Math.floor(1E9*window.Math.random()))};
D.u.bN=function(a){D.nV.o.bN.call(this,a);a=this.q();this.mf="sliceAndDiceHorizontal"==a.layout?new D.jV(!0):"sliceAndDiceVertical"==a.layout?new D.jV(!1):new D.kV;this.gd=[];var b=a.isolatedNode;if(b&&this.Ka){var c=(0,D.XR)(this.Ka);c.push(this.Ka);for(var d=0;d<c.length;d++)if(c[d].getId()==b){this.gd.push(c[d]);break}}"auto"==a.animationOnDisplay&&(a.animationOnDisplay="alphaFade")};
D.u.$p=function(a){var b="jet"!=this.q()._environment?7:1,b=window.Math.max(window.Math.ceil(b*window.Math.min(a.e,a.g)/400),1);a.x+=b;a.y+=b;a.e-=2*b;a.g-=2*b;b=this.mf.Qaa(this,1);a.x+=b;a.e-=2*b;(0,D.vR)(this,a);this.Cb=D.wR.P(this,a,this.sX);a.x-=b;a.e+=2*b;b=this.gd.length;if(0<b&&this.lX)this.mf.ar(this,this.gd[b-1],a.x,a.y,a.e,a.g,!0);else{this.Ka&&this.mf.ar(this,this.Ka,a.x,a.y,a.e,a.g,!1);for(var c=0;c<b;c++)this.mf.ar(this,this.gd[c],a.x,a.y,a.e,a.g,!0)}};
D.u.Gj=function(a){(0,D.yR)(this,a);this.Ym&&a.k(this.Ym);this.Cb&&(a.k(this.Cb),this.Cb=null);if((0,D.zR)(this)){this.J6=new D.B(this.j());a.k(this.J6);this.bDa?this.bDa.P(a):this.Ka.gf()?(this.Ka.uy(a),(0,D.BR)(this,this.Ka)):this.Ka.P(a);this.w7=new D.B(this.j());a.k(this.w7);this.Mx=new D.B(this.j());a.k(this.Mx);a.k(this.J6);this.vC=new D.eo(this.j(),[]);this.vC.lb(!1);this.vC.qa(!1);(0,D.yi)(this.vC);a.k(this.vC);for(a=0;a<this.gd.length;a++){var b=this.gd[a].ia();this.w7.k(b)}}else(0,D.CR)(this,
a)};D.u.pr=function(){this.zT||(this.X.Aj(),this.$p(new D.y(0,0,this.Ga,this.Ua)),this.Gj(this.X),this.h3());D.nV.o.pr.call(this)};D.u.h3=function(){for(var a=this.Hb?this.Hb.getSelection():[],b=0;b<a.length;b++)if(0<this.gd.length){var c=this.gd[this.gd.length-1];(a[b]==c||a[b].KA(c))&&a[b].jb(!0)}else a[b].jb(!0)};D.u.vw=function(a){return new D.pV(a)};D.u.oI=function(a,b,c,d){return new D.qV(a,b,c,d)};
D.u.Nea=function(a){var b=(0,D.rV)(this);return b?(0,D.sV)(this,D.XU.era(b)):a?(0,D.sV)(this,D.XU.era(a)):null};D.u.QU=function(a){for(var b=0,c=this.Mx.Ja(),d=0;d<c;d++){var e=this.Mx.ha(d);a.zIndex>e.zIndex&&(b=d+1)}b<c?this.Mx.Ma(a,b):this.Mx.k(a)};D.u.HE=function(a,b){return 0<this.gd.length?this.gd[this.gd.length-1].wD(a,b):this.Ka.wD(a,b)};D.rV=function(a){return a.gd&&0<a.gd.length?a.gd[a.gd.length-1]:null};
D.uV=function(a,b){if("none"!=a.q().animationOnDataChange){for(var c=a.Hb?a.Hb.getSelection():[],d=0;d<c.length;d++)c[d].jb(!1);for(var c=[(0,D.tV)(b)],d=(0,D.XR)(b),e=0;e<d.length;e++)c.push((0,D.tV)(d[e]));a.Up=new D.cn(a.j(),c);a.Up.he(a.pr,a);a.fb.ei(a);a.Up.play()}else a.P(null,a.Ga,a.Ua,!0)};D.sV=function(a,b){var c=a.fb.Rf;return c?c.pD(b):b&&0<b.length?b[0]:null};D.nV.prototype.Fj=function(){return(0,D.gk)(this.q(),"componentName","DvtUtilBundle","TREEMAP")};D.nV.prototype.WZ=(0,D.ba)("DvtTreemapBundle");
D.nV.prototype.Vp=function(a){return new D.vV(this,a)};
D.vV=function(a,b){this.Init(a,b);var c=this.H.q(),d=c.nodeDefaults,e=d.header,f=b.header?b.header:{};this.lCa=b.groupLabelDisplay?b.groupLabelDisplay:d.groupLabelDisplay;this.Pr=b.labelDisplay?b.labelDisplay:d.labelDisplay;this.kK=b.labelHalign?b.labelHalign:d.labelHalign;this.C7=b.labelValign?b.labelValign:d.labelValign;this.GCa=f.labelHalign?f.labelHalign:e.labelHalign;this.Ska=f.labelStyle?new D.F(f.labelStyle):null;this.nV="on"==(f.useNodeColor?f.useNodeColor:e.useNodeColor);this.v7=f.isolate?
f.isolate:e.isolate;"auto"==this.v7&&(this.v7=(0,D.Ef)()?"off":"on");this.Nu=null!=c.isolatedNode&&c.isolatedNode==this.getId()};D.w.l(D.vV,D.RR,"DvtTreemapNode");D.u=D.vV.prototype;
D.u.P=function(a){if(this.fv){this.G=this.t5();a.k(this.G);var b;this.gf()?(this.MV=new D.B(this.H.j()),this.G.k(this.MV),this.uy(this.MV)):b=(0,D.SR)(this);if(b){var c=this.q()._cf,d=this.H.Ec;d.Fr=c;var c=this.Ba-8-2,e=this.Ea-4-2;0<c&&0<e&&((0,D.hg)(d,c),(0,D.ig)(d,e),d.Ge((0,D.TR)(this)),this.h5=b=D.x.SH(d,b,this.G),(0,D.D)(a.j())?(a=b.F(),a=this.zb+this.Ba-4-1-a.e):a=this.zb+4+1,(0,D.ik)(b,a,this.Vb+2+1))}else this.Kb=this.QO(this.G),null!=this.Kb&&(this.Yr&&"header"!=this.Uk)&&(a=this.Kb.Eb(),
this.as=new D.C(this.H.j(),a.x,a.y,a.e,a.g),this.as.pa("#FFFFFF"),this.as.qa(!1),this.G.k(this.as),a=this.Kb,"node"==this.Uk&&this.gf()?this.H.J6.k(a):this.G.k(a));this.gf()?this.G.Td("group"):this.G.Td("img");this.Wm()}};
D.u.jb=function(a){D.vV.o.jb.call(this,a);if(this.G){a=this.H.q().nodeDefaults;var b=a.header;if(this.Ca()){var c=this.zb,d=this.Vb+1,e=this.Ba-1,f=this.Ea-1;(0,D.cj)()&&(d-=1);(0,D.yV)(this,this.Yh);(0,D.yV)(this,this.Nx);this.Nx=this.Yh=null;this.Yh=new D.C(this.H.j(),c,d,e,f);this.Yh.qa(!1);this.Yh.L(null);(0,D.yi)(this.Yh);this.G.k(this.Yh);this.Nx=new D.C(this.H.j(),c+1,d+1,e-2,f-2);this.Nx.qa(!1);this.Nx.L(null);(0,D.yi)(this.Nx);this.G.k(this.Nx);"header"==this.Uk?(this.EN||this.oc()?this.qq.pa(b.hoverBackgroundColor):
(this.qq.pa(b.selectedBackgroundColor),this.Kb&&(0,D.zV)(this,this.Kb,"_selectedLabelStyle")),this.Yh.Qa(b.selectedOuterColor),this.Nx.Qa(b.selectedInnerColor),(0,D.Ef)()&&(this.xe=(0,D.AV)(this,this.G))):(this.Yh.Qa(a.selectedOuterColor),this.Nx.Qa(a.selectedInnerColor),!(0,D.qq)()&&!(0,D.dj)()&&(0,D.Do)(this.G,D.ER),this.H.QU(this.G))}else(0,D.yV)(this,this.Nx),this.Nx=null,(0,D.Ef)()&&(0,D.BV)(this),"header"==this.Uk?(this.EN||this.oc()?this.qq.pa(b.hoverBackgroundColor):((0,D.CV)(this,this.G,
this.qq),this.Kb&&(this.hu()?(0,D.zV)(this,this.Kb,"_drillableLabelStyle"):(0,D.zV)(this,this.Kb,"labelStyle"))),this.Yh&&(this.EN||this.oc()?this.Yh.Qa(b.hoverOuterColor):((0,D.yV)(this,this.Yh),this.Yh=null))):((0,D.Mz)(this.G),this.Yh&&((0,D.yV)(this,this.Yh),this.Yh=null),(a=this.kg)&&a.MV&&a.MV.k(this.G))}};
D.u.Ob=function(){if(this.G&&this.fv){var a=this.H.q().nodeDefaults,b=a.header,c=(0,D.rV)(this.H);if(!(null!=c&&c!=this&&!this.KA(c))){var c=[],d,e,f,g;"header"==this.Uk?(this.qq.pa(b.hoverBackgroundColor),this.Yh||(a=this.zb,d=this.Vb+1,e=this.Ba-1,f=this.Ea-1,(0,D.cj)()&&(d-=1),this.Yh=new D.C(this.H.j(),a,d,e,f),this.Yh.qa(!1),this.Yh.L(null),(0,D.yi)(this.Yh),this.G.k(this.Yh)),this.Yh.Qa(this.Ca()?b.selectedOuterColor:b.hoverOuterColor),d=this.zb+1.5+1,f=this.zb+this.Ba-1.5-1,e=this.Vb+this.gp,
g=this.Vb+this.Ea-1.5-1,c.push(f,e,f,g,d,g,d,e),a=new D.I(b.hoverInnerColor,0.8,3),this.Kb&&(this.hu()?(0,D.zV)(this,this.Kb,"_drillableHoverLabelStyle"):(0,D.zV)(this,this.Kb,"_hoverLabelStyle"))):(d=this.zb+1,f=this.zb+this.Ba-1,e=this.Vb+1,g=this.Vb+this.Ea-1,c.push(this.zb,e,f,e,f,g,d,g,d,e),a=new D.I(a.hoverColor,1,2));b=this.H;b.vC.vc(c);b.vC.V(a);b.vC.lb(!0)}}};
D.u.Db=function(){if(this.G&&this.fv){var a=this.H.q().nodeDefaults.header;"header"==this.Uk&&(this.Ca()?(this.qq.pa(a.selectedBackgroundColor),this.Yh.Qa(a.selectedOuterColor),this.Kb&&(this.hu()?(0,D.zV)(this,this.Kb,"_drillableSelectedLabelStyle"):(0,D.zV)(this,this.Kb,"_selectedLabelStyle"))):((0,D.CV)(this,this.G,this.qq),this.Yh&&(this.G.removeChild(this.Yh),this.Yh=null),this.Kb&&(this.hu()?(0,D.zV)(this,this.Kb,"_drillableLabelStyle"):(0,D.zV)(this,this.Kb,"labelStyle"))));this.H.vC.lb(!1)}};
D.u.Ee=function(a,b){this.gf()?(this.Kb&&this.Kb.B(b),"header"==this.Uk&&(this.nV&&this.qq)&&this.qq.B(b)):D.vV.o.Ee.call(this,a,b)};D.u.my=function(){return"off"!=this.v7&&"header"==this.Uk};D.u.qH=function(a){return!a||!a.PL()?D.vV.o.qH.call(this,a):new D.y(this.zb,this.Vb,this.Ba,this.Ea)};
D.u.zd=function(a){var b;if(a.type==D.dk)return D.vV.o.zd.call(this,a);b=a.keyCode;if(32==b&&a.ctrlKey)return this;if(38==b&&a.altKey||221==b)(b=this.kg)&&b.getId()!=this.H.Ka.getId()?(a=b,(0,D.ZR)(b)):a=this;else if(40==b&&a.altKey||219==b)a=(a=this.qX)?a:this.gf()?(0,D.sV)(this.H,this.xc()):this;else{var c=(0,D.rV)(this.H),d=0;if(c)if(this==c)d=0;else{b=this.kg;for(d=1;c!=b;)d++,b=b.kg}else{for(c=this;c.kg;)c=c.kg;d=(0,D.VR)(this)}b=(0,D.UR)(this,c,d);a=(0,D.ek)(this,a,b)}(0,D.ZR)(a);return a};
D.u.Ce=function(){return new D.y(this.zb,this.Vb,this.Ba,this.Ea)};D.u.wj=function(){return this.G?this.G.ta():null};
D.u.mT=function(a,b,c,d){if(!(0>=c||0>=d)){this.fv=!0;this.ana=this.Nm();this.zb=a;this.Vb=b;this.Ba=c?c:0;this.Ea=d?d:0;this.Uk=this.gf()?this.lCa:this.Pr;this.dD||(this.Uk="off");if("header"==this.Uk){this.gp=15;a=new D.Ff(this.H.j(),this.dD);a.Ge((0,D.TR)(this));(0,D.zV)(this,a,"labelStyle");a=D.Ve.Ah(a).g;this.gp=window.Math.max(this.gp,a);this.my()&&(this.gp=window.Math.max(this.gp,15));a=this.zb;b=this.Vb+this.gp;c=this.Ba;d=this.Ea-this.gp;if(0<=c&&0<=d)return new D.y(a,b,c,d);this.Uk=null}return new D.y(this.zb,
this.Vb,this.Ba,this.Ea)}};D.u.wD=function(a,b){if(this.contains(a,b)||!this.fv){for(var c=this.xc(),d=0;d<c.length;d++)if(c[d].contains(a,b))return c[d].wD(a,b);if(this.fv)return this}return null};D.u.contains=function(a,b){return a>=this.zb&&a<=this.zb+this.Ba&&b>=this.Vb&&b<=this.Vb+this.Ea};D.u.Nm=function(){var a=D.M.qe(this.fk),b=D.M.oe(this.fk),c=D.M.ne(this.fk);return[this.zb,this.Vb,this.Ba,this.Ea,a,b,c,this.gf()?0:window.Math.random()]};
D.u.sr=function(a){this.mT(a[0],a[1],a[2],a[3]);this.fk=D.M.WA(window.Math.round(a[4]),window.Math.round(a[5]),window.Math.round(a[6]));this.G&&((0,D.$H)(this.G,this.zb,this.Vb,this.Ba,this.Ea),this.qq&&(0,D.$H)(this.qq,this.zb+1,this.Vb+1,this.Ba-2,this.Ea-2),("header"!=this.Uk||this.nV)&&this.G.L(this.vI()),this.Ca()&&this.jb(!1),(0,D.yV)(this,this.zz),(0,D.yV)(this,this.jR),this.jR=this.zz=null,(0,D.BV)(this),(0,D.SR)(this)?((0,D.yV)(this,this.h5),this.h5=null):((0,D.yV)(this,this.as),this.as=
null,this.Kb&&this.Kb.getParent().removeChild(this.Kb),this.Kb=this.QO(this.G)))};D.tV=function(a){if(a.ana){var b=new D.en(a.H.j(),a,0.3);(0,D.T)(b.J,"typeNumberArray",a,a.Nm,a.sr,a.Nm());a.sr(a.ana);return b}return null};D.vV.prototype.ff=function(a,b){return 0==(0,D.VR)(this)||b.fv&&0<b.Ba&&0<b.Ea?D.vV.o.ff.call(this,a,b):this.pg(a)};
D.vV.prototype.t5=function(){var a=this.H.j(),b;if("header"==this.Uk)b=new D.C(a,this.zb,this.Vb,this.Ba,this.Ea),this.qq=new D.C(a,this.zb+1,this.Vb+1,this.Ba-2,this.Ea-2),(0,D.CV)(this,b,this.qq),this.qq.qa(!1),b.k(this.qq),this.Nu&&(this.xe=(0,D.AV)(this,b));else{var c=this.vI();b=new D.C(a,this.zb,this.Vb,this.Ba,this.Ea);if((1E3>this.H.Vr||!(0,D.Ef)())&&2<=this.Ba&&2<=this.Ea){new D.I("#FFFFFF");new D.I("#000000",0.3);this.Yr&&new D.I(this.fk,0.15);var d=this.rb(),e=D.M.sM("#FFFFFF",d,0.7),d=
D.M.sM("#000000",d,0.7),f=window.Math.min(this.Ba,this.Ea);4<=f?(b.pa(d),this.jR=new D.C(a,this.zb,this.Vb,this.Ba-1,this.Ea-1),this.jR.pa(e),this.jR.qa(!1),b.k(this.jR),this.zz=new D.C(a,this.zb+1,this.Vb+1,this.Ba-2,this.Ea-2),this.zz.L(c),this.zz.qa(!1),b.k(this.zz)):2<=f?(b.pa(d),this.zz=new D.C(a,this.zb,this.Vb,this.Ba-1,this.Ea-1),this.zz.L(c),this.zz.qa(!1),b.k(this.zz)):b.L(c)}else b.L(c)}this.H.la().Fa(b,this);this.Aa()?b.Jf(!0):b.setCursor("default");b.zIndex=this.nZ;return b};
D.AV=function(a,b){if("header"!=a.Uk||!a.my())return null;var c=null,d=a.zb,e=a.zb+a.Ba-1,f=a.Vb+1,g=a.Vb+a.gp;if(12<e-d-2){if(a.Nu){var c=a.H.j(),h=(0,D.D)(a.U),i=a.H.q()._resources,k=h&&i.restoreDownRtl?i.restoreDownRtl:i.restoreDown,l=h&&i.restoreOverRtl?i.restoreOverRtl:i.restoreOver,h=new D.Pe(c,h&&i.restoreRtl?i.restoreRtl:i.restore,0,0,12,12),k=new D.Pe(c,k,0,0,12,12),l=new D.Pe(c,l,0,0,12,12);(0,D.qi)(h);(0,D.qi)(k);(0,D.qi)(l);c=new D.Ke(c,h,k,l);c.ka(D.dk,a.Cha,!1,a)}else c=a.H.j(),h=(0,D.D)(a.U),
i=a.H.q()._resources,k=h&&i.isolateDownRtl?i.isolateDownRtl:i.isolateDown,l=h&&i.isolateOverRtl?i.isolateOverRtl:i.isolateOver,h=new D.Pe(c,h&&i.isolateRtl?i.isolateRtl:i.isolate,0,0,12,12),k=new D.Pe(c,k,0,0,12,12),l=new D.Pe(c,l,0,0,12,12),(0,D.qi)(h),(0,D.qi)(k),(0,D.qi)(l),c=new D.Ke(c,h,k,l),c.ka(D.dk,a.Bha,!1,a);d=(0,D.D)(b.j())?d+1:e-12-1;(0,D.ik)(c,d,(g+f-12)/2);b.k(c);(0,D.Ef)()&&(f=new D.C(b.j(),-2,-2,16,16),(0,D.qi)(f),c.k(f));(0,D.PH)(a.H.q().skin)?a.H.la().Fa(c,a):(f=(0,D.gk)(a.H.q(),
a.Nu?"tooltipRestore":"tooltipIsolate","DvtTreemapBundle",a.Nu?"RESTORE":"ISOLATE"),a.H.la().Fa(c,new D.AR(a,a.getId(),f)))}return c};D.BV=function(a){a.xe&&((0,D.yV)(a,a.xe),a.xe=null)};
D.vV.prototype.QO=function(a){var b=(0,D.D)(a.j());if(!this.dD||!a||!this.Uk||"off"==this.Uk)return null;var c=this.Ea;if((0,D.TR)(this)>c)return null;var d="node"==this.Uk?this.kK:this.GCa;b&&("start"==d?d="end":"end"==d&&(d="start"));var e=this.Ba-6,f=0;this.my()&&(f=13,e="center"==d?e-2*f:e-f);if(0>=e)return null;var g=new D.Ff(this.H.j(),this.dD);g.Ge((0,D.TR)(this));"start"==d?(b?g.ca(this.zb+4+f):g.ca(this.zb+4),g.vh()):"center"==d?(g.ca(this.zb+this.Ba/2),g.Xe()):"end"==d&&(b?g.ca(this.zb+
this.Ba-4):g.ca(this.zb+this.Ba-4-f),g.wh());"node"==this.Uk?((0,D.dS)(this,g),c=this.Ea-4,b=D.Ve.uH(g),"top"==this.C7?g.va(this.Vb+2):"center"==this.C7?g.va(this.Vb+this.Ea/2-b/2):"bottom"==this.C7&&g.va(this.Vb+this.Ea-2-b)):"header"==this.Uk&&(b=(0,D.cj)()?1:0,g.va(this.Vb+1+this.gp/2+b),g.uf(),(0,D.zV)(this,g,"labelStyle"));if(null!=g)return"header"==this.Uk&&this.hu()?((0,D.zV)(this,g,"_drillableLabelStyle"),g.setCursor("pointer"),b=new D.AR(this,this.getId(),null,this.Be(),this.si()),b.jda(!0),
this.H.la().Fa(g,b)):g.qa(!1),D.Ve.Qb(g,e,c,a)?g:null};D.CV=function(a,b,c){var d=a.H.q().nodeDefaults.header;a.nV?(a=a.rb(),c.pa(a),c=D.M.sM(d.borderColor,a,0.5),b.pa(c)):(b.pa(d.borderColor),c.pa(d.backgroundColor))};D.zV=function(a,b,c){var d=[];1>=(0,D.VR)(a)&&d.push(new D.F("font-weight:bold;"));d.push(a.H.q().nodeDefaults.header[c]);a.nV&&("labelStyle"==c||"_drillableLabelStyle"==c)&&d.push(new D.F("color: "+(a.Yr?"#000000":D.M.rj(a.fk))));a.Ska&&d.push(a.Ska);b.Ha((0,D.vo)(d))};
D.vV.prototype.eu=function(){!this.xe&&!(0,D.Ef)()&&(this.xe=(0,D.AV)(this,this.G));D.vV.o.eu.call(this)};D.vV.prototype.du=function(){!0!==this.Nu&&!(0,D.Ef)()&&(0,D.BV)(this);D.vV.o.du.call(this)};D.vV.prototype.eH=function(){return this.G?new D.C(this.H.j(),this.G.ja(),this.G.na(),this.G.getWidth(),this.G.getHeight()):null};D.yV=function(a,b){b&&a.G.removeChild(b)};D.u=D.vV.prototype;
D.u.Bha=function(a){this.Nu=!0;this.Db();var b=this.H,c=b.la().dd();c&&c.ic();b.gd.push(this);b.q().isolatedNode=this.getId();b.dispatchEvent(new D.xV(this.getId()));b.lX=!0;b.$p(new D.y(0,0,b.Ga,b.Ua));b.lX=!1;c=this.ia();b.w7.k(c);(0,D.uV)(b,this);(0,D.BV)(this);this.Wm();a&&a.stopPropagation()};
D.u.Cha=function(a){this.Nu=!1;this.Db();var b=this.H,c=b.gd.pop();b.q().isolatedNode=0<b.gd.length?b.gd[b.gd.length-1].getId():null;var d=b.la().dd();d&&d.ic();d=c.getId();b.cQ=d;b.dispatchEvent(new D.xV);b.lX=!0;b.$p(new D.y(0,0,b.Ga,b.Ua));b.lX=!1;(0,D.uV)(b,c);(0,D.BV)(this);this.Wm();a&&a.stopPropagation()};D.u.Be=function(a,b,c){return a&&a instanceof D.Ke?null:D.vV.o.Be.call(this,a,b,c)};D.u.si=function(a){return a&&a instanceof D.Ke?null:D.vV.o.si.call(this,a)};
D.u.Gf=function(a){return a&&a instanceof D.Ke?(0,D.gk)(this.H.q(),this.Nu?"tooltipRestore":"tooltipIsolate","DvtTreemapBundle",this.Nu?"RESTORE":"ISOLATE"):null};
D.u.ec=function(){var a=this.H.q(),b=[];this.Aa()&&b.push((0,D.gk)(a,this.Ca()?"stateSelected":"stateUnselected","DvtUtilBundle",this.Ca()?"STATE_SELECTED":"STATE_UNSELECTED"));this.Nu&&b.push((0,D.gk)(a,"stateIsolated","DvtUtilBundle","STATE_ISOLATED"));this.hu()&&b.push((0,D.gk)(a,"stateDrillable","DvtUtilBundle","STATE_DRILLABLE"));return(0,D.hk)(this.zc(),b)};D.u.Wm=function(){!(0,D.Ye)()&&this.G&&this.G.Zb("label",this.ec())};
D.hV=function(){this.Init()};D.w.l(D.hV,D.w,"DvtBaseTreemapLayout");D.hV.prototype.Init=function(){this.nZ=0};D.hV.prototype.ar=(0,D.j)();D.iV=function(a,b,c,d,e,f,g){b.nZ=a.nZ;a.nZ++;if(!g||!b.gf()){a=a.Qaa(b.H,(0,D.VR)(b));g=window.Math.round(c+a);var h=window.Math.round(d+a);if(b=b.mT(g,h,window.Math.round(c+e-a)-g,window.Math.round(d+f-a)-h))return b}return new D.y(c,d,e,f)};D.hV.prototype.Qaa=function(a,b){var c=a.q().groupGaps;return"outer"==c?1==b&&2<=a.st?3:0:"all"==c?b<a.st?3:0:0};
D.kV=function(){this.Init()};D.w.l(D.kV,D.hV,"DvtSquarifyingLayout");D.kV.prototype.ar=function(a,b,c,d,e,f,g){this.mf(b,c,d,e,f,g?!1:!0)};D.kV.prototype.mf=function(a,b,c,d,e,f){b=(0,D.iV)(this,a,b,c,d,e,f);a=a.xc();if(null!=a&&0<a.length){c=a;e=b.e*b.g;for(d=d=f=0;d<c.length;d++)f+=0<c[d].Sc()?c[d].Sc():0;e=0==e?0:e/f;for(d=0;d<c.length;d++)f=c[d],f.IE=f.Sc()*e;a=a.slice(0).sort(function(a,b){return a.Sc()-b.Sc()});c=window.Math.min(b.e,b.g);(0,D.lV)(this,a,c,new D.y(b.x,b.y,b.e,b.g))}};
D.lV=function(a,b,c,d){var e=[],f=window.Infinity;if(null==b||0==b.length)(0,D.mV)(a,e,c,d);else for(;0<b.length;){var g=b.pop();if(0>g.IE){(0,D.mV)(a,e,c,d);break}e.push(g);var h,i=e,k=c,l=0;h=window.Infinity;for(var m=-window.Infinity,n=0;n<i.length;n++)l+=i[n].IE,h=window.Math.min(h,i[n].IE),m=window.Math.max(m,i[n].IE);i=l*l;k*=k;h=window.Math.max(k*m/i,i/(k*h));if(h>f){b.push(g);e.pop();d=(0,D.mV)(a,e,c,d);(0,D.lV)(a,b,window.Math.min(d.e,d.g),d);break}else if(0==b.length){(0,D.mV)(a,e,c,d);
break}else f=h}};D.mV=function(a,b,c,d){var e=0,f;for(f=0;f<b.length;f++)e+=b[f].IE;var g=d.x,h=d.y;if(c==d.e){e=0==c?0:e/c;for(f=0;f<b.length;f++)c=b[f].IE/e,a.mf(b[f],g,h,c,e,!1),g+=c;return new D.y(d.x,d.y+e,d.e,d.g-e)}c=0==c?0:e/c;for(f=0;f<b.length;f++)e=b[f].IE/c,a.mf(b[f],g,h,c,e,!1),h+=e;return new D.y(d.x+c,d.y,d.e-c,d.g)};
D.jV=function(a){this.Init();this.px=a};D.w.l(D.jV,D.hV,"DvtSliceAndDiceLayout");D.jV.prototype.ar=function(a,b,c,d,e,f,g){this.mf(this.px,a,b,c,d,e,f,g?!1:!0)};
D.jV.prototype.mf=function(a,b,c,d,e,f,g,h){var i=b.q();d=(0,D.iV)(this,c,d,e,f,g,h);c=c.xc();if(null!=c){e=d.x;f=d.y;g=d.e;h=d.g;var k=0,l;for(l=0;l<c.length;l++)k+=0<c[l].Sc()?c[l].Sc():0;"on"==i.sorting&&(c=c.slice(0),c.sort(function(a,b){return b.Sc()-a.Sc()}));a&&(0,D.D)(b.j())&&(c=c.slice(0).reverse());for(l=0;l<c.length;l++)if(i=c[l],!(0>=i.Sc())){var m=i.Sc()/k;a?g=d.e*m:h=d.g*m;this.mf(!a,b,i,e,f,g,h,!1);a?e+=g:f+=h}}};
D.xV=function(a){this.Init("treemapIsolate");this.Xa=a?a:null};(0,D.ca)("DvtTreemapIsolateEvent",D.xV);D.w.l(D.xV,D.Fi,"DvtTreemapIsolateEvent");D.xV.TYPE="treemapIsolate";D.xV.prototype.getId=(0,D.s)("Xa");D.xV.prototype.getId=D.xV.prototype.getId;
D.pV=function(a){this.Init(a)};D.w.l(D.pV,D.YU,"DvtTreemapKeyboardHandler");D.pV.prototype.sg=function(a){var b=D.pV.o.sg.call(this,a);if(!b&&(a=a.keyCode,219==a||221==a))b=!0;return b};
D.qV=function(a,b,c,d){D.NR.call(this,a,b,c,d)};D.w.l(D.qV,D.NR,"DvtTreemapEventManager");D.qV.prototype.Ih=function(a){var b=!0;if(13==a.keyCode&&a.ctrlKey){var c=this.dd();c.my()&&(c.Nu?c.Cha():c.Bha());(0,D.bi)(a)}else b=D.qV.o.Ih.call(this,a);return b};D.qV.prototype.Pba=(0,D.ba)(!1);
(0,D.xg)("DvtTreemapBundle",{COLOR:"Color",ISOLATE:"Isolate",OTHER:"Other",RESTORE:"Restore",SIZE:"Size"});
D.oV=function(){this.Init({skyros:D.wV,alta:{}})};D.w.l(D.oV,D.MR,"DvtTreemapDefaults");
D.wV={groupGaps:"outer",nodeDefaults:{header:{backgroundColor:"#FFFFFF",borderColor:"#d6dfe6",hoverBackgroundColor:"#ebeced",hoverOuterColor:"#ebeced",hoverInnerColor:"#d6d7d8",isolate:"auto",labelHalign:"start",labelStyle:new D.F("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;color:#252525;"),selectedBackgroundColor:"#dae9f5",selectedInnerColor:"#FFFFFF",selectedOuterColor:"#000000",useNodeColor:"off",_hoverLabelStyle:new D.F("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;color:#252525;"),
_selectedLabelStyle:new D.F("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;color:#252525;"),_drillableLabelStyle:new D.F("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; color:#145c9e;"),_drillableHoverLabelStyle:new D.F("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; color:#145c9e;"),_drillableSelectedLabelStyle:new D.F("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; color:#145c9e;")},
hoverColor:"#ebeced",groupLabelDisplay:"header",labelDisplay:"node",labelHalign:"center",labelValign:"center",selectedInnerColor:"#FFFFFF",selectedOuterColor:"#000000"}};

  return D;
});