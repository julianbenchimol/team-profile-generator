const Intern = require('../lib/intern.js');

describe('Intern', ()=>{
    it('Creates an intern with a name, id, and email attribute', ()=>{
        const obj = new Intern();

        expect ('name' in obj).toEqual(true);
        expect('id' in obj).toEqual(true);
        expect('email' in obj).toEqual(true);
    })
    it('Should return with the name of the intern using the method', ()=>{
        const obj = new Intern('Julian', 12, 'test@test.com', 'testSchool');
        const name = 'Julian';

        expect(obj.getName()).toEqual(name);
    })
    it('Should return with the ID of the intern using the method', ()=>{
        const obj = new Intern('Julian', 12, 'test@test.com', 'testSchool');
        const id = 12;

        expect(obj.getId()).toEqual(id);
    })
    it('Should return with the email of the intern using the method', ()=>{
        const obj = new Intern('Julian', 12, 'test@test.com', 'testSchool');
        const email = 'test@test.com';

        expect(obj.getEmail()).toEqual(email);
    })
    it('Should return with the school of the intern using the methood', ()=>{
        const obj = new Intern('Julian', 12, 'test@test.com', 'testSchool');
        const school = 'testSchool';

        expect(obj.getSchool()).toEqual(school);
    })
    it('Should return with "Intern" when calling the role of the employee', ()=>{
        const obj = new Intern();
        const role = 'Intern';

        expect(obj.getRole()).toEqual(role);
    })
})