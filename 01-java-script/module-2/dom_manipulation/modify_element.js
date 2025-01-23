const message = document.getElementById("message");
message.textContent = "new message"; // changes text

const message2 = document.getElementById("message2");

message2.innerHTML = "<b> New Message<b/>";

message.style.color = "blue";
message2.style.color = "red";
