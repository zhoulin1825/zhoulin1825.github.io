define([
    '../../vender/jquery-2.1.4',
    '../../vender/underscore',
    '../../vender/backbone',
    '../models/art_model'
], function ($, _, Backbone, artModel) {
    "use strict";
    var ArtCollection = Backbone.Collection.extend({
      model: artModel,
      createModel: function(test_data) {
        for(var i = 0; i < test_data.length; i++) {
          artModel.create(test_data[i]);
        }
      }

    });
    return ArtCollection;
});