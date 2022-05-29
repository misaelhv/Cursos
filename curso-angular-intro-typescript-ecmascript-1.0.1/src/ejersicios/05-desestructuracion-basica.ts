/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015 
    }
}

const autor = 'Fulano';

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor: autorDetalle, anio } = detalles;


// console.log('El volumen actual es de: ', volumen);
// console.log('El segundo actual es de: ', segundo);
// console.log('La canción actual es: ', cancion);
// console.log('El autor es : ', autorDetalle);
// console.log('El año es : ', anio);


const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = dbz;

// console.log('Personaje 1: ', p1);
// console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);