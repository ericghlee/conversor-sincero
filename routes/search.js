var express = require('express');
var router = express.Router();
var catalogues = require('../controllers/search');

router.route('/catalogues')
.get(catalogues.apiGET)
.post(catalogues.apiPOST);
module.exports = router;