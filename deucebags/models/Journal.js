module.exports = function(sequelize, DataTypes) {
    var Journal = sequelize.define("Journal", {
      title: {
        type: DataTypes.STRING,
        allowNull: true,
       
      },
      Date: { 
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    Post.associate = function(models) {
    
      Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Journal;
  };
  