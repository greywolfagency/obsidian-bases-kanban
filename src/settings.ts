import { App, PluginSettingTab, Setting } from 'obsidian';
import BasesKanbanPlugin from './main';

export interface KanbanSettings {
	cardTitleProperty: string;
}

export const DEFAULT_SETTINGS: KanbanSettings = {
	cardTitleProperty: '',
};

export class KanbanSettingTab extends PluginSettingTab {
	plugin: BasesKanbanPlugin;

	constructor(app: App, plugin: BasesKanbanPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		containerEl.createEl('h2', { text: 'GWA Bases Kanban Settings' });

		new Setting(containerEl)
			.setName('Card title property')
			.setDesc('Property to use as card title (e.g., "title", "task", "formula.myFormula"). Leave empty to use filename.')
			.addText(text => text
				.setPlaceholder('e.g., title')
				.setValue(this.plugin.settings.cardTitleProperty)
				.onChange(async (value) => {
					this.plugin.settings.cardTitleProperty = value.trim();
					await this.plugin.saveSettings();
					// Trigger a refresh of all kanban views
					this.plugin.refreshViews();
				}));
	}
}
