let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset-btn")
let newgamebtn=document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");
let turnO=true

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO){
            //player1
            box.innerText="O";
            turnO=false
        }else{
            //player2
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    })
} )
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}
const showwinner=(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const checkwinner= () =>{
    for(let pattern of winpatterns){
let pos1val=boxes[pattern[0]].innerText;
let pos2val=boxes[pattern[1]].innerText;
let pos3val=boxes[pattern[2]].innerText;
        
if(pos1val!=="" &&pos2val!==""&&pos3val!=""){
    if(pos1val==pos2val&&pos2val==pos3val){
        console.log("winner",pos1val)
        
        showwinner(pos1val)
        disable();
    }
}
    }

}
const resetGame=() =>{
    turnO=true;
    enable();
    msgContainer.classList.add("hide");
}
newgamebtn.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)
