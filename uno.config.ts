import extractorSvelte from "@unocss/extractor-svelte";
import {
  defineConfig,
  presetIcons,
  presetUno,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { myPreset } from "./my-preset";

// https://unocss.dev
export default defineConfig({
  extractors: [extractorSvelte],
  theme: {},
  rules: [],
  shortcuts: [],
  variants: [],

  preflights: [
    {
      getCSS: () => `
      :root {
        -webkit-tap-highlight-color: transparent;        
      }

      html,
      body {
        position: relative;
	      overflow-x: hidden;
      }
      `,
    },
  ],

  presets: [
    myPreset,
    presetUno(),
    presetIcons({ scale: 1.2 }),
    presetAttributify(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
