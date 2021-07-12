import streamToPromise from "stream-to-promise";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { performance } from "perf_hooks";
import { readFileSync } from "fs";

const props = JSON.parse(
  readFileSync(
    join(
      dirname(fileURLToPath(import.meta.url)),
      "../src/components/Page/args.json"
    ),
    "utf-8"
  )
);

export const loop = (render, prefix) => {
  const start = performance.now();

  for (let i = 0; i < 10000; i += 1) {
    console.error(render(props));
  }

  console.log(
    `[${prefix}] renderToString, loop x10000: ${
      1e7 / (performance.now() - start)
    } ops/sec`
  );
};

export const stream = async (render, prefix) => {
  const start = performance.now();

  for (let i = 0; i < 1000; i += 1) {
    const rendered = await Promise.all(
      Array.from(new Array(10)).map(async () => {
        const value = render(props);

        return streamToPromise(value instanceof Promise ? await value : value);
      })
    );

    console.error(rendered.join(""));
  }

  console.log(
    `[${prefix}] renderToNodeStream, 10 parallel x1000: ${
      1e7 / (performance.now() - start)
    } ms`
  );
};
