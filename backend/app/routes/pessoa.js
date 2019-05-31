const express = require('express');
const format = require('../middlewares/format2Object');
const pessoaProcura = require('../controllers/PessoaProcura');
const pessoaProcurada = require('../controllers/PessoaProcurada');
const pessoaProcuradaAcao = require('../controllers/PessoaProcuradaAcao');
const router = express.Router();

router.route('/')
	.get(pessoaProcurada.find)
	.post(format, pessoaProcura.insert, pessoaProcurada.insert, pessoaProcuradaAcao.insert);

router.route('/:id')
	.get(pessoaProcurada.findById)
	.put(format, pessoaProcurada.update, pessoaProcuradaAcao.insert);

module.exports = router;