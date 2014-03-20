/*global require*/
'use strict';

require.config({
    shim: {
        dust : {
            exports: 'dust'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        dust: '../bower_components/dustjs-linkedin/dist/dust-full',
        text: '../bower_components/requirejs-text/text'
    }
});

require([
    'backbone',
    'router'    
], function (Backbone,MainRouter) {
    new MainRouter();    
    Backbone.history.start();
});
