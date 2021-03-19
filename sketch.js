function preload() {
  //load game assets
 
}
var player;
var target;
var edges;

function setup() {
  createCanvas(600,600);
  player=createSprite(40,550,30,30);
  target=createSprite(560,40,30,30)
  target.shapeColor="blue"
  edges=createEdgeSprites();
  obs1=createSprite(300,120,100,20)

  obs1.velocityX=+5;
  obs2=createSprite(300,320,100,20)
  obs2.velocityX=-5;
}

function draw() {
  background("black"); 
  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]); 
  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);
  if(keyDown("up"))
  {
    player.y=player.y-10
  }
  if(keyDown("down"))
  {
    player.y=player.y+10
  }
  if(keyDown("left"))
  {
    player.x=player.x-10
  }
  if(keyDown("right"))
  {
    player.x=player.x+10
  }
  if(player.isTouching(target))
  {
    text("You win",200,200)
  }
  if(player.isTouching(obs1))
  {
    obs1.velocityX=0
    text("You Lose",200,200)
  }
  if(player.isTouching(obs2))
  {
    obs2.velocityX=0
    text("You Lose",200,200)
  }
  drawSprites();

}
