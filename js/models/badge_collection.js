define([
    '../../vender/jquery-2.1.4',
    '../../vender/underscore',
    '../../vender/backbone',
    '../models/badge_model'
], function ($, _, Backbone, badgeModel) {
    "use strict";
    var BadgeCollection = Backbone.Collection.extend({
      model: badgeModel,

      url: function() {
        return '/badges';
      },

      createModel: function(test_data) {
        for(var i = 0; i < test_data.length; i++) {
          badgeModel.create(test_data[i]);
        }
      }
    });
    return BadgeCollection;
});