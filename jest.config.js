/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const I18N_CACHE_FILE = "./node_modules/.cache/.i18n.messages.js"

const path = require("path")

module.exports = {
    clearMocks: true,
    moduleFileExtensions: ["js", "json", "vue", "ts"],
    transform: {
        "^.+\\.vue$": "vue3-jest",
        "^.+\\.(js|jsx)?$": "babel-jest",
        "^.+\\.(ts)?$": "ts-jest",
        "^.+\\.(svg)?$": "jest-transform-stub",
    },
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "ui/themes": "<rootDir>/__mocks__/devextreme/ui/themes.js",
    },
}
