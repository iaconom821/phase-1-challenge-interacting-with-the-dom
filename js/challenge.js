let counter = document.querySelector("#counter")
let pause = document.querySelector("#pause")
let plus = document.querySelector("#plus")
let minus = document.querySelector("#minus")
let heart = document.querySelector("#heart")
let likes = document.querySelector(".likes")
let submitComment = document.querySelector('#comment-form');
;

let on = true
let newCount = 0
let initial = 0

function startTimer() {
    return setInterval(function () {
        addOneToCounter();
    }, 1000)
}

function addOneToCounter () {
    newCount += 1;
    counter.innerText = `${newCount}`;
}

function subtractOneFromCounter() {
    newCount -=1;
    counter.innerText =`${newCount}`
}

document.addEventListener("DOMContentLoaded", function () {
    let interval = startTimer()
    pause.addEventListener("click", function() {
        if (on) {
            on = false
            pause.innerText = "resume"
            clearInterval(interval)
        } else {
            on = true
            pause.innerText = "pause"
            interval = startTimer()
        }
    })

    plus.addEventListener("click", function() {
        addOneToCounter();
    })

    minus.addEventListener("click", function() {
        subtractOneFromCounter();
    })
    let likedObj = {}
    
    heart.addEventListener("click", function() {
        if(newCount in likedObj){
            likedObj[newCount].timesLiked += 1
            let classToReplace = likes.querySelector(`.num-${newCount}`)
            let newElement = document.createElement("li")
            newElement.className = `num-${newCount}`
            newElement.innerText = `${newCount} was liked ${likedObj[newCount].timesLiked} times`
            likes.replaceChild(newElement, classToReplace)
        } else {
            likedObj[newCount] = {
                timesLiked: 1,
            };
            let newElement = document.createElement("li");
            newElement.innerText = `${newCount} was liked ${likedObj[newCount].timesLiked} time`
            newElement.className = `num-${newCount}`
            likes.append(newElement)
        }
    })
})


submitComment.addEventListener("submit", function (e) {
    e.preventDefault()
    let commentPrints = document.querySelector('.comments')
    let comment = document.querySelector("input")
    let newComment = document.createElement("p");
    newComment.innerText = comment.value;
    commentPrints.appendChild(newComment)
})


