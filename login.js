function getLoginVerify() {

    var email = document.getElementById("email").value
    var pass = document.getElementById("password").value

    var jsonobj = {}
    jsonobj["uid"] = email
    jsonobj["pass"] = pass

    $.ajax({
        "url": "/user/login",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(jsonobj),
    }).done(function (data) {

        localStorage.setItem('data', JSON.stringify(data))

        var status = data.status
        var rettoken = data.accessToken
        var retuserid = data.userid

        if (status == 403) {
            document.getElementById("welcometext").innerHTML = "INCORRECT ID OR PASSWORD"
        } else {
            document.getElementById("welcometext").innerHTML = "LOGIN SUCCESS"
            sessionStorage.setItem("authToken", rettoken);
            sessionStorage.setItem("id", retuserid);
            sessionStorage.setItem("email", email);
            window.self.location.href = '/starter.html?page=index_6'
        }
    });
}