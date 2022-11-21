const Engineer = require('../lib/engineer.js');

describe('Engineer', ()=>{
    it('Creates an engineer with a name, id, and email attribute', ()=>{
        const obj = new Engineer();

        expect ('name' in obj).toEqual(true);
        expect('id' in obj).toEqual(true);
        expect('email' in obj).toEqual(true);
    })
    it('Should return with the name of the manager using the method', ()=>{
        const obj = new Engineer ('Julian', 12, 'test@test.com', 'testGithub');
        const name = 'Julian';

        expect(obj.getName()).toEqual(name);

    })
    it('Should return with the ID of the manager using the method', ()=>{
        const obj = new Engineer ('Julian', 12, 'test@test.com', 'testGithub');
        const id = 12;

        expect(obj.getId()).toEqual(id);

    })
    it('Should return with the email of the manager using the method', ()=>{
        const obj = new Engineer ('Julian', 12, 'test@test.com', 'testGithub');
        const email = 'test@test.com';

        expect(obj.getEmail()).toEqual(email);

    })
    it('Should return with the office number of the manager using the method', ()=>{
        const obj = new Engineer ('Julian', 12, 'test@test.com', 'testGithub');
        const gitHub = 'testGithub';

        expect(obj.getGithub()).toEqual(gitHub);

    })
    it('Should return "manager" when using the getRole method', ()=>{
        const obj = new Engineer();
        const role = 'Engineer';

        expect(obj.getRole()).toEqual(role);
    })
})