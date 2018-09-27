var comController = require('../controllers/comcontrollers');

module.exports = function (app, business) {

    app.get('/businessprofile', comController.companyprofile);


    app.get('/signin', comController.signin);
}
