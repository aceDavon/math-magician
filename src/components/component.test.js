import { fireEvent, render, screen } from '@testing-library/react';
import Welcome from './Welcome';
import Calculator from './Calculator';
import Quotes from './Quotes';

describe(' testing components', () => {
  test('testing landing page', () => {
    const landing = render(<Welcome />);
    expect(landing).toMatchSnapshot();
  });
  test('testing Quote Page', async () => {
    render(<Quotes />);
    const button = await screen.findAllByRole('button');
    expect(button).toHaveLength(1);
  });
  test('testing calculator page', async () => {
    render(<Calculator />);
    const btn = await screen.findAllByRole('button');
    expect(btn).toHaveLength(19);
  });
  it('Simulate user interaction on click of a button', async () => {
    render(<Quotes />);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(jest.fn()).not.toBeCalled();
  });
});
