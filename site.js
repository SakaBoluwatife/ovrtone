// Shared by every page of the Ovrtone site.

// ---- Switches: flip these when things are ready ----
const INSTALLER_READY = true;   // true once Ovrtone-1.3.1-setup.exe is on the v1.3.1 GitHub release
const VIDEOS_READY = false;      // true once the Raylight MP4s are in the media folder
const SOURCE_EMAIL = 'damnmulla@gmail.com';
const INSTALLER_URL = 'https://github.com/SakaBoluwatife/ovrtone/releases/download/v1.3.1/Ovrtone-1.3.1-setup.exe';
const MAC_READY = false;         // true once Ovrtone-1.2.1-mac.dmg is on the v1.2.1 GitHub release
const MAC_URL = 'https://github.com/SakaBoluwatife/ovrtone/releases/download/v1.2.1/Ovrtone-1.2.1-mac.dmg';
const UPDATE_READY = true;       // true once Ovrtone-update-1.3.1.0.exe is on the v1.3.1 GitHub release
const UPDATE_URL = 'https://github.com/SakaBoluwatife/ovrtone/releases/download/v1.3.1/Ovrtone-update-1.3.1.0.exe';

// Highlight the menu tab of the page we are on.
(() => {
  let here = location.pathname.split('/').pop() || 'index.html';
  if (here === 'features.html') here = 'ovrtone.html';   // Features lives under Ovrtone
  document.querySelectorAll('header nav a').forEach(a => {
    if (a.getAttribute('href') === here) a.classList.add('on');
  });
})();

// The installer button(s): "Coming soon" until the file is uploaded.
document.querySelectorAll('[data-installer]').forEach(a => {
  if (INSTALLER_READY) {
    a.href = INSTALLER_URL;
  } else {
    a.classList.add('soon');
    a.removeAttribute('href');
    const label = a.querySelector('span');
    if (label) label.textContent = 'Coming soon';
  }
});

// The Mac download button, the same way.
document.querySelectorAll('[data-mac]').forEach(a => {
  if (MAC_READY) {
    a.href = MAC_URL;
  } else {
    a.classList.add('soon');
    a.removeAttribute('href');
    const label = a.querySelector('span');
    if (label) label.textContent = 'Coming soon';
  }
});

// The update patch link: hidden until the file is uploaded.
document.querySelectorAll('[data-update]').forEach(a => {
  if (UPDATE_READY) a.href = UPDATE_URL;
  else if (a.parentElement) a.parentElement.hidden = true;
});

// Product videos, wherever they appear.
document.querySelectorAll('[data-videos]').forEach(el => { el.hidden = !VIDEOS_READY; });

// Source-code request button.
const req = document.getElementById('request-source');
if (req) {
  req.href = 'mailto:' + SOURCE_EMAIL +
    '?subject=' + encodeURIComponent('Ovrtone source code request') +
    '&body=' + encodeURIComponent('Hi, I would like the source code for Ovrtone.\n\nVersion I downloaded: 1.3.1\n\nThanks!');
}
