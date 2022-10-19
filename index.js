function block(){
    var fullname = document.getElementById("fullname");
    var email = document.getElementById("email");
    var output = document.getElementById("output");
    var out = document.getElementById("out");
    output.innerHTML="please enter your name" + fullname.value;
    out.innerHTML="please enter your email" + email.value;
}