const Engineer = require('../lib/Engineer');






test("gets engineer object", () => {
    const engineer = new Engineer('Dave', 4, 'jon@jsyaml.gmail.com, testgit');

    expect(engineer).toHaveProperty('name');
    expect(engineer).toHaveProperty('id');
    expect(engineer).toHaveProperty('email');
    expect(engineer).toHaveProperty('github')
})