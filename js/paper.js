// click on rules to view rules
rules = document.querySelector(".game .rules")

inst = document.querySelector(".game .inst")

clos = document.querySelector(".game .inst .clos")
 
rules.addEventListener("click",(e)=>{
    // add the overlay
    overlay = document.createElement("div")

    overlay.className = "overlay"

    document.body.appendChild(overlay)

    // add the instructions
    inst.classList.remove("hide")

})

// click on the x icon to close the rules pop up

clos.addEventListener("click",(e)=>{
    // remove the overlay
    overlay.remove()

    // remove the instructions
    inst.classList.add("hide")
})

// select which paper you wanna play
shapes = document.querySelectorAll(".game .shapes img")

chooseShape = document.querySelector(".game .shapes")

whoWillWin = document.querySelector(".game .picked")

playAgain = document.querySelector(".game .playAgain")

clickedImg = document.querySelector(".game .clickedImg")

houseImg = document.querySelector(".game .houseImg")

score = document.querySelector(".game .num")

won = document.querySelector(".game .won")

if (window.localStorage.getItem("score") !== 0) {
     counter = window.localStorage.getItem("score")
}else {
     counter = 0;

}
console.log(score)
shapes.forEach((e)=>{
    e.addEventListener("click",(e)=>{
        window.localStorage.setItem("img",e.currentTarget.dataset.img )

        chooseShape.classList.add("hide")

        whoWillWin.classList.remove("hide")

        clickedImg.src = window.localStorage.getItem("img")
        forStarter ()
        // a random image for the house 
        imgsArray = [1,"images/icon-lizard.svg","images/icon-spock.svg","images/icon-scissors.svg","images/icon-paper.svg","images/icon-rock.svg"]
        
        x = (Math.floor(Math.random()*5)+1)

        let wait = function () {

        houseImg.src = imgsArray[x]

        // compare between my play and the house to decide who had won
        if(window.localStorage.getItem("img") === "images/icon-scissors.svg" && imgsArray[x] === "images/icon-paper.svg"){
            ifWon ()
        }else if (window.localStorage.getItem("img") === "images/icon-paper.svg" && imgsArray[x] === "images/icon-rock.svg"){
            ifWon ()
        }else if (window.localStorage.getItem("img") === "images/icon-rock.svg" && imgsArray[x] === "images/icon-lizard.svg"){
            ifWon ()
        }else if (window.localStorage.getItem("img") === "images/icon-lizard.svg" && imgsArray[x] === "images/icon-spock.svg"){
            ifWon ()
        }else if (window.localStorage.getItem("img") === "images/icon-spock.svg" && imgsArray[x] === "images/icon-scissors.svg"){
            ifWon ()
        }else if (window.localStorage.getItem("img") === "images/icon-scissors.svg" && imgsArray[x] === "images/icon-lizard.svg"){
            ifWon ()
        }else if (window.localStorage.getItem("img") === "images/icon-paper.svg" && imgsArray[x] === "images/icon-spock.svg"){
            ifWon ()
        }else if (window.localStorage.getItem("img") === "images/icon-rock.svg" && imgsArray[x] === "images/icon-scissors.svg"){
            ifWon ()
        }else if (window.localStorage.getItem("img") === "images/icon-lizard.svg" && imgsArray[x] === "images/icon-paper.svg"){
            ifWon ()
        }else if (window.localStorage.getItem("img") === "images/icon-spock.svg" && imgsArray[x] === "images/icon-rock.svg"){
            ifWon ()

        }else if (window.localStorage.getItem("img") ===  imgsArray[x]){
            score.innerHTML = counter

            won.innerHTML = "Draw"
            
    playAgain.innerHTML = "Play Again"


        }else {
            --counter

            score.innerHTML = counter

            won.innerHTML = "you Lost"

            houseImg.classList.add("youWon")
            
            playAgain.innerHTML = "Play Again"

}
window.localStorage.setItem("score",score.innerHTML)
    }

    setTimeout (wait,500) 

// store my score in the local storage 
    })
})
// click on play again to play again (i guess it is obvious )
playAgain.addEventListener("click",(e)=>{
        chooseShape.classList.remove("hide")

        whoWillWin.classList.add("hide")

    })

    // on restart keep my score
if (window.localStorage.getItem("score") !== 0) {

    score.innerHTML = window.localStorage.getItem("score")

}

// functions 

let ifWon = function () {
    ++counter

    score.innerHTML = counter

    won.innerHTML = "you won"

    clickedImg.classList.add("youWon")

    playAgain.innerHTML = "Play Again"

}
forStarter = function () {

    // remove the youWon class at the beginning
    clickedImg.classList.remove("youWon")

    houseImg.classList.remove("youWon")

    won.innerHTML = ""

    playAgain.innerHTML = ""

    houseImg.src = ""
}