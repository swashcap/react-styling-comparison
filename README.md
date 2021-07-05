# react-styling-comparison

_An experiment testing React + styling methods' impact on bundle size._

## Findings

The [comparison script](./scripts/compare.js) demonstrates:

* Components built with Tachyons have a fixed CSS size
* Components built with Tachyons have a larger JS size than components built
  with CSS Modules
* Components built with CSS Modules are lighter invidually and combined

```
┌─────────┬─────────────────────────┬──────────────────────┬──────────────────────┬──────────────────────────┐
│ (index) │       CSS Modules       │    Inline Styles     │      Styletron       │         Tachyons         │
├─────────┼─────────────────────────┼──────────────────────┼──────────────────────┼──────────────────────────┤
│ Button  │  { JS: 320, CSS: 424 }  │ { JS: 789, CSS: 0 }  │ { JS: 1363, CSS: 0 } │ { JS: 457, CSS: 15558 }  │
│  Page   │ { JS: 2023, CSS: 1630 } │ { JS: 3516, CSS: 0 } │ { JS: 4476, CSS: 0 } │ { JS: 2509, CSS: 15558 } │
│ Sidebar │  { JS: 862, CSS: 683 }  │ { JS: 1607, CSS: 0 } │ { JS: 2373, CSS: 0 } │ { JS: 1122, CSS: 15558 } │
│   All   │ { JS: 2037, CSS: 1630 } │ { JS: 3530, CSS: 0 } │ { JS: 4597, CSS: 0 } │ { JS: 2521, CSS: 15558 } │
└─────────┴─────────────────────────┴──────────────────────┴──────────────────────┴──────────────────────────┘
```

(All sizes gzipped.)

_Why?_ Tachyons classes, although terse, still occupy more characters than
alternatives like CSS Modules.  This screenshot of the minified Tachyons code
demonstrates the idea:

![Screenshot of minified Tachyons components](./img/minified-tachyons.jpg)

### Server-side rendering

Comparing CSS Modules to Tachyons using [React's server-side
rendering](https://reactjs.org/docs/react-dom-server.html) reveals the
differences aren't limited to client-side assets:

```shell
$ for f in scripts/sync/*.mjs; do NODE_ENV=production node "$f" 2>/dev/null; sleep 2; done
[cssmodules] renderToString, loop x10000: 8589.73320800066 ms
[inline] renderToString, loop x10000: 19195.538488984108 ms
[styletron] renderToString, loop x10000: 45080.270787000656 ms
[tachyons] renderToString, loop x10000: 9311.0293879807 ms
$ for f in scripts/stream/*.mjs; do NODE_ENV=production node "$f" 2>/dev/null; sleep 2; done
[cssmodules] renderToNodeStream, 10 parallel x1000: 10195.603729009628 ms
[inline] renderToNodeStream, 10 parallel x1000: 22350.854984998703 ms
[styletron] renderToNodeStream, 10 parallel x1000: 46235.102649986744 ms
[tachyons] renderToNodeStream, 10 parallel x1000: 11901.377384006977 ms
```

### Lighthouse

Running all server-side rendering through a [fastify](https://www.fastify.io)
server yields the following Lighthouse statistics:

#### Mobile

|            | FCP  | TTI  |
| ---------- | ---: | ---: |
| cssmodules | 1.6s | 1.6s |
| inline     | 1.5s | 1.6s |
| styletron  | 1.7s | 1.7s |
| tachyons   | 2.1s | 2.1s |

#### Desktop

|            | FCP  | TTI  |
| ---------- | ---: | ---: |
| cssmodules | 0.5s | 0.5s |
| inline     | 0.5s | 0.5s |
| styletron  | 0.6s | 0.6s |
| tachyons   | 0.6s | 0.6s |

### Example components

This test uses two components for testing. Both components are coded separately
with CSS Modules and Tachyons, using the same DOM and styles. There's no visual
difference in the components.

#### [Button](./src/Button)

A simple button with a few properties.

<img alt="Screenshot of button" height="84" src="./img/button.jpg" width="219" />

#### [Sidebar](./src/Sidebar)

A more complicacted navigation component with some state.

<img alt="Screenshot of sidebar" height="820" src="./img/sidebar.jpg" width="315" />

#### [Page](./src/Page)

A larger component that includes Button and Sidebar along with fake products and
some additional content.

<img alt="Screenshot of page" src="./img/page.jpg" />

### Setup

1. Make sure [Node.js](https://nodejs.org/en/) 14.x.x is installed
2. Clone the repository
3. Install dependencies in the repository directory:

    ```shell
    npm install
    ```

### Storybook

Run the project's [Storybook](https://storybook.js.org):

```shell
npm start
```

### Build and compare

Run the project's build script and compare file sizes:

```shell
# Clean build directory
npm run clean

# Build the project
npm run build

# Compare file sizes
npm run compare
```

