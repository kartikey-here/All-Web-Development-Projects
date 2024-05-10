let notes = document.querySelectorAll('notes');
let body = document.getElementById('body');

const plus = (data) => {
    if (data === undefined) {
        data = ''
    }
    const note = document.createElement('div');
    note.classList.add('note')
    note.innerHTML += `
    <input type="text" class="notes" onchange="save()" placeholder="A Crappy Place to Make your List..." value="`+ data + `">
        <div class="option">
            <button id="markasdone"></button>
            <!--<button id="update"></button>-->
            <button id="del"></button>
        </div> `;
    body.appendChild(note);
    save();
    note.querySelector('#del').addEventListener('click', function () {
        note.remove();
        save();
    });
    // note.querySelector('#update').addEventListener('click', function () {
    //     var a=prompt('Enter the updated Task');
    //     note.querySelector('.notes').value = a;
    //     save();
    // });
    note.querySelector('#markasdone').addEventListener('click',function (){
        if(note.querySelector('.notes').style.textDecoration==='line-through'){
            note.querySelector('.notes').style.textDecoration=null;
        }
        else{
            note.querySelector('.notes').style.textDecoration='line-through';
        }
    })
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
