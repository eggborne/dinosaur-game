
import * as PIXI from 'pixi.js';
import Dinosaur from './dinosaur.js';
import mainLoop from './exec.js'

export default function createGame() {
  const landscape = window.screen.availWidth > window.screen.availHeight;
  let pixelSize = parseFloat(1 / window.devicePixelRatio);
  if (pixelSize < 1) {
    pixelSize = parseFloat(pixelSize.toPrecision(3));
  }
  PIXI.loader.add('step0', require('../assets/images/dinostep0.png'))
    .add('step1', require('../assets/images/dinostep1.png'))
    .add('standing', require('../assets/images/dinostanding.png'))
    .add('duck0', require('../assets/images/dinoduck0.png'))
    .add('duck1', require('../assets/images/dinoduck1.png'))
    .add('dead', require('../assets/images/dinodead.png'))
    .load(() => {
      let dino = new Dinosaur(app, pixelSize * 96);
      // app.stage.addChild(dino.sprite);
    });
  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    autoResize: true,
    powerPreference: 'high-performance',
    roundPixels: true,
    backgroundColor: 0xdddddd
  });
  app.counter = 0;
  PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
  PIXI.settings.RESOLUTION = window.devicePixelRatio
  document.getElementById('main').appendChild(app.view);



  PIXI.ticker.shared.add((time) => {
    app.render(app.stage);
    mainLoop(app)
    app.counter++
  });
  // app.render(app.stage);
  return app;
}

