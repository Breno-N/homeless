const db = require('./../../config/db/dbMysql.js')();

class PessoaProcuradaDAO {

	find(){

		let query = `SELECT 
						t1.id as id,
						t2.nome as quem_procura,
						t1.nome as nome,
						t1.idade as idade,
						t1.morava_em as morava_em
					FROM pessoas_procuradas t1
					LEFT JOIN pessoas_procura t2 ON t1.id_pessoa_procura = t2.id 
					WHERE t1.ativo = 1
					ORDER BY t1.data_cadastro DESC`;

	    return db.executeQuery(query);
	};

	findLatestWithLimit(limit){

		let query = `SELECT 
						t1.id as id,
						t2.nome as quem_procura,
						t1.nome as nome,
						t1.idade as idade,
						t1.morava_em as morava_em
					FROM pessoas_procuradas t1
					LEFT JOIN pessoas_procura t2 ON t1.id_pessoa_procura = t2.id 
					WHERE t1.ativo = 1
					ORDER BY t1.data_cadastro DESC
					LIMIT ${limit}`;

	    return db.executeQuery(query);
	};

	findById(id){

		let query = `SELECT 
						t1.id as id,
						t1.nome as nome,
						t1.idade as idade,
						t1.morava_em as morava_em,
						t1.ultima_vez_visto_em as ultima_vez_visto_em,
						t2.nome as quem_procura,
						t2.telefone as quem_procura_tel,
						t2.whatsapp as quem_procura_whats,
						t2.email as quem_procura_email
					FROM pessoas_procuradas t1
					LEFT JOIN pessoas_procura t2 ON t1.id_pessoa_procura = t2.id 
					WHERE t1.id = ? and t1.ativo = 1`;

		let params = [id];

	    return db.executeQuery(query, params, null, true);
	};

	findByName(name){

		let query = `SELECT 
						t1.id as id,
						t2.nome as quem_procura,
						t1.nome as nome,
						t1.idade as idade,
						t1.morava_em as morava_em
					FROM pessoas_procuradas t1
					LEFT JOIN pessoas_procura t2 ON t1.id_pessoa_procura = t2.id 
					WHERE (t1.nome like '%${name}%' or t2.nome like '%${name}%') and t1.ativo = 1
					ORDER BY t1.data_cadastro DESC`;

	    return db.executeQuery(query);
	};

	checkExists(name){

		let query = `SELECT 
						t1.id as id,
						t1.nome as nome,
						t1.idade as idade,
						t1.morava_em as morava_em
					FROM pessoas_procuradas t1
					WHERE t1.nome like '%${name}%'
					ORDER BY t1.data_cadastro DESC`;

	    return db.executeQuery(query);
	};

	insert(object){

		let query = `INSERT INTO pessoas_procuradas 
						(id_pessoa_procura, nome, idade, morava_em, ultima_vez_visto_em)
					VALUES
						(?, ?, ?, ?, ?)`;

		let params = [object.id_pessoa_procura, object.nome, object.idade, object.morava_em, object.ultima_vez_visto_em];

	    return db.executeQuery(query, params);
	};

	update(object){

		let query = `UPDATE pessoas_procuradas SET 
						idade = ?,
						ultima_vez_visto_em = ?,
						data_atualizacao = ?
					WHERE id = ?`;

		let params = [object.idade, object.ultima_vez_visto_em, object.data_atualizacao, object.id];

	    return db.executeQuery(query, params, 'affectedRows');
	};

	remove(object){

		let query = `UPDATE pessoas_procuradas SET 
						ativo = 0,
						ultima_vez_visto_em = ?,
						data_atualizacao = ?
					WHERE id = ?`;

		let params = [object.ultima_vez_visto_em, object.data_atualizacao, object.id];

	    return db.executeQuery(query, params, 'affectedRows');
	};
};

module.exports = new PessoaProcuradaDAO();