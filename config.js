/**
 * @desc        configure aliases and dependencies
 */

if (typeof DEBUG === 'undefined') DEBUG = true;

require.config({

    baseUrl: '/',

    paths: {
        'jquery'                : 'vender/jquery-2.1.4',
        'underscore'            : 'vender/underscore',         // load lodash instead of underscore (faster + bugfixes)
        'backbone'              : 'vender/backbone',
        'bootstrap'             : 'vender/bootstrap',
        'text'                  : 'vender/text',
        'parsley'               : 'vender/parsley'
    },

    // non-AMD lib
    shim: {
        'underscore'            : { exports  : '_' },
        'backbone'              : { deps : ['underscore', 'jquery'], exports : 'Backbone' },
        'bootstrap'             : { deps : ['jquery'], exports : 'Bootstrap' },
        'parsley'               : { deps: ['jquery'] }
    }

});

require(['main']);           // Initialize the application with the main application file.
