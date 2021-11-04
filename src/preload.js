import Phaser from "phaser"


export function preload() {
    this.load.image("backing", "assets/background/background_1.png");
    this.load.image("grass", "assets/background/grass.png");
    this.load.image("tree0", "assets/objects/tree0.png");
    this.load.spritesheet(
      "guy",
      "assets/sprites/guy_anim/guy_walk_sht.png",
      {
        frameWidth: 50,
        frameHeight: 75,
      }
    );
  }

  

  

