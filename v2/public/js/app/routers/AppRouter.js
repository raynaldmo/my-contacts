/**
 * Created by raynald on 8/22/14.
 */
define([
    'underscore',
    'backbone',
    'app/views/AppView',
    'app/views/ContactsView'
  ], function(_, Backbone, AppView, ContactsView) {

  var AppRouter = Backbone.Router.extend({

    routes : {
      '' : 'index',
      'edit/:id': 'editContact',
      'remove/:id' : 'removeContact',
      'contacts' : 'showContacts'
    },

    initialize : function(options) {
      this.contacts = options.contacts;
      this.$content = options.content;


      this.appView = new AppView({
        collection : this.contacts,
        router : this
      });

      this.contactsView = new ContactsView({
        collection : this.contacts,
        router : this
      });

    },


    index : function () {
      console.log('default route');
    },

    editContact : function(id) {

      var model = this.contacts.get(id);
      if (model) {
        this.appView.editContact(model);
      }
    },

    removeContact : function(id) {


      console.log('removeContact', id);

      var model = this.contacts.get(id);
      if (model) {
        model.destroy();

        // update contact list/table
        this.contactsView.render();
      }
    },

    showContacts : function() {
      this.contactsView.render();
    }

  });

  return AppRouter;
});

