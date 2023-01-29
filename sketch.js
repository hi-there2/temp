var bg, bgImg
var cat, catImg1, catImg2, catImg3, catImg4, catImg5, catImg6, catImg7, catImg8, catRunAnimation;
var Night, NightImg1,NightImg2,NightImg3,NightImg4,NightSquish,NightWalkAnimation;
var spike, spikeImg;

function preload(){
bgImg = loadImage("assets/bg.png")

catRunAnimation = loadAnimation("assets/catRun1.png","assets/catRun2.png","assets/catRun3.png","assets/catRun4.png","assets/catRun5.png","assets/catRun6.png","assets/catRun7.png","assets/catRun8.png")
NightWalkAnimation = loadAnimation("assets/Night1.png","assets/Night2.png","assets/Night3.png","assets/Night4.png");
spikeImg = loadImage("assets/Spike.png");
}

function setup(){

  createCanvas(windowWidth,windowHeight);
//background image
bg = createSprite(windowWidth/2,windowHeight/2);
bg.addImage(bgImg);      
bg.scale = 3;

cat = createSprite(600,490,50,50);
cat.addAnimation("run",catRunAnimation);
cat.scale = 0.2;

Night = createSprite(500, 500, 30, 30);
Night.addAnimation("walk",NightWalkAnimation);
Night.scale = 0.1;

spike = createSprite(700, 500, 30, 30);
spike.addImage(spikeImg);
spike.scale = 0.5;
}

function draw() {
  drawSprites();
}