/**
 * Created by raynald on 8/29/14.
 */

require([ 'backbone','app/routers/AppRouter', 'app/collections/Contacts' ],

  function(Backbone, AppRouter, Contacts){

    var contacts  = new Contacts({localStoreName : 'my-contacts'});
    contacts.comparator = 'lastname';

    /*
    // manually add a couple of contacts (for testing)
    contacts.add([
      {firstname : "Mickey", lastname : "Mouse",
        email: "mickey@disney.com", phone : "714-555-1212",
        address : "401 Walt Disney Way, Anaheim CA, 94001", notes :  ""
      },

      {firstname : "Minnie", lastname : "Mouse",
        email: "minnie@disney.com", phone : "714-555-1213",
        address : "401 Walt Disney Way, Anaheim CA, 94001", notes : ""
      },

      {firstname : "Donald", lastname : "Duck",
        email: "donald@disney.com", phone : "714-555-1214",
        address : "401 Walt Disney Way, Anaheim CA, 94001", notes : ""
      },

      {firstname : "Wild", lastname : "Coyote",
        email: "wildecoyote@warnerbros.com", phone : "212-555-2026",
        address : "111 Park Avenue, New York NY, 01287" , notes : ""
      }

    ]);
    */

    window.contacts = contacts;

    contacts.fetch();

    // instantiate and start router
    var appRouter = new AppRouter({
      content : $('#content'), contacts : contacts
    });

    Backbone.history.start();

  });
