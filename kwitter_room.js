const firebaseConfig = {
      apiKey: "AIzaSyCTgTNm3FvBrc2p69bkwKbf2XooXm0PQU4",
      authDomain: "kwitter-c386c.firebaseapp.com",
      databaseURL: "https://kwitter-c386c-default-rtdb.firebaseio.com",
      projectId: "kwitter-c386c",
      storageBucket: "kwitter-c386c.appspot.com",
      messagingSenderId: "893082177753",
      appId: "1:893082177753:web:8ee41de86a64c14f742ec8"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function updateLike(message_id){
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}


user_name = localStorage.getItem("user_name");
      
document.getElementById("user_name").innerHTML =  "Welcome " + user_name + " !";

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}