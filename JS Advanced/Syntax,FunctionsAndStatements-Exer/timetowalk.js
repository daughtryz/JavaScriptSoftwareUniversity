

function solve(arg1,arg2,arg3) {
    let steps = Number(arg1);
    let meters = Number(arg2);
    let speed = Number(arg3);

    let distanceMeters = steps * meters;
  let speedMetersSec = speed / 3.6;
  let time = distanceMeters / speedMetersSec;
  let rest = Math.floor(distanceMeters / 500);

  let timeMin = Math.floor(time / 60);
  let timeSec = Math.round(time - (timeMin * 60));
  let timeHr = Math.floor(time / 3600);

  console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);
}

solve(4000, 0.60, 5);