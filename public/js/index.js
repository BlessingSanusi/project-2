$('#CreateBtn').on('click', function (e) {
  e.preventDefault();
  var today = new Date;
  var newUser = {
    username: $("#createUsername").val().trim(),
    password: $("#createPassword").val().trim(),
    joinDate: today.getUTCDate()
  };

  console.log(newUser);
  $("#createUsername").val('')
  $("#createPassword").val('')

  if ((newUser.username) && (newUser.password)) {
    $.post("/api/signup", newUser).then(function () {
      console.log(newUser);
    });
  }
})








$("#loginSubmit").on("click", function (event) {
  event.preventDefault();
  var today = new Date;
  var userCheck = {
    username: $("#userLogin").val().trim(),
    password: $("#userPassword").val().trim(),
    joinDate: today.getUTCDate()
  };
  if ((userCheck.username) && (userCheck.password)) {
    $.post("/api/signin", userCheck).then(function () {
      console.log(userCheck);
    });
  }

})