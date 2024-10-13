import Adw from 'gi://Adw';
import Gio from 'gi://Gio';
import Gtk from 'gi://Gtk';

import {ExtensionPreferences, gettext as _} from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

export default class HidePanelElementsPreferences extends ExtensionPreferences {
    fillPreferencesWindow(window) {
        const settings = this.getSettings();

        const page = new Adw.PreferencesPage();
        const group = new Adw.PreferencesGroup();
        page.add(group);

        const accessibilityRow = new Adw.ActionRow({ title: _('Hide Accessibility Menu') });
        group.add(accessibilityRow);

        const accessibilityToggle = new Gtk.Switch({
            active: settings.get_boolean('hide-accessibility'),
            valign: Gtk.Align.CENTER,
        });
        accessibilityRow.add_suffix(accessibilityToggle);
        accessibilityRow.activatable_widget = accessibilityToggle;

        settings.bind(
            'hide-accessibility',
            accessibilityToggle,
            'active',
            Gio.SettingsBindFlags.DEFAULT
        );

        const nightLightRow = new Adw.ActionRow({ title: _('Hide Night Light Icon') });
        group.add(nightLightRow);

        const nightLightToggle = new Gtk.Switch({
            active: settings.get_boolean('hide-night-light'),
            valign: Gtk.Align.CENTER,
        });
        nightLightRow.add_suffix(nightLightToggle);
        nightLightRow.activatable_widget = nightLightToggle;

        settings.bind(
            'hide-night-light',
            nightLightToggle,
            'active',
            Gio.SettingsBindFlags.DEFAULT
        );

        window.add(page);
    }
}
