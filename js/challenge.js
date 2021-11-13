const counter = document.querySelector("#counter")
const minusButton = document.querySelector("#minus")
const plusButton = document.querySelector("#plus")
const likeButton = document.querySelector("#heart")
const pauseButton = document.querySelector("#pause")
const likeList = document.querySelector(".likes")
const form = document.querySelector("#comment-form")
const commentInput = document.querySelector("#comment-input")
const commentsList = document.querySelector("#list")
const submitButton = document.querySelector("#submit")
const likes = {};

let timer = setInterval(incrementCount, 1000)

plusButton.addEventListener("click", incrementCount)
minusButton.addEventListener("click", decrementCount)
pauseButton.addEventListener("click", toggleCount)
likeButton.addEventListener("click", increaseLike)
form.addEventListener("submit", submitComment)

function incrementCount() {
  let counterValue = parseInt(counter.innerText);
  counterValue++;
  counter.innerText = counterValue;
}

function decrementCount() {
  let counterValue = parseInt(counter.innerText);
  counterValue--;
  counter.innerText = counterValue;
}

function toggleCount(event) {
  if (event.target.innerText === "pause") {
    clearInterval(timer);
    event.target.innerText = "resume";
  } else {
    timer = setInterval(incrementCount, 1000);
    event.target.innerText = "pause";
  }
}

function increaseLike() {
  const key = counter.innerText;

  if (likes[key]) likes[key]++;
  else likes[key] = 1;

  for (const key in likes) {
    let currentItem = document.querySelector(`#_${key}`);
    if (currentItem) {
      currentItem.innerText = `${key} has been liked ${likes[key]} times`;
    } else {
      currentItem = document.createElement("li");
      currentItem.id = `_${key}`;

      currentItem.innerText = `${key} has been liked ${likes[key]} times`;
      likeList.append(currentItem);
    }
  }
}

function submitComment(event) {
    event.preventDefault()
    const newComment = document.createElement("p")
    newComment.innerHTML = `${commentInput.value}`
    commentsList.append(newComment)
}