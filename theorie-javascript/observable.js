// setTimeout(() => {
//   console.log('1000ms');
// }, 1000);

// function timeout(delayMs) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// timeout(1000).then(() => console.log('1000ms'));

const { Observable } = require('rxjs');

function interval(delayMs) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next(delayMs);
    }, delayMs);
  });
}

interval(1000).subscribe((delayMs) => console.log(delayMs + 'ms'));

// Marble graph (un tiret = 250ms)
// ----1000----1000----1000----1000----1000----1000---



// Marble graph (un tiret = 250ms)
// -------------(click)-------------(click)--------(click)-----
// -------------{id: '1'}-----------{id: '5'}------{id:'2'}----
// map((params) => Number(params.id))
// -------------1-------------------5--------------2-----------
// ------------------------{id: 1, name:'Toto'}------------{id: 2, name:'Tutu'}-----------{id: 5, name:'Titi'}----------------------
// switchMap()
// ------------------------{id: 1, name:'Toto'}------------{id: 2, name:'Tutu'}-----------------------------
