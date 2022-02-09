function check(){
    document.getElementById("x0").style.display = "none";
    document.getElementById("khung").style.display = "none";
    for(var i = 0 ; i   < 2; i++ ){
        document.getElementsByClassName("x1")[i].style.display = "none"
    }
    for(var i = 0 ; i < 3; i++ ){
        document.getElementsByClassName("x2")[i].style.display = "none"
    }
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var delta = Math.pow(b,2)-4*a*c;
    document.getElementById("delta").innerText = delta
    if(delta < 0){
        document.getElementById("khung").style.display = "block";
        document.getElementById("x0").style.display = "block";
    }
    else if(delta == 0){
        var x0 = -b/(2*a);
        document.getElementById("x").innerText = x0
        for(var i = 0 ; i < 2; i++ ){
            document.getElementById("khung").style.display = "block";
            document.getElementsByClassName("x1")[i].style.display = "block"
        }
        
    }
    else{
        var x1 = (-b + Math.sqrt(delta))/(2*a);
        var x2 = (-b - Math.sqrt(delta))/(2*a);
        document.getElementById("x1").innerText = x1
        document.getElementById("x2").innerText = x2
        for(var i = 0 ; i < 3; i++ ){
            document.getElementById("khung").style.display = "block";
            document.getElementsByClassName("x2")[i].style.display = "block"
            
        }
    }
}


function validatePTB2(){
    var a = document.forms["formPTB2"]["a"].value
    var b = document.forms["formPTB2"]["b"].value
    var c = document.forms["formPTB2"]["c"].value

    if(a == ""){
        var check = document.getElementById("valida").style.color = "red"
        check = "✘"
        document.getElementById("valida").innerText = check;
        document.getElementById("khung").style.display = "none";	
    }
    if(b == ""){
        var check = document.getElementById("validb").style.color = "red"
        check = "✘"
        document.getElementById("validb").innerText = check;
        document.getElementById("khung").style.display = "none";	
    }
    if(c == ""){
        var check = document.getElementById("validc").style.color = "red"
        check = "✘"
        document.getElementById("validc").innerText = check;
        document.getElementById("khung").style.display = "none";	
    }
    return false
}
function ACheck(){
    var a = document.forms["formPTB2"]["a"].value
    if(isNaN(a) == true){
        var replace = a.slice(0,a.length-1);
		document.getElementById("a").value =  replace
        var check = document.getElementById("valida").style.color = "red"
        check = "✘"
        document.getElementById("valida").innerText = check;
        document.getElementById("khung").style.display = "none";	
    }
    else{
        var check = document.getElementById("valida").style.color = "green"
        check = "✔"
        document.getElementById("valida").innerText = check;
    }
}

function BCheck(){
    var b = document.forms["formPTB2"]["b"].value
    if(isNaN(b) == true){
        var replace = b.slice(0,b.length-1);
		document.getElementById("b").value =  replace
        var check = document.getElementById("validb").style.color = "red"
        check = "✘"
        document.getElementById("validb").innerText = check;
        document.getElementById("khung").style.display = "none";	
    }
    else{
        var check = document.getElementById("validb").style.color = "green"
        check = "✔"
        document.getElementById("validb").innerText = check;
    }
}

function CCheck(){
    var c = document.forms["formPTB2"]["c"].value
    if(isNaN(c) == true){
        var replace = c.slice(0,c.length-1);
		document.getElementById("c").value =  replace
        var check = document.getElementById("validc").style.color = "red"
        check = "✘"
        document.getElementById("validc").innerText = check;
        document.getElementById("khung").style.display = "none";	
    }
    else{
        var check = document.getElementById("validc").style.color = "green"
        check = "✔"
        document.getElementById("validc").innerText = check;
    }
}


function checkRandom(){
    randomA =  20 + Math.round(-20 * Math.random());
    randomB =  20 + Math.round(-20 * Math.random());
    randomC =  20 + Math.round(-20 * Math.random());

    document.getElementById("a").value = randomA
    document.getElementById("b").value = randomB
    document.getElementById("c").value = randomC
    ACheck()
    BCheck()
    CCheck()
    check()
}

function Dong_ho() {
    var gio = document.getElementById("gio");
    var phut = document.getElementById("phut");
    var giay = document.getElementById("giay");
    var Gio_hien_tai = new Date().getHours();
    var Phut_hien_tai = new Date().getMinutes();
    var Giay_hien_tai = new Date().getSeconds();
    gio.innerHTML = Gio_hien_tai;
    phut.innerHTML = Phut_hien_tai;
    giay.innerHTML = Giay_hien_tai;
}
var Dem_gio = setInterval(Dong_ho, 1000);