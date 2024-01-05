
function login(username, password) {
    let result = ""
    if (!username || !password) {
        result = "Username or password is empty"
    } else {
        let userValid = users.find((user) => user.username === username)
        if (!userValid || userValid.password !== password) {
            result = "Username or password not match"

        }
        else if (userValid.status === "active") {
            result = "Log in successfully"
        }
        else {
            result = "Log in failed"
        }
    }
    alert(result)
}

let users = [{
    username: "Quang Huy",
    password: "1234",
    status: "active"
},
{
    username: "NMinh",
    password: "1234",
    status: "active"
},
{
    username: "Quang Hung",
    password: "1234",
    status: "active"
}]




const inputuser = document.getElementById("inputUsername");
const inputpassword = document.getElementById("inputPassword");

login(inputuser,inputpassword)
console.log()