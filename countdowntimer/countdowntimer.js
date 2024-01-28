let d = document.getElementById('days');
let h = document.getElementById('hrs');
let m = document.getElementById('mins');
let s = document.getElementById('secs');
const google = () => {
    let ms = d.value * 24 * 3600 + h.value * 3600 + m.value * 60 + s.value;
    var x = setInterval(() => {
        ms -= 1;
        d.value = Math.floor(ms / 24 / 3600)
        h.value = Math.floor((ms / 3600) % 24)
        m.value = Math.floor((ms / 60) % 24)
        s.value = Math.floor(ms % 60)
        if (ms == 0) {
            clearInterval(x);
            alert('COUNTDOWN COMPLETE');
        }
    }, 1000)
}