

function solve(arr) {

    
    arr.sort((a,b) => {
        var aConverted = a.toUpperCase(); 
        var bConverted = b.toUpperCase();
        if(a.length - b.length !== 0) {
            return a.length - b.length;
        } else if(a.length - b.length === 0) {
            if(aConverted > bConverted) {
                return 1;
            }
            return -1;
        }
    });

    console.log(arr.join('\n'));
}



solve(['test', 
'Deny', 
'omen', 
'Default']
);