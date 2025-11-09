# Changelog

<!-- markdownlint-disable MD024 -->

<!-- Use sections: Added, Changed, Deprecated, Removed, Fixed, Security -->

All notable changes to this project will be documented in this file.

This project attempts to follow
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), though versioning and
formatting may vary.

---

## [Unreleased]

---

## [1.5.6] - 2025-11-09

### Changed

- Updated MkDocs for Material **light mode** to use `orange` as the primary
  color and `deep orange` as the accent color for improved readability.
- Updated `src/sitemap.xml` to reflect the newest posts and refresh last
  modified dates.
- Bumped project version to `v1.5.6`.

---

## [1.5.5] - 2025-11-09

### Added

- Added `src/posts/2025-11-09-privacy-and-security.md`, along with image assets:
  - `src/img/privacy-security-promo.png`
  - `src/img/privacy-security-promo.webp`
- Added `src/posts/2025-11-09-sideloading.md`, along with image assets:
  - `src/img/sideloading-promo.png`
  - `src/img/sideloading-promo.webp`
- Introduced `npm-run-all` devDependency for more efficient linting.

### Changed

- Refactored `src/contributing.md` to accurately reflect the proper method of
  contributing.
- Revised emphasis in the **Message authentication codes** section of
  `/src/posts/secure-secure-shell.md`.
- Updated CI workflows to utilize **Node.js v24** (LTS):
  - `build-and-deploy.yml`
  - `publish-test.yml`
  - `publish.yml`
- Revised scripts in `package.json` for more efficient use by utilizing
  `npm-run-all`.
- Updated `.python-version` to reflect **Python v3.14**.
- Bumped project version to `v1.5.5`.
- Updated **Node.js** dependencies:
  - `@eslint/js` `^9.38.0` → `^9.39.1`
  - `@eslint/json` `^0.13.2` → `^0.14.0`
  - `eslint` `^9.38.0` → `^9.39.1`
  - `globals` `^16.4.0` → `^16.5.0`
- Updated **Python** dependencies:
  - `mkdocs-material` `9.6.22` → `9.6.23`
  - `mkdocs-rss-plugin` `1.17.4` → `1.17.5`

---

## [1.5.4] - 2025-10-28

### Added

- Added `.python-version` with `3.13` for easier control of **Python** version.

### Changed

- Bumped project version to `v1.5.4`.
- Added `browserslistrc` to `cspell.json`.
- Modified GitHub workflows in `.github/workflows` to utilize `.python-version`:
  - `build-and-deploy.yml`
  - `publish-test.yml`
  - `publish.yml`

---

## [1.5.3] - 2025-10-26

### Changed

- Bumped project version to `v1.5.3`.
- Corrected publish dates in CHANGELOG.md, as they were incorrectly showing the
  year as 2022.
- Updated **Node.js** dependencies:
  - `browserslist` `^4.26.3` → `^4.27.0`
- Updated **Python** dependencies:
  - `mkdocs-material` `9.6.20` → `9.6.22`
  - `mkdocs-rss-plugin` `1.17.3` → `1.17.4`
- Updated GitHub workflows to utilize **Node.js** `v22`, **npm** `11.6.2`, and
  the latest action versions. Modified `publish-test.yml` and `publish.yml` to
  utilize `GITHUB_TOKEN` authentication for publishing.
  - `backup-branch.yml`
  - `build-and-deploy.yml`
  - `dependency-review.yml`
  - `publish-test.yml`
  - `publish.yml`

---

## [1.5.2] - 2025-10-21

### Changed

- Bumped project version to `v1.5.2`.

### Fixed

- Corrected email address in `README.md`.

---

## [1.5.1] - 2025-10-21

### Changed

- Bumped project version to `v1.5.1`.
- Minor correction made to `README.md` footer.
- Updated dependencies:
  - `@eslint/js` `^9.36.0` → `^9.38.0`
  - `browserslist` `^4.26.2` → `^4.26.3`
  - `eslint` `^9.36.0` → `^9.38.0`
  - `markdownlint` `^0.38.0` → `^0.39.0`
  - `stylelint` `^16.24.0` → `^16.25.0`

### Fixed

- Corrected links to images in `README.md`.

---

## [1.5.0] - 2025-09-23

### Added

- New blog post: `2025-09-23-sonicwall.md` added to `/src/posts`.
- Included associated promotional images: `sonicwall-promo.png` and
  `sonicwall-promo.webp`.
- Added `discord.svg` to `/src/fontawesome/brands`.

### Changed

- Bumped version to `v1.5.0`.
- Updated overall site layout to improve readability and navigation.
- Adjusted styles and templates to support new design structure.
- Updated Material for MkDocs palette to default to dark mode, with optional
  toggle to light mode.
- Removed Cookie Consent banner configuration, as this blog sub-site does not
  use cookies.
