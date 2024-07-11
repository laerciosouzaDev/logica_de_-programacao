import leia from 'readline-sync'

import { exe01 } from './exe01.js';
import { exemple02 } from './exemple02.js';

var opcao = leia.keyInSelect(["Exercicio 01", "Exercicio 02"]) + 1;

switch(opcao){
    case 1: 
        exe01();
        break;
    case 2: 
        exemple02();
        break;
}