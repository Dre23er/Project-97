var firebaseConfig = {
      apiKey: "AIzaSyBE0GsROZ8rDuL2EK3WnPGOKhSsXoT3NYY",
      authDomain: "kwitter-f2c48.firebaseapp.com",
      databaseURL: "https://kwitter-f2c48-default-rtdb.firebaseio.com",
      projectId: "kwitter-f2c48",
      storageBucket: "kwitter-f2c48.appspot.com",
      messagingSenderId: "465733403617",
      appId: "1:465733403617:web:8247d8c0019bd4e860c8a0",
      measurementId: "G-RDRGPFNP3R"
    };
    
   
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !"; 

function addRoom(){
      room_name =  document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name "
      });
      localStorage.setItem("room_name", room_name); 
      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
  
      });
});
}
getData();qq``

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}

