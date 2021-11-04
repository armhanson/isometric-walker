import Phaser from "phaser"
import { preload } from "./preload";

export function create() {
    this.add.image(400, 300, "backing");
    this.add.image(400, 300, "grass");

    guy = this.add.sprite(75, 100, "guy");

    // trees will automatically spread and the inner contents will be
    // displayed. the array is only for my OCD and organizing
    // collections of obstacle sprites.
    const trees = [
      (tree0 = this.add.sprite(475, 200, "tree0")),
      (tree1 = this.add.sprite(275, 260, "tree0")),
      (tree2 = this.add.sprite(600, 360, "tree0")),
      (tree3 = this.add.sprite(350, 310, "tree0")),
    ];

    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers("guy", {
        start: 0,
        end: 3,
      }),
      frameRate: 7.75,
      repeat: -1,
    });

    cursors = this.input.keyboard.addKeys("W, S, A, D");

  }