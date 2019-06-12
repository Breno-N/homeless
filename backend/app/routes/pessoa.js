const express = require('express');
const format = require('../middlewares/format2Object');
const pessoaProcura = require('../controllers/PessoaProcura');
const pessoaProcurada = require('../controllers/PessoaProcurada');
const pessoaProcuradaAcao = require('../controllers/PessoaProcuradaAcao');
const router = express.Router();

router.route('/')
	.get(pessoaProcurada.find)
	.post(format, pessoaProcura.insert, pessoaProcurada.insert, pessoaProcuradaAcao.insert);

router.route('/latest/:qtd')
	.get(pessoaProcurada.findLatestWithLimit);	

router.route('/name/:name')
	.get(pessoaProcurada.findByName);	

router.route('/:id')
	.get(pessoaProcurada.findById)
	.put(format, pessoaProcurada.update, pessoaProcuradaAcao.insert);

router.route('/:pessoaId/acoes')
	.get(pessoaProcuradaAcao.findActionsByPersonId)

module.exports = router;