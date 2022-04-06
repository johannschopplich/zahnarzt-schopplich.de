import { defineApp } from "iles";
import checkDarkTheme from "~/logic/dark-color-scheme-check?raw";

import "~/styles/main.css";
import "uno.css";

const prodScripts = import.meta.env.PROD
  ? [
      {
        src: "https://plausible.io/js/plausible.js",
        "data-domain": "zahnarzt-schopplich.de",
        defer: true,
        once: true,
      },
    ]
  : [];

export default defineApp({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  head({ page, route, meta, frontmatter, site }) {
    return {
      htmlAttrs: {
        class: "var-color-primary",
        lang: "de",
      },
      script: [{ children: checkDarkTheme, once: true }, ...prodScripts],
    };
  },
});
