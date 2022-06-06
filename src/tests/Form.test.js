import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../components/Shop/Form";
import userEvent from "@testing-library/user-event";

describe("testing form section", () => {
  it("render product title", () => {
    const product = { price: 0, colors: "", pcb: "", quantity: "1" };
    const onChangeMock = jest.fn();
    render(<Form item={product} change={onChangeMock} />);

    expect(
      screen.getByRole("heading", { name: /WILBA.TECH Salvation Keyboard/i })
    ).toBeInTheDocument();
  });

  it("update color selection", () => {
    const product = { price: 0, colors: "", pcb: "", quantity: "1" };
    const onChangeMock = jest.fn();
    render(<Form item={product} change={onChangeMock} />);

    const select = screen.getByRole("combobox", { name: /colors/i });

    userEvent.selectOptions(select, "0");

    const option = screen.getByRole("option", {
      name: /Samurai Blue/i,
    }).selected;

    expect(option).toBe(true);
  });

  it("update pcb selection", () => {
    const product = { price: 0, colors: "", pcb: "", quantity: "1" };
    const onChangeMock = jest.fn();
    render(<Form item={product} change={onChangeMock} />);

    const select = screen.getByRole("combobox", { name: /pcb/i });

    userEvent.selectOptions(select, "hotswap");

    const option = screen.getByRole("option", {
      name: /hotswap/i,
    }).selected;

    expect(option).toBe(true);
  });

  it("update quantity", () => {
    const product = { price: 0, colors: "", pcb: "", quantity: "1" };
    const onChangeMock = jest.fn();
    render(<Form item={product} change={onChangeMock} />);

    const quantity = screen.getByRole("spinbutton", { name: /quantity/i });

    userEvent.type(quantity, "{backspace}3");
    expect(quantity.value).toBe("3");
  });
});
