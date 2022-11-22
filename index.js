//runs the application
const Inquirer = require('inquirer');
const Employee = require('./lib/employee.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');
const fs = require('fs');

//Asks questions to the user to gather info
Inquirer
  .prompt([
    {
        type: 'list',
        message: 'Add a Teammate',
        name: 'teammateType',
        choices: ['Manager','Engineer','Intern'],
    },
    //Start Manger Input
    {
        type: 'input',
        message: `Please input the Manager's Name: `,
        name: 'managerName',
        when: (answers) => answers.teammateType === 'Manager'
    },
    {
        type: 'input',
        message: `Please input the Manager's ID: `,
        name: 'managerID',
        when: (answers) => answers.teammateType === 'Manager'
    },
    {
        type: 'input',
        message: `Please input the Manager's Email: `,
        name: 'managerEmail',
        when: (answers) => answers.teammateType === 'Manager'
    },
    {
        type: 'input',
        message: `Please input the Manager's Office Number: `,
        name: 'managerOfficeNumber',
        when: (answers) => answers.teammateType === 'Manager'
    },
    //End Manager Input
    //Start Engineer Input
    {
        type: 'input',
        message: `Please input the Engineer's Name: `,
        name: 'egineerName',
        when: (answers) => answers.teammateType === 'Engineer'
    },
    {
        type: 'input',
        message: `Please input the Engineer's ID: `,
        name: 'engineerId',
        when: (answers) => answers.teammateType === 'Engineer'
    },
    {
        type: 'input',
        message: `Please input the Engineer's Email: `,
        name: 'engineerEmail',
        when: (answers) => answers.teammateType === 'Engineer'
    },
    {
        type: 'input',
        message: `Please input the Engineer's GitHub Username: `,
        name: 'engineerGitHub',
        when: (answers) => answers.teammateType === 'Engineer'
    },
    //End Engineer Input
    //Start Intern Input
    {
        type: 'input',
        message: `Please input the Intern's Name: `,
        name: 'internName',
        when: (answers) => answers.teammateType === 'Intern'
    },
    {
        type: 'input',
        message: `Please input the Intern's ID: `,
        name: 'internId',
        when: (answers) => answers.teammateType === 'Intern'
    },
    {
        type: 'input',
        message: `Please input the Intern's Email: `,
        name: 'internEmail',
        when: (answers) => answers.teammateType === 'Intern'
    },
    {
        type: 'input',
        message: `Please input the Intern's School: `,
        name: 'internSchool',
        when: (answers) => answers.teammateType === 'Intern'
    },
    //End Intern Input
  ])
  .then(answers =>{
    createTeammate(answers);
})

//creates the teammates using the constructors depending on the teammateType
function createTeammate(answers){
    if(answers.teammateType === 'Manager'){
        const newManager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
        createHtml(newManager);
    }
    else if(answers.teammateType === 'Engineer'){
        const newEngineer = new Engineer(answers.egineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
        createHtml(newEngineer);
    }
    else if(answers.teammateType === 'Intern'){
        const newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        createHtml(newIntern);
    }
}

//Creates the HTML document, 'test.html' and assigns values to 'card' depending on the employee type
function createHtml(employee){
    const markup = `<!DOCTYPE html>
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
            <div class = "row" id = "main-row">
                <div class = "col"></div>
            </div>
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

    //creates the test HTML file
    fs.writeFile('test.html', markup, (err) =>
    err ? console.error(err) : console.log('Test HTML made!'));

    //if the role is manager, sets the card data to fit the object
    if(employee.getRole() === 'Manager'){
        const card = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employee.getName()}</h5>
          <p class="card-text">Role: ${employee.getRole()}\n ID: ${employee.getId()}\n Email: <a href = "mailto: ${employee.getEmail()}">Send Email</a>\n Office Number: ${employee.getOfficeNumber()}</p>
        </div>
      </div>`
        //calls the addCard Function with the card variable as a parameter
        addCard(card);
    }
    //if the role is Intern, sets the card data to fit the object
    else if (employee.getRole() === 'Intern'){
        const card = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employee.getName()}</h5>
          <p class="card-text">Role: ${employee.getRole()}\n ID: ${employee.getId()}\n Email: <a href = "mailto: ${employee.getEmail()}">Send Email</a>\n School: ${employee.getSchoool()}</p>
        </div>
      </div>`
    //   addCard(card);

    }
    //if the role is Engineer, sets the card data to fit the object
    else if(employee.getRole() === 'Engineer'){
        const card = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employee.getName()}</h5>
          <p class="card-text">Role: ${employee.getRole()}\n ID: ${employee.getId()}\n Email: <a href = "mailto: ${employee.getEmail()}">Send Email</a>\n GitHub: <a href = "https://github.com/${employee.getGithub()}>GitHub Profile </a></p>
        </div>
      </div>`
    //   addCard(card);
    }

}
//Adds the card from createHtml to the file using node file system
function addCard(employeeCard){
    //reads the current index.html and saves it as 'old markup'
    fs.readFile('dist/index.html', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        //saves the old markup data in a varibale
        const oldMarkup = data;
        //writes the old markup data to a new file to store
        fs.writeFile('oldData.html', oldMarkup, function (err, data){
            if(err) {return console.log(err)}
            console.log("Old Markup Saved")
        });
        //new markup with the card being added
        const newMarkup = `<!DOCTYPE html>
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
                <div class = "row" id = "main-row">
                    <div class = "col">
                    ${employeeCard}
                    </div>
                </div>
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
      });
}
