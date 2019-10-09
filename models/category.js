module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        postName: DataTypes.STRING,
        postDescription: DataTypes.STRING
    });

    Category.associate = function (models) {

        Category.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };

    return Category;
};