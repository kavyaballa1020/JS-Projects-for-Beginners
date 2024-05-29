let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const idx=Math.floor(Math.random()*3);
    
}

const playGame=(userchoice)=>{
    console.log("user choice = ",userchoice);

}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
        console.log(`choice was clicked ${userchoice}`);
        playGame(userchoice);
    });
});
