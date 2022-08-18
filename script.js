var password = document.getElementById('password');
var confirm_password = document.getElementById('confirm_password');  

var check = function() {
    if (password.value === confirm_password.value) {
        password.style.border = "1px solid green";
        confirm_password.style.border = "1px solid green";
    } else {
        password.style.border = "1px solid red";
        confirm_password.style.border = "1px solid red";
    }

    if (password.value === "" && confirm_password.value === "") {
        password.style.border = "1px solid #E5E7EB";
        confirm_password.style.border = "1px solid #E5E7EB";
    }
}