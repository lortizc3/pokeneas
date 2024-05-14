const express = require('express');
const router = express.Router();
const { JSON, show } = require('../controller/controllerNea');



router.get('/pokenero/JSON', (req, res) => {

  JSON(res)
});

router.get('/pokenero/view', (req, res) => {
   
    show(res) 

});

router.get('/', (req, res) => {


    res.render('index');
});

module.exports = router;