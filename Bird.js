class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sohamani.png");
  }

  display() {
    //this.body.position.x = ;
    //this.body.position.y = mouseY;
    super.display();
  }
}
