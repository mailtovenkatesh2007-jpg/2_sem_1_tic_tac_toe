let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset-btn");
let new_btn=document.querySelector("#new-btn");
let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=0;
let count=0;
const winning=[
    [0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0===0){
box.innerText="O";
box.style.color="red";
turn0=1;
        }else{
            box.innerText="X";
            box.style.color="blue";
            turn0=0;
        }
        box.disabled=true;
        count++;
        let iswinner=checkwinner();
if(count===9 && !iswinner){
    gamedraw();
}
    });
});
const checkwinner=()=>{
for(let val of winning){
    let pos1=boxes[val[0]].innerText;
    let pos2=boxes[val[1]].innerText;
    let pos3=boxes[val[2]].innerText;

if(pos1!="" && pos2!="" && pos3!=""){
    if(pos1===pos2 && pos2===pos3 && pos3===pos1){
        console.log("winner",pos1);
        showwinner(pos1);
        return true;
    }
}
}};
const showwinner=(winner)=>{
msg.innerText=`Congratulations,winner is ${winner}`;
msg_container.classList.remove("hide");
box_disable();
};
const box_disable=()=>{
for(let box of boxes){
    box.disabled=true;
}
};
const box_enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const reset_game=()=>{
turn0=0;
box_enable();
msg_container.classList.add("hide");
count=0;
};
const gamedraw=()=>{
    msg.innerText=`Game is draw`;
    msg_container.classList.remove("hide");
    box_disable();
};
reset_btn.addEventListener("click",reset_game);
new_btn.addEventListener("click",reset_game);
