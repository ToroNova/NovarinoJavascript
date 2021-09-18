


// ENTIDAD - CLASE ///////////////////////////////////////////////////////////////


class Producto {
    // constructor
    constructor(comida,precio,extra,stock,imagen) {
        this.comida = comida;
        this.precio = precio;
        this.extra = extra;
        this.stock = stock;
        this.imagen = imagen;
        
    }

} 



/**************************************************************
 *          VARIABLES / CONSTANTES / SELECTORES
 *************************************************************/

const listaComidas = []

const comida1 = new Producto ("Hamburguesa", 500, "cheddar", 20, "./img/burger.png")
const comida2 = new Producto ("Pancho", 90, "papas pay", 20, "./img/pancho.png")
const comida3 = new Producto ("Superpancho", 120, "2 salsas", 20, "./img/superpancho.png")
const comida4 = new Producto ("Pizza", 800, "doble mozzarella", 10, "./img/pizza.png" )
const comida5 = new Producto ("Empanada", 150, "2 salsas", 40, "./img/empanada.png" )

listaComidas.push(comida1)
listaComidas.push(comida2)
listaComidas.push(comida3)
listaComidas.push(comida4)
listaComidas.push(comida5)

console.log(listaComidas);


listaComidas.forEach(e => {

    let row = document.querySelector(".row")

    let div = document.createElement("div")
    div.setAttribute("class", "col mt-5")
    row.appendChild(div)

    let div1 = document.createElement("div")
    div1.setAttribute("class", "card bg-dark text-white text-center")
    div1.setAttribute("style", "width: 15rem;")
    div.appendChild(div1)

    let img1 = document.createElement("img")
    img1.setAttribute("class", "card-img-top ")
    img1.setAttribute("src", `${e.imagen}`)
    div1.appendChild(img1)

    let div2 = document.createElement("div")
    div2.setAttribute("class", "card-body ")
    div2.textContent = `${e.comida}`
    div1.appendChild(div2)

    let p1 = document.createElement("p")
    p1.setAttribute("class", "card-text mt-4")
    p1.textContent = `Unidades restantes: ${e.stock}`
    div2.appendChild(p1)

    let p2 = document.createElement("p")
    p2.setAttribute("class", "card-text")
    p2.textContent = `Precio por unidad: $${e.precio}`
    div2.appendChild(p2)

})

    
    /*
alert(`BIENVENIDO A LA PIZZERIA`)
let preguntaComida = prompt(`Que comida desea? Tenemos disponible ${comida1.comida}, ${comida2.comida}, ${comida3.comida}, ${comida4.comida}, ${comida5.comida} `)

let decision = (pregunta,respuesta,precio,stock,clase) => {
    if (pregunta == respuesta){
        let confirmacion = confirm(`El precio de ${respuesta} es de ${precio}, desea continuar?`) 
        if(confirmacion == true){
           let confirmarCantidad = Number(prompt(`que cantidad queres? Tenemos disponible ${stock}`)) 
           if(confirmarCantidad <= stock){ 
               alert(`Estamos preparando tu pedido, el total a abonar es de $ ${precio*confirmarCantidad}`)
               console.log(`El stock restante es de ${stock - confirmarCantidad}`);
           } else {
               alert(`No tenemos esa cantidad.`)
           }
        
       } 
        
       
    }
}

switch (preguntaComida) {
    case "hamburguesa": decision(preguntaComida,comida1.comida,comida1.precio,comida1.stock,comida1)

        break;

    case "pancho": decision(preguntaComida,comida2.comida,comida2.precio,comida2.stock,comida2)

        break;

    case "superpancho": decision(preguntaComida,comida3.comida,comida3.precio,comida3.stock,comida3)
        
        break;

    case "pizza": decision(preguntaComida,comida4.comida,comida4.precio,comida4.stock,comida4)
        
        break;

    case "empanada": decision(preguntaComida,comida.comida,comida5.precio,comida5.stock,comida5)
        
        break;

    default:
        let nuevaDecision = confirm("NO EXISTE ESE PRODUCTO, ¿DESEA VOLVER A INTENTAR?");
       
    break;
    
} 

let masBarato = listaComidas.find(e => e.precio <= 100)
console.log(masBarato);
*/


        


/**************************************************************
 *                        Logica
 *************************************************************/

