/**
 * Created by raynald on 8/30/14.
 */

define(['backbone', 'app/models/Contact'], function(Backbone, Contact) {
    describe("Contact Model", function () {
      var contact;

      beforeEach(function() {
        contact = new Contact();
      });

      it("should be a Backbone.Model", function(){
        expect(contact).toEqual(jasmine.any(Backbone.Model));
      });

      it("should have default values", function() {
        expect(contact.get('firstname')).toEqual("");
        expect(contact.get('lastname')).toEqual("");
        expect(contact.get('email')).toEqual("");
        expect(contact.get('phone')).toEqual("");
        expect(contact.get('address')).toEqual("");
        expect(contact.get('notes')).toEqual("");
      });

      afterEach(function() {
        contact.destroy();
      })

    });

});