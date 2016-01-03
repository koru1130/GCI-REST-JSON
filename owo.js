function getUserData(){
  $.getJSON('http://jsonplaceholder.typicode.com/posts/'+$("#user_id").val(),function(data){
    $("#cellUserId").html(data.userId);
    $("#cellId").html(data.id);
    $("#cellTitle").html(data.title);
    $("#cellBody").html(data.body);
  })
}
