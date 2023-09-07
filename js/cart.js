const productosEnCarrito = localStorage.getItem('productos');
const h1estado = document.querySelector('#estado-carrito');
let  productos; 
const contenedorCarrito = document.querySelector('.principal-carrito');
const contenedorProductos = document.querySelector('.productos');
const acciones = document.querySelector('.acciones');
const btnPagar = document.querySelector('#pagar');
const btnVaciar = document.querySelector('#vaciar');
if(productosEnCarrito != null){
    h1estado.style.display = "none";
  productos =  JSON.parse(productosEnCarrito);
}
if(productos == null){
    btnPagar.style.display = "none";
    btnVaciar.style.display = "none";
}
function cargarProductos(){
    if(productosEnCarrito != null){
        h1estado.style.display = "none";
    } else{
        btnPagar.style.display = "none";
        btnVaciar.style.display = "none";
    }
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto-carrito');
        div.innerHTML = `
        <h4>${producto[0]}</h4>
        <span>${producto[2]}</span>
        <img src="${producto[1]}">
        <span id="precio">${producto[3]}</span>
        
        `;
        contenedorProductos.append(div);
    });
}
cargarProductos();
btnVaciar.addEventListener('click', () => {
    productos.length = 0;
    localStorage.setItem('productos', productos);
    cargarProductos();
})