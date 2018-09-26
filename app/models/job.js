module.exports = function(sequelize, Sequelize) {
    
    let Job = sequelize.define('job', {
    jname: {
        type: Sequelize.STRING,
        notEmpty: true
    },
    id:{
        type:Sequelize.INTERGER(5),
        autoIncrement:true,
        primaryKey:true
    },
    description:
    {
        type:Sequelize.TEXT,
        notEmpty:true
    },
    startdate:{
        type:Sequelize.DATE
    },
    enddate:{
        type:Sequelize.DATE
    }

});

job.associate = function(models){
    job.belongsTo(models.company, {
        foreignKey:{
            allowNull:false
        }
    });
};

return Job;
}