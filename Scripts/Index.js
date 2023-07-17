
/*Calculadora Inicial*/
function insert(num){
    var numero = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = numero + num;
}
function clean(){
    document.getElementById('tela').innerHTML = "";
}
function back(){
    var tela = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = tela.substring(0, tela.length -1);
    }
    function calcular(){
    var tela = document.getElementById('tela').innerHTML;
    if (tela){
        document.getElementById('tela').innerHTML = eval(tela);
    }
    else{
        document.getElementById('tela').innerHTML = "Nada...";
    }
    }



/*Abrir e fechar*/
function abrir1(){
    let abrirarea1 = document.getElementById("area1");
    abrirarea1.style.display = "flex";
}
function abrir2(){
    let abrirarea2 = document.getElementById("area2");
    abrirarea2.style.display = "flex";
}
function abrir3(){
    let abrirarea3 = document.getElementById("area3");
    abrirarea3.style.display = "flex";
}
function sair(){
    let sair1 = document.getElementById("area1");
    sair1.style.display = "none";
    let sair2 = document.getElementById("area2");
    sair2.style.display = "none";
    let sair3 = document.getElementById("area3");
    sair3.style.display = "none";
}