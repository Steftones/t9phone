import { render } from "@testing-library/react";
import NotFound from "../../components/NotFound"

describe('NotFound', () => {
  test('it should render correctly', () => {
    const { asFragment } = render(<NotFound/>);
    expect(asFragment()).toMatchSnapshot();
  });
});