chrome.runtime.onInstalled.addListener(() => {
    console.log('eLitmus Assessment Helper installed!');
  });
  
  // Listen for messages from the popup script
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'start-test') {
      // TODO: Start the test and initiate image proctoring
      console.log('Starting test for user:', message.data);
    } else {
      console.warn('Unknown message type:', message.type);
    }
  });
  