

import {Sail} from '../Sail';
import {Article} from '../Article';
import {Service} from '../Service';


test('must return 0 for a empty sail', () => {
    let mySail = new Sail([]);
    expect(mySail.getTotal()).toBe(0);
});

test('must return 2 for a sail of a article', () => {
    let milk = new Article('milk',2);
    let listOfProducts = [milk];
    let testSail = new Sail(listOfProducts);
    expect(testSail.getTotal()).toBe(2);
});

test('must return 3 for a sail of a service', () =>{
    let water = new Service('water',3);
    let listOfProducts = [water];
    let testSail = new Sail(listOfProducts);
    expect(testSail.getTotal()).toBe(3);
});

test('must return 5 for a sail of a service and a article', () =>{
    let water = new Service('water',3);
    let milk = new Article('milk',2);
    let listOfProducts = [water,milk];
    let testSail = new Sail(listOfProducts);
    expect(testSail.getTotal()).toBe(5);
});

