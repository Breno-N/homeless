const nodemailer = require('nodemailer');
const dao = require('../dao/PessoaProcuraDAO');

async function sendMail(req, res, next){

	let id = req.body.id;

	try{

		let result  = await dao.findByIdProcurado(id);

		if(!result){

			next();
		} else {

			let transporter = nodemailer.createTransport({
		 		service: 'gmail',
		 		auth: {
		        	user: process.env.DB_PASS.MAIL_ADDRESS,
		       		pass: process.env.MAIL_PASS
		    	}
			});

			let mailOptions = {
				from: `sr.mendigo.app@gmail.com`,
				to: `${result.email}`,
				//to: `sr.mendigo.app@gmail.com`,
				subject: `Novas Informações de Pessoa Procurada no APP Sr.Mendigo`,
				html: `	<p>Oi ${result.nome}, tudo bem ?</p>
						<p>Temos Informações de ${result.nome_procurado}, foi visto pela última vez em : ${result.ultima_vez_visto_em} em ${result.data_atualizacao}</p>
						<p>Esperamos que de alguma forma possamos ter ajudado vocês, até mais.</p>`
			};

			transporter.sendMail(mailOptions, (err, info) => {
			   	if(err){
		     		next(err);
			   	}
			   	else{
		     		next();
			   	}
			});
		}
	} catch(error) {
		next(new Error(`Erro ao Enviar E-mail para a Peessoa que esta Procurando..: ${error.message}`));
	}
};

module.exports = sendMail;