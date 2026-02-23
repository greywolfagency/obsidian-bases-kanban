---
project: true
title: "Bases Kanban"
project_name: "Bases Kanban"
project_type: "obsidian-plugin"
status: "active"
phase: "development"
priority: "medium"
purpose: "Fork and modify the Obsidian Bases Kanban plugin to extend its functionality for GreyWolf OS workflows"
language: "TypeScript"
framework: "Obsidian Plugin API"
runtime: "Obsidian 1.10.6+"
deployment_target: "github"
deployment_status: "in-development"
deployment_url: "https://github.com/greywolfagency/obsidian-bases-kanban"
production_deployed: null
started: "2026-02-23"
completed: null
owner: "Mark"
contributors: []
stakeholder: "internal"
repository_location: "github-public"
local_code_path: "/Users/greywolf/Documents/greywolf-os/internal/projects/bases-kanban"
related_projects: []
has_claude_md: true
has_readme: true
has_detailed_docs: false
docs_location: "root"
---

# Bases Kanban - Project Context

## Overview

This project is a fork of the Obsidian Bases Kanban plugin by ewerx. The original plugin extends Obsidian Bases with a kanban board layout, enabling users to visualize notes as draggable cards organized in columns by any property. We're forking it to customize functionality specific to GreyWolf OS workflows, particularly for task and job management.

The plugin integrates deeply with Obsidian's native Bases framework, leveraging its grouping, sorting, and property configuration systems. Cards can be dragged between columns to automatically update frontmatter properties, making it a natural fit for status-based workflows. The plugin also supports column reordering, card sorting within columns using numeric properties, and quick actions to create new cards or open notes directly from the board.

Our fork focuses on adapting the plugin to better support the GreyWolf OS task and job management system, adding features like configurable card titles (using formulas or frontmatter properties) and potentially more enhancements for our specific workflows.

## Tech Stack Details

**Language:** TypeScript 77.1%
**Framework:** Obsidian Plugin API
**Runtime:** Obsidian 1.10.6 or later

**Key Dependencies:**
- obsidian - Core Obsidian API for plugin development
- esbuild - Bundler for TypeScript compilation
- eslint - Code quality and linting

**Development Tools:**
- TypeScript - Static typing and compilation
- esbuild - Fast bundling
- ESLint - Code quality enforcement

## Deployment Information

**Platform:** GitHub (public repository fork)
**Status:** In development
**URL:** https://github.com/greywolfagency/obsidian-bases-kanban
**Last Deployed:** 2026-02-23

**Deployment Process:**
Uses GitHub releases and potentially Obsidian Community Plugins (pending customization scope)

**Environment Variables:**
None - client-side plugin runs entirely in Obsidian

## Architecture

The plugin follows standard Obsidian plugin architecture with TypeScript modules for UI rendering, drag-and-drop handling, and property manipulation. It extends Obsidian's Bases system rather than replacing it, adding a kanban visualization layer on top of existing grouped views.

**Key Components:**
- **Kanban View Renderer** - Displays notes as cards grouped by property values
- **Drag & Drop Handler** - Manages card movement and property updates
- **Column Manager** - Persists custom column arrangements
- **Card Sorter** - Handles reordering within columns using numeric properties
- **Quick Actions** - Card creation and note opening from board interface

**File Structure:**
```
bases-kanban/
├── src/               - TypeScript source files
├── styles/            - CSS styling for kanban view
├── main.ts           - Plugin entry point
├── manifest.json     - Obsidian plugin manifest
├── package.json      - NPM dependencies
├── tsconfig.json     - TypeScript configuration
└── esbuild.config.js - Build configuration
```

## Related Projects

- **obsidian-bases-kanban (upstream)** - Original plugin we're forking from (https://github.com/ewerx/obsidian-bases-kanban)

## Documentation

**Available Documentation:**
- **CLAUDE.md** - Development guide and workflow instructions
- **context.md** - This file - project metadata and overview
- **log.md** - Development activity log
- **README.md** - User-facing documentation
- **Upstream README** - Original plugin documentation at https://github.com/ewerx/obsidian-bases-kanban

**Documentation Location:** root

## Known Issues

None currently - fork is in early development stage.

## Current Status

**Phase:** Development
**Recent Activity:** Added configurable card title property feature
**Next Steps:**
1. Test the card title feature in Obsidian
2. Identify additional customizations needed for GreyWolf OS workflows
3. Consider adding custom filtering options

## Future Plans

**Short-term goals:**
- Test and validate configurable card titles with formula properties
- Enhance property visualizations (priority colors, due date indicators)
- Add custom filtering for task status, clients, services

**Long-term vision:**
- Integration with GreyWolf OS frontmatter schemas
- Quick-add task template integration
- Client/job hierarchy visualization
- Custom board presets for different workflow types (tasks, jobs, projects)
- Potential contribution of generic improvements back to upstream

**Ideas being considered:**
- Advanced filtering and search within kanban boards
- Bulk operations on cards
- Integration with Work.base for unified task management
