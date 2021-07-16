//helper
function calcularMedia(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado =  0, nuevoValor) {
            return valorAcumulado + nuevoValor
        }
    )
    const promedioLista = sumaLista / lista.length
    return promedioLista
}
//mediana general
const salariosColombia = colombia.map(
    function (personita) {
        return personita.salary;
    }
)
const salarioColSorted = salariosColombia.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB
    }
)


function esPar(numerito) {
    return (numerito % 2 === 0) 
        
}



function medianaSalary(lista) {
    const mitad = parseInt(lista.length / 2)
    if (esPar(lista.length)) {
        const  personitaMitad1 = lista[mitad-1]
        const  personitaMitad2 = lista[mitad]
        const mediana = calcularMedia([ personitaMitad1, personitaMitad2 ])
        return mediana
    } else {
        const personitaMitad = lista[mitad]
    return  personitaMitad
    }
    
}
const medianaGeneralCol = medianaSalary(salarioColSorted)

//mediana top 10

//metodo splice = le pasamos dos parametros, en el primero le indicamos cual valor
// queremos, y en el segundo cuantos valores queremos que tome despues de donde se marco
// por ejemplo, en un array de 10 valores, le indico tomar desde el 5, y quiero que tome dos, tomara el 6 y 7, lo elimina del array 
// y me lo guarda en el nuevo array
const spliceStart = (salarioColSorted.length * 90) / 100;
const spliceCount = salarioColSorted.length - spliceStart

const salariosColTop10 = salarioColSorted.splice(
    spliceStart,
    spliceCount
)
const medianaTop10Col = medianaSalary(salariosColTop10)
console.log({
    medianaGeneralCol,
    medianaTop10Col
})