var firebaseConfig = {
    apiKey: "AIzaSyBuOeRmugBcG_UmYXwlZX9qF_VtZiEbwc4",
    authDomain: "project93-96.firebaseapp.com",
    projectId: "project93-96",
    storageBucket: "project93-96.appspot.com",
    messagingSenderId: "113388541146",
    appId: "1:113388541146:web:706b9fa1216adc51e501e3",
    measurementId: "G-YB21813RDY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like:0
    });
    document.getElementById("msg").value="";
}
    

function logOut()
{

    window.location="index.html";

}
