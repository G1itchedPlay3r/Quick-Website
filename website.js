function DoSomething(){
    document.getElementById("Text1").innerHTML = "Goodbye";
}

var password=document.getElementById("passwordGen");
function Password(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
       }

    document.getElementById("PasswordGen").innerHTML = password;
}