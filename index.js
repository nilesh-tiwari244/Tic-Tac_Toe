let arr=["","","","","","","","","",];
let comp="";
let player="";
const bt1=document.getElementById("block-1");
const bt2=document.getElementById("block-2");
const bt3=document.getElementById("block-3");
const bt4=document.getElementById("block-4");
const bt5=document.getElementById("block-5");
const bt6=document.getElementById("block-6");
const bt7=document.getElementById("block-7");
const bt8=document.getElementById("block-8");
const bt9=document.getElementById("block-9");
const buttons=[bt1,bt2,bt3,bt4,bt5,bt6,bt7,bt8,bt9];
/*
const pa1=document.getElementById("para-1");
const pa2=document.getElementById("para-2");
const pa3=document.getElementById("para-3");
const pa4=document.getElementById("para-4");
const pa5=document.getElementById("para-5");
const pa6=document.getElementById("para-6");
const pa7=document.getElementById("para-7");
const pa8=document.getElementById("para-8");
const pa9=document.getElementById("para-9");
*/
const firplay=document.getElementById("firstplay");
const secplay=document.getElementById("secondplay");

const whosturn=document.getElementById("whosturn");

firplay.addEventListener("click",function(){
    if (comp==""){
    comp="X";
    player="O";}
})
secplay.addEventListener("click",function(){
    if (comp==""){
        comp="O";
        player="X";
        compplay();
    }
})

function compplay(){
    console.log("hello computer");
    let ran=getRandom();
    arr[ran]=comp;
    console.log(ran);
    render();
    whosturn.innerHTML="YOUR TURN";
}

function render(){
    for (let i=0;i<9;i++){
        console.log(`button[${i}]`,"   ",buttons[i]);
        if (arr[i]!=""){
            buttons[i].innerHTML=`<p style="font-size:30px">${arr[i]}</p>`;
        }
           
    }
}
function getRandom(){
    let rr=Math.random() * 9;
    rr=Math.floor(rr);
    return rr;
}


