/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.*/

//TODO  RICUPERO DEGLI ELLEMENTI DAL DOM
const timer = document.getElementById('time-down');
const message = document.getElementById('message');
const random = document.getElementById('random');
const form = document.querySelector('form');
const numbersField = document.getElementById('numbers-field')
const inputFields = document.querySelectorAll('input');
const result = document.getElementById('result');
const btnEnvy = document.getElementById('envy');

//TODO FUNCTION
//Array con Numero Random
const getRandomNumbers = (min, max, totNumbers) => {
    const numbers = [];
    while(numbers.length < totNumbers){
      const randomNumbers = Math.floor(Math.random() * (max - min))+ 1; 
      if(!numbers.includes(randomNumbers)) numbers.push(randomNumbers);
    }
    return numbers;
  }

//Todo Primo passo
//Generare un numero random
let totNumbers = 5;
let max = 50;
let min = 1;

const numbers = getRandomNumbers(min , max,  totNumbers);
console.log(numbers);

// Stampare in paggina
let items = '';
for (let i = 0; i < numbers.length; i++){
    items += `<li>${numbers[i]}</li>`
}
random.innerHTML = items;

//creare un timeout
let seconds = 10;
timer.innerText = seconds;

const countDown = setInterval(() => {
    timer.innerText = --seconds;
    //TODO Finito il Time...
    if(seconds === 0){
        clearInterval(countDown);
        //Nascondere i numeri random
        random.classList.add('d-none');
        numbersField.classList.remove('d-none');
        message.innerText = 'Qualle sono i numeri?';
        }
}, 1000);

//Racogliere i numeri
form.addEventListener('submit', event => {
    event.preventDefault();
 const userNumbers = [];
 for(let i = 0; i < inputFields.length; i++){
    const input = inputFields[i];
    const value = parseInt(input.value);
  if(!isNaN(value) && value >= min && value <= max && !userNumbers.includes(value)){
    userNumbers.push(value);
  }
 }
 console.log(userNumbers);

 //controlare quanti elementi delle due array sono uguale
const correctNumbers = [];
for (let i = 0; i < userNumbers.length; i++){
    if(numbers.includes(userNumbers[i])) correctNumbers.push(userNumbers[i]);
}
console.log(correctNumbers);
//TODO OUTPUT
let message = `Hai indovinato ${correctNumbers.length} numeri. Numeri:<b>(${numbers})</b>. Risposta:<b>(${userNumbers})</b></b>`

 result.innerHTML = message;
})







