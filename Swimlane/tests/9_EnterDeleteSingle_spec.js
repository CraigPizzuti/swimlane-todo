// 9_EnterDeleteSingle_spec.js
describe('angular2 homepage todo list', function() {
  it('should add a single todo', function() {
    browser.get('https://todomvc.com/examples/angular2/');
    element(by.css('.new-todo')).sendKeys('todo1');
    element(by.css('.new-todo')).sendKeys('\n');
    expect(element(by.css('.todo-count')).getText()).toBe("1 item left");
    browser.driver.sleep(2000);
    expect(element.all(by.css('.todo-list label')).get(0).getText()).toBe("todo1");
    browser.driver.sleep(2000);
    browser.actions().mouseMove(element.all(by.css('.todo-list .toggle')).get(0)).perform();
    element.all(by.css('.todo-list .destroy')).get(0).click();
    browser.driver.sleep(2000);
    expect(element(by.css('.clear-completed')).isPresent()).toEqual(false);
    browser.driver.sleep(2000);
  });
});
