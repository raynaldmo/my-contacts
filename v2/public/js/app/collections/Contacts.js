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

      localStorage: new Store('my-contacts')
    });

    return Contacts;
});
