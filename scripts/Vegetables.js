export async function Veggies() {
    const response = await fetch("http://localhost:8088/vegetables")
    const veggies = await response.json()
    let html = '<section class="choices__veggies options">'
    html += "<h2>Vegetables</h2>"
    html += veggies.map(veggie => `
        <label>
            <input type="radio" name="vegetable" value="${veggie.id}" />
            ${veggie.type}
        </label>
    `).join("")
    html += "</section>"
    return html
}