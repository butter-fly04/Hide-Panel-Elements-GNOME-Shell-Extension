# Hide Panel Elements GNOME Shell Extension

This GNOME Shell extension allows you to hide specific panel elements in GNOME, specifically the Accessibility Menu and the Night Light icon. It's compatible with GNOME Shell 46.

## Features

- Hide/show the Accessibility Menu
- Hide/show the Night Light icon
- Individual toggles for each element
- Settings are applied instantly without needing to restart GNOME Shell

## Installation

### Easy Install (Recommended)

1. Go to the [Releases](https://github.com/yourusername/hide-panel-elements/releases) page of this repository.
2. Download the latest release ZIP file (`hide-panel-elements@example.com.zip`).
3. Open the Extensions app in GNOME.
4. Click the "Install from file..." button (it looks like a small package icon).
5. Select the downloaded ZIP file.
6. Enable the extension using the toggle switch in the Extensions app.

### Manual Install (For developers)

If you want to install the extension manually or make modifications:

1. Clone this repository or download the source code.
2. Copy the entire folder to `~/.local/share/gnome-shell/extensions/hide-panel-elements@example.com/`
3. Restart GNOME Shell:
   - On X11: Alt+F2, type 'r', press Enter
   - On Wayland: Log out and log back in
4. Enable the extension using GNOME Extensions app or GNOME Tweaks tool

Note: The schemas are pre-compiled in the repository, so you don't need to compile them manually.

## Usage

After installation and enabling the extension:

1. Open the Extensions app
2. Find "Hide Panel Elements" in the list
3. Click the gear icon to open the extension preferences
4. Use the toggles to hide or show the Accessibility Menu and Night Light icon as desired

Changes are applied immediately.

## Compatibility

This extension is designed for GNOME Shell 46. It may work with other versions, but this is not guaranteed.

## Contributing

Contributions are welcome! If you're making changes to the schema, remember to recompile it using:

Please feel free to submit a Pull Request.

## License

This extension is distributed under the terms of the GNU General Public License, version 2 or later. See the LICENSE file for details.

## Support

If you encounter any issues or have any feature requests, please file an issue on the GitHub repository.
