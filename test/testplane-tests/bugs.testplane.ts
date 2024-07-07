// describe("Проверка тестов для багов", async function () {
//   //for bug 1
//   it("Проверка названия товара в каталоге", async function ({ browser }) {
//     await browser.url("http://localhost:3000/hw/store/catalog");
//     const productItemName = await browser.$(".ProductItem-Name");
//     await productItemName.waitForExist();

//     expect(await productItemName.getText()).not.toBe("");
//   });

//   // for bug 3

//   it("Проверка отображения товара", async function ({ browser }) {
//     await browser.url("http://localhost:3000/hw/store/catalog/1");

//     const product = await browser.$(".Product");
//     await product.waitForExist();

//     expect(await product.getText()).not.toEqual("LOADING");
//   });

//   // for bug 4

//   it("Закрытие гамбургер-меню", async function ({ browser }) {
//     await browser.setWindowSize(400, 1080);
//     await browser.url("http://localhost:3000/hw/store/");

//     const menu = await browser.$(".Application-Menu");
//     await menu.waitForExist();

//     const toggler = await browser.$(".Application-Toggler");
//     await toggler.waitForExist();

//     await toggler.click();

//     const link = await menu.$$(".nav-link")[0];
//     await link.waitForExist();

//     await link.click();
//     const menuClasses = await menu.getAttribute("class");
//     const menuCollapse = menuClasses.split(" ").includes("collapse");
//     expect(menuCollapse).toBe(true);
//   });

//   // for bug 9

//   it(" Проверка на изменение размера кнопки на странице товара", async function ({
//     browser,
//   }) {
//     const mockProduct =
//       '{"id":0,"name":"item1","description":"item1descr","price":30,"color":"color1","material":"material1"}';
//     const productMock = await browser.mock(
//       "http://localhost:3000/hw/store/api/products/0"
//     );
//     await productMock.respond(mockProduct);

//     await browser.url("http://localhost:3000/hw/store/catalog/0");

//     const appElem = await browser.$(".Application");

//     await appElem.assertView("plain", {
//       ignoreElements: [
//         ".ProductDetails-Name",
//         ".ProductDetails-Description",
//         ".ProductDetails-Color",
//         ".ProductDetails-Price",
//         ".ProductDetails-Material",
//         ".navbar",
//         ".CartBadge",
//       ],
//       compositeImage: true,
//     });
//   });

//   //for bugs 2, 5, 6, 7, 8, 10

//   it("Проверка заполнения формы", async function ({ browser }) {
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

//     const catalogMock = await browser.mock(
//       "http://localhost:3000/hw/store/api/products"
//     );
//     await catalogMock.respond('[{"id":0,"name":"item1","price":30}]');

//     await browser.url("http://localhost:3000/hw/store/catalog/0");
//     const addItemtoCart = await browser.$(".ProductDetails-AddToCart");
//     await addItemtoCart.waitForExist();
//     await addItemtoCart.click();
//     await browser.url("http://localhost:3000/hw/store/cart");

//     const formName = await browser.$(".Form-Field_type_name");
//     await formName.waitForExist();
//     await formName.setValue("person");

//     const formPhone = await browser.$(".Form-Field_type_phone");
//     await formPhone.waitForExist();
//     await formPhone.setValue("+375291111111");

//     const formAdress = await browser.$(".Form-Field_type_address");
//     await formAdress.waitForExist();
//     await formAdress.setValue("address");

//     const formSubmit = await browser.$(".Form-Submit");
//     await formSubmit.waitForExist();
//     await formSubmit.click();
//     const alertDanger = await browser.$(".Cart-SuccessMessage");
//     const alertDangerClasses = await alertDanger.getAttribute("class");
//     const isAlert = alertDangerClasses.split(" ").includes("alert-danger");
//     expect(isAlert).toBe(false);

//     const cartId = await browser.$(".Cart-Number");
//     await cartId.waitForExist();
//     expect(await cartId.getText()).toEqual("1");
//   });
// });
