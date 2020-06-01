

function solve() {
    let x = {name: "John"};
    let y = x;

    y.name = "Kate";

    console.log(x.name);
}

solve();