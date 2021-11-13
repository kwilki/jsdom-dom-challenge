const counter = document.querySelector("#counter")
const minusButton = document.querySelector("#minus")
const plusButton = document.querySelector("#plus")
const likeButton = document.querySelector("#heart")
const pauseButton = document.querySelector("#pause")
const likeList = document.querySelector(".likes")
const form = document.querySelector("#comment-form")
const commentInput = document.querySelector("#comment-input")
const commentsList = document.querySelector("#list")
const likes = {

}
let timer = setInterval(incrementCount, 1000)
plusButton.addEventListener("click", incrementCount)
minusButton.addEventListener("click", decrementCount)
pauseButton.addEventListener("click", toggleCount)

function incrementCount() {
    let counterValue = parseInt(counter.innerText)
    counterValue++
    counter.innerText = counterValue
}

function decrementCount() {
    let counterValue = parseInt(counter.innerText)
    counterValue--
    counter.innerText = counterValue
}

function toggleCount(event) {
    if(event.target.innertext === "pause") {
        clearInterval(timer)
        event.target.innerText = "resume"
    } else {
        timer = setInterval(incrementCount, 1000)
        event.target.innerText = "pause"
    }
}