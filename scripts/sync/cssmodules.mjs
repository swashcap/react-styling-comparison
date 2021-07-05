import { sync } from "../../src/server/handlers/cssmodules.mjs";
import { loop } from "../utilities.mjs";

loop(sync, "cssmodules");