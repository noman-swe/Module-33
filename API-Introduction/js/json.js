const user = { id:01, name: 'Gorib Amir',  job: 'Actor' };
const stringified = JSON.stringify(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    profit: 1500,
    products: ['laptop', 'pepsi', 'chips'],
    owner: {
        name:'Alia Vaat', profession: 'Actor',
    },
    isExpensive: false,
}

const shopStringified = JSON.stringify(shop);
console.log(shopStringified);
// console.log(shop);

// convert a stringify
const converted = JSON.parse(shopStringified);
console.log(converted);
console.log(converted.owner);



