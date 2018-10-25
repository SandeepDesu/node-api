var express = require('express'),
    router = express.Router(),
    userController = require('../controllers/user'),
    uc = new userController(),
    middleware = require('../utils/midleware/midleware');


router.get('/',uc.find.bind(uc));
router.get('/:id',uc.findOne.bind(uc));
router.post('/',uc.create.bind(uc));
router.post('/auth',uc.login.bind(uc));
router.put('/:id',uc.update.bind(uc));
router.delete('/:id',uc.delete.bind(uc));

module.exports = router;