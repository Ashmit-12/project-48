class Wall{
    constrcutor(){
      this.ghosts = [];
     
         
  
    this.initializeGhosts = function () {
      this.ghosts = [];
      this.ghosts[0] = new Ghost(7, 8);
      this.ghosts[1] = new Ghost(6, 9);
      this.ghosts[2] = new Ghost(7, 9);
      this.ghosts[3] = new Ghost(8, 9);
  
      this.ghosts[0].color = "red";
      this.ghosts[1].color = "cyan";
      this.ghosts[2].color = "pink";
      this.ghosts[3].color = "orange";
    }

    this.setGhostsConsumable = function () {
      for (var i = 0; i < this.ghosts.length; i++) {
        this.ghosts[i].setConsumable();
      }
    }
    this.showGhosts = function () {
      for (var i = 0; i < this.ghosts.length; i++) {
        this.ghosts[i].show();
      }
    }
    if (frameCount % 15 == 0) {
      
      for (var i = 0; i < this.ghosts.length; i++) {
        var ghost = this.ghosts[i];
        ghost.update();
        if (ghost.consumable) {

        } else if (ghost.pos.x == this.pacman.pos.x && ghost.pos.y == this.pacman.pos.y) {
          this.stop();
        }
      }
    }
    this.showGhosts();
  }
  start()
  {
    wall1 = createSprite(125, 50, 150, 5)
    wall2 = createSprite(200, 85, 5, 75)
    wall3 = createSprite(112, 90, 75, 5)
    wall4 = createSprite(154, 130, 5, 85)
    wall5 = createSprite(50,220,5,350)
    wall6 = createSprite(80,130,60,5);
    wall7 = createSprite(91,150,5,45);
    wall8 = createSprite(180,170,100,5);
    wall9 = createSprite(235,72,5,45);
    wall10 = createSprite(270,108,5,125);
    wall11 = createSprite(235,185,5,128);
    wall12 = createSprite(120,210,150,5);
    wall13 = createSprite(120,250,5,75);
    wall14 = createSprite(210,250,100,5);
    wall15 = createSprite(80,290,5,75);
    wall16 = createSprite(190,290,75,5);
    wall17 = createSprite(155,310,5,45);
    wall18 = createSprite(200,355,5,125);
    wall19 = createSprite(235,330,75,5);
    wall20 = createSprite(270,288,5,80);
    wall21 = createSprite(75,370,50,5);
    wall22 = createSprite(50,425,5,60);
    wall23 = createSprite(165,370,75,5);
    wall24 = createSprite(90,430,5,50);
    wall25 = createSprite(125,408,75,5);
    wall26 = createSprite(220,415,50,5);
    wall27 = createSprite(310,210,75,5);
    wall28 = createSprite(350,250,5,80);
    wall29 = createSprite(310,290,75,5);
    wall30 = createSprite(275,410,5,80);
    wall31 = createSprite(310,350,5,50);
    wall32 = createSprite(390,330,50,5);
    wall33 = createSprite(350,350,5,45);
    wall34 = createSprite(330,410,40,5);
    wall35 = createSprite(310,435,5,50);
    wall36 = createSprite(418,370,60,5);
    wall37 = createSprite(390,390,5,48);
    wall38 = createSprite(405,410,25,5);
    wall39 = createSprite(365,170,40,5);
    wall40 = createSprite(380,210,75,5);
    wall41 = createSprite(422,290,70,5);
    wall42 = createSprite(385,150,5,115);
    wall43 = createSprite(390,290,5,75);
    wall44 = createSprite(420,230,5,45);
    wall45 = createSprite(310,100,5,55);
    wall46 = createSprite(350,73,5,55);
    wall47 = createSprite(440,170,45,5);
    wall48 = createSprite(345,130,70,5);
    wall49 = createSprite(403,90,35,5);
    wall50 = createSprite(420,150,5,35);
     wall51 = createSprite(345,48,225,5);
    wall52 = createSprite(460,170,5,250);
    wall53 = createSprite(255,455,412,5);
    wall54 = createSprite(460,390,5,122);
    
    wall=[wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28,wall29, wall30, wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39,wall40, wall42, wall43, wall41,wall44,wall45,wall46,wall47,wall48,wall49,wall50,wall51,wall52,wall53,wall54];
  }
  
  wallcolision(Chname){
    for(var i= 0; i<wall.length;i++){
   var walls=wall[i];
  Chname.bounceOff(walls);
    }
    return true;
  }
  
  wallcol(Chname){
    for(var i= 0; i<wall.length;i++){
   var walls=wall[i];
  Chname.collide(walls);
    }
    
  }
  
  }