import { UserConfig } from 'vitest/config'
import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue"


// https://vitejs.dev/config/
export default defineConfig((context) => {
    const config: UserConfig = {
        plugins: [
           
            vue(),

        ],

        define: {
            // adding app version
            __APP_VERSION__: process.env.APP_VERSION,
        },

        esbuild: {
            pure: ["console.log", "console.debug"],
        },

        resolve: {
            alias: {
                "@/": "/src/",
            },
        },
    }

    if (context.command == "serve") {
        // fix for warning: You are running production build of Inferno in development mode.
        config.resolve.alias["inferno"] = "inferno/dist/index.dev.esm.js"
    }

    return config
})
