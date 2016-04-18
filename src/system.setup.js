System.config({
    packages: {
        app: {
            format: 'register',
            defaultExtension: 'js'
        }
    },
    map: {
        'jquery': 'scripts/bundles/jquery.min.js',
        'bootstrap/js/bootstrap': 'scripts/bundles/bootstrap.min.js',
        'admin-lte/js/app': 'scripts/bundles/app.min.js',
    }
});

System.import('app/main')
    .then(null, console.error.bind(console));
