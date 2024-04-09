const portraitName = document.getElementById('portraitName');
const createTableBtn = document.getElementById('createTableBtn');
const changeColorCell = document.getElementById('row-3').querySelector('.color-cell');
let elementsByClassName = document.getElementsByClassName('img-cell');
const saveTableBtn = document.querySelector('.saveBtn');
const portraitTable = document.getElementById('portraitTableBox');


createTableBtn.addEventListener('click', () => {
    portraitName.textContent = prompt('Enter name');
});

saveTableBtn.addEventListener('click', () => {
    let blob = new Blob([portraitTable.outerHTML], { type: 'text/html' });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = 'table.html';
    a.click();
    URL.revokeObjectURL(url);
})

for (let el of elementsByClassName) {
    el.addEventListener('click', () => {
        el.textContent = null;
        let imageElement = document.createElement('img');
        el.appendChild(imageElement);
        imageElement.alt = prompt('Association?');
        imageElement.src = prompt('Download the picture. Enter link:');
    });
}

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