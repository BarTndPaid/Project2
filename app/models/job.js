module.exports = function(sequelize, Sequelize) {
    
    let Job = sequelize.define('job', {
    jname: {
        type: Sequelize.STRING,
        notEmpty: true
    },
    jobId:{
        type:Sequelize.INTEGER
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

Job.associate = function(models){
    Job.belongsTo(models.company, {
        foreignKey:{
            name:'companyId',
            allowNull:false
        }
    });
};
Job.associate = function(models){
    Job.belongsTo(models.contractor, {
        foreignKey:{
            name:'contractorId',
            allowNull:false
        }
    });
};


return Job;
}