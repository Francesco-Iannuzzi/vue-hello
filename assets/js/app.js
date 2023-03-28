/*

Descrizione:
Stampare a schermo un messaggio all’interno di un h1 utilizzando una proprietá nell'oggetto restituito dalla funzione data. ✓

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. ✓

*/


const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello World',
            image: 'https://i.pinimg.com/originals/47/83/a6/4783a6a0f05ad0b11dc994aada6defb5.jpg',
        }
    }
}).mount('#app')