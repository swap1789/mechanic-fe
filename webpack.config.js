const path = require("path");
const webpack = require("webpack");

module.exports = {
	context: __dirname,
	entry: [
		"react-hot-loader/patch",
		"webpack-dev-server/client?http://localhost:8080",
		"webpack/hot/only-dev-server",
		"./js/index.jsx"
	],
	devtool: "cheap-eval-source-map",
	output: {
		path: path.join(__dirname, "public"),
		filename: "bundle.js",
		publicPath: "/public/"
	},
	resolve: {
		extensions: [".js", ".jsx", ".json"]
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: true
	},
	plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
	devServer: {
		hot: true,
		publicPath: "/public/",
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.jsx?$/,
				loader: "eslint-loader",
				exclude: "/node_modules"
			},
			{
				test: /\.jsx?$/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				use: [{loader: "style-loader"}, {loader: "css-loader"}]
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: "url-loader?limit=100000"
			}
		]
	}
};
