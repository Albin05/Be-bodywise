document.querySelector("form").addEventListener("submit", next);
    var user = JSON.parse(localStorage.getItem("database")) || [];
    function next(event){
        event.preventDefault();
        var first = document.querySelector("#first").value;
        var last = document.querySelector("#last").value;
        var email= document.querySelector("#email").value;

        var data = {
            firstName: first,
            lastName: last,
            emailID: email,
        };

        user.push(data);

        localStorage.setItem("database",JSON.stringify(user));
        window.location.href = "index.html";
    }