//encontar a altura e largura da pagina atraves do objeto WINDOW
var altura = 0;
var largura = 0;
function ajustaTamanhoPalcoJogo(){
  altura = window.innerHeight;
  largura = window.innerWidth;

  console.log(largura, altura);
};
ajustaTamanhoPalcoJogo();


function posicaoRandomica(){

  //remover mosquito anterior (caso exista)
  if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove();
  }

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

//especifica um intervalo de tempo em ms. A ação é uma função responsável por chamar o médtodo posicaoRandomica
setInterval(() => {
  posicaoRandomica();
}, 1000);