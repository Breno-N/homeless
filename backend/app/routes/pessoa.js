const express = require('express');
const format = require('../middlewares/format2Object');
const sendMail = require('../middlewares/sendMail');
const pessoaProcura = require('../controllers/PessoaProcura');
const pessoaProcurada = require('../controllers/PessoaProcurada');
const pessoaProcuradaAcao = require('../controllers/PessoaProcuradaAcao');
const router = express.Router();

router.route('/')
	.get(pessoaProcurada.find)
	.post(format, pessoaProcurada.checkExists, pessoaProcura.insert, pessoaProcurada.insert, pessoaProcuradaAcao.insert);

router.route('/latest/:qtd')
	.get(pessoaProcurada.findLatestWithLimit);	

router.route('/name/:name')
	.get(pessoaProcurada.findByName);	

router.route('/:id')
	.get(pessoaProcurada.findById)
	.put(format, pessoaProcurada.update, sendMail, pessoaProcuradaAcao.insert)
	.delete(format, pessoaProcurada.remove);

router.route('/:pessoaId/acoes')
	.get(pessoaProcuradaAcao.findActionsByPersonId);

router.route('/:pessoaId/acoes')
	.get(pessoaProcuradaAcao.findActionsByPersonId);

module.exports = router;