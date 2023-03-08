const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt
  event.preventDefault();

  // Store the event object for later use
  deferredPrompt = event;
});

butInstall.addEventListener('click', async () => {
  // If deferredPrompt is set, prompt the user to install the PWA
  if (deferredPrompt) {
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;

    // Log the user's choice (either 'accepted' or 'dismissed')
    console.log(choiceResult.outcome);

    // Clear the deferredPrompt variable
    deferredPrompt = null;
  }
});

window.addEventListener('appinstalled', (event) => {
  console.log('PWA installed successfully!');
});
