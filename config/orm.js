var connection = require("./connection");



var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ?? ";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            return cb(result);
        });
    },

    create: function (table,column,values,cb) {
		var columnString = column.toString();
		var valuesString = "'"+ values +"'";
		var queryString = 'INSERT INTO ' + table + ' (' + columnString + ') ' + 'VALUES(' + "'" + valuesString + "'" + ');';
		
		

		connection.query(queryString, values, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},



};

module.exports = orm;



