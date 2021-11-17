describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show hello world', async () => {
      await expect(element(by.id('test-hello-world'))).toBeVisible();
   });

  it('should able to tap the button and show counter value to 1', async () => {
      await element(by.id('test-btn')).tap();
      await expect(element(by.text('Counter: 1'))).toBeVisible();
  })

  it('should show counter value to 5 if user taps the button 5 times', async () => {
    await element(by.id('test-btn')).tap();
    await element(by.id('test-btn')).tap();
    await element(by.id('test-btn')).tap();
    await element(by.id('test-btn')).tap();
    await element(by.id('test-btn')).tap(); 
  
    await expect(element(by.text('Counter: 5'))).toBeVisible();
  })

  it('should able to type in the form' , async () => {
    await element(by.id('test-first-name')).typeText('Hakuna');
    await element(by.id('test-first-name')).tapReturnKey();
    await element(by.id('test-last-name')).typeText('Matata');
    await element(by.id('test-last-name')).tapReturnKey();
    await element(by.id('test-btn-2')).tap(); 
    await expect(element(by.text('Welcome back Hakuna Matata'))).toBeVisible();
  });

  // it('should navigate to next page' , async () => {
  //   await element(by.id('test-btn-2')).tap(); 
  //   await expect(element(by.text('Welcome back Hakuna Matata'))).toBeVisible();
  // });
});
