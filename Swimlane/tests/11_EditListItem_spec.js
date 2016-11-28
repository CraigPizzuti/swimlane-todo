//11_EditListItem_spec.js
describe('Enter and edit a list item', function() {
  it('should enter and edit a list item', function() {
    browser.get('https://todomvc.com/examples/angular2/');
    element(by.css('.new-todo')).sendKeys('1');
    element(by.css('.new-todo')).sendKeys('\n');
    expect(element(by.css('.todo-count')).getText()).toBe("1 item left");
    browser.driver.sleep(2000);
    expect(element.all(by.css('.todo-list label')).get(0).getText()).toBe("1");
    browser.driver.sleep(2000);
    browser.actions().doubleClick(element.all(by.css('.todo-list label')).get(0)).perform();
    browser.driver.sleep(2000);
    browser.actions().click(protractor.Button.RIGHT).perform();
    browser.driver.sleep(2000);
    var enter = browser.actions().sendKeys('2');
    enter.perform();
    var enter = browser.actions().sendKeys('\n');
    enter.perform();
    browser.driver.sleep(2000);
    expect(element.all(by.css('.todo-list label')).get(0).getText()).toBe("2");
    element(by.css('.toggle-all')).click();
    browser.driver.sleep(2000);
    element(by.css('.clear-completed')).click();
    browser.driver.sleep(2000);
  });
});
