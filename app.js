


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

containerCart =  document.querySelector(".containerCart")
const dolarApi = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

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

fetch(dolarApi)
.then(res => res.json())
.then(data =>{
    //console.log(data[0].casa.compra);
    let containerDolar = document.querySelector(".api")
    
    let div = document.createElement("div")
    div.setAttribute("class", "col mt-5 dolarOficial")
    div.textContent = `Valor Dolar Compra: $${data[0].casa.compra}`
    containerDolar.appendChild(div)

    listaComidas.forEach(e => {
        let pasarDolar = parseInt(data[0].casa.compra)
        let precioDolar = (e.precio / pasarDolar).toFixed(2)
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
        div2.setAttribute("class", "card-body")
        div1.appendChild(div2)
    
        let pComida = document.createElement("p")
        pComida.setAttribute("class","card-tittle producto")
        pComida.textContent = `${e.comida}`
        div2.appendChild(pComida)
    
    
        let p1 = document.createElement("p")
        p1.setAttribute("class", "card-text mt-4")
        p1.textContent = `Unidades restantes: ${e.stock}`
        div2.appendChild(p1)
    
        let p2 = document.createElement("p")
        p2.setAttribute("class", "card-text precio")
        p2.textContent = `$${e.precio}`
        div2.appendChild(p2)

        let p3 = document.createElement("p")
        p3.setAttribute("class", "card-text precioDolar")
        p3.textContent = `U$S ${precioDolar}`
        div2.appendChild(p3)
    
        let botonCompra =  document.createElement("button")
        botonCompra.setAttribute("type","button")   
        botonCompra.setAttribute("class","btn btn-primary agregar") 
        botonCompra.textContent = `Añadir al carrito`
        div2.appendChild(botonCompra)
    
    })
    const deleteProduct = (event) => {
        const click = event.target;
        click.closest('.divContainerCartProduct').remove()
        actualizarTotal()
    }
    
    const actualizarCantidad = (event) => {
        let input = event.target;
        if(input.value <=0){
            input.value = 1
        }
        actualizarTotal();
    }
    
    const actualizarTotal = () =>{
        let total = 0
        let totalDolar = 0

        const totalCarrito = document.querySelector('.totalCarrito')
        const totalCarritoDolar = document.querySelector('.totalCarritoDolar')

        const divContainerCartProduct = document.querySelectorAll('.divContainerCartProduct')
    
        divContainerCartProduct.forEach(e =>{
            const precioProductoNumero = e.querySelector('.precioProducto');
            const precioProducto = parseInt(precioProductoNumero.textContent.replace('$',''));
            const cantidadProductoNumero = e.querySelector('.cantidadProducto');
            const cantidadProducto = Number(cantidadProductoNumero.value);
            
            total = total + precioProducto * cantidadProducto
            
        })

        divContainerCartProduct.forEach(e =>{
            const precioProductoNumero = e.querySelector('.precioProductoDolar');
            const precioProductoDolar = (precioProductoNumero.textContent.replace('U$S',''));
            const cantidadProductoNumero = e.querySelector('.cantidadProducto');
            const cantidadProducto = Number(cantidadProductoNumero.value);
            
            totalDolar = totalDolar + precioProductoDolar * cantidadProducto
            
        })

    
        totalCarrito.innerHTML = `$${total}` 
        totalCarritoDolar.innerHTML = `$${totalDolar}` 
    
    }

    
    
    const printProduct = (event) => {
        const click = event.target;
        const itemCard = click.closest('.card')
    
        const producto = itemCard.querySelector('.producto').textContent
        const precio = itemCard.querySelector('.precio').textContent
        const precioDolar = itemCard.querySelector('.precioDolar').textContent

        agregarCarrito (producto,precio,precioDolar)
    }
    
    const agregarCarrito = (producto,precio,precioDolar) => {
    
        let nombreProducto = containerCart.getElementsByClassName('nombreProducto')
        
        for(let i = 0; i < nombreProducto.length; i++){
            if(nombreProducto[i].innerHTML == producto){
                let cantidadProducto = nombreProducto[i].parentElement.parentElement.querySelector('.cantidadProducto');
                cantidadProducto.value++;
                actualizarTotal()
                return;
            }
        }
    
        let divContainerCart = document.createElement("div")
        
        let printCart = `
        <div class="row ms-4 divContainerCartProduct">
        <div class="col-3">
        <p class ="nombreProducto">${producto}</p>
        </div>
    
        <div class="col-3">
        <p class ="precioProducto">${precio}</p>
        </div>  

        <div class="col-3">
        <p class ="precioProductoDolar">${precioDolar}</p>
        </div>  
    
        <div class="col-3">
        <input class="cantidadProducto" type="number" value="1" >
        <button type="button" class="borrarProduct btn btn-danger">X</button>
        </div> 
        </div> 
    
         
        `
        divContainerCart.innerHTML = printCart
        containerCart.appendChild(divContainerCart)
      
        divContainerCart.querySelector(".borrarProduct").addEventListener("click",deleteProduct)
    
        divContainerCart.querySelector(".cantidadProducto").addEventListener("change",actualizarCantidad)
    
        actualizarTotal()
    }
    
    
    
    let clickButton = document.querySelectorAll('.agregar')
    
    clickButton.forEach(event => {
        event.addEventListener('click',printProduct)
    
    }) 
})




