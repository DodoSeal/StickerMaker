const paperDiv = document.getElementById('paper');
const fileUpload = document.getElementById('file-upload');
const generateBtn = document.getElementById('generate-paper');
const printBtn = document.getElementById('print-paper');
const clearBtn = document.getElementById('clear-paper');

let stickerData = "";

fileUpload.addEventListener('change', function() {
    let images = this.files;
    const reader = new FileReader();

    reader.onload = (e) => {
        stickerData = e.target.result;
    };

    reader.readAsDataURL(images[0]);
});

generateBtn.addEventListener('click', () => {
    if (stickerData == "") {
        return alert("Nothing was uploaded!");
    };

    paperDiv.innerHTML = "";

    for(let i=0; i<20; i++) {
        let sticker = document.createElement('img');
        sticker.src = stickerData;
        paperDiv.appendChild(sticker);
    };
});

printBtn.addEventListener('click', () => {
    if (paperDiv.innerHTML == "") {
        return alert("Nothing was uploaded!");
    };

    window.print();
});

clearBtn.addEventListener('click', () => {
    paperDiv.innerHTML = "";
    fileUpload
});