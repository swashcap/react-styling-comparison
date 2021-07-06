import "hard-rejection/register.js";

import { stream as cssmodules } from "../../src/server/handlers/cssmodules.mjs";
import { stream } from "../utilities.mjs";

stream(cssmodules, "cssmodules");
