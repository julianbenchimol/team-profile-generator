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
    const markdownTop = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- Default Head Tags -->
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <!-- Bootstrap Stylesheet Connection -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <!-- Default Stylesheet Connection -->
        <link rel="stylesheet" href="style.css" />
        <title>Insert Title Here</title>
      </head>
    
      <body>
        <!-- Body Elements Go Here -->
        <div class = "container">
        <div class = "row" id = "main-row">`

    const markdownBot = `</div>
    </div>


    <div>
        <!-- JQuery Connection -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>

        <!-- Bootstrap JS connection -->
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"></script>

        <!-- Main Script Connection -->
        <script type = "text/javascript" src = "../index.js"></script>
    </div>

  </body>
        </html>`

    fs.writeFile('dist/index.html', markdownTop, function(err, data){
        if(err){console.log(err)}
        console.log("HTML Top created")
    });

    for(let i = 0; i < employeeDatabase.length; i++){
        if(employeeDatabase[i].getRole() === 'Manager'){
            const employee = employeeDatabase[i];

            const card =
            `<div class = "col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${employee.getName()}</h5>
                        <p class="card-text">
                        <p class = "d-block">Role: ${employee.getRole()}</p>
                        <p class = "d-block">ID: ${employee.getId()}</p>
                        <p class = "d-block">Email: <a href = "mailto: ${employee.getEmail()}">Send Email</a></p> 
                        <p class = "d-block">Office Number: ${employee.getOfficeNumber()}</p>
                        </p>
                    </div>
                </div>
            </div>`

            fs.appendFile('dist/index.html', `${card}\n`, function(err, data){
                if(err){console.log(err)}
                console.log("Manager Card made Successfully")
                })
        }
        if(employeeDatabase[i].getRole() === 'Engineer'){
            const employee = employeeDatabase[i];

            const card = 
            `<div class = "col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${employee.getName()}</h5>
                        <p class="card-text">
                            <p class = "d-block">Role: ${employee.getRole()}</p> 
                            <p class = "d-block">ID: ${employee.getId()}</p>
                            <p class = "d-block">Email: <a href = "mailto: ${employee.getEmail()}">Send Email</a></p>
                            <p class = "d-block">GitHub: <a href = "https://github.com/${employee.getGithub()}">GitHub Profile</a> </p>
                        </p>
                    </div>
                </div>
            </div>`

          fs.appendFile('dist/index.html', `${card}\n`, function(err, data){
            if(err){console.log(err)}
            console.log("Engineer Card made Successfully")
            });

        }
        if(employeeDatabase[i].getRole() === 'Intern'){
            const employee = employeeDatabase[i];
            const card = 
            `<div class = "col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${employee.getName()}</h5>
                        <p class="card-text">
                        <p class = "d-block">Role: ${employee.getRole()}</p>
                        <p class = "d-block">ID: ${employee.getId()}</p>
                        <p class = "d-block">Email: <a href = "mailto: ${employee.getEmail()}">Send Email</a></p> 
                        <p class = "d-block">School: ${employee.getSchool()}</p>
                        </p>
                    </div>
                </div>
            </div>`
          fs.appendFile('dist/index.html', `${card}\n`, function(err, data){
            if(err){console.log(err)}
            console.log("Intern Card made Successfully")
            })
        }

    }
    fs.appendFile('dist/index.html', markdownBot, function(err, data){
        if(err){console.log(err)}
        console.log("HTML Bot created")
    });

}