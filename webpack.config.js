const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack'); //to access built-in plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');

const config = {

	entry: './src/app/app.js', // string | object | array
	//entry: './src/app/playground/hoc.js', // string | object | array

	//watch: true,

	output: { // string
	// options related to how webpack emits results

		filename: 'bundle.js', // string
		// the filename template for entry chunks

		sourceMapFilename: 'bundle.map',

		path: path.resolve(__dirname,  'public'), // string
		// the target directory for all output files
		// must be an absolute path (use the Node.js path module)

	},

	// configuration regarding modules
	module: {
		
		rules: [
		// rules for modules (configure loaders, parser options, etc.)

			// styles CSS / SASS / SCSS
			{
				test: /\.css$/,
				use: ['style-loader','css-loader', {
					loader: 'postcss-loader',
					options: {
						plugins: () => [require('autoprefixer')]
					}
				}]
/*
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader']
				})
*/				
			},

			{
				test: /\.(sass|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},

/*			
			{
				test: /\.(sass|scss)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary
					use: [
						{
							loader: "css-loader", options: {
								sourceMap: true
							}
						}, 
						{
							loader: "sass-loader", options: {
								sourceMap: true
							}
						},
						{
							loader: "postcss-loader", options: {
								sourceMap: true
							}
						}
					]
				})
			},
*/
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [ 'file-loader' ]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [ 'file-loader' ]
			},

			// scripts
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
		        // these are matching conditions, each accepting a regular expression or string
		        // test and include have the same behavior, both must be matched
		        // exclude must not be matched (takes preferrence over test and include)
		        // Best practices:
		        // - Use RegExp only in test and for filename matching
		        // - Use arrays of absolute paths in include and exclude
		        // - Try to avoid exclude and prefer include

				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env','stage-0','react']
					}
				}
			}
		]
	},

	plugins: [
		new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true }),
		// avoid console error on minyifing react files
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		// new webpack.optimize.UglifyJsPlugin({
		// 	sourceMap: true,
		// 	warnings: false,
		// 	mangle: true
		// }),
		//new HtmlWebpackPlugin({template: './src/index.html'})
		//new CleanWebpackPlugin(['dist'])
	],

	performance: {
		hints: "warning", // enum
		maxAssetSize: 200000, // int (in bytes),
		maxEntrypointSize: 400000, // int (in bytes)
		assetFilter: function(assetFilename) { 
		  // Function predicate that provides asset filenames
		  return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
		}
	},


	//devtool: 'cheap-module-eval-source-map',
	devtool: '#source-map',

	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		historyApiFallback: true
	}

};

module.exports = config;