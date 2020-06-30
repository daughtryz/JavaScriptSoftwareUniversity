

class ChristmasDinner {
    
    constructor(budget) {
        
        this.budget = budget;
        
        this.dishes = [];
        this.products = [];
        this.guests = {};
        this.guestsArray = [];
    }
    get budget() {
        return this._budget;
    }

    set budget(budget) {
        if(budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = budget;
    }
   
    shopping([...product]) {
        let type = product[0];
        let price = Number(product[1]);

        if(price > this.budget) {
            throw new Error('Not enough money to buy this product');
        } else {
            this.products.push(type);
            this.budget -= price;
            return `You have successfully bought ${type}!`;
        }
        

    }

    recipes(recipe) {
        let recipeName = recipe.recipeName;
        let productsList = recipe.productsList;
        let boolValues = [];
        let areAllContained = false;
        
        for(let prod of productsList) {
            if(this.products.includes(prod)) {
                boolValues.push(true);
            } else {
                boolValues.push(false);
            }
        }
        
        let sortedBool = boolValues.filter(t => t === false);
        
        if(sortedBool.length === 0) {
            areAllContained = true;
        }
        if(!areAllContained) {
            
            throw new Error('We do not have this product');
           
        } 
        this.dishes.push({recipeName,productsList});
        return `${recipeName} has been successfully cooked!`;
        

    }
    inviteGuests(name, dish) {
        let currentDish = this.dishes.find(d => d.recipeName === dish);
        let currentGuest = this.guestsArray.find(g => g.guestName === name);
        if(currentDish === undefined) {
            throw new Error('We do not have this dish');
        } else if(currentGuest !== undefined){
            throw new Error('This guest has already been invited');
        } else {
            let currentDishElements = this.dishes.find(c => c.recipeName === dish).productsList;
            this.guests = {guestName: name,dish,currentDishElements};
            this.guestsArray.push(this.guests);
            return `You have successfully invited ${name}!`;
        }
    }

    showAttendance() {
        
        let result = [];
        for(let guest of this.guestsArray) {
          
             result.push(`${guest.guestName} will eat ${guest.dish}, which consists of `+`${guest.currentDishElements.join(', ')}`);
           
        }

        return result.join('\n');
    }


}

let dinner = new ChristmasDinner(300);
dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');


console.log(dinner.showAttendance());