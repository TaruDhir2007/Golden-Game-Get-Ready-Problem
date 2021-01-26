var player, playerImg;
var scene1Img, scene1;
var exit, exitImg;
var scene2, scene2Img;
var eatPlayer, eatPlayerImg;
var pan, panImg;
var egg, eggImg;
var next, nextImg;
//var count = World.seconds;
var clean;
var clickSound;
var touch;
var cup, cupImg;
var fry, fryImg;
var banana, bananaImg;
var cleanScore = 0;
var coffee, coffeeImg;
var livingr, livingrImg;
var plate, plateImg;
var shirt, shirtImg;
var getReady , getReadyImg;
var mouse, mouseImg;
var food, foodImg;
var crack;
var book , bookImg;
var OMG, OMGimg;
var  broom, broomImg;
var creepy , creepyImg;
var web, webImg;
var bathroom, bathroomImg;
var ready, readyImg;


function preload(){
  scene1Img = loadImage("images/sleeping.png");
  exitImg = loadImage("images/exit.png");
  scene2Img = loadImage("images/kitchen top.png");
  eatPlayerImg = loadImage("images/eating.png");
  panImg = loadImage("images/frypan.png");
  eggImg = loadImage("images/egg.png");
  fryImg = loadImage("images/half fry.png");
  coffeeImg = loadImage("images/coffe.png");
  bananaImg = loadImage("images/banana.png");
  livingrImg = loadImage("images/living.png")
  plateImg = loadImage("images/Plate.png")
  cupImg = loadImage("images/coffeeCup.png");
  nextImg = loadImage("images/next.png")
  crack = loadSound("images/EggCrack.mp3")
  OMGimg = loadImage("images/OMG.png");
  mouseImage = loadImage("images/mouse.png");
  foodImg = loadImage("images/food.png");
  clickSound = loadSound("images/Good_Click.wav");
  bookImg = loadImage("images/book.png");
  creepyImg = loadImage("images/creepy.png");
  getReadyImg = loadImage("images/get Ready.png")
  webImg = loadImage("images/web.png");
  lizardImg = loadImage("images/lizard.png");
  spidyImg = loadImage("images/spidy.png")
  fancyImg = loadImage("images/no PARTY.png");
  summerImg = loadImage("images/summer.png");
  broomImg = loadImage("images/broom.png");
  great = loadSound("images/Ah.mp3")
  shirtImg = loadImage("images/shirt.png");
  bathroomImg = loadImage("images/washroom.jpg");
  readyImg = loadImage("images/Ready.png");
  dress1Img = loadImage("images/dress1.png");
  dress2Img = loadImage("images/dress2.png");
  dress3Img = loadImage("images/dress 3.png");
  top1Img = loadImage("images/top 1.png");
  top2Img = loadImage("images/Top 2.png");
  top3Img = loadImage("images/top 3.png");
  pant1Img = loadImage("images/pant 1.png");
  pant2Img = loadImage("images/pant 2.png")
  pant3Img = loadImage("images/pant 3.png");
  coatImg = loadImage("images/coat.png")
  casualImg = loadImage("images/Casual.png")
  skirtImg = loadImage("images/ProperSkir.png");
  tuxImg = loadImage("images/correctCoat.png");
  perfectImg = loadImage("images/perfect.png");
  casualSound = loadSound("images/casualVoice.mp3");
  summerSound = loadSound("images/SummerVoice.mp3");
  noPartySound = loadSound("images/noPartyVoice.mp3");
  perfectSound = loadSound("images/perfectVoice.mp3");
  l1Img = loadImage("images/lipstick1.png");
  l2Img = loadImage("images/lipstick2.png");
  l3Img = loadImage("images/lipstick3.png");
  l4Img = loadImage("images/lipstick4.png");
  l5Img = loadImage("images/lipstick5.png");
  l6Img = loadImage("images/lipstick6.png");
  darkImg = loadImage("images/dark.png");
  lightImg = loadImage("images/light.png");
}

