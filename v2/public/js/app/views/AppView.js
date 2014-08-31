/**
 * Created by raynald on 8/22/14.
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'text!app/templates/AppView.html'
  ], function($, _, Backbone, appTemplate) {

  var AppView = Backbone.View.extend({
    tagName : 'form',
    id : 'form-contact',
    template : _.template(appTemplate),


    initialize : function(options) {
      this.$content = $('#content');
      this.router = options.router;
      this.render();
    },

    events : {
      'submit' : 'saveContact'
    },

    render : function() {
      this.$el.html(this.template());
      this.$content.append(this.$el);
      this.$('#first-name').focus();

    },

    saveContact : function(evnt) {
      var contact, id, model;

      evnt.preventDefault();

      // grab the form data
      contact = {
        firstName : this.$('#first-name').val().trim(),
        lastName : this.$('#last-name').val().trim(),
        email : this.$('#email').val().trim(),
        phone : this.$('#phone').val().trim()
      };

      // debugger;

      id = $('#hidden').val();
      // console.log('hidden id', id);

      if ( id == "0") {
        // new contact, save it
        contact.id = Math.random().toString(36).substr(2);
        this.collection.create(contact, { success : function(col, model) {
          // debugger;
          // TODO: use model.id from local storage
        }
        });

      } else {
        // existing contact
        model = this.collection.get(id);

        if (model) {
          model.save(contact);
        }

        this.router.navigate('/contacts', {trigger : true, replace : true});
      }

      // reset form
      $('#form-contact').trigger('reset');

      this.$('#first-name').focus();

      return false;
    },

    editContact : function(model) {
      // Fill in form with model data

      this.$el.find('#first-name').val(model.get('firstName'));
      this.$('#last-name').val(model.get('lastName'));
      this.$('#email').val(model.get('email'));
      this.$('#phone').val(model.get('phone'));
      this.$('#hidden').val(model.id);
    }

  });

  return AppView;
});

