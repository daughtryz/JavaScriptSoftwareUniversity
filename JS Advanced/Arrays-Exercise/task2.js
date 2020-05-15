

function solve(arr) {
let step = Number(arr[arr.length-1]);
const newArr = arr.slice(0,arr.length-1);

for(let i =0;i< newArr.length;i+=step) {
    console.log(newArr[i]);
}


}

solve(['dsa',
'asd', 
'test', 
'tset', 
'2']
);