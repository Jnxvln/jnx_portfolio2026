// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";
import "./app.css"

window.addEventListener("unhandledrejection", (event) => {
  if (
    event.reason instanceof TypeError &&
    /dynamically imported module/.test(event.reason.message)
  ) {
    event.preventDefault();
    window.location.reload();
  }
});

mount(() => <StartClient />, document.getElementById("app")!);
