

function solve(data) {

    let juices = {};
    for(let line of data) {

        let args = line.split(" => ");
        let juiceName = args[0];
        let juiceQuantity = Number(args[1]);

       if(!juices.hasOwnPropery(juiceName)) {
            juices[juice] = 0;
       }
        
       juices[juice] += juiceQuantity;

       if(juices[juice] >= 1000) {

        let bottles = Math.floor(juices[juice] / 1000);
       }
        
    }

}

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);