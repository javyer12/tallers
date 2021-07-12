function squareArea() {
    const input = document.getElementById("square")
    const value = input.value
    const area = value * value
    document.getElementById("result_square").innerHTML = area
}
function squarePerimter() {
    const input = document.getElementById("square")
    const value = input.value
    const perimeter = value * 4
    document.getElementById("result").textContent = perimeter
}


// triangle

function triangleArea() {
    
    const input1 = document.getElementById("triangle")
    const input2 = document.getElementById("triangle-side")
    const input3 = document.getElementById("base")
    const value1 = input1;
    const value2 = input2;
    const value3 = input3;
   
}


// circle

function diameterCircle(radio){
    return radio*2 
}
function areaCircle(radio) {
    return (radio * radio) * PI
  } 
const PI = Math.PI
function circleDiameter() {
    const input = document.getElementById("radio")
    const value = input.value
        const radio = value * 2
        document.getElementById("diameter-result").textContent = "the diameter of your circle is: " + radio

}
function circleCircunference() {
    const input = document.getElementById("radio")
    const value = input.value
    const diameter = diameterCircle(value)
    const circunference = diameter * PI
    document.getElementById("circunference-result").textContent = "the circunference  is: " + circunference

}
function circleArea() {
    const input = document.getElementById("radio")
    const value = input.value
    const area = areaCircle(value)
    document.getElementById("area-result").textContent = "the area is: " + area

}