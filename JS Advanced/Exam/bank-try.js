
class Bank {

    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer (customer) {

        let currCustomer = this.allCustomers.find(c => c.personalId === customer.personalId);

        if(currCustomer !== undefined) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }
        else {
            this.allCustomers.push(customer);

            return customer;
        }
        
    }

    depositMoney (personalId, amount) {

let currCustomer = this.allCustomers.find(c => c.personalId === personalId);

if(currCustomer === undefined) {
    throw new Error('We have no customer with this ID!');
}
else {
    if(!currCustomer.hasOwnProperty('totalMoney')) {
        currCustomer['totalMoney'] = amount;
    } else {
        currCustomer['totalMoney'] += amount;
    }

    if(!currCustomer.hasOwnProperty('transactions')) {
        currCustomer['transactions'] = [];
    } 
        currCustomer['transactions'].push(`${currCustomer.firstName} ${currCustomer.lastName} made deposit of ${amount}$!`);
    
    return `${currCustomer['totalMoney']}$`;
}
    }

    withdrawMoney (personalId, amount) {
        let currCustomer = this.allCustomers.find(c => c.personalId === personalId);

        if(currCustomer === undefined) {
            throw new Error('We have no customer with this ID!');
        } else {
            if(currCustomer.totalMoney >= amount) {
                currCustomer.totalMoney -= amount;
                currCustomer['transactions'].push(`${currCustomer.firstName} ${currCustomer.lastName} withdrew ${amount}$!`);
                return `${currCustomer['totalMoney']}$`;
            } else {
                throw new Error(`${currCustomer.firstName} ${currCustomer.lastName} does not have enough money to withdraw that amount!`);
            }
        }
    }
    customerInfo (personalId) {
        let currCustomer = this.allCustomers.find(c => c.personalId === personalId);

        if(currCustomer === undefined) {
            throw new Error('We have no customer with this ID!');
        } else {
            let result = [];

            result.push(`Bank name: ${this._bankName}`);
            result.push(`Customer name: ${currCustomer.firstName} ${currCustomer.lastName}`);
            result.push(`Customer ID: ${currCustomer.personalId}`);
            result.push(`Total Money: ${currCustomer.totalMoney}$`);

            result.push(`Transactions:`);
            currCustomer.transactions.reverse();
            let counter = currCustomer.transactions.length;

            for(let t of currCustomer.transactions) {
                result.push(`${counter}. ${t}`);
                counter--;
            }
            

            return result.join('\n');

        }


    }




}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
