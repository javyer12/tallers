// const list1 = [
//     100,
//     200,
//     300,
//     500,
// ]



function calcularMedia(list) {
    // let sumaList = 0;
    // for (let i = 0; i < list.length; i++){
    // sumaList = sumaList + list[i]
    //  }
   
    const sumaList = list.reduce(
        function (valorAcumulado = 0, nuevoElemento) { //en valorAcumulado se guarda el valor de cada iteracion
        return valorAcumulado + nuevoElemento
        }
    )//como argumento una funcion
    const promedioList = sumaList / list.length
    return promedioList

}

// mediana

// const lista = [
//     100,
//     200,
//     500,
//     700,
//     900,
//     300,
//     600,
//     200,
//     400,
//     4000000000,
// ]

//convertir en una funcion
//poder pasarle una lista desde html
//ordenar la lista
//imprimirla
function calcula() {
    const data = document.getElementById("medianaInput")
    const lista = parseInt([data.value])
    console.log(lista)

    function media(list) {
        const sumaList = list.reduce(
            function (valorAcumulado = 0, nuevoElemento) { //en valorAcumulado se guarda el valor de cada iteracion
                return valorAcumulado + nuevoElemento
            }
        )//como argumento una funcion
        const promedioList = sumaList / list.length
        return promedioList
    }
    
    const mitadLista = parseInt(lista.length / 2)

    function esPar(numerito) {
        if (numerito % 2 === 0) {  //% modulo= o residuo en una division
            return true
        } else {
            return false
        }
    }
    let mediana;
    if (esPar(lista.length)) {
        const elemento1 = lista[ mitadLista - 1 ]
        const elemento2 = lista[ mitadLista ]
    
        const calcularElemento1y2 = media([
            elemento1,
            elemento2,
        ])
        console.log(elemento1, elemento2)
        mediana = calcularElemento1y2;
    } else {
        mediana = lista[ mitadLista ];
    }
    document.getElementById("mediana").textContent = mediana
}



// moda

const lister = [
    3,
    1,
    2,
    4,
    6,
    3,
    5,
    6,
    6,
]
const listacontar = {}

lister.map(
    function (elemento) {
        if (listacontar[ elemento ]) {
            listacontar[ elemento ] += 1
        } else {
            listacontar[ elemento ] = 1;
        }
    }
)
const listaArray = Object.entries(listacontar).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoA[1]
    }
)
const moda = listaArray[listaArray.length-1]

//convertir en una funcion
//pasar cualquier array
//unirlo con html


//rango

//metodo for para encontrar el numero mayor y menor y luego restarlo