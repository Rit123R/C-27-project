class rope{
    constructor(body2,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options={
        bodyA=body1,
        bodyB=body2,
       pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Constraint.create(options);
        world(myWorld,this.rope)
    }
     show(){
    var pos1=this.chain.bodyA.position;
    var pos2 = this.chain.bodyB.position;
    stroke(0);
    strokeWeight(4);
    line(pos1.x,pox1.y,pos2.x,pos2.y);
    
    }
     
     




}