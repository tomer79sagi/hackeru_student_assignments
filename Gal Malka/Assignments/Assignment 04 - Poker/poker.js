var img_clicked = false
var gameOn = false
var playerTurn = true;
var betsAllowed = false
var alreadyRaised = false
var AIReplacedCards = false
var cardReplaced = false
var gamePhase = 0

var dealsound = new Audio('../props/sounds/dealcardsound.mp3')

var text_box = document.getElementById("text_box")
var done_btn = document.getElementById("done_btn")
var deal_btn = document.getElementById("deal_btn")
var check_btn = document.getElementById("check_btn")
var fold_btn = document.getElementById("fold_btn")
var call_btn = document.getElementById("call_btn")
var raise_btn = document.getElementById("raise_btn")

var playerCash = 1500
var AICash = 1500
var currentPot = 0

var playerBet = 0
var AIBet = 0


var aiCurrentHand = 0;
var playerCurrentHand = 0;
var possibleHandShapes = 0
var possibleHandValues = 0;
var highestShape = null

var replaceCounter = 0;

var deck = [];
var playerCards = []
var AICards = []

//Backend Actions


function buildDeck(){
    deck = []
    for(var i = 1; i < 14; ++i){
        deck.push("C"+i)
    }
    for(var i = 1; i < 14; ++i){
        deck.push("D"+i)
    }
    for(var i = 1; i < 14; ++i){
        deck.push("S"+i)
    }
    for(var i = 1; i < 14; ++i){
        deck.push("H"+i)
    }
    console.log(deck) 
}


function shuffleDeck(){
    let index = deck.length
    var temp;

    while(index != 0){
        randomIndex = Math.floor(Math.random() * index)
        index--;

        temp = deck[index]
        deck[index] = deck[randomIndex]
        deck[randomIndex] = temp
    }

    console.log(deck)
}


function dealDeck(){
    AICards = []
    playerCards = []
    for(var i =  0; i < 5; ++i){
        playerCards.push(deck.pop())
        AICards.push(deck.pop())
    }

    console.log(playerCards)
    console.log(AICards)
}


function displayPlayerCards(){
    for(var i = 0; i < 5; ++i){
        var card = playerCards[i]
        var shape = card[0]
        var number = card.slice(1)
        let source;
        switch(shape) {
            case 'D': 
                source = '../props/cards/diamonds/diamond_'+number+'.png';
                break
            case 'H':
                source = '../props/cards/hearts/heart_'+number+'.png';
                break
            case 'S':
                source = '../props/cards/spades/spade_'+number+'.png';
                break
            case 'C':
                source = '../props/cards/clubs/club_'+number+'.png';
                break
        }
        document.getElementById('playercard_'+(i+1)).src = source
    }
}


function displayAICards(){
    for(var i = 0; i < 5; ++i){
        var card = AICards[i]
        var shape = card[0]
        var number = card.slice(1)
        let source;
        switch(shape) {
            case 'D': 
                source = '../props/cards/diamonds/diamond_'+number+'.png';
                break
            case 'H':
                source = '../props/cards/hearts/heart_'+number+'.png';
                break
            case 'S':
                source = '../props/cards/spades/spade_'+number+'.png';
                break
            case 'C':
                source = '../props/cards/clubs/club_'+number+'.png';
                break
        }
        document.getElementById('aicard_'+(i+1)).src = source
    }
}


function restartPlayerCards(){
    var source = '../props/cards/backcard.png'
    for(var i = 0; i < 5;++i){
        document.getElementById('playercard_'+(i+1)).src = source
    }
}


function restartAICards(){
    var source = '../props/cards/backcard.png'
    for(var i = 0; i < 5;++i){
        document.getElementById('aicard_'+(i+1)).src = source
    }
}


function updateInfo(){
    var playerMoney = document.getElementById("playerCash")
    var AIMoney = document.getElementById("aiCash")
    var playerBetText = document.getElementById("playerBet")
    var AIBetText = document.getElementById("aiBet")
    var pot = document.getElementById("pot")

    playerBetText.textContent = playerBet
    AIBetText.textContent = AIBet
    playerMoney.textContent = playerCash
    AIMoney.textContent = AICash
    pot.textContent = currentPot
}


