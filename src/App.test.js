import { render, screen } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom/extend-expect';

jest.mock("axios", () => ({
  get: jest.fn().mockResolvedValue([]),
}));

test("renders learn react link", () => {
  render(<App />);
  expect(screen.getByText('Preqin Data Arena')).toBeInTheDocument();
});
