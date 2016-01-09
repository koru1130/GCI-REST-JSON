function getUserData(){
  if($("#user_id").val()>100 || $("#user_id").val()<1){
    $("#errorText").html("Invalid userid, userid should be between 1 and 100");
  }else {
      $("#errorText").html("");
      $("#btnQuery").html("Loading...");
      $("#btnQuery").prop('disabled', true);
    $.getJSON('http://jsonplaceholder.typicode.com/posts/'+$("#user_id").val(),function(data){
      $("#btnQuery").html("Query");
      $("#btnQuery").prop('disabled', false);
      $("#cellUserId").html(data.userId);
      $("#cellId").html(data.id);
      $("#cellTitle").html(data.title);
      $("#cellBody").html(data.body);
    });
  }
}
