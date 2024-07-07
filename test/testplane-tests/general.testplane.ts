describe("проверка общих требований для сайта", async function () {
  it("Проверка адаптива верстки", async function ({ browser }) {
    await browser.setWindowSize(1366, 768);
    await browser.url("http://localhost:3000/hw/store/");

    const content = await browser.$(".container.pt-4");
    await content.waitForExist();
    const prevWidth = await content.getSize("width");

    await browser.setWindowSize(500, 1000);
    const currWidth = await content.getSize("width");
    expect(currWidth).toBeLessThan(prevWidth);
  });

    it(" Проверка отображения ссылок в шапке страницы", async function ({ browser }) {
      await browser.setWindowSize(1980, 1080);
      await browser.url("http://localhost:3000/hw/store/");

      const linkBlock = await browser.$(".navbar-nav");
      await linkBlock.waitForExist();

      const links = await linkBlock.$$(".nav-link");

      expect(links.length).toBeGreaterThan(0);

      const catalogLink = links[0];
      const catalogLinkDisplay = await catalogLink.isDisplayed();
      expect(catalogLinkDisplay).toBe(true);
    });

    it("Является ли название магазина в шапке ссылкой на главную страницу", async function ({
      browser,
    }) {
      await browser.url("http://localhost:3000/hw/store/cart");
      const shopName = await browser.$(".Application-Brand");
      await shopName.waitForExist();

      await shopName.click();

      expect(await browser.getUrl()).toBe("http://localhost:3000/hw/store");
    });

  it("Проверка появления гамбургер-меню при ширине экрана менее 576px", async function ({
    browser,
  }) {
    await browser.setWindowSize(500, 1000);
    await browser.url("http://localhost:3000/hw/store/");

    const toggler = await browser.$(".Application-Toggler");
    await toggler.waitForExist();
    const togglerDisplay = await toggler.isDisplayed();

    expect(togglerDisplay).toBe(true);
  });

  it("Закрытие гамбургер-меню", async function ({ browser }) {
    await browser.setWindowSize(400, 1080);
    await browser.url("http://localhost:3000/hw/store/");

    const menu = await browser.$(".Application-Menu");
    await menu.waitForExist();

    const toggler = await browser.$(".Application-Toggler");
    await toggler.waitForExist();

    await toggler.click();

    const link = await menu.$$(".nav-link")[0];
    await link.waitForExist();

    await link.click();
    const menuClasses = await menu.getAttribute("class");
    const menuCollapse = menuClasses.split(" ").includes("collapse");
    expect(menuCollapse).toBe(true);
  });

  // доп к бургер-меню
  it("Проверка отсутсвия ссылок при ширине меньше 576px", async function ({ browser }) {
    await browser.setWindowSize(500, 1000);
    await browser.url("http://localhost:3000/hw/store/");

    const menu = await browser.$(".Application-Menu");
    await menu.waitForExist();
    const menuDisplay = await menu.isDisplayed();
    expect(menuDisplay).toBe(false);
  });
});
