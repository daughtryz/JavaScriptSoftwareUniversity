


function solve(arr) {

    const board = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    const playerX = 'X';
    const playerO = 'O';

    let isPlayerXTurn = false;
    let isPlayerOTurn = false;

    for(let i =0;i< arr.length;i++) {
        let pos = arr[i].split(' ');
        let row = Number(pos[0]);
        let col = Number(pos[1]);

        
        if(i % 2 === 0) {

            if(board[row][col] === false) {
                board[row][col] = playerX;
            } else if(board[row][col] == 'O') {
                console.log("This place is already taken. Please choose another!");
                continue;
            }
           
            
        } else {
            if(board[row][col] === false) {
                board[row][col] = playerO;
            } else if(board[row][col] == 'X') {
                console.log("This place is already taken. Please choose another!");
                continue;
            }
        }
    }

    for(let i = 0;i < board.length;i++) {
        console.log(board[i].join('\t'));
    }

}

solve(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]);