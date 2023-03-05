const database = [{username: "admin", password: "1234"}]

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    for (item of database) {
        if (item.username === username && item.password === password) {
            alert("logged in")
            return;
        }
    }
}

function signUp() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    database.push({username: username, password: password})
    alert("Signed Up")
}


document.querySelector('.exit')?.addEventListener('click', (event) =>{
    window.location.href = '../../home.html#Projects';
})
