// 10_EnterDeleteMult_spec.js
describe('Enter and Delete Mult Items One by One', function() {
  it('should add and delete mult items one by one', function() {
    browser.get('https://todomvc.com/examples/angular2/');
    element(by.css('.new-todo')).sendKeys('1');
    element(by.css('.new-todo')).sendKeys('\n');
    expect(element.all(by.css('.todo-list label')).get(0).getText()).toBe("1");
    expect(element(by.css('.todo-count')).getText()).toBe("1 item left");
    browser.driver.sleep(2000);
    element(by.css('.new-todo')).sendKeys('2');
    element(by.css('.new-todo')).sendKeys('\n');
    expect(element.all(by.css('.todo-list label')).get(1).getText()).toBe("2");
    expect(element(by.css('.todo-count')).getText()).toBe("2 items left");
    browser.driver.sleep(2000);
    element(by.css('.new-todo')).sendKeys('3');
    element(by.css('.new-todo')).sendKeys('\n');
    expect(element.all(by.css('.todo-list label')).get(2).getText()).toBe("3");
    expect(element(by.css('.todo-count')).getText()).toBe("3 items left");
    browser.driver.sleep(2000);
    browser.actions().mouseMove(element.all(by.css('.todo-list .toggle')).get(2)).perform();
    element.all(by.css('.todo-list .destroy')).get(2).click();
    browser.driver.sleep(2000);
    expect(element(by.css('.todo-count')).getText()).toBe("2 items left");
    browser.actions().mouseMove(element.all(by.css('.todo-list .toggle')).get(1)).perform();
    element.all(by.css('.todo-list .destroy')).get(1).click();
    browser.driver.sleep(2000);
    expect(element(by.css('.todo-count')).getText()).toBe("1 item left");
    browser.actions().mouseMove(element.all(by.css('.todo-list .toggle')).get(0)).perform();
    element.all(by.css('.todo-list .destroy')).get(0).click();
    browser.driver.sleep(2000);
    expect(element(by.css('.clear-completed')).isPresent()).toEqual(false);
    browser.driver.sleep(2000);
  });
});
