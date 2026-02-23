# CLAUDE.md

This file provides guidance to Claude Code when working with the Bases Kanban plugin fork.

> **Quick Context:** See `context.md` for project overview, tech stack, and deployment info. This file focuses on development workflow and commands.

---

## Project Overview

**Bases Kanban is a fork of the Obsidian Bases Kanban plugin, customized for GreyWolf OS task and job management workflows.**

**Key characteristics:**
- TypeScript-based Obsidian plugin
- Extends Obsidian Bases with kanban board visualization
- Drag-and-drop interface that updates note frontmatter automatically
- Customizations for GreyWolf OS frontmatter schemas and workflow needs

---

## Development Commands

### Setup

```bash
# Clone the repository
git clone https://github.com/greywolfagency/obsidian-bases-kanban.git

# Navigate to project directory
cd obsidian-bases-kanban

# Install dependencies
npm install
```

### Running Locally

```bash
# Build in development mode with watch
npm run dev

# The plugin will be built to main.js
# To test in Obsidian:
# 1. Create a symlink from your vault's .obsidian/plugins/bases-kanban/ to this directory
# 2. Enable the plugin in Obsidian settings
# 3. Rebuild with npm run dev when making changes
# 4. Reload Obsidian (Ctrl/Cmd + R) to see changes
```

### Building

```bash
# Build for production
npm run build

# Build output location: main.js, manifest.json, styles.css
```

### Testing

```bash
# Manual testing checklist:
# - Create a note with status property
# - Open Bases Kanban view
# - Drag cards between columns
# - Verify frontmatter updates correctly
# - Test card title property configuration
# - Test quick-add functionality
```

### Linting & Formatting

```bash
# Run ESLint
npm run lint

# Auto-fix linting issues (if configured)
npm run lint:fix
```

---

## Deployment

### Prerequisites

- GitHub account with access to greywolfagency organization
- Node.js and npm installed
- Obsidian installed for testing
- Git configured for pushing changes

### Deploy to GitHub

```bash
# Commit changes
git add .
git commit -m "Description of changes"

# Push to GitHub
git push origin master

# Create release (if publishing)
# 1. Update version in manifest.json and package.json
# 2. Build production version: npm run build
# 3. Create GitHub release with main.js, manifest.json, styles.css
# 4. Tag release with version number
```

### Environment Variables

**Required:**
None - this is a client-side Obsidian plugin

**Optional:**
None currently

---

## Project Structure

```
bases-kanban/
├── src/                    # TypeScript source files
│   ├── main.ts            # Plugin entry point
│   ├── kanban-view.ts     # Kanban board rendering logic
│   ├── drag-drop.ts       # Drag and drop management
│   └── settings.ts        # Plugin settings interface
├── styles/                 # CSS styling
│   └── styles.css         # Main stylesheet
├── manifest.json          # Obsidian plugin manifest
├── package.json           # NPM dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── esbuild.config.mjs     # Build configuration
├── context.md             # Project metadata (GreyWolf OS)
├── log.md                 # Development log (GreyWolf OS)
└── CLAUDE.md              # This file
```

**Key files to understand:**
- **src/main.ts** - Plugin initialization and lifecycle
- **src/kanban-view.ts** - Core kanban board rendering and interaction
- **src/drag-drop.ts** - Drag and drop functionality
- **manifest.json** - Plugin metadata for Obsidian
- **esbuild.config.mjs** - Build process configuration

---

## Architecture & Design Decisions

### Plugin Architecture

Standard Obsidian plugin with TypeScript modules. The plugin registers a custom view type that extends Obsidian Bases views with kanban-style visualization.

**Components:**
1. **Plugin Class** - Handles plugin lifecycle, settings, and view registration
2. **Kanban View** - Renders notes as cards, handles drag-and-drop, updates frontmatter
3. **Drag Drop Manager** - Manages drag and drop operations
4. **Settings Interface** - User configuration for plugin options

### Key Design Decisions

**Why fork instead of extend?**
- Need deep customization for GreyWolf OS frontmatter schemas
- Want control over update timing and compatibility
- Ability to add workflow-specific features
- May contribute improvements back to upstream

