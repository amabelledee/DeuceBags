module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      
      name: DataTypes.STRING
    });
  //need to make user equal to login on login
    User.associate = function(models) {
      
      User.hasMany(models.Journal, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };
  