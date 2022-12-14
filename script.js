/* MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, 
il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante,
il testo digitato viene letto e utilizzato per creare un nuovo todo, 
che quindi viene aggiunto alla lista dei todo esistenti.
*/
// far verificare se (if) è vero o falso 


const {createApp} = Vue; 

let done = true;

const app = createApp({
    data(){
            return{
                esercizio: '',
                hasError: false, 
                lista: [
                {  //todo
                    testo: 'jumpin jack',
                    done: false, 
                },           
                {
                    testo: 'plank',
                    done: false,
                },
                {
                    testo: 'burpees',
                    done: false,
                },
                {
                    testo: 'mountain climber',
                    done: false,
                },
                {
                    testo: 'crunch',
                    done: false,
                },
                ]
            }
        },
        methods:{
            addTask(){
                if(this.esercizio.length >= 3 ){
                    this.lista.unshift({testo: this.esercizio, done: false });
                    this.hasError = false;
                } else {
                    this.hasError = true;
                }
                this.esercizio = ''; //serve per tenere pulito 
            }
        }
});
app.mount("#app");


/* .splice */ //per togliere gli elementi che non mi servono usare questo
