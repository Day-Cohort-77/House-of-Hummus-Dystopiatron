export async function Entrees() {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()
    let html = '<section class="choices__base options">'
    html += "<h2>Entrees</h2>"
    html += entrees.map(entree => `
        <label>
            <input type="radio" name="entree" value="${entree.id}" />
            ${entree.name}
        </label>
    `).join("")
    html += "</section>"
    return html
}