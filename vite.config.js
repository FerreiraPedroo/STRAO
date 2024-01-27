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
			pages: "/src/pages",
			services: "/src/services",
			helper: "/src/helper",
			styles: "/src/styles",
		}
	}
});
