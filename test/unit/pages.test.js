import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import "@testing-library/jest-dom";
import { Home } from "../../src/client/pages/Home";
import { Catalog } from "../../src/client/pages/Catalog";
import { Delivery } from "../../src/client/pages/Delivery";
import { Contacts } from "../../src/client/pages/Contacts";
import { Cart } from "../../src/client/pages/Cart";

const basename = "/";
const initState = { cart: {} };
const store = createStore(() => initState);

describe("Проверка наличия всех страниц магазина", () => {
  it("Наличие главной страницы", () => {
    render(
      <BrowserRouter basename={basename}>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>
    );

    expect(
      screen.queryByRole("heading", { name: "Comfort" })
    ).toBeInTheDocument();
  });

  it("Наличие каталога", () => {
    render(
      <BrowserRouter basename={basename}>
        <Provider store={store}>
          <Catalog />
        </Provider>
      </BrowserRouter>
    );

    expect(
      screen.queryByRole("heading", { name: "Catalog" })
    ).toBeInTheDocument();
  });

  it("Наличие корзины", () => {
    render(
      <BrowserRouter basename={basename}>
        <Provider store={store}>
          <Cart />
        </Provider>
      </BrowserRouter>
    );

    expect(
      screen.queryByRole("heading", { name: "Shopping cart" })
    ).toBeInTheDocument();
  });

  it("Наличие страницы о доставке", () => {
    render(
      <BrowserRouter basename={basename}>
        <Provider store={store}>
          <Delivery />
        </Provider>
      </BrowserRouter>
    );

    expect(
      screen.queryByRole("heading", { name: "Delivery" })
    ).toBeInTheDocument();
  });

  it("Наличие страницы Контакты", () => {
    render(
      <BrowserRouter basename={basename}>
        <Provider store={store}>
          <Contacts />
        </Provider>
      </BrowserRouter>
    );

    expect(
      screen.queryByRole("heading", { name: "Contacts" })
    ).toBeInTheDocument();
  });
});
