/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.*/

//TODO  RICUPERO DEGLI ELLEMENTI DAL DOM
const timer = document.querySelector('h2');
const random = document.getElementById('random');
const numbersField = document.getElementById('numbers-field');
const result = document.getElementById('result');
const score = document.getElementById('score');

//Todo Primo passo
//Generare un numero random
let totNumbers = 6;
let max = 99;

const getRandomNumbers = (max, totNumbers) => {
    const numbers = [];
    while(numbers.length < totNumbers){
      const randomNumbers = Math.floor(Math.random() * max)+ 1; 
      if(!numbers.includes(randomNumbers)) numbers.push(randomNumbers);
    }
    return numbers;
  }

const numbers = getRandomNumbers(max , totNumbers);
random.innerText = (numbers[0] + ' ' + numbers[1] + ' ' + numbers[2] + ' ' + numbers[3] + ' ' + numbers[4] + ' ' + numbers[5] + ' ');


//creare un timeout
 
//TODO Finito il Time...
//Nascondere i numeri random

//Mostrare l'input e racogliere i numeri

//Paragonare i randomNumbers con i numbersField

//controlare quanti elementi delle due array sono uguale

//TODO OUTPUT






