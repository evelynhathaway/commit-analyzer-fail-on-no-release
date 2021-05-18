<div align="center">

<img alt="Icon" width="128" height="128" align="center" src=".github/icon.png"/>

# Commit Analyzer Fail on No Release

**A drop-in replacement for [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer) that fails when no release is made**

[![npm version](https://badgen.net/npm/v/commit-analyzer-fail-on-no-release?icon=npm)](https://www.npmjs.com/package/commit-analyzer-fail-on-no-release)
[![check status](https://badgen.net/github/checks/evelynhathaway/commit-analyzer-fail-on-no-release/main?icon=github)](https://github.com/evelynhathaway/commit-analyzer-fail-on-no-release/actions)
[![license: MIT](https://badgen.net/badge/license/MIT/blue)](/LICENSE)

</div>

## Description

If you need your pipelines to fail if no release will be created with semantic-release, drop this plugin into your config.

## Installation

```bash
npm install --save-dev commit-analyzer-fail-on-no-release
```

## Usage

In your [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration), replace the default commit analyzer with `commit-analyzer-fail-on-no-release`. All configuration options pass through to the default plugin.

**`.releaserc`**

```diff
 {
   "plugins": [
     [
-      "@semantic-release/commit-analyzer",
+      "commit-analyzer-fail-on-no-release",
       {
         "preset": "angular",
         "releaseRules": [
           {"type": "docs", "scope":"README", "release": "patch"},
           {"type": "refactor", "release": "patch"},
           {"type": "style", "release": "patch"}
         ],
         "parserOpts": {
           "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
         }
       }
     ]
   ]
 }
```

## License

Copyright Evelyn Hathaway, [MIT License](/LICENSE)
