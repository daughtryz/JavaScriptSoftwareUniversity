

function pressHouse() {


    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;

        }

        toString() {
            return [`Title: ${this.title}`,
            `Content: ${this.content}`].join('\n');
        }

    }

    class ShortReports extends Article {


        constructor(title,content,originalResearches) {
            if(content.length > 150) {
                throw new Error('Short reports content should be less then 150 symbols.')
            } else if(!originalResearches.hasOwnProperty('title') || !originalResearches.hasOwnProperty('author')) {
                throw new Error('The original research should have author and title.');
            }
            super(title,content);
            this.originalResearches = originalResearches;
            this.comments = [];

        }

        addComment(comment) {
            this.comments.push(comment);
            return 'The comment is added.';
        }

        toString() {
            if(this.comments.length === 0) {
                return super.toString() + '\n' + `Original Research: ${this.originalResearches.title} by ${this.originalResearches.author }`;
            }
            else {
                return super.toString() + '\n' + `Original Research: ${this.originalResearches.title} by ${this.originalResearches.author }` + '\n' + 'Comments:\n'+this.comments.join('\n');
            }

            
            
        }

    }

    class BookReview extends Article{
        constructor(title, content, book) {
            super(title,content);

            this.book = book;
            this.clients = [];
        }

        addClient(clientName,  orderDescription) {

            let currClient = this.clients.find(c => c.clientName === clientName && c.orderDescription === orderDescription);

            if(currClient !== undefined) {
                throw new Error('This client has already ordered this review.');
            } else {

                this.clients.push({
                    clientName,
                    orderDescription
                });

                return `${ clientName } has ordered a review for ${ this.book.name }`;

            }
           
        }

        toString() {
            if(this.clients.length === 0) {
                return super.toString() + '\n' + `Book: ${ this.book.name }`;
            }
            let result = [];
            this.clients.forEach(el => result.push(`${el.clientName} - ${el.orderDescription}`));
            return super.toString() + '\n' + `Book: ${ this.book.name }` + '\n' + 'Orders:\n' + result.join('\n');
            
        }

    }


    return {
        Article,
        ShortReports,
        BookReview
    }
}

let classes = pressHouse();
let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
console.log(lorem.toString()); 

let short = new classes.ShortReports("SpaceX and Javascript", "Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", { title: "Dragon 2", author: "wikipedia.org" });
console.log(short.addComment("Thank god they didn't use java."))
short.addComment("In the end JavaScript's features are executed in C++ — the underlying language.")
console.log(short.toString()); 

let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", { name: "The Great Gatsby", author: "F Scott Fitzgerald" });
console.log(book.addClient("The Guardian", "100 symbols"));
console.log(book.addClient("Goodreads", "30 symbols"));
console.log(book.toString()); 
