/**
 * Created by raynald on 8/22/14.
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'text!app/templates/ContactView.html' // magically compiles template file
  ], function($, _, Backbone, contactTemplate) {

  var ContactView = Backbone.View.extend({
    // use 'tagName' rather than el, otherwise
    // this.$el.html() will automatically add html markup to
    // page
    tagName : 'tr',

    template : _.template(contactTemplate),

    initialize : function(options) {
      this.router = options.router;
    },

    events : {
      'click td' : 'clickHandler' // clicking on tr doesn't work, why ?
    },

    render : function() {
      var html, name;

      name = this.model.get('firstname') + " " + this.model.get('lastname');
      this.model.set('name', name);

      html = this.template(this.model.toJSON());
      this.$el.html(html);
      this.$el.data('contactId', this.model.id);

      return this;
    },

    clickHandler : function(evnt) {
      var $target, id;

      console.log('ContactView: clickHandler');

      $target = $(evnt.currentTarget);
      id = $target.parent().data('contactId');

      if (!id) return false;

      // By magic, _this_ corresponds to contactView and not
      // DOM element
      this.router.navigate('/edit/' + id, {trigger: true, replace : false});

      return false;
    }
  });

  return ContactView;
});


