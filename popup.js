document.addEventListener('DOMContentLoaded', function() {
  const startTestButton = document.getElementById('start-test-button');
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const codeInput = document.getElementById('code-input');
  const videoElement = document.getElementById('video-element');

  let mediaStream = null;

  function startTest() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const code = codeInput.value.trim();
    if (name === '' || email === '' || code === '') {
      alert('Please enter your name, email, and code to start the test.');
      return;
    }
    chrome.runtime.sendMessage({
      action: 'startTest',
      name: name,
      email: email,
      code: code
    });
  }

  function stopTest() {
    if (mediaStream !== null) {
      mediaStream.getTracks().forEach(function(track) {
        track.stop();
      });
      mediaStream = null;
    }
    chrome.runtime.sendMessage({
      action: 'stopTest'
    });
  }

  function startCameraFeed() {
    const videoConstraints = {
      width: { ideal: 1280 },
      height: { ideal: 720 },
      aspectRatio: { ideal: 16 / 9 }
    };
    const mediaStreamConstraints = {
      video: videoConstraints,
      audio: true
    };
    navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
      .then(function(stream) {
        mediaStream = stream;
        videoElement.srcObject = mediaStream;
        chrome.runtime.sendMessage({
          action: 'startCameraFeed'
        });
      })
      .catch(function(error) {
        console.error('getUserMedia error:', error);
        alert('Failed to start the camera feed. Please check your camera and microphone settings.');
      });
  }

  function stopCameraFeed() {
    if (mediaStream !== null) {
      mediaStream.getTracks().forEach(function(track) {
        track.stop();
      });
      mediaStream = null;
      videoElement.srcObject = null;
    }
  }

  startTestButton.addEventListener('click', function(event) {
    event.preventDefault();
    startTest();
    startCameraFeed();
  });

  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'stopCameraFeed') {
      stopCameraFeed();
    }
  });

  window.addEventListener('beforeunload', function(event) {
    stopTest();
  });
});
