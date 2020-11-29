class Log{
    constructor(x,y,height,angle){
    
       var options = {
          restitution : 0.7,
          friction : 0.3,
          density : 1.0
       }
    
    
    this.body = Bodies.rectangle(x,y,20,height);
    Matter.Body.setAngle(this.body,angle)
    this.width = 20;
    this.height = height;
       World.add(world,this.body); 
    }
    
    display(){
    var pos = this.body.position
    push()
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    stroke("blue")
    fill("brown")
    rectMode(CENTER);
    rect(0,0,this.width,this.height)
     pop();   
    }
    
    }
    