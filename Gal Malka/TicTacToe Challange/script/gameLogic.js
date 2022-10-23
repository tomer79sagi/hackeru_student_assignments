var movesCount = 0
var gameStart ,difficulty , playerScore , AIScore, scoreBoard
var cells = {}
const board = [['','',''], ['','',''] , ['', '' ,'']]

loadGame()



function playerMove(cell){
    if(!gameStart){
        alert("Please Click on the Start Button!")
        
    } else if(!checkIfCellEmpty(cell)){
        alert("Block Is taken!")
        
    } else {
        cells[cell].classList.add('x')
        updateBoardMatrix(cell,'X')
        movesCount += 1
        if(checkWinCondition('X')){
            setTimeout(function(){ 
                alert("Player Wins!")
                playerScore++
                restartGame()
             }, 200);
        } else {
            AIDifficulty()    
        }
        
    }
}

function computerMove(move){
    if(movesCount < 8){
        console.log("Ai move : " + move)
        cells[move].classList.add('o')
        updateBoardMatrix(move,'O')
        movesCount += 1
        if(checkWinCondition('O')){
            setTimeout(function(){ 
                alert("AI Wins!")
                AIScore++
                restartGame()
                }, 200);
        }
    }
}

function AIDifficulty(){
    var cell;
    if(gameStart){
        if(difficulty == 1){
            cell = PickRandomCell()
            computerMove(cell)
        }
        if(difficulty == 2){
            cell = AILevelNormal()
            computerMove(cell)
        }
        if(difficulty == 3){
            cell = AILevelHard()
            computerMove(cell)
        }
    }
}

function AILevelNormal(){
    var move;
    for(var i = 0 ;i <3 ; ++i){
        var countX = 0
        var countNonEmptyCells = 0
        for(var j = 0; j<3 ; ++j){
            if(board[i][j] == 'X'){
                countX++
            }
            if(board[i][j] == 'X' || board[i][j] == 'O'){
                countNonEmptyCells++
            }    
        }
        if(countX == 2 && countNonEmptyCells != 3){
            move = CheckAvailableRow(i)
            return move
        }
    }

    for(var i = 0 ;i <3 ; ++i){
        var countX = 0
        var countNonEmptyCells = 0
        for(var j = 0; j<3 ; ++j){
            if(board[j][i] == 'X'){
                countX++
            }
            if(board[j][i] == 'X' || board[j][i] == 'O'){
                countNonEmptyCells++
            }    
        }
        if(countX == 2 && countNonEmptyCells != 3){
            move = CheckAvailableColumn(i)
            return move
        }
    }

    var countX = 0
    var countNonEmptyCells = 0

    for(var i = 0; i < 3; ++i){
        if(board[i][i] == 'X'){
            countX++
        }
        if(board[i][i] == 'X' || board[i][i] == 'O'){
            countNonEmptyCells++
        }
    }
    if(countX == 2 && countNonEmptyCells != 3){
        move = CheckAvailableDiagonal()
        return move
    }
    countX = 0
    countNonEmptyCells = 0
    for(var i = 0; i < 3; ++i){
        if(board[i][2 - i] == 'X'){
            countX++
        }
        if(board[i][2 - i] == 'X' || board[i][2 - i] == 'O'){
            countNonEmptyCells++
        }
    }
    if(countX == 2 && countNonEmptyCells != 3){
        move = CheckAvaliableDiagonalReverse()
        return move
    }

    
    move = PickRandomCell()
    return move
}

