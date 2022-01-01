function otentikasi(){
    let login = document.getElementById("login");
    let username = login.username.value;
    let password = login.password.value;

    if(username == "rian2021" && password == "rian2021"){
        location.href = "loginsukses.html";
        alert("Login Sukses");
        return false;
    }else{
        alert("Login Gagal")
    }
}