/**
 * Created by raynald on 8/22/14.
 */
define(['underscore',
        'backbone',
        'storage',
        'app/models/Contact'
      ], function(_, Backbone, Store, Contact) {

      var Contacts = Backbone.Collection.extend({

      model : Contact,

      // localStorage: new Store('my-contacts'),
      //localStorage: new Store(this.localStoreName),

      initialize : function(options) {
        this.localStoreName = options.localStoreName;
        this.localStorage =  new Store(this.localStoreName);
      }
    });

    return Contacts;
});
