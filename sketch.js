var GameState = "wait"
var wall1,wall2,wall3,wall4,Player;

function preload(){
    Menu_Screen = loadImage('i.gif')
}
function setup(){
    createCanvas(600,600)
    Player = createSprite(300,300,10,10)
    Player.shapeColor = "red"
    Player.visible = false;

    Play_Button = createImg('start_button-removebg-preview.png')
    About_Button = createImg('question_mark-removebg-preview.png')
    Play_Button.position (150,200)
    About_Button.position (162,300)
    About_Button.size (75,75)
    Play_Button.size (100,50)


// boundary walls
wall1 = createSprite(30,300,10,550)
wall1.shapeColor = "orange";
wall2 = createSprite(300,25,550,10)
wall2.shapeColor = "blue";
wall3 = createSprite(300,580,550,10)
wall3.shapeColor = "pink";
wall4 = createSprite(570,300,10,550)
wall4.shapeColor = "black";
Player = createSprite(200,200,17,17)
Player.velocityX=4
Player.velocityY=-4;  

wall5 = createSprite(300,300,160,10)
wall5.shapeColor = "black";
wall6 = createSprite(300,350,160,10)
wall6.shapeColor = "black";
wall7 = createSprite(255,250,10,100)
wall7.shapeColor = "black";
wall8 = createSprite(255,400,10,100)
wall8.shapeColor = "black";
wall9 = createSprite(345,250,10,100)
wall9.shapeColor = "black";
wall10 = createSprite(345,400,10,100)
wall10.shapeColor = "black";
wall11 = createSprite(180,200,160,10)
wall11.shapeColor = "black";
wall12 = createSprite(225,450,100,10)
wall12.shapeColor = "black";
wall13 = createSprite(375,200,160,10)
wall13.shapeColor = "black";
wall14 = createSprite(375,450,100,10)
wall14.shapeColor = "black";
wall15 = createSprite(180,250,10,100)
wall15.shapeColor = "black";
wall16 = createSprite(180,400,10,100)
wall16.shapeColor = "black";
wall17 = createSprite(420,250,10,100)
wall17.shapeColor = "black";
wall18 = createSprite(420,400,10,100)
wall18.shapeColor = "black";
wall19 = createSprite(490,323,10,400)
wall19.shapeColor = "black";
wall19 = createSprite(100,330,10,490)
wall19.shapeColor = "black";



}
function draw(){
   

if (GameState == "wait")
{background(Menu_Screen);
Play_Button.show();
About_Button.show();
Player.visible = false;
wall1.visible = false;
wall2.visible = false;
wall3.visible = false;
wall4.visible = false;
}
    About_Button.mousePressed(() => {
Play_Button.hide();
About_Button.hide()
GameState = "about"
    })
    Play_Button.mousePressed(() => {
        Play_Button.hide();
        About_Button.hide()
        GameState = "play"
            })
    if (GameState == "about"){
        About_Game()
    }
if (GameState == "play"){
    
    background("white")
    Player.visible = true;
    wall1.visible = true;
    wall2.visible = true;
    wall3.visible = true;
    wall4.visible = true;
    if (keyDown("UP_ARROW")) {
  
        Player.velocityX=0;
        Player.velocityY=-4;
       }
        if (keyDown(DOWN_ARROW)) {
          
        Player.velocityX=0;
        Player.velocityY=4;
        }
        if (keyDown(LEFT_ARROW)) {
          
        Player.velocityX=-4;
        Player.velocityY=0;
        }
        if (keyDown(RIGHT_ARROW)) {
          
        Player.velocityX=4;
        Player.velocityY=0;
        }
        
        if (keyWentUp("UP_ARROW")) {
  
            Player.velocityX=0;
            Player.velocityY=0;
           }
            if (keyWentUp(DOWN_ARROW)) {
              
            Player.velocityX=0;
            Player.velocityY=0;
            }
            if (keyWentUp(LEFT_ARROW)) {
              
            Player.velocityX=0;
            Player.velocityY=0;
            }
            if (keyWentUp(RIGHT_ARROW)) {
              
            Player.velocityX=0;
            Player.velocityY=0;
            }
   
    background("white")
  

  Player.bounceOff(wall1);
  Player.bounceOff(wall2);
  Player.bounceOff(wall3);
  Player.bounceOff(wall4);
  Player.bounceOff(wall5);
  Player.bounceOff(wall6);
}
drawSprites();
}
function About_Game(){
    swal({
title:"About Game",
text:"kill all the enemies visible to win the game",
textAlign:"centre",
//imageUrl:"",
//imageSize:"",
confirmButtonText:"kill all enemies",
confirmButtonColor:"green",

    },
    function(){
        GameState = "wait"
    })
}