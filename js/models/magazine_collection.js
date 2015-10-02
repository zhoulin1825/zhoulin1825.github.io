define([
    'jquery',
    'underscore',
    '../../vender/backbone',
    '../models/magazine_model'
], function ($, _, Backbone, magazineModel) {
    "use strict";
    var magazineCollection = Backbone.Collection.extend({
      model: magazineModel,
      createModel: function(test_data) {
        for(var i=0; i<test_data.length; i++) {
          magazineModel.create(test_data[i]);
        }
      },

    });
    return magazineCollection;
});