
function solve(commands) {

    
    const arr = [];
    let number = 0;

    for(let i = 0;i<commands.length;i++) {

        if(commands[i] === 'add') {
            number++;
            arr.push(number)
        } else if(commands[i] === 'remove') {
            number++;
            arr.pop();
        }
    }

    if(arr.length == 0) {
        console.log('Empty');
    } else {
        arr.forEach(item => console.log(item));
    }
   


}

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);