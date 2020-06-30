

function solve(obj) {

    const result = Object.assign({},obj);
    
 
    if(result.dizziness === true) {
        result.levelOfHydrated += (result.weight/10) * result.experience;
        result.dizziness = false;
    }

    return result;

}

console.log(solve({ weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true }))