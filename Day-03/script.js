    async function getUsers() {
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let users = await response.json()
        document.getElementById("output").innerText = users[0].name
    }

    getUsers()