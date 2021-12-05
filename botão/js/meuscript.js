var conteudo= document.getElementById('conteudo');
var botao= document.getElementById('mostre_mais');

//criar o evento do clivk do botão utilizando uma função anônima
botao.onclick= function(){

    if(conteudo.className =="open"){
    
        //encurtar a caixa
        conteudo.className="";//muda a classe da div conteudo para ""
        botao.innerHTML= "Mostrar Mais";
    }
    else{
        conteudo.className="open";
        botao.innerHTML="mostrar menos";
    }
};