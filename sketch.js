var doraemon,doraemon_running,doraemon_zombie;
var zombie,zombie_running,zombie_dead;
var T1,T2;
var firstPage;
var story;
var rules;
var Themeimg;
var gameState="initial";
var changePage;

var backgroundImg;
var tile,tile1,tile2,tile3,tile4,tile5,tile6;
var tileGroup;

function preload(){
doraemon_running=loadAnimation("d.png","d2.png","d3.png","d4.png");
doraemon_zombie=loadImage("zombied1.png");
backgroundImg=loadImage("BG.png");
zombie_running=loadAnimation("Walk (1).png","Walk (2).png","Walk (3).png","Walk (4).png");
zombie_dead=loadAnimation("Dead (1).png","Dead (2).png","Dead (3).png","Dead (10).png");
T1=loadImage("t1.jpg");
T2=loadImage("t2.jpg");
story=loadImage("story.jpg");


}
function setup(){
    createCanvas(1200,800);
    doraemon=createSprite(600,600);
    doraemon.addAnimation("d",doraemon_running);
    t1=createSprite(600,400);
    t1.addImage("t1",T1);
    t1.visible=false;
    t1.scale=0.3;
    t2=createSprite(600,400);
    t2.addImage("t2",T2)
    t2.visible=false;
    t2.scale=0.3;
    changePage=createButton("Change");
    changePage.position(800,95);
   
   
}
function draw(){
background("white");
if(gameState==="initial"){
   /* if(keyDown("space")){
        t1.visible=true;
    }
      if(keyDown("a")){
          t2.visible=true;
          t1.visible=false;
      
    }*/
    changePage.mousePressed(function(){
        t1.visible=true;
    });
    changePage.mouseClicked(()=>{
        t2.visible=true;
        t1.visible=false;
    });

}


drawSprites();



}