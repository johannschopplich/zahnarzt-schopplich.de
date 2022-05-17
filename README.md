# zahnarzt-schopplich.de

[îles]: https://github.com/ElMassimo/iles
[configuration reference]: https://iles-docs.netlify.app/config

Micro website for my father's dental office.

Also a playground for me to try different static site generators. This project was once built with Vite SSG, but has migrated to [îles].

It serves as a best practice solution for when I want to spin up a SSG site quickly.

## Key Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next)
- 🌴 [îles](https://github.com/ElMassimo/iles)
- 🔍 [Auto-generated meta tags](./src/components/MetaTags.vue)

## Prerequisites

Before getting started, please make sure you have installed the recommended setup.

- **Node.js**<sup>\*</sup> (v16, the latest LTS version) 👉 [[Download](https://nodejs.org/en/download/)]
- **pnpm**<sup>\*</sup> (the fast and disk space efficient package manager) 👉 [[Download](https://pnpm.io/installation#nodejs-is-preinstalled)]
- **Visual Studio Code** 👉 [[Download](https://code.visualstudio.com/)]
- **Volar Extension** 👉 [[Download](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)]
  - Enable [**Take Over Mode**](https://vuejs.org/guide/typescript/overview.html#takeover-mode)

## Customize Configuration

See îles [Configuration Reference].

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm run dev
```

### Compile and Minify for Production

```sh
pnpm run build
```

## License

The code is licensed under [MIT](./LICENSE), words and images are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
