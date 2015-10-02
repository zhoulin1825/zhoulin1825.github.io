define([
    '../../vender/jquery-2.1.4',
    '../../vender/underscore',
    '../../vender/backbone',
], function ($, _, Backbone) {
    "use strict";
    var magazineModel = Backbone.Model.extend({
      defaults: {
		category: 'Article',
		  title:'blabla',
        picture: 'Hey',
        alt_text: null,
		  info:'text'
      }

    });
    return magazineModel;
});