function AILevelHard(){
    var move
    if(checkIfPlayerCanWin('X') && !checkIfPlayerCanWin('O')){
        move = AILevelNormal()
        return move
    } else {
        for(var i = 0 ;i <3 ; ++i){
            var countO = 0
            var countNonEmptyCells = 0
            for(var j = 0; j<3 ; ++j){
                if(board[i][j] == 'O'){
                    countO++
                }
                if(board[i][j] == 'X' || board[i][j] == 'O'){
                    countNonEmptyCells++
                }
            }
            if(countO == 1 && countNonEmptyCells == 1){
                move = CheckAvailableRow(i)
                return move
            }
            if(countO == 2 && countNonEmptyCells != 3){
                move = CheckAvailableRow(i)
                return move
            }
        }

        for(var i = 0 ;i <3 ; ++i){
            var countO = 0
            var countNonEmptyCells = 0
            for(var j = 0; j<3 ; ++j){
                if(board[j][i] == 'O'){
                    countO++
                }
                if(board[j][i] == 'X' || board[j][i] == 'O'){
                    countNonEmptyCells++
                }
            }
            if(countO == 1 && countNonEmptyCells == 1){
                move = CheckAvailableColumn(i)
                return move
            }
            if(countO == 2 && countNonEmptyCells != 3){
                move = CheckAvailableColumn(i)
                return move
            }
        }

    var countO = 0
    var countNonEmptyCells = 0

    for(var i = 0; i < 3; ++i){
        if(board[i][i] == 'O'){
            countO++
        }
        if(board[i][i] == 'X' || board[i][i] == 'O'){
            countNonEmptyCells++
        }
    }
    if(countO == 1 && countNonEmptyCells == 1){
        move = CheckAvailableDiagonal(i)
        return move
    }
    if(countO == 2 && countNonEmptyCells != 3){
        move = CheckAvailableDiagonal()
        return move
    }
    countO = 0
    countNonEmptyCells = 0
    for(var i = 0; i < 3; ++i){
        if(board[i][2 - i] == 'O'){
            countO++
        }
        if(board[i][2 - i] == 'X' || board[i][2 - i] == 'O'){
            countNonEmptyCells++
        }
    }
    if(countO == 1 && countNonEmptyCells == 1){
        move = CheckAvaliableDiagonalReverse()
        return move
    }
    if(countO == 2 && countNonEmptyCells != 3){
        move = CheckAvaliableDiagonalReverse()
        return move
    }

        move = PickRandomCell()
        return move
    }
}

function checkIfPlayerCanWin(sign){
    for(var i = 0 ;i <3 ; ++i){
        var countSign = 0
        var countNonEmptyCells = 0
        for(var j = 0; j<3 ; ++j){
            if(board[i][j] == sign){
                countSign++
            }
            if(board[i][j] == 'X' || board[i][j] == 'O'){
                countNonEmptyCells++
            }    
        }
        if(countSign == 2 && countNonEmptyCells != 3){
            return true
        }
    }

    for(var i = 0 ;i <3 ; ++i){
        var countSign = 0
        var countNonEmptyCells = 0
        for(var j = 0; j<3 ; ++j){
            if(board[j][i] == sign){
                countSign++
            }
            if(board[j][i] == 'X' || board[j][i] == 'O'){
                countNonEmptyCells++
            }    
        }
        if(countSign == 2 && countNonEmptyCells != 3){
            return true
        }
    }

    var countSign = 0
    var countNonEmptyCells = 0

    for(var i = 0; i < 3; ++i){
        if(board[i][i] == sign){
            countSign++
        }
        if(board[i][i] == 'X' || board[i][i] == 'O'){
            countNonEmptyCells++
        }
    }
    if(countSign == 2 && countNonEmptyCells != 3){
        return true
    }
    countSign = 0
    countNonEmptyCells = 0
    for(var i = 0; i < 3; ++i){
        if(board[i][2 - i] == sign){
            countSign++
        }
        if(board[i][2 - i] == 'X' || board[i][2 - i] == 'O'){
            countNonEmptyCells++
        }
    }
    if(countSign == 2 && countNonEmptyCells != 3){
        return true
    }

    return false
}

function PickRandomCell(){
    emptyCells = []
    var count = 0
    for(var i = 0; i < 3; ++i){
        for(var j = 0; j < 3; ++j){
            if(board[i][j] == ''){
                emptyCells.push(count)
            }
            count++
        }
    }
    var cell = emptyCells[Math.floor((Math.random() * (emptyCells.length)))]
    console.log(board)
    console.log("CELLS :" + emptyCells)
    return cell
}

function CheckAvailableRow(row){
    for(var i = 0; i < 3; ++i){
        if(board[row][i] == ''){
            return (row * 3) + i
        }
    }
}

function CheckAvailableColumn(column){
    for(var i = 0; i < 3; ++i){
        if(board[i][column] == ''){
            return (i * 3) + column
        }
    }
}