function sideMenuTransition() {
    if(!img_clicked){
        document.getElementById("strength_list").style.left = "20px"
        img_clicked = true
    } else {
        document.getElementById("strength_list").style.left = "-200px"
        img_clicked = false
    }
}


function endGame(){   
    playerBet = 0
    AIBet = 0
    replaceCounter = 0
    gameOn = false
    betsAllowed = false
    alreadyRaised = false
    AIReplacedCards = false
    cardReplaced = false
    aiCurrentHand = 0;
    playerCurrentHand = 0;
    possibleHandShapes = 0
    possibleHandValues = 0;
    highestShape = null
    text_box.style.display = 'none'
    deal_btn.style.display = 'inline'
    done_btn.style.display = 'none'
    restartPlayerCards()
    restartAICards()
    if(playerCash == 0 || AICash == 0){
        restartGame()
    }
    updateInfo()
}


function restartGame(){
    displayAIActions()
    text_box.textContent = "Someone ran out of money.. Restarting Game!"
    AICash = 1500
    playerCash = 1500
}


function displayPlayerRaise(){
    done_btn.style.display = 'inline'
    check_btn.style.display = 'none'
    fold_btn.style.display = 'none'
    call_btn.style.display = 'none'
    raise_btn.style.display = 'none'
    text_box.style.display = 'none'
}


function displayPlayerActions(){
    done_btn.style.display = 'inline'
    fold_btn.style.display = 'inline'
    check_btn.style.display = 'inline'
    text_box.style.display = 'none'
    raise_btn.style.display = 'none'
    call_btn.style.display = 'none'
    deal_btn.style.display = 'none'
}


function displayPlayerOptions(){
    done_btn.style.display = 'none'
    fold_btn.style.display = 'inline'
    check_btn.style.display = 'none'
    text_box.style.display = 'none'
    raise_btn.style.display = 'inline'
    call_btn.style.display = 'inline'
    deal_btn.style.display = 'none'
}


function displayAIActions(){
    done_btn.style.display = 'none'
    check_btn.style.display = 'none'
    fold_btn.style.display = 'none'
    call_btn.style.display = 'none'
    raise_btn.style.display = 'none'
    text_box.style.display = 'inline'
}


function displayDealBtn(){
    done_btn.style.display = 'none'
    check_btn.style.display = 'none'
    fold_btn.style.display = 'none'
    call_btn.style.display = 'none'
    raise_btn.style.display = 'none'
    text_box.style.display = 'none'
    deal_btn.style.display = 'inline'
}


function calculateEndGame(){
    playerCurrentHand = checkPlayerHand()
    if(playerCurrentHand > aiCurrentHand){
        text_box.textContent = "Player Win " + currentPot + " Chips"
        playerCash += currentPot
    }
    if(aiCurrentHand > playerCurrentHand){
        text_box.textContent = "John Win " + currentPot + " Chips"
        AICash += currentPot
    }
    if(aiCurrentHand == playerCurrentHand){
        var winner = tieBreaker()
        switch(winner){
            case 0:
                text_box.textContent = "Its a tie! spliting pot"
                AICash += (currentPot / 2)
                playerCash += (currentPot / 2)
                break
            case 1:
                text_box.textContent = "Player Win " + currentPot + " Chips"
                playerCash += currentPot
                break
            case 2:
                text_box.textContent = "John Win " + currentPot + " Chips"
                AICash += currentPot
                break
        }
        
    }
    displayAIActions()
    currentPot = 0
    updateInfo()
    displayAICards()
    setTimeout(function(){displayDealBtn()},5000)
}

// Player Actions


function dealCards(){
    if(gameOn){
        endGame()
        deal_btn.style.display = 'none'
        setTimeout(function(){dealCards()},2000)
    } else {
        dealsound.play()
        buildDeck()
        shuffleDeck()
        dealDeck()
        displayPlayerCards()
        AICash = AICash - 50
        playerCash = playerCash - 50
        currentPot = 100
        gameOn = true
        betsAllowed = true
        gamePhase = 1
        deal_btn.style.display = 'none'
        text_box.textContent =  "Please place your bet"
        text_box.style.display = 'inline'
        updateInfo()
        setTimeout(function(){displayPlayerActions()} , 2000)
    }
    
}


