define([
    '../../vender/jquery-2.1.4',
    '../../vender/underscore',
    '../../vender/backbone',
    '../../vender/handlebars'
], function ($, _, Backbone, Handlebars) {
    "use strict";
    var BadgeView = Backbone.View.extend({
      el: ".entry",
      // template: Handlebars.compile(jQuery("#badge-entry-template").html()),
      render: function() {
        this.$el.html(this.template(this.collection.toJSON()));
        return this;
      }
  });
  // Our module now returns our view
  return BadgeView;
});