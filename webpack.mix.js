let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/inspinia.js', 'public/js')
   .sass('resources/assets/sass/inspinia.scss', 'public/css');

 mix.js('resources/assets/js/auth.js', 'public/js');

 mix.autoload({
     jquery: [ '$', 'jQuery', 'jquery'],
 });

 mix.extract([
     'lodash', 'jquery', 'bootstrap-sass',
     'vue', 'axios'
 ], 'public/js/vendor.js');
 mix.version();
 mix.setPublicPath('public');
