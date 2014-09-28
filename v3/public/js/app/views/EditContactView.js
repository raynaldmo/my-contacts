/**
 * Created by raynald on 8/22/14.
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'text!app/templates/EditContactView.html'
], function($, _, Backbone, appTemplate) {

  var EditContactView = Backbone.View.extend({



    template : _.template(appTemplate),

    initialize : function(options) {
      this.$content = options.content;
      this.router = options.router;
      this.editId = options.id;
    },

    events : {
      'submit' : 'saveContact',
      'click #btn-cancel' : 'cancelEdit',
      'click #btn-delete-contact' : 'deleteContact'
    },

    render : function() {
      this.$el.html(this.template());
      this.$content.html(this.$el);

      if (this.editId) {
        var model = this.collection.get(this.editId);
        var $form = $('#form-contact');
        var name;

        name = model.get('firstname') + ' ' + model.get('lastname');

        $form.find('#name').val(name);
        $form.find('#email').val(model.get('email'));
        $form.find('#phone').val(model.get('phone'));
        $form.find('#address').val(model.get('address'));
        $form.find('#notes').val(model.get('notes'));
        $form.find('#hidden').val(this.editId);
      }
    },

    cancelEdit : function() {
      this.router.navigate('/', {trigger: true, replace : false});
      return false;
    },

    saveContact : function(evnt) {
      var contact, contactId, model, $form, names, name;

      evnt.preventDefault();


      $form = $('#form-contact');

      // grab form data
      name  = $form.find('#name').val().trim();
      names = name.split(' ');

      contact = {
        firstname : names[0],
        lastname : names[1],
        email : $form.find('#email').val().trim(),
        phone : $form.find('#phone').val().trim(),
        address : $form.find('#address').val().trim(),
        notes : $form.find('#notes').val().trim()
      };

      contactId = $('#hidden').val();
      console.log('hidden id', contactId);

      if ( contactId == "0") {
        // new contact, save it
        // contact.id = Math.random().toString(36).substr(2);
        this.collection.create(contact, { success : function(col, model) {
            // TODO: use model.id from local storage

          }
        });

      } else {
        // existing contact
        model = this.collection.get(contactId);

        if (model) {
          model.save(contact);
        }
      }

      this.router.navigate('/', {trigger : true, replace : false});

      return false;
    },

    deleteContact : function() {

      var $form = $('#form-contact') , contactId, model;

      contactId = $form.find('#hidden').val();

      if(contactId) {
        model = this.collection.get(contactId);
        if (model) {
          model.destroy();
        }
      }

      this.router.navigate('/', {trigger : true, replace : false});

      return false;
    }

  });

  return EditContactView;
});

