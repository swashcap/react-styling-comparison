import { sync } from "../../src/server/handlers/styletron.mjs";
import { loop } from "../utilities.mjs";

loop(sync, "styletron");