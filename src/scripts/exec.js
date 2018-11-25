function mainLoop(app) {
  let dino = app.dino;
  let ticker = app.counter;

  if (ticker > 0 && ticker % 10 === 0) {
    if (dino.pose === 'step1') {
      dino.changeTexture('step0');
    } else {
      dino.changeTexture('step1');
    }
  }
  
}

export default mainLoop;