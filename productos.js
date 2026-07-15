const productos = [
    { id: 1, nombre: "Laptop Gamer ASUS ROG", descripcion: "16GB RAM, 512GB SSD, RTX 4060", precio: 1299, stock: 10, categoria: "Laptop" },
    { id: 2, nombre: "PC Gamer Intel i7", descripcion: "32GB RAM, 1TB SSD, RTX 4070", precio: 1599, stock: 5, categoria: "PC" },
    { id: 3, nombre: "Monitor Gamer 27 pulgadas", descripcion: "165Hz, 1ms, Curvo", precio: 350, stock: 15, categoria: "Accesorio" },
    { id: 4, nombre: "Teclado Mecánico RGB", descripcion: "Switches Red, Antiderrame", precio: 89, stock: 20, categoria: "Accesorio" },
    { id: 5, nombre: "Mouse Gamer Inalámbrico", descripcion: "16000 DPI, 8 botones", precio: 65, stock: 25, categoria: "Accesorio" },
    { id: 6, nombre: "Audífonos Gamer 7.1", descripcion: "Micrófono con cancelación", precio: 120, stock: 18, categoria: "Accesorio" }
];

function mostrarProductos(lista) {
    const contenedor = document.getElementById('productos');
    contenedor.innerHTML = '';
    lista.forEach(prod => {
        contenedor.innerHTML += `
            <div class="card">
                <h3>${prod.nombre}</h3>
                <p>${prod.descripcion}</p>
                <p class="precio">$${prod.precio}</p>
                <p>Stock: ${prod.stock}</p>
            </div>
        `;
    });
}

window.onload = () => {
    mostrarProductos(productos);
}
