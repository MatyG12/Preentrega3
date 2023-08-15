const Producto = function(modelo,precio,stock){
    this.modelo=modelo;
    this.precio=precio;
    this.stock=stock;
}

let producto1 = new Producto("artillery genius pro", 253000, 12)
let producto2 = new Producto("creality ender 3", 152000, 8)
let producto3 = new Producto("creality ender 3 v2 neo", 199000, 5)
let producto4 = new Producto("artillery hornet", 134000, 10)
let producto5 = new Producto("creality cr-10 smart", 365000, 2)



let lista = [producto1,producto2,producto3,producto4,producto5]

let productos = document.getElementById("productos")


localStorage.setItem("carrito",[]);
localStorage.setItem("valor",0);
let valor= localStorage.getItem("valor");
let carrito =localStorage.getItem("carrito");
let compras=document.getElementById("compras");
let preciototal=document.createElement("p")
compras.appendChild(preciototal)
let detalle= document.createElement("button")
detalle.innerText="Detalle de compra"
compras.appendChild(detalle)
let cosas= document.createElement("div")
compras.appendChild(cosas)
cosas.classList.add("green")
detalle.onclick=()=>{if(cosas.classList.contains("green")){
    cosas.classList.remove("green")
    cosas.classList.add("blue")
}else{
    cosas.classList.remove("blue")
    cosas.classList.add("green")
}}



for(let index =0; index < 5; index ++){
    let producto = document.createElement("div")
    producto.classList.add("producto")
    let modelo = document.createElement("div") 
    modelo.classList.add("modelo")
    let precio = document.createElement("div")
    precio.classList.add("precio")
    let stock = document.createElement("div")
    stock.classList.add("stock")
    let imagen = document.createElement("img")
    imagen.src="./img/"+index+".jpg"
    producto.appendChild(imagen)
    imagen.classList.add("imagenes")
    productos.appendChild(producto)
    modelo.innerText=lista[index].modelo
    precio.innerText="PRECIO: "+lista[index].precio
    stock.innerText="STOCK: "+lista[index].stock
    producto.appendChild(modelo)
    producto.appendChild(precio)
    producto.appendChild(stock)
    let boton=document.createElement("button")
    producto.appendChild(boton)
    boton.innerText="Agregar al carrito"
    boton.onclick=()=>{valor=valor+lista[index].precio;valor=parseInt(valor); localStorage.setItem("valor",valor);preciototal.innerText="el precio final es: "+localStorage.getItem("valor");let modelo1= document.createElement("div");cosas.appendChild(modelo1);modelo1.innerText=lista[index].modelo}
}


