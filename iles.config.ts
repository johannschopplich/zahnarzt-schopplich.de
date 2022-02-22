import { defineConfig } from "iles";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import UnoCSS from "unocss/vite";

export default defineConfig({
  siteUrl: "https://zahnarzt-schopplich.de",
  components: {
    resolvers: [IconsResolver({ prefix: "" })],
  },
  vite: {
    plugins: [
      // https://github.com/antfu/unplugin-icons
      Icons(),

      // https://github.com/unocss/unocss
      UnoCSS(),
    ],
  },
});
