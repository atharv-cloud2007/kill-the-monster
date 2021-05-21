class Monster{
    constructor(x,y,w,h){
    var options={
        isStatic:false,
        friction:2,
        density:0.5,
        restitution:0.1
    }
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.body=Bodies.rectangle(x,y,w,h,options)
    this.image=loadImage("Monster-01.png")
    World.add(world,this.body)
}
display(){
    var groundPos=this.body.position
    
    imageMode(CENTER)
    image(this.image,groundPos.x,groundPos.y,this.w,this.h)
}
}