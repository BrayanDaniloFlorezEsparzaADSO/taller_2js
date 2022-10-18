addEventListener(`DOMContentLoaded`,()=>{
    // # DEFINIR VARIABLES NUEMRIAS
    // # DATOS DE ENTRADA
    // ## OPERACIONES BASICAS: + 
    let nacimiento=Number(prompt(`dijite su año de nacimiento:`))
    let fechaactual=Number(prompt(`dijite el año actual:`))
    // #PROCESOS U OPERACIONES
    let res=(fechaactual-nacimiento)
    // #salida o entrada de resultado
    console.log(`su edad es: ${res}`);
})