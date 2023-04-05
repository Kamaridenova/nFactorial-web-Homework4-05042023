// Ex.1

const age = prompt("How old are you?");

function checkAge(age){
    let check = (age > "18") ? (alert("Ok")) :
        (confirm("Родители точно разрешили?")) ? (alert("Ok")):
         false;
}

checkAge(age);

// Ex.2

function pow(x, n){
    let result = x;
    for(let i = 1; i< n; i++){
        result *= x;
    }
    return result;
}
 let x = prompt("Set x");
 let n = prompt("Set n");
alert(`Result: ${pow(x, n)}`);

// Ex.3
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
    ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );

  ask = (question, yes, no) => confirm(question, yes, no);
  ask("Вы согласны?", alert("Вы согласились."), alert("Вы отменили выполнение."),  );

// Ex.4
let arr = [5, 2, 1, -10, 8];
// ... ваш код для сортировки по убыванию
arr.sort((a, b)=> b-a);
alert( arr ); // 8, 5, 2, 1, -10

// Ex.5
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = Array.push(users.vasya[name], users.petya[name], users.masha[name]);

alert( names ); // Вася, Петя, Маша

// Ex.6
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

// let usersMapped = /* ... ваш код ... *//*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин