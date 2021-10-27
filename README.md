# zahnarzt-schopplich.de

Micro website for my father's dental office. This is my take on a simple website powered by Vite SSG, with a focus on basic SEO to reach a 100 % in each Lighthouse score.

This is a opiniated variation of [Vitesse](https://github.com/antfu/vitesse), dropping some features and adapting the boilerplate for my use-case.

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/)
- 🗂 [File-based routing](./src/pages)
- 📦 [Components auto importing](./src/components)
- 😃 [On-demand icon usage from any icon sets](https://github.com/antfu/unplugin-icons)
- 🗒 [Markdown support](https://github.com/antfu/vite-plugin-md)
- 🔍 Focus on SEO, including `<link rel="canonical">` [@vueuse/head](https://github.com/vueuse/head)
- 🖨 Server-side generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)
- 🦔 Critical CSS via [critters](https://github.com/GoogleChromeLabs/critters)

## Usage

### Development

```bash
pnpm dev
```

Afterwards, visit [localhost:3000](http://localhost:3000).

### Build

To build the app, run:

```bash
pnpm build
```

The generated files will be put into `dist`, ready to be served.

## Credits

[@antfu](https://github.com/antfu) for all of his incredible work and contributions to the community, including Vitesse, which this repository is forked from.
