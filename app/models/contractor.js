module.exports = function(sequelize, Sequelize) {
    
    let contractor = sequelize.define('contractor', {
    ename: {
        type: Sequelize.STRING,
        notEmpty: true
    },
    essn:{
        type: Sequelize.INTEGER(9),
        notEmpty: true
    },
    eaddress: {
        type:Sequelize.STRING,
        notEmpty:true
    },
    ephone:{
        type:Sequelize.INTEGER(10),
        notEmpty:true
    },
    experience:{
        type:Sequelize.INTEGER(2),
        notEmpty:true
    },
    eabout:{
        type:Sequelize.TEXT,
        notEmpty:false
    },
    tabc:{
    type:Sequelize.BOOlEAN,
    notEmpty:false
    }

});

contractor.associate = function(models){
    contractor.belongsTo(models.user, {
        foreignKey:{
            allowNull:false
        }
    });
};


return contractor;
};