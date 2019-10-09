// create post
// When the create button is clicked,grab the input val
$(document).ready(function () {
    console.log("POST FILE READY!")
    $(".Category").on("click", function () {
        var CategoryID = $(this).attr("id");
        $("submitPost").val(CategoryID);
    });
    $("#submitPost").on("click", function (e) {
        e.preventDefault()
        var titleInput = $("#titleInput");
        console.log(titleInput)
        var bodyInput = $("#postBody");
        console.log(bodyInput)
        var CategoryID = $("#Category-post");
        console.log(CategoryID)
        var username = $("#username");
        console.log(username)


        var postData = {
            title: titleInput.val().trim(),
            body: bodyInput.val().trim(),
            username: username.val().trim(),
            CategoryID: CategoryID.val()
        };

        console.log(postData);
        $("#createpost").val("");
        createPost(postData);
        //empty the fields
        titleInput.val("");
        bodyInput.val("");
    });

    // Does a post to the create route. If successful, we are redirected to the main page
    function createPost(postData) {
        $.post("/api/create", {
            title: postData.title,
            body: postData.body,
            CategoryId: postData.CategoryID,
            UserId: postData.username
        })
    }


});