import { createBrowserHistory } from "history";
import Env from "../env";

const history = createBrowserHistory({
  basename: Env.publicUrl,
});

export default history;
