function submit(){
    var input = document.querySelector("#input").value;

    if(input===""){
        document.getElementById("res").textContent="Please Enter Mobile Number";
    }else if(input.length>10 || input.length<10){
        document.getElementById("res").textContent="Please Enter Valid Number";
    }else{
        window.location.href="otp.html"
    }
}