function bet(amount){
    console.log("Game Phase :" + gamePhase)
    console.log(betsAllowed)
    if(gameOn){
        if(playerCash - amount >= 0){
            if(gamePhase == 1 || gamePhase == 3 || gamePhase == 5 || gamePhase == 6){
                if(betsAllowed){
                    switch(amount) {
                        case 20:
                            playerCash = playerCash - 20
                            currentPot = currentPot + 20
                            playerBet += 20
                            break
                        case 50:
                            playerCash = playerCash - 50
                            currentPot = currentPot + 50
                            playerBet += 50
                            break
                        case 100:
                            playerCash = playerCash - 100
                            currentPot = currentPot + 100
                            playerBet += 100
                            break
                    }
                    check_btn.style.display = 'none'
                    fold_btn.style.display = 'none'
                    updateInfo()
                }  
            } 
        } else {
            alert("Cant bet more than you have..")
        }
        
    } else {
        alert("Please deal cards!")
    }
    updateInfo()
}


function checkBtn(){
    console.log("Game Phase: " + gamePhase)
    betsAllowed = false
    if(playerBet == 0){
        if(gamePhase == 1){
            gamePhase = 2
            text_box.textContent = "Calculating John Actions..."
            displayAIActions()
            setTimeout(function(){aiMove()} , 2000)
        }
        if(gamePhase == 5){
            text_box.textContent = "Calculating John Actions..."
            displayAIActions()
            setTimeout(function(){aiMove()} , 2000)
        }
    } else {
        alert("Cant check after placing bet! (Click done.)")
    }
}


function callBtn(){
    console.log("Game Phase: " + gamePhase)
    playerBet = AIBet
    playerCash = playerCash - playerBet
    currentPot += playerBet
    AIBet = 0
    playerBet = 0
    if(gamePhase == 3){ 
        text_box.textContent = "Choose up to three cards to replace"
        displayAIActions()
        setTimeout(function(){displayPlayerRaise(), gamePhase = 4}, 2000)
    }
    if(gamePhase == 6){
        text_box.textContent = "Calculating end results"
        displayAIActions()
        setTimeout(function(){calculateEndGame()} , 2000)
    }
    updateInfo()
}


function raiseBtn(){
    console.log("Game Phase: " + gamePhase)
    betsAllowed = true
    playerBet = AIBet
    playerCash = playerCash - playerBet
    currentPot += playerBet
    AIBet = 0
    playerBet = 0
    displayPlayerRaise()
    updateInfo()
}


function foldBtn() {
    console.log("Game Phase: " + gamePhase)
    if(playerBet > 0){
        alert("Cant Fold After Placing Bet!")
    } else {
        displayAIActions()
        text_box.textContent = 'Player Folded , Restarting Game...'
        AICash += currentPot
        currentPot = 0
        gamePhase = 0
        updateInfo()
        setTimeout(function(){endGame()} , 3000)
    }
    
    
}


function doneBtn(){
    console.log("Game Phase: " + gamePhase)
    if(gamePhase == 1 || gamePhase == 3){
        betsAllowed = false
        gamePhase = 2
        text_box.textContent = "Calculating John Actions..."
        displayAIActions()
        setTimeout(function(){aiMove()} , 2000)
    }

    else if(gamePhase == 4){
        AIReplaceManager()
        displayAIActions()
        displayPlayerCards()
        return
    }

    else if(gamePhase == 5 || gamePhase == 6){
        betsAllowed = false
        text_box.textContent = "Calculating John Actions..."
        displayAIActions()
        setTimeout(function(){aiMove()} , 2000)
    }
    updateInfo()
}


function replaceCards(cardNum){
    console.log("Game Phase: " + gamePhase)
    playerBet = 0
    if(gamePhase == 4){
        replaceCounter++
        var source = '../props/cards/backcard.png'

        if(replaceCounter <= 3){
            document.getElementById('playercard_'+cardNum).src = source
            playerCards[cardNum - 1] = deck.pop() 
        } else {
            alert('Cant Replace Any More Cards!')
        }
        
    }
}

