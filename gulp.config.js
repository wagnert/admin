'use strict';

module.exports = {
    systemJsConfig: './system.config.js',
    source: {
        folder: './src/',
        files: {
            injectables: [
                './dist/www/scripts/es6-shim.min.js',
                './dist/www/scripts/shims_for_IE.js',
                './dist/www/scripts/vendor.min.js',
                './dist/www/scripts/angular2.min.js',
                './dist/www/scripts/system.setup.js',
                './dist/www/css/vendor.min.css',
                './dist/www/css/app.css'
            ],
            main: [
                './src/index.html'
            ],
            systemSetupScript: './src/system.setup.js',
            app: {
                everything: ['./src/app/**/*', './src/system.setup.js'],
                ts: [
                    './src/app/**/*.ts'
                ],
                html: [
                    './src/app/**/*.html'
                ],
                css: [
                    './src/css/*.css'
                ],
                componentCss: [
                    './src/app/**/*.css'
                ],
                assets: [
                    './src/assets/**/*.*'
                ]
            },
            vendorStylesheets: [
                './node_modules/bootstrap/dist/css/bootstrap.min.css',
                './node_modules/admin-lte/dist/css/AdminLTE.min.css',
                './node_modules/admin-lte/dist/css/skins/skin-dark.min.css'
            ],
            vendorFonts: [
                './node_modules/bootstrap/dist/fonts/*.*'
            ],
            shim: [
                './node_modules/es6-shim/es6-shim.min.js',
                './node_modules/angular2/es6/dev/src/testing/shims_for_IE.js'
            ],
            vendorJs: [
                './node_modules/jquery/dist/jquery.min.js',
                './node_modules/bootstrap/dist/js/bootstrap.min.js',
                './node_modules/admin-lte/dist/js/app.min.js'
            ],
            angular2: [
                './node_modules/systemjs/dist/system-polyfills.js',
                './node_modules/systemjs/dist/system.src.js',
                './node_modules/rxjs/bundles/Rx.js',
                './node_modules/angular2/bundles/angular2-polyfills.js',
                './node_modules/angular2/bundles/angular2.dev.js',
                './node_modules/angular2/bundles/http.dev.js',
                './node_modules/angular2/bundles/router.dev.js'
            ]
        }
    },
    ts: {
        config: './tsconfig.json'
    },
    targets: {
        angular2MinJs: 'angular2.min.js',
        vendorMinJs: 'vendor.min.js',
        vendorMinCss: 'vendor.min.css',
        buildFolder: './dist/www',
        appFolder: 'app',
        stylesFolder: 'css',
        minified: {
            js: 'app.js',
            css: 'app.css',
            templateCache: 'ng-templates.js'
        }
    }
};
