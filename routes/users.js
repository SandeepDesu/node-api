var express = require('express'),
    router = express.Router(),
    userController = require('../controllers/user'),
    uc = new userController(),
    middleware = require('../utils/midleware/midleware');


router.get('/',middleware.auth,uc.find.bind(uc));
router.post('/',middleware.auth,uc.create.bind(uc));
router.post('/auth',uc.login.bind(uc));


module.exports = router;