const createTableBtn = document.getElementById('createTableBtn');
const saveTableBtn = document.querySelector('.saveBtn');
const portraitTableBox = document.getElementById('portraitTableBox');


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
            let cellText = document.createElement('span');

            if (i === 0) {
                cellText.textContent = (cellName[j]);
            } else if (i === 1) {
                cellText.textContent = (cellName[3 + j]);
            } else if (i === 2) {
                cellText.textContent = (cellName[6 + j]);
            }

            cell.appendChild(cellText);
            row.appendChild(cell);

            if (cell.textContent === "Color") {
                cell.className = 'cell color-cell';
                cell.id = 'color-cell';
                cellText.id = 'span-color';
            } else {
                cell.className = 'cell img-cell';
            }
        }
        newTable.appendChild(row);
    }
    portraitTableBox.appendChild(newTable);
}

function fillImageInfo(el) {
    return () => {
        el.textContent = null;
        let imageElement = document.createElement('img');
        el.appendChild(imageElement);
        imageElement.alt = prompt('Association?');
        imageElement.src = prompt('Download the picture. Enter link:');
    };
}

createTableBtn.addEventListener('click', () => {
    createNewTable();
    let elementsByClassName = document.getElementsByClassName('img-cell');

    for (let el of elementsByClassName) {
        el.addEventListener('click', fillImageInfo(el));
    }

    addListenerToColorCell();
});

function deleteSpanText(cell) {
    cell.textContent = null;
}

function addColorInput(cell) {
    let color = document.createElement('input');
    cell.appendChild(color);
    color.id = 'input-color';
    color.className = 'inputColor';
    color.type = 'color';
}

function addListenerToColorCell() {
    let fillColorCell = document.getElementById("color-cell");

    fillColorCell.addEventListener('click', () => {
        const spanText = document.getElementById('span-color');
        const inputColor = document.getElementById('input-color');

        if (spanText) {
            deleteSpanText(fillColorCell);
        }
        if (!inputColor) {
            addColorInput(fillColorCell);
        }
    });
}

