

function solve(commands) {

   

    return commands.reduce(function(acc,currCommand) {
        const [op,...others] = currCommand.split(' ');
        const word = others.join(' ');
        if(op === 'add') {
            return acc.concat(word);
        } else if(op === 'remove') {
            return acc.filter(i => i !==word );
        } 
        console.log(acc);
        return acc;
    },[]).join(',');
}