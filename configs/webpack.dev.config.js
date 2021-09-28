/* eslint-disable import/no-extraneous-dependencies */
const {merge} = require("webpack-merge");

const webpackConfiguration = require("../webpack.config");
const environment = require("./env");

module.exports = merge(webpackConfiguration, {
    mode: "development",

    /* Manage source maps generation process */
    // devtool: "eval-source-map",
    devtool: "source-map",

    /* Development Server Configuration */
    devServer: {
        static: {
            directory: environment.paths.output,
            publicPath: '/',
            watch: true,
        },
        historyApiFallback: true,
        compress: true,
        open: true,
        client: {
            overlay: true,
        },
        hot: false,
        liveReload: true,
        watchFiles: [environment.paths.output],
        ...environment.server,
    },

    /* File watcher options */
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/,
    },

    /* Additional plugins configuration */
    plugins: [],
});