// AI Actions

function aiMove(){
    aiCurrentHand = checkAIHand()
    console.log("Game Phase: " + gamePhase)
    if(alreadyRaised && (possibleHandShapes == 5 || possibleHandValues == 5 || aiCurrentHand >= 5)){
        aiRaise()
    }
    else if(alreadyRaised && playerBet >= 200 &&  aiCurrentHand <= 3){
        aiFold()
    }
    else if(alreadyRaised && (aiCurrentHand >= 3 && aiCurrentHand <= 5)){
        aiCall()
        return
    }
    else if(aiCurrentHand >= 3 || possibleHandShapes > 3 || possibleHandValues > 3 && AICash >= playerBet){
        aiRaise()
    }
    else if(aiCurrentHand == 2 || possibleHandShapes == 3 || possibleHandValues == 3 && AICash >= playerBet){
        aiCall()
    }
    else if(playerBet == 0) {
        aiCall()
    }
    else {
        aiFold()
    }
    playerBet = 0
    updateInfo()
}


function checkAIHand(){
    var shapesCounter = {D: 0,H: 0,C: 0,S: 0}
    var numberCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0]
    for(var i = 0; i < 5; ++i){
        var card = AICards[i]
        var shape = card[0]
        var number = card.slice(1)

        if(shapesCounter[shape] !== undefined){
            shapesCounter[shape] += 1
        } else {
            shapesCounter[shape] = 1
        }

        numberCounter[number - 1] += 1
    }
    
    console.log(numberCounter)
    checkForPossibleHand(shapesCounter,numberCounter)
    
    if(RoyalFlush(shapesCounter,numberCounter)){
        return 10
    }

    else if(StraightFlush(shapesCounter,numberCounter)){
        return 9
    }

    else if(FourOfAKind(shapesCounter,numberCounter)){
        return 8
    }

    else if(FullHouse(shapesCounter,numberCounter)){
        return 7
    }
    
    else if(Flush(shapesCounter,numberCounter)){
        return 6
    }

    else if(Straight(shapesCounter,numberCounter)){
        return 5
    }

    else if(ThreeOfAKind(shapesCounter,numberCounter)){
        return 4
    }

    else if(TwoPairs(shapesCounter,numberCounter)){
        return 3
    }
    else if(OnePair(shapesCounter,numberCounter)){
        return 2
    } else {
        return 1
    }
}


function aiFold(){
    displayAIActions()
    text_box.textContent = 'John Folded , Restarting Game...'
    playerCash += currentPot
    currentPot = 0
    gamePhase = 0
    updateInfo()
    setTimeout(function(){endGame()} , 3000)
}


function aiCall(){
    console.log("Game Phase: " + gamePhase)
    AICash = AICash - playerBet
    currentPot += playerBet
    if(playerBet > 0){
        text_box.textContent = 'John Called For ' + playerBet + ' Chips'
    } else {
        text_box.textContent = 'John Checked'
    }
    
    updateInfo()
    displayAIActions()
    if(gamePhase == 2 || gamePhase == 3){
        setTimeout(function(){text_box.textContent = "Choose up to three cards to replace"}, 2000) 
        displayAIActions()
        setTimeout(function(){displayPlayerRaise(), gamePhase = 4}, 4000)
    }
    if(gamePhase == 6 || gamePhase == 5){
        setTimeout(function(){text_box.textContent = "Calculating end results"}, 2000) 
        displayAIActions()
        setTimeout(function(){calculateEndGame()}, 4000)
    }
}


