define([
    'vender/jquery-2.1.4',
    'vender/underscore',
    'vender/backbone',
    'js/models/art_model',
    'js/models/art_collection',
    'js/views/art_view',
    'js/models/badge_model',
    'js/models/badge_collection',
    'js/views/badge_view'
], function ($, _, Backbone, artModel, artCollection, artView, badgeModel, badgeCollection, badgeView) {
    "use strict";
   
   var arts = new artCollection([
       { picture: 'img/1.jpg', alt_text: 'Korean bibimbap with egg and vegetables' },
       { picture: 'img/2.jpg', alt_text: 'aaa' },
       { picture: 'img/3.jpg', alt_text: 'bbb' },
		{ picture: 'img/poster1.jpg', alt_text: 'bbb' },
		{ picture: 'img/poster3.jpg', alt_text: 'bbb' },
		{ picture: 'img/poster2.jpg', alt_text: 'bbb' },
		{ picture: 'img/sevice2.png', alt_text: 'bbb' },
		{ picture: 'img/sevice3.png', alt_text: 'bbb' },
		{ picture: 'img/touxiang.jpg', alt_text: 'bbb' }
		
   ]);
	
   var badges = new badgeCollection([
       { name: 'E-Pro', progress: 0.87 },
       { name: 'Superman', progress: 0.32 },
       { name: 'The Grand Master', progress: 0.5 }
   ]);
   window.arts = arts;
    window.artView = new artView({collection: arts});
    window.artView.render();
});