class Form {

  constructor() {
    this.input = createInput("Name");
    this.startButton = createButton('Start the Game');
    this.reset = createButton("Reset db")
    this.greeting = createElement('h2');
    this.title = createElement('h1');
    this.about = createElement('h2');
    this.map = createElement('h2');
    this.map1 = createButton('Castle');
    this.map2 = createButton('Jungle');
    this.map3 = createButton('Underwater');
    this.play = createButton('Play')
  }
  hide(){
    this.greeting.hide();
    this.play.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){

    background(scene)

    this.title.html("Welcome to Murder Mystery");
    this.title.position(displayWidth/2 - 150, 30);
    this.title.style("color","white")

    this.about.html("This game is about to find the murderer among some friendly cremates . You can be chosen as a murderer or detective or as cremates randomly by the game.")
    this.about.position( 250, 200)
    this.about.style("color","white")
    

    
    this.startButton.position(displayWidth/2 + 50, displayHeight/2);
    this.startButton.style('background-color',"yellow")
    this.startButton.style('font-size','24px')
    /* this.reset.position(displayWidth-60 ,10);

    this.reset.mousePressed(()=>{
      game.update(0);
      player.updateCount(0);

    }) */

    this.startButton.mousePressed(()=>{
      background(scene);
      this.about.hide();
      this.startButton.hide();


      this.input.position(displayWidth/2 - 40, 150);
      this.input.style('font-size','20px')

      this.map.html("Choose your Map")
      this.map.position(displayWidth/2 - 80, 180);
      this.map.style("color","white")

      this.map1.position(displayWidth/2 + 40, 250);
      this.map1.style('background-color',"grey")
      this.map1.style('font-size','20px')
      this.map2.position(displayWidth/2 + 40, 300);
      this.map2.style('background-color',"green")
      this.map2.style('font-size','20px')
      this.map3.position(displayWidth/2 + 40, 350);
      this.map3.style('background-color',"blue")
      this.map3.style('font-size','20px')

      this.play.position(displayWidth/2 - 70, 420);
      this.play.style('background-color',"yellow")
      this.play.style('font-size','24px')
      
      
      playerCount+=1;
      player.index = playerCount;
     
      player.updateCount(playerCount);
      
      
      
    });

    this.map1.mousePressed(()=>{
        map="castle"
    })

    this.map2.mousePressed(()=>{
        map="jungle"
    })

    this.map3.mousePressed(()=>{
        map="underwater"
    })

    this.play.mousePressed(()=>{
        if (map==="castle") {
          background(castle)
        } else if(map==="underwater") {
          background(underwater)
        } else {
          background(jungle)
        }
        player.name = this.input.value();
        player.update();
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        this.greeting.style('font-size','20px')
        game.update(1);
        this.play.hide();
        this.input.hide();
        this.title.hide();
        this.map.hide();
        this.map1.hide();
        this.map2.hide();
        this.map3.hide();
    })

  }

  diaplayScreen2(){

  }

}
