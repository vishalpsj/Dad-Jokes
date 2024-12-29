let btn = document.getElementById('btn')
let jokeBox = document.querySelector('.jokeBox')
let jokeURL = "https://icanhazdadjoke.com/"



const fetchData = () => {
    fetch(jokeURL, {
        headers: {
            Accept: "application/json"
        }
    })
        .then((res) => {
            // console.log(res);
            return res.json();
        })
        .then((data) => {
            // console.log(data.joke);
            jokeBox.textContent = `${data.joke}`

        })
        .catch((error) => {
            console.log(error);

        })
}

fetchData()

btn.addEventListener('click', fetchData)