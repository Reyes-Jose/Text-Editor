const butInstall = document.getElementById('buttonInstall');


// Logic for installing the PWA
// adds an eventlistener for beforeinstallprompt
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;

    butInstall.classList.toggle('hidden', false);       
    
});

//implements an eventlistener on click
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if(!promptEvent){
        return;
    }
    promptEvent.prompt();

    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

//adds an event listener when app is installed
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
