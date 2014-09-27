/**
 * Created by raynald on 8/29/14.
 */

require([ 'backbone','app/routers/AppRouter', 'app/collections/Contacts' ],

  function(Backbone, AppRouter, Contacts){
    var contacts = new Contacts();

    // manually add a couple of contacts (for testing)

     contacts.add([
        {firstName : "Mickey", lastName : "Mouse",
          email: "mickey@disney.com", phone : "714-555-1212"
        },
        {firstName : "Minnie", lastName : "Mouse",
          email: "minnie@disney.com", phone : "714-555-1213"
        }
      ]);

    // contacts.fetch();

    // instantiate and start router
    var appRouter = new AppRouter({
      content : $('#content'), contacts : contacts
    });

    Backbone.history.start();

  });
