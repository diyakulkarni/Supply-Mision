class Box {
    constructor(x,y,width,height){
        var options={
        'restitution' : 0.8,
        'friction':0.3,
        'density': 1.0
        }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
World.add(world,this.body);
}
display(){
    var box = this.body.position;
    box.Color('red');
    var box1 = this.body.position;
    box1.setColor('red');
    var box2 = this.body.position;
    box.setColor('red');
    box.rect(200,400,200,20);
    box1.rect(200,400,100,20);
    box2.rect(230,400,100,20);

}
}