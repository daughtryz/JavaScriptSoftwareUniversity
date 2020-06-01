function solve(arr) {

    let properties = arr[0].split(' | ');
    let town = properties[0].split(' ')[1];
    let latitude = properties[1];
    let longtitude = properties[2].split(' ')[0];
    const arrRes = [];

    const filteredArr = arr.slice(1);

    for(const line of filteredArr) {
        let innerLines = line.split(' | ');
        let obj = {};
      
            let townValue = innerLines[0].split(' ')[1];
            let latitudeValue = Number(innerLines[1]) == 0 ? 0 : Number(innerLines[1]).toFixed(2)
            let longtitudeValue = Number(innerLines[2].split(' ')[0]) == 0 ? 0 : Number(innerLines[2].split(' ')[0]).toFixed(2);

            obj[town] = townValue;
            obj[latitude] = latitudeValue;
            obj[longtitude] = longtitudeValue;
          
            
           
        
        
        arrRes.push(obj);
    }
    console.log(JSON.stringify(arrRes));


}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);