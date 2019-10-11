$("#loginSubmit").on("click", function(event){

  event.preventDefault();
  var userCheck = {
      username : $("#userLogin").val().trim(),
      password : $("#userPassword").val().trim(),
  };
if((userCheck.username) && (userCheck.password)){
  $.post("/api/signin", userCheck).then(function() {
      console.log(userCheck);
  });
  }
  
});

$("#createBtn").on("click", function(event){
  event.preventDefault();
  var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  var newU = {
    username: $("#userSignup").val().trim(),
    password: $("#passSignup").val().trim(),
    joinDate: utc,
  };
  if((newU.username) && (newU.password)){
    $.post("/api/signup", newU).then(function(){
     console.log(newU);
    });
  }
});
