import React from "react";
import {
  render,
  getByPlaceholderText,
  fireEvent,
} from "@testing-library/react";
import App from "./App";
import axios from "axios";

axios.get = jest.fn();

describe("testes de renderização dos elementos", () => {
  it("que testa a renderização do header", () => {
    const utils = render(<App />);

    const header = utils.getByText(/stoned/i);

    expect(header).toBeVisible();
  });

  it("que testa a renderização do form", () => {
    const utils = render(<App />);

    const text = utils.getByPlaceholderText(/digite/);

    expect(text).toBeVisible();
  });

  it("que testa a renderização dos dias da semana", () => {
    const utils = render(<App />);

    const dia = utils.getByTestId(/div-segunda/);

    expect(dia).toBeVisible();
  });
});

describe("testes de manipulação form", () => {
  it("teste de funcionalidade para o form", () => {
    const { getByPlaceholderText, getByTestId } = render(<App />);

    const input = getByPlaceholderText(/digite/);
    fireEvent.change(input, {
      target: {
        value: "be yourself; everyone else is already taken",
      },
    });

    const select = getByTestId(/select-days/);
    fireEvent.change(select, {
      target: {
        value: "quarta-feira",
      },
    });

    expect(input).toHaveValue(/yourself/i);
  });
});
