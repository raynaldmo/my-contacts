/**
 * Created by raynald on 8/22/14.
 */

$(function(){
  // Instantiate views
  // var appView = new App.Views.AppView({content : $('#content')});
  // var contactsView = new App.Views.ContactsView({content : $('#contacts')});

  var contacts = new App.Collections.Contacts();

  // manually add a couple of contacts (for testing)
  /*
   this.contacts.add([
   {firstName : "Mickey", lastName : "Mouse",
   email: "mickey@disney.com", phone : "714-555-1212"
   },
   {firstName : "Minnie", lastName : "Mouse",
   email: "minnie@disney.com", phone : "714-555-1213"
   }
   ]);
   */
  contacts.fetch();

  // instantiate and start router
  var appRouter = new App.Routers.AppRouter({
    content : $('#content'), contacts : contacts
  });
  Backbone.history.start();

});

