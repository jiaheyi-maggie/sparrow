// function that generates unique id for each categories
function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

const userinfo  = [
    {
        id: guidGenerator(),
        firstName: 'Maggie',
        lastName: 'Yi',
        firstNamePlaceholder: 'John',
        lastNamePlaceholder: 'Doe',
        username: '@genustori',
        usernamePlaceholder: '@johndoe07',
        email: 'maggieyi.official@gmail.com',
        emailPlaceholder: 'johndoe@gmail.com',
        password: '1234567',
        passwordPlaceholder: '...........'
    },
];

export default userinfo;