const Employee = require("./Employee")


class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github

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
    getGithub(){
        return this.github
    }
    getRole(){
        return 'Engineer'
    }
}





module.exports = Engineer