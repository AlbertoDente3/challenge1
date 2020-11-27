var fs = require('fs')





var parametriPassati = process.argv.slice(2)

var percorsoFile = parametriPassati[0]
var indiceColonnaDaCercare = parametriPassati[1]
var valoreDaCercare = parametriPassati[2]
var arrayJsonPersone = []


/* leggo */
var documento = fs.readFileSync('./data/names2', 'utf8')

/* Estraggo le righe */
let arrayRecord = documento.split(';')

/* Rimuovo l'ultimo record se vuoto */
if (arrayRecord[arrayRecord.length - 1].trim() === '') {
    arrayRecord.pop()
}

/* Creo il Json */
arrayRecord.forEach((dato) => {
    let tmpArray = dato.split(',')

    arrayJsonPersone.push({
        id: tmpArray[0].trim(),
        cognome: tmpArray[1].trim(),
        nome: tmpArray[2].trim(),
        dataNascita: tmpArray[3].trim(),
    })
})

/* Richiamo la funzione di ricerca */
console.log(cerca(indiceColonnaDaCercare, valoreDaCercare))

/* Funzioni */
function cerca(indice, valore) {
    /* Creo un array in cui metto le cose che corrispondono all uguaglianza */
    let daRitornare = []

    /* Entro nella prima riga */
    for (let i = 0; i < arrayJsonPersone.length; i++) {
        const el = arrayJsonPersone[i]

        let nColonne = Object.keys(el).length
        /* Cerco nele colonne */
        for (let j = 0; j < nColonne; j++) {
            /* Se la colonna e uguale alla colonna che sto cercando prosegue nel controlllo */
            /* TODO volendo si potrebbe ottimizzare con una ricerca dicotomica */
            if (j === parseInt(indice)) {
                
                datoConfronto = el[Object.keys(el)[j]]

                if (datoConfronto === valore) daRitornare.push(arrayJsonPersone[i])
            }
        }

        console.log()
    }

    return daRitornare
}

/* folder color #FFD580 */
