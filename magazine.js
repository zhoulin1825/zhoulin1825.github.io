define([
    'vender/jquery-2.1.4',
    'vender/underscore',
    'vender/backbone',
    'js/models/badge_model',
    'js/models/badge_collection',
    'js/views/badge_view',
	'js/models/magazine_model',
    'js/models/magazine_collection',
    'js/views/magazine_view',
], function ($, _, Backbone, badgeModel, badgeCollection, badgeView, magazineModel, magazineCollection, magazineView) {
    "use strict";	
	
	var magazines = new magazineCollection([
        { category: 'Article',title:'Summer Getaways 2015: Outdoor Sculpture Destinations in Europe', picture: 'img/1.jpg', alt_text: 'Korean bibimbap with egg and vegetables',info:'Art and nature: the outdoor sculpture park offers the best of both worlds. Especially during the summer holidays, when we’re eager to trade in weary museum-legs for the invigorating effects of the nature hike, without sacrificing the need to view and appreciate great artworks.'},
        { category: 'Article',title:'JAPAN JUST CANCELLED ITS EXPEN', picture: 'img/11.jpg', alt_text: 'Korean bibimbap with egg and vegetables',info:'The Guardian reported that the Japanese government '},
		{ category: 'Article',title:'HOW MUCH IS YOUR $100 WORTH IN ', picture: 'img/12.jpg', alt_text: 'Korean bibimbap with egg and vegetables',info:'According to recent data from the Bureau of Econo'},
		{ category: 'Article',title:'THE SCREAM - SHORTANIMATION M', picture: 'img/15.jpg', alt_text: 'Korean bibimbap with egg and vegetables',info:'The classic painting “The Scream” by Edvard Mun'},
		{ category: 'Article',title:'GULLIVER’S PARK IN THE TURIA RIV', picture: 'img/article1.jpeg', alt_text: 'Korean bibimbap with egg and vegetables',info:'The enduring image of the story Gulliver’s Travels'},
		{ category: 'Article',title:'JAPAN JUST CANCELLED ITS EXPEN', picture: 'img/13.jpg', alt_text: 'Korean bibimbap with egg and vegetables',info:'The Guardian reported that the Japanese government '},
		{ category: 'Article',title:'GULLIVER’S PARK IN THE TURIA RIV', picture: 'img/poster1.jpg', alt_text: 'Korean bibimbap with egg and vegetables',info:'The enduring image of the story Gulliver’s Travels'},
		{ category: 'Article',title:'HOW MUCH IS YOUR $100 WORTH IN ', picture: 'img/14.jpg', alt_text: 'Korean bibimbap with egg and vegetables',info:'According to recent data from the Bureau of Econo'},
		{ category: 'Article',title:'THE EDGE OF STABILITY -- STORM', picture: 'img/12.jpg', alt_text: 'Korean bibimbap with egg and vegetables',info:'THE EDGE OF STABILITY -- STORM'},
		{ category: 'Article',title:'VORACIOUS SHARK FRUIT BOWL', picture: 'img/13.jpg', alt_text: 'Korean bibimbap with egg and vegetables',info:'How to make a watermelon fruit bowl that looks like a voracious s'}
		
    ]);
	
   var badges = new badgeCollection([
       { name: 'E-Pro', progress: 0.87 },
       { name: 'Superman', progress: 0.32 },
       { name: 'The Grand Master', progress: 0.5 }
   ]);
	window.magazines = magazines;
	window.magazineView = new magazineView({collection: window.magazines});
	window.magazineView.render();
});