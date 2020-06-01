

function solve(dataJson) {

    let stringBuilder = "";
    stringBuilder += "<table>\n";
    
    for(let lineJson of dataJson) {
        
        
        let json = JSON.parse(lineJson);
        
        stringBuilder += "\t<tr>\n";

        stringBuilder += `\t\t<td>${json.name}</td>\n`;
        stringBuilder += `\t\t<td>${json.position}</td>\n`;
        stringBuilder += `\t\t<td>${json.salary}</td>\n`;
        stringBuilder += "\t</tr>\n";
       
        
    }

    stringBuilder += "</table>";
    console.log(stringBuilder);
}


solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']);