**Drag-and-drop architecture**
- Uses Obsidian's built-in property update methods
- Ensures frontmatter stays valid YAML
- Maintains file format and preserves comments

**Card title customization**
- Supports formula properties for dynamic card titles
- Falls back gracefully to filename if property doesn't exist
- Configured per-view for flexibility

---

## Development Guidelines

### Code Style

- Follow TypeScript best practices
- Use existing Obsidian API conventions
- Match upstream code style for potential contribution back
- Prefer explicit types over `any`

### Adding New Features

1. Create feature branch from master
2. Implement feature with TypeScript
3. Build and test in actual Obsidian vault
4. Update manifest.json version if needed
5. Document changes in log.md
6. Submit PR or push to master

### Dependencies

**How to add dependencies:**
```bash
npm install --save package-name
```

**Dependency policy:**
- Minimize external dependencies (plugin size matters)
- Prefer Obsidian built-in APIs over third-party libraries
- Evaluate bundle size impact

---

## Known Issues & Gotchas

### Gotcha: Hot Reload in Obsidian
**What happens:** Obsidian doesn't hot-reload plugins automatically
**How to avoid:** Use Ctrl/Cmd + R to reload Obsidian after rebuilding, or install the Hot Reload plugin for development

### Gotcha: Frontmatter Parsing
**What happens:** Invalid YAML in frontmatter can break the plugin
**How to avoid:** Always use Obsidian's frontmatter API methods, never manipulate raw text

### Gotcha: Plugin Loading Order
**What happens:** Plugin may load before Bases, causing initialization errors
**How to avoid:** Check that required dependencies are available in onload()

---

## Troubleshooting

### Problem: Plugin doesn't appear in Obsidian
**Symptoms:** Plugin not listed in Community Plugins or Settings
**Solution:**
1. Check manifest.json is valid JSON
2. Ensure plugin folder is in .obsidian/plugins/
3. Enable "Community plugins" in Settings
4. Reload Obsidian

### Problem: Changes not reflected after rebuild
**Symptoms:** Code changes don't show up in Obsidian
**Solution:**
1. Verify npm run dev completed without errors
2. Check that main.js was updated (check file timestamp)
3. Reload Obsidian with Ctrl/Cmd + R
4. Try disabling and re-enabling the plugin

### Problem: TypeScript errors in build
**Symptoms:** Build fails with type errors
**Solution:**
1. Check TypeScript version matches upstream
2. Verify @types/obsidian is installed
3. Review tsconfig.json for compatibility

---

## Testing Strategy

### Manual Testing
- **Location:** Test in actual Obsidian vault
- **Process:**
  1. Create test vault or use GreyWolf OS vault
  2. Add test notes with frontmatter properties
  3. Open Bases Kanban view
  4. Test drag-and-drop functionality
  5. Test card title property configuration
  6. Verify frontmatter updates correctly
  7. Test edge cases (empty properties, invalid values)

### Integration Testing
- Test with GreyWolf OS task and job frontmatter schemas
- Verify compatibility with Work.base and task system
- Check performance with large numbers of notes

---

## Customizations

### Current Customizations

**Card Title Property (Added 2026-02-23)**
- Allows configuring any property (frontmatter, formula, or file property) as card title
- View option: "Card title property"
- Supports `note.*`, `formula.*`, and `file.*` property types
- Falls back to filename if property doesn't exist or is empty

### Planned Customizations

- Custom filtering for client, service, owner fields
- Enhanced card display with priority indicators, due dates
- Integration with GreyWolf OS frontmatter schemas
- Quick-add integration with task templates
- Custom board presets for different workflows

---

## Related Documentation

- **context.md** - Project metadata, tech stack, deployment info
- **log.md** - Development activity log
- **README.md** - User-facing documentation
- **Upstream README** - Original plugin documentation at https://github.com/ewerx/obsidian-bases-kanban
- **Obsidian Plugin API** - https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin

---

## External Resources

- **Obsidian Plugin API:** https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin
- **TypeScript Docs:** https://www.typescriptlang.org/docs/
- **Obsidian Developer Discord:** https://discord.gg/obsidianmd
- **Upstream Repository:** https://github.com/ewerx/obsidian-bases-kanban
- **Our Fork:** https://github.com/greywolfagency/obsidian-bases-kanban