function setup() {
  createCanvas(500, 490);
  scene1 = createSprite(250, 250, 10, 10);
  scene1.addImage("sleeping image", scene1Img);
  scene1.scale = 0.65;
  
  exit = createSprite(450, 450);
  exit.addImage("Exit Image", exitImg)
 
 
  
  
  scene2 = createSprite(250, 250);
  scene2.addImage("kitchen top image", scene2Img);
  scene2.scale = 0.7;
  scene2.visible = false;
  exit.scale = 0.55;
  
  
  eatPlayer = createSprite(60, 400);
  eatPlayer.addImage("girl eating", eatPlayerImg);
  eatPlayer.scale = 0.4;
  eatPlayer.visible = false;
  banana =  createSprite(150 , 100);
  banana.addImage("banana Image", bananaImg);
  banana.scale = 0.3;
  banana.visible = false;
  pan = createSprite(275, 250);
  pan.addImage("fry pan", panImg ) 
  pan.scale = 1;
 
  //pan.debug = true
  pan.visible = false;
  fry = createSprite(295 , 125);
  fry.addImage("half fry egg", fryImg)
  fry.scale = 0.4;
  fry.visible = false;
 // pan.setCollider("rectangle",0,0,40,40)
  coffee = createSprite(50 , 80);
  coffee.addImage("coffee maker", coffeeImg);
  coffee.scale = 0.15; 
  coffee.visible = false;
  egg = createSprite(290, 100);
  egg.addImage("raw egg", eggImg);
  egg.scale = 0.25;
 // egg.debug = true
  egg.visible = false;
 

  plate = createSprite(200, 70);
  plate.addImage("Plate Image", plateImg);
  plate.scale = 0.3;
  plate.visible = false;

  touch = createSprite(200, 50, 5, 5 );
  touch.shapeColor = rgb(106, 185, 225)
  //next.depth = scene2.depth;
 // next.depth += 1;
 next = createSprite(450 , 50);
 next.addImage("Next button", nextImg);
 next.scale = 0.35;
 next.visible=false;

 livingr = createSprite(250, 250);
 livingr.addImage("Living room", livingrImg);
 livingr.scale = 0.7;
 livingr.visible = false;
 OMG = createSprite( 60 , 400);
 OMG.addImage("Starstrucked" , OMGimg);
 OMG.scale = 0.9;
 OMG.visible = false;

book = createSprite(405 , 325);
book.addImage("Fallen Book" , bookImg);
book.scale = 0.35;
book.visible  = false;

shirt = createSprite(450, 450);
 shirt.addImage("Stained shirt", shirtImg);
 shirt.scale= 0.3;
 shirt.visible = false;

 mouse = createSprite(300, 450);
 mouse.addImage("Mouse", mouseImage);
 mouse.scale =0.45;
 mouse.visible=false;

 food = createSprite(260, 345);
 food.addImage("Leftover food", foodImg);
 food.scale = 0.42;
 food.visible = false;

creepy = createSprite(185, 300);
creepy.addImage(creepyImg);
creepy.scale = 0.25;
creepy.visible = false;

web = createSprite(210, 90);
web.addImage(webImg);
web.scale = 0.6;
web.visible = false;

spidy = createSprite(400 , 120);
spidy.addImage(spidyImg);
spidy.scale = 0.2;
spidy.visible = false;
lizard = createSprite(250, 200);
lizard.addImage(lizardImg);
lizard.scale = 0.1;
lizard.visible = false;
getReady = createSprite(50 , 50);
getReady.addImage(getReadyImg);
getReady.scale = 0.4;
getReady.visible = false;


broom = createSprite(100 , 450);
broom.addImage(broomImg);
broom.scale = 0.1;
broom.visible = false;

bathroom = createSprite(250, 250);
bathroom.addImage(bathroomImg);
bathroom.scale = 1.3;
bathroom.visible = false;

ready = createSprite(50, 380);
ready.addImage(readyImg);
ready.scale = 0.4;
ready.visible = false;

hang1 = createSprite( 250 , 30 , 500 , 10);
hang1.shapeColor = "black";
hang2 = createSprite( 250 , 190 , 500 , 10);
hang2.shapeColor = "black";

hang1.visible = false;
hang2.visible = false;

dress1 = createSprite(30 , 90);
dress1.addImage(dress1Img);
dress1.scale = 0.59;
dress1.visible = false;
dress2 = createSprite(80 , 100  );
dress2.addImage(dress2Img);
dress2Img.scale = 0.015;
dress2.visible = false;
dress3 = createSprite(140 , 90);
dress3.addImage(dress3Img);
dress3.scale = 0.53;
dress3.visible = false;

top1 = createSprite(210 , 90);
top1.addImage(top1Img);
top1.scale = 0.93;
top1.visible = false;
top2 = createSprite(300 , 95);
top2.addImage(top2Img);
top2.scale = 0.58;
top2.visible = false;
top3 = createSprite(390 , 95);
top3.addImage(top3Img);
top3.scale = 0.99;
top3.visible = false;

pant1 = createSprite(250 , 270);
pant1.addImage(pant1Img);
pant1.scale = 0.35;
pant1.visible = false;
pant2 = createSprite(110 ,260);
pant2.addImage(pant2Img);
pant2.scale = 0.7;
pant2.visible = false;
pant3 = createSprite(185 , 265);
pant3.addImage(pant3Img);
pant3.scale = 0.8;
pant3.visible = false;

casual = createSprite(200 , 390);
casual.addImage(casualImg);
casual.scale = 0.5;
casual.visible = false;

summer = createSprite(200 , 390);
summer.addImage(summerImg);
summer.scale = 0.5;
summer.visible = false;

fancy = createSprite(200 , 390);
fancy.addImage(fancyImg);
fancy.scale = 0.4;
fancy.visible = false;

coat = createSprite(450, 245);
coat.addImage(coatImg);
coat.scale = 0.8;
coat.visible = false;

tux = createSprite(365 , 255);
tux.addImage(tuxImg);
tux.scale = 0.7;
tux.visible = false;

skirt = createSprite(300, 245);
skirt.addImage(skirtImg);
skirt.scale = 0.7;
skirt.visible = false;


perfect = createSprite(210, 90);
perfect.addImage(perfectImg);
perfect.scale = 0.6;
perfect.visible = false;

lip1 = createSprite(300 , 450);
lip1.addImage(l1Img);
lip1.scale = 0.7;
lip1.visible = false;
lip2 = createSprite(330 , 450);
lip2.addImage(l2Img);
lip2.scale = 0.7;
lip2.visible = false;
lip3 = createSprite(360 , 450);
lip3.addImage(l3Img);
lip3.scale = 0.7;
lip3.visible = false;
lip4 = createSprite(390 , 450);
lip4.addImage(l4Img);
lip4.scale = 0.7;
lip4.visible = false;
lip5 = createSprite(420 , 450);
lip5.addImage(l5Img);
lip5.scale = 0.7;
lip5.visible = false;
lip6 = createSprite(450 , 450);
lip6.addImage(l6Img);
lip6.scale = 0.7;
lip6.visible = false;

light = createSprite(420 , 450);
light.addImage(lightImg);
light.scale = 0.7;
light.visible = false;
dark = createSprite(450 , 450);
dark.addImage(darkImg);
dark.scale = 0.7;
dark.visible = false;
}

