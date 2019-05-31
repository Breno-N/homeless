function DbConfig() {
	
	this.mysql = {
		projeto: {
			host: 'localhost',
			database : 'homeless',
			user : 'root',
			password : '',
			//debug : true
		},
	};
}

module.exports = new DbConfig();