const moment = require('moment');
const dao = require('../dao/PessoaProcuradaDAO');

class PessoaProcurada {

	find(req, res, next){

		dao.find()
		.then(results => res.json(results))
		.catch(error => next(new Error(`Erro ao consultar Listagem de Pessoas Procuradas. Erro : ${error.message}`)) );
	};

	findLatestWithLimit(req, res, next){

		const qtd = req.params.qtd;

		dao.findLatestWithLimit(qtd)
		.then(results => res.json(results))
		.catch(error => next(new Error(`Erro ao consultar Listagem de Pessoas Procuradas. Erro : ${error.message}`)) );
	};

	findById(req, res, next){

		const id = req.params.id;

		dao.findById(id)
		.then(results => res.json(results))
		.catch(error => next(new Error(`Erro ao consultar Dados de Pessoa Procurada ID ${id}. Erro : ${error.message}`)) );
	};

	findByName(req, res, next){

		const name = req.params.name;

		dao.findByName(name)
		.then(results => res.json(results))
		.catch(error => next(new Error(`Erro ao consultar Dados de Pessoa Procurada Por Nome ${name}. Erro : ${error.message}`)) );
	};

	async checkExists(req, res, next){

		try {

			if(req.body.passBy) {

				next();
			} else {

				let resultPessoaProcurada = await dao.checkExists(req.pessoaProcurada.nome);

				if(resultPessoaProcurada.length){

					res.json(resultPessoaProcurada);
				} else {
					next();
				}
			}
		} catch(error){
			next(new Error(`Erro ao Verificar Existência de Pessoa Procurada: ${error.message}`));
		}
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

	async remove(req, res, next){

		try {
			if(!req.params.id) {
				throw new Error(`ID não informado para remoção`);
			}

			let pessoaProcurada = await dao.findById(req.params.id);

			pessoaProcurada.data_atualizacao = moment().format('YYYY-MM-DD HH:mm:ss');

			let pessoaProcuradaRemovida = await dao.remove(pessoaProcurada);

			res.json(pessoaProcuradaRemovida);

		} catch(error){
			next(new Error(`Erro ao Remover Pessoa Procurada: ${error.message}`));
		}
	};

};

module.exports = new PessoaProcurada();