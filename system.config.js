'use strict';

(function(global) {
  var map = {
    app: 'dist',
    '@angular': 'node_modules/@angular',
    immutable: 'node_modules/immutable',
    rxjs: 'node_modules/rxjs'
  };

  var packages = {
    app: { main: 'main.js', defaultExtension: 'js' },
    rxjs: { defaultExtension: 'js' },
    immutable: { main: 'dist/immutable.min', defaultExtension: 'js' }
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'platform-browser',
    'platform-browser-dynamic',
    'router'
  ];

  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  ngPackageNames.forEach(setPackageConfig);

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);
})(this);
