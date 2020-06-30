function personAndTeacher() {

    
    class Person {
        constructor(name,email) {
            this.name = name;
            this.email = email;
 
        }
        toString() {
            const className = Object.getPrototypeOf(this).constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }
 class Teacher extends Person{
     constructor(name,email,subject) {
         super(name,email);
         this.subject = subject;
     }
     toString() {
         const parentString = super.toString();
         return `${parentString.substr(0,parentString.length-1)}, subject: ${this.subject})`;
     }
    }
    class Student extends Person{
        constructor(name,email,course) {
            super(name,email);
            this.course = course;
        }
        toString() {
            const parentString = super.toString();
            return `${parentString.substr(0,parentString.length-1)}, course: ${this.course})`;
        }
    }
     return {
         Person,
         Teacher,
         Student
     }
 }
 