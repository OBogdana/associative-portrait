const createTableBtn = document.getElementById('createTableBtn');
// const saveTableBtn = document.querySelector('.saveBtn');
const portraitTableBox = document.getElementById('portraitTableBox');

// let tables = [
//     {
//         caption: "",
//         cells: [
//             {
//                 type: "image",
//                 link: "http://some-link.jpg"
//             },
//             {
//                 type: "color",
//                 color: "#333"
//             }
//         ]
//     },
//     {}
// ]
let tables = []

tables.push({
    caption: "some-name",
    cells: [{
        position: "position-1-1"
    }]
})

// JSON.stringify(tables)
// JSON.parse("{}")

function loadExistingTables(){

}
loadExistingTables();
function saveCell() {

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
            let cellNames = ["Animal", "Place", "Flower", "Character", "Season", "Hobby", "Color", "Rock", "Food"];
            let cellSpan = document.createElement('span');

            if (i === 0) {
                cellSpan.textContent = (cellNames[j]);
            } else if (i === 1) {
                cellSpan.textContent = (cellNames[3 + j]);
            } else if (i === 2) {
                cellSpan.textContent = (cellNames[6 + j]);
            }

            row.appendChild(cell);
            cell.appendChild(cellSpan);

            if (cellSpan.textContent === "Color") {
                cell.className = 'cell color-cell position-' + i + "-" + j;
                cellSpan.className = 'spanColor';
            } else {
                cell.className = 'cell img-cell';
            }
        }
        newTable.appendChild(row);
    }
    portraitTableBox.appendChild(newTable);
    return newTable;
}

function fillImageInfo(el) {
    return () => {
        el.textContent = null;
        let imageElement = document.createElement('img');
        el.appendChild(imageElement);
        imageElement.alt = prompt('Association?');
        imageElement.src = prompt('Enter link to the picture:');
        saveCell();
    };

}

function clearTextAndInsertColorInput(colorCell) {
    return () => {
        let spanColorElements = colorCell.getElementsByClassName('spanColor');
        if (spanColorElements.length !== 0) {
            colorCell.textContent = null;
            let colorInputElement = document.createElement('input');
            colorCell.appendChild(colorInputElement);
            colorInputElement.className = 'inputColor';
            colorInputElement.type = 'color';
            saveCell();
        }
    };
}

createTableBtn.addEventListener('click', () => {
    let newTable = createNewTable();
    let chooseImageCell = document.getElementsByClassName('img-cell');

    for (let el of chooseImageCell) {
        el.addEventListener('click', fillImageInfo(el));
    }

    addLogicToColorCell(newTable);
});

function addLogicToColorCell(newTable) {
    let colorCells = newTable.getElementsByClassName('color-cell');
    for (let colorCell of colorCells) {
        colorCell.addEventListener('click', clearTextAndInsertColorInput(colorCell));
    }
}
