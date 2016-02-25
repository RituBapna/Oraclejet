define([ 'ojs/ojcore', 'knockout', 'jquery', 'ojs/ojmodel', 'ojs/ojcore','ojs/ojknockout', 'promise', 'ojs/ojlistview', 'ojs/ojcollectiontabledatasource',
    'ojs/ojselectcombobox', 'ojs/ojpagingcontrol','ojs/ojaccordion', 'ojs/ojcollapsible', 'ojs/ojradioset','ojs/ojfilmstrip'
, 'ojs/ojprogressbar', 'ojs/ojinputnumber'],
        function(oj,ko, $) {

            function ListviewVM() {
                var self = this;
                
                var model = oj.Model.extend({
                    idAttribute: 'source'
                });

                var collection = new oj.Collection(null, {
                    url: '../json/tweets.json',
                    model: model
                });
                //var self = this;
                self.dataSource = new oj.CollectionTableDataSource(collection);

                self.buttonClick = function(data, event) {
                    alert("hi");
                    collection.reset();
                    //collection.fetch();
                    //reset(self.dataSource);

                };

                self.itemOnly = true;
                self.currentItemValue = ko.observable("amybartlet");
                self.drillModeValue = ko.observable("collapsible");
                self.selectionModeValue = ko.observable('single');
                self.groupHeaderPositionValue = ko.observable('static');
                self.currentItemOptions = ko.observableArray([
                    {id: 'amybartlet', value: 'amybartlet', label: 'amybartlet'},
                    {id: 'andyjones', value: 'andyjones', label: 'andyjones'},
                    {id: 'andrewbugsy', value: 'andrewbugsy', label: 'andrewbugsy'},
                    {id: 'annettbarnes', value: 'annettbarnes', label: 'annettbarnes'},
                    {id: 'bobjones', value: 'bobjones', label: 'bobjones'},
                    {id: 'bartbuckler', value: 'bartbuckler', label: 'bartbuckler'},
                    {id: 'bobbyfisher', value: 'bobbyfisher', label: 'bobbyfisher'},
                    {id: 'cathyjones', value: 'cathyjones', label: 'cathyjones'},
                    {id: 'carollsmith', value: 'carollsmith', label: 'carollsmith'}
                ]);
                self.drillModeOptions = ko.observableArray([
                    {id: 'none', value: 'none', label: 'none'},
                    {id: 'collapsible', value: 'collapsible', label: 'collapsible'}
                ]);
                self.selectionModeOptions = ko.observableArray([
                    {id: 'single', value: 'single', label: 'single'},
                    {id: 'multiple', value: 'multiple', label: 'multiple'},
                    {id: 'none', value: 'none', label: 'none'}
                ]);
                self.groupHeaderPositionOptions = ko.observableArray([
                    {id: 'sticky', value: 'sticky', label: 'sticky'},
                    {id: 'static', value: 'static', label: 'static'}
                ]);
                self.currentItemUpdate = function(event, data) {
                    if (data.value) {
                        if (data.value[0] === "amybartlet")
                        {
                            self.currentItemValue('amybartlet');
                        }
                        else if (data.value[0] === "andyjones")
                        {
                            self.currentItemValue('andyjones');
                        }
                        else if (data.value[0] === "andrewbugsy")
                        {
                            self.currentItemValue('andrewbugsy');
                        }
                        else if (data.value[0] === "annettbarnes")
                        {
                            self.currentItemValue('annettbarnes');
                        }
                        else if (data.value[0] === "bobjones")
                        {
                            self.currentItemValue('bobjones');
                        }
                        else if (data.value[0] === "bartbuckler")
                        {
                            self.currentItemValue('bartbuckler');
                        }
                        else if (data.value[0] === "bobbyfisher")
                        {
                            self.currentItemValue('bobbyfisher');
                        }
                        else if (data.value[0] === "cathyjones")
                        {
                            self.currentItemValue('cathyjones');
                        }
                        else if (data.value[0] === "carollsmith")
                        {
                            self.currentItemValue('carollsmith');
                        }
                        
                        //$("#outputText").html($("#listview").ojListView({"currentItem":self.currentItemValue}));
                        //$("#outputText").html($("#listview").ojListView("option", "currentItem"));
                        $("#optionOutputText").html("Currentitem Value::" + self.currentItemValue()).append('</br>');
                       // console.log($("#hierarchicalStaticContentListView").ojListView("option", "currentItem"));
                        return true;
                    }
                };


                self.drillModeUpdate = function(event, data) {
                    if (data.value) {
                        if (data.value[0] === "none")
                        {
                            self.drillModeValue('none');
                        }
                        else if (data.value[0] === "collapsible")
                        {
                            self.drillModeValue('collapsible');
                        }
                    }
                };
                self.selectionModeUpdate = function(event, data) {
                    //console.log(data.value[0]==='single');
                    if (data.value) {
                        if (data.value[0] === "single")
                        {
                            self.selectionModeValue('single');
                        }
                        else if (data.value[0] === "multiple")
                        {
                            self.selectionModeValue('multiple');
                        }
                        else if (data.value[0] === "none")
                        {
                            self.selectionModeValue('none');
                        }
                        //console.log(self.selectionModeValue());
                        return true;
                    }


                };
                self.groupHeaderPositionUpdate = function(event, data) {
                    if (data.value) {
                        if (data.value[0] === "sticky")
                        {
                            self.groupHeaderPositionValue('sticky');
                        }
                        else if (data.value[0] === "static")
                        {
                            self.groupHeaderPositionValue('static');
                        }
                    }
                };
                self.currentItems = ko.observableArray([
                    {id: 'amybartlet', value: 'amybartlet', label: 'amybartlet'},
                    {id: 'andyjones', value: 'andyjones', label: 'andyjones'},
                    {id: 'andrewbugsy', value: 'andrewbugsy', label: 'andrewbugsy'},
                    {id: 'annettbarnes', value: 'annettbarnes', label: 'annettbarnes'},
                    {id: 'bobjones', value: 'bobjones', label: 'bobjones'},
                    {id: 'bartbuckler', value: 'bartbuckler', label: 'bartbuckler'},
                    {id: 'bobbyfisher', value: 'bobbyfisher', label: 'bobbyfisher'},
                    {id: 'amybartlet-1', value: 'amybartlet-1', label: 'amybartlet-1'},
                    {id: 'andyjones-2', value: 'andyjones-2', label: 'andyjones-2'},
                    {id: 'andrewbugsy-3', value: 'andrewbugsy-3', label: 'andrewbugsy-3'},
                    {id: 'annettbarnes-4', value: 'annettbarnes-4', label: 'annettbarnes-4'},
                    {id: 'bobjones-5', value: 'bobjones-5', label: 'bobjones-5'},
                    {id: 'bartbuckler-6', value: 'bartbuckler-6', label: 'bartbuckler-6'},
                    {id: 'bobbyfisher-7', value: 'bobbyfisher-7', label: 'bobbyfisher-7'},
                    {id: 'cathyjones', value: 'cathyjones', label: 'cathyjones'},
                    {id: 'carollsmith', value: 'carollsmith', label: 'carollsmith'}
                ]);
                               
               self.collapseNode = function(id) {
                  
                    $( "#listview" ).ojListView( "collapse", id, true );
                    self.getExpandedItemKeys();
                    $("#methodOutputText").append('<br/>').append("Collapse node is::" +id);
                    /*                   
                     * $( "#listview" ).ojListView( "collapse", 
                        {
                          "key" : id,
                          "vetoable" :true
                         } );
                    */
                };
                self.expandNode = function(id) {
                    $( "#listview" ).ojListView( "expand", id, true );
                    self.getExpandedItemKeys();
                    $("#methodOutputText").append('<br/>').append("Expanded node is::" +id);
                };
                
               self.getExpandedItemKeys=function(){
                   $("#methodOutputText").html("Currently expanded items:: " +$( "#listview" ).ojListView( "getExpanded" ));
               };
               self.getIndexerModel=function(){
                  return ($( "#listview" ).ojListView( "getIndexerModel" )); 
               };
               self.whenReady=function(){
                  //console.log($( "#listview" ).ojListView( "whenReady")); 
               };
               self.optionMethod=function(){
                   var currentItem = $( "#listview" ).ojListView( "option", "currentItem" );
                   var drillMode = $( "#listview" ).ojListView( "option", "drillMode" );
                   var expanded = $( "#listview" ).ojListView( "option", "expanded" );
                   var scrollPolicy = $( "#listview" ).ojListView( "option", "scrollPolicy" );// Foo is Button, Menu, etc.
                   $("#methodOutputText").append('</br>').append("Currently selected options are:: " +currentItem +", "+drillMode +", "+ expanded + "and "+scrollPolicy);
               };
                $("#destroyLV").click(function(){
                    $("#listview").remove();
                }) ;
                    
                    $("#listview").click(function(event){
//                        console.log(event.currentTarget);
//                        console.log(event.target);
//                        console.log($('#listview').ojListView('getContextByNode'));
                        var listItemContext = $('#listview').ojListView('getContextByNode', event.target);
                        $("#getContextByNodeOutputText").html('</br>'+"Current context node details::\n\
                                 subId is:--  "+listItemContext['subId']+
                                ", Index is:--  " +listItemContext['index'] + 
                                ",and Key is:--  " + listItemContext['key']);
                        //var context= $( "#listview" ).ojListView( "getContextByNode", "oj-listview-item");
                        //console.log("I'm clicked" + context) ;
                    });
               


                $("#listview").on("ojbeforeexpand", function(event, ui) {
                    
                    $("#beforeExpandOutputText").html("before expand is fired!!").append('<br/>');
                    
                });
//                $( "#listview" ).ojListView({
//                    "beforeExpand": function( event, ui ) {
//                        $("#beforeCollapseOutputText").html("before expand eventfired!!").append('<br/>');
//                    }
//                });
                $("#listview").on("ojbeforecollapse", function(event, ui) {
                    $("#beforeCollapseOutputText").html("before collapse is fired!!").append('<br/>');
                    //$("span#eventOutputText:first").replaceWith("Hello world!").append('<br/>');
                });
                $("#listview").on( "ojbeforecurrentitem", function( event, ui ) {
                    
                    $("#beforeCurrentItemOutputText").html("beforeCurrentItem is fired!!").append('<br/>');
                } );
                $("#listview").on("ojcollapse", function(event, ui) {
                    $("#eventOutputText").html("collapse event is fired!!").append('<br/>');
                    //$("span#eventOutputText:first").replaceWith("Hello world!").html('<br/>');
                });
                $("#listview").on("ojexpand", function(event, ui) {
                    $("#eventOutputText").html("expand event is fired!!").append('<br/>');
                    //$("span#eventOutputText:first").replaceWith("Hello world!").append('<br/>');
                });
                $("#listview").on("ojdestroy", function(event, ui) {
                    $("#eventOutputText").html("destroy event is fired!!").append('<br/>');
                    //$("span#eventOutputText:first").replaceWith("Hello world!").append('<br/>');
                });
                $("#listview").on({'ojoptionchange': function (event, data) {
                        $("#eventOutputText").html("option that changed is ::"+ data['option']).append('<br/>');
                          window.console.log("option that changed is: " + data['option']);
                    }
                });
                $( "#listview" ).on( "ojready", function( event, ui ) {
                    $("#eventOutputText").html("Ready event fired!!").append('<br/>');
                } );
            }
            return ListviewVM;
        });


