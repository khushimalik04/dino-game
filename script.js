const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
function jump() {
    if (dino.classList != "jump") {
         //this checks if the JUMP class is not already applied to the dino
        dino.classList.add("jump");
        setTimeout(function() {
            dino.classList.remove("jump");
        //removes the jump class from the dino once it has jumped so that it can jump again
        },300)
    }
}

let CheckAlive = setInterval(function() {
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top") //distance from top of screen
    );
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left") //distance from left of screen
    );
    //check for collision
    if(cactusLeft > 0 && cactusLeft < 70 && dinoTop >= 143) {
        dino.style.animationPlayState = "paused";
        cactus.style.animationPlayState = "paused";
        alert("whoops! Game Over :(");
        window.location.reload();
    }
}, 10);
document.addEventListener("keydown", function (event) {
    jump();
});
