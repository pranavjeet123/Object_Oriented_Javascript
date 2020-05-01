const items = [
    { id: 1, name: 'Super Burger', price: 50, spicy: true },
    { id: 2, name: 'French Fries', price: 30, spicy: false },
    { id: 1, name: 'Masala chai', price: 40, spicy: false }
];

const halfOfFries = items.map((item) => {

    if (item.id === 1) {
        return {
            ...item,
            price: item.price / 2
        };
    }
    return item;
});
console.log(halfOfFries);
