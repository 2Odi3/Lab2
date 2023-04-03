function calc(event){
    event.preventDefault();
    var no1 = document.getElementById('n1').value;
    var no2 = document.getElementById('n2').value;
    var no3 = document.getElementById('n3').value;
    var no4 = document.getElementById('n4').value;
    var va1 = parseInt(no1) + parseInt(no2);
    var va2 = parseInt(no3) * parseInt(no4);
    document.getElementById("a1").value = va1;
    document.getElementById("a2").value = va2;
}