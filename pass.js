var password=document.getElementById("password");
function generate(){
    var chars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passlength=8;
    var password=" ";
    for(var i=0;i<=passlength;i++){
        var randnum=Math.floor(Math.random()*chars.length);
        password+=chars.substring(randnum,randnum+1);
    }
    document.getElementById("password").value=password;
}

function clear(){
    // var pass1=document.getElementById("password");
    // value=" ";
    password.value=" ";
}