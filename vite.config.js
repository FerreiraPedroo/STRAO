import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000
	},
	resolve: {
		alias: {
			component: "/src/component",
			services: "/src/services",
			modules: "/src/modules",
			helper: "/src/helper",
			styles: "/src/styles",
			pages: "/src/pages",
		}
	}
});
