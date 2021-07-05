import "hard-rejection/register.js";

import fastify from "fastify";
import fastifyCompress from "fastify-compress";
import fastifyStatic from "fastify-static";
import meow from "meow";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { promises as fs } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const cli = meow(
  `
  Options
	  --handler, -h  Styles handler: cssmodules, inline, styletron, tachyons
		--mode, -m     Rendering mode: stream, sync
`,
  {
    flags: {
      handler: { default: "cssmodules", type: "string" },
      mode: { default: "sync", type: "string" },
    },
    importMeta: import.meta,
  }
);

if (!/^(cssmodules|inline|styletron|tachyons)$/.test(cli.flags.handler)) {
  throw new Error("Invalid handler");
} else if (!/^(stream|sync)$/.test(cli.flags.mode)) {
  throw new Error("Invalid mode");
}

const instance = fastify({
  logger: true,
});

instance.register(fastifyCompress);
instance.register(fastifyStatic, {
  prefix: "/public",
  root: join(__dirname, "../../dist"),
});

Promise.all([
  import(join(__dirname, `handlers/${cli.flags.handler}.mjs`)),
  fs.readFile(join(__dirname, "../components/Page/args.json"), "utf-8"),
]).then(([handler, content]) => {
  const props = JSON.parse(content);
  const render = cli.flags.mode === "stream" ? handler.stream : handler.sync;

  instance.get("/", (request, reply) => {
    reply.header("Content-Type", "text/html");

    return render(props);
  });

  return instance.listen(3000);
});
