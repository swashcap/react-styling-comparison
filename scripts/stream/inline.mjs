import "hard-rejection/register.js";

import { stream as inline } from "../../src/server/handlers/inline.mjs";
import { stream } from "../utilities.mjs";

stream(inline, "inline");