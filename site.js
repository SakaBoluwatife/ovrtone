// Shared by every page of the Ovrtone site.

// ---- Switches: flip these when things are ready ----
const INSTALLER_READY = true;   // true once Ovrtone-1.1.0-setup.exe is on the v1.1.0 GitHub release
const VIDEOS_READY = false;      // true once the Raylight MP4s are in the media folder
const SOURCE_EMAIL = 'damnmulla@gmail.com';
const INSTALLER_URL = 'https://github.com/SakaBoluwatife/ovrtone/releases/download/v1.1.0/Ovrtone-1.1.0-setup.exe';

// Highlight the menu tab of the page we are on.
(() => {
  const here = location.pathname.split('/').pop() || 'index.html';
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

// Product videos, wherever they appear.
document.querySelectorAll('[data-videos]').forEach(el => { el.hidden = !VIDEOS_READY; });

// Source-code request button.
const req = document.getElementById('request-source');
if (req) {
  req.href = 'mailto:' + SOURCE_EMAIL +
    '?subject=' + encodeURIComponent('Ovrtone source code request') +
    '&body=' + encodeURIComponent('Hi, I would like the source code for Ovrtone.\n\nVersion I downloaded: 1.1.0\n\nThanks!');
}
