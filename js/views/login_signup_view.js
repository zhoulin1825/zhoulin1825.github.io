// An example Backbone application contributed by
// [Jérôme Gravel-Niquet](http://jgn.me/). This demo uses a simple
// [LocalStorage adapter](backbone.localStorage.html)
// to persist Backbone models within your browser.

// Load the application once the DOM is ready, using `jQuery.ready`:

define([
    '../../vender/jquery-2.1.4',
    'underscore',
    '../../vender/backbone',
    'app',
    '../../vender/parsley'
], function ($, _, Backbone, app, parsley) {
    "use strict";
    var mainView = Backbone.View.extend({
      el: ".js--section-form",
      template: Handlebars.compile(jQuery(".js--login-template").html()),
      initialize: function() {
            _.bindAll(this, 'onPasswordKeyup', 'onConfirmPasswordKeyup', 'onLoginAttempt', 'onLoginAttempt');

            // Listen for session logged_in state changes and re-render
            window.mainPage.on("change:logged_in", this.render);
      },
      events: {
            'click #js--register'                   : 'onLoginAttempt',
            'click .js-password-input'              : 'addComfirmPwd',
            'click #signup-btn'                     : 'onSignupAttempt',
            'keyup #login-password-input'           : 'onPasswordKeyup',
            'keyup #signup-password-confirm-input'  : 'onConfirmPasswordKeyup'
      },
      // Allow enter press to trigger login
      onPasswordKeyup: function(evt) {
          var k = evt.keyCode || evt.which;

          if (k == 13 && $('#login-password-input').val() === ''){
              evt.preventDefault();    // prevent enter-press submit when input is empty
          } else if(k == 13){
              evt.preventDefault();
              this.onLoginAttempt();
              return false;
          }
      },

      // Allow enter press to trigger signup
      onConfirmPasswordKeyup: function(evt) {
          var k = evt.keyCode || evt.which;

          if (k == 13 && $('#confirm-password-input').val() === ''){
              evt.preventDefault();   // prevent enter-press submit when input is empty
          } else if(k == 13){
              evt.preventDefault();
              this.onSignupAttempt();
              return false;
          }
      },

      onLoginAttempt: function(evt) {
          if(evt) evt.preventDefault();

          if(this.$(".js--login-signup").parsley('validate')){
            window.mainPage.loginSystem({
                username: this.$(".js--userid-input").val(),
                password: this.$(".js-password-input").val()
            }, {
                success: function(mod, response){
                    if(DEBUG) console.log("SUCCESS", mod, response);

                },
                error: function(err){
                    if(DEBUG) console.log("ERROR", err);
                    app.showAlert('Bummer dude!', err.error, 'alert-danger'); 
                }
            });
              
          } else {
              // Invalid clientside validations thru parsley
              if(DEBUG) console.log("Did not pass clientside validation");

          }
      },

      onSignupAttempt: function(evt) {
          if(evt) evt.preventDefault();
          if(this.$("#signup-form").parsley('validate')){
              var self = this;
              if(this.$(".js-password-input").val() == this.$(".js--comfirm-password").val()) {
                app.mainPage.signupSystem({
                    username: this.$("#signup-username-input").val(),
                    password: this.$("#signup-password-input").val()
                }, {
                    success: function(mod, response){
                        if(DEBUG) console.log("SUCCESS", mod, response);
                    },
                    error: function(err){
                        if(DEBUG) console.log("ERROR", err);
                        app.showAlert('Uh oh!', err.error, 'alert-danger'); 
                    }
                });
             } else {
                app.mainPage.alertDifferentPassword();
                this.render();
             }
          } else {
              // Invalid clientside validations thru parsley
              if(DEBUG) console.log("Did not pass clientside validation");

          }
      },
      render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
      }
    });
/*      updateUser: function() {
        // login model has: head pic, name, userid and badges, badges' type is defined by sent messgae
        this.model.loginModel.fetch({
            userid: $('#userid').val(),
            password: $('#pwd').val(),
            website_type: 0
          });
      },
      joinSystem: function() {
        this.model.loginModel.set({
            userid: $('#userid').val(),
            password: $('#pwd').val(),
            website_type: 0
          });
        this.model.loginModel.save();
        this.model.loginModel.set('pwd', null);
        //destroy login
        //show bee like grids
      },*/

  // Our module now returns our view
  return mainView;
});