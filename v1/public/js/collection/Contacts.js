/**
 * Created by raynald on 8/22/14.
 */

App.Collections.Contacts = Backbone.Collection.extend({
  model : App.Models.Contact,
  localStorage: new Backbone.LocalStorage('my-contacts')
});