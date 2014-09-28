/**
 * Created by raynald on 8/30/14.
 */

define(
  ['backbone', 'app/collections/Contacts', 'app/models/Contact'],

  function(Backbone, Contacts, Contact) {

    describe("Contacts Collection", function () {
      var contacts =
        new Contacts({localStoreName : 'my-contacts-test'});

      it("should be a Backbone.Collection", function(){
        expect(contacts).toEqual(jasmine.any(Backbone.Collection));
      });

      it("should be of Contacts", function() {
        expect(contacts.model).toBe(Contact);
      });

      describe("When creating a contact", function() {
        afterEach(function() {
          contacts.localStorage._clear();
          console.log('called afterEach');
        });

        it('should create and store contact ok', function() {
            var contact = {
              firstname : "Mickey",
              lastname : "Mouse",
              email : "mickey@disney.com",
              phone : "714-555-2020",
              address : "401 Walt Disney Way, Anaheim CA, 94001",
              notes : "Head Mouse"
            };

          var model = contacts.create(contact);
          expect(model).toEqual(jasmine.any(Backbone.Model));

        });

        it('should fetch contact ok',function() {
            var callback = jasmine.createSpy();
        });

      });

    });
});