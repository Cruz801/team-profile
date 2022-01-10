const inquirer = require('inquirer')
const generateHTML = require('./src/generateHTML')
const fs = require("fs")

const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")



const employees = []
const promptUser = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'Name of Employee? (Required)',
            validate: titleInput => {
                if(titleInput){
                    return true
                } else{
                    console.log('Please enter Manager Name')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's id? (required)",
            validate: idInput => {
                if(idInput){
                    return true
                } else {
                    console.log("Please enter employee id")
                    return false
                }
            } 
        },
        {
            type: 'input',
            name: "email",
            message: "Employee's email? (required)",
            validate: emailInput => {
                if(emailInput){
                    return true
                } else {
                    console.log('Enter email')
                    return false
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "What is employee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        },


        {
            type: 'input',
            name: 'github',
            message: "Please enter employee's github",
            when: (input) => input.role === 'Engineer',
            validate: githubInput => {
                if (githubInput){
                    return true
                } else {
                    console.log("Please enter github")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school was attended',
            when: (input) => input.role === 'Intern',
            validate: schoolInput => {
                if(schoolInput){
                    return true
                } else {
                    console.log("Please enter School")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Managers officenumber?',
            when: (input) => input.role === 'Manager',
            validate: officeNumberInput => {
                if(officeNumberInput) {
                    return true
                } else {
                    console.log("Please enter Officenumber")
                    return false
                }
            }
        }
    ])
}
//as a user what prompts do you watn to see first
// function init();
promptUser();