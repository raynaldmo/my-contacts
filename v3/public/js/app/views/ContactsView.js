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

    template : _.template(contactsTemplate),

    initialize : function(options) {
      this.$content = options.content;
      this.router = options.router;
      this.contactViews = [];

      // display control bar and table header
      this.$el.html(this.template());
      this.$content.html(this.el);

      this.listenTo(this.collection, 'add', this.addEvent);
    },

    events : {
      'click a' : 'linkClick',
      'click #btn-new-contact' : "editContact"
    },

    render : function() {
      if (this.collection.length) {
        var self = this, el;

        // create new View for each contact
        this.collection.each(function(model) {

          var contactView = new ContactView({
            model : model,
            router : self.router
          });

          self.contactViews.push(contactView);

          el = contactView.render().el;
          self.$content.find('#table-contacts > tbody').append(el);
        });

      } else {
        this.$content.append('<p><em>You have no contacts</em></p>')
      }
    },

    addEvent : function(model) {
      console.log('addEvent: ', model.toJSON());
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
    },


    editContact : function(evnt) {
      evnt.preventDefault();

      // By magic, _this_ corresponds to contactView!
      this.router.navigate('editContact', {trigger: true, replace : false});

      return false;
    },

    linkClick : function(evnt) {
      // Interesting thing here. _this_ refers to view instead of DOM
      // element target of event
      var self = this,
        $tbody = this.$content.find('#table-contacts > tbody'),
        $target, sortKey;

      evnt.preventDefault();

      $target = $(evnt.currentTarget);

      sortKey = this.collection.comparator;

      if ($target.attr('href') == '#sort-last-name') {
        sortKey = "lastname";
      } else if ($target.attr('href') == '#sort-first-name') {
        sortKey = "firstname";
      } else {
        return;
      }

      this.collection.comparator = sortKey;

      // re-sort collection
      this.collection.sort();

      // Need to re-render individual contact views
      // clear current table
      $tbody.empty();

      // get rid of old views
      _.each(this.contactViews, function(view) {
          view.remove();
      });
      this.contactViews = [];

      this.render(); // show new contacts in desired sorted order
    }
  });

  return ContactsView;
});

