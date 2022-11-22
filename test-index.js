const Inquirer = require('inquirer');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');
const fs = require('fs');
const { type } = require('os');
const managerQuestions = [
    {
        type: 'input',
        message: `Please input Manager's Name:`,
        name: 'name'
    },
    {
        type: 'input',
        message: `Please input the Manager's ID: `,
        name: 'id',
    },
    {
        type: 'input',
        message: `Please input the Manager's Email: `,
        name: 'email',
    },
    {
        type: 'input',
        message: `Please input the Manager's Office Number: `,
        name: 'officeNumber',
    },
    {
        type: 'confirm',
        message: 'Would you like to add Teammates?',
        name: 'confirmAdd'
    },

]
const selectRole = [
    {
        type: 'list',
        message: 'Choose a role: ',
        name: 'teammateType',
        choices: ['Engineer','Intern'],
    }
]
const engineerQuestions = [
    {
        type: 'input',
        message: `Please input the Engineer's Name: `,
        name: 'name',
    },
    {
        type: 'input',
        message: `Please input the Engineer's ID: `,
        name: 'id',
    },
    {
        type: 'input',
        message: `Please input the Engineer's Email: `,
        name: 'email',
    },
    {
        type: 'input',
        message: `Please input the Engineer's GitHub Username: `,
        name: 'gitHub',
    },
    {
        type: 'confirm',
        message: 'Would you like to add a new Teammate?',
        name: 'confirmAdditional',
    }
]
const internQuestions = [
   
    {
        type: 'input',
        message: `Please input the Intern's Name: `,
        name: 'name',
    },
    {
        type: 'input',
        message: `Please input the Intern's ID: `,
        name: 'id',
    },
    {
        type: 'input',
        message: `Please input the Intern's Email: `,
        name: 'email',
    },
    {
        type: 'input',
        message: `Please input the Intern's School: `,
        name: 'school',
    },
    {
        type: 'confirm',
        message: 'Would you like to add a new Teammate?',
        name: 'confirmAdditional',
    }

];
const allAnswers = [];
const employeeDatabase = [];

startScript();

function startScript(){
    Inquirer.prompt(managerQuestions).then((answers)=>{
        answers.role = 'Manager'
        if(answers.confirmAdd){
            allAnswers.push(answers);
            addTeam(answers)
        }
        else{
            allAnswers.push(answers);
            createEmployee();

        }
    })   
}

function addTeam(){   
    Inquirer.prompt(selectRole).then((answers)=>{
        if(answers.teammateType === 'Engineer'){
            Inquirer.prompt(engineerQuestions).then((answers)=>{
                answers.role = 'Engineer';
                if(answers.confirmAdditional){
                    allAnswers.push(answers);
                    addTeam();
                }
                else{
                    allAnswers.push(answers);
                    createEmployee();
                }
            })
        }
        else if(answers.teammateType === 'Intern'){
            Inquirer.prompt(internQuestions).then((answers)=>{
                answers.role = 'Intern'
                if(answers.confirmAdditional){
                    allAnswers.push(answers);
                    addTeam();
                }
                else{
                    allAnswers.push(answers);
                    createEmployee();
                }
            })
        }
    })
}

function createEmployee(){
    for(let i = 0; i < allAnswers.length; i++){
        if(allAnswers[i].role === 'Manager'){
            const manager = allAnswers[i];
            const newManager = new Manager(manager.name, manager.id, manager.email, manager.officeNumber);
            employeeDatabase.push(newManager);
        }
        if(allAnswers[i].role === 'Engineer'){
            const engineer = allAnswers[i];
            const newEngineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.gitHub);
            employeeDatabase.push(newEngineer)
        }
        if(allAnswers[i].role === 'Intern'){
            const intern = allAnswers[i];
            const newIntern = new Intern(intern.name, intern.id, intern.email, intern.school);
            employeeDatabase.push(newIntern)
        }
    }
    createHTML();
}

function createHTML(){
    for(let i = 0; i < employeeDatabase.length; i++){
        if(employeeDatabase[i].getRole() === 'Manager'){
        }
        if(employeeDatabase[i].getRole() === 'Engineer'){
        }
        if(employeeDatabase[i].getRole() === 'Intern'){
        }
    }

}