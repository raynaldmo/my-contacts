/**
 * Created by raynald on 8/31/14.
 */
require([
  'jquery',
  'jasmine',
  'jasmine-html',
  'test/spec/models/Contact.spec',
  'test/spec/collections/Contacts.spec'
],
  function($, jasmine) {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();
    jasmineEnv.addReporter(htmlReporter);
    jasmineEnv.specFilter = function(spec) {
      return htmlReporter.specFilter(spec);
    };

    $(function () { jasmine.getEnv().execute(); });
  });
