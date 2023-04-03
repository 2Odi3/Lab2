function calc(event){
    event.preventDefault();
    var no1 = document.getElementById('n1').value;
    var no2 = document.getElementById('n2').value;

    if(no1 > no2){
        var va1 = parseInt(no1) + parseInt(no2);
        var va2 = parseInt(no1) - parseInt(no2);
    }
    else{
        var va1 = parseInt(no1) * parseInt(no2);
        var va2 = parseInt(no1) / parseInt(no2);
    }
    document.getElementById("a1").value = va1;
    document.getElementById("a2").value = va2;
}