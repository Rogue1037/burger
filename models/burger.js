var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  insertOne: function(burger_name, response){
    orm.insertOne(burger_name, function(data){
      response(data);
    });
  },

};
module.exports = burger;