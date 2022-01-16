const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const mode = process.env.NODE_ENV !== "production";

module.exports = {
    name: "prEtc",
    mode: mode ? "development" : "production",

    resolve: {
        extensions: [".js",".jsx",".tsx"]
    },

    entry: {
        main: "./index"
    },

    module: {
        rules: [
            {
                test: /\.(js||jsx)$/,
                loader: "babel-loader",
                options: {
                    presets: [
                        ["@babel/preset-env", {targets: {browsers: [">=5% in KR", "last 2 versions"]} }],
                         "@babel/preset-react", "@babel/preset-typescript"
                        ],
                    plugins: [require.resolve("react-refresh/babel"), ["transform-remove-console",{exclude: ["error","warn","log"]}]]
                }
            },
            {
                test: /\.(tsx||ts)$/,
                loader: "ts-loader"
            },
            {
                test: /\.(css||scss||sass)$/,
                use: ["css-loader", "style-loader", "sass-loader"]
            },
            {
                test: /\.(png||jpg||jpeg||svg||gif)$/,
                loader: "file-loader"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new ReactRefreshWebpackPlugin(),
        new CleanWebpackPlugin()
    ],

    output: {
        publicPath: "/",
        path: path.join(__dirname, "./dist"),
        filename: "[name].js"
    },

    devServer: {
        port: 3000,
        devMiddleware: {publicPath: "/"},
        static: path.resolve(__dirname, "./dist"),
        proxy: {
            "/api/*": {
                target: "http://52.79.154.236:8080", // 이거 설정하면 api붙은 주소값이 있으면 자동으로 베이직유알엘을 변경시켜줌. -> useAxios를 만든다면 베이직유알엘이랑 같이 넣으면 안됨.
                changeOrigin: true,
            }
        },
        hot: true,
        historyApiFallback: true
    }
}
