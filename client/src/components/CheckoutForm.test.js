import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  expect(screen.queryByText(/Checkout Form/i)).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  //retrieve form info
  const fName = screen.getByLabelText(/first name:/i);
  const lName = screen.getByLabelText(/last name:/i);
  const address = screen.getByLabelText(/address:/i);
  const city = screen.getByLabelText(/city:/i);
  const state = screen.getByLabelText(/state:/i);
  const zip = screen.getByLabelText(/zip/i);
  const button = screen.getByRole("button");

  //type value into inputs
  userEvent.type(fName, "Patrice");
  userEvent.tab();
  expect(fName).toHaveValue("Patrice");
  userEvent.type(lName, "Jean");
  userEvent.tab();
  expect(lName).toHaveValue("Jean");
  userEvent.type(address, "311 50th ave east");
  userEvent.tab();
  expect(address).toHaveValue("311 50th ave east");
  userEvent.type(city, "Bradenton");
  userEvent.tab();
  expect(city).toHaveValue("Bradenton");
  userEvent.type(state, "Florida");
  userEvent.tab();
  expect(state).toHaveValue("Florida");
  userEvent.type(zip, "34205");
  expect(zip).toHaveValue("34205");
  //submit form
  userEvent.click(button);
  console.log(
    expect(await screen.findByTestId("successMessage")).toBeInTheDocument()
  );
});
