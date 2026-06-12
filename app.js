let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
const Winpattern=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]
];
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}
let turn0=true;
boxes.forEach((evt)=>{
    evt.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turn0)
        {
            evt.innerText="O";
            turn0=false;
        }
        else
        {
            evt.innerText="X";
            turn0=true;
        }
        evt.disabled=true;
        checkWinner();
    });
});
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
      msg.innerText=`Congratulations,Winner is ${winner}`;
      msgContainer.classList.remove("hide");
      disableBoxes();
}
const checkWinner =()=>{
    for(let pattern of Winpattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!="")
        {
            if(pos1Val==pos2Val && pos2Val==pos3Val)
               { console.log("winner",pos1Val);
                showWinner(pos1Val);}
        }
    }
}
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);