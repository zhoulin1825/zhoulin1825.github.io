// An example Backbone application contributed by
// [Jérôme Gravel-Niquet](http://jgn.me/). This demo uses a simple
// [LocalStorage adapter](backbone.localStorage.html)
// to persist Backbone models within your browser.

// Load the application once the DOM is ready, using `jQuery.ready`:

define([
    'jquery',
    'underscore',
    'backbone',
], function ($, _, Backbone) {
    "use strict";
    var ArtModel = Backbone.Model.extend({

      // Default attributes for the todo item.
      defaults: {
        picture: null,
        sell_permission: false,
        sell_link: null
      },

      create: function(pic, sell_permit, sell_url) {
        this.picture = pic;
        this.sell_permission = sell_permit;
        sell_link = sell_url;
      }

    });
    return ArtModel;
});