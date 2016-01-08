function getUserData(){
  if($("#user_id").val()>100 || $("#user_id").val()<1){
    alert("Invalid userid, userid should be between 1 and 100");
  }
  $.getJSON('http://jsonplaceholder.typicode.com/posts/'+$("#user_id").val(),function(data){
    $("#cellUserId").html(data.userId);
    $("#cellId").html(data.id);
    $("#cellTitle").html(data.title);
    $("#cellBody").html(data.body);
  })
}
s
