import React from "react";

import { Application } from "../../src/client/Application";
import { ExampleApi, CartApi } from "../../src/client/api";
import { initStore } from "../../src/client/store";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Cart } from "../../src/client/pages/Cart";
import { createStore } from "redux";

const basename = "/";

describe("Тестирование функциональности корзины", () => {
  it("Проверка количества товаров в корзине", () => {
    const initState = {
      cart: [
        { id: 1, name: "item1", price: 30, count: 1 },
        { id: 2, name: "item2", price: 70, count: 2 },
      ],
      products: [
        { id: 1, name: "item1", price: 30 },
        { id: 2, name: "item2", price: 70 },
        { id: 3, name: "item3", price: 100 },
      ],
    };
    const store = createStore(() => initState);

    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <Provider store={store}>
          <Application />
        </Provider>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", { name: /Cart \(2\)/i })
    ).toBeInTheDocument();
  });

  it("Проверка корзины если она пустая", () => {
    const initState = {
      cart: [],
      products: [
        { id: 1, name: "item1", price: 30 },
        { id: 2, name: "item2", price: 70 },
        { id: 3, name: "item3", price: 100 },
      ],
    };
    const store = createStore(() => initState);

    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <Provider store={store}>
          <Application />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /Cart/i }).textContent).toBe(
      "Cart"
    );
  });

  it("Проверка отображения таблицы товаров в корзине", () => {
    const initState = {
      cart: [
        { id: 1, name: "item1", price: 30, count: 2 },
        { id: 2, name: "item2", price: 70, count: 3 },
      ],
      products: [
        { id: 1, name: "item1", price: 30 },
        { id: 2, name: "item2", price: 70 },
        { id: 3, name: "item3", price: 100 },
      ],
    };
    const store = createStore(() => initState);

    const app = (
      <MemoryRouter initialEntries={["/cart"]}>
        <Provider store={store}>
          <Application />
        </Provider>
      </MemoryRouter>
    );

    const { container } = render(app);

    const cartTable = container.getElementsByClassName("table")[0];
    expect(cartTable).toBeInTheDocument();

    expect(screen.getByRole("cell", { name: /item1/i })).toBeInTheDocument();
    expect(container.getElementsByClassName("Cart-Count")[0].textContent).toBe(
      "2"
    );
    expect(screen.queryByText("$60")).toBeInTheDocument();

    expect(screen.getByRole("cell", { name: /item2/i })).toBeInTheDocument();
    expect(container.getElementsByClassName("Cart-Count")[1].textContent).toBe(
      "3"
    );
    expect(screen.queryByText("$210")).toBeInTheDocument();

    expect(
      container.getElementsByClassName("Cart-OrderPrice")[0].textContent
    ).toBe("$270");

    expect(screen.getByTestId("1")).toBeInTheDocument();
  });

  it(`Проверка кнопки для очистки корзины`, () => {
    const initState = {
      0: { name: "item1", count: 1, price: 30 },
      1: { name: "item2", count: 2, price: 70 },
      2: { name: "item3", count: 3, price: 100 },
    };
    const basename = "/hw/store";

    const api = new ExampleApi(basename);
    const cart = new CartApi();
    cart.setState(initState);
    const store = initStore(api, cart);

    const {} = render(
      <MemoryRouter initialEntries={["/cart"]}>
        <Provider store={store}>
          <Application />
        </Provider>
      </MemoryRouter>
    );

    const btn = screen.getByRole("button", { name: /Clear shopping cart/i });
    expect(btn).toBeInTheDocument();

    expect(screen.queryByText("item1")).toBeInTheDocument();
    expect(screen.queryByText("item2")).toBeInTheDocument();
    expect(screen.queryByText("item3")).toBeInTheDocument();

    fireEvent.click(btn);

    expect(screen.queryByText("item1")).not.toBeInTheDocument();
    expect(screen.queryByText("item2")).not.toBeInTheDocument();
    expect(screen.queryByText("item3")).not.toBeInTheDocument();
  });

  it("Наличие ссылки на каталог товаров  в корзине, если корзина пустая", async () => {
    const initState = {
      cart: {},
    };
    const store = createStore(() => initState);

    render(
      <BrowserRouter basename={basename}>
        <Provider store={store}>
          <Cart />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.queryByRole("link", { name: "catalog" })).toHaveAttribute(
      "href",
      "/catalog"
    );
  });
});
