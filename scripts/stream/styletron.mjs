import "hard-rejection/register.js";

import { stream as styletron } from "../../src/server/handlers/styletron.mjs";
import { stream } from "../utilities.mjs";

stream(styletron, "styletron");