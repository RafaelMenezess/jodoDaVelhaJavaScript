var x = document.querySelector(".x");
var o = document.querySelector(".o");
var boxes = document.querySelectorAll(".box");
var buttons = document.querySelectorAll("#buttons-container button");
var messageContainer = document.querySelector("#message");
var messageText = document.querySelector("#message p")
var secondPlayer;

// contador de jogadas
var player1 = 0;
var player2 = 0;

// adicionando o evento de click aos boxes
for(var i =0; i < boxes.length; i++){


    // quando alguem clica na caixa
    boxes[i].addEventListener("click", function(){

        var el = checkEl(player1, player2);

        //verefica se ja tem x ou o
        if(this.childNodes.length == 0){

        var cloneEl = el.cloneNode(true);

        this.appendChild(cloneEl);

        //computar jogada
        if(player1 == player2){
            player1++;

            if(secondPlayer == 'ai-player'){

                // funcao executar a jogada
                computerPlay();

                player2++;
            }

        }else {
            player2++;
        }

        // checa quem venceu
        checkWinCondition();
    }

    });

}

// evento para saber se é 2 players ou IA
for(var i = 0; i < buttons.length; i++){

    buttons[i].addEventListener("click", function(){

        secondPlayer= this.getAttribute("id");

        for(var j = 0; j < buttons.length; j++){
            buttons[j].style.display ='none';
        }

        setTimeout(function(){
            var container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500);
    });
}

// ve quem vai jogar
function checkEl(player1, player2){
    
    if(player1 == player2){
        //x
        el = x;
    }else {
        //o
        el = o;
    }
    return el;

}

//ve quem ganhou
function checkWinCondition() {

    var b1 = document.getElementById("block-1");
    var b2 = document.getElementById("block-2");
    var b3 = document.getElementById("block-3");
    var b4 = document.getElementById("block-4");
    var b5 = document.getElementById("block-5");
    var b6 = document.getElementById("block-6");
    var b7 = document.getElementById("block-7");
    var b8 = document.getElementById("block-8");
    var b9 = document.getElementById("block-9");

    //horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0 ){

        var b1Child = b1.childNodes[0].className;
        var b2Child = b2.childNodes[0].className;
        var b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
            //x
            declaraWinner('x')
        }else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
            //o
            declaraWinner('o')
        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0 ){

        var b4Child = b4.childNodes[0].className;
        var b5Child = b5.childNodes[0].className;
        var b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
            //x
            declaraWinner('x')
        }else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
            //o
            declaraWinner('o')
        }
    }
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0 ){

        var b7Child = b7.childNodes[0].className;
        var b8Child = b8.childNodes[0].className;
        var b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
        //x
        declaraWinner('x')
        }else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
        //o
        declaraWinner('o')
        } 

    }
    //vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0 ){

        var b1Child = b1.childNodes[0].className;
        var b4Child = b4.childNodes[0].className;
        var b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
            //x
            declaraWinner('x')
        }else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
            //o
            declaraWinner('o')
        }
    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0 ){

        var b2Child = b2.childNodes[0].className;
        var b5Child = b5.childNodes[0].className;
        var b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){
            //x
            declaraWinner('x')
        }else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
            //o
            declaraWinner('o')
        }
    }
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0 ){

        var b3Child = b3.childNodes[0].className;
        var b6Child = b6.childNodes[0].className;
        var b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
            //x
            declaraWinner('x')
        }else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
            //o
            declaraWinner('o')
        }
    }
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0 ){

        var b1Child = b1.childNodes[0].className;
        var b5Child = b5.childNodes[0].className;
        var b9Child = b9.childNodes[0].className;

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
            //x
            declaraWinner('x')
        }else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
            //o
            declaraWinner('o')
        }
    }
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0 ){

        var b3Child = b3.childNodes[0].className;
        var b5Child = b5.childNodes[0].className;
        var b7Child = b7.childNodes[0].className;

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x'){
            //x
            declaraWinner('x')
        }else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
            //o
            declaraWinner('o')
        }
    }

    //deu velha
    var counter = 0;

    for(var i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            counter++;
        }
    }
    if(counter == 9){
        declaraWinner('Deu velha!')
    }
}

//limpa o jogo, declara o vencedor e atuliza o placar
function declaraWinner(winner){

    var scoreboardX = document.querySelector("#scoreboard-1");
    var scoreboardY = document.querySelector("#scoreboard-2");
    var msg= '';

    if(winner == 'x'){
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu!";
    }else if(winner == 'o'){
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
        msg = "O jogador 2 venceu!";
    }else{
        msg = "Deu velha!";
    }

    //exibe msg
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    //esconde msg
    setTimeout(function(){
        messageContainer.classList.add("hide");
    }, 3000);

    // zera as jogadas
    player1 = 0;
    player2 = 0;

    //remove x e o
    var boxesToRemove = document.querySelectorAll(".box div");

    for(var i = 0; i< boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

//executar a lógica da jogada CPU
function computerPlay(){

    var cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for(var i = 0; i < boxes.length; i++){

        var randomNumber = Math.floor(Math.random() * 5);

        //so preencher se estiver vazio o filho
        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <= 1){
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        // checagem de quantas estão preenchidas
        }else{
            filled++;
        }
    }
    if(counter == 0 && filled < 9){
        computerPlay();
    }

}
