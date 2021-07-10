import "hard-rejection/register.js";

import { stream as emotion } from "../../src/server/handlers/emotion.mjs";
import { stream } from "../utilities.mjs";

stream(emotion, "emotion");
