

class Pedido{
    constructor(nroPedido,pedido){
        this.nroPedido = nroPedido;
        this.pedido = pedido;
    }
}

let pedidos = []





$("#btn").on("click", () =>{
    let numero = $("#nroPedido").val()
    let pedido = $("#pedido").val()
    
    
    if (JSON.parse(localStorage.getItem("pedidos") != null)) {
        let index = pedidos.length + 1
        pedidos = JSON.parse(localStorage.getItem("pedidos"))
        let nuevoPedido = new Pedido(numero,pedido,index)
        pedidos.push(nuevoPedido)
        localStorage.setItem("pedidos", JSON.stringify(pedidos))
    } else {
        let index = 1
        let nuevoPedido = new Pedido(numero,pedido,index)
        pedidos.push(nuevoPedido)
        localStorage.setItem("pedidos", JSON.stringify(pedidos)) 
    } 
    
    
})

/*
const imprimirPedido = () => {
    let pedidos = JSON.parse(localStorage.getItem("pedidos"))

    pedidos.forEach(e => {

        $("#print").append(`
        <h2> ${e.nroPedido}</h2>
        <p> ${e.pedido}</p>
        `)

    });
}
*/


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
