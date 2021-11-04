# Isometric-ish Walker
An isometric-ish walking simulator.

### Description:

You've stumbled upon my side project, an isometric-ish walking sim!

### Getting Started:

I have a lot planned for this game, but for now, you get to watch me add pieces to it week by week.
Feel free to use any of the code snippets you find here.

If you want to use the code, [download and install Phaser.js 3](https://phaser.io/download "Phaser 3 Download Page").

Follow Phaser's [walkthrough](https://phaser.io/tutorials/getting-started-phaser3 "Phaser 3 Getting Started Tutorial"). Make sure you're using Phaser 3. My code won't work with v.2.

I recommend watching some extra tutorials [here](https://phaser.io/learn "Phaser's Learn Page").

### Execute!

You'll need to run the game on a local server through your browser.

I run the game locally by launching localHost in VS Code from inside the project's root folder.
It launches in Chrome and is playable immediately.

If it isn't launching properly, make sure you have both Phaser.js and Live Server installed properly.

## v.0.01

It's a walking sim! No animations in this version. Just a ghostly image floating about the screen on a colored background.

## v.0.02

I added an obstacle. To create the obstacle boundaries, I create an update "listener" that will reposition the player sprite when crossing the boundary of the sprite. To make sure the player sprite appears behind or in front of the obstacle sprite, I create an update "listener" to resequence sprite layers appropriately. Moving player sprite behind obstacle sprite will now create the illusion of the character moving behind the object.

## v.0.03

I removed parameters from the obstacle sprite and character sprite and created a function to handle all changes during the update sequence. Obstacle boundaries are now a global feature of the environment that I can apply through calling the function with parameters that define a pixel position wihtin the Phaser canvas. This will make adding future obstacles much less labor intensive and remove a lot of redundant typing.

## v.0.04

I added a depth sort function to handle player sprite passing in front of and behind multiple obstacle sprites (objects) at once. I improved the boundary function to be reproducible and added a few extra obstacle sprites by reusing the same image from preload() and defining the position in the function paramaters.

### Author:

Andrew Hanson

[@armhanson](https://github.com/armhanson "Andrew Hanson's Main Github Page")

### Versions:

* 0.1 
  * initial commit
  * sprite movement within designated area of screen
