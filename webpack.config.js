const TerserPlugin = require('terser-webpack-plugin');

module.exports = {	
  	mode: 'production',
  	optimization: {
		minimizer: [new TerserPlugin({ /* additional options here */ })],
	},
	entry: './frontend/App.jsx',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},

	module:{
        rules:[
            {
                use: 'babel-loader',
				test: /\.js$|jsx/,
                exclude:/node_modules/
            }
        ]
    }
};

