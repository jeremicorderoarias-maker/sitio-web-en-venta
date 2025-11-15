

const log =document.getElementById("logo")
log.addEventListener("click",()=>{
 const contPerfil= document.getElementById("perfil");
 contPerfil.style.display="block";
 document.querySelector(".imgLogo").src=log.src;
document.querySelector(".text-del-logo").textContent= document.querySelector(".tetx-name-tienda").textContent;


 const imgViewLogo=document.querySelector(".imgLogo");
 imgViewLogo.addEventListener("click",()=>{
    document.querySelector(".cont-view-img").style.display="block"
    document.querySelector(".imview").src=imgViewLogo.src;
 })
 document.querySelector(".cerrarPerfil").addEventListener("click",()=>{
    contPerfil.style.display="none"
 });


});
 document.querySelector(".atras").addEventListener("click",()=>{
        document.querySelector(".cont-view-img").style.display="none"

});

    document.addEventListener("keyup", (event) => {
     try {
           let productos = document.querySelectorAll(".component-producto-padre");
            if (event.target.matches("#buscador")) {
                let value = event.target.value.toLowerCase();
                let encontrados = 0; // contador de coincidencias
                
                productos.forEach(item => {
                    if (item.textContent.toLowerCase().includes(value)) {
                        item.classList.remove("ocultal");
                        encontrados++;
                    } else {
                        item.classList.add("ocultal");
                    }




                    
        });
        

        // Revisar si no se encontró nada
        let mensaje = document.querySelector("#mensaje-no");
           

            if (encontrados === 0) {
                mensaje.style.display = "block"; // mostrar mensaje
                
            } else {
                mensaje.style.display = "none"; // ocultar mensaje                
            }
        }
     } catch (error) {
        console.log(error)
        
     }
});

const cont_Producto=document.querySelectorAll(".component-producto-padre");
cont_Producto.forEach((item)=>{
    const viewProducto=item.querySelector(".cont-img");
    viewProducto.addEventListener("click",()=>{
        const imgProducto=item.querySelector(".imgProducto").src;
        const nombreProducto =item.querySelector(".text-h1").textContent;
        const descripcionProducto=item.querySelector(".descripcion").textContent;
        const precioProducto=item.querySelector(".precio-actual").textContent;
        const precioAnterio=item.querySelector(".precio-anterior").textContent;
        
        // comonente mostrar producto
        const imgViewProducto=document.getElementById("img");
        const textNombre=document.getElementById("text_view");
        const descripcionViewProducto=document.getElementById("descripcio_view");
        const precioViewProducto=document.querySelector(".precio_view");
        const precioAnterioView=document.querySelector(".precio-anterior-view");
       
        imgViewProducto.src=imgProducto;
        textNombre.textContent=nombreProducto;
        descripcionViewProducto.textContent=descripcionProducto;
        precioViewProducto.textContent=precioProducto;
        precioAnterioView.textContent=precioAnterio;

        document.querySelector(".produc-View").style.display="block";
        document.getElementById("cerrar").addEventListener("click",()=>{  document.querySelector(".produc-View").style.display="none"})
    });


    const buttonCompra=item.querySelector("#btnComprar");
     buttonCompra.addEventListener("click",()=>{
        const imgProducto=item.querySelector(".imgProducto").src;
        const nombreProducto =item.querySelector(".text-h1").textContent;
        const descripcionProducto=item.querySelector(".descripcion").textContent;
        const precioProducto=item.querySelector(".precio-actual").textContent;
        const precioAnterio=item.querySelector(".precio-anterior").textContent;


        const numero = "18492742771"; // número del negocio
        const mensaje = `Hola, sigue disponible el: ${nombreProducto} `;
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank"); // abre WhatsApp
    

    });  
});
document.querySelector("#btnComprar").addEventListener("click",()=>{
    const text= document.querySelector("#text_view").textContent;
    
        const numero = "18492742771"; // número del negocio
        const mensaje = `Hola, sigue disponible el: ${text} `;
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank"); // abre WhatsApp
    

});





