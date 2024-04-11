// const portraitName = document.getElementById('portraitName');
const createTableBtn = document.getElementById('createTableBtn');
// const changeColorCell = document.getElementById('row-3').querySelector('.color-cell');
// let elementsByClassName = document.getElementsByClassName('img-cell');
const saveTableBtn = document.querySelector('.saveBtn');
const portraitTableBox = document.getElementById('portraitTableBox');


createTableBtn.addEventListener('click', () => {

    let newTable = document.createElement('table');
    let caption = document.createElement('caption');
    newTable.appendChild(caption);
    caption.textContent = prompt('Enter name');
    for (let i = 1; i < 4; i++){
        let row = document.createElement('tr');
        for (let j = 1; j < 4; j++){
            let cell = document.createElement('td');
            let cellText = document.createTextNode('Row ' + i + ', Cell ' + j);
            cell.appendChild(cellText);
            row.appendChild(cell);
            cell.className = 'cell img-cell';
        }
        newTable.appendChild(row);

    }
    portraitTableBox.appendChild(newTable);
    let elementsByClassName = document.getElementsByClassName('img-cell');
    for (let el of elementsByClassName) {
        el.addEventListener('click', () => {
            el.textContent = null;
            let imageElement = document.createElement('img');
            el.appendChild(imageElement);
            imageElement.alt = prompt('Association?');
            imageElement.src = prompt('Download the picture. Enter link:');
        });
    }
});


// saveTableBtn.addEventListener('click', () => {
//     let blob = new Blob([portraitTableBox.outerHTML], { type: 'text/html' });
//     let url = URL.createObjectURL(blob);
//     let a = document.createElement('a');
//     a.href = url;
//     a.download = 'table.html';
//     a.click();
//     URL.revokeObjectURL(url);
// })


function deleteSpanText() {
    changeColorCell.textContent = null;
}

function addColorInput() {
    let color = document.createElement('input');
    changeColorCell.appendChild(color);
    color.id = 'input-color';
    color.className = 'inputColor';
    color.type = 'color';
}

changeColorCell.addEventListener('click', () => {
    const spanText = document.getElementById('color-text');
    const inputColor = document.getElementById('input-color');

    if (spanText) {
        deleteSpanText();
    }
    if (!inputColor) {
        addColorInput();
    }
});