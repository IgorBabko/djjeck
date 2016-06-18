process.env.DISABLE_NOTIFIER = true;

var elixir = require('laravel-elixir'),
    path = require('path'),
    webpack = require('webpack'),
    postStylus = require('poststylus');

require('laravel-elixir-stylus');
require('laravel-elixir-livereload');
require('laravel-elixir-webpack-ex');


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    /**
     * JQuery
     **/
    mix.copy('node_modules/jquery/dist/jquery.min.js', 'public/js');


    /**
     * Materialize fonts
     **/
    mix.copy('node_modules/materialize-css/dist/fonts', 'public/fonts');

    /**
     * Materialize css
     **/
    mix.copy('node_modules/materialize-css/dist/css/materialize.min.css', 'public/css');

    /**
     * Materialize js
     **/
    mix.copy('node_modules/materialize-css/dist/js/materialize.min.js', 'public/js');

    /**
     * Scrollmagic js
     **/
    mix.copy('node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js', 'public/js')

    /**
     * Font-awesome css
     **/
    mix.copy('node_modules/font-awesome/css/font-awesome.css', 'public/css/font-awesome.css')

    /**
     * Font-awesome fonts
     **/
    mix.copy('node_modules/font-awesome/fonts', 'public/fonts')


    /**
     * Stylus
     **/
    mix.stylus('app.styl', null, {
        use: [
            postStylus( [ 'autoprefixer', 'lost', 'rucksack-css' ] )
        ]
    });

    /**
     * Scripts webpack bundling and copying
     **/

    mix.webpack({
        vendor: 'vendor.ts',
        app: 'app.ts'
    }, {
        debug: true,
        devtool: 'source-map',
        resolve: {
            extensions: ['', '.ts', '.js']
        },
        module: {
            loaders: [
                {
                    test: /\.ts$/,
                    loader: 'awesome-typescript-loader',
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                '__decorate': 'typescript-decorate',
                '__extends': 'typescript-extends',
                '__param': 'typescript-param',
                '__metadata': 'typescript-metadata'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.js',
                minChunks: Infinity
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'app',
                filename: 'app.js',
                minChunks: 4,
                chunks: [
                    'app'
                ]
            }),
            /*new webpack.optimize.UglifyJsPlugin({
                 compress: {
                    warnings: false
                 },
                 minimize: true,
                 mangle: false
             })*/
        ]
    }, 'public/js', 'resources/assets/typescript');

    /**
     * LiveReload
     **/
    mix.livereload([
        'public/css/**/*',
        'public/fonts/**/*',
        'public/js/**/*'
    ]);
});
