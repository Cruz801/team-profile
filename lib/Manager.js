const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber){

        super(name, id, email);
        this.officeNumber = officeNumber
    }

    getRole(){
        return 'Manager'
    }
    getOfficeNumber(){
        return this.officeNumber
    }
}
// const manager = new Manager('bill', 1, 'bill@bill.com', 340)
// console.log(manager)
module.exports = Manager