function formatar(req, res, next){

	let item = req.body;
	
	let pessoaProcurada = ( ({
		id, 
		id_pessoa_procura, 
		nome,
		idade, 
		morava_em, 
		ultima_vez_visto_em,
	}) => ({id, id_pessoa_procura, nome, idade, morava_em, ultima_vez_visto_em}) )(item);

	let pessoaProcura = ( ({
		id, 
		quem_procura : nome, 
		quem_procura_telefone : telefone,
		quem_procura_whats : whatsapp, 
		quem_procura_email : email, 
	}) => ({id, nome, telefone, whatsapp, email}) )(item);

	req.pessoaProcurada = pessoaProcurada;
	req.pessoaProcura = pessoaProcura;

	next();
};

module.exports = formatar;