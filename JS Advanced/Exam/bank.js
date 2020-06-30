

class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
        this.transactions = { };
    }

    newCustomer(customer) {

        let currentCustomer = this.allCustomers.find(c => c.personalId === customer.personalId);
        
        if(currentCustomer !== undefined) {
            throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} is already our customer!`);
        }

        this.allCustomers.push(customer);

        return customer;
    }

    depositMoney(personalId,amount) {
        let currentCustomer = this.allCustomers.find(c => c.personalId === personalId);

        if(currentCustomer === undefined) {
            throw new Error('We have no customer with this ID!');
        }
       
     
            if(!currentCustomer.hasOwnProperty('totalMoney')) {
                currentCustomer.totalMoney = amount;
            } else {
                currentCustomer.totalMoney += amount;
            }
            
            if(!this.transactions.hasOwnProperty(personalId)) {
                this.transactions[personalId] = [];
            } 
              this.transactions[personalId].push(`${currentCustomer.firstName} ${currentCustomer.lastName} made deposit of ${amount}$!`);
            
            
        
        
        return `${currentCustomer.totalMoney}$`;
    }

    withdrawMoney(personalId,amount) {
        let currentCustomer = this.allCustomers.find(c => c.personalId === personalId);
        if(currentCustomer === undefined) {
            throw new Error('We have no customer with this ID!');
        }

        if(currentCustomer.totalMoney < amount) {
            throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} does not have enough money to withdraw that amount!`);
        }

        if(!currentCustomer.hasOwnProperty('totalMoney')) {
            currentCustomer.totalMoney = amount;
        } else {
            currentCustomer.totalMoney -= amount;
        }

        if(!this.transactions.hasOwnProperty(personalId)) {
            this.transactions[personalId] = [];
        } 
          this.transactions[personalId].push(`${currentCustomer.firstName} ${currentCustomer.lastName} made deposit of ${amount}$!`);
        
        
       
        return `${currentCustomer.totalMoney}$`;

    }

    customerInfo(personalId) {
        let currentCustomer = this.allCustomers.find(c => c.personalId === personalId);
        if(currentCustomer === undefined) {
            throw new Error('We have no customer with this ID!');
        }

        let result = [];
        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${currentCustomer.firstName} ${currentCustomer.lastName}`);
        result.push(`Customer ID: ${currentCustomer.personalId}`);
        result.push(`Total Money: ${currentCustomer.totalMoney}$`);
        result.push('Transactions:');
        
        for(let key of Object.keys(this.transactions)) {
            if(key == currentCustomer.personalId) {
                let counter = this.transactions[key].length;
                let reversed = this.transactions[key].reverse();
                for(let value of reversed) {
                    
                    result.push(`${counter}. ${value}`);
                    counter--;
                }
            }       
            
        }
     
        
        return result.join('\n');
    }

}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
