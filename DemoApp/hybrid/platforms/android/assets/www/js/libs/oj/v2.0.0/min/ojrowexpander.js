/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdatasource-common"],function(b,f){b.Pe=function(a,b){this.jpa=a;this.Zb=b};o_("EmptyNodeSet",b.Pe,b);b.Pe.prototype.getParent=function(){return this.jpa};b.b.g("EmptyNodeSet.prototype.getParent",{getParent:b.Pe.prototype.getParent});b.Pe.prototype.ta=function(){return this.Zb};b.b.g("EmptyNodeSet.prototype.getStart",{ta:b.Pe.prototype.ta});b.Pe.prototype.R=function(){return 0};b.b.g("EmptyNodeSet.prototype.getCount",{R:b.Pe.prototype.R});
b.Pe.prototype.getData=function(){return null};b.b.g("EmptyNodeSet.prototype.getData",{getData:b.Pe.prototype.getData});b.Pe.prototype.getMetadata=function(){return null};b.b.g("EmptyNodeSet.prototype.getMetadata",{getMetadata:b.Pe.prototype.getMetadata});b.Qe=function(a,b){this.zb=a;this.Zb=b};o_("FlattenedNodeSet",b.Qe,b);b.Qe.prototype.getParent=function(){return this.zb.getParent()};b.b.g("FlattenedNodeSet.prototype.getParent",{getParent:b.Qe.prototype.getParent});b.Qe.prototype.ta=function(){return void 0!=
this.Zb?this.Zb:this.zb.ta()};b.b.g("FlattenedNodeSet.prototype.getStart",{ta:b.Qe.prototype.ta});b.Qe.prototype.R=function(){void 0===this.tE&&(this.tE=this.UV(this.zb,0),void 0!=this.Zb&&(this.tE-=this.Zb));return this.tE};b.b.g("FlattenedNodeSet.prototype.getCount",{R:b.Qe.prototype.R});b.Qe.prototype.UV=function(a,b){var c,e,f,h;c=a.ta();e=a.R();b+=e;if(a.Kf)for(f=0;f<e;f++)h=a.Kf(f+c),null!=h&&(b=this.UV(h,b));return b};b.Qe.prototype.getData=function(a){return this.SI(this.zb,a,{index:this.zb.ta()},
this.Za)};b.b.g("FlattenedNodeSet.prototype.getData",{getData:b.Qe.prototype.getData});b.Qe.prototype.getMetadata=function(a){return this.SI(this.zb,a,{index:this.zb.ta()},this.iJ)};b.b.g("FlattenedNodeSet.prototype.getMetadata",{getMetadata:b.Qe.prototype.getMetadata});b.Qe.prototype.iJ=function(a,b){return a.getMetadata(b)};b.Qe.prototype.Za=function(a,b){return a.getData(b)};b.Qe.prototype.SI=function(a,b,c,e){var f,h,k,l;f=a.ta();h=a.R();for(k=0;k<h;k++){l=c.index;if(l===b)return e.call(this,
a,k+f);c.index=l+1;if(a.Kf&&(l=a.Kf(k+f),null!=l&&(l=this.SI(l,b,c,e),null!=l)))return l}return null};b.Ng=function(a,b,c){this.Qo=a;this.AO=b;this.zO=this.Nca(c)};o_("MergedNodeSet",b.Ng,b);b.Ng.prototype.Nca=function(a){var b,c,e;b=this.Qo.ta();for(c=b+this.Qo.R();b<c;b++)if(e=this.Qo.getMetadata(b).key,a===e)return b;return c-1};b.Ng.prototype.getParent=function(){return this.Qo.getParent()};b.b.g("MergedNodeSet.prototype.getParent",{getParent:b.Ng.prototype.getParent});b.Ng.prototype.ta=function(){return this.Qo.ta()};
b.b.g("MergedNodeSet.prototype.getStart",{ta:b.Ng.prototype.ta});b.Ng.prototype.R=function(){return this.Qo.R()+this.AO.R()};b.b.g("MergedNodeSet.prototype.getCount",{R:b.Ng.prototype.R});b.Ng.prototype.getData=function(a){a=this.HW(a);return a.set.getData(a.index)};b.b.g("MergedNodeSet.prototype.getData",{getData:b.Ng.prototype.getData});b.Ng.prototype.getMetadata=function(a){a=this.HW(a);return a.set.getMetadata(a.index)};b.b.g("MergedNodeSet.prototype.getMetadata",{getMetadata:b.Ng.prototype.getMetadata});
b.Ng.prototype.HW=function(a){if(a<=this.zO)return{set:this.Qo,index:a};var b=this.AO.R();return a>this.zO+b?{set:this.Qo,index:a-b}:{set:this.AO,index:a-(this.zO+1)}};b.Te=function(a,b,c,e){this.zb=a;this.Mj=b;this.Ku=c;this.Li=e};o_("NodeSetWrapper",b.Te,b);b.Te.prototype.getParent=function(){return this.zb.getParent()};b.b.g("NodeSetWrapper.prototype.getParent",{getParent:b.Te.prototype.getParent});b.Te.prototype.ta=function(){return null!=this.Ku?this.Ku.start:this.zb.ta()};b.b.g("NodeSetWrapper.prototype.getStart",
{ta:b.Te.prototype.ta});b.Te.prototype.R=function(){var a,b;a=this.zb.ta();b=this.zb.R();null!=this.Ku&&(this.Ku.start>a?b=Math.min(0,b-(this.Ku.start-a)):this.Ku.start<a&&(b=0));return b};b.b.g("NodeSetWrapper.prototype.getCount",{R:b.Te.prototype.R});b.Te.prototype.getData=function(a){return this.zb.getData(a)};b.b.g("NodeSetWrapper.prototype.getData",{getData:b.Te.prototype.getData});b.Te.prototype.getMetadata=function(a){var b;b=this.zb.getMetadata(a);b.index=a;b.parentKey=this.getParent();this.Mj.call(null,
b.key,b);return b};b.b.g("NodeSetWrapper.prototype.getMetadata",{getMetadata:b.Te.prototype.getMetadata});b.Te.prototype.Kf=function(a){return null!=this.Li&&-1!=this.Li.indexOf(this.zb.getMetadata(a).key)||!this.zb.Kf||(a=this.zb.Kf(a),null==a)?null:new b.Te(a,this.Mj,null,this.Li)};b.b.g("NodeSetWrapper.prototype.getChildNodeSet",{Kf:b.Te.prototype.Kf});b.ca=function(a,d){this.Cd=a;this.$y=d||{};b.ca.q.constructor.call(this)};o_("FlattenedTreeDataSource",b.ca,b);b.b.ga(b.ca,b.Ti,"oj.FlattenedTreeDataSource");
b.ca.prototype.Init=function(){var a;b.ca.q.Init.call(this);this.Cd.on("change",this.Bfa.bind(this));this.uO=parseInt(this.$y.fetchSize,10);isNaN(this.uO)&&(this.uO=25);this.rr=parseInt(this.$y.maxCount,10);isNaN(this.rr)&&(this.rr=500);a=this.$y.expanded;Array.isArray(a)?this.ym=a:("all"===a&&(this.Li=[]),this.ym=[]);this.xm=[]};b.b.g("FlattenedTreeDataSource.prototype.Init",{Init:b.ca.prototype.Init});b.ca.prototype.handleEvent=function(a,d){return b.ca.q.handleEvent.call(this,a,d)};b.b.g("FlattenedTreeDataSource.prototype.handleEvent",
{handleEvent:b.ca.prototype.handleEvent});b.ca.prototype.Oe=function(){delete this.xm;delete this.ym;delete this.Li;this.Cd.off("change");this.Cd.Oe&&this.Cd.Oe()};b.b.g("FlattenedTreeDataSource.prototype.Destroy",{Oe:b.ca.prototype.Oe});b.ca.prototype.GN=function(){return this.uO};b.ca.prototype.Q2=function(){return this.ym};b.b.g("FlattenedTreeDataSource.prototype.getExpandedKeys",{Q2:b.ca.prototype.Q2});b.ca.prototype.Dy=function(a){return null!=this.$y?this.$y[a]:null};b.b.g("FlattenedTreeDataSource.prototype.getOption",
{Dy:b.ca.prototype.Dy});b.ca.prototype.getWrappedDataSource=function(){return this.Cd};b.b.g("FlattenedTreeDataSource.prototype.getWrappedDataSource",{getWrappedDataSource:b.ca.prototype.getWrappedDataSource});b.ca.prototype.WI=function(a){var b,c;b=this.GN();c=this.rr;return-1===b?-1===a?c:a:-1===a?Math.min(b,a):b};b.ca.prototype.Ho=function(a,b){this.Dt()?this.Ica(a,b):this.Hca(a,b)};b.ca.prototype.Hca=function(a,d){var c,e,f,h,k,l;if(a.start>this.Ee()){c=this.gJ();if(0>this.Ee()){a.count=Math.min(c,
a.count);this.Cd.Hf(null,a,{success:function(b){this.Un(b,null,0,a,0,d)}.bind(this),error:function(a){this.Ql(a,d)}.bind(this)});return}if(0<c){e=this.nW();f=e.parent;h=this.Cd.af(f);k=e.index;l=e.depth;-1===h||k<h-1?(e=this.WI(h),a.start=k+1,a.count=-1===h?e:Math.min(c,Math.min(e,h-a.start)),this.Cd.Hf(f,a,{success:function(b){this.Un(b,f,l,a,h,d)}.bind(this),error:function(a){this.Ql(a,d)}.bind(this)})):k===h-1?(c=new b.Pe(null,a.start),null!=d&&null!=d.success&&d.success.call(null,c)):(c=this.rV(f,
l,d,c),c||(c=new b.Pe(null,a.start),null!=d&&null!=d.success&&d.success.call(null,c)));return}}this.TN(a,d)};b.ca.prototype.pd=function(a,b,c){return this.Cd.pd(a,b,c)};b.b.g("FlattenedTreeDataSource.prototype.moveOK",{pd:b.ca.prototype.pd});b.ca.prototype.move=function(a,b,c,e){this.Cd.move(a,b,c,e)};b.b.g("FlattenedTreeDataSource.prototype.move",{move:b.ca.prototype.move});b.ca.prototype.gJ=function(){return this.rr-(this.Ee()+1)};b.ca.prototype.Ql=function(a,b){null!=b&&null!=b.error&&b.error.call(null,
a)};b.ca.prototype.Un=function(a,d,c,e,f,h){var k;k=[];a=new b.Te(a,this.Ky.bind(this),e);this.Oia(a,d,c,k);-1===f&&0===a.R()&&null!=d&&0<c?(k=this.rV(d,c,h))||null!=h&&null!=h.success&&h.success.call(null,a):0===k.length?null!=h&&null!=h.success&&h.success.call(null,a):(d=[],d.push(k),k={},k.callbacks=h,k.nodeSet=a,k.keys=[],this.P0(d,k))};b.ca.prototype.af=function(a){return this.Cd.af(a)};b.b.g("FlattenedTreeDataSource.prototype.getChildCount",{af:b.ca.prototype.af});b.ca.prototype.rV=function(a,
b,c,e){var f,h,k,l,m,n,p,r,s;void 0===e&&(e=this.gJ());this.Pga()&&(f={queueOnly:!0});h=s=this.WI(-1);for(k=this.Ee()-1;0<=k;k--)if(l=this.Yg(k),m=l.depth,m<b&&(a=l.parent,n=this.Cd.af(a),l=l.index,(p=-1===n)||l<n-1)){r={};r.start=l+1;p?(r.count=Math.min(e,Math.max(0,h)),f=void 0):r.count=Math.min(e,Math.min(h,n-r.start));if(0==r.count)break;this.Cd.Hf(a,r,{success:function(b){this.Un(b,a,m,r,n,c)}.bind(this),error:function(a){this.Ql(a,c)}.bind(this)},f);b=m;h=Math.max(0,h-r.count);if(p||0===m||
0===h)break}void 0!=f&&this.Cd.Hf(a,{start:r.count,count:0},{success:function(b){this.Un(b,a,m,r,n,c)}.bind(this),error:function(a){this.Ql(a,c)}.bind(this)});return h!=s};b.ca.prototype.Oia=function(a,b,c,e){var f,h,k,l;f=a.ta();h=a.R();for(k=0;k<h;k++)l=a.getMetadata(f+k),l=l.key,this.vA(l,c,f+k,b),this.Zw(l)&&e.push(l)};b.ca.prototype.Ky=function(a,b){this.Zw(a)&&!b.leaf?b.state="expanded":b.state=b.leaf?"leaf":"collapsed"};b.ca.prototype.Ica=function(a,b){var c={maxCount:this.rr};0<=this.Ee()&&
(c.start=this.Yg(this.Ee()).key);this.Cd.yu(null,{success:function(c){this.jfa(c,a,b)}.bind(this),error:function(a){this.Ql(a,b)}.bind(this)},c)};b.ca.prototype.rm=function(){return this.Cd.rm()};b.b.g("FlattenedTreeDataSource.prototype.getSortCriteria",{rm:b.ca.prototype.rm});b.ca.prototype.jfa=function(a,d,c){var e,f,h;d.start>this.Ee()?(e=this.gJ(),f=Math.min(e,d.count),a=new b.Te(a,this.Ky.bind(this),null,this.Li),0<=this.Ee()?(h=this.nW(),e={index:0,found:!1,count:0},this.bL(a,null,0,h,f,e),
f=e.index+1):(e={count:0},this.bL(a,null,0,null,f,e),f=0),null!=c&&null!=c.success&&(a=null!=e?0===e.count?new b.Pe(null,d.start):new b.Qe(a,f):new b.Qe(a),c.success.call(null,a))):this.TN(d,c)};b.ca.prototype.bL=function(a,b,c,e,f,h){var k,l,m,n,p;k=a.ta();l=a.R();for(m=0;m<l&&h.count!=f;m++){n=a.getMetadata(k+m);p=n.key;h.checkDepth&&e.depth===c&&(h.found=!0,h.checkDepth=!1);if(null==e||h.found)this.vA(p,c,k+m,b),h.count+=1,n.state=n.leaf?"leaf":"expanded";null==e||h.found||(p===e.key?n.leaf||this.Zw(p)?
h.found=!0:h.checkDepth=!0:h.index+=1);a.Kf&&this.Zw(p)&&(n=a.Kf(m),null!=n&&this.bL(n,p,c+1,e,f,h))}};b.ca.prototype.expand=function(a){this.$d(a)};b.b.g("FlattenedTreeDataSource.prototype.expand",{expand:b.ca.prototype.expand});b.ca.prototype.$d=function(a,d){var c,e,f,h;c=this.Cd.af(a);e=this.WI(c);f=this.rr;if(this.Ee()+1===f&&(h=this.Ii(a),h==f-1)){this.SN(a,new b.Pe(a,0),0,d);return}0==e?this.SN(a,new b.Pe(a,0),0,d):this.Cd.Hf(a,{start:0,count:e},{success:function(b){this.SN(a,b,c,d)}.bind(this),
error:function(){this.woa(a)}.bind(this)})};b.ca.prototype.collapse=function(a){var b,c,e,f,h;b=this.Ii(a)+1;c=this.Yg(b-1);e=0;c=c.depth;f=this.Ee();for(h=b;h<f+1;h++){var k=this.Yg(h).depth;if(k>c)e+=1;else if(k==c)break}if(0!=e){this.Dt()?this.Li.push(a):this.Eja(a);f=[];for(c=0;c<e;c++)f.push({key:this.Yg(b+c).key,index:b+c});this.g_(b,e);this.ME(f)}this.handleEvent("collapse",{rowKey:a})};b.b.g("FlattenedTreeDataSource.prototype.collapse",{collapse:b.ca.prototype.collapse});b.ca.prototype.Zw=
function(a){return this.Dt()?this.Li&&0<this.Li.length?-1===this.MV(a):!0:this.ym&&0<this.ym.length?-1<this.$V(a):!1};b.ca.prototype.MV=function(a){return this.lW(this.Li,a)};b.ca.prototype.$V=function(a){return this.lW(this.ym,a)};b.ca.prototype.lW=function(a,b){var c,e;e=-1;for(c=0;c<a.length;c++)a[c]===b&&(e=c);return e};b.ca.prototype.Eja=function(a){a=this.$V(a);-1<a&&this.ym.splice(a,1)};b.ca.prototype.yja=function(a){a=this.MV(a);-1<a&&this.Li.splice(a,1)};b.ca.prototype.woa=function(a){this.handleEvent("expand",
{rowKey:a})};b.ca.prototype.SN=function(a,d,c,e){var f,h,k,l,m,n,p,r,s,q,t;d=new b.Te(d,this.Ky.bind(this));h=f=this.Ii(a)+1;k=d.ta();l=d.R();m=this.Yg(f-1);n=m.depth+1;r=[];for(s=k;s<l;s++)k=d.getMetadata(s),p=k.key,this.Zw(p)&&r.push(p),this.aY(f,k,m.key,s,n),f++;this.Dt()?this.yja(a):-1===this.ym.indexOf(a)&&this.ym.push(a);void 0!=e&&(q=e.queue,t=e.prevNodeSetInfo);void 0!=t&&(d=new b.Ng(t.nodeSet,d,a));if(0!=r.length||void 0!==q&&0!=q.length)void 0===q&&(q=[]),0<r.length&&q.push(r),void 0===
t&&(t={},t.firstIndex=h,t.firstKey=a,t.keys=[]),t.nodeSet=d,t.keys.push(a),this.P0(q,t);else{if(void 0!=t){e=t.callbacks;if(null!=e){e.success.call(null,d);return}this.nE(t.firstIndex,t.firstKey,d)}else this.nE(h,a,d);d=this.rr;-1===c&&l===this.GN()||c>l||f==d?this.fI(f):this.Ee()>=d&&this.fI(d);if(void 0!=t)for(c=0;c<t.keys.length;c++)this.handleEvent("expand",{rowKey:t.keys[c]});this.handleEvent("expand",{rowKey:a})}};b.ca.prototype.P0=function(a,b){var c,e;c=a[a.length-1];e=c.shift();0===c.length&&
a.pop();this.$d(e,{prevNodeSetInfo:b,queue:a})};b.ca.prototype.aY=function(a,b,c,e,f){b=b.key;a<=this.Ee()?this.vA(b,f,e,c,a):this.vA(b,f,e,c)};b.ca.prototype.fI=function(a,b){var c;void 0==b&&(b=this.Ee()+1-a);c=[];for(var e=0;e<b;e++)c.push({row:this.Yg(a+e).key,index:a+e});this.g_(a,b);this.ME(c)};b.ca.prototype.Bfa=function(a){var b,c,e;b=a.operation;c=a.parent;c=Array.isArray(c)?c[c.length-1]:c;e=a.index;"insert"===b?this.ofa(c,e,a.data):"delete"===b?this.Yea(c,e):"refresh"===b&&this.Jfa(c)};
b.ca.prototype.ofa=function(a,b,c){var e,f;e=this.Ii(a);f=this.Yg(e).depth+1;e=e+b+1;c=c.getMetadata(c.ta());this.aY(e,c,a,b,f)};b.ca.prototype.Yea=function(a,d){var c,e,f,h,k;c=this.Ii(a);e=this.Yg(c);c+=d;f=this.Yg(c);b.l.assert(f.parent===e&&f.depth===e.depth+1);e=c+1;for(h=this.Ee();e<=h;){k=this.Yg(e);if(k.depth!=f.depth)break;e++}this.fI(c,1)};b.ca.prototype.Jfa=function(a){null==a&&this.refresh()};b.ca.prototype.Dt=function(){var a=this.Cd.getCapability("fetchDescendants");return void 0!=this.Li&&
null!=a&&"disable"!=a};b.ca.prototype.Pga=function(){return"enable"===this.Cd.getCapability("batchFetch")};b.ca.prototype.refresh=function(){this.raa()};b.ca.prototype.Ii=function(a){var b,c,e;b=this.Ee();for(c=0;c<=b;c++)if(e=this.Yg(c),e.key==a)return c;return-1};b.ca.prototype.getKey=function(a){return 0>a||a>this.Ee()?null:this.Yg(a).key};b.ca.prototype.Zna=function(){return{start:0,end:this.Ee()+1}};b.ca.prototype.Una=function(a){var b;b=[];a=this.Ii(a);for(a=this.pj(a);null!=a;)b.push(a),a=
this.Ii(a),a=this.pj(a);return b.reverse()};b.ca.prototype.TN=function(a,b){null!=b&&null!=b.error&&b.error.call(null)};b.ca.prototype.nE=function(){b.l.Xb()};b.ca.prototype.ME=function(){b.l.Xb()};b.ca.prototype.Ee=function(){return this.xm.length-1};b.ca.prototype.nW=function(){return this.xm[this.Ee()]};b.ca.prototype.Yg=function(a){return this.xm[a]};b.ca.prototype.pj=function(a){a=this.xm[a];return null!=a?a.parent:null};b.ca.prototype.vA=function(a,b,c,e,f){var h={};h.key=a;h.depth=b;h.index=
c;h.parent=e;void 0===f?this.xm.push(h):this.xm.splice(f,0,h)};b.ca.prototype.g_=function(a,b){this.xm.splice(a,b)};b.ca.prototype.raa=function(){this.xm.length=0};b.ca.prototype.getCapability=function(a){return this.Cd.getCapability(a)};b.b.g("FlattenedTreeDataSource.prototype.getCapability",{getCapability:b.ca.prototype.getCapability});b.ya("oj.ojRowExpander",f.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{context:null,expand:null,collapse:null},Mk:{root:"oj-rowexpander",icon:"oj-component-icon",
clickable:"oj-clickable-icon-nocontext",expand:"oj-rowexpander-expand-icon",collapse:"oj-rowexpander-collapse-icon",leaf:"oj-rowexpander-leaf-icon",lazyload:"oj-rowexpander-lazyload-icon",toucharea:"oj-rowexpander-touch-area",indent:"oj-rowexpander-indent",iconspacer:"oj-rowexpander-icon-spacer",depth0:"oj-rowexpander-depth-0",depth1:"oj-rowexpander-depth-1",depth2:"oj-rowexpander-depth-2",depth3:"oj-rowexpander-depth-3",depth4:"oj-rowexpander-depth-4",depth5:"oj-rowexpander-depth-5",depth6:"oj-rowexpander-depth-6",
depth7:"oj-rowexpander-depth-7"},uu:{iv:7,L6:53},_ComponentCreate:function(){this._super();this.element.addClass(this.Mk.root);this.OX()},OX:function(){var a=this,b;b=this.options.context;this.O="function"===typeof b.component?b.component("instance"):b.component;this.kc=b.datasource;this.depth=b.depth;this.Rh=b.state;this.Im=b.key;this.index=b.index;this.CE=b.parentKey;this.a$();this.Z9();this.ZC();"expanded"===this.Rh||"collapsed"===this.Rh?(f(this.kP).on("touchend",function(b){b.preventDefault();
a.HI()}),f(this.kP).on("click",function(b){b.preventDefault();a.HI()}),f(this.element).on("keypress",function(b){var d=b.keyCode||b.which;if(d===f.ui.keyCode.ENTER||d===f.ui.keyCode.SPACE)a.HI(),b.preventDefault(),b.target.focus()}),this.lE=this.mX.bind(this),f(this.O.element).on("ojkeydown",this.lE),this.A3=this.hfa.bind(this),this.z3=this.Pea.bind(this),this.kc.on("expand",this.A3,this),this.kc.on("collapse",this.z3,this)):"leaf"===this.Rh&&(this.lE=this.mX.bind(this),f(this.O.element).on("ojkeydown",
this.lE),f(this.icon).attr("tabindex",-1));this.y3=this.Eea.bind(this);f(this.O.element).on("ojbeforecurrentcell",this.y3)},refresh:function(){this.element.empty();this.OX()},_destroy:function(){f(this.O.element).off("ojkeydown",this.lE);f(this.O.element).off("ojbeforecurrentcell",this.y3);this.kc.off("expand",this.A3,this);this.kc.off("collapse",this.z3,this);this.element.removeClass(this.Mk.root);this.element.empty()},_setOption:function(a,b,c){this._super(a,b,c);"context"==a&&this.refresh()},a$:function(){var a,
b;b=this.depth-1;if(b<this.uu.iv)this.ZG(b);else{for(a=1;a<=b/this.uu.iv;a++)this.ZG(this.uu.iv);a=b%this.uu.iv;a<this.uu.iv&&this.ZG(a)}},ZG:function(a){a=f(document.createElement("span")).addClass(this.Mk.indent).addClass(this.Mk["depth"+a]);this.element.append(a)},Z9:function(){var a=f(document.createElement("div")).addClass(this.Mk.iconspacer);this.kP=f(document.createElement("div")).addClass(this.Mk.toucharea);this.icon=f(document.createElement("a")).attr("href","#").attr("aria-labelledby",this.mW()).addClass(this.Mk.icon).addClass(this.Mk.clickable);
this.element.append(a.append(this.kP.append(this.icon)))},Pp:function(a){this.icon.addClass(this.Mk[a])},Jq:function(a){this.icon.removeClass(this.Mk[a])},ZC:function(){switch(this.Rh){case "leaf":this.Jq("icon");this.Jq("clickable");this.Pp("leaf");break;case "collapsed":this.Pp("expand");this.BA(!1);break;case "expanded":this.Pp("collapse");this.BA(!0);break;case "loading":this.Jq("clickable"),this.Pp("lazyload")}},oL:function(){switch(this.Rh){case "leaf":this.Jq("leaf");this.Pp("icon");this.Pp("clickable");
break;case "collapsed":this.Jq("expand");break;case "expanded":this.Jq("collapse");break;case "loading":this.Jq("lazyload"),this.Pp("clickable")}},Eea:function(a,b){var c,e;null!=b.currentCell&&(c="cell"==b.currentCell.type?b.currentCell.keys.row:b.currentCell.key,null!=b.previousValue&&(e="cell"==b.previousCurrentCell.type?b.previousCurrentCell.keys.row:b.previousCurrentCell.key),this.Im===c&&e!=c&&this.O.VC&&(c=this.A("accessibleRowDescription",{level:this.depth,num:this.index+1,total:this.kc.getWrappedDataSource().af(this.CE)}),
e="collapsed"===this.Rh?this.A("accessibleStateCollapsed"):"expanded"===this.Rh?this.A("accessibleStateExpanded"):"",this.O.VC({context:c,state:e})))},mX:function(a,d){var c,e,g;if(this.Im===d.rowKey&&(a=a.originalEvent,c=a.keyCode||a.which,b.v.wm(a)))if(c==f.ui.keyCode.RIGHT&&"collapsed"===this.Rh)this.EK(),this.kc.expand(this.Im),a.preventDefault();else if(c==f.ui.keyCode.LEFT&&"expanded"===this.Rh)this.EK(),this.kc.collapse(this.Im),a.preventDefault();else if(a.altKey&&c==this.uu.L6&&this.O.VC){c=
this.kc.Una(this.Im);if(null!=c&&0<c.length)for(e=[],g=0;g<c.length;g++)e.push({key:c[g],label:this.A("accessibleLevelDescription",{level:g+1})});c=this.A("accessibleRowDescription",{level:this.depth,num:this.index+1,total:this.kc.getWrappedDataSource().af(this.CE)});this.O.VC({context:c,state:"",ancestors:e});a.preventDefault()}},EK:function(){this.oL();this.Rh="loading";this.ZC()},hfa:function(a){a=a.rowKey;a===this.Im&&(this.oL(),this.Rh="expanded",this.ZC(),this.BA(!0),this._trigger("expand",
null,{rowKey:a}))},Pea:function(a){a=a.rowKey;a===this.Im&&(this.oL(),this.Rh="collapsed",this.ZC(),this.BA(!1),this._trigger("collapse",null,{rowKey:a}))},HI:function(){var a=this.Rh;this.EK();"collapsed"===a?this.kc.expand(this.Im):"expanded"===a&&this.kc.collapse(this.Im)},BA:function(a){this.icon.attr("aria-expanded",a)},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;return"oj-rowexpander-disclosure"!==a&&"oj-rowexpander-icon"!==a||null==this.icon?null:
this.icon.get(0)},getSubIdByNode:function(a){return a===this.icon.get(0)?{osa:"oj-rowexpander-disclosure"}:null},pn:function(){this._super();this.icon.attr("aria-labelledby",this.mW())},mW:function(){return this.element.parent().closest("[id]").attr("id")}})});