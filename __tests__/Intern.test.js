const Intern = require('../lib/Intern');






test("gets intern object", () => {
    const intern = new Intern('Dave', 4, 'jon@jsyaml.gmail.com', 'Kearns High');

    expect(intern).toHaveProperty('name');
    expect(intern).toHaveProperty('id');
    expect(intern).toHaveProperty('email');
    expect(intern).toHaveProperty('school');
})