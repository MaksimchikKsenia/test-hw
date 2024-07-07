// describe('Проверка работы корзины', async function(){

// 	it("Проверка кнопки очистки корзины", async function ({ browser }) {
//     await browser.setWindowSize(1366, 768);

//     const catalogMock = await browser.mock(
//       "http://localhost:3000/hw/store/api/products"
//     );
//     await catalogMock.respond('[{"id":0,"name":"item1","price":30}]');

//     const catalogMock1 = await browser.mock(
//       "http://localhost:3000/hw/store/api/products/0"
//     );
//     await catalogMock1.respond(
//       '{"id":0,"name":"item1","description":"item1descr","price":30,"color":"color1","material":"material1"}'
//     );

//     await browser.url("http://localhost:3000/hw/store/catalog");
//     await browser.url("http://localhost:3000/hw/store/catalog/0");

//     const addItemtoCart = await browser.$(".ProductDetails-AddToCart");
//     await addItemtoCart.waitForExist();
//     await addItemtoCart.click();

//     await browser.url("http://localhost:3000/hw/store/cart");

//     const cartTable = await browser.$(".Cart-Table");
//     await cartTable.waitForExist();
//     const cartClearBtn = await browser.$(".Cart-Clear");
//     await cartClearBtn.waitForExist();
//     await cartClearBtn.click();
//     expect(await cartTable.isExisting()).toBe(false);
//   });

// it('Проверка наличия количества товаров рядом с сcылкой на корзину(в шапке сайта)', async function({browser}){
// 	await browser.setWindowSize(1366,768)
// 	await browser.url('http://localhost:3000/hw/store/cart');
	
// 	const activeNavbar = await browser.$(".navbar-nav > .nav-link")
// 	await activeNavbar.waitForExist()
// 	await activeNavbar.click()
	
// 	const activeNavbarText = await activeNavbar.getText();
//     if (activeNavbarText.includes("(")) {
//       const cartClearBtn = await browser.$(".Cart-Clear");
//       await cartClearBtn.waitForExist();
//       await cartClearBtn.click();
//     }

// 	const catalogMock = await browser.mock(
//     "http://localhost:3000/hw/store/api/products"
//   );
//   await catalogMock.respond(
//     '[{"id":0,"name":"item1","price":30}, {"id":1,"name":"item2","price":70}]'
//   );

//   const catalogMock1 = await browser.mock(
//     "http://localhost:3000/hw/store/api/products/0"
//   );
//   await catalogMock1.respond(
//     '{"id":0,"name":"item1","description":"item1descr","price":30,"color":"color1","material":"material1"}'
//   );

//   const catalogMock2 = await browser.mock(
//     "http://localhost:3000/hw/store/api/products/1"
//   );
//   await catalogMock2.respond(
//     '{"id":1,"name":"item2","description":"item2descr","price":70,"color":"color2","material":"material2"}'
//   );

//   await browser.url("http://localhost:3000/hw/store/catalog/0");
//   const addItemtoCart = await browser.$(".ProductDetails-AddToCart");
//   await addItemtoCart.waitForExist();
//   await addItemtoCart.click();
//   await addItemtoCart.click();

//   await browser.url("http://localhost:3000/hw/store/cart");
//   const activeTab = await browser.$(".nav-link.active");
//   await activeTab.waitForExist();

//   let activeTabText1 = await activeTab.getText();
//   activeTabText1 = activeTabText1.slice(-2, -1);

//   expect(activeTabText1).toBe("1");

//   await browser.url("http://localhost:3000/hw/store/catalog/1");
//   await addItemtoCart.waitForExist();
//   await addItemtoCart.click();
//   await addItemtoCart.click();

//   await browser.url("http://localhost:3000/hw/store/cart");
//   await activeTab.waitForExist();

//   let activeTabText2 = await activeTab.getText();
//   activeTabText2 = activeTabText2.slice(-2, -1);

//   expect(activeTabText2).toBe("2");
// })

// it("Проверка таблицы из корзины", async function ({ browser }) {
//   await browser.setWindowSize(1366, 768);
//   await browser.url("http://localhost:3000/hw/store/cart");

//  const activeNavbar = await browser.$(".navbar-nav > .nav-link");
//  await activeNavbar.waitForExist();
//  await activeNavbar.click();

//  const activeNavbarText = await activeNavbar.getText();
//  if (activeNavbarText.includes("(")) {
//    const cartClearBtn = await browser.$(".Cart-Clear");
//    await cartClearBtn.waitForExist();
//    await cartClearBtn.click();
//  }

//   const catalogMock = await browser.mock(
//     "http://localhost:3000/hw/store/api/products"
//   );
//   await catalogMock.respond(
//     '[{"id":0,"name":"item1","price":30}, {"id":1,"name":"item2","price":70}]'
//   );

//   const catalogMock1 = await browser.mock(
//     "http://localhost:3000/hw/store/api/products/0"
//   );
//   await catalogMock1.respond(
//     '{"id":0,"name":"item1","description":"item1descr","price":30,"color":"color1","material":"material1"}'
//   );

