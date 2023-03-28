/*

Descrizione:
Stampare a schermo un messaggio all’interno di un :puntare_a_destra: h1 :puntare_a_sinistra: utilizzando una proprietá nell'oggetto restituito dalla funzione data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.

*/



const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'ciao',
        }
    }
}).mount('#greeting')

