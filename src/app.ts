import { defineApp } from "iles";
import { computed } from "vue";

import "~/styles/base.scss";
import "~/styles/components.scss";
import "uno.css";

export default defineApp({
  head({ frontmatter, site, route }) {
    return {
      htmlAttrs: {
        class: "due-var-color-primary",
        lang: "de",
        "data-theme": "light",
      },
      meta: [
        { name: "theme-color", content: "#fbdfb1" },
        {
          name: "description",
          content: computed(() => frontmatter?.description ?? site.description),
        },
        { property: "og:url", content: computed(() => site.url + route.path) },
        { property: "og:type", content: "website" },
        { property: "og:title", content: site.title },
        {
          property: "og:description",
          content: computed(() => frontmatter?.description ?? site.description),
        },
        { property: "og:image", content: "/android-chrome-512x512.png" },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
      ],
    };
  },
});