function aiRaise(){
    console.log("Game Phase: " + gamePhase)
    var chance = Math.floor(Math.random() * 4);
    alreadyRaised = true
    AICash = AICash - playerBet
    currentPot += playerBet
    if(gamePhase == 2){
        gamePhase = 3
    }
    if(gamePhase == 5){
        gamePhase = 6
    }

    if(aiCurrentHand > 7){
        AIBet = AICash
    }
    else if(chance == 0 && AICash >= playerBet * 2){
        AIBet = (playerBet * 2)
    }
    else if(chance == 1 && AICash >= possibleHandShapes * 100){
        AIBet = (possibleHandShapes * 100)
    }
    else if(chance == 2 && AICash >= 250){
        AIBet = 250
    }
    else if(chance == 3 && AICash >= 100){
        AIBet = 100
    }
    else {
        if(AICash > 150){
            AIBet = 150
        } else {
            AIBet = AICash
        }    
    }

    if(AIBet == 0){
        aiCall()
        return
    }
    else if(AIBet < AICash){
        text_box.textContent = 'John Raised For ' + AIBet + ' Chips'
    }
    else {
        text_box.textContent = "John's ALL IN!!!"
    }
    AICash = AICash - AIBet
    currentPot = currentPot + AIBet
    updateInfo()
    setTimeout(function(){displayPlayerOptions()} , 2000)
}


//AI Hand Replacer
function AITryToFlush(){
    console.log("Ai trying to get flush")
    var counter = 0
    for(var i = 0 ; i < 5; ++i){
        var card = AICards[i]
        var shape = card[0]
        if(shape != highestShape){
            AICards[i] = deck.pop()
            counter++
        }
        if(counter == 5 - possibleHandShapes){
            text_box.textContent = "John Replaced " + counter + " Cards!"
            AIReplacedCards = true
            console.log(AICards)
            return
        }
    }
}


function AIReplaceManager(){
    console.log("Game Phase: " + gamePhase)
    console.log(aiCurrentHand)
    if(aiCurrentHand < 4 && possibleHandShapes == 4 && possibleHandValues == 4){
        AITryToStraight()
    }
    if(aiCurrentHand == 1 || aiCurrentHand == 2){
        if(possibleHandShapes >= possibleHandValues){
            AITryToFlush()
        } else {
            AITryToStraight()
        }
    }
    if(AIReplacedCards == false){
        switch(aiCurrentHand){
            case 3:
                AIHandReplaceHand(1)
            //trying to get full house
                break
            case 4:
                AIHandReplaceHand(2)
            //keep the three of a kind replace two
                break
            case 5:
                AIHandReplaceHand(0)
            //keep the straight replace none
                break
            case 6:
                AIHandReplaceHand(0)
            //keep the flush
                break
            case 7:
                AIHandReplaceHand(0)
                //replace none
                break
            case 8:
                AIHandReplaceHand(0)
                break
            case 9:
                AIHandReplaceHand(0)
                break
            case 10:
                AIHandReplaceHand(0)
                break
        }
    }
    aiCurrentHand = checkAIHand()
    setTimeout(function(){text_box.textContent = "Please place your bet!"}, 2000)
    betsAllowed = true 
    gamePhase = 5
    setTimeout(function(){displayPlayerActions()}, 4000)
}


function AITryToStraight(){
    console.log("Ai trying to get straight")
    var start = 0
    var end = 0
    var tempValue = 0
    var counter = 0
    var pair = false
    var pairNumber = 0
    var numberCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0]
    for(var i = 0; i < 5; ++i){
        var card = AICards[i]
        var number = card.slice(1)
        numberCounter[number - 1] += 1
    }

    for(var i = 0; i < 8 ;++i){
        counter = 0
        for(var j = 0; j < 5 ; ++j){
            if(numberCounter[i + j] >= 1){
                counter++
            }
            if(pair == false && numberCounter[i + j] == 2){
                pair = true
                pairNumber = (i + (j + 1))
            }
        }
        if(counter > tempValue){
            tempValue = counter
            start = (i + (j - 1)) - (possibleHandValues - 1)
            end = (i + (j - 1))
        }
    }

    console.log("staright start: " + start)
    console.log("straight end: " + end)

    counter = 0
    for(var i = 0; i < 5;++i){
        var card = AICards[i]
        var value = card.slice(1)
        if(pair){
            if(value == pairNumber && (value >= (end + 1) || value <= start)){
                pair = false
                AICards[i] = deck.pop()
                counter++
            }
        }
        else if(value > (end + 1) || value < start){
            AICards[i] = deck.pop()
            counter++
        }
    }
    
    text_box.textContent = "John Replaced " + counter + " Cards!"
    AIReplacedCards = true
    console.log(AICards)
}


