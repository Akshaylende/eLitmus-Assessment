// Get user media devices
navigator.mediaDevices.getUserMedia({ audio: true, video: true })
  .then((stream) => {
    // Create video element to display webcam feed
    const video = document.createElement('video');
    video.srcObject = stream;
    video.autoplay = true;
    video.width = '320';
    video.height = '240';

    // Create container element for video
    const container = document.createElement('div');
    container.appendChild(video);

    // Find an element on the page to insert the video container before
    const insertBefore = document.querySelector('.test-instructions');
    if (insertBefore) {
      insertBefore.parentNode.insertBefore(container, insertBefore);
    }
  })
  .catch((error) => {
    console.error('Error getting user media:', error);
  });
