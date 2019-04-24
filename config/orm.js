var connection = require("./connection");


var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ?? ";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            return cb(result);
        });
    },

    insertOne: function(burger, response) {
      var queryString = "INSERT INTO burgers (burger_name, burger_devoured) VALUES (?,?)";
      connection.query(queryString, [burger, false], function(err, data) {
        if (err) throw err;
        response(data);
      });
    },



};

module.exports = orm;



