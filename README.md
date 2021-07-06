# react-styling-comparison

_An experiment testing React + styling methods' impact on bundle size._

## Findings

### Lighthouse

This project contains web applications of the [Page component](#page) that have server-side rendering through a lightweight [fastify](https://www.fastify.io) server and rehydrate the React application on the client. Running these through Lighthouse's Performance tool (Mobile, average of 10 runs) yields the following numbers:

|               | Score | First Content Paint | Time to Interactive | Speed Index | Total Blocking Time | Largest Contentful Paint |
| ------------- | ----: | ------------------: | ------------------: | ----------: | ------------------: | -----------------------: |
| CSS Modules   |    99 |                1.6s |                2.4s |        1.6s |                97ms |                     1.8s |
| Inline Styles |    99 |                1.6s |                2.2s |        1.6s |               128ms |                     1.7s |
| Styletron     |    99 |                1.5s |                2.6s |        1.5s |               158ms |                     1.7s |
| Tachyons      |    96 |                2.0s |                2.9s |        2.1s |               154ms |                     2.3s |

### Client bundle size

The [comparison script](./scripts/compare.js) demonstrates:

|               | Button JS | Button CSS | Sidebar JS | Sidebar CSS | Page JS | Page CSS | App (Page + React) |
| ------------- | --------: | ---------: | ---------: | ----------: | ------: | -------: | -----------------: |
| CSS Modules   |       320 |        424 |        862 |         683 |    2034 |     1630 |              44624 |
| Inline Styles |       789 |          0 |       1607 |           0 |    3529 |        0 |              46040 |
| Styletron     |      1363 |          0 |       2373 |           0 |    4488 |        0 |              51955 |
| Tachyons      |       457 |      15558 |       1122 |       15558 |    2522 |    15558 |              45050 |

(All sizes gzipped.)

### Server-side rendering

Using [React's server-side rendering](https://reactjs.org/docs/react-dom-server.html) reveals differences aren't limited to client bundle sizes:

```shell
$ for f in scripts/sync/*.mjs; do NODE_ENV=production node "$f" 2>/dev/null; sleep 2; done
# ...
$ for f in scripts/stream/*.mjs; do NODE_ENV=production node "$f" 2>/dev/null; sleep 2; done
# ...
```

|               | renderToString  | renderToNodeStream |
| ------------- | --------------: | -----------------: |
| CSS Modules   | 1164.18 ops/sec |     980.81 ops/sec |
| Inline Styles |  520.95 ops/sec |     447.41 ops/sec |
| Styletron     |  221.83 ops/sec |     216.29 ops/sec |
| Tachyons      | 1074.00 ops/sec |     840.24 ops/sec |

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
