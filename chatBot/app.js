function talk(){
  var know = {
    "Quem é você?": "Olá, eu sou o bot do Pedro 😜",
    "Como vai você?": "Vou bem, obrigado! 😃",
    "O que o Pedro gosta de fazer?": "Ah, ele gosta de tudo",
  };

  var user = document.getElementById("userBox").value;
  document.getElementById("chatLog").innerHTML = user + "<br>";

  if(user in know){
    document.getElementById("chatLog").innerHTML = know[user] + "<br>";
  }else{
    document.getElementById("chatLog").innerHTML = "Desculpe, Eu não entendi..."
  }
}