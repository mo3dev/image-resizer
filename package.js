Package.describe({
  name: 'mo3dev:image-resizer',
  version: '0.0.2',
  summary: 'A small library that provides capabilities to resize large images on the client-side',
  git: 'https://github.com/mo3dev/image-resizer.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.addFiles('image-resizer.js', 'client');

  if (api.export)
    api.export('IR', 'client');
});