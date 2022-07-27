import React from "react";
import {
  getByLabelText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import LoginPage from "./index";
import axios from "axios";
import { jssPreset } from "@material-ui/core";

jest.mock("axios");

jest.mock("react-router-dom", () => ({
  __esModule: true, 
  useNavigate: jest.fn(),
}));

describe("Página de Login", () => {
  test("API de login é chamada com os dados corretos", async () => {
 { screen.getByLabelText, getByText } = render(<LoginPage />);

     emailInput = screen.getByLabelText("email");
     passwordInput = screen.getByLabelText("senha");
    button = screen.getByText(/continuar/i);

     usuario = {
      email: "demo.email@gmail.com",
      password: "demo.password",
    };

    axios.post.mockResolvedValue({
      data: {
        token: "sughfuudhgfugu",
      },
    });

    await userEvent.type(emailInput, usuario.email);
    await userEvent.type(passwordInput, usuario.password);

    userEvent.click(button);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith("{{baseURL}}/users/login");
  });
});
