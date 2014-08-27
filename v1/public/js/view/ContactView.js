/**
 * Created by raynald on 8/22/14.
 */

App.Views.ContactView = Backbone.View.extend({
  // use 'tagName' rather than el, otherwise
  // this.$el.html() will automatically add html markup to
  // page
  tagName : 'tr',

  // Use grunt-contrib-jst to compile temolate
  template : JST.ContactView,

  initialize : function(options) {
    this.router = options.router;
  },

  events : {
    'click a' : 'clickHandler'
  },

  render : function() {

    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    return this;
  },

  clickHandler : function(evnt) {
    console.log('clickHandler');
    evnt.preventDefault();

    // href format: href='/edit/cid'
    // href format: href='/remove/cid'
    // By magic, _this_ corresponds to contactView!
    this.router.navigate($(evnt.currentTarget).attr("href"),
      {trigger: true, replace : true});
    return false;
  }

});
