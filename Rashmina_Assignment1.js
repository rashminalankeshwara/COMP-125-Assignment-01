document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tableForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        createTable();
    });
});

function createTable() {
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
    const tablecontent= document.getElementById('tablecontent');

    tablecontent.innerHTML = '';

    const table = document.createElement('table');
    table.border = '1';

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('td');
            cell.textContent = `Row ${i + 1} Col ${j + 1}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    tablecontent.appendChild(table);
}
