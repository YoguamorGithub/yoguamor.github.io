class Producto{
    constructor(titulo, precio, categoria, imagen){
        this.titulo = titulo;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
    }
}
//Al mayor
const yogurt1 = new Producto('YOGURT GRIEGO 180GR CON GRANOLA', 2.5, 'AL MAYOR', 'img/yogures/image0.png');
const yogurt2 = new Producto('YOGURT GRIEGO 180GR', 1.53, 'AL MAYOR', 'img/yogures/image1.png');
const yogurt3 = new Producto('YOGURT GRIEGO 450GR', 3.33, 'AL MAYOR', 'img/yogures/image3.png');
const yogurt4 = new Producto('YOGURT GRIEGO 900GR', 5.93, 'AL MAYOR', 'img/yogures/image2.png');
//Al detal
const yogurt5 = new Producto('YOGURT GRIEGO 180GR CON GRANOLA', 3.27, 'AL DETAL', 'img/yogures/image0.png');
const yogurt6 = new Producto('YOGURT GRIEGO 180GR', 1.98, 'AL DETAL', 'img/yogures/image1.png');
const yogurt7 = new Producto('YOGURT GRIEGO 450GR', 4.33, 'AL DETAL', 'img/yogures/image3.png');
const yogurt8 = new Producto('YOGURT GRIEGO 900GR', 7.72, 'AL DETAL', 'img/yogures/image2.png');

const productos = [yogurt1, yogurt2, yogurt3, yogurt4, yogurt5, yogurt6, yogurt7, yogurt8];



function cargarProductosAlMayor(){
    const productosAlMayor = [yogurt1, yogurt2, yogurt3, yogurt4];
    const divProductosAlMayor = document.querySelector('.grid-al-mayor');
    productosAlMayor.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `

        <h4>${producto.titulo}</h4>
        <img class="img" src="${producto.imagen}">
        <div class="precio-btn">
        <span>USD ${producto.precio}</span>
        <button onclick="ordenar('${producto.titulo}', '${producto.categoria}', ${producto.precio})">Hacer Orden</button>
        </div>
        `;
        divProductosAlMayor.append(divProducto);
    })
}
function cargarProductosAlDetal(){
    const productosAlMayor = [yogurt5, yogurt6, yogurt7, yogurt8];
    const divProductosAlMayor = document.querySelector('.grid-al-detal');
    productosAlMayor.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `

        <h4>${producto.titulo}</h4>
        <img class="img" src="${producto.imagen}">
        <div class="precio-btn">
        <span>USD ${producto.precio}</span>
        <button onclick="ordenar('${producto.titulo}',  '${producto.categoria}', ${producto.precio})">Hacer Orden</button>
        </div>
        `;
        divProductosAlMayor.append(divProducto);
    })
}
cargarProductosAlMayor();
cargarProductosAlDetal();

function ordenar(nombre, categoria, precio ){
    const urlOrden = `https://api.whatsapp.com/send/?phone=584248447449&text=Quisiera+hacer+una+orden+de+${nombre}+${categoria}+con+valor+de+${precio}USD&type=phone_number&app_absent=0`;
    window.open(urlOrden, '_self');
}
