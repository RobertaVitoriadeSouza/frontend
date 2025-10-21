const Button = document.querySelector("button")
button.onclick = (event) => {
    event.preventDefault()
    signUpUser()
}

function signUpUser() {
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    const user = {
         name, 
         email,
         password
    }

    const response = fetch("http://localhost:3333/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({user})
    })
    .then(response => response.json())
    alert(response.message)

   
}
