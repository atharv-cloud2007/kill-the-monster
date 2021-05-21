class Rock
 {
    constructor(x,y,w) {
      var options = {
          'restitution':0,
          'friction':1.1,
          'density':0.5
      }
      this.width=w
      this.body = Bodies.circle(x,y,w,options);
      this.image = loadImage("Superhero-01.png")
      World.add( world,this.body);
     
    }
    display(){
      var pos=this.body.position
      push()
      translate(pos.x,pos.y)
      
      imageMode(CENTER)
      image(this.image,0,0,this.width,this.width)
      pop()
    }
    
  };
  