var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    userCollection = mongoose.model('users', new Schema({
        name: { type: String },
        email: { type: String },
        password: { type: String },
        lastmoddate: { type: Date, default: new Date() }
    })),
    jwt = require('jsonwebtoken');

function UserModel() {
    this.userCollection = userCollection;
}

UserModel.prototype.find = function (c) {
    this.userCollection.find({}, c);
}



UserModel.prototype.create = function (data, c) {
    var userInfo = new userCollection(data);
    userInfo.save(c);
}

UserModel.prototype.login = function (data, c) {
    this.userCollection.find({ email: data.email, password: data.password }, function (err, result) {
        if (err) {
            c(err, null);
        } else if (result.length === 0) {
            c(null, { status: 404, message: 'record not found' });
        } else {
            var token = jwt.sign(result[0].toJSON(), 'myapp', { expiresIn: 60 * 5 });
            var userInfo = {
                token:token,
                details:result[0]
            }
            c(err, userInfo);
        }
    })
}


module.exports = UserModel;
