const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"],
    },

    entry: {
        app: "./src/index.jsx",
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: ["react-hot-loader/babel"],
                },
                exclude: /node_modules/,
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
            template: "./public/index.html",
        }),
    ],

    devServer: {
        contentBase: path.join(__dirname, "./build"), // 이 경로에 있는 파일이 변경될 때 번들을 다시 컴파일
        index: "index.html",
        compress: true,
        port: 3000,
//      host: "0.0.0.0", // localhost 외 환경에서 사용
    },
};
