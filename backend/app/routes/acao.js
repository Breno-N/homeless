const express = require('express');
const controller = require('../controllers/Acao');
const router = express.Router();

router.route('/')
	.get(controller.find)
	.post(controller.insert);

router.delete('/:id', controller.remove);

module.exports = router;