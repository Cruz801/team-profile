const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber){

        super(name, id, email);
        this.officeNumber = officeNumber
    }

    getname(){
        return this.name
    }
    getemail(){
        return this.email
    }
    getid(){
        return this.id
    }
    getRole(){
        return 'Manager'
    }
}
// const manager = new Manager('bill', 1, 'bill@bill.com', 340)
// console.log(manager)
module.exports = Manager