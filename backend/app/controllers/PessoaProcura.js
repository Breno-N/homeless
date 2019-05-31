const dao = require('../dao/PessoaProcuraDAO');

class PessoaProcura {

	async insert(req, res, next){

		try {

			let pessoaProcura = req.pessoaProcura;
			let idPessoaProcura = null;

			if(pessoaProcura.nome && (pessoaProcura.telefone || pessoaProcura.whatsapp || pessoaProcura.email) ) {
			
				let resultPessoaProcura = await dao.insert(pessoaProcura);

				idPessoaProcura = resultPessoaProcura.insertId;
			}

			req.pessoaProcurada.id_pessoa_procura = idPessoaProcura;

			next();

		} catch(error){
			next(new Error(`Erro ao Salvar Pessoa que Procura: ${error.message}`));
		}
	};

};

module.exports = new PessoaProcura();