function draw() {
  background(0);

  if(mousePressedOver(exit)){
    scene1.destroy();
    exit.destroy();
    scene2.visible = true;
    eatPlayer.visible = true;
    banana.visible = true;
    pan.visible = true;
    coffee.visible = true;
    egg.visible = true;

  }
 live();

    if(egg.x < 255 &&  egg.y > 200){
      egg.visible = false;
      fry.visible = true;
      plate.visible = true;
      //crack.play();
      fry.depth = plate.depth;
      fry.depth += 1;
      banana.depth = plate.depth;
      banana.depth += 1;
      fill("white");
      textSize(20);
      text("Put your food on the plate", 250, 250);
      
    }

    

if(fry.isTouching(touch)){
cup = createSprite(300 , 50);
cup.addImage("coffee cup", cupImg);
cup.scale = 0.1;

cup.lifetime=1;
banana.x = 200;
banana.y = 60;
livingr.depth=cup.depth;
livingr.depth=livingr.depth+1;
//next.visible = true;
}   

  drawSprites();
if(keyDown(DOWN_ARROW)){
    egg.y +=2
  }
  if(keyDown(RIGHT_ARROW)){
    egg.x +=2
  }
  if(keyDown(LEFT_ARROW)){
    egg.x -=2
  }
  if(keyDown(UP_ARROW)){
    egg.y -=2
  }

  if(keyDown(DOWN_ARROW)){
    fry.y +=2
  }
  if(keyDown(RIGHT_ARROW)){
    fry.x +=2
  }
  if(keyDown(LEFT_ARROW)){
    fry.x -=2
  }
  if(keyDown(UP_ARROW)){
    fry.y -=2
  }

}



