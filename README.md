# react-styling-comparison

_An experiment testing React + styling methods' impact on bundle size._

## Findings

The [comparison script](./scripts/compare.js) demonstrates:

* Components built with Tachyons have a fixed CSS size
* Components built with Tachyons have a larger JS size than components built
  with CSS Modules
* Components built with CSS Modules are lighter invidually and combined

```
┌────────────────────┬──────────────────────────┬───────────────────────┬───────────────────────┬───────────────────────────┐
│      (index)       │       CSS Modules        │     Inline Styles     │       Styletron       │         Tachyons          │
├────────────────────┼──────────────────────────┼───────────────────────┼───────────────────────┼───────────────────────────┤
│       Button       │  { JS: 320, CSS: 424 }   │  { JS: 789, CSS: 0 }  │ { JS: 1363, CSS: 0 }  │  { JS: 457, CSS: 15558 }  │
│        Page        │ { JS: 2034, CSS: 1630 }  │ { JS: 3529, CSS: 0 }  │ { JS: 4488, CSS: 0 }  │ { JS: 2522, CSS: 15558 }  │
│      Sidebar       │  { JS: 862, CSS: 683 }   │ { JS: 1607, CSS: 0 }  │ { JS: 2373, CSS: 0 }  │ { JS: 1122, CSS: 15558 }  │
│ App (Page + React) │ { JS: 44624, CSS: 1630 } │ { JS: 46040, CSS: 0 } │ { JS: 51955, CSS: 0 } │ { JS: 45050, CSS: 15558 } │
└────────────────────┴──────────────────────────┴───────────────────────┴───────────────────────┴───────────────────────────┘
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

This project contains web applications of the [Page component](#page) that have server-side rendering through a lightweight [fastify](https://www.fastify.io) server and rehydrate the React application on the client. Running these through Lighthouse's Performance tool (Mobile, average of 10 runs) yields the following numbers:

|            | Score | First Content Paint | Time to Interactive | Speed Index | Total Blocking Time | Largest Contentful Paint |
| ---------- | ----: | ------------------: | ------------------: | ----------: | ------------------: | -----------------------: |
| cssmodules |    99 |                1.6s |                2.4s |        1.6s |                97ms |                     1.8s |
| inline     |    99 |                1.6s |                2.2s |        1.6s |               128ms |                     1.7s |
| styletron  |    99 |                1.5s |                2.6s |        1.5s |               158ms |                     1.7s |
| tachyons   |    96 |                2.0s |                2.9s |        2.1s |               154ms |                     2.3s |

### Example components

This test uses two components for testing. Both components are coded separately
with CSS Modules and Tachyons, using the same DOM and styles. There's no visual
difference in the components.

#### [Button](./src/components/Button)

A simple button with a few properties.

<img alt="Screenshot of button" height="84" src="./img/button.jpg" width="219" />

#### [Sidebar](./src/components/Sidebar)

A more complicacted navigation component with some state.

<img alt="Screenshot of sidebar" height="820" src="./img/sidebar.jpg" width="315" />

#### [Page](./src/components/Page)

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

### Running the server

Run the project's server to load the web applications in a local browser:

```shell
# Build the project
npm run build

# Run the server
node src/server/server.mjs --handler cssmodules --mode sync
```

Open [localhost:3000](http://localhost:3000) to see the web application.
