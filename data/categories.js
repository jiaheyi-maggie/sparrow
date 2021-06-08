
// function that generates unique id for each categories
function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

// Categories for the category selection page
const categories = [
    {
        id: guidGenerator(),
        title: 'Groceries',
        checked: false,
    },
    {
        id: guidGenerator(),
        title: 'Utilities',
        checked: false,
    },
    {
        id: guidGenerator(),
        title: 'Eating Out',
        checked: false,
    },
    {
        id: guidGenerator(),
        title: 'Rent',
        checked: false,
    },
    {
        id: guidGenerator(),
        title: 'Entertainment',
        checked: false,
    },
    {
        id: guidGenerator(),
        title: 'Gas/Transportation',
        checked: false,
    },
    {
        id: guidGenerator(),
        title: 'Insurance',
        checked: false,
    },
    {
        id: guidGenerator(),
        title: 'Debt',
        checked: false,
    },
  ];

  export default categories;