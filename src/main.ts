import { Plugin } from 'obsidian';
import { KanbanView } from './kanban-view';
import { KanbanSettings, DEFAULT_SETTINGS, KanbanSettingTab } from './settings';

export default class BasesKanbanPlugin extends Plugin {
	settings: KanbanSettings;

	async onload() {
		await this.loadSettings();

		this.registerBasesView('kanban', {
			name: 'Kanban',
			icon: 'lucide-kanban',
			factory: (controller, containerEl) => new KanbanView(controller, containerEl, this),
			options: () => KanbanView.getViewOptions(),
		});

		this.addSettingTab(new KanbanSettingTab(this.app, this));
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	refreshViews() {
		// Trigger a workspace layout update to refresh all kanban views
		this.app.workspace.trigger('layout-change');
	}

	onunload() {
	}
}
