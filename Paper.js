class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.3,
            density:1.20
        };
        this.body = Matter.Bodies.circle(ground.height+10, 200, 20,options);
        this.radius = 20;
        World.add(world, this.body);
        
    };

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("green");
        ellipse(0,0, this.radius);
        pop();
    }
      
};

