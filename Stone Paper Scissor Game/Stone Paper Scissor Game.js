let USS=0;
let CPS=0;
const choices=document.querySelectorAll(".choice");
const scores = document.querySelectorAll(".score")
const getComChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const ScoreBoard =(res) =>{
    const UserSC = document.querySelector("#user-score");
    const CompSC = document.querySelector("#comp-score");
    
    if(res==="User Win"){
            USS++
            UserSC.innerText = USS;
        }
    else if(res==="Computer Win")
        {  CPS++;
            CompSC.innerText = CPS;
        }
        

}
const playGame = (userChoice) => {
    let res=null;
    console.log("user choice = ",userChoice);
    const compChoice = getComChoice();
    console.log("computer choice = ",compChoice);
    if(userChoice===compChoice){
        res="Game Draw ! Play again..."
        ScoreBoard(res);
        resultOfGame(res);
    }
    else if(userChoice==="rock" && compChoice==="paper"){
        res="Computer Win"
        ScoreBoard(res);
        resultOfGame(res);
    }
    else if(userChoice==="rock" && compChoice==="scissor"){
        res="User Win"
        ScoreBoard(res);
        resultOfGame(res);
    }
    else if(userChoice==="paper" && compChoice==="rock"){
        res="User Win"
        ScoreBoard(res);
        resultOfGame(res);
    }
    else if(userChoice==="paper" && compChoice==="scissor"){
        res="Computer Win"
        ScoreBoard(res);
        resultOfGame(res);
    }
    else if(userChoice==="scissor" && compChoice==="paper"){
        res="User Win"
        ScoreBoard(res);
        resultOfGame(res);
    }
    else if(userChoice==="scissor" && compChoice==="rock"){
        res="Computer Win"
        ScoreBoard(res);
        resultOfGame(res);
    }
    else{
        resultOfGame("Something Error...");
    }

}
choices.forEach((choice) => {
    choice.addEventListener('click',() => {
        let userChoice = choice.getAttribute("id");
        const options = ["rock","paper","scissor"];

        if(userChoice==='rock'){
            
            playGame(options[0]);
        }
        else if(userChoice==='paper'){
            
            playGame(options[1]);
        }
        
        else{
    
;            playGame(options[2]);
        }

    });
});
const resultOfGame = (res) =>
{
    const result = document.querySelector("#msg");
    if(res==="User Win"){
        result.innerText="You Win ! Computer Lost";

        result.style.background="GREEN";
    }
else if(res==="Computer Win")
    {      result.innerText="You lost !"+res;

        result.style.background="RED";
        
    }
    else{     result.innerText=res;

        result.style.background="turquoise";    }
}