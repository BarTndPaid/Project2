module.exports = function(sequelize, Sequelize) {
    
    let Company = sequelize.define('company', {
    cname: {
        type: Sequelize.STRING,
        notEmpty: true
    },
    cein:{
        type: Sequelize.INTEGER(9),
        notEmpty: true
    },
    caddress: {
        type:Sequelize.STRING,
        notEmpty:true
    },
    cphone:{
        type:Sequelize.INTEGER(10),
        notEmpty:true
    }

});

Company.associate = function(models){
    Company.belongsTo(models.User, {
        foreignKey:{
            allowNull:false
        }
    });
};


return Company;
};
