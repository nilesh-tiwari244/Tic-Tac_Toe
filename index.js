let arr = ["", "", "", "", "", "", "", "", "",];
let gg = ["", "", "", "", "", "", "", "", "",];
let comp = "";
let player = "";
let turn ="";
const bt1 = document.getElementById("block-1");
const bt2 = document.getElementById("block-2");
const bt3 = document.getElementById("block-3");
const bt4 = document.getElementById("block-4");
const bt5 = document.getElementById("block-5");
const bt6 = document.getElementById("block-6");
const bt7 = document.getElementById("block-7");
const bt8 = document.getElementById("block-8");
const bt9 = document.getElementById("block-9");
const buttons = [bt1, bt2, bt3, bt4, bt5, bt6, bt7, bt8, bt9];
const newgame=document.getElementById("newgame");
const firplay = document.getElementById("firstplay");
const secplay = document.getElementById("secondplay");
const whosturn = document.getElementById("whosturn");

firplay.addEventListener("click", function () {
    if (comp == "") {
        comp = "X";
        player = "O";
        turn ="player";
        showturn();
        playerplay();
    }
})
secplay.addEventListener("click", function () {
    if (comp == "") {
        comp = "O";
        player = "X";
        turn = "computer"
        showturn();
        compplay();
    }
})

function compplay() {
    setTimeout(()=>{
        let ran = getRandom();
        arr[ran] = comp;
        render();
        playerplay();
        turn="player";
        showturn();
    },500);  
}

function complogic(){
    setTimeout(()=>{
        let i;
        let fl=0;
        for (i=0;i<9;i++){
            if (arr[i]===""){
                arr[i]=comp;
                render();
                fl=1;
                break;
            } 
        }
        if (fl===0){
            console.log("draw");
            whosturn.innerHTML="DRAW";
            setTimeout(()=>{resetgame()},3000);
        }
        else
       { if (checkwin()!=0){
            won(comp);
        }
        else{
            turn="player";
            showturn();
            playerplay();
        }}
    },00);
}
function playerplay() {
    bt1.addEventListener("click", function () {
        if (turn == "player" && arr[0] == "") {
            buttons[0].innerHTML = `<p style="font-size:30px">${player}</p>`;
            arr[0] = player;
            turn ="computer";
            if (checkwin()!=0){
                won(player);
            }
            else{
                showturn();
                complogic();
            }
        }
    })
    bt2.addEventListener("click", function () {
        if (turn == "player" && arr[1] == "") {
            buttons[1].innerHTML = `<p style="font-size:30px;font-weight:bold">${player}</p>`;
            arr[1] = player;
            turn ="computer";
            if (checkwin()!=0){
                won(player);
            }
            else{
                showturn();
                complogic();
            }
        }
    })
    bt3.addEventListener("click", function () {
        if (turn == "player" && arr[2] == "") {
            buttons[2].innerHTML = `<p style="font-size:30px">${player}</p>`;
            arr[2] = player;
            turn ="computer";
            if (checkwin()!=0){
                console.log("here1");
                won(player);
            }
            else{
                showturn();
                complogic();
            }
        }
    })
    bt4.addEventListener("click", function () {
        if (turn == "player" && arr[3] == "") {
            buttons[3].innerHTML = `<p style="font-size:30px">${player}</p>`;
            arr[3] = player;
            turn ="computer";
            if (checkwin()!=0){
                won(player);
            }
            else{
                showturn();
                complogic();
            }
        }
    })
    bt5.addEventListener("click", function () {
        if (turn == "player" && arr[4] == "") {
            buttons[4].innerHTML = `<p style="font-size:30px">${player}</p>`;
            arr[4] = player;
            turn ="computer";
            if (checkwin()!=0){
                won(player);
            }
            else{
                showturn();
                complogic();
            }
        }
    })
    bt6.addEventListener("click", function () {
        if (turn == "player" && arr[5] == "") {
            buttons[5].innerHTML = `<p style="font-size:30px">${player}</p>`;
            arr[5] = player;
            turn ="computer";
            if (checkwin()!=0){
                won(player);
            }
            else{
                showturn();
                complogic();
            }
        }
    })
    bt7.addEventListener("click", function () {
        if (turn == "player" && arr[6] == "") {
            buttons[6].innerHTML = `<p style="font-size:30px">${player}</p>`;
            arr[6] = player;
            turn ="computer";
            if (checkwin()!=0){
                won(player);
            }
            else{
                showturn();
                complogic();
            }
        }
    })
    bt8.addEventListener("click", function () {
        if (turn == "player" && arr[7] == "") {
            buttons[7].innerHTML = `<p style="font-size:30px">${player}</p>`;
            arr[7] = player;
            turn ="computer";
            if (checkwin()!=0){
                won(player);
            }
            else{
                showturn();
                complogic();
            }
        }
    })
    bt9.addEventListener("click", function () {
        if (turn == "player" && arr[8] == "") {
            buttons[8].innerHTML = `<p style="font-size:30px">${player}</p>`;
            arr[8] = player;
            turn ="computer";
            if (checkwin()!=0){
                won(player);
            }
            else{
                showturn();
                complogic();
            }
        }
    })

}

function showturn (){
    whosturn.innerHTML =`${turn}'s Turn`;
}
function render() {
    for (let i = 0; i < 9; i++) {
        buttons[i].innerHTML = `<p style="font-size:30px">${arr[i]}</p>`;

    }
}
function getRandom() {
    let rr = Math.random() * 9;
    rr = Math.floor(rr);
    return rr;
}
function checkwin() {
    let win;
    let k;
    //rows
    for (let a = 0; a < 7; a = a + 3) {
        win = 1;
        k = arr[a];
        for (let i = a; i < a + 3; i++) {
            if (arr[i] != k) {
                win = 0;
                break;
            }
        }
        if (win == 1) {
            return k;
        }
    }

    //columns
    for (let a = 0; a < 3; a = a + 1) {
        win = 1;
        k = arr[a];
        for (let i = a; i < a + 7; i = i + 3) {
            if (arr[i] != k) {
                win = 0;
                break;
            }
        }
        if (win == 1) {
            return k;
        }
    }
    // diagonals
    k = arr[0];
    if (arr[4] === arr[8] && arr[8] === k) {
        return k;
    }
    k = arr[2];
    if (arr[4] === arr[6] && arr[6] === k) {
        return k;
    }

    return 0;
}
function won(cc) {
    console.log("you won");
    if (cc === comp) { whosturn.innerHTML = `computer won`; }
    else { whosturn.innerHTML = `you won`;}
    setInterval(()=>{
        resetgame();
    },5000);
}
newgame.addEventListener("click",function(){
    resetgame();
})
function resetgame(){
    arr=gg;
    render();
    player="";
    comp="";
    turn="";
    whosturn.innerHTML ="";
}


