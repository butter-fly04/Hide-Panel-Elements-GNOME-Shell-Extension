// extension.js
import GObject from 'gi://GObject';
import Gio from 'gi://Gio';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import {Extension, gettext as _} from 'resource:///org/gnome/shell/extensions/extension.js';

export default class HidePanelElementsExtension extends Extension {
    constructor(metadata) {
        super(metadata);
        this._settings = null;
        this._originalNightLightSync = null;
    }

    enable() {
        this._settings = this.getSettings();
        this._settingsChangedId = this._settings.connect('changed', this._onSettingsChanged.bind(this));
        this._applySettings();
    }

    disable() {
        if (this._settingsChangedId) {
            this._settings.disconnect(this._settingsChangedId);
            this._settingsChangedId = null;
        }
        this._settings = null;
        this._showAllElements();
    }

    _onSettingsChanged() {
        this._applySettings();
    }

    _applySettings() {
        let hideAccessibility = this._settings.get_boolean('hide-accessibility');
        let hideNightLight = this._settings.get_boolean('hide-night-light');

        this._toggleAccessibilityMenu(!hideAccessibility);
        this._toggleNightLightIcon(!hideNightLight);
    }

    _toggleAccessibilityMenu(show) {
        let statusArea = Main.panel.statusArea;
        if (statusArea['a11y']) {
            if (show) {
                statusArea['a11y'].container.show();
            } else {
                statusArea['a11y'].container.hide();
            }
        }
    }

    _toggleNightLightIcon(show) {
        let quickSettings = Main.panel.statusArea.quickSettings;
        let nightLight = quickSettings._nightLight;

        if (nightLight) {
            if (show) {
                // Restore original sync function if it was saved
                if (this._originalNightLightSync) {
                    nightLight._sync = this._originalNightLightSync;
                    this._originalNightLightSync = null;
                }
                nightLight._sync();
            } else {
                // Save original sync function if not already saved
                if (!this._originalNightLightSync) {
                    this._originalNightLightSync = nightLight._sync;
                }
                // Override sync function to always hide the icon
                nightLight._sync = () => {
                    nightLight._indicator.visible = false;
                };
                nightLight._sync();
            }
        }
    }

    _showAllElements() {
        this._toggleAccessibilityMenu(true);
        this._toggleNightLightIcon(true);
    }
}

