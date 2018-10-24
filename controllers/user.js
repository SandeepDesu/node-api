var userModel = require('../models/user'),
    um = new userModel();

function UserController() {

}

UserController.prototype.find = function (req, res) {
    um.find(function (err, data) {
        res.send(data);
    });
};


UserController.prototype.create = function (req, res) {
    um.create(req.body, function (err, data) {
        res.send(data);
    });
};


UserController.prototype.login = function (req, res) {
    um.login(req.body, function (err, data) {
        res.send(data);
    });
};








module.exports = UserController;