- Updated footer to explicitly state that the blog does not use cookies, with
  link to the Privacy Policy.
- CI workflow updated to use a safer `sed` pattern (`"[^"]*"`) when patching the
  package name in `package.json`.
- GitHub Actions workflows (`build-and-deploy.yml`, `publish-test.yml`, and
  `publish.yml`) updated to use `npm v11.6.0`.
- CI workflow updated to use `actions/checkout v5`, `actions/setup-node v5`,
  `actions/setup-python v6`, and `actions/download-artifact v5`.
- Updated `sitemap.xml` to reflect accurate "Last Modified" dates and correct
  URLs.
- Corrected fork and clone instructions in `contributing.md`.
- Upgraded dependencies:
  - `@eslint/js` `^9.32.0` → `^9.36.0`
  - `@eslint/json` `^0.13.1` → `^0.13.2`
  - `browserslist` `^4.25.1` → `^4.26.2`
  - `eslint` `^9.32.0` → `^9.36.0`
  - `globals` `^16.3.0` → `^16.4.0`
  - `stylelint` `^16.22.0` → `^16.24.0`
  - `stylelint-config-recommended` `^16.0.0` → `^17.0.0`
  - `mkdocs-material` `9.6.14` → `9.6.20`

---

## [1.4.0] - 2025-07-27

### Changed

- Bumped version to `v1.4.0`.
- Cleaned up tags in the following files, located in `src/posts`:
  - `2025-05-29-heliboard.md`
  - `2025-05-29-msauth.md`
  - `2025-06-08-squircle.md`
  - `2025-06-12-backdoor.md`
  - `2025-06-16-cryptomator.md`
  - `2025-06-23-encryption-eff.md`
  - `2025-07-17-otp-helper.md`
- Updated `sitemap.xml` to reflect accurate "Last Modified" dates and correct
  URLs.
- Renamed `src/posts/2025-07-24-uk-apple-li.md` to
  `src/posts/2025-07-27-uk-apple.md`.
- Updated `.github/workflows/build-and-deploy.yml` to utilize `Node.js` `v24`
  and `npm` `v11.4.2`.
- Updated `.github/workflows/publish.yml` and
  `.github/workflows/publish-test.yml` to utilize `npm` `v11.4.2`.
- Added standardized header to `.github/COMMIT_GUIDE.md`.

---

## [1.3.11] - 2025-07-27

### Fixed

- Bumped version to `v1.3.11`

---

## [1.3.10] - 2025-07-27

### Added

- New blog post: `2025-07-27-uk-apple.md` added to `/src/posts`.
- Included associated promotional images: `uk-apple-promo.png` and
  `uk-apple-promo.webp`.

### Changed

- Sitemap updated to include new posts.
- Upgraded dependencies:
  - `@eslint/js` `^9.31.0` → `^9.32.0`
  - `@eslint/json` `^0.13.0` → `^0.13.1`
  - `eslint` `^9.31.0` → `^9.32.0`
  - `eslint-config-prettier` `^10.1.5` → `^10.1.8`
  - `stylelint` `^16.21.1` → `^16.22.0`

---

## [1.3.9] - 2025-07-17

### Added

- New blog posts: `2025-07-17-ai-profiling.md` and `2025-07-17-otp-helper.md`
  added to `/src/posts`.
- Included associated promotional images: `ai-profiling-promo.png`,
  `ai-profiling-promo.webp`, `otp-helper-promo.png`, and `otp-helper.webp`.

### Changed

- Bumped version to `v1.3.9`.
- Sitemap updated to include new posts.
- Upgraded dependencies:
  - `@eslint/js` `^9.30.1` to `^9.31.0`
  - `@eslint/json` `^0.12.0` to `^0.13.0`
  - `eslint` `^9.30.1` to `9.31.0`

---

## [1.3.8] - 2025-07-10

### Added

- New blog post: `2025-07-10-outlook-surveillance.md` added to `/src/posts`.
- Included associated promotional images: `outlook-surveillance.png` and
  `outlook-surveillance.webp`.

### Changed

- Bumped version to `1.3.8`.
- Sitemap updated to include new link.

---

## [1.3.7] - 2025-07-07

### Added

- New blog post: `2025-07-07-juniper-hpe.md` added to `/src/posts`.
- Included associated promotional images: `juniper-hpe-promo.png` and
  `juniper-hpe-promo.webp`.

### Changed

- Bumped version to `1.3.7`.
- Sitemap updated to include links to recent posts.
- Upgraded dependencies:
  - `@eslint/js` `^9.30.0` to `^9.30.1`
  - `eslint` `^9.30.0` to `^9.30.1`
  - `globals` `^16.2.0` to `^16.3.0`
  - `stylelint` `^16.21.0` to `^16.21.1`

---

## [1.3.6] - 2025-07-01

### Added

