const Employee = require("./Employee")


class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school

    }

    getRole(){
        return 'Intern'
    }
    getSchool(){
        return this.school
    }
}
const person = new Intern('joe', 4, 'joe@gmail.com', 'Kearns high' )
console.log(person)
module.exports = Intern