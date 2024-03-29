const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: { filename: "main.js" },
    mode: "production",
    stats: {
        children: false,
        modules: false,
    },
    plugins: [
        new HtmlWebpackPlugin({ title: "Homework E13" }),
    ],
    devServer: {
        static: "./dist",
        port: 3001,
        open: true,
        allowedHosts: "all",
        client: {
            logging: "warn",
        },

    },
};
