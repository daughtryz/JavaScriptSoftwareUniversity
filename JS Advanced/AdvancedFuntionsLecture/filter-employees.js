

function solve(data,criteriaInput) {

    let employees = [];
    let parsedData = JSON.parse(data);
    for(let line of parsedData) {
        let employeeData = line;
        employees.push(employeeData);

    }

    let filteredEmployees = employees.filter(e => givenCriteria(e,criteriaInput));

    let result = [];
    for(let i = 0;i<filteredEmployees.length;i++) {
        let fullName = filteredEmployees[i].first_name + ' ' + filteredEmployees[i].last_name;
        result.push(`${i}. ${fullName} - ${filteredEmployees[i].email}`);
    }

    function givenCriteria(employeeCriteria,criteriaInput) {
        let splittedInputCriteria = criteriaInput.split('-');
        let mainCriteria = splittedInputCriteria[1];
        
        return employeeCriteria[splittedInputCriteria[0]] === mainCriteria;
       
    
    }

    return result.join('\n');
}

console.log(solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 'gender-Female'));