Package.describe({
  name: 'kadira:blaze-plus',
  summary: 'Adds Props and State Management Functionlity to Blaze',
  version: '1.0.0',
  git: 'https://github.com/kadirahq/blaze-plus.git'
});

Package.onUse(function(api) {
  configure(api);
});

Package.onTest(function(api) {
  configure(api);
  api.use('tinytest');
});

function configure(api) {
  api.versionsFrom('1.0');

  api.use('underscore');
  api.use('tracker');
  api.use('reactive-var');
  api.use('templating');
  api.use('blaze');

  api.addFiles('lib/blaze_plus.js', 'client');
}