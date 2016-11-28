// 2-HeaderTitleVerify_spec.js
describe('Header title check', function() {
    it('should have todos header', function(){
       browser.get('http://www.todomvc.com/examples/angular2/');
        expect(element(by.css('.todoapp h1')).getText()).toBe("todos");
    });
});