function CheckAvailableDiagonal(){
    for(var i = 0; i < 3; ++i){
        if(board[i][i] == ''){
            return (i * 3) + i
        }
    }
}

function CheckAvaliableDiagonalReverse(){
    for(var i = 0; i < 3; ++i){
        if(board[i][2 - i] == ''){
            return (i * 3) + 2 - i
        }
    }
}

function checkIfCellEmpty(cell){
    return !cells[cell].classList.contains("x") && !cells[cell].classList.contains("o")
}

function checkWinCondition(sign){
    if(movesCount >= 3){ 
        for(var i = 0; i < 3; ++i){
            var count = 0;
            for(var j = 0; j < 3; ++j){
                if(board[i][j] == sign){
                    count++;
                }
            }
            if(count == 3)
                return true;
        }

        for(var j = 0; j < 3; ++j){
            var count = 0;
            for(var i = 0; i < 3; ++i){
                if(board[i][j] == sign){
                    count++;
                }
            }
            if(count == 3)
                return true;
        }

        var count = 0;
        for(var i = 0; i < 3; ++i){
            if(board[i][i] == sign){
                count++;
            }
        }
        if(count == 3)
            return true;

        count = 0;
        for(var i = 0; i < 3; ++i){
            if(board[i][2 - i] == sign){
                count++;
            }
        }
        if(count == 3)
            return true;
    }
    if(movesCount == 9){
        setTimeout(function(){ 
            alert("Its a Tie!")
            restartGame()
         }, 200);
    }
    return false;
}

function updateBoardMatrix(cell,sign){
    var currentRow = parseInt((cell / 3));
    var currentColumn = (cell % 3)
    board[currentRow][currentColumn] = sign
    console.log(board)
}

function loadGame(){
    movesCount = 0
    AIScore = 0
    playerScore = 0
    gameStart = false
    setDifficulty(1)
    scoreBoard = "Player - " + playerScore + " VS " + "AI - " + AIScore
    document.getElementById("title").innerHTML = scoreBoard
    for(var i = 0; i < 3*3; ++i){
        cells[i] = document.getElementById('C'+(i+1))
    }
}

function startGame(){
    if(difficulty == 0){
        alert("Please choose difficulty level!")
    } else {
        gameStart = true
        document.getElementById("start_btn").style.display = 'none'
        document.getElementById("restart_btn").style.display = 'block'
        document.getElementById("easy").style.display = 'none'
        document.getElementById("normal").style.display = 'none'
        document.getElementById("hard").style.display = 'none'
    }
}

function setDifficulty(num){
    difficulty = num;
    if(num == 1){
        document.getElementById("easy").style.backgroundColor = '#ff0000'
        document.getElementById("normal").style.backgroundColor = '#fff'
        document.getElementById("hard").style.backgroundColor = '#fff'
    }
    if(num == 2){
        document.getElementById("easy").style.backgroundColor = '#fff'
        document.getElementById("normal").style.backgroundColor = '#ff0000'
        document.getElementById("hard").style.backgroundColor = '#fff'
    }
    if(num == 3){
        document.getElementById("easy").style.backgroundColor = '#fff'
        document.getElementById("normal").style.backgroundColor = '#fff'
        document.getElementById("hard").style.backgroundColor = '#ff0000'
    }
}

function restartGame(){
    document.getElementById("easy").style.display = 'initial'
    document.getElementById("normal").style.display = 'initial'
    document.getElementById("hard").style.display = 'initial'
    document.getElementById("start_btn").style.display = 'block'
    document.getElementById("restart_btn").style.display = 'none'
    document.getElementById("difficulty_container").style.flexDirection = 'row'
    scoreBoard = "AI - " + AIScore + " VS " + "Player - " + playerScore
    document.getElementById("title").innerHTML = scoreBoard

    for(var i = 0; i < 3*3; ++i){
        cells[i].classList.remove("x")
        cells[i].classList.remove("o")
    }
   
    movesCount = 0
    gameStart = false

    for(var i = 0 ; i < 3; ++i){
        for(var j =0; j< 3; ++j){
            board[i][j] = ''
        }
    }
}