//paso 1 crear la clase servicios
class Servicio{
    constructor(nombre, precio, descuento, imagen){
        this.nombre=nombre;
        this.precio=precio;
        this.descuento=descuento;
        this.imagen=imagen;
    }
        //METODO PARA AYAR EL DESCUENTO
        calcularPrecioFinal(){
            return this.precio  - (this.precio * this.descuento/100);
        }
}

//PASO 2 CREAMOS LOS OBEJTOS
    const servicio01= new Servicio("Laceado",200,10,"img/spa02.jpg");
    const servicio02= new Servicio("Pintado",400,10,"img/spa03.jpg");
    const servicio03= new Servicio("Manicure",100,10,"img/spa04.jpg");

//PASO 3 CREAR EL ARRAY
    const catalogo=[servicio01, servicio02, servicio03];

//PASO 4 SELECCIONAR EL CONTENEDOR HTML
    const contenedor=document.getElementById("contenedor-servicios");
    catalogo.forEach(function(servicio){

//PASO 5 CREAR UN TARJETA HTML
    const tarjeta=document.createElement("div");
    tarjeta.className="tarjeta";

    tarjeta.innerHTML=`
        <img src="${servicio.imagen}" alt="${servicio.nombre}">
        <h3>${servicio.nombre}  <h3>
        <p>Precio S/: ${servicio.precio} </p>
        <button>Aplicar Descuento</button>
    `;

//PASO 6 AGREGAR LA TARJETA AL CONTENEDOR
    contenedor.appendChild(tarjeta);
    const boton=tarjeta.querySelector("button");
    const precio=tarjeta.querySelector("p");
    boton.addEventListener("click",function(){
        //ejecutar el metodo de clase
        let precioFinal=servicio.calcularPrecioFinal();
        //MODIFICAR EL DOWM
        precio.textContent="Precio con Desc: S/ "+precioFinal.toFixed(2);
        precio.classList.add("Precio Final");
        boton.textContent="Descuento aplicado";
        boton.disabled=true;
    })
})
//scrip reinciar
function reiniciar(){
    location.reload();
}
