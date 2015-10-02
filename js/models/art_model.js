define([
    '../../vender/jquery-2.1.4',
    '../../vender/underscore',
    '../../vender/backbone',
], function ($, _, Backbone) {
    "use strict";
    var ArtModel = Backbone.Model.extend({
      defaults: {
        id: 0,
        picture: 'Hey',
        alt_text: null
      }

    });
    return ArtModel;
});