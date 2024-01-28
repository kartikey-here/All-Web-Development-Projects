const gen = () => {
    let codd=document.getElementById('codd');
    let codd1=document.getElementById('codd1');
    a=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    var col='#'
    for(var i=0;i<6;i++){
        var ran=Math.floor(Math.random()*16);
        // console.log(ran)
        col+=a[ran];
    }
    codd.innerHTML=col;
    document.getElementById('plate').style.backgroundColor=col;
    codd1.innerHTML=col;
    document.getElementById('plate1').style.backgroundColor=col;
}