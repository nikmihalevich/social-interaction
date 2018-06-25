const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: [
        'react-hot-loader/babel',
        './src/index.jsx'
        ]
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
	watch: NODE_ENV === 'development',
    devtool: NODE_ENV === 'development' && 'cheap-source-map',
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader:'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            }
        ]
    },
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(NODE_ENV)
			}
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true
    }
};

//loaders: ['react-hot-loader/webpack', 'babel?' + JSON.stringify({presets: ['react', 'es2015', 'stage-0']})],