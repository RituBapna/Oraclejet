/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtTimeline"],function(b,f,a,d,c){b.ya("oj.ojTimeline",f.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{viewportChange:null},mf:function(a,b,d){return c.DvtTimeline.newInstance(a,b,d)},di:function(a){var b=a.subId;"oj-timeline-item"==b&&(b="timelineItem["+a.seriesIndex+"]["+a.itemIndex+"]");return b},dg:function(a){var b={};0==a.indexOf("timelineItem")&&(a=this.rl(a),b.subId="oj-timeline-item",b.seriesIndex=
a[0],b.itemIndex=a[1]);return b},cA:function(){this._super();this.options.styleDefaults||(this.options.styleDefaults={});this.options.styleDefaults.series||(this.options.styleDefaults.series={});if(!this.options.styleDefaults.series.colors){var a=new b.Le;this.options.styleDefaults.series.colors=a.lr()}},Be:function(){var a=this._super();a.push("oj-timeline");return a},ei:function(){var a=this._super();a["oj-timeline"]={path:"styleDefaults/borderColor",property:"border-color"};a["oj-timeline-item"]=
[{path:"styleDefaults/item/borderColor",property:"border-color"},{path:"styleDefaults/item/backgroundColor",property:"background-color"}];a["oj-timeline-item oj-hover"]=[{path:"styleDefaults/item/hoverBorderColor",property:"border-color"},{path:"styleDefaults/item/hoverBackgroundColor",property:"background-color"}];a["oj-timeline-item oj-selected"]=[{path:"styleDefaults/item/selectedBorderColor",property:"border-color"},{path:"styleDefaults/item/selectedBackgroundColor",property:"background-color"}];
a["oj-timeline-item-description"]={path:"styleDefaults/item/descriptionStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-timeline-item-title"]={path:"styleDefaults/item/titleStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-timeline-major-axis-label"]={path:"styleDefaults/majorAxis/labelStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-timeline-major-axis-separator"]={path:"styleDefaults/majorAxis/separatorColor",property:"color"};a["oj-timeline-minor-axis"]=[{path:"styleDefaults/minorAxis/backgroundColor",property:"background-color"},
{path:"styleDefaults/minorAxis/borderColor",property:"border-color"}];a["oj-timeline-minor-axis-label"]={path:"styleDefaults/minorAxis/labelStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-timeline-minor-axis-separator"]={path:"styleDefaults/minorAxis/separatorColor",property:"color"};a["oj-timeline-overview"]={path:"styleDefaults/overview/backgroundColor",property:"background-color"};a["oj-timeline-overview-label"]={path:"styleDefaults/overview/labelStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-timeline-overview-window"]=
[{path:"styleDefaults/overview/window/backgroundColor",property:"background-color"},{path:"styleDefaults/overview/window/borderColor",property:"border-color"}];a["oj-timeline-reference-object"]={path:"styleDefaults/referenceObject/color",property:"color"};a["oj-timeline-series"]={path:"styleDefaults/series/backgroundColor",property:"background-color"};a["oj-timeline-series-empty-text"]={path:"styleDefaults/series/emptyTextStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-timeline-series-label"]={path:"styleDefaults/series/labelStyle",
property:"CSS_TEXT_PROPERTIES"};a["oj-timeline-zoomin-icon"]={path:"_resources/zoomIn",property:"CSS_URL"};a["oj-timeline-zoomin-icon oj-hover"]={path:"_resources/zoomIn_h",property:"CSS_URL"};a["oj-timeline-zoomin-icon oj-active"]={path:"_resources/zoomIn_a",property:"CSS_URL"};a["oj-timeline-zoomin-icon oj-disabled"]={path:"_resources/zoomIn_d",property:"CSS_URL"};a["oj-timeline-zoomout-icon"]={path:"_resources/zoomOut",property:"CSS_URL"};a["oj-timeline-zoomout-icon oj-hover"]={path:"_resources/zoomOut_h",
property:"CSS_URL"};a["oj-timeline-zoomout-icon oj-active"]={path:"_resources/zoomOut_a",property:"CSS_URL"};a["oj-timeline-zoomout-icon oj-disabled"]={path:"_resources/zoomOut_d",property:"CSS_URL"};a["oj-timeline-scroll-indicator-back"]={path:"_resources/scrollLeft",property:"CSS_URL"};a["oj-timeline-scroll-indicator-forward"]={path:"_resources/scrollRight",property:"CSS_URL"};a["oj-timeline-scroll-indicator-up"]={path:"_resources/scrollUp",property:"CSS_URL"};a["oj-timeline-scroll-indicator-down"]=
{path:"_resources/scrollDown",property:"CSS_URL"};a["oj-timeline-overview-window-handle-horizontal"]={path:"_resources/overviewHandleHor",property:"CSS_URL"};a["oj-timeline-overview-window-handle-vertical"]={path:"_resources/overviewHandleVert",property:"CSS_URL"};return a},hi:function(){return["optionChange","viewportChange"]},ii:function(){var a=this.options.translations,c=this._super();c["DvtUtilBundle.TIMELINE"]=a.componentName;c["DvtUtilBundle.TIMELINE_SERIES"]=a.labelSeries;c["DvtUtilBundle.ZOOM_IN"]=
a.tooltipZoomIn;c["DvtUtilBundle.ZOOM_OUT"]=a.tooltipZoomOut;a=b.Ja.By("wide");c["DvtUtilBundle.MONTH_JANUARY"]=a[0];c["DvtUtilBundle.MONTH_FEBRUARY"]=a[1];c["DvtUtilBundle.MONTH_MARCH"]=a[2];c["DvtUtilBundle.MONTH_APRIL"]=a[3];c["DvtUtilBundle.MONTH_MAY"]=a[4];c["DvtUtilBundle.MONTH_JUNE"]=a[5];c["DvtUtilBundle.MONTH_JULY"]=a[6];c["DvtUtilBundle.MONTH_AUGUST"]=a[7];c["DvtUtilBundle.MONTH_SEPTEMBER"]=a[8];c["DvtUtilBundle.MONTH_OCTOBER"]=a[9];c["DvtUtilBundle.MONTH_NOVEMBER"]=a[10];c["DvtUtilBundle.MONTH_DECEMBER"]=
a[11];a=b.Ja.zy("wide");c["DvtUtilBundle.DAY_SUNDAY"]=a[0];c["DvtUtilBundle.DAY_MONDAY"]=a[1];c["DvtUtilBundle.DAY_TUESDAY"]=a[2];c["DvtUtilBundle.DAY_WEDNESDAY"]=a[3];c["DvtUtilBundle.DAY_THURSDAY"]=a[4];c["DvtUtilBundle.DAY_FRIDAY"]=a[5];c["DvtUtilBundle.DAY_SATURDAY"]=a[6];a=b.Ja.zy("abbreviated");c["DvtUtilBundle.DAY_SHORT_SUNDAY"]=a[0];c["DvtUtilBundle.DAY_SHORT_MONDAY"]=a[1];c["DvtUtilBundle.DAY_SHORT_TUESDAY"]=a[2];c["DvtUtilBundle.DAY_SHORT_WEDNESDAY"]=a[3];c["DvtUtilBundle.DAY_SHORT_THURSDAY"]=
a[4];c["DvtUtilBundle.DAY_SHORT_FRIDAY"]=a[5];c["DvtUtilBundle.DAY_SHORT_SATURDAY"]=a[6];return c},ki:function(a){var b=a&&a.getType?a.getType():null;if(b===c.DvtSelectionEvent.TYPE)this.ic("selection",a.getSelection());else if(b===c.DvtTimelineViewportChangeEvent.TYPE){var b=(new Date(a.getViewportStart())).toISOString(),d=(new Date(a.getViewportEnd())).toISOString();a=a.getMinorAxisScale();var f={viewportStart:b,viewportEnd:d,minorAxisScale:a};this.ic("viewportStart",b);this.ic("viewportEnd",d);
this.ic("minorAxis.scale",a);this._trigger("viewportChange",null,f)}else this._super(a)},ts:function(){null==this.options._resources&&(this.options._resources={});var a=this.options._resources,c=b.pa.hm("datetime"),d=c.createConverter({hour:"numeric",minute:"2-digit",second:"2-digit"}),f=c.createConverter({hour:"numeric",minute:"2-digit"}),l=c.createConverter({hour:"numeric"}),m=c.createConverter({month:"numeric",day:"2-digit"}),n=c.createConverter({month:"long"}),p=c.createConverter({year:"numeric"}),
r=c.createConverter({month:"short"}),c=c.createConverter({year:"2-digit"}),r={seconds:d,minutes:f,hours:l,days:m,weeks:m,months:r,quarters:r,years:c};a.converter={seconds:d,minutes:f,hours:l,days:m,weeks:m,months:n,quarters:n,years:p};a.converterVert=r},getContextByNode:function(a){return this.getSubIdByNode(a)},gi:function(){return{root:["series"]}}})});