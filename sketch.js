var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
var apple
var leaf
var leafImg

function preload(){
gardenImg = loadImage("garden.png");
rabbitImg = loadImage("rabbit.png");
appleImg = loadImage("apple.png")
leafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
background(0);
rabbit.x = World.mouseX;
edges= createEdgeSprites();
var select = Math.round(random(1,2));
if(frameCount % 80 == 0 ){
if(select == 1){
spawnApple()
}
else{
spawnLeaves()
} }
rabbit.collide(edges);
drawSprites();

}



function spawnApple(){
  

apple = createSprite (random(50,350),40)
apple.addImage(appleImg)
apple.scale = 0.8
apple.lifetime = 50
apple.scale = 0.1
apple.velocityY = 4
}

          
function spawnLeaves(){
  

leaf = createSprite (random(50,350),40)
leaf.addImage(leafImg)
leaf.scale = 0.8
leaf.lifetime = 50
leaf.scale = 0.1
leaf.velocityY = 4
 }
 