function live()
{
  
 if(banana.x ===200 && World.seconds>5){
    //great.play() ;
  next.visible = true;
   if(mousePressedOver(next)){
 
   next.destroy();
  scene2.destroy();
   cup.destroy();
   plate.destroy();
   banana.destroy();
   fry.destroy();
  
    livingr.visible=true;
    
    OMG.visible= true;
    shirt.visible=true;
    mouse.visible= true;
    food.visible=true;
    book.visible = true;
    web.visible = true;
    broom.visible = true;
    creepy.visible = true;
    lizard.visible = true;
spidy.visible = true;
    OMG.depth= livingr.depth;
 OMG.depth += 1; 
 shirt.depth= livingr.depth;
 shirt.depth += 1; 
 food.depth= livingr.depth;
 food.depth += 1; 
 mouse.depth= livingr.depth;
 mouse.depth += 1; 
 book.depth= livingr.depth;
 book.depth += 1; 
 web.depth= livingr.depth;
 web.depth += 1; 
 creepy.depth= livingr.depth;
 creepy.depth += 1; 

 broom.depth= livingr.depth;
 broom.depth += 1; 

 lizard.depth= livingr.depth;
 lizard.depth += 1; 
 spidy.depth= livingr.depth;
 spidy.depth += 1; 
   }
   if(keyDown(DOWN_ARROW)){
    broom.y +=2
  }
  if(keyDown(RIGHT_ARROW)){
  broom.x +=2
  }
  if(keyDown(LEFT_ARROW)){
    broom.x -=2
  }
  if(keyDown(UP_ARROW)){
    broom.y -=2
  }
}
   if(broom.isTouching(food))
   {
    clickSound.play();
     food.destroy();
     
     cleanScore+=1;
   }
   if(broom.isTouching(spidy))
   {
    clickSound.play();
     spidy.destroy();
     
     cleanScore+=1;
   }
   if(broom.isTouching(lizard))
   {
    clickSound.play();
     lizard.destroy();
     
     cleanScore+=1;
   }
   if(broom.isTouching(shirt))
   {
    clickSound.play();
     shirt.destroy();
     cleanScore+=1;
   }
   if(broom.isTouching(mouse))
   {
    clickSound.play();
     mouse.destroy();
     cleanScore+=1;
   }
   if(broom.isTouching(book))
   {
    clickSound.play();
     book.destroy();
     cleanScore+=1;
   }
   if(broom.isTouching(web))
   {
    clickSound.play();
     web.destroy();
     cleanScore+=1;
   }
   if(broom.isTouching(creepy))
   {
    clickSound.play();
     creepy.destroy();
     cleanScore+=1;
   }
  

   if(cleanScore===8)
   {
    
     OMG.destroy();
    getReady.visible = true;
    
getReady.depth  = livingr.depth;
getReady.depth += 1;
   }
if(mousePressedOver(getReady)){
getReady.destroy();
bathroom.visible = true;
bathroom.depth = getReady.depth;
bathroom.depth += 1;
ready.visible = true;
ready.depth = bathroom.depth;
ready.depth += 1;
dress1.visible = true;
dress1.depth = bathroom.depth;
dress1.depth += 1;

dress2.visible = true;
dress2.depth = bathroom.depth;
dress2.depth += 1;

dress3.visible = true;
dress3.depth = bathroom.depth;
dress3.depth += 1;

hang1.visible = true;
hang1.depth = bathroom.depth;
hang1.depth += 1;
hang2.visible = true;
hang2.depth = bathroom.depth;
hang2.depth += 1;

top1.visible = true;
top1.depth = bathroom.depth;
top1.depth += 1;

top2.visible = true;
top2.depth = hang1.depth;
top2.depth += 1;

top3.visible = true;
top3.depth = bathroom.depth;
top3.depth += 1;

pant1.visible = true;
pant1.depth = bathroom.depth;
pant1.depth += 1;

pant2.visible = true;
pant2.depth = hang1.depth;
pant2.depth += 1;

pant3.visible = true;
pant3.depth = bathroom.depth;
pant3.depth += 1;

coat.visible = true;
coat.depth = bathroom.depth;
coat.depth += 1;

tux.visible = true;
tux.depth = bathroom.depth;
tux.depth += 1;

skirt.visible = true;
skirt.depth = bathroom.depth;
skirt.depth += 1;

lip1.visible = true;
lip1.depth = coat.depth;
lip1.depth += 1;

lip2.visible = true;
lip2.depth = coat.depth;
lip2.depth += 1;

lip3.visible = true;
lip3.depth = coat.depth;
lip3.depth += 1;

lip4.visible = true;
lip4.depth = coat.depth;
lip4.depth += 1;

lip5.visible = true;
lip5.depth = coat.depth;
lip5.depth += 1;

lip6.visible = true;
lip6.depth = coat.depth;
lip6.depth += 1;

}

live_3();
}

 function live_3(){
  
  if(mousePressedOver(top1) || mousePressedOver(top2) || mousePressedOver(pant2) || mousePressedOver(dress1) ){
    casual.visible = true;
    casual.depth = pant1.depth;
    casual.depth += 1;
    casualSound.play();
  
  setTimeout(() => {  casual.visible = false; }, 1500);
  }
  if(mousePressedOver(pant1) || mousePressedOver(dress2) || mousePressedOver(dress3) ){
    fancy.visible = true;
    fancy.depth = coat.depth;
    fancy.depth += 1;
    noPartySound.play();
  setTimeout(() => {  fancy.visible = false; }, 1500);
  }
  if(mousePressedOver(coat) || mousePressedOver(top3) || mousePressedOver(pant3)  ){
    summer.visible = true;
    summer.depth = dress2.depth;
    summer.depth += 1;
    summerSound.play();
  
  setTimeout(() => {  summer.visible = false; }, 1500);
  }
  if(mousePressedOver(tux) || mousePressedOver(skirt)){
    perfect.visible = true;
    perfect.depth = dress2.depth;
    perfect.depth += 1;
    perfectSound.play();
  
  setTimeout(() => {  perfect.visible = false; }, 1500);}

  if(mousePressedOver(lip1) || mousePressedOver(lip4) || mousePressedOver(lip5)){
   dark.visible = true;
   dark.depth = dress2.depth;
   dark.depth += 1;

  
  setTimeout(() => {  dark.visible = false; }, 1500);
}
if(mousePressedOver(lip2) || mousePressedOver(lip6)){
  light.visible = true;
  light.depth = dress2.depth;
 light.depth += 1;

 
 setTimeout(() => {  light.visible = false; }, 1500);
  } }
