class Box{
   constructor(x,y,width,height){
   
      var options = {
         restitution : 0.7,
         friction : 0.,
         density : 1.0
      }
   
   
   this.body = Bodies.rectangle(x,y,width,height);
   this.width = width;
   this.height = height;
      World.add(world,this.body); 
   }
   
   display(){
   var pos = this.body.position
   push()
   translate(pos.x,pos.y)
   rotate(this.body.angle)
   stroke("blue")
   fill("red")
   rectMode(CENTER);
   rect(0,0,this.width,this.height)
    pop();   
   }
   
   }
   