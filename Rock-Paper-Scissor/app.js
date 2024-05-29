let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const idx=Math.floor(Math.random()*3);
    return options[idx]; 

}
const showWinner = (userwin)=>{
    if(userwin){
        console.log("win"); 
    }
    else{
        console.log("lose");
    }
}
const drawGame =() =>{
    console.log("game was draw");
}  

const playGame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    const compchoice=genCompChoice();
    console.log("comp choice = ",compchoice);

    if(userchoice==compchoice){
         drawGame();
    }
    else{
        let userwin=true;
        if(userchoice=="rock"){
             userwin=compchoice=="paper"?false:true;
        }
        else if(userchoice=="paper"){
            userwin=compchoice=="scissors"?false:true;
        }
        else{
            userwin=compchoice=="rock"?false:true; 
        }
    }
    showWinner(userwin);

}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});
