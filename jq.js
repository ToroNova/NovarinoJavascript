

class Pedido{
    constructor(productos,cantidad,total){
        this.productos = productos;
        this.cantidad = cantidad;
        this.total = total;
    }
}

let pedidos = []





$("#btnComprar").on("click", () =>{
    let productos = $(".nombreProducto").text()
    let cantidad = $(".cantidadProducto").val()
    let total = $(".totalCarrito").text()
    
    
    if (JSON.parse(localStorage.getItem("pedidos") != null)) {
        let index = pedidos.length + 1
        pedidos = JSON.parse(localStorage.getItem("pedidos"))
        let nuevoPedido = new Pedido(productos,cantidad,total,index)
        pedidos.push(nuevoPedido)
        localStorage.setItem("pedidos", JSON.stringify(pedidos))
    } else {
        let index = 1
        let nuevoPedido = new Pedido(productos,cantidad,total,index)
        pedidos.push(nuevoPedido)
        localStorage.setItem("pedidos", JSON.stringify(pedidos)) 
    } 
    
    
})


/*
const imprimirPedido = () => {

    let imprimirDatos = JSON.parse(localStorage.getItem("pedidos"))

    if (imprimirDatos != null) {
        imprimirDatos.forEach(e => {
            $("#print").append(`
            <h4 class= "ms-5 mt-3">Pedido Nro ${e.nroPedido}</h4>
            <p class= "ms-5"> ${e.pedido}</p>
            `)
        });

} else {
    $("#error").append(`<p>No hay pedidos</p>`)
}
}

imprimirPedido()
*/