define([
    '../../vender/jquery-2.1.4',
    '../../vender/underscore',
    '../../vender/backbone',
], function ($, _, Backbone) {
    "use strict";
    var BadgeModel = Backbone.Model.extend({

      // Default attributes for the todo item.
      defaults: {
        name: 'default_badge_name',
        progress: 0
      }

    });
    return BadgeModel;
});