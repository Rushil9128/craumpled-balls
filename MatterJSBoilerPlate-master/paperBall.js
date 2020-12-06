class Ball{
    constructor(x,y,r){
        var options=
        {
            'restitution':0.3,
            'isStatic':false,
            'friction':0.5,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
     
    }

    display(){
        var pos = this.body.position;
        fill("green");
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
    }
}