var estrela, estrelaimg;
var meteoro, meteoroimg;
var foguete, fogueteimg;
var bg, bgimg;
var gameState="Play";

function preload(){
 estrelaimg = loadImage("Estrela.png");
 meteoroimg = loadImage("Meteoro.png");
 fogueteimg = loadImage("Foguete.png");
 bgimg = loadImage("Fundo estrelado.png");
}

function setup() {
 createCanvas(600,600);

 bg=createSprite(300,300);
 bg.addImage("bg", bgimg);
 bg.velocityY = 1;

 estrelasGroup = new Group();
 meteoroGroup = new Group();
 
 foguete=createSprite(200,200,50,50);
 foguete.scale = 0.8;
 foguete.addImage("foguete", fogueteimg);
}

function draw() {
 background(255);

 if(bg.y > 400){
    bg.y = 300
  } 

  if (gameState === "Play") {
    
    if(keyDown("left")){
        foguete.x = foguete.x - 3;
    }
    if(keyDown("right")){
          foguete.x = foguete.x + 3;
    }
    if(keyDown("space")){
         foguete.velocityY = -10;
    }

    foguete.velocityY = foguete.velocityY + 0.8;
  
   
      spawnestrelas();

      if(estrelasGroup.isTouching(foguete)){
        foguete.velocityY = 0;
        gameState="end";
      }
      
    drawSprites();
}
if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnestrelas()
 {
  if (frameCount % 240 === 0) {
    var estrela = createSprite(random(100,500), -50);
    var meteoro = createSprite(random(100,500), 10);
    estrela.scale=0.1;
    meteoro.scale=0.1;

    estrela.addImage(estrelaimg);
    meteoro.addImage(meteoroimg);
    
    estrela.velocityY = 3;
    meteoro.velocityY = 3;
     
    foguete.depth = estrela.depth;
    foguete.depth +=1;
    
    estrela.lifetime = 800;
    meteoro.lifetime = 800;
    
     estrelasGroup.add(estrela);
     meteoroGroup.add(meteoro);
  }
}