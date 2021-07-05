import { sync } from "../../src/server/handlers/tachyons.mjs";
import { loop } from "../utilities.mjs";

loop(sync, "tachyons");