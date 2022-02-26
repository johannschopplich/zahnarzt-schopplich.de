/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineConfig, presetUno } from "unocss";
import { presetDue } from "duecss";

export default defineConfig({
  theme: {
    colors: {
      primary: {
        DEFAULT: "#4E6E5D",
        "50": "#AEC6B9",
        "100": "#A2BDAF",
        "200": "#8AAC9A",
        "300": "#729B86",
        "400": "#5F8671",
        "500": "#4E6E5D",
        "600": "#374D41",
        "700": "#1F2C25",
        "800": "#080C0A",
        "900": "#000000",
      },
    },
    boxShadow: {
      underline: "inset 0 -0.175em var(--du-color-primary)",
    },
  },
  shortcuts: [
    [
      /^content$/,
      ([,], { theme }) =>
        `relative mx-auto w-[calc(100%-2*${(theme as any).spacing.lg})]`,
    ],
  ],
  safelist: ["var-color-primary"],
  presets: [presetUno(), presetDue()],
});
