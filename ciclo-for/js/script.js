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
// Svolgete questo esercizio col ciclo for.

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
// 3 - Stampo ogni elemento dell'array nel DOM con il ciclo for
for (let i = 0; i < list.length; i++) {
    userList.innerHTML += `<li>${list[i]}</li>`;
}