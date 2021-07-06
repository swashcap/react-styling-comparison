import { hydrate } from "react-dom";

import { Page } from "./components/Page/Page.cssmodules";

hydrate(<Page {...window["__PAGE_DATA__"]} />, document.getElementById("app"));
