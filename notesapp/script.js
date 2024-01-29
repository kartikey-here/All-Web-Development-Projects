let notes = document.querySelectorAll('notes');
let body = document.getElementById('body');
const plus = (data) => {
    if (data === undefined) {
        data = ''
    }
    const note = document.createElement('div');
    note.classList.add('note')
    note.innerHTML += `
        <div class="option">
            <button id="save"></button>
            <button id="del"></button>
        </div> <input type="text" class="notes" placeholder="A Crappy Place to Keep your Notes" value="`+ data + `">
    `;
    body.appendChild(note);
    save();
    note.querySelector('#del').addEventListener('click', function () {
        note.remove();
        save();
    });
    note.querySelector('#save').addEventListener('click', function () {
        save();
    });
};
const save = () => {
    const notes = document.querySelectorAll('.notes');
    const data = [];
    notes.forEach(
        note => {
            data.push(note.value);
        }
    )
    localStorage.setItem('notes', JSON.stringify(data))
};

const def = () => {
    const data = JSON.parse(localStorage.getItem('notes'));
    data.forEach(
        data => {
            if (data != '')
                plus(data)
        }
    )
};
def();