addEventListener(`DOMContentLoaded`,()=>{
    // # DEFINIR VARIABLES NUEMRIAS
    // # DATOS DE ENTRADA
    // ## OPERACIONES BASICAS: + /
    let precio=Number(prompt(`ingrese el valor por m2`))
    let metros=Number(prompt(`ingrese los m2 que quiere pintar`))
    // #PROCESOS U OPERACIONES
    let res=metros*precio
    // #salida o entrada de resultado
    console.log(`el valor del cuadro es de: ${res}`);
})