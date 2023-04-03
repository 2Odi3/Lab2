function calc(event){
    event.preventDefault();
    var no1 = parseFloat(document.getElementById('n1').value);
    var no2 = parseFloat(document.getElementById('n2').value);
    var no3 = parseFloat(document.getElementById('n3').value);

    var sum = no1 + no2 + no3;
    var prom = sum/3;

    if(prom >= 4){
        var msn = "Regular";
    }
    else{
        var msn = "Reprobado";
    }

    document.getElementById('p').value = prom;
    document.getElementById('a1').value = msn;
}