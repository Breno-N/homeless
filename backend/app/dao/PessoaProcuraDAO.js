const db = require('./../../config/db/dbMysql.js')();

class PessoaProcuraDAO {

	findByIdProcurado(id){

		let query = `SELECT
						t1.nome as nome, 
						t1.email as email,
						t2.nome as nome_procurado,
						t2.ultima_vez_visto_em as ultima_vez_visto_em,
						DATE_FORMAT(t2.data_atualizacao, '%d/%m/%Y %H:%i:%s') as data_atualizacao
					FROM pessoas_procura t1
					INNER JOIN pessoas_procuradas t2 ON t2.id_pessoa_procura = t1.id 
					WHERE t2.id = ?`;

		let params = [id];

	    return db.executeQuery(query, params, null, true);
	};

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