let carrito = [];

const botonesComprar = document.querySelectorAll(".comprar");

botonesComprar.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const producto = boton.getAttribute("data-producto");

        carrito.push(producto);

        document.getElementById("contador").textContent = carrito.length;

        alert("Artículo comprado: " + producto);

    });

});

function verCarrito() {
    alert("Carrito:\n" + carrito.join("\n"));
}
