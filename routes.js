const express = require('express');
const router = express.Router();
const db = require('./db');
const multer = require('multer');
const config = require('../config');
const imageProcessor = require('./imageProcessor');

const upload = multer({ dest: config.IMAGE_UPLOAD_PATH });

// Start test route
router.post('/api/startTest', upload.none(), async (req, res) => {
  const { name, email, invitationCode } = req.body;

  // Save user details to the database
  try {
    const result = await db.query(
      'INSERT INTO users (name, email, invitation_code) VALUES (?, ?, ?)',
      [name, email, invitationCode]
    );

    // Send success response
    res.status(200).json({
      success: true,
      userId: result.insertId
    });
  } catch (err) {
    console.error('Error saving user details:', err);
    res.status(500).json({
      success: false,
      message: 'Error saving user details'
    });
  }
});

// Upload image route
router.post('/api/uploadImage', upload.single('image'), async (req, res) => {
  const { userId } = req.body;

  // Process the image and store it in the database
  try {
    const image = req.file;
    const imagePath = `${config.IMAGE_UPLOAD_PATH}/${image.filename}`;
    await imageProcessor.processImage(imagePath);

    await db.query(
      'INSERT INTO images (user_id, image_path) VALUES (?, ?)',
      [userId, imagePath]
    );

    // Send success response
    res.status(200).json({
      success: true
    });
  } catch (err) {
    console.error('Error processing/uploading image:', err);
    res.status(500).json({
      success: false,
      message: 'Error processing/uploading image'
    });
  }
});

// Get user details and images route
router.get('/api/user/:userId', async (req, res) => {
  const { userId } = req.params;

  // Get user details and images from the database
  try {
    const userDetails = await db.query(
      'SELECT name, email, invitation_code FROM users WHERE id = ?',
      [userId]
    );

    const userImages = await db.query(
      'SELECT image_path, created_at FROM images WHERE user_id = ? ORDER BY created_at ASC',
      [userId]
    );

    // Send success response with user details and images
    res.status(200).json({
      success: true,
      userDetails: userDetails[0],
      userImages: userImages
    });
  } catch (err) {
    console.error('Error getting user details and images:', err);
    res.status(500).json({
      success: false,
      message: 'Error getting user details and images'
    });
  }
});

module.exports = router;
