var express = require('express');
var router = express.Router();
var reclamo={tipoReclamo:"odeca",observacion:"mal servicio",fechaREclamo:"29/11/2016"}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'prooyecto final', subtitle:'avances en computacion',reclamo: reclamo});

});

module.exports = router;
