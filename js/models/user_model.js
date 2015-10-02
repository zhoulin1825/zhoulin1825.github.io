define([
    '../../vender/jquery-2.1.4',
    '../../vender/underscore',
    '../../vender/backbone',
	'../models/badge_collection'
], function ($, _, Backbone, badgeCollection) {
    "use strict";
    var UserModel = Backbone.Model.extend({
      defaults: {
        user_id: 0,
        picture: null,
        likes: 0,
        following: 0,
        followers: 0,
        badges: []
      },

      initialize: function() {
        var self = this;
        this.badges = new badgeCollection(this.get('badges'));
        this.badges.url = function() {
            return self.url() + '/badges';
        };
      },

      urlRoot: '/user'

    });
    return UserModel;
});