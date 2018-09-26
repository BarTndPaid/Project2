module.exports = function (sequelize, Sequelize) {

    let Contractor = sequelize.define('contractor', {
        ename: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        essn: {
            type: Sequelize.INTEGER(9),
            notEmpty: true
        },
        eaddress: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        ephone: {
            type: Sequelize.INTEGER(10),
            notEmpty: true
        },
        experience: {
            type: Sequelize.INTEGER(2),
            notEmpty: true
        },
        eabout: {
            type: Sequelize.TEXT,
            notEmpty: false
        },
        tabc: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        contractorId:{
            type: Sequelize.INTEGER
        }

    });

    Contractor.associate = function (models) {
        Contractor.belongsTo(models.user, {
            foreignKey: {
                name:'userId',
                allowNull: false
            }
        });
    };

    Contractor.associate =function(models){
        Contractor.hasMany(models.job,{
            foreignKey:{
                name:'contractorId',
                allowNull:false
            }
        });
    };
    return Contractor;
};