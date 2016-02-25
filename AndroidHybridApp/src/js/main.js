/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";

requirejs.config(
{
  baseUrl: "js",

  // Path mappings for the logical module names
  paths:
  //injector:mainReleasePaths
  {
    "knockout": "libs/knockout/knockout-3.4.0.debug",
    "jquery": "libs/jquery/jquery-2.1.3",
    "jqueryui-amd": "libs/jquery/jqueryui-amd-1.11.4",
    "promise": "libs/es6-promise/promise-1.0.0",
    "hammerjs": "libs/hammer/hammer-2.0.4",
    "ojdnd": "libs/dnd-polyfill/dnd-polyfill-1.0.0",
    "ojs": "libs/oj/v2.0.0/debug",
    "ojL10n": "libs/oj/v2.0.0/ojL10n",
    "ojtranslations": "libs/oj/v2.0.0/resources",
    "knockout-amd-helpers": "libs/knockout/knockout-amd-helpers",
    "text": "libs/require/text",
    "signals": "libs/js-signals/signals",
      "listviewVM":"ojlistviewApp"
  }
  //endinjector
  ,
  // Shim configurations for modules that do not expose AMD
  shim:
  {
    "jquery":
    {
      exports: ["jQuery", "$"]
    }
  }
}
);

require(["ojs/ojcore", "knockout", "jquery",'listviewVM', "ojs/ojknockout"],
        function(oj, ko,$,vm) // this callback gets executed when all required modules are loaded
  {
      //console.log(vm);// add any startup code that you want here
  }
  /*function (oj, ko, $)
  {
    function MainViewModel()
    {
      var self = this;
      self.titleLabel = ko.observable("JET My Template");
    }

    $(document).ready(function()
    {
      ko.applyBindings(new MainViewModel(), document.getElementById("mainContent"));

      document.addEventListener("deviceready", onDeviceReady);

      function onDeviceReady()
      {
        // Will execute when device is ready, or immediately if the device is already ready.
      }
    });
  }*/
);
