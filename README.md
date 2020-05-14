# docusaurus-resolve-plugin
Custom resolve imports on docusaurus v2

# Installation

```sh
yarn add @couds/docusaurus-resolve-plugin
```

# How to use

1. Include the plugin in your `docusaurus.config.js` file.

```diff
// docusaurus.config.js
module.exports = {
  ...
+ plugins: [
+    [
+      '@couds/docusaurus-resolve-plugin',
+      {
+         modules: ['src/modules', ...], // All the folders here will be resolved with an absolute import (Just like they were inside the node_modules folder)
+         alias: {}
+      }
+    ]
+  ],
  ...
}
```
