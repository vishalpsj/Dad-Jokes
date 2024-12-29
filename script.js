let btn = document.getElementById('btn')
let jokeBox = document.querySelector('.jokeBox')
let jokeURL = "https://icanhazdadjoke.com/"


async function fetchData() {
    const res = await fetch(jokeURL, {
        headers : {
            Accept : "application/json"
        }
    })
    const data = await res.json()
    jokeBox.textContent = `${data.joke}`
}

fetchData()

btn.addEventListener('click', fetchData)