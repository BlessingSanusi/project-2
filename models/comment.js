module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }, 
      created: DataTypes.DATE
    });
  
    Comment.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Comment.belongsTo(models.Author, {
        foreignKey: {
          allowNull: false
        }
      });
      Comment.belongsTo(models.Post, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Post;
  };
  