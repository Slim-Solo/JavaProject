/*
Animal:
    Pet:
        - Dog
        - Cat
        - Hamster
    Bird:
        - Parrot
        - Hummingbird
        - Eagle
    Fish:
        - Shark
        - Dophin
        - Tuna
        - Pike
*/

import { Dog } from "./js/Dog.js";
import { Cat } from "./js/Cat.js";
import { Hamster } from "./js/Hamster.js";
import { Pike } from "./js/Pike.js";
import { Shark } from "./js/Shark.js";

const rex = new Dog('Rex', 'black');
const rainis = new Cat ('Rainis', 'mixed');
const keksas = new Hamster ('Keksas', 'brown');

console.log(rex);
console.log(rainis);
console.log(keksas);

const antanas = new Shark('Antanas');
const lydeka = new Pike('Lydeka');