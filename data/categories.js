
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
    },
    {
        id: guidGenerator(),
        title: 'Utilities',
    },
    {
        id: guidGenerator(),
        title: 'Eating Out',
    },
    {
        id: guidGenerator(),
        title: 'Rent',
    },
    {
        id: guidGenerator(),
        title: 'Entertainment',
    },
    {
        id: guidGenerator(),
        title: 'Gas/Transportation',
    },
    {
        id: guidGenerator(),
        title: 'Insurance',
    },
    {
        id: guidGenerator(),
        title: 'Debt',
    },
  ];

  export default categories;