

import {Sail} from '../Sail';
import {Article} from '../Article';
import {Service} from '../Service';


test('must return 0 for a empty sail', () => {
    let mySail = new Sail([]);
    expect(mySail.getTotal()).toBe(0);
});

test('must return 2 for a sail of a article', () => {
    let milk = new Article('milk',2);
    let listOfPrices = [milk.price];
    let testSail = new Sail(listOfPrices);
    expect(testSail.getTotal()).toBe(2);
});

test('must return 3 for a sail of a service', () =>{
    let water = new Service('water',3);
    let listOfPrices = [water.price];
    let testSail = new Sail(listOfPrices);
    expect(testSail.getTotal()).toBe(3);
});

test('must return 5 for a sail of a service and a article', () =>{
    let water = new Service('water',3);
    let milk = new Article('milk',2);
    let listOfPrices = [water.price,milk.price];
    let testSail = new Sail(listOfPrices);
    expect(testSail.getTotal()).toBe(5);
});

test('must return 6 for 3 articles like milk', () =>{
    let milkPrice = new Article('milk',2).howMuchFor(3);
    let listOfPrices = [milkPrice];
    let testSail = new Sail(listOfPrices);
    expect(testSail.getTotal()).toBe(6);
});

test('must return 18 for 3 services like water', () =>{
    let waterPrice = new Service('water',3).howMuchFor(3);
    let listOfPrices = [waterPrice];
    let testSail = new Sail(listOfPrices);
    expect(testSail.getTotal()).toBe(18);
});

test('must return 24 for 3 services like water and 3 articles like milk', () =>{
    let waterPrice = new Service('water',3).howMuchFor(3);
    let milkPrice = new Article('milk',2).howMuchFor(3);
    let listOfPrices = [waterPrice,milkPrice];
    let testSail = new Sail(listOfPrices);
    expect(testSail.getTotal()).toBe(24);
});







