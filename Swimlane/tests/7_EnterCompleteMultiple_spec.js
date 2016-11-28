// 7_EnterCompleteMultiple_spec.js
describe('angular2 homepage todo list', function() {
  it('should add a single todo', function() {
    browser.get('https://todomvc.com/examples/angular2/');
    element(by.css('.new-todo')).sendKeys('1');
    element(by.css('.new-todo')).sendKeys('\n');
      expect(element.all(by.css('.todo-list label')).get(0).getText()).toBe("1");
    element(by.css('.new-todo')).sendKeys('2');
    element(by.css('.new-todo')).sendKeys('\n');
      expect(element.all(by.css('.todo-list label')).get(1).getText()).toBe("2");
    element(by.css('.new-todo')).sendKeys('3');
    element(by.css('.new-todo')).sendKeys('\n');
      expect(element.all(by.css('.todo-list label')).get(2).getText()).toBe("3");
    expect(element(by.css('.todo-count')).getText()).toBe("3 items left");
    element(by.css('.toggle-all')).click();
    browser.driver.sleep(2000);
    element(by.css('.clear-completed')).click();
    browser.driver.sleep(2000);
    expect(element(by.css('.clear-completed')).isPresent()).toEqual(false);
    browser.driver.sleep(2000);
  });
});
