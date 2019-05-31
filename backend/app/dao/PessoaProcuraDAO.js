const db = require('./../../config/db/dbMysql.js')();

class PessoaProcuraDAO {

	insert(object){

		let query = `INSERT INTO pessoas_procura
						(nome, telefone, whatsapp, email)
					VALUES
						(?, ?, ?, ?)`;

		let params = [object.nome, object.telefone, object.whatsapp, object.email];

	    return db.executeQuery(query, params);
	};
};

module.exports = new PessoaProcuraDAO();