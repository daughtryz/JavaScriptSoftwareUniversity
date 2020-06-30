

function solve(name,age,weight,height) {

    let personName = name;
    let personAge = age;
    let personWeight = weight;
    let personHeight = height;
    let BMI =  Math.round((personWeight) / (Math.pow((personHeight/100),2)));
    let status = '';
    
        if(BMI < 18.5) {
            status = 'underweight';
        } else if(BMI < 25) {
            status =  'normal';
        } else if(BMI < 30) {
            status = 'overweight';
        } else {
           status = 'obese';
        }

       let personalInfo = {
        age: personAge,
                weight: personWeight,
               height: personHeight
       };
     let recommendation = '';
    if(status === 'obese') {
         recommendation = 'admission required';
        return {
            name,
            personalInfo,
            BMI,
            status,
            recommendation
    
        };
    }
  
    recommendation = undefined;
    return {
        name,
        personalInfo,
        BMI,
        status,
        recommendation

    };
    
}


console.log(solve('Peter', 29, 75, 182));