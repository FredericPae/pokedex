// Speicherfunktion wird zu einem anderem Zeitpunkt hinzugefügt

function openLibrary(isOpen) {
    let action = isOpen ? 'remove' : 'add';
    document.getElementById("mainInfoBox").classList[action]("d-none");
    document.getElementById("mainMenu").classList[action]("d-none");
    document.getElementById('body').classList[isOpen ? 'add' : 'remove']('noScroll');
}