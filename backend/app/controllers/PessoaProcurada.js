const moment = require('moment');
const dao = require('../dao/PessoaProcuradaDAO');

class PessoaProcurada {

	find(req, res, next){

		dao.find()
		.then(results => res.json(results))
		.catch(error => next(new Error(`Erro ao consultar Listagem de Pessoas Procuradas. Erro : ${error.message}`)) );
	};

	findById(req, res, next){

		const id = req.params.id;

		dao.findById(id)
		.then(results => res.json(results))
		.catch(error => next(new Error(`Erro ao consultar Dados de Pessoa Procurada ID ${id}. Erro : ${error.message}`)) );
	};

	async insert(req, res, next){

		try {

			let resultPessoaProcurada = await dao.insert(req.pessoaProcurada);

			req.pessoaProcurada.id = resultPessoaProcurada.insertId;

			next();

		} catch(error){
			next(new Error(`Erro ao Salvar Pessoa Procurada: ${error.message}`));
		}
	};

	async update(req, res, next){

		try {

			if(!req.pessoaProcurada.id) {
				throw new Error(`ID não informado para atualização`);
			}

			req.pessoaProcurada.data_atualizacao = moment().format('YYYY-MM-DD HH:mm:ss');

			let pessoaProcuradaAtualizada = await dao.update(req.pessoaProcurada);

			req.pessoaProcurada.atualizada = pessoaProcuradaAtualizada;

			next();
			
		} catch(error){
			next(new Error(`Erro ao Atualizar Pessoa Procurada: ${error.message}`));
		}
	};

};

module.exports = new PessoaProcurada();