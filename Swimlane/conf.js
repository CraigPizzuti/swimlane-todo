// conf.js
exports.config = {
  framework: 'jasmine',
  suites: {
    todo: './tests/*_spec.js'
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
useAllAngular2AppRoots: true,
  capabilities: {
    browserName: 'chrome'
  }
}
