import { render } from "@testing-library/react";
import Main from "../../components/Main"

describe('Main', () => {
  test('it should render correctly', () => {
    const { asFragment } = render(<Main />);
    expect(asFragment()).toMatchSnapshot();
  });
});