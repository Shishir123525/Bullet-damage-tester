var wall,bullet
var speed,thickness,weight,damage
function setup() {
  createCanvas(1600,400);
 bullet= createSprite(50, 200, 50, 5);
 wall=createSprite(1200,200,thickness,height/2)
}

function draw() {
  background(255,255,255);  
  thickness=random(22,83)
  speed=random(55,90)
  weight=random(400,1500)

  bullet.velocityX=speed
  //checking the damage and  changing color accordingly
  if(hasCollided(bullet,wall)){
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  if(damage<10){
wall.shapeColor="green"
  bullet.velocityX=0
  }
  if(damage>10){
    wall.shapeColor="red"
    bullet.velocityX=0
  }
}
  drawSprites();
}
function hasCollided(object1,object2){
bulletrightedge=bullet.x+bullet.width
wallleftedge=wall.x
if(bulletrightedge>=wallleftedge){
  return true
}
return false
}
