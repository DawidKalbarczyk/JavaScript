document.querySelectorAll('.js-select-button').forEach((buttonNr) => {
    let html = ``;
    for (let i = 1; i<=10; i++) {
        html += `<option value="${i}">${i}</option>\n`;
    }
    buttonNr.innerHTML = html;
});



