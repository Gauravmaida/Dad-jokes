const jokeElement = document.getElementById("joke");
const jokebutton = document.querySelector(".bt");

jokebutton.addEventListener("click", () => {

    gentratejoke();

    async function gentratejoke() {
        const config = {

            headers: {
                Accept: "application/json"
            }

        }
        const result = await fetch("https://icanhazdadjoke.com/", config)

        const data = await result.json()

        jokeElement.innerHTML = data.joke
    }

})
