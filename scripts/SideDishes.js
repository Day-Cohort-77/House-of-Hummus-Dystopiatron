// This function gets all side dishes and returns HTML for radio buttons using map()
export async function Sides() {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()
    let html = '<section class="choices__sides options">'
    html += "<h2>Side Dishes</h2>"
    html += sides.map(side => `
        <label>
            <input type="radio" name="sideDish" value="${side.id}" />
            ${side.title}
        </label>
    `).join("")
    html += "</section>"
    return html
}