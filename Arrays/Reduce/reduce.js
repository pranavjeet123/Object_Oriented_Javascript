const lineItems = [
    { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
    { description: 'Cheese', quantity: 0.5, price: 5, total: 2.5 },
    { description: 'Butter', quantity: 2, price: 6, total: 12 }
];


lineItems.reduce((sum, li) => sum + li.total, 0);

/**
 * Use Map function to get individual totals and then reduce
 * Why is this second approach better? 
 * Because you can abstract out the reducer into a function sum(), and reuse it wherever you need to sum up an array.
 */

lineItems.map(li => li.total).reduce((sum, val) => sum + val, 0);