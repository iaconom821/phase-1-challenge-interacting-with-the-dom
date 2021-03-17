document.addEventListener("DOMContentLoaded", function () {
    let counter = document.querySelector("#counter")
    let newCount = 0
    setInterval(function () {
        newCount += 1;
        counter.innerHTML = `${newCount}`
        document.addEventListener("click", function() {
            let pause = document.querySelector("#pause")
            
        })
    }, 1000)
})

