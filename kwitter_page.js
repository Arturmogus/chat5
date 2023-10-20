var firebaseConfig = {
    apiKey: "AIzaSyDzVZvkmi04yRL6wWD6G1NUFYpuuupc-Ok",
    authDomain: "project101-8d868.firebaseapp.com",
    databaseURL: "https://project101-8d868-default-rtdb.firebaseio.com",
    projectId: "project101-8d868",
    storageBucket: "project101-8d868.appspot.com",
    messagingSenderId: "743891776032",
    appId: "1:743891776032:web:94150d59fba9f98d460245",
    measurementId: "G-KP826NRBTG"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
logout(); 
{
window.location = "index.html"
}

send(); {
message = document.getElementById("message")
document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
    });

    document.getElementById("msg").value = "";
 }

 function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot) {
  document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key; childData=childSnapshot.val(); if(childKey != "purpose"){
          firebase_message_id = childKey;
          message_data = childData;
  //Start code
  name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
        like_button ="<button class='btn btn-warning' id="+firebase_message_id+ " value="+like+ " onclick='updateLike()'>";
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

  
  function updateLike()
{

    button_id = message_id;
    likes = document.getElementById(button_id);
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like: updated_likes
    });
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html")
}
//End code
 } }); });}
 getData();

  Room_names = childKey;

user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")