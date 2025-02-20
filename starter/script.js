import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
console.log('Importing module');

// addToCart('bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5)

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('water', 1);
add('beer', 20);

console.log(cart);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');

// const data = await res.json();
// console.log(data);
/*
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// lastPost.then(last => console.log(last));
const lastPost2 = await getLastPost();
console.log(lastPost2);
*/
//import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const deividas = new Person('Deividas');
