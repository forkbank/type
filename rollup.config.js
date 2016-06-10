var buble = require('rollup-plugin-buble');

module.exports = {
  entry: 'index.js',
  plugins: [ buble() ],
  targets: [
    { dest: 'dist/index.cjs.js', format: 'cjs' },
    { dest: 'dist/index.es6.js', format: 'es6' },
    { dest: 'dist/index.amd.js', format: 'amd' },
    { dest: 'dist/index.iife.js', format: 'iife', moduleName: 'type'},
  ]
};