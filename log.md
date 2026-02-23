---
related:
  - "[[internal/projects/bases-kanban/context|Bases Kanban]]"
---

# Bases Kanban - Development Log

## Icon Guide

Use these icons to categorize activity:

| Icon | Type | When to Use |
|------|------|-------------|
| ✅ | Completed | Task, feature, or deliverable finished |
| 🆕 | Created | New feature, file, component, or capability added |
| 🔧 | Technical | Bug fix, refactoring, technical improvement |
| 🚀 | Deployed | Deployment to staging, production, or package registry |
| 📝 | Documentation | Documentation created, updated, or improved |
| 💡 | Insight | Important discovery, learning, or decision |
| ⚠️ | Issue | Problem identified, bug found, blocker encountered |
| 📊 | Analysis | Research, analysis, performance testing completed |
| 🧪 | Testing | Tests written, testing performed |
| 🔐 | Security | Security fix, audit, or improvement |
| 🎨 | UI/UX | Interface design, styling, user experience work |
| ⚙️ | Config | Configuration change, environment update |

---

## February 2026

**2026-02-23 Sunday**
- 🆕 Created project structure for bases-kanban fork (@mark)
  - Output: [[internal/projects/bases-kanban/context]]
  - Notes: Initialized project with context.md documenting purpose, tech stack, and goals. This is a fork of ewerx/obsidian-bases-kanban to customize for GreyWolf OS workflows.

- ✅ Implemented custom card title property feature (@mark)
  - Commit: c3b3dd6
  - Changes: `src/kanban-view.ts` - Added `cardTitleProperty` view option and `getCardTitle()` method
  - Feature: Users can now configure any property (frontmatter, formula, or file property) as the card title instead of always using filename
  - Usage: Set "Card title property" in view options (e.g., "task", "title", "formula.myFormula")
  - Supports: `note.*` (frontmatter), `formula.*` (formulas), `file.*` (file properties)
  - Fallback: If property doesn't exist or is empty, falls back to filename
  - Build: Successfully compiled with no errors
  - Deployed: Pushed to https://github.com/greywolfagency/obsidian-bases-kanban

- 📝 Renamed plugin to gwa-obsidian-bases-kanban (@mark)
  - Commit: 2a1984b
  - Changes: `manifest.json`, `package.json`, `README.md`
  - Renamed plugin ID from `bases-kanban` to `gwa-obsidian-bases-kanban`
  - Updated display name to "GWA Bases Kanban"
  - Purpose: Differentiate fork from upstream in BART and plugin directory

---

## Log Instructions

**When to log:**
- After completing significant work (daily or per-session)
- After deployments or releases
- When discovering important insights or issues
- When making architectural decisions

**What to include:**
- What was done (brief, scannable)
- Who did it (use @name)
- Link to outputs when relevant (files, PRs, deployments)
- Context that helps future you understand why

**What NOT to include:**
- Minute-by-minute activities
- Work-in-progress (log when completed)
- Trivial changes (typo fixes, etc.)

**Best practices:**
- Write entries same day while fresh
- Be specific but concise
- Link to artifacts (code, docs, deployments)
- Note decisions and their rationale
- Flag blockers and issues clearly
- Write monthly summaries at month-end
