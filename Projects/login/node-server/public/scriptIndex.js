
    async function getData(name, pw) {
        const response = await fetch('/api');
        const data = await response.json();

        for (item of data) {
            if (name == item.username) {
                if (pw == item.password) {
                    let popup=document.getElementById("popup")
                    popup.style.display="flex";
                    popup.textContent= "Logged In"
                        setTimeout(() => {
                            popup.style.display="none";
                        }, 1000);
                }
            }
        }
    }

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    getData(username, password);
}

function signUp() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    fetch('/api', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        username: username,
        password: password
        })
    });

    let popup=document.getElementById("popup")
    popup.style.display="flex";
    popup.textContent= "Singed UP"

}

document.querySelector('.popup')?.addEventListener('click', (event) =>{
    let popup=document.getElementById("popup")
    popup.style.display="none";
})
