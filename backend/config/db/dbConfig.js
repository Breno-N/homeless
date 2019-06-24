function DbConfig() {
	
	this.mysql = {
		projeto: {
			host: process.env.DB_HOST,
			database : process.env.DB_NAME,
			user : process.env.DB_USER,
			password : process.env.DB_PASS,
			//debug : true
		},
	};
}

module.exports = new DbConfig();
