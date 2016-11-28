// 3_PlaceholderTextVerify_spec.js
describe('should have correct placeholder text', function() {
    it('should have correct placement texthave correct placement texthave correct placement texthave correct placement texthave correct placement texthave correct placement texthave correct placement texthave correct placement texthave correct placement text', function(){
       browser.get('http://www.todomvc.com/examples/angular2/');
       element(by.css('.new-todo')).getAttribute('placeholder').then(function(element){
          expect(element).toEqual('What needs to be done?');
       });
    });
});
