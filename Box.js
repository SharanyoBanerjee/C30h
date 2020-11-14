class Box {
  constructor(x, y, width, height) {
    var options = {
        isStatic:false,
        'restitution':0.8,
        'friction':5.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed <3){
       var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        pop();
      } else {
        World.remove(world,this.body);
        var angle = this.body.angle;
        var pos = this.body.position;
        
       push();
       this.Visibility = this.Visibility-5;
       tint(255,this.Visibility);
       translate(pos.x, pos.y);
       rotate(angle);
       rectMode(CENTER);
       strokeWeight(2);
       stroke("black");
       fill("green");
       rect(0, 0, this.width, this.height);
       pop();
     }
    
    
  }
};
