var exports = module.exports = {}
 
exports.profile = function(req, res) {
 
    res.render('profile');
 
}

exports.updateprofile = function(req,res){

	res.render('update-profile'); 

}

exports.dashboard = function(req,res){

	res.render('dashboard'); 

}