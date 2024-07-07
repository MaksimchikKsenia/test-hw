const React = require("react");
const { render, screen, fireEvent } = require("@testing-library/react");
const { Provider } = require("react-redux");
const { BrowserRouter } = require("react-router-dom");
const { createStore } = require("redux");
const { Application } = require("../../src/client/Application");
require("@testing-library/jest-dom");

const basename = "/";
const initState = { cart: {} };
const store = createStore(() => initState);

describe("Проверка общих требований", () => {
  it('Проверка закрытия бургер-меню', () => {
    const app = (
      <BrowserRouter basename={basename}>
        <Provider store={store}>
          <Application />
        </Provider>
      </BrowserRouter>
    );

    const { container } = render(app);

    const catalog = screen.queryByRole("link", { name: /Catalog/i });
    fireEvent.click(catalog);
    const menu = container.getElementsByClassName("Application-Menu")[0];
    expect(menu).toHaveClass("collapse");
  });


  it("Проверка отображений ссылок на страницы и корзину", () => {
    render(
      <BrowserRouter basename={basename}>
        <Provider store={store}>
          <Application />
        </Provider>
      </BrowserRouter>
    );

    const catalog = screen.queryByRole("link", { name: /Catalog/i });
    expect(catalog.getAttribute("href")).toBe("/catalog");

    const delivery = screen.queryByRole("link", { name: /Delivery/i });
    expect(delivery.getAttribute("href")).toBe("/delivery");

    const contacts = screen.queryByRole("link", { name: /Contacts/i });
    expect(contacts.getAttribute("href")).toBe("/contacts");

    const cart = screen.queryByRole("link", { name: /cart/i });
    expect(cart.getAttribute("href")).toBe("/cart");
  });


  it("Проверка перехода на главную при нажатии на название сайта", () => {
    render(
      <BrowserRouter basename={basename}>
        <Provider store={store}>
          <Application />
        </Provider>
      </BrowserRouter>
    );
    const header = screen.queryByRole("link", { name: /Kogtetochka store/i });
    expect(header.getAttribute("href")).toBe("/");
  });
});
