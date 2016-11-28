// 1_BrowserTabNameVerify_spec.js
describe('ToDo Page Check', function() {
  it('should have a title', function() {
    // Load webpage
       browser.get('http://www.todomvc.com/examples/angular2/');

    expect(browser.getTitle()).toEqual('Angular2 • TodoMVC');
  });
});
