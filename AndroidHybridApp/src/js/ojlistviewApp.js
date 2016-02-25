require(['knockout', 'jquery', 'ojs/ojcore', 'ojlistviewVM', 'ojinputcomponentsVM',
    'ojs/ojknockout', 'promise', 'ojs/ojlistview', 'ojs/ojcollectiontabledatasource',
    'ojs/ojselectcombobox', 'ojs/ojmodel', 'ojs/ojpagingcontrol'],
    function(ko, $, oj, ojlistviewVM,ojinputcomponentsVM) {
    $(document).ready(function() {
        lvVM = new ojlistviewVM();
        inputVM=new ojinputcomponentsVM();
        ko.applyBindings(lvVM, document.getElementById('outputText'));
        ko.applyBindings(lvVM, document.getElementById('listview'));
        ko.applyBindings(lvVM, document.getElementById('selectionDiv'));
        ko.applyBindings(inputVM, document.getElementById('nestedLV'));
        //ko.applyBindings(inputVM, document.getElementById('nestedLV'));
         
    });
});



