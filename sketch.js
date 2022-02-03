var caminho, player, bordaEsquerda, bordaDireita;
var caminhoImg, playerImg;

function preload(){
  caminhoImg = loadImage ("path.png");
  playerImg = loadAnimation ("Runner-1.png", "Runner-2.png");
 
}

function setup(){
createCanvas(410,500);

caminho = createSprite(200,250,50,50)
caminho.addImage ("caminho", caminhoImg);
caminho.velocityY = caminho.height /2;
caminho.velocityY = 5;
caminho.scale=1.4;

player = createSprite(200,380,20,20);
player.addAnimation ("correndo", playerImg);
player.scale=0.1;
  
bordaEsquerda = createSprite(10,205,25,550);
bordaEsquerda.visible = false;

bordaDireita = createSprite(390,205,25,550);
bordaDireita.visible = false;
}

function draw() {
  background("yellow");
  
  player.x = World.mouseX;
  
  player.collide(bordaEsquerda);
  player.collide(bordaDireita);
  
  if(caminho.y > 500 ){
    caminho.y = height / 2;
  }
  
  drawSprites();
}
