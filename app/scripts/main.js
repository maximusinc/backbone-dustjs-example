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
        dust: '../bower_components/dustjs-linkedin/dist/dust-full'
    }
});

require([
    'backbone',
    'views/simple'
], function (Backbone,SimpleView) {
    var simple = new SimpleView();
    $('body').append( simple.render().el );
    Backbone.history.start();
});
