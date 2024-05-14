var attempt = 0; 
    function log_out(){
         window.location.href = "logInPage.html";
    }

    function LogIn(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (username == "daniellausa1995@gmail.com" && password == "akosidaniellausa"){
            window.location.href = "homepage.html";
            return true;
        } else {
            attempt ++;
            if (attempt == 3) {
                alert("Cannot login. Attempts exceeded!");
                document.getElementById("btn_logIn").disabled = true;
                document.getElementById("username").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("username").value = null;
                document.getElementById("password").value = null;
                return false;
            } else {
                alert("Incorrect username or password.")
                return false;
            }
        }

        function restPass() {
        }
    }