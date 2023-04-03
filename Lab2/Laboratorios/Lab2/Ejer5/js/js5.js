function calc(event){
    event.preventDefault();
    var no1 = parseInt(document.getElementById('n1').value);
    var no2 = parseInt(document.getElementById('n2').value);
    var no3 = parseInt(document.getElementById('n3').value);

    if(no1>no3){
        if(no1>no2){
            var res = no1
        }
        else{
            var res = no2
        }
    }
    else if(no3>no2){
        var res = no3        
    }
    else{
        var res = no2
    }
    
    document.getElementById("a1").value = res;
}