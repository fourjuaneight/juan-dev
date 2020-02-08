const { createCanvas, createImageData } = require('canvas');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

// base dimensions
const baseSize = 64;
// save directory
const cwd = resolve(__dirname, 'static/images');

// Creates random noise background image on build
const makeNoise = async (size = baseSize) => {
  // create node canvas
  const canvas = createCanvas(baseSize, baseSize);
  const ctx = canvas.getContext('2d');
  // create image data
  const black = new Uint8ClampedArray([0, 0, 0, 255]);
  const white = new Uint8ClampedArray([255, 255, 255, 255]);
  const data = new Uint8ClampedArray(size * size * 4);

  // generate image randomness
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      data.set(Math.random() > 0.5 ? white : black, (y * size + x) * 4);
    }
  }

  // create image file stream
  ctx.putImageData(createImageData(data, size, size), 0, 0);
  const out = createWriteStream(resolve(cwd, 'noise-bg.png'));
  const stream = canvas.createPNGStream();

  // save image file
  stream.pipe(out);
  // eslint-disable-next-line no-console
  out.on('finish', () => console.info('Noise created successfully.'));
};

makeNoise();
