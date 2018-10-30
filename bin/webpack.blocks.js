/**
 * External dependencies.
 */
const merge = require( 'webpack-merge' );

/**
 * Internal dependencies.
 */
const base = require( './webpack.base' );
const paths = require( './paths' );
const wpPackages = require( './wp-packages' );

module.exports = [
	merge( base, {
		entry: {
			blocks: './packages/blocks/index.js'
		},
		output: {
			path: paths.gutenbergBuildPath,
		},
		externals: Object.assign( {}, wpPackages.externals, {
			'react': [ 'cf', 'vendor', 'react' ],
			'react-dom': [ 'cf', 'vendor', 'react-dom' ],
			'@wordpress/components': [ 'wp', 'components' ],
			'@wordpress/blocks': [ 'wp', 'blocks' ],
			'@wordpress/editor': [ 'wp', 'editor' ],
			'@wordpress/i18n': [ 'wp', 'i18n' ],
			'@carbon-fields/core': 'cf.core',
			'lodash': [ 'lodash' ]
		} )
	} )
];
