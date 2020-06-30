

class VeterinaryClinic {
    
    constructor (clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = { };
        this.totalProfit = 0;
        this.currentWorkload = '';
        //this.ownerObj = {'name':''};
        this.petObj = {};
       
        this.clinicObj = {};
    }

    newCustomer(ownerName, petName, kind, procedures) {

        let clientsLength = Object.keys(this.clients).length;
        if(clientsLength >= this.capacity) {
            throw new Error('Sorry, we are not able to accept more patients!');
        }
        kind = kind.toLowerCase();
        
        if(!this.clients.hasOwnProperty(ownerName)) {
            
            this.clients[ownerName] = [];
        }
        let currentPet = this.clients[ownerName].find(p => p.petName === petName);

        if(currentPet !== undefined && currentPet.procedures.length === procedures.length) {
            throw new Error(`This pet is already registered under ${ ownerName } name! ${ petName } is on our lists, waiting for ${currentPet.procedures.join(', ')}.`);
        }

        this.petObj = {petName,kind,procedures};
        //this.ownerObj.name = ownerName;
        this.clients[ownerName].push(this.petObj);
        
        
        //this.clients.push(this.ownerObj);

        return `Welcome ${petName}!`;
    }

    onLeaving (ownerName, petName) {
       
        let currentOwnerName = Object.keys(this.clients).find(k => k === ownerName);
        //let test = this.clients[ownerName];
        let currentPet = this.clients[ownerName].find(p => p.petName === petName);
        if(currentOwnerName === undefined) {
            throw new Error('Sorry, there is no such client!');
        }

        
        if( currentPet === undefined || currentPet.procedures.length === 0) {
            throw new Error(`Sorry, there are no procedures for ${ petName }!`);
        }
        let clinicSum =  500;
        if(currentPet !== undefined) {
            currentPet.procedures = [];
        }
        
        if(!this.clinicObj.hasOwnProperty(this.clinicName)) {
            this.clinicObj[this.clinicName] = 0;
        }
        this.clinicObj[this.clinicName] += clinicSum;
        return `Goodbye ${ petName }. Stay safe!`;
    }

    toString () {
        let result = [];
        let counter = 0;
        //let count = Object.keys(this.clients).forEach(k => {if(this.clients[k].procedures.length > 0){counter++}});

        for(let k of Object.keys(this.clients)) {

            for(let p of this.clients[k]) {
                if(p.procedures.length > 0) {
                    counter++;
                }
            }
        }
        let percentage = (counter / this.capacity) * 100;
        percentage = Math.floor(percentage);
        result.push(`SoftCare is ${percentage}% busy today!`);
        result.push(`Total profit: ${ this.clinicObj[this.clinicName].toFixed(2)}$`);

        for(let clientKey of Object.keys(this.clients).sort((a,b) => a.localeCompare(b))) {

            result.push(`${clientKey} with:`);
            for(let pet of this.clients[clientKey].sort((a,b) => a.petName.localeCompare(b.petName))) {

                if(pet.procedures.length <= 0) {
                    result.push(`---${pet.petName} - a ${pet.kind} that needs: `);
                } else {
                    result.push(`---${pet.petName} - a ${pet.kind} that needs: ${pet.procedures.join(', ')}`);
                }
            }
        }
        return result.join('\n');
    }
    

}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])); 
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']); 
console.log(clinic.toString());