- New blog post: `2025-07-01-eff-scotus.md` added to `/src/posts`.
- Included associated promotional images: `eff-scotus-promo.png` and
  `eff-scotus-promo.webp`.

### Changed

- Bumped version to `1.3.6`.
- Upgraded dependencies:
  - `@eslint/js` `^9.29.0` to `^9.30.0`
  - `browserslist` `^4.25.0` to `^4.25.1`
  - `eslint` `^9.29.0` to `^9.30.0`
  - `prettier` `3.6.0` to `3.6.2`

---

## [1.3.5] - 2025-06-24

### Changed

- Bumped version to `v1.3.5`.

### Fixed

- Resolved remaining GitHub Packages authentication issues by explicitly scoping
  `npm whoami` and `npm publish` to the correct registry
  (`https://npm.pkg.github.com/`).
- Ensured consistent registry usage regardless of `.npmrc` or `package.json`
  configuration.

---

## [1.3.4] - 2025-06-23

### Changed

- Bumped version to `v1.3.4`.

### Fixed

- Removed legacy `.npmrc` file that was overriding registry authentication and
  causing `401 Unauthorized` errors during publishing.
- Restored default registry handling through `setup-node` for reliable
  token-based authentication to `npmjs.org`.

---

## [1.3.3] - 2025-06-23

### Added

- Diagnostic logging to verify active registry, token configuration, and
  `.npmrc` state prior to publishing.

### Changed

- Bumped version to `v1.3.3`.

### Fixed

- Resolved persistent authentication failure during publish by reintroducing
  `npm ci` and upgrading npm in registry workflows.
- Adjusted step ordering to ensure environment and Git config are fully
  initialized before registry checks.

---

## [1.3.2] - 2025-06-23

### Added

- Authentication check (`npm whoami`) before publish to confirm registry access.

### Changed

- Bumped version to `v1.3.2`.

### Fixed

- Resolved publishing failure caused by missing lockfile and outdated npm
  version in registry workflows.
- Reintroduced `npm ci` and upgraded npm to ensure compatibility with scoped
  package publishing.

---

## [1.3.1]

### Changes

- Removed `cache-dependency-path` from publish workflows to avoid
  lockfile-related cache issues.
- Verified presence of `package-lock.json` in the extracted archive and
  maintained default npm caching behavior.
- Bumped version to `v1.3.1`.

---

## [1.3.0]

### Added

- Introduced a test publish workflow (`.github/workflows/publish-test.yml`) to
  validate the `git archive` packaging method via dry-run publishing.

### Changed

- Bumped version to `v1.3.0`.
- Reformatted `.github/COMMIT_GUIDE.md` to align with Prettier conventions.
- Refactored `.github/workflows/publish.yml` to use `git archive` for publishing
  to registries.

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

[Unreleased]: https://github.com/netwk-pro/blog/compare/v1.5.5...HEAD
[1.5.5]: https://github.com/netwk-pro/blog/releases/tag/v1.5.5
[1.5.4]: https://github.com/netwk-pro/blog/releases/tag/v1.5.4
[1.5.3]: https://github.com/netwk-pro/blog/releases/tag/v1.5.3
[1.5.2]: https://github.com/netwk-pro/blog/releases/tag/v1.5.2
[1.5.1]: https://github.com/netwk-pro/blog/releases/tag/v1.5.1
[1.5.0]: https://github.com/netwk-pro/blog/releases/tag/v1.5.0
[1.4.0]: https://github.com/netwk-pro/blog/releases/tag/v1.4.0
[1.3.11]: https://github.com/netwk-pro/blog/releases/tag/v1.3.11
[1.3.10]: https://github.com/netwk-pro/blog/releases/tag/v1.3.10
[1.3.9]: https://github.com/netwk-pro/blog/releases/tag/v1.3.9
[1.3.8]: https://github.com/netwk-pro/blog/releases/tag/v1.3.8
[1.3.7]: https://github.com/netwk-pro/blog/releases/tag/v1.3.7
[1.3.6]: https://github.com/netwk-pro/blog/releases/tag/v1.3.6
[1.3.5]: https://github.com/netwk-pro/blog/releases/tag/v1.3.5
[1.3.4]: https://github.com/netwk-pro/blog/releases/tag/v1.3.4
[1.3.3]: https://github.com/netwk-pro/blog/releases/tag/v1.3.3
[1.3.2]: https://github.com/netwk-pro/blog/releases/tag/v1.3.2
[1.3.1]: https://github.com/netwk-pro/blog/releases/tag/v1.3.1
[1.3.0]: https://github.com/netwk-pro/blog/releases/tag/v1.3.0
[1.2.8]: https://github.com/netwk-pro/blog/releases/tag/v1.2.8
[1.2.7]: https://github.com/netwk-pro/blog/releases/tag/v1.2.7
