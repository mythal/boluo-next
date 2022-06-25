import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render } from '../../../tests/utils';

describe('Button', () => {
  it('click a button', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<button onClick={handleClick}>hello</button>);
    const button = screen.getByText('hello');
    await user.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
