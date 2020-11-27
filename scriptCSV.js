console.log()

var parametriPassati = process.argv.slice(2)



console.log('Argomenti')
parametriPassati.forEach((parametro, index) => {
    console.log(index, ' Valore:', parametro)
})
console.log()

var fs = require('fs')

var percorsoFile = parametriPassati[0]
var indiceColonnaDaCercare = parametriPassati[1]
var valoreDaCercare = parametriPassati[2]
var arrayJsonPersone = []

/* leggo */
var documento = fs.readFileSync('./data/avengers', 'utf8')

/* Estraggo le righe */
let singoliRecord = documento.split(';')
singoliRecord.pop()

/* Creo il Json */
singoliRecord.forEach((dato) => {
    let tmpArray = dato.split(',')

    arrayJsonPersone.push({
        id: tmpArray[0],
        cognome: tmpArray[1],
        nome: tmpArray[2],
        dataNascita: tmpArray[3],
    })
})


console.log("lavoro con: ");

console.log(cerca(indiceColonnaDaCercare,valoreDaCercare));





/* Funzioni */
function cerca(indice, valore) {
    let daRitornare = []

    for (let i = 0; i < arrayJsonPersone.length; i++) {
        const el = arrayJsonPersone[i]

        let nColonne = Object.keys(el).length
        for (let j = 0; j < nColonne; j++) {
            
            if (j === parseInt(indice)) {
                /* console.log('Valore: ', j, el[Object.keys(el)[j]]) */
                datoConfronto = el[Object.keys(el)[j]]

                if (datoConfronto === valore) daRitornare.push(arrayJsonPersone[i])
            }
        }

  
      
        console.log()
    }

   
    return daRitornare
}


/* folder color #FFD580 */