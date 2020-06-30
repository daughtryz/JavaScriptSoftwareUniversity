

class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
       
    }

    subscribe(name, type) {
        if((type !== 'normal') && (type !== 'vip') && (type !== 'special')) {
            throw new Error(`The type ${type} is invalid`);
        }
        let currSub = this.subscribers.find(c => c.name === name);

        if(currSub === undefined) {
            let books = [];
            currSub = {name,type,books};
            
            this.subscribers.push(currSub);
        } else {
            currSub.type = type;
        }

        return currSub;


    }

    unsubscribe(name) {

    let currSub = this.subscribers.find(c => c.name === name);

    if(currSub === undefined) {
        throw new Error(`There is no such subscriber as ${name}`);
    } else if(currSub !== undefined){
        this.subscribers = this.subscribers.filter(c => c.name !== name);
       
    }

    return this.subscribers;


    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {


        let currSub = this.subscribers.find(c => c.name === subscriberName);

        if(currSub === undefined) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }

        if(currSub.type === 'normal') {
            let normalCalc = this.libraryName.length;
            if(currSub.books.length < normalCalc) {
                let bookObj = {title: bookTitle,author: bookAuthor};
                currSub.books.push(bookObj);
            } else  if(currSub.books.length >= normalCalc){
                throw new Error(`You have reached your subscription limit ${normalCalc}!`);
            }
            
        } else if(currSub.type === 'special') {
            let specialCalc = this.libraryName.length*2;
            if(currSub.books.length < specialCalc) {
                let bookObj = {title: bookTitle,author: bookAuthor};
                currSub.books.push(bookObj);
            } else if(currSub.books.length >= specialCalc){
                throw new Error(`You have reached your subscription limit ${specialCalc}!`);
            }
        } else if(currSub.type === 'vip') {
           
           
                let bookObj = {title: bookTitle,author: bookAuthor};
                currSub.books.push(bookObj);
            
        }

        return currSub;

    }

    showInfo () {
       
        if(this.subscribers.length === 0) {
            return `${this.libraryName} has no information about any subscribers`;
        }  
            let result = [];
            let str = '';
            for(let sub of this.subscribers) {     
                str += `Subscriber: ${sub.name}, Type: ${sub.type}\n`;
                if(sub.books.length !== 0) {
                    str += `Received books: `;
                    for(let book of sub.books) {
                            str += `${book.title} by ${book.author}, `;
                        
                        
                    }
                    str = str.substr(0,str.length-2);
                    str+= '\n';
                }   
                
            }
            return str;
         
            
        }

    }


    let lib = new Library('Lib');
    lib.subscribe('Peter', 'normal');
    
    console.log(lib.showInfo());
    