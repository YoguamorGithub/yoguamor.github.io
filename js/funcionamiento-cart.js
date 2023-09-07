function agregarAlCarrito(titulo, imagen,categoria, precio){
   

    const producto = [titulo, imagen,categoria,  precio, 0];
    const productosEnCarrito = localStorage.getItem('productos');

    if(productosEnCarrito != null){
    const productos = JSON.parse(productosEnCarrito);
    productos.push(producto);
  
  productosSet =   JSON.stringify(productos);
    localStorage.setItem('productos', productosSet);
    alert("Agregado Producto " + producto[0] + " al carrito");
    } else {
        const productos = [];
        productos.push(producto);
        productosSet =   JSON.stringify(productos);
        localStorage.setItem('productos', productosSet);
        alert("Agregado Producto " + producto[0] + " al carrito");
    }

}