

class Company {

    constructor() {
        this.departments = [];
    }

    addEmployee(username,salary,position,department) {

        if(username === null || username === undefined || username === '') {
            throw new Error('Invalid input!');
        }
       
        if(position === null || position === undefined || position === '') {
            throw new Error('Invalid input!');
        }

        if(department === null || department === undefined || department === '') {
            throw new Error('Invalid input!');
        }
        
        if(salary < 0 || salary === '' || salary === undefined || salary === null) {
            throw new Error('Invalid input!');
        }

       
        let currentDepartment = this.departments.find(d => d.departmentName === department);

        if(currentDepartment === undefined) {
            currentDepartment = {
                departmentName: department,
                employees: []
            };
            this.departments.push(currentDepartment);
        } 
            currentDepartment.employees.push({username,salary,position});
            
        
        
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        const best = this.departments.map(d => {
            let average = 0;
            let sum = 0;
            const dep = {
                departmentName: d.departmentName,
                employees: d.employees
            };

            for(let i = 0;i < dep.employees.length;i++) {
                sum += dep.employees[i].salary;
            }
            average = sum / dep.employees.length;
            dep.avg = average;

            return dep;
        }
            );
            let result = [];
            let sortedDepartments = best.sort((a,b) => b.avg - a.avg);
           

            let bestDep = sortedDepartments[0];
           
        if(bestDep !== undefined) {
            let sortedEmployees = bestDep.employees.sort((a,b) => b.salary - a.salary || a.username.localeCompare(b.username));
            result.push(`Best Department is: ${bestDep.departmentName}`);
            result.push(`Average salary: ${bestDep.avg.toFixed(2)}`);

            for(let employee of sortedEmployees) {
                result.push(`${employee.username} ${employee.salary} ${employee.position}`);
            }
        }
            

            return result.join('\n');

    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
