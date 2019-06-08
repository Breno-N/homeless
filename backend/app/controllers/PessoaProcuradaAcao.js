const dao = require('../dao/PessoaProcuradaAcaoDAO');

class PessoaProcuradaAcao {

	async insert(req, res, next){

		let acoes = req.body.acoes;

		if(!acoes || !acoes.length){
			res.json( (req.pessoaProcurada.atualizada ? req.pessoaProcurada.atualizada : req.pessoaProcurada.id) );
		} else {

			let pessoaProcuradaAcao = { id_pessoa_procurada : req.pessoaProcurada.id, id_acao : null, visto_em : req.pessoaProcurada.ultima_vez_visto_em };

			try {

				let resultPessoaProcuradaAcao = [];

				for(let i = 0; i < acoes.length; i++){

					pessoaProcuradaAcao.id_acao = acoes[i];
					let result = await dao.insert(pessoaProcuradaAcao);
					resultPessoaProcuradaAcao.push(result.insertId);
				}

				res.json(resultPessoaProcuradaAcao.join(','));

			} catch(error){
				next(new Error(`Erro ao Salvar Pessoa Procurada Ação: ${error.message}`));
			}
		}
	};


	findActionsByPersonId(req, res, next){

		const pessoaId = req.params.pessoaId;

		dao.findByPersonId(pessoaId)
		.then(results => res.json(results))
		.catch(error => next(new Error(`Erro ao consultar Dados de Pessoa Procurada ID ${id}. Erro : ${error.message}`)) );
	};
};

module.exports = new PessoaProcuradaAcao();