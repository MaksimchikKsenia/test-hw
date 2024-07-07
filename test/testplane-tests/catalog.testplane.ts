// describe('Проверка работоспособности каталога', async function(){
//   it("Проверка названия товара в каталоге", async function ({ browser }) {
//     await browser.url("http://localhost:3000/hw/store/catalog");
//     const productItemName = await browser.$(".ProductItem-Name");
//     await productItemName.waitForExist();

//     expect(await productItemName.getText()).not.toBe("");
//   });

//   it("Проверка отображения товара", async function ({ browser }) {
//     await browser.url("http://localhost:3000/hw/store/catalog/1");

//     const productItem = await browser.$(".Product");
//     await productItem.waitForExist();

//     expect(await productItem.getText()).not.toEqual("LOADING");
//   });

//   it("Проверка отображения названия, цены и ссылки на страницу с подробной информацией о товаре", async function ({
//     browser,
//   }) {
//     await browser.setWindowSize(1366, 768);
//     await browser.url("http://localhost:3000/hw/store/catalog");

//     const itemCard = await browser.$$(".ProductItem.card.w-100.mb-4")[0];
//     await itemCard.waitForExist({ timeoutMsg: "Нет карточки товара" });

//     const itemCardImage = await itemCard.$(".Image.card-img-top");
//     await itemCardImage.waitForExist({ timeoutMsg: "Нет картинки товара" });

//     const itemCardBody = await itemCard.$(".card-body");
//     await itemCardBody.waitForExist({ timeoutMsg: "Нет body карточки" });

//     const itemCardName = await itemCardBody.$(
//       ".ProductItem-Name.card-title"
//     );
//     await itemCardName.waitForExist({ timeoutMsg: "Нет названия товара" });

//     const itemCardPrice = await itemCardBody.$(
//       ".ProductItem-Price.card-text"
//     );
//     await itemCardPrice.waitForExist({ timeoutMsg: "Нет цены товара" });

//     const itemCardLink = await itemCardBody.$(
//       ".ProductItem-DetailsLink.card-link"
//     );
//     await itemCardLink.waitForExist({ timeoutMsg: "Нет ссылки на страницу товара" });
//   });

//   it("Проверка полей описания товара на странице товара", async function ({
//     browser,
//   }) {
//     await browser.setWindowSize(1366, 768);
//     await browser.url("http://localhost:3000/hw/store/catalog/0");

//     const itemCardDetails = await browser.$(".ProductDetails.row");
//     await itemCardDetails.waitForExist({ timeoutMsg: "Нет карточки товара" });

//     const itemCardImage = await itemCardDetails.$(".Image");
//     await itemCardImage.waitForExist({ timeoutMsg: "Нет картинки товара" });

//     const itemCardName = await itemCardDetails.$(".ProductDetails-Name");
//     await itemCardName.waitForExist({ timeoutMsg: "Нет названия товара" });

//     const itemCardPrice = await itemCardDetails.$(".ProductDetails-Price");
//     await itemCardPrice.waitForExist({ timeoutMsg: "Нет цены товара" });

//     const itemCardDescription = await itemCardDetails.$(
//       ".ProductDetails-Description"
//     );
//     await itemCardDescription.waitForExist({ timeoutMsg: "Нет описания товара" });

//     const itemCardBtn = await itemCardDetails.$(
//       ".ProductDetails-AddToCart"
//     );
//     await itemCardBtn.waitForExist({
//       timeoutMsg: "Нет кнопки добавления в корзину",
//     });

//     const itemCardColor = await itemCardDetails.$(".ProductDetails-Color");
//     await itemCardColor.waitForExist({ timeoutMsg: "Нет цвета товара" });

//     const itemCardMaterial = await itemCardDetails.$(
//       ".ProductDetails-Material"
//     );
//     await itemCardMaterial.waitForExist({ timeoutMsg: "Нет материала товара" });
//   });

//   it("Проверка отображения сообщения о добавлении товара в корзину ", async function ({ browser }) {
//     await browser.setWindowSize(1366, 768);
//     await browser.url("http://localhost:3000/hw/store/cart");

//     const activeNavbar = await browser.$(".navbar-nav > .nav-link.active");
//     const activeNavbarText = await activeNavbar.getText();
//     if (activeNavbarText.includes("(")) {
//       const cartClearBtn = await browser.$(".Cart-Clear");
//       await cartClearBtn.waitForExist();
//       await cartClearBtn.click();
//     }

//     await browser.url("http://localhost:3000/hw/store/catalog");

//     const itemCard = await browser.$$(".ProductItem.card.w-100.mb-4")[0];
//     await itemCard.waitForExist({ timeoutMsg: "Нет карточки товара" });

//     const itemCardLink = await itemCard.$(
//       ".ProductItem-DetailsLink.card-link"
//     );
//     await itemCardLink.waitForExist({
//       timeoutMsg: "У карточки отсутствует ссылка на страницу товара",
//     });

//     await browser.url("http://localhost:3000/hw/store/catalog/0");

