---
date:
  created: 2025-07-05
  updated: 2025-10-29
title: Contributing to Network Pro™
summary:
  Instructions for getting involved and contributing to Network Pro Strategies.
authors:
  - team
tags:
  - networkpro
  - contributing
---

<sup>[SPDX-License-Identifier](https://spdx.dev/learn/handling-license-info/):
`CC-BY-4.0 OR GPL-3.0-or-later`</sup>

<a name="top"></a>

# 🤝 Contributing to Network Pro Strategies

**Network Pro Strategies**  
**Effective Date:** October 29, 2025

&nbsp;

## Contents

- [Using the Issue Tracker](#issuetrack)
- [Bug Reports](#bug-reports)
- [Feature Requests](#feature-requests)
- [Before You Begin](#before-you-begin)
- [Dependency Management](#dependency-management)
- [Pull Requests](#pull-requests)
- [Coding & Style Notes](#coding)
- [Legal Notice](#legal)

&nbsp;

Thanks for your interest in improving **Network Pro Strategies** (Network Pro™)!
We're always looking for collaborators and contributors of all skill levels.
This guide will help you get started quickly and effectively.

Following these guidelines helps us all work together efficiently and
respectfully. 🙌

---

<a name="issuetrack"></a>

## 🐛 Using the Issue Tracker

Use the [issue tracker](https://github.com/netwk-pro/netwk-pro.github.io/issues)
for:

- Reporting [bugs](#bug-reports)
- Submitting [feature requests](#feature-requests)
- Proposing [pull requests](#pull-requests)

🚫 Please do **not** use issues for general support — instead, head to:

- [Stack Overflow Teams](https://stack.neteng.pro/)
- [GitHub Discussions](https://discuss.neteng.pro)
- [Discord](https://discord.neteng.pro)

**Please refer to the following documentation before initiating any feature or
pull requests:**

- [Before You Begin](#before-you-begin)
- [Dependency Management](#dependency-management)

&nbsp;

<sub>[Back to top](#top)</sub>

---

<a name="bug-reports"></a>

## 🐞 Bug Reports

A bug is a clear, reproducible issue in the code. High-quality reports help us
fix problems faster.

### A good bug report includes

- A **descriptive title**
- Steps to reproduce
- Your environment (OS, browser, version)
- Expected vs actual behavior
- Links to a minimal reproducible case (if possible)

_Example_:

<!-- markdownlint-disable MD042 -->

> **Title**: Checkbox toggle fails on Safari 17  
> Steps:
>
> 1. Visit page X
> 2. Click toggle
> 3. Observe that...  
>    Expected: ...  
>    Actual: ...  
>    [Live example](#)

<!-- markdownlint-enable MD042 -->

&nbsp;

<sub>[Back to top](#top)</sub>

---

<a name="feature-requests"></a>

## ✨ Feature Requests

Feature requests are welcome — just make sure it aligns with the project’s
goals.

Before posting:

- Search for similar requests
- Clearly describe the problem it solves
- Explain the use case and who benefits

Strong proposals help us prioritize.

&nbsp;

<sub>[Back to top](#top)</sub>

---

<a name="before-you-begin"></a>

## 🧭 Before You Begin

Before opening a pull request, please make sure your environment and commits
follow the project’s conventions.

### Prerequisites

- **Node.js:** v24.x (LTS)
- **npm:** v11.x  
  _(See package.json → `engines` field for exact supported versions.)_

Install dependencies with:

```bash
cp .env.template .env
npm ci
npx playwright install
```

### Code Style & Linting

This project uses:

- **[Prettier](https://prettier.io)** for formatting
- **[ESLint](https://eslint.org)** for static analysis
- **[Vitest](https://vitest.dev)** for testing

Please refer to
**[Editor Configuration](https://github.com/netwk-pro/netwk-pro.github.io/wiki/Editor-Configuration)**
in the [Wiki](https://github.com/netwk-pro/netwk-pro.github.io/wiki) for the
full toolchain.

To ensure consistency, please run:

```bash
npm run checkout
```

This will:

- Verify Node and npm versions
- Run all tests (client + server)
- Lint and format your code
- Run SvelteKit’s type and build checks

> ✅ Tip: Run this before committing to catch issues early.  
> If Prettier check fails, use `npm run format:fix` to correct formatting, then
> re-run `npm run checkout`.

### Branch Naming Convention

Use clear, consistent names for feature branches:

| Type     | Example                        | Description                    |
| -------- | ------------------------------ | ------------------------------ |
| Feature  | `feature/auth0-integration`    | New feature or enhancement     |
| Fix      | `fix/login-redirect`           | Bug fix or regression          |
| Chore    | `chore/deps-update`            | Dependency or tooling updates  |
| Docs     | `docs/contributing-update`     | Documentation-only changes     |
| Refactor | `refactor/component-structure` | Code cleanup or reorganization |

### Commit Messages

Please use clear, descriptive commit messages.  
If you prefer a convention, **Conventional Commits** are supported:

```cpp
type(scope): short description

[optional body]
```

Examples:

```scss
fix(auth): handle expired access token
chore(deps): pin vitest to 3.2.4 for compatibility
docs(contributing): clarify build process for SvelteKit
```

&nbsp;

<sub>[Back to top](#top)</sub>

---

<a name="dependency-management"></a>

## 📦 Dependency Management

This project uses
[`npm-check-updates`](https://github.com/raineorshine/npm-check-updates) (NCU)
to manage dependency upgrades safely and predictably.

### Configuration

All upgrade rules and exclusions are defined in the root `.ncurc.cjs` file.  
This configuration ensures we only upgrade compatible dependencies and avoid
breakage in core tooling.

**Example rules:**

- Only upgrade **production** and **dev** dependencies.
- Reject potentially breaking tools (e.g., `vitest`, `@vitest/coverage-v8`,
  `prettier`).
- Maintain clean, grouped CLI output during upgrade runs.

### 🪄 Commands

| Command                 | Description                                                          |
| ----------------------- | -------------------------------------------------------------------- |
| `npm run check:updates` | Lists available dependency updates without modifying `package.json`. |
| `npm run upgrade`       | Applies safe upgrades using `.ncurc.cjs` rules.                      |

These commands are wrappers around NCU, keeping the behavior consistent across
environments.

### Rejected Packages

Certain packages are **intentionally pinned** due to breaking changes between
major versions or ongoing test compatibility work.  
Do **not manually upgrade** these unless the project maintainer specifically
approves it.

Commonly pinned packages include:

- `vitest`
- `@vitest/coverage-v8`
- `prettier`
- `jsdom`

If you think one of these can be safely updated, open a discussion issue or
mention it in your PR description before upgrading.

### Why We Use This Approach

We separate **rules** (in `.ncurc.cjs`) from **presentation** (via npm scripts)
to keep updates consistent:

- `.ncurc.cjs` defines _what_ can change
- `npm run upgrade` defines _how_ it’s displayed
- Contributors don’t need to remember CLI flags or project-specific exclusions

This ensures every update is:

- predictable
- consistent
- and easy to review

&nbsp;

<sub>[Back to top](#top)</sub>

---

<a name="pull-requests"></a>

## 🔁 Pull Requests

Well-scoped, well-documented pull requests are the lifeblood of open-source.

### Ask First

Before starting large PRs (new features, major refactors, or dependency
upgrades), please open an issue or discussion first to align on approach.

### Steps

`1.` **Fork and clone the repo:**

```bash
git clone https://github.com/<your-username>/netwk-pro.github.io.git
cd netwk-pro.github.io
git remote add upstream https://github.com/netwk-pro/netwk-pro.github.io.git
```

`2.` **Stay up to date with upstream:**

```bash
git checkout master
git pull upstream master
```

`3.` **Create a topic branch:**

```bash
git checkout -b feature/my-feature
```

`4.` **Install:**

```bash
cp .env.template .env
npm ci
npx playwright install
```

`5.` **Make and commit your changes:**

- Use clear, descriptive commit messages.
- Group related changes together logically.

`6.` **Test locally:**

```bash
npm run dev
npm run checkout
```

`7.` **Do not commit build artifacts.**

⚠️ SvelteKit builds are environment-specific and should not be checked into
source control. The CI/CD pipeline will automatically build, test, and deploy
your changes.

Please **do not commit**:

- `.svelte-kit/`
- `build/`
- `node_modules/`

  To ensure your local environment matches CI:

```bash
npm run build
```

(This validates your build works, but does not need to be committed.)

`8.` **Push and open your PR:**

```bash
git push origin feature/my-feature
```

`9.` **Open your PR on GitHub:**

- Use a clear title and description.
- Reference any related issues.
- Include screenshots or logs if relevant.

---

✅ Tip: Keep your PRs small and focused — it’s easier to review and merge
quickly.

&nbsp;

<sub>[Back to top](#top)</sub>

---

<a name="coding"></a>

## ✅ Coding & Style Notes

- Use the defined code style (Prettier, ESLint, Stylelint, markdownlint).
- Avoid unrelated changes in the same PR.
- Keep PRs focused and test-covered when appropriate.

&nbsp;

<a name="legal"></a>

## 🔐 Legal Notice

By submitting a pull request, you agree to license your contributions under:

- [CC BY 4.0](https://netwk.pro/legal#cc-by)
- [GNU GPL 3.0 or later](https://netwk.pro/legal#gnu-gpl)

&nbsp;

<sub>[Back to top](#top)</sub>

&nbsp;

_Thanks again for your contribution and for being part of the Network Pro&trade;
community!_

---

<span style="font-size: 12px; font-weight: bold; text-align: center;">

[Home](https://netwk.pro) &nbsp; | &nbsp;
[Terms of Use](https://netwk.pro/terms-of-use)  
[Privacy Policy](https://netwk.pro/privacy) &nbsp; | &nbsp;
[Legal](https://netwk.pro/license)

</span>

&nbsp;

<span style="font-size: 12px; text-align: center;">

Copyright &copy; 2025 **[Network Pro Strategies](https://netwk.pro/)** (Network
Pro&trade;)

Network Pro&trade;, the shield logo, and the "Locking Down Networks...&trade;"
slogan are [trademarks](https://netwk.pro/legal#trademark) of Network Pro
Strategies.

Licensed under **[CC BY 4.0](https://netwk.pro/legal#cc-by)** and the
**[GNU GPL](https://netwk.pro/legal#gnu-gpl)**, as published by the Free
Software Foundation, either version 3 of the License, or (at your option) any
later version.

</span>
