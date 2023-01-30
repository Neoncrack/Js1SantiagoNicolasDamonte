let dineroInicial= parseInt(prompt("Ingrese la cantidad con la que inicio la operacion"));
let precioCompra= parseInt(prompt("Ingresar precio de entrada"));
let precioVenta= parseInt(prompt("Ingresar precio de salida"));
let dineroFinal= parseInt(dineroInicial/precioCompra*precioVenta)

let ganancia= parseInt(dineroFinal-dineroInicial)

if(ganancia>=150){
    alert(prompt('Su ganancia es de: ' + ganancia + ' Usted a clasificado al concurso de trading !Felicitaciones¡'))
} else if (ganancia>=100) {
    alert('Su ganancia es de: ' + ganancia + ' Usted tiene 1 chance mas, tu ganancia tiene que ser superior a 150 !Te falta poco¡')
    for(let i=0 ; i<=1 ; i++){
        dineroInicial= parseInt(prompt("Ingrese la cantidad con la que inicio la operacion"));
        precioCompra= parseInt(prompt("Ingresar precio de entrada"));
        precioVenta= parseInt(prompt("Ingresar precio de salida"));
    }
} else if (ganancia>=50) {
        alert('Su ganancia es de: ' + ganancia + ' Usted no a clasificado al torneo pero tendra 1 chance mas para el proximo torneo!Gracias por intentar¡')
} else{
    alert("Usted no a clasificado al torneo, su ganancia es menor o igual a 0 !Suerte la proxima¡")
}
