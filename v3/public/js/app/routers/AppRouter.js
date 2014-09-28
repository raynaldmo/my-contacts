/**
 * Created by raynald on 8/22/14.
 */
define([
    'underscore',
    'backbone',
    'app/views/ContactsView',
    'app/views/EditContactView'
  ], function(_, Backbone, ContactsView, EditContactView) {

  var AppRouter = Backbone.Router.extend({

    routes : {
      '' : 'index',
      'editContact' : 'editContact',
      'edit/:id' :    'editContact'
    },

    initialize : function(options) {
      console.log('AppRouter: init');

      this.contacts = options.contacts;
      this.$content = options.content;
      this.currentView = null;

    },

    index : function () {
      console.log('default route');

      this.contactsView = new ContactsView({
        collection : this.contacts,
        content : this.$content,
        router : this
      });

      this.changeView(this.contactsView);

    },

    editContact : function(id) {
      console.log('new contact ', id);

      this.editView = new EditContactView({
        id : id,
        collection : this.contacts,
        content : this.$content,
        router : this
      });

      this.changeView(this.editView);
    },

    // May need to replace this logic with that suggested in:
    // http://lostechies.com/derickbailey/2011/09/15/zombies-run-managing-page-transitions-in-backbone-apps/
    changeView : function(view) {
      if (this.currentView) {
        if (this.currentView == view) {
          return;
        }
        this.currentView.remove();
      }
      view.render();

      this.currentView = view;
    }

  });

  return AppRouter;
});

