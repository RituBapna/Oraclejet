/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery"],function(b,f){b.X=function(a,b,c){this.Init(a,b,c)};o_("Message",b.X,b);b.X.Xj={CONFIRMATION:"confirmation",INFO:"info",WARNING:"warning",ERROR:"error",FATAL:"fatal"};o_("Message.SEVERITY_TYPE",b.X.Xj,b);b.X.Sb={FATAL:5,ERROR:4,WARNING:3,INFO:2,CONFIRMATION:1};o_("Message.SEVERITY_LEVEL",b.X.Sb,b);b.b.ga(b.X,b.b,"oj.Message");b.X.prototype.Init=function(a,d,c){b.X.q.Init.call(this);this.summary=a;this.detail=d;this.severity=c||b.X.Xj.ERROR};b.b.g("Message.prototype.Init",
{Init:b.X.prototype.Init});b.X.prototype.L1=function(){return!0};b.X.prototype.Go=function(a){return a&&b.X.Du(this.severity)===b.X.Du(a.severity)&&this.summary===a.summary&&this.detail===a.detail?!0:!1};b.b.g("Message.prototype.equals",{Go:b.X.prototype.Go});b.X.prototype.clone=function(){return new b.X(this.summary,this.detail,this.severity)};b.b.g("Message.prototype.clone",{clone:b.X.prototype.clone});b.X.Du=function(a){a&&("string"===typeof a?(a=b.X.hG.indexOf(a,1),a=-1===a?b.X.Sb.ERROR:a):"number"===
typeof a&&a<b.X.Sb.CONFIRMATION&&a>b.X.Sb.FATAL&&(a=b.X.Sb.ERROR));return a?a:b.X.Sb.ERROR};o_("Message.getSeverityLevel",b.X.Du,b);b.X.foa=function(a){var d;a&&("string"===typeof a?(d=b.X.hG.indexOf(a,1),-1===d&&(a=b.X.Xj.ERROR)):"number"===typeof a&&(a=a<b.X.Sb.CONFIRMATION&&a>b.X.Sb.FATAL?b.X.Xj.ERROR:b.X.hG[a]));return a||b.X.Xj.ERROR};o_("Message.getSeverityType",b.X.foa,b);b.X.Bu=function(a){var d=-1,c;a&&0<a.length&&f.each(a,function(a,g){g&&(c=b.X.Du(g.severity));d=d<c?c:d});return d};o_("Message.getMaxSeverity",
b.X.Bu,b);b.X.isValid=function(a){return b.X.Bu(a)>=b.X.Sb.ERROR?!1:!0};o_("Message.isValid",b.X.isValid,b);b.X.hG=["none",b.X.Xj.CONFIRMATION,b.X.Xj.INFO,b.X.Xj.WARNING,b.X.Xj.ERROR,b.X.Xj.FATAL];b.Ic=function(a,b,c,e){this.Init(a,b,c,e)};b.b.ga(b.Ic,b.X,"oj.ComponentMessage");b.Ic.Or={DF:"shown",pF:"hidden"};b.Ic.p7={display:b.Ic.Or.DF,context:""};b.Ic.prototype.Init=function(a,d,c,e){b.Ic.q.Init.call(this,a,d,c);this.ib=f.extend({},b.Ic.p7,e)};b.Ic.prototype.Go=function(a){return b.Ic.q.Go.call(this,
a)&&this.ib.display===a.ib.display};b.Ic.prototype.clone=function(){return new b.Ic(this.summary,this.detail,this.severity,this.ib)};b.Ic.prototype.L1=function(){return!(this.ib&&this.ib.display&&this.ib.display===b.Ic.Or.pF)};b.Ic.prototype.Qca=function(){this.ib&&b.Ic.Or.pF===this.ib.display&&(this.ib.display=b.Ic.Or.DF)};b.Ic.prototype.mY=function(){return this.ib&&this.ib.context?!0:!1}});