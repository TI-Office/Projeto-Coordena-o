//Horas Fevereiro
function TotalFevereiro() {
    //Horas Edson
    var Enum1 = document.querySelector(".fenum1").value;
    var Enum2 = document.querySelector(".fenum2").value;
    var Enum3 = document.querySelector(".fenum3").value;
    var Enum4 = document.querySelector(".fenum4").value;
    var Enum5 = document.querySelector(".fenum5").value;
    var Enum6 = document.querySelector(".fenum6").value;
    var Enum7 = document.querySelector(".fenum7").value;
   
    //Horas Maria
    var Mnum1 = document.querySelector(".fmnum1").value;
    var Mnum2 = document.querySelector(".fmnum2").value;
    var Mnum3 = document.querySelector(".fmnum3").value;
    var Mnum4 = document.querySelector(".fmnum4").value;

    //Horas Jean Moraes
    var Jnum1 = document.querySelector(".fjnum1").value;
    var Jnum2 = document.querySelector(".fjnum2").value;
    var Jnum3 = document.querySelector(".fjnum3").value;
   
   //Horas Fábio
   var Fnum1 = document.querySelector(".ffnum1").value;
   var Fnum2 = document.querySelector(".ffnum2").value;
   var Fnum3 = document.querySelector(".ffnum3").value;
   var Fnum4 = document.querySelector(".ffnum4").value;
   var Fnum5 = document.querySelector(".ffnum5").value;
   var Fnum6 = document.querySelector(".ffnum6").value;
   var Fnum7 = document.querySelector(".ffnum7").value;
   var Fnum8 = document.querySelector(".ffnum8").value;
   var Fnum9 = document.querySelector(".ffnum9").value;
   
    //Var Edson
    var resultadoe = parseInt(Enum1) + parseInt(Enum2) + parseInt(Enum3) + parseInt(Enum4)+ parseInt(Enum5)+ parseInt(Enum6)+ parseInt(Enum7);
    document.querySelector(".resultadoe").innerHTML = resultadoe;

    var resultado2 = parseInt(resultadoe) * parseInt(25);
    document.querySelector(".resultado2").innerHTML = resultado2;
    
    //Var Maria
    var resultadom = parseInt(Mnum1) + parseInt(Mnum2) + parseInt(Mnum3) + parseInt(Mnum4);
    document.querySelector(".resultadom").innerHTML = resultadom;

    var resultadom2 = parseInt(resultadom) * parseInt(25);
    document.querySelector(".resultadom2").innerHTML = resultadom2;

    //Var Jean
    var resultadoj = parseInt(Jnum1) + parseInt(Jnum2) + parseInt(Jnum3);
    document.querySelector(".resultadoj").innerHTML = resultadoj;

    var resultadoj2 = parseInt(resultadoj) * parseInt(35);
    document.querySelector(".resultadoj2").innerHTML = resultadoj2;
    //Var Fábio
    var resultadof = parseInt(Fnum1) + parseInt(Fnum2) + parseInt(Fnum3)+ parseInt(Fnum4)+ parseInt(Fnum5)+ parseInt(Fnum6)+ parseInt(Fnum7)+ parseInt(Fnum8)+ parseInt(Fnum9);
    document.querySelector(".resultadof").innerHTML = resultadof;

    var resultadof2 = parseInt(resultadof) * parseInt(35);
    document.querySelector(".resultadof2").innerHTML = resultadof2;
}

//horas Março
function TotalMarco() {
    //Horas Edson
    
   
    //Horas Vitor
    var Vnum1 = document.querySelector(".mvnum1").value;
    
    //Horas Jean Moraes
   
   //Horas Fábio
   var Fnum1 = document.querySelector(".mfnum1").value;
  
    //Var Vitor
    var horaMV = parseInt(Vnum1)
    document.querySelector(".horaMV").innerHTML = horaMV;

    var resultadov3 = parseInt(horaMV) * parseInt(25);
    document.querySelector(".resultadov3").innerHTML = resultadov3;

       
    //Var Fábio
    var horaMF = parseInt(Fnum1);
    document.querySelector(".horaMF").innerHTML = horaMF;

    var resultadof3 = parseInt(horaMF) * parseInt(35);
    document.querySelector(".resultadof3").innerHTML = resultadof3;
}


