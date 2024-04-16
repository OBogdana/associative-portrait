// const portraitName = document.getElementById('portraitName');
const createTableBtn = document.getElementById('createTableBtn');
// const changeColorCell = document.getElementById('row-3').querySelector('.color-cell');
// let elementsByClassName = document.getElementsByClassName('img-cell');
const saveTableBtn = document.querySelector('.saveBtn');
const portraitTableBox = document.getElementById('portraitTableBox');


function fillImageInfo(el) {
    return () => {
        el.textContent = null;
        let imageElement = document.createElement('img');
        el.appendChild(imageElement);
        imageElement.alt = prompt('Association?');
        imageElement.src = prompt('Download the picture. Enter link:');
    };
}

function createNewTable() {
    let newTable = document.createElement('table');
    let caption = document.createElement('caption');
    newTable.appendChild(caption);
    caption.textContent = prompt('Enter name');

    for (let i = 0; i < 3; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement('td');

            let cellName = ["Animal", "Place", "Flower", "Character", "Season", "Hobby", "Color", "Rock", "Food"];
            let cellText;
            if(i === 0) {
                cellText = document.createTextNode(cellName[j]);
            } else if (i === 1) {
               cellText = document.createTextNode(cellName[3+j]);
            } else if (i === 2) {
                cellText = document.createTextNode(cellName[6+j]);
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
            if(cell.textContent === "Color"){
                cell.className = 'cell color-cell'
            } else {
                cell.className = 'cell img-cell';
            }
        }
        newTable.appendChild(row);
    }
    portraitTableBox.appendChild(newTable);
}

createTableBtn.addEventListener('click', () => {
    createNewTable();
    let elementsByClassName = document.getElementsByClassName('img-cell');
    for (let el of elementsByClassName) {
        el.addEventListener('click', fillImageInfo(el));
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
    colorCell.textContent = null;
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