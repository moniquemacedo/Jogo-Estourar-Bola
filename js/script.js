function addBola(){
    // Criando uma div com a class bola
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    // Calcular duas posições aleatórias para amostrar a bola
    var p1 = Math.floor(Math.random() * 500); // Math.random() vai gerar um número aleatório de 0 a 500.  Math.floor vai transformar em inteiro.
    var p2 = Math.floor(Math.random() * 400);

    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;") // adicionando um style com propriedades left e top das bolinhas - Posicionamento

    bola.setAttribute("onclick", "estourar(this)") // Adicionando clique

    document.body.appendChild(bola); // Adicionar a bola.
}

function estourar(elemento){
    document.body.removeChild(elemento); // Remover a bola.
}

function iniciar(){
    setInterval(addBola, 1000); // Vai aparecer a bola a cada 1 segundos
}