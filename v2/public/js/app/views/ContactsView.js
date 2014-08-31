/**
 * Created by raynald on 8/24/14.
 */
define ([
  'jquery',
  'underscore',
  'backbone',
  'app/views/ContactView',
  'text!app/templates/ContactsView.html'
  ], function($, _, Backbone, ContactView, contactsTemplate) {

  var ContactsView = Backbone.View.extend({
    // use 'tagName' rather than el, otherwise
    // this.$el.html() will automatically add html markup to
    // page
    tagName : 'table',
    id : 'contacts-table',

    template : _.template(contactsTemplate),

    initialize : function(options) {
      this.$content = $('#contacts');
      this.router = options.router;

      this.listenTo(this.collection, 'add', this.addContact);

      this.render();
    },

    render : function() {
      if (this.collection.length) {
        // display table
        this.$el.html(this.template());
        this.$content.html(this.el);

        var self = this;

        // create new View for each contact
        this.collection.each(function(model) {

          var contactView = new ContactView({
            model : model,
            router : self.router
          });
          var el = contactView.render().el;
          self.$content.find('#contacts-table').append(el);
        });

      } else {
        this.$content.html('<p><em>You have no contacts</em></p>')
      }
    },

    addContact : function(model) {
      var contactView, el;

      contactView = new ContactView({
        model : model,
        router : this.router
      });
      el = contactView.render().el;

      // For very first add, table will not exist, so add it
      if ($('#contacts-table').length == 0) {
        this.$el.html(this.template());
        this.$content.html(this.el);
      }

      this.$content.find('#contacts-table').append(el);
    }

  });

  return ContactsView;
});

