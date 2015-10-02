define([
    'vender/jquery-2.1.4',
    'vender/underscore',
    'vender/backbone',
    'js/models/badge_model',
    'js/models/badge_collection',
    'js/views/badge_view',
	  'js/models/main_website_model',
    'js/views/login_signup_view'
], function ($, _, Backbone, badgeModel, badgeCollection, badgeView, mainPageModel, loginView) {
    "use strict";

   var mainPage = new mainPageModel();
   window.mainPage = mainPage;
   window.mainView = new loginView({model: window.mainPage});
   window.mainView.render();
});