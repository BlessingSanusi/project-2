module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      join_date: DataTypes.DATE,

    });
    User.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Author.hasMany(models.Post, {
          onDelete: "cascade"
        });
        Author.hasMany(models.Comment, {
          onDelete: "cascade"
        });
      };
    return User;
  };
  