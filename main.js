addEventListener(`DOMContentLoaded`,()=>{
    // # DEFINIR VARIABLES NUEMRIAS
    // # DATOS DE ENTRADA
    // ## OPERACIONES BASICAS: + 
    let pr1=Number(prompt(`dijite el valor del producto# 1:`))
    let pr2=Number(prompt(`dijite el valor del producto# 2:`))
    let pr3=Number(prompt(`dijite el valor del producto# 3:`))
    let pr4=Number(prompt(`dijite el valor del producto# 4:`))
    let pr5=Number(prompt(`dijite el valor del producto# 5:`))
     // #PROCESOS U OPERACIONES

    let des1=pr1-(pr1*0.05)
    let des2=pr2-(pr2*0.05)
    let des4=pr4-(pr4*0.02)
    let des5=pr5-(pr5*0.02)
    let des6= des1+des2+pr3+des4+des5
    // #s|alida o entrada de resultado
    console.log( `l valor de los 2 primeros productos son: ${des1}  y${des2} `);
    console.log( `el valor del tercer producto es: ${pr3}`);
    console.log( `el valor de los 2 ultimos productos sos:,${des4} , y, ${des5}`);
    console.log( `el valor de toda la compra es de: ${des6}`);
})