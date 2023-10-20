var firebaseConfig = {
    apiKey: "AIzaSyB2eXdUQT7S66lIDcoZ1OHiqHBuqrppCWc",
    authDomain: "project-101-7215c.firebaseapp.com",
    projectId: "project-101-7215c",
    storageBucket: "project-101-7215c.appspot.com",
    messagingSenderId: "221873454010",
    appId: "1:221873454010:web:74d30a376d5544ce87fb83"
  };
  
  // Initialize Firebase
  
// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



