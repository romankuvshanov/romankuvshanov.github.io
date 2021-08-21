var names = ["Mark Waugh", "Peter Sia", "Sokina Jue", "Liza Franta"];
var members = document.getElementsByClassName("member");
var currentMemberImg = document.getElementById("img-of-current-member");
var currentMemberName = document.getElementById("current-member-name");

for (var i = 0; i < members.length; i++) {
    members[i].onclick = memberOnCickHandler;
}

function memberOnCickHandler(eventObj) {
    currentMemberImg.src = eventObj.target.src;
    currentMemberName.innerHTML = getName(eventObj.target);
    
}

function getName(member) {
    var position = member.src.replace(/\D+/g, "");
    position = position[position.length-1] - 1;
    return names[position];
}