const elixir = require('laravel-elixir');

require('laravel-elixir-vue');

elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';

elixir(mix => {
    mix.sass('app.scss');

    mix.webpack('app.js');

    mix.browserSync({
        files: [
        	'**/*.html', 
        	'**/*.css', 
        	'**/*.js'
        ],
        proxy: 'vpl.dev'
    });
});