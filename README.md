# react-styling-comparison

_An experiment testing React + styling methods' impact on bundle size._

## Considered options

* [CSS Modules](https://github.com/css-modules/css-modules)
* [Inline Styles](https://reactjs.org/docs/dom-elements.html#style)
* [Emotion](https://emotion.sh/)
* [Styletron](https://www.styletron.org)
* [Tachyons](https://tachyons.io)

## Findings

* A styling technique's pros and cons aren't immediately obvious without considering and measuring all aspects of an app--from UX (best estimate via Lighthouse) to SSR performance. Bundle size isn't always an accurate predictor of TTI, for example.
* Splitting styles up per page--recommended by [Top 10 performance pitfalls - HTTP 203](https://youtu.be/Lh9q3h2khlc)--is essential. Tachyons, which achieves performance by caching everything, falls short of other solutions on that all-important first page load.
* CSS-in-JS solutions aren't optimized for React SSR compared to more traditional methods.
* A library's size itself isn't the best indicator of performance of an app build with said library. Sometimes actual use of a library results in less app code per feature.
* This exercise was only possible by writing Tachyons first--constraining styles to what was available in Tachyons. Working the other way around would have resulted in inconsisten UI between considered options.

## Data

### Lighthouse

This project contains web applications of the [Page component](#page) that have server-side rendering through a lightweight [fastify](https://www.fastify.io) server and rehydrate the React application on the client. Running these through Lighthouse's Performance tool (Mobile, average of 10 runs) yields the following numbers:

|               | Score | First Content Paint | Time to Interactive | Speed Index | Total Blocking Time | Largest Contentful Paint |
| ------------- | ----: | ------------------: | ------------------: | ----------: | ------------------: | -----------------------: |
| CSS Modules   |    99 |                1.6s |                2.4s |        1.6s |                97ms |                     1.8s |
| Emotion       |    97 |                1.9s |                2.6s |        1.9s |               120ms |                     2.3s |
| Inline Styles |    99 |                1.6s |                2.2s |        1.6s |               128ms |                     1.7s |
| Styletron     |    99 |                1.5s |                2.4s |        1.5s |                90ms |                     1.8s |
| Tachyons      |    96 |                2.0s |                2.9s |        2.1s |               154ms |                     2.3s |

### Client bundle size

The [comparison script](./scripts/compare.js) demonstrates:

|               | Button JS | Button CSS | Sidebar JS | Sidebar CSS | Page JS | Page CSS | App (Page + React) |
| ------------- | --------: | ---------: | ---------: | ----------: | ------: | -------: | -----------------: |
| CSS Modules   |       320 |        424 |        861 |         682 |    2047 |     1631 |              44641 |
| Emotion       |      6482 |          0 |       7355 |           0 |    9269 |        0 |              53781 |
| Inline Styles |       789 |          0 |       1607 |           0 |    3675 |        0 |              46180 |
| Styletron     |      1363 |          0 |       2162 |           0 |    4289 |        0 |              51725 |
| Tachyons      |       457 |      15558 |       1122 |       15558 |    2530 |    15558 |              45057 |

(All sizes gzipped.)

### Server-side rendering

Using [React's server-side rendering](https://reactjs.org/docs/react-dom-server.html) reveals differences aren't limited to client bundle sizes:

```shell
$ for f in scripts/sync/*.mjs; do NODE_ENV=production node "$f" 2>/dev/null; sleep 2; done
# ...
$ for f in scripts/stream/*.mjs; do NODE_ENV=production node "$f" 2>/dev/null; sleep 2; done
# ...
```

|               | `renderToString` | `renderToNodeStream` | HTML bytes (gzip) |
| ------------- | ---------------: | -------------------: | ----------------: |
| CSS Modules   |  1093.28 ops/sec |       848.76 ops/sec |              5190 |
| Emotion       |   204.07 ops/sec |        86.87 ops/sec |              8055 |
| Inline Styles |   507.81 ops/sec |       385.94 ops/sec |              7280 |
| Styletron     |   255.00 ops/sec |       224.97 ops/sec |              6967 |
| Tachyons      |  1000.80 ops/sec |       746.11 ops/sec |              6166 |

## Example components

This test uses two components for testing. Both components are coded separately
with CSS Modules and Tachyons, using the same DOM and styles. There's no visual
difference in the components.

#### [Button](./src/components/Button)

A simple button with a few properties.

<img alt="Screenshot of button" height="84" src="./img/button.jpg" width="219" />

#### [Sidebar](./src/components/Sidebar)

A more complicated navigation component with some state.

<img alt="Screenshot of sidebar" height="820" src="./img/sidebar.jpg" width="315" />

#### [Page](./src/components/Page)

A larger component that includes Button and Sidebar along with fake products and
some additional content.

<img alt="Screenshot of page" src="./img/page.jpg" />

## Setup

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
