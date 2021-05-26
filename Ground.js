class Ground {
    constructor(x,y,width,height){
        var options = {
            isSatitc : true
        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);

      this.width = width;
      this.height = height;

    }
    display(){
        var pos = this.body.position;
        push ();
        rectMode(CENTER);
        fill ("white");
        rect(pos.x,pos.y,this.width,this.height);
        pop ();
    }
}