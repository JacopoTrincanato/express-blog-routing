const express = require('express')
const router = express.Router()

//importo il contenuto di dolcicontrollers
const dolciController = require('../controllers/dolcicontrollers.js')

//definisco le rotte

//index 
router.get('/', dolciController.index);

//show
router.get('/:slug', dolciController.show);

//esporto router
module.exports = router