//   const catalogMock2 = await browser.mock(
//     "http://localhost:3000/hw/store/api/products/1"
//   );
//   await catalogMock2.respond(
//     '{"id":1,"name":"item2","description":"item2descr","price":70,"color":"color2","material":"material2"}'
//   );

//   let cartElems = [];

//   await browser.url("http://localhost:3000/hw/store/catalog/0");
//   const addItemtoCart = await browser.$(".ProductDetails-AddToCart");
//   cartElems.push(await browser.$(".ProductDetails-Name").getText());
//   await addItemtoCart.waitForExist();
//   await addItemtoCart.click();

//   await browser.url("http://localhost:3000/hw/store/catalog/1");
//   cartElems.push(await browser.$(".ProductDetails-Name").getText());
//   await addItemtoCart.waitForExist();
//   await addItemtoCart.click();

//   await browser.url("http://localhost:3000/hw/store/cart");
//   const cartTable = await browser.$(".Cart-Table.table");
//   await cartTable.waitForExist();

//   const cartTableItems = await cartTable.$$(".Cart-Name");
//   for (let i = 0; i < cartTableItems.length; i++) {
//     const text = await cartTableItems[i].getText();
//     await expect(text).toBe(cartElems[i]);
//   }
// });

// it("Проверка отображения всех полей товара в корзине", async function ({ browser }) {
//   await browser.setWindowSize(1366, 768);
//   await browser.url("http://localhost:3000/hw/store/cart");

//   const activeNavbar = await browser.$(".navbar-nav > .nav-link");
//   await activeNavbar.waitForExist();
//   await activeNavbar.click();

//   const activeNavbarText = await activeNavbar.getText();
//   if (activeNavbarText.includes("(")) {
//     const cartClearBtn = await browser.$(".Cart-Clear");
//     await cartClearBtn.waitForExist();
//     await cartClearBtn.click();
//   }

//   const catalogMock = await browser.mock(
//     "http://localhost:3000/hw/store/api/products"
//   );
//   await catalogMock.respond(
//     '[{"id":0,"name":"item1","price":30}]'
//   );

//   const catalogMock1 = await browser.mock(
//     "http://localhost:3000/hw/store/api/products/0"
//   );
//   await catalogMock1.respond(
//     '{"id":0,"name":"item1","description":"item1descr","price":30,"color":"color1","material":"material1"}'
//   );


//   await browser.url("http://localhost:3000/hw/store/catalog/0");
//   const addItemtoCart = await browser.$(".ProductDetails-AddToCart");
//   await addItemtoCart.waitForExist();
//   await addItemtoCart.click();

//   await browser.url("http://localhost:3000/hw/store/cart");

//   const cartTable = await browser.$(".Cart-Table.table");
//   await cartTable.waitForExist({ timeoutMsg: "Нет таблицы с товарами" });

//   const cartTablerow = await cartTable.$$("tbody > tr")[0];
//   const cartTablerowName = await cartTablerow.$(".Cart-Name");
//   await cartTablerowName.waitForExist({ timeoutMsg: "Нет названия товара" });

//   const cartTablerowPrice = await cartTablerow.$(".Cart-Price");
//   await cartTablerowPrice.waitForExist({ timeoutMsg: "Нет цены товара" });

//   const cartTablerowCount = await cartTablerow.$(".Cart-Count");
//   await cartTablerowCount.waitForExist({
//     timeoutMsg: "Нет количества товара",
//   });

//   const cartTablerowTotal = await cartTablerow.$(".Cart-Total");
//   await cartTablerowTotal.waitForExist({
//     timeoutMsg: "Нет общей стоимости товара",
//   });

//   const cartTableOrderPrice = await cartTable.$(".Cart-OrderPrice");
//   await cartTableOrderPrice.waitForExist({ timeoutMsg: "Нет общей стоимости" });
// });


//   it("Проверка ссылки на каталог товаров если корзина пустая", async function ({
//     browser,
//   }) {
//     await browser.setWindowSize(1366, 768);
//     await browser.url("http://localhost:3000/hw/store/cart");

//     const activeNavbar = await browser.$(".navbar-nav > .nav-link.active");
//     await activeNavbar.waitForExist();

//     const activeNavbarText = await activeNavbar.getText();
//     if (activeNavbarText.includes("(")) {
//       const cartClearBtn = await browser.$(".Cart-Clear");
//       await cartClearBtn.waitForExist();
//       await cartClearBtn.click();
//     }

//     const сatalogLink = await browser.$(".col > a");
//     await сatalogLink.waitForExist({ timeoutMsg: "Нет ссылки на каталог" });

//     const colCatalogLinkDisplayed = await сatalogLink.isDisplayed();
//     expect(colCatalogLinkDisplayed).toBe(true);

//     const сatalogLinkHref = await сatalogLink.getAttribute("href");
//     expect(сatalogLinkHref).toBe("/hw/store/catalog");
//   });

    

// })
