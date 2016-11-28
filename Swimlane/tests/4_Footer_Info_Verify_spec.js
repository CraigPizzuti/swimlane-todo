// 4_Footer_Info_Verify_spec.js
describe('footer check', function() {
    it('should contain correct footer info', function(){
       browser.get('http://www.todomvc.com/examples/angular2/');
        expect(element(by.css('.info')).getText()).toContain("Double-click to edit a todo");
        expect(element(by.css('.info')).getText()).toContain("Created by Sam Saccone and Colin Eberhardt using Angular2");
        expect(element(by.css('.info')).getText()).toContain("Part of TodoMVC");
    });
});
