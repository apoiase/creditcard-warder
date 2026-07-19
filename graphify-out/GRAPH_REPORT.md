# Graph Report - .  (2026-07-12)

## Corpus Check
- Corpus is ~905 words - fits in a single context window. You may not need a graph.

## Summary
- 50 nodes · 44 edges · 12 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7

## God Nodes (most connected - your core abstractions)
1. `scripts` - 5 edges
2. `testling` - 4 edges
3. `xo` - 4 edges
4. `repository` - 3 edges
5. `main` - 1 edges
6. `authors` - 1 edges
7. `license` - 1 edges
8. `keywords` - 1 edges
9. `homepage` - 1 edges
10. `ignore` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (12 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.22
Nodes (8): authors, description, homepage, ignore, keywords, license, main, name

### Community 1 - "Community 1"
Cohesion: 0.25
Nodes (7): contributors, description, keywords, license, main, name, version

### Community 2 - "Community 2"
Cohesion: 0.25
Nodes (8): devDependencies, mocha, rollup, rollup-plugin-commonjs, rollup-plugin-node-resolve, rollup-plugin-uglify, testling, xo

### Community 3 - "Community 3"
Cohesion: 0.40
Nodes (5): scripts, build, test, test-browser, watch

### Community 4 - "Community 4"
Cohesion: 0.50
Nodes (4): testling, browsers, files, harness

### Community 5 - "Community 5"
Cohesion: 0.50
Nodes (4): xo, envs, esnext, space

### Community 6 - "Community 6"
Cohesion: 0.67
Nodes (3): dependencies, lodash.find, luhn

### Community 7 - "Community 7"
Cohesion: 0.67
Nodes (3): repository, type, url

## Knowledge Gaps
- **36 isolated node(s):** `name`, `description`, `main`, `authors`, `license` (+31 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 2` to `Community 1`?**
  _High betweenness centrality (0.179) - this node is a cross-community bridge._
- **Why does `scripts` connect `Community 3` to `Community 1`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Why does `testling` connect `Community 4` to `Community 1`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **What connects `name`, `description`, `main` to the rest of the system?**
  _36 weakly-connected nodes found - possible documentation gaps or missing edges._