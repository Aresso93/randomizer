
//fare un programma che, dati x studenti si mettono in un array e vengono shufflati in modo casuale e printati a coppie
//fare anche la classe degli studenti con il suo toString
//una classe chiamata course che avrà un array di studenti
// 1) creare classe student con toString
// 2) creare classe classroom che contiene un array di students
// 3) aggiungere a classroom tre metodi;
//        -addStudent()
//        -randomizeStudent()
//        -printSquads()


const student1 = new Student('Ares', 'Fiumicelli');

const student2 = new Student('Isabella', 'Ottonello');

const student3 = new Student('Francesca', 'Ercolani');

const student4 = new Student('Stefania', 'Ghergut');

const student5 = new Student('Manuela', 'Ariotti');

const student6 = new Student('Stefano', 'Florio');

const student7 = new Student('Luca', 'Verduci');

const student8 = new Student('Bryan', 'Rojas');

const student9 = new Student('Damiano', 'Di Lionardo');

const student10 = new Student('Cesare', 'Falzone');


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const studentsArray = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10];

let scrambledArray = shuffleArray(studentsArray)

console.log(scrambledArray);

function pickTeams(array){

    for (let i = 0; i < array.length; i+=2) {
        const element1 = array[i];
        const element2 = array[i + 1];
       
        console.log(element1, element2);
       
       }
    }
   




console.log(pickTeams(studentsArray));

