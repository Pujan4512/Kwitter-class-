const firebaseConfig = {
      apiKey: "AIzaSyCTgTNm3FvBrc2p69bkwKbf2XooXm0PQU4",
      authDomain: "kwitter-c386c.firebaseapp.com",
      projectId: "kwitter-c386c",
      storageBucket: "kwitter-c386c.appspot.com",
      messagingSenderId: "893082177753",
      appId: "1:893082177753:web:8ee41de86a64c14f742ec8"
};

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
          name = message_data['name'];
          message = message_data['message'];
          like = message_data['like'];
          name_with_tag = "<h4> " + name + "<img class='message_h4' src='tick.png'></h4>";
          message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
          like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
          span_with_tag = "<span class='glypicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
          row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}