const { calcularTotal } = require('./carrito');

test('calcula el total de múltiples productos', () => {
    const carrito = [
        { precio: 800, cantidad: 1 },
        { precio: 20, cantidad: 2 }
    ];
    expect(calcularTotal(carrito)).toBe(840);
});
