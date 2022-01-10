class Employee {
    constructor(name, id, email,){
        this.name = name
        this.id = id
        this.email = email

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
        return 'Employee'
    }
}

module.exports = Employee