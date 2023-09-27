function submitForm() {
    var a = document.getElementById("firstName").value;
    var b = document.getElementById("lastName").value;
    var c = document.getElementById("inputEmail3").value;
    var d = document.getElementById("inputPassword3").value;
    var e = document.getElementById("confirmPassword").value;
    var f = document.querySelector('input[name="gender"]:checked');
    var g = document.getElementById("age").value;
    var h = document.getElementById("phoneNumber").value;
    var i = document.getElementById("address").value;
    var j = document.getElementById("state").value;
    var k = document.getElementById("country").value;
    var l = document.querySelectorAll('input[name="languages"]:checked');
    var m = document.getElementById("declaration");
    var pwdvalid=false;
    var con=false;
    if (a == "") {
        document.getElementById("firstName-error").innerText = "POOR";
        var element = document.getElementById("firstName");
        element.classList.add("border");
    } else {
        document.getElementById("firstName-error").innerText = "";
        var element = document.getElementById("firstName");
        element.classList.remove("border");
    }

    if (b == "") {
        document.getElementById("lastName-error").innerText = "POOR";
        var element = document.getElementById("lastName");
        element.classList.add("border");
    } else {
        document.getElementById("lastName-error").innerText = "";
        var element = document.getElementById("lastName");
        element.classList.remove("border");
    }

    if (c == "") {
        document.getElementById("inputEmail3-error").innerText = "POOR";
        var element = document.getElementById("inputEmail3");
        element.classList.add("border");
    } else {
        document.getElementById("inputEmail3-error").innerText = "";
        var element = document.getElementById("inputEmail3");
        element.classList.remove("border");
    }

    if (d == "") {
        document.getElementById("inputPassword3-error").innerText = "POOR";
        var element = document.getElementById("inputPassword3");
        element.classList.add("border");
    } else {
        document.getElementById("inputPassword3-error").innerText = "";
        var element = document.getElementById("inputPassword3");
        element.classList.remove("border");
    }

    if (e == "") {
        document.getElementById("confirmPassword-error").innerText = "POOR OR MISMATCH";
        var element = document.getElementById("confirmPassword");
        element.classList.add("border");
    } else {
        document.getElementById("confirmPassword-error").innerText = "";
        var element = document.getElementById("confirmPassword");
        element.classList.remove("border");
    }

    if (!f) {
        document.getElementById("gender-error").innerText = "Please select a gender";
    } else {
        document.getElementById("gender-error").innerText = "";
    }

    if (g == "") {
        document.getElementById("age-error").innerText = "POOR";
        var element = document.getElementById("age");
        element.classList.add("border");
    } else {
        document.getElementById("age-error").innerText = "";
        var element = document.getElementById("age");
        element.classList.remove("border");
    }

    if (h == "") {
        document.getElementById("phoneNumber-error").innerText = "POOR";
        var element = document.getElementById("phoneNumber");
        element.classList.add("border");
    } else {
        document.getElementById("phoneNumber-error").innerText = "";
        var element = document.getElementById("phoneNumber");
        element.classList.remove("border");
    }
    if (i == "") {
        document.getElementById("address-error").innerText = "POOR";
        var element = document.getElementById("address");
        element.classList.add("border");
    } else {
        document.getElementById("address-error").innerText = "";
        var element = document.getElementById("address");
        element.classList.remove("border");
    }
    
    if (j == "") {
        document.getElementById("state-error").innerText = "POOR";
        var element = document.getElementById("state");
        element.classList.add("border");
    } else {
        document.getElementById("state-error").innerText = "";
        var element = document.getElementById("state");
        element.classList.remove("border");
    }
    if (d !== e) {
        document.getElementById("inputPassword3-error").innerText = "Passwords do not match";
        document.getElementById("confirmPassword-error").innerText = "Passwords do not match";
        var element1 = document.getElementById("inputPassword3");
        element1.classList.add("border");
        var element2 = document.getElementById("confirmPassword");
        element2.classList.add("border");
        pwdvalid=false;
    } else {
        document.getElementById("inputPassword3-error").innerText = "";
        document.getElementById("confirmPassword-error").innerText = "";
        var element1 = document.getElementById("inputPassword3");
        element1.classList.remove("border");
        var element2 = document.getElementById("confirmPassword");
        element2.classList.remove("border");
        pwdvalid=true;
    }
    
    if (k == "Choose your country") {
        document.getElementById("country-error").innerText = "Please select your country";
        con=false;
    } else {
        document.getElementById("country-error").innerText = "";
        con=true;
    }

    if (a != "" && b != "" && c != "" && d != "" && e != "" && f && g != "" && h != "" && pwdvalid && i!="" && j!="" && con) {
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("inputEmail3").value = "";
        document.getElementById("inputPassword3").value = "";
        document.getElementById("confirmPassword").value = "";
        if (f.id === "male") {
            document.getElementById("male").checked = true;
        } else if (f.id === "female") {
            document.getElementById("female").checked = true;
        }
        document.getElementById("age").value = "";
        document.getElementById("phoneNumber").value = "";
        document.getElementById("address").value = "";
        document.getElementById("state").value = "";
        document.getElementById("country").value = "Choose your country";
        l.forEach(function (checkbox) {
            checkbox.checked = false;
        });
        m.checked = false;
        document.getElementById("success").innerText = "Your Form Has been submitted successfully";
        setTimeout(() => {
            document.getElementById("success").innerText = "";
        }, 1000);
    }
}