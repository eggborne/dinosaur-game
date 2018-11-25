import * as PIXI from 'pixi.js';

class Dinosaur {
  constructor(app, size) {
    this.sprite = new PIXI.Sprite();
    this.sprite.texture = PIXI.utils.TextureCache['step0'];
    this.sprite.width = size;
    this.sprite.height = size;
    this.pose = 'step0'
    app.dino = this;
    app.stage.addChild(this.sprite);
  }

  changeTexture(newTexture) {
    this.pose = newTexture;
    this.sprite.texture = PIXI.utils.TextureCache[newTexture]
  }

}

export default Dinosaur;