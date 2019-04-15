
describe('Timewarp editor view', function() {
  it('should open landing page', function() {
    //open browser

    browser.driver.manage().window().setSize(1280, 1024);

    browser.get('http://phtho02dev01:8090/editv2/ ');
    browser.waitForAngular();
    browser.sleep('2000');
    
  });

  it('should attempt login', function() {
    var username = element(by.model("$ctrl.username"));
    var password = element(by.model("$ctrl.password"));
    var button = element(by.className("btn"));

    username.sendKeys('ISBI9900263'); 
    browser.sleep('1000');
    password.sendKeys('SeRv!c3DesK@2019');
    browser.sleep('1000');
    expect(element(by.model("$ctrl.username")).getAttribute('value')).toEqual('ISBI9900263');
    expect(element(by.model("$ctrl.password")).getAttribute('value')).toEqual('SeRv!c3DesK@2019');

        
    browser.sleep('1000');
    button.click();
    browser.ignoreSynchronization = true;

    browser.waitForAngular();
    
    //var parent = element(by.tagName('table-bordered'));
    //var parent2 = parent.all(by.xpath('//tr[data-time="06:00:00"]')).get(0);
    //var child = parent2.all(by.xpath('//td[class="fc-axis fc-time "]')).get(0);
    
    
    //console.log(child);
    //child.click();

    
    // browser.actions().
    // mouseMove(element).
    // mouseMove({x: 50, y: 50}).
    // mouseDown().
    // perform();

    //browser.actions().mouseDown(element(by.className('fc-axis fc-time')).get(1)).perform();
    browser.sleep('2000');
    browser.driver.navigate().refresh();
    browser.sleep('2000');    
  });

  it("should open modal for adding new schedule", function(){
    browser.actions().mouseMove({x: 10, y: 10}).doubleClick().perform();
    browser.sleep('2000');

    //let listActivities = element.all(by.repeater('activityType in $select.items'));
    //$ctrl.data.selectedActivityType.selected
    // expect(listActivities.count()).toBe(65);
  });

  it("should count activity types total to 65", function(){
    //browser.actions().mouseMove({x: 10, y: 10}).doubleClick().perform();
    //browser.sleep('2000');
    var activitytype = element(by.model("$ctrl.data.selectedActivityType.selected"));
    activitytype.click();

    let listActivities = element.all(by.repeater('activityType in $select.items'));
    //$ctrl.data.selectedActivityType.selected
    expect(listActivities.count()).toBe(65);
  });

  it("should set values for adding new schedule", function(){
    //var activitytype = element(by.model("$ctrl.data.selectedActivityType.selected"));
    //activitytype.click();

    browser.sleep('2000');
    var activityTypeSe = element(by.cssContainingText(".ng-binding", "Productive Time"));
    activityTypeSe.click();

    browser.sleep('2000');
    var actionReason = element(by.model("$ctrl.data.selectedActionReason.selected"));
    actionReason.click();

    browser.sleep('2000');
    var actionReasonSe = element(by.cssContainingText(".ng-binding", "Forgot to log-in"));
    actionReasonSe.click();

    browser.sleep('2000');
    var startTime = element(by.model("$ctrl.data.startTime"));
    startTime.sendKeys("2019-04-09 06:20:00 AM");

    browser.sleep('2000');
    var startTime = element(by.model("$ctrl.data.endTime"));
    startTime.sendKeys("2019-04-09 06:22:00 PM");

    browser.sleep('2000');
    var remarks = element(by.model("$ctrl.data.remarks"));
    remarks.sendKeys("Testing lang P0...");

    browser.sleep('10000');
  });

  it("should close browser", function(){
    expect(true).toBe(true);
  });
});
