import { sync } from "../../src/server/handlers/emotion.mjs";
import { loop } from "../utilities.mjs";

loop(sync, "emotion");
