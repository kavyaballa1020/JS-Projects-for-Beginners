let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        console.log("choice was clicked");
    });
});
