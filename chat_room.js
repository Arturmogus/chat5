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

  user_name = localStorage.getItem("user_name");

  addRoom();
   {
room_name = document.getElementById("value");
localStorage.setItem("user_name", value);
firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});
window.location = "kwitter_page.html"
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
<div id="room_names"></div>


  });});}
  getData()

  redirectToRoomName(); 
  {
    localStorage.setItem("room_name", room_name)
    window.location = "kwitter_page.html"
  }

  logout(); 
  {
window.location = "index.html"
  }