// তুমার নামাজের সময়, সেহরি, ইফতার সময় নির্ধারণের জন্য কোড লিখো
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
      console.log('Service Worker Registered');
    })
    .catch(function(error) {
      console.log('Service Worker registration failed:', error);
    });
}
