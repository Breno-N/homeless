const db = require('./../../config/db/dbMysql.js')();

class AcaoDAO {

	find(){

		let query = `SELECT id, nome FROM acoes WHERE ativo = 1 ORDER BY nome`;

	    return db.executeQuery(query);
	};

	findById(id){

		let query = `SELECT id FROM acoes WHERE id = ? AND ativo = 1`;

		let params = [id];

	    return db.executeQuery(query, params, null, true);
	};

	insert(object){

		let query = `INSERT INTO acoes
						(nome)
					VALUES
						(?)`;

		let params = [object.nome];

	    return db.executeQuery(query, params);
	};
};

module.exports = new AcaoDAO();