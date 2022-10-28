/* Rifare l'esercizio della to do list argomento dell to-do list a piacere.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante,
il testo digitato viene letto e utilizzato per creare un nuovo todo, 
che quindi viene aggiunto alla lista dei todo esistenti.
*/
/* const {createApp} = Vue; */
import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
let done = true;

const app = createApp({
    data(){
            return{
                lista: [
                {
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
                ],
            },
        },
        methods:{
            addTask(){
                if(this.newtask.lenght >= 3 ){
                    this.lista.unshift(this.newtask);
                    this.hasError = false;
                } else {
                    this.hasError = true;
                }
                this.newtask = '';
            }
        }
});

mounted(){
    console.log('in mounted')
}


