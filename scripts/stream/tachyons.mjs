import "hard-rejection/register.js";

import { stream as tachyons } from "../../src/server/handlers/tachyons.mjs";
import { stream } from "../utilities.mjs";

stream(tachyons, "tachyons");
