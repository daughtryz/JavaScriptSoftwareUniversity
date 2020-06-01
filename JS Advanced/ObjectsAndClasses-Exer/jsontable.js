

function solve(input) {

    const arr = [];
    for(let line of input) {
        let data = JSON.parse(line);
        //console.log(data);
        arr.push(`\t<tr>\n\t\t<td>${data.name}</td>\n\t\t<td>${data.position}</td>\n\t\t<td>${data.salary}</td>\n\t</tr>`)
    }
    console.log('<table>');
console.log(arr.join('\n'));
    console.log('</table>');
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']);