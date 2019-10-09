// create post
// When the create button is clicked,grab the input val
$(document).ready(function () {
    $(".Category").on("click", function () {
        var CategoryID = $(this).attr("id");
        $("#createpost").val(CategoryID);
    });
    $("#createpost").on("click", function () {
        var titleInput = $("#post-title");
        var bodyInput = $("#postBody");
        var CategoryID = $("#Category-createPost").val();
        // var postedby = $("#createpost").attr("byid");

        var postData = {
            title: titleInput.val().trim(),
            body: bodyInput.val().trim(),
            CategoryID: CategoryID
        };

        console.log(postData);
        $("#createpost").val("");
        createPost(postData.title, postData.body, postData.CategoryID);
        //empty the fields
        titleInput.val("");
        bodyInput.val("");
    });

    // Does a post to the create route. If successful, we are redirected to the main page
    function createPost(title, body, CategoryID) {
        $.post("/api/create", {
            title: title,
            body: body,
            id: CategoryID
        }).then(function () {
            window.location.reload();
        });
    }

    // Delete post
    $(".delete-post").on("click", function () {
        $.get("/api/post/delete/" + $(this).attr("data-id")).then(function () {
            window.location.reload();
        });
    });
});