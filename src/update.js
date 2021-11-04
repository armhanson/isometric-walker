import { create } from "./create";

export function update() {
    // North, South, East, West boundaries
    if (guy.x > 725) {
      guy.x -= 1;
    }
    if (guy.x < 75) {
      guy.x += 1;
    }
    if (guy.y > 475) {
      guy.y -= 1;
    }
    if (guy.y < 75) {
      guy.y += 1;
    }

    // function for defining collision boundaries of obstacle sprites //
    const objParams = (obj, sprite) => {
      const sx = sprite.x;
      const sy = sprite.y;
      const xl = obj.x - 35;
      const xr = obj.x + 45;
      const yt = obj.y + 30;
      const yb = obj.y + 60;

      if (sx > xl && sx < xl + 3 && sy >= yt && sy <= yb) {
        return (sprite.x = xl - 1);
      } else if (sx < xr && sx > xr - 3 && sy >= yt && sy <= yb) {
        return (sprite.x = xr + 1);
      } else if (sy > yt && sy < yt + 3 && sx >= xl && sx <= xr) {
        return (sprite.y = yt - 1);
      } else if (sy < yb && sy > yb - 3 && sx >= xl && sx <= xr) {
        return (sprite.y = yb + 1);
      }
    };

    // implementing objParams() during player sprite movement //
    /* NOTE: in Phaser, arrays that are initiated in the create() function
       are automatically spread for use by the update function. that is how
       i'm using the trees array items without first accessing the inner data.
       tree0, tree1, etc., each maintain their values and are then passed to
       and utilized by objParams() */
    if (cursors.D.isDown) {
      objParams(tree0, guy);
      objParams(tree1, guy);
      objParams(tree2, guy);
      objParams(tree3, guy);
    }

    if (cursors.A.isDown) {
      objParams(tree0, guy);
      objParams(tree1, guy);
      objParams(tree2, guy);
      objParams(tree3, guy);
    }

    if (cursors.W.isDown) {
      objParams(tree0, guy);
      objParams(tree1, guy);
      objParams(tree2, guy);
      objParams(tree3, guy);
    }

    if (cursors.S.isDown) {
      objParams(tree0, guy);
      objParams(tree1, guy);
      objParams(tree2, guy);
      objParams(tree3, guy);
    }

    let depthSort = (obj, pos) => {
      // player sprite position
      playerPosition = pos.y;
      // base of tree obj measured 50 pixels below center of sprite image
      treeResetPosition = obj.y + 50;

      // if player sprite coordinates are higher than tree sprite coordinates, change depth
      if (playerPosition > treeResetPosition) {
        return pos.setDepth(playerPosition);
      }
      // if tree sprite coordinates are higher than player sprite, change depth
      if (treeResetPosition > playerPosition) {
        pos.setDepth(0);
        return obj.setDepth(treeResetPosition);
      }
    };

    // sorting guy in front of tree0

    if (guy.y > tree0.y + 50) {
      depthSort(tree0, guy);
    }

    if (guy.y > tree1.y + 50) {
      depthSort(tree1, guy);
    }

    if (guy.y > tree2.y + 50) {
      depthSort(tree2, guy);
    }

    if (guy.y > tree3.y + 50) {
      depthSort(tree3, guy);
    }

    // let treeReset = (tree) => {
    //   const resetPosition = tree.y + 50;

    //   // sorting tree0 in front of guy
    //   if (resetPosition > guy.y) {
    //     guy.setDepth(0);
    //     return tree.setDepth(resetPosition);
    //   }
    // };

    if (tree0.y + 50 > guy.y) {
      depthSort(tree0, guy);
      if (tree1.y + 50 > guy.y) {
        depthSort(tree1, guy);
        if (tree2.y + 50 > guy.y) {
          depthSort(tree2, guy);
          if (tree3.y + 50 > guy.y) {
            depthSort(tree3, guy);
          }
        }
      }
    }

    // walking animation implement and stop,
    // bouncing guy off game area borders
    if (
      cursors.A.isDown &&
      guy.x <= 726 &&
      guy.x >= 74 &&
      guy.y <= 476 &&
      guy.y >= 74
    ) {
      guy.x -= 1.5;

      guy.anims.play("walk", true);
    } else if (
      cursors.D.isUp &&
      cursors.A.isUp &&
      cursors.S.isUp &&
      cursors.W.isUp
    ) {
      guy.anims.play("walk", false);
    }

    if (
      cursors.D.isDown &&
      guy.x <= 726 &&
      guy.x >= 74 &&
      guy.y <= 476 &&
      guy.y >= 74
    ) {
      guy.x += 1.5;

      guy.anims.play("walk", true);
    } else if (
      cursors.D.isUp &&
      cursors.A.isUp &&
      cursors.S.isUp &&
      cursors.W.isUp
    ) {
      guy.anims.play("walk", false);
    }

    if (
      cursors.S.isDown &&
      guy.x <= 726 &&
      guy.x >= 74 &&
      guy.y <= 476 &&
      guy.y >= 74
    ) {
      guy.y += 1.5;

      guy.anims.play("walk", true);
    } else if (
      cursors.D.isUp &&
      cursors.A.isUp &&
      cursors.S.isUp &&
      cursors.W.isUp
    ) {
      guy.anims.play("walk", false);
    }

    if (
      cursors.W.isDown &&
      guy.x <= 726 &&
      guy.x >= 74 &&
      guy.y <= 476 &&
      guy.y >= 74
    ) {
      guy.y -= 1.5;

      guy.anims.play("walk", true);
    } else if (
      cursors.D.isUp &&
      cursors.A.isUp &&
      cursors.S.isUp &&
      cursors.W.isUp
    ) {
      guy.anims.play("walk", false);
    }
  }