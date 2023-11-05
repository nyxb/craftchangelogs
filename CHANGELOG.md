# Changelog


## v0.0.1


### 🚀 Enhancements

- **vscode-settings): add new settings for eslint and prettier 🔧 chore(eslint-config): add new eslint configuration file with custom rules 🔧 chore(tsconfig:** Add new tsconfig file with compiler options ([a037847](https://github.com/nyxb/craftchangelogs/commit/a037847))
- **cli.ts, config.ts:** Add new CLI and configuration files ([755867c](https://github.com/nyxb/craftchangelogs/commit/755867c))
- **exec.ts, git.ts:** Add new files for git and exec commands ([b2172dd](https://github.com/nyxb/craftchangelogs/commit/b2172dd))
- **github.ts:** Add new github module to handle github related operations ([21dd091](https://github.com/nyxb/craftchangelogs/commit/21dd091))
- **index.ts:** Create index.ts to export modules for easier import in other files ([99b7801](https://github.com/nyxb/craftchangelogs/commit/99b7801))
- **markdown.ts:** Add new file to generate markdown for changelogs ([1c1d6f9](https://github.com/nyxb/craftchangelogs/commit/1c1d6f9))
- **package.ts:** Add new package.ts file to handle package.json operations ([18e2660](https://github.com/nyxb/craftchangelogs/commit/18e2660))
- **repo.ts:** Add new file to handle repository configurations ([34f57df](https://github.com/nyxb/craftchangelogs/commit/34f57df))
- **semver.ts:** Add new semver.ts file to handle semantic versioning and version bumping for npm packages ([6301702](https://github.com/nyxb/craftchangelogs/commit/6301702))
- **commands:** Add defaultMain function in default.ts for changelog generation ([21f61ca](https://github.com/nyxb/craftchangelogs/commit/21f61ca))
- **github.ts:** Add new github command module to handle github releases ([1beff35](https://github.com/nyxb/craftchangelogs/commit/1beff35))

### 💅 Refactors

- **package.json:** Remove 'pnpm test' from 'release' script to speed up the release process ([4cc8051](https://github.com/nyxb/craftchangelogs/commit/4cc8051))

### 📖 Documentation

- Add MIT license to the project for open source distribution 🔧 refactor(index.ts): replace double quotes with single quotes for code consistency ✨ feat: add vitest.config.ts for test coverage configuration ([dbbd2e2](https://github.com/nyxb/craftchangelogs/commit/dbbd2e2))
- **README.md): add comprehensive documentation for craftchangelogs 🔧 fix(LICENSE:** Update contact information for copyright holder ([79c9b8d](https://github.com/nyxb/craftchangelogs/commit/79c9b8d))

### 🧹 Chore

- **package.json): change repository from unjs/changelogen to nyxb/craftchangelogs to reflect new ownership 🔧 chore(package.json): change bin name from changelogen to craftchangelogs for consistency with project name 🔧 chore(package.json): change script names from changelogen to craftchangelogs for consistency with project name 🔧 chore(package.json): add @nyxb/convert-conmitmoji to dependencies to replace convert-gitmoji 🔧 chore(package.json): add @nyxb/eslint-config to devDependencies to replace eslint-config-unjs 🔧 chore(package.json:** Remove packageManager from the bottom of the file as it is already declared at the top ([ceb5c87](https://github.com/nyxb/craftchangelogs/commit/ceb5c87))
- **gitignore): add more files and directories to .gitignore for better repository cleanliness 🔧 chore(package.json): simplify lint and lint:fix scripts, remove unnecessary file extensions 🔥 remove(package.json:** Remove unused 'standard-version' dependency from devDependencies ([31e0c14](https://github.com/nyxb/craftchangelogs/commit/31e0c14))

### ❤️ Contributors

- Nyxb ([@nyxb](http://github.com/nyxb))

