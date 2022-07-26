import { render } from "@testing-library/react";
import App from "../App";

test('it should render correctly', () => {
  const { asFragment } = render(<App/>);
  expect(asFragment()).toMatchSnapshot();
});