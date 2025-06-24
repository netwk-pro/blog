# Changelog

<!-- markdownlint-disable MD024 -->

<!-- Use sections: Added, Changed, Deprecated, Removed, Fixed, Security -->

All notable changes to this project will be documented in this file.

This project attempts to follow
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), though versioning and
formatting may vary.

---

## [Unreleased]

### Added

- Added a new publish workflow (`.github/workflows/publish-test.yml`) to
  validate the `git archive` packaging method using dry-run publishing.

### Changed

- Bumped version to `v1.2.9`.

---

## [1.2.8] - 2025-06-23

### Added

- New blog post: `2025-06-23-encryption-eff.md` added to `/src/posts`.
- Included associated promotional images: `encryption-eff.png` and
  `encryption-eff.webp`
- Introduced `.github/workflows/COMMIT_GUIDE.md` for reference when creating
  commit messages

### Changed

- Bumped version to `v1.2.8`.
- Upgraded `prettier` from `3.5.3` to `3.6.0`.
- Upgraded `stylelint` from `^16.20.0` to `^16.21.0`.

---

## [1.2.7] - 2025-06-16

### Added

- Introduced `CHANGELOG.md` and `CHANGELOG.template.md` to begin structured
  change tracking for the blog repository
- Added new post: _FOSS Spotlight: Cryptomator_ (`2025-06-16-cryptomator.md`)
- Included associated promotional images: `cryptomator-promo.png` and
  `cryptomator-promo.webp`
- Added `check-codeql.yml` reusable workflow for static analysis

### Changed

- Updated VS Code workspace settings (`.vscode/settings.json`) to disable
  Markdown validation via `"markdown.validate.enabled": false,`
- Replaced inline `check-codeql` job in `build-and-deploy.yml` with call to new
  reusable workflow
- Updated links in `sitemap.xml` to reflect current posts and site structure

### Removed

- Deleted unused stylesheets: `default.css`, `global.css`, `normalize.css`, and
  `style.css`

---

<!-- Link references -->

[Unreleased]: https://github.com/netwk-pro/blog/compare/v1.2.8...HEAD
[1.2.8]: https://github.com/netwk-pro/blog/releases/tag/v1.2.8
[1.2.7]: https://github.com/netwk-pro/blog/releases/tag/v1.2.7
