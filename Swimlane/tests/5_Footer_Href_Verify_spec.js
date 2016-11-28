// 5_Footer_Href_Verify_spec.js
describe('should have correct info hrefs', function() {
   it('should have correct hrefs', function(){
      browser.get('http://www.todomvc.com/examples/angular2/');
      element(by.cssContainingText("a","TodoMVC")).getAttribute('href').then(function(element){
         expect(element).toEqual('http://todomvc.com/');
      });
      element(by.cssContainingText("a","Sam Saccone")).getAttribute('href').then(function(element){
         expect(element).toEqual('http://github.com/samccone');
      });
      element(by.cssContainingText("a","Colin Eberhardt")).getAttribute('href').then(function(element){
         expect(element).toEqual('http://github.com/colineberhardt');
      });
   });
});
