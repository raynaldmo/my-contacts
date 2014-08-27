this["JST"] = this["JST"] || {};

this["JST"]["AppView"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '  <div>\n    <label for="first-name">First Name</label>\n    <input type="text" id="first-name" name="first-name" >\n  </div>\n  <div>\n    <label for="last-name">Last Name</label>\n    <input type="text" id="last-name" name="last-name" >\n  </div>\n  <div>\n    <label for="email">Email</label>\n    <input type="text" id="email" name="email" >\n  </div>\n  <div>\n    <label for="phone">Phone</label>\n    <input type="text" id="phone" name="phone" >\n  </div>\n  <input type="hidden" id="hidden" value="0">\n  <div>\n    <input type="submit" value="Submit">\n    <input type="reset" value="Reset">\n  </div>\n';

}
return __p
};

this["JST"]["ContactView"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td>' +
((__t = (firstName)) == null ? '' : __t) +
'</td>\n<td>' +
((__t = (lastName)) == null ? '' : __t) +
'</td>\n<td>' +
((__t = (email)) == null ? '' : __t) +
'</td>\n<td>' +
((__t = (phone)) == null ? '' : __t) +
'</td>\n<td><a href="/edit/' +
((__t = (this.model.id)) == null ? '' : __t) +
'">Edit | </a>\n  <a href="/remove/' +
((__t = (this.model.id)) == null ? '' : __t) +
'">Remove</a>\n</td>\n';

}
return __p
};

this["JST"]["ContactsView"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<thead>\n  <tr>\n    <th>First Name</th>\n    <th>Last Name</th>\n    <th>Email</th>\n    <th>Phone</th>\n    <th>Actions</th>\n  </tr>\n</thead>\n';

}
return __p
};