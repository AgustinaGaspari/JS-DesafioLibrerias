//variable global

const contenedorProductos = document.getElementById('todoProductos')

const contenedorCarrito= document.getElementById('carritoContenedor')

const botonVaciar =  document.getElementById('vaciarCarrito')

const contador= document.getElementById('contador')

const precioTotal= document.getElementById('precioTotal')

//Array
let carrito = [];


//LocalStorage
/*let carrito =localStorage.getItem('carrito')? carrito=JSON.parse(localStorage.getItem('carrito')) : []*/
/*let carrito =localStorage.getItem('carrito')??[]*/
/*document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizar()
    }
})*/
console.log(carrito)

//Funciones del carrito

productos.forEach(producto => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML=`
        <img src=${producto.img} class="img-fluid">
        <h5>${producto.nombre}</h5>
        <p>Precio:$${producto.precio}</p>
        <p>Stock:${producto.stock}</p>
        <button id="boton${producto.id}" class="botonAgregar btn btn-dark">COMPRAR</button>
    `

    contenedorProductos.appendChild(div);

    const boton= document.getElementById(`boton${producto.id}`);

    boton.addEventListener('click',()=>{
        Swal.fire({
            icon:'success',
            text:'Producto agregado al carrito',
        }) 
        agregarCarrito(producto.id)
    })

});    

const agregarCarrito= (productoId)=>{
    const existe= carrito.some((prod)=>prod.id===productoId)
    if (existe){
        const prod= carrito.map(prod=>{
            if(prod.id===productoId){
                prod.cantidad++
            }
        })
    }else {
        const seleccion= productos.find(prod=>prod.id === productoId) ;
        carrito.push(seleccion);
        console.log(carrito)
    }
    
    actualizar();
    
}
 

const actualizar= ()=>{
    contenedorCarrito.innerHTML=""
    
    carrito.forEach((producto)=>{
        const div= document.createElement('div');
        div.className = ('productoAgregado')
        div.innerHTML =`
            <p>${producto.nombre}</p>
            <p> $${producto.precio}</p>
            <p>Cantidad: <span id="cantidad">${producto.cantidad} </span></p>
            <button onclick="quitarCarrito(${producto.id})" class="botonQuitar btn btn-dark">Eliminar producto</button>
        `
        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito',JSON.stringify(carrito));
    })
    contador.innerText= carrito.length;
    precioTotal.innerText= carrito.reduce((acc,producto)=>acc+producto.precio*producto.cantidad,0)
}

const quitarCarrito = (prodId)=>{
    const seleccion= carrito.find((prod)=>prod.id === prodId)
    const indice = carrito.indexOf(seleccion)
    carrito.splice(indice,1)
    actualizar();
}

botonVaciar.addEventListener('click',()=>{
    if(carrito.length != 0){
        Swal.fire({
            title:'¿Vaciar Carrito de compras?',
            text: '¿Está seguro de continuar?',
            icon: 'warning',
            confirmButtonText: 'Sí',

        })
        carrito.length = 0;
        actualizar();
    }else{
        Swal.fire({
            title:'Carrito de compras vacío',
            text: '¿Desea agregar productos?',
            icon: 'error',
            confirmButtonText: 'Sí',
            cancelButtonText: 'No',
        })
    }
    
})

