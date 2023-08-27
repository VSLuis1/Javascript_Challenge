const insert = document.getElementsByClassName("insert");

window.addEventListener("keydown" , (event) =>{
        insert.innerHTML = 
        `<div>
            <table>
                <tr>
                    <th>Key</th>
                    <th>KeyCode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${event.key}</td>
                    <td>${event.keyCode}</td>
                    <td>${event.code}</td>
                </tr>
            </table>
        </div>
    `
})