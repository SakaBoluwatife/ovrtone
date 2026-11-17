# Bankz Sound Lab

The website of **Bankz Sound Lab (BSL)**: Ovrtone, a DAW for Windows, and BSL Classics, 35 analog-hardware plugins.

**Website:** https://sakaboluwatife.github.io/ovrtone/

Downloads are on the [Releases](https://github.com/SakaBoluwatife/ovrtone/releases) page.

## Updating the site

Pages: `index.html` (BSL home), `ovrtone.html` (Ovrtone), `plugins.html` (the shelf), `features.html` (what's new and features), `download.html`. Shared look in `style.css`. Three switches at the top of `site.js` control what visitors see:

- `INSTALLER_READY`: set to `true` once `Ovrtone-1.1.0-setup.exe` is on the `v1.1.0` release.
- `VIDEOS_READY`: set to `true` once the product videos are in `media/` (`arrange.mp4`, `piano-roll.mp4`, `mixer.mp4`, `spatial.mp4`, `tuner.mp4`).
- `SOURCE_EMAIL`: where source-code requests go.

Plugin screenshots are in `plugins/` as `<plugin>-<theme>.png`.
