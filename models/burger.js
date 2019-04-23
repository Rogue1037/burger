var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  create: function (table , column, values, cb) {
		orm.create( table,column, values, function (res) {
			cb(res);
			console.log("orm model CREATE is working");
		});
	},

};
module.exports = burger;