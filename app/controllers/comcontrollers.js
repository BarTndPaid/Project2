var exports = module.exports = {}
 
exports.companyprofile = function(req, res) {
 
    res.render('company-profile');
 
}

exports.updatecompanyprofile = function(req,res){

	res.render('update-company-profile'); 

}

exports.dashboard = function(req,res){

	res.render('dashboard'); 

}