//     const itemCardBtn = await browser.$(".ProductDetails-AddToCart");
//     await itemCardBtn.waitForExist({
//       timeoutMsg: "Нет кнопки добавления товара в корзину",
//     });
//     await itemCardBtn.click();

//     const itemCardPageBadge = await browser.$(".CartBadge");
//     await itemCardPageBadge.waitForExist({
//       timeoutMsg:
//         "На странице товара не отображается сообщение о добавлении товара в корзину",
//     });

//     await browser.url("http://localhost:3000/hw/store/catalog");

//     const itemCardBadge = await browser.$(".CartBadge");
//     await itemCardBadge.waitForExist({
//       timeoutMsg:
//         "На странице со всеми товарами у карточки не отображается сообщение о добавлении товара в корзину",
//     });
//   });

//   it("Проверка сохранения содержимого страницы при перезагрузке", async function ({
//     browser,
//   }) {
//     await browser.setWindowSize(1366, 768);

//     await browser.url("http://localhost:3000/hw/store/cart");

//     const activeNavbar = await browser.$(".navbar-nav > .nav-link.active");
// 	await activeNavbar.waitForExist()
//     const activeNavbarText = await activeNavbar.getText();
//     if (activeNavbarText.includes("(")) {
//       const cartClearBtn = await browser.$(".Cart-Clear");
//       await cartClearBtn.waitForExist();
//       await cartClearBtn.click();
//     }

//     await browser.url("http://localhost:3000/hw/store/catalog");

//     const catalogMock = await browser.mock(
//       "http://localhost:3000/hw/store/api/products"
//     );
//     await catalogMock.respond(
//       '[{"id":0,"name":"item1","price":30}]'
//     );

//     const catalogMock1 = await browser.mock(
//       "http://localhost:3000/hw/store/api/products/0"
//     );
//     await catalogMock1.respond(
//       '{"id":0,"name":"item1","description":"itemdescr1","price":30,"color":"color1","material":"material1"}'
//     );

//     await browser.url("http://localhost:3000/hw/store/catalog/0");

//     const productDetails = await browser.$(".ProductDetails.row");
//     await productDetails.waitForExist({ timeoutMsg: "Нет карточки" });

//     const productDetailsName = await productDetails.$(".ProductDetails-Name");
//     await productDetailsName.waitForExist({ timeoutMsg: "Нет заголовка" });

//     const productDetailsPrice = await productDetails.$(
//       ".ProductDetails-Price"
//     );
//     await productDetailsPrice.waitForExist({ timeoutMsg: "Нет цены" });

//     const addItemtoCart = await browser.$(".ProductDetails-AddToCart");
//     await addItemtoCart.waitForExist();
//     await addItemtoCart.click();

//     await browser.url("http://localhost:3000/hw/store/cart");

//     const cartTable = await browser.$(".Cart-Table.table");
//     await cartTable.waitForExist();

//     const cartTableName = await cartTable.$$(".Cart-Name")[0];
//     const textBefore = await cartTableName.getText();

//     await browser.refresh();

//     const cartTableAfter = await browser.$(".Cart-Table.table");
//     await cartTableAfter.waitForExist();

//     const cartTableItemAfter = await cartTableAfter.$$(".Cart-Name")[0];
//     const textAfter = await cartTableItemAfter.getText();

//     expect(textBefore).toEqual(textAfter);
//   });

//   it("При повторном добавлении товара в корзину, количество в корзине увеличивается", async function ({
//     browser,
//   }) {
//     await browser.setWindowSize(1366, 768);
//     await browser.url("http://localhost:3000/hw/store/cart");

//     const activeNavbar = await browser.$(".navbar-nav > .nav-link.active");
// 	await activeNavbar.waitForExist()
//     const activeNavbarText = await activeNavbar.getText();
//     if (activeNavbarText.includes("(")) {
//       const cartClearBtn = await browser.$(".Cart-Clear");
//       await cartClearBtn.waitForExist();
//       await cartClearBtn.click();
//     }

//     await browser.url("http://localhost:3000/hw/store/catalog/0");

//     const addItemtoCart = await browser.$(".ProductDetails-AddToCart");
//     await addItemtoCart.waitForExist();
//     await addItemtoCart.click();

//     await browser.url("http://localhost:3000/hw/store/cart");

//     const cartCount = await browser.$$(".Cart-Count")[0];
//     await cartCount.waitForExist();
//     const cartCountPrev = Number(await cartCount.getText());

//     await browser.url("http://localhost:3000/hw/store/catalog/0");

//     await addItemtoCart.waitForExist();
//     await addItemtoCart.click();

//     await browser.url("http://localhost:3000/hw/store/cart");

//     const cartCountCurrEl = await browser.$$(".Cart-Count")[0];
//     await cartCountCurrEl.waitForExist();
//     const cartCountCurr = Number(await cartCountCurrEl.getText());

//     expect(cartCountCurr).toBeGreaterThan(cartCountPrev);
//   });


// })