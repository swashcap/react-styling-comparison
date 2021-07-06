import { sync } from "../../src/server/handlers/inline.mjs";
import { loop } from "../utilities.mjs";

loop(sync, "inline");
