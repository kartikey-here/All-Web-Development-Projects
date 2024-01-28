let op = document.getElementById('output');
let sho = document.getElementById('show');
let small = 'abcdefghijklmnopqrstuvwxyz'.split('');
let large = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let digits = '1234567890'.split('');
let spchar = '!@#$%^&*'.split('');
let pass = [];
const gen = () => {
    sho.innerHTML = 'Show Password';
    x=0
    pass = []
    sho.style.visibility = 'visible';
    op.value = '************';
    for (var i = 0; i < 4; i++) {
        var randomIndex = Math.floor(Math.random() * small.length);
        pass.push(small[randomIndex])
        pass = arrangearray(pass)
    }
    pass = arrangearray(pass)
    for (var i = 0; i < 4; i++) {
        var randomIndex = Math.floor(Math.random() * large.length);
        pass.push(large[randomIndex])
        pass = arrangearray(pass)
    }
    pass = arrangearray(pass)
    for (var i = 0; i < 4; i++) {
        var randomIndex = Math.floor(Math.random() * digits.length);
        pass.push(digits[randomIndex])
        pass = arrangearray(pass)
    }
    pass = arrangearray(pass)
    for (var i = 0; i < 2; i++) {
        var randomIndex = Math.floor(Math.random() * spchar.length);
        pass.push(spchar[randomIndex])
        pass = arrangearray(pass)
    }
    pass = arrangearray(pass)
}
let x = 0;
const show = () => {
    if (x == 0) {
        sho.innerHTML = 'Hide Password';
        op.value = pass.join('');
        x = 1
    }
    else{
        sho.innerHTML = 'Show Password';
        op.value = '************';
        x = 0
    }
}

const arrangearray = (arr) => {
    var indices = Array.from({ length: arr.length }, (_, index) => index + 1);
    var ret = []
    for (var i = 0; i < arr.length; i++) {
        var randomIndex = Math.floor(Math.random() * indices.length);
        var index = indices[randomIndex]
        ret[i] = arr[index - 1]
        indices.splice(randomIndex, 1);
    }
    return ret;
}