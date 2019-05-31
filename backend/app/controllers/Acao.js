const dao = require('../dao/AcaoDAO');

class Acao {

	find(req, res, next){

		dao.find()
		.then(results => res.json(results))
		.catch(error => next(new Error(`Erro ao consultar Listagem de Ações. Erro : ${error.message}`)) );
	};

	insert(req, res, next){

		let item = req.body;

		dao.insert(item)
		.then(result => res.json(result.insertId))
		.catch(error => next(new Error(`Erro ao Salvar Ação. Erro : ${error.message}`)) );
	};

	async remove(req, res, next){

		const id = req.params.id; 

		try{

			let acao = await dao.findById(id);

			if(!acao){
				throw new Error(`ID ${id} não encontrado`);
			}

			let affecteds = await dao.delete(acao.id);

			res.status(204).json(affecteds);

		} catch(error) {
			next(new Error(`Erro ao Remover Ação: ${error.message}`));
		}
	}
};

module.exports = new Acao();