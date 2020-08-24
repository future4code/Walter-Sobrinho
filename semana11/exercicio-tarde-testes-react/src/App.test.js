import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import App from "./App";
import Post from "./components/Post";

describe("Testando funções do submit", () => {
  it("O usuário deve ser capaz de criar novos posts", () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<App />);
    const input = getByPlaceholderText(/Novo post/);

    fireEvent.change(input, { target: { value: "novo post" } });

    const botao = getByText(/adicionar/i);
    fireEvent.click(botao);

    expect(getByText(/novo post/i)).toBeVisible();
  });

  it("o usuário deve ser capaz de curtir um post", () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<App />);
    const input = getByPlaceholderText(/Novo post/);

    fireEvent.change(input, { target: { value: "novo post" } });

    const botao = getByText(/adicionar/i);
    fireEvent.click(botao);

    expect(getByText(/novo post/i)).toBeVisible();

    const curtir = getByText(/curtir/i);

    expect(curtir).toBeVisible();

    fireEvent.click(curtir);

    const descurtir = getByTestId("like-button");

    expect(descurtir).toBeVisible();
  });

  it("o usuário deve ser capaz de apagar um post", async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<App />);
    const input = getByPlaceholderText(/Novo post/);

    fireEvent.change(input, { target: { value: "novo post" } });

    const botao = getByText(/adicionar/i);

    fireEvent.click(botao);

    expect(getByText(/apagar/i)).toBeVisible();

    const apagar = getByText(/apagar/i);

    await fireEvent.click(apagar);

    expect(apagar).not.toBeInTheDocument();
  });
});
