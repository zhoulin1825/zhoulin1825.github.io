define([
    'jquery',
    'underscore',
    '../../vender/backbone',
    'app',
    'js/models/user_model'
], function ($, _, Backbone, app, UserModel) {
    "use strict";
    var MainWebModel = Backbone.Model.extend({

      // Default attributes for the todo item.
      defaults: {
        poster_urls: null,
        profileModel: null,
        logged_out: true,
        unmatched_password: false,
        need_comfirm_password: false
      },
      initialize: function(){
        _.bindAll(this, 'updateProfile', 'checkAuth');

        // Singleton user object
        // Access or listen on this throughout any module with app.session.user
        this.profileModel = new UserModel({});
      },
      updateProfile: function( userData ){
        //TODO
        this.profileModel.set(_.pick(userData, _.keys(this.profileModel.defaults)));
      },


        /*
         * Check for session from API 
         * The API will parse client cookies using its secret token
         * and return a user object if authenticated
         */
      checkAuth: function(callback, args) {
        var self = this;
        this.fetch({ 
            success: function(mod, response){
                if(!response.error && response.profileModel){
                    self.updateProfile(response.profileModel);
                    self.set({ logged_out : false });
                    if('success' in callback) callback.success(mod, response);    
                } else {
                    self.set({ logged_out : true });
                    if('error' in callback) callback.error(mod, response);    
                }
            }, error:function(mod, response){
                self.set({ logged_out : true });
                if('error' in callback) callback.error(mod, response);    
            }
        }).complete( function(){
            if('complete' in callback) callback.complete();
        });
      },


      /*
       * Abstracted fxn to make a POST request to the auth endpoint
       * This takes care of the CSRF header for security, as well as
       * updating the user and session after receiving an API response
       */
      postAuth: function(user_data, callback){
          var self = this;
          var postData = _.omit(user_data, 'method');
          if(DEBUG) console.log(postData);
          $.ajax({
              url: this.url() + '/' + user_data.method,
              contentType: 'application/json',
              dataType: 'json',
              type: 'POST',
              beforeSend: function(xhr) {
                  // Set the CSRF Token in the header for security
                  var token = $('meta[name="csrf-token"]').attr('content');
                  if (token) xhr.setRequestHeader('X-CSRF-Token', token);
              },
              data:  JSON.stringify( _.omit(user_data, 'method') ),
              success: function(response){
                  //update model
                  if( !response.error ){
                      if(_.indexOf(['loginSystem', 'signupSystem'], user_data.method) !== -1){

                          self.updateProfile( response.profileModel || {} );
                          self.set({ user_id: response.profileModel.id, logged_out: false });
                      } else {
                          self.set({ logged_out: true });
                      }

                      if(callback && 'success' in callback) callback.success(response);
                  } else {
                      if(callback && 'error' in callback) callback.error(response);
                  }
              },
              error: function(mod, response){
                  if(callback && 'error' in callback) callback.error(response);
              }
          }).complete( function(){
              if(callback && 'complete' in callback) callback.complete(response);
          });
      },

      alertDifferentPassword: function() {
        this.set('unmatched_password', true);
        console.log(this);
      },

      loginSystem: function(user_data, callback){
          this.postAuth(_.extend(user_data, { method: 'loginSystem' }), callback);
      },

      logout: function(user_data, callback){
          this.postAuth(_.extend(user_data, { method: 'logout' }), callback);
      },

      signupSystem: function(user_data, callback){
          this.postAuth(_.extend(user_data, { method: 'signupSystem' }), callback);
      },

      removeAccount: function(user_data, callback){
          this.postAuth(_.extend(user_data, { method: 'remove_account' }), callback);
      }
    });
    return MainWebModel;
});