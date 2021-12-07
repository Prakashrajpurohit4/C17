
function setup() 
{
  createCanvas(400, 400);

box= new Box(250,300,20,20,1)

box2= new Box(200,300,20,20,2)






}

function draw() 
{
  background(220);
 
 
  box.show()
  box.move()

  box2.show()
    box2.move()
  
}



