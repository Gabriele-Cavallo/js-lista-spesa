// Consegna:
// Data una lista della spesa:
// const list = [
//     'Latte',
//     'Cacao',
//     'Insalata',
//     'Carote',
//     'Pomodori',
//     'Piatti pronti'
// ];
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
// Svolgete questo esercizio col ciclo while.

// 1 - Creo la lista da stampare
const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
    ];
// 2 - Creo la variabile all'elemento del DOM
let userList = document.querySelector('#list');
// 3 - Stampo ogni elemento dell'array nel DOM con il ciclo while
let i = 0;
while (i < list.length){
    userList.innerHTML += `<li>${list[i]}</li>`;
    i++;
}
