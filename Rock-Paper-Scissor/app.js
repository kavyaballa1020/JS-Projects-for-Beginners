let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const showWinner = (userwin) => {
    if (userwin) {
        console.log("win");
        msg.innerText="you Win";
        msg.innerText=`You Lose! ${userchoice} beats the ${compchoice}`;
        msg.style.backgroundColor="green";


    } else {
        console.log("lose");
        msg.innerText=`You Lose! ${compchoice} beats the ${userchoice}`;

    }
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText="Game was Draw. Play Again";

}

const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);
    const compchoice = genCompChoice();
    console.log("comp choice = ", compchoice);

    if (userchoice === compchoice) {
        drawGame();
    } else {
        let userwin;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});