function AIHandReplaceHand(num){
    console.log("ai replacing cards normally " + num)
    var numberCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0]
    for(var i = 0; i < 5; ++i){
        var card = AICards[i]
        var number = card.slice(1)
        numberCounter[number - 1] += 1
    }
    if(num == 1){
        var pair1 = 0
        var pair2 = 0
        var tempValue = 0
        for(var i = 0 ; i < 13 ; ++i){
            if(numberCounter[i] == 2){
                pair1 = i
                tempValue = i + 1
                break
            }
        }
        for(var i = tempValue; i < 13 ; i++){
            if(numberCounter[i] == 2){
                pair2 = i
            }
        }
        for(var i = 0 ; i < 5; ++i){
            var card = AICards[i]
            var number = card.slice(1)
            if(number != (pair1 + 1) && number != (pair2 + 1)){
                AICards[i] = deck.pop()
            }
        } 
    }
    if(num == 2){
        var threeofakind = 0
        for(var i = 0; i < 13; ++i){
            if(numberCounter[i] == 3){
                threeofakind = i
            }
        }
        for(var i = 0; i < 5;++i){
            var card = AICards[i]
            var number = card.slice(1)
            if(number != threeofakind){
                AICards[i] = deck.pop()
            }
        }
    }

    text_box.textContent = "John Replaced " + num + " Cards!"
    AIReplacedCards = true
    console.log(AICards)
}


//Function To Check Hand Strength

function tieBreaker(){
    var playerHighestCard = 0
    var AIHighestCard = 0
    for(var i = 0 ; i < 5; ++i){
        var card = AICards[i]
        var number = card.slice(1)
        if(number > AIHighestCard){
            AIHighestCard = number
        }
    }
    for(var i = 0 ; i < 5; ++i){
        var card = playerCards[i]
        var number = card.slice(1)
        if(playerHighestCard > number){
            playerHighestCard = number
        }
    }

    for(var i = 0; i < 5; ++i){
        var playerCard = playerCards[i]
        var playerNumber = playerCard.slice(1)
        var AIcard = AICards[i]
        var AInumber = AIcard.slice(1)
        if(playerNumber  == 1){
            playerHighestCard = 1
        }
        if(AInumber == 1){
            AIHighestCard == 1
        }
    }

    if(playerHighestCard == 1 && AIHighestCard != 1){
        return 1
    }

    if(AIHighestCard == 1 && playerHighestCard != 1){
        return 2
    }

    if(playerHighestCard == AIHighestCard){
        return 0
    }
    if(playerHighestCard > AIHighestCard){
        return 1
    }
    if(AIHighestCard > playerHighestCard){
        return 2
    }
    
}


function checkPlayerHand(){
    var shapesCounter = {D: 0,H: 0,C: 0,S: 0}
    var numberCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0]
    for(var i = 0; i < 5; ++i){
        var card = playerCards[i]
        var shape = card[0]
        var number = card.slice(1)

        if(shapesCounter[shape] !== undefined){
            shapesCounter[shape] += 1
        } else {
            shapesCounter[shape] = 1
        }

        numberCounter[number - 1] += 1
    }

    if(RoyalFlush(shapesCounter,numberCounter)){
        return 10
    }

    else if(StraightFlush(shapesCounter,numberCounter)){
        return 9
    }

    else if(FourOfAKind(shapesCounter,numberCounter)){
        return 8
    }

    else if(FullHouse(shapesCounter,numberCounter)){
        return 7
    }
    
    else if(Flush(shapesCounter,numberCounter)){
        return 6
    }

    else if(Straight(shapesCounter,numberCounter)){
        return 5
    }

    else if(ThreeOfAKind(shapesCounter,numberCounter)){
        return 4
    }

    else if(TwoPairs(shapesCounter,numberCounter)){
        return 3
    }
    else if(OnePair(shapesCounter,numberCounter)){
        return 2
    } else {
        return 1
    }
}


