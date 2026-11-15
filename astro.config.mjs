// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	output: "static",
	fonts: [
		{
			name: "Plus Jakarta Sans",
			cssVariable: "--font-jakarta",
			provider: fontProviders.google(),
			weights: [400, 500, 600],
			styles: ["normal"]
		},
		{
			name: "Manrope",
			cssVariable: "--font-manrope",
			provider: fontProviders.google(),
			weights: [400, 500, 600],
			styles: ["normal"]
		},
	],
	integrations: [
		icon({
			iconDir: "src/assets/icons",
		})
	]
});
