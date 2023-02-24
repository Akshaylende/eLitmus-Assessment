const fs = require('fs');
const path = require('path');
const { createCanvas, Image } = require('canvas');
const config = require('../config');

// Create uploads folder if it does not exist
const UPLOADS_FOLDER = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(UPLOADS_FOLDER)) {
  fs.mkdirSync(UPLOADS_FOLDER);
}

// Create canvas to draw the image
const canvas = createCanvas(config.IMAGE_WIDTH, config.IMAGE_HEIGHT);
const context = canvas.getContext('2d');

// Function to capture an image and save it to the uploads folder
async function captureImage(imageData) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = function () {
      context.drawImage(image, 0, 0, config.IMAGE_WIDTH, config.IMAGE_HEIGHT);
      const filename = `${Date.now()}.jpg`;
      const filepath = path.join(UPLOADS_FOLDER, filename);
      const out = fs.createWriteStream(filepath);
      const stream = canvas.createJPEGStream({ quality: config.IMAGE_QUALITY });
      stream.pipe(out);
      out.on('finish', () => {
        resolve(filename);
      });
      out.on('error', (err) => {
        reject(err);
      });
    };
    image.onerror = function (err) {
      reject(err);
    };
    image.src = imageData;
  });
}

module.exports = { captureImage };
