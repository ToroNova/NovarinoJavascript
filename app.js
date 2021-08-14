


// ENTIDAD - CLASE ///////////////////////////////////////////////////////////////


class Producto {
    // constructor
    constructor(comida,precio,extra,stock) {
        this.comida = comida;
        this.precio = precio;
        this.extra = extra;
        this.stock = stock;
        
    }


} 
const listaComidas = []

const comida1 = new Producto ("hamburguesa", 500, "cheddar", 20 )
const comida2 = new Producto ("pancho", 90, "papas pay", 20 )
const comida3 = new Producto ("superpancho", 120, "2 salsas", 20 )
const comida4 = new Producto ("pizza", 800, "doble mozzarella", 10 )
const comida5 = new Producto ("empanada", 150, "2 salsas", 40 )

listaComidas.push(comida1)
listaComidas.push(comida2)
listaComidas.push(comida3)
listaComidas.push(comida4)
listaComidas.push(comida5)

console.log(listaComidas);

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



