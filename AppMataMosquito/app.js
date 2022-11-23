        /* NO JAVA SCRIPT, MUITAS VEZES IREMOS ADICIONANDO NOVAS LINHAS DE CÓDIGO ACIMA DE CÓDIGOS JA PRONTOS. ISSO PORQUE O JS
            LÊ A ESTRUTURA DE CIMA PARA BAIXO.*/

//encontar a altura e largura da pagina atraves do objeto WINDOW
var altura = 0;
var largura = 0;
var vidas = 1; //variavel criada para representar o id das imagens vida
var tempo = 15; //variavel criada para o cronometro (10 segundos)
var criaMosquitoTempo = 1500 //variavel que indica de quantos segundos o mosquito aparece

function ajustaTamanhoPalcoJogo(){
  altura = window.innerHeight;
  largura = window.innerWidth;

  console.log(largura, altura);
};
ajustaTamanhoPalcoJogo();

//criado um cronometro para finalização/vitoria do jogo
var cronometro = setInterval(function(){
  tempo -= 1; //a função diz que o tempo declarado recebe ele mesmo menos 1

  if(tempo < 0){
    clearInterval(cronometro, criaMosquito); //oposto de setInterval, elimina a contagem do cronometro e a inserção das moscas.
    window.location.href = 'vitoria.html';
  }else{
    document.getElementById('cronometro').innerHTML = tempo;
  }
}, 1000);

function posicaoRandomica(){

  //remover mosquito anterior (caso exista)
  if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove();

    //atualiza o coração de cheio para vazio caso não consiga clicar no mosquito.
    if(vidas > 3){
      //redireciona para outra pagina html
      window.location.href = 'fim_de_jogo.html';
    }else{
      document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";
      vidas++; //incremento criado para que acesse os id's v2 e v3
    };
  };

  //criar posições randomicas na tela
  var posicaoX = Math.floor(Math.random() * largura) - 90;
  var posicaoY = Math.floor(Math.random() * altura) - 90;

  //SE POSIÇÃO FOR MENOR DO QUE 0, RETORNE 0, SENAO RETORNE A POSIÇÃO
  //usado este operador ternario para que não dê valor negativo
  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  console.log(posicaoX, posicaoY);

  //criar o elemento html
  var mosquito = document.createElement('img'); //cria uma imagem
  mosquito.src = 'imagens/mosca.png'; //recupera a variavel criada e acessa seu atributo (no caso o src)
  mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();//recupera a variavel criada e acessa seu atributo (no caso a class)
  mosquito.id = 'mosquito'; //define um id para o elemento html
  document.body.appendChild(mosquito); //cria/insere um "filho"/elemento dentro do body
  //atribui a função de click ao elemento criado
  mosquito.onclick = function(){
    this.remove();
  };

  //insere a imagem em posições randomicas
  mosquito.style.left = posicaoX + 'px'; //acessa o elemento style left do objeto mosquito e atribui a posicao
  mosquito.style.top = posicaoY + 'px'; //acessa o elemento style top do objeto mosquito e atribui a posicao
  mosquito.style.position = 'absolute'; ////acessa o elemento style position do objeto mosquito e define a posição como absolute

}
posicaoRandomica();

function tamanhoAleatorio(){
  //insere a imagem em tamanhos diferentes
  var classe = Math.floor(Math.random() * 3);

  switch(classe){
    case 0:
      return 'mosquito1';
    case 1:
      return 'mosquito2';
    case 2:
      return 'mosquito3';
  }
} //a chamada da função é feita na criação do elemento html, no className

function ladoAleatorio(){
  //altera a direção da imagem
  var classe = Math.floor(Math.random() * 2);

  switch(classe){
    case 0:
      return 'ladoA';
    case 1:
      return 'ladoB';
  }
} //a chamada da função é feita na criação do elemento html, no className

//esse código é adicionado fora de qualquer função para que o tempo comece com o numero desejado
document.getElementById('cronometro').innerHTML = tempo;

//definindo o nível do jogo
var nivel = window.location.search; //o comando search recupera o parametro a direita do ponto de interrogação (inclusive o ponto)
nivel = nivel.replace('?', ''); //replace remove um parametro desejado e substitui por outro desejado

if(nivel === 'normal'){
  criaMosquitoTempo = 1500;
}else if(nivel === 'hard'){
  criaMosquitoTempo = 900;
}else if(nivel === 'expert'){
  criaMosquitoTempo = 750;
}

//especifica um intervalo de tempo em ms. A ação é uma função responsável por chamar o médtodo posicaoRandomica
var criaMosquito = setInterval(() => {
  posicaoRandomica();
}, criaMosquitoTempo);

