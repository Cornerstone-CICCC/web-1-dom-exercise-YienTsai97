// YOUR CODE HERE
const button1 = document.querySelector("#btn1")
const output1 = document.querySelector("#output1")
button1.addEventListener("click",() => {
    output1.style.color = "red"
})

const button2 = document.querySelector("#btn2")
const output2 = document.querySelector("#output2")
const spanP  =  document.createElement("p")
spanP.textContent = "Hello Word"
button2.addEventListener("click",() => {
    output2.append(spanP)
})

const button3 = document.querySelector("#btn3")
const paragraph3 = document.querySelector("#output3 p")
button3.addEventListener("click",() => {
    paragraph3.classList.remove("small-text")
})


const button4 = document.querySelector("#btn4")
const output4 = document.querySelectorAll("#output4 p")
button4.addEventListener("click",() => {
    output4.forEach(p => p.style.color = "red")
})

const button5 = document.querySelector("#btn5")
const input = document.querySelector("input")
button5.addEventListener("click",() => {
    console.log(input.value)
})



