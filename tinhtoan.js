function caculator(type) {
    let a=parseFloat(document.getElementById("n1").value);
    let b=parseFloat(document.getElementById("n2").value);
    if(type==1){
        let c=a+b;
        document.getElementById("result").innerHTML="Kết quả là " + c;


    }
    if(type==2){
        let c=a-b;
        document.getElementById("result").innerHTML="Kết quả là " + c;

    }
    if(type==3){
        let c=a*b;
        document.getElementById("result").innerHTML="Kết quả là " + c;
    }
    if(type==4){
        let c=a/b;
        document.getElementById("result").innerHTML="Kết quả là " + c;
    }
}

