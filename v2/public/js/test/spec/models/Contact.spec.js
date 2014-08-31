/**
 * Created by raynald on 8/30/14.
 */

define(['backbone', 'app/models/Contact'], function(Backbone, Contact) {
    describe("Contact Model", function () {

      it("should have default values", function() {

        var contact = new Contact();
        expect(contact.get('firstName')).toEqual("");
        expect(contact.get('lastName')).toEqual("");
        expect(contact.get('email')).toEqual("");
        expect(contact.get('phone')).toEqual("");
      });

    });

});