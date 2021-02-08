var gamestate="harleys";
//var gamestate="booms";
var lives=4;

var Group;
var harley;
var harleyimg;
var crock;
var crockimg;
var joker,jokerimg;
var boom,boomimg;
var maze;
var wonderw;wonderimg;
var bat;batimg;
var flash,flashimg;
var superman,superimg;
var diamondimg;
var diamondGroup;
var diamond;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28,wall29, wall30, wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39,wall40, wall42, wall43, wall41,wall44,wall45,wall46,wall47,wall48,wall49,wall50,wall51,wall52,wall53,wall54,wall55, wall56;
var maze;
var sample;
var wall=[];
function preload(){
boomimg=loadImage("suicidesquadimages/boom.png");
harleyimg=loadImage("suicidesquadimages/harley.png");
jokerimg=loadImage("suicidesquadimages/joker.png");
crockimg=loadImage("suicidesquadimages/killercrock.png");
wonderimg=loadImage("justiceleagueimages/wonderwomen.png");
flashimg=loadImage("justiceleagueimages/flash.png");
superimg=loadImage("justiceleagueimages/superman.png");
batimg=loadImage("justiceleagueimages/batman.png");
diamondimg=loadImage("diamond.png");
}
function setup() {

  createCanvas(600,600);
  

diamondGroup=new Group();

 harley=createSprite(525,80,30,30);
 harley.addImage("hr",harleyimg);
 harley.scale=0.1;
 harley.debug=true;
harley.setCollider("circle",0,0,20);


 boom=createSprite(525,160,30,30);
 boom.addImage("bo",boomimg);
boom.scale=0.13;

 crock=createSprite(525,240,30,30);
 crock.addImage("cr",crockimg);
crock.scale=0.13;

 joker=createSprite(525,320,30,30);
joker.addImage("jr",jokerimg);
joker.scale=0.13;

wonderw=createSprite(410,420,30,30);
wonderw.addImage("w",wonderimg);
wonderw.scale=0.05;
wonderw.velocityX =-25;
wonderw.velocityY =25;

flash=createSprite(96,317,30,30);
flash.addImage("fl",flashimg);
flash.scale=0.05; 
flash.velocityX = -25;
flash.velocityY = 25;

superman=createSprite(410,65,30,30);
superman.addImage("sm",superimg);
superman.scale=0.05; 
superman.velocityX = -15;
superman.velocityY = 25;

bat=createSprite(260,193,30,30);
bat.addImage("bt",batimg);
bat.scale=0.05; 
bat.velocityX = -17;
bat.velocityY = 20;

for(var i=0;i<70;i++){
  for(var j=95;j<410;j=j+75){
    for(var m=60;m<430;m=m+60){
      diamond=createSprite(j,m);
    diamond.addImage("dd",diamondimg);
    diamond.scale=0.05;
    diamondGroup.add(diamond);
    }
    
  }
  
}
maze = new Wall();
  maze.start();
}

function draw() {
  background(51);

 maze.wallcolision(wonderw);
 maze.wallcolision(bat);
 maze.wallcolision(superman);
 maze.wallcolision(flash);
 maze.wallcolision(wonderw);
 maze.wallcolision(wonderw);
 maze.wallcolision(wonderw);
   
  
  drawSprites();

  text(mouseX +" "+mouseY+"",100,100);
text("lives remaining : "+lives,500,100); 

  

   if(gamestate==="harleys"){
     //harley.x=216;
     //harley.y=58;
    
       
      Movement(harley);
      maze.wallcol(harley) ;
        if(harley.isTouching(superman)){
          gamestate="booms";
          harley.destroy();
          lives=lives-1;
        }else if(harley.isTouching(bat)){
          gamestate="booms";
          lives=lives-1;
          harley.destroy();
        }else if(harley.isTouching(wonderw)){
          gamestate="booms";
          lives=lives-1;
          harley.destroy();
        }else if(harley.isTouching(bat)){
          gamestate="booms";
          lives=lives-1;
          harley.destroy();
        }
          for(var i=0; i<diamondGroup.length; i++){
            
            if(diamondGroup.get(i).isTouching(harley)){
              diamondGroup.get(i).destroy();
            }
          }
          
        
     }  
  }




function Movement(villain){
  if(keyDown(UP_ARROW)){
    villain.y-=15;
  }
  if(keyDown(DOWN_ARROW)){
    villain.y+=15;
  }
  if(keyDown(RIGHT_ARROW)){
    villain.x+=10;
  }
  if(keyDown(LEFT_ARROW)){
    villain.x-=10;
  }
}

  
