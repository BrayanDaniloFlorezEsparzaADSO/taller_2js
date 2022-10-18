addEventListener(`DOMContentLoaded`,()=>{
    // # DEFINIR VARIABLES NUEMRIAS
    // # DATOS DE ENTRADA
    // ## OPERACIONES BASICAS: + *
    // from math import sqrt
    let x1=Number(prompt(`ingrese el valor de x1 `))
    let x2=Number(prompt(`ingrese el valor de x2 `)) 
    let y1=Number(prompt(`ingrese el valor de y1 `))
    let y2=Number(prompt(`ingrese el valor de y2 `))
    // #PROCESOS U OPERACIONES

    let res=Number((x2-x1)**2+(y2-y1)**2)

    // #salida o entrada de resultado
    console.log(`la distancia de los puntos es ${res}`);
})