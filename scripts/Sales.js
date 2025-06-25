export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/orders?_expand=entree&_expand=vegetable&_expand=side").then(res => res.json())

     const salesHTML = sales.map((sale) => {
const totalPrice = sale.entree.price + sale.vegetable.price + sale.side.price;
        return `
    <div>
     Order #${sale.id}: $${totalPrice.toFixed(2)}
    </div>`;
}).join("");

     return salesHTML
 }

