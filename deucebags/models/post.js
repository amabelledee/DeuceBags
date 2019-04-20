module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false
       
        
      }
    });
    return Post;
  };
  