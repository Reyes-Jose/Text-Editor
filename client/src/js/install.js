const butInstall = document.getElementById('buttonInstall');
const textHeader = document.getElementById('textHeader');

// Logic for installing the PWA
// adds an eventlistener for beforeinstallprompt
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visable';
    textHeader.textContent = 'Click the button to install!';
    
    //implements an eventlistener on click
    butInstall.addEventListener('click', async () => {
        event.prompt();
        butInstall.setAttribute('disabled', true);
        butInstall.textContent = 'Installed!';
    });

});


//adds an event listener when app is installed
window.addEventListener('appinstalled', (event) => {
    textHeader.textContent = 'Succenfully installed!';
    console.log('app installed', event);
});