function checkForPossibleHand(shapes,values){
    var highestValue = 0
    console.log(shapes)
    if(shapes["H"] >= shapes["D"] && shapes["H"] >= shapes["S"] && shapes["H"] >= shapes["C"]){
        highestValue = shapes["H"]
        highestShape = "H"
    }
    else if(shapes["D"] >= shapes["H"] && shapes["D"] >= shapes["S"] && shapes["D"] >= shapes["C"]){
        highestValue = shapes["D"]
        highestShape = "D"
    }
    else if(shapes["S"] >= shapes["D"] && shapes["S"] >= shapes["H"] && shapes["S"] >= shapes["C"]){
        highestValue = shapes["S"]
        highestShape = "S"
    }
    else if(shapes["C"] >= shapes["D"] && shapes["C"] >= shapes["S"] && shapes["C"] >= shapes["H"]){
        highestValue = shapes["C"]
        highestShape = "C"
    }
    possibleHandShapes = highestValue

    var counter = 0;
    var tempValue = 0
    for(var i = 0; i < 8 ;++i){
        counter = 0
        for(var j = 0; j < 5 ; ++j){
            if(values[i + j] >= 1){
                counter++
            }
        }
        if(counter > tempValue){
            tempValue = counter
        }
    }

    possibleHandValues = tempValue
    console.log("high shape:" + highestShape)
    console.log("high possible shape:" + possibleHandShapes)
    console.log("high possible streak:" + possibleHandValues)
}


function RoyalFlush(shapes,values){
    if(shapes["H"] == 5 || shapes["C"] == 5 || shapes["D"] == 5 || shapes["S"] == 5){
        if(values[10] == 1 && values[11] == 1 && values[12] == 1 && values[13] == 1 && values[1] == 1){
            return ture
        }
    } else {
        return false
    }
}


function StraightFlush(shapes,values){
    var counter = 0;
    if(shapes["H"] == 5 || shapes["C"] == 5 || shapes["D"] == 5 || shapes["S"] == 5){
        for(var i = 0; i < 8 ;++i){
            counter = 0
            for(var j = 0; j < 5 ; ++j){
                if(values[i + j] == 1){
                    counter++
                }
            }
            if(counter == 5){
                return true
            }
        }
        if(values[0] == 1 && values[9] == 1 && values[10] == 1 && values[11] == 1 && values[12] == 1){
            return true
        }
    }
    return false
}


function FourOfAKind(shapes,values){
    for(var i = 0; i < 13;++i){
        if(values[i] == 4){
            return true
        } 
    }
    return false
}


function FullHouse(shapes,values){
    var pair = false
    var threeofakind = false
    for(var i = 0; i < 13;++i){
        if(values[i] == 2){
            pair = true
        }
        if(values[i] == 3){
            threeofakind = true
        }
    }
    if(pair && threeofakind){
        return true
    } else {
        return false
    }
}


function Flush(shapes,values){
    if(shapes["H"] == 5 || shapes["C"] == 5 || shapes["D"] == 5 || shapes["S"] == 5){
        return true
    } else {
        return false
    }
}


function Straight(shapes,values){
    var counter = 0;
    for(var i = 0; i < 8 ;++i){
        counter = 0
        for(var j = 0; j < 5 ; ++j){
            if(values[i + j] == 1){
                counter++
            }
        }
        if(counter == 5){
            return true
        }
    }
    if(values[0] == 1 && values[9] == 1 && values[10] == 1 && values[11] == 1 && values[12] == 1){
        return true
    }
    return false
}


function ThreeOfAKind(shapes,values){
    for(var i = 0; i < 13;++i){
        if(values[i] == 3){
            return true
        } 
    }
    return false
}


function TwoPairs(shapes,values){
    var pair1 = false
    var pair2 = false
    var tempvalue = 0
    for(var i = 0 ; i < 13 ; ++i){
        if(values[i] == 2){
            pair1 = true
            tempvalue = i + 1
            break
        }
    }
    for(var i = tempvalue; i < 13 ; i++){
        if(values[i] == 2){
            pair2 = true
        }
    }

    if(pair1 && pair2){
        return true
    } else {
        return false
    }
}


function OnePair(shapes,values){
    for(var i = 0; i < 13; ++i){
        if(values[i] == 2){
            return true
        }
    }
    return false
}