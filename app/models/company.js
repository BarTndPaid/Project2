module.exports = function (sequelize, Sequelize) {

    let Company = sequelize.define('company', {
        cname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        cein: {
            type: Sequelize.INTEGER(9),
            notEmpty: true
        },
        caddress: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        cphone: {
            type: Sequelize.INTEGER(10),
            notEmpty: true
        },
        companyId:{
            type: Sequelize.INTEGER
        }

    });

    Company.associate = function (models) {
        Company.belongsTo(models.user, {
            foreignKey: {
                name:'userId',
                allowNull: false
            }
        });
    };
    Company.associate = function (models) {
        Company.hasMany(models.job, {
            foreignKey: {   
                allowNull: false
            }
        });
    };

    return Company;
};